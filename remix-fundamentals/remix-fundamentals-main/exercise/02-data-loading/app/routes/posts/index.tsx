import { Link, useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node';
import { prisma } from "~/db.server";

async function getPosts() {
  return prisma.post.findMany();
}

export async function loader() {
  const posts = await getPosts()

  return json({ posts })
  // return new Response(JSON.stringify(posts), {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
};


export default function Posts() {
  const { posts } = useLoaderData<typeof loader>(); 

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
