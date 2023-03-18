// About/Home page for the freyground website.

import AboutSection from '@/components/AboutSection';
import BlogTurnstile from '@/components/BlogTurnstile';
import BlogPostMetadata from '@/model/BlogMeta';
import Image from 'next/image';

export const BlogMeta: BlogPostMetadata = {
  title: 'About Page',
  intro: "This is the about page of the freyground website.",
} 

export default function About() {
  return (
    <main className="w-full">
      <section className='min-h-screen'>
        <h1 className="my-4 text-3xl font-bold text-center text-white w-full">
          Freyground
        </h1>
        <Image src={'vercel.svg'} className="min-h-max " width={'720'} height={'1280'} alt={'Placeholder Logo'} />
        <h2 className="my-4 text-2xl text-center text-white w-full">
          Projects, Blog, and Interactive Resume.
        </h2>
      </section>
      <AboutSection title={"Blog"}>
        The Blog was created as way of getting my thoughts on technical topics
        like webdev, 3D Printing and CAD, and my adventures in professionalism.
        Sample some topics if that sounds interesting to you!
      </AboutSection>
      <BlogTurnstile />
      <AboutSection title={"Projects"}>
        The Projects section is a collection of projects that I have worked on.
        Ranging from painting, coding, and programming.
      </AboutSection>
      <AboutSection title={"Interactive Resume"}>
        The Resume section was created to provide a more personal resume for recruiters and
        other developers who want to quickly learn what I can do.
      </AboutSection>
    </main>
  );
}
