const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connectDB();

//rest objecct
const app = express();

//middelwares
app.use(cors({
  origin:["https://blog-front-mauve.vercel.app"],
  methods:['POST','GET'],
  credentials:true
}));
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.use('/',(req,res)=>{
  res.json('hello');
  console.log("working");
  sessionStorage.setItem("key","something");
})
// Port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, (req,res) => {
  res.json(PORT)
  console.log(
    `Server Running on  mode port no ${PORT}`.bgCyan
      .white
  );
  sessionStorage.setItem('serverPort', PORT);
});
