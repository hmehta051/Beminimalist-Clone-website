let product = JSON.parse(localStorage.getItem('singleitem'));
let cartitems = JSON.parse(localStorage.getItem('cartitems')) || [];
let maindiv = document.querySelector('.display-product');
var counter = 0;
const appenditem = ({title,url,reviews,desc,tprice,dprice,category})=>{
    let imgdiv = document.createElement('div');
    imgdiv.setAttribute('class','imgdiv');
    let img = document.createElement('img');
    img.src = url;
    imgdiv.append(img);
    let contentdiv = document.createElement('div');
    contentdiv.setAttribute('class','contentdiv');
    let maininfo = document.createElement('div');
    maininfo.setAttribute('class','maininfo');
    let name = document.createElement('h1');
    name.textContent = title;
    let subhead = document.createElement('p');
    subhead.textContent = `${desc} • ${Math.floor(Math.random()*(250 - 30 + 1) + 30 )}ml`;
    let ratingbox = document.createElement('div');
    ratingbox.setAttribute('class','ratingbox');
    let icondiv = document.createElement("div");
      if (reviews > 700) {
        for (var i = 0; i < 5; i++) {
          let iconspan = document.createElement("span");
          if (i < 4) {
            iconspan.innerHTML = `<i class="fas fa-star"></i>`;
          } else {
            iconspan.innerHTML = `<i class="fas fa-star-half-alt"></i>`;
          }
          icondiv.append(iconspan);
        }
      } else if (reviews < 700) {
        for (var i = 0; i < 5; i++) {
          let iconspan = document.createElement("span");
          if (i < 4) {
            iconspan.innerHTML = `<i class="fas fa-star"></i>`;
          } else {
            iconspan.innerHTML = `<i class="far fa-star"></i>`;
          }
          icondiv.append(iconspan);
        }
      }
      let rating = document.createElement('div');
      rating.textContent = `${reviews} reviews`;
      ratingbox.append(icondiv,rating);

      let pricediv = document.createElement("div");
      pricediv.setAttribute("class", "pricediv");
      let total = document.createElement("span");
      total.textContent = `₹${dprice}`;
      let discount = document.createElement("span");
      discount.textContent = `₹${tprice}`;
      pricediv.append(total, discount);
      maininfo.append(name,subhead,ratingbox,pricediv);

      let btndiv = document.createElement('div');
      btndiv.setAttribute('class','btndiv');
      let quantitydiv = document.createElement('div');
      quantitydiv.setAttribute('class','quantitydiv');
      let num = document.createElement('div');
      num.textContent = 1;
      let min = document.createElement('div');
      min.innerHTML = `<i class="fas fa-minus"></i>`
      product.quantity = num.textContent;
      min.addEventListener('click',()=>{
          if (counter <= 1){
              counter = 1;
          }else {
              counter--;
              num.textContent = null;
              num.textContent = counter;
          }
          product.quantity = counter;
      })
      let max = document.createElement('div');
      max.innerHTML =  `<i class="fas fa-plus"></i>`
      max.addEventListener('click',()=>{
        counter++;
        num.textContent = null;
        num.textContent = counter;
        product.quantity = counter;
    })
    quantitydiv.append(min,num,max);
    let cartbtn = document.createElement('button');
    cartbtn.textContent = "Add to Cart";
    cartbtn.addEventListener('click',()=>{
      cartitems.push(product);
      localStorage.setItem('cartitems',JSON.stringify(cartitems));
      if (cartitems.length > 0) {
        document.getElementById("indicator").style.display = "block";
      } else {
        document.getElementById("indicator").style.display = "none";
      }
    })
    btndiv.append(quantitydiv,cartbtn);
    contentdiv.append(maininfo,btndiv);

    let sideinfo = document.createElement("div");
    sideinfo.setAttribute('class','sideinfo');
    sideinfo.innerHTML = `<div class="info1">
    <h2>Help Reduce Fine Lines & Wrinkles</h2>
    <p>
      <span>What it is: </span>Turn back the clock on aging and give
      your skin a youthful vibrancy with this gentle, safe & effective
      2% Retinoid serum.
    </p>
  </div>
  <div class="info2">
    <h2>Why it's awesome:</h2>
    <ul>
      <li>
        The next-generation anti-aging formula with 2% Granactive
        Retinoid is dermatologically tested to offer less irritation &
        multi-fold better effect than other retinol and retinoid
        derivatives
      </li>
      <li>
        Boosts cell turnover & stimulates collagen production to erase
        fine lines and wrinkles, revealing radiant glowy skin
      </li>
      <li>
        Contains top quality Granactive Retinoid sourced from Grant
        Industries, USA, A leading global supplier in skincare
      </li>
    </ul>
  </div>
  <hr />
  <div class="info3">
    <h2>This product is:</h2>
    <div>
    <div>
    <span><i class="far fa-check-circle"></i></span
    ><span>Fragrence Free</span>
  </div>
  <div>
    <span><i class="far fa-check-circle"></i></span
    ><span>Silicon Free</span>
  </div>
  <div>
    <span><i class="far fa-check-circle"></i></span
    ><span>Anti-Aging</span>
  </div>
  <div>
    <span><i class="far fa-check-circle"></i></span
    ><span>Paraben Free</span>
  </div>
  <div>
    <span><i class="far fa-check-circle"></i></span
    ><span>Oil Free</span>
  </div>
  <div>
  <span><i class="far fa-check-circle"></i></span
  ><span>pH: 5.0 - 6.0</span>
  </div>
    </div>
  </div>`
  contentdiv.append(sideinfo);
    maindiv.append(imgdiv,contentdiv);
}
appenditem(product);

