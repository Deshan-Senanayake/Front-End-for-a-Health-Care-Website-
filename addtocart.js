

const product = [
    {
        id: 0,
        image: 'cart1.jpeg',
        title: 'Blood Sugar Meter',
        price: 120,
    },
    {
        id: 1,
        image: 'cart2.jpeg',
        title: 'First aid kit',
        price: 60,
    },
    {
        id: 2,
        image: 'cart3.jpeg',
        title: 'Anymeter',
        price: 230,
    },
    {
        id: 3,
        image: 'cart4.jpeg',
        title: 'Thermometer',
        price: 100,
    },
    {
        id: 4,
        image: 'cart5.png',
        title: 'Stethoscope',
        price: 100,
    },
    {
        id: 5,
        image: 'cart6.webp',
        title: 'Nebulizer',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box1'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}


document.getElementById('f1').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    if (name.trim() === '') {
        alert('Please enter a Name');
        event.preventDefault(); 
    } else if (email.trim() === '') {
        alert('Please enter an email');
        event.preventDefault();
    } else if (address.trim() === '') {
        alert('Please enter an address');
        event.preventDefault();
    }else {
        displayOrderSummary();
    }

});

function displayPoints() {
   
    var points = localStorage.getItem('quizPoints');

   
    if (points === null) {
        document.getElementById('result').innerHTML = 'No points earned';
    } else {
       
        document.getElementById('result').innerHTML = 'Points gained from the quiz : ' + points;
    }
}

function calculateFinalPrice() {
    var points = localStorage.getItem('quizPoints'); 

    if (points === null || parseFloat(points) < 0) {
        document.getElementById('finalPrice').innerHTML = 'No discount because of negative points.';
    } else {
        var total = parseFloat(document.getElementById("total").innerHTML.slice(2)); 
        var discount = parseFloat(points); 

        if (discount >= 0) {
            var discountAmount = (total * discount) / 100; 
            var finalPrice = total - discountAmount; 
            document.getElementById('finalPrice').innerHTML = "You get " + discount + "% discount. Final Price: $" + finalPrice.toFixed(2);
        } else {
            document.getElementById('finalPrice').innerHTML = "Final Price: $" + total.toFixed(2);
        }
    }
}


function displayOrderSummary() {
    var name = document.getElementById('name').value;
    var finalPrice = document.getElementById('finalPrice').innerHTML;

    var orderSummary = "Dear " + name + ", you have ordered:\n";

    cart.forEach(item => {
        orderSummary += "1 " + item.title + " at a cost of $" + item.price.toFixed(2) + "\n";
    });

    orderSummary +=  finalPrice;

    alert(orderSummary);
}
