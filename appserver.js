const  express = require("express");
const PORT = process.env.PORT || 3000;
const appServer = express();
const router = express.Router();
const fs = require("fs");
const path = require('path');

// Middleware
const bodyParser = require("body-parser");
appServer.use(bodyParser.urlencoded({ extended: true }));

// ---- 
//view engine setup
appServer.set("views", path.join(__dirname, "view")); //setting views directory for views.
appServer.set("view engine", "hbs"); //setting view engine as handlebars


// Config
appServer.use(express.static("public"));

///// -------------------Database
const mongoose = require('mongoose');

const accUN = "GCS190351";
const accPW = "YpqB4vCXSciSXsg";
const dnsServer = "cluster0.erqvpxb.mongodb.net";
const dbName = "product";

const uri = "mongodb+srv://"
+ accUN + ":" + accPW
+ "@" + dnsServer + "/" + dbName + "?retryWrites=true&w=majority";

const db = mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

// ------------------- Middleware - kiem soat tinh huong
router.use( (yeucau, trave, ketiep) => { 
    console.log("REQ: ", Date.now(), yeucau.url);
    ketiep();
});

router.use( (loixayra, yeucau, trave, ketiep) => { 
    console.log("ERROR: ", Date.now(), yeucau.url);
    console.log(loixayra);
    trave.status(500).send("Dang co loi xay ra, chua biet o dau !!!");
});


// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    trave.render("main", {TenTrang: "Main Chinh !!!"} );
});

router.get( "/home" , (yeucau, trave) => {
    trave.render("home", {TenTrang: "Home Nha !!!"});
});


//--- Add middleware
//const session = express.session();
appServer.use(bodyParser.json());
//appServer.use(session({secret: "id-session-Mr.Tu"​}));


// ------------------------- Add Router / Controller
appServer.use("/", router);

const ProductRouter = require("./controller/productController").ProductRouter;
appServer.use("/products", ProductRouter);

const LoginRouter = require("./controller/loginController").LoginRouter;
appServer.use("/login", LoginRouter);

const PaymentRouter = require("./controller/paymentController").PaymentRouter;
appServer.use("/payment", PaymentRouter);


// ----------- RUN / Launching !!! 
appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
