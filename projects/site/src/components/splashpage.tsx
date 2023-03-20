import BillBoard, {
  BillBoardEntry,
  BillBoardGroup,
} from "../shared/billboard/billboard";

export default function SplashPage() {
  const marketingBlurb = "RAPID, ROBUST, ACCESSIBLE, ATTENTIVE";
  const blogBlurb = "A tech blog that remembers humans";
  const projectsBlurb = "Projects that make life easier";

  const blurbs = [marketingBlurb, blogBlurb, projectsBlurb];

  return (
    <section className="flex flex-col h-screen bg-gradient-to-br from-indigo-800 to-pink-800 rounded-b-xl">
      <p className="text-5xl text-center text-white py-7 grow mt-hbar"></p>
      <BillBoard groups={[]} />
      <h2 className="w-full my-4 text-2xl text-center text-white">
        {blurbs[0]}
      </h2>
      <h2 className="mb-4 text-3xl text-center text-white">⌄</h2>
    </section>
  );
}
