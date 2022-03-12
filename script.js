let person1 = {
    name: "John",
    lastName: "Wayne",
    age: "19",
}
console.log(person1.name);
console.log(person1.lastName);
console.log(person1.age);

const person2 = {
    name: "Nikolai",
    lastName: "Markalainen",
    age: "23",
    cars:[
        { name: "Ford", moldels: ["Mustang", "Ranger"] },
        { name: "BMW", models: ["X3", "X5", "Z4"] }
    ],
getfullName: function(){
    return this.name + " " + this.lastName;
},
getOwnedCarTypes: function(){
    return this.cars.length;
}
}
console.log(person2.getfullName());
console.log(person2.getfullName()+ " owns " + person2.getOwnedCarTypes() + " types");
person1.nationality = "American";
console.log(person2);
console.log(person2.name);
console.log(person2.lastName);
console.log(person2.age);

person2.name = "Dog";
console.log(person2.name);

person2.nationality = "Finnish";
console.log(person2.nationality);
console.log(person1.nationality);
console.log(person1);
console.log(person2);
console.log("Name: " + person2["name"] + " " + person2["lastName"]);
for(let property in person2){
    console.log(property);
}
for(let property in person2){
    console.log(property);
    console.log(person2[property]);
}

document.getElementById("myobject").innerHTML = person2.name + " " + person2.lastName;
