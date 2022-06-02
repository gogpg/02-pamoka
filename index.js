////saugiausias budas rasti didziausia.

const marks = [10, 2, -7, 5, Infinity, -Infinity, -1, -3.14];
const marks1 = [-7, -Infinity, -1, -3.14];
const marks2 = [7, 11, -1, -3.14];
const marks3 = [2, 100, 45];
const marks4 = ['labas', true, false, {}, []];
const marks5 = [NaN]


function maxNumber(list) { //gaunu sarasa, bet koki masyva. bendra funkcija visiems masyvams.
    let max = -Infinity;    ///siuo atveju, ieskodami didziausio skaiciaus, mes visada ji rasime, nes uz -begalybe nieko mazesnio nera, bet koks skaicius bus didesnis.

    for (const number of list) { //gaunu sarasa ir dirbu su skaiciumi is masyvo 
        if (typeof number === 'number' && number > max && isFinite(number)) /*isFinite(number) ar numeris yra baigtinis/*!== Infinity*/ {   //jei skaicius didesnis uz maksimalu ir nelygu infinity
            max = number;
        }
    }

    if ( max === -Infinity) {   //jeigu prasisukus ciklui neranda jokios reiksmes, lieka pradine kintamojo reiksme -Infinity
        return 'Error: duotame masyve nerasta nei vieno normalaus skaiciaus'
    }
    return max;
}

console.log(maxNumber(marks));
console.log(maxNumber(marks1));
console.log(maxNumber(marks2));
console.log(maxNumber(marks4));

//kol netikriname ar typeof number == "number", tol true arba false supranta kaip skaicius. 
// false = 0;
// true = 1;

console.log(typeof 5); //number
console.log(typeof Infinity) //number
console.log(typeof '5'); //string
console.log(typeof true); //boolien
console.log(typeof NaN); //number

//NaN nera daugiau uz -Infinity;

