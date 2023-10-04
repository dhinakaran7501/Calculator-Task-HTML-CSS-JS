let cardText = document.getElementById("card-text");
let cardBody = document.getElementById("card-body");
let inputBox = document.getElementById("text");

let ac = document.createElement("input");
ac.classList.add("operator");
ac.setAttribute("type","button");
ac.setAttribute("value","AC");
ac.addEventListener("click",(e)=>{
  inputBox.value = ""
})
cardText.appendChild(ac);

let de = document.createElement("input");
de.classList.add("operator");
de.setAttribute("type","button");
de.setAttribute("value","DE");
de.addEventListener("click",(e)=>{
    inputBox.value= inputBox.value.slice(0,-1);
  
})
cardText.appendChild(de);

let dot = document.createElement("input");
dot.classList.add("operator","values");
dot.setAttribute("type","button");
dot.setAttribute("value",".");
cardText.appendChild(dot);

let percentage = document.createElement("input");
percentage.classList.add("operator","values");
percentage.setAttribute("type","button");
percentage.setAttribute("value","%");
cardText.appendChild(percentage);

// \\\\\\\\\\\\\\789/

let div = document.createElement("div");
div.setAttribute("id","card-text");
cardBody.appendChild(div);

let seven = document.createElement("input");
seven.classList.add("values");
seven.setAttribute("type","button");
seven.setAttribute("value","7");
div.appendChild(seven);

let eight = document.createElement("input");
eight.classList.add("values");
eight.setAttribute("type","button");
eight.setAttribute("value","8");
div.appendChild(eight);

let nine = document.createElement("input");
nine.classList.add("values");
nine.setAttribute("type","button");
nine.setAttribute("value","9");
div.appendChild(nine);

let slash = document.createElement("input");
slash.classList.add("values");
slash.classList.add("operator");
slash.setAttribute("type","button");
slash.setAttribute("value","/");
div.appendChild(slash);

// \\\\\\\\\\\\\\456*

let div1 = document.createElement("div");
div1.setAttribute("id","card-text");
cardBody.appendChild(div1);

let four = document.createElement("input");
four.classList.add("values");
four.setAttribute("type","button");
four.setAttribute("value","4");
div1.appendChild(four);

let five = document.createElement("input");
five.classList.add("values");
five.setAttribute("type","button");
five.setAttribute("value","5");
div1.appendChild(five);

let six = document.createElement("input");
six.classList.add("values");
six.setAttribute("type","button");
six.setAttribute("value","6");
div1.appendChild(six);

let star = document.createElement("input");
star.classList.add("operator","values");
star.setAttribute("type","button");
star.setAttribute("value","*");
div1.appendChild(star);

// \\\\\\\\\\\\\\123-

let div2 = document.createElement("div");
div2.setAttribute("id","card-text");
cardBody.appendChild(div2);

let one = document.createElement("input");
one.classList.add("values");
one.setAttribute("type","button");
one.setAttribute("value","1");
div2.appendChild(one);

let two = document.createElement("input");
two.classList.add("values");
two.setAttribute("type","button");
two.setAttribute("value","2");
div2.appendChild(two);

let three = document.createElement("input");
three.classList.add("values");
three.setAttribute("type","button");
three.setAttribute("value","3");
div2.appendChild(three);

let minus = document.createElement("input");
minus.classList.add("operator","values");
minus.setAttribute("type","button");
minus.setAttribute("value","-");
div2.appendChild(minus);

// \\\\\\\\\\\\\\ 00,0,=,+

let div3 = document.createElement("div");
div3.setAttribute("id","card-text");
cardBody.appendChild(div3);

let doublezero = document.createElement("input");
doublezero.classList.add("values");
doublezero.setAttribute("type","button");
doublezero.setAttribute("value","00");
div3.appendChild(doublezero);

let zero = document.createElement("input");
zero.classList.add("values");
zero.setAttribute("type","button");
zero.setAttribute("value","0");
div3.appendChild(zero);

let equal = document.createElement("input");
equal.classList.add("operator");  
equal.setAttribute("type","button");
equal.setAttribute("value","=");
div3.appendChild(equal);

let plus = document.createElement("input");
plus.classList.add("operator","values");
plus.setAttribute("type","button");
plus.setAttribute("value","+");
div3.appendChild(plus);


let calNums = document.querySelectorAll(".values");
calNums.forEach((values)=>{
  values.addEventListener("click",(e)=>{
    let targetValue = e.target.value;
    inputBox.value += targetValue;
    let val = inputBox.value.toString();
  })
}) 

equal.addEventListener("click",(e)=>{
  let inputValue = inputBox.value;
  inputBox.value = eval(inputValue);
  // console.log(eval(inputValue));
});

