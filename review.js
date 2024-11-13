var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    parseXml(this);
  }
};
xhttp.open("GET", "review.xml", true);
xhttp.send();

function parseXml(xml) {
  var xmlDoc = xml.responseXML;
  var menuItems = xmlDoc.getElementsByTagName("card");
  var menuDiv = document.getElementById("menu");

  for (var i = 0; i < menuItems.length; i++) {
    var card = menuItems[i].children;
    var content = card[0].textContent.trim();
    var name = card[1].textContent.trim();

    var html = `
      <div class="card">
        <img src="1.png" alt="user" />
        <div class="card__content">
          <span><i class="ri-double-quotes-l"></i></span>
          <div class="card__details">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <p>${content}</p>
            <h4>${name}</h4>
          </div>
        </div>
      </div>
      <br>`;
    menuDiv.innerHTML += html;
  }
}
