// Summary view card for blog posts

import BlogPostMetadata from "@/model/BlogMeta";

export default function BlogCard(meta: BlogPostMetadata) {
  return (
    <div className="w-full mx-1 text-white rounded-lg bg-slate-800">
      <h5 className="m-2 text-xl text-center">{meta.title}</h5>
      <hr />
      <p className="text-serif">{meta.intro}</p>
    </div>
  );
}
