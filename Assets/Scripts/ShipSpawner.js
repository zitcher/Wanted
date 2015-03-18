#pragma strict
var spawnPoint:Vector3;
var BigShip:GameObject;

var MedShip:GameObject;

var SmallShip:GameObject;

var meteor:GameObject;
function Start () {
	InvokeRepeating("Big", 4, 20);
	InvokeRepeating("Big", 0, 20);
	InvokeRepeating("Big", 8, 8);
	InvokeRepeating("Med", 0, 10);
	InvokeRepeating("Small", 5, 5);
}

function Update () {

}

function Big(){
	spawnPoint = new Vector3(Mathf.Round(Random.Range(300, 1300)),250, Random.Range(400, 800));
	Instantiate(BigShip, spawnPoint, Quaternion.identity);
}

function Med(){
	spawnPoint = new Vector3(Mathf.Round(Random.Range(300, 1300)),250, Random.Range(400, 800));
	Instantiate(MedShip, spawnPoint, Quaternion.identity);
}

function Small(){
	spawnPoint = new Vector3(Mathf.Round(Random.Range(300, 1300)),250, Random.Range(400, 800));
	Instantiate(SmallShip, spawnPoint, Quaternion.identity);
}