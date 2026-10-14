require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const github={
  "login": "stff-adarsh",
  "id": 186404492,
  "node_id": "U_kgDOCxxOjA",
  "avatar_url": "https://avatars.githubusercontent.com/u/186404492?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/stff-adarsh",
  "html_url": "https://github.com/stff-adarsh",
  "followers_url": "https://api.github.com/users/stff-adarsh/followers",
  "following_url": "https://api.github.com/users/stff-adarsh/following{/other_user}",
  "gists_url": "https://api.github.com/users/stff-adarsh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/stff-adarsh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/stff-adarsh/subscriptions",
  "organizations_url": "https://api.github.com/users/stff-adarsh/orgs",
  "repos_url": "https://api.github.com/users/stff-adarsh/repos",
  "events_url": "https://api.github.com/users/stff-adarsh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/stff-adarsh/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-26T15:14:56Z",
  "updated_at": "2026-10-14T15:07:40Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/instagram',(req,res) => {
  res.send('welcome to my instagram');
});

app.get('/github',(req,res)=>{
  res.json(github);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});