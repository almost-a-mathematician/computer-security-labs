function gid(i) {
    return document.getElementById(i);
}
function CEL(s) {     
    return document.createElement(s);
}
function ACH(p,c) {
    p.appendChild(c);
}

function setSize() {
  el = gid('chooseSize');
  for (var i=2; i<5; i++) {
    el.options[i-2] = new Option(i +' x '+ i, i);
}
  el.options[3].selected = true;
}

function createMatrix() {
  gid('workArea').innerHTML = '';

  var size = gid('chooseSize').value, i=0, j=0;
  tbl = CEL('table');
  tbl.id = 'matrix';
  for (i=0; i < size; i++) {
    var row = tbl.insertRow(-1);
    for (j=0; j < size; j++) {
      var NewCell = row.insertCell(-1);
      NewCell.innerHTML = '<p tabindex="-1" contenteditable="true"></p>';
      //NewCell.innerHTML = '<p tabindex="-1" contenteditable="true">' + i +'x'+ j + '</p>'; 
    }
    tbl.rows[i].cells[i].style.background = 'rgb(172, 183, 142)';
  }
  ACH(gid('workArea'), tbl);

  var cmd = CEL('button');
  cmd.innerHTML = 'Transpose';
  cmd.onclick = transpon;
  ACH(gid('workArea'), cmd);
}

function transpon() {
  if (gid('tranMatrix')) {
    gid('workArea').removeChild(gid('tranMatrix'));
}

  var a = [], b = [], i=0, j=0, tbl = gid('matrix'), k = tbl.rows.length;
  for (i=0; i<k; i++) {
    a[i] = [];
    for (j=0; j<k; j++) {
        a[i][j] = tbl.rows[i].cells[j].children[0].innerHTML;
    }
  }

  a.forEach (function(subArray) {
    b.push(subArray.concat());
  });

  for (i=0; i<a.length; i++) {
    for (j=0; j < a[i].length; j++) {
        b[i][j] = a[j][i];
    }
  }
  var tranMatrix = CEL('table');
  tranMatrix.id = 'tranMatrix';
  for (i=0; i<b.length; i++) {
    var row = tranMatrix.insertRow(-1);
    for (j=0; j < b[i].length; j++) {
        row.insertCell(-1).innerHTML = b[i][j];
    }
    tranMatrix.rows[i].cells[i].style.background = 'rgb(172, 183, 142)';
  }
  ACH(gid('workArea'), tranMatrix);
}
