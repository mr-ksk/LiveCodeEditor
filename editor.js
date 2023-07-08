function op(){
	let h=document.getElementById("html").value;
	let c=document.getElementById("css").value;
	let j=document.getElementById("js").value;
	let out=document.getElementById("output");
	out.contentDocument.body.innerHTML=h+"<style>"+c+"</style>";
	out.contentWindow.eval(j)
}
function toggleBackground()
 {
    var bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("change-bg");
}
		
