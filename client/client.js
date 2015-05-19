Template.urlList.helpers({
    urls: function() {
        return urls.find({}, {sort: {score: -1}});
    }
});
