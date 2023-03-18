import About from "./posts/about";
import Homepage from "./posts/homepage";
import LCRedditPost from "./posts/lc-reddit-post";

export default function Home() {
    return (
        <main>
            <Homepage />
            <About />
            <LCRedditPost />
        </main>
    );
}
