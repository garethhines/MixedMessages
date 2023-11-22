// The arrays contain the randomised elements.
let weatherType = ['rainy', 'cold', 'snowy', 'windy', 'sunny', 'hot', 'warm', 'humid', 'stormy'];
let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let clothes = ['Hat', 'Coat', 'Scarf', 'Jacket', 'pair of Boots', 'pair of Wellies', 'pair of Sandals', ' pair of Sunglasses'];

const messageGenerator = () => {
    // each of these variables produces a random number. This number is used further below in the function to select from the arrays.
    let ranNum1 = Math.floor(Math.random() * 9);
    let ranNum2 = Math.floor(Math.random() * 8);
    let ranNum3 = Math.floor(Math.random() * 8);
   
    // this creates the randomised messages using the random indices produced above to select an element from the arrays.
    let ranString = `It is ${weatherType[ranNum1]} on ${planets[ranNum2]}! You better bring a ${clothes[ranNum3]}!`;

    return ranString
}

console.log(messageGenerator());
