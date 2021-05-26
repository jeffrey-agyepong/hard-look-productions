class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<header>
  <div class="navbar-fixed">
    <nav class="nav-center black" role="navigation" id="header">
      <div class="nav-wrapper container w-menu">
        <a href="https://beyondthegravemusic.com" class="brand-logo">HL Productions</a>

        <ul class="right hide-on-med-and-down">
          <li> <a href="index.html">About</a></li>
          <li> <a href="index.html">Services</a></li>
          <li><a href="">Projects</a></li>
          <li> <a href="index.html">Testimonials</a></li>
          <li><a href="">Contact</a></li>

        </ul>

        <ul id="nav-mobile" class="sidenav black center">
          <li><a href="index.html" class="white-text">About</a></li>
          <li><a href="index.html" class="white-text">Services</a></li>
          <li><a href="" class="white-text">Projects</a></li>
          <li><a href="" class="white-text">Testimonials</a></li>
          <li><a href="" class="white-text">Contact</a></li>

          <!--<li><a href="https://store.beyondthegravemusic.com" class="white-text">Store</a></li>-->

        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger header_toggle">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </nav>
  </div>
</header>

`;
  }
}
customElements.define("header-component", Header);
