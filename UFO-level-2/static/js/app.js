// UFO Sightings Application, Level 2
// Written by Jason Gabunilas

// obtain the data from data.js
var tableData = data;


// A function that will change the value of the country dropdown menu upon selection of one of the country buttons
function country(selectedCountry) {
    // Select the country dropdown button and set text equal to selection
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

// Build listeners for the country selection, which will execute the "country" function defined above and update the label on the dropdown menu accordingly
var country_button = d3.select("#dropdownMenuButton");

var select_all = d3.select('#all-button')
select_all.on('click', function() {
    country('All')
})

var select_usa = d3.select('#US-button')
select_usa.on('click', function() {
    country('United States')
})

var select_ca = d3.select('#CAN-button')
select_ca.on('click', function() {
    country('Canada')
})





// The filtertable() function will filter tableData based on all applicable filters for datetime, city, state, country, and shape. By using individual if statements, the data will be processed through each filter sequentially. The filter will only apply if there is an entry for that filter provided by the user. If no filters are applied, the entire table will render.
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
    // Filter on the country by determining which country has been selected by the country button. If neither 'us' nor 'ca' is selected, this filter will not run.
    if (country_button.text() === 'United States') {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.country === 'us')
    } else if (country_button.text() === 'Canada') {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.country === 'ca')
    }

    // Clear the DOM table from the previous state
    ufo_table.selectAll('tr').remove();

    // Clear the noData div 
    d3.selectAll('#nodata').text('')

    // If the filteredData has a length of zero, print a message indicating as such
    if (filteredData.length === 0) {
        d3.selectAll('#nodata').text('Sorry, your filter returned no results. Please try again.')
    }
    // Repopulate the DOM table with the filtered data.
    filteredData.forEach((ufoSighting) => {

        var row = ufo_table.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });            
    });     
}






// Create a listener for the Filter Table button by first selecting the button and then listening for a click. When a click is detected, run the filterTable function 
var filterButton = d3.select('#filter-btn');
filterButton.on('click', function() {
    filterTable()
});