const args= process.argv;

const name = args[2] || "world";

let greeting;

  let time = new Date().getHours();

 if(time<12){
    greeting = "Good morning";
 } else if(time<18){
    greeting = "Good afternoon";
 } else {
    greeting = "Good evening";
 }
 console.log(`${greeting}, ${name}`);
 