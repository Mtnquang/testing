const  express = require("express");
const  router = express.Router();
const fs = require("fs");

//-------------------------------------------
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./view/login.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

router.get( "/1nguoi" , (yeucau, trave) => {
    pageContent = "main";
    trave.send(pageContent);
});

router.get( "/user" , (yeucau, trave) => {
    data = fs.readFileSync("./view/user.hbs");
    pageContent = data.toString();
    trave.send(pageContent);
});


//-------------------------------------------
exports.LoginRouter = router;