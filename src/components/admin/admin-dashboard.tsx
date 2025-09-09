'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Settings,
  Users,
  Wrench,
  MapPin,
  Star,
  HelpCircle,
  MessageSquare,
  LogOut,
  BarChart3,
} from 'lucide-react';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/admin/login');
    toast({
      title: 'Signed Out',
      description: 'You have been successfully signed out.',
    });
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'company', name: 'Company Info', icon: Settings },
    { id: 'services', name: 'Services', icon: Wrench },
    { id: 'areas', name: 'Service Areas', icon: MapPin },
    { id: 'reviews', name: 'Reviews', icon: Star },
    { id: 'faqs', name: 'FAQs', icon: HelpCircle },
    { id: 'inquiries', name: 'Inquiries', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-heading font-bold text-secondary-900">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => router.push('/')}>
                View Site
              </Button>
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    Dashboard Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-primary/10 p-6 rounded-xl">
                      <div className="flex items-center">
                        <Wrench className="w-8 h-8 text-primary" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            Services
                          </p>
                          <p className="text-2xl font-bold text-secondary-900">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <div className="flex items-center">
                        <MapPin className="w-8 h-8 text-blue-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            Service Areas
                          </p>
                          <p className="text-2xl font-bold text-secondary-900">
                            4
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl">
                      <div className="flex items-center">
                        <Star className="w-8 h-8 text-yellow-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            Reviews
                          </p>
                          <p className="text-2xl font-bold text-secondary-900">
                            5
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <div className="flex items-center">
                        <MessageSquare className="w-8 h-8 text-green-600" />
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-600">
                            FAQs
                          </p>
                          <p className="text-2xl font-bold text-secondary-900">
                            8
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-heading font-semibold text-secondary-900 mb-4">
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        onClick={() => setActiveTab('company')}
                        className="h-auto p-4 flex flex-col items-start"
                      >
                        <Settings className="w-6 h-6 mb-2" />
                        <span className="font-medium">Update Company Info</span>
                        <span className="text-sm opacity-80">
                          Edit business details and contact info
                        </span>
                      </Button>
                      <Button
                        onClick={() => setActiveTab('services')}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start"
                      >
                        <Wrench className="w-6 h-6 mb-2" />
                        <span className="font-medium">Manage Services</span>
                        <span className="text-sm opacity-80">
                          Add, edit, or remove services
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'company' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    Company Information
                  </h2>
                  <p className="text-gray-600">
                    Company information management will be implemented here.
                  </p>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    Services Management
                  </h2>
                  <p className="text-gray-600">
                    Services management will be implemented here.
                  </p>
                </div>
              )}

              {activeTab === 'areas' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    Service Areas
                  </h2>
                  <p className="text-gray-600">
                    Service areas management will be implemented here.
                  </p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    Reviews Management
                  </h2>
                  <p className="text-gray-600">
                    Reviews management will be implemented here.
                  </p>
                </div>
              )}

              {activeTab === 'faqs' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    FAQs Management
                  </h2>
                  <p className="text-gray-600">
                    FAQs management will be implemented here.
                  </p>
                </div>
              )}

              {activeTab === 'inquiries' && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">
                    Customer Inquiries
                  </h2>
                  <p className="text-gray-600">
                    Customer inquiries management will be implemented here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

