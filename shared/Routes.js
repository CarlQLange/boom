//////////////////////////////////
// it's routes all the way down //
//////////////////////////////////

////////////////
// front page //
////////////////
Router.route('/', function () {
    if (Meteor.userId()) {
        this.render('dashboard');
    } else {
        this.render('attract');
    }
});

///////////
// login //
///////////
Router.route('/signup', function () {this.redirect('/login');});
Router.route('/signin', function () {this.redirect('/login');});
Router.route('/login', function () {
    this.render('/#showLogin');
});

/////////////
// profile //
/////////////
Router.route('/me', function () {
    if (Meteor.userId()) {
        this.redirect('/user/' + Meteor.userId());
    } else {
        this.redirect('/login');
    }
});
Router.route('/user/:_id', function () {
    var user = Meteor.users.findOne({
        _id: this.params._id
    }, {
        fields: {
            'profile.fullNameGuess': true,
            'profile.gravatarHash': true
        }
    });

    if (!user) {
        this.redirect('/');
    } else {
        this.render('profile', {
            data: function () {
                return user;
            }
        });
    }
});
Router.route('/user', function () {this.redirect('/me');});
Router.route('/profile/:_id', function () {this.redirect('/user/:_id');});
