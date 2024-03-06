let variabilaCamelCase = "Exemplu variabila camel case";
const VARIABILA_UPPER_SNAKE_CASE = "Exemplu variabila upper snake case";
const VARIABILA_CAPITALE_CASE = "Exemplu variabila capitale case";//Pct1
///////////////////
const nume = "Ana";
const varsta = 25;
const oras = "Chisinau";

const mesaj = `Bună ziua, ${nume}! Ai ${varsta} de ani și ești din ${oras}.`;

console.log(mesaj);//Pct2
//////////////
const numar = 123;

const numarToString = numar.toString();

console.log(typeof numarToString); // "string"

const numarToString2 = String(numar);

console.log(typeof numarToString2); // "string"

const numarToString3 = numar + "";

console.log(typeof numarToString3); // "string"
const numarToBoolean = Boolean(numar);

console.log(typeof numarToBoolean); // "boolean"

// Exemplu cu numar 0
const numarZero = 0;
const numarZeroToBoolean = Boolean(numarZero);

console.log(numarZeroToBoolean); // false

const numarToBoolean2 = numar !== 0;

console.log(typeof numarToBoolean2); // "boolean"//Pct3


/////////////////////M1
const sir = "123";

const sirToNumber = parseInt(sir);

console.log(typeof sirToNumber); // "number"
//////////////////M2
const sirToBoolean = Boolean(sir);

console.log(typeof sirToBoolean); // "boolean"
///////////////////////////////M3

const sirToNumber3 = Number(sir);

console.log(typeof sirToNumber3); // "number"

// Exemplu cu string gol
const sirGol = "";
const sirGolToBoolean = Boolean(sirGol);

console.log(sirGolToBoolean); // false//Pct4
//////////////////////
const valoare = 0; // Modificați valoarea pentru a testa diferite scenarii

if (valoare) {
  console.log("Valoarea este true");
} else {
  console.log("Valoarea este falsy");
}

// Exemplu de negatie
if (!valoare) {
  console.log("Valoarea este falsy (negatie)");
}

// Exemplu de operator AND
if (valoare && valoare === 0) {
  console.log("Ambele condiții sunt true (AND)");
}

// Exemplu de operator OR
if (valoare || valoare === "0") {
  console.log("Cel puțin o condiție este true (OR)");
}//pct5
//////////////
const esteMajor = varsta >= 18 ? "Major" : "Minor";

console.log(esteMajor); // "Major" (dacă varsta >= 18)

const varsta1 = 17; // Modificați valoarea pentru a testa diferite scenarii

console.log(esteMajor); // "Minor" (dacă varsta < 18)//Pct6
////////////////////////////////////////////

const tipMeniu = '1';//prompt("Alegeți tipul de meniu: (1) Vegetarian, (2) Vegan, (3) Carne");

switch (tipMeniu) {
  case "1":
    console.log("Meniul vegetarian include: salată, supă de legume, paste cu pesto.");
    break;
  case "2":
    console.log("Meniul vegan include: burger de linte, salată quinoa, curry de legume.");
    break;
  case "3":
    console.log("Meniul cu carne include: friptură de pui, burger de vită, paste bolognese.");
    break;
  default:
    console.log("Opțiune invalidă. Alegeți un număr din 1, 2 sau 3.");
}///Pct7
