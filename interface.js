$(document).ready(function(){
  var office = new Office();
  var room = new Room("Room");
  updateListAllRooms();

  $('#addRoom').click(function(){
    office.rooms.push(room);
  });

  $('#viewAllRooms').click(function(){
    office.listAllRooms();
    updateListAllRooms();
  });

  $('#viewAvailableRooms').click(function(){
    office.listAvailableRooms();
    updateListAvailableRooms();
  })

  $('#bookRoom').click(function(){
    room.enter();
    updateBooked();
  });

  function updateListAllRooms(){
    $('#list-all').text(office.rooms);
  };

  function updateListAvailableRooms(){
    $('#list-all').text(office.listAvailableRooms());
  };

  function updateBooked(){
    $('#bookRoom').text("Booked");
  };




})
