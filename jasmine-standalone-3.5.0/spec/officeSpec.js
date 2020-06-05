describe("Office", function(){
  var office;
  var room;

  beforeEach(function(){
    office = new Office();
    room = new Room("Conference");
  });

// As an office manager
// So that staff can coordinate meetings
// I would like to add a meeting room to the office

it("adds a meeting room to the office", function(){
  office.addRoom(room);
  expect(office.rooms).toContain(room);
});

// As an office manager
// So that I can manage meeting rooms
// I would like to list all the meeting rooms in the office

it("lists all rooms in the office", function(){
  office.addRoom(room);
  roomTwo = new Room("Meeting");
  office.addRoom(roomTwo);
  expect(office.listAllRooms()).toContain(room);
  expect(office.listAllRooms()).toContain(roomTwo);
});

// As a staff member
// So that I can see where to have my meeting
// I would like to be able to see a list of available rooms in the office

it("lists all avaliable rooms", function(){
  office.addRoom(room);
  roomTwo = new Room("Meeting");
  roomTwo.availability = false;
  office.addRoom(roomTwo);
  expect(office.listAvailableRooms()).toEqual(room);
});


});
