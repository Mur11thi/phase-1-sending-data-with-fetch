// Add your code here
const baseURL = "http://localhost:3000/users"
const body = document.getElementById("body")
function submitData(name,email){
return fetch (baseURL, {
method:"POST",
headers:{"Content-Type": "application/json",
          "Accept": "application/json" },
body:JSON.stringify({
    name:name,
    email:email
})     
})
.then(res=>res.json())
.then(data=>{
const id = data.id 

const p = document.createElement("p")
p.textContent = `New ID = ${id}`
body.appendChild(p)
})
.catch(error=>{
 const errorMessage = document.createElement("p")
  errorMessage.textContent = `${error} error updating name and email.`    
 body.appendChild (errorMessage)  
})
}