const express = require('express')
const app = express()
const port = 3000
var bodyParser =require('body-parser')

app.use(bodyParser.json()) // it extracts the body before redirecting to the route, "body-parser " is the new middleware



// GET
app.get('/',(req,res)=>{
    res.send('<head>  <title>Hello Page</title></head><body><b>hi there!</b>    </body>'); //returning HTML
})


// POST
app.get('/sum', (req, res) => {
    // console.log(req.body)
    var counter=req.query.counter; // taking the query parameters
    var calculation = sum(counter);
    // console.log(calculation);
    var ans={
        sum: calculation
    }
    res.send(ans);
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



function sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;
}
