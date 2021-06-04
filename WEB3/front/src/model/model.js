export default class model {
  constructor() {
    this.posts = [];
  }

  removePost(id) {
    const postIdx = this.posts.findIndex((item) => +item.id === +id);

    this.posts.splice(postIdx, 1);
  }

  createPost(title, text, author = "admin") {
    const newPost = {
      id: Math.round(Math.random() * 100000).toString(),
      title,
      text,
      author,
    };
    this.posts.push(newPost);
    this.sendPostsOnServer();
  }
  async getPostsFromServer() {
    this.posts = [];
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((item) => {
          const post = {
            id: item.id,
            title: item.title,
            text: item.text,
            author: item.author,
          };
          this.posts.push(post);
        });
      });
  }
  async sendPostsOnServer() {
    await fetch("http://localhost:3000/set", {
      method: "POST",
      body: JSON.stringify({ posts: this.posts }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
