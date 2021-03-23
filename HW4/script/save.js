
var saveObj = document.getElementById("saveInfo");


var max = 0
for(var i = 0;i < localStorage.length;i++){
    if (max < Number(localStorage.key(i))){
        max = Number(localStorage.key(i))
    }
}

var ids = max+1
saveObj.addEventListener('click',function(){


    var nPind = document.getElementById("namePlant").options.selectedIndex;
    var fnameplant = document.getElementById("namePlant").options[nPind].value;
    
    var soalind = document.getElementById("ScopeOfApplication").options.selectedIndex;
    var fscopeOfApplication = document.getElementById("ScopeOfApplication").options[soalind].value;
    
    var fdescription = document.getElementById("description").value
    var fview = document.getElementById("view").value
    var fage = document.getElementById("age").value
    var fclas = document.getElementById("class").value
    var finflorescenceSize = document.getElementById("inflorescenceSize").value
    var fareaOfGrowth = document.getElementById("AreaOfGrowth").value

    

    
    if(fnameplant == "Папоротник"){

        const fern = new Fern();
        fern.plants = fnameplant;
        fern.description = fdescription;
        fern.view = fview;
        fern.age = fage;
        fern.class = fclas;
        fern.inflorescenceSize = finflorescenceSize;
        fern.areaOfGrowth = fareaOfGrowth;
        fern.scopeOfApplication = fscopeOfApplication;

        var infoaboutPlant = JSON.stringify(fern)
        localStorage.setItem(ids,infoaboutPlant)


       // console.log(localStorage.getItem(localStorage.length))
        window.location.href = 'index.html';
    }else{
        const fir = new Fir();
        fir.plants = fnameplant;
        fir.description = fdescription;
        fir.view = fview;
        fir.age = fage;
        fir.class = fclas;
        fir.inflorescenceSize = finflorescenceSize;
        fir.areaOfGrowth = fareaOfGrowth;
        fir.scopeOfApplication = fscopeOfApplication;

        var infoaboutPlant = JSON.stringify(fir)
        localStorage.setItem(ids,infoaboutPlant)
        window.location.href = 'index.html';
        
    }
    
})