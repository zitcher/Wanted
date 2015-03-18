#pragma strict
public var bullet:GameObject;

public var main:GameObject;

private var gameOver:boolean;

public var audioClips : AudioClip;

public var sparks:GameObject;

function Start() {
	//Initialization our angles of camera
	InvokeRepeating("Shoot", 0, .1);
}

function Update() {
	gameOver = main.gameObject.GetComponent(GameStats).gameOver;
}

function Shoot(){
	if(!gameOver && Input.GetMouseButton(0)){
		var clone : GameObject;
		clone = Instantiate(bullet, transform.position,  transform.rotation);
		clone.rigidbody.AddForce(clone.transform.forward*50);
		//audio.PlayOneShot(audioClips);

		var ray:Ray = new Ray(transform.position+transform.forward, transform.forward);
		var hitInfo:RaycastHit;
			
		if(Physics.Raycast(ray,hitInfo, 2000)){
			var hitPoint:Vector3 = hitInfo.point;
			var go:GameObject = hitInfo.collider.gameObject;
			if(go.tag == "ship"){
				Instantiate(sparks, hitPoint, Quaternion.identity);
				go.gameObject.GetComponent(ShipScript).health--;
			}
		}
	}
}

function OnCollisionEnter (col : Collision){
    if(col.gameObject.tag == "medBullet" || "meteor"){
        main.gameObject.GetComponent(GameStats).life--;
    }
}