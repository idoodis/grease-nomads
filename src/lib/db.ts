import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client with error handling
let prisma: PrismaClient;

try {
  // Ensure the database directory exists
  const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
  const dbDir = path.dirname(dbPath);
  
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  prisma = globalForPrisma.prisma ?? new PrismaClient({
    log: ['error'],
    datasources: {
      db: {
        url: `file:${dbPath}`,
      },
    },
  });

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
} catch (error) {
  console.error('Failed to initialize Prisma client:', error);
  // Create a mock client for development
  prisma = {} as PrismaClient;
}

export { prisma };
