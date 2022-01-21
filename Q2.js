nam1={
    name:"khusboo",
    age:20,
    education:"Graduate",
    car:"ford",
    hobies:["running","music"]
}
for (i in nam1){
    console.log(i)
}
nam2={
    name:"pradnya",
    age:22
}
var fs=require("fs")
var obj=JSON.stringify(nam1)
console.log(obj)
var str=JSON.parse(obj)
console.log(str)

// write file in json
fs.writeFileSync("myfile.json",JSON.stringify(nam1,null,3))

// append file
// fs.appendFileSync("myfile.json",JSON.stringify(nam2,null,3))

// read file
var data=fs.readFileSync("myfile.json","utf8")
// console.log(typeof(data))
var data1=JSON.parse(data)
// console.log(data1)
for (i in data1){
    console.log(data1[i])
}

// reaname file
fs.renameSync("myfile.json","your.json")

// delete file
fs.unlinkSync("your.json")

var a="sdsf12"
if(a.match(/[0-9]/g)){
    return ture
}
else{
    
}
let text="is hg jhg is"
let pattern = /is/g;
let result = text.match(pattern);
console.log(result) 

let text = "Visit W3Schools";
let pattern = /w3schools/i;
let result = text.match(pattern);
console.log(result)

let text = `Is this
all there
is`

let pattern = /^is/gmi; 
let result = text.match(pattern);
console.log(result)

let text = "I SCREAM FOR ICE CREAM!";
let pattern = /[A-E]/g; 
let result=text.match(pattern)
console.log(result)