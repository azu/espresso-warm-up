/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	// LICENSE : MIT
	"use strict";
	// コメントの入力フォーム
	var CommentBox = __webpack_require__(/*! ./components/CommentBox */ 1);
	new CommentBox({
	  view: document.querySelector(".commentBox")
	});

/***/ },
/* 1 */
/*!**************************************!*\
  !*** ./lib/components/CommentBox.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// LICENSE : MIT
	"use strict";
	var Espresso = window.Espresso;
	var Controller = Espresso.Controller;
	var List = Espresso.List;
	var CommentForm = __webpack_require__(/*! ./CommentForm */ 5);
	var Comment = __webpack_require__(/*! ./Comment */ 3);
	
	var commentStore = __webpack_require__(/*! ../store/CommentStore */ 6);
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

/***/ },
/* 2 */,
/* 3 */
/*!***********************************!*\
  !*** ./lib/components/Comment.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// LICENSE : MIT
	"use strict";
	var Espresso = window.Espresso;
	var Controller = Espresso.Controller;
	var Showdown = window.Showdown;
	
	var converter = new Showdown.converter();
	// commentをmarkdownにレンダリング、 [x]をクリックしたら削除
	
	var CommentStore = __webpack_require__(/*! ../store/CommentStore */ 6);
	var Comment = Controller.extend({
	  removeComment: function (event) {
	    console.log("removing", this.model.id);
	    CommentStore.remove({ id: this.model.id });
	    return false;
	  },
	  html: function () {
	    return converter.makeHtml(this.model.get("text"));
	  },
	  render: function () {
	    return {
	      author: { text: this.model.author },
	      html: { html: this.html() },
	      remove: { onclick: this.removeComment }
	    };
	  }
	});
	module.exports = Comment;

/***/ },
/* 4 */,
/* 5 */
/*!***************************************!*\
  !*** ./lib/components/CommentForm.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

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
	    var comment = { author: this.ref.author.value, text: this.ref.text.value, id: comments.count() };
	    comments.push(comment);
	    e.target.reset();
	    console.log(e);
	    console.log("added", comment);
	    return false;
	  },
	  render: function () {
	    return {
	      view: { onsubmit: this.save }
	    };
	  }
	});
	module.exports = CommentForm;

/***/ },
/* 6 */
/*!***********************************!*\
  !*** ./lib/store/CommentStore.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// LICENSE : MIT
	"use strict";
	
	var Collection = Espresso.Collection;
	var CommentStore = Collection.extend({
	  init: function () {
	    this.push({ id: 0, author: "@vla (Vlad Yazhbin)", text: "This is one comment" });
	  },
	  all: function () {
	    return this.toArray();
	  }
	});
	
	module.exports = new CommentStore();

/***/ }
/******/ ])
//# sourceMappingURL=bundle.js.map