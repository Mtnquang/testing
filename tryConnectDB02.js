
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

client.connect( (err, db) => {
  
    if (err) {
        console.log("Error: ", err);
        process.exit(0);
    }
  
    db.db("Shop_2022_10").createCollection("customers",
        (err2, results) => {
            if (err2) {
                console.log("Error: ", err2);
            } else {
                console.log("Created !!!");
                db.close();
            }
            process.exit(1);
        }
    );
  

});


