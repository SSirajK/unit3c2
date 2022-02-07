url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
async function getData(){
    try{
        let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    releaseData(data)
    }
    catch(err){0-[]
        console.log(err)
    }
}getData()

let cart = localStorage.getItem("cart")
if(!cart){
    cart=[]
    localStorage.setItem("cart",JSON.stringify(cart))
    counts(cart)
}
else{
     cart = JSON.parse(cart)
     counts(cart)
}
function counts(cart){
    cartCount = document.getElementById("count")
    cartCount.textContent="Your list: "+cart.length;
}
function releaseData(data){
    let menu = document.getElementById("menu");
    menu.html="";
    let products = data.meals
    products.forEach(function (products){
        let div = document.createElement("div")
        div.setAttribute("id","items")

        let Name = document.createElement("h3")
        Name.textContent = products.strMeal
        
        let img = document.createElement("img")
        img.src=products.strMealThumb
        
        let price = document.createElement("p")
        price.innerText = "Price: INR "+Math.round((Math.random()*500)+1)
        let cartButton = document.createElement("button")
        cartButton.setAttribute("id","addtocart")
        cartButton.innerText = "Add to Cart";
        cartButton.onclick= function (event){
            addToCart(products)
        }

        div.append(Name,img,price,cartButton)
        menu.append(div)
    });
    function addToCart(products){
        cart = JSON.parse(localStorage.getItem("cart"))
        
        cart.push(products)
        console.log(cart)
        localStorage.setItem("cart",JSON.stringify(cart));
        console.log(cart)
        counts(cart)
    }
}
