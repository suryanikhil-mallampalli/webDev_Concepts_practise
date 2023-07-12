// var fetch = require('fetch')

// here one node js process is interacting with another process
function logResponseBody(jsonBody){
    console.log(jsonBody);
}
function callbackFn(result){
    result.json().then(logResponseBody) // it is a promise
}
var sendObj = {
    method: "GET"
};
fetch("http://localhost:3000/sum?counter=100", sendObj).then(callbackFn) 