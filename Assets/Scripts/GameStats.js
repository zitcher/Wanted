#pragma strict
public static var gameOver:boolean;
public static var life:int;
public static var score:int;

var lifeText:UI.Text;
var scoreText:UI.Text;
var EndButton:GameObject;

function Start () {
	Screen.showCursor = false;
	life = 10;
	score = 0;
	gameOver=false;
}

function Update(){
	lifeText.text = "Life: " + life;
	scoreText.text = "Score: " + score;

	if(life<=0){
		gameOver=true;
		Application.LoadLevel("Retry");
	}

	if(gameOver){
		//EndButton.SetActive (true);
		Application.LoadLevel("Retry");
		Screen.showCursor = true;
	} else {
		EndButton.SetActive (false);
	}
}