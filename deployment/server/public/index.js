document.getElementById('submitButton').addEventListener('click', function() {
    //get input
    var sql = document.getElementById('sqlInput').value;

    //create data object
    var inputData = {
        sql: sql
    };

    //send HTTP request to the backend
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
    })
    .then(response => response.json())
    .then(responseData => {
        //handle res data
        console.log(responseData);
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
