var friendslist = require('../data/friends.js');

module.exports = function(app){

app.get('/api/friends',function(req,res){
    res.json(friendslist);    
});

// survey result
app.post('/api/friends',function(req,res){
    var addfriend = req.body

    for (var i=0;i < addfriend.scores.length;i++){
        if(addFriend.scores[i] == "1 (Yes)") {

            newFriend.scores[i] = 1;
          } else if(newFriend.scores[i] == "3 (No)") {
    
            newFriend.scores[i] = 3;
          } else {
    
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
          }
    }
    console.log("friend added: ", addfriendlist);

    friendslist.push(addfriendlist);
    
    res.json(addfriendlist);
});


};