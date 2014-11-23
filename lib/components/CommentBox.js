// LICENSE : MIT
"use strict";
var Espresso = window.Espresso;
var Controller = Espresso.Controller;
var List = Espresso.List;
var CommentForm = require("./CommentForm");
var Comment = require("./Comment");

var commentStore = require("../store/CommentStore");
var CommentBox = Controller.extend({
    init: function () {
        this.commentForm = new CommentForm();
        this.list = new List(Comment, commentStore.all());
    },
    render: function () {
        return {
            commentForm: this.commentForm,
            commentList: this.list
        };
    }
});

module.exports = CommentBox;