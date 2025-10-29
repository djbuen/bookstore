import { PrismaClient } from '@prisma/client';
import { books } from './books';
import { hash, compare } from 'bcrypt';

const prisma = new PrismaClient();
const imageUrl =
  'https://placehold.co/600x800/png?text=Book+Cover';

async function main() {
  console.log('Truncating users table...');
  await prisma.user.deleteMany({});
  console.log('Seeding database...');

  let hashedPassword = await hash('rN5G3ZzaNyqi', 10);
  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: 'svorontsov',
      name: 'Sergie',
      password: hashedPassword,
    },
  });

  hashedPassword = await hash('DCytjWLjUYHY', 10);
  const user2 = await prisma.user.create({
    data: {
      username: 'dbuenconsejo',
      name: 'Dave',
      password: hashedPassword,
    },
  });

  console.log('Truncating books table...');
  await prisma.book.deleteMany({});
  // Create books
  const book1 = await prisma.book.create({
    data: {
      title: 'The Great Adventure',
      content: 'An exciting story about a young adventurer.',
      date_published: new Date('2023-01-15'),
      author: 'John Author',
      price: 19.99,
      imageUrl: imageUrl,
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: 'Science Fiction 101',
      content: 'A journey into the world of science fiction.',
      date_published: new Date('2022-12-10'),
      author: 'Jane Writer',
      price: 15.49,
      imageUrl: imageUrl,
    },
  });

  for (const book of books) {
    await prisma.book.upsert({
      where: { id: book.id },
      update: {},
      create: {
        id: book.id,
        title: book.title,
        author: book.author,
        content: book.content,
        date_published: new Date(
          2010 + Math.floor(Math.random() * 15), //year
          Math.floor(Math.random() * 12), //month
          Math.floor(Math.random() * 28) + 1 //day
        ),
        price: Number((Math.random() * 30 + 10).toFixed(2)),
        imageUrl: imageUrl,
        favorites: { create: [] },
      },
    });
  }
  console.log('Done Truncating books table...');

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
