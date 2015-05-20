Template.urlItem.helpers({
    commentsCount: function() {
        return comments.find({
            urlId: this._id
        }).count();
    }
});


Template.urlItem.events({
    'click': function() {
        Session.set('selected_url', this._id);
    },
    'click a.yes': function() {
        if (Meteor.user()) {
            var urlId = urls.findOne({_id: this._id});
            Meteor.call('like', urlId);
        }
    },
    'click a.no': function() {
        if (Meteor.user()) {
            var urlId = urls.findOne({_id: this._id});
            Meteor.call('dislike',urlId);

        }
    }
});
