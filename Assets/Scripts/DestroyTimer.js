#pragma strict
var time:float;
function Start () {
  Invoke("Die", time);
}

function Die(){
	Destroy(gameObject);
}