/******************************************************
* Client-side JS
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
        const response = await fetch('/data1', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query1Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 2
const q2Button = document.getElementById('q2Button');
const q2Year1Input = document.getElementById('q2Year1Input');
const q2Year2Input = document.getElementById('q2Year2Input');
const q2Output = document.getElementById('q2Output');

q2Button.addEventListener('click', async () => {
    const data1 = q2Year1Input.value;
    const data2 = q2Year2Input.value;
    try {
        const response = await fetch('/data2', {
            method: 'POST',
            body: JSON.stringify({ data1, data2 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query2Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 3
const q3Button = document.getElementById('q3Button');
const q3Input = document.getElementById('q3Input');
const q3Output = document.getElementById('q3Output');

q3Button.addEventListener('click', async () => {
    const data = q3Input.value;
    try {
        const response = await fetch('/data3', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query3Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 4
const q4Button = document.getElementById('q4Button');
const q4StartInput = document.getElementById('q4StartInput');
const q4EndInput = document.getElementById('q4EndInput');
const q4Output = document.getElementById('q4Output');

q4Button.addEventListener('click', async () => {
    const data1 = q4StartInput.value;
    const data2 = q4EndInput.value;
    try {
        const response = await fetch('/data4', {
            method: 'POST',
            body: JSON.stringify({ data1, data2 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query4Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 5

//code for Query 6
const q6Button = document.getElementById('q6Button');
const q6Output = document.getElementById('q6Output');

q6Button.addEventListener('click', async () => {
    //const data = q6Input.value;
    try {
        const response = await fetch('/data6', {
            method: 'POST',
            //body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query6Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 7
const q7Button = document.getElementById('q7Button');
const q7Output = document.getElementById('q7Output');

q7Button.addEventListener('click', async () => {
    try {
        const response = await fetch('/data7', {
            method: 'POST',
            //body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query7Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 8
const q8Button = document.getElementById('q8Button');
const q8Output = document.getElementById('q8Output');

q8Button.addEventListener('click', async () => {
    try {
        const response = await fetch('/data8', {
            method: 'POST',
            //body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query8Tbl')
    } catch (error) {
        console.error(error);
    }
});

//code for Query 9
const q9Button = document.getElementById('q9Button');
const q9Output = document.getElementById('q9Output');

q9Button.addEventListener('click', async () => {
    try {
        const response = await fetch('/data9', {
            method: 'POST',
            //body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.text();
        buildHtmlTable(result, '#query9Tbl')
    } catch (error) {
        console.error(error);
    }
});