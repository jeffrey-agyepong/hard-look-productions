class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="transparent">
          <nav
            class="nav-exteneded transparent z-depth-0"
            role="navigation"
            id="header"
          >
            <div class="nav-wrapper container w-menu">
              <a
                href="https://beyondthegravemusic.com"

              >

              <!--<img src="dist/img/hardlook.webp" class="responsive-img logo">-->
              <h1 class="white-text center brand-logo text-logo">HL PRODUCTIONS</h1>
              </a>

              <ul id="nav-mobile" class="sidenav black center sticky">
                <li>
                  <a href="index.html#about" class="white-text">
                    About
                  </a>
                </li>
                <li>
                  <a href="index.html#music" class="white-text">
                    Music
                  </a>
                <li>
                  <a href="index.html#services" class="white-text">
                    Services
                  </a>
                </li>
                <li>
                  <a href="index.html#projects" class="white-text">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="index.html#contact" class="white-text">
                    Contact
                  </a>
                </li>
              </ul>
              <a
                href="#"
                data-target="nav-mobile"
                class="sidenav-trigger header_toggle"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <div class="nav-content">
              <ul class="tabs tabs-transparent center hide-on-med-and-down">
                <li class="tab">
                  <a href="index.html#about" class="nav-font">About</a>
                </li>
                <li class="tab">
                  <a href="index.html#music" class="nav-font">Music</a>
                </li>
                <li class="tab">
                  <a href="index.html#services" class="nav-font">Services</a>
                </li>
                <li class="tab">
                  <a href="index.html#projects" class="nav-font">Projects</a>
                </li>
                <li class="tab">
                  <a href="index.html#contact" class="nav-font">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
  `;
  }
}
customElements.define("header-component", Header);
