function validation(){
    var name=document.getElementById("name").value;
    var valid_name_regex=/^[A-Za_z]+$/;
    var age=document.getElementById("age").value;
    var valid_age_regex=/^[0-9]+$/;
    var city =document.getElementById("city").value;
    if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) ||(city=="")){
        if(!(name.match(valid_name_regex))){
            document.getElementById("name_error").style.visibility="visible";
            document.getElementById("name").style.bordercolor="red";
        }
        else{
            document.getElementById("name_error").style.visibility="hidden";
            document.getElementById("name").style.bordercolor="black";
        }
    
    if(!(age.match(valid_age_regex))){
        document.getElementById("age_error").style.visibility="visible";
        document.getElementById("age").style.bordercolor="red";
    }
    else{
        document.getElementById("age_error").style.visibility="hidden";
        document.getElementById("age").style.bordercolor="black";
    }
    if(city==""){
        document.getElementById("city_error").style.visibility="visible";
        document.getElementById("city").style.bordercolor="black";
    }
    return false;}
    else{
        document.getElementById("name_error").style.visibility="hidden";
        document.getElementById("name").style.bordercolor="black";
        document.getElementById("age_error").style.visibility="hidden";
        document.getElementById("age").style.bordercolor="black";
        document.getElementById("city_error").style.visibility="hidden";
        document.getElementById("city").style.bordercolor="black";
        return true;
    }
    

    }