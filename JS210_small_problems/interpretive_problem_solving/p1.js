// 25
// Turn on and off n switches n times:
//   Implied: same number of passes as number of switches
//   Every pass, the switch order changes
// Input: Number n (integer) 
// Output: array of integers representing the switches that are on
// Data structure: array of booleans representing lights
// Algorithm:
// 1. Create the boolean array
//   - Create an array of LENGTH num, and FILL with boolean false
// 3. Loop through the boolean array num times (1..num)
//   -flip lights of multiple idx
//   - if the light is a multiple of the idx, flip it.
// 4. After the loop finishes, map the array to either undefined or the idx + 1
//    -undefined if false, idx if true (on)
//    -then filter away the undefined and return the array of lights.

function flipLights(lights, idx) {
  return lights.map((light,  i) => {
    if ((i + 1) % idx === 0) {
      return !light;
    } else {
      return light;
    }
  });
}
function booleanToLights(lights) {
  return lights.map((light, idx) => {
    if (light) {
      return idx + 1;
    } else {
      return undefined;
    }
  }).filter(light => !!light);
}

function lightsOn(num) {
  let lights = new Array(num).fill(false);
  for (let idx = 1; idx <= num; idx += 1) {
    lights = flipLights(lights, idx);
  }
  return booleanToLights(lights);
}

console.log(lightsOn(5));
console.log(lightsOn(100));
