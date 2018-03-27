var myHeading = document.querySeleactor('h1');
myHeading.innerHTML = 'Cloude server<br>2018-1!';

function getIdPw() {    
text = 10.5;
    var id =prompt('ID 입력', '');
    alert(id + '가 로그인함.');
    var passwordSystem = '12345';
    var password = prompt('PW 입력', '');
    if (password === passwordSystem) alert('정상 로그인!');
    else alert('비밀번호 오류');
}


document.querySelector('html').onclick = function () {
    getIdPw();
}

var myImage = document.querySelector('img');
myImage.onclick = function () {
var src = myImage.getAttribute('src');
if (src === 'images/firefox-icon.png') {
    myImg.setAttribute('src', 'images/mokwon.png');
} else {
    myImg.setAtrribute('src', 'images/firefox-icon.png');
    }
}
