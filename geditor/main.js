var obj_geditor=document.getElementById("geditor");
var obj_tools=document.getElementById("tools");
var obj_geditor_co=document.getElementById("geditor").contentWindow;
//初始化，编辑器
//检测用户按键，从而添加标签
  var p_ok=0;
  window.onkeyup=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
   if(obj_geditor.textContent!=""){
   if(p_ok==0){
   for(var i=0;i<=100;i++){
	     if(e && e.keyCode==i){
			 //alert(s.textContent);
				  obj_geditor.innerHTML="<p>"+obj_geditor.textContent+"</p>";
				  p_ok=1;
			 }
   
	   }
   }
 }else{
	 p_ok=0;
	 }
}; 


/**公共调用方法**/
//将文本内容选中，并进行相应操作
var s;
function funcSelectText(mode,attr,value){     //mode指元素标签;attr指所创建元素的属性;value指属性值
	var txt="";
	if(document.selection){
		sel=document.selection.createRange().text;
		}else{
	    sel=document.getSelection();
			}
		txt=sel.getRangeAt(0).extractContents().textContent;
			range=sel.getRangeAt(0);
			if(txt.length>0){
			 s=range;
			 range.deleteContents();
			var obj_txt=document.createElement(mode);
			if(attr==""||value==""){
			obj_txt.innerHTML=txt;
			range.insertNode(obj_txt);
			}else{
			obj_txt.setAttribute(attr,value);
			obj_txt.innerHTML=txt;
			range.insertNode(obj_txt);
			}
			}
			  // alert(range);
	/*if(txt!=null || txt!=""){	
        obj_geditor.innerHTML=obj_geditor.textContent.replace(txt,"121312");
	}      替换文本*/
	
	}
/**var container = container || document;
		container.onmouseup = function(){
		 funcSelectText();
		}     按下鼠标调用选中文本,测试时候用的**/
		
//option标签的选择函数方法（公共方法,可调用）
/**function opsel(id,mode,attr,val){
		   var oindex;
		   var id=id;
		   var mode=mode;
		   var attr=attr;
	       var obj=document.getElementById(id);
 	      value=obj.options[obj_font_size.options.selectedIndex].text;
          obj_geditor.onfocus=funcSelectText(mode,attr,val+value);
	}
**/
//(注意这个方法只能在select下使用！)调用选取option的方法函数，可直接调用使用！id指：要调用方法的元素id值；mode指标签,比如:span；attr指属性名称,如：style；val指属性值的一部分,如：font-size:,注意冒号必须加上value就是选中的值了
function fs(id,mode,attr,val,ty){
           var val=val;
		   var id=id;
           var obj=document.getElementById(id);
           value=obj.options[obj.options.selectedIndex].text;
		   if(ty=="" || ty==null){                        //ty指的是切换value和mode,以适应开发阶段
              funcSelectText(mode,attr,val+value);}else{
			  funcSelectText(value,attr,mode);              //此时value和mode进行了切换
				  }
       }
	   		
//显示元素
   function	show(){
alert(obj_geditor.innerHTML);
}


/**调用插件关键功能**/

var js_src=new Array("tools/font/font_size.js","tools/font/font_type.js");   //注册插件地址

  function diaoyong(src1){                //调用插件          
     var src=src1;
   new_js=document.createElement("script");
   new_js.setAttribute("type","text/javascript");
   new_js.setAttribute("src",src);
   document.body.appendChild(new_js);
}


  function js_ok(){
     for(var i=0;i<=js_src.length;i++){
          //alert(js_src[i]);
          diaoyong(js_src[i]);
          }
  }

js_ok();
//alert("ssssss");


