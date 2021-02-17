var temperarure = {
	Russia: 15,
	Belarus: 14,
	Latvia: 17,
	China: 15,
	Mongolia: 31,
	tatarstan: 30,
	Nigeria: 45,
	USA: 16,
	UK: 10,
	Norwegia: 5,
	Belgia: 12
}

var srznach = 0, kol = 0;
srznch();
function srznch(){
for(key in temperarure){
	kol++;
	srznach += temperarure[key];
}

srznach = srznach / kol;
}

maxc(temperarure);
function maxc(temperarure){
var max = temperarure[key];
for(key in temperarure){
  if(temperarure[key] > max)
  max = temperarure[key];
}
alert(max);
}

alert(srznach); 