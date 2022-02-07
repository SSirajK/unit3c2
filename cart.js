cart = JSON.parse(localStorage.getItem("cart"))||[]
console.log(cart)
function displayData(cartdata){
cart.map(function (cartdata){
    var cartdetails = document.getElementById("cart")
    let div = document.createElement("div")
        div.setAttribute("id","items")

        let Name = document.createElement("h3")
        Name.textContent = cartdata.strMeal
        
        let img = document.createElement("img")
        img.src=cartdata.strMealThumb
        
        let price = document.createElement("p")
        price.innerText = price.innerText = "Price: INR "+Math.round((Math.random()*500)+1)

        
        var deleted = document.createElement("button")
        deleted.innerText = "delete"
        
        var x = price.innerText.match(/(\d+)/)
        var z = x[0]
        console.log(z)

        div.append(Name,img,price,deleted)


        cartdetails.append(div);
})
}
displayData(cart)
