let a = [1, 2];
console.log('A masyvas:', a)

let b = a; //b nukopijuoja masyva a
console.log('B masyvas:',b);

b[0] = 11; //pakieciame b masyvo pirma skaiciu
console.log('B masyvas:',b);

b[1] = 22;  //pakeiciame b masyvo antra skaiciu
console.log('B masyvas:', b);

console.log('A masyvas:', a); ///persirase visas a masyvas, nors dirbome tik su b masyvu, kuris yra kopija a masyvo, a ir b kintamieji, abu redaguoja ta pacia atminties vieta;

////taip vyksta su masyvais ir kitais KOMPLEKSINIAIS kintamaisiais, bet kai yra primityvus kintamieji, nepersiraso.
let x = 5;
let y = a;
y = 7;

console.log(x); //x lieka 5;
console.log(y); // y = 7, x nepersirase;

//yra konstantos ir kintamieji;
//konstantos: const; teoriskai yra nekintamieji, nekinta, nors vadinami vis tiek kintamaisiais, atminties lasteles.
//kintamieji: let ir var. Var stengtis nenaudoti.

//skirstomi kintamieji i primityvius ir kompleksinius;
//PRIMITYVUS: number, 'string', boolean, bigint(number su dviguvai didesne atmintimi);
//KOMPLEKSINIAI: array, object;

//primityvus kintamieji uzima labai nedaug atminties ramuose, nepaisant to, kad stringa galima parasyti labai ilga.
//kompleksiniai gali uzimti labai daug vietos.

//SPREADAS////////////////-----------------------------

let m = [1, 5, -8, true];
console.log('M masyvas:', m);

//let z = m; pasidaro kopija masyvo, kuri yra sujungta su m masyvu.

let z = [...m]; //turime masyvo m kopija, kuri nera susieta su m masyvu, ty, keiciant z masyva, m masyvas nesikeis, spread metodas.
console.log('Z masyvas:', z);

z[1] = 44; //pakeiciame z masyvo antra skaiciu;

z.push(55); //ipusinam i z masyva dar viena skaiciu;

console.log(m); //m masyvas lieka toks pats
console.log(z); //z masyvas pasikeicia

/////GALIMA NEPRIKLAUSOMA KOPIJA PASIDARYTI IR SU CIKLU senesnis variantas----------------------

const numbers = [10, 11, 45]
const numbers1 = [];

for (const number of numbers) { //pasidarome kopija numbers masyvo per cikla supusinant numerius i kita masyva, tuscia.
    numbers1.push(number)
}

numbers[0] = 1000;  //pakeiciame pirmojo masyvo pirma reiksme

console.log(numbers) //pirmas masyvas pasikeicia
console.log(numbers1) //antras masyvas nesikeicia



 




















