console.log("text ⁄ hallo");

console.log("hallo Welt".slice(5));
console.log("hallo Welt".slice(5, 8)); //SLICE Absolute Position
console.log("*".repeat(20));
console.log("Hallo Welt".substr(6, 2)) //Länge übergeben 

//console.log("Hallo Welt".replace())
//consol.log("Hallo Welt".trim())
//console.log(pos); // position

//Mathematische Operatoren//

console.log(2 ** 10);  //Potenzen

console.log(Math.round)  //Runden
console.log(Math.floor)  // Abrunden
console.log(Math.ceil) //Aufrunden

Math.max() //Maximum 
Math.min() //Minimum 

let s = "3.141"
console.log(parseInt(s, 10))  //Automatische Erkennung //Von STRING ZU NUMBER ZWEITER PARAMETER 10 ANgeben um wirklich richtiges ergebnis zu bekommen
console.log(parseFloat(s)) //Mit Kommazahlen!

let result = (1 / 3) * 3  //Am besten keine Kommazahlen berwedenen, wegen rundungsfehler
console.log(result)

//Zahl zu String

let n = 3.141
console.log("" + n)
console.log(n.toExponential())  //Für HOHE Rechnungen
console.log(n.toFixed(2))
console.log(n.toPrecision(2))

let tankstelle = "15,37€"
let amount = parseFloat(tankstelle.replace(",", ".")) * 100
console.log(tankstelle)
console.log(amount)
console.log(Math.floor(amount / 200))

amount = amount - Math.floor(amount / 200) * 200
console.log(amount)

let bill = 17.00
console.log(Math.ceil(bill * 1.1 / 4) * 4)

/**  Für Editor */

let students = [
    "Max Müller",
    "Monika Maier",
    "Toni Maccaroni"
]

console.log(typeof students)
console.log(".length", students.length)
console.log(students[0])
console.log([0])

students.push("Jutta Trulla", "Joker") //Zufügeen ins Array
console.log(students)
students.pop()                          //Entfernt das letzte Element
console.log(students)

//Überschreiben

students[0] = "Maximilian Müller"           //einfach neue Zuweisung
console.log(students)
console.log(students.indexOf("Max Müller")); //-1 bedeutet, dass nicht vorhanden ist
students.sort()                             // Alphabetisch sortiert
console.log(students)
students.reverse()                          //Rückwärts soriert
console.log(students)
students[30] = "Batman"               //Gibt leere Elemente an und setzt dann Batman ein
console.log(students)
students.splice(0, 2, "Fluffi")               //Zahlen sind Index SPLICE entfernt und fügt den String hinzu! Starte bei 0
console.log(students)

/*console.log("text");
let num2 = [3, 4, 5, 6, 7, 8];

for (let i in num2) {
    console.log([i]);
}

let grade = {
    math: 10,
    port: 4,
    html: 8,
    css: 6,
    js: 9
}

let result2 = 0;   //Zusammenrechnen! es muss immer der 0 Wert zuerst gesetzt werden

for (let i in grade) {
    result2 += grade[i];
}
console.log(result2)

let keysArray = Object.keys(grade);         // alle Keys ausgeben
console.log(keysArray);

let valuesArray = Object.values(grade);   //eunen Array ausgeben
console.log(valuesArray);

let entriesArray = Object.entries(keysArray); //Alle Arrays und Values
console.log(entriesArray);
*/
