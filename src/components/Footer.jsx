import dcLogoBg from "../assets/dc-logo-bg.png";
import facebook from "../assets/footer-facebook.png";
import twitter from "../assets/footer-twitter.png";
import youtube from "../assets/footer-youtube.png";
import pinterest from "../assets/footer-pinterest.png";
import periscope from "../assets/footer-periscope.png";

export default function Footer() {
  return (
    <footer>
      <section className="footer-top">
        <div className="container footer-top-content">
          <div className="footer-links">
            <div className="footer-col footer-col-grouped">
              <div>
                <h3>DC COMICS</h3>
                <ul>
                  <li><a href="#">Characters</a></li>
                  <li><a href="#">Comics</a></li>
                  <li><a href="#">Movies</a></li>
                  <li><a href="#">TV</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Videos</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>

              <div className="footer-subgroup">
                <h3>SHOP</h3>
                <ul>
                  <li><a href="#">Shop DC</a></li>
                  <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-col">
              <h3>DC</h3>
              <ul>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Privacy policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>SITES</h3>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-logo">
            <img src={dcLogoBg} alt="DC logo" />
          </div>
        </div>
      </section>

      <section className="footer-bottom">
        <div className="container footer-bottom-content">
          <button className="sign-up-btn">SIGN-UP NOW!</button>

          <div className="socials">
            <span>FOLLOW US</span>
            <a href="#" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
            <a href="#" aria-label="Twitter"><img src={twitter} alt="Twitter" /></a>
            <a href="#" aria-label="YouTube"><img src={youtube} alt="YouTube" /></a>
            <a href="#" aria-label="Pinterest"><img src={pinterest} alt="Pinterest" /></a>
            <a href="#" aria-label="Periscope"><img src={periscope} alt="Periscope" /></a>
          </div>
        </div>
      </section>
    </footer>
  );
}
