// coneect to datrbase
// const {MongoClient}= require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dataBase = 'Sports'
// async function getData(){
//     let result  = await client.connect();
//     console.log("conneected  to server");
//      let db =  result.db(dataBase)
//     let collection =  db.collection('Cricket');
//     let data = await collection.find({}).toArray();
//    console.log(data); 
//   return data ;
// }


// exports.getData = getData;

const {MongoClient}= require('mongodb');

const url ="mongodb://127.0.0.1:27017/"
const client = new MongoClient(url);
 const dataBase = 'Sports'
 async function getData(){
     let result  = await client.connect();
    
      let db =  result.db(dataBase)
     let collection = db.collection('Cricket');
   console.log("connected  to server");
     let data = await collection.find({}).toArray();
     console.log(data);
    }
  getData();

