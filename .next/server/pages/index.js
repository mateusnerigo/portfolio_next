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
  function sendForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      form.style.display = "none";
      const loadingMail = document.getElementById('loadingMail');
      const successfulMail = document.getElementById('successfulMail');
      loadingMail.style.display = "block";
      fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      }).then(response => {
        loadingMail.style.display = "none";
        successfulMail.style.display = "block";
      }).catch(err => {
        if (err) {
          alert("An error just occurred. \nSorry about that... \nCould you please try again later? \n\n\nYou can send me an email too, if you want it. \nThe address is mateuslimaneri@gmail.com ");
        }
      });
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "contact",
    className: `container ${_styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactContainer}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "sectionTitle",
      children: "Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      id: "contactForm",
      className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactFormField,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "name",
          placeholder: "How can I call you?",
          autoComplete: "off",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactFormField,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          id: "email",
          placeholder: "ex: its@me.com",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contactFormField,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "message",
          children: "Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "message",
          placeholder: "Let 's talk a little!",
          rows: 5,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        onClick: () => sendForm(),
        children: "Send!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "loadingMail",
      className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loadingMail,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "successfulMail",
      className: _styles_components_Contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.successfulMail,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "img/done.svg",
        alt: "\u2713"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Email successfully sent!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Thank you so much for your contact."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
	"loadingMail": "Contact_loadingMail__3TZmd",
	"successfulMail": "Contact_successfulMail__2oTcz",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V4cGVyaW1lbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0luZm8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9ydGZvbGlvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9BYm91dC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db250YWN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaW1lbnRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9JbmZvLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL05hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Qb3J0Zm9saW8ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFib3V0Iiwic3R5bGVzIiwiYWJvdXRDb250YWluZXIiLCJDb250YWN0Iiwic2VuZEZvcm0iLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidmFsdWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiLCJsb2FkaW5nTWFpbCIsInN1Y2Nlc3NmdWxNYWlsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImFsZXJ0IiwiY29udGFjdENvbnRhaW5lciIsImNvbnRhY3RGb3JtIiwiY29udGFjdEZvcm1GaWVsZCIsIkV4cGVyaW1lbnRzIiwiZXhwZXJpbWVudHNDb250YWluZXIiLCJGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJmb290ZXJMaW5rcyIsIkluZm8iLCJpbmZvQ29udGFpbmVyIiwiTmF2YmFyIiwibmF2YmFyQ29udGFpbmVyVG9nZ2xlIiwic2V0TmF2YmFyQ29udGFpbmVyVG9nZ2xlIiwidXNlU3RhdGUiLCJuYXZiYXJDb250YWluZXIiLCJuYXZiYXJUb2dnbGUiLCJzZXROYXZiYXJUb2dnbGUiLCJuYXZiYXIiLCJoYW5kbGVTY3JvbGwiLCJvZmZzZXQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZml4ZWQiLCJ1c2VFZmZlY3QiLCJsb2dvIiwiZnVuY3Rpb24iLCJ1bmRlcmxpbmUiLCJQb3J0Zm9saW8iLCJwb3Jmb2xpb0NvbnRhaW5lciIsIkFwcCIsImhvbWVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU9DLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRCxlQVFDLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURCxlQVVDLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRCxlQVdDLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRCxlQWFDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlCQTs7QUFFY0Qsa0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0Fib3V0Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9eyBgY29udGFpbmVyICR7c3R5bGVzLmFib3V0Q29udGFpbmVyfWAgfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25UaXRsZVwiPkFib3V0PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db250YWN0Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgZnVuY3Rpb24gc2VuZEZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJyk7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKS52YWx1ZTtcclxuXHJcbiAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgY29uc3QgbG9hZGluZ01haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZ01haWwnKTtcclxuICAgICAgY29uc3Qgc3VjY2Vzc2Z1bE1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc2Z1bE1haWwnKTtcclxuICAgICAgbG9hZGluZ01haWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIGZldGNoKCcvYXBpL3NlbmRNYWlsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9KVxyXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGxvYWRpbmdNYWlsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBzdWNjZXNzZnVsTWFpbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBqdXN0IG9jY3VycmVkLiBcXG5Tb3JyeSBhYm91dCB0aGF0Li4uIFxcbkNvdWxkIHlvdSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyPyBcXG5cXG5cXG5Zb3UgY2FuIHNlbmQgbWUgYW4gZW1haWwgdG9vLCBpZiB5b3Ugd2FudCBpdC4gXFxuVGhlIGFkZHJlc3MgaXMgbWF0ZXVzbGltYW5lcmlAZ21haWwuY29tIFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgaWQ9XCJjb250YWN0XCJcclxuICAgICAgY2xhc3NOYW1lPXsgYGNvbnRhaW5lciAke3N0eWxlcy5jb250YWN0Q29udGFpbmVyfWAgfVxyXG4gICAgPlxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb25UaXRsZVwiPkNvbnRhY3Q8L2gxPlxyXG5cclxuICAgICAgPGZvcm0gaWQ9XCJjb250YWN0Rm9ybVwiIGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWN0Rm9ybSB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhY3RGb3JtRmllbGQgfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgY2FuIEkgY2FsbCB5b3U/XCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhY3RGb3JtRmllbGQgfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXg6IGl0c0BtZS5jb21cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdEZvcm1GaWVsZCB9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZXQgJ3MgdGFsayBhIGxpdHRsZSFcIlxyXG4gICAgICAgICAgICByb3dzPXs1fVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gc2VuZEZvcm0oKX0+XHJcbiAgICAgICAgICBTZW5kIVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwibG9hZGluZ01haWxcIiBjbGFzc05hbWU9eyBzdHlsZXMubG9hZGluZ01haWwgfT5cclxuICAgICAgICA8cD5sb2FkaW5nLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJzdWNjZXNzZnVsTWFpbFwiIGNsYXNzTmFtZT17IHN0eWxlcy5zdWNjZXNzZnVsTWFpbCB9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvbmUuc3ZnXCIgYWx0PVwi4pyTXCIvPlxyXG4gICAgICAgIDxwPkVtYWlsIHN1Y2Nlc3NmdWxseSBzZW50ITwvcD5cclxuICAgICAgICA8cD5UaGFuayB5b3Ugc28gbXVjaCBmb3IgeW91ciBjb250YWN0LjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRXhwZXJpbWVudHMubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwZXJpbWVudHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJleHBlcmltZW50c1wiIGNsYXNzTmFtZT17IGBjb250YWluZXIgJHtzdHlsZXMuZXhwZXJpbWVudHNDb250YWluZXJ9YCB9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvblRpdGxlXCI+RXhwZXJpbWVudHM8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmZvb3RlckNvbnRhaW5lciB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5mb290ZXJMaW5rcyB9PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+ZmI8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj53cHA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5saTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvSW5mby5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmZvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiaG9tZVwiIGNsYXNzTmFtZT17IGBjb250YWluZXIgJHtzdHlsZXMuaW5mb0NvbnRhaW5lcn1gIH0+XHJcbiAgICAgIDxzcGFuPkhleSE8L3NwYW4+XHJcbiAgICAgIDxzcGFuPldlbGNvbWUgdG8gbXkgc2l0ZS48L3NwYW4+XHJcbiAgICAgIDxzcGFuPlNjcm9sbCBhbmQgZGlzY292ZXIgbW9yZS48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbbmF2YmFyQ29udGFpbmVyVG9nZ2xlLCBzZXROYXZiYXJDb250YWluZXJUb2dnbGVdID0gdXNlU3RhdGUoYCR7c3R5bGVzLm5hdmJhckNvbnRhaW5lcn1gKTtcclxuICBjb25zdCBbbmF2YmFyVG9nZ2xlLCBzZXROYXZiYXJUb2dnbGVdID0gdXNlU3RhdGUoYCR7c3R5bGVzLm5hdmJhcn1gKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgaWYgKG9mZnNldCA+IDEpIHtcclxuICAgICAgc2V0TmF2YmFyQ29udGFpbmVyVG9nZ2xlKGAke3N0eWxlcy5uYXZiYXJDb250YWluZXJ9ICR7c3R5bGVzLmZpeGVkfWApXHJcbiAgICAgIHNldE5hdmJhclRvZ2dsZShgJHtzdHlsZXMubmF2YmFyfSAke3N0eWxlcy5maXhlZH1gKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldE5hdmJhckNvbnRhaW5lclRvZ2dsZShgJHtzdHlsZXMubmF2YmFyQ29udGFpbmVyfWApXHJcbiAgICAgIHNldE5hdmJhclRvZ2dsZShgJHtzdHlsZXMubmF2YmFyfWApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbmF2YmFyQ29udGFpbmVyVG9nZ2xlIH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbmF2YmFyVG9nZ2xlIH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMubG9nbyB9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgc3R5bGVzLm5hbWUgfT5NQVRFVVMgTkVSSTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgc3R5bGVzLmZ1bmN0aW9uIH0+d2ViIGRldmVsb3Blcjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnVuZGVybGluZSB9PjwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjYWJvdXRcIj5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudW5kZXJsaW5lIH0+PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnVuZGVybGluZSB9PjwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjZXhwZXJpbWVudHNcIj5cclxuICAgICAgICAgICAgRXhwZXJpbWVudHNcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudW5kZXJsaW5lIH0+PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvUG9ydGZvbGlvLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzTmFtZT17IGBjb250YWluZXIgJHtzdHlsZXMucG9yZm9saW9Db250YWluZXJ9YCB9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvblRpdGxlXCI+UG9ydGZvbGlvPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JbmZvJztcbmltcG9ydCB7IEFib3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgeyBQb3J0Zm9saW8gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcnRmb2xpbyc7XG5pbXBvcnQgeyBFeHBlcmltZW50cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRXhwZXJpbWVudHMnO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17IGAke3N0eWxlcy5ob21lQ29udGFpbmVyfWAgfT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+TWF0ZXVzIE5lcmkgfCBIb21lPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PE5hdmJhciAvPlxuXG5cdFx0XHQ8SW5mbyAvPlxuXHRcdFx0PEFib3V0IC8+XG5cdFx0XHQ8UG9ydGZvbGlvIC8+XG5cdFx0XHQ8RXhwZXJpbWVudHMgLz5cblx0XHRcdDxDb250YWN0IC8+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRDb250YWluZXJcIjogXCJBYm91dF9hYm91dENvbnRhaW5lcl9fUzk5Q2tcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhY3RDb250YWluZXJcIjogXCJDb250YWN0X2NvbnRhY3RDb250YWluZXJfXzN5dGdXXCIsXG5cdFwiY29udGFjdEZvcm1cIjogXCJDb250YWN0X2NvbnRhY3RGb3JtX18xd1l5RlwiLFxuXHRcImxvYWRpbmdNYWlsXCI6IFwiQ29udGFjdF9sb2FkaW5nTWFpbF9fM1RabWRcIixcblx0XCJzdWNjZXNzZnVsTWFpbFwiOiBcIkNvbnRhY3Rfc3VjY2Vzc2Z1bE1haWxfXzJvVGN6XCIsXG5cdFwiY29udGFjdEZvcm1GaWVsZFwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1GaWVsZF9fMzNFTkRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4cGVyaW1lbnRzQ29udGFpbmVyXCI6IFwiRXhwZXJpbWVudHNfZXhwZXJpbWVudHNDb250YWluZXJfXzJ4LXFxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJDb250YWluZXJcIjogXCJGb290ZXJfZm9vdGVyQ29udGFpbmVyX18zQUZZMVwiLFxuXHRcImZvb3RlckxpbmtzXCI6IFwiRm9vdGVyX2Zvb3RlckxpbmtzX18zZHdfZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb0NvbnRhaW5lclwiOiBcIkluZm9faW5mb0NvbnRhaW5lcl9fbXMtdGlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhckNvbnRhaW5lclwiOiBcIk5hdmJhcl9uYXZiYXJDb250YWluZXJfXzg4ajFrXCIsXG5cdFwibmF2YmFyXCI6IFwiTmF2YmFyX25hdmJhcl9fMmZwRFBcIixcblx0XCJmaXhlZFwiOiBcIk5hdmJhcl9maXhlZF9fMnc5aFdcIixcblx0XCJsb2dvXCI6IFwiTmF2YmFyX2xvZ29fXzFuMlpYXCIsXG5cdFwibmFtZVwiOiBcIk5hdmJhcl9uYW1lX18xNTNVX1wiLFxuXHRcImZ1bmN0aW9uXCI6IFwiTmF2YmFyX2Z1bmN0aW9uX18zRDdXMVwiLFxuXHRcInVuZGVybGluZVwiOiBcIk5hdmJhcl91bmRlcmxpbmVfXzI2SWRzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3J0Zm9saW9Db250YWluZXJcIjogXCJQb3J0Zm9saW9fcG9ydGZvbGlvQ29udGFpbmVyX18zQUUyWFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG9tZUNvbnRhaW5lclwiOiBcIkhvbWVfaG9tZUNvbnRhaW5lcl9fMWhJaEJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==