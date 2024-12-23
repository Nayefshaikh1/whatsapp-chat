const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

}

// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me yr exam sheets",
//     created_at:new Date(),
// });
// chat1.save().then((res)=>{
//     console.log(res);
// });


//index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    //console.log(chats);
    res.render("index.ejs", { chats });
});
//new route
app.get("/chats/new", (req, res) => {
    throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
});
//create route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),

    });
    newChat.save().then(res => { console.log("chat was saved"); })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});
// New Show route
app.get("/chats/:id",async(req,res,next)=>{
    let{id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
        return next(new ExpressError(404,"chat is not found"));
    }

    res.render("edit.ejs",{chat});
});
//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let{id}=req.params;
    let chat=await Chat.findById(id);

    res.render("edit.ejs",{chat});
});
//update route
app.put("/chats/:id/",async(req,res)=>{
    let{id}=req.params;
    let{msg:newMsg}=req.body;

    let updatedchat=await Chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true,new:true} 
        );
    //console.log(updatedchat);
    res.redirect("/chats");
});
//destroy route
app.delete("/chats/:id/",async(req,res)=>{
    let{id}=req.params;
    let deletedchat=await Chat.findByIdAndDelete(id );
    console.log(deletedchat);
    res.redirect("/chats");
}); 
//connecting route
app.get("/", (req, res) => {
    res.send("root is working");
});
//errror handaling
app.use((err,req,res,next)=>{
    let {status=500,message="Some error occurred"}=err;
    res.status(status).send(message);
});
app.listen(8080, () => {
    console.log("serve is listening on port 8080");
});