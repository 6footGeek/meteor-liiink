urls = new Mongo.Collection('urls');

Router.route('/', {
    name: 'urlList'
});

Router.route('/submit', {
    name: 'urlSubmit'
});

Router.route('/login', {
	name: 'accounts'
});

