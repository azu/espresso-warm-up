// LICENSE : MIT
"use strict";
var Espresso = window.Espresso;
var Model = Espresso.Model;
var Collection = Espresso.Collection;
var Controller = Espresso.Controller;
var List = Espresso.List;
var Showdown = window.Showdown;
var CommentForm = Controller.extend({
    save: function (e) {
        var comment = {author: this.ref.author.value, text: this.ref.text.value, id: comments.count()};
        comments.push(comment);
        e.target.reset();
        console.log(e);
        console.log('added', comment);
        return false;
    },
    render: function () {
        return {
            view: {onsubmit: this.save}
        };
    }
});
module.exports = CommentForm;