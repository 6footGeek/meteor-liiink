urls = new Mongo.Collection('urls');
comments = new Mongo.Collection('comments');
Router.route('/', {
    name: 'urlList'
});

Router.route('/submit', {
    name: 'urlSubmit'
});

// Login and Register Routes
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
