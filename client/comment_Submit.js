Template.commentSubmit.events({
    'submit .commentSubmit': function(event) {
        event.preventDefault();
        var commentText = event.target.comment.value;
        var commentData = {
            text: commentText,
            score: 0,
            createdAt: new Date(),
            owner: Meteor.user().profile.name,
            urlId: this._id
        };


        if (commentText == "") {
            alert("You cant submit an empty comment!");
        } else {
            Meteor.call('commentInsert', commentData);

        }
        event.target.comment.value = "";
    }
})
