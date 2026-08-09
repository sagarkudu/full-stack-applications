const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let postContainer = document.getElementById("post-container");

for (let i = 0; i < posts.length; i++) {
  postContainer.innerHTML += `
  <div>
        <article>
          <img class="profile-img" src=${posts[i].avatar} alt="" />
          <div class="profile-info">
            <strong class="username">${posts[i].name}</strong>
            <span class="location">${posts[i].location}</span>
          </div>
        </article>
      </div>
      <div>
        <img class="post-img" src=${posts[i].post} alt="" />
      </div>

      <div class="icon">
        <img class="icon-heart" src="images/icon-heart.png" alt="" />
        <img class="icon-comment" src="images/icon-comment.png" alt="" />
        <img class="icon-dm" src="images/icon-dm.png" alt="" />
      </div>
      <div class="post-likes">
        <b>${posts[i].likes} likes</b>
      </div>
      <div class="post-comment">
        <strong class="post-username">${posts[i].location}</strong>
        <span class="post-comment-text">${posts[i].comment}</span>
      </div>
    
  `;
}
