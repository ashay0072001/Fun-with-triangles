const inputs  = document.querySelectorAll( ".angle-input")
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value));
     console.log(sumOfAngles);
    if(sumOfAngles === 180){
     outputEl.innerText = "the angles are forming a triangle";
    }
    else{
    outputEl.innerText = "so,sorry angles are not forming a triangle";
    }
}


isTriangleBtn.addEventListener("click", isTriangle)