const express = require("express")
const app = express() ;
app.get("/health-checkup",function(req , res) {
    const username =req.header.username;
    const password =req.header.password;
    const kindneyId =req.query.kindneyId;
    if(username!="harkirat"&& password!="pass") {
        res.status(400).json({mesg:"something up with your input"})
        return ;
    }
    if(kindneyId !=1 && kindneyId!=2) {
        res.status(400).json({mesg: "wrong input "});
        return ;
    }
    res.json({
        mess:"your kidney is fine "
    })
});
app.listen (3000);