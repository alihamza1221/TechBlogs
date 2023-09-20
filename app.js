const express = require('express');
const bodyparser = require('body-parser')
const ejs = require('ejs');
const app = express();
const _ = require('lodash');
app.use(bodyparser.urlencoded({ extended:true }));
app.use(express.static("public"));
app.set('view engine','ejs');

const posts =[];
//  content about blogs
const t1 = "Tech related Blogs";
const homecontent = "How to Start a Blog in 10 Easy Steps + Simple Blogging Best Practices for Beginners .Tech-related blogs focusing on Express and Node.js in backend development have become essential destinations for developers and tech enthusiasts alike. These blogs serve as valuable repositories of knowledge, offering readers a wealth of information through in-depth tutorials, best practices, and timely updates on the latest features and libraries for Express and Node.js. From constructing robust REST APIs to building real-time applications, these platforms guide their audience through the intricacies of server-side JavaScript. ";
const defaultt = {
  title : t1,
  compose : homecontent
}
posts.push(defaultt);

app.get("/", (req, res) => {
  res.render("list.ejs",{posts});
});

app.get("/about", (req, res) => {
  res.render("partials/about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("partials/contact.ejs");
});


app.get("/signup", (req, res) => {
  res.render("partials/signup.ejs");
});

app.get("/compose", (req, res) => {
  res.render("partials/compose.ejs");
});

app.post("/", (req, res) => {
  const post = {
    title : req.body.title,
    compose : req.body.compose
  }
    res.redirect("/");
    posts.push(post);
});
//  dynamic pages
app.get("/posts/:topic",(req,res)=>{
   const reqtitle = _.lowerCase(req.params.topic);
   posts.forEach((post) =>{
     const accepted =  _.lowerCase(post.title);
    
    if(accepted == reqtitle){
        res.render("partials/post.ejs",{post});
        return;
    }
   })
})

app.listen('3000',function(){
  console.log("server is running on port 3000...")
})