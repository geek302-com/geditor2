      var font_type="<select id='font_type' class='font'>";
       font_type+="<option onclick='ns()'>p</option>";
       font_type+="<option onclick='ns()'>h1</option>";
       font_type+="<option onclick='ns()'>h2</option>";
       font_type+="<option onclick='ns()'>h3</option>";
       font_type+="<option onclick='ns()'>h4</option>";
       font_type+="<option onclick='ns()'>h5</option>";
       font_type+="<option onclick='ns()'>h6</option>";
       font_type+="</select>";
       obj_tools.innerHTML=obj_tools.innerHTML+font_type;

    

       //调用公共选择方法
       function ns(){
          fs("font_type","","","","sdasd");
       }