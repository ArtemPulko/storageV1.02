var saveObj = document.getElementById("saveInfo");


var idForRedact = localStorage.getItem(0)
var itemForRedact = localStorage.getItem(idForRedact)

var getinfoaboutPlant = JSON.parse(itemForRedact)

if(getinfoaboutPlant._namePlant == "Папоротник"){

var label = document.getElementById("forfedactpage") 
var soalind = document.getElementById("ScopeOfApplication").options.selectedIndex;
var fscopeOfApplication = document.getElementById("ScopeOfApplication").options[soalind].value;

var fdescription = document.getElementById("description").value = getinfoaboutPlant._ferndescription
var fview = document.getElementById("view").value = getinfoaboutPlant._fernview
var fage = document.getElementById("age").value = getinfoaboutPlant._fernage
var fclas = document.getElementById("class").value = getinfoaboutPlant._fernclass
var finflorescenceSize = document.getElementById("inflorescenceSize").value = getinfoaboutPlant._ferninflorescenceSize
var fareaOfGrowth = document.getElementById("AreaOfGrowth").value = getinfoaboutPlant._fernAreaOfGrowth

label.innerHTML = getinfoaboutPlant._namePlant
}else{
    var label = document.getElementById("forfedactpage") 
    var soalind = document.getElementById("ScopeOfApplication").options.selectedIndex;
    var fscopeOfApplication = document.getElementById("ScopeOfApplication").options[soalind].value ;
    
    var fdescription = document.getElementById("description").value = getinfoaboutPlant._firdescription
    var fview = document.getElementById("view").value = getinfoaboutPlant._firview
    var fage = document.getElementById("age").value = getinfoaboutPlant._firage
    var fclas = document.getElementById("class").value = getinfoaboutPlant._firclass
    var finflorescenceSize = document.getElementById("inflorescenceSize").value = getinfoaboutPlant._firinflorescenceSize
    var fareaOfGrowth = document.getElementById("AreaOfGrowth").value = getinfoaboutPlant._firAreaOfGrowth
    
    label.innerHTML = getinfoaboutPlant._namePlant 
}


saveObj.addEventListener('click',function(){
if(getinfoaboutPlant._namePlant == "Папоротник"){


    var soalind = document.getElementById("ScopeOfApplication").options.selectedIndex;
    var fscopeOfApplication = document.getElementById("ScopeOfApplication").options[soalind].value;
    
    var fdescription = document.getElementById("description").value
    var fview = document.getElementById("view").value
    var fage = document.getElementById("age").value
    var fclas = document.getElementById("class").value
    var finflorescenceSize = document.getElementById("inflorescenceSize").value
    var fareaOfGrowth = document.getElementById("AreaOfGrowth").value


    const fern = new Fern();
    fern.plants = getinfoaboutPlant._namePlant;
    fern.description = fdescription;
    fern.view = fview;
    fern.age = fage;
    fern.class = fclas;
    fern.inflorescenceSize = finflorescenceSize;
    fern.areaOfGrowth = fareaOfGrowth;
    fern.scopeOfApplication = fscopeOfApplication;

    var infoaboutPlant = JSON.stringify(fern)
    localStorage.setItem(idForRedact,infoaboutPlant)

    window.location.href = 'index.html';
}else{
    
    var soalind = document.getElementById("ScopeOfApplication").options.selectedIndex;
    var fscopeOfApplication = document.getElementById("ScopeOfApplication").options[soalind].value;
    
    var fdescription = document.getElementById("description").value
    var fview = document.getElementById("view").value
    var fage = document.getElementById("age").value
    var fclas = document.getElementById("class").value
    var finflorescenceSize = document.getElementById("inflorescenceSize").value
    var fareaOfGrowth = document.getElementById("AreaOfGrowth").value

    const fir = new Fir();
    fir.plants = getinfoaboutPlant._namePlant;
    fir.description = fdescription;
    fir.view = fview;
    fir.age = fage;
    fir.class = fclas;
    fir.inflorescenceSize = finflorescenceSize;
    fir.areaOfGrowth = fareaOfGrowth;
    fir.scopeOfApplication = fscopeOfApplication;

    var infoaboutPlant = JSON.stringify(fir)
    localStorage.setItem(idForRedact,infoaboutPlant)
    window.location.href = 'index.html';
    
}

})