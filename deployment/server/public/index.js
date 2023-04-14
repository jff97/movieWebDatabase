/******************************************************
* Client-side JS
* Version: 1.0
* Author: Quinn McClure & John Fox
* Date: 4/14/2023
******************************************************/

//code for Query 1
const q1Button = document.getElementById('q1Button');
const q1Input = document.getElementById('q1Input');
const q1Output = document.getElementById('q1Output');

q1Button.addEventListener('click', async () => {
    const data = q1Input.value;
    try {
        const response = await fetch('/data', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        q1Output.textContent = result;
    } catch (error) {
        console.error(error);
    }
});

























// document.getElementById('submitButton').addEventListener('click', async function() {
//     //get input
//     var sqlVal = document.getElementById('sqlInput').value;

//     //create data object
//     var inputData = {
//         sql: sql
//     };

//     //send HTTP request to the backend
//     fetch('/query', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({sql: sqlVal})
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(responseData => {
//         //handle res data
//         console.log(responseData.result);
//         console.log(responseData.message);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

//     var output = document.getElementById('output');
//     output.innerHTML = responseData;
// });

// function sendQuery() {
//     //get input
//     var sql = document.getElementById('sqlInput').value;

//     //create data object
//     var inputData = {
//         sql: sql
//     };

//     //send HTTP request to the backend
//     fetch('/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(inputData)
//     })
//     .then(response => response.json())
//     .then(responseData => {
//         //handle res data
//         console.log(responseData);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// var output = document.getElementById('output');
// output.innerHTML = result;
