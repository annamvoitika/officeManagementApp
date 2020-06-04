describe("Room", function(){
  var room;

  beforeEach(function(){
    room = new Room();
  });

// As a staff member
// In order to have meeting,
// I would like to check if the meeting room is available or not (true or false)

it("checks if the room is available", function(){
  expect(room.availability).toEqual(true);
});

it("checks if the room is unavailable", function(){
  room.availabilityStatus(false);
  expect(room.availability).toEqual(false);
});

// As a staff member
// In order to have a meeting,
// I would like to be able to enter the meeting room and this should make it unavailable

it("becomes unavailable when someone enters the room", function(){
  room.enter();
  expect(room.availability).toEqual(false);
});

// As a staff member
// In order to end a meeting
// I would like to be able to leave the meeting room and this should make it available again

it("becomes availabke when someone leaves the room", function(){
  room.exit();
  expect(room.availability).toEqual(true);
});

// As a staff member
// So that I can avoid interrupting a meeting
// I would like an error if I try to use a room that has already been entered

it("throws an error if someone enters an unavailable room", function(){
  room.enter();
  expect(function(){room.enter();}).toThrow("Room is taken");
});


});
