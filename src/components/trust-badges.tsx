import { Shield, Clock, Award, Users } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind',
    },
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Available 7 days a week for emergency repairs',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All work backed by our satisfaction guarantee',
    },
    {
      icon: Users,
      title: 'Local Experts',
      description: 'Serving the community for years with trusted service',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
