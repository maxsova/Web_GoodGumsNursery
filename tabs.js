// JavaScript source code
//Asssessment 2 cse2icx by Max Sova (20224612), 2022

//This function toggles displayed product lists on products.html triggered by onclick events from productButton tabs.

//selectively displays product lists
function openTab(e, productRange) {
    var i;
    var x = document.getElementsByClassName("ptabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    //changes styling of tabs by replacing active tab's class name
    var y = document.getElementsByClassName('productButton'); // get all elements
    for (i = 0; i < y.length; i++) {
        y[i].className = y[i].className.replace(" active", "");
    }
    document.getElementById(productRange).style.display = "block";
    e.currentTarget.className += " active";

}
