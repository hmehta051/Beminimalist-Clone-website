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
          <li><a href="knowledge.html">Knowledge</a></li>
          <li><a href="trackorder.html">Track Order</a></li>
        </ul>
      </div>
      <div class="nav-icons">
      <div id="user-icon"><a href="login.html"><i class="far fa-user"></i></a></div>
      <div id="search-icon"><a href="#"><i class="fas fa-search"></i></a></div>
      
      <div id="menu-icon"><a href="#"><i class="fas fa-bars"></i></a></div>
      <div><a href="cart.html"><i class="fas fa-shopping-cart"></i></a><span id="indicator"></span></div>
    </div>
    <div class="menu-list">
      <div class="cancel"><i class="fas fa-times"></i></div>
      <div class="links">
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="concerns.html">Concerns</a></li>
          <li><a href="product.html">Our Products</a></li>
          <li><a href="knowledge.html">Knowledge</a></li>
          <li><a href="trackorder.html">Track Order</a></li>
          <li><a href="login.html">Login</a></li>
          <li>
            <i class="fab fa-facebook-f"></i><i class="fab fa-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    <div class="searchinput">
         <input type="text" placeholder="Search for products" />
         <div class="nav-search"><i class="fas fa-search"></i></div>
         <div class = "remove-btn"><i class="fas fa-times"></i></div>
      </div>
  </div>`
}

const navwithouttop = ()=>{
  return `<div class="nav-container">
  <nav>
    <div class="logo">minimalist_</div>
    <div class="nav-links">
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="concerns.html">Concerns</a></li>
        <li><a href="product.html">Our Products</a></li>
        <li><a href="knowledge.html">Knowledge</a></li>
        <li><a href="trackorder.html">Track Order</a></li>
      </ul>
    </div>
    <div class="nav-icons">
      <div id="user-icon"><a href="login.html"><i class="far fa-user"></i></a></div>
      <div id="search-icon"><a href="#"><i class="fas fa-search"></i></a></div>
      <div id="menu-icon"><a href="#"><i class="fas fa-bars"></i></a></div>
      <div><a href="cart.html"><i class="fas fa-shopping-cart"></i></a><span id="indicator"></span></div>
    </div>
    <div class="menu-list">
      <div class="cancel"><i class="fas fa-times"></i></div>
      <div class="links">
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="concerns.html">Concerns</a></li>
          <li><a href="product.html">Our Products</a></li>
          <li><a href="knowledge.html">Knowledge</a></li>
          <li><a href="trackorder.html">Track Order</a></li>
          <li><a href="signin.html">Login</a></li>
          <li>
            <i class="fab fa-facebook-f"></i><i class="fab fa-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="searchinput">
         <input type="text" placeholder="Search for products" />
         <div class="nav-search"><i class="fas fa-search"></i></div>
         <div class="remove-btn"><i class="fas fa-times"></i></div>
  </div>
</div>`
}

const searchanimation = ()=>{
  document.getElementById('search-icon').addEventListener('click',()=>{
    document.querySelector('.searchinput').style.top = "0px";
  });
  document.querySelector('.remove-btn').addEventListener('click',()=>{
    document.querySelector('.searchinput').style.top = "-100px";
  })
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

const appenditems = (cart,maindiv) => {
  cart.forEach((items) => {
    let itemdiv = document.createElement("div");
    itemdiv.setAttribute("class", "itemdiv");
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");
    let img = document.createElement("img");
    img.src = items.url;
    let count = document.createElement("div");
    count.textContent = items.quantity;
    imgdiv.append(img, count);
    let contentdiv = document.createElement("div");
    contentdiv.setAttribute("class", "contentdiv");
    let name = document.createElement("p");
    name.textContent = items.title;
    let price = document.createElement("p");
    price.textContent = `₹ ${items.quantity * items.dprice}`;
    contentdiv.append(name, price);
    itemdiv.append(imgdiv, contentdiv);
    maindiv.append(itemdiv);
  });
  var sub = 0;
  for (var i = 0; i < cart.length; i++) {
    sub += cart[i].quantity * cart[i].dprice;
  }
  let tax = Math.floor(sub * (5 / 100));
  let subtotal = document.querySelector(".subtotal");
  subtotal.innerHTML = `<div class="sub">
          <p>Subtotal</p>
          <p>₹ ${sub}</p>
        </div>
        <div class="deduction">
          <p>Estimated Tax</p>
          <p>₹ ${tax}</p>
        </div>`;

  let totalprice = document.querySelector(".totalbill");
  totalprice.innerHTML = `<p>Total</p>
        <p><span>INR</span>₹${sub - tax}</p>`;
};
const checkoutpage = (value) => {
  return `<div class="form">
      <div class="navigation">
        <div>minimalist_</div>
        <div class="steps">
          <p>
            <span>Cart</span> <span><i class="fas fa-chevron-right"></i></span
            ><span>Information</span>
            <span><i class="fas fa-chevron-right"></i></span>Shipping
            <span><i class="fas fa-chevron-right"></i></span> Payment
          </p>
        </div>
      </div>
      <div class="shipping">
        <div class="verifybox"></div>
        <div class="btndiv">
          <div class="return">
            <span><i class="fas fa-chevron-left"></i></span>
            <p>Return to cart</p>
          </div>
          <button>${value}</button>
        </div>
      </div>
    </div>
    <div class="order-details">
      <div class="showcart"></div>
      <div class="discountbox">
        <input type="text" placeholder="Discount code" />
        <button>Apply</button>
      </div>
      <div class="subtotal"></div>
      <div class="totalbill"></div>
    </div>`;
};


const productappend = (products,bestseller,cart)=>{
  products.map((items) => {
    let itembox = document.createElement("div");
    itembox.setAttribute("class", "itembox");
    let itemimgdiv = document.createElement("div");
    itemimgdiv.setAttribute("class", "itemimgdiv");
    itemimgdiv.addEventListener('click',()=>{
      localStorage.setItem('singleitem',JSON.stringify(items));
      window.location.href = "singleproduct.html";
    });
    let itemimg = document.createElement("img");
    itemimg.src = items.url;
    itemimgdiv.append(itemimg);
  
    let itemcontentdiv = document.createElement("div");
    itemcontentdiv.setAttribute("class", "itemcontentdiv");
    let name = document.createElement("p");
    name.textContent = items.title;
    let about = document.createElement("p");
    about.textContent = items.desc;
    let pricediv = document.createElement("div");
    pricediv.setAttribute("class", "pricediv");
    let disprice = document.createElement("span");
    disprice.textContent = `₹${items.dprice}`;
    let oprice = document.createElement("span");
    oprice.textContent = `₹${items.tprice}`;
    pricediv.append(disprice, oprice);
    itemcontentdiv.append(name, about, pricediv);
    let btndiv = document.createElement("button");
    items.quantity = 1;
    btndiv.textContent = "Add to cart";
    btndiv.addEventListener("click", () => {
      cart.push(items);
      localStorage.setItem("cartitems", JSON.stringify(cart));
      console.log(items);
    });
    itembox.append(itemimgdiv, itemcontentdiv,btndiv);
    bestseller.append(itembox);
  });
}

const itemstemplate = (heading)=>{
  return `<div class="recent-items">
  <h2>${heading}</h2>
  <div class="recent-products"></div>
</div>`
}
const navfunction = ()=>{
  document.getElementById("menu-icon").addEventListener("click", () => {
    document.querySelector(".menu-list").style.right = "0px";
  });
  document.querySelector(".cancel").addEventListener("click", () => {
    document.querySelector(".menu-list").style.right = "-300px";
  });
}
const items = [
  {
    title: "AHA 25% + PHA 5% + BHA 2%",
    reviews: 585,
    desc: "Even skin tone & texture",
    tprice: 699,
    dprice: 689,
    category: "Acne-marks",
    url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistAHAPHABHABlack1200pxCopy-min_400x.png",
  },
  {
    title: "Alpha Arbutin 2% + Hyaluronic Acid 1%",
    reviews: 993,
    desc: "Reduces dark spots & evens skin tone",
    tprice: 549,
    dprice: 539,
    category: "Alopecia",
    url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistArbutin1200px-min_400x.png",
  },
  {
    title: "Azeclair 17% + Propolis",
    reviews: 53,
    desc: "Reduces acne & heals skin",
    tprice: 699,
    dprice: 689,
    category: "Anti-acne",
    url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistAzeclair1200px-min_400x.png",
  },
  {
    title: "Granactive Retinoid 2% (Emulsion)",
    reviews: 324,
    desc: "Reduce fine lines & wrinkles",
    tprice: 699,
    dprice: 695,
    category: "Anti-aging",
    url: "https://cdn.shopify.com/s/files/1/0410/9608/5665/products/MinimalistRetinoidFront-min_400x.png",
  },
];

const chatbox = ()=>{
  return `<div class="inter-app">
  <div class="head">
    <div class="leftarr">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="sender">
      <div class="img">
        <img
          src="components/images/profile.jpg"
          alt="Akanksha Profile"
          class="imgp"
        />
      </div>
      <div class="textimg">
        <div class="text1">Akanksha</div>
        <div class="text1 text2"><i class="fas fa-circle"></i>Active</div>
        <input type="text" id="currentDateTime" />
      </div>
    </div>
  </div>
  <div class="mid">
    <div id="msg_area">
      <div id="robot">
        <div id="bot"></div>
        <h4>Akanksha</h4>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div id="input">
      <input type="text" placeholder="Write a reply..." id="text" />
      <button id="send">Send <i class="fa fa-paper-plane"></i></button>
    </div>
  </div>
</div>`
}
const start = ()=> {
  let res_msg = document.createElement("div");
  res_msg.innerHTML = "Hello myself Akanksha,how can i help you?";
  res_msg.setAttribute("class", "left");
  document.getElementById("msg_area").appendChild(res_msg);
}
const chatanimation = ()=>{
  let chat = document.querySelector('.chatbot');
chat.addEventListener('click',()=>{
  chat.innerHTML = null;
  chat.classList.add('active');
  chat.innerHTML = chatbox();
  chatscript();
})
}
const chatscript = ()=>{
  

  document.getElementById("send").addEventListener("click", async (e) => {
    e.preventDefault();
    let req = document.getElementById("text").value;
    if (req == undefined || req == "" || req == null) {
    } else {
      let res = "";
      await axios
        .get(`https://api.monkedev.com/fun/chat?msg=${req}`)
        .then((data) => {
          res = JSON.stringify(data.data.response);
        });

      let msg_req = document.createElement("div");
      let msg_res = document.createElement("div");

      let Con1 = document.createElement("div");
      let Con2 = document.createElement("div");

      Con1.setAttribute("class", "msgCon1");
      Con2.setAttribute("class", "msgCon2");

      msg_req.innerHTML = req;
      msg_res.innerHTML = res;

      msg_req.setAttribute("class", "right");
      msg_res.setAttribute("class", "left");

      let message = document.getElementById("msg_area");
      message.appendChild(Con1);
      message.appendChild(Con2);

      Con1.appendChild(msg_req);
      Con2.appendChild(msg_res);

      document.getElementById("text").value = "";

      function scroll() {
        var scrollMsg = document.getElementById("msg_area");
        scrollMsg.scrollTop = scrollMsg.scrollHeight;
      }
      scroll();
    }
  });

  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  document.getElementById("currentDateTime").value = dateTime;
}
export {navbar, navwithouttop, footer ,appenditems ,checkoutpage, productappend , itemstemplate, items , navfunction ,searchanimation,chatbox,chatanimation,chatscript,start};