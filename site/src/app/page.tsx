
export default function Home() {
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

      <h1 className='text-3xl font-bold underline'>
        Hello, World!
      </h1>
    </main>
  )
}
