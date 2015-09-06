require(['Models/User', 'Controllers/ListController', 'Controllers/AddController'], function(User, ListController, AddController){

    var users = [new User('Andrew'),
                  new User('Norman'),
                  new User('Lauren'),
                  new User('Danai')];

    localStorage.users = JSON.stringify(users);

    AddController.start();
    ListController.start();
});
