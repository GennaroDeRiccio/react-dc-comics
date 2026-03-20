export default function Navbar() {
  const linksNavbar = [
    { label: "Characters", url: "#" },
    { label: "Comics", url: "#", active: true },
    { label: "Movies", url: "#" },
    { label: "TV", url: "#" },
    { label: "Games", url: "#" },
    { label: "Collectibles", url: "#" },
    { label: "Videos", url: "#" },
    { label: "Fans", url: "#" },
    { label: "News", url: "#" },
    { label: "Shop", url: "#" },
  ];

  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        {linksNavbar.map((link, index) => (
          <li key={index} className="main-nav-item">
            <a href={link.url} className={link.active ? "active" : ""}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
