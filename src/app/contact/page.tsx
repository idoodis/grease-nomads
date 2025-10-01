'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [services, setServices] = useState<Array<{ id: string; name: string }>>([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch('/api/services', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          // Normalize to id/name for dropdown; API has name and id
          setServices(
            Array.isArray(data)
              ? data.map((s: any) => ({ id: String(s.id), name: String(s.name) }))
              : []
          );
        }
      } catch (_e) {
        // ignore and fall back to static options
      }
    };
    loadServices();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          service: formData.service || undefined,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        let errorMessage = 'Unknown error occurred';
        try {
          const errorData = await response.json();
          console.error('Form submission error:', errorData);
          const serverErrorMessage = errorData.error || errorData.message || 'Server error';
          setErrorMessage(serverErrorMessage);
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
          try {
            const responseText = await response.text();
            console.log('Response text:', responseText);
            setErrorMessage(responseText || 'Failed to parse server response');
          } catch (textError) {
            console.error('Failed to get response text:', textError);
            setErrorMessage(`Server returned status ${response.status}`);
          }
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Network error. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          Contact Grease Nomads | ASE Certified Mobile Mechanics | Chicago
        </title>
        <meta
          name="description"
          content="Contact Grease Nomads for professional ASE certified mobile mechanic services in Chicago. Get a free quote, call 224-652-7264, or email contact@greasenomads.com."
        />
        <meta
          name="keywords"
          content="contact mobile mechanic, ASE certified auto repair, Chicago mechanic contact, free quote, emergency service"
        />
        <link rel="canonical" href="https://greasenomads.com/contact" />
      </Head>
      <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
        {/* Header */}
        <header
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 30%, #f97316 70%, #f97316 100%)',
            color: 'white',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div
            className="logo-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            <img
              src="/logo.png"
              alt="Grease Nomads - ASE Certified Mobile Mechanics"
              style={{
                height: '80px',
                width: 'auto',
                marginRight: '16px',
              }}
            />
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
              Contact Grease Nomads
            </h1>
          </div>
          <p style={{ color: '#cbd5e1', marginTop: '8px' }}>
            Get in touch for Professional, Reliable Mobile Mechanic Service.
          </p>
        </header>

        {/* Contact Form Section */}
        <section
          style={{
            padding: '80px 20px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundColor: '#0f1115',
              padding: '48px',
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#f3f4f6',
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              Get Your Free Quote
            </h2>

            {submitStatus === 'success' && (
              <div
                style={{
                  backgroundColor: '#052e1a',
                  border: '1px solid #10b981',
                  color: '#34d399',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                style={{
                  backgroundColor: '#3b0a0a',
                  border: '1px solid #ef4444',
                  color: '#fecaca',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                ❌ {errorMessage || 'Sorry, there was an error sending your message. Please try again or call us at 224-652-7264.'}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#e5e7eb',
                      marginBottom: '8px',
                    }}
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0a0a0a',
                      color: '#e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
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
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0a0a0a',
                      color: '#e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#e5e7eb',
                    marginBottom: '8px',
                  }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: '#0a0a0a',
                    color: '#e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#e5e7eb',
                    marginBottom: '8px',
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: '#0a0a0a',
                    color: '#e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#e5e7eb',
                    marginBottom: '8px',
                  }}
                >
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: '#0a0a0a',
                    color: '#e5e7eb',
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="diagnostics">Diagnostics</option>
                  <option value="repairs">Repairs</option>
                  <option value="modifications">Modifications</option>
                  <option value="pre-purchase-inspection">Pre-Purchase Inspection</option>
                  <option value="roadside-assistance">Roadside Assistance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#e5e7eb',
                    marginBottom: '8px',
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your vehicle and what service you need..."
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    backgroundColor: '#0a0a0a',
                    color: '#e5e7eb',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? '#94a3b8' : '#f97316',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info Section */}
        <section
          style={{
            backgroundColor: '#0a0a0a',
            padding: '80px 20px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#f9fafb',
                  marginBottom: '16px',
                }}
              >
                Get In Touch
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                Multiple ways to reach us for your automotive needs
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#0f1115',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                  }}
                >
                  Call Us
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Available 7 days a week
                </p>
                <a
                  href="tel:+12246527264"
                  style={{
                    color: '#f97316',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  224-652-7264
                </a>
              </div>

              <div
                style={{
                  backgroundColor: '#0f1115',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                  }}
                >
                  Email Us
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  Send us a message anytime
                </p>
                <a
                  href="mailto:contact@greasenomads.com"
                  style={{
                    color: '#f97316',
                    fontSize: '1rem',
                    textDecoration: 'none',
                  }}
                >
                  contact@greasenomads.com
                </a>
              </div>

              <div
                style={{
                  backgroundColor: '#0f1115',
                  padding: '32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                  }}
                >
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#f3f4f6',
                    marginBottom: '8px',
                  }}
                >
                  Service Area
                </h3>
                <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                  We come to you
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  Around the Chicago area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #000000 30%, #f97316 70%, #f97316 100%)',
            color: 'white',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <img
                src="/logo.png"
                alt="Grease Nomads - ASE Certified Mobile Mechanics"
                style={{
                  height: '60px',
                  width: 'auto',
                  marginRight: '12px',
                }}
              />
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: 0,
                }}
              >
                Grease Nomads
              </h3>
            </div>
            <p
              style={{
                color: '#cbd5e1',
                marginBottom: '24px',
              }}
            >
              Professional mobile mechanic services delivered directly to your
              location
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                marginBottom: '24px',
              }}
            >
              <Link
                href="/"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                Home
              </Link>
              <a
                href="/contact"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                Contact
              </a>
              <a
                href="tel:+12246527264"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                Call 224-652-7264
              </a>
            </div>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.875rem',
              }}
            >
              © 2024 Grease Nomads. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
