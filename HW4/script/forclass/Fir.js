class Fir extends Plants{
    
    constructor(plant,firdescription,firview,firage,firclass,
        firinflorescenceSize,firAreaOfGrowth,firScopeOfApplication){
    
    super(plant);
    this._firdescription = firdescription;
    this._firview = firview;
    this._firage = firage;
    this._firclass = firclass;
    this._firinflorescenceSize = firinflorescenceSize;
    this._firAreaOfGrowth = firAreaOfGrowth;
    this._firScopeOfApplicationn = firScopeOfApplication;   
        }

        set description(firdescription){
            this._firdescription = firdescription;
        }

        set view(firview){
            this._firview = firview;
        }

        set age(firage){
            this._firage = firage
        }

        set class(firclass){
            this._firclass = firclass
        }

        set inflorescenceSize(firinflorescenceSize){
            this._firinflorescenceSize = firinflorescenceSize
        }

        set areaOfGrowth(firAreaOfGrowth){
            this._firAreaOfGrowth = firAreaOfGrowth
        }

        set scopeOfApplication(firScopeOfApplication){
            this._firScopeOfApplicationn = firScopeOfApplication
        }



        get description(){
           return this._firdescription 
        }

        get view(){
           return this._firview 
        }

        get age(){
           return this._firage 
        }

        get class(){
           return this._firclass 
        }

        get inflorescenceSize(){
           return this._firinflorescenceSize
        }

        get areaOfGrowth(){
           return this._firAreaOfGrowth
        }

        get scopeOfApplication(){
           return this._firScopeOfApplicationn
        }
}