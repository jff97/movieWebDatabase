function addMovie() {
   //clear status box
   document.getElementById("addOutput").innerHTML = "Status goes here"

   //get all the strings for the inputs
   var ticketsNum = parseInt(document.getElementById("ticketsSoldInput").value)
   var ratingString = document.getElementById("ratingInput").value
   var languageString = document.getElementById("languageInput").value
   var releaseYearNum = parseInt(document.getElementById("releaseYearInput").value)
   var titleString = document.getElementById("titleInput").value
   var summaryString = document.getElementById("summaryInput").value
   var secondsNum = parseInt(document.getElementById("secondsInput").value)
   var budgetNum = parseInt(document.getElementById("budgetInput").value)

   //error test the inputs
   //make a status variable
   var goodInputs = true
   //check tickets sold
   if (!isNum(ticketsNum)) {
      goodInputs = false
   }
   //check rating
   ratingString = ratingString.toUpperCase()
   if (ratingString != "NC-17" && ratingString != "R" && ratingString != "PG-13" && ratingString != "PG" && ratingString != "G") {
      goodInputs = false
      console.log("bad rating")
   }
   //languageString is only checked for empty
   if (isEmpty(languageString)) {
      goodInputs = false
      console.log("bad language")
   }
   //check release year
   if (!isNum(releaseYearNum)) {
      goodInputs = false
      console.log("bad release year")
   }
   //title string is only checked for empty
   if (isEmpty(titleString)) {
      goodInputs = false
      console.log("bad title")
   }
   //summary string is only checked for empty
   if (isEmpty(summaryString)) {
      goodInputs = false
      console.log("bad summary")
   }
   //check seconds string
   if (!isNum(secondsNum)) {
      goodInputs = false
      console.log("bad seconds")
   }
   //check budget string
   if (!isNum(budgetNum)) {
      goodInputs = false
      console.log("bad budget")
   }

   //check the status variable for any error found
   if (!goodInputs) {
      document.getElementById("addOutput").innerHTML = "Bad input fix something and try again"
      //return just so the rest of the function does not run
      return 0
   }

   //update successful based on query request
   var successful = triggerAdd(ticketsNum, ratingString, languageString, releaseYearNum, titleString, summaryString, secondsNum, budgetNum)

   if (successful) {
      document.getElementById("addOutput").innerHTML = "Movie was added successfully"
   } else {
      document.getElementById("addOutput").innerHTML = "movie was not added successfully inputs were good though"
   }
}

function updateActor() {
   //clear status box
   document.getElementById("updateOutput").innerHTML = "Status goes here"

   //get the search terms
   var searchFirstString = document.getElementById("firstNameSearch").value
   var searchLastString = document.getElementById("lastNameSearch").value

   //get the update terms
   var firstUpdateString = document.getElementById("firstNameInput").value
   var lastUpdateString = document.getElementById("lastNameInput").value
   var ageUpdateString = document.getElementById("ageInput").value
   var nationalityUpdateString = document.getElementById("nationalityInput").value

   //error check inputs
   var goodInputs = true

   //check searched first name and last name
   if (isEmpty(searchFirstString) || isEmpty(searchLastString)) {
      goodInputs = false
   }
   //check first name and last name to update
   if (isEmpty(firstUpdateString) || isEmpty(lastUpdateString)) {
      goodInputs = false
   }
   //check age update input
   if (isEmpty(ageUpdateString) || !isNum(ageUpdateString)) {
      goodInputs = false
   }
   //check nationality update input
   if (isEmpty(nationalityUpdateString)) {
      goodInputs = false
   }

   if (!goodInputs) {
      document.getElementById("updateOutput").innerHTML = "Bad inputs to update try again"
      //return just so the rest of the function does not run
      return 0
   }

   //update this variable based on query request
   var successfull = triggerUpdate(searchFirstString, searchLastString, firstUpdateString, lastUpdateString, ageUpdateString, nationalityUpdateString);
   if (successfull) {
      document.getElementById("updateOutput").innerHTML = "update ran successfully"
   } else {
      document.getElementById("updateOutput").innerHTML = "update failed"
   }
}

function deleteProductionStudio() {
   //clear status box
   document.getElementById("deleteOutput").innerHTML = "status goes here"

   //get the value from the text box
   var studioString = document.getElementById("productionStudioInput").value

   //check studio string for empty
   if (isEmpty(studioString)) {
      document.getElementById("deleteOutput").innerHTML = "Empty studio name try again"
      return 0
   }

   //update this variable based on query request
   var successfull = triggerDelete(studioString)

   if (successfull) {
      document.getElementById("deleteOutput").innerHTML = "Production Studio named " + studioString + " was removed from the database"
   } else {
      document.getElementById("deleteOutput").innerHTML = "Production Studio named " + studioString + " was not found in database no removal was done"
   }
}

//internal helper predicate function
function isNum(testNum) {
   if (testNum == NaN) {
      return false
   } else {
      return true
   }
}

//internal helper predicate function
function isEmpty(testString) {
   if (testString == "") {
      return true
   } else {
      return false
   }
}

async function triggerAdd(ticketsNum, ratingString, languageString, releaseYearNum, titleString, summaryString, secondsNum, budgetNum) {
   //quinn do the backend request stuff here
   const addMovieButton = document.getElementById('addMovieButton');
   const addOutput = document.getElementById('addOutput');

   //addMovieButton.addEventListener('click', async () => {
      const data1 = ticketsNum;
      const data2 = ratingString;
      const data3 = languageString;
      const data4 = releaseYearNum;
      const data5 = titleString;
      const data6 = summaryString;
      const data7 = secondsNum;
      const data8 = budgetNum;
      try {
         const response = await fetch('/add', {
               method: 'POST',
               body: JSON.stringify({ data1, data2, data3, data4, data5, data6, data7, data8 }),
               headers: {
                  'Content-Type': 'application/json'
               }
         })
         const result = await response.text();

         console.log(result);
         addOutput.innerHTML = result;
         return true;
      } catch (error) {
         console.error(error);
         return false;
      }
   //});


   //return true of false relating to if it was successfull
   return false
}

async function triggerUpdate(searchFirstString, searchLastString, firstUpdateString, lastUpdateString, ageUpdateString, nationalityUpdateString) {
   //quinn do the backend request stuff here
   const addMovieButton = document.getElementById('addMovieButton');
   const addOutput = document.getElementById('addOutput');

   //addMovieButton.addEventListener('click', async () => {
      const data1 = searchFirstString;
      const data2 = searchLastString;
      const data3 = firstUpdateString;
      const data4 = lastUpdateString;
      const data5 = ageUpdateString;
      const data6 = nationalityUpdateString;
      
      try {
         const response = await fetch('/update', {
               method: 'POST',
               body: JSON.stringify({ data1, data2, data3, data4, data5, data6 }),
               headers: {
                  'Content-Type': 'application/json'
               }
         })
         const result = await response.text();
         console.log(result);
         addOutput.innerHTML = result;
         return true;
      } catch (error) {
         console.error(error);
         return false;
      }
   //});

   //return true of false relating to if it was successfull
   return false
}

async function triggerDelete(studioString) {
   //quinn do the backend request stuff here
   //return true of false relating to if it was successfull
   return false
}

async function triggerClear() {
   //quinn do the backend request stuff here
   //return true of false relating to if it was successfull
   return false
}