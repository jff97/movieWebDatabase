document.getElementById('submitButton').addEventListener('click', async function() {
    //get input
    var sqlVal = document.getElementById('sqlInput').value;

    //create data object
    var inputData = {
        sql: sql
    };

    //send HTTP request to the backend
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({sql: sqlVal})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(responseData => {
        //handle res data
        console.log(responseData.result);
        console.log(responseData.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    var output = document.getElementById('output');
    output.innerHTML = responseData;
});

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
