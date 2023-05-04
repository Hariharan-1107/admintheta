const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://hariharan:hariharan11@cluster0.yctk4yu.mongodb.net/myapp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  fname: String,
  lname:String,
  Sastraite:Boolean,
  collegeName:String,   
  username: String,
  password: String,
  ph:String,
  events:{
    name:[String],
    eventArray:[Array],
  },
  Access: {
    type: [String],
    unique: true,
  },
  Biogenesis: {
    type: [String],
    unique: true,
  },
  Electronica: {
    type: [String],
    unique: true,
  },
  Equilibria: {
    type: [String],
    unique: true,
  },
  Informatica: {
    type: [String],
    unique: true,
  },
  Mathematica: {
    type: [String],
    unique: true,
  },
  Optica: {
    type: [String],
    unique: true,
  },
  Pabbaja: {
    type: [String],
    unique: true,
  },
  Robotics: {
    type: [String],
    unique: true,
  },
  Sportiva: {
    type: [String],
    unique: true,
  },
  Emulsion: {
    type: [String],
    unique: true,
  },
});


const User = mongoose.model('User', userSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/event', async (req, res) => {
  const cluster = req.body.cluster;
  const password = req.body.password;
  const user = await User.find({});
  const accessKey = req.body.cluster;
  if(cluster==="all" && password==="all"){
    res.render('all',{use:user,Array:accessKey});
  }
  else if(password==="com_man23"||password==="Anticodon"||password==="theta.35"||password==="agnagnagn"||password==="Pabbaja@23"||password==="Integratethecircuit"||password==="optica.theta.src"||password==="Maths@101"||password==="Ram@theta"||password==="inform@ca@2k23"||password==="agn@access"){
    res.render('main',{use:user,Array:accessKey});
  }else{
    res.send("Incorrect Information");
  }
});


app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started");
});
