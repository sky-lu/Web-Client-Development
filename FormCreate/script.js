﻿//json

var products = [];


//Register Function
function Register() {

    //Obtain the data
    var name = document.getElementById("name").value;
    var brand = document.getElementById("brand").value;
    var value = document.getElementById("value").value;

    //Register with json
    products.push
    ({
        "name": name,
        "brand": brand,
        "value": value,

    })

    //clean fields
    clean();

    //List the products

    list();

   
}

//Function to Clean the field
function clean() {
    document.getElementById("name").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("value").value = "";


    document.getElementById("name").focus();

    document.getElementById("btnRegister").style.display = "inline-block";
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnRemove").style.display = "none";
    document.getElementById("btnCancel").style.display = "none";
}


function list() {
    // Obtain the table
    var table = document.getElementById("table");

    //Clean the table
    table.innerHTML = "";

    //for loop 
    for (var index = 0; index < products.length; index++) {
        //table line
        var line = table.insertRow(-1);

        //columns
        var column1 = line.insertCell(0);
        var column2 = line.insertCell(1);
        var column3 = line.insertCell(2);
        var column4 = line.insertCell(3);
        var column5 = line.insertCell(4);

        //The content of the columns
        column1.innerHTML = index + 1;
        column2.innerHTML = products[index].name;
        column3.innerHTML = products[index].brand;
        column4.innerHTML = products[index].value;
        column5.innerHTML = "<button class='btn btn-success' onclick = 'Select(" + index +")'> Select </button>";

    }
}

//function to select the product
function Select(line) {

    //fill the inputs
    document.getElementById("id").value = line;
    document.getElementById("name").value = products[line].name;
    document.getElementById("brand").value = products[line].brand;
    document.getElementById("value").value = products[line].value;

    //show and hide the button
    document.getElementById("btnRegister").style.display = "none";
    document.getElementById("btnSave").style.display = "inline-block";
    document.getElementById("btnRemove").style.display = "inline-block";
    document.getElementById("btnCancel").style.display = "inline-block";
}

//function to remove from form/table etc
//obtain the line of the JSON
function remove() {
var id = document.getElementById("id").value;

//remove from JSON
    products.splice(id, 1);

    //clean the fields
    clean()
    //list the products
    list()

}

function save() {
    document.getElementById("id").value = line;
    document.getElementById("name").value = products[line].name;
    document.getElementById("brand").value = products[line].brand;
    document.getElementById("value").value = products[line].value;

    //Change the JSON array
    products[id] = {
        "name": name,
        "brand": brand,
        "value": value,
    };

    clean();

    list();

}