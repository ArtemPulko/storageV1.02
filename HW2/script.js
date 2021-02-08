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

var SrZnach = 0, kol = 0;

for(key in temperarure){
	kol++;
	SrZnach += temperarure[key];
}

SrZnach = SrZnach / kol;

MaxC(temperarure);
function MaxC(temperarure){
var max = temperarure[key];
for(key in temperarure){
  if(temperarure[key] > max)
  max = temperarure[key];
}
console.log(max);
}



console.log(SrZnach);