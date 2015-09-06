require(['Models/User', 'Controllers/ListController', 'Controllers/AddController'], function(User, ListController){

    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];

    localStorage.users = JSON.stringify(users);

    ListController.start();
});
