const integ = process.argv[2];
if (isNaN(parseInt(integ))) {
    console.log("Not a number");
} else if (integ >= 1) { 
console.log("My number: " + parseInt(integ))
};