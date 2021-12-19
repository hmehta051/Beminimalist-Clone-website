const navbar = ()=>{
    return `<div class="nav-container">
    <div class="ads">
      <p>Get 10% Flat Off. Use Code <span>GET10</span></p>
    </div>
    <nav>
      <div class="logo">minimalist_</div>
      <div class="nav-links">
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="concerns.html">Concerns</a></li>
          <li><a href="product.html">Our Products</a></li>
          <li><a href="#">Knowledge</a></li>
          <li><a href="#">Track Order</a></li>
        </ul>
      </div>
      <div class="nav-icons">
      <div><a href="#"><i class="far fa-user"></i></a></div>
      <div><a href="#"><i class="fas fa-search"></i></a></div>
      <div><a href="cart.html"><i class="fas fa-shopping-cart"></i></a><span id="indicator"></span></div>
    </div>
    </nav>
  </div>`
}

const navwithouttop = ()=>{
  return `<div class="nav-container">
  <nav>
    <div class="logo">minimalist_</div>
    <div class="nav-links">
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="comcerns.html">Concerns</a></li>
        <li><a href="product.html">Our Products</a></li>
        <li><a href="#">Knowledge</a></li>
        <li><a href="#">Track Order</a></li>
      </ul>
    </div>
    <div class="nav-icons">
      <div><a href="#"><i class="far fa-user"></i></a></div>
      <div><a href="#"><i class="fas fa-search"></i></a></div>
      <div><a href="cart.html"><i class="fas fa-shopping-cart"></i></a><span id="indicator"></span></div>
    </div>
  </nav>
</div>`
}

const footer = ()=>{
    return `<div class="top-footer">
    <div class="footer-logo">
      <div>minimalist_</div>
      <div class="social-icons">
        <div><i class="fab fa-facebook-f"></i></div>
        <div><i class="fab fa-instagram"></i></div>
      </div>
    </div>
    <div class="footer-links">
      <div class="imp-links">
        <p>ABOUT</p>
        <ul>
          <li><a href="#">Our values</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Terms & conditions</a></li>
        </ul>
      </div>
      <div class="imp-links">
        <p>HELP</p>
        <ul>
          <li><a href="#">Knowledge</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Return & refund policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="imp-links signup">
        <p>SIGN UP AND SAVE</p>
        <div class="emailbox">
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <input type="email" placeholder="Enter your email" />
          <span><i class="far fa-envelope"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-footer">
    <img
      src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5c41352f042863543ccbf50a/file-cd0KY0dC6M.jpg"
      alt=""
    />
    <div class="copyright">© 2021 Minimalist</div>
  </div>`
}
export {navbar, navwithouttop, footer};