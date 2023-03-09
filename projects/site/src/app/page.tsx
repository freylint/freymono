"use client"

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Homepage from "./posts/homepage.mdx";
import About from "./posts/about.mdx";
import LcRedditPost from "./posts/lc_reddit_post.mdx";

export default function Home({ source }) {
  return (
    <main>

      <div className='bg-black flex flex-row text-white'>
        <p className='grow m-3 text-center'>Freyground</p>
        <nav className='flex-row hidden md:flex m-3 grow'>
          <p>Home</p>
          <p>Posts</p>
          <p>Projects</p>
        </nav>
        <div className='m-3 hidden md:flex flex-row'>
          <p>GHUB</p>
        </div>
        <p className='m-3 md:hidden'>BURGER</p>
      </div>

      <MDXRemote {...source} components={components} />

    </main>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
