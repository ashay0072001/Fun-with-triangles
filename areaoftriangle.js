// const heightOfTriangle = document.querySelector("#height-angle");
// const baseOfTriangle = document.querySelector("#base-angle");
const outputEl = document.querySelector("#output");
const triangleAreaBtn = document.querySelector(".area-button");
const sides = document.querySelectorAll(".base-height")


function calculateArea(base,height){

    const TotalArea = (base*height)/2;
   return(TotalArea);
    

}




function calculateAreaOfTriangle(){
    const TotalArea =   calculateArea(Number(sides[0].value),Number(sides[1].value));
    
    
    outputEl.innerText = "The area of Triangle is " + TotalArea;


}





triangleAreaBtn.addEventListener("click", calculateAreaOfTriangle);