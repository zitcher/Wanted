#pragma strict

function Load(){
	Application.LoadLevel("Game");
}

function Exit(){
	Debug.Log("QUITTING");
	Application.Quit();
}