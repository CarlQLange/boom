if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        options.profile.name = options.profile.firstName + ' ' + options.profile.lastName;
        options.profile.gravatarHash = CryptoJS.MD5(options.email).toString();

        if (options.profile)
            user.profile = options.profile;
        return user;
    });
}
