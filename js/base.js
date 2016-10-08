    


$(function(){
	var banners=$(".banner-middle1");
	var bannerq=$(".banner-quan1");
    var bannera=$(".banner")[0];
    var color=["#b50f25","#ebebeb","#881523","#353927","#cfedf5"]
    for (var i = 0; i < bannerq.length; i++) {
    	bannerq[i].index=i;
    	bannerq[i].onmouseover=function(){
    		for (var i = 0; i < bannerq.length; i++) {
    			banners[i].style.zIndex=1;
    			
    			
    			bannerq[i].style.background="#fff";
    		};
         
    		bannera.style.background=color[this.index];
    		banners[this.index].style.zIndex=2;
    		this.style.background="#ccc";



    	}
    };

var num=0;
 lunbo=setInterval(function(){
 	num++;
 	if(num==5){
 		num=0;

 	};
 	for (var i = 0; i < bannerq.length; i++) {
 		banners[i].style.zIndex=1;
 		bannerq[i].style.background="#ccc";
 	};
	
 	banners[num].style.zIndex=2;
 	bannerq[num].style.background="#fff";
 	bannera.style.background=color[num];

 },3000)

var num=0;
function move(){
    num++;
    if(num==5){
    num=0;

};
for (var i = 0; i < bannerq.length; i++) {
    bannerq[i].style.background="#ccc";
    banners[i].style.zIndex=1;
};
bannera.style.background=color[num];
banners[num].style.zIndex=2;
bannerq[num].style.background="#fff";
}


bannera.onmouseover=function(){
    clearInterval(lunbo)
}
bannera.onmouseout=function(){
    lunbo=setInterval(move,3000)
}




  
var t2=$(".t2")[0];
var zhezhu1=$(".zhezhu1")[0];

t2.onmouseover=function(){
    zhezhu1.style.display="block";
} 
t2.onmouseout=function(){
    zhezhu1.style.display="none";
} 





        var leftd=$(".left")[0];

        var topd=$(".top-top")[0];
       

       var scbj=getDoc();
        var flag=true;
        var flag2=true;
        window.onscroll=function(){
            var st=scbj.scrollTop;
        
        if(st>500){
            if(flag){
                flag=false;
                flag2=true;
            animate(topd,{top:0})
            animate(leftd,{width:36,height:316})
            }

        }else{
           
                flag=true;
                flag2=false;
            animate(topd,{top:-60})
            animate(leftd,{width:0,height:0})
        

        }
    }

  

    var leihang=$(".leihang");
    var hangmao=$(".hangmao");
    for (var i = 0; i < leihang.length; i++) {
        leihang[i].index=i;
        leihang[i].onmouseover=function(){
            for (var i = 0; i < hangmao.length; i++) {
                animate(hangmao[this.index],{marginTop:-9})
            };
        }
        leihang[i].onmouseout=function(){
            for (var i = 0; i < hangmao.length; i++) {
                animate(hangmao[this.index],{marginTop:0})
            };
        }
    };


     
    var bannerr=$(".bannerr");
    var huchu=$(".huchu");
    for (var i = 0; i < bannerr.length; i++) {
        bannerr[i].index=i;
        bannerr[i].onmouseover=function(){
            for (var i = 0; i < huchu.length; i++) {
                huchu[i].style.display="none"
            };
            huchu[this.index].style.display="block";
        }
        bannerr[i].onmouseout=function(){
            huchu[this.index].style.display="none"
        }
    };

    var leftt=$(".leftt");
    var text=$(".text");
    var yanse=["#DD2727","green","red","blue","#fa9658","#f299c9","#03848a","#ccc"];
    var yanse1=["#DD2727","#626262","#626262","#626262","#626262","#626262","#626262","#ccc"]
    for (var i = 0; i < leftt.length; i++) {
        leftt[i].index=i;
        yanse[i].index=i;
        leftt[i].onclick=function(){
            var ot=text[this.index].offsetTop;
            animate(scrollobj,{scrollTop:ot}) 

        }
        leftt[i].onmouseover=function(){
            this.style.background=yanse[this.index]

        }
        leftt[i].onmouseout=function(){
            this.style.background=yanse1[this.index]

        }


        
    };  


    var scrollobj=getDoc();

               addEvent(window,"scroll",jianrong);
  
          function jianrong(){
             
       
             var ht=scrollobj.scrollTop;
            for (var i = 0; i < text.length; i++) {
                var lt=text[i].offsetTop;
            if(ht+100>lt){
                for (var j = 0; j < leftt.length; j++) {
               leftt[j].style.background="" 
            };
            leftt[i].style.background="red" 

             
            };
             
            }
             
           }
var zhongo=$(".kk");
var newarr5=[];
for (var i = 0; i < zhongo.length; i++) {
    newarr5.push(zhongo[i].offsetTop)
};
      var vh=document.documentElement.clientHeight;
        

      var arr1=getDoc();
       
      
      addEvent(window,"scroll",jianrong1)
      arr1.scrollTop=1;

      function jianrong1(){
       
          for (var i = 0; i < zhongo.length; i++) {
            if(arr1.scrollTop+vh>newarr5[i]&&zhongo[i].getAttribute("flag8")!="true"){
                var imgs=$("img",zhongo[i])
                for (var j = 0; j< imgs.length; j++) {
                    imgs[j].src=imgs[j].getAttribute("asrc")
                };
                zhongo[i].setAttribute("flag8",true)
            }
          };
       }



           






 

    
    





 var fangda=$(".fangda");
 var jihe=$(".yinyuan");
 
  for (var i = 0; i < jihe.length; i++) {
      jihe[i].index=i;
      jihe[i].onmouseover=function(){
        animate(fangda[this.index],{width:150,height:150,marginTop:5,marginLeft:44},200)
    } 
      jihe[i].onmouseout=function(){
        animate(fangda[this.index],{width:120,height:120,marginTop:20,marginLeft:59},200)
    }

}
 



var right=$(".yous");
        var right1=$(".youx");
        var t;
        for (var i = 0; i < right.length; i++) {
            right[i].index=i;
            hover(right[i],function(){
                var that=this;
                clearTimeout(t)
                t=setTimeout(function(){
                right1[that.index].style.display="block";
                animate(right1[that.index],{marginLeft:-100},300)
            },300)
            },function(){
                clearTimeout(t)
                animate(right1[this.index],{marginLeft:-200},300,function(){
                    this.style.display="none";
                })
                
            })
        };

var you9=$(".you9")[0];
var you19=$(".you19")[0];
you9.onmouseover=function(){
    you19.style.display="block"
}
you9.onmouseout=function(){
    you19.style.display="none"
}


    var obj=document.documentElement;
       var fanhui=$(".tupian8")[0];
        fanhui.onclick=function(){
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
    }
    var obj=document.documentElement;
       var fanhui=$(".you10")[0];
        fanhui.onclick=function(){
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
    }
       


})


