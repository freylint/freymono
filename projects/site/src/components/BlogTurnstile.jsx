/// A turnstile for quickly showing the short from of the
/// latest blog posts.

import BlogCard from "@/components/BlogCard";
import { BlogMeta as PrimMeta } from "@/app/page";
import { BlogMeta as SecMeta } from "@/app/page";
import { BlogMeta as TerMeta } from "@/app/page";

export default function BlogTurnstile() {
  return (
    <nav className='flex flex-row mx-4'>
      <BlogCard className="hidden md:flex" title={SecMeta.title} intro={SecMeta.intro} />
      <BlogCard className="" title={PrimMeta.title} intro={PrimMeta.intro} />
      <BlogCard className="hidden md:flex" title={TerMeta.title} intro={TerMeta.intro} />
    </nav>
  );
}