import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Path } from 'typescript'
import { readFileSync } from 'fs';

async function compileMDX(path: Path) {
  return serialize(
    readFileSync(path, {encoding: "utf-8"})
  );
}

export default async function Home() {
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

      <MDXRemote {...await compileMDX("./src/app/posts/about.mdx" as Path)} />
    </main>
  )
}
