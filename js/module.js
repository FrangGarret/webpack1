module.exports =index()
function index(){
	
	if(document.getElementById('csss').style.background=='green'){
		alert(document.getElementById('csss').length)
		document.getElementById('csss').style.background='red'
	}else{
		document.getElementById('csss').style.background='red'
	}
}

function a(){
	alert(100.23)
}
a()