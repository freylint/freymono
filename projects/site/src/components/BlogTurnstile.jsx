/// A turnstile for quickly showing the short from of the
/// latest blog posts.

import BlogCard from "@/components/BlogCard";
import { BlogMeta as PrimMeta } from "@/app/posts/about";
import { BlogMeta as SecMeta } from "@/app/posts/about";
import { BlogMeta as TerMeta } from "@/app/posts/about";

export default function BlogTurnstile() {
  return (
    <nav className='flex flex-row w-full'>
      <BlogCard className="hidden md:flex" title={SecMeta.title} intro={SecMeta.intro} />
      <BlogCard className="" title={PrimMeta.title} intro={PrimMeta.intro} />
      <BlogCard className="hidden md:flex" title={TerMeta.title} intro={TerMeta.intro} />
    </nav>
  );
}