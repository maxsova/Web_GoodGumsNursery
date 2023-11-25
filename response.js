// JavaScript source code
//Asssessment 2 cse2icx by Max Sova (20224612), 2022

//this function reads key-value pairs from response.html url parameters and assigns values to elements on the page by element ID.
window.onload = function () {
    "use strict";

    //filling orderSummary table.
    var url = new URL(window.location.href);
    var name = url.searchParams.get("name");
    document.getElementById("name").innerText = name;
    var custPhone = url.searchParams.get("custPhone");
    document.getElementById("custPhone").innerText = custPhone;
    var email = url.searchParams.get("email");
    document.getElementById("email").innerText = email;
    var deliveryAddress = url.searchParams.get("deliveryAddress");
    document.getElementById("deliveryAddress").innerText = deliveryAddress;
    var paymentMethod = url.searchParams.get("paymentMethod");
    document.getElementById("paymentMethod").innerText = paymentMethod;
    var terms = url.searchParams.get("terms");
    document.getElementById("terms").innerText = terms;
    var message = url.searchParams.get("message");
    document.getElementById("message").innerText = (message.length <= 0 ? "No comment" : message);

    //filling orderDetails table including row totals. Imput validation clears non-valid entries.
    var dropdown1 = url.searchParams.get("dropdown1");
    var qty1 = url.searchParams.get("qty1");
    var sub1 = dropdown1 == "" ? 0 : parseFloat(dropdown1.split("$").pop()) * qty1;
    document.getElementById("dropdown1").innerText = qty1 == 0 ? null : dropdown1;
    document.getElementById("qty1").innerText = qty1 == 0 || dropdown1 == ""  ? null : qty1;
    document.getElementById("sub1").innerText = sub1 == 0 ? null : "$" + sub1;

    var dropdown2 = url.searchParams.get("dropdown2");
    var qty2 = url.searchParams.get("qty2");
    var sub2 = dropdown2 == "" ? 0 : parseFloat(dropdown2.split("$").pop()) * qty2;
    document.getElementById("dropdown2").innerText = qty2 == 0 ? null : dropdown2;
    document.getElementById("qty2").innerText = qty2 == 0 || dropdown2 == ""  ? null : qty2;
    document.getElementById("sub2").innerText = sub2 == 0 ? null : "$" + sub2;

    var dropdown3 = url.searchParams.get("dropdown3");
    var qty3 = url.searchParams.get("qty3");
    var sub3 = dropdown3 == "" ? 0 : parseFloat(dropdown3.split("$").pop()) * qty3;
    document.getElementById("dropdown3").innerText = qty3 == 0 ? null : dropdown3;
    document.getElementById("qty3").innerText = qty3 == 0 || dropdown3 == ""  ? null : qty3;
    document.getElementById("sub3").innerText = sub3 == 0 ? null : "$" + sub3;

    var dropdown4 = url.searchParams.get("dropdown4");
    var qty4 = url.searchParams.get("qty4");
    var sub4 = dropdown4 == "" ? 0 : parseFloat(dropdown4.split("$").pop()) * qty4;
    document.getElementById("dropdown4").innerText = qty4 == 0 ? null : dropdown4;
    document.getElementById("qty4").innerText = qty4 == 0 || dropdown4 == ""  ? null : qty4;
    document.getElementById("sub4").innerText = sub4 == 0 ? null : "$" + sub4;

    var dropdown5 = url.searchParams.get("dropdown5");
    var qty5 = url.searchParams.get("qty5");
    var sub5 = dropdown5 == "" ? 0 : parseFloat(dropdown5.split("$").pop()) * qty5;
    document.getElementById("dropdown5").innerText = qty5 == 0 ? null : dropdown5;
    document.getElementById("qty5").innerText = qty5 == 0 || dropdown5 == ""  ? null : qty5;
    document.getElementById("sub5").innerText = sub5 == 0 ? null : "$" + sub5;

    //calculating total cost.
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("totalPurchase").innerText = "$" + total;

};