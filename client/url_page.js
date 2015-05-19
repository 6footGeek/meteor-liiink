Template.urlPage.helpers({
	comments: function() {
		return comments.find({commentId:this._id});
	}
});