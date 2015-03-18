#pragma strict
var health:int;
var spark:GameObject;
var boom:GameObject;
var gameOver:boolean;
var main:GameObject;
var scoreAdd:int;

function Start(){
	main = GameObject.FindWithTag("Main");
}

function Update() {

	gameOver = main.gameObject.GetComponent(GameStats).gameOver;
	if(health<=0){
		main.gameObject.GetComponent(GameStats).score+=scoreAdd;
		Instantiate(boom, transform.position, Quaternion.identity);
		Destroy(gameObject);
	}
}
