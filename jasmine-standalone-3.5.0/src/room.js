class Room{
  constructor(name){
    this.availability = true;
    this.name = name;
  }

  availabilityStatus(status){
    this.availability = status;
  }

  enter(){
    if (this.availability == false) {
      throw "Room is taken";
    }
    else {
    this.availability = false;
  }
  }

  exit(){
    this.availability = true;
  }

  assignName(name){
    this.name = name;
  }
}
