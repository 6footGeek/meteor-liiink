Template.urlSubmit.events({
    'submit .urlSubmitForm': function(event) {

        event.preventDefault();
        var url = event.target.url.value;


        if (url == "") {
            alert("You cant submit an empty url!");
        } else {
            Meteor.call('urlInsert', url);
            Router.go('urlList');
        }
    }
})
