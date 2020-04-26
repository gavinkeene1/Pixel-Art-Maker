//Coded by: Gavin Keene

// When size is submitted by the user, call makeGrid()
let submitClicked = document.querySelector('#sizePicker');
submitClicked.addEventListener("submit", function(event) {
    event.preventDefault();
    submitClicked.addEventListener('submit', makeGrid())
});

//This makeGrid function houses the code to build the Design Canvas grid
//and make each of its cells ready to respond to click events
function makeGrid(height, width) {
    let tableHeight = document.querySelector('#inputHeight').value;
    let tableWidth = document.querySelector('#inputWidth').value;

    console.log("User clicked Submit. Table dimensions are set: ");
    console.log(tableWidth + " row(s) by " + tableHeight + " column(s)");

    //Clear the 'pixelCanvas' table if the user has already clicked Submit once
    //and rows have been appended before. This should allow a fresh grid to be
    //made in 'pixelCanvas' each time Submit is clicked.
    let Parent = document.getElementById('pixelCanvas');
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    //Use 'pixelCanvas' and For loops to create the table cell-by-cell.
    //Each 'newCell' is given an Event Listener to call the changeColor
    //function when it is clicked.
    let gridTable = document.getElementById('pixelCanvas');

    for (let rowCount = 1; rowCount <= tableHeight; rowCount++) {
        let row = gridTable.insertRow(0);

        for (let columnCount = 1; columnCount <= tableWidth; columnCount++) {
            let newCell = row.insertCell(0);
            newCell.addEventListener("click", changeColor);
        }
    }
    document.body.appendChild(gridTable);
}

//This function changes the background color of a cell to the color selected by
//the '#colorPicker' input.
function changeColor(evt) {
    let color = document.querySelector('#colorPicker').value;
    console.log('Cell clicked. Its new color will be ' + color);
    evt.target.style.backgroundColor = color;
}
