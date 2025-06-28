import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = await getPostData(slug);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <nav className="text-center text-lg font-bold mb-6">
        <Link href="/" className="underline">
          ← Back
        </Link>
      </nav>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <article
        className="prose mt-4"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
