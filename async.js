const posts = [
    {id:1,post:"Ah! Kosmos"},
    {id:2,post:"DakhaBrakha"},
    {id:3,post:"Santi & Tuğçe"}
]

const listPost = () =>{
    posts.map(post => console.log(JSON.stringify(post)))
}

const addPost = (post) =>{
    new Promise((resolve,reject) => {
        posts.push(post);
        resolve(posts);
    });
}

async function getSetPosts(){
    try {
        await addPost({id:4,post:"islandman"});
        listPost();
    } catch (error) {
        console.log(error);
    }
}

getSetPosts();