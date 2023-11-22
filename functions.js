let weatherType = ['rainy', 'cold', 'snowy', 'windy', 'sunny', 'hot', 'warm', 'humid', 'stormy'];
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let clothes = ['Hat', 'Coat', 'Scarf', 'Jacket', 'pair of Boots', 'pair of Wellies', 'pair of Sandals', ' pair of Sunglasses'];

const messageGenerator = () => {
    let ranNum1 = Math.floor(Math.random() * 9);
    let ranNum2 = Math.floor(Math.random() * 8);
    let ranNum3 = Math.floor(Math.random() * 8);
   
    let ranString = `It is ${weatherType[ranNum1]} on ${planets[ranNum2]}! You better bring a ${clothes[ranNum3]}!`;

    return ranString
}

console.log(messageGenerator());
