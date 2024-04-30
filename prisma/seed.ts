import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const master = await prisma.user.create({
    data: {
      username: 'master',
      name: 'Master User',
      password: '$2a$10$cw/Oi05SpxHCi2hy8P4OjOlKzynsWOh5tRhBetKhdz.gteILxWHSa',
      role: 'MASTER',
    },
  });
  console.log({ master });
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      name: 'Admin User',
      password: '$2a$10$cw/Oi05SpxHCi2hy8P4OjOlKzynsWOh5tRhBetKhdz.gteILxWHSa',
      role: 'ADMIN',
    },
  });
  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
