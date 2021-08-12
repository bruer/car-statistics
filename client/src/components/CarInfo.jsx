
export class CarInfo {
    constructor() {
      this.id = -1;
      this.name = "";
      this.model = "";
      this.date = "";
      this.timeStamp = "";
      this.manufacturer = "";
      this.price = 0;
      this.engine = "";
      this.location = "";
      this.milage = 0;
      this.milage_text = "";
      this.typeOfPrice = "";
    }
    
    get_info(elem) {
        this.id = elem.ID;
        this.date = elem.DATE;
        this.name = elem.NAME;
        this.model = elem.MODEL;
        this.price = elem.PRICE;
        this.typeOfPrice = elem.TYPE_OF_PRICE;
        this.milage = elem.MILAGE;
        return this;
    }


  }