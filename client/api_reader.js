
var sprintf = require("sprintf-js").sprintf;
var url = 'http://localhost:3000/icons';

window.onload = function() {
  'use strict';
  var printed = [];

  timeout();

  function timeout() {
    setTimeout(function() {
      httpGet(url), timeout();
    }, 4000);
  }

  function httpGet(url) {
    'use strict';

    fetch(url)
    .then(function(response) {
      if(response.status <= 200) {
        response.json().then(function(icons) {

          icons.some(function(icon) {
            if(!printed.includes(icon.id)) {
              createTable(icon);
              printed.push(icon.id);
              return true;
            }
          });
        });
      }
      return response.json();
    })
    .catch(alert);
  }

  function createTable(icon) {
    var body = document.getElementsByTagName("body")[0];
    var tab = document.createElement("table");
    var tabBody = document.createElement("tbody");
    var row, cell, i, j;

    tab.setAttribute('class', 'table');

    for(i = 0; i < 5; i++) {
      row = document.createElement("tr");

      for(j = 0; j < 2; j++) {
        cell = document.createElement("td");
        row.appendChild(cell);
        switch(i) {
          case 0:
            cell.setAttribute('class', 'icon');
            cell.innerHTML = icon.icon;
            break;
          case 1:
            cell.setAttribute('class', 'name');
            cell.innerHTML = icon.name;
            break;
          case 2:
            cell.setAttribute('class', 'cap');
            cell.innerHTML = j == 0? icon.cap1 : icon.cap2;
            break;
          case 3:
            cell.setAttribute('class', 'num');
            cell.innerHTML = j == 0? sprintf("%03d", icon.num1) : sprintf("%03d", icon.num2);
            break;
          case 4:
            cell.setAttribute('class', 'img');
            getIcon(cell, icon.icon);
            break;
        }
        if((i == 0 || i == 1 || i == 4) && j == 0) {
          cell.setAttribute('colSpan', '2');
          break;
        }
      }
      tabBody.appendChild(row);
    }
    tab.appendChild(tabBody);
    body.appendChild(tab);
  }

  function getIcon(cell, num) {
    var path = 'img/';
    var img = document.createElement("img");
    img.setAttribute('src', path + num + '.png');
    cell.appendChild(img);
  }
}
