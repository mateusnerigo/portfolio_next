module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_About_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/About.module.css */ "./src/styles/components/About.module.css");
/* harmony import */ var _styles_components_About_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_About_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\About.tsx";

function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "about",
    className: `container ${_styles_components_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.aboutContainer}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Contact.tsx":
/*!************************************!*\
  !*** ./src/components/Contact.tsx ***!
  \************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Contact.module.css */ "./src/styles/components/Contact.module.css");
/* harmony import */ var _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\Contact.tsx";

function Contact() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "contact",
    className: `container ${_styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactContainer}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: "Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactFormField,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          placeholder: "How can I call you?",
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactFormField,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          placeholder: "ex: its@me.com",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactFormField,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "message",
          children: "Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "message",
          placeholder: "Let 's talk a little!",
          rows: 5,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Send!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Experiments.tsx":
/*!****************************************!*\
  !*** ./src/components/Experiments.tsx ***!
  \****************************************/
/*! exports provided: Experiments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiments", function() { return Experiments; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Experiments_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Experiments.module.css */ "./src/styles/components/Experiments.module.css");
/* harmony import */ var _styles_components_Experiments_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Experiments_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\Experiments.tsx";

function Experiments() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "experiments",
    className: `container ${_styles_components_Experiments_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.experimentsContainer}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: "Experiments"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Footer.module.css */ "./src/styles/components/Footer.module.css");
/* harmony import */ var _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\Footer.tsx";

function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footerLinks,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        children: "fb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        children: "wpp"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        children: "li"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Info.tsx":
/*!*********************************!*\
  !*** ./src/components/Info.tsx ***!
  \*********************************/
/*! exports provided: Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Info_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Info.module.css */ "./src/styles/components/Info.module.css");
/* harmony import */ var _styles_components_Info_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Info_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\Info.tsx";

function Info() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "home",
    className: `container ${_styles_components_Info_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.infoContainer}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Hey!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Welcome to my site."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Scroll and discover more."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Navbar.module.css */ "./src/styles/components/Navbar.module.css");
/* harmony import */ var _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\Navbar.tsx";


function Navbar() {
  const {
    0: navbarContainerToggle,
    1: setNavbarContainerToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(`${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarContainer}`);
  const {
    0: navbarToggle,
    1: setNavbarToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(`${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar}`);

  function handleScroll() {
    const offset = window.scrollY;

    if (offset > 1) {
      setNavbarContainerToggle(`${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarContainer} ${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fixed}`);
      setNavbarToggle(`${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar} ${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fixed}`);
    } else {
      setNavbarContainerToggle(`${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbarContainer}`);
      setNavbarToggle(`${_styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navbar}`);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: navbarContainerToggle,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: navbarToggle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
            children: "MATEUS NERI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.function,
            children: "web developer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#home",
          children: ["Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#about",
          children: ["About", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#portfolio",
          children: ["Portfolio", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#experiments",
          children: ["Experiments", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_components_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#contact",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Portfolio.tsx":
/*!**************************************!*\
  !*** ./src/components/Portfolio.tsx ***!
  \**************************************/
/*! exports provided: Portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Portfolio.module.css */ "./src/styles/components/Portfolio.module.css");
/* harmony import */ var _styles_components_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\components\\Portfolio.tsx";

function Portfolio() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "portfolio",
    className: `container ${_styles_components_Portfolio_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.porfolioContainer}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: "Portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.tsx");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Info */ "./src/components/Info.tsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/About */ "./src/components/About.tsx");
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Portfolio */ "./src/components/Portfolio.tsx");
/* harmony import */ var _components_Experiments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Experiments */ "./src/components/Experiments.tsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Contact */ "./src/components/Contact.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.tsx");

var _jsxFileName = "D:\\_projetos\\portfolio_next\\src\\pages\\index.tsx";










function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `${_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeContainer}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Mateus Neri | Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Info__WEBPACK_IMPORTED_MODULE_4__["Info"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_About__WEBPACK_IMPORTED_MODULE_5__["About"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Portfolio__WEBPACK_IMPORTED_MODULE_6__["Portfolio"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Experiments__WEBPACK_IMPORTED_MODULE_7__["Experiments"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Contact__WEBPACK_IMPORTED_MODULE_8__["Contact"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/styles/components/About.module.css":
/*!************************************************!*\
  !*** ./src/styles/components/About.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"aboutContainer": "About_aboutContainer__S99Ck"
};


/***/ }),

/***/ "./src/styles/components/Contact.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Contact.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contactContainer": "Contact_contactContainer__3ytgW",
	"contactForm": "Contact_contactForm__1wYyF",
	"contactFormField": "Contact_contactFormField__33END"
};


/***/ }),

/***/ "./src/styles/components/Experiments.module.css":
/*!******************************************************!*\
  !*** ./src/styles/components/Experiments.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experimentsContainer": "Experiments_experimentsContainer__2x-qq"
};


/***/ }),

/***/ "./src/styles/components/Footer.module.css":
/*!*************************************************!*\
  !*** ./src/styles/components/Footer.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footerContainer": "Footer_footerContainer__3AFY1",
	"footerLinks": "Footer_footerLinks__3dw_e"
};


/***/ }),

/***/ "./src/styles/components/Info.module.css":
/*!***********************************************!*\
  !*** ./src/styles/components/Info.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"infoContainer": "Info_infoContainer__ms-ti"
};


/***/ }),

/***/ "./src/styles/components/Navbar.module.css":
/*!*************************************************!*\
  !*** ./src/styles/components/Navbar.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbarContainer": "Navbar_navbarContainer__88j1k",
	"navbar": "Navbar_navbar__2fpDP",
	"fixed": "Navbar_fixed__2w9hW",
	"logo": "Navbar_logo__1n2ZX",
	"name": "Navbar_name__153U_",
	"function": "Navbar_function__3D7W1",
	"underline": "Navbar_underline__26Ids"
};


/***/ }),

/***/ "./src/styles/components/Portfolio.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Portfolio.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"portfolioContainer": "Portfolio_portfolioContainer__3AE2X"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"homeContainer": "Home_homeContainer__1hIhB"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaW1lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9ydGZvbGlvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9BYm91dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db250YWN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaW1lbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9JbmZvLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL05hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Qb3J0Zm9saW8ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFib3V0Iiwic3R5bGVzIiwiYWJvdXRDb250YWluZXIiLCJDb250YWN0IiwiY29udGFjdENvbnRhaW5lciIsImNvbnRhY3RGb3JtIiwiY29udGFjdEZvcm1GaWVsZCIsIkV4cGVyaW1lbnRzIiwiZXhwZXJpbWVudHNDb250YWluZXIiLCJGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJmb290ZXJMaW5rcyIsIkluZm8iLCJpbmZvQ29udGFpbmVyIiwiTmF2YmFyIiwibmF2YmFyQ29udGFpbmVyVG9nZ2xlIiwic2V0TmF2YmFyQ29udGFpbmVyVG9nZ2xlIiwidXNlU3RhdGUiLCJuYXZiYXJDb250YWluZXIiLCJuYXZiYXJUb2dnbGUiLCJzZXROYXZiYXJUb2dnbGUiLCJuYXZiYXIiLCJoYW5kbGVTY3JvbGwiLCJvZmZzZXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZml4ZWQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nbyIsIm5hbWUiLCJmdW5jdGlvbiIsInVuZGVybGluZSIsIlBvcnRmb2xpbyIsInBvcmZvbGlvQ29udGFpbmVyIiwiQXBwIiwiaG9tZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9BYm91dC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPXsgYGNvbnRhaW5lciAke3N0eWxlcy5hYm91dENvbnRhaW5lcn1gIH0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uVGl0bGVcIj5BYm91dDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ29udGFjdC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwiY29udGFjdFwiXHJcbiAgICAgIGNsYXNzTmFtZT17IGBjb250YWluZXIgJHtzdHlsZXMuY29udGFjdENvbnRhaW5lcn1gIH1cclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25UaXRsZVwiPkNvbnRhY3Q8L2gxPlxyXG5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhY3RGb3JtIH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdEZvcm1GaWVsZCB9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBjYW4gSSBjYWxsIHlvdT9cIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdEZvcm1GaWVsZCB9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJleDogaXRzQG1lLmNvbVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWN0Rm9ybUZpZWxkIH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxldCAncyB0YWxrIGEgbGl0dGxlIVwiXHJcbiAgICAgICAgICAgIHJvd3M9ezV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIFNlbmQhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmltZW50cy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmltZW50cygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImV4cGVyaW1lbnRzXCIgY2xhc3NOYW1lPXsgYGNvbnRhaW5lciAke3N0eWxlcy5leHBlcmltZW50c0NvbnRhaW5lcn1gIH0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uVGl0bGVcIj5FeHBlcmltZW50czwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRm9vdGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuZm9vdGVyQ29udGFpbmVyIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmZvb3RlckxpbmtzIH0+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5mYjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPndwcDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPmxpPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9JbmZvLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluZm8oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJob21lXCIgY2xhc3NOYW1lPXsgYGNvbnRhaW5lciAke3N0eWxlcy5pbmZvQ29udGFpbmVyfWAgfT5cclxuICAgICAgPHNwYW4+SGV5ITwvc3Bhbj5cclxuICAgICAgPHNwYW4+V2VsY29tZSB0byBteSBzaXRlLjwvc3Bhbj5cclxuICAgICAgPHNwYW4+U2Nyb2xsIGFuZCBkaXNjb3ZlciBtb3JlLjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9OYXZiYXIubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtuYXZiYXJDb250YWluZXJUb2dnbGUsIHNldE5hdmJhckNvbnRhaW5lclRvZ2dsZV0gPSB1c2VTdGF0ZShgJHtzdHlsZXMubmF2YmFyQ29udGFpbmVyfWApO1xyXG4gIGNvbnN0IFtuYXZiYXJUb2dnbGUsIHNldE5hdmJhclRvZ2dsZV0gPSB1c2VTdGF0ZShgJHtzdHlsZXMubmF2YmFyfWApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICBpZiAob2Zmc2V0ID4gMSkge1xyXG4gICAgICBzZXROYXZiYXJDb250YWluZXJUb2dnbGUoYCR7c3R5bGVzLm5hdmJhckNvbnRhaW5lcn0gJHtzdHlsZXMuZml4ZWR9YClcclxuICAgICAgc2V0TmF2YmFyVG9nZ2xlKGAke3N0eWxlcy5uYXZiYXJ9ICR7c3R5bGVzLmZpeGVkfWApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0TmF2YmFyQ29udGFpbmVyVG9nZ2xlKGAke3N0eWxlcy5uYXZiYXJDb250YWluZXJ9YClcclxuICAgICAgc2V0TmF2YmFyVG9nZ2xlKGAke3N0eWxlcy5uYXZiYXJ9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBuYXZiYXJDb250YWluZXJUb2dnbGUgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBuYXZiYXJUb2dnbGUgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvIH0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBzdHlsZXMubmFtZSB9Pk1BVEVVUyBORVJJPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBzdHlsZXMuZnVuY3Rpb24gfT53ZWIgZGV2ZWxvcGVyPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudW5kZXJsaW5lIH0+PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPlxyXG4gICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy51bmRlcmxpbmUgfT48L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudW5kZXJsaW5lIH0+PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNleHBlcmltZW50c1wiPlxyXG4gICAgICAgICAgICBFeHBlcmltZW50c1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy51bmRlcmxpbmUgfT48L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qb3J0Zm9saW8ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwicG9ydGZvbGlvXCIgY2xhc3NOYW1lPXsgYGNvbnRhaW5lciAke3N0eWxlcy5wb3Jmb2xpb0NvbnRhaW5lcn1gIH0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uVGl0bGVcIj5Qb3J0Zm9saW88L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB7IEluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0luZm8nO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCB7IFBvcnRmb2xpbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9ydGZvbGlvJztcbmltcG9ydCB7IEV4cGVyaW1lbnRzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmltZW50cyc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0JztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZnVuY3Rpb24gQXBwKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgYCR7c3R5bGVzLmhvbWVDb250YWluZXJ9YCB9PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5NYXRldXMgTmVyaSB8IEhvbWU8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2YmFyIC8+XG5cblx0XHRcdDxJbmZvIC8+XG5cdFx0XHQ8QWJvdXQgLz5cblx0XHRcdDxQb3J0Zm9saW8gLz5cblx0XHRcdDxFeHBlcmltZW50cyAvPlxuXHRcdFx0PENvbnRhY3QgLz5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhYm91dENvbnRhaW5lclwiOiBcIkFib3V0X2Fib3V0Q29udGFpbmVyX19TOTlDa1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdENvbnRhaW5lclwiOiBcIkNvbnRhY3RfY29udGFjdENvbnRhaW5lcl9fM3l0Z1dcIixcblx0XCJjb250YWN0Rm9ybVwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1fXzF3WXlGXCIsXG5cdFwiY29udGFjdEZvcm1GaWVsZFwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1GaWVsZF9fMzNFTkRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4cGVyaW1lbnRzQ29udGFpbmVyXCI6IFwiRXhwZXJpbWVudHNfZXhwZXJpbWVudHNDb250YWluZXJfXzJ4LXFxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJDb250YWluZXJcIjogXCJGb290ZXJfZm9vdGVyQ29udGFpbmVyX18zQUZZMVwiLFxuXHRcImZvb3RlckxpbmtzXCI6IFwiRm9vdGVyX2Zvb3RlckxpbmtzX18zZHdfZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb0NvbnRhaW5lclwiOiBcIkluZm9faW5mb0NvbnRhaW5lcl9fbXMtdGlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhckNvbnRhaW5lclwiOiBcIk5hdmJhcl9uYXZiYXJDb250YWluZXJfXzg4ajFrXCIsXG5cdFwibmF2YmFyXCI6IFwiTmF2YmFyX25hdmJhcl9fMmZwRFBcIixcblx0XCJmaXhlZFwiOiBcIk5hdmJhcl9maXhlZF9fMnc5aFdcIixcblx0XCJsb2dvXCI6IFwiTmF2YmFyX2xvZ29fXzFuMlpYXCIsXG5cdFwibmFtZVwiOiBcIk5hdmJhcl9uYW1lX18xNTNVX1wiLFxuXHRcImZ1bmN0aW9uXCI6IFwiTmF2YmFyX2Z1bmN0aW9uX18zRDdXMVwiLFxuXHRcInVuZGVybGluZVwiOiBcIk5hdmJhcl91bmRlcmxpbmVfXzI2SWRzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3J0Zm9saW9Db250YWluZXJcIjogXCJQb3J0Zm9saW9fcG9ydGZvbGlvQ29udGFpbmVyX18zQUUyWFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG9tZUNvbnRhaW5lclwiOiBcIkhvbWVfaG9tZUNvbnRhaW5lcl9fMWhJaEJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==