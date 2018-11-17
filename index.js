var cart = [];
var tempCart = [];
var cartSum = 0;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var min = Math.ceil(1);
 var max = Math.floor(100);
 var generateNumber = Math.floor(Math.random() * (max - min + 1)) + min;
 cart.push({itemName: item, itemPrice: generateNumber})
   if (cart.length < 1) {
     return "Your shopping cart is empty."
   } else {
     return `${item} has been added to your cart.`;
   }
}

function viewCart() {
  // write your code here
  var firstItem;
  var lastItem;
  var remainingItems = [];

  for (var i = 0; i <= cart.length; i++) {
    if(cart.length < 1) {
        return "Your shopping cart is empty."
    } else if(cart.length == 1) {
        firstItem = `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`;
        return `${firstItem}.`;
    }
    else if (cart.length == 2) {
        firstItem = `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`;
        lastItem = `and ${cart[cart.length-1].itemName} at \$${cart[cart.length-1].itemPrice}`;
        return `${firstItem}, ${lastItem}.`;
    } else {
        for(var i = 1; i <= cart.length - 2; i++) {
          remainingItems.push (`${cart[i].itemName} at $${cart[i].itemPrice}`);
        }
        var spacedRemainingItems = remainingItems.join(', ');
        firstItem = `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}`;
        lastItem = `and ${cart[cart.length-1].itemName} at \$${cart[cart.length-1].itemPrice}`;
        return `${firstItem}, ${spacedRemainingItems}, ${lastItem}.`;
      }
  }
}


function total() {
  // write your code here
  var cartTotal = [];
  cartSum = 0;
  for (var i = 0; i < cart.length; i++) {
    cartTotal.push(cart[i].itemPrice);
  }

  for (var i = 0; i < cartTotal.length; i++) {

      cartSum+= cartTotal[i];
  }
  return cartSum;
}

function removeFromCart(item) {

  var removeItem = [];
  for(var i = 0; i <cart.length; i++) {
    removeItem.push(cart[i].itemName)
  }

  if(removeItem.includes(item)){
    var a = removeItem.indexOf(item)
    console.log(cart[a].itemName)
    cart.splice(cart[a].itemName, 1)
    return cart;
  } else {
    return "That item is not in your cart."
  }

/*var counter = cart.length;
  while (counter >= 1) {
    if(item == cart[counter-1].itemName) {
      //cart.splice(cart[counter-1].itemName, 1)
      console.log(`${item} is in your cart`)
    }
    counter--;
  }*/
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don\'t have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is \$${cartSum}, which will be charged to the card ${cardNumber}.`;
  }
}
