urls = new Mongo.Collection('urls');
comments = new Mongo.Collection('comments');

//home
Router.route('/', {
    name: 'urlList'
});
//submit the url
Router.route('/submit', {
    name: 'urlSubmit'
});

//individual url pages
Router.route('/url/:_id', {
    name: 'urlPage',
    data: function() {
        return urls.findOne(this.params._id);
    }
});
// Login and Register Routes
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
