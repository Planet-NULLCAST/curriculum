const globalAny = global;

// lib/prisma.ts
import pkg from '@prisma/client';

const PrismaClient = pkg;

let prisma;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!globalAny.prisma) {
		globalAny.prisma = new PrismaClient();
	}
	prisma = globalAny.prisma;
}

export default prisma;
