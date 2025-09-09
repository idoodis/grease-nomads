# Grease Nomads - Mobile Mechanic Website

A production-ready, SEO-optimized website for Grease Nomads mobile mechanic services. Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Dynamic metadata, sitemap, robots.txt, structured data
- **Admin Dashboard**: Full CRUD operations for managing content
- **Mobile Responsive**: Optimized for all devices
- **Accessibility**: WCAG AA compliant
- **Performance**: Optimized images, fonts, and loading
- **Database**: Prisma with SQLite (dev) and Vercel Postgres (prod)

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd grease-nomads
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env
   ```

   Update the `.env` file with your values:

   ```env
   # Database
   DATABASE_URL="file:./dev.db"
   POSTGRES_URL="postgresql://username:password@localhost:5432/grease_nomads"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"

   # Admin
   ADMIN_EMAIL="admin@greasenomads.com"
   ADMIN_PASSWORD="admin123"

   # Email (Optional)
   EMAIL_PROVIDER="resend"
   EMAIL_FROM="noreply@greasenomads.com"
   RESEND_API_KEY="your-resend-api-key"

   # Analytics
   VERCEL_ANALYTICS_ID="your-analytics-id"
   ```

4. **Set up the database**

   ```bash
   pnpm db:push
   pnpm seed
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   └── how-it-works/      # How it works page
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   ├── ui/               # Reusable UI components
│   └── ...               # Page-specific components
├── lib/                  # Utility functions
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Prisma client
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
```

## 🗄️ Database Schema

The application uses the following main models:

- **CompanyInfo**: Business information and hero content
- **Service**: Available services with pricing
- **ServiceArea**: Geographic service areas
- **Review**: Customer reviews and ratings
- **FAQ**: Frequently asked questions
- **Inquiry**: Contact form submissions
- **User**: Admin users for authentication
- **Setting**: Application settings and configuration

## 🔐 Admin Access

Default admin credentials:

- **Email**: admin@greasenomads.com
- **Password**: admin123

Access the admin dashboard at `/admin` after logging in.

## 📝 Content Management

All public-facing content is editable through the admin dashboard:

### Company Information

- Business name, phone, email, hours
- Hero section content (title, subtitle, CTA)
- Business address and contact details

### Services

- Service name, description, and detailed information
- Pricing (base price and unit)
- Featured service designation
- Service images (optional)

### Service Areas

- City name and slug
- Area-specific introduction text

### Reviews

- Customer name, rating, and review text
- Publication date and associated city

### FAQs

- Question and answer pairs
- Optional categorization

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Environment Variables for Production

```env
DATABASE_URL="postgresql://username:password@host:port/database"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://yourdomain.com"
ADMIN_EMAIL="your-admin-email"
ADMIN_PASSWORD="your-secure-password"
```

### Database Migration

For production, update the Prisma schema to use PostgreSQL:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Then run:

```bash
pnpm db:push
pnpm seed
```

## 📧 Email Configuration

The contact form can send emails when configured:

### Resend (Recommended)

```env
EMAIL_PROVIDER="resend"
EMAIL_FROM="noreply@yourdomain.com"
RESEND_API_KEY="your-resend-api-key"
```

### SMTP

```env
EMAIL_PROVIDER="smtp"
SMTP_HOST="your-smtp-host"
SMTP_PORT="587"
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-password"
```

If email is not configured, inquiries are stored in the database only.

## 🧪 Testing

```bash
# Run type checking
pnpm typecheck

# Run linting
pnpm lint

# Run tests (when implemented)
pnpm test
```

## 📊 SEO Features

- **Dynamic Metadata**: Page-specific titles and descriptions
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Structured Data**: JSON-LD for LocalBusiness and Services
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Proper URL canonicalization

## 🎨 Customization

### Branding

- Colors: Primary (#FF6A00) and Secondary (#0B0B0B)
- Fonts: Poppins (headings) and Inter (body)
- Update in `tailwind.config.ts`

### Content

- All content is editable through the admin dashboard
- No hardcoded content in components
- Database-driven content management

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript checks
pnpm seed         # Seed database with initial data
pnpm db:push      # Push schema changes to database
pnpm db:studio    # Open Prisma Studio
```

## 📞 Support

For technical support or questions:

- **Phone**: (312) 208-5007
- **Email**: Z@Greasenomads.com

## 📄 License

This project is proprietary software for Grease Nomads.

---

**Built with ❤️ for Grease Nomads**
