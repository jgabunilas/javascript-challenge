// UFO Sightings Application
// Written by Jason Gabunilas

// obtain the data from data.js
var tableData = data;

// YOUR CODE HERE!

// Begin by selecting the body of the table object in the DOM
var ufo_table = d3.select("tbody");

// Select the date entry form
var dateTimeEntry = d3.select('#datetime');

// Create a listener for the Filter Table button by first selecting the button and then listening for a click. When a click is detected, run the filterTable function (defined)
var filterButton = d3.select('#filter-btn');
filterButton.on('click', filterTable);

// The filterTable function contains the logic for filtering the table and displaying it to the webpage
function filterTable() {
    // First, clear out any existing ufo_table body data by using the selectAll commect on all rows followed by the .remove() method. This ensures that the table is rendered fresh each time the filter is applied
    ufo_table.selectAll('tr').remove();

    // Now check whether any input was provided in the filter search form. If no input exists (the value property of the form is an empty string), then display the entire table of UFO sightings.
    if (dateTimeEntry.property('value') === '') {
        // tableData is a list of objects, each object being a specific UFO sighting consisting of key:value pairs. Begin by using .forEach to iterate over each object
        tableData.forEach((ufoSighting) => {
            // For every object in the table, append a new row to the DOM table
            var row = ufo_table.append('tr');
            // Now use the forEach function to iterate though each key:value pair of each object. For every pair, append a new table data item (td), then populate the cell with the value.
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append('td');
                cell.text(value);
                });            
        });
    } else {
        // If an input was provided, then display the table based on the date provided
        tableData.forEach((ufoSighting) => {
            // For every object in the table with a dateTime value that matches the value of the dateTime entry form date input, append a new row to the DOM table
            if (ufoSighting.datetime === dateTimeEntry.property('value')) {
                var row = ufo_table.append('tr');
                // Now use the forEach function to iterate though each key:value pair of each object. For every pair, append a new table data item (td), then populate the cell with the value.
                Object.entries(ufoSighting).forEach(([key, value]) => {
                    var cell = row.append('td');
                    cell.text(value);
                });            
            };
        });
    } 
}


// Testing
// dateTime.property('value', 'testing')
