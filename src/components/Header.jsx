import dcLogo from "../assets/dc-logo.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <figure className="header-logo">
          <img src={dcLogo} alt="DC logo" />
        </figure>
        <Navbar />
      </div>
    </header>
  );
}
