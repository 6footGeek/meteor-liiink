Meteor.methods({
    urlInsert: function(url) {
        var urlId = urls.insert({
            text: url,
            score: 0,
            createdAt: new Date()
        });
    }
});
