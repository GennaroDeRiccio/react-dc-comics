import digitalComics from "../assets/buy-comics-digital-comics.png";
import merchandise from "../assets/buy-comics-merchandise.png";
import subscriptions from "../assets/buy-comics-subscriptions.png";
import shopLocator from "../assets/buy-comics-shop-locator.png";
import powerVisa from "../assets/buy-dc-power-visa.svg";

export default function LinkBar() {
  const linkNavbarBlue = [
    {
      label: "DIGITAL COMICS",
      url: "#",
      img: digitalComics,
    },
    {
      label: "DC MERCHANDISE",
      url: "#",
      img: merchandise,
    },
    {
      label: "SUBSCRIPTION",
      url: "#",
      img: subscriptions,
    },
    {
      label: "COMIC SHOP LOCATOR",
      url: "#",
      img: shopLocator,
    },
    {
      label: "DC POWER VISA",
      url: "#",
      img: powerVisa,
    },
  ];

  return (
    <section className="nav-section">
      <div className="container">
        <nav className="navBlue">
          <ul className="ulBlue">
            {linkNavbarBlue.map((link) => (
              <li key={link.label} className="blue-link-item">
                <a href={link.url}>
                  <img src={link.img} alt={link.label} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
