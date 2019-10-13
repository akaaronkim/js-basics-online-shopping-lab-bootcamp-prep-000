  var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random() * 100);
  cart.push({[item] : price});
  console.log('${item} has been added to your cart.');
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  
  var newArray = [];
    for (var i = 0; i < cart.length; i += 1) {
      var keys = Object.keys(cart[i])[0];
      newarray.push(keys + " at $" + cart[i][keys])
    }
    
    var str = 'In your cart, you have ';
    if (newArray.length === 1) {
      str += newArray + '.';
    } else if (newArray.length === 2) {
      str += (newArray[0] + ' and ' + newArray[1] + '.');
    } else if (newArray.length > 2) {
      var last = newArray.pop();
      var other = newArray.join(', ');
      str += (other + ', and' + last + '.');
    }
    console.log(str);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
