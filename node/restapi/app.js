let express = require ('express');
let app = express();
const mongo = require('mongodb');
const MongoClient=mongo.MongoClient;
// const mongoUrl = "mongodb://localhost:27017"
const mongoUrl = 'mongodb+srv://admin:admin@cluster0.sjyst.mongodb.net/zomato_data?retryWrites=true&w=majority'
let dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
let port =process.env.PORT || 1234;
var db;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
//get
app.get('/' ,(req,res) =>{
    res.send("welcome to express ")
})


//get location
app.get("/location" ,(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})


// //get restaurants wrt location using params
// app.get("/restaurant_data/:id" ,(req,res)=>{
//     let reqId=Number(req.params.id)
//     console.log("---reqId",reqId)
//     db.collection('restaurant_data').find({state_id:reqId}).toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
    
// })


//get restaurants wrt location using queryParams and mealtype wrt selection (quick search in 1st page and 2nd page data)
app.get("/restaurant_data" ,(req,res)=>{
    let stateId= Number (req.query.state_id)
    let mealId= Number (req.query.meal_id)
    let query={};
    if(stateId && mealId){
        query={state_id:stateId,"mealTypes.mealtype_id":mealId}
    }
    else if(stateId){
        query={state_id:stateId}
    }
    else if(mealId){
        query={"mealTypes.mealtype_id":mealId}
    }
    console.log("---reqId",stateId)
    db.collection('restaurant_data').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})


//filters()
app.get("/filter/:meal_id" ,(req,res)=>{
    let sort = {cost:1}
    let skip = 0;
    let limit = 1000000000;
    let mealId=Number(req.params.meal_id)
    let cuisineId = Number(req.query.cuisine_id)
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let query = {}
    if(req.query.skip && req.query.limit){
        skip=Number(req.query.skip)
        limit=Number(req.query.limit)
    }
    if(req.query.sort){
        sort = {cost:req.query.sort}
    }
    if(cuisineId && lcost&hcost){
        query={
        "cuisines.cuisine_id":cuisineId, 
        "mealTypes.mealtype_id":mealId,
        $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(cuisineId){
        query={"cuisines.cuisine_id":cuisineId , "mealTypes.mealtype_id":mealId}
    }
    else if(lcost&hcost){
        query={$and:[{cost:{$gt:lcost,$lt:hcost}}] , "mealTypes.mealtype_id":mealId}
    }
    db.collection('restaurant_data').find(query).sort(sort).skip(skip).limit(limit).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//mealtypes
app.get("/mealtypes" ,(req,res)=>{
    db.collection('mealtypes').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})


//rest details (3rd page)
app.get("/restaurant_data/:id" ,(req,res)=>{
    let restId=Number(req.params.id)
    db.collection('restaurant_data').find({restaurant_id:restId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//menu wrt rest (3rd page)
app.get("/restaurant_menu/:id" ,(req,res)=>{
    let menuId=Number(req.params.id)
    db.collection('restaurant_menu').find({restaurant_id:menuId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//list of orders
app.get("/orders",(req,res)=>{
    let email=req.query.email;
    let query={};
    if(email){
        query={"email":email}
    }
    db.collection('orders').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//place an order (post call)
app.post("/placeOrder",(req,res)=>{
    db.collection('orders').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('order added')
    })
})



//list of menu items user selected in 3rd page
app.post("/menuitem",(req,res)=>{
    console.log(req.body)
    db.collection('restaurant_menu').find({menu_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//to delete order
app.delete("/deleteOrder",(req,res)=>{
    db.collection('orders').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//to update order
app.put("/updateOrder/:id",(req,res)=>{
    let orderId= mongo.ObjectId(req.params.id)
    let status = req.query.status?req.query.status:'Pending'
    db.collection('orders').updateOne(
        {_id:orderId},
        {$set:{
            "status":status,
            "bank_name":req.body.bank_name,
            "transaction_status":req.body.transaction_status
        }},(err,result)=>{
            if(err) throw err;
            res.send(`status updated to ${status}`)
        }
    )
})

MongoClient.connect(mongoUrl,(err,connection) =>{
    if(err) console.log('Error while connecting');
    db = connection.db('zomato_data')
    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    });
})

