const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
}
let allChat=([{
    from:"neha",
    to:"priya",
    msg:"send me yr exam sheets",
    created_at:new Date(),
},
{
    from:"anas",
    to:"zaid",
    msg:"send me yr traiding sheets",
    created_at:new Date(),
},
{
    from:"ramish",
    to:"anas",
    msg:"send me yr data sheets",
    created_at:new Date(),
},
{
    from:"ajaz",
    to:"rashid",
    msg:"send me yr bank balance ",
    created_at:new Date(),
}]);
Chat.insertMany(allChat);

