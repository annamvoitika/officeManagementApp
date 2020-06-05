class Office {
  constructor(){
    this.rooms = [];
  }

  addRoom(room){
    this.rooms.push(room);
  }

  listAllRooms(){
    return this.rooms;
  }

  listAvailableRooms(){
    for (var i = 0; i < this.rooms.length; i++){
      if (this.rooms[i].availability!=false){
      return this.rooms[i];
      }
    }

  }
}
