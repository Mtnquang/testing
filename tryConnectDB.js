
const { MongoClient, ServerApiVersion } = require('mongodb');

const accUN = "GCS190351";
const accPW = "YpqB4vCXSciSXsg";
const uri = "mongodb+srv://"
+ accUN + ":" + accPW + 
"@cluster0.erqvpxb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
    });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(err);
  client.close();
});

console.log("... thay gi chua ?! ");
