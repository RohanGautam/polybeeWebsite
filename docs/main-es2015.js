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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _section1_section1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section1/section1.component */ "./src/app/section1/section1.component.ts");
/* harmony import */ var _section2_section2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section2/section2.component */ "./src/app/section2/section2.component.ts");
/* harmony import */ var _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pilot-trails/pilot-trails.component */ "./src/app/pilot-trails/pilot-trails.component.ts");









const _c0 = function () { return { "background-image": "url(assets/images/illustration-section-01.svg)" }; };
class AppComponent {
    constructor() {
        this.title = 'polybeeWebsite';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 2, consts: [[3, "ngStyle"], [1, "row"], [1, "col-6", "col-sm-2"], ["src", "assets/logo/logo_banner.png", "alt", "", 1, "img-fluid", "float-left"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-section1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-section2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pilot-trails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_5__["Section1Component"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_6__["Section2Component"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_7__["PilotTrailsComponent"]], styles: ["nb-layout-header[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5iLWxheW91dC1oZWFkZXIge1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9pbWFnZXMvaWxsdXN0cmF0aW9uLXNlY3Rpb24tMDEuc3ZnXCIpO1xuLy8gfVxuXG5uYi1sYXlvdXQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiIsIm5iLWxheW91dC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"], _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__["ImgTextVerticalComponent"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__["Section2Component"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__["PilotTrailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _section1_section1_component__WEBPACK_IMPORTED_MODULE_8__["Section1Component"], _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_9__["ImgTextVerticalComponent"], _section2_section2_component__WEBPACK_IMPORTED_MODULE_10__["Section2Component"], _pilot_trails_pilot_trails_component__WEBPACK_IMPORTED_MODULE_11__["PilotTrailsComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
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


class ImgTextVerticalComponent {
    // text =
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    // text = 'Lorem ipsum dolor sit amet';
    constructor() {
        this.title = '';
    }
    ngOnInit() { }
}
ImgTextVerticalComponent.ɵfac = function ImgTextVerticalComponent_Factory(t) { return new (t || ImgTextVerticalComponent)(); };
ImgTextVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImgTextVerticalComponent, selectors: [["app-img-text-vertical"]], inputs: { image: "image", title: "title", text: "text" }, decls: 10, vars: 3, consts: [["data-aos", "zoom-in", 1, "customcard"], [1, "row"], [1, "col-12", "d-flex", "justify-content-center", "text-center"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "col-12", "text-center"], [1, "description"]], template: function ImgTextVerticalComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, styles: [".imgTextVertical[_ngcontent-%COMP%] {\n  border: 2px solid #3399ff;\n  margin-bottom: 8px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-bottom: 8px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.customcard[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #fdfbfb;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUdFLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1nLXRleHQtdmVydGljYWwvaW1nLXRleHQtdmVydGljYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nVGV4dFZlcnRpY2FsIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDUxLCAxNTMsIDI1NSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3VzdG9tY2FyZCB7XG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvLyBib3JkZXI6IDJweCBzb2xpZCByZ2IoNTEsIDE1MywgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmRmYmZiO1xuICAvLyBib3gtc2hhZG93OiAyMHB4IDIwcHggMzNweCAjZTNlM2UzLCAtMjBweCAtMjBweCAzM3B4ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4iLCIuaW1nVGV4dFZlcnRpY2FsIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzMzOTlmZjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY3VzdG9tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZkZmJmYjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgTextVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-img-text-vertical',
                templateUrl: './img-text-vertical.component.html',
                styleUrls: ['./img-text-vertical.component.scss'],
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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



const _c0 = function () { return { "background-image": "url(assets/images/drones.gif)" }; };
class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 4, vars: 2, consts: [[1, "hero", 3, "ngStyle"], [1, "impactText"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " We are enhancing food security with automation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".hero[_ngcontent-%COMP%] {\n  height: 80vh;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.impactText[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  line-height: 10vh;\n  text-align: center;\n  font-family: \"museo-sans-title\";\n  color: #3399ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7XG4gIC8vICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW1wYWN0VGV4dCB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgbGluZS1oZWlnaHQ6IDEwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwibXVzZW8tc2Fucy10aXRsZVwiO1xuICBjb2xvcjogcmdiKDUxLCAxNTMsIDI1NSk7XG4gIC8vICAgY29sb3I6IHJnYigwLCAxMjgsIDI1NSk7XG59XG4iLCIuaGVybyB7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbXBhY3RUZXh0IHtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBsaW5lLWhlaWdodDogMTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJtdXNlby1zYW5zLXRpdGxlXCI7XG4gIGNvbG9yOiAjMzM5OWZmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.scss']
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
PilotTrailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PilotTrailsComponent, selectors: [["app-pilot-trails"]], decls: 9, vars: 0, consts: [[1, "hero"], [1, "hero__title"], [1, "cube"]], template: function PilotTrailsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".pilot[_ngcontent-%COMP%] {\n  height: 50vh;\n  background: #3399ff;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background-color: #3399ff;\n  position: relative;\n  height: 50vh;\n  overflow: hidden;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1;\n}\n\n.cube[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80vh;\n  left: 45vw;\n  width: 10px;\n  height: 10px;\n  border: solid 1px #003298;\n  transform-origin: top left;\n  transform: scale(0) rotate(0deg) translate(-50%, -50%);\n  -webkit-animation: cube 12s ease-in forwards infinite;\n          animation: cube 12s ease-in forwards infinite;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(2n) {\n  border-color: #0051f4;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  left: 25vw;\n  top: 40vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  left: 75vw;\n  top: 50vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  left: 90vw;\n  top: 10vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  left: 10vw;\n  top: 85vh;\n}\n\n.cube[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 8s;\n          animation-delay: 8s;\n  left: 50vw;\n  top: 10vh;\n}\n\n@-webkit-keyframes cube {\n  from {\n    transform: scale(0) rotate(0deg) translate(-50%, -50%);\n    opacity: 1;\n  }\n  to {\n    transform: scale(20) rotate(960deg) translate(-50%, -50%);\n    opacity: 0;\n  }\n}\n\n@keyframes cube {\n  from {\n    transform: scale(0) rotate(0deg) translate(-50%, -50%);\n    opacity: 1;\n  }\n  to {\n    transform: scale(20) rotate(960deg) translate(-50%, -50%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3BpbG90LXRyYWlscy9waWxvdC10cmFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BpbG90LXRyYWlscy9waWxvdC10cmFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzREFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElFO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRko7O0FES0U7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNISjs7QURNRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0pKOztBRFFBO0VBQ0U7SUFDRSxzREFBQTtJQUNBLFVBQUE7RUNMRjtFRE9BO0lBQ0UseURBQUE7SUFDQSxVQUFBO0VDTEY7QUFDRjs7QURIQTtFQUNFO0lBQ0Usc0RBQUE7SUFDQSxVQUFBO0VDTEY7RURPQTtJQUNFLHlEQUFBO0lBQ0EsVUFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9waWxvdC10cmFpbHMvcGlsb3QtdHJhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbG90IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kOiByZ2IoNTEsIDE1MywgMjU1KTtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE1MywgMjU1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZXJvX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jdWJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwdmg7XG4gIGxlZnQ6IDQ1dnc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGRhcmtlbigjMDA0MGMxLCA4JSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogY3ViZSAxMnMgZWFzZS1pbiBmb3J3YXJkcyBpbmZpbml0ZTtcblxuICAmOm50aC1jaGlsZCgybikge1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMDA0MGMxLCAxMCUpO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgbGVmdDogMjV2dztcbiAgICB0b3A6IDQwdmg7XG4gIH1cblxuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBsZWZ0OiA3NXZ3O1xuICAgIHRvcDogNTB2aDtcbiAgfVxuXG4gICY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIGxlZnQ6IDkwdnc7XG4gICAgdG9wOiAxMHZoO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gICAgbGVmdDogMTB2dztcbiAgICB0b3A6IDg1dmg7XG4gIH1cblxuICAmOm50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA4cztcbiAgICBsZWZ0OiA1MHZ3O1xuICAgIHRvcDogMTB2aDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGN1YmUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyMCkgcm90YXRlKDk2MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiIsIi5waWxvdCB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZDogIzMzOTlmZjtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5OWZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlcm9fX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmN1YmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODB2aDtcbiAgbGVmdDogNDV2dztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMzI5ODtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiBjdWJlIDEycyBlYXNlLWluIGZvcndhcmRzIGluZmluaXRlO1xufVxuLmN1YmU6bnRoLWNoaWxkKDJuKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwNTFmNDtcbn1cbi5jdWJlOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGxlZnQ6IDI1dnc7XG4gIHRvcDogNDB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGxlZnQ6IDc1dnc7XG4gIHRvcDogNTB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGxlZnQ6IDkwdnc7XG4gIHRvcDogMTB2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gIGxlZnQ6IDEwdnc7XG4gIHRvcDogODV2aDtcbn1cbi5jdWJlOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogOHM7XG4gIGxlZnQ6IDUwdnc7XG4gIHRvcDogMTB2aDtcbn1cblxuQGtleWZyYW1lcyBjdWJlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMjApIHJvdGF0ZSg5NjBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"] });
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
Section1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section1Component, selectors: [["app-section1"]], decls: 10, vars: 0, consts: [[1, "section1", "my-auto"], [1, "text-center"], [1, "row"], [1, "col-md"], ["image", "assets/images/seed.png", "text", "A $50 Bn industry entirely depends on hand pollination for production.", "title", "Hybrid Seeds"], ["image", "assets/images/vertical-farming.png", "text", "A scalable solution for pollination is the industry's biggest bottleneck.", "title", "Indoor Vertical Farming"], ["image", "assets/images/greenhouse.png", "text", "Not all growers are blessed with easy and affordable access to bees.", "title", "Greenhouses"]], template: function Section1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pollination has been left to chance for too long.");
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
    } }, directives: [_components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ImgTextVerticalComponent"]], styles: [".section1[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3NlY3Rpb24xL3NlY3Rpb24xLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uMS9zZWN0aW9uMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbjEvc2VjdGlvbjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbjEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA3MHZoO1xufVxuIiwiLnNlY3Rpb24xIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogNzB2aDtcbn0iXX0= */"] });
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
/* harmony import */ var _components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/img-text-vertical/img-text-vertical.component */ "./src/app/components/img-text-vertical/img-text-vertical.component.ts");



class Section2Component {
    constructor() { }
    ngOnInit() {
    }
}
Section2Component.ɵfac = function Section2Component_Factory(t) { return new (t || Section2Component)(); };
Section2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Section2Component, selectors: [["app-section2"]], decls: 10, vars: 0, consts: [[1, "section2"], [1, "text-center"], [1, "row"], [1, "col-md"], ["image", "assets/images/solutions/drone.png", "text", "Small sized autonomous drones for pollination at scale.", "title", "Autonomous Pollination"], ["image", "assets/images/solutions/chip.png", "text", "Software platform to visualize data and predict yields.", "title", "Farming Intelligence"], ["image", "assets/images/solutions/camera.png", "text", "Autonomous collection of high-res visual data in indoor plant breeding operations.", "title", "High-throughput Phenotyping"]], template: function Section2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Solutions.");
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
    } }, directives: [_components_img_text_vertical_img_text_vertical_component__WEBPACK_IMPORTED_MODULE_1__["ImgTextVerticalComponent"]], styles: [".section2[_ngcontent-%COMP%] {\n  padding: 10px;\n  min-height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvaGFuL0Rlc2t0b3AvUG9seWJlZV9maWxlcy9wb2x5YmVlV2Vic2l0ZS9zcmMvYXBwL3NlY3Rpb24yL3NlY3Rpb24yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uMi9zZWN0aW9uMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbjIvc2VjdGlvbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbjIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA3MHZoO1xufVxuIiwiLnNlY3Rpb24yIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLWhlaWdodDogNzB2aDtcbn0iXX0= */"] });
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