var popup_box = document.getElementById("popupBox");
var submit_btn = document.getElementById("btn");

submit_btn.onclick = function()
{
    popup_box.style.display = 'visible';
}

var ok_btn = document.getElementById("btnOk");

function closePopUp_box(){
    popup_box.style.display = "none";
}