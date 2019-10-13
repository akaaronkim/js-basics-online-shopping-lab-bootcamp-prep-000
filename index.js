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
  var x = 0;
  for (var i = 0; i < cart.length; i += 1) {
    x += cart[i][Object.keys(cart[i])];
  }
  return x;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i += 1) {
    if (Object.keys(cart[i]) === item) {
      cart = [...cart.slice(0, i), ... cart.slice(i + 1)];
      return cart;
    }
  }
    console.log('That item is not in your cart.')
    return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
  }

placeOrder();
