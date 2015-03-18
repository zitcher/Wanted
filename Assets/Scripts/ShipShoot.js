#pragma strict
private var main:GameObject;
private var gameOver:boolean;
public var bullet:GameObject;
private var attackNow:boolean;

function Start (){
	main = GameObject.FindWithTag("Main");
	InvokeRepeating("Shoot", 0, 1);
}

function Shoot(){
	gameOver = main.GetComponent(GameStats).gameOver;
	attackNow = gameObject.GetComponent(Stalk).attackNow;
	Debug.Log("Shooting");
	if(!gameOver  && attackNow){
		var clone : GameObject;
		clone = Instantiate(bullet, transform.position + transform.forward*20,  transform.rotation);
		clone.rigidbody.AddForce(clone.transform.forward*660);
	}
}