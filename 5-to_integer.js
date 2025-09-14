const integ = process.argv[2];
if (isNaN(parseInt(integ))) {
    console.log("Not a number");
} else { 
console.log("My number: " + parseInt(integ));
};