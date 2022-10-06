import { prisma } from "~/db.server";

export async function getPostListItems() {
  return prisma.post.findMany({ select: { slug: true, title: true } });
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

// 🐨 export a new function called createPost which accepts a title, slug, and markdown
// and returns the newly created post.

// 💰 Here's an example of how you use prisma to create a new record:
// prisma.dogo.create({ data: { name: "Good Dogo" } });
// in our case, that'll be prisma.post.create
export async function createPost({ title, slug, markdown }: any) {
  return prisma.post.create({ data: { title, slug, markdown }})
}
