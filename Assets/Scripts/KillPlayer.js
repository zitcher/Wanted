#pragma strict
var main:GameObject;

function OnTriggerEnter (other : Collider) {
	if(other.tag == "ship")
		main.gameObject.GetComponent(GameStats).gameOver = true;
	else if(other.tag == "medBullet" || other.tag == "meteor")
		main.gameObject.GetComponent(GameStats).life--;
}

function OnCollisionEnter(other : Collision){
	if(other.gameObject.tag == "meteor" || other.gameObject.tag == "medBullet" )
		main.gameObject.GetComponent(GameStats).life--;
}