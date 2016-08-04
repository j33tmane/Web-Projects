function getStuff(){
	var list = document.querySelectorAll('#logo');
	for(var i=0;i<list.length;i++){
		list[i].onclick=talk;
	}
}

function talk(){
	alert('please enter username!');
}

window.onload=getStuff;