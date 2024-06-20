import express from 'express';

const app = express();

app.get("/users", (request,response)=>{
    response.send("you are in users page")

})

app.listen(3000, () => {
  console.log("App running on port 3000...");
});