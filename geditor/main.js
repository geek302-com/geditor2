var obj_geditor=document.getElementById("geditor");
var obj_tools=document.getElementById("tools");
var obj_geditor_co=document.getElementById("geditor").contentWindow;
//��ʼ�����༭��
//����û��������Ӷ���ӱ�ǩ
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


/**�������÷���**/
//���ı�����ѡ�У���������Ӧ����
var s;
function funcSelectText(mode,attr,value){     //modeָԪ�ر�ǩ;attrָ������Ԫ�ص�����;valueָ����ֵ
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
	}      �滻�ı�*/
	
	}
/**var container = container || document;
		container.onmouseup = function(){
		 funcSelectText();
		}     ����������ѡ���ı�,����ʱ���õ�**/
		
//option��ǩ��ѡ������������������,�ɵ��ã�
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
//(ע���������ֻ����select��ʹ�ã�)����ѡȡoption�ķ�����������ֱ�ӵ���ʹ�ã�idָ��Ҫ���÷�����Ԫ��idֵ��modeָ��ǩ,����:span��attrָ��������,�磺style��valָ����ֵ��һ����,�磺font-size:,ע��ð�ű������value����ѡ�е�ֵ��
function fs(id,mode,attr,val,ty){
           var val=val;
		   var id=id;
           var obj=document.getElementById(id);
           value=obj.options[obj.options.selectedIndex].text;
		   if(ty=="" || ty==null){                        //tyָ�����л�value��mode,����Ӧ�����׶�
              funcSelectText(mode,attr,val+value);}else{
			  funcSelectText(value,attr,mode);              //��ʱvalue��mode�������л�
				  }
       }
	   		
//��ʾԪ��
   function	show(){
alert(obj_geditor.innerHTML);
}


/**���ò���ؼ�����**/

var js_src=new Array("tools/font/font_size.js","tools/font/font_type.js");   //ע������ַ

  function diaoyong(src1){                //���ò��          
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


