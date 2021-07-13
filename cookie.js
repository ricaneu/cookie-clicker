var cookie;

var cookieCount = 0;
var cookie = document.getElementByGetElementById("cookie");
cookie.onclick = function() {
    cookieCount++;
    alert(cookieCount);
    countElement.innerHTML = cookieCount;
}

var cps = 0;
var cursorCount = 0;
var cursorCost = 0;