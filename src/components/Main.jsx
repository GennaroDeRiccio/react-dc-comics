import jumbotron from "../assets/jumbotron.jpg";
import ComicsList from "./comics/ComicsList";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <img src={jumbotron} alt="DC heroes" />
      </section>

      <ComicsList />
    </main>
  );
}
