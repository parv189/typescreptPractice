type User = {
    Name:string;
    Price:number;
    Location:string
}

function request<User>(
    url:string,
    //config:RequestInit
):Promise <User>{
return fetch(url)        
.then(response =>response.json())
.then(data =>data)
.catch((error: Error) => {
    throw error 
  })         
}
request<User>('data.json').then(({Name,Price,Location})=>{
console.log(Name,Price,Location);
})