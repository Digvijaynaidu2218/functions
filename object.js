let person={
    name:"digvijay",
    age:20,
    greet :function(){
        return `hello,my name is ${this.name}`;
    }
}
console.log(person.age);
console.log(person.greet());