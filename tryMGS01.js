

///// -------------------Database
const mongoose = require('mongoose');

const accUN = "GCS190351";
const accPW = "YpqB4vCXSciSXsg";
const dnsServer = "cluster0.erqvpxb.mongodb.net";
const dbName = "cluster0.erqvpxb.mongodb.net";

const uri = "mongodb+srv://"
+ accUN + ":" + accPW
+ "@" + dnsServer + "/" + dbName + "?retryWrites=true&w=majority";


const db = mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
 });

 /*
 .once("open", _ => {
    console.log("DB connected !!!");
 })

 .on("error", err => {
    console.log("ERR: ", err);
 });
 */



 

////// - Model
const Product = require("./model/Product");



newRecord = new Product( {
    MaSP: "QM-071",
    TenSP: "Quat may kich co KO nho",
    MoTaSP: "Day la quat may 30w, kich co 50cms", 
    ImageLink: "https://www.google.com/aclk?sa=l&ai=DChcSEwi18_aKwcj6AhXommYCHeAsDLYYABAFGgJzbQ&sig=AOD64_1k0xf9zsEontnjX_xO5kR369e9qQ&adurl&ctype=5&ved=2ahUKEwi4xOuKwcj6AhV1mdgFHYXUB38Qvhd6BAgBEFQ",
    Price: 579000,
    SoLuongConTrongKho: 3000,
});


newRecord.save(
    (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data: ", doc);
        }

    });