const sides = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector('#output');

function calculateSumOfSquare(a,b){
    const SumOfSquare = a*a + b*b;
   return(SumOfSquare);

}
function calculateHypotenuse(){
    const SumOfSquare =   calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(SumOfSquare);
    outputEl.innerText = "the length of hypotenuse is " + lengthOfHypotenuse.toFixed(4); 
}
hypotenuseBtn.addEventListener("click",calculateHypotenuse);