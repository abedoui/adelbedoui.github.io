function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#f2f2f2";
  }

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName + "-link").style.backgroundColor = "#ddd";
}
