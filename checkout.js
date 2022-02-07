function order(){
    alert("Your Order is Placed")
    var name = document.querySelector("#name").value
    var number = document.querySelector("#number").value
    var address = document.querySelector("#address").value
    function setg(){
         alert("your order is being cooked")
      }
    var sett = setTimeout(setg,3000)
    function ready(){
      alert("your order is ready")
    }
    var settt = setTimeout(ready,8000)
    function out(){
      alert("your order is out for delivery")
    }
    var se = setTimeout(out,10000)
    function del(){
      alert("your order is DELIVERED")
    }
    var se = setTimeout(del,12000)
  }