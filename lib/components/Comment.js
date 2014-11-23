// LICENSE : MIT
"use strict";
var Espresso = window.Espresso;
var Controller = Espresso.Controller;
var Showdown = window.Showdown;

var converter = new Showdown.converter();
// commentをmarkdownにレンダリング、 [x]をクリックしたら削除

var CommentStore = require("../store/CommentStore");
var Comment = Controller.extend({
    removeComment: function (event) {
        console.log('removing', this.model.id);
        CommentStore.remove({id: this.model.id});
        return false;
    },
    html: function () {
        return converter.makeHtml(this.model.get('text'));
    },
    render: function () {
        return {
            author: {text: this.model.author},
            html: {html: this.html()},
            remove: {onclick: this.removeComment}
        };
    }
});
module.exports = Comment;