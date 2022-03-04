$(document).ready(function () {
    $.ajax({
        url: 'https://api.binance.com/api/v1/ticker/price',
        type: 'GET',
        success: function (result) {
            var select = document.getElementById('cryto');
            for (let i = 0; i < result.length; i++) {
                document.getElementById('symbol').innerHTML = result[i].symbol;
                document.getElementById('price').innerHTML = result[i].price;
                document.getElementById('sum').innerHTML = result[i].price;
                var opt = document.createElement('option');
                opt.value = result[i].symbol;
                opt.innerHTML = result[i].symbol;
                select.appendChild(opt);
            }
        },
        error: function (error) {
            console.log(error);
        }
    })
})
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, value) {
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  
}
function putCookie(form)

{
    var lab1 = document.getElementById('lab1cryto');
    //set cookie 
    setCookie("cryto", form[0].cryto.value);
    setCookie("balance", form[0].balance.value);

    // var cookieString = getElementById('lab1cryto').value
    let cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    setCookie("concateCookie", cookies.cryto+form[0].cryto.value)
    document.getElementById('lab1cryto').innerHTML = cookies.kk2;
    const listCookie = [];
    listCookie.push(cookies.cryto);
    setCookie("listCookie", listCookie)
    return true;
}

function getCookie() {
    
    
    let cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    //cookies.cryto อ่านค่า cookie
    document.getElementById('lab1cryto').innerHTML = cookies.cryto;
    document.getElementById('lab1balance').innerHTML = cookies.balance;
    
    
    
}
