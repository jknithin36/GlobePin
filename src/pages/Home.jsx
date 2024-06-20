import styles from "./Home.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world. <br />
          GlobePin keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of.
          <br />
          Never forget your wonderful experiences, and show your friends how you
          have wandered the world.
        </h2>

        <Link className="cta" to="/app">
          Start Your Journey Now
        </Link>
      </section>
    </main>
  );
}

export default Home;
