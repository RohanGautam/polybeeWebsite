function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = []; // const routes: Routes = [{ path: 'contact', component: ContactComponent }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./section1/section1.component */
    "./src/app/section1/section1.component.ts");
    /* harmony import */


    var _section2_section2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./section2/section2.component */
    "./src/app/section2/section2.component.ts");
    /* harmony import */


    var _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pilot-trails/pilot-trails.component */
    "./src/app/pilot-trails/pilot-trails.component.ts");
    /* harmony import */


    var _partners_partners_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./partners/partners.component */
    "./src/app/partners/partners.component.ts");
    /* harmony import */


    var _media_media_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./media/media.component */
    "./src/app/media/media.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var _c0 = function _c0() {
      return {
        "background-image": "url(assets/images/illustration-section-01.svg)"
      };
    };

    var Direction;

    (function (Direction) {
      Direction["Up"] = "Up";
      Direction["Down"] = "Down";
    })(Direction || (Direction = {}));

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(sidebarService) {
        _classCallCheck(this, AppComponent);

        this.sidebarService = sidebarService;
        this.title = 'polybeeWebsite';
        this.sideBarShown = false;
        this.headerShown = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // setting up observbles to listen for up/down scroll events
          var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return window.pageYOffset;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                y1 = _ref2[0],
                y2 = _ref2[1];

            return y2 < y1 ? Direction.Up : Direction.Down;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()); // scroll$.subscribe((v) => console.log(v));

          var scrollUp$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (direction) {
            return direction === Direction.Up;
          }));
          var scrollDown$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (direction) {
            return direction === Direction.Down;
          }));
          scrollDown$.subscribe(function (_) {
            _this.headerShown = false;

            if (_this.sideBarShown) {
              _this.toggleSidebar();
            }
          });
          scrollUp$.subscribe(function (_) {
            _this.headerShown = true;
          });
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.sidebarService.toggle(false, 'right-sidebar');
          this.sideBarShown = !this.sideBarShown;
        }
      }, {
        key: "scroll",
        value: function scroll(el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          this.toggleSidebar();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 54,
      vars: 4,
      consts: [["fixed", "", 3, "ngStyle"], [1, "row"], [1, "col-6", "col-sm-2"], ["src", "assets/logo/logo_banner.png", "alt", "", 1, "img-fluid", "float-left"], ["size", "small"], [3, "icon", "click"], ["right", "", "tag", "right-sidebar", "state", "collapsed", "fixed", ""], [1, "sidebarMenuItem", 3, "click"], ["icon", "home-outline"], ["icon", "activity-outline"], ["icon", "bulb-outline"], ["icon", "compass-outline"], ["icon", "clipboard-outline"], ["icon", "phone-call-outline"], ["hero", ""], ["section1", ""], ["section2", ""], ["pilot", ""], ["partners", ""], ["media", ""], ["contact", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-actions", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-action", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_nb_action_click_6_listener() {
            return ctx.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-sidebar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            return ctx.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nb-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            return ctx.scroll(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Industry problems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            return ctx.scroll(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nb-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Our solutions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

            return ctx.scroll(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nb-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Our partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

            return ctx.scroll(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nb-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Media coverage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

            return ctx.scroll(_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nb-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-layout-column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-section1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-section2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-pilot-trails");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", null, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", null, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", null, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@toggle", ctx.headerShown ? "showHeader" : "hideHeader")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.sideBarShown ? "close-outline" : "menu-outline");
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_9__["Section2Component"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_10__["PilotTrailsComponent"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_11__["PartnersComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_12__["MediaComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]],
      styles: ["nb-layout-header[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n\n.sidebarMenuItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 20px;\n  border-bottom: 2px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGtDQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYi1sYXlvdXQtaGVhZGVyIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvaW1hZ2VzL2lsbHVzdHJhdGlvbi1zZWN0aW9uLTAxLnN2Z1wiKTtcbi8vIH1cblxubmItbGF5b3V0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaWRlYmFyTWVudUl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNTEsIDE1MywgMjU1KTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cbiIsIm5iLWxheW91dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2lkZWJhck1lbnVJdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('showHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 1,
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hideHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
          opacity: 0,
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('showHeader <=> hideHeader', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('showHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 1,
            visibility: 'visible'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hideHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0,
            visibility: 'hidden'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('showHeader <=> hideHeader', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms')])])]
        }]
      }], function () {
        return [{
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./section1/section1.component */
    "./src/app/section1/section1.component.ts");
    /* harmony import */


    var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/img-text-vertical/img-text-vertical.component */
    "./src/app/components/img-text-vertical/img-text-vertical.component.ts");
    /* harmony import */


    var _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./section2/section2.component */
    "./src/app/section2/section2.component.ts");
    /* harmony import */


    var _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pilot-trails/pilot-trails.component */
    "./src/app/pilot-trails/pilot-trails.component.ts");
    /* harmony import */


    var _partners_partners_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./partners/partners.component */
    "./src/app/partners/partners.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _media_media_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./media/media.component */
    "./src/app/media/media.component.ts");
    /* harmony import */


    var _media_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./media/media-tile/media-tile.component */
    "./src/app/media/media-tile/media-tile.component.ts");
    /* harmony import */


    var _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/solution-component/solution-component.component */
    "./src/app/components/solution-component/solution-component.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({
        name: 'default'
      }), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"], _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__["ImgTextVerticalComponent"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__["Section2Component"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__["PilotTrailsComponent"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_12__["PartnersComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_14__["MediaComponent"], _media_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_15__["MediaTileComponent"], _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_16__["SolutionComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"], _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__["ImgTextVerticalComponent"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__["Section2Component"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__["PilotTrailsComponent"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_12__["PartnersComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_14__["MediaComponent"], _media_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_15__["MediaTileComponent"], _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_16__["SolutionComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({
            name: 'default'
          }), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/img-text-vertical/img-text-vertical.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/img-text-vertical/img-text-vertical.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ImgTextVerticalComponent */

  /***/
  function srcAppComponentsImgTextVerticalImgTextVerticalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgTextVerticalComponent", function () {
      return ImgTextVerticalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        height: a0
      };
    };

    var ImgTextVerticalComponent = /*#__PURE__*/function () {
      // text =
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
      // text = 'Lorem ipsum dolor sit amet';
      function ImgTextVerticalComponent() {
        _classCallCheck(this, ImgTextVerticalComponent);

        this.text = '';
        this.title = '';
        this.imgHeight = '100px';
      }

      _createClass(ImgTextVerticalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImgTextVerticalComponent;
    }();

    ImgTextVerticalComponent.ɵfac = function ImgTextVerticalComponent_Factory(t) {
      return new (t || ImgTextVerticalComponent)();
    };

    ImgTextVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImgTextVerticalComponent,
      selectors: [["app-img-text-vertical"]],
      inputs: {
        image: "image",
        text: "text",
        title: "title",
        imgHeight: "imgHeight"
      },
      decls: 10,
      vars: 6,
      consts: [["data-aos", "zoom-in", 1, "customcard", "d-flex", "justify-content-center"], [1, "row"], [1, "col-12", "d-flex", "justify-content-center", "text-center"], ["alt", "", 1, "img-fluid", 3, "src", "ngStyle"], [1, "col-12", "text-center"], [1, "description"]],
      template: function ImgTextVerticalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.imgHeight));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".imgTextVertical[_ngcontent-%COMP%] {\n  border: 2px solid #3399ff;\n  margin-bottom: 8px;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.customcard[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #fdfbfb;\n  padding: 10px;\n  margin-bottom: 20px;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nVGV4dFZlcnRpY2FsIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDUxLCAxNTMsIDI1NSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmltZyB7XG4gIC8vIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3VzdG9tY2FyZCB7XG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTEsIDE1MywgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmRmYmZiO1xuICAvLyBib3gtc2hhZG93OiAyMHB4IDIwcHggMzNweCAjZTNlM2UzLCAtMjBweCAtMjBweCAzM3B4ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIC8vIGhlaWdodDogMTAwJTtcbn1cbiIsIi5pbWdUZXh0VmVydGljYWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzM5OWZmO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmltZyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3VzdG9tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmJmYjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgTextVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-img-text-vertical',
          templateUrl: './img-text-vertical.component.html',
          styleUrls: ['./img-text-vertical.component.scss']
        }]
      }], function () {
        return [];
      }, {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imgHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/solution-component/solution-component.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/solution-component/solution-component.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SolutionComponentComponent */

  /***/
  function srcAppComponentsSolutionComponentSolutionComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolutionComponentComponent", function () {
      return SolutionComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SolutionComponentComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SolutionComponentComponent_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "text-align": a0
      };
    };

    var SolutionComponentComponent = /*#__PURE__*/function () {
      // @Input() padImg: boolean = true;
      // imgLeft = true;
      // image = 'assets/images/mac-fullpage.png';
      function SolutionComponentComponent() {
        _classCallCheck(this, SolutionComponentComponent);

        this.title = '';
        this.para1 = '';
        this.para2 = '';
        this.para3 = '';
        this.subtitle1 = '';
        this.subtitle2 = '';
        this.subtitle3 = '';
        this.imgRight = false;
      }

      _createClass(SolutionComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SolutionComponentComponent;
    }();

    SolutionComponentComponent.ɵfac = function SolutionComponentComponent_Factory(t) {
      return new (t || SolutionComponentComponent)();
    };

    SolutionComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolutionComponentComponent,
      selectors: [["app-solution-component"]],
      inputs: {
        image: "image",
        title: "title",
        para1: "para1",
        para2: "para2",
        para3: "para3",
        subtitle1: "subtitle1",
        subtitle2: "subtitle2",
        subtitle3: "subtitle3",
        imgRight: "imgRight"
      },
      decls: 19,
      vars: 13,
      consts: [[1, "row", "solution"], [1, "col-md-6", "solnImageContainer", 3, "ngClass", "ngStyle"], ["class", "img-fluid solnImage", "alt", "", "data-aos", "fade-left", 3, "src", 4, "ngIf"], ["class", "img-fluid solnImage", "alt", "", "data-aos", "fade-right", 3, "src", 4, "ngIf"], [1, "col-md-6", "solnContent"], [1, "para"], ["alt", "", "data-aos", "fade-left", 1, "img-fluid", "solnImage", 3, "src"], ["alt", "", "data-aos", "fade-right", 1, "img-fluid", "solnImage", 3, "src"]],
      template: function SolutionComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SolutionComponentComponent_img_2_Template, 1, 1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SolutionComponentComponent_img_3_Template, 1, 1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.imgRight ? " order-md-last" : "")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, !ctx.imgRight ? "end" : "start"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgRight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.para1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.para2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.para3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".solnImageContainer[_ngcontent-%COMP%] {\n  padding-right: 40px;\n  padding-left: 40px;\n  margin-bottom: 8px;\n}\n\n.solution[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n  min-height: 90vh;\n  display: flex;\n  justify-items: center;\n  place-items: center;\n  border-bottom: 2px solid lightgrey;\n}\n\n.solnImage[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.solnContent[_ngcontent-%COMP%] {\n  padding-right: 40px;\n  padding-left: 40px;\n}\n\n.para[_ngcontent-%COMP%] {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvc29sdXRpb24tY29tcG9uZW50L3NvbHV0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb2x1dGlvbi1jb21wb25lbnQvc29sdXRpb24tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsMkNBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvbHV0aW9uLWNvbXBvbmVudC9zb2x1dGlvbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sbkltYWdlQ29udGFpbmVyIHtcbiAgLy8gICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uc29sdXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG59XG4uc29sbkltYWdlIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5zb2xuQ29udGVudCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLnBhcmEge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuIiwiLnNvbG5JbWFnZUNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uc29sdXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA5MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5zb2xuSW1hZ2Uge1xuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc29sbkNvbnRlbnQge1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5wYXJhIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolutionComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-solution-component',
          templateUrl: './solution-component.component.html',
          styleUrls: ['./solution-component.component.scss']
        }]
      }], function () {
        return [];
      }, {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        para1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        para2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        para3: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle3: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imgRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openLink",
        value: function openLink(link) {
          window.open(link);
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 15,
      vars: 0,
      consts: [[1, "contact", 2, "padding", "10px"], [1, "row"], [1, "col-md-5"], [1, "float-md-right"], [1, "col-md", "my-auto"], ["nbButton", "", "status", "primary", "size", "giant", "outline", "", "href", "mailto:info@polybee.co"], ["icon", "email-outline"], ["nbButton", "", "status", "primary", "size", "giant", "outline", "", "href", "https://goo.gl/maps/R4hKafHpsS9yd6BF7"], ["icon", "globe-2-outline"], ["nbButton", "", "status", "primary", "size", "giant", "outline", "", "href", "https://angel.co/company/polybee/jobs", "target", "_blank"], ["icon", "briefcase-outline"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact us.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nb-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Office ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nb-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Careers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"]],
      styles: ["a[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIG1hcmdpbjogOHB4O1xufVxuLy8gLnJvdyB7XG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuLy8gLmNvbC1tZCB7XG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuIiwiYSB7XG4gIG1hcmdpbjogOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hero/hero.component.ts":
  /*!****************************************!*\
    !*** ./src/app/hero/hero.component.ts ***!
    \****************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/banner-2.png)"
      };
    };

    var HeroComponent = /*#__PURE__*/function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 6,
      vars: 2,
      consts: [[1, "hero", 3, "ngStyle"], [1, "impactText"], [2, "color", "white"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grow more from less. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Autonomous drones for precision pollination in indoor farming. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".hero[_ngcontent-%COMP%] {\n  height: 80vh;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.impactText[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  line-height: 10vh;\n  text-align: center;\n  font-family: \"museo-sans-title\";\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFFQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7XG4gIC8vICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbXBhY3RUZXh0IHtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBsaW5lLWhlaWdodDogMTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJtdXNlby1zYW5zLXRpdGxlXCI7XG4gIC8vIGNvbG9yOiByZ2IoNTEsIDE1MywgMjU1KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiLmhlcm8ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1wYWN0VGV4dCB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwibXVzZW8tc2Fucy10aXRsZVwiO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/media/media-tile/media-tile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/media/media-tile/media-tile.component.ts ***!
    \**********************************************************/

  /*! exports provided: MediaTileComponent */

  /***/
  function srcAppMediaMediaTileMediaTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaTileComponent", function () {
      return MediaTileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function MediaTileComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.description, " ");
      }
    }

    function MediaTileComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var MediaTileComponent = /*#__PURE__*/function () {
      function MediaTileComponent() {
        _classCallCheck(this, MediaTileComponent);

        this.link = null;
        this.description = null;
      }

      _createClass(MediaTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MediaTileComponent;
    }();

    MediaTileComponent.ɵfac = function MediaTileComponent_Factory(t) {
      return new (t || MediaTileComponent)();
    };

    MediaTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MediaTileComponent,
      selectors: [["app-media-tile"]],
      inputs: {
        image: "image",
        link: "link",
        description: "description"
      },
      decls: 4,
      vars: 3,
      consts: [["data-aos", "fade-up", 1, "customcard", "d-flex", "align-items-center", "justify-content-center"], ["alt", "", 1, "img-fluid", 3, "src"], ["class", "mediaAddOn mediaDescription text-center", 4, "ngIf"], ["class", "mediaAddOn", "nbButton", "", "size", "large", "outline", "", "target", "_blank", 3, "href", 4, "ngIf"], [1, "mediaAddOn", "mediaDescription", "text-center"], ["nbButton", "", "size", "large", "outline", "", "target", "_blank", 1, "mediaAddOn", 3, "href"], ["icon", "external-link-outline"]],
      template: function MediaTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MediaTileComponent_p_2_Template, 2, 1, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MediaTileComponent_a_3_Template, 3, 1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"]],
      styles: [".customcard[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  background: #fdfbfb;\n  padding: 10px;\n  height: 350px;\n  margin-bottom: 10px;\n}\n\n.mediaImage[_ngcontent-%COMP%] {\n  border: 2px solid #3399ff;\n}\n\n.mediaAddOn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mediaDescription[_ngcontent-%COMP%] {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL21lZGlhL21lZGlhLXRpbGUvbWVkaWEtdGlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVkaWEvbWVkaWEtdGlsZS9tZWRpYS10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBREdBO0VBRUUseUJBQUE7QUNERjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDSkY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEvbWVkaWEtdGlsZS9tZWRpYS10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZiZmI7XG4gIC8vIGJveC1zaGFkb3c6IDIwcHggMjBweCAzM3B4ICNlM2UzZTMsIC0yMHB4IC0yMHB4IDMzcHggI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tZWRpYUltYWdlIHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTEsIDE1MywgMjU1KTtcblxuICAvLyB0b3A6IDI1JTtcbiAgLy8gYm90dG9tOiAyNSU7XG59XG5cbi5tZWRpYUFkZE9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLm1lZGlhRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuIiwiLmN1c3RvbWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmJmYjtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1lZGlhSW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzM5OWZmO1xufVxuXG4ubWVkaWFBZGRPbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1lZGlhRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-media-tile',
          templateUrl: './media-tile.component.html',
          styleUrls: ['./media-tile.component.scss']
        }]
      }], function () {
        return [];
      }, {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/media/media.component.ts":
  /*!******************************************!*\
    !*** ./src/app/media/media.component.ts ***!
    \******************************************/

  /*! exports provided: MediaComponent */

  /***/
  function srcAppMediaMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaComponent", function () {
      return MediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./media-tile/media-tile.component */
    "./src/app/media/media-tile/media-tile.component.ts");

    var MediaComponent = /*#__PURE__*/function () {
      function MediaComponent() {
        _classCallCheck(this, MediaComponent);
      }

      _createClass(MediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MediaComponent;
    }();

    MediaComponent.ɵfac = function MediaComponent_Factory(t) {
      return new (t || MediaComponent)();
    };

    MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MediaComponent,
      selectors: [["app-media"]],
      decls: 17,
      vars: 0,
      consts: [[1, "mediaCov", 2, "padding", "10px"], [1, "text-center"], [1, "container"], [1, "row"], [1, "col-md-4"], ["image", "assets/images/media/Bt-logo.png", "link", "https://news.nus.edu.sg/sites/default/files/resources/news/2019/2019-09/2019-09-26/POLYBEE-bt-26sep-p2.pdf"], ["image", "assets/images/media/Straits_Times_Logo.png", "link", "https://www.straitstimes.com/singapore/buzz-over-drones-that-help-with-pollination"], ["image", "assets/images/media/money_fm.png", "link", "https://www.straitstimes.com/business/money-fm-podcast-polybee-the-future-of-agriculture"], ["image", "assets/images/media/slingshot.png", "description", "Global Top 100 finalist (from 2500+ participants)"], ["image", "assets/images/media/lky_businessplan.png", "description", "Global top 50 finalist (from  850+ participants)"], ["image", "assets/images/media/rsz_socialimpact.png", "description", "Global top 10 finalist (from 100+ participants)"]],
      template: function MediaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Media coverage.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-media-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-media-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-media-tile", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-media-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-media-tile", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-media-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_1__["MediaTileComponent"]],
      styles: [".col-md[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWRpYS9tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIiwiLmNvbC1tZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-media',
          templateUrl: './media.component.html',
          styleUrls: ['./media.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/partners/partners.component.ts":
  /*!************************************************!*\
    !*** ./src/app/partners/partners.component.ts ***!
    \************************************************/

  /*! exports provided: PartnersComponent */

  /***/
  function srcAppPartnersPartnersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnersComponent", function () {
      return PartnersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/img-text-vertical/img-text-vertical.component */
    "./src/app/components/img-text-vertical/img-text-vertical.component.ts");

    var PartnersComponent = /*#__PURE__*/function () {
      function PartnersComponent() {
        _classCallCheck(this, PartnersComponent);
      }

      _createClass(PartnersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PartnersComponent;
    }();

    PartnersComponent.ɵfac = function PartnersComponent_Factory(t) {
      return new (t || PartnersComponent)();
    };

    PartnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PartnersComponent,
      selectors: [["app-partners"]],
      decls: 10,
      vars: 0,
      consts: [[1, "partners", "my-auto"], [1, "text-center"], [1, "row", "equal"], [1, "col-md"], ["image", "assets/images/partners/SFA.png", "text", "The Agency supports us with horticultural know-how and its network of local growers."], ["image", "assets/images/partners/temasek-foundation.png", "text", "The Foundation supports our development of autonomous pollination methods for indoor farming."], ["image", "assets/images/partners/NUS_Logo.png", "text", "We are alumni of NUSGRIP, the university's deep-tech accelerator."]],
      template: function PartnersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Partners.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-img-text-vertical", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-img-text-vertical", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-img-text-vertical", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ImgTextVerticalComponent"]],
      styles: [".partners[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 60vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydG5lcnMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA2MHZoO1xufVxuIiwiLnBhcnRuZXJzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogNjB2aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-partners',
          templateUrl: './partners.component.html',
          styleUrls: ['./partners.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pilot-trails/pilot-trails.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pilot-trails/pilot-trails.component.ts ***!
    \********************************************************/

  /*! exports provided: PilotTrailsComponent */

  /***/
  function srcAppPilotTrailsPilotTrailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PilotTrailsComponent", function () {
      return PilotTrailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PilotTrailsComponent = /*#__PURE__*/function () {
      function PilotTrailsComponent() {
        _classCallCheck(this, PilotTrailsComponent);
      }

      _createClass(PilotTrailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PilotTrailsComponent;
    }();

    PilotTrailsComponent.ɵfac = function PilotTrailsComponent_Factory(t) {
      return new (t || PilotTrailsComponent)();
    };

    PilotTrailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PilotTrailsComponent,
      selectors: [["app-pilot-trails"]],
      decls: 9,
      vars: 0,
      consts: [[1, "hero"], [1, "hero__title"], [1, "cube"]],
      template: function PilotTrailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " We are announcing a global call for pilot trials. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".pilot[_ngcontent-%COMP%] {\n  height: 50vh;\n  background: #3399ff;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background-color: #3399ff;\n  position: relative;\n  height: 50vh;\n  overflow: hidden;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1;\n}\n\n.cube[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80vh;\n  left: 45vw;\n  width: 10px;\n  height: 10px;\n  border: solid 1px #003298;\n  transform-origin: top left;\n  transform: scale(0) rotate(0deg) translate(-50%, -50%);\n  -webkit-animation: cube 12s ease-in forwards infinite;\n          animation: cube 12s ease-in forwards infinite;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(2n) {\n  border-color: #0051f4;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  left: 25vw;\n  top: 40vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  left: 75vw;\n  top: 50vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  left: 90vw;\n  top: 10vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  left: 10vw;\n  top: 85vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s;\n  left: 50vw;\n  top: 10vh;\n}\n\n@-webkit-keyframes cube {\n  from {\n    transform: scale(0) rotate(0deg) translate(-50%, -50%);\n    opacity: 1;\n  }\n  to {\n    transform: scale(20) rotate(960deg) translate(-50%, -50%);\n    opacity: 0;\n  }\n}\n\n@keyframes cube {\n  from {\n    transform: scale(0) rotate(0deg) translate(-50%, -50%);\n    opacity: 1;\n  }\n  to {\n    transform: scale(20) rotate(960deg) translate(-50%, -50%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3BpbG90LXRyYWlscy9waWxvdC10cmFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BpbG90LXRyYWlscy9waWxvdC10cmFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzREFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElFO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRko7O0FES0U7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNISjs7QURNRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0pKOztBRFFBO0VBQ0U7SUFDRSxzREFBQTtJQUNBLFVBQUE7RUNMRjtFRE9BO0lBQ0UseURBQUE7SUFDQSxVQUFBO0VDTEY7QUFDRjs7QURIQTtFQUNFO0lBQ0Usc0RBQUE7SUFDQSxVQUFBO0VDTEY7RURPQTtJQUNFLHlEQUFBO0lBQ0EsVUFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9waWxvdC10cmFpbHMvcGlsb3QtdHJhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbG90IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kOiByZ2IoNTEsIDE1MywgMjU1KTtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE1MywgMjU1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZXJvX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jdWJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwdmg7XG4gIGxlZnQ6IDQ1dnc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtlbigjMDA0MGMxLCA4JSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogY3ViZSAxMnMgZWFzZS1pbiBmb3J3YXJkcyBpbmZpbml0ZTtcblxuICAmOm50aC1jaGlsZCgybikge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMDA0MGMxLCAxMCUpO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgbGVmdDogMjV2dztcbiAgICB0b3A6IDQwdmg7XG4gIH1cblxuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBsZWZ0OiA3NXZ3O1xuICAgIHRvcDogNTB2aDtcbiAgfVxuXG4gICY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIGxlZnQ6IDkwdnc7XG4gICAgdG9wOiAxMHZoO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gICAgbGVmdDogMTB2dztcbiAgICB0b3A6IDg1dmg7XG4gIH1cblxuICAmOm50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA4cztcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIHRvcDogMTB2aDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGN1YmUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyMCkgcm90YXRlKDk2MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiIsIi5waWxvdCB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZDogIzMzOTlmZjtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OWZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlcm9fX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmN1YmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODB2aDtcbiAgbGVmdDogNDV2dztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMzI5ODtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiBjdWJlIDEycyBlYXNlLWluIGZvcndhcmRzIGluZmluaXRlO1xufVxuLmN1YmU6bnRoLWNoaWxkKDJuKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwNTFmNDtcbn1cbi5jdWJlOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGxlZnQ6IDI1dnc7XG4gIHRvcDogNDB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGxlZnQ6IDc1dnc7XG4gIHRvcDogNTB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGxlZnQ6IDkwdnc7XG4gIHRvcDogMTB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gIGxlZnQ6IDEwdnc7XG4gIHRvcDogODV2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogOHM7XG4gIGxlZnQ6IDUwdnc7XG4gIHRvcDogMTB2aDtcbn1cblxuQGtleWZyYW1lcyBjdWJlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMjApIHJvdGF0ZSg5NjBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PilotTrailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pilot-trails',
          templateUrl: './pilot-trails.component.html',
          styleUrls: ['./pilot-trails.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section1/section1.component.ts":
  /*!************************************************!*\
    !*** ./src/app/section1/section1.component.ts ***!
    \************************************************/

  /*! exports provided: Section1Component */

  /***/
  function srcAppSection1Section1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Section1Component", function () {
      return Section1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/img-text-vertical/img-text-vertical.component */
    "./src/app/components/img-text-vertical/img-text-vertical.component.ts");

    var Section1Component = /*#__PURE__*/function () {
      function Section1Component() {
        _classCallCheck(this, Section1Component);
      }

      _createClass(Section1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Section1Component;
    }();

    Section1Component.ɵfac = function Section1Component_Factory(t) {
      return new (t || Section1Component)();
    };

    Section1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Section1Component,
      selectors: [["app-section1"]],
      decls: 10,
      vars: 0,
      consts: [[1, "section1", "my-auto"], [1, "text-center", "text-white"], [1, "row"], [1, "col-md"], ["image", "assets/images/industryProblems/seed.png", "text", "A $50 Bn industry entirely depends on hand pollination for production.", "title", "Hybrid Seeds"], ["image", "assets/images/industryProblems/vertical-farming.png", "text", "A scalable solution for pollination is the industry's biggest bottleneck.", "title", "Indoor Vertical Farming"], ["image", "assets/images/industryProblems/greenhouse.png", "text", "Not all growers are blessed with easy and affordable access to bees.", "title", "Greenhouses"]],
      template: function Section1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pollination has been left to chance for too long. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-img-text-vertical", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-img-text-vertical", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-img-text-vertical", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ImgTextVerticalComponent"]],
      styles: [".section1[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 70vh;\n  background-color: #3399ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3NlY3Rpb24xL3NlY3Rpb24xLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uMS9zZWN0aW9uMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uMS9zZWN0aW9uMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTUzLCAyNTUpO1xufVxuIiwiLnNlY3Rpb24xIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlmZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Section1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section1',
          templateUrl: './section1.component.html',
          styleUrls: ['./section1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section2/section2.component.ts":
  /*!************************************************!*\
    !*** ./src/app/section2/section2.component.ts ***!
    \************************************************/

  /*! exports provided: Section2Component */

  /***/
  function srcAppSection2Section2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Section2Component", function () {
      return Section2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/solution-component/solution-component.component */
    "./src/app/components/solution-component/solution-component.component.ts");

    var Section2Component = /*#__PURE__*/function () {
      function Section2Component() {
        _classCallCheck(this, Section2Component);
      }

      _createClass(Section2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Section2Component;
    }();

    Section2Component.ɵfac = function Section2Component_Factory(t) {
      return new (t || Section2Component)();
    };

    Section2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Section2Component,
      selectors: [["app-section2"]],
      decls: 6,
      vars: 0,
      consts: [[1, "section2"], [1, "text-center"], ["image", "assets/banner.jpg", "title", "Grow more from less.", "subtitle1", "Greenhouses and vertical farming", "para1", "Increase and track yields accurately through precision pollination to get the most out of every crop.", "para2", "Enhance quality of produce with higher quality of pollination. Our method of self-pollination promises to maximize the degree of fertilization of every flower, leading to lower rejection rates.", "para3", "We are offering pilots for pollination of strawberries, tomatoes, pepper and eggplant in greenhouses and vertical farms."], ["image", "assets/images/drones.gif", "imgRight", "true", "title", " Accelerate hybrid seed development.", "subtitle1", "Autonomous self-pollination", "para1", "Increase self efficiency and eliminate the inconsistencies of manual and bee pollination.", "subtitle2", "Autonomous cross pollination in hybridization", "para2", "Valuable germplasm is lost each time cross-pollination is done improperly. With autonomous miniature drones, perform targeted crosses at just the right time to obtain clear outcomes for your trials. ", "para3", "We are offering pilots for pollination of strawberries, tomatoes, pepper and eggplant in greenhouses and vertical farms."], ["image", "assets/images/mac-fullpage.png", "title", "Lightning fast workflow with phenobee", "para1", "Measure plant phenotypes such as vigor, height and yields. Powered by cloud technology and bleeding edge computer vision and AI."]],
      template: function Section2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Solutions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-solution-component", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-solution-component", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-solution-component", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_1__["SolutionComponentComponent"]],
      styles: [".section2[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uMi9zZWN0aW9uMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbjIvc2VjdGlvbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbjIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA3MHZoO1xufVxuIiwiLnNlY3Rpb24yIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogNzB2aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Section2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section2',
          templateUrl: './section2.component.html',
          styleUrls: ['./section2.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rohan/Desktop/Polybee_files/polybeeWebsite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map