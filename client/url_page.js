Template.urlPage.helpers({
	comments: function() {
		return comments.find({urlId:this._id});
	}
});