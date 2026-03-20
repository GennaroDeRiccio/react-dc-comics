import LinkBar from "./LinkBar";

export default function Main() {
  return (
    <main>
      <section className="main-section">
        <div className="container">
          <h2>--&gt; Content goes here &lt;--</h2>
        </div>
      </section>

      <section className="nav-section">
        <div className="container">
          <LinkBar />
        </div>
      </section>
    </main>
  );
}
