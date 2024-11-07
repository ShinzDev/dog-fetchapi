// ASSSET
// 'https://reqres.in/api/users'
// ASSSET
// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     headers: {
//     'Content-Type' : 'application/json' 
//     },
//     body : JSON.stringify({
//         name: 'User 1',

//     })
// }).then( res =>{
//        return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('network issue'))



// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json()) // Convert response to JSON
//   .then(data => console.log(data))    // Log data to the console
//   .catch(error => console.error('Error fetching data:', error)); // Log any errors



fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => console.log(`Name: ${user.name}, Email: ${user.email}`));
  })
  .catch(error => console.error('Error fetching data:', error));










