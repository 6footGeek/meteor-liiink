Template.urlList.helpers({
    urls: function() {
        return urls.find({}, {sort: {score: -1}});
    }
});

Template.urlPage.helpers({
	comment: function() {
		return comments.find({}, {sort: {score: -1}});
	}
});