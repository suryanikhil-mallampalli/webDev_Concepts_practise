// in this program, using JWT Library has disclosed
 
const jwt =  require("jsonwebtoken");

const secret= "supersecret";

let ans =  jwt.sign({
  username: "surya21@gmail.com",
  password: "123456"
}, secret);
console.log(ans);

jwt.verify(ans, secret, (err, originalString) =>{
  console.log(originalString)
})