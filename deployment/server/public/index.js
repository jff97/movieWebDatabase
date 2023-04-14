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