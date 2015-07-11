if (Meteor.isClient) {
    Accounts.ui.config({
        requestPermissions: {},
        extraSignupFields: [{
            fieldName: 'firstName',
            fieldLabel: 'First name',
            inputType: 'text',
            visible: true,
            validate: function(value, errorFunction) {
                if (!value) {
                    errorFunction("Please write your first name");
                    return false;
                } else {
                    return true;
                }
            },
            saveToProfile: true
        }, {
            fieldName: 'lastName',
            fieldLabel: 'Last name',
            inputType: 'text',
            visible: true,
            saveToProfile: true
        }]
    });

    // eh, could/should move this into controller for navbar
    Template._loginButtonsLoggedInDropdown.helpers({
        user_profile_picture: function () {
            return Avatar.getUrl(Meteor.user());
        }
    });
}
