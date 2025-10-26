import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';

function generatePassword(length = 12) {
  return randomBytes(length).toString('base64').slice(0, length);
}

const prisma = new PrismaClient();

async function main() {
  console.log('Truncating users table...');
  await prisma.user.deleteMany({});
  console.log('Seeding database...');

  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: 'svorontsov',
      name: 'Sergie',
      password: generatePassword(),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'dbuenconsejo',
      name: 'Dave',
      password: generatePassword(),
    },
  });

  // Create books
  const book1 = await prisma.book.create({
    data: {
      title: 'The Great Adventure',
      content: 'An exciting story about a young adventurer.',
      date_published: new Date('2023-01-15'),
      author: 'John Author',
      price: 19.99,
      imageUrl: 'https://example.com/image1.jpg',
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: 'Science Fiction 101',
      content: 'A journey into the world of science fiction.',
      date_published: new Date('2022-12-10'),
      author: 'Jane Writer',
      price: 15.49,
      imageUrl: 'https://example.com/image2.jpg',
    },
  });

  // Create favorite relationships between users and books
  await prisma.favorite.create({
    data: {
      userId: user1.id,
      bookId: book1.id,
    },
  });

  await prisma.favorite.create({
    data: {
      userId: user2.id,
      bookId: book2.id,
    },
  });

  console.log('Database seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
