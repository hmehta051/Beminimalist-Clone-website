let user_cart = null;

module.exports = class Cart {
    static save(product){
        console.log(product);
        if (user_cart){
            const existingprodIndex = user_cart.products.findIndex( p => p.id == product.id);
            console.log("existingprodIndex:",existingprodIndex);
            if (existingprodIndex == 0){
                user_cart.products[existingprodIndex];
                user_cart.total_price = (existingprodIndex.dprice);
            }else {
                user_cart.products.push(product);
                user_cart.total_price += product.dprice;
            }
        }else {
            user_cart = { products: [] , total_price: 0};
            user_cart.products.push(product);
            user_cart.total_price = product.dprice;
        }
    }
    static getCart(){
        return user_cart;
    }
}