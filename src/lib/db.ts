import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client with error handling
let prisma: PrismaClient;

try {
  prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['error'],
  });
  
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
} catch (error) {
  console.error('Failed to initialize Prisma client:', error);
  // Create a mock client for development
  prisma = {} as PrismaClient;
}

export { prisma };
