#pragma strict
var time:float;
var explosion:GameObject;
function Start () {
  Invoke("Die", time);
}

function Die(){
	Instantiate(explosion, transform.position, Quaternion.identity);
	Destroy(gameObject);
}