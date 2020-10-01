(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
// const routes: Routes = [{ path: 'contact', component: ContactComponent }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section1/section1.component */ "./src/app/section1/section1.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section2/section2.component */ "./src/app/section2/section2.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pilot-trails/pilot-trails.component */ "./src/app/pilot-trails/pilot-trails.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");















const _c0 = function () { return { "background-image": "url(assets/images/illustration-section-01.svg)" }; };
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
})(Direction || (Direction = {}));
class AppComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.title = 'polybeeWebsite';
        this.sideBarShown = false;
        this.headerShown = true;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    }
    ngAfterViewInit() {
        // setting up observbles to listen for up/down scroll events
        const scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => window.pageYOffset), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        // scroll$.subscribe((v) => console.log(v));
        const scrollUp$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((direction) => direction === Direction.Up));
        const scrollDown$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((direction) => direction === Direction.Down));
        scrollDown$.subscribe((_) => {
            this.headerShown = false;
            if (this.sideBarShown) {
                this.toggleSidebar();
            }
        });
        scrollUp$.subscribe((_) => {
            this.headerShown = true;
        });
    }
    toggleSidebar() {
        this.sidebarService.toggle(false, 'right-sidebar');
        this.sideBarShown = !this.sideBarShown;
    }
    scroll(el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.toggleSidebar();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 45, vars: 4, consts: [["fixed", "", 3, "ngStyle"], [1, "row"], [1, "col-6", "col-sm-2"], ["src", "assets/logo/logo_white.png", "alt", "", 1, "img-fluid", "float-left"], ["size", "small"], [3, "icon", "click"], ["right", "", "tag", "right-sidebar", "state", "collapsed", "fixed", ""], [1, "sidebarMenuItem", 3, "click"], ["hero", ""], ["section1", ""], ["section2", ""], ["partners", ""], ["media", ""], ["pilot", ""], ["contact", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_nb_action_click_6_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-sidebar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.scroll(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.scroll(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return ctx.scroll(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Media coverage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return ctx.scroll(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-section1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-section2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-pilot-trails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@toggle", ctx.headerShown ? "showHeader" : "hideHeader")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.sideBarShown ? "close-outline" : "menu-outline");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_9__["Section2Component"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_10__["PartnersComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_11__["MediaComponent"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_12__["PilotTrailsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]], styles: ["nb-layout-header[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-color: black;\n}\n\nnb-layout-column[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.sidebarMenuItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 20px;\n  border-bottom: 2px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0hGOztBREtBO0VBQ0UsU0FBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBRUEsa0NBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5iLWxheW91dC1oZWFkZXIge1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9pbWFnZXMvaWxsdXN0cmF0aW9uLXNlY3Rpb24tMDEuc3ZnXCIpO1xuLy8gfVxuXG5uYi1sYXlvdXQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5uYi1sYXlvdXQtY29sdW1uIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZWJhck1lbnVJdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDUxLCAxNTMsIDI1NSk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG59XG4iLCJuYi1sYXlvdXQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbm5iLWxheW91dC1jb2x1bW4ge1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyTWVudUl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('toggle', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('showHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, visibility: 'visible' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hideHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, visibility: 'hidden' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('showHeader <=> hideHeader', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms')]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('toggle', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('showHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, visibility: 'visible' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hideHeader', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, visibility: 'hidden' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('showHeader <=> hideHeader', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms')]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section1/section1.component */ "./src/app/section1/section1.component.ts");
/* harmony import */ var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/img-text-vertical/img-text-vertical.component */ "./src/app/components/img-text-vertical/img-text-vertical.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./section2/section2.component */ "./src/app/section2/section2.component.ts");
/* harmony import */ var _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pilot-trails/pilot-trails.component */ "./src/app/pilot-trails/pilot-trails.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var _media_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./media/media-tile/media-tile.component */ "./src/app/media/media-tile/media-tile.component.ts");
/* harmony import */ var _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/solution-component/solution-component.component */ "./src/app/components/solution-component/solution-component.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
        _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"],
        _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__["ImgTextVerticalComponent"],
        _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__["Section2Component"],
        _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__["PilotTrailsComponent"],
        _partners_partners_component__WEBPACK_IMPORTED_MODULE_12__["PartnersComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _media_media_component__WEBPACK_IMPORTED_MODULE_14__["MediaComponent"],
        _media_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_15__["MediaTileComponent"],
        _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_16__["SolutionComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                    _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"],
                    _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__["ImgTextVerticalComponent"],
                    _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__["Section2Component"],
                    _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__["PilotTrailsComponent"],
                    _partners_partners_component__WEBPACK_IMPORTED_MODULE_12__["PartnersComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                    _media_media_component__WEBPACK_IMPORTED_MODULE_14__["MediaComponent"],
                    _media_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_15__["MediaTileComponent"],
                    _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_16__["SolutionComponentComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_17__["ScullyLibModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/img-text-vertical/img-text-vertical.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/img-text-vertical/img-text-vertical.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ImgTextVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgTextVerticalComponent", function() { return ImgTextVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { height: a0 }; };
class ImgTextVerticalComponent {
    // text =
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    // text = 'Lorem ipsum dolor sit amet';
    constructor() {
        this.text = '';
        this.title = '';
        this.imgHeight = '100px';
    }
    ngOnInit() { }
}
ImgTextVerticalComponent.ɵfac = function ImgTextVerticalComponent_Factory(t) { return new (t || ImgTextVerticalComponent)(); };
ImgTextVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgTextVerticalComponent, selectors: [["app-img-text-vertical"]], inputs: { image: "image", text: "text", title: "title", imgHeight: "imgHeight" }, decls: 10, vars: 6, consts: [["data-aos", "zoom-in", 1, "customcard", "d-flex", "justify-content-center"], [1, "row"], [1, "col-12", "d-flex", "justify-content-center", "text-center"], ["alt", "", 1, "img-fluid", 3, "src", "ngStyle"], [1, "col-12", "text-center"], [1, "description"]], template: function ImgTextVerticalComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.imgHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".imgTextVertical[_ngcontent-%COMP%] {\n  border: 2px solid #3399ff;\n  margin-bottom: 8px;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n.customcard[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #fdfbfb;\n  padding: 10px;\n  margin-bottom: 20px;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLHdDQUFBO0FDRUY7O0FEQ0E7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbWctdGV4dC12ZXJ0aWNhbC9pbWctdGV4dC12ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdUZXh0VmVydGljYWwge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTEsIDE1MywgMjU1KTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuaW1nIHtcbiAgLy8gd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmN1c3RvbWNhcmQge1xuICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiKDUxLCAxNTMsIDI1NSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmJmYjtcbiAgLy8gYm94LXNoYWRvdzogMjBweCAyMHB4IDMzcHggI2UzZTNlMywgLTIwcHggLTIwcHggMzNweCAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICAvLyBoZWlnaHQ6IDEwMCU7XG59XG4iLCIuaW1nVGV4dFZlcnRpY2FsIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzMzOTlmZjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pbWcge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY3VzdG9tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmJmYjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgTextVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-img-text-vertical',
                templateUrl: './img-text-vertical.component.html',
                styleUrls: ['./img-text-vertical.component.scss'],
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imgHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/solution-component/solution-component.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/solution-component/solution-component.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SolutionComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponentComponent", function() { return SolutionComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SolutionComponentComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SolutionComponentComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "text-align": a0 }; };
const _c2 = function (a0) { return { color: a0 }; };
class SolutionComponentComponent {
    // @Input() padImg: boolean = true;
    // imgLeft = true;
    // image = 'assets/images/mac-fullpage.png';
    constructor() {
        this.title = '';
        this.para1 = '';
        this.para2 = '';
        this.para3 = '';
        this.subtitle1 = '';
        this.subtitle2 = '';
        this.subtitle3 = '';
        this.imgRight = false;
        this.blueBack = false;
    }
    ngOnInit() { }
}
SolutionComponentComponent.ɵfac = function SolutionComponentComponent_Factory(t) { return new (t || SolutionComponentComponent)(); };
SolutionComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolutionComponentComponent, selectors: [["app-solution-component"]], inputs: { image: "image", title: "title", para1: "para1", para2: "para2", para3: "para3", subtitle1: "subtitle1", subtitle2: "subtitle2", subtitle3: "subtitle3", imgRight: "imgRight", blueBack: "blueBack" }, decls: 19, vars: 37, consts: [[1, "row", "solution", 3, "ngStyle"], [1, "col-md-6", "solnImageContainer", 3, "ngClass", "ngStyle"], ["class", "img-fluid solnImage", "alt", "", "data-aos", "fade-left", 3, "src", 4, "ngIf"], ["class", "img-fluid solnImage", "alt", "", "data-aos", "fade-right", 3, "src", 4, "ngIf"], [1, "col-md-6", "solnContent"], [1, "title", 3, "ngStyle"], [1, "subtitle", 3, "ngStyle"], [1, "para", 3, "ngStyle"], ["alt", "", "data-aos", "fade-left", 1, "img-fluid", "solnImage", 3, "src"], ["alt", "", "data-aos", "fade-right", 1, "img-fluid", "solnImage", 3, "src"]], template: function SolutionComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SolutionComponentComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SolutionComponentComponent_img_3_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.blueBack ? "rgb(51, 153, 255)" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.imgRight ? " order-md-last" : "")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, !ctx.imgRight ? "end" : "start"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.para1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.para2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c2, ctx.blueBack ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.para3, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".solnImageContainer[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  overflow: hidden;\n}\n\n.solution[_ngcontent-%COMP%] {\n  min-height: 90vh;\n  padding: 40px;\n  display: flex;\n  justify-items: center;\n  place-items: center;\n}\n\n.solnImage[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n.para[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  font-size: large;\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvc29sdXRpb24tY29tcG9uZW50L3NvbHV0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb2x1dGlvbi1jb21wb25lbnQvc29sdXRpb24tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsa0JBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUVFLGtCQUFBO0FDRkY7O0FESUE7RUFDRSxTQUFBO0FDREY7O0FESUE7RUFDRSx3Q0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29sdXRpb24tY29tcG9uZW50L3NvbHV0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2xuSW1hZ2VDb250YWluZXIge1xuICAvLyAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAvLyBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAvLyBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zb2x1dGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cbi5zb2xuSW1hZ2Uge1xuICAvLyBib3gtc2hhZG93OiAwIDhweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBhcmEge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbiIsIi5zb2xuSW1hZ2VDb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zb2x1dGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvbG5JbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDYge1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wYXJhIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolutionComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solution-component',
                templateUrl: './solution-component.component.html',
                styleUrls: ['./solution-component.component.scss'],
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], para1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], para2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], para3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imgRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blueBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() { }
    openLink(link) {
        window.open(link);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 31, vars: 0, consts: [[1, "contact", 2, "padding", "20px"], [1, "text-center", "text-white"], [1, "row"], [1, "col-md", "centerStuff"], [1, "text-white"], ["href", "https://www.sginnovate.com/apprenticeship/talent"], ["href", "https://www.sginnovate.com/infinityseries/talent"], ["href", "https://www.sginnovate.com/power-x-robotics"], ["href", "https://angel.co/company/polybee/jobs"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " info@polybee.co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "21 Heng Mui Keng Terrace, Singapore 119163");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SGInnovate Summation Program ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SGInnovate Infinity Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SGInnovate PowerX Robotics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Full time roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\nh4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n.centerStuff[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\nli[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBOzs7RUFHRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG5oNCxcbnAsXG5hIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2VudGVyU3R1ZmYge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5saSxcbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLy8gLnJvdyB7XG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuLy8gLmNvbC1tZCB7XG4vLyAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuLy8gfVxuIiwiYSB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG5oNCxcbnAsXG5hIHtcbiAgZm9udC1mYW1pbHk6IFwiSUJNIFBsZXggU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2VudGVyU3R1ZmYge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5saSxcbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function () { return { backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/banner.png)" }; };
class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 6, vars: 2, consts: [[1, "hero", 3, "ngStyle"], [1, "impactText"], [2, "color", "white"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grow more from less ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Autonomous drones for precision pollination in indoor farming. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".hero[_ngcontent-%COMP%] {\n  height: 80vh;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.impactText[_ngcontent-%COMP%] {\n  font-size: 8vh;\n  line-height: 8vh;\n  text-align: center;\n  font-family: \"museo-sans-title\";\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFFQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7XG4gIC8vICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbXBhY3RUZXh0IHtcbiAgZm9udC1zaXplOiA4dmg7XG4gIGxpbmUtaGVpZ2h0OiA4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwibXVzZW8tc2Fucy10aXRsZVwiO1xuICAvLyBjb2xvcjogcmdiKDUxLCAxNTMsIDI1NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi5oZXJvIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltcGFjdFRleHQge1xuICBmb250LXNpemU6IDh2aDtcbiAgbGluZS1oZWlnaHQ6IDh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJtdXNlby1zYW5zLXRpdGxlXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/media/media-tile/media-tile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/media/media-tile/media-tile.component.ts ***!
  \**********************************************************/
/*! exports provided: MediaTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTileComponent", function() { return MediaTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




function MediaTileComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.description, " ");
} }
function MediaTileComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { cursor: a0 }; };
class MediaTileComponent {
    constructor() {
        this.link = null;
        this.description = null;
    }
    ngOnInit() { }
    openLink() {
        if (this.link) {
            window.open(this.link, 'blank');
        }
    }
}
MediaTileComponent.ɵfac = function MediaTileComponent_Factory(t) { return new (t || MediaTileComponent)(); };
MediaTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaTileComponent, selectors: [["app-media-tile"]], inputs: { image: "image", link: "link", description: "description" }, decls: 4, vars: 6, consts: [["data-aos", "fade-up", 1, "customcard", "d-flex", "align-items-center", "justify-content-center", 3, "ngStyle", "click"], ["alt", "", 1, "img-fluid", 3, "src"], ["class", "mediaAddOn mediaDescription text-center", 4, "ngIf"], ["class", "mediaAddOn", "nbButton", "", "style", "background-color: white; border: 0px", "size", "large", "outline", "", "target", "_blank", 3, "href", 4, "ngIf"], [1, "mediaAddOn", "mediaDescription", "text-center"], ["nbButton", "", "size", "large", "outline", "", "target", "_blank", 1, "mediaAddOn", 2, "background-color", "white", "border", "0px", 3, "href"], ["icon", "external-link-outline"]], template: function MediaTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaTileComponent_Template_div_click_0_listener() { return ctx.openLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MediaTileComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MediaTileComponent_a_3_Template, 3, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.link ? "pointer" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"]], styles: [".customcard[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  background: #fdfbfb;\n  padding: 10px;\n  height: 270px;\n  width: 300px;\n  margin-bottom: 20px;\n}\n\n.mediaImage[_ngcontent-%COMP%] {\n  border: 2px solid #3399ff;\n}\n\n.mediaAddOn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mediaDescription[_ngcontent-%COMP%] {\n  font-size: large;\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL21lZGlhL21lZGlhLXRpbGUvbWVkaWEtdGlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVkaWEvbWVkaWEtdGlsZS9tZWRpYS10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUVFLHlCQUFBO0FDREY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0pGOztBRE1BO0VBQ0UsZ0JBQUE7RUFDQSx3Q0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEvbWVkaWEtdGlsZS9tZWRpYS10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZiZmI7XG4gIC8vIGJveC1zaGFkb3c6IDIwcHggMjBweCAzM3B4ICNlM2UzZTMsIC0yMHB4IC0yMHB4IDMzcHggI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1lZGlhSW1hZ2Uge1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1MSwgMTUzLCAyNTUpO1xuXG4gIC8vIHRvcDogMjUlO1xuICAvLyBib3R0b206IDI1JTtcbn1cblxuLm1lZGlhQWRkT24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubWVkaWFEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBcIklCTSBQbGV4IFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbiIsIi5jdXN0b21jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGZiZmI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1lZGlhSW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzM5OWZmO1xufVxuXG4ubWVkaWFBZGRPbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1lZGlhRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBTYW5zXCIsIHNhbnMtc2VyaWY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media-tile',
                templateUrl: './media-tile.component.html',
                styleUrls: ['./media-tile.component.scss'],
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-tile/media-tile.component */ "./src/app/media/media-tile/media-tile.component.ts");



class MediaComponent {
    constructor() { }
    ngOnInit() {
    }
}
MediaComponent.ɵfac = function MediaComponent_Factory(t) { return new (t || MediaComponent)(); };
MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaComponent, selectors: [["app-media"]], decls: 17, vars: 0, consts: [[1, "mediaCov", 2, "padding", "10px"], [1, "text-center", "text-white"], [1, "container"], [1, "row"], [1, "col-md-4", "centerStuff"], ["image", "assets/images/media/Bt-logo.png", "link", "https://news.nus.edu.sg/sites/default/files/resources/news/2019/2019-09/2019-09-26/POLYBEE-bt-26sep-p2.pdf"], ["image", "assets/images/media/Straits_Times_Logo.png", "link", "https://www.straitstimes.com/singapore/buzz-over-drones-that-help-with-pollination"], ["image", "assets/images/media/money_fm.png", "link", "https://www.straitstimes.com/business/money-fm-podcast-polybee-the-future-of-agriculture"], ["image", "assets/images/media/slingshot.png", "description", "Global top 100 finalist"], ["image", "assets/images/media/lky_businessplan.png", "description", "Global top 50 finalist"], ["image", "assets/images/media/rsz_socialimpact.png", "description", "Global top 4 finalist"]], template: function MediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Media and recognition");
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
    } }, directives: [_media_tile_media_tile_component__WEBPACK_IMPORTED_MODULE_1__["MediaTileComponent"]], styles: [".col-md[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  margin-bottom: 10px;\n}\n\n.centerStuff[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWRpYS9tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEvbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jZW50ZXJTdHVmZiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIuY29sLW1kIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jZW50ZXJTdHVmZiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media',
                templateUrl: './media.component.html',
                styleUrls: ['./media.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/img-text-vertical/img-text-vertical.component */ "./src/app/components/img-text-vertical/img-text-vertical.component.ts");



class PartnersComponent {
    constructor() { }
    ngOnInit() {
    }
}
PartnersComponent.ɵfac = function PartnersComponent_Factory(t) { return new (t || PartnersComponent)(); };
PartnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartnersComponent, selectors: [["app-partners"]], decls: 12, vars: 0, consts: [[1, "partners", "my-auto"], [1, "text-center", "text-white"], [1, "row", "equal"], [1, "col-md"], ["image", "assets/images/partners/SFA.png", "text", "The Agency supports us with horticultural know-how and its network of local growers."], ["image", "assets/images/partners/temasek.jpg", "text", "The Foundation supports our development of autonomous pollination methods for indoor farming."], ["image", "assets/images/partners/NUS_Logo.png", "text", "We are alumni of NUSGRIP, the university's deep-tech accelerator."], ["image", "assets/images/media/SGInnovate_Logo.jpg", "text", "We work with SGInnovate on its talent programs like Summation and Infinity."]], template: function PartnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Partners");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-img-text-vertical", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ImgTextVerticalComponent"]], styles: [".partners[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 60vh;\n  background-color: #3399ff;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0bmVycyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTUzLCAyNTUpO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuIiwiLnBhcnRuZXJzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlmZjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-partners',
                templateUrl: './partners.component.html',
                styleUrls: ['./partners.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pilot-trails/pilot-trails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pilot-trails/pilot-trails.component.ts ***!
  \********************************************************/
/*! exports provided: PilotTrailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilotTrailsComponent", function() { return PilotTrailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PilotTrailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PilotTrailsComponent.ɵfac = function PilotTrailsComponent_Factory(t) { return new (t || PilotTrailsComponent)(); };
PilotTrailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PilotTrailsComponent, selectors: [["app-pilot-trails"]], decls: 3, vars: 0, consts: [[1, "hero"], [1, "hero__title"]], template: function PilotTrailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " We are announcing a global call for pilot trials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pilot[_ngcontent-%COMP%] {\n  height: 50vh;\n  background: #3399ff;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background-color: #3399ff;\n  position: relative;\n  height: 50vh;\n  overflow: hidden;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 35px;\n  text-align: center;\n  line-height: 35px;\n  z-index: 1;\n}\n\n.cube[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80vh;\n  left: 45vw;\n  width: 10px;\n  height: 10px;\n  border: solid 1px #003298;\n  transform-origin: top left;\n  transform: scale(0) rotate(0deg) translate(-50%, -50%);\n  -webkit-animation: cube 12s ease-in forwards infinite;\n          animation: cube 12s ease-in forwards infinite;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(2n) {\n  border-color: #0051f4;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  left: 25vw;\n  top: 40vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  left: 75vw;\n  top: 50vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  left: 90vw;\n  top: 10vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  left: 10vw;\n  top: 85vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s;\n  left: 50vw;\n  top: 10vh;\n}\n\n@-webkit-keyframes cube {\n  from {\n    transform: scale(0) rotate(0deg) translate(-50%, -50%);\n    opacity: 1;\n  }\n  to {\n    transform: scale(20) rotate(960deg) translate(-50%, -50%);\n    opacity: 0;\n  }\n}\n\n@keyframes cube {\n  from {\n    transform: scale(0) rotate(0deg) translate(-50%, -50%);\n    opacity: 1;\n  }\n  to {\n    transform: scale(20) rotate(960deg) translate(-50%, -50%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3BpbG90LXRyYWlscy9waWxvdC10cmFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BpbG90LXRyYWlscy9waWxvdC10cmFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzREFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElFO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRko7O0FES0U7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNISjs7QURNRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0pKOztBRFFBO0VBQ0U7SUFDRSxzREFBQTtJQUNBLFVBQUE7RUNMRjtFRE9BO0lBQ0UseURBQUE7SUFDQSxVQUFBO0VDTEY7QUFDRjs7QURIQTtFQUNFO0lBQ0Usc0RBQUE7SUFDQSxVQUFBO0VDTEY7RURPQTtJQUNFLHlEQUFBO0lBQ0EsVUFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9waWxvdC10cmFpbHMvcGlsb3QtdHJhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbG90IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kOiByZ2IoNTEsIDE1MywgMjU1KTtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE1MywgMjU1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZXJvX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jdWJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwdmg7XG4gIGxlZnQ6IDQ1dnc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtlbigjMDA0MGMxLCA4JSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogY3ViZSAxMnMgZWFzZS1pbiBmb3J3YXJkcyBpbmZpbml0ZTtcblxuICAmOm50aC1jaGlsZCgybikge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMDA0MGMxLCAxMCUpO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgbGVmdDogMjV2dztcbiAgICB0b3A6IDQwdmg7XG4gIH1cblxuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBsZWZ0OiA3NXZ3O1xuICAgIHRvcDogNTB2aDtcbiAgfVxuXG4gICY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIGxlZnQ6IDkwdnc7XG4gICAgdG9wOiAxMHZoO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gICAgbGVmdDogMTB2dztcbiAgICB0b3A6IDg1dmg7XG4gIH1cblxuICAmOm50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA4cztcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIHRvcDogMTB2aDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGN1YmUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyMCkgcm90YXRlKDk2MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiIsIi5waWxvdCB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZDogIzMzOTlmZjtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OWZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlcm9fX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmN1YmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODB2aDtcbiAgbGVmdDogNDV2dztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMzI5ODtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiBjdWJlIDEycyBlYXNlLWluIGZvcndhcmRzIGluZmluaXRlO1xufVxuLmN1YmU6bnRoLWNoaWxkKDJuKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwNTFmNDtcbn1cbi5jdWJlOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGxlZnQ6IDI1dnc7XG4gIHRvcDogNDB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGxlZnQ6IDc1dnc7XG4gIHRvcDogNTB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGxlZnQ6IDkwdnc7XG4gIHRvcDogMTB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gIGxlZnQ6IDEwdnc7XG4gIHRvcDogODV2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogOHM7XG4gIGxlZnQ6IDUwdnc7XG4gIHRvcDogMTB2aDtcbn1cblxuQGtleWZyYW1lcyBjdWJlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMjApIHJvdGF0ZSg5NjBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PilotTrailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pilot-trails',
                templateUrl: './pilot-trails.component.html',
                styleUrls: ['./pilot-trails.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/section1/section1.component.ts":
/*!************************************************!*\
  !*** ./src/app/section1/section1.component.ts ***!
  \************************************************/
/*! exports provided: Section1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section1Component", function() { return Section1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/img-text-vertical/img-text-vertical.component */ "./src/app/components/img-text-vertical/img-text-vertical.component.ts");



class Section1Component {
    constructor() { }
    ngOnInit() {
    }
}
Section1Component.ɵfac = function Section1Component_Factory(t) { return new (t || Section1Component)(); };
Section1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section1Component, selectors: [["app-section1"]], decls: 10, vars: 0, consts: [[1, "section1", "my-auto"], [1, "text-center", "text-white"], [1, "row"], [1, "col-md"], ["image", "assets/images/industryProblems/seed.png", "text", "A $50 Bn industry entirely depends on hand pollination for production.", "title", "Hybrid Seeds"], ["image", "assets/images/industryProblems/vertical-farming.png", "text", "A scalable solution for pollination is the industry's biggest bottleneck.", "title", "Indoor Vertical Farming"], ["image", "assets/images/industryProblems/greenhouse.jpg", "text", "Not all growers are blessed with easy and affordable access to bees.", "title", "Greenhouses"]], template: function Section1Component_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ImgTextVerticalComponent"]], styles: [".section1[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 70vh;\n  background-color: #3399ff;\n  display: grid;\n  place-items: center;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3NlY3Rpb24xL3NlY3Rpb24xLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uMS9zZWN0aW9uMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uMS9zZWN0aW9uMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTUzLCAyNTUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuLnJvdyB7XG4gIG1hcmdpbjogMDtcbn1cbiIsIi5zZWN0aW9uMSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5ZmY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Section1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section1',
                templateUrl: './section1.component.html',
                styleUrls: ['./section1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/section2/section2.component.ts":
/*!************************************************!*\
  !*** ./src/app/section2/section2.component.ts ***!
  \************************************************/
/*! exports provided: Section2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section2Component", function() { return Section2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/solution-component/solution-component.component */ "./src/app/components/solution-component/solution-component.component.ts");



class Section2Component {
    constructor() { }
    ngOnInit() {
    }
}
Section2Component.ɵfac = function Section2Component_Factory(t) { return new (t || Section2Component)(); };
Section2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section2Component, selectors: [["app-section2"]], decls: 6, vars: 0, consts: [[1, "section2"], [1, "text-center", "text-white"], ["image", "assets/images/solutions/drone_polybee.jpg", "title", "Grow more from less: greenhouses and vertical farming", "para2", "Enhance the quality of your produce with lower rejection rates. Our method of self-pollination promises to maximize the fertilization of every flower since it is pollinated at just the right time.", "para3", "We are offering pilots for pollination of strawberries, tomatoes, pepper and eggplant in greenhouses and vertical farms.", "blueBack", "true"], ["image", "assets/images/solutions/bayer-demo.gif", "imgRight", "true", "title", " Accelerate hybrid seed development", "subtitle1", "Autonomous self-pollination", "para1", "Increase self efficiency and eliminate the inconsistencies of manual and bee pollination in pure line development.", "subtitle2", "Autonomous cross pollination in hybridization", "para2", "Valuable germplasm is lost each time cross-pollination is done improperly. With autonomous miniature drones, perform targeted crosses at just the right time to obtain clear outcomes for your trials. ", "blueBack", "true"], ["image", "assets/images/solutions/mac-fullpage.png", "title", "Make faster and better breeding decisions with Phenobee", "subtitle1", "High-throughput data collection", "para1", "With our autonomous drones, collect high-res visual data and eliminate cost and subjectivity of manual measurements.", "subtitle2", "Phenobee: digital phenotyping platform", "para2", "Measure, visualize and compare plant traits from the images using bleeding-edge AI and computer vision.", "para3", "Currently, we are offering phenotyping services for watermelon, tomato, pepper and cucumber.", "blueBack", "true"]], template: function Section2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-solution-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-solution-component", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-solution-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_solution_component_solution_component_component__WEBPACK_IMPORTED_MODULE_1__["SolutionComponentComponent"]], styles: [".section2[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uMi9zZWN0aW9uMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24yIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiIsIi5zZWN0aW9uMiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Section2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section2',
                templateUrl: './section2.component.html',
                styleUrls: ['./section2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rohan/Desktop/Polybee_files/polybeeWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map