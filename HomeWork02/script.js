 var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
   var tblBody = document.createElement("tbody");

var term = {
1: 10,
2: 13,
3: 22,
4: 15,
5: 14,
6: 11
}

var term2 = {
1: "Россия ",
2: "Украина ",
3: "Франция ",
4: "Швецияя ",
5: "Дания ",
6: "Латвия "
}

var row = document.createElement("tr");
//---Заполнение--элементами----\
  for (var i = 0; i < 7; i++) {
   
    
         var cell = document.createElement("td");
          var cellText = document.createTextNode(term2[i]);
           cell.appendChild(cellText);
            row.appendChild(cell);

    for (var j = 0; j < 1; j++) {

      var cell = document.createElement("td");
       var cellText = document.createTextNode(term[i]);
        cell.appendChild(cellText);
         row.appendChild(cell);
    }
var row = document.createElement("tr");
    tblBody.appendChild(row);
  }
//-----------------------------


  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");


//#2

x = findMax(term[1],term[2],term[3],term[4],term[5],term[6]);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i <arguments.length; i++) {
        if (arguments[i]> max) {
            max = arguments[i];
        }
    }
    return max;
}