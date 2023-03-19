// Summary view card for blog posts

import BlogPostMetadata from "@/model/BlogMeta";

export default function BlogCard(meta: BlogPostMetadata) {
  return (
    <div className="bg-slate-800 text-white w-full mx-1 rounded-lg">
      <h5 className="m-2 text-center text-xl">{meta.title}</h5>
      <p className="text-base text-serif">{meta.intro}</p>
    </div>
  );
}
