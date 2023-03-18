/// A turnstile for quickly showing the short from of the
/// latest blog posts.

import BlogCard from "@/components/BlogCard"

export default function BlogTurnstile() {
  return (
    <nav className='flex flex-row w-full'>
      <BlogCard className="hidden md:flex" title="Test" intro="testdesc" />
      <BlogCard className="" title="Test" intro="testdesc" />
      <BlogCard className="grow" title="Test" intro="testdesc" />
    </nav>
  );
}