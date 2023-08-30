console.clear();

const x: number = 5;
const y: string = 'ABC';
const c: boolean = true;

function sum(a: number, b: number) {
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
}
jhon.favColor = 'black';
console.log(jhon);

console.log('-----------');
type HouseDetails = {
    city: string;
    street: string;
    footage?: number;
    floors?: number;
    rooms?: number;
}
type Food = {
    name: string;
    size: 'small' | 'medium' | 'large';
    // size: string;
}
type User = {
    name: string;
    age: number;
    houseInfo: HouseDetails;
    favoriteFood: Food[];
}



const users: User[]= [
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
    ]
console.log(users);


