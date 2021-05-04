function simpleinterest(){
    var a = document.getElementById('sum').value
    console.log(a)
    var b = document.getElementById('rate').value
    console.log(b)
    var c = document.getElementById('time').value
    console.log(c)
    var ans = (a*b*c)/100;
     var A = document.getElementById('ans')
     A.style.visibility = "visible";
     if(a=="" && b=="" && c==""){
        A.style.visibility = "hidden";
    }
     A.value = ans;
     document.getElementById('sum').value=""
     document.getElementById('rate').value=""
     document.getElementById('time').value=""

}