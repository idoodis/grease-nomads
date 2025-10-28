import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const isPostgresUrl = (url?: string | null) =>
  Boolean(url && (url.startsWith('postgres://') || url.startsWith('postgresql://')));

export const isDatabaseEnabled = () => isPostgresUrl(process.env.DATABASE_URL);

// Create Prisma client with error handling
let prisma: PrismaClient;

if (isDatabaseEnabled()) {
  try {
    prisma = globalForPrisma.prisma ??
      new PrismaClient({
        log: ['error'],
      });

    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
  } catch (error) {
    console.error('Failed to initialize Prisma client:', error);
    prisma = {} as PrismaClient;
  }
} else {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('DATABASE_URL is not configured for a PostgreSQL connection. Prisma will be disabled.');
  }
  prisma = {} as PrismaClient;
}

export { prisma };
