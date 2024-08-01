const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// Tesla
// Mercedes
console.log(randomCar)
console.log(otherRandomCar)


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// name is not defined directly but it is labeled as otherName in the prior code line
// if we get rid of console.log(name) than we get : Elon
console.log(name);
console.log(otherName);



const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
// 12345
// undefined
console.log(password);
console.log(hashedPassword);


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
// false 2!=5
// true 2==2
console.log(first == second);
console.log(first == third);


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
// value
// [1, 5, 1, 8, 3, 3]
// 1
// yes, 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

