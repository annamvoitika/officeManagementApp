class Room{
  constructor(){
    this.availability = true;
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
}
