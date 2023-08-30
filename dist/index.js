"use strict";
console.clear();
const x = 5;
const y = 'ABC';
const c = true;
function sum(a, b) {
    return a + b;
}
console.log('-----------');
const marks = [10, 8, 4, 6, 7];
marks.push(5);
console.log(marks);
const words = [];
console.log('-----------');
const jhon = {
    name: 'Jhon',
    age: 35,
    isMarried: true,
    favColor: '',
};
jhon.favColor = 'black';
console.log(jhon);
console.log('-----------');
const users = [
    {
        name: 'Jhon',
        age: 35,
        houseInfo: {
            city: 'Baisogala',
            street: 'Gedemino str.',
            footage: 500,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
            { name: 'Food-4', size: 'large' },
        ],
    },
    {
        name: 'Dan',
        age: 28,
        houseInfo: {
            city: 'Baisogala',
            street: 'Gedemino str.',
            footage: 500,
            floors: 3,
            rooms: 7,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
            { name: 'Food-4', size: 'large' },
        ],
    },
];
console.log(users);
