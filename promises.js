const posts= [
    {
        title: 'Post one',body: 'This is post one'
    },
    {
        title: 'Post two',body: 'This is post two'
    }
];
function getPosts() {
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

//Creation of promise, mostly a Api call
function createPost(post) {
    return new Promise((reslove,reject)=> {
        setTimeout(()=> {
            posts.push(post);

            //Set false to get output as expected
            const error=false;

            if(!error) {
                reslove();
            } else {
                reject('Error: Something went wrong');
            }
        },2000);
    });  
}


//usage of promises
// createPost({title:'Post Three',body:'This is post Three'})
//     .then(getPosts)
//     .catch(err=> console.log(err));


//New Example
//What if there many promises
const promise1= Promise.resolve('Hello World');
const promise2= 20;
const promise3= new Promise((resolve,reject)=>
    setTimeout(resolve, 2000,'Goodbye')
);
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());


Promise.all([promise1,promise2,promise3,promise4])
    .then(values=>
        console.log(values)
    );