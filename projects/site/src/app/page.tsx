// About/Home page for the freyground website.

import AboutSection from "@/components/AboutSection";
import BlogTurnstile from "@/components/BlogTurnstile";
import BlogPostMetadata from "@/model/BlogMeta";
import Image from "next/image";

export const BlogMeta: BlogPostMetadata = {
  title: "About Page",
  intro: "This is the about page of the freyground website.",
};

function SplashPage() {
  const marketingBlurb = "RAPID, ROBUST, ACCESSIBLE, ATTENTIVE";
  return (
    // TODO fetch header height from the theme
    <section className="flex flex-col h-screen bg-gradient-to-br from-indigo-800 to-pink-800 rounded-b-xl">
      <p className="text-center text-white grow mt-hbar text-9xl">FG</p>
      <h2 className="w-full my-4 text-2xl text-center text-white">
        {marketingBlurb}
      </h2>
      <h2 className="mb-4 text-3xl text-center text-white">⌄</h2>
    </section>
  );
}

function AboutBlock() {
  return (
    <main className="w-full">
      <AboutSection title={"Blog"}>
        <p>
          The Blog was created as way of getting my thoughts on technical topics
          like webdev, 3D Printing and CAD, and my adventures in
          professionalism. Sample some topics if that sounds interesting to you!
        </p>
        <BlogTurnstile />
      </AboutSection>
      <AboutSection title={"Projects"}>
        The Projects section is a collection of projects that I have worked on.
        Ranging from painting, coding, and programming.
      </AboutSection>
      <AboutSection title={"Interactive Resume"}>
        The Resume section was created to provide a more personal resume for
        recruiters and other developers who want to quickly learn what I can do.
      </AboutSection>
    </main>
  );
}

export default function About() {
  return (
    <>
      <SplashPage />
      <AboutBlock />
    </>
  );
}
