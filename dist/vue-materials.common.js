(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterials"] = factory();
	else
		root["VueMaterials"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(122);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _dialog = __webpack_require__(127);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _scrollFire = __webpack_require__(128);
	
	var _scrollFire2 = _interopRequireDefault(_scrollFire);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function plugin(Vue) {
	    if (plugin.installed) {
	        return;
	    }
	
	    for (var key in _index2.default) {
	        Vue.component(key, _index2.default[key]);
	    }
	
	    for (var _key in _index4.default) {
	        Vue.directive(_key, _index4.default[_key]);
	    }
	
	    Vue.dialog = _dialog2.default;
	    Vue.scrollFire = _scrollFire2.default;
	
	    Object.defineProperties(Vue.prototype, {
	        $dialog: {
	            get: function get() {
	                return Vue.dialog.bind(this);
	            }
	        },
	
	        $scrollFire: {
	            get: function get() {
	                return Vue.scrollFire.bind(this);
	            }
	        }
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	exports.default = plugin;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _footer = __webpack_require__(2);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _nav = __webpack_require__(5);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _sideNav = __webpack_require__(8);
	
	var _sideNav2 = _interopRequireDefault(_sideNav);
	
	var _badge = __webpack_require__(11);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _breadcrumbs = __webpack_require__(14);
	
	var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);
	
	var _button = __webpack_require__(17);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _buttonLink = __webpack_require__(22);
	
	var _buttonLink2 = _interopRequireDefault(_buttonLink);
	
	var _card = __webpack_require__(25);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _carousel = __webpack_require__(28);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _carouselItem = __webpack_require__(33);
	
	var _carouselItem2 = _interopRequireDefault(_carouselItem);
	
	var _checkbox = __webpack_require__(36);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _chip = __webpack_require__(39);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _collapsible = __webpack_require__(42);
	
	var _collapsible2 = _interopRequireDefault(_collapsible);
	
	var _collection = __webpack_require__(45);
	
	var _collection2 = _interopRequireDefault(_collection);
	
	var _collectionItem = __webpack_require__(48);
	
	var _collectionItem2 = _interopRequireDefault(_collectionItem);
	
	var _collectionLink = __webpack_require__(52);
	
	var _collectionLink2 = _interopRequireDefault(_collectionLink);
	
	var _collectionAvatar = __webpack_require__(55);
	
	var _collectionAvatar2 = _interopRequireDefault(_collectionAvatar);
	
	var _dateInput = __webpack_require__(58);
	
	var _dateInput2 = _interopRequireDefault(_dateInput);
	
	var _dropdown = __webpack_require__(61);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _fileInput = __webpack_require__(64);
	
	var _fileInput2 = _interopRequireDefault(_fileInput);
	
	var _icon = __webpack_require__(67);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _materialBox = __webpack_require__(70);
	
	var _materialBox2 = _interopRequireDefault(_materialBox);
	
	var _modal = __webpack_require__(73);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _fab = __webpack_require__(76);
	
	var _fab2 = _interopRequireDefault(_fab);
	
	var _pagination = __webpack_require__(79);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _paginationItem = __webpack_require__(82);
	
	var _paginationItem2 = _interopRequireDefault(_paginationItem);
	
	var _parallax = __webpack_require__(85);
	
	var _parallax2 = _interopRequireDefault(_parallax);
	
	var _progressLinear = __webpack_require__(88);
	
	var _progressLinear2 = _interopRequireDefault(_progressLinear);
	
	var _progressCircular = __webpack_require__(91);
	
	var _progressCircular2 = _interopRequireDefault(_progressCircular);
	
	var _radio = __webpack_require__(94);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _range = __webpack_require__(97);
	
	var _range2 = _interopRequireDefault(_range);
	
	var _select = __webpack_require__(100);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _slider = __webpack_require__(104);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _slide = __webpack_require__(107);
	
	var _slide2 = _interopRequireDefault(_slide);
	
	var _switch = __webpack_require__(110);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _tab = __webpack_require__(113);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _tabs = __webpack_require__(116);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _textInput = __webpack_require__(119);
	
	var _textInput2 = _interopRequireDefault(_textInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    AppFooter: _footer2.default,
	    AppNav: _nav2.default,
	    AppSideNav: _sideNav2.default,
	    Badge: _badge2.default,
	    Breadcrumbs: _breadcrumbs2.default,
	    Btn: _button2.default,
	    BtnLink: _buttonLink2.default,
	    Card: _card2.default,
	    Carousel: _carousel2.default,
	    CarouselItem: _carouselItem2.default,
	    Chip: _chip2.default,
	    Collapsible: _collapsible2.default,
	    Collection: _collection2.default,
	    CollectionItem: _collectionItem2.default,
	    Checkbox: _checkbox2.default,
	    CollectionLink: _collectionLink2.default,
	    CollectionAvatar: _collectionAvatar2.default,
	    DateInput: _dateInput2.default,
	    Dropdown: _dropdown2.default,
	    FileInput: _fileInput2.default,
	    Icon: _icon2.default,
	    MaterialBox: _materialBox2.default,
	    Modal: _modal2.default,
	    Fab: _fab2.default,
	    Pagination: _pagination2.default,
	    PaginationItem: _paginationItem2.default,
	    Parallax: _parallax2.default,
	    ProgressLinear: _progressLinear2.default,
	    ProgressCircular: _progressCircular2.default,
	    Radio: _radio2.default,
	    Range: _range2.default,
	    MSelect: _select2.default,
	    Slider: _slider2.default,
	    Slide: _slide2.default,
	    Switch: _switch2.default,
	    Tab: _tab2.default,
	    Tabs: _tabs2.default,
	    TextInput: _textInput2.default
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(3)
	
	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    //
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('footer',{staticClass:"page-footer"},[$slots["content"]," ",_h('div',{staticClass:"footer-copyright"},[$slots["copyright"]])])}},staticRenderFns: []}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    //
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('nav',[_h('div',{staticClass:"nav-wrapper"},[$slots["logo"]," ",$slots["items"]," ",$slots["side-nav"]])])}},staticRenderFns: []}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(9)
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        fixed: {
	            type: Boolean,
	            default: false
	        },
	
	        id: {
	            type: String,
	            required: true
	        }
	    },
	
	    computed: {
	        options: function options() {
	            return {
	                'fixed': this.fixed
	            };
	        }
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('ul',{staticClass:"side-nav",class:options,attrs:{"id":id}},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        new: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'new': this.new
	            };
	        }
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('span',{staticClass:"badge",class:classes},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(15)
	
	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        crumbs: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        }
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('nav',[_h('div',{staticClass:"nav-wrapper"},[_h('div',{staticClass:"col s12"},[(crumbs)&&_l((crumbs),function(crumb){return _h('a',{staticClass:"breadcrumb",attrs:{"href":crumb.href}},["\n                "+_s(crumb.text)+"    \n            "])})])])])}},staticRenderFns: []}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(18)
	
	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _buttons = __webpack_require__(19);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _waves = __webpack_require__(20);
	
	var _waves2 = _interopRequireDefault(_waves);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    mixins: [_buttons2.default, _waves2.default],
	
	    props: {
	        type: {
	            type: String,
	            default: 'button'
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return Object.assign(this.buttonsMixin, this.wavesMixin);
	        }
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	
	        flat: {
	            type: Boolean,
	            default: false
	        },
	
	        floating: {
	            type: Boolean,
	            default: false
	        },
	
	        large: {
	            type: Boolean,
	            default: false
	        },
	
	        modal: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        buttonsMixin: function buttonsMixin() {
	            return {
	                'btn': !this.flat,
	                'btn-floating': this.floating,
	                'btn-large': this.large,
	                'btn-flat': this.flat,
	                'modal-action modal-close': this.modal,
	                'disabled': this.disabled
	            };
	        }
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        wavesCircle: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesLight: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesRed: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesYellow: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesOrange: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesPurple: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesGreen: {
	            type: Boolean,
	            default: false
	        },
	
	        wavesTeal: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        wavesMixin: function wavesMixin() {
	            return {
	                'waves-effect waves-light': this.wavesLight,
	                'waves-effect waves-red': this.wavesRed,
	                'waves-effect waves-yellow': this.wavesYellow,
	                'waves-effect waves-orange': this.wavesOrange,
	                'waves-effect waves-purple': this.wavesPurple,
	                'waves-effect waves-green': this.wavesGreen,
	                'waves-effect waves-teal': this.wavesTeal,
	                'waves-circle': this.wavesCircle
	            };
	        }
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('button',{class:classes,attrs:{"type":type}},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(23)
	
	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _buttons = __webpack_require__(19);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _waves = __webpack_require__(20);
	
	var _waves2 = _interopRequireDefault(_waves);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    mixins: [_buttons2.default, _waves2.default],
	
	    props: {
	        href: {
	            type: String,
	            default: '#!'
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return Object.assign(this.buttonsMixin, this.wavesMixing);
	        }
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('a',{class:classes,attrs:{"href":href}},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(26)
	
	/* template */
	var __vue_template__ = __webpack_require__(27)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        large: {
	            type: Boolean,
	            default: false
	        },
	
	        medium: {
	            type: Boolean,
	            default: false
	        },
	
	        panel: {
	            type: Boolean,
	            default: false
	        },
	
	        small: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'card': !this.panel,
	                'card-panel': this.panel,
	                'large': this.large,
	                'medium': this.medium,
	                'small': this.small
	            };
	        }
	    }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{class:classes},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(29)
	
	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    props: {
	        height: {
	            type: Number,
	            default: 300
	        },
	
	        dist: {
	            type: Number,
	            default: -100
	        },
	
	        timeConstant: {
	            type: Number,
	            default: 200
	        },
	
	        shift: {
	            type: Number,
	            default: 0
	        },
	
	        padding: {
	            type: Number,
	            default: 0
	        },
	
	        full_width: {
	            type: Boolean,
	            default: false
	        },
	
	        slider: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'carousel-slider': this.slider
	            };
	        },
	        styles: function styles() {
	            return {
	                'height': this.height
	            };
	        },
	        params: function params() {
	            return {
	                time_constant: this.timeConstant,
	                dist: this.dist,
	                shift: this.shift,
	                padding: this.padding,
	                full_width: this.fullWidth
	            };
	        }
	    },
	
	    methods: {
	        init: function init() {
	            $(this.$el).carousel(this.params);
	        },
	        next: function next() {
	            var n = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	            $(this.$el).carousel('next', [n]);
	        },
	        prev: function prev() {
	            var n = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	            $(this.$el).carousel('prev', [n]);
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _load = __webpack_require__(31);
	
	var _load2 = _interopRequireDefault(_load);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mounted: function mounted() {
	        var _this = this;
	
	        _load2.default.call(this, function () {
	            return _this.init();
	        });
	    },
	    updated: function updated() {
	        var _this2 = this;
	
	        if (typeof this.updated === 'undefined') {
	            return;
	        }
	
	        _load2.default.call(this, function () {
	            return _this2.update();
	        });
	    },
	    destroyed: function destroyed() {
	        var _this3 = this;
	
	        if (typeof this.terminate === 'undefined') {
	            return;
	        }
	
	        _load2.default.call(this, function () {
	            return _this3.terminate();
	        });
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (cb) {
	    if (document.readyState === 'complete') {
	        this.$nextTick(function () {
	            return cb();
	        });
	    } else {
	        document.addEventListener('DOMContentLoaded', function () {
	            return cb();
	        });
	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"carousel",class:classes,style:(styles)},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(34)
	
	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        src: {
	            type: String,
	            required: true
	        }
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('a',{staticClass:"carousel-item",staticAttrs:{"href":"#!"}},[_h('img',{attrs:{"src":src}})])}},staticRenderFns: []}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(37)
	
	/* template */
	var __vue_template__ = __webpack_require__(38)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        id: {
	            type: String,
	            required: true
	        },
	
	        name: {
	            type: String
	        },
	
	        value: {
	            type: String
	        },
	
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	
	        filledIn: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'filled-in': this.filledIn
	            };
	        }
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('p',[_h('input',{class:classes,props:{"value":value},attrs:{"id":id,"name":name,"disabled":disabled},staticAttrs:{"type":"checkbox"}})," ",_h('label',{attrs:{"for":id}},[$slots["default"]])])}},staticRenderFns: []}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(40)
	
	/* template */
	var __vue_template__ = __webpack_require__(41)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    events: {
	        closed: function closed() {
	            this.remove = true;
	        }
	    },
	
	    data: function data() {
	        return {
	            remove: false
	        };
	    },
	
	
	    props: {
	        close: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    methods: {
	        init: function init() {
	            var _this = this;
	
	            if (this.remove) {
	                this.$el.addEventListener('click', function () {
	                    return _this.$emit('closed');
	                });
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return (!remove)?_h('div',{staticClass:"chip"},[$slots["default"]," ",(close)?_h('icon',function(){return ["close"]}):void 0]):void 0}},staticRenderFns: []}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(43)
	
	/* template */
	var __vue_template__ = __webpack_require__(44)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    props: {
	        collapsible: {
	            type: Boolean,
	            default: false
	        },
	
	        expandable: {
	            type: Boolean,
	            default: false
	        },
	
	        popout: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'popout': this.popout
	            };
	        },
	        params: function params() {
	            return {
	                accordion: this.type === 'accordion'
	            };
	        },
	        type: function type() {
	            if (this.collapsible) return 'accordion';
	            if (this.expandable) return 'expandable';
	        }
	    },
	
	    methods: {
	        init: function init() {
	            $(this.$el).collapsible(this.params);
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('ul',{staticClass:"collapsible",class:classes,attrs:{"data-collapsible":type}},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(46)
	
	/* template */
	var __vue_template__ = __webpack_require__(47)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        withHeader: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'with-header': this.withHeader
	            };
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('ul',{staticClass:"collection",class:classes},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(49)
	
	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _collectionItem = __webpack_require__(50);
	
	var _collectionItem2 = _interopRequireDefault(_collectionItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_collectionItem2.default],
	
	    computed: {
	        classes: function classes() {
	            return this.collectionsMixin;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        active: {
	            type: Boolean,
	            default: false
	        },
	
	        dismissable: {
	            type: Boolean,
	            default: false
	        },
	
	        header: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        collectionsMixin: function collectionsMixin() {
	            return {
	                'active': this.active,
	                'dismissable': this.dismissable,
	                'collection-item': !this.header,
	                'collection-header': this.header
	            };
	        }
	    }
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('li',{class:classes},[$slots["default"]," ",_h('a',{staticClass:"secondary-content",staticAttrs:{"href":"#!"}},[$slots["secondary"]])])}},staticRenderFns: []}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(53)
	
	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _collectionItem = __webpack_require__(50);
	
	var _collectionItem2 = _interopRequireDefault(_collectionItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_collectionItem2.default],
	
	    computed: {
	        classes: function classes() {
	            return this.collectionsMixin;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('a',{class:classes,staticAttrs:{"href":"#!"}},[$slots["default"]," ",_h('a',{staticClass:"secondary-content",staticAttrs:{"href":"#!"}},[$slots["secondary"]])])}},staticRenderFns: []}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(56)
	
	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _collectionItem = __webpack_require__(50);
	
	var _collectionItem2 = _interopRequireDefault(_collectionItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_collectionItem2.default],
	
	    props: {
	        src: {
	            type: String,
	            required: true
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return this.collectionsMixin;
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('li',{staticClass:"avatar",class:classes},[_h('img',{staticClass:"circle",attrs:{"src":src}})," ",$slots["default"]," ",_h('a',{staticClass:"secondary-content",staticAttrs:{"href":"#!"}},[$slots["secondary"]])])}},staticRenderFns: []}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(59)
	
	/* template */
	var __vue_template__ = __webpack_require__(60)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	    // TODO add functionality
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _m(0)}},staticRenderFns: [function(){with(this){return _h('input',{staticClass:"datepicker",staticAttrs:{"type":"date"}})}}]}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(62)
	
	/* template */
	var __vue_template__ = __webpack_require__(63)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        induration: {
	            type: Number,
	            default: 300
	        },
	
	        outduration: {
	            type: Number,
	            default: 225
	        },
	
	        constrainwidth: {
	            type: Boolean,
	            default: true
	        },
	
	        hover: {
	            type: Boolean,
	            default: false
	        },
	
	        gutter: {
	            type: Number,
	            default: 0
	        },
	
	        beloworigin: {
	            type: Boolean,
	            default: false
	        },
	
	        alignment: {
	            type: String,
	            default: 'left'
	        }
	    },
	
	    computed: {
	        params: function params() {
	            return {
	                inDuration: this.induration,
	                outDuration: this.outduration,
	                constrain_width: this.constrainwidth,
	                hover: this.hover,
	                gutter: this.gutter,
	                belowOrigin: this.beloworigin,
	                alignment: this.alignment
	            };
	        }
	    }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('ul',{staticClass:"dropdown-content",attrs:{"data-induration":induration,"data-outduration":outduration,"data-constrainwidth":constrainwidth,"data-hover":hover,"data-gutter":gutter,"data-beloworigin":beloworigin,"data-alignment":alignment}},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(65)
	
	/* template */
	var __vue_template__ = __webpack_require__(66)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    // TODO add multiple functionality
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"file-field input-field"},[_m(0)," ",_h('div',{staticClass:"file-path-wrapper"},[_h('text-input',{staticClass:"file-path validate"})])])}},staticRenderFns: [function(){with(this){return _h('div',{staticClass:"btn"},[_h('span',["File"])," ",_h('input',{staticAttrs:{"type":"file"}})])}}]}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(68)
	
	/* template */
	var __vue_template__ = __webpack_require__(69)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        tiny: {
	            type: Boolean,
	            default: false
	        },
	
	        small: {
	            type: Boolean,
	            default: false
	        },
	
	        medium: {
	            type: Boolean,
	            default: false
	        },
	
	        large: {
	            type: Boolean,
	            default: false
	        },
	
	        prefix: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'tiny': this.tiny,
	                'small': this.small,
	                'medium': this.medium,
	                'large': this.large,
	                'prefix': this.prefix
	            };
	        }
	    }
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('i',{staticClass:"material-icons",class:classes},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(71)
	
	/* template */
	var __vue_template__ = __webpack_require__(72)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    props: {
	        caption: {
	            type: String,
	            default: false
	        },
	
	        src: {
	            type: String,
	            required: true
	        },
	
	        width: {
	            type: Number,
	            required: true
	        }
	    },
	
	    methods: {
	        init: function init() {
	            $(this.$el).materialbox();
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('img',{staticClass:"materialboxed",attrs:{"width":width,"src":src,"data-caption":caption}})}},staticRenderFns: []}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(74)
	
	/* template */
	var __vue_template__ = __webpack_require__(75)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        bottomSheet: {
	            type: Boolean,
	            default: false
	        },
	
	        id: {
	            type: String,
	            required: true
	        },
	
	        fixedFooter: {
	            type: Boolean,
	            default: false
	        },
	
	        params: {
	            type: Object,
	            default: function _default() {}
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'bottom-sheet': this.bottomSheet,
	                'modal-fixed-footer': this.fixedFooter
	            };
	        }
	    },
	
	    methods: {
	        close: function close() {
	            $(this.$el).closeModal();
	            this.$emit('closed');
	        },
	        open: function open() {
	            $(this.$el).openModal();
	            this.$emit('openned');
	        }
	    }
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"modal",class:classes,attrs:{"id":id}},[_h('div',{staticClass:"modal-content"},[$slots["content"]])," ",_h('div',{staticClass:"modal-footer"},[$slots["footer"]])])}},staticRenderFns: []}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(77)
	
	/* template */
	var __vue_template__ = __webpack_require__(78)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        horizontal: {
	            type: Boolean,
	            default: false
	        },
	
	        toggle: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'click-to-toggle': this.toggle,
	                'horizontal': this.horizontal
	            };
	        }
	    },
	
	    methods: {
	        open: function open() {
	            $(this.$el).openFAB();
	            this.$emit('openned');
	        },
	        close: function close() {
	            $(this.$el).closeFAB();
	            this.$emit('closed');
	        }
	    }
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"fixed-action-btn",class:classes},[$slots["btn"]," ",$slots["items"]])}},staticRenderFns: []}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(80)
	
	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        active: {
	            type: Number,
	            default: 0
	        },
	
	        color: {
	            type: String,
	            default: ''
	        },
	
	        length: {
	            type: Number,
	            default: 0
	        },
	
	        waves: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    methods: {
	        next: function next() {
	            this.$emit('next');
	        },
	        page: function page(n) {
	            this.$emit('page', n);
	        },
	        prev: function prev() {
	            this.$emit('prev');
	        }
	    }
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('ul',{staticClass:"pagination"},[_h('pagination-item',{attrs:{"disabled":active === 1},on:{"click":prev}},function(){return [_m(0)]})," ",(length)&&_l((length),function(n){return (length > 0)?_h('pagination-item',{attrs:{"active":active === n,"waves":waves,"color":color},on:{"click":function($event){page(n)}}},function(){return ["\n        "+_s(n)+"\n    "]}):void 0})," ",_h('pagination-item',{attrs:{"disabled":active === length},on:{"click":next}},function(){return [_m(1)]})])}},staticRenderFns: [function(){with(this){return _h('i',{staticClass:"material-icons"},["chevron_left"])}},function(){with(this){return _h('i',{staticClass:"material-icons"},["chevron_right"])}}]}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(83)
	
	/* template */
	var __vue_template__ = __webpack_require__(84)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        active: {
	            type: Boolean,
	            default: false
	        },
	
	        color: {
	            type: String,
	            default: ''
	        },
	
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	
	        waves: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            var _ref;
	
	            return _ref = {
	                'active': this.active
	            }, _defineProperty(_ref, this.color, this.active), _defineProperty(_ref, 'disabled', this.disabled), _defineProperty(_ref, 'waves-effect', this.waves), _ref;
	        }
	    },
	
	    methods: {
	        click: function click() {
	            if (!this.disabled) {
	                this.$emit('click');
	            }
	        }
	    }
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('li',{class:classes,on:{"click":function($event){$event.preventDefault();click($event)}}},[_h('a',{staticAttrs:{"href":"#!"}},[$slots["default"]])])}},staticRenderFns: []}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(86)
	
	/* template */
	var __vue_template__ = __webpack_require__(87)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    props: {
	        height: {
	            type: Number,
	            default: 500
	        },
	
	        src: {
	            type: String,
	            required: true
	        }
	    },
	
	    computed: {
	        style: function style() {
	            return {
	                height: this.height + 'px'
	            };
	        }
	    },
	
	    methods: {
	        init: function init() {
	            $('.parallax').parallax();
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"parallax-container",style:(style)},[_h('div',{staticClass:"parallax"},[_h('img',{attrs:{"src":src}})])])}},staticRenderFns: []}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(89)
	
	/* template */
	var __vue_template__ = __webpack_require__(90)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        determinate: {
	            type: Boolean,
	            default: false
	        },
	
	        indeterminate: {
	            type: Boolean,
	            default: false
	        },
	
	        width: {
	            type: Number,
	            default: false
	        }
	    },
	
	    methods: {
	        classes: function classes() {
	            return {
	                'determinate': this.determinate,
	                'indeterminate': this.indeterminate
	            };
	        },
	        style: function style() {
	            if (this.width === false) return {};
	
	            return {
	                'width': this.width + '%'
	            };
	        }
	    }
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"progress"},[_h('div',{class:classes,style:(style)})])}},staticRenderFns: []}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(92)
	
	/* template */
	var __vue_template__ = __webpack_require__(93)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        blue: {
	            type: Boolean,
	            default: false
	        },
	
	        blueFlash: {
	            type: Boolean,
	            default: false
	        },
	
	        green: {
	            type: Boolean,
	            default: false
	        },
	
	        greenFlash: {
	            type: Boolean,
	            default: false
	        },
	
	        small: {
	            type: Boolean,
	            default: false
	        },
	
	        large: {
	            type: Boolean,
	            default: false
	        },
	
	        red: {
	            type: Boolean,
	            default: false
	        },
	
	        redFlash: {
	            type: Boolean,
	            default: false
	        },
	
	        yellow: {
	            type: Boolean,
	            default: false
	        },
	
	        yellowFlash: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'small': this.small,
	                'large': this.large,
	                'spinner-blue-only': this.blue,
	                'spinner-red-only': this.red,
	                'spinner-green-only': this.green,
	                'spinner-yellow-only': this.yellow,
	                'spinner-blue': this.blueFlash,
	                'spinner-red': this.redFlash,
	                'spinner-green': this.greenFlash,
	                'spinner-yellow': this.yellowFlash
	            };
	        }
	    }
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"preloader-wrapper active",class:classes},[_m(0)])}},staticRenderFns: [function(){with(this){return _h('div',{staticClass:"spinner-layer"},[_h('div',{staticClass:"circle-clipper left"},[_h('div',{staticClass:"circle"})]),_h('div',{staticClass:"gap-patch"},[_h('div',{staticClass:"circle"})]),_h('div',{staticClass:"circle-clipper right"},[_h('div',{staticClass:"circle"})])])}}]}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(95)
	
	/* template */
	var __vue_template__ = __webpack_require__(96)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        id: {
	            type: String,
	            required: true
	        },
	
	        name: {
	            type: String
	        },
	
	        value: {
	            type: String
	        },
	
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	
	        withGap: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'with-gap': this.withGap
	            };
	        }
	    }
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('p',[_h('input',{class:classes,props:{"value":value},attrs:{"id":id,"name":name,"disabled":disabled},staticAttrs:{"type":"radio"}})," ",_h('label',{attrs:{"for":id}},[$slots["default"]])])}},staticRenderFns: []}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(98)
	
	/* template */
	var __vue_template__ = __webpack_require__(99)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    // TODO add functionality
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _m(0)}},staticRenderFns: [function(){with(this){return _h('p',{staticClass:"range-field"},[_h('input',{staticAttrs:{"type":"range"}})])}}]}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(101)
	
	/* template */
	var __vue_template__ = __webpack_require__(103)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	var _browserDefault = __webpack_require__(102);
	
	var _browserDefault2 = _interopRequireDefault(_browserDefault);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    mixins: [_browserDefault2.default, _isLoadable2.default],
	
	    computed: {
	        classes: function classes() {
	            return Object.assign(this.defaultsMixin);
	        }
	    },
	
	    methods: {
	        init: function init() {
	            $(this.$el).material_select();
	
	            // TODO: Need to update this when bug is fixed
	            // for emitting input data
	            // const vm = this
	            // this.$el.onchange = function () {
	            //     vm.$emit('input', this.value)
	            // }
	        }
	    }
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        default: {
	            type: Boolean,
	            default: false
	        }
	    },
	
	    computed: {
	        defaultsMixin: function defaultsMixin() {
	            return {
	                'browser-default': this.default
	            };
	        }
	    }
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('select',{class:classes},[_m(0)," ",$slots["default"]])}},staticRenderFns: [function(){with(this){return _h('option',{staticAttrs:{"value":"","disabled":"","selected":""}},["Choose your options"])}}]}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(105)
	
	/* template */
	var __vue_template__ = __webpack_require__(106)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    props: {
	        fullWidth: {
	            type: Boolean,
	            default: false
	        },
	
	        indicators: {
	            type: Boolean,
	            default: true
	        },
	
	        height: {
	            type: Number,
	            default: 400
	        },
	
	        transition: {
	            type: Number,
	            default: 500
	        },
	
	        interval: {
	            type: Number,
	            default: 6000
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'fullscreen': this.fullWidth
	            };
	        },
	        params: function params() {
	            return {
	                full_width: this.fullWidth,
	                indicators: this.indicators,
	                height: this.height,
	                transition: this.transition,
	                interval: this.interval
	            };
	        }
	    },
	
	    methods: {
	        init: function init() {
	            $(this.$el).slider(this.params);
	        },
	        pause: function pause() {
	            $(this.$el).slider('pause');
	        },
	        start: function start() {
	            $(this.$el).slider('start');
	        },
	        next: function next() {
	            $(this.$el).slider('next');
	        },
	        prev: function prev() {
	            $(this.$el).slider('prev');
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"slider",class:classes},[_h('ul',{staticClass:"slides"},[$slots["default"]])])}},staticRenderFns: []}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(108)
	
	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        center: {
	            type: Boolean,
	            default: false
	        },
	
	        left: {
	            type: Boolean,
	            default: false
	        },
	
	        right: {
	            type: Boolean,
	            default: false
	        },
	
	        src: {
	            type: String,
	            required: true
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'left-align': this.left,
	                'center-align': this.center,
	                'right-align': this.right
	            };
	        }
	    }
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('li',[_h('img',{attrs:{"src":src}})," ",_h('div',{staticClass:"caption",class:classes},[$slots["default"]])])}},staticRenderFns: []}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(111)
	
	/* template */
	var __vue_template__ = __webpack_require__(112)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        off: {
	            type: String,
	            default: 'Off'
	        },
	
	        on: {
	            type: String,
	            default: 'On'
	        }
	    }
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('div',{staticClass:"switch"},[_h('label',["\n        "+_s(off)+"\n        ",_m(0)," ",_m(1),"\n        "+_s(on)+"\n    "])])}},staticRenderFns: [function(){with(this){return _h('input',{staticAttrs:{"type":"checkbox"}})}},function(){with(this){return _h('span',{staticClass:"lever"})}}]}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(114)
	
	/* template */
	var __vue_template__ = __webpack_require__(115)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        active: {
	            type: Boolean,
	            default: false
	        },
	
	        target: {
	            type: String,
	            required: true
	        }
	    },
	
	    computed: {
	        classes: function classes() {
	            return {
	                'active': this.active
	            };
	        }
	    }
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('li',{staticClass:"tab col",class:{ 'disabled': this.disabled }},[_h('a',{class:classes,attrs:{"href":target}},[$slots["default"]])])}},staticRenderFns: []}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(117)
	
	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isLoadable = __webpack_require__(30);
	
	var _isLoadable2 = _interopRequireDefault(_isLoadable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    mixins: [_isLoadable2.default],
	
	    props: {
	        selected: {
	            type: String,
	            default: ''
	        }
	    },
	
	    methods: {
	        init: function init() {
	            if (!this.selected) return;
	
	            $(this.$el).tabs('select_tab', this.selected);
	        }
	    }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _h('ul',{staticClass:"tabs"},[$slots["default"]])}},staticRenderFns: []}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(120)
	
	/* template */
	var __vue_template__ = __webpack_require__(121)
	__vue_options__ = __vue_exports__ || {}
	if (__vue_options__.__esModule) __vue_options__ = __vue_options__.default
	if (typeof __vue_options__ === "function") __vue_options__ = __vue_options__.options
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__ || __vue_options__


/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    // TODO add length functionality
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports={render:function(){with(this){return _m(0)}},staticRenderFns: [function(){with(this){return _h('input',{staticClass:"validate",staticAttrs:{"type":"text"}})}}]}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dropdown = __webpack_require__(123);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _modal = __webpack_require__(124);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _sideNav = __webpack_require__(125);
	
	var _sideNav2 = _interopRequireDefault(_sideNav);
	
	var _tooltip = __webpack_require__(126);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    Dropdown: _dropdown2.default,
	    Modal: _modal2.default,
	    SideNav: _sideNav2.default,
	    Tooltip: _tooltip2.default
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _load = __webpack_require__(31);
	
	var _load2 = _interopRequireDefault(_load);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    bind: function bind(el, binding, vnode) {
	        var params = binding.expression || {};
	
	        el.setAttribute('data-activates', binding.arg);
	
	        _load2.default.call(vnode.context, function () {
	            return $(el).dropdown(params);
	        });
	    },
	    unbind: function unbind(el) {
	        el.removeEventListener('click');
	    }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _load = __webpack_require__(31);
	
	var _load2 = _interopRequireDefault(_load);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    bind: function bind(el, binding, vnode) {
	        var params = binding.expression || {};
	
	        if (el.nodeName === 'button') {
	            el.setAttribute('data-target', binding.arg);
	        } else {
	            el.setAttribute('href', '#' + binding.arg);
	        }
	
	        _load2.default.call(vnode.context, function () {
	            return $(el).leanModal(params);
	        });
	    },
	    unbind: function unbind(el) {
	        el.removeEventListener('click');
	    }
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _load = __webpack_require__(31);
	
	var _load2 = _interopRequireDefault(_load);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    bind: function bind(el, binding, vnode) {
	        var params = binding.value || {};
	
	        el.setAttribute('data-activates', binding.arg);
	
	        _load2.default.call(vnode.context, function () {
	            return $(el).sideNav(params);
	        });
	    },
	    unbind: function unbind(el) {
	        el.removeEventListener('click');
	    }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _load = __webpack_require__(31);
	
	var _load2 = _interopRequireDefault(_load);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tooltip = function tooltip(el, binding, vnode) {
	    var delay = typeof binding.modifiers !== 'undefined' ? Object.keys(binding.modifiers)[0] : 50;
	
	    el.classList.add('tooltipped');
	    el.setAttribute('data-position', binding.arg);
	    el.setAttribute('data-delay', delay);
	    el.setAttribute('data-tooltip', binding.expression);
	
	    _load2.default.call(vnode.context, function () {
	        return $(el).tooltip();
	    });
	};
	
	exports.default = {
	    bind: function bind(el, binding, vnode) {
	        tooltip(el, binding, vnode);
	    },
	    postupdate: function postupdate(el, binding, vnode) {
	        tooltip(el, binding, vnode);
	    },
	    unbind: function unbind(el) {
	        el.removeEventListener('mouseenter');
	        el.removeEventListener('mouseleave');
	    }
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Dialog;
	function Dialog(message) {
	    var duration = arguments.length <= 1 || arguments[1] === undefined ? 4000 : arguments[1];
	    var rounded = arguments[2];
	    var cb = arguments[3];
	
	    if (typeof rounded === 'function') {
	        cb = rounded;
	        rounded = '';
	    }
	
	    Materialize.toast(message, duration, rounded, cb);
	}

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ScrollFire;
	function ScrollFire(options) {
	    Materialize.scrollFire(options);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-materials.common.js.map