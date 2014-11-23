// LICENSE : MIT
"use strict";

var Collection = Espresso.Collection;
var CommentStore = Collection.extend({
    init: function () {
        this.push({id: 0, author: '@vla (Vlad Yazhbin)', text: 'This is one comment'});
    },
    all: function () {
        return this.toArray();
    }
});

module.exports = new CommentStore;