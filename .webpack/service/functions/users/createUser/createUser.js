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
/******/ 	return __webpack_require__(__webpack_require__.s = "./functions/users/createUser/createUser.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./functions/users/createUser/createUser.js":
/*!**************************************************!*\
  !*** ./functions/users/createUser/createUser.js ***!
  \**************************************************/
/*! exports provided: createUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user */ "./models/user.js");
/* harmony import */ var _insertIntoMysqlDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertIntoMysqlDB */ "./functions/users/createUser/insertIntoMysqlDB.js");
/* harmony import */ var _insertIntoDynamoDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insertIntoDynamoDB */ "./functions/users/createUser/insertIntoDynamoDB.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./functions/utils.js");






const createUser = async event => {
  const {
    email
  } = JSON.parse(event.body); // Generate unique id with no external dependencies

  const generateUUID = () => crypto__WEBPACK_IMPORTED_MODULE_1___default.a.randomBytes(16).toString("hex");

  const userID = generateUUID();
  const user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["default"](userID, email);

  if (_utils__WEBPACK_IMPORTED_MODULE_5__["IS_OFFLINE"] === "true") {
    return Object(_insertIntoMysqlDB__WEBPACK_IMPORTED_MODULE_3__["insertIntoMysqlDB"])(user);
  }

  return Object(_insertIntoDynamoDB__WEBPACK_IMPORTED_MODULE_4__["insertIntoDynamoDB"])(user);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  createUser
});

/***/ }),

/***/ "./functions/users/createUser/insertIntoDynamoDB.js":
/*!**********************************************************!*\
  !*** ./functions/users/createUser/insertIntoDynamoDB.js ***!
  \**********************************************************/
/*! exports provided: insertIntoDynamoDB, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertIntoDynamoDB", function() { return insertIntoDynamoDB; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./functions/utils.js");


const documentClient = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["ReturnDocumentClient"])();
const insertIntoDynamoDB = async user => {
  // DynamoDB operation
  const params = {
    TableName: _utils__WEBPACK_IMPORTED_MODULE_1__["CONFIG_USER_TABLE"],
    Item: {
      userID: user.userID,
      email: user.email
    },
    ConditionExpression: "attribute_not_exists(id)" // ensures that duplicate ids cannot be stored

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
/* harmony default export */ __webpack_exports__["default"] = ({
  insertIntoDynamoDB
});

/***/ }),

/***/ "./functions/users/createUser/insertIntoMysqlDB.js":
/*!*********************************************************!*\
  !*** ./functions/users/createUser/insertIntoMysqlDB.js ***!
  \*********************************************************/
/*! exports provided: insertIntoMysqlDB, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertIntoMysqlDB", function() { return insertIntoMysqlDB; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../connect */ "./functions/connect.js");


const insertIntoMysqlDB = user => {
  // Mysql operation
  const query = `INSERT INTO user (userID, email) VALUES ('${user.userID}', '${user.email}');`;
  return Object(_connect__WEBPACK_IMPORTED_MODULE_1__["connect"])(query);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  insertIntoMysqlDB
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

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

class User {
  constructor(userID, email) {
    this.userID = userID;
    this.email = email;
  }

  get userID() {
    return this._userID;
  }

  set userID(value) {
    this._userID = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

}

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

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
//# sourceMappingURL=createUser.js.map