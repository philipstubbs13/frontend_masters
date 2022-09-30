import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { marked } from "marked";

export async function loader({ params }: LoaderArgs) {
    if (!params.slug) {
        throw new Error('Missing slug')
    }
    const post = await getPost(params.slug)
    if (!post) {
        throw new Error("Post not found");
    }
    const html = marked(post.markdown)
    return json({ post, html });
}

export default function PostRoute() {
    const { post, html } = useLoaderData<typeof loader>();
  
    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
    );
  }