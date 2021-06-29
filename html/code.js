function lw(x){
        var xhr = new XMLHttpRequest();
	if (x === undefined){
		var i = document.getElementById("in1").value;
	}
	else{
		var i = x;
	}
        xhr.open("GET","http://192.168.99.102/cgi-bin/my.py?x="+i,true);
        xhr.send();
        xhr.onload = function( ){
	var out = xhr.responseText;
	document.getElementById('p1').innerHTML = out;
                }
}
function pod() {
  var p = prompt("Please enter pod name", "mypod1");
  var im = prompt("Please enter image name", "httpd");
  var t=prompt("Please enter the tag of image","latest");
  lw("kubectl run "+p+" --image="+im+":"+t+" --kubeconfig admin.conf");
  lw("echo Creating pod please wait...");
}
function deploy() {
  var p = prompt("Please enter deployment name", "mydeploy1");
  var im = prompt("Please enter image name", "httpd");
  var t=prompt("Please enter the tag of image","latest");
  lw("kubectl create deploy "+p+" --image="+im+":"+t+" --kubeconfig admin.conf");
  lw("echo Creating deployment please wait...");
}
function exp() {
  var d = prompt("Please enter name of deployment to expose", "mydeploy1");
  var p = prompt("Please enter port number to expose", "80");
  lw("kubectl expose deploy "+d+" --type=NodePort --port="+p+" --kubeconfig admin.conf");
  lw("echo exposing deployment please wait...");
}
function scale() {
  var d = prompt("Please enter name of deployment to scale", "mydeploy1");
  var p = prompt("Please enter number of replicas", "3");
  lw("kubectl scale deployment "+d+" --replicas="+p+" --kubeconfig admin.conf");
  lw("echo exposing deployment please wait...");
}
function del() {
  var d = prompt("Please enter name of resource type to delete", "pod / deploy / svc");
  var p = prompt("Please enter name of resource", "mypod1");
  lw("kubectl delete "+d+" "+p+" --kubeconfig admin.conf");
  lw("echo deleting "+p+" please wait...");
}
function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
}
