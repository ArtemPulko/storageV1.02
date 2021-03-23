class Fern extends Plants{
    constructor(plant,ferndescription,fernview,fernage,fernclass,
        ferninflorescenceSize,fernAreaOfGrowth,fernScopeOfApplication){
    
    super(plant)
    this._ferndescription = ferndescription;
    this._fernview = fernview;
    this._fernage = fernage;
    this._fernclass = fernclass;
    this._ferninflorescenceSize = ferninflorescenceSize;
    this._fernAreaOfGrowth = fernAreaOfGrowth;
    this._fernScopeOfApplication = fernScopeOfApplication;   
        }

        set description(ferndescription){
            this._ferndescription = ferndescription;
        }

        set view(fernview){
            this._fernview = fernview;
        }

        set age(fernage){
            this._fernage = fernage
        }

        set class(fernclass){
            this._fernclass = fernclass
        }

        set inflorescenceSize(ferninflorescenceSize){
            this._ferninflorescenceSize = ferninflorescenceSize
        }

        set areaOfGrowth(fernAreaOfGrowth){
            this._fernAreaOfGrowth = fernAreaOfGrowth
        }

        set scopeOfApplication(fernScopeOfApplication){
            this._fernScopeOfApplication = fernScopeOfApplication
        }

        get description(){
           return this._ferndescription
        }

        get view(){
           return this._fernview 
        }

        get age(){
           return this._fernage 
        }

        get class(){
           return this._fernclass 
        }

        get inflorescenceSize(){
           return this._ferninflorescenceSize
        }

        get areaOfGrowth(){
           return this._fernAreaOfGrowth
        }

        get scopeOfApplication(){
           return this._fernScopeOfApplication
        }

}