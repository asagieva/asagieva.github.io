/* задание 1*/

const city = 'Ульяновск',
      country = 'Россия',
      population = 614878,
      stadium = true;

/* задание 2*/

const height = 40,
      width = 70;
let rectArea;

rectArea = height * width;

/* задание 3*/

const time = 2,
      speedOfFirst = 95,
      speedOfSecond = 114;

const distance = (speedOfFirst + speedOfSecond)*time;

/*задание 4 */

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
    console.log('randomNumber больше 50')
} else {
    console.log('randomNumber больше 20, и меньше 50');
}

/* задание 5 */

switch (true) {
    case randomNumber < 20:
        console.log('randomNumber меньше 20');
        break;
    case randomNumber > 50:
        console.log('randomNumber больше 50');
        break;
    default:
        console.log('randomNumber больше 20, и меньше 50')
}