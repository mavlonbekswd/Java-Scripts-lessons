let myPromise = new Promise ((resolve, reject) => {
    let taskCompleated= false;
    if(taskCompleated){
        resolve('Succesfull') // resolve: Called when the promise succeeds.
        
    } else{
        reject ("unsuccesful") // reject: Called when the promise fail
    }
    


})


//Catch and Then 
// .myPromise
//     .then((result)=>{
//         console.log(result);
        
//     })
//     .catch((error) =>{
//         console.log(error);
        
//     })

//Promises are commonly used for fetching data asynchronously:
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });


