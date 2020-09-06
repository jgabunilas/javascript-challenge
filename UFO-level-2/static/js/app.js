// UFO Sightings Application
// Written by Jason Gabunilas

// obtain the data from data.js
var tableData = data;

// YOUR CODE HERE!

// A function that will change the value of the country dropdown menu upon selection of one of the country buttons
function country(selectedCountry) {
    // Select the country dropdown button and set text equal to selection
    // console.log(`you selected ${selectedCountry}`)
    country_button = d3.select("#dropdownMenuButton");
    country_button.text(selectedCountry)
}

// Create selectors for all input items
var dateTimeEntry = d3.select('#datetime');
var cityEntry = d3.select('#city-form');
var stateEntry = d3.select('#state-form');
var shapeEntry = d3.select('#shape-form');

// Initialize the table with all data entries
var ufo_table = d3.select("tbody");
tableData.forEach((ufoSighting) => {
    // For every object in the table, append a new row to the DOM table
    var row = ufo_table.append('tr');
    // Now use the forEach function to iterate though each key:value pair of each object. For every pair, append a new table data item (td), then populate the cell with the value.
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
        });            
})

// Build selectors for the country selection, updating the label on the dropdown menu accordingly

var select_usa = d3.select('#US-button')
select_usa.on('click', function() {
    country('us')
})

var select_ca = d3.select('#CAN-button')
select_ca.on('click', function() {
    country('ca')
})





// Create a function that will filter tableData based on all applicable filters. By using individual if statements, the data will be processed through each filter sequentially. The filter will only apply if there is an entry for that filter provided by the user
function filterTable() {
    var filteredData = tableData
    // console.log(dateTimeEntry.property('value'))
    if (dateTimeEntry.property('value')) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.datetime === dateTimeEntry.property('value'));
    }
    if (cityEntry.property('value')) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.city === cityEntry.property('value').toLowerCase());
    }
    if (stateEntry.property('value')) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.state === stateEntry.property('value').toLowerCase());
    }
    if (shapeEntry.property('value')) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === shapeEntry.property('value').toLowerCase());
    }



    // Clear the table
    ufo_table.selectAll('tr').remove();
    
    // Repopulate the table with the filtered data.
    filteredData.forEach((ufoSighting) => {

        var row = ufo_table.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });            
    });     
}






// Create a listener for the Filter Table button by first selecting the button and then listening for a click. When a click is detected, run the filterTable function (defined)
var filterButton = d3.select('#filter-btn');
filterButton.on('click', function() {
    filterTable()
});


// Testing
// dateTime.property('value', 'testing')
