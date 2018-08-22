/**
 * Created by LENOVO on 2018/4/17.
 */
window.onscroll=function() {
	var scroll = document.documentElement.scrollTop ||
		document.body.scrollTop;
    if(scroll>600){
        document.getElementsByClassName("dropListFather")[0].
            classList.add("fixed")
    }else if(scroll<600){
        document.getElementsByClassName("dropListFather")[0].
            classList.remove("fixed");
    }
};
