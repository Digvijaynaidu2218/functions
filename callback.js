const greetFn=(name)=>{
    console.log(`hello,${name}!`);
}
function processname(callback){
    const name="digvijay";
    callback(name);
}
processname(greetFn);