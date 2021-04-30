var x = document.getElementById("number");
document.getElementById('add').addEventListener('click', increase)
document.getElementById('low').addEventListener('click', decrease)

let number = 0
function changeColor(number){
    var color = ""
    if(number<0){
        color = 'red'
    }
    else if(number > 0){
        color = 'green'
    }
    else{
        color = 'white'
    }
    return color
}


function increase(){
    number ++
    x.innerHTML = number
    x.style.color = changeColor(number)       
}



function decrease(){
    number --
    x.innerHTML = number
    x.style.color = changeColor(number)       
}
