let xml = new XMLHttpRequest();
xml.open("GET", "xml.xml", false);
xml.send();
let footerTitle = xml.responseXML.querySelector("footerTitle");
document.getElementById("footerTitle").innerHTML = footerTitle.textContent;
