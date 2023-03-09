import { MDXRemote } from 'next-mdx-remote/rsc';
import { Path } from 'typescript';
import { readFileSync } from 'fs';

async function loadMDX(path: Path) {
  return readFileSync(path, { encoding: "utf-8" });
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

      <MDXRemote source={await loadMDX("./src/app/posts/about.mdx" as Path)} />
    </main>
  )
}
