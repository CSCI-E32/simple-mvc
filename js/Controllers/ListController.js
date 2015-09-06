define(['Views/ListView'], function(ListView){

    function start(){
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
        bindEvents();
    }
    function bindEvents(){
      document.getElementById('add-view-btn').addEventListener('click', function(){
          require(['Controllers/AddController'], function(AddController){
              AddController.start();
          });
      }, false);
      document.getElementById('list-view-btn').addEventListener('click', function(){
          require(['Controllers/ListController'], function(ListController){
              ListController.start();
          });
      }, false);
    }

    return {
        start:start
    };
});
