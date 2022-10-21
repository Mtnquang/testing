const  express = require("express");
const  router = express.Router();
const fs = require("fs");

//// - Model
const Product = require("../model/Product");
//-------------------------------------------

router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./view/payment.hbs");
    pageContent = data.toString();
    trave.send(pageContent);
});



//-------------------------------------------
exports.PaymentRouter = router;