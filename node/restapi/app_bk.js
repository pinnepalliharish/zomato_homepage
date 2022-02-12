let express = require ('express');
let app = express();
let port = 1234;
const place=[
    {
        "places":[
    
            {
                "id":1,
                "place_name":"Anantapur"
            },
            {
                "id":2,
                "place_name":"Kurnool"
            },
            {
                "id":3,
                "place_name":"Kadapa"
            },
            {
                "id":4,
                "place_name":"Visakhapatnam"
            },
            {
                "id":5,
                "place_name":"Vijayawada"
            },
            {
                "id":6,
                "place_name":"Agra"
            },
            {
                "id":7,
                "place_name":"Amritsar"
            },
            {
                "id":8,
                "place_name":"New Delhi"
            },
            {
                "id":9,
                "place_name":"Mumbai"
            },
            {
                "id":10,
                "place_name":"Hyderabad"
            },
            {
                "id":11,
                "place_name":"Jaipur"
            },
            {
                "id":12,
                "place_name":"Goa"
            },
            {
                "id":13,
                "place_name":"Bangalore"
            }
        ]
    }
]
var name="Harish"

//get

app.get('/' ,(req,res) =>{
    res.send("welcome to express ")
})

app.get("/places" ,(req,res)=>{
    res.send(place)
})

app.get("/name" ,(req,res)=>{
    res.send(name)
})

app.listen(port,()=>{
    console.log(`lsitening to port ${port}`)
})