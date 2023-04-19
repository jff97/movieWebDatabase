
 // Builds the HTML Table out of jsonResult.
 function buildHtmlTable(jsonResult, selector) {
   $(selector).empty()
   jsonResult = JSON.parse(jsonResult)
   var columns = addAllColumnHeaders(jsonResult, selector);
 
   for (var i = 0; i < jsonResult.length; i++) {
     var row$ = $('<tr/>');
     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
       var cellValue = jsonResult[i][columns[colIndex]];
       if (cellValue == null) cellValue = "";
       row$.append($('<td/>').html(cellValue));
     }
     $(selector).append(row$);
   }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records.
 function addAllColumnHeaders(jsonResult, selector) {
   var columnSet = [];
   var headerTr$ = $('<tr/>');
 
   for (var i = 0; i < jsonResult.length; i++) {
     var rowHash = jsonResult[i];
     for (var key in rowHash) {
       if ($.inArray(key, columnSet) == -1) {
         columnSet.push(key);
         headerTr$.append($('<th/>').html(key));
       }
     }
   }
   $(selector).append(headerTr$);
 
   return columnSet;
 }