let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());



let myNewDate = new Date("03-08-2004")
// console.log(myNewDate.toDateString());

let nowDate =Date.now()
// console.log(nowDate);

// console.log(myNewDate.getTime());


// console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

console.log(`date is ${newDate.getDate()} and year is ${newDate.getFullYear()}`);


console.log(newDate.toLocaleString('default',{
    weekday : "narrow", 
    timeZone : 'America/Toronto'
})
)





