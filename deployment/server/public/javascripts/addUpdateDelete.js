function addMovie() {
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
   }
   //languageString is only checked for empty
   if (isEmpty(languageString)) {
      goodInputs = false
   }
   //check release year
   if (!isNum(releaseYearNum)) {
      goodInputs = false
   }
   //title string is only checked for empty
   if (isEmpty(titleString)) {
      goodInputs = false
   }
   //summary string is only checked for empty
   if (isEmpty(summaryString)) {
      goodInputs = false
   }
   //check seconds string
   if (!isNum(secondsNum)) {
      goodInputs = false
   }
   //check budget string
   if (!isNum(budgetNum)) {
      goodInputs = false
   }

   //check the status variable for any error found
   if (!goodInputs) {
      document.getElementById("addOutput").innerHTML = "Bad input fix something and try again"
      //return just so the rest of the function does not run
      return 0
   }

   //update successfull based on query request
   var successfull = triggerAdd(ticketsNum, ratingString, languageString, releaseYearNum, titleString, summaryString, secondsNum, budgetNum)

   if (successfull) {
      document.getElementById("addStatus").innerHTML
   } else {
      document.getElementById("addStatus").innerHTML
   }
}

function updateActor() {
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
   var successfull = triggerUpdate(searchFirstString, searchLastString, firstUpdateString, lastUpdateString, ageUpdateString, nationalityUpdateString)

   if (successfull) {
      document.getElementById("updateStatus").innerHTML
   } else {
      document.getElementById("updateStatus").innerHTML
   }
}

function deleteProductionStudio() {
   var studioString = document.getElementById("productionStudioInput").value

   //update this variable based on query request
   var successfull = triggerDelete(studioString)

   if (successfull) {
      document.getElementById("deleteStatus").innerHTML = "Production Studio named " + studioString + " was removed from the database"
   } else {
      document.getElementById("deleteStatus").innerHTML = "Production Studio named " + studioString + " was not found in database no removal was done"
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
      return false
   } else {
      return true
   }
}

function triggerAdd(ticketsNum, ratingString, languageString, releaseYearNum, titleString, summaryString, secondsNum, budgetNum) {
   //quinn do the backend request stuff here
   //return true of false relating to if it was successfull
}

function triggerUpdate(searchFirstString, searchLastString, firstUpdateString, lastUpdateString, ageUpdateString, nationalityUpdateString) {
   //quinn do the backend request stuff here
   //return true of false relating to if it was successfull
}

function triggerDelete(studioString) {
   //quinn do the backend request stuff here
   //return true of false relating to if it was successfull
}