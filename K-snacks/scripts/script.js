var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";

function showmMenu()
{
  if(menulist.style.maxHeight == "0px")
  {
    menulist.style.maxHeight = "200px";

  }
  else
  {
    menulist.style.maxHeight = "0px";
  }
}

