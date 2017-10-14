 var toTop = document.getElementById("fixbar-bottom").getElementsByTagName("li")[0];
    console.log(toTop);
    toTop.oncick=function (){
    	var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    	console.log(scrollTop);
    	if(scrollTop>0){
    		scrollTop=0;
    	}
    }