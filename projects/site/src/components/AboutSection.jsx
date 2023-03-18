
export default function AboutSection({ title, children }) {
  return (
    <section className="mx-2">
      <h3>
        {title}
      </h3>
      <p className="prose prose-lg text-white w-full ml-4">
        {children}
      </p>
    </section>
  );
}