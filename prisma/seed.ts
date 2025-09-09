import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@greasenomads.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Admin User',
      email: adminEmail,
      passwordHash: hashedPassword,
      role: 'admin',
    },
  });

  console.log('✅ Admin user created:', adminUser.email);

  // Create company info
  const companyInfo = await prisma.companyInfo.upsert({
    where: { id: 'company-1' },
    update: {},
    create: {
      id: 'company-1',
      name: 'Grease Nomads',
      phone: '(312) 208-5007',
      email: 'Z@Greasenomads.com',
      hours: 'Mon–Sat 8am–7pm',
      heroTitle: 'Mobile Mechanics. Pro Service. Fair Prices.',
      heroSubtitle:
        'Professional automotive services delivered directly to your location in Des Plaines, Schaumburg, Hoffman Estates, and Chicago. From routine maintenance to complex repairs, we bring the expertise to you.',
      heroCTA: 'Get Your Free Quote Today',
      address: 'Serving the Greater Chicago Area',
    },
  });

  console.log('✅ Company info created');

  // Create services
  const services = [
    {
      name: 'Maintenance',
      slug: 'maintenance',
      description:
        'Keep your vehicle running smoothly with our comprehensive maintenance services.',
      longDescription:
        'Regular maintenance is key to keeping your vehicle reliable and extending its lifespan. Our mobile mechanics provide oil changes, filter replacements, fluid checks, brake inspections, and more at your location.',
      basePrice: 89,
      priceUnit: 'starting',
      isFeatured: true,
    },
    {
      name: 'Diagnosis',
      slug: 'diagnosis',
      description:
        'Professional diagnostic services to identify and resolve vehicle issues.',
      longDescription:
        'When your vehicle is showing warning signs or check engine lights, our advanced diagnostic equipment can quickly identify the problem. We provide detailed reports and transparent pricing for all recommended repairs.',
      basePrice: 125,
      priceUnit: 'starting',
      isFeatured: true,
    },
    {
      name: 'Performance Modifications',
      slug: 'performance-modifications',
      description:
        "Enhance your vehicle's performance with professional modifications.",
      longDescription:
        'From engine tuning to suspension upgrades, our certified technicians can help you get the most out of your vehicle. We work with quality parts and provide warranties on all modifications.',
      basePrice: 299,
      priceUnit: 'starting',
      isFeatured: false,
    },
    {
      name: 'Roadside Assistance',
      slug: 'roadside-assistance',
      description: '24/7 emergency roadside assistance when you need it most.',
      longDescription:
        'Battery jumps, tire changes, lockout service, and emergency repairs. Our mobile mechanics are available around the clock to get you back on the road safely.',
      basePrice: 75,
      priceUnit: 'starting',
      isFeatured: true,
    },
    {
      name: 'Pre-Purchase Inspection',
      slug: 'pre-purchase-inspection',
      description: 'Comprehensive vehicle inspection before you buy.',
      longDescription:
        "Don't buy a lemon! Our detailed pre-purchase inspections include engine diagnostics, transmission checks, brake system evaluation, and a complete safety assessment. Get peace of mind before making your purchase.",
      basePrice: 199,
      priceUnit: 'starting',
      isFeatured: false,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  console.log('✅ Services created');

  // Create service areas
  const serviceAreas = [
    {
      city: 'Des Plaines',
      slug: 'des-plaines',
      intro:
        'Serving Des Plaines and surrounding areas with professional mobile mechanic services. We understand the unique needs of local drivers and provide reliable, convenient automotive care.',
    },
    {
      city: 'Schaumburg',
      slug: 'schaumburg',
      intro:
        'Your trusted mobile mechanic in Schaumburg. From routine maintenance to complex repairs, we bring professional automotive services directly to your home or office.',
    },
    {
      city: 'Hoffman Estates',
      slug: 'hoffman-estates',
      intro:
        'Professional mobile mechanic services in Hoffman Estates. We provide convenient, reliable automotive care with transparent pricing and quality workmanship.',
    },
    {
      city: 'Chicago',
      slug: 'chicago',
      intro:
        "Chicago's premier mobile mechanic service. We serve all neighborhoods with professional automotive care, bringing the garage to you for maximum convenience.",
    },
  ];

  for (const area of serviceAreas) {
    await prisma.serviceArea.upsert({
      where: { slug: area.slug },
      update: {},
      create: area,
    });
  }

  console.log('✅ Service areas created');

  // Create reviews
  const reviews = [
    {
      authorName: 'Mike Johnson',
      rating: 5,
      body: 'Excellent service! The mechanic came to my office and fixed my car during my lunch break. Professional, honest, and reasonably priced. Will definitely use again.',
      publishedAt: new Date('2024-01-15'),
      city: 'Des Plaines',
    },
    {
      authorName: 'Sarah Chen',
      rating: 5,
      body: 'Outstanding mobile mechanic service. They diagnosed and fixed my transmission issue quickly. The technician was knowledgeable and explained everything clearly. Highly recommended!',
      publishedAt: new Date('2024-01-20'),
      city: 'Schaumburg',
    },
    {
      authorName: 'David Rodriguez',
      rating: 5,
      body: "Saved me from being stranded! My car wouldn't start and they came out within an hour. Fixed the battery issue and got me back on the road. Great emergency service.",
      publishedAt: new Date('2024-01-25'),
      city: 'Hoffman Estates',
    },
    {
      authorName: 'Lisa Thompson',
      rating: 5,
      body: 'Professional and reliable. They performed a pre-purchase inspection on a used car I was considering. Their detailed report saved me from buying a car with hidden problems.',
      publishedAt: new Date('2024-02-01'),
      city: 'Chicago',
    },
    {
      authorName: 'Robert Kim',
      rating: 5,
      body: "Best mobile mechanic in the area! They've been maintaining my fleet of vehicles for over a year. Always on time, fair pricing, and quality work. Can't recommend enough.",
      publishedAt: new Date('2024-02-05'),
      city: 'Des Plaines',
    },
  ];

  for (const review of reviews) {
    await prisma.review.create({
      data: review,
    });
  }

  console.log('✅ Reviews created');

  // Create FAQs
  const faqs = [
    {
      question: 'How does mobile mechanic service work?',
      answer:
        "Simply call us or request a quote online. We'll schedule a convenient time to come to your location with all necessary tools and equipment. Our certified technicians will diagnose and repair your vehicle on-site.",
      category: 'General',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Des Plaines, Schaumburg, Hoffman Estates, and Chicago. We can travel to surrounding areas for an additional travel fee. Contact us to confirm service availability in your specific location.',
      category: 'Service Areas',
    },
    {
      question: 'Do you provide warranties on your work?',
      answer:
        "Yes! We provide warranties on all parts and labor. The specific warranty terms depend on the type of service performed. We'll explain the warranty details before starting any work.",
      category: 'Warranty',
    },
    {
      question: 'How much do your services cost?',
      answer:
        'Our pricing is competitive and transparent. We provide free estimates before starting any work. Basic maintenance starts at $89, diagnostics at $125, and emergency roadside assistance at $75. Contact us for a detailed quote.',
      category: 'Pricing',
    },
    {
      question: 'What types of vehicles do you service?',
      answer:
        'We service most makes and models of cars, trucks, and SUVs. Our technicians are experienced with domestic and foreign vehicles. If you have a specialty vehicle, please contact us to confirm we can assist.',
      category: 'Vehicles',
    },
    {
      question: 'Do you work on weekends?',
      answer:
        'Yes, we provide service Monday through Saturday from 8am to 7pm. Emergency roadside assistance is available 24/7. Sunday service may be available for emergency situations.',
      category: 'Hours',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept cash, all major credit cards, and digital payment methods. Payment is due upon completion of service. We can provide detailed receipts for insurance or warranty claims.',
      category: 'Payment',
    },
    {
      question: 'Can you perform emissions testing?',
      answer:
        'Yes, we can perform emissions testing and help you prepare your vehicle to pass. We also handle registration renewals and other DMV-related services.',
      category: 'Testing',
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    });
  }

  console.log('✅ FAQs created');

  // Create default settings
  const settings = [
    {
      key: 'seo_default_title',
      value: 'Grease Nomads - Mobile Mechanics | Pro Service, Fair Prices',
    },
    {
      key: 'seo_default_description',
      value:
        'Professional mobile mechanic services in Des Plaines, Schaumburg, Hoffman Estates, and Chicago. Maintenance, diagnosis, performance modifications, roadside assistance, and pre-purchase inspections.',
    },
    {
      key: 'social_facebook',
      value: 'https://facebook.com/greasenomads',
    },
    {
      key: 'social_instagram',
      value: 'https://instagram.com/greasenomads',
    },
    {
      key: 'contact_phone_display',
      value: '(312) 208-5007',
    },
    {
      key: 'contact_phone_link',
      value: '+13122085007',
    },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  console.log('✅ Settings created');

  console.log('🎉 Seed completed successfully!');

  if (process.env.NODE_ENV === 'development') {
    console.log('🔑 Admin credentials:');
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

