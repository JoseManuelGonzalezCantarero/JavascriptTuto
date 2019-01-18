let yummyThings = ['pizza', 'gelato', 'sushi', 'cheeseburguer'];

let greatThings = ['swimming', 'sunsets', ...yummyThings, 'New Orleans'];

let copyOfGreatThings = [...greatThings];
copyOfGreatThings.push('summer');

console.log(greatThings);
console.log(copyOfGreatThings);