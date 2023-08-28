console.log(posts.filter((x) => x.userId === 1));
console.log(posts.filter((x)=>x.userId===10));
const post1= posts.filter((x) => x.userId === 3 && x.id === 24);
console.log(post1.map((x)=>x.title));
const user1=users.filter((x)=>x.id===7);
console.log(user1.map((x)=>x.name));