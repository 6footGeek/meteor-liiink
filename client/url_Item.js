
Template.urlItem.events({
            'click': function() {

            },
            'click a.yes': function() {

                urls.update(this._id, {$inc: {'score': 1}});
            },

            'click a.no': function() {
         
                urls.update(this._id, {$inc: {'score': -1}});
                var postId = urls.findOne({_id: this._id});
                if (postId.score <= -3) {
                    urls.remove({
                        _id: this._id
                    });
                }
            }

            });
