// // Add your code here
// // fetch(`http://localhost:3000/dogs`)
// // .then((response=> response.json))
// // .then((data=>
// //     console.log (data)))
//   const formData=  {
//     dogName:"Byron",
//     dogBreed:"Poodle",
//     dogName:"Vicky",
//     dogBreed:"Labrador"
// } 
// const configurationObject= {
// method: "POST",
// headers: {
//     "Content-Type":"application/json",
//     Accept:"application/json",
// },
// body:JSON.stringify(formData),
// };
// fetch("http://localhost:3000/dogs",configurationObject)
// .then(function (response) {
//     return response.json();
// })
// .then(function(object) {
//     console.log(object);
// });

const formData= {
    name:"Jason Statham",
    email:"jasonstatham@gmail.com"
}
const submitData= {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    },
    body: JSON.stringify(formData)
}
fetch("http://localhost:3000/users",submitData)
.then(function(response){
    return response.json()
})
    .then(function(object){
        console.log(object);
    })
    .catch(function(error){
        alert("Beware of the error!");
        console.log(error.message);
    });
    














