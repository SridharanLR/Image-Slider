var active = 1;
var previous;

function front() {
  if (5 > active) {
    var forWord = document.getElementById(active).classList;
    forWord.add("dNone");
    previous= active;    
    active++;
    clr(active)
    var forWord = document.getElementById(active).classList;
    forWord.remove("dNone");
  }
}

function back() {
  if (1 < active) {
    var forWord = document.getElementById(active).classList;
    forWord.add("dNone");
    previous = active
    active--;
    clr(active)
    var forWord = document.getElementById(active).classList;
    forWord.remove("dNone");
  }
}

function btnTab(val) {
  if (active == val) {
    return;
  }
  switch (val) {
    case "1":
        previous= active;
      call(val);
      active = 1;

      clr(1);
      break;

    case "2":
        previous= active;
      call(val);
      active = 2;

      clr(2);
      break;

    case "3":
        previous= active;
      call(val);
      active = 3;

      clr(3);
      break;

    case "4":
        previous= active;
      call(val);
      active = 4;

      clr(4);
      break;

    case "5":
        previous= active;
      call(val);
      active = 5;
      clr(5);
      
      break;
  }
}

function call(val) {
  if (active == val) {
    return;
  }
  var front = document.getElementById(val).classList;
  front.remove("dNone");
  var back = document.getElementById(active).classList;
  back.add("dNone");
}

function clr() {
  var first = document.getElementById('dot_' +active).classList;
  first.add("on"); 
  var second = document.getElementById('dot_'+previous).classList;
  second.remove("on");
}
