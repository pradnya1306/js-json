// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj); // John

// JavaScript object
const jsonData = { "name": "John", "age": 22 };

// converting to JSON
const obj = JSON.stringify(jsonData);

// accessing the data
console.log(obj); // "{"name":"John","age":22}"

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr)

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
console.log(obj)
console.log( obj.name + ", " + obj.birth)

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
console.log(myJSON)
const fs=require("fs")
var jsonData = { "name": "John", "age": 22 }
var obj=JSON.parse(jsonData)
fs.writeFile("myfile.json",obj,function(err){
    if (err) throw err;
    console.log(err)
})

nam1={
    name:"khusboo",
    age:20
}
var fs=require("fs")


fs.writeFileSync("lina.json",JSON.stringify(nam,null,5))

var data=fs.readFileSync("lina.json","utf8")

var data1=JSON.parse(data)

console.log(data)
fs.appendFileSync("lina.json",JSON.stringify(nam1,null,5))

fs.renameSync("lina.json","khusboo.json")

fs.unlinkSync("khusboo.json")





fs.renameSync("lina.tex","pooja.tex")


var data=fs.readFileSync("pooja.tex","utf8")
console.log(data)

fs.unlinkSync("pooja.tex")






