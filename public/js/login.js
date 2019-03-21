window.onload = function () {
    function changeLoginMethod() {
        var qrBox=document.getElementsByClassName("qr-btn");
        qrBox[0].addEventListener("click",function () {
            var qr=document.getElementsByClassName("log-con-qr");
            qr[0].style.display="block";
            var accountLogin=document.getElementsByClassName("log-con-account");
            accountLogin[0].style.display="none";
        });

        var accountBox=document.getElementsByClassName("account-btn");
        accountBox[0].addEventListener("click",function () {
            var qr=document.getElementsByClassName("log-con-qr");
            qr[0].style.display="none";
            var accountLogin=document.getElementsByClassName("log-con-account");
            accountLogin[0].style.display="block";
        });
    }
    changeLoginMethod();
};