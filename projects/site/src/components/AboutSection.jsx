export default function AboutSection({ title, children }) {
  return (
    <section className="px-2 rounded-md bg-slate-700">
      <h3 className="text-xl text-white">{title}</h3>
      {children}
    </section>
  );
}
