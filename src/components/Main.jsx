import comics from "../comics";
import jumbotron from "../assets/jumbotron.jpg";

export default function Main() {
  return (
    <main>
      <section className="hero">
        <img src={jumbotron} alt="DC heroes" />
      </section>

      <section className="comics-section">
        <div className="container comics-container">
          <div className="series-badge">CURRENT SERIES</div>

          <div className="comics-grid">
            {comics.map((comic) => (
              <article className="comic-card" key={comic.id}>
                <div className="comic-thumb">
                  <img src={comic.thumb} alt={comic.series} />
                </div>
                <h4>{comic.series}</h4>
              </article>
            ))}
          </div>

          <div className="load-more-wrap">
            <button className="load-more-btn">LOAD MORE</button>
          </div>
        </div>
      </section>
    </main>
  );
}
