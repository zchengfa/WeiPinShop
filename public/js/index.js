window.onload=function () {
/*color.js*/
    setInterval( function changeBackgroundColor() {
        var adv=document.getElementById("adv");
        var randomA=((Math.random()*255)+1);
        var randomB=((Math.random()*255)+4);
        var randomC=((Math.random()*255)+10);
        function checkNum(num) {
            if(num<10)
            {
                num="f"+num;
                return num;
            }
            else if (num.length>=3)
            {
                num=num/10;
                return num;
            }
            else
            {
                return num;
            }
        }
        var A;
        var B;
        var C;
        function setColorVal() {
            A=parseInt(checkNum(randomA));
            B=parseInt(checkNum(randomB));
            C=parseInt(checkNum(randomC));
            return "#"+A+B+C;
        }
        adv.style.backgroundColor=setColorVal();
    },2000);
    /*sort-List.js*/
    function showDetail() {
        var sell=document.getElementsByClassName('mySell-special');
        sell[0].addEventListener("mouseover",function () {
            var list=document.getElementById('sell-drop-list');
            list.style.display="block";
        });

        var vip=document.getElementsByClassName('my-club');
        vip[0].addEventListener("mouseover",function () {
            var vip_list=document.getElementById('vip-drop-list') ;
            vip_list.style.display="block";
        });

        var customer=document.getElementsByClassName('sever');
        customer[0].addEventListener("mouseover",function () {
            var cus_list=document.getElementById('customer-drop-list') ;
            cus_list.style.display="block";
        });

        var more_list=document.getElementsByClassName('more-container');
        more_list[0].addEventListener("mouseover",function () {
            var m_list=document.getElementById('more-list') ;
            m_list.style.display="block";
        });

        var sort=document.getElementById('s-sort');
        sort.addEventListener("mouseover",function () {
            var sort_list=document.getElementsByClassName('sort-list') ;
            sort_list[0].style.display="block";
        });

        /*商品分类listShow*/
        var deBox=document.getElementsByClassName("sort-L-aTag");
        for(var i=0;i<deBox.length;i++){
            deBox[i].addEventListener("mouseover",function () {
                var theBox=document.getElementsByClassName("sort-L-deBox");
                    var index=this.getAttribute("data-index");
                    theBox[index].style.display="block";
            });
        }
    }
    showDetail();
    function hideDetail() {

        var sell=document.getElementsByClassName('mySell-special');
        sell[0].addEventListener("mouseout",function () {
            var list=document.getElementById('sell-drop-list');
            list.style.display="none";
        });


        var vip=document.getElementsByClassName('my-club');
        vip[0].addEventListener("mouseout",function () {
            var vip_list=document.getElementById('vip-drop-list') ;
            vip_list.style.display="none";
        });


        var customer=document.getElementsByClassName('sever');
        customer[0].addEventListener("mouseout",function () {
            var cus_list=document.getElementById('customer-drop-list') ;
            cus_list.style.display="none";
        });


        var more_list=document.getElementsByClassName('more-container');
        more_list[0].addEventListener("mouseout",function () {
            var m_list=document.getElementById('more-list') ;
            m_list.style.display="none";
        });


        var sort=document.getElementById('s-sort');
        sort.addEventListener("mouseout",function () {
            var sort_list=document.getElementsByClassName('sort-list') ;
            sort_list[0].style.display="none";
        });
        //.slide-advertisement
        function advertisement() {
            var conBox=document.getElementsByClassName("controlBox");
                for(var i=0;i<conBox.length;i++)
                {
                    conBox[i].addEventListener("mouseover",function () {
                        var slideLi=document.getElementsByClassName("slide-li");
                        var con=this.getAttribute("data-con");
                            conBox[con].className ="controlBox select-con";
                            slideLi[con].style.zIndex="1000";
                    });
                    conBox[i].addEventListener("mouseout",function () {
                        var slideLi=document.getElementsByClassName("slide-li");
                        var con=this.getAttribute("data-con");
                        conBox[con].className ="controlBox";
                        slideLi[con].style.zIndex="1";
                    });
                }
        }
        advertisement();
        /*商品分类listHide*/
        var deBox=document.getElementsByClassName("sort-L-aTag");
        for(var i=0;i<deBox.length;i++){
            deBox[i].addEventListener("mouseout",function () {
                var theBox=document.getElementsByClassName("sort-L-deBox");
                var index=this.getAttribute("data-index");
                    theBox[index].style.display="none";
            });
        }
    }
    hideDetail();
//recommend section
    function trackBoxShow() {
        var liObj=document.getElementsByClassName("r-con-li");
            for(var i=0;i<liObj.length;i++)
            {
                liObj[i].addEventListener("mouseover",function () {
                    var trackBox=document.getElementsByClassName("track-box");
                    var liNum=this.getAttribute("data-li");
                    trackBox[liNum].style.marginTop="-60px";
                    trackBox[liNum].style.transition="0.5s";
                });

                liObj[i].addEventListener("mouseout",function () {
                    var trackBox=document.getElementsByClassName("track-box");
                    var liNum=this.getAttribute("data-li");
                    trackBox[liNum].style.marginTop="0";
                    trackBox[liNum].style.transition="0.5s";
                });
            }
    }
    trackBoxShow();
// //页面滚动一定距离时，导航条固定
//     window.onscroll = function () {
//         var topScroll=document.body.scrollTop;
//         var navBox=document.getElementsByClassName("H-box");
//         if(topScroll>200){
//             navBox[0].style.position="fixed";
//             navBox[0].style.top="0";
//             navBox[0].style.zIndex="9999";
//         }
//         else
//         {
//             navBox[0].style.position="static";
//         }
//     };
};