import BillBoard from "./billboard/billboard";

export default function SplashPage() {
  const marketingBlurb = "RAPID, ROBUST, ACCESSIBLE, ATTENTIVE";
  return (
    // TODO fetch header height from the theme
    <section className="flex flex-col h-screen bg-gradient-to-br from-indigo-800 to-pink-800 rounded-b-xl">
      <p className="text-center text-white grow mt-hbar text-9xl">FG</p>
      <BillBoard groups={[]} />
      <h2 className="w-full my-4 text-2xl text-center text-white">
        {marketingBlurb}
      </h2>
      <h2 className="mb-4 text-3xl text-center text-white">⌄</h2>
    </section>
  );
}
