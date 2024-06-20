import express from 'express';

const app = express();

app.get("/users", (request,response)=>{
    response.send("you are in users page")

})

app.get("/movies", (request,response)=>{
    response.send(['Action','comedy','animation'])
})

// separating controller from its parent
const getmusic=(request,response)=>{
    response.send(['Afrobeats','pop','hiphop'])
}
app.get("/music",getmusic)


function getseries(request,response){
    response.send(['The terminalist','End game','Squid game','Nikita','Person of interest'])
}

app.get("/series", getseries)

app.listen(3000, () => {
  console.log("App running on port 3000...");
});