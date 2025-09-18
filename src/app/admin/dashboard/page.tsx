'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

interface Review {
  id: string;
  authorName: string;
  rating: number;
  body: string;
  city?: string;
}

export default function AdminDashboard() {
  const [services, setServices] = useState<Service[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [addingReview, setAddingReview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const router = useRouter();

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
    fetchTeam();
    fetchReviews();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeam = async () => {
    try {
      const response = await fetch('/api/team');
      const data = await response.json();
      setTeam(data);
    } catch (error) {
      console.error('Failed to fetch team:', error);
    }
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      // In this dashboard, edits are saved immediately when performed.
      // This button refreshes data and provides confirmation.
      await Promise.all([fetchServices(), fetchTeam(), fetchReviews()]);
      setSavedAt(Date.now());
    } finally {
      setSaving(false);
      setTimeout(() => setSavedAt(null), 2500);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('Failed to fetch reviews:', e);
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
  };

  const handleSave = async (updatedService: Service) => {
    try {
      const response = await fetch('/api/services', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedService),
      });

      if (response.ok) {
        await fetchServices(); // Refresh the list
        setEditingService(null);
      } else {
        console.error('Failed to update service');
      }
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleAdd = async (newService: Service) => {
    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newService),
      });

      if (response.ok) {
        await fetchServices(); // Refresh the list
        setShowAddForm(false);
      } else {
        console.error('Failed to add service');
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/services?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchServices(); // Refresh the list
      } else {
        console.error('Failed to delete service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleTeamAdd = async (member: Omit<TeamMember, 'id'>) => {
    try {
      const res = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member),
      });
      if (res.ok) {
        await fetchTeam();
      }
    } catch (e) {
      console.error('Failed to add member', e);
    }
  };

  const handleTeamUpdate = async (member: TeamMember) => {
    try {
      const res = await fetch('/api/team', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member),
      });
      if (res.ok) {
        await fetchTeam();
      }
    } catch (e) {
      console.error('Failed to update member', e);
    }
  };

  const handleTeamDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/team?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchTeam();
      }
    } catch (e) {
      console.error('Failed to delete member', e);
    }
  };

  const handleReviewAdd = async (payload: Omit<Review, 'id'>) => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setAddingReview(false);
        await fetchReviews();
      }
    } catch (e) {
      console.error('Failed to add review', e);
    }
  };

  const handleReviewUpdate = async (review: Review) => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      });
      if (res.ok) {
        await fetchReviews();
      }
    } catch (e) {
      console.error('Failed to update review', e);
    }
  };

  const handleReviewDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/reviews?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchReviews();
      }
    } catch (e) {
      console.error('Failed to delete review', e);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '48px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #f3f4f6',
              borderTop: '4px solid #f97316',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px',
            }}
          ></div>
          <p style={{ color: '#64748b' }}>Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e293b',
          }}
        >
          Admin Dashboard
        </h1>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {savedAt && (
            <span style={{
              backgroundColor: '#ecfdf5',
              color: '#065f46',
              border: '1px solid #10b981',
              padding: '6px 10px',
              borderRadius: 8,
              fontSize: '0.8rem',
            }}>Saved</span>
          )}
          <button
            onClick={handleSaveAll}
            disabled={saving}
            style={{
              backgroundColor: saving ? '#fb923c' : '#f97316',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.875rem',
              cursor: saving ? 'not-allowed' : 'pointer',
            }}
          >
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
          <Link
            href="/"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontSize: '0.875rem',
            }}
          >
            View Website
          </Link>
          <button
            onClick={() => router.push('/admin/login')}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Services Management */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
              }}
            >
              Services Management
            </h2>
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Add New Service
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  backgroundColor: '#f8fafc',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '8px',
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    color: '#64748b',
                    fontSize: '0.875rem',
                    marginBottom: '12px',
                    lineHeight: '1.5',
                  }}
                >
                  {service.description}
                </p>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f97316',
                    marginBottom: '16px',
                  }}
                >
                  Starting at ${service.price}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handleEdit(service)}
                    style={{
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Management */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
              }}
            >
              Team Management
            </h2>
            <TeamAddForm onSave={handleTeamAdd} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {team.map((member) => (
              <div
                key={member.id}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '16px',
                  backgroundColor: '#f8fafc',
                }}
              >
                <div style={{ fontWeight: 700, color: '#1e293b' }}>
                  {member.name}
                </div>
                <div
                  style={{ color: '#f97316', fontWeight: 600, marginTop: 4 }}
                >
                  {member.role}
                </div>
                <div
                  style={{ color: '#64748b', fontSize: '0.9rem', marginTop: 8 }}
                >
                  {member.bio}
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  <TeamEditForm member={member} onSave={handleTeamUpdate} />
                  <button
                    onClick={() => handleTeamDelete(member.id)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#f97316',
                marginBottom: '8px',
              }}
            >
              {services.length}
            </div>
            <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Total Services
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#10b981',
                marginBottom: '8px',
              }}
            >
              24/7
            </div>
            <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Availability
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '8px',
              }}
            >
              100%
            </div>
            <div style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Customer Satisfaction
            </div>
          </div>
        </div>

        {/* Reviews Management */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1e293b',
              }}
            >
              Reviews Management
            </h2>
            <button
              onClick={() => setAddingReview(true)}
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Add Review
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  backgroundColor: '#f8fafc',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{rev.authorName}</div>
                  <div style={{ color: '#f97316', fontWeight: 700 }}>{'★'.repeat(rev.rating).padEnd(5, '☆')}</div>
                </div>
                <div style={{ color: '#64748b', marginTop: 8 }}>{rev.body}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  <ReviewEditForm review={rev} onSave={handleReviewUpdate} />
                  <button
                    onClick={() => handleReviewDelete(rev.id)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: 6,
                      border: 'none',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Service Modal */}
      {editingService && (
        <ServiceEditModal
          service={editingService}
          onSave={handleSave}
          onClose={() => setEditingService(null)}
        />
      )}

      {/* Add Service Modal */}
      {showAddForm && (
        <ServiceAddModal
          onSave={handleAdd}
          onClose={() => setShowAddForm(false)}
        />
      )}

      {/* Add Review Modal */}
      {addingReview && (
        <ReviewAddModal onSave={handleReviewAdd} onClose={() => setAddingReview(false)} />
      )}
    </div>
  );
}

// Service Edit Modal Component
function ServiceEditModal({
  service,
  onSave,
  onClose,
}: {
  service: Service;
  onSave: (service: Service) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState(service);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          width: '90%',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '24px',
          }}
        >
          Edit Service
        </h3>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Service Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Starting Price ($)
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Service Add Modal Component
function ServiceAddModal({
  onSave,
  onClose,
}: {
  onSave: (service: Service) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    icon: 'default',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData as Service);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          width: '90%',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '24px',
          }}
        >
          Add New Service
        </h3>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Service Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px',
              }}
            >
              Starting Price ($)
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function TeamAddForm({
  onSave,
}: {
  onSave: (m: Omit<TeamMember, 'id'>) => void;
}) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({ name, role, bio });
        setName('');
        setRole('');
        setBio('');
      }}
      style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
        }}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
        }}
      />
      <input
        placeholder="Short bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          minWidth: 240,
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#f97316',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 6,
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Add Member
      </button>
    </form>
  );
}

function TeamEditForm({
  member,
  onSave,
}: {
  member: TeamMember;
  onSave: (m: TeamMember) => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [bio, setBio] = useState(member.bio);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '8px 12px',
          borderRadius: 6,
          border: 'none',
          fontSize: '0.8rem',
          cursor: 'pointer',
        }}
      >
        Edit
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ id: member.id, name, role, bio });
          setOpen(false);
        }}
        style={{
          background: 'white',
          padding: 24,
          borderRadius: 12,
          width: 420,
        }}
      >
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>
          Edit Member
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
            }}
          />
          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
            }}
          />
          <textarea
            placeholder="Short bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            rows={4}
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              resize: 'vertical',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'flex-end',
            marginTop: 16,
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: '#6b7280',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 6,
              border: 'none',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 6,
              border: 'none',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

function ReviewAddModal({
  onSave,
  onClose,
}: {
  onSave: (r: Omit<Review, 'id'>) => void;
  onClose: () => void;
}) {
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [body, setBody] = useState('');
  const [city, setCity] = useState('');

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ authorName, rating, body, city: city || undefined });
        }}
        style={{ background: 'white', padding: 24, borderRadius: 12, width: 420 }}
      >
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>Add Review</div>
        <div style={{ display: 'grid', gap: 12 }}>
          <input placeholder="Author name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
          <input type="number" min={1} max={5} placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(Number(e.target.value))} required style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
          <textarea placeholder="Review text" value={body} onChange={(e) => setBody(e.target.value)} required rows={4} style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, resize: 'vertical' }} />
          <input placeholder="City (optional)" value={city} onChange={(e) => setCity(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <button type="button" onClick={onClose} style={{ backgroundColor: '#6b7280', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>Cancel</button>
          <button type="submit" style={{ backgroundColor: '#f97316', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>Add</button>
        </div>
      </form>
    </div>
  );
}

function ReviewEditForm({
  review,
  onSave,
}: {
  review: Review;
  onSave: (r: Review) => void;
}) {
  const [open, setOpen] = useState(false);
  const [authorName, setAuthorName] = useState(review.authorName);
  const [rating, setRating] = useState(review.rating);
  const [body, setBody] = useState(review.body);
  const [city, setCity] = useState(review.city || '');

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}
      >
        Edit
      </button>
    );
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ id: review.id, authorName, rating, body, city: city || undefined });
          setOpen(false);
        }}
        style={{ background: 'white', padding: 24, borderRadius: 12, width: 420 }}
      >
        <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>Edit Review</div>
        <div style={{ display: 'grid', gap: 12 }}>
          <input placeholder="Author name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
          <input type="number" min={1} max={5} placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(Number(e.target.value))} required style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
          <textarea placeholder="Review text" value={body} onChange={(e) => setBody(e.target.value)} required rows={4} style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, resize: 'vertical' }} />
          <input placeholder="City (optional)" value={city} onChange={(e) => setCity(e.target.value)} style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <button type="button" onClick={() => setOpen(false)} style={{ backgroundColor: '#6b7280', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>Cancel</button>
          <button type="submit" style={{ backgroundColor: '#f97316', color: 'white', padding: '8px 12px', borderRadius: 6, border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>Save</button>
        </div>
      </form>
    </div>
  );
}
