const examples = [{
    key: 1,
    title: 'Sum of all the elements in an array',
    code: `const array = [1, 2, 3, 4];
const sum = array.reduce((collectorOfValues, value) => collectorOfValues + value, 0);
console.log(sum);

expected output: 10`,
    expo: `
    start from 0, as it initional value, in the first - pushed to collectorOfValues
    0 + 1 = 1
    1 + 2 = 3
    3 + 3 = 6
    6 + 4 = 10 <= final itteration
    `,
    mainexpo: `
    The reduce() walks through the array element-by-element at each step adding the current array value ( => value) to the result from the previous step ( => collectorOfValues) (this result is the running sum of all the previous steps) — until there are no more elements to add.`
},
{
    key: 2,
    title: 'Multiply of all the elements in an array',
    code: `const array = [1, 2, 3, 4];

const sum = array.reduce((collectorOfValues, value) => collectorOfValues * value, 1);

console.log(sum);
expected output: 24`,
    expo: `
    start from 1, as it initional value, in the first - pushed to collectorOfValues
    1 * 1 = 1
   1 * 2 = 2
   2 * 3 = 6
    6 * 4 = 24 <= final itteration
    `,
    mainexpo: `Since we are multiplying, the initial value must be 1, in the case of multiplication by 0 the result will always be 0. As in previous, the reduce() walks through the array element-by-element at each step adding the current array value ( => value) to the result from the previous step ( => collectorOfValues) (this result is the running multiplication of all the previous steps) — until there are no more elements to add.`
},
{
    key: 3,
    title:`Sum of values in an array of objects`,
    code: `const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((collectorOfValues, value) => collectorOfValues + value.x, 0)
console.log(sum); // logs 6
expected output: 6`,
    expo: `
Since this is an array of objects, reduce() will treat each of them the same way as the numbers in the examples above.
But we want access to specific property of a key, so we use name of the key of the object ( value.x ) to be placed in value.
x.0 + x.1 = 1
x.1 + x.2 = 3
x.3 + x.3= 6 <= final itteration`,
    mainexpo: `To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.`

},
{
    key: 4,
    title:`Reduce() as simulation of the flat() method with 2 levels array`,
    code: `const array = [[0, 1], [2, 3], [4, 5]]
const flattened = array.reduce(startArray, incomeValue) => {
    return startArray.concat(incomeValue);
}, []);

console.log(flattened)
expected: [0, 1, 2, 3, 4, 5]`,
    expo: `method concat(array1, array2, ...) is used to merge two or more arrays!
at the beginning in "startArray" we have "start value" as created empty array => []
receiver "incomeValue" moves along the top level of the array between the nested arrays: "[0, 1] next=> [2, 3] next=> [4, 5] ", each of them for him is value which he puts in to concat() method "concat(incomeValue)"
by using a dot "." we bind the method to the "startArray", thus, we specify that pushed in concat() values are should be placed in a new array inside "startArray"
then return "startArray"`,
    mainexpo: `In this example you have 2 levels array, it's mean one array have others inside. For simulate the flat() method by using reduce() we need a helper - method concat().`

},
{
    key: 5,
    title:`Sort values by ages, in object with array of objects`,
    code: `const people = [
    {name: 'Kyle', age:26},
    {name: 'Jhon', age: 31},
    {name: 'Sally', age: 42},
    {name: 'Jill', age: 42},
]
const result = people.reduce((groupedPeople, person) => {
const age = person.age
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
    }, {}
)

console.log(result)

expected output: {
    26: [{name: 'Kyle', age:26}],
    32: [{name: 'Jhon', age: 31}],
    42: [{name: 'Sally', age: 42}],
    [{name: 'Jill', age: 42}],
}`,
    expo: `create variable "age" and get equal of value of all ages "person.age" <= (26, 31, 42, 42)
check if we have anybody at groupedPeople[age] on first iteration ({start value is empty = null })
then create assign to groupedPeople[age] empty array []
then push to this empty array "person" (objects of array "people")
return groupedPeople *! remember, always return accumulator"`,
    mainexpo: `Note: only unique numbers are written when the variable "age" is created, so 2 arrays are placed in key 42`
}
]

export default examples