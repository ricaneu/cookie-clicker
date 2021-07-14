var cookie;

var coincount = 0;
var counter = 0;
var cookieCount = 0;


var cookie = document.getElementById("cookie");


function update(c, d) {
    var countCoins = document.getElementById("coins");
    var countElement = document.getElementById("count");
    countCoins.innerHTML = d
    countElement.innerHTML = c;
}



cookie.onclick = function() {
    cookieCount++;
    counter = counter + 1;
    //    countCoins.==++innerHTML = Math.floor(cookieCount / 10);
    if (counter == 10) {
        coincount++;
        counter = 0;
    }
    update(cookieCount, coincount)
}


function buy() {
    if (coincount > 0) {
        coincount--
        cookieCount = cookieCount + 100
        update(cookieCount, coincount)
    }
}


function reset() {
    coincount = 0;
    counter = 0;
    cookieCount = 0;

    update(0, 0)
}