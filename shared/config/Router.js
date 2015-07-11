// because I don't upper-case my template names
Router.setTemplateNameConverter(function (str) {
    return str.replace(/\.(.)/, function (x, char) {return char.toUpperCase();});
});

Router.configure({
    layoutTemplate: 'baseLayout'
});
