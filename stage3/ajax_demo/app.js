const express = require("express");

let app = express();

app.use('/static',express.static("./static"));

app.get("/getValue",function(req,res){
	res.json({"lalal":123});
});

app.post("/postValue",function(req,res){
	res.json({"hahaha":123});
});

app.listen(8000,function(){
	console.log("监听端口8000");
});