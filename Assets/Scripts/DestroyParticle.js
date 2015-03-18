#pragma strict

function Update() {
	if (!gameObject.particleSystem.IsAlive())
		Destroy(gameObject);
}