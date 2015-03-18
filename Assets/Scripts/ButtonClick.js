#pragma strict
function Update () {
	if(Input.touchCount > 0) {
		Application.LoadLevel(Application.loadedLevel);
	}
}