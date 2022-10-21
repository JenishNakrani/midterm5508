var popupbox = document.getElementById("popup_display");
var submit_btn = document.getElementById("btnSubmit");
var ok_btn = document.getElementById("ok_btn");

submit_btn.onclick =  function()
{
    popupbox.style.display = "block";
}

ok_btn.onclick =  function()
{
    popupbox.style.display = "none";
}