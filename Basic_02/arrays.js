const marvel_heroes=["ironman","spiderman","hulk","thor"]
const dc_heroes=["batman","superman","flash","aquaman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

let merge_heroes=marvel_heroes.concat(dc_heroes)
// console.log(merge_heroes);



const all_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_heroes);

let nested_array=[1,2,3,[4,5,[6,7,8,[9,10,11,[12,13]]]]]

let flat_array=nested_array.flat(Infinity)
// console.log(flat_array);


let stringarray="sahil"
console.log(Array.isArray([1,2,3]));
console.log(Array.from("sahil"));
console.log(Array.from({name : "sahil"}));  //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


