import Link from "next/link";
import { getSortedPostsData, getHomepageContent } from "@/lib/posts";

export default async function Home() {
  const posts = getSortedPostsData();
  const homepageContent = await getHomepageContent();

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <nav className="text-center text-lg font-bold mb-6">✈️ Reisebrev</nav>
      <section dangerouslySetInnerHTML={{ __html: homepageContent }} />
      <h2 className="mt-8 text-xl font-semibold">Posts</h2>
      <ul className="mt-2 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`} className="underline">
              {post.date}: {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
