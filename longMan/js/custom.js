var messagesHolder = document.getElementById("incorrectAnswerMessages"),
  message1 = document.getElementById("message1"),
  message2 = document.getElementById("message2"),
  message3 = document.getElementById("message3");
// adding this messages  to let the user know the correct answers if he select incorrect answers

var question001 = ["blackboard "];
var choices001 = [
  `<input onclick=correct001() name=button001 type=radio />
    <img src="style/assets/board.png" />
  <br />
  <input onclick=incorrect001() name=button001 type=radio />
  <img src="style/assets/table.png" />
  <br />
  <input onclick=incorrect001() name=button001 type=radio />
  <img src="style/assets/chair.png" />
  <br />`,
];

var question002 = ["pencil"];
var choices002 = [
  `<input onclick=incorrect002() name=button002 type=radio />
  <img src="style/assets/paint.png" />
  <br />
  <input onclick=correct002() name=button002 type=radio />
  <img src="style/assets/pencil.png" />
  <br />
  <input onclick=incorrect002() name=button002 type=radio />
  <img src="style/assets/book.png" />
  <br />`,
];

var question003 = ["desk "];
var choices003 = [
  `<input onclick=incorrect003() name=button003 type=radio />
  <img src="style/assets/book.png" />
  <br />
  <input onclick=incorrect003() name=button003 type=radio />
  <img src="style/assets/mobile.png" />
  <br />
  <input onclick=correct003() name=button003 type=radio />
  <img src="style/assets/desk.png" />
  <br />`,
];
var a, b, c, z;

function set001() {
  a = 0;
  message001.innerHTML = question001;
  options001.innerHTML = choices001;
  click001.innerHTML =
    ` <button onclick=set002() class='btn btn-success'>Submit</button>` +
    `<button onclick=set002() class='btn btn-success arrow'>
      <i class="fas fa-chevron-right"></i>
    </button>`;
}
set001();

function correct001() {
  a = 1;
  messagesHolder.style.display = "none";
}

function incorrect001() {
  a = 0;
  message1.style.display = "block";
  message1.innerHTML = "correct answer is a ";
  messagesHolder.style.display = "block";
}

function set002() {
  b = 0;
  message001.innerHTML = question002;
  options001.innerHTML = choices002;
  click001.innerHTML =
    `<button onclick=set003() class='btn btn-success'>submit</button>` +
    `<button onclick=set003() class='btn btn-success arrow'>
      <i class="fas fa-chevron-right"></i>
    </button>` +
    `<button onclick=set001() class='btn btn-success arrow mr-3'>
      <i class="fas fa-chevron-left"></i>
      </button>`;

  messagesHolder.style.display = "none";
}

function correct002() {
  b = 1;
  messagesHolder.style.display = "none";
}

function incorrect002() {
  b = 0;
  messagesHolder.style.display = "block";
  message1.style.display = "none";
  message2.style.display = "block";
  message2.innerHTML = "<br> correct answer is b";
}

function set003() {
  c = 0;
  message001.innerHTML = question003;
  options001.innerHTML = choices003;
  click001.innerHTML =
    `<button onclick=result001() class='btn btn-success'>submit</button>` +
    `<button onclick=set002() class='btn btn-success arrow mr-3'>
    <i class="fas fa-chevron-left"></i>
    </button>`;
  messagesHolder.style.display = "none";
}

function correct003() {
  c = 1;
  messagesHolder.style.display = "none";
}

function incorrect003() {
  c = 0;
  messagesHolder.style.display = "block";
  message1.style.display = "none";
  message2.style.display = "none";
  message3.style.display = "block";
  message3.innerHTML = "<br> correct anser is c";
}

function result001() {
  z = a + b + c;
  message001.innerHTML = "End of Quiz";
  options001.innerHTML = "";
  comment001.innerHTML = "Your score is: " + z;

  click001.innerHTML =
    "<button onclick=repeat001() class='btn btn-primary'>Repeat</button>";

  document.getElementById("title").style.display = "none";
  document.getElementById("reset").style.display = "none";
  messagesHolder.style.display = "none";

  if (z == 3) {
    comment001.innerHTML = "Your score is: " + z + " Great Work " + " ;)";
    // document.getElementById("incorrectAnswerMessages").style.display = "none";
  }
}

function repeat001() {
  location.reload();
}

$(function () {
  $(".start").click(function () {
    $(this).parent().parent().fadeOut(1000);
    $(".wrapper").fadeIn(1000);
  });
  $('input[type="reset"]').click(function () {
    $(".message").text("");
  });
});
