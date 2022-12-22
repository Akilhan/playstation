var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function menuIcon(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="130px";
    }
    else{
        menuList.style.maxHeight="0px"
    }
}