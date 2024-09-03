import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCode,
  faBriefcase,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Navigation() {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="andre" href="/#">
            André
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  id="about-btn"
                  href="/#about"
                >
                  <FontAwesomeIcon icon={faUser as IconProp} /> About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="skills-btn" href="/#skills">
                  <FontAwesomeIcon icon={faCode as IconProp} /> Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="work-btn" href="/#work">
                  <FontAwesomeIcon icon={faBriefcase as IconProp} /> Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="social-btn" href="/#contact">
                  <FontAwesomeIcon icon={faAddressCard as IconProp} /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
