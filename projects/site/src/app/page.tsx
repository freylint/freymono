import { Path } from 'typescript';
import { readFileSync } from 'fs';
import {compileMDX} from 'next-mdx-remote/rsc';


async function loadMDX(path: Path) {
  // TODO make async
  var post = readFileSync(path, { encoding: "utf-8" });
  return compileMDX({
    source: post,
    options: {
      parseFrontmatter: true,
    },
    components: {
    }
  });
}

export default async function Home() {
  const {content, frontmatter} = await loadMDX("data/posts/about.mdx" as Path);
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
      {content}
    </main>
  )
}
