(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./functions/classrooms/updateClassroom/updateClassroom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions/classrooms/updateClassroom/updateClassroom.js":
/*!*****************************************************************!*\
  !*** ./functions/classrooms/updateClassroom/updateClassroom.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _updateMysqlDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateMysqlDB */ "./functions/classrooms/updateClassroom/updateMysqlDB.js");
/* harmony import */ var _updateDynamoDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateDynamoDB */ "./functions/classrooms/updateClassroom/updateDynamoDB.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./functions/utils.js");





module.exports.updateClassroom = async event => {
  const id = JSON.parse(event).pathParameters.id;
  const {
    ownerID,
    courseCode,
    company
  } = JSON.parse(event).body;

  if (_utils__WEBPACK_IMPORTED_MODULE_3__["IS_OFFLINE"] === true) {
    return Object(_updateMysqlDB__WEBPACK_IMPORTED_MODULE_1__["updateMysqlDB"])(ownerID, courseCode, company, id);
  }

  return Object(_updateDynamoDB__WEBPACK_IMPORTED_MODULE_2__["updateDynamoDB"])(ownerID, courseCode, company, id);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./functions/classrooms/updateClassroom/updateDynamoDB.js":
/*!****************************************************************!*\
  !*** ./functions/classrooms/updateClassroom/updateDynamoDB.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./functions/utils.js");


const documentClient = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["ReturnDocumentClient"])();

module.exports.updateDynamoDB = async (ownerID, courseCode, company, id) => {
  // DynamoDB operation
  const params = {
    TableName: _utils__WEBPACK_IMPORTED_MODULE_1__["CONFIG_CLASSROOM_TABLE"],
    Item: {
      classroomID: id,
      ownerID: ownerID,
      courseCode: courseCode,
      company: company
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./functions/classrooms/updateClassroom/updateMysqlDB.js":
/*!***************************************************************!*\
  !*** ./functions/classrooms/updateClassroom/updateMysqlDB.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../connect */ "./functions/connect.js");



module.exports.updateMysqlDB = (ownerID, courseCode, company, id) => {
  // MySQL DB operation
  const query = `UPDATE classroom SET ownerID = ${ownerID}, courseCode = ${courseCode}, company = ${company} WHERE classroomID = ${id};`;
  return Object(_connect__WEBPACK_IMPORTED_MODULE_1__["connect"])(query);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./functions/connect.js":
/*!******************************!*\
  !*** ./functions/connect.js ***!
  \******************************/
/*! exports provided: connect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./functions/utils.js");



const mysql = __webpack_require__(/*! serverless-mysql */ "serverless-mysql")({
  config: {
    host: _utils__WEBPACK_IMPORTED_MODULE_1__["CONFIG_MYSQL_ENDPOINT"],
    database: _utils__WEBPACK_IMPORTED_MODULE_1__["CONFIG_MYSQL_DATABASE"],
    user: _utils__WEBPACK_IMPORTED_MODULE_1__["CONFIG_MYSQL_USER"],
    password: _utils__WEBPACK_IMPORTED_MODULE_1__["CONFIG_MYSQL_PASSWORD"]
  }
});

const connect = async query => {
  try {
    // Run query
    const results = await mysql.query(query); // Run clean up function

    await mysql.end();
    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  connect
});

/***/ }),

/***/ "./functions/utils.js":
/*!****************************!*\
  !*** ./functions/utils.js ***!
  \****************************/
/*! exports provided: IS_OFFLINE, CONFIG_MYSQL_ENDPOINT, CONFIG_MYSQL_DATABASE, CONFIG_MYSQL_USER, CONFIG_MYSQL_PASSWORD, CONFIG_DYNAMODB_ENDPOINT, CONFIG_CLASSROOM_TABLE, CONFIG_CLASSROOM_USER_TABLE, CONFIG_INSTANCE_TABLE, CONFIG_PROJECT_TABLE, CONFIG_TEMPLATE_TABLE, CONFIG_USER_TABLE, ReturnDocumentClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_OFFLINE", function() { return IS_OFFLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_MYSQL_ENDPOINT", function() { return CONFIG_MYSQL_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_MYSQL_DATABASE", function() { return CONFIG_MYSQL_DATABASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_MYSQL_USER", function() { return CONFIG_MYSQL_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_MYSQL_PASSWORD", function() { return CONFIG_MYSQL_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_DYNAMODB_ENDPOINT", function() { return CONFIG_DYNAMODB_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_CLASSROOM_TABLE", function() { return CONFIG_CLASSROOM_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_CLASSROOM_USER_TABLE", function() { return CONFIG_CLASSROOM_USER_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_INSTANCE_TABLE", function() { return CONFIG_INSTANCE_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_PROJECT_TABLE", function() { return CONFIG_PROJECT_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_TEMPLATE_TABLE", function() { return CONFIG_TEMPLATE_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_USER_TABLE", function() { return CONFIG_USER_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnDocumentClient", function() { return ReturnDocumentClient; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);


const IS_OFFLINE = process.env.IS_OFFLINE;
const CONFIG_MYSQL_ENDPOINT = process.env.CONFIG_MYSQL_ENDPOINT;
const CONFIG_MYSQL_DATABASE = process.env.CONFIG_MYSQL_DATABASE;
const CONFIG_MYSQL_USER = process.env.CONFIG_MYSQL_USER;
const CONFIG_MYSQL_PASSWORD = process.env.CONFIG_MYSQL_PASSWORD;
const CONFIG_DYNAMODB_ENDPOINT = process.env.CONFIG_DYNAMODB_ENDPOINT;
const CONFIG_CLASSROOM_TABLE = process.env.CONFIG_CLASSROOM_TABLE;
const CONFIG_CLASSROOM_USER_TABLE = process.env.CONFIG_CLASSROOM_USER_TABLE;
const CONFIG_INSTANCE_TABLE = process.env.CONFIG_INSTANCE_TABLE;
const CONFIG_PROJECT_TABLE = process.env.CONFIG_PROJECT_TABLE;
const CONFIG_TEMPLATE_TABLE = process.env.CONFIG_TEMPLATE_TABLE;
const CONFIG_USER_TABLE = process.env.CONFIG_USER_TABLE; // Initialising the DynamoDB SDK

const ReturnDocumentClient = () => {
  let documentClient;

  if (IS_OFFLINE === "true") {
    documentClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: CONFIG_DYNAMODB_ENDPOINT
    });
  } else {
    documentClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient();
  }

  return documentClient;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  IS_OFFLINE,
  CONFIG_MYSQL_ENDPOINT,
  CONFIG_MYSQL_DATABASE,
  CONFIG_MYSQL_USER,
  CONFIG_MYSQL_PASSWORD,
  CONFIG_CLASSROOM_TABLE,
  CONFIG_CLASSROOM_USER_TABLE,
  CONFIG_INSTANCE_TABLE,
  CONFIG_PROJECT_TABLE,
  CONFIG_TEMPLATE_TABLE,
  CONFIG_USER_TABLE,
  ReturnDocumentClient
});

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ })));
//# sourceMappingURL=updateClassroom.js.map