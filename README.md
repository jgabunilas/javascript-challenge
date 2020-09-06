# javascript-challenge

## Objective
The purpose of this exercise was to demonstrate competency in JavaScript and basic DOM manipulation with the [D3 library](https://d3js.org/) as well as apply previously-acquired skills in HTML, CSS, and Bootstrap.

## Background
A dataset consisting of an array of UFO sighting events was provided. Each observation in the array is a JavaScript object containing a number of key:value pairs describing following:

* Date of the sighting
* Location of sighting (one key:value each for country, state/province, and city)
* Shape of the UFO
* Brief and oftentimes incomplete notes of the sighting

![](/UFO-level-1/array_data.jpg)

The goal of the assignment is to create a webpage to display the UFO sighting data in an HTML table and provide means for users to filter the displayed table using on various inputs.

## Approach: Level 1 - Filter UFO Sightings by Date
A template HTML skeleton was provided with the basic aesthetics for the webpage, in addition to a `data.js` file with the UFO sighting data. The app.js file was constructed to provide functionality to the webpage. The webpage provides an input form for the use to enter a date by which to filter the UFO sightings. The general approach was as follows:
1. Initialize the page with the entire table of UFO sightings
2. Create a listener for the Filter Table button provided on the website which executes the filtration when the button is clicked
3. When the listener is triggered, execute a function that filters the data array based on the value that is entered into the date entry form. Only UFO sightings whose dates match that entered into the form will be kept.
4. Use D3 to select the table DOM representation and update it with the data in the filtered array using the .append feature to add new rows and cells for each piece of data.

## Approach: Level 2 - Advanced Filtration
The task for Level 2 was to extend the filtration capabilities of the webpage to allow for more precise filtering and display of the data table. Due to the desire to use the latest version of [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) customize the layout of the page and because the provided HTML template utilized an older version, the HTML code for Level 2 was largely customized with some code snippets borrowed from Level 1. The overall approach was similar to Level 1, with the following notable differences:
* In addition to date, Level 2 also accepts inputs city, state/province and shape. As such, D3 selectors were required for these four inputs. Furthermore, users are able to select the country of the sighting (USA or Canada) from a drop-down menu, requiring an event listener that changes the country filter in response to the selection and updates the value of the drop-down button based on the country that is selected.
* When the FIlter Table button is clicked, the function `filterTable()` is executed. This function contains a series of independent logical statements that tests each of the filter input forms individually performing a `.filter()` action on the data array if an input value is detected for the filter. It also detects whether the user has selected a country. The array is sequentially filtered through each of these conditional checks, culminating in a `filteredData` array.
* Prior to rendering, the table DOM object to cleared out of all rows that are present from previous renderings. The table is then repopulated based on the `filteredData` array.

