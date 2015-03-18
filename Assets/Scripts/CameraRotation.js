#pragma strict
private var firstpoint:Vector3; //change type on Vector3
private var secondpoint:Vector3;

private var xAngle: float = 0.0; //angle for axes x for rotation
private var yAngle: float = 0.0;
private var xAngTemp: float = 0.0; //temp variable for angle
private var yAngTemp: float = 0.0;

public var bullet:GameObject;

public var main:GameObject;

private var gameOver:boolean;

public var audioClips : AudioClip;

public var sparks:GameObject;

function Start() {
	//Initialization our angles of camera
	InvokeRepeating("Shoot", 0, .1);
	xAngle = 0.0;
	yAngle = 0.0;
	this.transform.rotation = Quaternion.Euler(yAngle, xAngle, 0.0);
}

function Update() {
	gameOver = main.gameObject.GetComponent(GameStats).gameOver;

	if(!gameOver){
		//FOR PC USE ONLY
		/*
		xAngle+=Input.GetAxis("Mouse X")*3;
		yAngle-=Input.GetAxis("Mouse Y")*3;
		this.transform.rotation = Quaternion.Euler(yAngle, xAngle, 0.0);
		*/
		//ANDROID USE
		//Check count touches
		if(Input.touchCount > 0) {
			Instantiate(bullet, transform.position,  Quaternion.identity);
			//Touch began, save position
			if(Input.GetTouch(0).phase == TouchPhase.Began) {
				 firstpoint = Input.GetTouch(0).position;
				 xAngTemp = xAngle;
				 yAngTemp = yAngle;
			}
			//Move finger by screen
			if(Input.GetTouch(0).phase==TouchPhase.Moved) {
				 secondpoint = Input.GetTouch(0).position;
				 //Mainly, about rotate camera. For example, for Screen.width rotate on 180 degree
				 xAngle = xAngTemp + (secondpoint.x - firstpoint.x) * 180.0 / Screen.width;
				 yAngle = yAngTemp - (secondpoint.y - firstpoint.y) *180.0 / Screen.height;
				 //Rotate camera
				 this.transform.rotation = Quaternion.Euler(yAngle, xAngle, 0.0);
			}
		}
	}
}

function Shoot(){
	if(!gameOver){
		var clone : GameObject;
		clone = Instantiate(bullet, transform.position,  transform.rotation);
		clone.rigidbody.AddForce(clone.transform.forward*50);
		audio.PlayOneShot(audioClips);

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
    if(col.gameObject.tag == "medBullet"){
        main.gameObject.GetComponent(GameStats).life--;
    }
}