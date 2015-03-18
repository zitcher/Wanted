#pragma strict
var player:Transform;
var moveSpeed:int;
var attackLength:int = 0;
var followLength:int = 0;

var main:GameObject;

var attackNow:boolean;

function start(){
	player = GameObject.FindWithTag("MainCamera").transform;
	main = GameObject.FindWithTag("Main");

	attackNow = false;
}
function Update () {
	player = GameObject.FindWithTag("MainCamera").transform;
	main = GameObject.FindWithTag("Main");
	if(player && !main.gameObject.GetComponent(GameStats).gameOver){
	    transform.LookAt(player);
	    if(Vector3.Distance(transform.position,player.position) >= followLength){
			transform.position += transform.forward*moveSpeed*Time.deltaTime;
			if(Vector3.Distance(transform.position,player.position) <= attackLength) {
			  attackNow=true;
		  	} 
	    }
   }
   transform.LookAt(player.position);
}