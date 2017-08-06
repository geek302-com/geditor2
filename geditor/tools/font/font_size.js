      var font_size="<select id='font_size' class='font'>";
       font_size+="<option onclick='os()' selected='selected'>30px</option>";
       font_size+="<option onclick='os()'>12px</option>";
       font_size+="<option onclick='os()'>16px</option>";
       font_size+="<option onclick='os()'>18px</option>";
       font_size+="<option onclick='os()'>24px</option>";
       font_size+="<option onclick='os()'>32px</option>";
       font_size+="<option onclick='os()'>48px</option>";
       font_size+="</select>";
       obj_tools.innerHTML=obj_tools.innerHTML+font_size;
       //调用公共方法函数
       function os(){
          fs("font_size","font","style","font-size:");
         }