Template.urlItem.events({
     'click':function() {
      Session.set('selected_url', this._id);
    },
      'click a.yes':function() {
        if(Meteor.user()) {
          var urlId = urls.findOne({_id:this._id});
          if ($.inArray(Meteor.userId(), urlId.voted) !== -1) {
            return "Voted";
          } else {
            var urlId = Session.get('selected_url');
            Yaks.update(urlId, {$inc: {'score': 1 }});
            Yaks.update(urlId, {$addToSet: {voted : Meteor.userId()}});
          } 
       }
    },
      'click a.no':function() {
        if (Meteor.user()) {
          var postId = urls.findOne({_id:this._id});
          if ($.inArray(Meteor.userId(), urlId.voted) !== -1) {
            return "Ok";
          } else {
            var urlId = Session.get('selected_url');
            Yaks.update(urlId, {$inc: {'score': -1 }});
            Yaks.update(urlId, {$addToSet: {voted : Meteor.userId()}});
            if (urlId.score <= -3) {
              urls.remove({_id:this._id})
            }
          }
        }
      }
    });