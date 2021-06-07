function getWeight(){

    let weight = document.getElementById('weight')
    
    let moonWeight = (weight.value * 1.62) /  9.81
    moonWeight = moonWeight.toFixed(2)
    document.getElementById('moon').innerHTML = moonWeight + "  kg"

    let mercuryWeight = (weight.value * 3.7) /  9.81
    mercuryWeight = mercuryWeight.toFixed(2)
    document.getElementById('mercury').innerHTML = mercuryWeight + "  kg"

    let venusWeight = (weight.value * 8.87) /  9.81
    venusWeight = venusWeight.toFixed(2)
    document.getElementById('venus').innerHTML = venusWeight + "  kg"

    let earthWeight = weight.value * 9.81 / 9.81
    document.getElementById('earth').innerHTML = earthWeight + "  kg"

    let marsWeight = (weight.value * 3.721) /  9.81
    marsWeight = marsWeight.toFixed(2)
    document.getElementById('mars').innerHTML = marsWeight + "  kg"

    let jupiterWeight = (weight.value * 24.79) /  9.81
    jupiterWeight = jupiterWeight.toFixed(2)
    document.getElementById('jupiter').innerHTML = jupiterWeight + "  kg"

    let saturnWeight = (weight.value * 10.44) /  9.81
    saturnWeight = saturnWeight.toFixed(2)
    document.getElementById('saturn').innerHTML = saturnWeight + "  kg"

    let uranusWeight = (weight.value * 8.87) /  9.81
    uranusWeight = uranusWeight.toFixed(2)
    document.getElementById('uranus').innerHTML = uranusWeight + "  kg"

    let neptuneWeight = (weight.value * 11.15) /  9.81
    neptuneWeight = neptuneWeight.toFixed(2)
    document.getElementById('neptune').innerHTML = neptuneWeight + "  kg"
}




// // 
// <div class="container">
// <div class="main">
//     <div class="mb-3">
//       <label for="exampleInputEmail1" class="form-label">Enter Your Weight</label>
//       <input type="number" class="form-control" id="weight" oninput="getWeight()" placeholder="Kilograms">
//     </div>
//     <br><br>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Moon</label>
//     <div class="mb-3" id="moon"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Mercury</label>
//     <div class="mb-3" id="mercury"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Venus</label>
//     <div class="mb-3" id="venus"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Earth</label>
//     <div class="mb-3" id="earth"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Mars</label>
//     <div class="mb-3" id="mars"></div>
//     <div class="right">
//     <label for="exampleInputEmail1" class="form-label">Your Weight on Jupiter</label>
//     <div class="mb-3" id="jupiter"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Saturn</label>
//     <div class="mb-3" id="saturn"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Uranus</label>
//     <div class="mb-3" id="uranus"></div>

//     <label for="exampleInputEmail1" class="form-label">Your Weight on Neptune</label>
//     <div class="mb-3" id="neptune"></div>
// </div>
    
// </div>
// </div>