Meteor.methods({
    urlInsert: function(url) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        var urlId = urls.insert({
            text: url,
            score: 0,
            createdAt: new Date(),
            owner: Meteor.user().profile.name
        });
    },
    commentInsert: function(commentData) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        comments.insert(commentData);
    },
    like: function(urlId) {
                if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
      urls.update(urlId, {$inc: {'score': 1 }});
      console.log("added score increment");
      urls.update(urlId, {$addToSet: {voted: Meteor.userId()}});
      console.log("added name to document");
    },
    dislike: function(urlId, myId) {
                if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
      urls.update(urlId, {$inc: {'score': -1 }});
      urls.update(urlId, {$addToSet: {voted: this.userId}})
}
});

//subscribe to db's
Meteor.publish("urls", function() {
    return urls.find();
});

Meteor.publish("comments", function() {
    return comments.find();
});
