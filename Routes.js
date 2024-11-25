const express = require('express');
const app  = express();
const port = 5001;

app.set("view engine","ejs");

let posts = [
  {
    username:"james",
    userprofile:"https://c8.alamy.com/comp/R82NXM/james-hand-written-word-text-for-typography-design-in-black-and-white-color-can-be-used-for-a-logo-branding-or-card-R82NXM.jpg",
    content:"sample content for the post creation"


  },
  {
    username:"kinich",
    userprofile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs6Deleckz888WVE2zaJgzTdGNcfSwD8tJA&s",
    content:"hyy im kinich from natlan"


  },
  {
    username:"xilonen",
    userprofile:"https://thebasedotaku.com/wp-content/uploads/2024/09/Genshin-Impact-Xilonen-Idle-Animation.jpg",
    content:"hyy im xilonen from genshin impact , Now you understand why sleep goes out the window when I start a new project."


  }


]
// Home page route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Posts page route
app.get("/posts", (req, res) => {
  res.render("index", { posts }); 
});










app.listen(port, () => {
  console.log("App running on port", port);
});












