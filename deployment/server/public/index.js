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
        q1Output.textContent = result; //JSON.stringify(result, null, 2);
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
        q2Output.textContent = result; //JSON.stringify(result, null, 2);
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
        q3Output.textContent = result; //JSON.stringify(result, null, 2);
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
        q4Output.textContent = result; //JSON.stringify(result, null, 2);
    } catch (error) {
        console.error(error);
    }
});