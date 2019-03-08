const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Joe'},
    {id: 3, name: 'Don', groupId: 1},
    {id: 4, name: 'Kally'},
    {name: 'Alex'},
    {name: 'John'},
  ];
  
  users[1].group = 3;
  
  alert(users[1].id + ' ' + users[1].name +  ' ' + users[1].group);