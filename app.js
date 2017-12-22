var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("I said something usefull");
//   }
// });

//task1
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var view = prompt("Type name of restuarnt and press enter to display and individual restauarnt' names: ");
//   collection.find({name: view}).toArray(function(err,doc){
//       if(err) console.log ("Error:" + err)
//       else console.log(doc)
//   })
 
// });

//Task2
// mongo.connect(url, function(err, db){
//     var collection = db.collection('restaurants');
//     var name = prompt("Type name of restauarnt and press enter to for propeties' names: ");
//     var address = prompt("Type address to find restuarnts with that address: ")
//     var zipcode = prompt("type zipcode to find restaurnts within that zipcode: ")
//     collection.insert({
//         "name": name,
//         "address": address,
//         "zipcode": zipcode})
//     });

//task3
// mongo.connect(url, function(err, db){
//     var collection = db.collection('restaurants');
//     var name = prompt("which restauarnt do you want to update info for: ");
//     var newName = prompt("what do you want new name to be: ");
//     collection.update(
//         {name: name},
//         {$set: {name: newName}
//     })
        
// });


  
 //delete   
// mongo.connect(url, function(err, db){
//     var collection = db.collection('restaurants');
//     var remove = prompt("remove restuarnt from list: ");
//     collection.remove({name: remove})
// });



   



