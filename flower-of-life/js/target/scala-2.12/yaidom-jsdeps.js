//! @version js-joda - 1.3.0
//! @copyright (c) 2015-2016, Philipp Thürwächter, Pattrick Hüper & js-joda contributors
//! @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
//! @license BSD-3-Clause (see LICENSE in the root directory of this source tree)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSJoda"] = factory();
	else
		root["JSJoda"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ResolverStyle = exports.DateTimeFormatterBuilder = exports.DateTimeFormatter = exports.TemporalQueries = exports.TemporalAdjusters = exports.IsoFields = exports.ChronoUnit = exports.ChronoField = exports.nativeJs = exports.convert = exports.ZoneRulesProvider = exports.ZoneRules = exports.ZoneOffsetTransition = exports.ZoneRegion = exports.ZoneId = exports.ZoneOffset = exports.ZonedDateTime = exports.YearMonth = exports.Year = exports.Period = exports.MonthDay = exports.Month = exports.LocalDateTime = exports.LocalTime = exports.LocalDate = exports.Instant = exports.Duration = exports.DayOfWeek = exports.NullPointerException = exports.IllegalStateException = exports.IllegalArgumentException = exports.DateTimeParseException = exports.DateTimeException = exports.Clock = undefined;

	var _Clock = __webpack_require__(1);

	Object.defineProperty(exports, 'Clock', {
	    enumerable: true,
	    get: function get() {
	        return _Clock.Clock;
	    }
	});

	var _errors = __webpack_require__(3);

	Object.defineProperty(exports, 'DateTimeException', {
	    enumerable: true,
	    get: function get() {
	        return _errors.DateTimeException;
	    }
	});
	Object.defineProperty(exports, 'DateTimeParseException', {
	    enumerable: true,
	    get: function get() {
	        return _errors.DateTimeParseException;
	    }
	});
	Object.defineProperty(exports, 'IllegalArgumentException', {
	    enumerable: true,
	    get: function get() {
	        return _errors.IllegalArgumentException;
	    }
	});
	Object.defineProperty(exports, 'IllegalStateException', {
	    enumerable: true,
	    get: function get() {
	        return _errors.IllegalStateException;
	    }
	});
	Object.defineProperty(exports, 'NullPointerException', {
	    enumerable: true,
	    get: function get() {
	        return _errors.NullPointerException;
	    }
	});

	var _DayOfWeek = __webpack_require__(11);

	Object.defineProperty(exports, 'DayOfWeek', {
	    enumerable: true,
	    get: function get() {
	        return _DayOfWeek.DayOfWeek;
	    }
	});

	var _Duration = __webpack_require__(14);

	Object.defineProperty(exports, 'Duration', {
	    enumerable: true,
	    get: function get() {
	        return _Duration.Duration;
	    }
	});

	var _Instant = __webpack_require__(4);

	Object.defineProperty(exports, 'Instant', {
	    enumerable: true,
	    get: function get() {
	        return _Instant.Instant;
	    }
	});

	var _LocalDate = __webpack_require__(8);

	Object.defineProperty(exports, 'LocalDate', {
	    enumerable: true,
	    get: function get() {
	        return _LocalDate.LocalDate;
	    }
	});

	var _LocalTime = __webpack_require__(5);

	Object.defineProperty(exports, 'LocalTime', {
	    enumerable: true,
	    get: function get() {
	        return _LocalTime.LocalTime;
	    }
	});

	var _LocalDateTime = __webpack_require__(7);

	Object.defineProperty(exports, 'LocalDateTime', {
	    enumerable: true,
	    get: function get() {
	        return _LocalDateTime.LocalDateTime;
	    }
	});

	var _Month = __webpack_require__(24);

	Object.defineProperty(exports, 'Month', {
	    enumerable: true,
	    get: function get() {
	        return _Month.Month;
	    }
	});

	var _MonthDay = __webpack_require__(56);

	Object.defineProperty(exports, 'MonthDay', {
	    enumerable: true,
	    get: function get() {
	        return _MonthDay.MonthDay;
	    }
	});

	var _Period = __webpack_require__(32);

	Object.defineProperty(exports, 'Period', {
	    enumerable: true,
	    get: function get() {
	        return _Period.Period;
	    }
	});

	var _Year = __webpack_require__(55);

	Object.defineProperty(exports, 'Year', {
	    enumerable: true,
	    get: function get() {
	        return _Year.Year;
	    }
	});

	var _YearMonth = __webpack_require__(57);

	Object.defineProperty(exports, 'YearMonth', {
	    enumerable: true,
	    get: function get() {
	        return _YearMonth.YearMonth;
	    }
	});

	var _ZonedDateTime = __webpack_require__(60);

	Object.defineProperty(exports, 'ZonedDateTime', {
	    enumerable: true,
	    get: function get() {
	        return _ZonedDateTime.ZonedDateTime;
	    }
	});

	var _ZoneOffset = __webpack_require__(26);

	Object.defineProperty(exports, 'ZoneOffset', {
	    enumerable: true,
	    get: function get() {
	        return _ZoneOffset.ZoneOffset;
	    }
	});

	var _ZoneId = __webpack_require__(27);

	Object.defineProperty(exports, 'ZoneId', {
	    enumerable: true,
	    get: function get() {
	        return _ZoneId.ZoneId;
	    }
	});

	var _ZoneRegion = __webpack_require__(53);

	Object.defineProperty(exports, 'ZoneRegion', {
	    enumerable: true,
	    get: function get() {
	        return _ZoneRegion.ZoneRegion;
	    }
	});

	var _ZoneOffsetTransition = __webpack_require__(63);

	Object.defineProperty(exports, 'ZoneOffsetTransition', {
	    enumerable: true,
	    get: function get() {
	        return _ZoneOffsetTransition.ZoneOffsetTransition;
	    }
	});

	var _ZoneRules = __webpack_require__(29);

	Object.defineProperty(exports, 'ZoneRules', {
	    enumerable: true,
	    get: function get() {
	        return _ZoneRules.ZoneRules;
	    }
	});

	var _ZoneRulesProvider = __webpack_require__(54);

	Object.defineProperty(exports, 'ZoneRulesProvider', {
	    enumerable: true,
	    get: function get() {
	        return _ZoneRulesProvider.ZoneRulesProvider;
	    }
	});

	var _convert = __webpack_require__(64);

	Object.defineProperty(exports, 'convert', {
	    enumerable: true,
	    get: function get() {
	        return _convert.convert;
	    }
	});

	var _NativeJsTemporal = __webpack_require__(65);

	Object.defineProperty(exports, 'nativeJs', {
	    enumerable: true,
	    get: function get() {
	        return _NativeJsTemporal.nativeJs;
	    }
	});

	var _ChronoField = __webpack_require__(12);

	Object.defineProperty(exports, 'ChronoField', {
	    enumerable: true,
	    get: function get() {
	        return _ChronoField.ChronoField;
	    }
	});

	var _ChronoUnit = __webpack_require__(13);

	Object.defineProperty(exports, 'ChronoUnit', {
	    enumerable: true,
	    get: function get() {
	        return _ChronoUnit.ChronoUnit;
	    }
	});

	var _IsoFields = __webpack_require__(41);

	Object.defineProperty(exports, 'IsoFields', {
	    enumerable: true,
	    get: function get() {
	        return _IsoFields.IsoFields;
	    }
	});

	var _TemporalAdjusters = __webpack_require__(58);

	Object.defineProperty(exports, 'TemporalAdjusters', {
	    enumerable: true,
	    get: function get() {
	        return _TemporalAdjusters.TemporalAdjusters;
	    }
	});

	var _TemporalQueries = __webpack_require__(22);

	Object.defineProperty(exports, 'TemporalQueries', {
	    enumerable: true,
	    get: function get() {
	        return _TemporalQueries.TemporalQueries;
	    }
	});

	var _DateTimeFormatter = __webpack_require__(31);

	Object.defineProperty(exports, 'DateTimeFormatter', {
	    enumerable: true,
	    get: function get() {
	        return _DateTimeFormatter.DateTimeFormatter;
	    }
	});

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	Object.defineProperty(exports, 'DateTimeFormatterBuilder', {
	    enumerable: true,
	    get: function get() {
	        return _DateTimeFormatterBuilder.DateTimeFormatterBuilder;
	    }
	});

	var _ResolverStyle = __webpack_require__(36);

	Object.defineProperty(exports, 'ResolverStyle', {
	    enumerable: true,
	    get: function get() {
	        return _ResolverStyle.ResolverStyle;
	    }
	});
	exports.use = use;

	__webpack_require__(66);

	var used = [];
	function use(fn) {
	    if (!~used.indexOf(fn)) {
	        fn(exports);
	        used.push(fn);
	    }
	    return exports;
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Clock = undefined;

	var _assert = __webpack_require__(2);

	var _Instant = __webpack_require__(4);

	var _ZoneId = __webpack_require__(27);

	var _ZoneOffset = __webpack_require__(26);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var Clock = exports.Clock = function () {
	    function Clock() {
	        _classCallCheck(this, Clock);
	    }

	    Clock.systemUTC = function systemUTC() {
	        return new SystemClock(_ZoneOffset.ZoneOffset.UTC);
	    };

	    Clock.systemDefaultZone = function systemDefaultZone() {
	        return new SystemClock(_ZoneId.ZoneId.systemDefault());
	    };

	    Clock.system = function system(zone) {
	        return new SystemClock(zone);
	    };

	    Clock.fixed = function fixed(fixedInstant, zoneOffset) {
	        return new FixedClock(fixedInstant, zoneOffset);
	    };

	    Clock.prototype.millis = function millis() {
	        (0, _assert.abstractMethodFail)('Clock.millis');
	    };

	    Clock.prototype.instant = function instant() {
	        (0, _assert.abstractMethodFail)('Clock.instant');
	    };

	    Clock.prototype.zone = function zone() {
	        (0, _assert.abstractMethodFail)('Clock.zone');
	    };

	    return Clock;
	}();

	var SystemClock = function (_Clock) {
	    _inherits(SystemClock, _Clock);

	    function SystemClock(zone) {
	        _classCallCheck(this, SystemClock);

	        (0, _assert.requireNonNull)(zone, 'zone');

	        var _this = _possibleConstructorReturn(this, _Clock.call(this));

	        _this._zone = zone;
	        return _this;
	    }

	    SystemClock.prototype.zone = function zone() {
	        return this._zone;
	    };

	    SystemClock.prototype.millis = function millis() {
	        return new Date().getTime();
	    };

	    SystemClock.prototype.instant = function instant() {
	        return _Instant.Instant.ofEpochMilli(this.millis());
	    };

	    SystemClock.prototype.toString = function toString() {
	        return 'SystemClock[' + this._zone.toString() + ']';
	    };

	    return SystemClock;
	}(Clock);

	var FixedClock = function (_Clock2) {
	    _inherits(FixedClock, _Clock2);

	    function FixedClock(fixedInstant, zoneId) {
	        _classCallCheck(this, FixedClock);

	        var _this2 = _possibleConstructorReturn(this, _Clock2.call(this));

	        _this2._instant = fixedInstant;
	        _this2._zoneId = zoneId;
	        return _this2;
	    }

	    FixedClock.prototype.instant = function instant() {
	        return this._instant;
	    };

	    FixedClock.prototype.millis = function millis() {
	        return this._instant.toEpochMilli();
	    };

	    FixedClock.prototype.zone = function zone() {
	        return this._zoneId;
	    };

	    FixedClock.prototype.toString = function toString() {
	        return 'FixedClock[]';
	    };

	    return FixedClock;
	}(Clock);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.assert = assert;
	exports.requireNonNull = requireNonNull;
	exports.requireInstance = requireInstance;
	exports.abstractMethodFail = abstractMethodFail;

	var _errors = __webpack_require__(3);

	function assert(assertion, msg, error) {
	    if (!assertion) {
	        if (error) {
	            throw new error(msg);
	        } else {
	            throw new Error(msg);
	        }
	    }
	} /**
	   * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	   * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	   */
	function requireNonNull(value, parameterName) {
	    if (value == null) {
	        throw new _errors.NullPointerException(parameterName + ' must not be null');
	    }
	    return value;
	}

	function requireInstance(value, _class, parameterName) {
	    if (!(value instanceof _class)) {
	        throw new _errors.IllegalArgumentException(parameterName + ' must be an instance of ' + (_class.name ? _class.name : _class) + (value && value.constructor && value.constructor.name ? ', but is ' + value.constructor.name : ''));
	    }
	    return value;
	}

	function abstractMethodFail(methodName) {
	    throw new TypeError('abstract method "' + methodName + '" is not implemented');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	function createErrorType(name, init) {
	    var superErrorClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Error;

	    function E(message) {
	        if (!Error.captureStackTrace) {
	            this.stack = new Error().stack;
	        } else {
	            Error.captureStackTrace(this, this.constructor);
	        }
	        this.message = message;
	        init && init.apply(this, arguments);
	    }
	    E.prototype = new superErrorClass();
	    E.prototype.name = name;
	    E.prototype.constructor = E;
	    return E;
	}

	var DateTimeException = exports.DateTimeException = createErrorType('DateTimeException', messageWithCause);
	var DateTimeParseException = exports.DateTimeParseException = createErrorType('DateTimeParseException', messageForDateTimeParseException);
	var UnsupportedTemporalTypeException = exports.UnsupportedTemporalTypeException = createErrorType('UnsupportedTemporalTypeException', null, DateTimeException);
	var ArithmeticException = exports.ArithmeticException = createErrorType('ArithmeticException');
	var IllegalArgumentException = exports.IllegalArgumentException = createErrorType('IllegalArgumentException');
	var IllegalStateException = exports.IllegalStateException = createErrorType('IllegalStateException');
	var NullPointerException = exports.NullPointerException = createErrorType('NullPointerException');

	function messageWithCause(message) {
	    var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	    var msg = message || this.name;
	    if (cause !== null && cause instanceof Error) {
	        msg += '\n-------\nCaused by: ' + cause.stack + '\n-------\n';
	    }
	    this.message = msg;
	}

	function messageForDateTimeParseException(message) {
	    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var cause = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	    var msg = message || this.name;
	    msg += ': ' + text + ', at index: ' + index;
	    if (cause !== null && cause instanceof Error) {
	        msg += '\n-------\nCaused by: ' + cause.stack + '\n-------\n';
	    }
	    this.message = msg;
	    this.parsedString = function () {
	        return text;
	    };
	    this.errorIndex = function () {
	        return index;
	    };
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Instant = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _LocalTime = __webpack_require__(5);

	var _MathUtil = __webpack_require__(6);

	var _Temporal2 = __webpack_require__(20);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalUnit = __webpack_require__(16);

	var _TemporalQuery = __webpack_require__(23);

	var _DateTimeFormatter = __webpack_require__(31);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var NANOS_PER_MILLI = 1000000;

	var Instant = function (_Temporal) {
	    _inherits(Instant, _Temporal);

	    Instant.now = function now() {
	        var clock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Clock.Clock.systemUTC();

	        return clock.instant();
	    };

	    Instant.ofEpochSecond = function ofEpochSecond(epochSecond) {
	        var nanoAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        var secs = epochSecond + _MathUtil.MathUtil.floorDiv(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nos = _MathUtil.MathUtil.floorMod(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return Instant._create(secs, nos);
	    };

	    Instant.ofEpochMilli = function ofEpochMilli(epochMilli) {
	        var secs = _MathUtil.MathUtil.floorDiv(epochMilli, 1000);
	        var mos = _MathUtil.MathUtil.floorMod(epochMilli, 1000);
	        return Instant._create(secs, mos * 1000000);
	    };

	    Instant.from = function from(temporal) {
	        try {
	            var instantSecs = temporal.getLong(_ChronoField.ChronoField.INSTANT_SECONDS);
	            var nanoOfSecond = temporal.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	            return Instant.ofEpochSecond(instantSecs, nanoOfSecond);
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain Instant from TemporalAccessor: ' + temporal + ', type ' + (typeof temporal === 'undefined' ? 'undefined' : _typeof(temporal)), ex);
	        }
	    };

	    Instant.parse = function parse(text) {
	        return _DateTimeFormatter.DateTimeFormatter.ISO_INSTANT.parse(text, Instant.FROM);
	    };

	    Instant._create = function _create(seconds, nanoOfSecond) {
	        if (seconds === 0 && nanoOfSecond === 0) {
	            return Instant.EPOCH;
	        }
	        return new Instant(seconds, nanoOfSecond);
	    };

	    Instant._validate = function _validate(seconds, nanoOfSecond) {
	        if (seconds < Instant.MIN_SECONDS || seconds > Instant.MAX_SECONDS) {
	            throw new _errors.DateTimeException('Instant exceeds minimum or maximum instant');
	        }
	        if (nanoOfSecond < 0 || nanoOfSecond > _LocalTime.LocalTime.NANOS_PER_SECOND) {
	            throw new _errors.DateTimeException('Instant exceeds minimum or maximum instant');
	        }
	    };

	    function Instant(seconds, nanoOfSecond) {
	        _classCallCheck(this, Instant);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        Instant._validate(seconds, nanoOfSecond);
	        _this._seconds = seconds;
	        _this._nanos = nanoOfSecond;
	        return _this;
	    }

	    Instant.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit === _ChronoField.ChronoField.INSTANT_SECONDS || fieldOrUnit === _ChronoField.ChronoField.NANO_OF_SECOND || fieldOrUnit === _ChronoField.ChronoField.MICRO_OF_SECOND || fieldOrUnit === _ChronoField.ChronoField.MILLI_OF_SECOND;
	        }
	        if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isTimeBased() || fieldOrUnit === _ChronoUnit.ChronoUnit.DAYS;
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    Instant.prototype.range = function range(field) {
	        return _Temporal.prototype.range.call(this, field);
	    };

	    Instant.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    Instant.prototype.getLong = function getLong(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return this._nanos;
	                case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                    return _MathUtil.MathUtil.intDiv(this._nanos, 1000);
	                case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                    return _MathUtil.MathUtil.intDiv(this._nanos, NANOS_PER_MILLI);
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return this._seconds;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    Instant.prototype.epochSecond = function epochSecond() {
	        return this._seconds;
	    };

	    Instant.prototype.nano = function nano() {
	        return this._nanos;
	    };

	    Instant.prototype.with = function _with(adjusterOrField, newValue) {
	        if (arguments.length === 1) {
	            return this.withTemporalAdjuster(adjusterOrField);
	        } else {
	            return this.with2(adjusterOrField, newValue);
	        }
	    };

	    Instant.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    Instant.prototype.with2 = function with2(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            field.checkValidValue(newValue);
	            switch (field) {
	                case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                    {
	                        var nval = newValue * NANOS_PER_MILLI;
	                        return nval !== this._nanos ? Instant._create(this._seconds, nval) : this;
	                    }
	                case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                    {
	                        var _nval = newValue * 1000;
	                        return _nval !== this._nanos ? Instant._create(this._seconds, _nval) : this;
	                    }
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return newValue !== this._nanos ? Instant._create(this._seconds, newValue) : this;
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return newValue !== this._seconds ? Instant._create(newValue, this._nanos) : this;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    Instant.prototype.truncatedTo = function truncatedTo(unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit === _ChronoUnit.ChronoUnit.NANOS) {
	            return this;
	        }
	        var unitDur = unit.duration();
	        if (unitDur.seconds() > _LocalTime.LocalTime.SECONDS_PER_DAY) {
	            throw new _errors.DateTimeException('Unit is too large to be used for truncation');
	        }
	        var dur = unitDur.toNanos();
	        if (_MathUtil.MathUtil.intMod(_LocalTime.LocalTime.NANOS_PER_DAY, dur) !== 0) {
	            throw new _errors.DateTimeException('Unit must divide into a standard day without remainder');
	        }
	        var nod = _MathUtil.MathUtil.intMod(this._seconds, _LocalTime.LocalTime.SECONDS_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_SECOND + this._nanos;
	        var result = _MathUtil.MathUtil.intDiv(nod, dur) * dur;
	        return this.plusNanos(result - nod);
	    };

	    Instant.prototype.plus = function plus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.plus1(amount);
	        } else {
	            return this.plus2(amount, unit);
	        }
	    };

	    Instant.prototype.plus1 = function plus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    Instant.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this._plus(_MathUtil.MathUtil.intDiv(amountToAdd, 1000000), _MathUtil.MathUtil.intMod(amountToAdd, 1000000) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusMillis(amountToAdd);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_MINUTE));
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_HOUR));
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY / 2));
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return this.plusSeconds(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    Instant.prototype.plusSeconds = function plusSeconds(secondsToAdd) {
	        return this._plus(secondsToAdd, 0);
	    };

	    Instant.prototype.plusMillis = function plusMillis(millisToAdd) {
	        return this._plus(_MathUtil.MathUtil.intDiv(millisToAdd, 1000), _MathUtil.MathUtil.intMod(millisToAdd, 1000) * NANOS_PER_MILLI);
	    };

	    Instant.prototype.plusNanos = function plusNanos(nanosToAdd) {
	        return this._plus(0, nanosToAdd);
	    };

	    Instant.prototype._plus = function _plus(secondsToAdd, nanosToAdd) {
	        if ((secondsToAdd | nanosToAdd) === 0) {
	            return this;
	        }
	        var epochSec = this._seconds + secondsToAdd;
	        epochSec = epochSec + _MathUtil.MathUtil.intDiv(nanosToAdd, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nanoAdjustment = this._nanos + nanosToAdd % _LocalTime.LocalTime.NANOS_PER_SECOND;
	        return Instant.ofEpochSecond(epochSec, nanoAdjustment);
	    };

	    Instant.prototype.minus = function minus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.minus1(amount);
	        } else {
	            return this.minus2(amount, unit);
	        }
	    };

	    Instant.prototype.minus1 = function minus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    Instant.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    Instant.prototype.minusSeconds = function minusSeconds(secondsToSubtract) {
	        return this.plusSeconds(secondsToSubtract * -1);
	    };

	    Instant.prototype.minusMillis = function minusMillis(millisToSubtract) {
	        return this.plusMillis(-1 * millisToSubtract);
	    };

	    Instant.prototype.minusNanos = function minusNanos(nanosToSubtract) {
	        return this.plusNanos(-1 * nanosToSubtract);
	    };

	    Instant.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        }

	        if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    Instant.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        return temporal.with(_ChronoField.ChronoField.INSTANT_SECONDS, this._seconds).with(_ChronoField.ChronoField.NANO_OF_SECOND, this._nanos);
	    };

	    Instant.prototype.until = function until(endExclusive, unit) {
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        var end = Instant.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this._nanosUntil(end);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return _MathUtil.MathUtil.intDiv(this._nanosUntil(end), 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return _MathUtil.MathUtil.safeSubtract(end.toEpochMilli(), this.toEpochMilli());
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this._secondsUntil(end);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), _LocalTime.LocalTime.SECONDS_PER_HOUR);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), 12 * _LocalTime.LocalTime.SECONDS_PER_HOUR);
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return _MathUtil.MathUtil.intDiv(this._secondsUntil(end), _LocalTime.LocalTime.SECONDS_PER_DAY);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    Instant.prototype._nanosUntil = function _nanosUntil(end) {
	        var secsDiff = _MathUtil.MathUtil.safeSubtract(end.epochSecond(), this.epochSecond());
	        var totalNanos = _MathUtil.MathUtil.safeMultiply(secsDiff, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return _MathUtil.MathUtil.safeAdd(totalNanos, end.nano() - this.nano());
	    };

	    Instant.prototype._secondsUntil = function _secondsUntil(end) {
	        var secsDiff = _MathUtil.MathUtil.safeSubtract(end.epochSecond(), this.epochSecond());
	        var nanosDiff = end.nano() - this.nano();
	        if (secsDiff > 0 && nanosDiff < 0) {
	            secsDiff--;
	        } else if (secsDiff < 0 && nanosDiff > 0) {
	            secsDiff++;
	        }
	        return secsDiff;
	    };

	    Instant.prototype.toEpochMilli = function toEpochMilli() {
	        var millis = _MathUtil.MathUtil.safeMultiply(this._seconds, 1000);
	        return millis + _MathUtil.MathUtil.intDiv(this._nanos, NANOS_PER_MILLI);
	    };

	    Instant.prototype.compareTo = function compareTo(otherInstant) {
	        (0, _assert.requireNonNull)(otherInstant, 'otherInstant');
	        (0, _assert.requireInstance)(otherInstant, Instant, 'otherInstant');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this._seconds, otherInstant._seconds);
	        if (cmp !== 0) {
	            return cmp;
	        }
	        return this._nanos - otherInstant._nanos;
	    };

	    Instant.prototype.isAfter = function isAfter(otherInstant) {
	        return this.compareTo(otherInstant) > 0;
	    };

	    Instant.prototype.isBefore = function isBefore(otherInstant) {
	        return this.compareTo(otherInstant) < 0;
	    };

	    Instant.prototype.equals = function equals(otherInstant) {
	        if (this === otherInstant) {
	            return true;
	        }
	        if (otherInstant instanceof Instant) {
	            return this.epochSecond() === otherInstant.epochSecond() && this.nano() === otherInstant.nano();
	        }
	        return false;
	    };

	    Instant.prototype.hashCode = function hashCode() {
	        return (this._seconds ^ this._seconds >>> 24) + 51 * this._nanos;
	    };

	    Instant.prototype.toString = function toString() {
	        return _DateTimeFormatter.DateTimeFormatter.ISO_INSTANT.format(this);
	    };

	    return Instant;
	}(_Temporal2.Temporal);

	exports.Instant = Instant;
	function _init() {
	    Instant.MIN_SECONDS = -31619119219200;
	    Instant.MAX_SECONDS = 31494816403199;
	    Instant.EPOCH = new Instant(0, 0);
	    Instant.MIN = Instant.ofEpochSecond(Instant.MIN_SECONDS, 0);
	    Instant.MAX = Instant.ofEpochSecond(Instant.MAX_SECONDS, 999999999);
	    Instant.FROM = (0, _TemporalQuery.createTemporalQuery)('Instant.FROM', function (temporal) {
	        return Instant.from(temporal);
	    });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.LocalTime = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _LocalDateTime = __webpack_require__(7);

	var _ZoneId = __webpack_require__(27);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalField = __webpack_require__(18);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalQuery = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var LocalTime = function (_Temporal) {
	    _inherits(LocalTime, _Temporal);

	    LocalTime.now = function now(clockOrZone) {
	        if (clockOrZone == null) {
	            return LocalTime._now(_Clock.Clock.systemDefaultZone());
	        } else if (clockOrZone instanceof _Clock.Clock) {
	            return LocalTime._now(clockOrZone);
	        } else {
	            return LocalTime._now(_Clock.Clock.system(clockOrZone));
	        }
	    };

	    LocalTime._now = function _now() {
	        var clock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Clock.Clock.systemDefaultZone();

	        (0, _assert.requireNonNull)(clock, 'clock');
	        return LocalTime.ofInstant(clock.instant(), clock.zone());
	    };

	    LocalTime.ofInstant = function ofInstant(instant) {
	        var zone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ZoneId.ZoneId.systemDefault();

	        var offset = zone.rules().offset(instant);
	        var secsOfDay = _MathUtil.MathUtil.intMod(instant.epochSecond(), LocalTime.SECONDS_PER_DAY);
	        secsOfDay = _MathUtil.MathUtil.intMod(secsOfDay + offset.totalSeconds(), LocalTime.SECONDS_PER_DAY);
	        if (secsOfDay < 0) {
	            secsOfDay += LocalTime.SECONDS_PER_DAY;
	        }
	        return LocalTime.ofSecondOfDay(secsOfDay, instant.nano());
	    };

	    LocalTime.of = function of(hour, minute, second, nanoOfSecond) {
	        return new LocalTime(hour, minute, second, nanoOfSecond);
	    };

	    LocalTime.ofSecondOfDay = function ofSecondOfDay() {
	        var secondOfDay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var nanoOfSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        _ChronoField.ChronoField.SECOND_OF_DAY.checkValidValue(secondOfDay);
	        _ChronoField.ChronoField.NANO_OF_SECOND.checkValidValue(nanoOfSecond);
	        var hours = _MathUtil.MathUtil.intDiv(secondOfDay, LocalTime.SECONDS_PER_HOUR);
	        secondOfDay -= hours * LocalTime.SECONDS_PER_HOUR;
	        var minutes = _MathUtil.MathUtil.intDiv(secondOfDay, LocalTime.SECONDS_PER_MINUTE);
	        secondOfDay -= minutes * LocalTime.SECONDS_PER_MINUTE;
	        return new LocalTime(hours, minutes, secondOfDay, nanoOfSecond);
	    };

	    LocalTime.ofNanoOfDay = function ofNanoOfDay() {
	        var nanoOfDay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        _ChronoField.ChronoField.NANO_OF_DAY.checkValidValue(nanoOfDay);
	        var hours = _MathUtil.MathUtil.intDiv(nanoOfDay, LocalTime.NANOS_PER_HOUR);
	        nanoOfDay -= hours * LocalTime.NANOS_PER_HOUR;
	        var minutes = _MathUtil.MathUtil.intDiv(nanoOfDay, LocalTime.NANOS_PER_MINUTE);
	        nanoOfDay -= minutes * LocalTime.NANOS_PER_MINUTE;
	        var seconds = _MathUtil.MathUtil.intDiv(nanoOfDay, LocalTime.NANOS_PER_SECOND);
	        nanoOfDay -= seconds * LocalTime.NANOS_PER_SECOND;
	        return new LocalTime(hours, minutes, seconds, nanoOfDay);
	    };

	    LocalTime.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        var time = temporal.query(_TemporalQueries.TemporalQueries.localTime());
	        if (time == null) {
	            throw new _errors.DateTimeException('Unable to obtain LocalTime TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	        return time;
	    };

	    LocalTime.parse = function parse(text) {
	        var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_TIME;

	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.parse(text, LocalTime.FROM);
	    };

	    function LocalTime() {
	        var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var minute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var second = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var nanoOfSecond = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	        _classCallCheck(this, LocalTime);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        var _hour = _MathUtil.MathUtil.safeZero(hour);
	        var _minute = _MathUtil.MathUtil.safeZero(minute);
	        var _second = _MathUtil.MathUtil.safeZero(second);
	        var _nanoOfSecond = _MathUtil.MathUtil.safeZero(nanoOfSecond);
	        LocalTime._validate(_hour, _minute, _second, _nanoOfSecond);
	        if ((_minute | _second | _nanoOfSecond) === 0) {
	            var _ret;

	            return _ret = LocalTime.HOURS[_hour], _possibleConstructorReturn(_this, _ret);
	        }
	        _this._hour = _hour;
	        _this._minute = _minute;
	        _this._second = _second;
	        _this._nano = _nanoOfSecond;
	        return _this;
	    }

	    LocalTime._validate = function _validate(hour, minute, second, nanoOfSecond) {
	        _ChronoField.ChronoField.HOUR_OF_DAY.checkValidValue(hour);
	        _ChronoField.ChronoField.MINUTE_OF_HOUR.checkValidValue(minute);
	        _ChronoField.ChronoField.SECOND_OF_MINUTE.checkValidValue(second);
	        _ChronoField.ChronoField.NANO_OF_SECOND.checkValidValue(nanoOfSecond);
	    };

	    LocalTime.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit.isTimeBased();
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isTimeBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    LocalTime.prototype.range = function range(field) {
	        (0, _assert.requireNonNull)(field);
	        return _Temporal.prototype.range.call(this, field);
	    };

	    LocalTime.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    LocalTime.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            return this._get0(field);
	        }
	        return field.getFrom(this);
	    };

	    LocalTime.prototype._get0 = function _get0(field) {
	        switch (field) {
	            case _ChronoField.ChronoField.NANO_OF_SECOND:
	                return this._nano;
	            case _ChronoField.ChronoField.NANO_OF_DAY:
	                return this.toNanoOfDay();
	            case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                return _MathUtil.MathUtil.intDiv(this._nano, 1000);
	            case _ChronoField.ChronoField.MICRO_OF_DAY:
	                return _MathUtil.MathUtil.intDiv(this.toNanoOfDay(), 1000);
	            case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                return _MathUtil.MathUtil.intDiv(this._nano, 1000000);
	            case _ChronoField.ChronoField.MILLI_OF_DAY:
	                return _MathUtil.MathUtil.intDiv(this.toNanoOfDay(), 1000000);
	            case _ChronoField.ChronoField.SECOND_OF_MINUTE:
	                return this._second;
	            case _ChronoField.ChronoField.SECOND_OF_DAY:
	                return this.toSecondOfDay();
	            case _ChronoField.ChronoField.MINUTE_OF_HOUR:
	                return this._minute;
	            case _ChronoField.ChronoField.MINUTE_OF_DAY:
	                return this._hour * 60 + this._minute;
	            case _ChronoField.ChronoField.HOUR_OF_AMPM:
	                return _MathUtil.MathUtil.intMod(this._hour, 12);
	            case _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM:
	                {
	                    var ham = _MathUtil.MathUtil.intMod(this._hour, 12);
	                    return ham % 12 === 0 ? 12 : ham;
	                }
	            case _ChronoField.ChronoField.HOUR_OF_DAY:
	                return this._hour;
	            case _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY:
	                return this._hour === 0 ? 24 : this._hour;
	            case _ChronoField.ChronoField.AMPM_OF_DAY:
	                return _MathUtil.MathUtil.intDiv(this._hour, 12);
	        }
	        throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	    };

	    LocalTime.prototype.hour = function hour() {
	        return this._hour;
	    };

	    LocalTime.prototype.minute = function minute() {
	        return this._minute;
	    };

	    LocalTime.prototype.second = function second() {
	        return this._second;
	    };

	    LocalTime.prototype.nano = function nano() {
	        return this._nano;
	    };

	    LocalTime.prototype.with = function _with(adjusterOrField, newValue) {
	        if (arguments.length < 2) {
	            return this.withTemporalAdjuster(adjusterOrField);
	        } else {
	            return this.with2(adjusterOrField, newValue);
	        }
	    };

	    LocalTime.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');

	        if (adjuster instanceof LocalTime) {
	            return adjuster;
	        }
	        (0, _assert.assert)(typeof adjuster.adjustInto === 'function', 'adjuster', _errors.IllegalArgumentException);
	        return adjuster.adjustInto(this);
	    };

	    LocalTime.prototype.with2 = function with2(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            field.checkValidValue(newValue);
	            switch (field) {
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return this.withNano(newValue);
	                case _ChronoField.ChronoField.NANO_OF_DAY:
	                    return LocalTime.ofNanoOfDay(newValue);
	                case _ChronoField.ChronoField.MICRO_OF_SECOND:
	                    return this.withNano(newValue * 1000);
	                case _ChronoField.ChronoField.MICRO_OF_DAY:
	                    return LocalTime.ofNanoOfDay(newValue * 1000);
	                case _ChronoField.ChronoField.MILLI_OF_SECOND:
	                    return this.withNano(newValue * 1000000);
	                case _ChronoField.ChronoField.MILLI_OF_DAY:
	                    return LocalTime.ofNanoOfDay(newValue * 1000000);
	                case _ChronoField.ChronoField.SECOND_OF_MINUTE:
	                    return this.withSecond(newValue);
	                case _ChronoField.ChronoField.SECOND_OF_DAY:
	                    return this.plusSeconds(newValue - this.toSecondOfDay());
	                case _ChronoField.ChronoField.MINUTE_OF_HOUR:
	                    return this.withMinute(newValue);
	                case _ChronoField.ChronoField.MINUTE_OF_DAY:
	                    return this.plusMinutes(newValue - (this._hour * 60 + this._minute));
	                case _ChronoField.ChronoField.HOUR_OF_AMPM:
	                    return this.plusHours(newValue - _MathUtil.MathUtil.intMod(this._hour, 12));
	                case _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM:
	                    return this.plusHours((newValue === 12 ? 0 : newValue) - _MathUtil.MathUtil.intMod(this._hour, 12));
	                case _ChronoField.ChronoField.HOUR_OF_DAY:
	                    return this.withHour(newValue);
	                case _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY:
	                    return this.withHour(newValue === 24 ? 0 : newValue);
	                case _ChronoField.ChronoField.AMPM_OF_DAY:
	                    return this.plusHours((newValue - _MathUtil.MathUtil.intDiv(this._hour, 12)) * 12);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    LocalTime.prototype.withHour = function withHour() {
	        var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        if (this._hour === hour) {
	            return this;
	        }
	        return new LocalTime(hour, this._minute, this._second, this._nano);
	    };

	    LocalTime.prototype.withMinute = function withMinute() {
	        var minute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        if (this._minute === minute) {
	            return this;
	        }
	        return new LocalTime(this._hour, minute, this._second, this._nano);
	    };

	    LocalTime.prototype.withSecond = function withSecond() {
	        var second = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        if (this._second === second) {
	            return this;
	        }
	        return new LocalTime(this._hour, this._minute, second, this._nano);
	    };

	    LocalTime.prototype.withNano = function withNano() {
	        var nanoOfSecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        if (this._nano === nanoOfSecond) {
	            return this;
	        }
	        return new LocalTime(this._hour, this._minute, this._second, nanoOfSecond);
	    };

	    LocalTime.prototype.truncatedTo = function truncatedTo(unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit === _ChronoUnit.ChronoUnit.NANOS) {
	            return this;
	        }
	        var unitDur = unit.duration();
	        if (unitDur.seconds() > LocalTime.SECONDS_PER_DAY) {
	            throw new _errors.DateTimeException('Unit is too large to be used for truncation');
	        }
	        var dur = unitDur.toNanos();
	        if (_MathUtil.MathUtil.intMod(LocalTime.NANOS_PER_DAY, dur) !== 0) {
	            throw new _errors.DateTimeException('Unit must divide into a standard day without remainder');
	        }
	        var nod = this.toNanoOfDay();
	        return LocalTime.ofNanoOfDay(_MathUtil.MathUtil.intDiv(nod, dur) * dur);
	    };

	    LocalTime.prototype.plus = function plus(amount, unit) {
	        if (arguments.length < 2) {
	            return this.plus1(amount);
	        } else {
	            return this.plus2(amount, unit);
	        }
	    };

	    LocalTime.prototype.plus1 = function plus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    LocalTime.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this.plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, LocalTime.MICROS_PER_DAY) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, LocalTime.MILLIS_PER_DAY) * 1000000);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return this.plusMinutes(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return this.plusHours(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return this.plusHours(_MathUtil.MathUtil.intMod(amountToAdd, 2) * 12);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    LocalTime.prototype.plusHours = function plusHours(hoursToAdd) {
	        if (hoursToAdd === 0) {
	            return this;
	        }

	        var newHour = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(hoursToAdd, LocalTime.HOURS_PER_DAY) + this._hour + LocalTime.HOURS_PER_DAY, LocalTime.HOURS_PER_DAY);
	        return new LocalTime(newHour, this._minute, this._second, this._nano);
	    };

	    LocalTime.prototype.plusMinutes = function plusMinutes(minutesToAdd) {
	        if (minutesToAdd === 0) {
	            return this;
	        }
	        var mofd = this._hour * LocalTime.MINUTES_PER_HOUR + this._minute;
	        var newMofd = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(minutesToAdd, LocalTime.MINUTES_PER_DAY) + mofd + LocalTime.MINUTES_PER_DAY, LocalTime.MINUTES_PER_DAY);
	        if (mofd === newMofd) {
	            return this;
	        }
	        var newHour = _MathUtil.MathUtil.intDiv(newMofd, LocalTime.MINUTES_PER_HOUR);
	        var newMinute = _MathUtil.MathUtil.intMod(newMofd, LocalTime.MINUTES_PER_HOUR);
	        return new LocalTime(newHour, newMinute, this._second, this._nano);
	    };

	    LocalTime.prototype.plusSeconds = function plusSeconds(secondstoAdd) {
	        if (secondstoAdd === 0) {
	            return this;
	        }
	        var sofd = this._hour * LocalTime.SECONDS_PER_HOUR + this._minute * LocalTime.SECONDS_PER_MINUTE + this._second;
	        var newSofd = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(secondstoAdd, LocalTime.SECONDS_PER_DAY) + sofd + LocalTime.SECONDS_PER_DAY, LocalTime.SECONDS_PER_DAY);
	        if (sofd === newSofd) {
	            return this;
	        }
	        var newHour = _MathUtil.MathUtil.intDiv(newSofd, LocalTime.SECONDS_PER_HOUR);
	        var newMinute = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(newSofd, LocalTime.SECONDS_PER_MINUTE), LocalTime.MINUTES_PER_HOUR);
	        var newSecond = _MathUtil.MathUtil.intMod(newSofd, LocalTime.SECONDS_PER_MINUTE);
	        return new LocalTime(newHour, newMinute, newSecond, this._nano);
	    };

	    LocalTime.prototype.plusNanos = function plusNanos(nanosToAdd) {
	        if (nanosToAdd === 0) {
	            return this;
	        }
	        var nofd = this.toNanoOfDay();
	        var newNofd = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intMod(nanosToAdd, LocalTime.NANOS_PER_DAY) + nofd + LocalTime.NANOS_PER_DAY, LocalTime.NANOS_PER_DAY);
	        if (nofd === newNofd) {
	            return this;
	        }
	        var newHour = _MathUtil.MathUtil.intDiv(newNofd, LocalTime.NANOS_PER_HOUR);
	        var newMinute = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(newNofd, LocalTime.NANOS_PER_MINUTE), LocalTime.MINUTES_PER_HOUR);
	        var newSecond = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(newNofd, LocalTime.NANOS_PER_SECOND), LocalTime.SECONDS_PER_MINUTE);
	        var newNano = _MathUtil.MathUtil.intMod(newNofd, LocalTime.NANOS_PER_SECOND);
	        return new LocalTime(newHour, newMinute, newSecond, newNano);
	    };

	    LocalTime.prototype.minus = function minus(amount, unit) {
	        if (arguments.length < 2) {
	            return this.minus1(amount);
	        } else {
	            return this.minus2(amount, unit);
	        }
	    };

	    LocalTime.prototype.minus1 = function minus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    LocalTime.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    LocalTime.prototype.minusHours = function minusHours(hoursToSubtract) {
	        return this.plusHours(-1 * _MathUtil.MathUtil.intMod(hoursToSubtract, LocalTime.HOURS_PER_DAY));
	    };

	    LocalTime.prototype.minusMinutes = function minusMinutes(minutesToSubtract) {
	        return this.plusMinutes(-1 * _MathUtil.MathUtil.intMod(minutesToSubtract, LocalTime.MINUTES_PER_DAY));
	    };

	    LocalTime.prototype.minusSeconds = function minusSeconds(secondsToSubtract) {
	        return this.plusSeconds(-1 * _MathUtil.MathUtil.intMod(secondsToSubtract, LocalTime.SECONDS_PER_DAY));
	    };

	    LocalTime.prototype.minusNanos = function minusNanos(nanosToSubtract) {
	        return this.plusNanos(-1 * _MathUtil.MathUtil.intMod(nanosToSubtract, LocalTime.NANOS_PER_DAY));
	    };

	    LocalTime.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this;
	        }

	        if (_query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.offset() || _query === _TemporalQueries.TemporalQueries.localDate()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    LocalTime.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(LocalTime.NANO_OF_DAY, this.toNanoOfDay());
	    };

	    LocalTime.prototype.until = function until(endExclusive, unit) {
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        var end = LocalTime.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            var nanosUntil = end.toNanoOfDay() - this.toNanoOfDay();
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return nanosUntil;
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, 1000000);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, LocalTime.NANOS_PER_SECOND);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, LocalTime.NANOS_PER_MINUTE);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, LocalTime.NANOS_PER_HOUR);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return _MathUtil.MathUtil.intDiv(nanosUntil, 12 * LocalTime.NANOS_PER_HOUR);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    LocalTime.prototype.atDate = function atDate(date) {
	        return _LocalDateTime.LocalDateTime.of(date, this);
	    };

	    LocalTime.prototype.toSecondOfDay = function toSecondOfDay() {
	        var total = this._hour * LocalTime.SECONDS_PER_HOUR;
	        total += this._minute * LocalTime.SECONDS_PER_MINUTE;
	        total += this._second;
	        return total;
	    };

	    LocalTime.prototype.toNanoOfDay = function toNanoOfDay() {
	        var total = this._hour * LocalTime.NANOS_PER_HOUR;
	        total += this._minute * LocalTime.NANOS_PER_MINUTE;
	        total += this._second * LocalTime.NANOS_PER_SECOND;
	        total += this._nano;
	        return total;
	    };

	    LocalTime.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalTime, 'other');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this._hour, other._hour);
	        if (cmp === 0) {
	            cmp = _MathUtil.MathUtil.compareNumbers(this._minute, other._minute);
	            if (cmp === 0) {
	                cmp = _MathUtil.MathUtil.compareNumbers(this._second, other._second);
	                if (cmp === 0) {
	                    cmp = _MathUtil.MathUtil.compareNumbers(this._nano, other._nano);
	                }
	            }
	        }
	        return cmp;
	    };

	    LocalTime.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    LocalTime.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    LocalTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof LocalTime) {
	            return this._hour === other._hour && this._minute === other._minute && this._second === other._second && this._nano === other._nano;
	        }
	        return false;
	    };

	    LocalTime.prototype.hashCode = function hashCode() {
	        var nod = this.toNanoOfDay();
	        return nod ^ nod >>> 24;
	    };

	    LocalTime.prototype.toString = function toString() {
	        var buf = '';
	        var hourValue = this._hour;
	        var minuteValue = this._minute;
	        var secondValue = this._second;
	        var nanoValue = this._nano;
	        buf += hourValue < 10 ? '0' : '';
	        buf += hourValue;
	        buf += minuteValue < 10 ? ':0' : ':';
	        buf += minuteValue;
	        if (secondValue > 0 || nanoValue > 0) {
	            buf += secondValue < 10 ? ':0' : ':';
	            buf += secondValue;
	            if (nanoValue > 0) {
	                buf += '.';
	                if (_MathUtil.MathUtil.intMod(nanoValue, 1000000) === 0) {
	                    buf += ('' + (_MathUtil.MathUtil.intDiv(nanoValue, 1000000) + 1000)).substring(1);
	                } else if (_MathUtil.MathUtil.intMod(nanoValue, 1000) === 0) {
	                    buf += ('' + (_MathUtil.MathUtil.intDiv(nanoValue, 1000) + 1000000)).substring(1);
	                } else {
	                    buf += ('' + (nanoValue + 1000000000)).substring(1);
	                }
	            }
	        }
	        return buf;
	    };

	    LocalTime.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    LocalTime.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    return LocalTime;
	}(_Temporal2.Temporal);

	exports.LocalTime = LocalTime;
	function _init() {
	    LocalTime.HOURS = [];
	    for (var i = 0; i < 24; i++) {
	        LocalTime.HOURS[i] = makeLocalTimeConst(i);
	    }

	    function makeLocalTimeConst() {
	        var hour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var minute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var second = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var nano = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	        var localTime = Object.create(LocalTime.prototype);
	        _Temporal2.Temporal.call(localTime);
	        localTime._hour = hour;
	        localTime._minute = minute;
	        localTime._second = second;
	        localTime._nano = nano;
	        return localTime;
	    }

	    LocalTime.MIN = LocalTime.HOURS[0];

	    LocalTime.MAX = makeLocalTimeConst(23, 59, 59, 999999999);

	    LocalTime.MIDNIGHT = LocalTime.HOURS[0];

	    LocalTime.NOON = LocalTime.HOURS[12];

	    LocalTime.FROM = (0, _TemporalQuery.createTemporalQuery)('LocalTime.FROM', function (temporal) {
	        return LocalTime.from(temporal);
	    });

	    LocalTime.HOURS_PER_DAY = 24;

	    LocalTime.MINUTES_PER_HOUR = 60;

	    LocalTime.MINUTES_PER_DAY = LocalTime.MINUTES_PER_HOUR * LocalTime.HOURS_PER_DAY;

	    LocalTime.SECONDS_PER_MINUTE = 60;

	    LocalTime.SECONDS_PER_HOUR = LocalTime.SECONDS_PER_MINUTE * LocalTime.MINUTES_PER_HOUR;

	    LocalTime.SECONDS_PER_DAY = LocalTime.SECONDS_PER_HOUR * LocalTime.HOURS_PER_DAY;

	    LocalTime.MILLIS_PER_DAY = LocalTime.SECONDS_PER_DAY * 1000;

	    LocalTime.MICROS_PER_DAY = LocalTime.SECONDS_PER_DAY * 1000000;

	    LocalTime.NANOS_PER_SECOND = 1000000000;

	    LocalTime.NANOS_PER_MINUTE = LocalTime.NANOS_PER_SECOND * LocalTime.SECONDS_PER_MINUTE;

	    LocalTime.NANOS_PER_HOUR = LocalTime.NANOS_PER_MINUTE * LocalTime.MINUTES_PER_HOUR;

	    LocalTime.NANOS_PER_DAY = LocalTime.NANOS_PER_HOUR * LocalTime.HOURS_PER_DAY;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MathUtil = exports.MIN_SAFE_INTEGER = exports.MAX_SAFE_INTEGER = undefined;

	var _errors = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */


	var MAX_SAFE_INTEGER = exports.MAX_SAFE_INTEGER = 9007199254740991;
	var MIN_SAFE_INTEGER = exports.MIN_SAFE_INTEGER = -9007199254740991;

	var MathUtil = exports.MathUtil = function () {
	    function MathUtil() {
	        _classCallCheck(this, MathUtil);
	    }

	    MathUtil.intDiv = function intDiv(x, y) {
	        var r = x / y;
	        r = MathUtil.roundDown(r);
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.intMod = function intMod(x, y) {
	        var r = x - MathUtil.intDiv(x, y) * y;
	        r = MathUtil.roundDown(r);
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.roundDown = function roundDown(r) {
	        if (r < 0) {
	            return Math.ceil(r);
	        } else {
	            return Math.floor(r);
	        }
	    };

	    MathUtil.floorDiv = function floorDiv(x, y) {
	        var r = Math.floor(x / y);
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.floorMod = function floorMod(x, y) {
	        var r = x - MathUtil.floorDiv(x, y) * y;
	        return MathUtil.safeZero(r);
	    };

	    MathUtil.safeAdd = function safeAdd(x, y) {
	        MathUtil.verifyInt(x);
	        MathUtil.verifyInt(y);
	        if (x === 0) {
	            return MathUtil.safeZero(y);
	        }
	        if (y === 0) {
	            return MathUtil.safeZero(x);
	        }
	        var r = MathUtil.safeToInt(x + y);
	        if (r === x || r === y) {
	            throw new _errors.ArithmeticException('Invalid addition beyond MAX_SAFE_INTEGER!');
	        }
	        return r;
	    };

	    MathUtil.safeSubtract = function safeSubtract(x, y) {
	        MathUtil.verifyInt(x);
	        MathUtil.verifyInt(y);
	        if (x === 0 && y === 0) {
	            return 0;
	        } else if (x === 0) {
	            return MathUtil.safeZero(-1 * y);
	        } else if (y === 0) {
	            return MathUtil.safeZero(x);
	        }
	        return MathUtil.safeToInt(x - y);
	    };

	    MathUtil.safeMultiply = function safeMultiply(x, y) {
	        MathUtil.verifyInt(x);
	        MathUtil.verifyInt(y);
	        if (x === 1) {
	            return MathUtil.safeZero(y);
	        }
	        if (y === 1) {
	            return MathUtil.safeZero(x);
	        }
	        if (x === 0 || y === 0) {
	            return 0;
	        }
	        var r = MathUtil.safeToInt(x * y);
	        if (r / y !== x || x === MIN_SAFE_INTEGER && y === -1 || y === MIN_SAFE_INTEGER && x === -1) {
	            throw new _errors.ArithmeticException('Multiplication overflows: ' + x + ' * ' + y);
	        }
	        return r;
	    };

	    MathUtil.parseInt = function (_parseInt) {
	        function parseInt(_x) {
	            return _parseInt.apply(this, arguments);
	        }

	        parseInt.toString = function () {
	            return _parseInt.toString();
	        };

	        return parseInt;
	    }(function (value) {
	        var r = parseInt(value);
	        return MathUtil.safeToInt(r);
	    });

	    MathUtil.safeToInt = function safeToInt(value) {
	        MathUtil.verifyInt(value);
	        return MathUtil.safeZero(value);
	    };

	    MathUtil.verifyInt = function verifyInt(value) {
	        if (value == null) {
	            throw new _errors.ArithmeticException('Invalid value: \'' + value + '\', using null or undefined as argument');
	        }
	        if (isNaN(value)) {
	            throw new _errors.ArithmeticException('Invalid int value, using NaN as argument');
	        }
	        if (value > MAX_SAFE_INTEGER || value < MIN_SAFE_INTEGER) {
	            throw new _errors.ArithmeticException('Calculation overflows an int: ' + value);
	        }
	    };

	    MathUtil.safeZero = function safeZero(value) {
	        return value === 0 ? 0 : +value;
	    };

	    MathUtil.compareNumbers = function compareNumbers(a, b) {
	        if (a < b) {
	            return -1;
	        }
	        if (a > b) {
	            return 1;
	        }
	        return 0;
	    };

	    return MathUtil;
	}();

	MathUtil.MAX_SAFE_INTEGER = MAX_SAFE_INTEGER;
	MathUtil.MIN_SAFE_INTEGER = MIN_SAFE_INTEGER;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.LocalDateTime = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _ZonedDateTime = __webpack_require__(60);

	var _ZoneId = __webpack_require__(27);

	var _ZoneOffset = __webpack_require__(26);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalQuery = __webpack_require__(23);

	var _ChronoLocalDateTime2 = __webpack_require__(62);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var LocalDateTime = function (_ChronoLocalDateTime) {
	    _inherits(LocalDateTime, _ChronoLocalDateTime);

	    LocalDateTime.now = function now(clockOrZone) {
	        if (clockOrZone == null) {
	            return LocalDateTime._now(_Clock.Clock.systemDefaultZone());
	        } else if (clockOrZone instanceof _Clock.Clock) {
	            return LocalDateTime._now(clockOrZone);
	        } else {
	            return LocalDateTime._now(_Clock.Clock.system(clockOrZone));
	        }
	    };

	    LocalDateTime._now = function _now(clock) {
	        (0, _assert.requireNonNull)(clock, 'clock');
	        return LocalDateTime.ofInstant(clock.instant(), clock.zone());
	    };

	    LocalDateTime._ofEpochMillis = function _ofEpochMillis(epochMilli, offset) {
	        var localSecond = _MathUtil.MathUtil.floorDiv(epochMilli, 1000) + offset.totalSeconds();
	        var localEpochDay = _MathUtil.MathUtil.floorDiv(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var secsOfDay = _MathUtil.MathUtil.floorMod(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var nanoOfSecond = _MathUtil.MathUtil.floorMod(epochMilli, 1000) * 1000000;
	        var date = _LocalDate.LocalDate.ofEpochDay(localEpochDay);
	        var time = _LocalTime.LocalTime.ofSecondOfDay(secsOfDay, nanoOfSecond);
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.of = function of() {
	        if (arguments.length === 2 && (arguments[0] instanceof _LocalDate.LocalDate || arguments[1] instanceof _LocalTime.LocalTime)) {
	            return LocalDateTime.ofDateAndTime.apply(this, arguments);
	        } else {
	            return LocalDateTime.ofNumbers.apply(this, arguments);
	        }
	    };

	    LocalDateTime.ofNumbers = function ofNumbers() {
	        var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var dayOfMonth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	        var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	        var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	        var nanoOfSecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

	        var date = _LocalDate.LocalDate.of(year, month, dayOfMonth);
	        var time = _LocalTime.LocalTime.of(hour, minute, second, nanoOfSecond);
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.ofDateAndTime = function ofDateAndTime(date, time) {
	        (0, _assert.requireNonNull)(date, 'date');
	        (0, _assert.requireNonNull)(time, 'time');
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.ofInstant = function ofInstant(instant) {
	        var zone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ZoneId.ZoneId.systemDefault();

	        (0, _assert.requireNonNull)(instant, 'instant');
	        (0, _assert.requireInstance)(instant, _Instant.Instant, 'instant');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        var offset = zone.rules().offset(instant);
	        return LocalDateTime.ofEpochSecond(instant.epochSecond(), instant.nano(), offset);
	    };

	    LocalDateTime.ofEpochSecond = function ofEpochSecond() {
	        var epochSecond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var nanoOfSecond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var offset = arguments[2];

	        if (arguments.length === 2 && nanoOfSecond instanceof _ZoneOffset.ZoneOffset) {
	            offset = nanoOfSecond;
	            nanoOfSecond = 0;
	        }
	        (0, _assert.requireNonNull)(offset, 'offset');
	        var localSecond = epochSecond + offset.totalSeconds();
	        var localEpochDay = _MathUtil.MathUtil.floorDiv(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var secsOfDay = _MathUtil.MathUtil.floorMod(localSecond, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        var date = _LocalDate.LocalDate.ofEpochDay(localEpochDay);
	        var time = _LocalTime.LocalTime.ofSecondOfDay(secsOfDay, nanoOfSecond);
	        return new LocalDateTime(date, time);
	    };

	    LocalDateTime.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (temporal instanceof LocalDateTime) {
	            return temporal;
	        } else if (temporal instanceof _ZonedDateTime.ZonedDateTime) {
	            return temporal.toLocalDateTime();
	        }
	        try {
	            var date = _LocalDate.LocalDate.from(temporal);
	            var time = _LocalTime.LocalTime.from(temporal);
	            return new LocalDateTime(date, time);
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain LocalDateTime TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    LocalDateTime.parse = function parse(text) {
	        var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_DATE_TIME;

	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.parse(text, LocalDateTime.FROM);
	    };

	    function LocalDateTime(date, time) {
	        _classCallCheck(this, LocalDateTime);

	        var _this = _possibleConstructorReturn(this, _ChronoLocalDateTime.call(this));

	        (0, _assert.requireInstance)(date, _LocalDate.LocalDate, 'date');
	        (0, _assert.requireInstance)(time, _LocalTime.LocalTime, 'time');
	        _this._date = date;
	        _this._time = time;
	        return _this;
	    }

	    LocalDateTime.prototype._withDateTime = function _withDateTime(newDate, newTime) {
	        if (this._date === newDate && this._time === newTime) {
	            return this;
	        }
	        return new LocalDateTime(newDate, newTime);
	    };

	    LocalDateTime.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit.isDateBased() || fieldOrUnit.isTimeBased();
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isDateBased() || fieldOrUnit.isTimeBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    LocalDateTime.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field.isTimeBased() ? this._time.range(field) : this._date.range(field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    LocalDateTime.prototype.get = function get(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field.isTimeBased() ? this._time.get(field) : this._date.get(field);
	        }
	        return _ChronoLocalDateTime.prototype.get.call(this, field);
	    };

	    LocalDateTime.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            return field.isTimeBased() ? this._time.getLong(field) : this._date.getLong(field);
	        }
	        return field.getFrom(this);
	    };

	    LocalDateTime.prototype.year = function year() {
	        return this._date.year();
	    };

	    LocalDateTime.prototype.monthValue = function monthValue() {
	        return this._date.monthValue();
	    };

	    LocalDateTime.prototype.month = function month() {
	        return this._date.month();
	    };

	    LocalDateTime.prototype.dayOfMonth = function dayOfMonth() {
	        return this._date.dayOfMonth();
	    };

	    LocalDateTime.prototype.dayOfYear = function dayOfYear() {
	        return this._date.dayOfYear();
	    };

	    LocalDateTime.prototype.dayOfWeek = function dayOfWeek() {
	        return this._date.dayOfWeek();
	    };

	    LocalDateTime.prototype.hour = function hour() {
	        return this._time.hour();
	    };

	    LocalDateTime.prototype.minute = function minute() {
	        return this._time.minute();
	    };

	    LocalDateTime.prototype.second = function second() {
	        return this._time.second();
	    };

	    LocalDateTime.prototype.nano = function nano() {
	        return this._time.nano();
	    };

	    LocalDateTime.prototype.with = function _with(adjusterOrField, newValue) {
	        if (arguments.length === 1) {
	            return this.withTemporalAdjuster(adjusterOrField);
	        } else {
	            return this.with2(adjusterOrField, newValue);
	        }
	    };

	    LocalDateTime.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');

	        if (adjuster instanceof _LocalDate.LocalDate) {
	            return this._withDateTime(adjuster, this._time);
	        } else if (adjuster instanceof _LocalTime.LocalTime) {
	            return this._withDateTime(this._date, adjuster);
	        } else if (adjuster instanceof LocalDateTime) {
	            return adjuster;
	        }
	        (0, _assert.assert)(typeof adjuster.adjustInto === 'function', 'adjuster', _errors.IllegalArgumentException);
	        return adjuster.adjustInto(this);
	    };

	    LocalDateTime.prototype.with2 = function with2(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            if (field.isTimeBased()) {
	                return this._withDateTime(this._date, this._time.with(field, newValue));
	            } else {
	                return this._withDateTime(this._date.with(field, newValue), this._time);
	            }
	        }
	        return field.adjustInto(this, newValue);
	    };

	    LocalDateTime.prototype.withYear = function withYear(year) {
	        return this._withDateTime(this._date.withYear(year), this._time);
	    };

	    LocalDateTime.prototype.withMonth = function withMonth(month) {
	        return this._withDateTime(this._date.withMonth(month), this._time);
	    };

	    LocalDateTime.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        return this._withDateTime(this._date.withDayOfMonth(dayOfMonth), this._time);
	    };

	    LocalDateTime.prototype.withDayOfYear = function withDayOfYear(dayOfYear) {
	        return this._withDateTime(this._date.withDayOfYear(dayOfYear), this._time);
	    };

	    LocalDateTime.prototype.withHour = function withHour(hour) {
	        var newTime = this._time.withHour(hour);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.withMinute = function withMinute(minute) {
	        var newTime = this._time.withMinute(minute);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.withSecond = function withSecond(second) {
	        var newTime = this._time.withSecond(second);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.withNano = function withNano(nanoOfSecond) {
	        var newTime = this._time.withNano(nanoOfSecond);
	        return this._withDateTime(this._date, newTime);
	    };

	    LocalDateTime.prototype.truncatedTo = function truncatedTo(unit) {
	        return this._withDateTime(this._date, this._time.truncatedTo(unit));
	    };

	    LocalDateTime.prototype.plus = function plus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.plusTemporalAmount(amount);
	        } else {
	            return this.plus2(amount, unit);
	        }
	    };

	    LocalDateTime.prototype.plusTemporalAmount = function plusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    LocalDateTime.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this.plusDays(_MathUtil.MathUtil.intDiv(amountToAdd, _LocalTime.LocalTime.MICROS_PER_DAY)).plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, _LocalTime.LocalTime.MICROS_PER_DAY) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusDays(_MathUtil.MathUtil.intDiv(amountToAdd, _LocalTime.LocalTime.MILLIS_PER_DAY)).plusNanos(_MathUtil.MathUtil.intMod(amountToAdd, _LocalTime.LocalTime.MILLIS_PER_DAY) * 1000000);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MINUTES:
	                    return this.plusMinutes(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HOURS:
	                    return this.plusHours(amountToAdd);
	                case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                    return this.plusDays(_MathUtil.MathUtil.intDiv(amountToAdd, 256)).plusHours(_MathUtil.MathUtil.intMod(amountToAdd, 256) * 12);}
	            return this._withDateTime(this._date.plus(amountToAdd, unit), this._time);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    LocalDateTime.prototype.plusYears = function plusYears(years) {
	        var newDate = this._date.plusYears(years);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusMonths = function plusMonths(months) {
	        var newDate = this._date.plusMonths(months);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusWeeks = function plusWeeks(weeks) {
	        var newDate = this._date.plusWeeks(weeks);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusDays = function plusDays(days) {
	        var newDate = this._date.plusDays(days);
	        return this._withDateTime(newDate, this._time);
	    };

	    LocalDateTime.prototype.plusHours = function plusHours(hours) {
	        return this._plusWithOverflow(this._date, hours, 0, 0, 0, 1);
	    };

	    LocalDateTime.prototype.plusMinutes = function plusMinutes(minutes) {
	        return this._plusWithOverflow(this._date, 0, minutes, 0, 0, 1);
	    };

	    LocalDateTime.prototype.plusSeconds = function plusSeconds(seconds) {
	        return this._plusWithOverflow(this._date, 0, 0, seconds, 0, 1);
	    };

	    LocalDateTime.prototype.plusNanos = function plusNanos(nanos) {
	        return this._plusWithOverflow(this._date, 0, 0, 0, nanos, 1);
	    };

	    LocalDateTime.prototype.minus = function minus(amount, unit) {
	        if (arguments.length === 1) {
	            return this.minusTemporalAmount(amount);
	        } else {
	            return this.minus2(amount, unit);
	        }
	    };

	    LocalDateTime.prototype.minusTemporalAmount = function minusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    LocalDateTime.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    LocalDateTime.prototype.minusYears = function minusYears(years) {
	        return this.plusYears(-1 * years);
	    };

	    LocalDateTime.prototype.minusMonths = function minusMonths(months) {
	        return this.plusMonths(-1 * months);
	    };

	    LocalDateTime.prototype.minusWeeks = function minusWeeks(weeks) {
	        return this.plusWeeks(-1 * weeks);
	    };

	    LocalDateTime.prototype.minusDays = function minusDays(days) {
	        return this.plusDays(-1 * days);
	    };

	    LocalDateTime.prototype.minusHours = function minusHours(hours) {
	        return this._plusWithOverflow(this._date, hours, 0, 0, 0, -1);
	    };

	    LocalDateTime.prototype.minusMinutes = function minusMinutes(minutes) {
	        return this._plusWithOverflow(this._date, 0, minutes, 0, 0, -1);
	    };

	    LocalDateTime.prototype.minusSeconds = function minusSeconds(seconds) {
	        return this._plusWithOverflow(this._date, 0, 0, seconds, 0, -1);
	    };

	    LocalDateTime.prototype.minusNanos = function minusNanos(nanos) {
	        return this._plusWithOverflow(this._date, 0, 0, 0, nanos, -1);
	    };

	    LocalDateTime.prototype._plusWithOverflow = function _plusWithOverflow(newDate, hours, minutes, seconds, nanos, sign) {
	        if ((hours | minutes | seconds | nanos) === 0) {
	            return this._withDateTime(newDate, this._time);
	        }
	        var totDays = _MathUtil.MathUtil.intDiv(nanos, _LocalTime.LocalTime.NANOS_PER_DAY) + _MathUtil.MathUtil.intDiv(seconds, _LocalTime.LocalTime.SECONDS_PER_DAY) + _MathUtil.MathUtil.intDiv(minutes, _LocalTime.LocalTime.MINUTES_PER_DAY) + _MathUtil.MathUtil.intDiv(hours, _LocalTime.LocalTime.HOURS_PER_DAY);
	        totDays *= sign;
	        var totNanos = _MathUtil.MathUtil.intMod(nanos, _LocalTime.LocalTime.NANOS_PER_DAY) + _MathUtil.MathUtil.intMod(seconds, _LocalTime.LocalTime.SECONDS_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_SECOND + _MathUtil.MathUtil.intMod(minutes, _LocalTime.LocalTime.MINUTES_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_MINUTE + _MathUtil.MathUtil.intMod(hours, _LocalTime.LocalTime.HOURS_PER_DAY) * _LocalTime.LocalTime.NANOS_PER_HOUR;
	        var curNoD = this._time.toNanoOfDay();
	        totNanos = totNanos * sign + curNoD;
	        totDays += _MathUtil.MathUtil.floorDiv(totNanos, _LocalTime.LocalTime.NANOS_PER_DAY);
	        var newNoD = _MathUtil.MathUtil.floorMod(totNanos, _LocalTime.LocalTime.NANOS_PER_DAY);
	        var newTime = newNoD === curNoD ? this._time : _LocalTime.LocalTime.ofNanoOfDay(newNoD);
	        return this._withDateTime(newDate.plusDays(totDays), newTime);
	    };

	    LocalDateTime.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this.toLocalDate();
	        }
	        return _ChronoLocalDateTime.prototype.query.call(this, _query);
	    };

	    LocalDateTime.prototype.adjustInto = function adjustInto(temporal) {
	        return _ChronoLocalDateTime.prototype.adjustInto.call(this, temporal);
	    };

	    LocalDateTime.prototype.until = function until(endExclusive, unit) {
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        var end = LocalDateTime.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            if (unit.isTimeBased()) {
	                var daysUntil = this._date.daysUntil(end._date);
	                var timeUntil = end._time.toNanoOfDay() - this._time.toNanoOfDay();
	                if (daysUntil > 0 && timeUntil < 0) {
	                    daysUntil--;
	                    timeUntil += _LocalTime.LocalTime.NANOS_PER_DAY;
	                } else if (daysUntil < 0 && timeUntil > 0) {
	                    daysUntil++;
	                    timeUntil -= _LocalTime.LocalTime.NANOS_PER_DAY;
	                }
	                var amount = daysUntil;
	                switch (unit) {
	                    case _ChronoUnit.ChronoUnit.NANOS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.NANOS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, timeUntil);
	                    case _ChronoUnit.ChronoUnit.MICROS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.MICROS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, 1000));
	                    case _ChronoUnit.ChronoUnit.MILLIS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.MILLIS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, 1000000));
	                    case _ChronoUnit.ChronoUnit.SECONDS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.SECONDS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_SECOND));
	                    case _ChronoUnit.ChronoUnit.MINUTES:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.MINUTES_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_MINUTE));
	                    case _ChronoUnit.ChronoUnit.HOURS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, _LocalTime.LocalTime.HOURS_PER_DAY);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_HOUR));
	                    case _ChronoUnit.ChronoUnit.HALF_DAYS:
	                        amount = _MathUtil.MathUtil.safeMultiply(amount, 2);
	                        return _MathUtil.MathUtil.safeAdd(amount, _MathUtil.MathUtil.intDiv(timeUntil, _LocalTime.LocalTime.NANOS_PER_HOUR * 12));
	                }
	                throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	            }
	            var endDate = end._date;
	            var endTime = end._time;
	            if (endDate.isAfter(this._date) && endTime.isBefore(this._time)) {
	                endDate = endDate.minusDays(1);
	            } else if (endDate.isBefore(this._date) && endTime.isAfter(this._time)) {
	                endDate = endDate.plusDays(1);
	            }
	            return this._date.until(endDate, unit);
	        }
	        return unit.between(this, end);
	    };

	    LocalDateTime.prototype.atZone = function atZone(zone) {
	        return _ZonedDateTime.ZonedDateTime.of(this, zone);
	    };

	    LocalDateTime.prototype.toLocalDate = function toLocalDate() {
	        return this._date;
	    };

	    LocalDateTime.prototype.toLocalTime = function toLocalTime() {
	        return this._time;
	    };

	    LocalDateTime.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalDateTime, 'other');
	        return this._compareTo0(other);
	    };

	    LocalDateTime.prototype._compareTo0 = function _compareTo0(other) {
	        var cmp = this._date.compareTo(other.toLocalDate());
	        if (cmp === 0) {
	            cmp = this._time.compareTo(other.toLocalTime());
	        }
	        return cmp;
	    };

	    LocalDateTime.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    LocalDateTime.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    LocalDateTime.prototype.isEqual = function isEqual(other) {
	        return this.compareTo(other) === 0;
	    };

	    LocalDateTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof LocalDateTime) {
	            return this._date.equals(other._date) && this._time.equals(other._time);
	        }
	        return false;
	    };

	    LocalDateTime.prototype.hashCode = function hashCode() {
	        return this._date.hashCode() ^ this._time.hashCode();
	    };

	    LocalDateTime.prototype.toString = function toString() {
	        return this._date.toString() + 'T' + this._time.toString();
	    };

	    LocalDateTime.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    LocalDateTime.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    return LocalDateTime;
	}(_ChronoLocalDateTime2.ChronoLocalDateTime);

	exports.LocalDateTime = LocalDateTime;
	function _init() {
	    LocalDateTime.MIN = LocalDateTime.of(_LocalDate.LocalDate.MIN, _LocalTime.LocalTime.MIN);

	    LocalDateTime.MAX = LocalDateTime.of(_LocalDate.LocalDate.MAX, _LocalTime.LocalTime.MAX);

	    LocalDateTime.FROM = (0, _TemporalQuery.createTemporalQuery)('LocalDateTime.FROM', function (temporal) {
	        return LocalDateTime.from(temporal);
	    });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.LocalDate = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _errors = __webpack_require__(3);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _ChronoLocalDate2 = __webpack_require__(30);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalQuery = __webpack_require__(23);

	var _ValueRange = __webpack_require__(19);

	var _DateTimeFormatter = __webpack_require__(31);

	var _Clock = __webpack_require__(1);

	var _DayOfWeek = __webpack_require__(11);

	var _Month = __webpack_require__(24);

	var _Period = __webpack_require__(32);

	var _YearConstants = __webpack_require__(17);

	var _LocalTime = __webpack_require__(5);

	var _LocalDateTime = __webpack_require__(7);

	var _Year = __webpack_require__(55);

	var _ZoneId = __webpack_require__(27);

	var _ZoneOffset = __webpack_require__(26);

	var _ZonedDateTime = __webpack_require__(60);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DAYS_PER_CYCLE = 146097;

	var DAYS_0000_TO_1970 = DAYS_PER_CYCLE * 5 - (30 * 365 + 7);

	var LocalDate = function (_ChronoLocalDate) {
	    _inherits(LocalDate, _ChronoLocalDate);

	    LocalDate.now = function now(clockOrZone) {
	        var clock = void 0;
	        if (clockOrZone == null) {
	            clock = _Clock.Clock.systemDefaultZone();
	        } else if (clockOrZone instanceof _ZoneId.ZoneId) {
	            clock = _Clock.Clock.system(clockOrZone);
	        } else {
	            clock = clockOrZone;
	        }
	        return LocalDate.ofInstant(clock.instant(), clock.zone());
	    };

	    LocalDate.ofInstant = function ofInstant(instant) {
	        var zone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ZoneId.ZoneId.systemDefault();

	        (0, _assert.requireNonNull)(instant, 'instant');
	        var offset = zone.rules().offset(instant);
	        var epochSec = instant.epochSecond() + offset.totalSeconds();
	        var epochDay = _MathUtil.MathUtil.floorDiv(epochSec, _LocalTime.LocalTime.SECONDS_PER_DAY);
	        return LocalDate.ofEpochDay(epochDay);
	    };

	    LocalDate.of = function of(year, month, dayOfMonth) {
	        return new LocalDate(year, month, dayOfMonth);
	    };

	    LocalDate.ofYearDay = function ofYearDay(year, dayOfYear) {
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);

	        var leap = _IsoChronology.IsoChronology.isLeapYear(year);
	        if (dayOfYear === 366 && leap === false) {
	            (0, _assert.assert)(false, 'Invalid date \'DayOfYear 366\' as \'' + year + '\' is not a leap year', _errors.DateTimeException);
	        }
	        var moy = _Month.Month.of(Math.floor((dayOfYear - 1) / 31 + 1));
	        var monthEnd = moy.firstDayOfYear(leap) + moy.length(leap) - 1;
	        if (dayOfYear > monthEnd) {
	            moy = moy.plus(1);
	        }
	        var dom = dayOfYear - moy.firstDayOfYear(leap) + 1;
	        return new LocalDate(year, moy.value(), dom);
	    };

	    LocalDate.ofEpochDay = function ofEpochDay() {
	        var epochDay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	        var adjust = void 0,
	            adjustCycles = void 0,
	            dom = void 0,
	            doyEst = void 0,
	            marchDoy0 = void 0,
	            marchMonth0 = void 0,
	            month = void 0,
	            year = void 0,
	            yearEst = void 0,
	            zeroDay = void 0;
	        zeroDay = epochDay + DAYS_0000_TO_1970;
	        zeroDay -= 60;
	        adjust = 0;
	        if (zeroDay < 0) {
	            adjustCycles = _MathUtil.MathUtil.intDiv(zeroDay + 1, DAYS_PER_CYCLE) - 1;
	            adjust = adjustCycles * 400;
	            zeroDay += -adjustCycles * DAYS_PER_CYCLE;
	        }
	        yearEst = _MathUtil.MathUtil.intDiv(400 * zeroDay + 591, DAYS_PER_CYCLE);
	        doyEst = zeroDay - (365 * yearEst + _MathUtil.MathUtil.intDiv(yearEst, 4) - _MathUtil.MathUtil.intDiv(yearEst, 100) + _MathUtil.MathUtil.intDiv(yearEst, 400));
	        if (doyEst < 0) {
	            yearEst--;
	            doyEst = zeroDay - (365 * yearEst + _MathUtil.MathUtil.intDiv(yearEst, 4) - _MathUtil.MathUtil.intDiv(yearEst, 100) + _MathUtil.MathUtil.intDiv(yearEst, 400));
	        }
	        yearEst += adjust;
	        marchDoy0 = doyEst;
	        marchMonth0 = _MathUtil.MathUtil.intDiv(marchDoy0 * 5 + 2, 153);
	        month = (marchMonth0 + 2) % 12 + 1;
	        dom = marchDoy0 - _MathUtil.MathUtil.intDiv(marchMonth0 * 306 + 5, 10) + 1;
	        yearEst += _MathUtil.MathUtil.intDiv(marchMonth0, 10);
	        year = yearEst;
	        return new LocalDate(year, month, dom);
	    };

	    LocalDate.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        var date = temporal.query(_TemporalQueries.TemporalQueries.localDate());
	        if (date == null) {
	            throw new _errors.DateTimeException('Unable to obtain LocalDate from TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	        return date;
	    };

	    LocalDate.parse = function parse(text) {
	        var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_DATE;

	        (0, _assert.assert)(formatter != null, 'formatter', _errors.NullPointerException);
	        return formatter.parse(text, LocalDate.FROM);
	    };

	    LocalDate._resolvePreviousValid = function _resolvePreviousValid(year, month, day) {
	        switch (month) {
	            case 2:
	                day = Math.min(day, _IsoChronology.IsoChronology.isLeapYear(year) ? 29 : 28);
	                break;
	            case 4:
	            case 6:
	            case 9:
	            case 11:
	                day = Math.min(day, 30);
	                break;
	        }
	        return LocalDate.of(year, month, day);
	    };

	    function LocalDate(year, month, dayOfMonth) {
	        _classCallCheck(this, LocalDate);

	        var _this = _possibleConstructorReturn(this, _ChronoLocalDate.call(this));

	        if (month instanceof _Month.Month) {
	            month = month.value();
	        }
	        _this._year = _MathUtil.MathUtil.safeZero(year);
	        _this._month = _MathUtil.MathUtil.safeZero(month);
	        _this._day = _MathUtil.MathUtil.safeZero(dayOfMonth);
	        LocalDate._validate(_this._year, _this._month, _this._day);
	        return _this;
	    }

	    LocalDate._validate = function _validate(year, month, dayOfMonth) {
	        var dom = void 0;
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(month);
	        _ChronoField.ChronoField.DAY_OF_MONTH.checkValidValue(dayOfMonth);

	        if (dayOfMonth > 28) {
	            dom = 31;
	            switch (month) {
	                case 2:
	                    dom = _IsoChronology.IsoChronology.isLeapYear(year) ? 29 : 28;
	                    break;
	                case 4:
	                case 6:
	                case 9:
	                case 11:
	                    dom = 30;
	            }
	            if (dayOfMonth > dom) {
	                if (dayOfMonth === 29) {
	                    (0, _assert.assert)(false, 'Invalid date \'February 29\' as \'' + year + '\' is not a leap year', _errors.DateTimeException);
	                } else {
	                    (0, _assert.assert)(false, 'Invalid date \'' + year + '\' \'' + month + '\' \'' + dayOfMonth + '\'', _errors.DateTimeException);
	                }
	            }
	        }
	    };

	    LocalDate.prototype.isSupported = function isSupported(field) {
	        return _ChronoLocalDate.prototype.isSupported.call(this, field);
	    };

	    LocalDate.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            if (field.isDateBased()) {
	                switch (field) {
	                    case _ChronoField.ChronoField.DAY_OF_MONTH:
	                        return _ValueRange.ValueRange.of(1, this.lengthOfMonth());
	                    case _ChronoField.ChronoField.DAY_OF_YEAR:
	                        return _ValueRange.ValueRange.of(1, this.lengthOfYear());
	                    case _ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH:
	                        return _ValueRange.ValueRange.of(1, this.month() === _Month.Month.FEBRUARY && this.isLeapYear() === false ? 4 : 5);
	                    case _ChronoField.ChronoField.YEAR_OF_ERA:
	                        return this._year <= 0 ? _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE + 1) : _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE);
	                }
	                return field.range();
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    LocalDate.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    LocalDate.prototype.getLong = function getLong(field) {
	        (0, _assert.assert)(field != null, '', _errors.NullPointerException);
	        if (field instanceof _ChronoField.ChronoField) {
	            return this._get0(field);
	        }
	        return field.getFrom(this);
	    };

	    LocalDate.prototype._get0 = function _get0(field) {
	        switch (field) {
	            case _ChronoField.ChronoField.DAY_OF_WEEK:
	                return this.dayOfWeek().value();
	            case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH:
	                return _MathUtil.MathUtil.intMod(this._day - 1, 7) + 1;
	            case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR:
	                return _MathUtil.MathUtil.intMod(this.dayOfYear() - 1, 7) + 1;
	            case _ChronoField.ChronoField.DAY_OF_MONTH:
	                return this._day;
	            case _ChronoField.ChronoField.DAY_OF_YEAR:
	                return this.dayOfYear();
	            case _ChronoField.ChronoField.EPOCH_DAY:
	                return this.toEpochDay();
	            case _ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH:
	                return _MathUtil.MathUtil.intDiv(this._day - 1, 7) + 1;
	            case _ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR:
	                return _MathUtil.MathUtil.intDiv(this.dayOfYear() - 1, 7) + 1;
	            case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                return this._month;
	            case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                return this._prolepticMonth();
	            case _ChronoField.ChronoField.YEAR_OF_ERA:
	                return this._year >= 1 ? this._year : 1 - this._year;
	            case _ChronoField.ChronoField.YEAR:
	                return this._year;
	            case _ChronoField.ChronoField.ERA:
	                return this._year >= 1 ? 1 : 0;
	        }
	        throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	    };

	    LocalDate.prototype._prolepticMonth = function _prolepticMonth() {
	        return this._year * 12 + (this._month - 1);
	    };

	    LocalDate.prototype.chronology = function chronology() {
	        return _IsoChronology.IsoChronology.INSTANCE;
	    };

	    LocalDate.prototype.year = function year() {
	        return this._year;
	    };

	    LocalDate.prototype.monthValue = function monthValue() {
	        return this._month;
	    };

	    LocalDate.prototype.month = function month() {
	        return _Month.Month.of(this._month);
	    };

	    LocalDate.prototype.dayOfMonth = function dayOfMonth() {
	        return this._day;
	    };

	    LocalDate.prototype.dayOfYear = function dayOfYear() {
	        return this.month().firstDayOfYear(this.isLeapYear()) + this._day - 1;
	    };

	    LocalDate.prototype.dayOfWeek = function dayOfWeek() {
	        var dow0 = _MathUtil.MathUtil.floorMod(this.toEpochDay() + 3, 7);
	        return _DayOfWeek.DayOfWeek.of(dow0 + 1);
	    };

	    LocalDate.prototype.isLeapYear = function isLeapYear() {
	        return _IsoChronology.IsoChronology.isLeapYear(this._year);
	    };

	    LocalDate.prototype.lengthOfMonth = function lengthOfMonth() {
	        switch (this._month) {
	            case 2:
	                return this.isLeapYear() ? 29 : 28;
	            case 4:
	            case 6:
	            case 9:
	            case 11:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    LocalDate.prototype.lengthOfYear = function lengthOfYear() {
	        return this.isLeapYear() ? 366 : 365;
	    };

	    LocalDate.prototype.with = function _with(fieldOrAdjuster, newValue) {
	        if (arguments.length < 2) {
	            return this.withTemporalAdjuster(fieldOrAdjuster);
	        } else {
	            return this.withFieldAndValue(fieldOrAdjuster, newValue);
	        }
	    };

	    LocalDate.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');

	        if (adjuster instanceof LocalDate) {
	            return adjuster;
	        }
	        (0, _assert.assert)(typeof adjuster.adjustInto === 'function', 'adjuster', _errors.IllegalArgumentException);
	        return adjuster.adjustInto(this);
	    };

	    LocalDate.prototype.withFieldAndValue = function withFieldAndValue(field, newValue) {
	        (0, _assert.assert)(field != null, 'field', _errors.NullPointerException);
	        if (field instanceof _ChronoField.ChronoField) {
	            var f = field;
	            f.checkValidValue(newValue);
	            switch (f) {
	                case _ChronoField.ChronoField.DAY_OF_WEEK:
	                    return this.plusDays(newValue - this.dayOfWeek().value());
	                case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH:
	                    return this.plusDays(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH));
	                case _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR:
	                    return this.plusDays(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR));
	                case _ChronoField.ChronoField.DAY_OF_MONTH:
	                    return this.withDayOfMonth(newValue);
	                case _ChronoField.ChronoField.DAY_OF_YEAR:
	                    return this.withDayOfYear(newValue);
	                case _ChronoField.ChronoField.EPOCH_DAY:
	                    return LocalDate.ofEpochDay(newValue);
	                case _ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH:
	                    return this.plusWeeks(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_WEEK_OF_MONTH));
	                case _ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR:
	                    return this.plusWeeks(newValue - this.getLong(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR));
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this.withMonth(newValue);
	                case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                    return this.plusMonths(newValue - this.getLong(_ChronoField.ChronoField.PROLEPTIC_MONTH));
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this.withYear(this._year >= 1 ? newValue : 1 - newValue);
	                case _ChronoField.ChronoField.YEAR:
	                    return this.withYear(newValue);
	                case _ChronoField.ChronoField.ERA:
	                    return this.getLong(_ChronoField.ChronoField.ERA) === newValue ? this : this.withYear(1 - this._year);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    LocalDate.prototype.withYear = function withYear(year) {
	        if (this._year === year) {
	            return this;
	        }
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        return LocalDate._resolvePreviousValid(year, this._month, this._day);
	    };

	    LocalDate.prototype.withMonth = function withMonth(month) {
	        var m = month instanceof _Month.Month ? month.value() : month;
	        if (this._month === m) {
	            return this;
	        }
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(m);
	        return LocalDate._resolvePreviousValid(this._year, m, this._day);
	    };

	    LocalDate.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        if (this._day === dayOfMonth) {
	            return this;
	        }
	        return LocalDate.of(this._year, this._month, dayOfMonth);
	    };

	    LocalDate.prototype.withDayOfYear = function withDayOfYear(dayOfYear) {
	        if (this.dayOfYear() === dayOfYear) {
	            return this;
	        }
	        return LocalDate.ofYearDay(this._year, dayOfYear);
	    };

	    LocalDate.prototype.plus = function plus(p1, p2) {
	        if (arguments.length < 2) {
	            return this.plus1(p1);
	        } else {
	            return this.plus2(p1, p2);
	        }
	    };

	    LocalDate.prototype.plus1 = function plus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.addTo(this);
	    };

	    LocalDate.prototype.plus2 = function plus2(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return this.plusDays(amountToAdd);
	                case _ChronoUnit.ChronoUnit.WEEKS:
	                    return this.plusWeeks(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return this.plusMonths(amountToAdd);
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return this.plusYears(amountToAdd);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 10));
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 100));
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 1000));
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return this.with(_ChronoField.ChronoField.ERA, _MathUtil.MathUtil.safeAdd(this.getLong(_ChronoField.ChronoField.ERA), amountToAdd));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    LocalDate.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(this._year + yearsToAdd);
	        return LocalDate._resolvePreviousValid(newYear, this._month, this._day);
	    };

	    LocalDate.prototype.plusMonths = function plusMonths(monthsToAdd) {
	        if (monthsToAdd === 0) {
	            return this;
	        }
	        var monthCount = this._year * 12 + (this._month - 1);
	        var calcMonths = monthCount + monthsToAdd;
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(_MathUtil.MathUtil.floorDiv(calcMonths, 12));
	        var newMonth = _MathUtil.MathUtil.floorMod(calcMonths, 12) + 1;
	        return LocalDate._resolvePreviousValid(newYear, newMonth, this._day);
	    };

	    LocalDate.prototype.plusWeeks = function plusWeeks(weeksToAdd) {
	        return this.plusDays(_MathUtil.MathUtil.safeMultiply(weeksToAdd, 7));
	    };

	    LocalDate.prototype.plusDays = function plusDays(daysToAdd) {
	        if (daysToAdd === 0) {
	            return this;
	        }
	        var mjDay = _MathUtil.MathUtil.safeAdd(this.toEpochDay(), daysToAdd);
	        return LocalDate.ofEpochDay(mjDay);
	    };

	    LocalDate.prototype.minus = function minus(p1, p2) {
	        if (arguments.length < 2) {
	            return this.minus1(p1);
	        } else {
	            return this.minus2(p1, p2);
	        }
	    };

	    LocalDate.prototype.minus1 = function minus1(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    LocalDate.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(amountToSubtract, 'amountToSubtract');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    LocalDate.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return this.plusYears(yearsToSubtract * -1);
	    };

	    LocalDate.prototype.minusMonths = function minusMonths(monthsToSubtract) {
	        return this.plusMonths(monthsToSubtract * -1);
	    };

	    LocalDate.prototype.minusWeeks = function minusWeeks(weeksToSubtract) {
	        return this.plusWeeks(weeksToSubtract * -1);
	    };

	    LocalDate.prototype.minusDays = function minusDays(daysToSubtract) {
	        return this.plusDays(daysToSubtract * -1);
	    };

	    LocalDate.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this;
	        }
	        return _ChronoLocalDate.prototype.query.call(this, _query);
	    };

	    LocalDate.prototype.adjustInto = function adjustInto(temporal) {
	        return _ChronoLocalDate.prototype.adjustInto.call(this, temporal);
	    };

	    LocalDate.prototype.until = function until(p1, p2) {
	        if (arguments.length < 2) {
	            return this.until1(p1);
	        } else {
	            return this.until2(p1, p2);
	        }
	    };

	    LocalDate.prototype.until2 = function until2(endExclusive, unit) {
	        var end = LocalDate.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.DAYS:
	                    return this.daysUntil(end);
	                case _ChronoUnit.ChronoUnit.WEEKS:
	                    return _MathUtil.MathUtil.intDiv(this.daysUntil(end), 7);
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return this._monthsUntil(end);
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 12);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 120);
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 1200);
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return _MathUtil.MathUtil.intDiv(this._monthsUntil(end), 12000);
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return end.getLong(_ChronoField.ChronoField.ERA) - this.getLong(_ChronoField.ChronoField.ERA);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    LocalDate.prototype.daysUntil = function daysUntil(end) {
	        return end.toEpochDay() - this.toEpochDay();
	    };

	    LocalDate.prototype._monthsUntil = function _monthsUntil(end) {
	        var packed1 = this._prolepticMonth() * 32 + this.dayOfMonth();
	        var packed2 = end._prolepticMonth() * 32 + end.dayOfMonth();
	        return _MathUtil.MathUtil.intDiv(packed2 - packed1, 32);
	    };

	    LocalDate.prototype.until1 = function until1(endDate) {
	        var end = LocalDate.from(endDate);
	        var totalMonths = end._prolepticMonth() - this._prolepticMonth();
	        var days = end._day - this._day;
	        if (totalMonths > 0 && days < 0) {
	            totalMonths--;
	            var calcDate = this.plusMonths(totalMonths);
	            days = end.toEpochDay() - calcDate.toEpochDay();
	        } else if (totalMonths < 0 && days > 0) {
	            totalMonths++;
	            days -= end.lengthOfMonth();
	        }
	        var years = _MathUtil.MathUtil.intDiv(totalMonths, 12);
	        var months = _MathUtil.MathUtil.intMod(totalMonths, 12);
	        return _Period.Period.of(_MathUtil.MathUtil.safeToInt(years), months, days);
	    };

	    LocalDate.prototype.atTime = function atTime() {
	        if (arguments.length === 1) {
	            return this.atTime1.apply(this, arguments);
	        } else {
	            return this.atTime4.apply(this, arguments);
	        }
	    };

	    LocalDate.prototype.atTime1 = function atTime1(time) {
	        return _LocalDateTime.LocalDateTime.of(this, time);
	    };

	    LocalDate.prototype.atTime4 = function atTime4(hour, minute) {
	        var second = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var nanoOfSecond = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	        return this.atTime1(_LocalTime.LocalTime.of(hour, minute, second, nanoOfSecond));
	    };

	    LocalDate.prototype.atStartOfDay = function atStartOfDay(zone) {
	        if (zone != null) {
	            return this.atStartOfDayWithZone(zone);
	        } else {
	            return _LocalDateTime.LocalDateTime.of(this, _LocalTime.LocalTime.MIDNIGHT);
	        }
	    };

	    LocalDate.prototype.atStartOfDayWithZone = function atStartOfDayWithZone(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        var ldt = this.atTime(_LocalTime.LocalTime.MIDNIGHT);

	        if (zone instanceof _ZoneOffset.ZoneOffset === false) {
	            var trans = zone.rules().transition(ldt);
	            if (trans != null && trans.isGap()) {
	                ldt = trans.dateTimeAfter();
	            }
	        }
	        return _ZonedDateTime.ZonedDateTime.of(ldt, zone);
	    };

	    LocalDate.prototype.toEpochDay = function toEpochDay() {
	        var y = this._year;
	        var m = this._month;
	        var total = 0;
	        total += 365 * y;
	        if (y >= 0) {
	            total += _MathUtil.MathUtil.intDiv(y + 3, 4) - _MathUtil.MathUtil.intDiv(y + 99, 100) + _MathUtil.MathUtil.intDiv(y + 399, 400);
	        } else {
	            total -= _MathUtil.MathUtil.intDiv(y, -4) - _MathUtil.MathUtil.intDiv(y, -100) + _MathUtil.MathUtil.intDiv(y, -400);
	        }
	        total += _MathUtil.MathUtil.intDiv(367 * m - 362, 12);
	        total += this.dayOfMonth() - 1;
	        if (m > 2) {
	            total--;
	            if (!_IsoChronology.IsoChronology.isLeapYear(y)) {
	                total--;
	            }
	        }
	        return total - DAYS_0000_TO_1970;
	    };

	    LocalDate.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, LocalDate, 'other');
	        return this._compareTo0(other);
	    };

	    LocalDate.prototype._compareTo0 = function _compareTo0(otherDate) {
	        var cmp = this._year - otherDate._year;
	        if (cmp === 0) {
	            cmp = this._month - otherDate._month;
	            if (cmp === 0) {
	                cmp = this._day - otherDate._day;
	            }
	        }
	        return cmp;
	    };

	    LocalDate.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    LocalDate.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    LocalDate.prototype.isEqual = function isEqual(other) {
	        return this.compareTo(other) === 0;
	    };

	    LocalDate.prototype.equals = function equals(otherDate) {
	        if (this === otherDate) {
	            return true;
	        }
	        if (otherDate instanceof LocalDate) {
	            return this._compareTo0(otherDate) === 0;
	        }
	        return false;
	    };

	    LocalDate.prototype.hashCode = function hashCode() {
	        var yearValue = this._year;
	        var monthValue = this._month;
	        var dayValue = this._day;
	        return yearValue & 0xFFFFF800 ^ (yearValue << 11) + (monthValue << 6) + dayValue;
	    };

	    LocalDate.prototype.toString = function toString() {
	        var dayString = void 0,
	            monthString = void 0,
	            yearString = void 0;

	        var yearValue = this._year;
	        var monthValue = this._month;
	        var dayValue = this._day;

	        var absYear = Math.abs(yearValue);

	        if (absYear < 1000) {
	            if (yearValue < 0) {
	                yearString = '-' + ('' + (yearValue - 10000)).slice(-4);
	            } else {
	                yearString = ('' + (yearValue + 10000)).slice(-4);
	            }
	        } else {
	            if (yearValue > 9999) {
	                yearString = '+' + yearValue;
	            } else {
	                yearString = '' + yearValue;
	            }
	        }

	        if (monthValue < 10) {
	            monthString = '-0' + monthValue;
	        } else {
	            monthString = '-' + monthValue;
	        }

	        if (dayValue < 10) {
	            dayString = '-0' + dayValue;
	        } else {
	            dayString = '-' + dayValue;
	        }

	        return yearString + monthString + dayString;
	    };

	    LocalDate.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    LocalDate.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return _ChronoLocalDate.prototype.format.call(this, formatter);
	    };

	    return LocalDate;
	}(_ChronoLocalDate2.ChronoLocalDate);

	exports.LocalDate = LocalDate;
	function _init() {
	    LocalDate.MIN = LocalDate.of(_YearConstants.YearConstants.MIN_VALUE, 1, 1);

	    LocalDate.MAX = LocalDate.of(_YearConstants.YearConstants.MAX_VALUE, 12, 31);

	    LocalDate.EPOCH_0 = LocalDate.ofEpochDay(0);

	    LocalDate.FROM = (0, _TemporalQuery.createTemporalQuery)('LocalDate.FROM', function (temporal) {
	        return LocalDate.from(temporal);
	    });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.IsoChronology = undefined;
	exports._init = _init;

	var _Enum2 = __webpack_require__(10);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _DayOfWeek = __webpack_require__(11);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(24);

	var _Year = __webpack_require__(55);

	var _ChronoField = __webpack_require__(12);

	var _ResolverStyle = __webpack_require__(36);

	var _TemporalAdjusters = __webpack_require__(58);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var IsoChronology = exports.IsoChronology = function (_Enum) {
	    _inherits(IsoChronology, _Enum);

	    function IsoChronology() {
	        _classCallCheck(this, IsoChronology);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    IsoChronology.isLeapYear = function isLeapYear(prolepticYear) {
	        return (prolepticYear & 3) === 0 && (prolepticYear % 100 !== 0 || prolepticYear % 400 === 0);
	    };

	    IsoChronology.prototype._updateResolveMap = function _updateResolveMap(fieldValues, field, value) {
	        (0, _assert.requireNonNull)(fieldValues, 'fieldValues');
	        (0, _assert.requireNonNull)(field, 'field');
	        var current = fieldValues.get(field);
	        if (current != null && current !== value) {
	            throw new _errors.DateTimeException('Invalid state, field: ' + field + ' ' + current + ' conflicts with ' + field + ' ' + value);
	        }
	        fieldValues.put(field, value);
	    };

	    IsoChronology.prototype.resolveDate = function resolveDate(fieldValues, resolverStyle) {
	        if (fieldValues.containsKey(_ChronoField.ChronoField.EPOCH_DAY)) {
	            return _LocalDate.LocalDate.ofEpochDay(fieldValues.remove(_ChronoField.ChronoField.EPOCH_DAY));
	        }

	        var prolepticMonth = fieldValues.remove(_ChronoField.ChronoField.PROLEPTIC_MONTH);
	        if (prolepticMonth != null) {
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.PROLEPTIC_MONTH.checkValidValue(prolepticMonth);
	            }
	            this._updateResolveMap(fieldValues, _ChronoField.ChronoField.MONTH_OF_YEAR, _MathUtil.MathUtil.floorMod(prolepticMonth, 12) + 1);
	            this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, _MathUtil.MathUtil.floorDiv(prolepticMonth, 12));
	        }

	        var yoeLong = fieldValues.remove(_ChronoField.ChronoField.YEAR_OF_ERA);
	        if (yoeLong != null) {
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.YEAR_OF_ERA.checkValidValue(yoeLong);
	            }
	            var era = fieldValues.remove(_ChronoField.ChronoField.ERA);
	            if (era == null) {
	                var year = fieldValues.get(_ChronoField.ChronoField.YEAR);
	                if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT) {
	                    if (year != null) {
	                        this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, year > 0 ? yoeLong : _MathUtil.MathUtil.safeSubtract(1, yoeLong));
	                    } else {
	                        fieldValues.put(_ChronoField.ChronoField.YEAR_OF_ERA, yoeLong);
	                    }
	                } else {
	                    this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, year == null || year > 0 ? yoeLong : _MathUtil.MathUtil.safeSubtract(1, yoeLong));
	                }
	            } else if (era === 1) {
	                this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, yoeLong);
	            } else if (era === 0) {
	                this._updateResolveMap(fieldValues, _ChronoField.ChronoField.YEAR, _MathUtil.MathUtil.safeSubtract(1, yoeLong));
	            } else {
	                throw new _errors.DateTimeException('Invalid value for era: ' + era);
	            }
	        } else if (fieldValues.containsKey(_ChronoField.ChronoField.ERA)) {
	            _ChronoField.ChronoField.ERA.checkValidValue(fieldValues.get(_ChronoField.ChronoField.ERA));
	        }

	        if (fieldValues.containsKey(_ChronoField.ChronoField.YEAR)) {
	            if (fieldValues.containsKey(_ChronoField.ChronoField.MONTH_OF_YEAR)) {
	                if (fieldValues.containsKey(_ChronoField.ChronoField.DAY_OF_MONTH)) {
	                    var y = _ChronoField.ChronoField.YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.YEAR));
	                    var moy = fieldValues.remove(_ChronoField.ChronoField.MONTH_OF_YEAR);
	                    var dom = fieldValues.remove(_ChronoField.ChronoField.DAY_OF_MONTH);
	                    if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	                        var months = moy - 1;
	                        var days = dom - 1;
	                        return _LocalDate.LocalDate.of(y, 1, 1).plusMonths(months).plusDays(days);
	                    } else if (resolverStyle === _ResolverStyle.ResolverStyle.SMART) {
	                        _ChronoField.ChronoField.DAY_OF_MONTH.checkValidValue(dom);
	                        if (moy === 4 || moy === 6 || moy === 9 || moy === 11) {
	                            dom = Math.min(dom, 30);
	                        } else if (moy === 2) {
	                            dom = Math.min(dom, _Month.Month.FEBRUARY.length(_Year.Year.isLeap(y)));
	                        }
	                        return _LocalDate.LocalDate.of(y, moy, dom);
	                    } else {
	                        return _LocalDate.LocalDate.of(y, moy, dom);
	                    }
	                }
	            }
	            if (fieldValues.containsKey(_ChronoField.ChronoField.DAY_OF_YEAR)) {
	                var _y = _ChronoField.ChronoField.YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.YEAR));
	                if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	                    var _days = _MathUtil.MathUtil.safeSubtract(fieldValues.remove(_ChronoField.ChronoField.DAY_OF_YEAR), 1);
	                    return _LocalDate.LocalDate.ofYearDay(_y, 1).plusDays(_days);
	                }
	                var doy = _ChronoField.ChronoField.DAY_OF_YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.DAY_OF_YEAR));
	                return _LocalDate.LocalDate.ofYearDay(_y, doy);
	            }
	            if (fieldValues.containsKey(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR)) {
	                if (fieldValues.containsKey(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR)) {
	                    var _y2 = _ChronoField.ChronoField.YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.YEAR));
	                    if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	                        var weeks = _MathUtil.MathUtil.safeSubtract(fieldValues.remove(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR), 1);
	                        var _days2 = _MathUtil.MathUtil.safeSubtract(fieldValues.remove(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR), 1);
	                        return _LocalDate.LocalDate.of(_y2, 1, 1).plusWeeks(weeks).plusDays(_days2);
	                    }
	                    var aw = _ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR));
	                    var ad = _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR));
	                    var date = _LocalDate.LocalDate.of(_y2, 1, 1).plusDays((aw - 1) * 7 + (ad - 1));
	                    if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT && date.get(_ChronoField.ChronoField.YEAR) !== _y2) {
	                        throw new _errors.DateTimeException('Strict mode rejected date parsed to a different year');
	                    }
	                    return date;
	                }
	                if (fieldValues.containsKey(_ChronoField.ChronoField.DAY_OF_WEEK)) {
	                    var _y3 = _ChronoField.ChronoField.YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.YEAR));
	                    if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	                        var _weeks = _MathUtil.MathUtil.safeSubtract(fieldValues.remove(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR), 1);
	                        var _days3 = _MathUtil.MathUtil.safeSubtract(fieldValues.remove(_ChronoField.ChronoField.DAY_OF_WEEK), 1);
	                        return _LocalDate.LocalDate.of(_y3, 1, 1).plusWeeks(_weeks).plusDays(_days3);
	                    }
	                    var _aw = _ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.ALIGNED_WEEK_OF_YEAR));
	                    var dow = _ChronoField.ChronoField.DAY_OF_WEEK.checkValidIntValue(fieldValues.remove(_ChronoField.ChronoField.DAY_OF_WEEK));
	                    var _date = _LocalDate.LocalDate.of(_y3, 1, 1).plusWeeks(_aw - 1).with(_TemporalAdjusters.TemporalAdjusters.nextOrSame(_DayOfWeek.DayOfWeek.of(dow)));
	                    if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT && _date.get(_ChronoField.ChronoField.YEAR) !== _y3) {
	                        throw new _errors.DateTimeException('Strict mode rejected date parsed to a different month');
	                    }
	                    return _date;
	                }
	            }
	        }
	        return null;
	    };

	    return IsoChronology;
	}(_Enum2.Enum);

	function _init() {
	    IsoChronology.INSTANCE = new IsoChronology('IsoChronology');
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */
	var Enum = exports.Enum = function () {
	    function Enum(name) {
	        _classCallCheck(this, Enum);

	        this._name = name;
	    }

	    Enum.prototype.equals = function equals(other) {
	        return this === other;
	    };

	    Enum.prototype.toString = function toString() {
	        return this._name;
	    };

	    return Enum;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DayOfWeek = undefined;
	exports._init = _init;

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalQuery = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DayOfWeek = function (_Temporal) {
	    _inherits(DayOfWeek, _Temporal);

	    function DayOfWeek(ordinal, name) {
	        _classCallCheck(this, DayOfWeek);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._ordinal = ordinal;
	        _this._name = name;
	        return _this;
	    }

	    DayOfWeek.prototype.ordinal = function ordinal() {
	        return this._ordinal;
	    };

	    DayOfWeek.prototype.name = function name() {
	        return this._name;
	    };

	    DayOfWeek.values = function values() {
	        return ENUMS.slice();
	    };

	    DayOfWeek.valueOf = function valueOf(name) {
	        var ordinal = 0;
	        for (ordinal; ordinal < ENUMS.length; ordinal++) {
	            if (ENUMS[ordinal].name() === name) {
	                break;
	            }
	        }
	        return DayOfWeek.of(ordinal + 1);
	    };

	    DayOfWeek.of = function of(dayOfWeek) {
	        if (dayOfWeek < 1 || dayOfWeek > 7) {
	            throw new _errors.DateTimeException('Invalid value for DayOfWeek: ' + dayOfWeek);
	        }
	        return ENUMS[dayOfWeek - 1];
	    };

	    DayOfWeek.from = function from(temporal) {
	        (0, _assert.assert)(temporal != null, 'temporal', _errors.NullPointerException);
	        if (temporal instanceof DayOfWeek) {
	            return temporal;
	        }
	        try {
	            return DayOfWeek.of(temporal.get(_ChronoField.ChronoField.DAY_OF_WEEK));
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeException) {
	                throw new _errors.DateTimeException('Unable to obtain DayOfWeek from TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''), ex);
	            } else {
	                throw ex;
	            }
	        }
	    };

	    DayOfWeek.prototype.value = function value() {
	        return this._ordinal + 1;
	    };

	    DayOfWeek.prototype.getDisplayName = function getDisplayName(style, locale) {
	        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');
	    };

	    DayOfWeek.prototype.isSupported = function isSupported(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.DAY_OF_WEEK;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    DayOfWeek.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.DAY_OF_WEEK) {
	            return field.range();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    DayOfWeek.prototype.get = function get(field) {
	        if (field === _ChronoField.ChronoField.DAY_OF_WEEK) {
	            return this.value();
	        }
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    DayOfWeek.prototype.getLong = function getLong(field) {
	        if (field === _ChronoField.ChronoField.DAY_OF_WEEK) {
	            return this.value();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    DayOfWeek.prototype.plus = function plus(days) {
	        var amount = _MathUtil.MathUtil.floorMod(days, 7);
	        return ENUMS[_MathUtil.MathUtil.floorMod(this._ordinal + (amount + 7), 7)];
	    };

	    DayOfWeek.prototype.minus = function minus(days) {
	        return this.plus(-1 * _MathUtil.MathUtil.floorMod(days, 7));
	    };

	    DayOfWeek.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.DAYS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        (0, _assert.assert)(_query != null, 'query', _errors.NullPointerException);
	        return _query.queryFrom(this);
	    };

	    DayOfWeek.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        return temporal.with(_ChronoField.ChronoField.DAY_OF_WEEK, this.value());
	    };

	    DayOfWeek.prototype.equals = function equals(other) {
	        return this === other;
	    };

	    DayOfWeek.prototype.toString = function toString() {
	        return this._name;
	    };

	    return DayOfWeek;
	}(_Temporal2.Temporal);

	exports.DayOfWeek = DayOfWeek;


	var ENUMS = void 0;

	function _init() {
	    DayOfWeek.MONDAY = new DayOfWeek(0, 'MONDAY');
	    DayOfWeek.TUESDAY = new DayOfWeek(1, 'TUESDAY');
	    DayOfWeek.WEDNESDAY = new DayOfWeek(2, 'WEDNESDAY');
	    DayOfWeek.THURSDAY = new DayOfWeek(3, 'THURSDAY');
	    DayOfWeek.FRIDAY = new DayOfWeek(4, 'FRIDAY');
	    DayOfWeek.SATURDAY = new DayOfWeek(5, 'SATURDAY');
	    DayOfWeek.SUNDAY = new DayOfWeek(6, 'SUNDAY');

	    DayOfWeek.FROM = (0, _TemporalQuery.createTemporalQuery)('DayOfWeek.FROM', function (temporal) {
	        return DayOfWeek.from(temporal);
	    });

	    ENUMS = [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY, DayOfWeek.SATURDAY, DayOfWeek.SUNDAY];
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoField = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalField2 = __webpack_require__(18);

	var _ValueRange = __webpack_require__(19);

	var _YearConstants = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoField = exports.ChronoField = function (_TemporalField) {
	    _inherits(ChronoField, _TemporalField);

	    ChronoField.byName = function byName(fieldName) {
	        for (var prop in ChronoField) {
	            if (ChronoField.hasOwnProperty(prop)) {
	                if (ChronoField[prop] instanceof ChronoField && ChronoField[prop].name() === fieldName) {
	                    return ChronoField[prop];
	                }
	            }
	        }
	    };

	    function ChronoField(name, baseUnit, rangeUnit, range) {
	        _classCallCheck(this, ChronoField);

	        var _this = _possibleConstructorReturn(this, _TemporalField.call(this));

	        _this._name = name;
	        _this._baseUnit = baseUnit;
	        _this._rangeUnit = rangeUnit;
	        _this._range = range;
	        return _this;
	    }

	    ChronoField.prototype.name = function name() {
	        return this._name;
	    };

	    ChronoField.prototype.baseUnit = function baseUnit() {
	        return this._baseUnit;
	    };

	    ChronoField.prototype.rangeUnit = function rangeUnit() {
	        return this._rangeUnit;
	    };

	    ChronoField.prototype.range = function range() {
	        return this._range;
	    };

	    ChronoField.prototype.displayName = function displayName() {
	        return this.toString();
	    };

	    ChronoField.prototype.checkValidValue = function checkValidValue(value) {
	        return this.range().checkValidValue(value, this.name());
	    };

	    ChronoField.prototype.isDateBased = function isDateBased() {
	        var dateBased = this === ChronoField.DAY_OF_WEEK || this === ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH || this === ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR || this === ChronoField.DAY_OF_MONTH || this === ChronoField.DAY_OF_YEAR || this === ChronoField.EPOCH_DAY || this === ChronoField.ALIGNED_WEEK_OF_MONTH || this === ChronoField.ALIGNED_WEEK_OF_YEAR || this === ChronoField.MONTH_OF_YEAR || this === ChronoField.YEAR_OF_ERA || this === ChronoField.YEAR || this === ChronoField.ERA;
	        return dateBased;
	    };

	    ChronoField.prototype.isTimeBased = function isTimeBased() {
	        var timeBased = this === ChronoField.NANO_OF_SECOND || this === ChronoField.NANO_OF_DAY || this === ChronoField.MICRO_OF_SECOND || this === ChronoField.MICRO_OF_DAY || this === ChronoField.MILLI_OF_SECOND || this === ChronoField.MILLI_OF_DAY || this === ChronoField.SECOND_OF_MINUTE || this === ChronoField.SECOND_OF_DAY || this === ChronoField.MINUTE_OF_HOUR || this === ChronoField.MINUTE_OF_DAY || this === ChronoField.HOUR_OF_AMPM || this === ChronoField.CLOCK_HOUR_OF_AMPM || this === ChronoField.HOUR_OF_DAY || this === ChronoField.CLOCK_HOUR_OF_DAY || this === ChronoField.AMPM_OF_DAY;
	        return timeBased;
	    };

	    ChronoField.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        return temporal.range(this);
	    };

	    ChronoField.prototype.checkValidIntValue = function checkValidIntValue(value) {
	        return this.range().checkValidIntValue(value, this);
	    };

	    ChronoField.prototype.getFrom = function getFrom(temporal) {
	        return temporal.getLong(this);
	    };

	    ChronoField.prototype.toString = function toString() {
	        return this.name();
	    };

	    ChronoField.prototype.equals = function equals(other) {
	        return this === other;
	    };

	    return ChronoField;
	}(_TemporalField2.TemporalField);

	function _init() {

	    ChronoField.NANO_OF_SECOND = new ChronoField('NanoOfSecond', _ChronoUnit.ChronoUnit.NANOS, _ChronoUnit.ChronoUnit.SECONDS, _ValueRange.ValueRange.of(0, 999999999));

	    ChronoField.NANO_OF_DAY = new ChronoField('NanoOfDay', _ChronoUnit.ChronoUnit.NANOS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 * 1000000000 - 1));

	    ChronoField.MICRO_OF_SECOND = new ChronoField('MicroOfSecond', _ChronoUnit.ChronoUnit.MICROS, _ChronoUnit.ChronoUnit.SECONDS, _ValueRange.ValueRange.of(0, 999999));

	    ChronoField.MICRO_OF_DAY = new ChronoField('MicroOfDay', _ChronoUnit.ChronoUnit.MICROS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 * 1000000 - 1));

	    ChronoField.MILLI_OF_SECOND = new ChronoField('MilliOfSecond', _ChronoUnit.ChronoUnit.MILLIS, _ChronoUnit.ChronoUnit.SECONDS, _ValueRange.ValueRange.of(0, 999));

	    ChronoField.MILLI_OF_DAY = new ChronoField('MilliOfDay', _ChronoUnit.ChronoUnit.MILLIS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 * 1000 - 1));

	    ChronoField.SECOND_OF_MINUTE = new ChronoField('SecondOfMinute', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.MINUTES, _ValueRange.ValueRange.of(0, 59));

	    ChronoField.SECOND_OF_DAY = new ChronoField('SecondOfDay', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 86400 - 1));

	    ChronoField.MINUTE_OF_HOUR = new ChronoField('MinuteOfHour', _ChronoUnit.ChronoUnit.MINUTES, _ChronoUnit.ChronoUnit.HOURS, _ValueRange.ValueRange.of(0, 59));

	    ChronoField.MINUTE_OF_DAY = new ChronoField('MinuteOfDay', _ChronoUnit.ChronoUnit.MINUTES, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 24 * 60 - 1));

	    ChronoField.HOUR_OF_AMPM = new ChronoField('HourOfAmPm', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.HALF_DAYS, _ValueRange.ValueRange.of(0, 11));

	    ChronoField.CLOCK_HOUR_OF_AMPM = new ChronoField('ClockHourOfAmPm', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.HALF_DAYS, _ValueRange.ValueRange.of(1, 12));

	    ChronoField.HOUR_OF_DAY = new ChronoField('HourOfDay', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 23));

	    ChronoField.CLOCK_HOUR_OF_DAY = new ChronoField('ClockHourOfDay', _ChronoUnit.ChronoUnit.HOURS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(1, 24));

	    ChronoField.AMPM_OF_DAY = new ChronoField('AmPmOfDay', _ChronoUnit.ChronoUnit.HALF_DAYS, _ChronoUnit.ChronoUnit.DAYS, _ValueRange.ValueRange.of(0, 1));

	    ChronoField.DAY_OF_WEEK = new ChronoField('DayOfWeek', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.WEEKS, _ValueRange.ValueRange.of(1, 7));

	    ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH = new ChronoField('AlignedDayOfWeekInMonth', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.WEEKS, _ValueRange.ValueRange.of(1, 7));

	    ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR = new ChronoField('AlignedDayOfWeekInYear', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.WEEKS, _ValueRange.ValueRange.of(1, 7));

	    ChronoField.DAY_OF_MONTH = new ChronoField('DayOfMonth', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.MONTHS, _ValueRange.ValueRange.of(1, 28, 31), 'day');

	    ChronoField.DAY_OF_YEAR = new ChronoField('DayOfYear', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.YEARS, _ValueRange.ValueRange.of(1, 365, 366));

	    ChronoField.EPOCH_DAY = new ChronoField('EpochDay', _ChronoUnit.ChronoUnit.DAYS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(Math.floor(_YearConstants.YearConstants.MIN_VALUE * 365.25), Math.floor(_YearConstants.YearConstants.MAX_VALUE * 365.25)));

	    ChronoField.ALIGNED_WEEK_OF_MONTH = new ChronoField('AlignedWeekOfMonth', _ChronoUnit.ChronoUnit.WEEKS, _ChronoUnit.ChronoUnit.MONTHS, _ValueRange.ValueRange.of(1, 4, 5));

	    ChronoField.ALIGNED_WEEK_OF_YEAR = new ChronoField('AlignedWeekOfYear', _ChronoUnit.ChronoUnit.WEEKS, _ChronoUnit.ChronoUnit.YEARS, _ValueRange.ValueRange.of(1, 53));

	    ChronoField.MONTH_OF_YEAR = new ChronoField('MonthOfYear', _ChronoUnit.ChronoUnit.MONTHS, _ChronoUnit.ChronoUnit.YEARS, _ValueRange.ValueRange.of(1, 12), 'month');

	    ChronoField.PROLEPTIC_MONTH = new ChronoField('ProlepticMonth', _ChronoUnit.ChronoUnit.MONTHS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(_YearConstants.YearConstants.MIN_VALUE * 12, _YearConstants.YearConstants.MAX_VALUE * 12 + 11));

	    ChronoField.YEAR_OF_ERA = new ChronoField('YearOfEra', _ChronoUnit.ChronoUnit.YEARS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(1, _YearConstants.YearConstants.MAX_VALUE, _YearConstants.YearConstants.MAX_VALUE + 1));

	    ChronoField.YEAR = new ChronoField('Year', _ChronoUnit.ChronoUnit.YEARS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(_YearConstants.YearConstants.MIN_VALUE, _YearConstants.YearConstants.MAX_VALUE), 'year');

	    ChronoField.ERA = new ChronoField('Era', _ChronoUnit.ChronoUnit.ERAS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(0, 1));

	    ChronoField.INSTANT_SECONDS = new ChronoField('InstantSeconds', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(_MathUtil.MIN_SAFE_INTEGER, _MathUtil.MAX_SAFE_INTEGER));

	    ChronoField.OFFSET_SECONDS = new ChronoField('OffsetSeconds', _ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.FOREVER, _ValueRange.ValueRange.of(-18 * 3600, 18 * 3600));
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoUnit = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _Duration = __webpack_require__(14);

	var _YearConstants = __webpack_require__(17);

	var _TemporalUnit2 = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoUnit = exports.ChronoUnit = function (_TemporalUnit) {
	  _inherits(ChronoUnit, _TemporalUnit);

	  function ChronoUnit(name, estimatedDuration) {
	    _classCallCheck(this, ChronoUnit);

	    var _this = _possibleConstructorReturn(this, _TemporalUnit.call(this));

	    _this._name = name;
	    _this._duration = estimatedDuration;
	    return _this;
	  }

	  ChronoUnit.prototype.duration = function duration() {
	    return this._duration;
	  };

	  ChronoUnit.prototype.isDurationEstimated = function isDurationEstimated() {
	    return this.isDateBased() || this === ChronoUnit.FOREVER;
	  };

	  ChronoUnit.prototype.isDateBased = function isDateBased() {
	    return this.compareTo(ChronoUnit.DAYS) >= 0 && this !== ChronoUnit.FOREVER;
	  };

	  ChronoUnit.prototype.isTimeBased = function isTimeBased() {
	    return this.compareTo(ChronoUnit.DAYS) < 0;
	  };

	  ChronoUnit.prototype.isSupportedBy = function isSupportedBy(temporal) {
	    if (this === ChronoUnit.FOREVER) {
	      return false;
	    }

	    try {
	      temporal.plus(1, this);
	      return true;
	    } catch (e) {
	      try {
	        temporal.plus(-1, this);
	        return true;
	      } catch (e2) {
	        return false;
	      }
	    }
	  };

	  ChronoUnit.prototype.addTo = function addTo(temporal, amount) {
	    return temporal.plus(amount, this);
	  };

	  ChronoUnit.prototype.between = function between(temporal1, temporal2) {
	    return temporal1.until(temporal2, this);
	  };

	  ChronoUnit.prototype.toString = function toString() {
	    return this._name;
	  };

	  ChronoUnit.prototype.compareTo = function compareTo(other) {
	    return this.duration().compareTo(other.duration());
	  };

	  return ChronoUnit;
	}(_TemporalUnit2.TemporalUnit);

	function _init() {
	  ChronoUnit.NANOS = new ChronoUnit('Nanos', _Duration.Duration.ofNanos(1));

	  ChronoUnit.MICROS = new ChronoUnit('Micros', _Duration.Duration.ofNanos(1000));

	  ChronoUnit.MILLIS = new ChronoUnit('Millis', _Duration.Duration.ofNanos(1000000));

	  ChronoUnit.SECONDS = new ChronoUnit('Seconds', _Duration.Duration.ofSeconds(1));

	  ChronoUnit.MINUTES = new ChronoUnit('Minutes', _Duration.Duration.ofSeconds(60));

	  ChronoUnit.HOURS = new ChronoUnit('Hours', _Duration.Duration.ofSeconds(3600));

	  ChronoUnit.HALF_DAYS = new ChronoUnit('HalfDays', _Duration.Duration.ofSeconds(43200));

	  ChronoUnit.DAYS = new ChronoUnit('Days', _Duration.Duration.ofSeconds(86400));

	  ChronoUnit.WEEKS = new ChronoUnit('Weeks', _Duration.Duration.ofSeconds(7 * 86400));

	  ChronoUnit.MONTHS = new ChronoUnit('Months', _Duration.Duration.ofSeconds(31556952 / 12));

	  ChronoUnit.YEARS = new ChronoUnit('Years', _Duration.Duration.ofSeconds(31556952));

	  ChronoUnit.DECADES = new ChronoUnit('Decades', _Duration.Duration.ofSeconds(31556952 * 10));

	  ChronoUnit.CENTURIES = new ChronoUnit('Centuries', _Duration.Duration.ofSeconds(31556952 * 100));

	  ChronoUnit.MILLENNIA = new ChronoUnit('Millennia', _Duration.Duration.ofSeconds(31556952 * 1000));

	  ChronoUnit.ERAS = new ChronoUnit('Eras', _Duration.Duration.ofSeconds(31556952 * (_YearConstants.YearConstants.MAX_VALUE + 1)));

	  ChronoUnit.FOREVER = new ChronoUnit('Forever', _Duration.Duration.ofSeconds(_MathUtil.MathUtil.MAX_SAFE_INTEGER, 999999999));
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Duration = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalAmount2 = __webpack_require__(15);

	var _TemporalUnit = __webpack_require__(16);

	var _LocalTime = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Duration = exports.Duration = function (_TemporalAmount) {
	    _inherits(Duration, _TemporalAmount);

	    function Duration(seconds, nanos) {
	        _classCallCheck(this, Duration);

	        var _this = _possibleConstructorReturn(this, _TemporalAmount.call(this));

	        _this._seconds = seconds;
	        _this._nanos = nanos;
	        return _this;
	    }

	    Duration.ofDays = function ofDays(days) {
	        return Duration._create(_MathUtil.MathUtil.safeMultiply(days, _LocalTime.LocalTime.SECONDS_PER_DAY), 0);
	    };

	    Duration.ofHours = function ofHours(hours) {
	        return Duration._create(_MathUtil.MathUtil.safeMultiply(hours, _LocalTime.LocalTime.SECONDS_PER_HOUR), 0);
	    };

	    Duration.ofMinutes = function ofMinutes(minutes) {
	        return Duration._create(_MathUtil.MathUtil.safeMultiply(minutes, _LocalTime.LocalTime.SECONDS_PER_MINUTE), 0);
	    };

	    Duration.ofSeconds = function ofSeconds(seconds) {
	        var nanoAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        var secs = _MathUtil.MathUtil.safeAdd(seconds, _MathUtil.MathUtil.floorDiv(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND));
	        var nos = _MathUtil.MathUtil.floorMod(nanoAdjustment, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return Duration._create(secs, nos);
	    };

	    Duration.ofMillis = function ofMillis(millis) {
	        var secs = _MathUtil.MathUtil.intDiv(millis, 1000);
	        var mos = _MathUtil.MathUtil.intMod(millis, 1000);
	        if (mos < 0) {
	            mos += 1000;
	            secs--;
	        }
	        return Duration._create(secs, mos * 1000000);
	    };

	    Duration.ofNanos = function ofNanos(nanos) {
	        var secs = _MathUtil.MathUtil.intDiv(nanos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nos = _MathUtil.MathUtil.intMod(nanos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        if (nos < 0) {
	            nos += _LocalTime.LocalTime.NANOS_PER_SECOND;
	            secs--;
	        }
	        return this._create(secs, nos);
	    };

	    Duration.of = function of(amount, unit) {
	        return Duration.ZERO.plus(amount, unit);
	    };

	    Duration.from = function from(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        (0, _assert.requireInstance)(amount, _TemporalAmount2.TemporalAmount);
	        var duration = Duration.ZERO;
	        amount.units().forEach(function (unit) {
	            duration = duration.plus(amount.get(unit), unit);
	        });
	        return duration;
	    };

	    Duration.between = function between(startInclusive, endExclusive) {
	        (0, _assert.requireNonNull)(startInclusive, 'startInclusive');
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        var secs = startInclusive.until(endExclusive, _ChronoUnit.ChronoUnit.SECONDS);
	        var nanos = 0;
	        if (startInclusive.isSupported(_ChronoField.ChronoField.NANO_OF_SECOND) && endExclusive.isSupported(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            try {
	                var startNos = startInclusive.getLong(_ChronoField.ChronoField.NANO_OF_SECOND);
	                nanos = endExclusive.getLong(_ChronoField.ChronoField.NANO_OF_SECOND) - startNos;
	                if (secs > 0 && nanos < 0) {
	                    nanos += _LocalTime.LocalTime.NANOS_PER_SECOND;
	                } else if (secs < 0 && nanos > 0) {
	                    nanos -= _LocalTime.LocalTime.NANOS_PER_SECOND;
	                } else if (secs === 0 && nanos !== 0) {
	                    var adjustedEnd = endExclusive.with(_ChronoField.ChronoField.NANO_OF_SECOND, startNos);
	                    secs = startInclusive.until(adjustedEnd, _ChronoUnit.ChronoUnit.SECONDS);
	                }
	            } catch (e) {}
	        }
	        return this.ofSeconds(secs, nanos);
	    };

	    Duration.parse = function parse(text) {
	        (0, _assert.requireNonNull)(text, 'text');

	        var PATTERN = new RegExp('([-+]?)P(?:([-+]?[0-9]+)D)?(T(?:([-+]?[0-9]+)H)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)(?:[.,]([0-9]{0,9}))?S)?)?', 'i');
	        var matches = PATTERN.exec(text);
	        if (matches !== null) {
	            if ('T' === matches[3] === false) {
	                var negate = '-' === matches[1];
	                var dayMatch = matches[2];
	                var hourMatch = matches[4];
	                var minuteMatch = matches[5];
	                var secondMatch = matches[6];
	                var fractionMatch = matches[7];
	                if (dayMatch != null || hourMatch != null || minuteMatch != null || secondMatch != null) {
	                    var daysAsSecs = Duration._parseNumber(text, dayMatch, _LocalTime.LocalTime.SECONDS_PER_DAY, 'days');
	                    var hoursAsSecs = Duration._parseNumber(text, hourMatch, _LocalTime.LocalTime.SECONDS_PER_HOUR, 'hours');
	                    var minsAsSecs = Duration._parseNumber(text, minuteMatch, _LocalTime.LocalTime.SECONDS_PER_MINUTE, 'minutes');
	                    var seconds = Duration._parseNumber(text, secondMatch, 1, 'seconds');
	                    var negativeSecs = secondMatch != null && secondMatch.charAt(0) === '-';
	                    var nanos = Duration._parseFraction(text, fractionMatch, negativeSecs ? -1 : 1);
	                    try {
	                        return Duration._create(negate, daysAsSecs, hoursAsSecs, minsAsSecs, seconds, nanos);
	                    } catch (ex) {
	                        throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration: overflow', text, 0, ex);
	                    }
	                }
	            }
	        }
	        throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration', text, 0);
	    };

	    Duration._parseNumber = function _parseNumber(text, parsed, multiplier, errorText) {
	        if (parsed == null) {
	            return 0;
	        }
	        try {
	            if (parsed[0] === '+') {
	                parsed = parsed.substring(1);
	            }
	            return _MathUtil.MathUtil.safeMultiply(parseFloat(parsed), multiplier);
	        } catch (ex) {
	            throw new _errors.DateTimeParseException('Text cannot be parsed to a Duration: ' + errorText, text, 0, ex);
	        }
	    };

	    Duration._parseFraction = function _parseFraction(text, parsed, negate) {
	        if (parsed == null || parsed.length === 0) {
	            return 0;
	        }
	        parsed = (parsed + '000000000').substring(0, 9);
	        return parseFloat(parsed) * negate;
	    };

	    Duration._create = function _create() {
	        if (arguments.length <= 2) {
	            return Duration._createSecondsNanos(arguments[0], arguments[1]);
	        } else {
	            return Duration._createNegateDaysHoursMinutesSecondsNanos(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        }
	    };

	    Duration._createNegateDaysHoursMinutesSecondsNanos = function _createNegateDaysHoursMinutesSecondsNanos(negate, daysAsSecs, hoursAsSecs, minsAsSecs, secs, nanos) {
	        var seconds = _MathUtil.MathUtil.safeAdd(daysAsSecs, _MathUtil.MathUtil.safeAdd(hoursAsSecs, _MathUtil.MathUtil.safeAdd(minsAsSecs, secs)));
	        if (negate) {
	            return Duration.ofSeconds(seconds, nanos).negated();
	        }
	        return Duration.ofSeconds(seconds, nanos);
	    };

	    Duration._createSecondsNanos = function _createSecondsNanos() {
	        var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var nanoAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        if ((seconds | nanoAdjustment) === 0) {
	            return Duration.ZERO;
	        }
	        return new Duration(seconds, nanoAdjustment);
	    };

	    Duration.prototype.get = function get(unit) {
	        if (unit === _ChronoUnit.ChronoUnit.SECONDS) {
	            return this._seconds;
	        } else if (unit === _ChronoUnit.ChronoUnit.NANOS) {
	            return this._nanos;
	        } else {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	    };

	    Duration.prototype.units = function units() {
	        return [_ChronoUnit.ChronoUnit.SECONDS, _ChronoUnit.ChronoUnit.NANOS];
	    };

	    Duration.prototype.isZero = function isZero() {
	        return (this._seconds | this._nanos) === 0;
	    };

	    Duration.prototype.isNegative = function isNegative() {
	        return this._seconds < 0;
	    };

	    Duration.prototype.seconds = function seconds() {
	        return this._seconds;
	    };

	    Duration.prototype.nano = function nano() {
	        return this._nanos;
	    };

	    Duration.prototype.withSeconds = function withSeconds(seconds) {
	        return Duration._create(seconds, this._nanos);
	    };

	    Duration.prototype.withNanos = function withNanos(nanoOfSecond) {
	        _ChronoField.ChronoField.NANO_OF_SECOND.checkValidIntValue(nanoOfSecond);
	        return Duration._create(this._seconds, nanoOfSecond);
	    };

	    Duration.prototype.plusDuration = function plusDuration(duration) {
	        (0, _assert.requireNonNull)(duration, 'duration');
	        return this.plus(duration.seconds(), duration.nano());
	    };

	    Duration.prototype.plus = function plus(durationOrNumber, unitOrNumber) {
	        if (arguments.length === 1) {
	            return this.plusDuration(durationOrNumber);
	        } else if (arguments.length === 2 && unitOrNumber instanceof _TemporalUnit.TemporalUnit) {
	            return this.plusAmountUnit(durationOrNumber, unitOrNumber);
	        } else {
	            return this.plusSecondsNanos(durationOrNumber, unitOrNumber);
	        }
	    };

	    Duration.prototype.plusAmountUnit = function plusAmountUnit(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        if (unit === _ChronoUnit.ChronoUnit.DAYS) {
	            return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(amountToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY), 0);
	        }
	        if (unit.isDurationEstimated()) {
	            throw new _errors.UnsupportedTemporalTypeException('Unit must not have an estimated duration');
	        }
	        if (amountToAdd === 0) {
	            return this;
	        }
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.NANOS:
	                    return this.plusNanos(amountToAdd);
	                case _ChronoUnit.ChronoUnit.MICROS:
	                    return this.plusSecondsNanos(_MathUtil.MathUtil.intDiv(amountToAdd, 1000000 * 1000) * 1000, _MathUtil.MathUtil.intMod(amountToAdd, 1000000 * 1000) * 1000);
	                case _ChronoUnit.ChronoUnit.MILLIS:
	                    return this.plusMillis(amountToAdd);
	                case _ChronoUnit.ChronoUnit.SECONDS:
	                    return this.plusSeconds(amountToAdd);
	            }
	            return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(unit.duration().seconds(), amountToAdd), 0);
	        }
	        var duration = unit.duration().multipliedBy(amountToAdd);
	        return this.plusSecondsNanos(duration.seconds(), duration.nano());
	    };

	    Duration.prototype.plusDays = function plusDays(daysToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(daysToAdd, _LocalTime.LocalTime.SECONDS_PER_DAY), 0);
	    };

	    Duration.prototype.plusHours = function plusHours(hoursToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(hoursToAdd, _LocalTime.LocalTime.SECONDS_PER_HOUR), 0);
	    };

	    Duration.prototype.plusMinutes = function plusMinutes(minutesToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.safeMultiply(minutesToAdd, _LocalTime.LocalTime.SECONDS_PER_MINUTE), 0);
	    };

	    Duration.prototype.plusSeconds = function plusSeconds(secondsToAdd) {
	        return this.plusSecondsNanos(secondsToAdd, 0);
	    };

	    Duration.prototype.plusMillis = function plusMillis(millisToAdd) {
	        return this.plusSecondsNanos(_MathUtil.MathUtil.intDiv(millisToAdd, 1000), _MathUtil.MathUtil.intMod(millisToAdd, 1000) * 1000000);
	    };

	    Duration.prototype.plusNanos = function plusNanos(nanosToAdd) {
	        return this.plusSecondsNanos(0, nanosToAdd);
	    };

	    Duration.prototype.plusSecondsNanos = function plusSecondsNanos(secondsToAdd, nanosToAdd) {
	        (0, _assert.requireNonNull)(secondsToAdd, 'secondsToAdd');
	        (0, _assert.requireNonNull)(nanosToAdd, 'nanosToAdd');
	        if ((secondsToAdd | nanosToAdd) === 0) {
	            return this;
	        }
	        var epochSec = _MathUtil.MathUtil.safeAdd(this._seconds, secondsToAdd);
	        epochSec = _MathUtil.MathUtil.safeAdd(epochSec, _MathUtil.MathUtil.intDiv(nanosToAdd, _LocalTime.LocalTime.NANOS_PER_SECOND));
	        nanosToAdd = _MathUtil.MathUtil.intMod(nanosToAdd, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nanoAdjustment = _MathUtil.MathUtil.safeAdd(this._nanos, nanosToAdd);
	        return Duration.ofSeconds(epochSec, nanoAdjustment);
	    };

	    Duration.prototype.minus = function minus(durationOrNumber, unit) {
	        if (arguments.length === 1) {
	            return this.minusDuration(durationOrNumber);
	        } else {
	            return this.minusAmountUnit(durationOrNumber, unit);
	        }
	    };

	    Duration.prototype.minusDuration = function minusDuration(duration) {
	        (0, _assert.requireNonNull)(duration, 'duration');
	        var secsToSubtract = duration.seconds();
	        var nanosToSubtract = duration.nano();
	        if (secsToSubtract === _MathUtil.MIN_SAFE_INTEGER) {
	            return this.plus(_MathUtil.MAX_SAFE_INTEGER, -nanosToSubtract);
	        }
	        return this.plus(-secsToSubtract, -nanosToSubtract);
	    };

	    Duration.prototype.minusAmountUnit = function minusAmountUnit(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(amountToSubtract, 'amountToSubtract');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return amountToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusAmountUnit(_MathUtil.MAX_SAFE_INTEGER, unit) : this.plusAmountUnit(-amountToSubtract, unit);
	    };

	    Duration.prototype.minusDays = function minusDays(daysToSubtract) {
	        return daysToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusDays(_MathUtil.MAX_SAFE_INTEGER) : this.plusDays(-daysToSubtract);
	    };

	    Duration.prototype.minusHours = function minusHours(hoursToSubtract) {
	        return hoursToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusHours(_MathUtil.MAX_SAFE_INTEGER) : this.plusHours(-hoursToSubtract);
	    };

	    Duration.prototype.minusMinutes = function minusMinutes(minutesToSubtract) {
	        return minutesToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusMinutes(_MathUtil.MAX_SAFE_INTEGER) : this.plusMinutes(-minutesToSubtract);
	    };

	    Duration.prototype.minusSeconds = function minusSeconds(secondsToSubtract) {
	        return secondsToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusSeconds(_MathUtil.MAX_SAFE_INTEGER) : this.plusSeconds(-secondsToSubtract);
	    };

	    Duration.prototype.minusMillis = function minusMillis(millisToSubtract) {
	        return millisToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusMillis(_MathUtil.MAX_SAFE_INTEGER) : this.plusMillis(-millisToSubtract);
	    };

	    Duration.prototype.minusNanos = function minusNanos(nanosToSubtract) {
	        return nanosToSubtract === _MathUtil.MIN_SAFE_INTEGER ? this.plusNanos(_MathUtil.MAX_SAFE_INTEGER) : this.plusNanos(-nanosToSubtract);
	    };

	    Duration.prototype.multipliedBy = function multipliedBy(multiplicand) {
	        if (multiplicand === 0) {
	            return Duration.ZERO;
	        }
	        if (multiplicand === 1) {
	            return this;
	        }
	        var secs = _MathUtil.MathUtil.safeMultiply(this._seconds, multiplicand);
	        var nos = _MathUtil.MathUtil.safeMultiply(this._nanos, multiplicand);
	        secs = secs + _MathUtil.MathUtil.intDiv(nos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        nos = _MathUtil.MathUtil.intMod(nos, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        return Duration.ofSeconds(secs, nos);
	    };

	    Duration.prototype.dividedBy = function dividedBy(divisor) {
	        if (divisor === 0) {
	            throw new _errors.ArithmeticException('Cannot divide by zero');
	        }
	        if (divisor === 1) {
	            return this;
	        }
	        var secs = _MathUtil.MathUtil.intDiv(this._seconds, divisor);
	        var secsMod = _MathUtil.MathUtil.roundDown((this._seconds / divisor - secs) * _LocalTime.LocalTime.NANOS_PER_SECOND);
	        var nos = _MathUtil.MathUtil.intDiv(this._nanos, divisor);
	        nos = secsMod + nos;
	        return Duration.ofSeconds(secs, nos);
	    };

	    Duration.prototype.negated = function negated() {
	        return this.multipliedBy(-1);
	    };

	    Duration.prototype.abs = function abs() {
	        return this.isNegative() ? this.negated() : this;
	    };

	    Duration.prototype.addTo = function addTo(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._seconds !== 0) {
	            temporal = temporal.plus(this._seconds, _ChronoUnit.ChronoUnit.SECONDS);
	        }
	        if (this._nanos !== 0) {
	            temporal = temporal.plus(this._nanos, _ChronoUnit.ChronoUnit.NANOS);
	        }
	        return temporal;
	    };

	    Duration.prototype.subtractFrom = function subtractFrom(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._seconds !== 0) {
	            temporal = temporal.minus(this._seconds, _ChronoUnit.ChronoUnit.SECONDS);
	        }
	        if (this._nanos !== 0) {
	            temporal = temporal.minus(this._nanos, _ChronoUnit.ChronoUnit.NANOS);
	        }
	        return temporal;
	    };

	    Duration.prototype.toDays = function toDays() {
	        return _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_DAY);
	    };

	    Duration.prototype.toHours = function toHours() {
	        return _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_HOUR);
	    };

	    Duration.prototype.toMinutes = function toMinutes() {
	        return _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	    };

	    Duration.prototype.toMillis = function toMillis() {
	        var millis = Math.round(_MathUtil.MathUtil.safeMultiply(this._seconds, 1000));
	        millis = _MathUtil.MathUtil.safeAdd(millis, _MathUtil.MathUtil.intDiv(this._nanos, 1000000));
	        return millis;
	    };

	    Duration.prototype.toNanos = function toNanos() {
	        var totalNanos = _MathUtil.MathUtil.safeMultiply(this._seconds, _LocalTime.LocalTime.NANOS_PER_SECOND);
	        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, this._nanos);
	        return totalNanos;
	    };

	    Duration.prototype.compareTo = function compareTo(otherDuration) {
	        (0, _assert.requireNonNull)(otherDuration, 'otherDuration');
	        (0, _assert.requireInstance)(otherDuration, Duration, 'otherDuration');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this._seconds, otherDuration.seconds());
	        if (cmp !== 0) {
	            return cmp;
	        }
	        return this._nanos - otherDuration.nano();
	    };

	    Duration.prototype.equals = function equals(otherDuration) {
	        if (this === otherDuration) {
	            return true;
	        }
	        if (otherDuration instanceof Duration) {
	            return this.seconds() === otherDuration.seconds() && this.nano() === otherDuration.nano();
	        }
	        return false;
	    };

	    Duration.prototype.toString = function toString() {
	        if (this === Duration.ZERO) {
	            return 'PT0S';
	        }
	        var hours = _MathUtil.MathUtil.intDiv(this._seconds, _LocalTime.LocalTime.SECONDS_PER_HOUR);
	        var minutes = _MathUtil.MathUtil.intDiv(_MathUtil.MathUtil.intMod(this._seconds, _LocalTime.LocalTime.SECONDS_PER_HOUR), _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	        var secs = _MathUtil.MathUtil.intMod(this._seconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	        var rval = 'PT';
	        if (hours !== 0) {
	            rval += hours + 'H';
	        }
	        if (minutes !== 0) {
	            rval += minutes + 'M';
	        }
	        if (secs === 0 && this._nanos === 0 && rval.length > 2) {
	            return rval;
	        }
	        if (secs < 0 && this._nanos > 0) {
	            if (secs === -1) {
	                rval += '-0';
	            } else {
	                rval += secs + 1;
	            }
	        } else {
	            rval += secs;
	        }
	        if (this._nanos > 0) {
	            rval += '.';
	            var nanoString = void 0;
	            if (secs < 0) {
	                nanoString = '' + (2 * _LocalTime.LocalTime.NANOS_PER_SECOND - this._nanos);
	            } else {
	                nanoString = '' + (_LocalTime.LocalTime.NANOS_PER_SECOND + this._nanos);
	            }

	            nanoString = nanoString.slice(1, nanoString.length);
	            rval += nanoString;
	            while (rval.charAt(rval.length - 1) === '0') {
	                rval = rval.slice(0, rval.length - 1);
	            }
	        }
	        rval += 'S';
	        return rval;
	    };

	    Duration.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    return Duration;
	}(_TemporalAmount2.TemporalAmount);

	function _init() {
	    Duration.ZERO = new Duration(0, 0);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAmount = undefined;

	var _assert = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAmount = exports.TemporalAmount = function () {
	  function TemporalAmount() {
	    _classCallCheck(this, TemporalAmount);
	  }

	  TemporalAmount.prototype.get = function get(unit) {
	    (0, _assert.abstractMethodFail)('get');
	  };

	  TemporalAmount.prototype.units = function units() {
	    (0, _assert.abstractMethodFail)('units');
	  };

	  TemporalAmount.prototype.addTo = function addTo(temporal) {
	    (0, _assert.abstractMethodFail)('addTo');
	  };

	  TemporalAmount.prototype.subtractFrom = function subtractFrom(temporal) {
	    (0, _assert.abstractMethodFail)('subtractFrom');
	  };

	  return TemporalAmount;
	}();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalUnit = undefined;

	var _assert = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalUnit = exports.TemporalUnit = function () {
	  function TemporalUnit() {
	    _classCallCheck(this, TemporalUnit);
	  }

	  TemporalUnit.prototype.duration = function duration() {
	    (0, _assert.abstractMethodFail)('duration');
	  };

	  TemporalUnit.prototype.isDurationEstimated = function isDurationEstimated() {
	    (0, _assert.abstractMethodFail)('isDurationEstimated');
	  };

	  TemporalUnit.prototype.isDateBased = function isDateBased() {
	    (0, _assert.abstractMethodFail)('isDateBased');
	  };

	  TemporalUnit.prototype.isTimeBased = function isTimeBased() {
	    (0, _assert.abstractMethodFail)('isTimeBased');
	  };

	  TemporalUnit.prototype.isSupportedBy = function isSupportedBy(temporal) {
	    (0, _assert.abstractMethodFail)('isSupportedBy');
	  };

	  TemporalUnit.prototype.addTo = function addTo(dateTime, periodToAdd) {
	    (0, _assert.abstractMethodFail)('addTo');
	  };

	  TemporalUnit.prototype.between = function between(temporal1, temporal2) {
	    (0, _assert.abstractMethodFail)('between');
	  };

	  return TemporalUnit;
	}();

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports._init = _init;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	 */

	var YearConstants = exports.YearConstants = function YearConstants() {
	  _classCallCheck(this, YearConstants);
	};

	function _init() {
	  YearConstants.MIN_VALUE = -999999;

	  YearConstants.MAX_VALUE = 999999;
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var TemporalField = exports.TemporalField = function TemporalField() {
	  _classCallCheck(this, TemporalField);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ValueRange = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ValueRange = exports.ValueRange = function () {
	    function ValueRange(minSmallest, minLargest, maxSmallest, maxLargest) {
	        _classCallCheck(this, ValueRange);

	        (0, _assert.assert)(!(minSmallest > minLargest), 'Smallest minimum value \'' + minSmallest + '\' must be less than largest minimum value \'' + minLargest + '\'', _errors.IllegalArgumentException);
	        (0, _assert.assert)(!(maxSmallest > maxLargest), 'Smallest maximum value \'' + maxSmallest + '\' must be less than largest maximum value \'' + maxLargest + '\'', _errors.IllegalArgumentException);
	        (0, _assert.assert)(!(minLargest > maxLargest), 'Minimum value \'' + minLargest + '\' must be less than maximum value \'' + maxLargest + '\'', _errors.IllegalArgumentException);

	        this._minSmallest = minSmallest;
	        this._minLargest = minLargest;
	        this._maxLargest = maxLargest;
	        this._maxSmallest = maxSmallest;
	    }

	    ValueRange.prototype.isFixed = function isFixed() {
	        return this._minSmallest === this._minLargest && this._maxSmallest === this._maxLargest;
	    };

	    ValueRange.prototype.minimum = function minimum() {
	        return this._minSmallest;
	    };

	    ValueRange.prototype.largestMinimum = function largestMinimum() {
	        return this._minLargest;
	    };

	    ValueRange.prototype.maximum = function maximum() {
	        return this._maxLargest;
	    };

	    ValueRange.prototype.smallestMaximum = function smallestMaximum() {
	        return this._maxSmallest;
	    };

	    ValueRange.prototype.isValidValue = function isValidValue(value) {
	        return this.minimum() <= value && value <= this.maximum();
	    };

	    ValueRange.prototype.checkValidValue = function checkValidValue(value, field) {
	        var msg = void 0;
	        if (!this.isValidValue(value)) {
	            if (field != null) {
	                msg = 'Invalid value for ' + field + ' (valid values ' + this.toString() + '): ' + value;
	            } else {
	                msg = 'Invalid value (valid values ' + this.toString() + '): ' + value;
	            }
	            return (0, _assert.assert)(false, msg, _errors.DateTimeException);
	        }
	    };

	    ValueRange.prototype.checkValidIntValue = function checkValidIntValue(value, field) {
	        if (this.isValidIntValue(value) === false) {
	            throw new _errors.DateTimeException('Invalid int value for ' + field + ': ' + value);
	        }
	        return value;
	    };

	    ValueRange.prototype.isValidIntValue = function isValidIntValue(value) {
	        return this.isIntValue() && this.isValidValue(value);
	    };

	    ValueRange.prototype.isIntValue = function isIntValue() {
	        return this.minimum() >= _MathUtil.MathUtil.MIN_SAFE_INTEGER && this.maximum() <= _MathUtil.MathUtil.MAX_SAFE_INTEGER;
	    };

	    ValueRange.prototype.equals = function equals(other) {
	        if (other === this) {
	            return true;
	        }
	        if (other instanceof ValueRange) {
	            return this._minSmallest === other._minSmallest && this._minLargest === other._minLargest && this._maxSmallest === other._maxSmallest && this._maxLargest === other._maxLargest;
	        }
	        return false;
	    };

	    ValueRange.prototype.hashCode = function hashCode() {
	        var hash = this._minSmallest + this._minLargest << 16 + this._minLargest >> 48 + this._maxSmallest << 32 + this._maxSmallest >> 32 + this._maxLargest << 48 + this._maxLargest >> 16;
	        return hash ^ hash >>> 32;
	    };

	    ValueRange.prototype.toString = function toString() {
	        var str = this.minimum() + (this.minimum() !== this.largestMinimum() ? '/' + this.largestMinimum() : '');
	        str += ' - ';
	        str += this.smallestMaximum() + (this.smallestMaximum() !== this.maximum() ? '/' + this.maximum() : '');
	        return str;
	    };

	    ValueRange.of = function of() {
	        if (arguments.length === 2) {
	            return new ValueRange(arguments[0], arguments[0], arguments[1], arguments[1]);
	        } else if (arguments.length === 3) {
	            return new ValueRange(arguments[0], arguments[0], arguments[1], arguments[2]);
	        } else if (arguments.length === 4) {
	            return new ValueRange(arguments[0], arguments[1], arguments[2], arguments[3]);
	        } else {
	            return (0, _assert.assert)(false, 'Invalid number of arguments ' + arguments.length, _errors.IllegalArgumentException);
	        }
	    };

	    return ValueRange;
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Temporal = undefined;

	var _TemporalAccessor2 = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Temporal = exports.Temporal = function (_TemporalAccessor) {
	  _inherits(Temporal, _TemporalAccessor);

	  function Temporal() {
	    _classCallCheck(this, Temporal);

	    return _possibleConstructorReturn(this, _TemporalAccessor.apply(this, arguments));
	  }

	  return Temporal;
	}(_TemporalAccessor2.TemporalAccessor);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAccessor = undefined;

	var _errors = __webpack_require__(3);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQueries = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAccessor = function () {
	    function TemporalAccessor() {
	        _classCallCheck(this, TemporalAccessor);
	    }

	    TemporalAccessor.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.precision()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    TemporalAccessor.prototype.get = function get(field) {
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    TemporalAccessor.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            if (this.isSupported(field)) {
	                return field.range();
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    return TemporalAccessor;
	}();

	exports.TemporalAccessor = TemporalAccessor;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var TemporalQueries = exports.TemporalQueries = function () {
	  function TemporalQueries() {
	    _classCallCheck(this, TemporalQueries);
	  }

	  TemporalQueries.zoneId = function zoneId() {
	    return TemporalQueries.ZONE_ID;
	  };

	  TemporalQueries.chronology = function chronology() {
	    return TemporalQueries.CHRONO;
	  };

	  TemporalQueries.precision = function precision() {
	    return TemporalQueries.PRECISION;
	  };

	  TemporalQueries.zone = function zone() {
	    return TemporalQueries.ZONE;
	  };

	  TemporalQueries.offset = function offset() {
	    return TemporalQueries.OFFSET;
	  };

	  TemporalQueries.localDate = function localDate() {
	    return TemporalQueries.LOCAL_DATE;
	  };

	  TemporalQueries.localTime = function localTime() {
	    return TemporalQueries.LOCAL_TIME;
	  };

	  return TemporalQueries;
	}();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalQuery = undefined;
	exports.createTemporalQuery = createTemporalQuery;

	var _assert = __webpack_require__(2);

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var TemporalQuery = exports.TemporalQuery = function (_Enum) {
	  _inherits(TemporalQuery, _Enum);

	  function TemporalQuery() {
	    _classCallCheck(this, TemporalQuery);

	    return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	  }

	  TemporalQuery.prototype.queryFrom = function queryFrom(temporal) {
	    (0, _assert.abstractMethodFail)('queryFrom');
	  };

	  return TemporalQuery;
	}(_Enum2.Enum);

	function createTemporalQuery(name, queryFromFunction) {
	  var ExtendedTemporalQuery = function (_TemporalQuery) {
	    _inherits(ExtendedTemporalQuery, _TemporalQuery);

	    function ExtendedTemporalQuery() {
	      _classCallCheck(this, ExtendedTemporalQuery);

	      return _possibleConstructorReturn(this, _TemporalQuery.apply(this, arguments));
	    }

	    return ExtendedTemporalQuery;
	  }(TemporalQuery);

	  ExtendedTemporalQuery.prototype.queryFrom = queryFromFunction;
	  return new ExtendedTemporalQuery(name);
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Month = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _errors = __webpack_require__(3);

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	var _IsoChronology = __webpack_require__(9);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalQueries = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Month = function (_Temporal) {
	    _inherits(Month, _Temporal);

	    function Month(value) {
	        _classCallCheck(this, Month);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._value = value;
	        return _this;
	    }

	    Month.prototype.value = function value() {
	        return this._value;
	    };

	    Month.prototype.getDisplayName = function getDisplayName(style, locale) {
	        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	        return new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendText(_ChronoField.ChronoField.MONTH_OF_YEAR, style).toFormatter(locale).format(this);
	    };

	    Month.prototype.isSupported = function isSupported(field) {
	        if (null === field) {
	            return false;
	        }
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.MONTH_OF_YEAR;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    Month.prototype.get = function get(field) {
	        if (field === _ChronoField.ChronoField.MONTH_OF_YEAR) {
	            return this.value();
	        }
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    Month.prototype.getLong = function getLong(field) {
	        if (field === _ChronoField.ChronoField.MONTH_OF_YEAR) {
	            return this.value();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    Month.prototype.plus = function plus(months) {
	        var amount = _MathUtil.MathUtil.intMod(months, 12) + 12;
	        var newMonthVal = _MathUtil.MathUtil.intMod(this.value() + amount, 12);

	        newMonthVal = newMonthVal === 0 ? 12 : newMonthVal;
	        return Month.of(newMonthVal);
	    };

	    Month.prototype.minus = function minus(months) {
	        return this.plus(-1 * _MathUtil.MathUtil.intMod(months, 12));
	    };

	    Month.prototype.length = function length(leapYear) {
	        switch (this) {
	            case Month.FEBRUARY:
	                return leapYear ? 29 : 28;
	            case Month.APRIL:
	            case Month.JUNE:
	            case Month.SEPTEMBER:
	            case Month.NOVEMBER:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    Month.prototype.minLength = function minLength() {
	        switch (this) {
	            case Month.FEBRUARY:
	                return 28;
	            case Month.APRIL:
	            case Month.JUNE:
	            case Month.SEPTEMBER:
	            case Month.NOVEMBER:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    Month.prototype.maxLength = function maxLength() {
	        switch (this) {
	            case Month.FEBRUARY:
	                return 29;
	            case Month.APRIL:
	            case Month.JUNE:
	            case Month.SEPTEMBER:
	            case Month.NOVEMBER:
	                return 30;
	            default:
	                return 31;
	        }
	    };

	    Month.prototype.firstDayOfYear = function firstDayOfYear(leapYear) {
	        var leap = leapYear ? 1 : 0;
	        switch (this) {
	            case Month.JANUARY:
	                return 1;
	            case Month.FEBRUARY:
	                return 32;
	            case Month.MARCH:
	                return 60 + leap;
	            case Month.APRIL:
	                return 91 + leap;
	            case Month.MAY:
	                return 121 + leap;
	            case Month.JUNE:
	                return 152 + leap;
	            case Month.JULY:
	                return 182 + leap;
	            case Month.AUGUST:
	                return 213 + leap;
	            case Month.SEPTEMBER:
	                return 244 + leap;
	            case Month.OCTOBER:
	                return 274 + leap;
	            case Month.NOVEMBER:
	                return 305 + leap;
	            case Month.DECEMBER:
	            default:
	                return 335 + leap;
	        }
	    };

	    Month.prototype.firstMonthOfQuarter = function firstMonthOfQuarter() {
	        switch (this) {
	            case Month.JANUARY:
	            case Month.FEBRUARY:
	            case Month.MARCH:
	                return Month.JANUARY;
	            case Month.APRIL:
	            case Month.MAY:
	            case Month.JUNE:
	                return Month.APRIL;
	            case Month.JULY:
	            case Month.AUGUST:
	            case Month.SEPTEMBER:
	                return Month.JULY;
	            case Month.OCTOBER:
	            case Month.NOVEMBER:
	            case Month.DECEMBER:
	            default:
	                return Month.OCTOBER;
	        }
	    };

	    Month.prototype.query = function query(_query) {
	        (0, _assert.assert)(_query != null, 'query() parameter must not be null', _errors.DateTimeException);
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.MONTHS;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    Month.prototype.toString = function toString() {
	        switch (this) {
	            case Month.JANUARY:
	                return 'JANUARY';
	            case Month.FEBRUARY:
	                return 'FEBRUARY';
	            case Month.MARCH:
	                return 'MARCH';
	            case Month.APRIL:
	                return 'APRIL';
	            case Month.MAY:
	                return 'MAY';
	            case Month.JUNE:
	                return 'JUNE';
	            case Month.JULY:
	                return 'JULY';
	            case Month.AUGUST:
	                return 'AUGUST';
	            case Month.SEPTEMBER:
	                return 'SEPTEMBER';
	            case Month.OCTOBER:
	                return 'OCTOBER';
	            case Month.NOVEMBER:
	                return 'NOVEMBER';
	            case Month.DECEMBER:
	                return 'DECEMBER';
	            default:
	                return 'unknown Month, value: ' + this.value();
	        }
	    };

	    Month.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.MONTH_OF_YEAR, this.value());
	    };

	    Month.values = function values() {
	        return MONTHS.slice();
	    };

	    Month.of = function of(month) {
	        if (month < 1 || month > 12) {
	            (0, _assert.assert)(false, 'Invalid value for MonthOfYear: ' + month, _errors.DateTimeException);
	        }
	        return MONTHS[month - 1];
	    };

	    Month.from = function from(temporal) {
	        if (temporal instanceof Month) {
	            return temporal;
	        }
	        try {
	            return Month.of(temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain Month from TemporalAccessor: ' + temporal + ' of type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''), ex);
	        }
	    };

	    return Month;
	}(_Temporal2.Temporal);

	exports.Month = Month;


	var MONTHS = void 0;

	function _init() {
	    Month.JANUARY = new Month(1);
	    Month.FEBRUARY = new Month(2);
	    Month.MARCH = new Month(3);
	    Month.APRIL = new Month(4);
	    Month.MAY = new Month(5);
	    Month.JUNE = new Month(6);
	    Month.JULY = new Month(7);
	    Month.AUGUST = new Month(8);
	    Month.SEPTEMBER = new Month(9);
	    Month.OCTOBER = new Month(10);
	    Month.NOVEMBER = new Month(11);
	    Month.DECEMBER = new Month(12);

	    MONTHS = [Month.JANUARY, Month.FEBRUARY, Month.MARCH, Month.APRIL, Month.MAY, Month.JUNE, Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER, Month.DECEMBER];
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeFormatterBuilder = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _LocalDate = __webpack_require__(8);

	var _LocalDateTime = __webpack_require__(7);

	var _ZoneOffset = __webpack_require__(26);

	var _ChronoLocalDate = __webpack_require__(30);

	var _ChronoField = __webpack_require__(12);

	var _IsoFields = __webpack_require__(41);

	var _TemporalQueries = __webpack_require__(22);

	var _DateTimeFormatter = __webpack_require__(31);

	var _DecimalStyle = __webpack_require__(42);

	var _SignStyle = __webpack_require__(39);

	var _TextStyle = __webpack_require__(43);

	var _ResolverStyle = __webpack_require__(36);

	var _CharLiteralPrinterParser = __webpack_require__(44);

	var _CompositePrinterParser = __webpack_require__(45);

	var _FractionPrinterParser = __webpack_require__(46);

	var _NumberPrinterParser = __webpack_require__(47);

	var _OffsetIdPrinterParser = __webpack_require__(48);

	var _PadPrinterParserDecorator = __webpack_require__(49);

	var _SettingsParser = __webpack_require__(50);

	var _StringLiteralPrinterParser = __webpack_require__(51);

	var _ZoneIdPrinterParser = __webpack_require__(52);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var MAX_WIDTH = 15;
	var DateTimeFormatterBuilder = exports.DateTimeFormatterBuilder = function () {
	    function DateTimeFormatterBuilder() {
	        var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        _classCallCheck(this, DateTimeFormatterBuilder);

	        this._active = this;

	        this._parent = parent;

	        this._printerParsers = [];

	        this._optional = optional;

	        this._padNextWidth = 0;

	        this._padNextChar = null;

	        this._valueParserIndex = -1;
	    }

	    DateTimeFormatterBuilder.prototype.parseCaseSensitive = function parseCaseSensitive() {
	        this._appendInternalPrinterParser(_SettingsParser.SettingsParser.SENSITIVE);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.parseCaseInsensitive = function parseCaseInsensitive() {
	        this._appendInternalPrinterParser(_SettingsParser.SettingsParser.INSENSITIVE);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.parseStrict = function parseStrict() {
	        this._appendInternalPrinterParser(_SettingsParser.SettingsParser.STRICT);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.parseLenient = function parseLenient() {
	        this._appendInternalPrinterParser(_SettingsParser.SettingsParser.LENIENT);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendValue = function appendValue() {
	        if (arguments.length === 1) {
	            return this._appendValue1.apply(this, arguments);
	        } else if (arguments.length === 2) {
	            return this._appendValue2.apply(this, arguments);
	        } else {
	            return this._appendValue4.apply(this, arguments);
	        }
	    };

	    DateTimeFormatterBuilder.prototype._appendValue1 = function _appendValue1(field) {
	        (0, _assert.requireNonNull)(field);
	        this._appendValuePrinterParser(new _NumberPrinterParser.NumberPrinterParser(field, 1, MAX_WIDTH, _SignStyle.SignStyle.NORMAL));
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._appendValue2 = function _appendValue2(field, width) {
	        (0, _assert.requireNonNull)(field);
	        if (width < 1 || width > MAX_WIDTH) {
	            throw new _errors.IllegalArgumentException('The width must be from 1 to ' + MAX_WIDTH + ' inclusive but was ' + width);
	        }
	        var pp = new _NumberPrinterParser.NumberPrinterParser(field, width, width, _SignStyle.SignStyle.NOT_NEGATIVE);
	        this._appendValuePrinterParser(pp);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._appendValue4 = function _appendValue4(field, minWidth, maxWidth, signStyle) {
	        (0, _assert.requireNonNull)(field);
	        (0, _assert.requireNonNull)(signStyle);
	        if (minWidth === maxWidth && signStyle === _SignStyle.SignStyle.NOT_NEGATIVE) {
	            return this._appendValue2(field, maxWidth);
	        }
	        if (minWidth < 1 || minWidth > MAX_WIDTH) {
	            throw new _errors.IllegalArgumentException('The minimum width must be from 1 to ' + MAX_WIDTH + ' inclusive but was ' + minWidth);
	        }
	        if (maxWidth < 1 || maxWidth > MAX_WIDTH) {
	            throw new _errors.IllegalArgumentException('The minimum width must be from 1 to ' + MAX_WIDTH + ' inclusive but was ' + maxWidth);
	        }
	        if (maxWidth < minWidth) {
	            throw new _errors.IllegalArgumentException('The maximum width must exceed or equal the minimum width but ' + maxWidth + ' < ' + minWidth);
	        }
	        var pp = new _NumberPrinterParser.NumberPrinterParser(field, minWidth, maxWidth, signStyle);
	        this._appendValuePrinterParser(pp);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendValueReduced = function appendValueReduced() {
	        if (arguments.length === 4 && arguments[3] instanceof _ChronoLocalDate.ChronoLocalDate) {
	            return this._appendValueReducedFieldWidthMaxWidthBaseDate.apply(this, arguments);
	        } else {
	            return this._appendValueReducedFieldWidthMaxWidthBaseValue.apply(this, arguments);
	        }
	    };

	    DateTimeFormatterBuilder.prototype._appendValueReducedFieldWidthMaxWidthBaseValue = function _appendValueReducedFieldWidthMaxWidthBaseValue(field, width, maxWidth, baseValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        var pp = new _NumberPrinterParser.ReducedPrinterParser(field, width, maxWidth, baseValue, null);
	        this._appendValuePrinterParser(pp);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._appendValueReducedFieldWidthMaxWidthBaseDate = function _appendValueReducedFieldWidthMaxWidthBaseDate(field, width, maxWidth, baseDate) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireNonNull)(baseDate, 'baseDate');
	        (0, _assert.requireInstance)(baseDate, _ChronoLocalDate.ChronoLocalDate, 'baseDate');
	        var pp = new _NumberPrinterParser.ReducedPrinterParser(field, width, maxWidth, 0, baseDate);
	        this._appendValuePrinterParser(pp);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._appendValuePrinterParser = function _appendValuePrinterParser(pp) {
	        (0, _assert.assert)(pp != null);
	        if (this._active._valueParserIndex >= 0 && this._active._printerParsers[this._active._valueParserIndex] instanceof _NumberPrinterParser.NumberPrinterParser) {
	            var activeValueParser = this._active._valueParserIndex;

	            var basePP = this._active._printerParsers[activeValueParser];
	            if (pp.minWidth() === pp.maxWidth() && pp.signStyle() === _SignStyle.SignStyle.NOT_NEGATIVE) {
	                basePP = basePP.withSubsequentWidth(pp.maxWidth());

	                this._appendInternal(pp.withFixedWidth());

	                this._active._valueParserIndex = activeValueParser;
	            } else {
	                basePP = basePP.withFixedWidth();

	                this._active._valueParserIndex = this._appendInternal(pp);
	            }

	            this._active._printerParsers[activeValueParser] = basePP;
	        } else {
	            this._active._valueParserIndex = this._appendInternal(pp);
	        }
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendFraction = function appendFraction(field, minWidth, maxWidth, decimalPoint) {
	        this._appendInternal(new _FractionPrinterParser.FractionPrinterParser(field, minWidth, maxWidth, decimalPoint));
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendInstant = function appendInstant() {
	        var fractionalDigits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -2;

	        if (fractionalDigits < -2 || fractionalDigits > 9) {
	            throw new _errors.IllegalArgumentException('Invalid fractional digits: ' + fractionalDigits);
	        }
	        this._appendInternal(new InstantPrinterParser(fractionalDigits));
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendOffsetId = function appendOffsetId() {
	        this._appendInternal(_OffsetIdPrinterParser.OffsetIdPrinterParser.INSTANCE_ID);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendOffset = function appendOffset(pattern, noOffsetText) {
	        this._appendInternalPrinterParser(new _OffsetIdPrinterParser.OffsetIdPrinterParser(noOffsetText, pattern));
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendZoneId = function appendZoneId() {
	        this._appendInternal(new _ZoneIdPrinterParser.ZoneIdPrinterParser(_TemporalQueries.TemporalQueries.zoneId(), 'ZoneId()'));
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.appendPattern = function appendPattern(pattern) {
	        (0, _assert.requireNonNull)(pattern, 'pattern');
	        this._parsePattern(pattern);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._parsePattern = function _parsePattern(pattern) {
	        var FIELD_MAP = {
	            'G': _ChronoField.ChronoField.ERA,
	            'y': _ChronoField.ChronoField.YEAR_OF_ERA,
	            'u': _ChronoField.ChronoField.YEAR,
	            'Q': _IsoFields.IsoFields.QUARTER_OF_YEAR,
	            'q': _IsoFields.IsoFields.QUARTER_OF_YEAR,
	            'M': _ChronoField.ChronoField.MONTH_OF_YEAR,
	            'L': _ChronoField.ChronoField.MONTH_OF_YEAR,
	            'D': _ChronoField.ChronoField.DAY_OF_YEAR,
	            'd': _ChronoField.ChronoField.DAY_OF_MONTH,
	            'F': _ChronoField.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH,
	            'E': _ChronoField.ChronoField.DAY_OF_WEEK,
	            'c': _ChronoField.ChronoField.DAY_OF_WEEK,
	            'e': _ChronoField.ChronoField.DAY_OF_WEEK,
	            'a': _ChronoField.ChronoField.AMPM_OF_DAY,
	            'H': _ChronoField.ChronoField.HOUR_OF_DAY,
	            'k': _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY,
	            'K': _ChronoField.ChronoField.HOUR_OF_AMPM,
	            'h': _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM,
	            'm': _ChronoField.ChronoField.MINUTE_OF_HOUR,
	            's': _ChronoField.ChronoField.SECOND_OF_MINUTE,
	            'S': _ChronoField.ChronoField.NANO_OF_SECOND,
	            'A': _ChronoField.ChronoField.MILLI_OF_DAY,
	            'n': _ChronoField.ChronoField.NANO_OF_SECOND,
	            'N': _ChronoField.ChronoField.NANO_OF_DAY
	        };

	        for (var pos = 0; pos < pattern.length; pos++) {
	            var cur = pattern.charAt(pos);
	            if (cur >= 'A' && cur <= 'Z' || cur >= 'a' && cur <= 'z') {
	                var start = pos++;
	                for (; pos < pattern.length && pattern.charAt(pos) === cur; pos++) {}
	                var count = pos - start;

	                if (cur === 'p') {
	                    var pad = 0;
	                    if (pos < pattern.length) {
	                        cur = pattern.charAt(pos);
	                        if (cur >= 'A' && cur <= 'Z' || cur >= 'a' && cur <= 'z') {
	                            pad = count;
	                            start = pos++;
	                            for (; pos < pattern.length && pattern.charAt(pos) === cur; pos++) {}
	                            count = pos - start;
	                        }
	                    }
	                    if (pad === 0) {
	                        throw new _errors.IllegalArgumentException('Pad letter \'p\' must be followed by valid pad pattern: ' + pattern);
	                    }
	                    this.padNext(pad);
	                }

	                var field = FIELD_MAP[cur];
	                if (field != null) {
	                    this._parseField(cur, count, field);
	                } else if (cur === 'z') {
	                    if (count > 4) {
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                    } else if (count === 4) {
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendZoneText(_TextStyle.TextStyle.FULL);
	                    } else {
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendZoneText(_TextStyle.TextStyle.SHORT);
	                    }
	                } else if (cur === 'V') {
	                    if (count !== 2) {
	                        throw new _errors.IllegalArgumentException('Pattern letter count must be 2: ' + cur);
	                    }
	                    this.appendZoneId();
	                } else if (cur === 'Z') {
	                    if (count < 4) {
	                        this.appendOffset('+HHMM', '+0000');
	                    } else if (count === 4) {
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendLocalizedOffset(_TextStyle.TextStyle.FULL);
	                    } else if (count === 5) {
	                        this.appendOffset('+HH:MM:ss', 'Z');
	                    } else {
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                    }
	                } else if (cur === 'O') {
	                    if (count === 1) {
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendLocalizedOffset(_TextStyle.TextStyle.SHORT);
	                    } else if (count === 4) {
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendLocalizedOffset(_TextStyle.TextStyle.FULL);
	                    } else {
	                        throw new _errors.IllegalArgumentException('Pattern letter count must be 1 or 4: ' + cur);
	                    }
	                } else if (cur === 'X') {
	                    if (count > 5) {
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                    }
	                    this.appendOffset(_OffsetIdPrinterParser.OffsetIdPrinterParser.PATTERNS[count + (count === 1 ? 0 : 1)], 'Z');
	                } else if (cur === 'x') {
	                    if (count > 5) {
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                    }
	                    var zero = count === 1 ? '+00' : count % 2 === 0 ? '+0000' : '+00:00';
	                    this.appendOffset(_OffsetIdPrinterParser.OffsetIdPrinterParser.PATTERNS[count + (count === 1 ? 0 : 1)], zero);
	                } else if (cur === 'W') {
	                    if (count > 1) {
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                    }
	                    this._appendInternal(new _OffsetIdPrinterParser.OffsetIdPrinterParser('W', count));
	                } else if (cur === 'w') {
	                    if (count > 2) {
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                    }
	                    this._appendInternal(new _OffsetIdPrinterParser.OffsetIdPrinterParser('w', count));
	                } else if (cur === 'Y') {
	                    this._appendInternal(new _OffsetIdPrinterParser.OffsetIdPrinterParser('Y', count));
	                } else {
	                    throw new _errors.IllegalArgumentException('Unknown pattern letter: ' + cur);
	                }
	                pos--;
	            } else if (cur === '\'') {
	                var _start = pos++;
	                for (; pos < pattern.length; pos++) {
	                    if (pattern.charAt(pos) === '\'') {
	                        if (pos + 1 < pattern.length && pattern.charAt(pos + 1) === '\'') {
	                            pos++;
	                        } else {
	                            break;
	                        }
	                    }
	                }
	                if (pos >= pattern.length) {
	                    throw new _errors.IllegalArgumentException('Pattern ends with an incomplete string literal: ' + pattern);
	                }
	                var str = pattern.substring(_start + 1, pos);
	                if (str.length === 0) {
	                    this.appendLiteral('\'');
	                } else {
	                    this.appendLiteral(str.replace('\'\'', '\''));
	                }
	            } else if (cur === '[') {
	                this.optionalStart();
	            } else if (cur === ']') {
	                if (this._active._parent === null) {
	                    throw new _errors.IllegalArgumentException('Pattern invalid as it contains ] without previous [');
	                }
	                this.optionalEnd();
	            } else if (cur === '{' || cur === '}' || cur === '#') {
	                throw new _errors.IllegalArgumentException('Pattern includes reserved character: \'' + cur + '\'');
	            } else {
	                this.appendLiteral(cur);
	            }
	        }
	    };

	    DateTimeFormatterBuilder.prototype._parseField = function _parseField(cur, count, field) {
	        switch (cur) {
	            case 'u':
	            case 'y':
	                if (count === 2) {
	                    this.appendValueReduced(field, 2, 2, _NumberPrinterParser.ReducedPrinterParser.BASE_DATE);
	                } else if (count < 4) {
	                    this.appendValue(field, count, MAX_WIDTH, _SignStyle.SignStyle.NORMAL);
	                } else {
	                    this.appendValue(field, count, MAX_WIDTH, _SignStyle.SignStyle.EXCEEDS_PAD);
	                }
	                break;
	            case 'M':
	            case 'Q':
	                switch (count) {
	                    case 1:
	                        this.appendValue(field);
	                        break;
	                    case 2:
	                        this.appendValue(field, 2);
	                        break;
	                    case 3:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.SHORT);
	                        break;
	                    case 4:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.FULL);
	                        break;
	                    case 5:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.NARROW);
	                        break;
	                    default:
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }
	                break;
	            case 'L':
	            case 'q':
	                switch (count) {
	                    case 1:
	                        this.appendValue(field);
	                        break;
	                    case 2:
	                        this.appendValue(field, 2);
	                        break;
	                    case 3:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.SHORT_STANDALONE);
	                        break;
	                    case 4:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.FULL_STANDALONE);
	                        break;
	                    case 5:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.NARROW_STANDALONE);
	                        break;
	                    default:
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }
	                break;
	            case 'e':
	                switch (count) {
	                    case 1:
	                    case 2:
	                        throw new _errors.IllegalArgumentException('Pattern using WeekFields not implemented yet!');

	                        this.appendInternal(new WeekFieldsPrinterParser('e', count));
	                        break;
	                    case 3:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.SHORT);
	                        break;
	                    case 4:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.FULL);
	                        break;
	                    case 5:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.NARROW);
	                        break;
	                    default:
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }

	                break;
	            case 'c':
	                switch (count) {
	                    case 1:
	                        throw new _errors.IllegalArgumentException('Pattern using WeekFields not implemented yet!');

	                        this.appendInternal(new WeekFieldsPrinterParser('c', count));
	                        break;
	                    case 2:
	                        throw new _errors.IllegalArgumentException('Invalid number of pattern letters: ' + cur);
	                    case 3:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.SHORT_STANDALONE);
	                        break;
	                    case 4:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.FULL_STANDALONE);
	                        break;
	                    case 5:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.NARROW_STANDALONE);
	                        break;
	                    default:
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }

	                break;
	            case 'a':
	                if (count === 1) {
	                    throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                    this.appendText(field, _TextStyle.TextStyle.SHORT);
	                } else {
	                    throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }

	                break;
	            case 'E':
	            case 'G':
	                switch (count) {
	                    case 1:
	                    case 2:
	                    case 3:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.SHORT);
	                        break;
	                    case 4:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.FULL);
	                        break;
	                    case 5:
	                        throw new _errors.IllegalArgumentException('Pattern using (localized) text not implemented yet!');

	                        this.appendText(field, _TextStyle.TextStyle.NARROW);
	                        break;
	                    default:
	                        throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }

	                break;
	            case 'S':
	                this.appendFraction(_ChronoField.ChronoField.NANO_OF_SECOND, count, count, false);
	                break;
	            case 'F':
	                if (count === 1) {
	                    this.appendValue(field);
	                } else {
	                    throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }
	                break;
	            case 'd':
	            case 'h':
	            case 'H':
	            case 'k':
	            case 'K':
	            case 'm':
	            case 's':
	                if (count === 1) {
	                    this.appendValue(field);
	                } else if (count === 2) {
	                    this.appendValue(field, count);
	                } else {
	                    throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }
	                break;
	            case 'D':
	                if (count === 1) {
	                    this.appendValue(field);
	                } else if (count <= 3) {
	                    this.appendValue(field, count);
	                } else {
	                    throw new _errors.IllegalArgumentException('Too many pattern letters: ' + cur);
	                }
	                break;
	            default:
	                if (count === 1) {
	                    this.appendValue(field);
	                } else {
	                    this.appendValue(field, count);
	                }
	                break;
	        }
	    };

	    DateTimeFormatterBuilder.prototype.padNext = function padNext() {
	        if (arguments.length === 1) {
	            return this._padNext1.apply(this, arguments);
	        } else {
	            return this._padNext2.apply(this, arguments);
	        }
	    };

	    DateTimeFormatterBuilder.prototype._padNext1 = function _padNext1(padWidth) {
	        return this._padNext2(padWidth, ' ');
	    };

	    DateTimeFormatterBuilder.prototype._padNext2 = function _padNext2(padWidth, padChar) {
	        if (padWidth < 1) {
	            throw new _errors.IllegalArgumentException('The pad width must be at least one but was ' + padWidth);
	        }
	        this._active._padNextWidth = padWidth;
	        this._active._padNextChar = padChar;
	        this._active._valueParserIndex = -1;
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.optionalStart = function optionalStart() {
	        this._active._valueParserIndex = -1;
	        this._active = new DateTimeFormatterBuilder(this._active, true);
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.optionalEnd = function optionalEnd() {
	        if (this._active._parent == null) {
	            throw new _errors.IllegalStateException('Cannot call optionalEnd() as there was no previous call to optionalStart()');
	        }
	        if (this._active._printerParsers.length > 0) {
	            var cpp = new _CompositePrinterParser.CompositePrinterParser(this._active._printerParsers, this._active._optional);
	            this._active = this._active._parent;
	            this._appendInternal(cpp);
	        } else {
	            this._active = this._active._parent;
	        }
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._appendInternal = function _appendInternal(pp) {
	        (0, _assert.assert)(pp != null);
	        if (this._active._padNextWidth > 0) {
	            if (pp != null) {
	                pp = new _PadPrinterParserDecorator.PadPrinterParserDecorator(pp, this._active._padNextWidth, this._active._padNextChar);
	            }
	            this._active._padNextWidth = 0;
	            this._active._padNextChar = 0;
	        }
	        this._active._printerParsers.push(pp);
	        this._active._valueParserIndex = -1;
	        return this._active._printerParsers.length - 1;
	    };

	    DateTimeFormatterBuilder.prototype.appendLiteral = function appendLiteral(literal) {
	        (0, _assert.assert)(literal != null);
	        if (literal.length > 0) {
	            if (literal.length === 1) {
	                this._appendInternalPrinterParser(new _CharLiteralPrinterParser.CharLiteralPrinterParser(literal.charAt(0)));
	            } else {
	                this._appendInternalPrinterParser(new _StringLiteralPrinterParser.StringLiteralPrinterParser(literal));
	            }
	        }
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype._appendInternalPrinterParser = function _appendInternalPrinterParser(pp) {
	        (0, _assert.assert)(pp != null);
	        if (this._active._padNextWidth > 0) {
	            if (pp != null) {
	                pp = new _PadPrinterParserDecorator.PadPrinterParserDecorator(pp, this._active._padNextWidth, this._active._padNextChar);
	            }
	            this._active._padNextWidth = 0;
	            this._active._padNextChar = 0;
	        }
	        this._active._printerParsers.push(pp);
	        this._active._valueParserIndex = -1;
	        return this._active._printerParsers.length - 1;
	    };

	    DateTimeFormatterBuilder.prototype.append = function append(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        this._appendInternal(formatter.toPrinterParser(false));
	        return this;
	    };

	    DateTimeFormatterBuilder.prototype.toFormatter = function toFormatter() {
	        var resolverStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _ResolverStyle.ResolverStyle.SMART;

	        while (this._active._parent != null) {
	            this.optionalEnd();
	        }
	        var pp = new _CompositePrinterParser.CompositePrinterParser(this._printerParsers, false);
	        return new _DateTimeFormatter.DateTimeFormatter(pp, null, _DecimalStyle.DecimalStyle.STANDARD, resolverStyle, null, null, null);
	    };

	    return DateTimeFormatterBuilder;
	}();

	var SECONDS_PER_10000_YEARS = 146097 * 25 * 86400;
	var SECONDS_0000_TO_1970 = (146097 * 5 - (30 * 365 + 7)) * 86400;

	var InstantPrinterParser = function () {
	    function InstantPrinterParser(fractionalDigits) {
	        _classCallCheck(this, InstantPrinterParser);

	        this.fractionalDigits = fractionalDigits;
	    }

	    InstantPrinterParser.prototype.print = function print(context, buf) {
	        var inSecs = context.getValue(_ChronoField.ChronoField.INSTANT_SECONDS);
	        var inNanos = 0;
	        if (context.temporal().isSupported(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            inNanos = context.temporal().getLong(_ChronoField.ChronoField.NANO_OF_SECOND);
	        }
	        if (inSecs == null) {
	            return false;
	        }
	        var inSec = inSecs;
	        var inNano = _ChronoField.ChronoField.NANO_OF_SECOND.checkValidIntValue(inNanos);
	        if (inSec >= -SECONDS_0000_TO_1970) {
	            var zeroSecs = inSec - SECONDS_PER_10000_YEARS + SECONDS_0000_TO_1970;
	            var hi = _MathUtil.MathUtil.floorDiv(zeroSecs, SECONDS_PER_10000_YEARS) + 1;
	            var lo = _MathUtil.MathUtil.floorMod(zeroSecs, SECONDS_PER_10000_YEARS);
	            var ldt = _LocalDateTime.LocalDateTime.ofEpochSecond(lo - SECONDS_0000_TO_1970, 0, _ZoneOffset.ZoneOffset.UTC);
	            if (hi > 0) {
	                buf.append('+').append(hi);
	            }
	            buf.append(ldt);
	            if (ldt.second() === 0) {
	                buf.append(':00');
	            }
	        } else {
	            var _zeroSecs = inSec + SECONDS_0000_TO_1970;
	            var _hi = _MathUtil.MathUtil.intDiv(_zeroSecs, SECONDS_PER_10000_YEARS);
	            var _lo = _MathUtil.MathUtil.intMod(_zeroSecs, SECONDS_PER_10000_YEARS);
	            var _ldt = _LocalDateTime.LocalDateTime.ofEpochSecond(_lo - SECONDS_0000_TO_1970, 0, _ZoneOffset.ZoneOffset.UTC);
	            var pos = buf.length();
	            buf.append(_ldt);
	            if (_ldt.second() === 0) {
	                buf.append(':00');
	            }
	            if (_hi < 0) {
	                if (_ldt.year() === -10000) {
	                    buf.replace(pos, pos + 2, '' + (_hi - 1));
	                } else if (_lo === 0) {
	                    buf.insert(pos, _hi);
	                } else {
	                    buf.insert(pos + 1, Math.abs(_hi));
	                }
	            }
	        }

	        if (this.fractionalDigits === -2) {
	            if (inNano !== 0) {
	                buf.append('.');
	                if (_MathUtil.MathUtil.intMod(inNano, 1000000) === 0) {
	                    buf.append(('' + (_MathUtil.MathUtil.intDiv(inNano, 1000000) + 1000)).substring(1));
	                } else if (_MathUtil.MathUtil.intMod(inNano, 1000) === 0) {
	                    buf.append(('' + (_MathUtil.MathUtil.intDiv(inNano, 1000) + 1000000)).substring(1));
	                } else {
	                    buf.append(('' + (inNano + 1000000000)).substring(1));
	                }
	            }
	        } else if (this.fractionalDigits > 0 || this.fractionalDigits === -1 && inNano > 0) {
	            buf.append('.');
	            var div = 100000000;
	            for (var i = 0; this.fractionalDigits === -1 && inNano > 0 || i < this.fractionalDigits; i++) {
	                var digit = _MathUtil.MathUtil.intDiv(inNano, div);
	                buf.append(digit);
	                inNano = inNano - digit * div;
	                div = _MathUtil.MathUtil.intDiv(div, 10);
	            }
	        }
	        buf.append('Z');
	        return true;
	    };

	    InstantPrinterParser.prototype.parse = function parse(context, text, position) {
	        var newContext = context.copy();
	        var minDigits = this.fractionalDigits < 0 ? 0 : this.fractionalDigits;
	        var maxDigits = this.fractionalDigits < 0 ? 9 : this.fractionalDigits;
	        var parser = new DateTimeFormatterBuilder().append(_DateTimeFormatter.DateTimeFormatter.ISO_LOCAL_DATE).appendLiteral('T').appendValue(_ChronoField.ChronoField.HOUR_OF_DAY, 2).appendLiteral(':').appendValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, 2).appendLiteral(':').appendValue(_ChronoField.ChronoField.SECOND_OF_MINUTE, 2).appendFraction(_ChronoField.ChronoField.NANO_OF_SECOND, minDigits, maxDigits, true).appendLiteral('Z').toFormatter().toPrinterParser(false);
	        var pos = parser.parse(newContext, text, position);
	        if (pos < 0) {
	            return pos;
	        }

	        var yearParsed = newContext.getParsed(_ChronoField.ChronoField.YEAR);
	        var month = newContext.getParsed(_ChronoField.ChronoField.MONTH_OF_YEAR);
	        var day = newContext.getParsed(_ChronoField.ChronoField.DAY_OF_MONTH);
	        var hour = newContext.getParsed(_ChronoField.ChronoField.HOUR_OF_DAY);
	        var min = newContext.getParsed(_ChronoField.ChronoField.MINUTE_OF_HOUR);
	        var secVal = newContext.getParsed(_ChronoField.ChronoField.SECOND_OF_MINUTE);
	        var nanoVal = newContext.getParsed(_ChronoField.ChronoField.NANO_OF_SECOND);
	        var sec = secVal != null ? secVal : 0;
	        var nano = nanoVal != null ? nanoVal : 0;
	        var year = _MathUtil.MathUtil.intMod(yearParsed, 10000);
	        var days = 0;
	        if (hour === 24 && min === 0 && sec === 0 && nano === 0) {
	            hour = 0;
	            days = 1;
	        } else if (hour === 23 && min === 59 && sec === 60) {
	            context.setParsedLeapSecond();
	            sec = 59;
	        }
	        var instantSecs = void 0;
	        try {
	            var ldt = _LocalDateTime.LocalDateTime.of(year, month, day, hour, min, sec, 0).plusDays(days);
	            instantSecs = ldt.toEpochSecond(_ZoneOffset.ZoneOffset.UTC);
	            instantSecs += _MathUtil.MathUtil.safeMultiply(_MathUtil.MathUtil.intDiv(yearParsed, 10000), SECONDS_PER_10000_YEARS);
	        } catch (ex) {
	            return ~position;
	        }
	        var successPos = pos;
	        successPos = context.setParsedField(_ChronoField.ChronoField.INSTANT_SECONDS, instantSecs, position, successPos);
	        return context.setParsedField(_ChronoField.ChronoField.NANO_OF_SECOND, nano, position, successPos);
	    };

	    InstantPrinterParser.prototype.toString = function toString() {
	        return 'Instant()';
	    };

	    return InstantPrinterParser;
	}();

	function _init() {
	    _NumberPrinterParser.ReducedPrinterParser.BASE_DATE = _LocalDate.LocalDate.of(2000, 1, 1);

	    DateTimeFormatterBuilder.CompositePrinterParser = _CompositePrinterParser.CompositePrinterParser;
	    DateTimeFormatterBuilder.PadPrinterParserDecorator = _PadPrinterParserDecorator.PadPrinterParserDecorator;
	    DateTimeFormatterBuilder.SettingsParser = _SettingsParser.SettingsParser;
	    DateTimeFormatterBuilder.CharLiteralPrinterParser = _StringLiteralPrinterParser.StringLiteralPrinterParser;
	    DateTimeFormatterBuilder.StringLiteralPrinterParser = _StringLiteralPrinterParser.StringLiteralPrinterParser;
	    DateTimeFormatterBuilder.CharLiteralPrinterParser = _CharLiteralPrinterParser.CharLiteralPrinterParser;
	    DateTimeFormatterBuilder.NumberPrinterParser = _NumberPrinterParser.NumberPrinterParser;
	    DateTimeFormatterBuilder.ReducedPrinterParser = _NumberPrinterParser.ReducedPrinterParser;
	    DateTimeFormatterBuilder.FractionPrinterParser = _FractionPrinterParser.FractionPrinterParser;
	    DateTimeFormatterBuilder.OffsetIdPrinterParser = _OffsetIdPrinterParser.OffsetIdPrinterParser;
	    DateTimeFormatterBuilder.ZoneIdPrinterParser = _ZoneIdPrinterParser.ZoneIdPrinterParser;
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneOffset = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _LocalTime = __webpack_require__(5);

	var _ZoneId2 = __webpack_require__(27);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQueries = __webpack_require__(22);

	var _ZoneRules = __webpack_require__(29);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SECONDS_CACHE = {};
	var ID_CACHE = {};

	var ZoneOffset = function (_ZoneId) {
	    _inherits(ZoneOffset, _ZoneId);

	    function ZoneOffset(totalSeconds) {
	        _classCallCheck(this, ZoneOffset);

	        var _this = _possibleConstructorReturn(this, _ZoneId.call(this));

	        ZoneOffset._validateTotalSeconds(totalSeconds);
	        _this._totalSeconds = totalSeconds;
	        _this._rules = _ZoneRules.ZoneRules.of(_this);
	        _this._id = ZoneOffset._buildId(totalSeconds);
	        return _this;
	    }

	    ZoneOffset.prototype.totalSeconds = function totalSeconds() {
	        return this._totalSeconds;
	    };

	    ZoneOffset.prototype.id = function id() {
	        return this._id;
	    };

	    ZoneOffset._buildId = function _buildId(totalSeconds) {
	        if (totalSeconds === 0) {
	            return 'Z';
	        } else {
	            var absTotalSeconds = Math.abs(totalSeconds);
	            var absHours = _MathUtil.MathUtil.intDiv(absTotalSeconds, _LocalTime.LocalTime.SECONDS_PER_HOUR);
	            var absMinutes = _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(absTotalSeconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE), _LocalTime.LocalTime.MINUTES_PER_HOUR);
	            var buf = '' + (totalSeconds < 0 ? '-' : '+') + (absHours < 10 ? '0' : '') + absHours + (absMinutes < 10 ? ':0' : ':') + absMinutes;
	            var absSeconds = _MathUtil.MathUtil.intMod(absTotalSeconds, _LocalTime.LocalTime.SECONDS_PER_MINUTE);
	            if (absSeconds !== 0) {
	                buf += (absSeconds < 10 ? ':0' : ':') + absSeconds;
	            }
	            return buf;
	        }
	    };

	    ZoneOffset._validateTotalSeconds = function _validateTotalSeconds(totalSeconds) {
	        if (Math.abs(totalSeconds) > ZoneOffset.MAX_SECONDS) {
	            throw new _errors.DateTimeException('Zone offset not in valid range: -18:00 to +18:00');
	        }
	    };

	    ZoneOffset._validate = function _validate(hours, minutes, seconds) {
	        if (hours < -18 || hours > 18) {
	            throw new _errors.DateTimeException('Zone offset hours not in valid range: value ' + hours + ' is not in the range -18 to 18');
	        }
	        if (hours > 0) {
	            if (minutes < 0 || seconds < 0) {
	                throw new _errors.DateTimeException('Zone offset minutes and seconds must be positive because hours is positive');
	            }
	        } else if (hours < 0) {
	            if (minutes > 0 || seconds > 0) {
	                throw new _errors.DateTimeException('Zone offset minutes and seconds must be negative because hours is negative');
	            }
	        } else if (minutes > 0 && seconds < 0 || minutes < 0 && seconds > 0) {
	            throw new _errors.DateTimeException('Zone offset minutes and seconds must have the same sign');
	        }
	        if (Math.abs(minutes) > 59) {
	            throw new _errors.DateTimeException('Zone offset minutes not in valid range: abs(value) ' + Math.abs(minutes) + ' is not in the range 0 to 59');
	        }
	        if (Math.abs(seconds) > 59) {
	            throw new _errors.DateTimeException('Zone offset seconds not in valid range: abs(value) ' + Math.abs(seconds) + ' is not in the range 0 to 59');
	        }
	        if (Math.abs(hours) === 18 && (Math.abs(minutes) > 0 || Math.abs(seconds) > 0)) {
	            throw new _errors.DateTimeException('Zone offset not in valid range: -18:00 to +18:00');
	        }
	    };

	    ZoneOffset.of = function of(offsetId) {
	        (0, _assert.requireNonNull)(offsetId, 'offsetId');

	        var offset = ID_CACHE[offsetId];
	        if (offset != null) {
	            return offset;
	        }

	        var hours = void 0,
	            minutes = void 0,
	            seconds = void 0;
	        switch (offsetId.length) {
	            case 2:
	                offsetId = offsetId[0] + '0' + offsetId[1];
	            case 3:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = 0;
	                seconds = 0;
	                break;
	            case 5:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 3, false);
	                seconds = 0;
	                break;
	            case 6:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 4, true);
	                seconds = 0;
	                break;
	            case 7:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 3, false);
	                seconds = ZoneOffset._parseNumber(offsetId, 5, false);
	                break;
	            case 9:
	                hours = ZoneOffset._parseNumber(offsetId, 1, false);
	                minutes = ZoneOffset._parseNumber(offsetId, 4, true);
	                seconds = ZoneOffset._parseNumber(offsetId, 7, true);
	                break;
	            default:
	                throw new _errors.DateTimeException('Invalid ID for ZoneOffset, invalid format: ' + offsetId);
	        }
	        var first = offsetId[0];
	        if (first !== '+' && first !== '-') {
	            throw new _errors.DateTimeException('Invalid ID for ZoneOffset, plus/minus not found when expected: ' + offsetId);
	        }
	        if (first === '-') {
	            return ZoneOffset.ofHoursMinutesSeconds(-hours, -minutes, -seconds);
	        } else {
	            return ZoneOffset.ofHoursMinutesSeconds(hours, minutes, seconds);
	        }
	    };

	    ZoneOffset._parseNumber = function _parseNumber(offsetId, pos, precededByColon) {
	        if (precededByColon && offsetId[pos - 1] !== ':') {
	            throw new _errors.DateTimeException('Invalid ID for ZoneOffset, colon not found when expected: ' + offsetId);
	        }
	        var ch1 = offsetId[pos];
	        var ch2 = offsetId[pos + 1];
	        if (ch1 < '0' || ch1 > '9' || ch2 < '0' || ch2 > '9') {
	            throw new _errors.DateTimeException('Invalid ID for ZoneOffset, non numeric characters found: ' + offsetId);
	        }
	        return (ch1.charCodeAt(0) - 48) * 10 + (ch2.charCodeAt(0) - 48);
	    };

	    ZoneOffset.ofHours = function ofHours(hours) {
	        return ZoneOffset.ofHoursMinutesSeconds(hours, 0, 0);
	    };

	    ZoneOffset.ofHoursMinutes = function ofHoursMinutes(hours, minutes) {
	        return ZoneOffset.ofHoursMinutesSeconds(hours, minutes, 0);
	    };

	    ZoneOffset.ofHoursMinutesSeconds = function ofHoursMinutesSeconds(hours, minutes, seconds) {
	        ZoneOffset._validate(hours, minutes, seconds);
	        var totalSeconds = hours * _LocalTime.LocalTime.SECONDS_PER_HOUR + minutes * _LocalTime.LocalTime.SECONDS_PER_MINUTE + seconds;
	        return ZoneOffset.ofTotalSeconds(totalSeconds);
	    };

	    ZoneOffset.ofTotalMinutes = function ofTotalMinutes(totalMinutes) {
	        var totalSeconds = totalMinutes * _LocalTime.LocalTime.SECONDS_PER_MINUTE;
	        return ZoneOffset.ofTotalSeconds(totalSeconds);
	    };

	    ZoneOffset.ofTotalSeconds = function ofTotalSeconds(totalSeconds) {
	        if (totalSeconds % (15 * _LocalTime.LocalTime.SECONDS_PER_MINUTE) === 0) {
	            var totalSecs = totalSeconds;
	            var result = SECONDS_CACHE[totalSecs];
	            if (result == null) {
	                result = new ZoneOffset(totalSeconds);
	                SECONDS_CACHE[totalSecs] = result;
	                ID_CACHE[result.id()] = result;
	            }
	            return result;
	        } else {
	            return new ZoneOffset(totalSeconds);
	        }
	    };

	    ZoneOffset.prototype.rules = function rules() {
	        return this._rules;
	    };

	    ZoneOffset.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    ZoneOffset.prototype.getLong = function getLong(field) {
	        if (field === _ChronoField.ChronoField.OFFSET_SECONDS) {
	            return this._totalSeconds;
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.DateTimeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    ZoneOffset.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.offset() || _query === _TemporalQueries.TemporalQueries.zone()) {
	            return this;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.precision() || _query === _TemporalQueries.TemporalQueries.chronology() || _query === _TemporalQueries.TemporalQueries.zoneId()) {
	            return null;
	        }
	        return _query.queryFrom(this);
	    };

	    ZoneOffset.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.OFFSET_SECONDS, this._totalSeconds);
	    };

	    ZoneOffset.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        return other._totalSeconds - this._totalSeconds;
	    };

	    ZoneOffset.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof ZoneOffset) {
	            return this._totalSeconds === obj._totalSeconds;
	        }
	        return false;
	    };

	    ZoneOffset.prototype.hashCode = function hashCode() {
	        return this._totalSeconds;
	    };

	    ZoneOffset.prototype.toString = function toString() {
	        return this._id;
	    };

	    return ZoneOffset;
	}(_ZoneId2.ZoneId);

	exports.ZoneOffset = ZoneOffset;
	function _init() {
	    ZoneOffset.MAX_SECONDS = 18 * _LocalTime.LocalTime.SECONDS_PER_HOUR;
	    ZoneOffset.UTC = ZoneOffset.ofTotalSeconds(0);
	    ZoneOffset.MIN = ZoneOffset.ofTotalSeconds(-ZoneOffset.MAX_SECONDS);
	    ZoneOffset.MAX = ZoneOffset.ofTotalSeconds(ZoneOffset.MAX_SECONDS);
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneId = undefined;

	var _assert = __webpack_require__(2);

	var _StringUtil = __webpack_require__(28);

	var _Instant = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneId = exports.ZoneId = function () {
	    function ZoneId() {
	        _classCallCheck(this, ZoneId);
	    }

	    ZoneId.prototype.id = function id() {
	        (0, _assert.abstractMethodFail)('ZoneId.id');
	    };

	    ZoneId.prototype.rules = function rules() {
	        (0, _assert.abstractMethodFail)('ZoneId.rules');
	    };

	    ZoneId.prototype.normalized = function normalized() {
	        var rules = this.rules();
	        if (rules.isFixedOffset()) {
	            return rules.offset(_Instant.Instant.EPOCH);
	        }

	        return this;
	    };

	    ZoneId.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof ZoneId) {
	            return this.id() === other.id();
	        }
	        return false;
	    };

	    ZoneId.prototype.hashCode = function hashCode() {
	        return _StringUtil.StringUtil.hashCode(this.id());
	    };

	    ZoneId.prototype.toString = function toString() {
	        return this.id();
	    };

	    return ZoneId;
	}();

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var StringUtil = exports.StringUtil = function () {
	    function StringUtil() {
	        _classCallCheck(this, StringUtil);
	    }

	    StringUtil.startsWith = function startsWith(text, pattern) {
	        return text.indexOf(pattern) === 0;
	    };

	    StringUtil.hashCode = function hashCode(text) {
	        var hash = 0,
	            i = void 0,
	            chr = void 0,
	            len = void 0;
	        if (text.length === 0) return hash;
	        for (i = 0, len = text.length; i < len; i++) {
	            chr = text.charCodeAt(i);
	            hash = (hash << 5) - hash + chr;
	            hash |= 0;
	        }
	        return hash;
	    };

	    return StringUtil;
	}();

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneRules = undefined;

	var _assert = __webpack_require__(2);

	var _Duration = __webpack_require__(14);

	var _Instant = __webpack_require__(4);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneRules = exports.ZoneRules = function () {
	    function ZoneRules() {
	        _classCallCheck(this, ZoneRules);
	    }

	    ZoneRules.of = function of(offset) {
	        (0, _assert.requireNonNull)(offset, 'offset');
	        return new Fixed(offset);
	    };

	    ZoneRules.prototype.isFixedOffset = function isFixedOffset() {
	        (0, _assert.abstractMethodFail)('ZoneRules.isFixedOffset');
	    };

	    ZoneRules.prototype.offset = function offset(instantOrLocalDateTime) {
	        if (instantOrLocalDateTime instanceof _Instant.Instant) {
	            return this.offsetOfInstant(instantOrLocalDateTime);
	        } else {
	            return this.offsetOfLocalDateTime(instantOrLocalDateTime);
	        }
	    };

	    ZoneRules.prototype.offsetOfInstant = function offsetOfInstant(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.offsetInstant');
	    };

	    ZoneRules.prototype.offsetOfEpochMilli = function offsetOfEpochMilli(epochMilli) {
	        (0, _assert.abstractMethodFail)('ZoneRules.offsetOfEpochMilli');
	    };

	    ZoneRules.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime(localDateTime) {
	        (0, _assert.abstractMethodFail)('ZoneRules.offsetLocalDateTime');
	    };

	    ZoneRules.prototype.validOffsets = function validOffsets(localDateTime) {
	        (0, _assert.abstractMethodFail)('ZoneRules.validOffsets');
	    };

	    ZoneRules.prototype.transition = function transition(localDateTime) {
	        (0, _assert.abstractMethodFail)('ZoneRules.transition');
	    };

	    ZoneRules.prototype.standardOffset = function standardOffset(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.standardOffset');
	    };

	    ZoneRules.prototype.daylightSavings = function daylightSavings(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.daylightSavings');
	    };

	    ZoneRules.prototype.isDaylightSavings = function isDaylightSavings(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.isDaylightSavings');
	    };

	    ZoneRules.prototype.isValidOffset = function isValidOffset(localDateTime, offset) {
	        (0, _assert.abstractMethodFail)('ZoneRules.isValidOffset');
	    };

	    ZoneRules.prototype.nextTransition = function nextTransition(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.nextTransition');
	    };

	    ZoneRules.prototype.previousTransition = function previousTransition(instant) {
	        (0, _assert.abstractMethodFail)('ZoneRules.previousTransition');
	    };

	    ZoneRules.prototype.transitions = function transitions() {
	        (0, _assert.abstractMethodFail)('ZoneRules.transitions');
	    };

	    ZoneRules.prototype.transitionRules = function transitionRules() {
	        (0, _assert.abstractMethodFail)('ZoneRules.transitionRules');
	    };

	    return ZoneRules;
	}();

	var Fixed = function (_ZoneRules) {
	    _inherits(Fixed, _ZoneRules);

	    function Fixed(offset) {
	        _classCallCheck(this, Fixed);

	        var _this = _possibleConstructorReturn(this, _ZoneRules.call(this));

	        _this._offset = offset;
	        return _this;
	    }

	    Fixed.prototype.isFixedOffset = function isFixedOffset() {
	        return true;
	    };

	    Fixed.prototype.offsetOfInstant = function offsetOfInstant() {
	        return this._offset;
	    };

	    Fixed.prototype.offsetOfEpochMilli = function offsetOfEpochMilli() {
	        return this._offset;
	    };

	    Fixed.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime() {
	        return this._offset;
	    };

	    Fixed.prototype.validOffsets = function validOffsets() {
	        return [this._offset];
	    };

	    Fixed.prototype.transition = function transition() {
	        return null;
	    };

	    Fixed.prototype.standardOffset = function standardOffset() {
	        return this._offset;
	    };

	    Fixed.prototype.daylightSavings = function daylightSavings() {
	        return _Duration.Duration.ZERO;
	    };

	    Fixed.prototype.isDaylightSavings = function isDaylightSavings() {
	        return false;
	    };

	    Fixed.prototype.isValidOffset = function isValidOffset(dateTime, offset) {
	        return this._offset.equals(offset);
	    };

	    Fixed.prototype.nextTransition = function nextTransition() {
	        return null;
	    };

	    Fixed.prototype.previousTransition = function previousTransition() {
	        return null;
	    };

	    Fixed.prototype.transitions = function transitions() {
	        return [];
	    };

	    Fixed.prototype.transitionRules = function transitionRules() {
	        return [];
	    };

	    Fixed.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof Fixed) {
	            return this._offset.equals(other._offset);
	        }
	        return false;
	    };

	    Fixed.prototype.toString = function toString() {
	        return 'FixedRules:' + this._offset.toString();
	    };

	    return Fixed;
	}(ZoneRules);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoLocalDate = undefined;

	var _assert = __webpack_require__(2);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _DateTimeFormatter = __webpack_require__(31);

	var _TemporalQueries = __webpack_require__(22);

	var _Temporal2 = __webpack_require__(20);

	var _LocalDate = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoLocalDate = function (_Temporal) {
	    _inherits(ChronoLocalDate, _Temporal);

	    function ChronoLocalDate() {
	        _classCallCheck(this, ChronoLocalDate);

	        return _possibleConstructorReturn(this, _Temporal.apply(this, arguments));
	    }

	    ChronoLocalDate.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return fieldOrUnit.isDateBased();
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isDateBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    ChronoLocalDate.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chronology();
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.DAYS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofEpochDay(this.toEpochDay());
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    ChronoLocalDate.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.EPOCH_DAY, this.toEpochDay());
	    };

	    ChronoLocalDate.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.format(this);
	    };

	    return ChronoLocalDate;
	}(_Temporal2.Temporal);

	exports.ChronoLocalDate = ChronoLocalDate;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeFormatter = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Period = __webpack_require__(32);

	var _ParsePosition = __webpack_require__(33);

	var _DateTimeBuilder = __webpack_require__(34);

	var _DateTimeParseContext = __webpack_require__(37);

	var _DateTimePrintContext = __webpack_require__(38);

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	var _SignStyle = __webpack_require__(39);

	var _StringBuilder = __webpack_require__(40);

	var _ResolverStyle = __webpack_require__(36);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQuery = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var DateTimeFormatter = exports.DateTimeFormatter = function () {
	    DateTimeFormatter.parsedExcessDays = function parsedExcessDays() {
	        return DateTimeFormatter.PARSED_EXCESS_DAYS;
	    };

	    DateTimeFormatter.parsedLeapSecond = function parsedLeapSecond() {
	        return DateTimeFormatter.PARSED_LEAP_SECOND;
	    };

	    DateTimeFormatter.ofPattern = function ofPattern(pattern) {
	        return new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendPattern(pattern).toFormatter();
	    };

	    function DateTimeFormatter(printerParser, locale, decimalStyle, resolverStyle, resolverFields) {
	        var chrono = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _IsoChronology.IsoChronology.INSTANCE;
	        var zone = arguments[6];

	        _classCallCheck(this, DateTimeFormatter);

	        (0, _assert.assert)(printerParser != null);
	        (0, _assert.assert)(decimalStyle != null);
	        (0, _assert.assert)(resolverStyle != null);

	        this._printerParser = printerParser;

	        this._locale = locale;

	        this._decimalStyle = decimalStyle;

	        this._resolverStyle = resolverStyle;

	        this._resolverFields = resolverFields;

	        this._chrono = chrono;

	        this._zone = zone;
	    }

	    DateTimeFormatter.prototype.locale = function locale() {
	        return this._locale;
	    };

	    DateTimeFormatter.prototype.decimalStyle = function decimalStyle() {
	        return this._decimalStyle;
	    };

	    DateTimeFormatter.prototype.chronology = function chronology() {
	        return this._chrono;
	    };

	    DateTimeFormatter.prototype.withChronology = function withChronology(chrono) {
	        if (this._chrono != null && this._chrono.equals(chrono)) {
	            return this;
	        }
	        return new DateTimeFormatter(this._printerParser, this._locale, this._decimalStyle, this._resolverStyle, this._resolverFields, chrono, this._zone);
	    };

	    DateTimeFormatter.prototype.withLocale = function withLocale() {
	        return this;
	    };

	    DateTimeFormatter.prototype.format = function format(temporal) {
	        var buf = new _StringBuilder.StringBuilder(32);
	        this._formatTo(temporal, buf);
	        return buf.toString();
	    };

	    DateTimeFormatter.prototype._formatTo = function _formatTo(temporal, appendable) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireNonNull)(appendable, 'appendable');
	        var context = new _DateTimePrintContext.DateTimePrintContext(temporal, this);
	        this._printerParser.print(context, appendable);
	    };

	    DateTimeFormatter.prototype.parse = function parse(text, type) {
	        if (arguments.length === 1) {
	            return this.parse1(text);
	        } else {
	            return this.parse2(text, type);
	        }
	    };

	    DateTimeFormatter.prototype.parse1 = function parse1(text) {
	        (0, _assert.requireNonNull)(text, 'text');
	        try {
	            return this._parseToBuilder(text, null).resolve(this._resolverStyle, this._resolverFields);
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeParseException) {
	                throw ex;
	            } else {
	                throw this._createError(text, ex);
	            }
	        }
	    };

	    DateTimeFormatter.prototype.parse2 = function parse2(text, type) {
	        (0, _assert.requireNonNull)(text, 'text');
	        (0, _assert.requireNonNull)(type, 'type');
	        try {
	            var builder = this._parseToBuilder(text, null).resolve(this._resolverStyle, this._resolverFields);
	            return builder.build(type);
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeParseException) {
	                throw ex;
	            } else {
	                throw this._createError(text, ex);
	            }
	        }
	    };

	    DateTimeFormatter.prototype._createError = function _createError(text, ex) {
	        var abbr = '';
	        if (text.length > 64) {
	            abbr = text.subString(0, 64) + '...';
	        } else {
	            abbr = text;
	        }
	        return new _errors.DateTimeParseException('Text \'' + abbr + '\' could not be parsed: ' + ex.message, text, 0, ex);
	    };

	    DateTimeFormatter.prototype._parseToBuilder = function _parseToBuilder(text, position) {
	        var pos = position != null ? position : new _ParsePosition.ParsePosition(0);
	        var result = this._parseUnresolved0(text, pos);
	        if (result == null || pos.getErrorIndex() >= 0 || position == null && pos.getIndex() < text.length) {
	            var abbr = '';
	            if (text.length > 64) {
	                abbr = text.substr(0, 64).toString() + '...';
	            } else {
	                abbr = text;
	            }
	            if (pos.getErrorIndex() >= 0) {
	                throw new _errors.DateTimeParseException('Text \'' + abbr + '\' could not be parsed at index ' + pos.getErrorIndex(), text, pos.getErrorIndex());
	            } else {
	                throw new _errors.DateTimeParseException('Text \'' + abbr + '\' could not be parsed, unparsed text found at index ' + pos.getIndex(), text, pos.getIndex());
	            }
	        }
	        return result.toBuilder();
	    };

	    DateTimeFormatter.prototype.parseUnresolved = function parseUnresolved(text, position) {
	        return this._parseUnresolved0(text, position);
	    };

	    DateTimeFormatter.prototype._parseUnresolved0 = function _parseUnresolved0(text, position) {
	        (0, _assert.assert)(text != null, 'text', _errors.NullPointerException);
	        (0, _assert.assert)(position != null, 'position', _errors.NullPointerException);
	        var context = new _DateTimeParseContext.DateTimeParseContext(this);
	        var pos = position.getIndex();
	        pos = this._printerParser.parse(context, text, pos);
	        if (pos < 0) {
	            position.setErrorIndex(~pos);
	            return null;
	        }
	        position.setIndex(pos);
	        return context.toParsed();
	    };

	    DateTimeFormatter.prototype.toPrinterParser = function toPrinterParser(optional) {
	        return this._printerParser.withOptional(optional);
	    };

	    DateTimeFormatter.prototype.toString = function toString() {
	        var pattern = this._printerParser.toString();
	        return pattern.indexOf('[') === 0 ? pattern : pattern.substring(1, pattern.length - 1);
	    };

	    return DateTimeFormatter;
	}();

	function _init() {

	    DateTimeFormatter.ISO_LOCAL_DATE = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.YEAR, 4, 10, _SignStyle.SignStyle.EXCEEDS_PAD).appendLiteral('-').appendValue(_ChronoField.ChronoField.MONTH_OF_YEAR, 2).appendLiteral('-').appendValue(_ChronoField.ChronoField.DAY_OF_MONTH, 2).toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.ISO_LOCAL_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.HOUR_OF_DAY, 2).appendLiteral(':').appendValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, 2).optionalStart().appendLiteral(':').appendValue(_ChronoField.ChronoField.SECOND_OF_MINUTE, 2).optionalStart().appendFraction(_ChronoField.ChronoField.NANO_OF_SECOND, 0, 9, true).toFormatter(_ResolverStyle.ResolverStyle.STRICT);

	    DateTimeFormatter.ISO_LOCAL_DATE_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().parseCaseInsensitive().append(DateTimeFormatter.ISO_LOCAL_DATE).appendLiteral('T').append(DateTimeFormatter.ISO_LOCAL_TIME).toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.ISO_INSTANT = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().parseCaseInsensitive().appendInstant().toFormatter(_ResolverStyle.ResolverStyle.STRICT);

	    DateTimeFormatter.ISO_OFFSET_DATE_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().parseCaseInsensitive().append(DateTimeFormatter.ISO_LOCAL_DATE_TIME).appendOffsetId().toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.ISO_ZONED_DATE_TIME = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().append(DateTimeFormatter.ISO_OFFSET_DATE_TIME).optionalStart().appendLiteral('[').parseCaseSensitive().appendZoneId().appendLiteral(']').toFormatter(_ResolverStyle.ResolverStyle.STRICT).withChronology(_IsoChronology.IsoChronology.INSTANCE);

	    DateTimeFormatter.PARSED_EXCESS_DAYS = (0, _TemporalQuery.createTemporalQuery)('PARSED_EXCESS_DAYS', function (temporal) {
	        if (temporal instanceof _DateTimeBuilder.DateTimeBuilder) {
	            return temporal.excessDays;
	        } else {
	            return _Period.Period.ZERO;
	        }
	    });

	    DateTimeFormatter.PARSED_LEAP_SECOND = (0, _TemporalQuery.createTemporalQuery)('PARSED_LEAP_SECOND', function (temporal) {
	        if (temporal instanceof _DateTimeBuilder.DateTimeBuilder) {
	            return temporal.leapSecond;
	        } else {
	            return false;
	        }
	    });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Period = undefined;
	exports._init = _init;

	var _MathUtil = __webpack_require__(6);

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalAmount2 = __webpack_require__(15);

	var _LocalDate = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var PATTERN = /([-+]?)P(?:([-+]?[0-9]+)Y)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)W)?(?:([-+]?[0-9]+)D)?/;

	var Period = exports.Period = function (_TemporalAmount) {
	    _inherits(Period, _TemporalAmount);

	    function Period(years, months, days) {
	        _classCallCheck(this, Period);

	        var _this = _possibleConstructorReturn(this, _TemporalAmount.call(this));

	        if ((years | months | days) === 0) {
	            var _ret;

	            return _ret = Period.ZERO, _possibleConstructorReturn(_this, _ret);
	        }
	        Period._validate(years, months, days);

	        _this._years = _MathUtil.MathUtil.safeToInt(years);

	        _this._months = _MathUtil.MathUtil.safeToInt(months);

	        _this._days = _MathUtil.MathUtil.safeToInt(days);
	        return _this;
	    }

	    Period._validate = function _validate(years, month, days) {
	        (0, _assert.requireNonNull)(years, 'years');
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireNonNull)(days, 'days');
	    };

	    Period.ofYears = function ofYears(years) {
	        return Period.create(years, 0, 0);
	    };

	    Period.ofMonths = function ofMonths(months) {
	        return Period.create(0, months, 0);
	    };

	    Period.ofWeeks = function ofWeeks(weeks) {
	        return Period.create(0, 0, _MathUtil.MathUtil.safeMultiply(weeks, 7));
	    };

	    Period.ofDays = function ofDays(days) {
	        return Period.create(0, 0, days);
	    };

	    Period.of = function of(years, months, days) {
	        return Period.create(years, months, days);
	    };

	    Period.from = function from(amount) {
	        if (amount instanceof Period) {
	            return amount;
	        }

	        (0, _assert.requireNonNull)(amount, 'amount');
	        var years = 0;
	        var months = 0;
	        var days = 0;
	        var units = amount.units();
	        for (var i = 0; i < units.length; i++) {
	            var unit = units[i];
	            var unitAmount = amount.get(unit);
	            if (unit === _ChronoUnit.ChronoUnit.YEARS) {
	                years = _MathUtil.MathUtil.safeToInt(unitAmount);
	            } else if (unit === _ChronoUnit.ChronoUnit.MONTHS) {
	                months = _MathUtil.MathUtil.safeToInt(unitAmount);
	            } else if (unit === _ChronoUnit.ChronoUnit.DAYS) {
	                days = _MathUtil.MathUtil.safeToInt(unitAmount);
	            } else {
	                throw new _errors.DateTimeException('Unit must be Years, Months or Days, but was ' + unit);
	            }
	        }
	        return Period.create(years, months, days);
	    };

	    Period.between = function between(startDate, endDate) {
	        (0, _assert.requireNonNull)(startDate, 'startDate');
	        (0, _assert.requireNonNull)(endDate, 'endDate');
	        (0, _assert.requireInstance)(startDate, _LocalDate.LocalDate, 'startDate');
	        (0, _assert.requireInstance)(endDate, _LocalDate.LocalDate, 'endDate');
	        return startDate.until(endDate);
	    };

	    Period.parse = function parse(text) {
	        (0, _assert.requireNonNull)(text, 'text');
	        try {
	            return Period._parse(text);
	        } catch (ex) {
	            if (ex instanceof _errors.ArithmeticException) {
	                throw new _errors.DateTimeParseException('Text cannot be parsed to a Period', text, 0, ex);
	            } else {
	                throw ex;
	            }
	        }
	    };

	    Period._parse = function _parse(text) {
	        var matches = PATTERN.exec(text);
	        if (matches != null) {
	            var negate = '-' === matches[1] ? -1 : 1;
	            var yearMatch = matches[2];
	            var monthMatch = matches[3];
	            var weekMatch = matches[4];
	            var dayMatch = matches[5];
	            if (yearMatch != null || monthMatch != null || weekMatch != null || dayMatch != null) {
	                var years = Period._parseNumber(text, yearMatch, negate);
	                var months = Period._parseNumber(text, monthMatch, negate);
	                var weeks = Period._parseNumber(text, weekMatch, negate);
	                var days = Period._parseNumber(text, dayMatch, negate);
	                days = _MathUtil.MathUtil.safeAdd(days, _MathUtil.MathUtil.safeMultiply(weeks, 7));
	                return Period.create(years, months, days);
	            }
	        }
	        throw new _errors.DateTimeParseException('Text cannot be parsed to a Period', text, 0);
	    };

	    Period._parseNumber = function _parseNumber(text, str, negate) {
	        if (str == null) {
	            return 0;
	        }
	        var val = _MathUtil.MathUtil.parseInt(str);
	        return _MathUtil.MathUtil.safeMultiply(val, negate);
	    };

	    Period.create = function create(years, months, days) {
	        return new Period(years, months, days);
	    };

	    Period.prototype.units = function units() {
	        return [_ChronoUnit.ChronoUnit.YEARS, _ChronoUnit.ChronoUnit.MONTHS, _ChronoUnit.ChronoUnit.DAYS];
	    };

	    Period.prototype.chronology = function chronology() {
	        return _IsoChronology.IsoChronology.INSTANCE;
	    };

	    Period.prototype.get = function get(unit) {
	        if (unit === _ChronoUnit.ChronoUnit.YEARS) {
	            return this._years;
	        }
	        if (unit === _ChronoUnit.ChronoUnit.MONTHS) {
	            return this._months;
	        }
	        if (unit === _ChronoUnit.ChronoUnit.DAYS) {
	            return this._days;
	        }
	        throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	    };

	    Period.prototype.isZero = function isZero() {
	        return this === Period.ZERO;
	    };

	    Period.prototype.isNegative = function isNegative() {
	        return this._years < 0 || this._months < 0 || this._days < 0;
	    };

	    Period.prototype.years = function years() {
	        return this._years;
	    };

	    Period.prototype.months = function months() {
	        return this._months;
	    };

	    Period.prototype.days = function days() {
	        return this._days;
	    };

	    Period.prototype.withYears = function withYears(years) {
	        if (years === this._years) {
	            return this;
	        }
	        return Period.create(years, this._months, this._days);
	    };

	    Period.prototype.withMonths = function withMonths(months) {
	        if (months === this._months) {
	            return this;
	        }
	        return Period.create(this._years, months, this._days);
	    };

	    Period.prototype.withDays = function withDays(days) {
	        if (days === this._days) {
	            return this;
	        }
	        return Period.create(this._years, this._months, days);
	    };

	    Period.prototype.plus = function plus(amountToAdd) {
	        var amount = Period.from(amountToAdd);
	        return Period.create(_MathUtil.MathUtil.safeAdd(this._years, amount._years), _MathUtil.MathUtil.safeAdd(this._months, amount._months), _MathUtil.MathUtil.safeAdd(this._days, amount._days));
	    };

	    Period.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        return Period.create(_MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.safeAdd(this._years, yearsToAdd)), this._months, this._days);
	    };

	    Period.prototype.plusMonths = function plusMonths(monthsToAdd) {
	        if (monthsToAdd === 0) {
	            return this;
	        }
	        return Period.create(this._years, _MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.safeAdd(this._months, monthsToAdd)), this._days);
	    };

	    Period.prototype.plusDays = function plusDays(daysToAdd) {
	        if (daysToAdd === 0) {
	            return this;
	        }
	        return Period.create(this._years, this._months, _MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.safeAdd(this._days, daysToAdd)));
	    };

	    Period.prototype.minus = function minus(amountToSubtract) {
	        var amount = Period.from(amountToSubtract);
	        return Period.create(_MathUtil.MathUtil.safeSubtract(this._years, amount._years), _MathUtil.MathUtil.safeSubtract(this._months, amount._months), _MathUtil.MathUtil.safeSubtract(this._days, amount._days));
	    };

	    Period.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return this.plusYears(-1 * yearsToSubtract);
	    };

	    Period.prototype.minusMonths = function minusMonths(monthsToSubtract) {
	        return this.plusMonths(-1 * monthsToSubtract);
	    };

	    Period.prototype.minusDays = function minusDays(daysToSubtract) {
	        return this.plusDays(-1 * daysToSubtract);
	    };

	    Period.prototype.multipliedBy = function multipliedBy(scalar) {
	        if (this === Period.ZERO || scalar === 1) {
	            return this;
	        }
	        return Period.create(_MathUtil.MathUtil.safeMultiply(this._years, scalar), _MathUtil.MathUtil.safeMultiply(this._months, scalar), _MathUtil.MathUtil.safeMultiply(this._days, scalar));
	    };

	    Period.prototype.negated = function negated() {
	        return this.multipliedBy(-1);
	    };

	    Period.prototype.normalized = function normalized() {
	        var totalMonths = this.toTotalMonths();
	        var splitYears = _MathUtil.MathUtil.intDiv(totalMonths, 12);
	        var splitMonths = _MathUtil.MathUtil.intMod(totalMonths, 12);
	        if (splitYears === this._years && splitMonths === this._months) {
	            return this;
	        }
	        return Period.create(_MathUtil.MathUtil.safeToInt(splitYears), splitMonths, this._days);
	    };

	    Period.prototype.toTotalMonths = function toTotalMonths() {
	        return this._years * 12 + this._months;
	    };

	    Period.prototype.addTo = function addTo(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._years !== 0) {
	            if (this._months !== 0) {
	                temporal = temporal.plus(this.toTotalMonths(), _ChronoUnit.ChronoUnit.MONTHS);
	            } else {
	                temporal = temporal.plus(this._years, _ChronoUnit.ChronoUnit.YEARS);
	            }
	        } else if (this._months !== 0) {
	            temporal = temporal.plus(this._months, _ChronoUnit.ChronoUnit.MONTHS);
	        }
	        if (this._days !== 0) {
	            temporal = temporal.plus(this._days, _ChronoUnit.ChronoUnit.DAYS);
	        }
	        return temporal;
	    };

	    Period.prototype.subtractFrom = function subtractFrom(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (this._years !== 0) {
	            if (this._months !== 0) {
	                temporal = temporal.minus(this.toTotalMonths(), _ChronoUnit.ChronoUnit.MONTHS);
	            } else {
	                temporal = temporal.minus(this._years, _ChronoUnit.ChronoUnit.YEARS);
	            }
	        } else if (this._months !== 0) {
	            temporal = temporal.minus(this._months, _ChronoUnit.ChronoUnit.MONTHS);
	        }
	        if (this._days !== 0) {
	            temporal = temporal.minus(this._days, _ChronoUnit.ChronoUnit.DAYS);
	        }
	        return temporal;
	    };

	    Period.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof Period) {
	            var other = obj;
	            return this._years === other._years && this._months === other._months && this._days === other._days;
	        }
	        return false;
	    };

	    Period.prototype.hashCode = function hashCode() {
	        return this._years + (this._months << 8) + (this._days << 16);
	    };

	    Period.prototype.toString = function toString() {
	        if (this === Period.ZERO) {
	            return 'P0D';
	        } else {
	            var buf = 'P';
	            if (this._years !== 0) {
	                buf += '' + this._years + 'Y';
	            }
	            if (this._months !== 0) {
	                buf += '' + this._months + 'M';
	            }
	            if (this._days !== 0) {
	                buf += '' + this._days + 'D';
	            }
	            return buf;
	        }
	    };

	    Period.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    return Period;
	}(_TemporalAmount2.TemporalAmount);

	function _init() {
	    Period.ZERO = makeZeroPeriod();

	    function makeZeroPeriod() {
	        var zero = Object.create(Period.prototype);
	        _TemporalAmount2.TemporalAmount.call(zero);
	        zero._years = 0;
	        zero._months = 0;
	        zero._days = 0;
	        return zero;
	    }
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */
	var ParsePosition = exports.ParsePosition = function () {
	    function ParsePosition(index) {
	        _classCallCheck(this, ParsePosition);

	        this._index = index;
	        this._errorIndex = -1;
	    }

	    ParsePosition.prototype.getIndex = function getIndex() {
	        return this._index;
	    };

	    ParsePosition.prototype.setIndex = function setIndex(index) {
	        this._index = index;
	    };

	    ParsePosition.prototype.getErrorIndex = function getErrorIndex() {
	        return this._errorIndex;
	    };

	    ParsePosition.prototype.setErrorIndex = function setErrorIndex(errorIndex) {
	        this._errorIndex = errorIndex;
	    };

	    return ParsePosition;
	}();

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeBuilder = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _EnumMap = __webpack_require__(35);

	var _ResolverStyle = __webpack_require__(36);

	var _IsoChronology = __webpack_require__(9);

	var _ChronoLocalDate = __webpack_require__(30);

	var _ChronoField = __webpack_require__(12);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalQueries = __webpack_require__(22);

	var _LocalTime = __webpack_require__(5);

	var _LocalDate = __webpack_require__(8);

	var _Period = __webpack_require__(32);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var DateTimeBuilder = function (_Temporal) {
	    _inherits(DateTimeBuilder, _Temporal);

	    DateTimeBuilder.create = function create(field, value) {
	        var dtb = new DateTimeBuilder();
	        dtb._addFieldValue(field, value);
	        return dtb;
	    };

	    function DateTimeBuilder() {
	        _classCallCheck(this, DateTimeBuilder);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this.fieldValues = new _EnumMap.EnumMap();

	        _this.chrono = null;

	        _this.zone = null;

	        _this.date = null;

	        _this.time = null;

	        _this.leapSecond = false;

	        _this.excessDays = null;
	        return _this;
	    }

	    DateTimeBuilder.prototype.getFieldValue0 = function getFieldValue0(field) {
	        return this.fieldValues.get(field);
	    };

	    DateTimeBuilder.prototype._addFieldValue = function _addFieldValue(field, value) {
	        (0, _assert.requireNonNull)(field, 'field');
	        var old = this.getFieldValue0(field);
	        if (old != null && old !== value) {
	            throw new _errors.DateTimeException('Conflict found: ' + field + ' ' + old + ' differs from ' + field + ' ' + value + ': ' + this);
	        }
	        return this._putFieldValue0(field, value);
	    };

	    DateTimeBuilder.prototype._putFieldValue0 = function _putFieldValue0(field, value) {
	        this.fieldValues.put(field, value);
	        return this;
	    };

	    DateTimeBuilder.prototype.resolve = function resolve(resolverStyle, resolverFields) {
	        if (resolverFields != null) {
	            this.fieldValues.retainAll(resolverFields);
	        }

	        this._mergeDate(resolverStyle);
	        this._mergeTime(resolverStyle);

	        this._resolveTimeInferZeroes(resolverStyle);

	        if (this.excessDays != null && this.excessDays.isZero() === false && this.date != null && this.time != null) {
	            this.date = this.date.plus(this.excessDays);
	            this.excessDays = _Period.Period.ZERO;
	        }

	        return this;
	    };

	    DateTimeBuilder.prototype._mergeDate = function _mergeDate(resolverStyle) {
	        this._checkDate(_IsoChronology.IsoChronology.INSTANCE.resolveDate(this.fieldValues, resolverStyle));
	    };

	    DateTimeBuilder.prototype._checkDate = function _checkDate(date) {
	        if (date != null) {
	            this._addObject(date);
	            for (var fieldName in this.fieldValues.keySet()) {
	                var field = _ChronoField.ChronoField.byName(fieldName);
	                if (field !== null) {
	                    if (this.fieldValues.get(field) !== undefined) {
	                        if (field.isDateBased()) {
	                            var val1 = void 0;
	                            try {
	                                val1 = date.getLong(field);
	                            } catch (ex) {
	                                if (ex instanceof _errors.DateTimeException) {
	                                    continue;
	                                } else {
	                                    throw ex;
	                                }
	                            }
	                            var val2 = this.fieldValues.get(field);
	                            if (val1 !== val2) {
	                                throw new _errors.DateTimeException('Conflict found: Field ' + field + ' ' + val1 + ' differs from ' + field + ' ' + val2 + ' derived from ' + date);
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    };

	    DateTimeBuilder.prototype._mergeTime = function _mergeTime(resolverStyle) {
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.CLOCK_HOUR_OF_DAY)) {
	            var ch = this.fieldValues.remove(_ChronoField.ChronoField.CLOCK_HOUR_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                if (resolverStyle === _ResolverStyle.ResolverStyle.SMART && ch === 0) {} else {
	                    _ChronoField.ChronoField.CLOCK_HOUR_OF_DAY.checkValidValue(ch);
	                }
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, ch === 24 ? 0 : ch);
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM)) {
	            var _ch = this.fieldValues.remove(_ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                if (resolverStyle === _ResolverStyle.ResolverStyle.SMART && _ch === 0) {} else {
	                    _ChronoField.ChronoField.CLOCK_HOUR_OF_AMPM.checkValidValue(_ch);
	                }
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_AMPM, _ch === 12 ? 0 : _ch);
	        }
	        if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.AMPM_OF_DAY)) {
	                _ChronoField.ChronoField.AMPM_OF_DAY.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.AMPM_OF_DAY));
	            }
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.HOUR_OF_AMPM)) {
	                _ChronoField.ChronoField.HOUR_OF_AMPM.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.HOUR_OF_AMPM));
	            }
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.AMPM_OF_DAY) && this.fieldValues.containsKey(_ChronoField.ChronoField.HOUR_OF_AMPM)) {
	            var ap = this.fieldValues.remove(_ChronoField.ChronoField.AMPM_OF_DAY);
	            var hap = this.fieldValues.remove(_ChronoField.ChronoField.HOUR_OF_AMPM);
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, ap * 12 + hap);
	        }

	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.NANO_OF_DAY)) {
	            var nod = this.fieldValues.remove(_ChronoField.ChronoField.NANO_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.NANO_OF_DAY.checkValidValue(nod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_DAY, _MathUtil.MathUtil.intDiv(nod, 1000000000));
	            this._addFieldValue(_ChronoField.ChronoField.NANO_OF_SECOND, _MathUtil.MathUtil.intMod(nod, 1000000000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_DAY)) {
	            var cod = this.fieldValues.remove(_ChronoField.ChronoField.MICRO_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.MICRO_OF_DAY.checkValidValue(cod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_DAY, _MathUtil.MathUtil.intDiv(cod, 1000000));
	            this._addFieldValue(_ChronoField.ChronoField.MICRO_OF_SECOND, _MathUtil.MathUtil.intMod(cod, 1000000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_DAY)) {
	            var lod = this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.MILLI_OF_DAY.checkValidValue(lod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_DAY, _MathUtil.MathUtil.intDiv(lod, 1000));
	            this._addFieldValue(_ChronoField.ChronoField.MILLI_OF_SECOND, _MathUtil.MathUtil.intMod(lod, 1000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.SECOND_OF_DAY)) {
	            var sod = this.fieldValues.remove(_ChronoField.ChronoField.SECOND_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.SECOND_OF_DAY.checkValidValue(sod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, _MathUtil.MathUtil.intDiv(sod, 3600));
	            this._addFieldValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, _MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(sod, 60), 60));
	            this._addFieldValue(_ChronoField.ChronoField.SECOND_OF_MINUTE, _MathUtil.MathUtil.intMod(sod, 60));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MINUTE_OF_DAY)) {
	            var mod = this.fieldValues.remove(_ChronoField.ChronoField.MINUTE_OF_DAY);
	            if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	                _ChronoField.ChronoField.MINUTE_OF_DAY.checkValidValue(mod);
	            }
	            this._addFieldValue(_ChronoField.ChronoField.HOUR_OF_DAY, _MathUtil.MathUtil.intDiv(mod, 60));
	            this._addFieldValue(_ChronoField.ChronoField.MINUTE_OF_HOUR, _MathUtil.MathUtil.intMod(mod, 60));
	        }

	        if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND)) {
	                _ChronoField.ChronoField.MILLI_OF_SECOND.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.MILLI_OF_SECOND));
	            }
	            if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND)) {
	                _ChronoField.ChronoField.MICRO_OF_SECOND.checkValidValue(this.fieldValues.get(_ChronoField.ChronoField.MICRO_OF_SECOND));
	            }
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND) && this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND)) {
	            var los = this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_SECOND);
	            var cos = this.fieldValues.get(_ChronoField.ChronoField.MICRO_OF_SECOND);
	            this._putFieldValue0(_ChronoField.ChronoField.MICRO_OF_SECOND, los * 1000 + _MathUtil.MathUtil.intMod(cos, 1000));
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND) && this.fieldValues.containsKey(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            var nos = this.fieldValues.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	            this._putFieldValue0(_ChronoField.ChronoField.MICRO_OF_SECOND, _MathUtil.MathUtil.intDiv(nos, 1000));
	            this.fieldValues.remove(_ChronoField.ChronoField.MICRO_OF_SECOND);
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND) && this.fieldValues.containsKey(_ChronoField.ChronoField.NANO_OF_SECOND)) {
	            var _nos = this.fieldValues.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	            this._putFieldValue0(_ChronoField.ChronoField.MILLI_OF_SECOND, _MathUtil.MathUtil.intDiv(_nos, 1000000));
	            this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_SECOND);
	        }
	        if (this.fieldValues.containsKey(_ChronoField.ChronoField.MICRO_OF_SECOND)) {
	            var _cos = this.fieldValues.remove(_ChronoField.ChronoField.MICRO_OF_SECOND);
	            this._putFieldValue0(_ChronoField.ChronoField.NANO_OF_SECOND, _cos * 1000);
	        } else if (this.fieldValues.containsKey(_ChronoField.ChronoField.MILLI_OF_SECOND)) {
	            var _los = this.fieldValues.remove(_ChronoField.ChronoField.MILLI_OF_SECOND);
	            this._putFieldValue0(_ChronoField.ChronoField.NANO_OF_SECOND, _los * 1000000);
	        }
	    };

	    DateTimeBuilder.prototype._resolveTimeInferZeroes = function _resolveTimeInferZeroes(resolverStyle) {
	        var hod = this.fieldValues.get(_ChronoField.ChronoField.HOUR_OF_DAY);
	        var moh = this.fieldValues.get(_ChronoField.ChronoField.MINUTE_OF_HOUR);
	        var som = this.fieldValues.get(_ChronoField.ChronoField.SECOND_OF_MINUTE);
	        var nos = this.fieldValues.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	        if (hod == null) {
	            return;
	        }
	        if (moh == null && (som != null || nos != null)) {
	            return;
	        }
	        if (moh != null && som == null && nos != null) {
	            return;
	        }
	        if (resolverStyle !== _ResolverStyle.ResolverStyle.LENIENT) {
	            if (hod != null) {
	                if (resolverStyle === _ResolverStyle.ResolverStyle.SMART && hod === 24 && (moh == null || moh === 0) && (som == null || som === 0) && (nos == null || nos === 0)) {
	                    hod = 0;
	                    this.excessDays = _Period.Period.ofDays(1);
	                }
	                var hodVal = _ChronoField.ChronoField.HOUR_OF_DAY.checkValidIntValue(hod);
	                if (moh != null) {
	                    var mohVal = _ChronoField.ChronoField.MINUTE_OF_HOUR.checkValidIntValue(moh);
	                    if (som != null) {
	                        var somVal = _ChronoField.ChronoField.SECOND_OF_MINUTE.checkValidIntValue(som);
	                        if (nos != null) {
	                            var nosVal = _ChronoField.ChronoField.NANO_OF_SECOND.checkValidIntValue(nos);
	                            this._addObject(_LocalTime.LocalTime.of(hodVal, mohVal, somVal, nosVal));
	                        } else {
	                            this._addObject(_LocalTime.LocalTime.of(hodVal, mohVal, somVal));
	                        }
	                    } else {
	                        if (nos == null) {
	                            this._addObject(_LocalTime.LocalTime.of(hodVal, mohVal));
	                        }
	                    }
	                } else {
	                    if (som == null && nos == null) {
	                        this._addObject(_LocalTime.LocalTime.of(hodVal, 0));
	                    }
	                }
	            }
	        } else {
	            if (hod != null) {
	                var _hodVal = hod;
	                if (moh != null) {
	                    if (som != null) {
	                        if (nos == null) {
	                            nos = 0;
	                        }
	                        var totalNanos = _MathUtil.MathUtil.safeMultiply(_hodVal, 3600000000000);
	                        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, _MathUtil.MathUtil.safeMultiply(moh, 60000000000));
	                        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, _MathUtil.MathUtil.safeMultiply(som, 1000000000));
	                        totalNanos = _MathUtil.MathUtil.safeAdd(totalNanos, nos);
	                        var excessDays = _MathUtil.MathUtil.floorDiv(totalNanos, 86400000000000);
	                        var nod = _MathUtil.MathUtil.floorMod(totalNanos, 86400000000000);
	                        this._addObject(_LocalTime.LocalTime.ofNanoOfDay(nod));
	                        this.excessDays = _Period.Period.ofDays(excessDays);
	                    } else {
	                        var totalSecs = _MathUtil.MathUtil.safeMultiply(_hodVal, 3600);
	                        totalSecs = _MathUtil.MathUtil.safeAdd(totalSecs, _MathUtil.MathUtil.safeMultiply(moh, 60));
	                        var _excessDays = _MathUtil.MathUtil.floorDiv(totalSecs, 86400);
	                        var sod = _MathUtil.MathUtil.floorMod(totalSecs, 86400);
	                        this._addObject(_LocalTime.LocalTime.ofSecondOfDay(sod));
	                        this.excessDays = _Period.Period.ofDays(_excessDays);
	                    }
	                } else {
	                    var _excessDays2 = _MathUtil.MathUtil.safeToInt(_MathUtil.MathUtil.floorDiv(_hodVal, 24));
	                    _hodVal = _MathUtil.MathUtil.floorMod(_hodVal, 24);
	                    this._addObject(_LocalTime.LocalTime.of(_hodVal, 0));
	                    this.excessDays = _Period.Period.ofDays(_excessDays2);
	                }
	            }
	        }
	        this.fieldValues.remove(_ChronoField.ChronoField.HOUR_OF_DAY);
	        this.fieldValues.remove(_ChronoField.ChronoField.MINUTE_OF_HOUR);
	        this.fieldValues.remove(_ChronoField.ChronoField.SECOND_OF_MINUTE);
	        this.fieldValues.remove(_ChronoField.ChronoField.NANO_OF_SECOND);
	    };

	    DateTimeBuilder.prototype._addObject = function _addObject(dateOrTime) {
	        if (dateOrTime instanceof _ChronoLocalDate.ChronoLocalDate) {
	            this.date = dateOrTime;
	        } else if (dateOrTime instanceof _LocalTime.LocalTime) {
	            this.time = dateOrTime;
	        }
	    };

	    DateTimeBuilder.prototype.build = function build(type) {
	        return type.queryFrom(this);
	    };

	    DateTimeBuilder.prototype.isSupported = function isSupported(field) {
	        if (field == null) {
	            return false;
	        }
	        return this.fieldValues.containsKey(field) && this.fieldValues.get(field) !== undefined || this.date != null && this.date.isSupported(field) || this.time != null && this.time.isSupported(field);
	    };

	    DateTimeBuilder.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        var value = this.getFieldValue0(field);
	        if (value == null) {
	            if (this.date != null && this.date.isSupported(field)) {
	                return this.date.getLong(field);
	            }
	            if (this.time != null && this.time.isSupported(field)) {
	                return this.time.getLong(field);
	            }
	            throw new _errors.DateTimeException('Field not found: ' + field);
	        }
	        return value;
	    };

	    DateTimeBuilder.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.zoneId()) {
	            return this.zone;
	        } else if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chrono;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this.date != null ? _LocalDate.LocalDate.from(this.date) : null;
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this.time;
	        } else if (_query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return _query.queryFrom(this);
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return null;
	        }

	        return _query.queryFrom(this);
	    };

	    return DateTimeBuilder;
	}(_Temporal2.Temporal);

	exports.DateTimeBuilder = DateTimeBuilder;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var EnumMap = exports.EnumMap = function () {
	    function EnumMap() {
	        _classCallCheck(this, EnumMap);

	        this._map = {};
	    }

	    EnumMap.prototype.putAll = function putAll(otherMap) {
	        for (var key in otherMap._map) {
	            this._map[key] = otherMap._map[key];
	        }
	        return this;
	    };

	    EnumMap.prototype.containsKey = function containsKey(key) {
	        return this._map.hasOwnProperty(key.name()) && this.get(key) !== undefined;
	    };

	    EnumMap.prototype.get = function get(key) {
	        return this._map[key.name()];
	    };

	    EnumMap.prototype.put = function put(key, val) {
	        return this.set(key, val);
	    };

	    EnumMap.prototype.set = function set(key, val) {
	        this._map[key.name()] = val;
	        return this;
	    };

	    EnumMap.prototype.retainAll = function retainAll(keyList) {
	        var map = {};
	        for (var i = 0; i < keyList.length; i++) {
	            var key = keyList[i].name();
	            map[key] = this._map[key];
	        }
	        this._map = map;
	        return this;
	    };

	    EnumMap.prototype.remove = function remove(key) {
	        var keyName = key.name();
	        var val = this._map[keyName];
	        this._map[keyName] = undefined;
	        return val;
	    };

	    EnumMap.prototype.keySet = function keySet() {
	        return this._map;
	    };

	    EnumMap.prototype.clear = function clear() {
	        this._map = {};
	    };

	    return EnumMap;
	}();

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ResolverStyle = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ResolverStyle = exports.ResolverStyle = function (_Enum) {
	  _inherits(ResolverStyle, _Enum);

	  function ResolverStyle() {
	    _classCallCheck(this, ResolverStyle);

	    return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	  }

	  return ResolverStyle;
	}(_Enum2.Enum);

	ResolverStyle.STRICT = new ResolverStyle('STRICT');

	ResolverStyle.SMART = new ResolverStyle('SMART');

	ResolverStyle.LENIENT = new ResolverStyle('LENIENT');

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimeParseContext = undefined;

	var _assert = __webpack_require__(2);

	var _DateTimeBuilder = __webpack_require__(34);

	var _EnumMap = __webpack_require__(35);

	var _IsoChronology = __webpack_require__(9);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalQueries = __webpack_require__(22);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var DateTimeParseContext = exports.DateTimeParseContext = function () {
	    function DateTimeParseContext() {
	        _classCallCheck(this, DateTimeParseContext);

	        if (arguments.length === 1) {
	            if (arguments[0] instanceof DateTimeParseContext) {
	                this._constructorSelf.apply(this, arguments);
	                return;
	            } else {
	                this._constructorFormatter.apply(this, arguments);
	            }
	        } else {
	            this._constructorParam.apply(this, arguments);
	        }

	        this._caseSensitive = true;
	        this._strict = true;
	        this._parsed = [new Parsed(this)];
	    }

	    DateTimeParseContext.prototype._constructorParam = function _constructorParam(locale, symbols, chronology) {
	        this._locale = locale;
	        this._symbols = symbols;
	        this._overrideChronology = chronology;
	    };

	    DateTimeParseContext.prototype._constructorFormatter = function _constructorFormatter(formatter) {
	        this._locale = formatter.locale();
	        this._symbols = formatter.decimalStyle();
	        this._overrideChronology = formatter.chronology();
	    };

	    DateTimeParseContext.prototype._constructorSelf = function _constructorSelf(other) {
	        this._locale = other._locale;
	        this._symbols = other._symbols;
	        this._overrideChronology = other._overrideChronology;
	        this._overrideZone = other._overrideZone;
	        this._caseSensitive = other._caseSensitive;
	        this._strict = other._strict;
	        this._parsed = [new Parsed(this)];
	    };

	    DateTimeParseContext.prototype.copy = function copy() {
	        return new DateTimeParseContext(this);
	    };

	    DateTimeParseContext.prototype.symbols = function symbols() {
	        return this._symbols;
	    };

	    DateTimeParseContext.prototype.isStrict = function isStrict() {
	        return this._strict;
	    };

	    DateTimeParseContext.prototype.setStrict = function setStrict(strict) {
	        this._strict = strict;
	    };

	    DateTimeParseContext.prototype.startOptional = function startOptional() {
	        this._parsed.push(this.currentParsed().copy());
	    };

	    DateTimeParseContext.prototype.endOptional = function endOptional(successful) {
	        if (successful) {
	            this._parsed.splice(this._parsed.length - 2, 1);
	        } else {
	            this._parsed.splice(this._parsed.length - 1, 1);
	        }
	    };

	    DateTimeParseContext.prototype.isCaseSensitive = function isCaseSensitive() {
	        return this._caseSensitive;
	    };

	    DateTimeParseContext.prototype.setCaseSensitive = function setCaseSensitive(caseSensitive) {
	        this._caseSensitive = caseSensitive;
	    };

	    DateTimeParseContext.prototype.subSequenceEquals = function subSequenceEquals(cs1, offset1, cs2, offset2, length) {
	        if (offset1 + length > cs1.length || offset2 + length > cs2.length) {
	            return false;
	        }
	        if (!this.isCaseSensitive()) {
	            cs1 = cs1.toLowerCase();
	            cs2 = cs2.toLowerCase();
	        }
	        for (var i = 0; i < length; i++) {
	            var ch1 = cs1[offset1 + i];
	            var ch2 = cs2[offset2 + i];
	            if (ch1 !== ch2) {
	                return false;
	            }
	        }
	        return true;
	    };

	    DateTimeParseContext.prototype.charEquals = function charEquals(ch1, ch2) {
	        if (this.isCaseSensitive()) {
	            return ch1 === ch2;
	        }
	        return this.charEqualsIgnoreCase(ch1, ch2);
	    };

	    DateTimeParseContext.prototype.charEqualsIgnoreCase = function charEqualsIgnoreCase(c1, c2) {
	        return c1 === c2 || c1.toLowerCase() === c2.toLowerCase();
	    };

	    DateTimeParseContext.prototype.setParsedField = function setParsedField(field, value, errorPos, successPos) {
	        var currentParsedFieldValues = this.currentParsed().fieldValues;
	        var old = currentParsedFieldValues.get(field);
	        currentParsedFieldValues.set(field, value);
	        return old != null && old !== value ? ~errorPos : successPos;
	    };

	    DateTimeParseContext.prototype.setParsedZone = function setParsedZone(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        this.currentParsed().zone = zone;
	    };

	    DateTimeParseContext.prototype.getParsed = function getParsed(field) {
	        return this.currentParsed().fieldValues.get(field);
	    };

	    DateTimeParseContext.prototype.toParsed = function toParsed() {
	        return this.currentParsed();
	    };

	    DateTimeParseContext.prototype.currentParsed = function currentParsed() {
	        return this._parsed[this._parsed.length - 1];
	    };

	    DateTimeParseContext.prototype.setParsedLeapSecond = function setParsedLeapSecond() {
	        this.currentParsed().leapSecond = true;
	    };

	    DateTimeParseContext.prototype.getEffectiveChronology = function getEffectiveChronology() {
	        var chrono = this.currentParsed().chrono;
	        if (chrono == null) {
	            chrono = this._overrideChronology;
	            if (chrono == null) {
	                chrono = _IsoChronology.IsoChronology.INSTANCE;
	            }
	        }
	        return chrono;
	    };

	    return DateTimeParseContext;
	}();

	var Parsed = function (_Temporal) {
	    _inherits(Parsed, _Temporal);

	    function Parsed(dateTimeParseContext) {
	        _classCallCheck(this, Parsed);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this.chrono = null;
	        _this.zone = null;
	        _this.fieldValues = new _EnumMap.EnumMap();
	        _this.leapSecond = false;
	        _this.dateTimeParseContext = dateTimeParseContext;
	        return _this;
	    }

	    Parsed.prototype.copy = function copy() {
	        var cloned = new Parsed();
	        cloned.chrono = this.chrono;
	        cloned.zone = this.zone;
	        cloned.fieldValues.putAll(this.fieldValues);
	        cloned.leapSecond = this.leapSecond;
	        cloned.dateTimeParseContext = this.dateTimeParseContext;
	        return cloned;
	    };

	    Parsed.prototype.toString = function toString() {
	        return this.fieldValues + ', ' + this.chrono + ', ' + this.zone;
	    };

	    Parsed.prototype.isSupported = function isSupported(field) {
	        return this.fieldValues.containsKey(field);
	    };

	    Parsed.prototype.get = function get(field) {
	        var val = this.fieldValues.get(field);
	        (0, _assert.assert)(val != null);
	        return val;
	    };

	    Parsed.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chrono;
	        }
	        if (_query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone()) {
	            return this.zone;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    Parsed.prototype.toBuilder = function toBuilder() {
	        var builder = new _DateTimeBuilder.DateTimeBuilder();
	        builder.fieldValues.putAll(this.fieldValues);
	        builder.chrono = this.dateTimeParseContext.getEffectiveChronology();
	        if (this.zone != null) {
	            builder.zone = this.zone;
	        } else {
	            builder.zone = this.overrideZone;
	        }
	        builder.leapSecond = this.leapSecond;
	        builder.excessDays = this.excessDays;
	        return builder;
	    };

	    return Parsed;
	}(_Temporal2.Temporal);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.DateTimePrintContext = undefined;

	var _errors = __webpack_require__(3);

	var _DateTimeFormatter = __webpack_require__(31);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var DateTimePrintContext = exports.DateTimePrintContext = function () {
	    function DateTimePrintContext(temporal, localeOrFormatter, symbols) {
	        _classCallCheck(this, DateTimePrintContext);

	        if (arguments.length === 2 && arguments[1] instanceof _DateTimeFormatter.DateTimeFormatter) {
	            this._temporal = DateTimePrintContext.adjust(temporal, localeOrFormatter);
	            this._locale = localeOrFormatter.locale();
	            this._symbols = localeOrFormatter.decimalStyle();
	        } else {
	            this._temporal = temporal;
	            this._locale = localeOrFormatter;
	            this._symbols = symbols;
	        }
	        this._optional = 0;
	    }

	    DateTimePrintContext.adjust = function adjust(temporal, formatter) {
	        return temporal;
	    };

	    DateTimePrintContext.prototype.symbols = function symbols() {
	        return this._symbols;
	    };

	    DateTimePrintContext.prototype.startOptional = function startOptional() {
	        this._optional++;
	    };

	    DateTimePrintContext.prototype.endOptional = function endOptional() {
	        this._optional--;
	    };

	    DateTimePrintContext.prototype.getValueQuery = function getValueQuery(query) {
	        var result = this._temporal.query(query);
	        if (result == null && this._optional === 0) {
	            throw new _errors.DateTimeException('Unable to extract value: ' + this._temporal);
	        }
	        return result;
	    };

	    DateTimePrintContext.prototype.getValue = function getValue(field) {
	        try {
	            return this._temporal.getLong(field);
	        } catch (ex) {
	            if (ex instanceof _errors.DateTimeException && this._optional > 0) {
	                return null;
	            }
	            throw ex;
	        }
	    };

	    DateTimePrintContext.prototype.temporal = function temporal() {
	        return this._temporal;
	    };

	    DateTimePrintContext.prototype.setDateTime = function setDateTime(temporal) {
	        this._temporal = temporal;
	    };

	    return DateTimePrintContext;
	}();

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SignStyle = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SignStyle = exports.SignStyle = function (_Enum) {
	    _inherits(SignStyle, _Enum);

	    function SignStyle() {
	        _classCallCheck(this, SignStyle);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    SignStyle.prototype.parse = function parse(positive, strict, fixedWidth) {
	        switch (this) {
	            case SignStyle.NORMAL:
	                return !positive || !strict;
	            case SignStyle.ALWAYS:
	            case SignStyle.EXCEEDS_PAD:
	                return true;
	            default:
	                return !strict && !fixedWidth;
	        }
	    };

	    return SignStyle;
	}(_Enum2.Enum);

	SignStyle.NORMAL = new SignStyle('NORMAL');
	SignStyle.NEVER = new SignStyle('NEVER');
	SignStyle.ALWAYS = new SignStyle('ALWAYS');
	SignStyle.EXCEEDS_PAD = new SignStyle('EXCEEDS_PAD');
	SignStyle.NOT_NEGATIVE = new SignStyle('NOT_NEGATIVE');

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var StringBuilder = exports.StringBuilder = function () {
	    function StringBuilder() {
	        _classCallCheck(this, StringBuilder);

	        this._str = '';
	    }

	    StringBuilder.prototype.append = function append(str) {
	        this._str += str;
	        return this;
	    };

	    StringBuilder.prototype.appendChar = function appendChar(str) {
	        this._str += str[0];
	        return this;
	    };

	    StringBuilder.prototype.insert = function insert(offset, str) {
	        this._str = this._str.slice(0, offset) + str + this._str.slice(offset);
	        return this;
	    };

	    StringBuilder.prototype.replace = function replace(start, end, str) {
	        this._str = this._str.slice(0, start) + str + this._str.slice(end);
	        return this;
	    };

	    StringBuilder.prototype.length = function length() {
	        return this._str.length;
	    };

	    StringBuilder.prototype.setLength = function setLength(length) {
	        this._str = this._str.slice(0, length);
	        return this;
	    };

	    StringBuilder.prototype.toString = function toString() {
	        return this._str;
	    };

	    return StringBuilder;
	}();

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.IsoFields = undefined;
	exports._init = _init;

	var _errors = __webpack_require__(3);

	var _DayOfWeek = __webpack_require__(11);

	var _Duration = __webpack_require__(14);

	var _MathUtil = __webpack_require__(6);

	var _LocalDate = __webpack_require__(8);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalField2 = __webpack_require__(18);

	var _TemporalUnit2 = __webpack_require__(16);

	var _ValueRange = __webpack_require__(19);

	var _IsoChronology = __webpack_require__(9);

	var _ResolverStyle = __webpack_require__(36);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var IsoFields = exports.IsoFields = function IsoFields() {
	    _classCallCheck(this, IsoFields);
	};

	var QUARTER_DAYS = [0, 90, 181, 273, 0, 91, 182, 274];

	var Field = function (_TemporalField) {
	    _inherits(Field, _TemporalField);

	    function Field() {
	        _classCallCheck(this, Field);

	        return _possibleConstructorReturn(this, _TemporalField.apply(this, arguments));
	    }

	    Field.prototype.isDateBased = function isDateBased() {
	        return true;
	    };

	    Field.prototype.isTimeBased = function isTimeBased() {
	        return false;
	    };

	    Field.prototype._isIso = function _isIso() {
	        return true;
	    };

	    Field._getWeekRangeByLocalDate = function _getWeekRangeByLocalDate(date) {
	        var wby = Field._getWeekBasedYear(date);
	        return _ValueRange.ValueRange.of(1, Field._getWeekRangeByYear(wby));
	    };

	    Field._getWeekRangeByYear = function _getWeekRangeByYear(wby) {
	        var date = _LocalDate.LocalDate.of(wby, 1, 1);

	        if (date.dayOfWeek() === _DayOfWeek.DayOfWeek.THURSDAY || date.dayOfWeek() === _DayOfWeek.DayOfWeek.WEDNESDAY && date.isLeapYear()) {
	            return 53;
	        }
	        return 52;
	    };

	    Field._getWeek = function _getWeek(date) {
	        var dow0 = date.dayOfWeek().ordinal();
	        var doy0 = date.dayOfYear() - 1;
	        var doyThu0 = doy0 + (3 - dow0);
	        var alignedWeek = _MathUtil.MathUtil.intDiv(doyThu0, 7);
	        var firstThuDoy0 = doyThu0 - alignedWeek * 7;
	        var firstMonDoy0 = firstThuDoy0 - 3;
	        if (firstMonDoy0 < -3) {
	            firstMonDoy0 += 7;
	        }
	        if (doy0 < firstMonDoy0) {
	            return Field._getWeekRangeByLocalDate(date.withDayOfYear(180).minusYears(1)).maximum();
	        }
	        var week = _MathUtil.MathUtil.intDiv(doy0 - firstMonDoy0, 7) + 1;
	        if (week === 53) {
	            if ((firstMonDoy0 === -3 || firstMonDoy0 === -2 && date.isLeapYear()) === false) {
	                week = 1;
	            }
	        }
	        return week;
	    };

	    Field._getWeekBasedYear = function _getWeekBasedYear(date) {
	        var year = date.year();
	        var doy = date.dayOfYear();
	        if (doy <= 3) {
	            var dow = date.dayOfWeek().ordinal();
	            if (doy - dow < -2) {
	                year--;
	            }
	        } else if (doy >= 363) {
	            var _dow = date.dayOfWeek().ordinal();
	            doy = doy - 363 - (date.isLeapYear() ? 1 : 0);
	            if (doy - _dow >= 0) {
	                year++;
	            }
	        }
	        return year;
	    };

	    Field.prototype.getDisplayName = function getDisplayName() {
	        return this.toString();
	    };

	    Field.prototype.resolve = function resolve() {
	        return null;
	    };

	    Field.prototype.name = function name() {
	        return this.toString();
	    };

	    return Field;
	}(_TemporalField2.TemporalField);

	var DAY_OF_QUARTER_FIELD = function (_Field) {
	    _inherits(DAY_OF_QUARTER_FIELD, _Field);

	    function DAY_OF_QUARTER_FIELD() {
	        _classCallCheck(this, DAY_OF_QUARTER_FIELD);

	        return _possibleConstructorReturn(this, _Field.apply(this, arguments));
	    }

	    DAY_OF_QUARTER_FIELD.prototype.toString = function toString() {
	        return 'DayOfQuarter';
	    };

	    DAY_OF_QUARTER_FIELD.prototype.baseUnit = function baseUnit() {
	        return _ChronoUnit.ChronoUnit.DAYS;
	    };

	    DAY_OF_QUARTER_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return QUARTER_YEARS;
	    };

	    DAY_OF_QUARTER_FIELD.prototype.range = function range() {
	        return _ValueRange.ValueRange.of(1, 90, 92);
	    };

	    DAY_OF_QUARTER_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.DAY_OF_YEAR) && temporal.isSupported(_ChronoField.ChronoField.MONTH_OF_YEAR) && temporal.isSupported(_ChronoField.ChronoField.YEAR) && this._isIso(temporal);
	    };

	    DAY_OF_QUARTER_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: DayOfQuarter');
	        }
	        var qoy = temporal.getLong(QUARTER_OF_YEAR);
	        if (qoy === 1) {
	            var year = temporal.getLong(_ChronoField.ChronoField.YEAR);
	            return _IsoChronology.IsoChronology.isLeapYear(year) ? _ValueRange.ValueRange.of(1, 91) : _ValueRange.ValueRange.of(1, 90);
	        } else if (qoy === 2) {
	            return _ValueRange.ValueRange.of(1, 91);
	        } else if (qoy === 3 || qoy === 4) {
	            return _ValueRange.ValueRange.of(1, 92);
	        }
	        return this.range();
	    };

	    DAY_OF_QUARTER_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: DayOfQuarter');
	        }
	        var doy = temporal.get(_ChronoField.ChronoField.DAY_OF_YEAR);
	        var moy = temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR);
	        var year = temporal.getLong(_ChronoField.ChronoField.YEAR);
	        return doy - QUARTER_DAYS[_MathUtil.MathUtil.intDiv(moy - 1, 3) + (_IsoChronology.IsoChronology.isLeapYear(year) ? 4 : 0)];
	    };

	    DAY_OF_QUARTER_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        var curValue = this.getFrom(temporal);
	        this.range().checkValidValue(newValue, this);
	        return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, temporal.getLong(_ChronoField.ChronoField.DAY_OF_YEAR) + (newValue - curValue));
	    };

	    DAY_OF_QUARTER_FIELD.prototype.resolve = function resolve(fieldValues, partialTemporal, resolverStyle) {
	        var yearLong = fieldValues.get(_ChronoField.ChronoField.YEAR);
	        var qoyLong = fieldValues.get(QUARTER_OF_YEAR);
	        if (yearLong == null || qoyLong == null) {
	            return null;
	        }
	        var y = _ChronoField.ChronoField.YEAR.checkValidIntValue(yearLong);
	        var doq = fieldValues.get(DAY_OF_QUARTER);
	        var date = void 0;
	        if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	            var qoy = qoyLong;
	            date = _LocalDate.LocalDate.of(y, 1, 1);
	            date = date.plusMonths(_MathUtil.MathUtil.safeMultiply(_MathUtil.MathUtil.safeSubtract(qoy, 1), 3));
	            date = date.plusDays(_MathUtil.MathUtil.safeSubtract(doq, 1));
	        } else {
	            var _qoy = QUARTER_OF_YEAR.range().checkValidIntValue(qoyLong, QUARTER_OF_YEAR);
	            if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT) {
	                var max = 92;
	                if (_qoy === 1) {
	                    max = _IsoChronology.IsoChronology.isLeapYear(y) ? 91 : 90;
	                } else if (_qoy === 2) {
	                    max = 91;
	                }
	                _ValueRange.ValueRange.of(1, max).checkValidValue(doq, this);
	            } else {
	                this.range().checkValidValue(doq, this);
	            }
	            date = _LocalDate.LocalDate.of(y, (_qoy - 1) * 3 + 1, 1).plusDays(doq - 1);
	        }
	        fieldValues.remove(this);
	        fieldValues.remove(_ChronoField.ChronoField.YEAR);
	        fieldValues.remove(QUARTER_OF_YEAR);
	        return date;
	    };

	    return DAY_OF_QUARTER_FIELD;
	}(Field);

	var QUARTER_OF_YEAR_FIELD = function (_Field2) {
	    _inherits(QUARTER_OF_YEAR_FIELD, _Field2);

	    function QUARTER_OF_YEAR_FIELD() {
	        _classCallCheck(this, QUARTER_OF_YEAR_FIELD);

	        return _possibleConstructorReturn(this, _Field2.apply(this, arguments));
	    }

	    QUARTER_OF_YEAR_FIELD.prototype.toString = function toString() {
	        return 'QuarterOfYear';
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.baseUnit = function baseUnit() {
	        return QUARTER_YEARS;
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return _ChronoUnit.ChronoUnit.YEARS;
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.range = function range() {
	        return _ValueRange.ValueRange.of(1, 4);
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.MONTH_OF_YEAR) && this._isIso(temporal);
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        return this.range();
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: QuarterOfYear');
	        }
	        var moy = temporal.getLong(_ChronoField.ChronoField.MONTH_OF_YEAR);
	        return _MathUtil.MathUtil.intDiv(moy + 2, 3);
	    };

	    QUARTER_OF_YEAR_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        var curValue = this.getFrom(temporal);
	        this.range().checkValidValue(newValue, this);
	        return temporal.with(_ChronoField.ChronoField.MONTH_OF_YEAR, temporal.getLong(_ChronoField.ChronoField.MONTH_OF_YEAR) + (newValue - curValue) * 3);
	    };

	    return QUARTER_OF_YEAR_FIELD;
	}(Field);

	var WEEK_OF_WEEK_BASED_YEAR_FIELD = function (_Field3) {
	    _inherits(WEEK_OF_WEEK_BASED_YEAR_FIELD, _Field3);

	    function WEEK_OF_WEEK_BASED_YEAR_FIELD() {
	        _classCallCheck(this, WEEK_OF_WEEK_BASED_YEAR_FIELD);

	        return _possibleConstructorReturn(this, _Field3.apply(this, arguments));
	    }

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.toString = function toString() {
	        return 'WeekOfWeekBasedYear';
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.baseUnit = function baseUnit() {
	        return _ChronoUnit.ChronoUnit.WEEKS;
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return WEEK_BASED_YEARS;
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.range = function range() {
	        return _ValueRange.ValueRange.of(1, 52, 53);
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY) && this._isIso(temporal);
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekOfWeekBasedYear');
	        }
	        return Field._getWeekRangeByLocalDate(_LocalDate.LocalDate.from(temporal));
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekOfWeekBasedYear');
	        }
	        return Field._getWeek(_LocalDate.LocalDate.from(temporal));
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        this.range().checkValidValue(newValue, this);
	        return temporal.plus(_MathUtil.MathUtil.safeSubtract(newValue, this.getFrom(temporal)), _ChronoUnit.ChronoUnit.WEEKS);
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.resolve = function resolve(fieldValues, partialTemporal, resolverStyle) {
	        var wbyLong = fieldValues.get(WEEK_BASED_YEAR);
	        var dowLong = fieldValues.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	        if (wbyLong == null || dowLong == null) {
	            return null;
	        }
	        var wby = WEEK_BASED_YEAR.range().checkValidIntValue(wbyLong, WEEK_BASED_YEAR);
	        var wowby = fieldValues.get(WEEK_OF_WEEK_BASED_YEAR);
	        var date = void 0;
	        if (resolverStyle === _ResolverStyle.ResolverStyle.LENIENT) {
	            var dow = dowLong;
	            var weeks = 0;
	            if (dow > 7) {
	                weeks = _MathUtil.MathUtil.intDiv(dow - 1, 7);
	                dow = _MathUtil.MathUtil.intMod(dow - 1, 7) + 1;
	            } else if (dow < 1) {
	                weeks = _MathUtil.MathUtil.intDiv(dow, 7) - 1;
	                dow = _MathUtil.MathUtil.intMod(dow, 7) + 7;
	            }
	            date = _LocalDate.LocalDate.of(wby, 1, 4).plusWeeks(wowby - 1).plusWeeks(weeks).with(_ChronoField.ChronoField.DAY_OF_WEEK, dow);
	        } else {
	            var _dow2 = _ChronoField.ChronoField.DAY_OF_WEEK.checkValidIntValue(dowLong);
	            if (resolverStyle === _ResolverStyle.ResolverStyle.STRICT) {
	                var temp = _LocalDate.LocalDate.of(wby, 1, 4);
	                var range = Field._getWeekRangeByLocalDate(temp);
	                range.checkValidValue(wowby, this);
	            } else {
	                this.range().checkValidValue(wowby, this);
	            }
	            date = _LocalDate.LocalDate.of(wby, 1, 4).plusWeeks(wowby - 1).with(_ChronoField.ChronoField.DAY_OF_WEEK, _dow2);
	        }
	        fieldValues.remove(this);
	        fieldValues.remove(WEEK_BASED_YEAR);
	        fieldValues.remove(_ChronoField.ChronoField.DAY_OF_WEEK);
	        return date;
	    };

	    WEEK_OF_WEEK_BASED_YEAR_FIELD.prototype.getDisplayName = function getDisplayName() {
	        return 'Week';
	    };

	    return WEEK_OF_WEEK_BASED_YEAR_FIELD;
	}(Field);

	var WEEK_BASED_YEAR_FIELD = function (_Field4) {
	    _inherits(WEEK_BASED_YEAR_FIELD, _Field4);

	    function WEEK_BASED_YEAR_FIELD() {
	        _classCallCheck(this, WEEK_BASED_YEAR_FIELD);

	        return _possibleConstructorReturn(this, _Field4.apply(this, arguments));
	    }

	    WEEK_BASED_YEAR_FIELD.prototype.toString = function toString() {
	        return 'WeekBasedYear';
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.baseUnit = function baseUnit() {
	        return WEEK_BASED_YEARS;
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.rangeUnit = function rangeUnit() {
	        return _ChronoUnit.ChronoUnit.FOREVER;
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.range = function range() {
	        return _ChronoField.ChronoField.YEAR.range();
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY) && this._isIso(temporal);
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.rangeRefinedBy = function rangeRefinedBy(temporal) {
	        return _ChronoField.ChronoField.YEAR.range();
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.getFrom = function getFrom(temporal) {
	        if (temporal.isSupported(this) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekBasedYear');
	        }
	        return Field._getWeekBasedYear(_LocalDate.LocalDate.from(temporal));
	    };

	    WEEK_BASED_YEAR_FIELD.prototype.adjustInto = function adjustInto(temporal, newValue) {
	        if (this.isSupportedBy(temporal) === false) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: WeekBasedYear');
	        }
	        var newWby = this.range().checkValidIntValue(newValue, WEEK_BASED_YEAR);
	        var date = _LocalDate.LocalDate.from(temporal);
	        var dow = date.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	        var week = Field._getWeek(date);
	        if (week === 53 && Field._getWeekRangeByYear(newWby) === 52) {
	            week = 52;
	        }
	        var resolved = _LocalDate.LocalDate.of(newWby, 1, 4);
	        var days = dow - resolved.get(_ChronoField.ChronoField.DAY_OF_WEEK) + (week - 1) * 7;
	        resolved = resolved.plusDays(days);
	        return temporal.with(resolved);
	    };

	    return WEEK_BASED_YEAR_FIELD;
	}(Field);

	var Unit = function (_TemporalUnit) {
	    _inherits(Unit, _TemporalUnit);

	    function Unit(name, estimatedDuration) {
	        _classCallCheck(this, Unit);

	        var _this6 = _possibleConstructorReturn(this, _TemporalUnit.call(this));

	        _this6._name = name;
	        _this6._duration = estimatedDuration;
	        return _this6;
	    }

	    Unit.prototype.duration = function duration() {
	        return this._duration;
	    };

	    Unit.prototype.isDurationEstimated = function isDurationEstimated() {
	        return true;
	    };

	    Unit.prototype.isDateBased = function isDateBased() {
	        return true;
	    };

	    Unit.prototype.isTimeBased = function isTimeBased() {
	        return false;
	    };

	    Unit.prototype.isSupportedBy = function isSupportedBy(temporal) {
	        return temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY);
	    };

	    Unit.prototype.addTo = function addTo(temporal, periodToAdd) {
	        switch (this) {
	            case WEEK_BASED_YEARS:
	                {
	                    var added = _MathUtil.MathUtil.safeAdd(temporal.get(WEEK_BASED_YEAR), periodToAdd);
	                    return temporal.with(WEEK_BASED_YEAR, added);
	                }
	            case QUARTER_YEARS:
	                return temporal.plus(_MathUtil.MathUtil.intDiv(periodToAdd, 256), _ChronoUnit.ChronoUnit.YEARS).plus(_MathUtil.MathUtil.intMod(periodToAdd, 256) * 3, _ChronoUnit.ChronoUnit.MONTHS);
	            default:
	                throw new _errors.IllegalStateException('Unreachable');
	        }
	    };

	    Unit.prototype.between = function between(temporal1, temporal2) {
	        switch (this) {
	            case WEEK_BASED_YEARS:
	                return _MathUtil.MathUtil.safeSubtract(temporal2.getLong(WEEK_BASED_YEAR), temporal1.getLong(WEEK_BASED_YEAR));
	            case QUARTER_YEARS:
	                return _MathUtil.MathUtil.intDiv(temporal1.until(temporal2, _ChronoUnit.ChronoUnit.MONTHS), 3);
	            default:
	                throw new _errors.IllegalStateException('Unreachable');
	        }
	    };

	    Unit.prototype.toString = function toString() {
	        return name;
	    };

	    return Unit;
	}(_TemporalUnit2.TemporalUnit);

	var DAY_OF_QUARTER = null;
	var QUARTER_OF_YEAR = null;
	var WEEK_OF_WEEK_BASED_YEAR = null;
	var WEEK_BASED_YEAR = null;
	var WEEK_BASED_YEARS = null;
	var QUARTER_YEARS = null;

	function _init() {
	    DAY_OF_QUARTER = new DAY_OF_QUARTER_FIELD();
	    QUARTER_OF_YEAR = new QUARTER_OF_YEAR_FIELD();
	    WEEK_OF_WEEK_BASED_YEAR = new WEEK_OF_WEEK_BASED_YEAR_FIELD();
	    WEEK_BASED_YEAR = new WEEK_BASED_YEAR_FIELD();

	    WEEK_BASED_YEARS = new Unit('WeekBasedYears', _Duration.Duration.ofSeconds(31556952));
	    QUARTER_YEARS = new Unit('QuarterYears', _Duration.Duration.ofSeconds(31556952 / 4));

	    IsoFields.DAY_OF_QUARTER = DAY_OF_QUARTER;
	    IsoFields.QUARTER_OF_YEAR = QUARTER_OF_YEAR;
	    IsoFields.WEEK_OF_WEEK_BASED_YEAR = WEEK_OF_WEEK_BASED_YEAR;
	    IsoFields.WEEK_BASED_YEAR = WEEK_BASED_YEAR;
	    IsoFields.WEEK_BASED_YEARS = WEEK_BASED_YEARS;
	    IsoFields.QUARTER_YEARS = QUARTER_YEARS;

	    _LocalDate.LocalDate.prototype.isoWeekOfWeekyear = function () {
	        return this.get(IsoFields.WEEK_OF_WEEK_BASED_YEAR);
	    };

	    _LocalDate.LocalDate.prototype.isoWeekyear = function () {
	        return this.get(IsoFields.WEEK_BASED_YEAR);
	    };
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var DecimalStyle = exports.DecimalStyle = function () {
	    function DecimalStyle(zeroChar, positiveSignChar, negativeSignChar, decimalPointChar) {
	        _classCallCheck(this, DecimalStyle);

	        this._zeroDigit = zeroChar;
	        this._zeroDigitCharCode = zeroChar.charCodeAt(0);
	        this._positiveSign = positiveSignChar;
	        this._negativeSign = negativeSignChar;
	        this._decimalSeparator = decimalPointChar;
	    }

	    DecimalStyle.prototype.positiveSign = function positiveSign() {
	        return this._positiveSign;
	    };

	    DecimalStyle.prototype.withPositiveSign = function withPositiveSign(positiveSign) {
	        if (positiveSign === this._positiveSign) {
	            return this;
	        }
	        return new DecimalStyle(this._zeroDigit, positiveSign, this._negativeSign, this._decimalSeparator);
	    };

	    DecimalStyle.prototype.negativeSign = function negativeSign() {
	        return this._negativeSign;
	    };

	    DecimalStyle.prototype.withNegativeSign = function withNegativeSign(negativeSign) {
	        if (negativeSign === this._negativeSign) {
	            return this;
	        }
	        return new DecimalStyle(this._zeroDigit, this._positiveSign, negativeSign, this._decimalSeparator);
	    };

	    DecimalStyle.prototype.zeroDigit = function zeroDigit() {
	        return this._zeroDigit;
	    };

	    DecimalStyle.prototype.withZeroDigit = function withZeroDigit(zeroDigit) {
	        if (zeroDigit === this._zeroDigit) {
	            return this;
	        }
	        return new DecimalStyle(zeroDigit, this._positiveSign, this._negativeSign, this._decimalSeparator);
	    };

	    DecimalStyle.prototype.decimalSeparator = function decimalSeparator() {
	        return this._decimalSeparator;
	    };

	    DecimalStyle.prototype.withDecimalSeparator = function withDecimalSeparator(decimalSeparator) {
	        if (decimalSeparator === this._decimalSeparator) {
	            return this;
	        }
	        return new DecimalStyle(this._zeroDigit, this._positiveSign, this._negativeSign, decimalSeparator);
	    };

	    DecimalStyle.prototype.convertToDigit = function convertToDigit(char) {
	        var val = char.charCodeAt(0) - this._zeroDigitCharCode;
	        return val >= 0 && val <= 9 ? val : -1;
	    };

	    DecimalStyle.prototype.convertNumberToI18N = function convertNumberToI18N(numericText) {
	        if (this._zeroDigit === '0') {
	            return numericText;
	        }
	        var diff = this._zeroDigitCharCode - '0'.charCodeAt(0);
	        var convertedText = '';
	        for (var i = 0; i < numericText.length; i++) {
	            convertedText += String.fromCharCode(numericText.charCodeAt(i) + diff);
	        }
	        return convertedText;
	    };

	    DecimalStyle.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof DecimalStyle) {
	            return this._zeroDigit === other._zeroDigit && this._positiveSign === other._positiveSign && this._negativeSign === other._negativeSign && this._decimalSeparator === other._decimalSeparator;
	        }
	        return false;
	    };

	    DecimalStyle.prototype.hashCode = function hashCode() {
	        return this._zeroDigit + this._positiveSign + this._negativeSign + this._decimalSeparator;
	    };

	    DecimalStyle.prototype.toString = function toString() {
	        return 'DecimalStyle[' + this._zeroDigit + this._positiveSign + this._negativeSign + this._decimalSeparator + ']';
	    };

	    DecimalStyle.of = function of() {
	        throw new Error('not yet supported');
	    };

	    DecimalStyle.availableLocales = function availableLocales() {
	        throw new Error('not yet supported');
	    };

	    return DecimalStyle;
	}();

	DecimalStyle.STANDARD = new DecimalStyle('0', '+', '-', '.');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TextStyle = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var TextStyle = exports.TextStyle = function (_Enum) {
	    _inherits(TextStyle, _Enum);

	    function TextStyle() {
	        _classCallCheck(this, TextStyle);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    TextStyle.prototype.isStandalone = function isStandalone() {
	        switch (this) {
	            case TextStyle.FULL_STANDALONE:
	            case TextStyle.SHORT_STANDALONE:
	            case TextStyle.NARROW_STANDALONE:
	                return true;
	            default:
	                return false;
	        }
	    };

	    TextStyle.prototype.asStandalone = function asStandalone() {
	        switch (this) {
	            case TextStyle.FULL:
	                return TextStyle.FULL_STANDALONE;
	            case TextStyle.SHORT:
	                return TextStyle.SHORT_STANDALONE;
	            case TextStyle.NARROW:
	                return TextStyle.NARROW_STANDALONE;
	            default:
	                return this;
	        }
	    };

	    TextStyle.prototype.asNormal = function asNormal() {
	        switch (this) {
	            case TextStyle.FULL_STANDALONE:
	                return TextStyle.FULL;
	            case TextStyle.SHORT_STANDALONE:
	                return TextStyle.SHORT;
	            case TextStyle.NARROW_STANDALONE:
	                return TextStyle.NARROW;
	            default:
	                return this;
	        }
	    };

	    return TextStyle;
	}(_Enum2.Enum);

	TextStyle.FULL = new TextStyle('FULL');

	TextStyle.FULL_STANDALONE = new TextStyle('FULL_STANDALONE');

	TextStyle.SHORT = new TextStyle('SHORT');

	TextStyle.SHORT_STANDALONE = new TextStyle('SHORT_STANDALONE');

	TextStyle.NARROW = new TextStyle('NARROW');

	TextStyle.NARROW_STANDALONE = new TextStyle('NARROW_STANDALONE');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.CharLiteralPrinterParser = undefined;

	var _errors = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var CharLiteralPrinterParser = exports.CharLiteralPrinterParser = function () {
	    function CharLiteralPrinterParser(literal) {
	        _classCallCheck(this, CharLiteralPrinterParser);

	        if (literal.length > 1) {
	            throw new _errors.IllegalArgumentException('invalid literal, too long: "' + literal + '"');
	        }
	        this._literal = literal;
	    }

	    CharLiteralPrinterParser.prototype.print = function print(context, buf) {
	        buf.append(this._literal);
	        return true;
	    };

	    CharLiteralPrinterParser.prototype.parse = function parse(context, text, position) {
	        var length = text.length;
	        if (position === length) {
	            return ~position;
	        }
	        var ch = text.charAt(position);
	        if (context.charEquals(this._literal, ch) === false) {
	            return ~position;
	        }
	        return position + this._literal.length;
	    };

	    CharLiteralPrinterParser.prototype.toString = function toString() {
	        if (this._literal === '\'') {
	            return "''";
	        }
	        return "'" + this._literal + "'";
	    };

	    return CharLiteralPrinterParser;
	}();

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var CompositePrinterParser = exports.CompositePrinterParser = function () {
	    function CompositePrinterParser(printerParsers, optional) {
	        _classCallCheck(this, CompositePrinterParser);

	        this._printerParsers = printerParsers;
	        this._optional = optional;
	    }

	    CompositePrinterParser.prototype.withOptional = function withOptional(optional) {
	        if (optional === this._optional) {
	            return this;
	        }
	        return new CompositePrinterParser(this._printerParsers, optional);
	    };

	    CompositePrinterParser.prototype.print = function print(context, buf) {
	        var length = buf.length();
	        if (this._optional) {
	            context.startOptional();
	        }
	        try {
	            for (var i = 0; i < this._printerParsers.length; i++) {
	                var pp = this._printerParsers[i];
	                if (pp.print(context, buf) === false) {
	                    buf.setLength(length);
	                    return true;
	                }
	            }
	        } finally {
	            if (this._optional) {
	                context.endOptional();
	            }
	        }
	        return true;
	    };

	    CompositePrinterParser.prototype.parse = function parse(context, text, position) {
	        if (this._optional) {
	            context.startOptional();
	            var pos = position;
	            for (var i = 0; i < this._printerParsers.length; i++) {
	                var pp = this._printerParsers[i];
	                pos = pp.parse(context, text, pos);
	                if (pos < 0) {
	                    context.endOptional(false);
	                    return position;
	                }
	            }
	            context.endOptional(true);
	            return pos;
	        } else {
	            for (var _i = 0; _i < this._printerParsers.length; _i++) {
	                var _pp = this._printerParsers[_i];
	                position = _pp.parse(context, text, position);
	                if (position < 0) {
	                    break;
	                }
	            }
	            return position;
	        }
	    };

	    CompositePrinterParser.prototype.toString = function toString() {
	        var buf = '';
	        if (this._printerParsers != null) {
	            buf += this._optional ? '[' : '(';
	            for (var i = 0; i < this._printerParsers.length; i++) {
	                var pp = this._printerParsers[i];
	                buf += pp.toString();
	            }
	            buf += this._optional ? ']' : ')';
	        }
	        return buf;
	    };

	    return CompositePrinterParser;
	}();

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.FractionPrinterParser = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var FractionPrinterParser = exports.FractionPrinterParser = function () {
	    function FractionPrinterParser(field, minWidth, maxWidth, decimalPoint) {
	        _classCallCheck(this, FractionPrinterParser);

	        (0, _assert.requireNonNull)(field, 'field');
	        if (field.range().isFixed() === false) {
	            throw new _errors.IllegalArgumentException('Field must have a fixed set of values: ' + field);
	        }
	        if (minWidth < 0 || minWidth > 9) {
	            throw new _errors.IllegalArgumentException('Minimum width must be from 0 to 9 inclusive but was ' + minWidth);
	        }
	        if (maxWidth < 1 || maxWidth > 9) {
	            throw new _errors.IllegalArgumentException('Maximum width must be from 1 to 9 inclusive but was ' + maxWidth);
	        }
	        if (maxWidth < minWidth) {
	            throw new _errors.IllegalArgumentException('Maximum width must exceed or equal the minimum width but ' + maxWidth + ' < ' + minWidth);
	        }
	        this.field = field;
	        this.minWidth = minWidth;
	        this.maxWidth = maxWidth;
	        this.decimalPoint = decimalPoint;
	    }

	    FractionPrinterParser.prototype.print = function print(context, buf) {
	        var value = context.getValue(this.field);
	        if (value === null) {
	            return false;
	        }
	        var symbols = context.symbols();
	        if (value === 0) {
	            if (this.minWidth > 0) {
	                if (this.decimalPoint) {
	                    buf.append(symbols.decimalSeparator());
	                }
	                for (var i = 0; i < this.minWidth; i++) {
	                    buf.append(symbols.zeroDigit());
	                }
	            }
	        } else {
	            var fraction = this.convertToFraction(value, symbols.zeroDigit());
	            var outputScale = Math.min(Math.max(fraction.length, this.minWidth), this.maxWidth);
	            fraction = fraction.substr(0, outputScale);
	            if (fraction * 1 > 0) {
	                while (fraction.length > this.minWidth && fraction[fraction.length - 1] === '0') {
	                    fraction = fraction.substr(0, fraction.length - 1);
	                }
	            }
	            var str = fraction;
	            str = symbols.convertNumberToI18N(str);
	            if (this.decimalPoint) {
	                buf.append(symbols.decimalSeparator());
	            }
	            buf.append(str);
	        }
	        return true;
	    };

	    FractionPrinterParser.prototype.parse = function parse(context, text, position) {
	        var effectiveMin = context.isStrict() ? this.minWidth : 0;
	        var effectiveMax = context.isStrict() ? this.maxWidth : 9;
	        var length = text.length;
	        if (position === length) {
	            return effectiveMin > 0 ? ~position : position;
	        }
	        if (this.decimalPoint) {
	            if (text[position] !== context.symbols().decimalSeparator()) {
	                return effectiveMin > 0 ? ~position : position;
	            }
	            position++;
	        }
	        var minEndPos = position + effectiveMin;
	        if (minEndPos > length) {
	            return ~position;
	        }
	        var maxEndPos = Math.min(position + effectiveMax, length);
	        var total = 0;
	        var pos = position;
	        while (pos < maxEndPos) {
	            var ch = text.charAt(pos++);
	            var digit = context.symbols().convertToDigit(ch);
	            if (digit < 0) {
	                if (pos < minEndPos) {
	                    return ~position;
	                }
	                pos--;
	                break;
	            }
	            total = total * 10 + digit;
	        }
	        var moveLeft = pos - position;
	        var scale = Math.pow(10, moveLeft);
	        var value = this.convertFromFraction(total, scale);
	        return context.setParsedField(this.field, value, position, pos);
	    };

	    FractionPrinterParser.prototype.convertToFraction = function convertToFraction(value, zeroDigit) {
	        var range = this.field.range();
	        range.checkValidValue(value, this.field);
	        var _min = range.minimum();
	        var _range = range.maximum() - _min + 1;
	        var _value = value - _min;
	        var _scaled = _MathUtil.MathUtil.intDiv(_value * 1000000000, _range);
	        var fraction = '' + _scaled;
	        while (fraction.length < 9) {
	            fraction = zeroDigit + fraction;
	        }
	        return fraction;
	    };

	    FractionPrinterParser.prototype.convertFromFraction = function convertFromFraction(total, scale) {
	        var range = this.field.range();
	        var _min = range.minimum();
	        var _range = range.maximum() - _min + 1;
	        var _value = _MathUtil.MathUtil.intDiv(total * _range, scale);
	        return _value;
	    };

	    FractionPrinterParser.prototype.toString = function toString() {
	        var decimal = this.decimalPoint ? ',DecimalPoint' : '';
	        return 'Fraction(' + this.field + ',' + this.minWidth + ',' + this.maxWidth + decimal + ')';
	    };

	    return FractionPrinterParser;
	}();

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ReducedPrinterParser = exports.NumberPrinterParser = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _IsoChronology = __webpack_require__(9);

	var _SignStyle = __webpack_require__(39);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var MAX_WIDTH = 15;

	var EXCEED_POINTS = [0, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];

	var NumberPrinterParser = exports.NumberPrinterParser = function () {
	    function NumberPrinterParser(field, minWidth, maxWidth, signStyle) {
	        var subsequentWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

	        _classCallCheck(this, NumberPrinterParser);

	        this._field = field;
	        this._minWidth = minWidth;
	        this._maxWidth = maxWidth;
	        this._signStyle = signStyle;
	        this._subsequentWidth = subsequentWidth;
	    }

	    NumberPrinterParser.prototype.field = function field() {
	        return this._field;
	    };

	    NumberPrinterParser.prototype.minWidth = function minWidth() {
	        return this._minWidth;
	    };

	    NumberPrinterParser.prototype.maxWidth = function maxWidth() {
	        return this._maxWidth;
	    };

	    NumberPrinterParser.prototype.signStyle = function signStyle() {
	        return this._signStyle;
	    };

	    NumberPrinterParser.prototype.withFixedWidth = function withFixedWidth() {
	        if (this._subsequentWidth === -1) {
	            return this;
	        }
	        return new NumberPrinterParser(this._field, this._minWidth, this._maxWidth, this._signStyle, -1);
	    };

	    NumberPrinterParser.prototype.withSubsequentWidth = function withSubsequentWidth(subsequentWidth) {
	        return new NumberPrinterParser(this._field, this._minWidth, this._maxWidth, this._signStyle, this._subsequentWidth + subsequentWidth);
	    };

	    NumberPrinterParser.prototype._isFixedWidth = function _isFixedWidth() {
	        return this._subsequentWidth === -1 || this._subsequentWidth > 0 && this._minWidth === this._maxWidth && this._signStyle === _SignStyle.SignStyle.NOT_NEGATIVE;
	    };

	    NumberPrinterParser.prototype.print = function print(context, buf) {
	        var value = context.getValue(this._field);
	        if (value == null) {
	            return false;
	        }
	        var symbols = context.symbols();
	        var str = '' + Math.abs(value);
	        if (str.length > this._maxWidth) {
	            throw new _errors.DateTimeException('Field ' + this._field + ' cannot be printed as the value ' + value + ' exceeds the maximum print width of ' + this._maxWidth);
	        }
	        str = symbols.convertNumberToI18N(str);

	        if (value >= 0) {
	            switch (this._signStyle) {
	                case _SignStyle.SignStyle.EXCEEDS_PAD:
	                    if (this._minWidth < MAX_WIDTH && value >= EXCEED_POINTS[this._minWidth]) {
	                        buf.append(symbols.positiveSign());
	                    }
	                    break;
	                case _SignStyle.SignStyle.ALWAYS:
	                    buf.append(symbols.positiveSign());
	                    break;
	            }
	        } else {
	            switch (this._signStyle) {
	                case _SignStyle.SignStyle.NORMAL:
	                case _SignStyle.SignStyle.EXCEEDS_PAD:
	                case _SignStyle.SignStyle.ALWAYS:
	                    buf.append(symbols.negativeSign());
	                    break;
	                case _SignStyle.SignStyle.NOT_NEGATIVE:
	                    throw new _errors.DateTimeException('Field ' + this._field + ' cannot be printed as the value ' + value + ' cannot be negative according to the SignStyle');
	            }
	        }
	        for (var i = 0; i < this._minWidth - str.length; i++) {
	            buf.append(symbols.zeroDigit());
	        }
	        buf.append(str);
	        return true;
	    };

	    NumberPrinterParser.prototype.parse = function parse(context, text, position) {
	        var length = text.length;
	        if (position === length) {
	            return ~position;
	        }
	        (0, _assert.assert)(position >= 0 && position < length);
	        var sign = text.charAt(position);
	        var negative = false;
	        var positive = false;
	        if (sign === context.symbols().positiveSign()) {
	            if (this._signStyle.parse(true, context.isStrict(), this._minWidth === this._maxWidth) === false) {
	                return ~position;
	            }
	            positive = true;
	            position++;
	        } else if (sign === context.symbols().negativeSign()) {
	            if (this._signStyle.parse(false, context.isStrict(), this._minWidth === this._maxWidth) === false) {
	                return ~position;
	            }
	            negative = true;
	            position++;
	        } else {
	            if (this._signStyle === _SignStyle.SignStyle.ALWAYS && context.isStrict()) {
	                return ~position;
	            }
	        }
	        var effMinWidth = context.isStrict() || this._isFixedWidth() ? this._minWidth : 1;
	        var minEndPos = position + effMinWidth;
	        if (minEndPos > length) {
	            return ~position;
	        }
	        var effMaxWidth = (context.isStrict() || this._isFixedWidth() ? this._maxWidth : 9) + Math.max(this._subsequentWidth, 0);
	        var total = 0;
	        var pos = position;
	        for (var pass = 0; pass < 2; pass++) {
	            var maxEndPos = Math.min(pos + effMaxWidth, length);
	            while (pos < maxEndPos) {
	                var ch = text.charAt(pos++);
	                var digit = context.symbols().convertToDigit(ch);
	                if (digit < 0) {
	                    pos--;
	                    if (pos < minEndPos) {
	                        return ~position;
	                    }
	                    break;
	                }
	                if (pos - position > MAX_WIDTH) {
	                    throw new _errors.ArithmeticException('number text exceeds length');
	                } else {
	                    total = total * 10 + digit;
	                }
	            }
	            if (this._subsequentWidth > 0 && pass === 0) {
	                var parseLen = pos - position;
	                effMaxWidth = Math.max(effMinWidth, parseLen - this._subsequentWidth);
	                pos = position;
	                total = 0;
	            } else {
	                break;
	            }
	        }
	        if (negative) {
	            if (total === 0 && context.isStrict()) {
	                return ~(position - 1);
	            }
	            if (total !== 0) {
	                total = -total;
	            }
	        } else if (this._signStyle === _SignStyle.SignStyle.EXCEEDS_PAD && context.isStrict()) {
	            var _parseLen = pos - position;
	            if (positive) {
	                if (_parseLen <= this._minWidth) {
	                    return ~(position - 1);
	                }
	            } else {
	                if (_parseLen > this._minWidth) {
	                    return ~position;
	                }
	            }
	        }
	        return this._setValue(context, total, position, pos);
	    };

	    NumberPrinterParser.prototype._setValue = function _setValue(context, value, errorPos, successPos) {
	        return context.setParsedField(this._field, value, errorPos, successPos);
	    };

	    NumberPrinterParser.prototype.toString = function toString() {
	        if (this._minWidth === 1 && this._maxWidth === MAX_WIDTH && this._signStyle === _SignStyle.SignStyle.NORMAL) {
	            return 'Value(' + this._field + ')';
	        }
	        if (this._minWidth === this._maxWidth && this._signStyle === _SignStyle.SignStyle.NOT_NEGATIVE) {
	            return 'Value(' + this._field + ',' + this._minWidth + ')';
	        }
	        return 'Value(' + this._field + ',' + this._minWidth + ',' + this._maxWidth + ',' + this._signStyle + ')';
	    };

	    return NumberPrinterParser;
	}();

	var ReducedPrinterParser = exports.ReducedPrinterParser = function (_NumberPrinterParser) {
	    _inherits(ReducedPrinterParser, _NumberPrinterParser);

	    function ReducedPrinterParser(field, width, maxWidth, baseValue, baseDate) {
	        _classCallCheck(this, ReducedPrinterParser);

	        var _this = _possibleConstructorReturn(this, _NumberPrinterParser.call(this, field, width, maxWidth, _SignStyle.SignStyle.NOT_NEGATIVE));

	        if (width < 1 || width > 10) {
	            throw new _errors.IllegalArgumentException('The width must be from 1 to 10 inclusive but was ' + width);
	        }
	        if (maxWidth < 1 || maxWidth > 10) {
	            throw new _errors.IllegalArgumentException('The maxWidth must be from 1 to 10 inclusive but was ' + maxWidth);
	        }
	        if (maxWidth < width) {
	            throw new _errors.IllegalArgumentException('The maxWidth must be greater than the width');
	        }
	        if (baseDate === null) {
	            if (field.range().isValidValue(baseValue) === false) {
	                throw new _errors.IllegalArgumentException('The base value must be within the range of the field');
	            }
	            if (baseValue + EXCEED_POINTS[width] > _MathUtil.MathUtil.MAX_SAFE_INTEGER) {
	                throw new _errors.DateTimeException('Unable to add printer-parser as the range exceeds the capacity of an int');
	            }
	        }
	        _this._baseValue = baseValue;
	        _this._baseDate = baseDate;
	        return _this;
	    }

	    ReducedPrinterParser.prototype.getValue = function getValue(context, value) {
	        var absValue = Math.abs(value);
	        var baseValue = this._baseValue;
	        if (this._baseDate !== null) {
	            context.temporal();
	            var chrono = _IsoChronology.IsoChronology.INSTANCE;
	            baseValue = chrono.date(this._baseDate).get(this._field);
	        }
	        if (value >= baseValue && value < baseValue + EXCEED_POINTS[this._minWidth]) {
	            return absValue % EXCEED_POINTS[this._minWidth];
	        }
	        return absValue % EXCEED_POINTS[this._maxWidth];
	    };

	    ReducedPrinterParser.prototype._setValue = function _setValue(context, value, errorPos, successPos) {
	        var baseValue = this._baseValue;
	        if (this._baseDate != null) {
	            var chrono = context.getEffectiveChronology();
	            baseValue = chrono.date(this._baseDate).get(this._field);
	            context.addChronologyChangedParser(this, value, errorPos, successPos);
	        }
	        var parseLen = successPos - errorPos;
	        if (parseLen === this._minWidth && value >= 0) {
	            var range = EXCEED_POINTS[this._minWidth];
	            var lastPart = baseValue % range;
	            var basePart = baseValue - lastPart;
	            if (baseValue > 0) {
	                value = basePart + value;
	            } else {
	                value = basePart - value;
	            }
	            if (value < baseValue) {
	                value += range;
	            }
	        }
	        return context.setParsedField(this._field, value, errorPos, successPos);
	    };

	    ReducedPrinterParser.prototype.withFixedWidth = function withFixedWidth() {
	        if (this._subsequentWidth === -1) {
	            return this;
	        }
	        return new ReducedPrinterParser(this._field, this._minWidth, this._maxWidth, this._baseValue, this._baseDate, -1);
	    };

	    ReducedPrinterParser.prototype.withSubsequentWidth = function withSubsequentWidth(subsequentWidth) {
	        return new ReducedPrinterParser(this._field, this._minWidth, this._maxWidth, this._baseValue, this._baseDate, this._subsequentWidth + subsequentWidth);
	    };

	    ReducedPrinterParser.prototype.isFixedWidth = function isFixedWidth(context) {
	        if (context.isStrict() === false) {
	            return false;
	        }
	        return _NumberPrinterParser.prototype.isFixedWidth.call(this, context);
	    };

	    ReducedPrinterParser.prototype.toString = function toString() {
	        return 'ReducedValue(' + this._field + ',' + this._minWidth + ',' + this._maxWidth + ',' + (this._baseDate != null ? this._baseDate : this._baseValue) + ')';
	    };

	    return ReducedPrinterParser;
	}(NumberPrinterParser);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.OffsetIdPrinterParser = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var PATTERNS = ['+HH', '+HHmm', '+HH:mm', '+HHMM', '+HH:MM', '+HHMMss', '+HH:MM:ss', '+HHMMSS', '+HH:MM:SS'];

	var OffsetIdPrinterParser = exports.OffsetIdPrinterParser = function () {
	    function OffsetIdPrinterParser(noOffsetText, pattern) {
	        _classCallCheck(this, OffsetIdPrinterParser);

	        (0, _assert.requireNonNull)(noOffsetText, 'noOffsetText');
	        (0, _assert.requireNonNull)(pattern, 'pattern');
	        this.noOffsetText = noOffsetText;
	        this.type = this._checkPattern(pattern);
	    }

	    OffsetIdPrinterParser.prototype._checkPattern = function _checkPattern(pattern) {
	        for (var i = 0; i < PATTERNS.length; i++) {
	            if (PATTERNS[i] === pattern) {
	                return i;
	            }
	        }
	        throw new _errors.IllegalArgumentException('Invalid zone offset pattern: ' + pattern);
	    };

	    OffsetIdPrinterParser.prototype.print = function print(context, buf) {
	        var offsetSecs = context.getValue(_ChronoField.ChronoField.OFFSET_SECONDS);
	        if (offsetSecs == null) {
	            return false;
	        }
	        var totalSecs = _MathUtil.MathUtil.safeToInt(offsetSecs);
	        if (totalSecs === 0) {
	            buf.append(this.noOffsetText);
	        } else {
	            var absHours = Math.abs(_MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(totalSecs, 3600), 100));
	            var absMinutes = Math.abs(_MathUtil.MathUtil.intMod(_MathUtil.MathUtil.intDiv(totalSecs, 60), 60));
	            var absSeconds = Math.abs(_MathUtil.MathUtil.intMod(totalSecs, 60));
	            var bufPos = buf.length();
	            var output = absHours;
	            buf.append(totalSecs < 0 ? '-' : '+').appendChar(_MathUtil.MathUtil.intDiv(absHours, 10) + '0').appendChar(_MathUtil.MathUtil.intMod(absHours, 10) + '0');
	            if (this.type >= 3 || this.type >= 1 && absMinutes > 0) {
	                buf.append(this.type % 2 === 0 ? ':' : '').appendChar(_MathUtil.MathUtil.intDiv(absMinutes, 10) + '0').appendChar(absMinutes % 10 + '0');
	                output += absMinutes;
	                if (this.type >= 7 || this.type >= 5 && absSeconds > 0) {
	                    buf.append(this.type % 2 === 0 ? ':' : '').appendChar(_MathUtil.MathUtil.intDiv(absSeconds, 10) + '0').appendChar(absSeconds % 10 + '0');
	                    output += absSeconds;
	                }
	            }
	            if (output === 0) {
	                buf.setLength(bufPos);
	                buf.append(this.noOffsetText);
	            }
	        }
	        return true;
	    };

	    OffsetIdPrinterParser.prototype.parse = function parse(context, text, position) {
	        var length = text.length;
	        var noOffsetLen = this.noOffsetText.length;
	        if (noOffsetLen === 0) {
	            if (position === length) {
	                return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS, 0, position, position);
	            }
	        } else {
	            if (position === length) {
	                return ~position;
	            }
	            if (context.subSequenceEquals(text, position, this.noOffsetText, 0, noOffsetLen)) {
	                return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS, 0, position, position + noOffsetLen);
	            }
	        }

	        var sign = text[position];
	        if (sign === '+' || sign === '-') {
	            var negative = sign === '-' ? -1 : 1;
	            var array = [0, 0, 0, 0];
	            array[0] = position + 1;
	            if ((this._parseNumber(array, 1, text, true) || this._parseNumber(array, 2, text, this.type >= 3) || this._parseNumber(array, 3, text, false)) === false) {
	                var offsetSecs = _MathUtil.MathUtil.safeZero(negative * (array[1] * 3600 + array[2] * 60 + array[3]));
	                return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS, offsetSecs, position, array[0]);
	            }
	        }

	        if (noOffsetLen === 0) {
	            return context.setParsedField(_ChronoField.ChronoField.OFFSET_SECONDS, 0, position, position + noOffsetLen);
	        }
	        return ~position;
	    };

	    OffsetIdPrinterParser.prototype._parseNumber = function _parseNumber(array, arrayIndex, parseText, required) {
	        if ((this.type + 3) / 2 < arrayIndex) {
	            return false;
	        }
	        var pos = array[0];
	        if (this.type % 2 === 0 && arrayIndex > 1) {
	            if (pos + 1 > parseText.length || parseText[pos] !== ':') {
	                return required;
	            }
	            pos++;
	        }
	        if (pos + 2 > parseText.length) {
	            return required;
	        }
	        var ch1 = parseText[pos++];
	        var ch2 = parseText[pos++];
	        if (ch1 < '0' || ch1 > '9' || ch2 < '0' || ch2 > '9') {
	            return required;
	        }
	        var value = (ch1.charCodeAt(0) - 48) * 10 + (ch2.charCodeAt(0) - 48);
	        if (value < 0 || value > 59) {
	            return required;
	        }
	        array[arrayIndex] = value;
	        array[0] = pos;
	        return false;
	    };

	    OffsetIdPrinterParser.prototype.toString = function toString() {
	        var converted = this.noOffsetText.replace('\'', '\'\'');
	        return 'Offset(' + PATTERNS[this.type] + ',\'' + converted + '\')';
	    };

	    return OffsetIdPrinterParser;
	}();

	OffsetIdPrinterParser.INSTANCE_ID = new OffsetIdPrinterParser('Z', '+HH:MM:ss');
	OffsetIdPrinterParser.PATTERNS = PATTERNS;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.PadPrinterParserDecorator = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var PadPrinterParserDecorator = exports.PadPrinterParserDecorator = function () {
	    function PadPrinterParserDecorator(printerParser, padWidth, padChar) {
	        _classCallCheck(this, PadPrinterParserDecorator);

	        this._printerParser = printerParser;
	        this._padWidth = padWidth;
	        this._padChar = padChar;
	    }

	    PadPrinterParserDecorator.prototype.print = function print(context, buf) {
	        var preLen = buf.length();
	        if (this._printerParser.print(context, buf) === false) {
	            return false;
	        }
	        var len = buf.length() - preLen;
	        if (len > this._padWidth) {
	            throw new _errors.DateTimeException('Cannot print as output of ' + len + ' characters exceeds pad width of ' + this._padWidth);
	        }
	        for (var i = 0; i < this._padWidth - len; i++) {
	            buf.insert(preLen, this._padChar);
	        }
	        return true;
	    };

	    PadPrinterParserDecorator.prototype.parse = function parse(context, text, position) {
	        var strict = context.isStrict();
	        var caseSensitive = context.isCaseSensitive();

	        (0, _assert.assert)(!(position > text.length));
	        (0, _assert.assert)(position >= 0);
	        if (position === text.length) {
	            return ~position;
	        }
	        var endPos = position + this._padWidth;
	        if (endPos > text.length) {
	            if (strict) {
	                return ~position;
	            }
	            endPos = text.length;
	        }
	        var pos = position;
	        while (pos < endPos && (caseSensitive ? text[pos] === this._padChar : context.charEquals(text[pos], this._padChar))) {
	            pos++;
	        }
	        text = text.substring(0, endPos);
	        var resultPos = this._printerParser.parse(context, text, pos);
	        if (resultPos !== endPos && strict) {
	            return ~(position + pos);
	        }
	        return resultPos;
	    };

	    PadPrinterParserDecorator.prototype.toString = function toString() {
	        return 'Pad(' + this._printerParser + ',' + this._padWidth + (this._padChar === ' ' ? ')' : ',\'' + this._padChar + '\')');
	    };

	    return PadPrinterParserDecorator;
	}();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SettingsParser = undefined;

	var _Enum2 = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SettingsParser = exports.SettingsParser = function (_Enum) {
	    _inherits(SettingsParser, _Enum);

	    function SettingsParser() {
	        _classCallCheck(this, SettingsParser);

	        return _possibleConstructorReturn(this, _Enum.apply(this, arguments));
	    }

	    SettingsParser.prototype.print = function print() {
	        return true;
	    };

	    SettingsParser.prototype.parse = function parse(context, text, position) {
	        switch (this) {
	            case SettingsParser.SENSITIVE:
	                context.setCaseSensitive(true);break;
	            case SettingsParser.INSENSITIVE:
	                context.setCaseSensitive(false);break;
	            case SettingsParser.STRICT:
	                context.setStrict(true);break;
	            case SettingsParser.LENIENT:
	                context.setStrict(false);break;
	        }
	        return position;
	    };

	    SettingsParser.prototype.toString = function toString() {
	        switch (this) {
	            case SettingsParser.SENSITIVE:
	                return 'ParseCaseSensitive(true)';
	            case SettingsParser.INSENSITIVE:
	                return 'ParseCaseSensitive(false)';
	            case SettingsParser.STRICT:
	                return 'ParseStrict(true)';
	            case SettingsParser.LENIENT:
	                return 'ParseStrict(false)';
	        }
	    };

	    return SettingsParser;
	}(_Enum2.Enum);

	SettingsParser.SENSITIVE = new SettingsParser('SENSITIVE');
	SettingsParser.INSENSITIVE = new SettingsParser('INSENSITIVE');
	SettingsParser.STRICT = new SettingsParser('STRICT');
	SettingsParser.LENIENT = new SettingsParser('LENIENT');

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.StringLiteralPrinterParser = undefined;

	var _assert = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var StringLiteralPrinterParser = exports.StringLiteralPrinterParser = function () {
	    function StringLiteralPrinterParser(literal) {
	        _classCallCheck(this, StringLiteralPrinterParser);

	        this._literal = literal;
	    }

	    StringLiteralPrinterParser.prototype.print = function print(context, buf) {
	        buf.append(this._literal);
	        return true;
	    };

	    StringLiteralPrinterParser.prototype.parse = function parse(context, text, position) {
	        var length = text.length;
	        (0, _assert.assert)(!(position > length || position < 0));

	        if (context.subSequenceEquals(text, position, this._literal, 0, this._literal.length) === false) {
	            return ~position;
	        }
	        return position + this._literal.length;
	    };

	    StringLiteralPrinterParser.prototype.toString = function toString() {
	        var converted = this._literal.replace("'", "''");
	        return '\'' + converted + '\'';
	    };

	    return StringLiteralPrinterParser;
	}();

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneIdPrinterParser = undefined;

	var _ZoneOffset = __webpack_require__(26);

	var _ZoneId = __webpack_require__(27);

	var _ZoneRegion = __webpack_require__(53);

	var _ChronoField = __webpack_require__(12);

	var _ZoneRulesProvider = __webpack_require__(54);

	var _OffsetIdPrinterParser = __webpack_require__(48);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneIdPrinterParser = exports.ZoneIdPrinterParser = function () {
	    function ZoneIdPrinterParser(query, description) {
	        _classCallCheck(this, ZoneIdPrinterParser);

	        this.query = query;
	        this.description = description;
	    }

	    ZoneIdPrinterParser.prototype.print = function print(context, buf) {
	        var zone = context.getValueQuery(this.query);
	        if (zone == null) {
	            return false;
	        }
	        buf.append(zone.id());
	        return true;
	    };

	    ZoneIdPrinterParser.prototype.parse = function parse(context, text, position) {
	        var length = text.length;
	        if (position > length) {
	            return ~position;
	        }
	        if (position === length) {
	            return ~position;
	        }

	        var nextChar = text.charAt(position);
	        if (nextChar === '+' || nextChar === '-') {
	            var newContext = context.copy();
	            var endPos = _OffsetIdPrinterParser.OffsetIdPrinterParser.INSTANCE_ID.parse(newContext, text, position);
	            if (endPos < 0) {
	                return endPos;
	            }
	            var offset = newContext.getParsed(_ChronoField.ChronoField.OFFSET_SECONDS);
	            var zone = _ZoneOffset.ZoneOffset.ofTotalSeconds(offset);
	            context.setParsedZone(zone);
	            return endPos;
	        } else if (length >= position + 2) {
	            var nextNextChar = text.charAt(position + 1);
	            if (context.charEquals(nextChar, 'U') && context.charEquals(nextNextChar, 'T')) {
	                if (length >= position + 3 && context.charEquals(text.charAt(position + 2), 'C')) {
	                    return this._parsePrefixedOffset(context, text, position, position + 3);
	                }
	                return this._parsePrefixedOffset(context, text, position, position + 2);
	            } else if (context.charEquals(nextChar, 'G') && length >= position + 3 && context.charEquals(nextNextChar, 'M') && context.charEquals(text.charAt(position + 2), 'T')) {
	                return this._parsePrefixedOffset(context, text, position, position + 3);
	            }
	        }

	        if (text.substr(position, 6) === 'SYSTEM') {
	            context.setParsedZone(_ZoneId.ZoneId.systemDefault());
	            return position + 6;
	        }

	        if (context.charEquals(nextChar, 'Z')) {
	            context.setParsedZone(_ZoneOffset.ZoneOffset.UTC);
	            return position + 1;
	        }

	        var availableZoneIds = _ZoneRulesProvider.ZoneRulesProvider.getAvailableZoneIds();
	        if (zoneIdTree.size !== availableZoneIds.length) {
	            zoneIdTree = ZoneIdTree.createTreeMap(availableZoneIds);
	        }

	        var maxParseLength = length - position;
	        var treeMap = zoneIdTree.treeMap;
	        var parsedZoneId = null;
	        var parseLength = 0;
	        while (treeMap != null) {
	            var parsedSubZoneId = text.substr(position, Math.min(treeMap.length, maxParseLength));
	            treeMap = treeMap.get(parsedSubZoneId);
	            if (treeMap != null && treeMap.isLeaf) {
	                parsedZoneId = parsedSubZoneId;
	                parseLength = treeMap.length;
	            }
	        }
	        if (parsedZoneId != null) {
	            context.setParsedZone(_ZoneRegion.ZoneRegion.ofId(parsedZoneId));
	            return position + parseLength;
	        }

	        return ~position;
	    };

	    ZoneIdPrinterParser.prototype._parsePrefixedOffset = function _parsePrefixedOffset(context, text, prefixPos, position) {
	        var prefix = text.substring(prefixPos, position).toUpperCase();
	        var newContext = context.copy();
	        if (position < text.length && context.charEquals(text.charAt(position), 'Z')) {
	            context.setParsedZone(_ZoneId.ZoneId.ofOffset(prefix, _ZoneOffset.ZoneOffset.UTC));
	            return position;
	        }
	        var endPos = _OffsetIdPrinterParser.OffsetIdPrinterParser.INSTANCE_ID.parse(newContext, text, position);
	        if (endPos < 0) {
	            context.setParsedZone(_ZoneId.ZoneId.ofOffset(prefix, _ZoneOffset.ZoneOffset.UTC));
	            return position;
	        }
	        var offsetSecs = newContext.getParsed(_ChronoField.ChronoField.OFFSET_SECONDS);
	        var offset = _ZoneOffset.ZoneOffset.ofTotalSeconds(offsetSecs);
	        context.setParsedZone(_ZoneId.ZoneId.ofOffset(prefix, offset));
	        return endPos;
	    };

	    ZoneIdPrinterParser.prototype.toString = function toString() {
	        return this.description;
	    };

	    return ZoneIdPrinterParser;
	}();

	var ZoneIdTree = function () {
	    ZoneIdTree.createTreeMap = function createTreeMap(availableZoneIds) {
	        var sortedZoneIds = availableZoneIds.sort(function (a, b) {
	            return a.length - b.length;
	        });
	        var treeMap = new ZoneIdTreeMap(sortedZoneIds[0].length, false);
	        for (var i = 0; i < sortedZoneIds.length; i++) {
	            treeMap.add(sortedZoneIds[i]);
	        }
	        return new ZoneIdTree(sortedZoneIds.length, treeMap);
	    };

	    function ZoneIdTree(size, treeMap) {
	        _classCallCheck(this, ZoneIdTree);

	        this.size = size;
	        this.treeMap = treeMap;
	    }

	    return ZoneIdTree;
	}();

	var ZoneIdTreeMap = function () {
	    function ZoneIdTreeMap() {
	        var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var isLeaf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        _classCallCheck(this, ZoneIdTreeMap);

	        this.length = length;
	        this.isLeaf = isLeaf;
	        this._treeMap = {};
	    }

	    ZoneIdTreeMap.prototype.add = function add(zoneId) {
	        var idLength = zoneId.length;
	        if (idLength === this.length) {
	            this._treeMap[zoneId] = new ZoneIdTreeMap(idLength, true);
	        } else if (idLength > this.length) {
	            var subZoneId = zoneId.substr(0, this.length);
	            var subTreeMap = this._treeMap[subZoneId];
	            if (subTreeMap == null) {
	                subTreeMap = new ZoneIdTreeMap(idLength, false);
	                this._treeMap[subZoneId] = subTreeMap;
	            }
	            subTreeMap.add(zoneId);
	        }
	    };

	    ZoneIdTreeMap.prototype.get = function get(zoneId) {
	        return this._treeMap[zoneId];
	    };

	    return ZoneIdTreeMap;
	}();

	var zoneIdTree = new ZoneIdTree([]);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneRegion = undefined;

	var _ZoneId2 = __webpack_require__(27);

	var _ZoneRulesProvider = __webpack_require__(54);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ZoneRegion = exports.ZoneRegion = function (_ZoneId) {
	  _inherits(ZoneRegion, _ZoneId);

	  ZoneRegion.ofId = function ofId(zoneId) {
	    var rules = _ZoneRulesProvider.ZoneRulesProvider.getRules(zoneId);
	    return new ZoneRegion(zoneId, rules);
	  };

	  function ZoneRegion(id, rules) {
	    _classCallCheck(this, ZoneRegion);

	    var _this = _possibleConstructorReturn(this, _ZoneId.call(this));

	    _this._id = id;
	    _this._rules = rules;
	    return _this;
	  }

	  ZoneRegion.prototype.id = function id() {
	    return this._id;
	  };

	  ZoneRegion.prototype.rules = function rules() {
	    return this._rules;
	  };

	  return ZoneRegion;
	}(_ZoneId2.ZoneId);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneRulesProvider = undefined;

	var _errors = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneRulesProvider = exports.ZoneRulesProvider = function () {
	  function ZoneRulesProvider() {
	    _classCallCheck(this, ZoneRulesProvider);
	  }

	  ZoneRulesProvider.getRules = function getRules(zoneId) {
	    throw new _errors.DateTimeException('unsupported ZoneId:' + zoneId);
	  };

	  ZoneRulesProvider.getAvailableZoneIds = function getAvailableZoneIds() {
	    return [];
	  };

	  return ZoneRulesProvider;
	}();

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Year = undefined;
	exports._init = _init;

	var _errors = __webpack_require__(3);

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Clock = __webpack_require__(1);

	var _DateTimeFormatter = __webpack_require__(31);

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	var _IsoChronology = __webpack_require__(9);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(24);

	var _MonthDay = __webpack_require__(56);

	var _SignStyle = __webpack_require__(39);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalAccessor = __webpack_require__(21);

	var _TemporalAmount = __webpack_require__(15);

	var _TemporalField = __webpack_require__(18);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalQuery = __webpack_require__(23);

	var _TemporalUnit = __webpack_require__(16);

	var _YearConstants = __webpack_require__(17);

	var _YearMonth = __webpack_require__(57);

	var _ZoneId = __webpack_require__(27);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Year = function (_Temporal) {
	    _inherits(Year, _Temporal);

	    function Year(value) {
	        _classCallCheck(this, Year);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._year = value;
	        return _this;
	    }

	    Year.prototype.value = function value() {
	        return this._year;
	    };

	    Year.now = function now() {
	        var zoneIdOrClock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

	        if (zoneIdOrClock === undefined) {
	            return Year.now0();
	        } else if (zoneIdOrClock instanceof _ZoneId.ZoneId) {
	            return Year.nowZoneId(zoneIdOrClock);
	        } else {
	            return Year.nowClock(zoneIdOrClock);
	        }
	    };

	    Year.now0 = function now0() {
	        return Year.nowClock(_Clock.Clock.systemDefaultZone());
	    };

	    Year.nowZoneId = function nowZoneId(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        (0, _assert.requireInstance)(zone, _ZoneId.ZoneId, 'zone');
	        return Year.nowClock(_Clock.Clock.system(zone));
	    };

	    Year.nowClock = function nowClock(clock) {
	        (0, _assert.requireNonNull)(clock, 'clock');
	        (0, _assert.requireInstance)(clock, _Clock.Clock, 'clock');
	        var now = _LocalDate.LocalDate.now(clock);
	        return Year.of(now.year());
	    };

	    Year.of = function of(isoYear) {
	        (0, _assert.requireNonNull)(isoYear, 'isoYear');
	        _ChronoField.ChronoField.YEAR.checkValidValue(isoYear);
	        return new Year(isoYear);
	    };

	    Year.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireInstance)(temporal, _TemporalAccessor.TemporalAccessor, 'temporal');
	        if (temporal instanceof Year) {
	            return temporal;
	        }
	        try {
	            return Year.of(temporal.get(_ChronoField.ChronoField.YEAR));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain Year from TemporalAccessor: ' + temporal + ', type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    Year.parse = function parse(text, formatter) {
	        if (arguments.length <= 1) {
	            return Year.parseText(text);
	        } else {
	            return Year.parseTextFormatter(text, formatter);
	        }
	    };

	    Year.parseText = function parseText(text) {
	        (0, _assert.requireNonNull)(text, 'text');
	        return Year.parse(text, PARSER);
	    };

	    Year.parseTextFormatter = function parseTextFormatter(text) {
	        var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PARSER;

	        (0, _assert.requireNonNull)(text, 'text');
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.parse(text, Year.FROM);
	    };

	    Year.isLeap = function isLeap(year) {
	        return _MathUtil.MathUtil.intMod(year, 4) === 0 && (_MathUtil.MathUtil.intMod(year, 100) !== 0 || _MathUtil.MathUtil.intMod(year, 400) === 0);
	    };

	    Year.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (arguments.length === 1 && fieldOrUnit instanceof _TemporalField.TemporalField) {
	            return this.isSupportedField(fieldOrUnit);
	        } else {
	            return this.isSupportedUnit(fieldOrUnit);
	        }
	    };

	    Year.prototype.isSupportedField = function isSupportedField(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.YEAR || field === _ChronoField.ChronoField.YEAR_OF_ERA || field === _ChronoField.ChronoField.ERA;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    Year.prototype.isSupportedUnit = function isSupportedUnit(unit) {
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            return unit === _ChronoUnit.ChronoUnit.YEARS || unit === _ChronoUnit.ChronoUnit.DECADES || unit === _ChronoUnit.ChronoUnit.CENTURIES || unit === _ChronoUnit.ChronoUnit.MILLENNIA || unit === _ChronoUnit.ChronoUnit.ERAS;
	        }
	        return unit != null && unit.isSupportedBy(this);
	    };

	    Year.prototype.range = function range(field) {
	        if (this.isSupported(field)) {
	            return field.range();
	        } else if (field instanceof _ChronoField.ChronoField) {
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return _Temporal.prototype.range.call(this, field);
	    };

	    Year.prototype.get = function get(field) {
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    Year.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this._year < 1 ? 1 - this._year : this._year;
	                case _ChronoField.ChronoField.YEAR:
	                    return this._year;
	                case _ChronoField.ChronoField.ERA:
	                    return this._year < 1 ? 0 : 1;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    Year.prototype.isLeap = function isLeap() {
	        return Year.isLeap(this._year);
	    };

	    Year.prototype.with = function _with(adjusterOrFieldOrNumber, value) {
	        if (arguments.length === 2 && adjusterOrFieldOrNumber instanceof _TemporalField.TemporalField) {
	            return this.withFieldValue(adjusterOrFieldOrNumber, value);
	        } else {
	            return this.withAdjuster(adjusterOrFieldOrNumber);
	        }
	    };

	    Year.prototype.withAdjuster = function withAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    Year.prototype.withFieldValue = function withFieldValue(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            field.checkValidValue(newValue);
	            switch (field) {
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return Year.of(this._year < 1 ? 1 - newValue : newValue);
	                case _ChronoField.ChronoField.YEAR:
	                    return Year.of(newValue);
	                case _ChronoField.ChronoField.ERA:
	                    return this.getLong(_ChronoField.ChronoField.ERA) === newValue ? this : Year.of(1 - this._year);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    Year.prototype.plus = function plus(amountOrNumber, unit) {
	        if (arguments.length === 1) {
	            return this.plusAmount(amountOrNumber);
	        } else {
	            return this.plusAmountToAddUnit(amountOrNumber, unit);
	        }
	    };

	    Year.prototype.plusAmount = function plusAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        (0, _assert.requireInstance)(amount, _TemporalAmount.TemporalAmount, 'amount');
	        return amount.addTo(this);
	    };

	    Year.prototype.plusAmountToAddUnit = function plusAmountToAddUnit(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(amountToAdd, 'amountToAdd');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return this.plusYears(amountToAdd);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 10));
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 100));
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 1000));
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return this.with(_ChronoField.ChronoField.ERA, _MathUtil.MathUtil.safeAdd(this.getLong(_ChronoField.ChronoField.ERA), amountToAdd));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    Year.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        return Year.of(_ChronoField.ChronoField.YEAR.checkValidIntValue(_MathUtil.MathUtil.safeAdd(this._year, yearsToAdd)));
	    };

	    Year.prototype.minus = function minus(amountOrNumber, unit) {
	        if (arguments.length === 1) {
	            return this.minusAmount(amountOrNumber);
	        } else {
	            return this.minusAmountToSubtractUnit(amountOrNumber, unit);
	        }
	    };

	    Year.prototype.minusAmount = function minusAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        (0, _assert.requireInstance)(amount, _TemporalAmount.TemporalAmount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    Year.prototype.minusAmountToSubtractUnit = function minusAmountToSubtractUnit(amountToSubtract, unit) {
	        (0, _assert.requireNonNull)(amountToSubtract, 'amountToSubtract');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit, 'unit');
	        return amountToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plus(_MathUtil.MathUtil.MAX_SAFE_INTEGER, unit).plus(1, unit) : this.plus(-amountToSubtract, unit);
	    };

	    Year.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return yearsToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusYears(_MathUtil.MathUtil.MAX_SAFE_INTEGER).plusYears(1) : this.plusYears(-yearsToSubtract);
	    };

	    Year.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');

	        return temporal.with(_ChronoField.ChronoField.YEAR, this._year);
	    };

	    Year.prototype.isValidMonthDay = function isValidMonthDay(monthDay) {
	        return monthDay != null && monthDay.isValidYear(this._year);
	    };

	    Year.prototype.length = function length() {
	        return this.isLeap() ? 366 : 365;
	    };

	    Year.prototype.atDay = function atDay(dayOfYear) {
	        return _LocalDate.LocalDate.ofYearDay(this._year, dayOfYear);
	    };

	    Year.prototype.atMonth = function atMonth(monthOrNumber) {
	        if (arguments.length === 1 && monthOrNumber instanceof _Month.Month) {
	            return this.atMonthMonth(monthOrNumber);
	        } else {
	            return this.atMonthNumber(monthOrNumber);
	        }
	    };

	    Year.prototype.atMonthMonth = function atMonthMonth(month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireInstance)(month, _Month.Month, 'month');
	        return _YearMonth.YearMonth.of(this._year, month);
	    };

	    Year.prototype.atMonthNumber = function atMonthNumber(month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        return _YearMonth.YearMonth.of(this._year, month);
	    };

	    Year.prototype.atMonthDay = function atMonthDay(monthDay) {
	        (0, _assert.requireNonNull)(monthDay, 'monthDay');
	        (0, _assert.requireInstance)(monthDay, _MonthDay.MonthDay, 'monthDay');
	        return monthDay.atYear(this._year);
	    };

	    Year.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query()');
	        (0, _assert.requireInstance)(_query, _TemporalQuery.TemporalQuery, 'query()');
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.YEARS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    Year.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, Year, 'other');
	        return this._year - other._year;
	    };

	    Year.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, Year, 'other');
	        return this._year > other._year;
	    };

	    Year.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, Year, 'other');
	        return this._year < other._year;
	    };

	    Year.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.format(this);
	    };

	    Year.prototype.equals = function equals(otherYear) {
	        if (this === otherYear) {
	            return true;
	        }
	        if (otherYear instanceof Year) {
	            return this.value() === otherYear.value();
	        }
	        return false;
	    };

	    Year.prototype.toString = function toString() {
	        return '' + this._year;
	    };

	    return Year;
	}(_Temporal2.Temporal);

	exports.Year = Year;


	var PARSER = void 0;

	function _init() {

	    Year.MIN_VALUE = _YearConstants.YearConstants.MIN_VALUE;
	    Year.MAX_VALUE = _YearConstants.YearConstants.MAX_VALUE;

	    PARSER = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.YEAR, 4, 10, _SignStyle.SignStyle.EXCEEDS_PAD).toFormatter();

	    Year.FROM = (0, _TemporalQuery.createTemporalQuery)('Year.FROM', function (temporal) {
	        return Year.from(temporal);
	    });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MonthDay = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _ChronoField = __webpack_require__(12);

	var _Clock = __webpack_require__(1);

	var _DateTimeFormatter = __webpack_require__(31);

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	var _IsoChronology = __webpack_require__(9);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(24);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalAccessor = __webpack_require__(21);

	var _TemporalQuery = __webpack_require__(23);

	var _TemporalQueries = __webpack_require__(22);

	var _ValueRange = __webpack_require__(19);

	var _Year = __webpack_require__(55);

	var _ZoneId = __webpack_require__(27);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var MonthDay = function (_Temporal) {
	    _inherits(MonthDay, _Temporal);

	    MonthDay.now = function now(zoneIdOrClock) {
	        if (arguments.length === 0) {
	            return MonthDay.now0();
	        } else if (arguments.length === 1 && zoneIdOrClock instanceof _ZoneId.ZoneId) {
	            return MonthDay.nowZoneId(zoneIdOrClock);
	        } else {
	            return MonthDay.nowClock(zoneIdOrClock);
	        }
	    };

	    MonthDay.now0 = function now0() {
	        return this.nowClock(_Clock.Clock.systemDefaultZone());
	    };

	    MonthDay.nowZoneId = function nowZoneId(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return this.nowClock(_Clock.Clock.system(zone));
	    };

	    MonthDay.nowClock = function nowClock(clock) {
	        (0, _assert.requireNonNull)(clock, 'clock');
	        var now = _LocalDate.LocalDate.now(clock);
	        return MonthDay.of(now.month(), now.dayOfMonth());
	    };

	    MonthDay.of = function of(monthOrNumber, number) {
	        if (arguments.length === 2 && monthOrNumber instanceof _Month.Month) {
	            return MonthDay.ofMonthNumber(monthOrNumber, number);
	        } else {
	            return MonthDay.ofNumberNumber(monthOrNumber, number);
	        }
	    };

	    MonthDay.ofMonthNumber = function ofMonthNumber(month, dayOfMonth) {
	        (0, _assert.requireNonNull)(month, 'month');
	        _ChronoField.ChronoField.DAY_OF_MONTH.checkValidValue(dayOfMonth);
	        if (dayOfMonth > month.maxLength()) {
	            throw new _errors.DateTimeException('Illegal value for DayOfMonth field, value ' + dayOfMonth + ' is not valid for month ' + month.toString());
	        }
	        return new MonthDay(month.value(), dayOfMonth);
	    };

	    MonthDay.ofNumberNumber = function ofNumberNumber(month, dayOfMonth) {
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireNonNull)(dayOfMonth, 'dayOfMonth');
	        return MonthDay.of(_Month.Month.of(month), dayOfMonth);
	    };

	    MonthDay.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireInstance)(temporal, _TemporalAccessor.TemporalAccessor, 'temporal');
	        if (temporal instanceof MonthDay) {
	            return temporal;
	        }
	        try {
	            return MonthDay.of(temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR), temporal.get(_ChronoField.ChronoField.DAY_OF_MONTH));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain MonthDay from TemporalAccessor: ' + temporal + ', type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    MonthDay.parse = function parse(text, formatter) {
	        if (arguments.length === 1) {
	            return MonthDay.parseString(text);
	        } else {
	            return MonthDay.parseStringFormatter(text, formatter);
	        }
	    };

	    MonthDay.parseString = function parseString(text) {
	        return MonthDay.parseStringFormatter(text, PARSER);
	    };

	    MonthDay.parseStringFormatter = function parseStringFormatter(text, formatter) {
	        (0, _assert.requireNonNull)(text, 'text');
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.parse(text, MonthDay.FROM);
	    };

	    function MonthDay(month, dayOfMonth) {
	        _classCallCheck(this, MonthDay);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._month = month;
	        _this._day = dayOfMonth;
	        return _this;
	    }

	    MonthDay.prototype.monthValue = function monthValue() {
	        return this._month;
	    };

	    MonthDay.prototype.month = function month() {
	        return _Month.Month.of(this._month);
	    };

	    MonthDay.prototype.dayOfMonth = function dayOfMonth() {
	        return this._day;
	    };

	    MonthDay.prototype.isSupported = function isSupported(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.MONTH_OF_YEAR || field === _ChronoField.ChronoField.DAY_OF_MONTH;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    MonthDay.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.MONTH_OF_YEAR) {
	            return field.range();
	        } else if (field === _ChronoField.ChronoField.DAY_OF_MONTH) {
	            return _ValueRange.ValueRange.of(1, this.month().minLength(), this.month().maxLength());
	        }
	        return _Temporal.prototype.range.call(this, field);
	    };

	    MonthDay.prototype.get = function get(field) {
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    MonthDay.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.DAY_OF_MONTH:
	                    return this._day;
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this._month;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    MonthDay.prototype.isValidYear = function isValidYear(year) {
	        return (this._day === 29 && this._month === 2 && _Year.Year.isLeap(year) === false) === false;
	    };

	    MonthDay.prototype.withMonth = function withMonth(month) {
	        return this.with(_Month.Month.of(month));
	    };

	    MonthDay.prototype.with = function _with(month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        if (month.value() === this._month) {
	            return this;
	        }
	        var day = Math.min(this._day, month.maxLength());
	        return new MonthDay(month.value(), day);
	    };

	    MonthDay.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        if (dayOfMonth === this._day) {
	            return this;
	        }
	        return MonthDay.of(this._month, dayOfMonth);
	    };

	    MonthDay.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        (0, _assert.requireInstance)(_query, _TemporalQuery.TemporalQuery, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    MonthDay.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');

	        temporal = temporal.with(_ChronoField.ChronoField.MONTH_OF_YEAR, this._month);
	        return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, Math.min(temporal.range(_ChronoField.ChronoField.DAY_OF_MONTH).maximum(), this._day));
	    };

	    MonthDay.prototype.atYear = function atYear(year) {
	        return _LocalDate.LocalDate.of(year, this._month, this.isValidYear(year) ? this._day : 28);
	    };

	    MonthDay.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, MonthDay, 'other');
	        var cmp = this._month - other.monthValue();
	        if (cmp === 0) {
	            cmp = this._day - other.dayOfMonth();
	        }
	        return cmp;
	    };

	    MonthDay.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, MonthDay, 'other');
	        return this.compareTo(other) > 0;
	    };

	    MonthDay.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, MonthDay, 'other');
	        return this.compareTo(other) < 0;
	    };

	    MonthDay.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof MonthDay) {
	            var other = obj;
	            return this.monthValue() === other.monthValue() && this.dayOfMonth() === other.dayOfMonth();
	        }
	        return false;
	    };

	    MonthDay.prototype.toString = function toString() {
	        return '--' + (this._month < 10 ? '0' : '') + this._month + (this._day < 10 ? '-0' : '-') + this._day;
	    };

	    MonthDay.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        (0, _assert.requireInstance)(formatter, _DateTimeFormatter.DateTimeFormatter, 'formatter');
	        return formatter.format(this);
	    };

	    return MonthDay;
	}(_Temporal2.Temporal);

	exports.MonthDay = MonthDay;


	var PARSER = void 0;

	function _init() {
	    PARSER = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendLiteral('--').appendValue(_ChronoField.ChronoField.MONTH_OF_YEAR, 2).appendLiteral('-').appendValue(_ChronoField.ChronoField.DAY_OF_MONTH, 2).toFormatter();

	    MonthDay.FROM = (0, _TemporalQuery.createTemporalQuery)('MonthDay.FROM', function (temporal) {
	        return MonthDay.from(temporal);
	    });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.YearMonth = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _MathUtil = __webpack_require__(6);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _Clock = __webpack_require__(1);

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	var _IsoChronology = __webpack_require__(9);

	var _LocalDate = __webpack_require__(8);

	var _Month = __webpack_require__(24);

	var _SignStyle = __webpack_require__(39);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalAmount = __webpack_require__(15);

	var _TemporalField = __webpack_require__(18);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalQuery = __webpack_require__(23);

	var _TemporalUnit = __webpack_require__(16);

	var _ValueRange = __webpack_require__(19);

	var _Year = __webpack_require__(55);

	var _ZoneId = __webpack_require__(27);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var YearMonth = function (_Temporal) {
	    _inherits(YearMonth, _Temporal);

	    YearMonth.now = function now(zoneIdOrClock) {
	        if (arguments.length === 0) {
	            return YearMonth.now0();
	        } else if (arguments.length === 1 && zoneIdOrClock instanceof _ZoneId.ZoneId) {
	            return YearMonth.nowZoneId(zoneIdOrClock);
	        } else {
	            return YearMonth.nowClock(zoneIdOrClock);
	        }
	    };

	    YearMonth.now0 = function now0() {
	        return YearMonth.nowClock(_Clock.Clock.systemDefaultZone());
	    };

	    YearMonth.nowZoneId = function nowZoneId(zone) {
	        return YearMonth.nowClock(_Clock.Clock.system(zone));
	    };

	    YearMonth.nowClock = function nowClock(clock) {
	        var now = _LocalDate.LocalDate.now(clock);
	        return YearMonth.of(now.year(), now.month());
	    };

	    YearMonth.of = function of(year, monthOrNumber) {
	        if (arguments.length === 2 && monthOrNumber instanceof _Month.Month) {
	            return YearMonth.ofNumberMonth(year, monthOrNumber);
	        } else {
	            return YearMonth.ofNumberNumber(year, monthOrNumber);
	        }
	    };

	    YearMonth.ofNumberMonth = function ofNumberMonth(year, month) {
	        (0, _assert.requireNonNull)(month, 'month');
	        (0, _assert.requireInstance)(month, _Month.Month, 'month');
	        return YearMonth.ofNumberNumber(year, month.value());
	    };

	    YearMonth.ofNumberNumber = function ofNumberNumber(year, month) {
	        (0, _assert.requireNonNull)(year, 'year');
	        (0, _assert.requireNonNull)(month, 'month');
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(month);
	        return new YearMonth(year, month);
	    };

	    YearMonth.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (temporal instanceof YearMonth) {
	            return temporal;
	        }
	        try {
	            return YearMonth.of(temporal.get(_ChronoField.ChronoField.YEAR), temporal.get(_ChronoField.ChronoField.MONTH_OF_YEAR));
	        } catch (ex) {
	            throw new _errors.DateTimeException('Unable to obtain YearMonth from TemporalAccessor: ' + temporal + ', type ' + (temporal && temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	    };

	    YearMonth.parse = function parse(text, formatter) {
	        if (arguments.length === 1) {
	            return YearMonth.parseString(text);
	        } else {
	            return YearMonth.parseStringFormatter(text, formatter);
	        }
	    };

	    YearMonth.parseString = function parseString(text) {
	        return YearMonth.parseStringFormatter(text, PARSER);
	    };

	    YearMonth.parseStringFormatter = function parseStringFormatter(text, formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.parse(text, YearMonth.FROM);
	    };

	    function YearMonth(year, month) {
	        _classCallCheck(this, YearMonth);

	        var _this = _possibleConstructorReturn(this, _Temporal.call(this));

	        _this._year = year;
	        _this._month = month;
	        return _this;
	    }

	    YearMonth.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (arguments.length === 1 && fieldOrUnit instanceof _TemporalField.TemporalField) {
	            return this.isSupportedField(fieldOrUnit);
	        } else {
	            return this.isSupportedUnit(fieldOrUnit);
	        }
	    };

	    YearMonth.prototype.isSupportedField = function isSupportedField(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            return field === _ChronoField.ChronoField.YEAR || field === _ChronoField.ChronoField.MONTH_OF_YEAR || field === _ChronoField.ChronoField.PROLEPTIC_MONTH || field === _ChronoField.ChronoField.YEAR_OF_ERA || field === _ChronoField.ChronoField.ERA;
	        }
	        return field != null && field.isSupportedBy(this);
	    };

	    YearMonth.prototype.isSupportedUnit = function isSupportedUnit(unit) {
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            return unit === _ChronoUnit.ChronoUnit.MONTHS || unit === _ChronoUnit.ChronoUnit.YEARS || unit === _ChronoUnit.ChronoUnit.DECADES || unit === _ChronoUnit.ChronoUnit.CENTURIES || unit === _ChronoUnit.ChronoUnit.MILLENNIA || unit === _ChronoUnit.ChronoUnit.ERAS;
	        }
	        return unit != null && unit.isSupportedBy(this);
	    };

	    YearMonth.prototype.range = function range(field) {
	        if (field === _ChronoField.ChronoField.YEAR_OF_ERA) {
	            return this.year() <= 0 ? _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE + 1) : _ValueRange.ValueRange.of(1, _Year.Year.MAX_VALUE);
	        }
	        return _Temporal.prototype.range.call(this, field);
	    };

	    YearMonth.prototype.get = function get(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        return this.range(field).checkValidIntValue(this.getLong(field), field);
	    };

	    YearMonth.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this._month;
	                case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                    return this._getProlepticMonth();
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this._year < 1 ? 1 - this._year : this._year;
	                case _ChronoField.ChronoField.YEAR:
	                    return this._year;
	                case _ChronoField.ChronoField.ERA:
	                    return this._year < 1 ? 0 : 1;
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    YearMonth.prototype._getProlepticMonth = function _getProlepticMonth() {
	        return _MathUtil.MathUtil.safeAdd(_MathUtil.MathUtil.safeMultiply(this._year, 12), this._month - 1);
	    };

	    YearMonth.prototype.year = function year() {
	        return this._year;
	    };

	    YearMonth.prototype.monthValue = function monthValue() {
	        return this._month;
	    };

	    YearMonth.prototype.month = function month() {
	        return _Month.Month.of(this._month);
	    };

	    YearMonth.prototype.isLeapYear = function isLeapYear() {
	        return _IsoChronology.IsoChronology.isLeapYear(this._year);
	    };

	    YearMonth.prototype.isValidDay = function isValidDay(dayOfMonth) {
	        return dayOfMonth >= 1 && dayOfMonth <= this.lengthOfMonth();
	    };

	    YearMonth.prototype.lengthOfMonth = function lengthOfMonth() {
	        return this.month().length(this.isLeapYear());
	    };

	    YearMonth.prototype.lengthOfYear = function lengthOfYear() {
	        return this.isLeapYear() ? 366 : 365;
	    };

	    YearMonth.prototype.with = function _with(adjusterOrFieldOrNumber, value) {
	        if (arguments.length === 1) {
	            return this.withAdjuster(adjusterOrFieldOrNumber);
	        } else if (arguments.length === 2 && adjusterOrFieldOrNumber instanceof _TemporalField.TemporalField) {
	            return this.withFieldValue(adjusterOrFieldOrNumber, value);
	        } else {
	            return this.withYearMonth(adjusterOrFieldOrNumber, value);
	        }
	    };

	    YearMonth.prototype.withYearMonth = function withYearMonth(newYear, newMonth) {
	        (0, _assert.requireNonNull)(newYear);
	        (0, _assert.requireNonNull)(newMonth);
	        if (this._year === newYear && this._month === newMonth) {
	            return this;
	        }
	        return new YearMonth(newYear, newMonth);
	    };

	    YearMonth.prototype.withAdjuster = function withAdjuster(adjuster) {
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    YearMonth.prototype.withFieldValue = function withFieldValue(field, newValue) {
	        (0, _assert.requireNonNull)(field, 'field');
	        (0, _assert.requireInstance)(field, _TemporalField.TemporalField, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            var f = field;
	            f.checkValidValue(newValue);
	            switch (f) {
	                case _ChronoField.ChronoField.MONTH_OF_YEAR:
	                    return this.withMonth(newValue);
	                case _ChronoField.ChronoField.PROLEPTIC_MONTH:
	                    return this.plusMonths(newValue - this.getLong(_ChronoField.ChronoField.PROLEPTIC_MONTH));
	                case _ChronoField.ChronoField.YEAR_OF_ERA:
	                    return this.withYear(this._year < 1 ? 1 - newValue : newValue);
	                case _ChronoField.ChronoField.YEAR:
	                    return this.withYear(newValue);
	                case _ChronoField.ChronoField.ERA:
	                    return this.getLong(_ChronoField.ChronoField.ERA) === newValue ? this : this.withYear(1 - this._year);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.adjustInto(this, newValue);
	    };

	    YearMonth.prototype.withYear = function withYear(year) {
	        _ChronoField.ChronoField.YEAR.checkValidValue(year);
	        return this.withYearMonth(year, this._month);
	    };

	    YearMonth.prototype.withMonth = function withMonth(month) {
	        _ChronoField.ChronoField.MONTH_OF_YEAR.checkValidValue(month);
	        return this.withYearMonth(this._year, month);
	    };

	    YearMonth.prototype.plus = function plus(amountOrNumber, unit) {
	        if (arguments.length === 1) {
	            return this.plusAmount(amountOrNumber);
	        } else {
	            return this.plusAmountUnit(amountOrNumber, unit);
	        }
	    };

	    YearMonth.prototype.plusAmount = function plusAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        (0, _assert.requireInstance)(amount, _TemporalAmount.TemporalAmount, 'amount');
	        return amount.addTo(this);
	    };

	    YearMonth.prototype.plusAmountUnit = function plusAmountUnit(amountToAdd, unit) {
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit, 'unit');
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return this.plusMonths(amountToAdd);
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return this.plusYears(amountToAdd);
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 10));
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 100));
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return this.plusYears(_MathUtil.MathUtil.safeMultiply(amountToAdd, 1000));
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return this.with(_ChronoField.ChronoField.ERA, _MathUtil.MathUtil.safeAdd(this.getLong(_ChronoField.ChronoField.ERA), amountToAdd));
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.addTo(this, amountToAdd);
	    };

	    YearMonth.prototype.plusYears = function plusYears(yearsToAdd) {
	        if (yearsToAdd === 0) {
	            return this;
	        }
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(this._year + yearsToAdd);
	        return this.withYearMonth(newYear, this._month);
	    };

	    YearMonth.prototype.plusMonths = function plusMonths(monthsToAdd) {
	        if (monthsToAdd === 0) {
	            return this;
	        }
	        var monthCount = this._year * 12 + (this._month - 1);
	        var calcMonths = monthCount + monthsToAdd;
	        var newYear = _ChronoField.ChronoField.YEAR.checkValidIntValue(_MathUtil.MathUtil.floorDiv(calcMonths, 12));
	        var newMonth = _MathUtil.MathUtil.floorMod(calcMonths, 12) + 1;
	        return this.withYearMonth(newYear, newMonth);
	    };

	    YearMonth.prototype.minus = function minus(amountOrNumber, unit) {
	        if (arguments.length === 1) {
	            return this.minusAmount(amountOrNumber);
	        } else {
	            return this.minusAmountUnit(amountOrNumber, unit);
	        }
	    };

	    YearMonth.prototype.minusAmount = function minusAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    YearMonth.prototype.minusAmountUnit = function minusAmountUnit(amountToSubtract, unit) {
	        return amountToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusAmountUnit(_MathUtil.MathUtil.MAX_SAFE_INTEGER, unit).plusAmountUnit(1, unit) : this.plusAmountUnit(-amountToSubtract, unit);
	    };

	    YearMonth.prototype.minusYears = function minusYears(yearsToSubtract) {
	        return yearsToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusYears(_MathUtil.MathUtil.MIN_SAFE_INTEGER).plusYears(1) : this.plusYears(-yearsToSubtract);
	    };

	    YearMonth.prototype.minusMonths = function minusMonths(monthsToSubtract) {
	        return monthsToSubtract === _MathUtil.MathUtil.MIN_SAFE_INTEGER ? this.plusMonths(Math.MAX_SAFE_INTEGER).plusMonths(1) : this.plusMonths(-monthsToSubtract);
	    };

	    YearMonth.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        (0, _assert.requireInstance)(_query, _TemporalQuery.TemporalQuery, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return _IsoChronology.IsoChronology.INSTANCE;
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.MONTHS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate() || _query === _TemporalQueries.TemporalQueries.localTime() || _query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    YearMonth.prototype.adjustInto = function adjustInto(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        (0, _assert.requireInstance)(temporal, _Temporal2.Temporal, 'temporal');

	        return temporal.with(_ChronoField.ChronoField.PROLEPTIC_MONTH, this._getProlepticMonth());
	    };

	    YearMonth.prototype.until = function until(endExclusive, unit) {
	        (0, _assert.requireNonNull)(endExclusive, 'endExclusive');
	        (0, _assert.requireNonNull)(unit, 'unit');
	        (0, _assert.requireInstance)(endExclusive, _Temporal2.Temporal, 'endExclusive');
	        (0, _assert.requireInstance)(unit, _TemporalUnit.TemporalUnit, 'unit');

	        var end = YearMonth.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            var monthsUntil = end._getProlepticMonth() - this._getProlepticMonth();
	            switch (unit) {
	                case _ChronoUnit.ChronoUnit.MONTHS:
	                    return monthsUntil;
	                case _ChronoUnit.ChronoUnit.YEARS:
	                    return monthsUntil / 12;
	                case _ChronoUnit.ChronoUnit.DECADES:
	                    return monthsUntil / 120;
	                case _ChronoUnit.ChronoUnit.CENTURIES:
	                    return monthsUntil / 1200;
	                case _ChronoUnit.ChronoUnit.MILLENNIA:
	                    return monthsUntil / 12000;
	                case _ChronoUnit.ChronoUnit.ERAS:
	                    return end.getLong(_ChronoField.ChronoField.ERA) - this.getLong(_ChronoField.ChronoField.ERA);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported unit: ' + unit);
	        }
	        return unit.between(this, end);
	    };

	    YearMonth.prototype.atDay = function atDay(dayOfMonth) {
	        return _LocalDate.LocalDate.of(this._year, this._month, dayOfMonth);
	    };

	    YearMonth.prototype.atEndOfMonth = function atEndOfMonth() {
	        return _LocalDate.LocalDate.of(this._year, this._month, this.lengthOfMonth());
	    };

	    YearMonth.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        (0, _assert.requireInstance)(other, YearMonth, 'other');
	        var cmp = this._year - other.year();
	        if (cmp === 0) {
	            cmp = this._month - other.monthValue();
	        }
	        return cmp;
	    };

	    YearMonth.prototype.isAfter = function isAfter(other) {
	        return this.compareTo(other) > 0;
	    };

	    YearMonth.prototype.isBefore = function isBefore(other) {
	        return this.compareTo(other) < 0;
	    };

	    YearMonth.prototype.equals = function equals(obj) {
	        if (this === obj) {
	            return true;
	        }
	        if (obj instanceof YearMonth) {
	            var other = obj;
	            return this.year() === other.year() && this.monthValue() === other.monthValue();
	        }
	        return false;
	    };

	    YearMonth.prototype.toString = function toString() {
	        return PARSER.format(this);
	    };

	    YearMonth.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    return YearMonth;
	}(_Temporal2.Temporal);

	exports.YearMonth = YearMonth;


	var PARSER = void 0;

	function _init() {

	    PARSER = new _DateTimeFormatterBuilder.DateTimeFormatterBuilder().appendValue(_ChronoField.ChronoField.YEAR, 4, 10, _SignStyle.SignStyle.EXCEEDS_PAD).appendLiteral('-').appendValue(_ChronoField.ChronoField.MONTH_OF_YEAR, 2).toFormatter();

	    YearMonth.FROM = (0, _TemporalQuery.createTemporalQuery)('YearMonth.FROM', function (temporal) {
	        return YearMonth.from(temporal);
	    });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAdjusters = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _TemporalAdjuster4 = __webpack_require__(59);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _MathUtil = __webpack_require__(6);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAdjusters = exports.TemporalAdjusters = function () {
	    function TemporalAdjusters() {
	        _classCallCheck(this, TemporalAdjusters);
	    }

	    TemporalAdjusters.firstDayOfMonth = function firstDayOfMonth() {
	        return Impl.FIRST_DAY_OF_MONTH;
	    };

	    TemporalAdjusters.lastDayOfMonth = function lastDayOfMonth() {
	        return Impl.LAST_DAY_OF_MONTH;
	    };

	    TemporalAdjusters.firstDayOfNextMonth = function firstDayOfNextMonth() {
	        return Impl.FIRST_DAY_OF_NEXT_MONTH;
	    };

	    TemporalAdjusters.firstDayOfYear = function firstDayOfYear() {
	        return Impl.FIRST_DAY_OF_YEAR;
	    };

	    TemporalAdjusters.lastDayOfYear = function lastDayOfYear() {
	        return Impl.LAST_DAY_OF_YEAR;
	    };

	    TemporalAdjusters.firstDayOfNextYear = function firstDayOfNextYear() {
	        return Impl.FIRST_DAY_OF_NEXT_YEAR;
	    };

	    TemporalAdjusters.firstInMonth = function firstInMonth(dayOfWeek) {
	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');
	        return new DayOfWeekInMonth(1, dayOfWeek);
	    };

	    TemporalAdjusters.lastInMonth = function lastInMonth(dayOfWeek) {
	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');
	        return new DayOfWeekInMonth(-1, dayOfWeek);
	    };

	    TemporalAdjusters.dayOfWeekInMonth = function dayOfWeekInMonth(ordinal, dayOfWeek) {
	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');
	        return new DayOfWeekInMonth(ordinal, dayOfWeek);
	    };

	    TemporalAdjusters.next = function next(dayOfWeek) {
	        return new RelativeDayOfWeek(2, dayOfWeek);
	    };

	    TemporalAdjusters.nextOrSame = function nextOrSame(dayOfWeek) {
	        return new RelativeDayOfWeek(0, dayOfWeek);
	    };

	    TemporalAdjusters.previous = function previous(dayOfWeek) {
	        return new RelativeDayOfWeek(3, dayOfWeek);
	    };

	    TemporalAdjusters.previousOrSame = function previousOrSame(dayOfWeek) {
	        return new RelativeDayOfWeek(1, dayOfWeek);
	    };

	    return TemporalAdjusters;
	}();

	var Impl = function (_TemporalAdjuster) {
	    _inherits(Impl, _TemporalAdjuster);

	    function Impl(ordinal) {
	        _classCallCheck(this, Impl);

	        var _this = _possibleConstructorReturn(this, _TemporalAdjuster.call(this));

	        _this._ordinal = ordinal;
	        return _this;
	    }

	    Impl.prototype.adjustInto = function adjustInto(temporal) {
	        switch (this._ordinal) {
	            case 0:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, 1);
	            case 1:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, temporal.range(_ChronoField.ChronoField.DAY_OF_MONTH).maximum());
	            case 2:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, 1).plus(1, _ChronoUnit.ChronoUnit.MONTHS);
	            case 3:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, 1);
	            case 4:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, temporal.range(_ChronoField.ChronoField.DAY_OF_YEAR).maximum());
	            case 5:
	                return temporal.with(_ChronoField.ChronoField.DAY_OF_YEAR, 1).plus(1, _ChronoUnit.ChronoUnit.YEARS);
	        }
	        throw new _errors.IllegalStateException('Unreachable');
	    };

	    return Impl;
	}(_TemporalAdjuster4.TemporalAdjuster);

	Impl.FIRST_DAY_OF_MONTH = new Impl(0);

	Impl.LAST_DAY_OF_MONTH = new Impl(1);

	Impl.FIRST_DAY_OF_NEXT_MONTH = new Impl(2);

	Impl.FIRST_DAY_OF_YEAR = new Impl(3);

	Impl.LAST_DAY_OF_YEAR = new Impl(4);

	Impl.FIRST_DAY_OF_NEXT_YEAR = new Impl(5);

	var DayOfWeekInMonth = function (_TemporalAdjuster2) {
	    _inherits(DayOfWeekInMonth, _TemporalAdjuster2);

	    function DayOfWeekInMonth(ordinal, dow) {
	        _classCallCheck(this, DayOfWeekInMonth);

	        var _this2 = _possibleConstructorReturn(this, _TemporalAdjuster2.call(this));

	        _this2._ordinal = ordinal;
	        _this2._dowValue = dow.value();
	        return _this2;
	    }

	    DayOfWeekInMonth.prototype.adjustInto = function adjustInto(temporal) {
	        if (this._ordinal >= 0) {
	            var temp = temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, 1);
	            var curDow = temp.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	            var dowDiff = _MathUtil.MathUtil.intMod(this._dowValue - curDow + 7, 7);
	            dowDiff += (this._ordinal - 1) * 7;
	            return temp.plus(dowDiff, _ChronoUnit.ChronoUnit.DAYS);
	        } else {
	            var _temp = temporal.with(_ChronoField.ChronoField.DAY_OF_MONTH, temporal.range(_ChronoField.ChronoField.DAY_OF_MONTH).maximum());
	            var _curDow = _temp.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	            var daysDiff = this._dowValue - _curDow;
	            daysDiff = daysDiff === 0 ? 0 : daysDiff > 0 ? daysDiff - 7 : daysDiff;
	            daysDiff -= (-this._ordinal - 1) * 7;
	            return _temp.plus(daysDiff, _ChronoUnit.ChronoUnit.DAYS);
	        }
	    };

	    return DayOfWeekInMonth;
	}(_TemporalAdjuster4.TemporalAdjuster);

	var RelativeDayOfWeek = function (_TemporalAdjuster3) {
	    _inherits(RelativeDayOfWeek, _TemporalAdjuster3);

	    function RelativeDayOfWeek(relative, dayOfWeek) {
	        _classCallCheck(this, RelativeDayOfWeek);

	        var _this3 = _possibleConstructorReturn(this, _TemporalAdjuster3.call(this));

	        (0, _assert.requireNonNull)(dayOfWeek, 'dayOfWeek');

	        _this3._relative = relative;

	        _this3._dowValue = dayOfWeek.value();
	        return _this3;
	    }

	    RelativeDayOfWeek.prototype.adjustInto = function adjustInto(temporal) {
	        var calDow = temporal.get(_ChronoField.ChronoField.DAY_OF_WEEK);
	        if (this._relative < 2 && calDow === this._dowValue) {
	            return temporal;
	        }
	        if ((this._relative & 1) === 0) {
	            var daysDiff = calDow - this._dowValue;
	            return temporal.plus(daysDiff >= 0 ? 7 - daysDiff : -daysDiff, _ChronoUnit.ChronoUnit.DAYS);
	        } else {
	            var _daysDiff = this._dowValue - calDow;
	            return temporal.minus(_daysDiff >= 0 ? 7 - _daysDiff : -_daysDiff, _ChronoUnit.ChronoUnit.DAYS);
	        }
	    };

	    return RelativeDayOfWeek;
	}(_TemporalAdjuster4.TemporalAdjuster);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.TemporalAdjuster = undefined;

	var _assert = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var TemporalAdjuster = exports.TemporalAdjuster = function () {
	  function TemporalAdjuster() {
	    _classCallCheck(this, TemporalAdjuster);
	  }

	  TemporalAdjuster.prototype.adjustInto = function adjustInto(temporal) {
	    (0, _assert.abstractMethodFail)('adjustInto');
	  };

	  return TemporalAdjuster;
	}();

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZonedDateTime = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Clock = __webpack_require__(1);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalDateTime = __webpack_require__(7);

	var _LocalTime = __webpack_require__(5);

	var _ZoneId = __webpack_require__(27);

	var _ZoneOffset = __webpack_require__(26);

	var _ChronoZonedDateTime2 = __webpack_require__(61);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _TemporalQuery = __webpack_require__(23);

	var _TemporalQueries = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ZonedDateTime = function (_ChronoZonedDateTime) {
	    _inherits(ZonedDateTime, _ChronoZonedDateTime);

	    ZonedDateTime.now = function now(clockOrZone) {
	        var clock = void 0;
	        if (clockOrZone instanceof _ZoneId.ZoneId) {
	            clock = _Clock.Clock.system(clockOrZone);
	        } else {
	            clock = clockOrZone == null ? _Clock.Clock.systemDefaultZone() : clockOrZone;
	        }
	        return ZonedDateTime.ofInstant(clock.instant(), clock.zone());
	    };

	    ZonedDateTime.of = function of() {
	        if (arguments.length <= 2) {
	            return ZonedDateTime.of2.apply(this, arguments);
	        } else if (arguments.length === 3 && arguments[0] instanceof _LocalDate.LocalDate) {
	            return ZonedDateTime.of3.apply(this, arguments);
	        } else {
	            return ZonedDateTime.of8.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.of3 = function of3(date, time, zone) {
	        return ZonedDateTime.of2(_LocalDateTime.LocalDateTime.of(date, time), zone);
	    };

	    ZonedDateTime.of2 = function of2(localDateTime, zone) {
	        return ZonedDateTime.ofLocal(localDateTime, zone, null);
	    };

	    ZonedDateTime.of8 = function of8(year, month, dayOfMonth, hour, minute, second, nanoOfSecond, zone) {
	        var dt = _LocalDateTime.LocalDateTime.of(year, month, dayOfMonth, hour, minute, second, nanoOfSecond);
	        return ZonedDateTime.ofLocal(dt, zone, null);
	    };

	    ZonedDateTime.ofLocal = function ofLocal(localDateTime, zone, preferredOffset) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        if (zone instanceof _ZoneOffset.ZoneOffset) {
	            return new ZonedDateTime(localDateTime, zone, zone);
	        }
	        var offset = null;
	        var rules = zone.rules();
	        var validOffsets = rules.validOffsets(localDateTime);
	        if (validOffsets.length === 1) {
	            offset = validOffsets[0];
	        } else if (validOffsets.length === 0) {
	            var trans = rules.transition(localDateTime);
	            localDateTime = localDateTime.plusSeconds(trans.duration().seconds());
	            offset = trans.offsetAfter();
	        } else {
	            if (preferredOffset != null && validOffsets.some(function (validOffset) {
	                return validOffset.equals(preferredOffset);
	            })) {
	                offset = preferredOffset;
	            } else {
	                offset = (0, _assert.requireNonNull)(validOffsets[0], 'offset');
	            }
	        }

	        return new ZonedDateTime(localDateTime, offset, zone);
	    };

	    ZonedDateTime.ofInstant = function ofInstant() {
	        if (arguments.length === 2) {
	            return ZonedDateTime.ofInstant2.apply(this, arguments);
	        } else {
	            return ZonedDateTime.ofInstant3.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.ofInstant2 = function ofInstant2(instant, zone) {
	        (0, _assert.requireNonNull)(instant, 'instant');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return ZonedDateTime._create(instant.epochSecond(), instant.nano(), zone);
	    };

	    ZonedDateTime.ofInstant3 = function ofInstant3(localDateTime, offset, zone) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return ZonedDateTime._create(localDateTime.toEpochSecond(offset), localDateTime.nano(), zone);
	    };

	    ZonedDateTime._create = function _create(epochSecond, nanoOfSecond, zone) {
	        var rules = zone.rules();
	        var instant = _Instant.Instant.ofEpochSecond(epochSecond, nanoOfSecond);
	        var offset = rules.offset(instant);
	        var ldt = _LocalDateTime.LocalDateTime.ofEpochSecond(epochSecond, nanoOfSecond, offset);
	        return new ZonedDateTime(ldt, offset, zone);
	    };

	    ZonedDateTime.ofStrict = function ofStrict(localDateTime, offset, zone) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        var rules = zone.rules();
	        if (rules.isValidOffset(localDateTime, offset) === false) {
	            var trans = rules.transition(localDateTime);
	            if (trans != null && trans.isGap()) {
	                throw new _errors.DateTimeException('LocalDateTime ' + localDateTime + ' does not exist in zone ' + zone + ' due to a gap in the local time-line, typically caused by daylight savings');
	            }
	            throw new _errors.DateTimeException('ZoneOffset "' + offset + '" is not valid for LocalDateTime "' + localDateTime + '" in zone "' + zone + '"');
	        }
	        return new ZonedDateTime(localDateTime, offset, zone);
	    };

	    ZonedDateTime.ofLenient = function ofLenient(localDateTime, offset, zone) {
	        (0, _assert.requireNonNull)(localDateTime, 'localDateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');
	        if (zone instanceof _ZoneOffset.ZoneOffset && offset.equals(zone) === false) {
	            throw new _errors.IllegalArgumentException('ZoneId must match ZoneOffset');
	        }
	        return new ZonedDateTime(localDateTime, offset, zone);
	    };

	    ZonedDateTime.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        if (temporal instanceof ZonedDateTime) {
	            return temporal;
	        }
	        var zone = _ZoneId.ZoneId.from(temporal);
	        if (temporal.isSupported(_ChronoField.ChronoField.INSTANT_SECONDS)) {
	            var zdt = ZonedDateTime._from(temporal, zone);
	            if (zdt != null) return zdt;
	        }
	        var ldt = _LocalDateTime.LocalDateTime.from(temporal);
	        return ZonedDateTime.of2(ldt, zone);
	    };

	    ZonedDateTime._from = function _from(temporal, zone) {
	        try {
	            return ZonedDateTime.__from(temporal, zone);
	        } catch (ex) {
	            if (!(ex instanceof _errors.DateTimeException)) throw ex;
	        }
	    };

	    ZonedDateTime.__from = function __from(temporal, zone) {
	        var epochSecond = temporal.getLong(_ChronoField.ChronoField.INSTANT_SECONDS);
	        var nanoOfSecond = temporal.get(_ChronoField.ChronoField.NANO_OF_SECOND);
	        return ZonedDateTime._create(epochSecond, nanoOfSecond, zone);
	    };

	    ZonedDateTime.parse = function parse(text) {
	        var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DateTimeFormatter.DateTimeFormatter.ISO_ZONED_DATE_TIME;

	        (0, _assert.requireNonNull)(formatter, 'fromatter');
	        return formatter.parse(text, ZonedDateTime.FROM);
	    };

	    function ZonedDateTime(dateTime, offset, zone) {
	        _classCallCheck(this, ZonedDateTime);

	        (0, _assert.requireNonNull)(dateTime, 'dateTime');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        (0, _assert.requireNonNull)(zone, 'zone');

	        var _this = _possibleConstructorReturn(this, _ChronoZonedDateTime.call(this));

	        _this._dateTime = dateTime;

	        _this._offset = offset;

	        _this._zone = zone;
	        return _this;
	    }

	    ZonedDateTime.prototype._resolveLocal = function _resolveLocal(newDateTime) {
	        (0, _assert.requireNonNull)(newDateTime, 'newDateTime');
	        return ZonedDateTime.ofLocal(newDateTime, this._zone, this._offset);
	    };

	    ZonedDateTime.prototype._resolveInstant = function _resolveInstant(newDateTime) {
	        return ZonedDateTime.ofInstant3(newDateTime, this._offset, this._zone);
	    };

	    ZonedDateTime.prototype._resolveOffset = function _resolveOffset(offset) {
	        if (offset.equals(this._offset) === false && this._zone.rules().isValidOffset(this._dateTime, offset)) {
	            return new ZonedDateTime(this._dateTime, offset, this._zone);
	        }
	        return this;
	    };

	    ZonedDateTime.prototype.isSupported = function isSupported(fieldOrUnit) {
	        if (fieldOrUnit instanceof _ChronoField.ChronoField) {
	            return true;
	        } else if (fieldOrUnit instanceof _ChronoUnit.ChronoUnit) {
	            return fieldOrUnit.isDateBased() || fieldOrUnit.isTimeBased();
	        }
	        return fieldOrUnit != null && fieldOrUnit.isSupportedBy(this);
	    };

	    ZonedDateTime.prototype.range = function range(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            if (field === _ChronoField.ChronoField.INSTANT_SECONDS || field === _ChronoField.ChronoField.OFFSET_SECONDS) {
	                return field.range();
	            }
	            return this._dateTime.range(field);
	        }
	        return field.rangeRefinedBy(this);
	    };

	    ZonedDateTime.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    ZonedDateTime.prototype.getLong = function getLong(field) {
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return this.toEpochSecond();
	                case _ChronoField.ChronoField.OFFSET_SECONDS:
	                    return this._offset.totalSeconds();
	            }
	            return this._dateTime.getLong(field);
	        }
	        (0, _assert.requireNonNull)(field, 'field');
	        return field.getFrom(this);
	    };

	    ZonedDateTime.prototype.offset = function offset() {
	        return this._offset;
	    };

	    ZonedDateTime.prototype.withEarlierOffsetAtOverlap = function withEarlierOffsetAtOverlap() {
	        var trans = this._zone.rules().transition(this._dateTime);
	        if (trans != null && trans.isOverlap()) {
	            var earlierOffset = trans.offsetBefore();
	            if (earlierOffset.equals(this._offset) === false) {
	                return new ZonedDateTime(this._dateTime, earlierOffset, this._zone);
	            }
	        }
	        return this;
	    };

	    ZonedDateTime.prototype.withLaterOffsetAtOverlap = function withLaterOffsetAtOverlap() {
	        var trans = this._zone.rules().transition(this.toLocalDateTime());
	        if (trans != null) {
	            var laterOffset = trans.offsetAfter();
	            if (laterOffset.equals(this._offset) === false) {
	                return new ZonedDateTime(this._dateTime, laterOffset, this._zone);
	            }
	        }
	        return this;
	    };

	    ZonedDateTime.prototype.zone = function zone() {
	        return this._zone;
	    };

	    ZonedDateTime.prototype.withZoneSameLocal = function withZoneSameLocal(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return this._zone.equals(zone) ? this : ZonedDateTime.ofLocal(this._dateTime, zone, this._offset);
	    };

	    ZonedDateTime.prototype.withZoneSameInstant = function withZoneSameInstant(zone) {
	        (0, _assert.requireNonNull)(zone, 'zone');
	        return this._zone.equals(zone) ? this : ZonedDateTime._create(this._dateTime.toEpochSecond(this._offset), this._dateTime.nano(), zone);
	    };

	    ZonedDateTime.prototype.withFixedOffsetZone = function withFixedOffsetZone() {
	        return this._zone.equals(this._offset) ? this : new ZonedDateTime(this._dateTime, this._offset, this._offset);
	    };

	    ZonedDateTime.prototype.year = function year() {
	        return this._dateTime.year();
	    };

	    ZonedDateTime.prototype.monthValue = function monthValue() {
	        return this._dateTime.monthValue();
	    };

	    ZonedDateTime.prototype.month = function month() {
	        return this._dateTime.month();
	    };

	    ZonedDateTime.prototype.dayOfMonth = function dayOfMonth() {
	        return this._dateTime.dayOfMonth();
	    };

	    ZonedDateTime.prototype.dayOfYear = function dayOfYear() {
	        return this._dateTime.dayOfYear();
	    };

	    ZonedDateTime.prototype.dayOfWeek = function dayOfWeek() {
	        return this._dateTime.dayOfWeek();
	    };

	    ZonedDateTime.prototype.hour = function hour() {
	        return this._dateTime.hour();
	    };

	    ZonedDateTime.prototype.minute = function minute() {
	        return this._dateTime.minute();
	    };

	    ZonedDateTime.prototype.second = function second() {
	        return this._dateTime.second();
	    };

	    ZonedDateTime.prototype.nano = function nano() {
	        return this._dateTime.nano();
	    };

	    ZonedDateTime.prototype.with = function _with() {
	        if (arguments.length === 1) {
	            return this.withTemporalAdjuster.apply(this, arguments);
	        } else {
	            return this.with2.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.prototype.withTemporalAdjuster = function withTemporalAdjuster(adjuster) {
	        if (adjuster instanceof _LocalDate.LocalDate) {
	            return this._resolveLocal(_LocalDateTime.LocalDateTime.of(adjuster, this._dateTime.toLocalTime()));
	        } else if (adjuster instanceof _LocalTime.LocalTime) {
	            return this._resolveLocal(_LocalDateTime.LocalDateTime.of(this._dateTime.toLocalDate(), adjuster));
	        } else if (adjuster instanceof _LocalDateTime.LocalDateTime) {
	            return this._resolveLocal(adjuster);
	        } else if (adjuster instanceof _Instant.Instant) {
	            var instant = adjuster;
	            return ZonedDateTime._create(instant.epochSecond(), instant.nano(), this._zone);
	        } else if (adjuster instanceof _ZoneOffset.ZoneOffset) {
	            return this._resolveOffset(adjuster);
	        }
	        (0, _assert.requireNonNull)(adjuster, 'adjuster');
	        return adjuster.adjustInto(this);
	    };

	    ZonedDateTime.prototype.with2 = function with2(field, newValue) {
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return ZonedDateTime._create(newValue, this.nano(), this._zone);
	                case _ChronoField.ChronoField.OFFSET_SECONDS:
	                    {
	                        var offset = _ZoneOffset.ZoneOffset.ofTotalSeconds(field.checkValidIntValue(newValue));
	                        return this._resolveOffset(offset);
	                    }
	            }
	            return this._resolveLocal(this._dateTime.with(field, newValue));
	        }
	        return field.adjustInto(this, newValue);
	    };

	    ZonedDateTime.prototype.withYear = function withYear(year) {
	        return this._resolveLocal(this._dateTime.withYear(year));
	    };

	    ZonedDateTime.prototype.withMonth = function withMonth(month) {
	        return this._resolveLocal(this._dateTime.withMonth(month));
	    };

	    ZonedDateTime.prototype.withDayOfMonth = function withDayOfMonth(dayOfMonth) {
	        return this._resolveLocal(this._dateTime.withDayOfMonth(dayOfMonth));
	    };

	    ZonedDateTime.prototype.withDayOfYear = function withDayOfYear(dayOfYear) {
	        return this._resolveLocal(this._dateTime.withDayOfYear(dayOfYear));
	    };

	    ZonedDateTime.prototype.withHour = function withHour(hour) {
	        return this._resolveLocal(this._dateTime.withHour(hour));
	    };

	    ZonedDateTime.prototype.withMinute = function withMinute(minute) {
	        return this._resolveLocal(this._dateTime.withMinute(minute));
	    };

	    ZonedDateTime.prototype.withSecond = function withSecond(second) {
	        return this._resolveLocal(this._dateTime.withSecond(second));
	    };

	    ZonedDateTime.prototype.withNano = function withNano(nanoOfSecond) {
	        return this._resolveLocal(this._dateTime.withNano(nanoOfSecond));
	    };

	    ZonedDateTime.prototype.truncatedTo = function truncatedTo(unit) {
	        return this._resolveLocal(this._dateTime.truncatedTo(unit));
	    };

	    ZonedDateTime.prototype.plus = function plus() {
	        if (arguments.length === 1) {
	            return this.plusTemporalAmount.apply(this, arguments);
	        } else {
	            return this.plus2.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.prototype.plusTemporalAmount = function plusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount);
	        return amount.addTo(this);
	    };

	    ZonedDateTime.prototype.plus2 = function plus2(amountToAdd, unit) {
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            if (unit.isDateBased()) {
	                return this._resolveLocal(this._dateTime.plus(amountToAdd, unit));
	            } else {
	                return this._resolveInstant(this._dateTime.plus(amountToAdd, unit));
	            }
	        }
	        (0, _assert.requireNonNull)(unit, 'unit');
	        return unit.addTo(this, amountToAdd);
	    };

	    ZonedDateTime.prototype.plusYears = function plusYears(years) {
	        return this._resolveLocal(this._dateTime.plusYears(years));
	    };

	    ZonedDateTime.prototype.plusMonths = function plusMonths(months) {
	        return this._resolveLocal(this._dateTime.plusMonths(months));
	    };

	    ZonedDateTime.prototype.plusWeeks = function plusWeeks(weeks) {
	        return this._resolveLocal(this._dateTime.plusWeeks(weeks));
	    };

	    ZonedDateTime.prototype.plusDays = function plusDays(days) {
	        return this._resolveLocal(this._dateTime.plusDays(days));
	    };

	    ZonedDateTime.prototype.plusHours = function plusHours(hours) {
	        return this._resolveInstant(this._dateTime.plusHours(hours));
	    };

	    ZonedDateTime.prototype.plusMinutes = function plusMinutes(minutes) {
	        return this._resolveInstant(this._dateTime.plusMinutes(minutes));
	    };

	    ZonedDateTime.prototype.plusSeconds = function plusSeconds(seconds) {
	        return this._resolveInstant(this._dateTime.plusSeconds(seconds));
	    };

	    ZonedDateTime.prototype.plusNanos = function plusNanos(nanos) {
	        return this._resolveInstant(this._dateTime.plusNanos(nanos));
	    };

	    ZonedDateTime.prototype.minus = function minus() {
	        if (arguments.length === 1) {
	            return this.minusTemporalAmount.apply(this, arguments);
	        } else {
	            return this.minus2.apply(this, arguments);
	        }
	    };

	    ZonedDateTime.prototype.minusTemporalAmount = function minusTemporalAmount(amount) {
	        (0, _assert.requireNonNull)(amount, 'amount');
	        return amount.subtractFrom(this);
	    };

	    ZonedDateTime.prototype.minus2 = function minus2(amountToSubtract, unit) {
	        return this.plus2(-1 * amountToSubtract, unit);
	    };

	    ZonedDateTime.prototype.minusYears = function minusYears(years) {
	        return this.plusYears(-1 * years);
	    };

	    ZonedDateTime.prototype.minusMonths = function minusMonths(months) {
	        return this.plusMonths(-1 * months);
	    };

	    ZonedDateTime.prototype.minusWeeks = function minusWeeks(weeks) {
	        return this.plusWeeks(-1 * weeks);
	    };

	    ZonedDateTime.prototype.minusDays = function minusDays(days) {
	        return this.plusDays(-1 * days);
	    };

	    ZonedDateTime.prototype.minusHours = function minusHours(hours) {
	        return this.plusHours(-1 * hours);
	    };

	    ZonedDateTime.prototype.minusMinutes = function minusMinutes(minutes) {
	        return this.plusMinutes(-1 * minutes);
	    };

	    ZonedDateTime.prototype.minusSeconds = function minusSeconds(seconds) {
	        return this.plusSeconds(-1 * seconds);
	    };

	    ZonedDateTime.prototype.minusNanos = function minusNanos(nanos) {
	        return this.plusNanos(-1 * nanos);
	    };

	    ZonedDateTime.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return this.toLocalDate();
	        }
	        (0, _assert.requireNonNull)(_query, 'query');
	        return _ChronoZonedDateTime.prototype.query.call(this, _query);
	    };

	    ZonedDateTime.prototype.until = function until(endExclusive, unit) {
	        var end = ZonedDateTime.from(endExclusive);
	        if (unit instanceof _ChronoUnit.ChronoUnit) {
	            end = end.withZoneSameInstant(this._zone);
	            if (unit.isDateBased()) {
	                return this._dateTime.until(end._dateTime, unit);
	            } else {
	                var difference = this._offset.totalSeconds() - end._offset.totalSeconds();
	                var adjustedEnd = end._dateTime.plusSeconds(difference);
	                return this._dateTime.until(adjustedEnd, unit);
	            }
	        }
	        return unit.between(this, end);
	    };

	    ZonedDateTime.prototype.toLocalDateTime = function toLocalDateTime() {
	        return this._dateTime;
	    };

	    ZonedDateTime.prototype.toLocalDate = function toLocalDate() {
	        return this._dateTime.toLocalDate();
	    };

	    ZonedDateTime.prototype.toLocalTime = function toLocalTime() {
	        return this._dateTime.toLocalTime();
	    };

	    ZonedDateTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof ZonedDateTime) {
	            return this._dateTime.equals(other._dateTime) && this._offset.equals(other._offset) && this._zone.equals(other._zone);
	        }
	        return false;
	    };

	    ZonedDateTime.prototype.hashCode = function hashCode() {
	        var r = 17;
	        r = 31 * r + this._dateTime.hashCode();
	        r = 31 * r + this._offset.hashCode();
	        r = 31 * r + this._zone.hashCode();
	        return r;
	    };

	    ZonedDateTime.prototype.toString = function toString() {
	        var str = this._dateTime.toString() + this._offset.toString();
	        if (this._offset !== this._zone) {
	            str += '[' + this._zone.toString() + ']';
	        }
	        return str;
	    };

	    ZonedDateTime.prototype.toJSON = function toJSON() {
	        return this.toString();
	    };

	    ZonedDateTime.prototype.format = function format(formatter) {
	        return _ChronoZonedDateTime.prototype.format.call(this, formatter);
	    };

	    return ZonedDateTime;
	}(_ChronoZonedDateTime2.ChronoZonedDateTime);

	exports.ZonedDateTime = ZonedDateTime;
	function _init() {
	    ZonedDateTime.FROM = (0, _TemporalQuery.createTemporalQuery)('ZonedDateTime.FROM', function (temporal) {
	        return ZonedDateTime.from(temporal);
	    });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoZonedDateTime = undefined;

	var _assert = __webpack_require__(2);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _MathUtil = __webpack_require__(6);

	var _ChronoUnit = __webpack_require__(13);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalQueries = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoZonedDateTime = function (_Temporal) {
	    _inherits(ChronoZonedDateTime, _Temporal);

	    function ChronoZonedDateTime() {
	        _classCallCheck(this, ChronoZonedDateTime);

	        return _possibleConstructorReturn(this, _Temporal.apply(this, arguments));
	    }

	    ChronoZonedDateTime.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.zone()) {
	            return this.zone();
	        } else if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.toLocalDate().chronology();
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        } else if (_query === _TemporalQueries.TemporalQueries.offset()) {
	            return this.offset();
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofEpochDay(this.toLocalDate().toEpochDay());
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this.toLocalTime();
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    ChronoZonedDateTime.prototype.format = function format(formatter) {
	        (0, _assert.requireNonNull)(formatter, 'formatter');
	        return formatter.format(this);
	    };

	    ChronoZonedDateTime.prototype.toInstant = function toInstant() {
	        return _Instant.Instant.ofEpochSecond(this.toEpochSecond(), this.toLocalTime().nano());
	    };

	    ChronoZonedDateTime.prototype.toEpochSecond = function toEpochSecond() {
	        var epochDay = this.toLocalDate().toEpochDay();
	        var secs = epochDay * 86400 + this.toLocalTime().toSecondOfDay();
	        secs -= this.offset().totalSeconds();
	        return secs;
	    };

	    ChronoZonedDateTime.prototype.compareTo = function compareTo(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        var cmp = _MathUtil.MathUtil.compareNumbers(this.toEpochSecond(), other.toEpochSecond());
	        if (cmp === 0) {
	            cmp = this.toLocalTime().nano() - other.toLocalTime().nano();
	            if (cmp === 0) {
	                cmp = this.toLocalDateTime().compareTo(other.toLocalDateTime());
	                if (cmp === 0) {
	                    cmp = strcmp(this.zone().id(), other.zone().id());
	                }
	            }
	        }
	        return cmp;
	    };

	    ChronoZonedDateTime.prototype.isAfter = function isAfter(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        var thisEpochSec = this.toEpochSecond();
	        var otherEpochSec = other.toEpochSecond();
	        return thisEpochSec > otherEpochSec || thisEpochSec === otherEpochSec && this.toLocalTime().nano() > other.toLocalTime().nano();
	    };

	    ChronoZonedDateTime.prototype.isBefore = function isBefore(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        var thisEpochSec = this.toEpochSecond();
	        var otherEpochSec = other.toEpochSecond();
	        return thisEpochSec < otherEpochSec || thisEpochSec === otherEpochSec && this.toLocalTime().nano() < other.toLocalTime().nano();
	    };

	    ChronoZonedDateTime.prototype.isEqual = function isEqual(other) {
	        (0, _assert.requireNonNull)(other, 'other');
	        return this.toEpochSecond() === other.toEpochSecond() && this.toLocalTime().nano() === other.toLocalTime().nano();
	    };

	    ChronoZonedDateTime.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof ChronoZonedDateTime) {
	            return this.compareTo(other) === 0;
	        }
	        return false;
	    };

	    return ChronoZonedDateTime;
	}(_Temporal2.Temporal);

	exports.ChronoZonedDateTime = ChronoZonedDateTime;


	function strcmp(a, b) {
	    if (a < b) {
	        return -1;
	    }
	    if (a > b) {
	        return 1;
	    }
	    return 0;
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ChronoLocalDateTime = undefined;

	var _assert = __webpack_require__(2);

	var _MathUtil = __webpack_require__(6);

	var _LocalDate = __webpack_require__(8);

	var _Instant = __webpack_require__(4);

	var _ZoneOffset = __webpack_require__(26);

	var _ChronoUnit = __webpack_require__(13);

	var _ChronoField = __webpack_require__(12);

	var _Temporal2 = __webpack_require__(20);

	var _TemporalQueries = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ChronoLocalDateTime = function (_Temporal) {
	    _inherits(ChronoLocalDateTime, _Temporal);

	    function ChronoLocalDateTime() {
	        _classCallCheck(this, ChronoLocalDateTime);

	        return _possibleConstructorReturn(this, _Temporal.apply(this, arguments));
	    }

	    ChronoLocalDateTime.prototype.chronology = function chronology() {
	        return this.toLocalDate().chronology();
	    };

	    ChronoLocalDateTime.prototype.query = function query(_query) {
	        if (_query === _TemporalQueries.TemporalQueries.chronology()) {
	            return this.chronology();
	        } else if (_query === _TemporalQueries.TemporalQueries.precision()) {
	            return _ChronoUnit.ChronoUnit.NANOS;
	        } else if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofEpochDay(this.toLocalDate().toEpochDay());
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return this.toLocalTime();
	        } else if (_query === _TemporalQueries.TemporalQueries.zone() || _query === _TemporalQueries.TemporalQueries.zoneId() || _query === _TemporalQueries.TemporalQueries.offset()) {
	            return null;
	        }
	        return _Temporal.prototype.query.call(this, _query);
	    };

	    ChronoLocalDateTime.prototype.adjustInto = function adjustInto(temporal) {
	        return temporal.with(_ChronoField.ChronoField.EPOCH_DAY, this.toLocalDate().toEpochDay()).with(_ChronoField.ChronoField.NANO_OF_DAY, this.toLocalTime().toNanoOfDay());
	    };

	    ChronoLocalDateTime.prototype.toInstant = function toInstant(offset) {
	        (0, _assert.requireInstance)(offset, _ZoneOffset.ZoneOffset, 'zoneId');
	        return _Instant.Instant.ofEpochSecond(this.toEpochSecond(offset), this.toLocalTime().nano());
	    };

	    ChronoLocalDateTime.prototype.toEpochSecond = function toEpochSecond(offset) {
	        (0, _assert.requireNonNull)(offset, 'offset');
	        var epochDay = this.toLocalDate().toEpochDay();
	        var secs = epochDay * 86400 + this.toLocalTime().toSecondOfDay();
	        secs -= offset.totalSeconds();
	        return _MathUtil.MathUtil.safeToInt(secs);
	    };

	    return ChronoLocalDateTime;
	}(_Temporal2.Temporal);

	exports.ChronoLocalDateTime = ChronoLocalDateTime;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneOffsetTransition = undefined;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Duration = __webpack_require__(14);

	var _LocalDateTime = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneOffsetTransition = exports.ZoneOffsetTransition = function () {
	    ZoneOffsetTransition.of = function of(transition, offsetBefore, offsetAfter) {
	        return new ZoneOffsetTransition(transition, offsetBefore, offsetAfter);
	    };

	    function ZoneOffsetTransition(transition, offsetBefore, offsetAfter) {
	        _classCallCheck(this, ZoneOffsetTransition);

	        (0, _assert.requireNonNull)(transition, 'transition');
	        (0, _assert.requireNonNull)(offsetBefore, 'offsetBefore');
	        (0, _assert.requireNonNull)(offsetAfter, 'offsetAfter');
	        if (offsetBefore.equals(offsetAfter)) {
	            throw new _errors.IllegalArgumentException('Offsets must not be equal');
	        }
	        if (transition.nano() !== 0) {
	            throw new _errors.IllegalArgumentException('Nano-of-second must be zero');
	        }
	        if (transition instanceof _LocalDateTime.LocalDateTime) {
	            this._transition = transition;
	        } else {
	            this._transition = _LocalDateTime.LocalDateTime.ofEpochSecond(transition, 0, offsetBefore);
	        }
	        this._offsetBefore = offsetBefore;
	        this._offsetAfter = offsetAfter;
	    }

	    ZoneOffsetTransition.prototype.instant = function instant() {
	        return this._transition.toInstant(this._offsetBefore);
	    };

	    ZoneOffsetTransition.prototype.toEpochSecond = function toEpochSecond() {
	        return this._transition.toEpochSecond(this._offsetBefore);
	    };

	    ZoneOffsetTransition.prototype.dateTimeBefore = function dateTimeBefore() {
	        return this._transition;
	    };

	    ZoneOffsetTransition.prototype.dateTimeAfter = function dateTimeAfter() {
	        return this._transition.plusSeconds(this.durationSeconds());
	    };

	    ZoneOffsetTransition.prototype.offsetBefore = function offsetBefore() {
	        return this._offsetBefore;
	    };

	    ZoneOffsetTransition.prototype.offsetAfter = function offsetAfter() {
	        return this._offsetAfter;
	    };

	    ZoneOffsetTransition.prototype.duration = function duration() {
	        return _Duration.Duration.ofSeconds(this.durationSeconds());
	    };

	    ZoneOffsetTransition.prototype.durationSeconds = function durationSeconds() {
	        return this._offsetAfter.totalSeconds() - this._offsetBefore.totalSeconds();
	    };

	    ZoneOffsetTransition.prototype.isGap = function isGap() {
	        return this._offsetAfter.totalSeconds() > this._offsetBefore.totalSeconds();
	    };

	    ZoneOffsetTransition.prototype.isOverlap = function isOverlap() {
	        return this._offsetAfter.totalSeconds() < this._offsetBefore.totalSeconds();
	    };

	    ZoneOffsetTransition.prototype.isValidOffset = function isValidOffset(offset) {
	        return this.isGap() ? false : this._offsetBefore.equals(offset) || this._offsetAfter.equals(offset);
	    };

	    ZoneOffsetTransition.prototype.validOffsets = function validOffsets() {
	        if (this.isGap()) {
	            return [];
	        } else {
	            return [this._offsetBefore, this._offsetAfter];
	        }
	    };

	    ZoneOffsetTransition.prototype.compareTo = function compareTo(transition) {
	        return this.instant().compareTo(transition.instant());
	    };

	    ZoneOffsetTransition.prototype.equals = function equals(other) {
	        if (other === this) {
	            return true;
	        }
	        if (other instanceof ZoneOffsetTransition) {
	            var d = other;
	            return this._transition.equals(d._transition) && this._offsetBefore.equals(d.offsetBefore()) && this._offsetAfter.equals(d.offsetAfter());
	        }
	        return false;
	    };

	    ZoneOffsetTransition.prototype.hashCode = function hashCode() {
	        return this._transition.hashCode() ^ this._offsetBefore.hashCode() ^ this._offsetAfter.hashCode() >>> 16;
	    };

	    ZoneOffsetTransition.prototype.toString = function toString() {
	        return 'Transition[' + (this.isGap() ? 'Gap' : 'Overlap') + ' at ' + this._transition.toString() + this._offsetBefore.toString() + ' to ' + this._offsetAfter + ']';
	    };

	    return ZoneOffsetTransition;
	}();

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.convert = convert;

	var _errors = __webpack_require__(3);

	var _LocalDate = __webpack_require__(8);

	var _LocalDateTime = __webpack_require__(7);

	var _ZonedDateTime = __webpack_require__(60);

	var _ZoneId = __webpack_require__(27);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ToNativeJsConverter = function () {
	    function ToNativeJsConverter(temporal, zone) {
	        _classCallCheck(this, ToNativeJsConverter);

	        var zonedDateTime = void 0;

	        if (temporal instanceof _LocalDate.LocalDate) {
	            zone = zone == null ? _ZoneId.ZoneId.systemDefault() : zone;
	            zonedDateTime = temporal.atStartOfDay(zone);
	        } else if (temporal instanceof _LocalDateTime.LocalDateTime) {
	            zone = zone == null ? _ZoneId.ZoneId.systemDefault() : zone;
	            zonedDateTime = temporal.atZone(zone);
	        } else if (temporal instanceof _ZonedDateTime.ZonedDateTime) {
	            if (zone == null) {
	                zonedDateTime = temporal;
	            } else {
	                zonedDateTime = temporal.withZoneSameInstant(zone);
	            }
	        } else {
	            throw new _errors.IllegalArgumentException('unsupported instance for convert operation:' + temporal);
	        }

	        this.instant = zonedDateTime.toInstant();
	    }

	    ToNativeJsConverter.prototype.toDate = function toDate() {
	        return new Date(this.instant.toEpochMilli());
	    };

	    ToNativeJsConverter.prototype.toEpochMilli = function toEpochMilli() {
	        return this.instant.toEpochMilli();
	    };

	    return ToNativeJsConverter;
	}();

	function convert(temporal, zone) {
	    return new ToNativeJsConverter(temporal, zone);
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.nativeJs = nativeJs;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _MathUtil = __webpack_require__(6);

	var _ZoneId = __webpack_require__(27);

	var _ChronoField = __webpack_require__(12);

	var _TemporalQueries = __webpack_require__(22);

	var _TemporalAccessor2 = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var NativeJsTemporal = function (_TemporalAccessor) {
	    _inherits(NativeJsTemporal, _TemporalAccessor);

	    function NativeJsTemporal(date) {
	        var zone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _ZoneId.ZoneId.systemDefault();

	        _classCallCheck(this, NativeJsTemporal);

	        var _this = _possibleConstructorReturn(this, _TemporalAccessor.call(this));

	        _this._zone = zone;
	        if (date instanceof Date) {
	            _this._epochMilli = date.getTime();
	            return _possibleConstructorReturn(_this);
	        } else if (typeof date.toDate === 'function' && date.toDate() instanceof Date) {
	            _this._epochMilli = date.toDate().getTime();
	            return _possibleConstructorReturn(_this);
	        }
	        (0, _assert.assert)(false, 'date must be either a javascript date or a moment');
	        return _this;
	    }

	    NativeJsTemporal.prototype.query = function query(_query) {
	        (0, _assert.requireNonNull)(_query, 'query');
	        if (_query === _TemporalQueries.TemporalQueries.localDate()) {
	            return _LocalDate.LocalDate.ofInstant(_Instant.Instant.ofEpochMilli(this._epochMilli), this._zone);
	        } else if (_query === _TemporalQueries.TemporalQueries.localTime()) {
	            return _LocalTime.LocalTime.ofInstant(_Instant.Instant.ofEpochMilli(this._epochMilli), this._zone);
	        } else if (_query === _TemporalQueries.TemporalQueries.zone()) {
	            return this._zone;
	        }
	        return _TemporalAccessor.prototype.query.call(this, _query);
	    };

	    NativeJsTemporal.prototype.get = function get(field) {
	        return this.getLong(field);
	    };

	    NativeJsTemporal.prototype.getLong = function getLong(field) {
	        (0, _assert.requireNonNull)(field, 'field');
	        if (field instanceof _ChronoField.ChronoField) {
	            switch (field) {
	                case _ChronoField.ChronoField.NANO_OF_SECOND:
	                    return _MathUtil.MathUtil.floorMod(this._epochMilli, 1000) * 1000000;
	                case _ChronoField.ChronoField.INSTANT_SECONDS:
	                    return _MathUtil.MathUtil.floorDiv(this._epochMilli, 1000);
	            }
	            throw new _errors.UnsupportedTemporalTypeException('Unsupported field: ' + field);
	        }
	        return field.getFrom(this);
	    };

	    NativeJsTemporal.prototype.isSupported = function isSupported(field) {
	        return field === _ChronoField.ChronoField.INSTANT_SECONDS || field === _ChronoField.ChronoField.NANO_OF_SECOND;
	    };

	    return NativeJsTemporal;
	}(_TemporalAccessor2.TemporalAccessor);

	function nativeJs(date, zone) {
	    return new NativeJsTemporal(date, zone);
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ZoneOffset = __webpack_require__(26);

	var _DayOfWeek = __webpack_require__(11);

	var _Duration = __webpack_require__(14);

	var _Instant = __webpack_require__(4);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _LocalDateTime = __webpack_require__(7);

	var _Month = __webpack_require__(24);

	var _MonthDay = __webpack_require__(56);

	var _Period = __webpack_require__(32);

	var _Year = __webpack_require__(55);

	var _YearConstants = __webpack_require__(17);

	var _YearMonth = __webpack_require__(57);

	var _ZonedDateTime = __webpack_require__(60);

	var _IsoChronology = __webpack_require__(9);

	var _DateTimeFormatter = __webpack_require__(31);

	var _ChronoField = __webpack_require__(12);

	var _ChronoUnit = __webpack_require__(13);

	var _IsoFields = __webpack_require__(41);

	var _DateTimeFormatterBuilder = __webpack_require__(25);

	var _TemporalQueriesFactory = __webpack_require__(67);

	var _ZoneIdFactory = __webpack_require__(68);

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	var isInit = false;

	function init() {

	    if (isInit) {
	        return;
	    }

	    isInit = true;

	    (0, _YearConstants._init)();
	    (0, _Duration._init)();
	    (0, _LocalTime._init)();
	    (0, _ChronoUnit._init)();
	    (0, _ChronoField._init)();
	    (0, _IsoFields._init)();
	    (0, _TemporalQueriesFactory._init)();
	    (0, _DayOfWeek._init)();
	    (0, _Instant._init)();
	    (0, _LocalDate._init)();
	    (0, _LocalDateTime._init)();
	    (0, _Year._init)();
	    (0, _Month._init)();
	    (0, _YearMonth._init)();
	    (0, _MonthDay._init)();
	    (0, _Period._init)();
	    (0, _ZoneOffset._init)();
	    (0, _ZonedDateTime._init)();
	    (0, _ZoneIdFactory._init)();
	    (0, _IsoChronology._init)();
	    (0, _DateTimeFormatter._init)();
	    (0, _DateTimeFormatterBuilder._init)();
	}

	init();

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports._init = _init;

	var _ChronoField = __webpack_require__(12);

	var _TemporalQuery = __webpack_require__(23);

	var _TemporalQueries = __webpack_require__(22);

	var _LocalDate = __webpack_require__(8);

	var _LocalTime = __webpack_require__(5);

	var _ZoneOffset = __webpack_require__(26);

	/*
	 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	function _init() {
	    _TemporalQueries.TemporalQueries.ZONE_ID = (0, _TemporalQuery.createTemporalQuery)('ZONE_ID', function (temporal) {
	        return temporal.query(_TemporalQueries.TemporalQueries.ZONE_ID);
	    });

	    _TemporalQueries.TemporalQueries.CHRONO = (0, _TemporalQuery.createTemporalQuery)('CHRONO', function (temporal) {
	        return temporal.query(_TemporalQueries.TemporalQueries.CHRONO);
	    });

	    _TemporalQueries.TemporalQueries.PRECISION = (0, _TemporalQuery.createTemporalQuery)('PRECISION', function (temporal) {
	        return temporal.query(_TemporalQueries.TemporalQueries.PRECISION);
	    });

	    _TemporalQueries.TemporalQueries.OFFSET = (0, _TemporalQuery.createTemporalQuery)('OFFSET', function (temporal) {
	        if (temporal.isSupported(_ChronoField.ChronoField.OFFSET_SECONDS)) {
	            return _ZoneOffset.ZoneOffset.ofTotalSeconds(temporal.get(_ChronoField.ChronoField.OFFSET_SECONDS));
	        }
	        return null;
	    });

	    _TemporalQueries.TemporalQueries.ZONE = (0, _TemporalQuery.createTemporalQuery)('ZONE', function (temporal) {
	        var zone = temporal.query(_TemporalQueries.TemporalQueries.ZONE_ID);
	        return zone != null ? zone : temporal.query(_TemporalQueries.TemporalQueries.OFFSET);
	    });

	    _TemporalQueries.TemporalQueries.LOCAL_DATE = (0, _TemporalQuery.createTemporalQuery)('LOCAL_DATE', function (temporal) {
	        if (temporal.isSupported(_ChronoField.ChronoField.EPOCH_DAY)) {
	            return _LocalDate.LocalDate.ofEpochDay(temporal.getLong(_ChronoField.ChronoField.EPOCH_DAY));
	        }
	        return null;
	    });

	    _TemporalQueries.TemporalQueries.LOCAL_TIME = (0, _TemporalQuery.createTemporalQuery)('LOCAL_TIME', function (temporal) {
	        if (temporal.isSupported(_ChronoField.ChronoField.NANO_OF_DAY)) {
	            return _LocalTime.LocalTime.ofNanoOfDay(temporal.getLong(_ChronoField.ChronoField.NANO_OF_DAY));
	        }
	        return null;
	    });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ZoneIdFactory = undefined;
	exports._init = _init;

	var _assert = __webpack_require__(2);

	var _errors = __webpack_require__(3);

	var _StringUtil = __webpack_require__(28);

	var _ZoneOffset = __webpack_require__(26);

	var _ZoneRegion = __webpack_require__(53);

	var _ZoneId = __webpack_require__(27);

	var _TemporalQueries = __webpack_require__(22);

	var _SystemDefaultZoneId = __webpack_require__(69);

	var _ZoneRulesProvider = __webpack_require__(54);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                           * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                           * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                           */

	var ZoneIdFactory = exports.ZoneIdFactory = function () {
	    function ZoneIdFactory() {
	        _classCallCheck(this, ZoneIdFactory);
	    }

	    ZoneIdFactory.systemDefault = function systemDefault() {
	        return SYSTEM_DEFAULT_ZONE_ID_INSTANCE;
	    };

	    ZoneIdFactory.getAvailableZoneIds = function getAvailableZoneIds() {
	        return _ZoneRulesProvider.ZoneRulesProvider.getAvailableZoneIds();
	    };

	    ZoneIdFactory.of = function of(zoneId) {
	        (0, _assert.requireNonNull)(zoneId, 'zoneId');
	        if (zoneId === 'Z') {
	            return _ZoneOffset.ZoneOffset.UTC;
	        }
	        if (zoneId.length === 1) {
	            throw new _errors.DateTimeException('Invalid zone: ' + zoneId);
	        }
	        if (_StringUtil.StringUtil.startsWith(zoneId, '+') || _StringUtil.StringUtil.startsWith(zoneId, '-')) {
	            return _ZoneOffset.ZoneOffset.of(zoneId);
	        }
	        if (zoneId === 'UTC' || zoneId === 'GMT' || zoneId === 'GMT0' || zoneId === 'UT') {
	            return new _ZoneRegion.ZoneRegion(zoneId, _ZoneOffset.ZoneOffset.UTC.rules());
	        }
	        if (_StringUtil.StringUtil.startsWith(zoneId, 'UTC+') || _StringUtil.StringUtil.startsWith(zoneId, 'GMT+') || _StringUtil.StringUtil.startsWith(zoneId, 'UTC-') || _StringUtil.StringUtil.startsWith(zoneId, 'GMT-')) {
	            var offset = _ZoneOffset.ZoneOffset.of(zoneId.substring(3));
	            if (offset.totalSeconds() === 0) {
	                return new _ZoneRegion.ZoneRegion(zoneId.substring(0, 3), offset.rules());
	            }
	            return new _ZoneRegion.ZoneRegion(zoneId.substring(0, 3) + offset.id(), offset.rules());
	        }
	        if (_StringUtil.StringUtil.startsWith(zoneId, 'UT+') || _StringUtil.StringUtil.startsWith(zoneId, 'UT-')) {
	            var _offset = _ZoneOffset.ZoneOffset.of(zoneId.substring(2));
	            if (_offset.totalSeconds() === 0) {
	                return new _ZoneRegion.ZoneRegion('UT', _offset.rules());
	            }
	            return new _ZoneRegion.ZoneRegion('UT' + _offset.id(), _offset.rules());
	        }

	        if (zoneId === 'SYSTEM') {
	            return _ZoneId.ZoneId.systemDefault();
	        }
	        return _ZoneRegion.ZoneRegion.ofId(zoneId);
	    };

	    ZoneIdFactory.ofOffset = function ofOffset(prefix, offset) {
	        (0, _assert.requireNonNull)(prefix, 'prefix');
	        (0, _assert.requireNonNull)(offset, 'offset');
	        if (prefix.length === 0) {
	            return offset;
	        }
	        if (prefix === 'GMT' || prefix === 'UTC' || prefix === 'UT') {
	            if (offset.totalSeconds() === 0) {
	                return new _ZoneRegion.ZoneRegion(prefix, offset.rules());
	            }
	            return new _ZoneRegion.ZoneRegion(prefix + offset.id(), offset.rules());
	        }
	        throw new _errors.IllegalArgumentException('Invalid prefix, must be GMT, UTC or UT: ' + prefix);
	    };

	    ZoneIdFactory.from = function from(temporal) {
	        (0, _assert.requireNonNull)(temporal, 'temporal');
	        var obj = temporal.query(_TemporalQueries.TemporalQueries.zone());
	        if (obj == null) {
	            throw new _errors.DateTimeException('Unable to obtain ZoneId from TemporalAccessor: ' + temporal + ', type ' + (temporal.constructor != null ? temporal.constructor.name : ''));
	        }
	        return obj;
	    };

	    return ZoneIdFactory;
	}();

	var SYSTEM_DEFAULT_ZONE_ID_INSTANCE = null;

	function _init() {
	    SYSTEM_DEFAULT_ZONE_ID_INSTANCE = new _SystemDefaultZoneId.SystemDefaultZoneId();

	    _ZoneId.ZoneId.systemDefault = ZoneIdFactory.systemDefault;
	    _ZoneId.ZoneId.getAvailableZoneIds = ZoneIdFactory.getAvailableZoneIds;
	    _ZoneId.ZoneId.of = ZoneIdFactory.of;
	    _ZoneId.ZoneId.ofOffset = ZoneIdFactory.ofOffset;
	    _ZoneId.ZoneId.from = ZoneIdFactory.from;
	    _ZoneOffset.ZoneOffset.from = ZoneIdFactory.from;

	    _ZoneId.ZoneId.SYSTEM = SYSTEM_DEFAULT_ZONE_ID_INSTANCE;
	    _ZoneId.ZoneId.UTC = _ZoneOffset.ZoneOffset.ofTotalSeconds(0);
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SystemDefaultZoneId = undefined;

	var _SystemDefaultZoneRules = __webpack_require__(70);

	var _ZoneId2 = __webpack_require__(27);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SystemDefaultZoneId = exports.SystemDefaultZoneId = function (_ZoneId) {
	    _inherits(SystemDefaultZoneId, _ZoneId);

	    function SystemDefaultZoneId() {
	        _classCallCheck(this, SystemDefaultZoneId);

	        var _this = _possibleConstructorReturn(this, _ZoneId.call(this));

	        _this._rules = new _SystemDefaultZoneRules.SystemDefaultZoneRules();
	        return _this;
	    }

	    SystemDefaultZoneId.prototype.rules = function rules() {
	        return this._rules;
	    };

	    SystemDefaultZoneId.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        return false;
	    };

	    SystemDefaultZoneId.prototype.id = function id() {
	        return 'SYSTEM';
	    };

	    return SystemDefaultZoneId;
	}(_ZoneId2.ZoneId);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SystemDefaultZoneRules = undefined;

	var _ZoneRules2 = __webpack_require__(29);

	var _ZoneOffset = __webpack_require__(26);

	var _errors = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var SystemDefaultZoneRules = exports.SystemDefaultZoneRules = function (_ZoneRules) {
	    _inherits(SystemDefaultZoneRules, _ZoneRules);

	    function SystemDefaultZoneRules() {
	        _classCallCheck(this, SystemDefaultZoneRules);

	        return _possibleConstructorReturn(this, _ZoneRules.apply(this, arguments));
	    }

	    SystemDefaultZoneRules.prototype.isFixedOffset = function isFixedOffset() {
	        return false;
	    };

	    SystemDefaultZoneRules.prototype.offsetOfInstant = function offsetOfInstant(instant) {
	        var offsetInMinutes = new Date(instant.toEpochMilli()).getTimezoneOffset();
	        return _ZoneOffset.ZoneOffset.ofTotalMinutes(offsetInMinutes * -1);
	    };

	    SystemDefaultZoneRules.prototype.offsetOfEpochMilli = function offsetOfEpochMilli(epochMilli) {
	        var offsetInMinutes = new Date(epochMilli).getTimezoneOffset();
	        return _ZoneOffset.ZoneOffset.ofTotalMinutes(offsetInMinutes * -1);
	    };

	    SystemDefaultZoneRules.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime(localDateTime) {
	        var epochMilli = localDateTime.toEpochSecond(_ZoneOffset.ZoneOffset.UTC) * 1000;
	        var offsetInMinutesBeforePossibleTransition = new Date(epochMilli).getTimezoneOffset();
	        var epochMilliSystemZone = epochMilli + offsetInMinutesBeforePossibleTransition * 60000;
	        var offsetInMinutesAfterPossibleTransition = new Date(epochMilliSystemZone).getTimezoneOffset();
	        return _ZoneOffset.ZoneOffset.ofTotalMinutes(offsetInMinutesAfterPossibleTransition * -1);
	    };

	    SystemDefaultZoneRules.prototype.validOffsets = function validOffsets(localDateTime) {
	        return [this.offsetOfLocalDateTime(localDateTime)];
	    };

	    SystemDefaultZoneRules.prototype.transition = function transition() {
	        return null;
	    };

	    SystemDefaultZoneRules.prototype.standardOffset = function standardOffset(instant) {
	        return this.offsetOfInstant(instant);
	    };

	    SystemDefaultZoneRules.prototype.daylightSavings = function daylightSavings() {
	        this._throwNotSupported();
	    };

	    SystemDefaultZoneRules.prototype.isDaylightSavings = function isDaylightSavings() {
	        this._throwNotSupported();
	    };

	    SystemDefaultZoneRules.prototype.isValidOffset = function isValidOffset(dateTime, offset) {
	        return this.offsetOfLocalDateTime(dateTime).equals(offset);
	    };

	    SystemDefaultZoneRules.prototype.nextTransition = function nextTransition() {
	        this._throwNotSupported();
	    };

	    SystemDefaultZoneRules.prototype.previousTransition = function previousTransition() {
	        this._throwNotSupported();
	    };

	    SystemDefaultZoneRules.prototype.transitions = function transitions() {
	        this._throwNotSupported();
	    };

	    SystemDefaultZoneRules.prototype.transitionRules = function transitionRules() {
	        this._throwNotSupported();
	    };

	    SystemDefaultZoneRules.prototype._throwNotSupported = function _throwNotSupported() {
	        throw new _errors.DateTimeException('not supported operation');
	    };

	    SystemDefaultZoneRules.prototype.equals = function equals(other) {
	        if (this === other || other instanceof SystemDefaultZoneRules) {
	            return true;
	        } else {
	            return false;
	        }
	    };

	    SystemDefaultZoneRules.prototype.toString = function toString() {
	        return 'SYSTEM';
	    };

	    return SystemDefaultZoneRules;
	}(_ZoneRules2.ZoneRules);

/***/ }
/******/ ])
});
;
//! @version js-joda-timezone - 1.0.0-2016j
//! @copyright (c) 2015-2016, Philipp Thürwächter, Pattrick Hüper & js-joda contributors
//! @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("js-joda"));
	else if(typeof define === 'function' && define.amd)
		define(["js-joda"], factory);
	else if(typeof exports === 'object')
		exports["JSJodaTimezone"] = factory(require("js-joda"));
	else
		root["JSJodaTimezone"] = factory(root["JSJoda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _plug = __webpack_require__(1);

	var _plug2 = _interopRequireDefault(_plug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _plug2.default; /*
	                                   * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
	                                   * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                   */

	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (jsJoda) {
	  jsJoda.ZoneRulesProvider.getRules = _MomentZoneRulesProvider.MomentZoneRulesProvider.getRules;
	  jsJoda.ZoneRulesProvider.getAvailableZoneIds = _MomentZoneRulesProvider.MomentZoneRulesProvider.getAvailableZoneIds;
	  return jsJoda;
	};

	var _latest = __webpack_require__(2);

	var _latest2 = _interopRequireDefault(_latest);

	var _MomentZoneRulesProvider = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
	 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	 */

	_MomentZoneRulesProvider.MomentZoneRulesProvider.loadData(_latest2.default);

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"version": "2016j",
		"zones": [
			"Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5",
			"Africa/Accra|LMT GMT GHST|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5",
			"Africa/Nairobi|LMT EAT BEAT BEAUT|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5",
			"Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5",
			"Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6",
			"Africa/Bissau|LMT WAT GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4",
			"Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5",
			"Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6",
			"Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5",
			"Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1y7p0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3",
			"Africa/El_Aaiun|LMT WAT WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4",
			"Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5",
			"Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|51e5",
			"Africa/Monrovia|MMT LRT GMT|H.8 I.u 0|012|-23Lzg.Q 29s01.m|11e5",
			"Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5",
			"Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5",
			"Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5",
			"Africa/Windhoek|SWAT SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0|32e4",
			"America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326",
			"America/Anchorage|CAT CAWT CAPT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4",
			"America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3",
			"America/Araguaina|LMT BRT BRST|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4",
			"America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0",
			"America/Argentina/Catamarca|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0",
			"America/Argentina/Cordoba|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0",
			"America/Argentina/Jujuy|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 g0p0 10M0 j3c0 uL0",
			"America/Argentina/La_Rioja|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0",
			"America/Argentina/Mendoza|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|0121212121212121212121212121212121212121213434345656543235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 g0p0 10M0 agM0 Op0 7TX0 uL0",
			"America/Argentina/Rio_Gallegos|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0",
			"America/Argentina/Salta|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0",
			"America/Argentina/San_Juan|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ak00 m10 8lb0 uL0",
			"America/Argentina/San_Luis|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456536353465653|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 kin0 10M0 ak00 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0",
			"America/Argentina/Tucuman|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|012121212121212121212121212121212121212121343434345434323534343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 4N0 8BX0 uL0 1qN0 WL0",
			"America/Argentina/Ushuaia|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ajA0 8p0 8zb0 uL0",
			"America/Curacao|LMT ANT AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4",
			"America/Asuncion|AMT PYT PYT PYST|3O.E 40 30 30|012131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5",
			"America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2",
			"America/Bahia|LMT BRT BRST|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5",
			"America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3",
			"America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4",
			"America/Belem|LMT BRT BRST|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5",
			"America/Belize|LMT CST CHDT CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3",
			"America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2",
			"America/Boa_Vista|LMT AMT AMST|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2",
			"America/Bogota|BMT COT COST|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5",
			"America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4",
			"America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2",
			"America/Campo_Grande|LMT AMT AMST|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4",
			"America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4",
			"America/Caracas|CMT VET VET|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5",
			"America/Cayenne|LMT GFT GFT|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3",
			"America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5",
			"America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5",
			"America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4",
			"America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5",
			"America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2",
			"America/Cuiaba|LMT AMT AMST|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4",
			"America/Danmarkshavn|LMT WGT WGST GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8",
			"America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2",
			"America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3",
			"America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5",
			"America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5",
			"America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5",
			"America/Eirunepe|LMT ACT ACST AMT|4D.s 50 40 40|0121212121212121212121212121212131|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3",
			"America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5",
			"America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5",
			"America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2",
			"America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Fortaleza|LMT BRT BRST|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5",
			"America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3",
			"America/Godthab|LMT WGT WGST|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3",
			"America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2",
			"America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2",
			"America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5",
			"America/Guayaquil|QMT ECT|5e 50|01|-1yVSK|27e5",
			"America/Guyana|LMT GBGT GYT GYT GYT|3Q.E 3J 3J 30 40|01234|-2dvU7.k 24JzQ.k mlc0 Bxbf|80e4",
			"America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4",
			"America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5",
			"America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4",
			"America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2",
			"America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2",
			"America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4",
			"America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3",
			"America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/La_Paz|CMT BOST BOT|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5",
			"America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6",
			"America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6",
			"America/Maceio|LMT BRT BRST|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4",
			"America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5",
			"America/Manaus|LMT AMT AMST|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5",
			"America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4",
			"America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4",
			"America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4",
			"America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2",
			"America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5",
			"America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2",
			"America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6",
			"America/Miquelon|LMT AST PMST PMDT|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2",
			"America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3",
			"America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5",
			"America/Montevideo|MMT UYT UYHST UYST UYT UYHST|3I.I 3u 30 20 30 2u|012121212121212121212121213434343434345454543453434343434343434343434343434343434343434|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5",
			"America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5",
			"America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4",
			"America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6",
			"America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2",
			"America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2",
			"America/Noronha|LMT FNT FNST|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2",
			"America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3",
			"America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2",
			"America/Paramaribo|LMT PMT PMT NEGT SRT SRT|3E.E 3E.Q 3E.A 3u 3u 30|012345|-2nDUj.k Wqo0.c qanX.I 1dmLN.o lzc0|24e4",
			"America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5",
			"America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5",
			"America/Rio_Branco|LMT ACT ACST AMT|4v.c 50 40 40|01212121212121212121212121212131|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4",
			"America/Porto_Velho|LMT AMT AMST|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4",
			"America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5",
			"America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842",
			"America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2",
			"America/Recife|LMT BRT BRST|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5",
			"America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4",
			"America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229",
			"America/Santarem|LMT AMT AMST BRT|3C.M 40 30 30|0121212121212121212121212121213|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4",
			"America/Santiago|SMT CLT CLT CLST CLST|4G.K 50 40 40 30|010203131313131212421242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5",
			"America/Santo_Domingo|SDMT EST EDT EHDT AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5",
			"America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6",
			"America/Scoresbysund|LMT CGT CGST EGST EGT|1r.Q 20 10 0 10|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452",
			"America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2",
			"America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4",
			"America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3",
			"America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5",
			"America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656",
			"America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4",
			"America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5",
			"America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3",
			"America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4",
			"America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642",
			"America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3",
			"Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212|-2q00 1DjS0 T90 40P0 KL0 blz0|10",
			"Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70",
			"Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80",
			"Antarctica/Macquarie|AEST AEDT -00 MIST|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1",
			"Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60",
			"Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5",
			"Antarctica/Palmer|-00 ARST ART ART ARST CLT CLST|0 30 40 30 20 40 30|0121212121234356565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|40",
			"Antarctica/Rothera|-00 -03|0 30|01|gOo0|130",
			"Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20",
			"Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40",
			"Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25",
			"Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4",
			"Asia/Riyadh|LMT AST|-36.Q -30|01|-TvD6.Q|57e5",
			"Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5",
			"Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5",
			"Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3",
			"Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4",
			"Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4",
			"Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4",
			"Asia/Atyrau|LMT +04 +05 +06|-3r.I -40 -50 -60|01232323232323232323212323232323232321212121212|-1Pc3r.I eUnr.I 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0",
			"Asia/Baghdad|BMT AST ADT|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5",
			"Asia/Qatar|LMT GST AST|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4",
			"Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5",
			"Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4|15e6",
			"Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0",
			"Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5",
			"Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4",
			"Asia/Brunei|LMT BNT BNT|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4",
			"Asia/Kolkata|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0|15e6",
			"Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4",
			"Asia/Choibalsan|LMT ULAT ULAT CHOST CHOT CHOT CHOST|-7C -70 -80 -a0 -90 -80 -90|0123434343434343434343434343434343434343434343456565656565656565656565656565656565656565656565|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3",
			"Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6",
			"Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5",
			"Asia/Dhaka|HMT BURT IST DACT BDT BDST|-5R.k -6u -5u -60 -60 -70|01213454|-18LFR.k 1unn.k HB0 m6n0 LqMu 1x6n0 1i00|16e6",
			"Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5",
			"Asia/Dili|LMT TLT JST TLT WITA|-8m.k -80 -90 -90 -80|012343|-2le8m.k 1dnXm.k 8HA0 1ew00 Xld0|19e4",
			"Asia/Dubai|LMT GST|-3F.c -40|01|-21JfF.c|39e5",
			"Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4",
			"Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212123|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0",
			"Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5",
			"Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4",
			"Asia/Ho_Chi_Minh|LMT PLMT ICT IDT JST|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5",
			"Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5",
			"Asia/Hovd|LMT HOVT HOVT HOVST|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3",
			"Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4",
			"Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6",
			"Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6",
			"Asia/Jayapura|LMT WIT ACST|-9m.M -90 -9u|0121|-1uu9m.M sMMm.M L4nu|26e4",
			"Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4",
			"Asia/Kabul|AFT AFT|-40 -4u|01|-10Qs0|46e5",
			"Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4",
			"Asia/Karachi|LMT IST IST KART PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6",
			"Asia/Urumqi|LMT XJT|-5O.k -60|01|-1GgtO.k|32e5",
			"Asia/Kathmandu|LMT IST NPT|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5",
			"Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2",
			"Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5",
			"Asia/Kuala_Lumpur|SMT MALT MALST MALT MALT JST MYT|-6T.p -70 -7k -7k -7u -90 -80|01234546|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu 1so1u|71e5",
			"Asia/Kuching|LMT BORT BORT BORTST JST MYT|-7l.k -7u -80 -8k -90 -80|01232323232323232425|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0 1so10|13e4",
			"Asia/Macau|LMT MOT MOST CST|-7y.k -80 -90 -80|0121212121212121212121212121212121212121213|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0 KEp0|57e4",
			"Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3",
			"Asia/Makassar|LMT MMT WITA JST|-7V.A -7V.A -80 -90|01232|-21JjV.A vfc0 myLV.A 8ML0|15e5",
			"Asia/Manila|PHT PHST JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6",
			"Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4",
			"Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4",
			"Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5",
			"Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5",
			"Asia/Oral|LMT +04 +05 +06|-3p.o -40 -50 -60|01232323232323232121212121212121212121212121212|-1Pc3p.o eUnp.o 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4",
			"Asia/Pontianak|LMT PMT WIB JST WIB WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4",
			"Asia/Pyongyang|LMT KST JCST JST KST|-8n -8u -90 -90 -90|012341|-2um8n 97XR 12FXu jdA0 2Onc0|29e5",
			"Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4",
			"Asia/Rangoon|RMT BURT JST MMT|-6o.E -6u -90 -6u|0123|-21Jio.E SmnS.E 7j9u|48e5",
			"Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4",
			"Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4",
			"Asia/Seoul|LMT KST JCST JST KST KDT KDT|-8r.Q -8u -90 -90 -90 -9u -a0|01234151515151515146464|-2um8r.Q 97XV.Q 12FXu jjA0 kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6",
			"Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0|56e5",
			"Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2",
			"Asia/Taipei|JWST JST CST CDT|-80 -90 -80 -90|01232323232323232323232323232323232323232|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5",
			"Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5",
			"Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5",
			"Asia/Tehran|LMT TMT IRST IRST IRDT IRDT|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6",
			"Asia/Thimphu|LMT IST BTT|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3",
			"Asia/Tokyo|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6",
			"Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5",
			"Asia/Ulaanbaatar|LMT ULAT ULAT ULAST|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5",
			"Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2",
			"Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4",
			"Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4",
			"Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5",
			"Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5",
			"Atlantic/Azores|HMT AZOT AZOST AZOMT AZOT AZOST WET|1S.w 20 10 0 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545456545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4",
			"Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3",
			"Atlantic/Canary|LMT CANT WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4",
			"Atlantic/Cape_Verde|LMT CVT CVST CVT|1y.4 20 10 10|01213|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4",
			"Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3",
			"Atlantic/Madeira|FMT MADT MADST MADMT WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4",
			"Atlantic/Reykjavik|LMT IST ISST GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4",
			"Atlantic/South_Georgia|GST|20|0||30",
			"Atlantic/Stanley|SMT FKT FKST FKT FKST|3P.o 40 30 30 20|0121212121212134343212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 U10 1qM0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2",
			"Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5",
			"Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5",
			"Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5",
			"Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3",
			"Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746",
			"Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4",
			"Australia/Eucla|ACWST ACWDT|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368",
			"Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4",
			"Australia/Lord_Howe|AEST LHST LHDT LHDT|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347",
			"Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10",
			"Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5",
			"Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5",
			"CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"Pacific/Easter|EMT EAST EASST EAST EASST|7h.s 70 60 60 50|0121212121212121212121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2",
			"EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"EST|EST|50|0|",
			"EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
			"Etc/GMT+0|GMT|0|0|",
			"Etc/GMT+1|-01|10|0|",
			"Etc/GMT+10|-10|a0|0|",
			"Etc/GMT+11|-11|b0|0|",
			"Etc/GMT+12|-12|c0|0|",
			"Etc/GMT+2|-02|20|0|",
			"Etc/GMT+3|-03|30|0|",
			"Etc/GMT+4|-04|40|0|",
			"Etc/GMT+5|-05|50|0|",
			"Etc/GMT+6|-06|60|0|",
			"Etc/GMT+7|-07|70|0|",
			"Etc/GMT+8|-08|80|0|",
			"Etc/GMT+9|-09|90|0|",
			"Etc/GMT-1|+01|-10|0|",
			"Etc/GMT-10|+10|-a0|0|",
			"Etc/GMT-11|+11|-b0|0|",
			"Etc/GMT-12|+12|-c0|0|",
			"Etc/GMT-13|+13|-d0|0|",
			"Etc/GMT-14|+14|-e0|0|",
			"Etc/GMT-2|+02|-20|0|",
			"Etc/GMT-3|+03|-30|0|",
			"Etc/GMT-4|+04|-40|0|",
			"Etc/GMT-5|+05|-50|0|",
			"Etc/GMT-6|+06|-60|0|",
			"Etc/GMT-7|+07|-70|0|",
			"Etc/GMT-8|+08|-80|0|",
			"Etc/GMT-9|+09|-90|0|",
			"Etc/UCT|UCT|0|0|",
			"Etc/UTC|UTC|0|0|",
			"Europe/Amsterdam|AMT NST NEST NET CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5",
			"Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3",
			"Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0",
			"Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5",
			"Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6",
			"Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
			"Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5",
			"Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5",
			"Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5",
			"Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5",
			"Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5",
			"Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4",
			"Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4",
			"Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
			"Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3",
			"Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
			"Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4",
			"Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5",
			"Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4",
			"Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5",
			"Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4",
			"Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|01010101010101010101010121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-28dd0 11A0 1go0 19A0 1co0 1dA0 b1A0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 iyo0 Rc0 18o0 1hc0 1io0 1a00 14o0 5aL0 MM0 1vc0 17A0 1i00 1bc0 1eo0 17d0 1in0 17A0 6hA0 10N0 XIL0 1a10 1in0 17d0 19X0 1cN0 1fz0 1a10 1fX0 1cp0 1cO0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5",
			"Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4",
			"Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5",
			"Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3",
			"Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6",
			"Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6",
			"Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4",
			"Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5",
			"Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5",
			"Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810",
			"Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4",
			"Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
			"Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5",
			"Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4",
			"Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4",
			"Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0",
			"Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4",
			"Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5",
			"Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4",
			"Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5",
			"Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5",
			"Europe/Zaporozhye|CUT EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4",
			"HST|HST|a0|0|",
			"Indian/Chagos|LMT IOT IOT|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2",
			"Indian/Christmas|CXT|-70|0||21e2",
			"Indian/Cocos|CCT|-6u|0||596",
			"Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130",
			"Indian/Mahe|LMT SCT|-3F.M -40|01|-2yO3F.M|79e3",
			"Indian/Maldives|MMT MVT|-4S -50|01|-olgS|35e4",
			"Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4",
			"Indian/Reunion|LMT RET|-3F.Q -40|01|-2mDDF.Q|84e4",
			"Pacific/Kwajalein|MHT KWAT MHT|-b0 c0 -c0|012|-AX0 W9X0|14e3",
			"MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"MST|MST|70|0|",
			"MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"Pacific/Chatham|CHAST CHAST CHADT|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600",
			"PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"Pacific/Apia|LMT WSST SST SDT WSDT WSST|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3",
			"Pacific/Bougainville|PGT JST BST|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4",
			"Pacific/Chuuk|CHUT|-a0|0||49e3",
			"Pacific/Efate|LMT VUT VUST|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3",
			"Pacific/Enderbury|PHOT PHOT PHOT|c0 b0 -d0|012|nIc0 B8n0|1",
			"Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483",
			"Pacific/Fiji|LMT FJT FJST|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|88e4",
			"Pacific/Funafuti|TVT|-c0|0||45e2",
			"Pacific/Galapagos|LMT ECT GALT|5W.o 50 60|012|-1yVS1.A 2dTz1.A|25e3",
			"Pacific/Gambier|LMT GAMT|8X.M 90|01|-2jof0.c|125",
			"Pacific/Guadalcanal|LMT SBT|-aD.M -b0|01|-2joyD.M|11e4",
			"Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4",
			"Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4",
			"Pacific/Kiritimati|LINT LINT LINT|aE a0 -e0|012|nIaE B8nk|51e2",
			"Pacific/Kosrae|KOST KOST|-b0 -c0|010|-AX0 1bdz0|66e2",
			"Pacific/Majuro|MHT MHT|-b0 -c0|01|-AX0|28e3",
			"Pacific/Marquesas|LMT MART|9i 9u|01|-2joeG|86e2",
			"Pacific/Pago_Pago|LMT NST BST SST|bm.M b0 b0 b0|0123|-2nDMB.c 2gVzB.c EyM0|37e2",
			"Pacific/Nauru|LMT NRT JST NRT|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3",
			"Pacific/Niue|NUT NUT NUT|bk bu b0|012|-KfME 17y0a|12e2",
			"Pacific/Norfolk|NMT NFT NFST NFT|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4",
			"Pacific/Noumea|LMT NCT NCST|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3",
			"Pacific/Palau|PWT|-90|0||21e3",
			"Pacific/Pitcairn|PNT PST|8u 80|01|18Vku|56",
			"Pacific/Pohnpei|PONT|-b0|0||34e3",
			"Pacific/Port_Moresby|PGT|-a0|0||25e4",
			"Pacific/Rarotonga|CKT CKHST CKT|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3",
			"Pacific/Tahiti|LMT TAHT|9W.g a0|01|-2joe1.I|18e4",
			"Pacific/Tarawa|GILT|-c0|0||29e3",
			"Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121212121212121212121212121212121212121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|75e3",
			"Pacific/Wake|WAKT|-c0|0||16e3",
			"Pacific/Wallis|WFT|-c0|0||94",
			"WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"
		],
		"links": [
			"Africa/Abidjan|Africa/Bamako",
			"Africa/Abidjan|Africa/Banjul",
			"Africa/Abidjan|Africa/Conakry",
			"Africa/Abidjan|Africa/Dakar",
			"Africa/Abidjan|Africa/Freetown",
			"Africa/Abidjan|Africa/Lome",
			"Africa/Abidjan|Africa/Nouakchott",
			"Africa/Abidjan|Africa/Ouagadougou",
			"Africa/Abidjan|Africa/Sao_Tome",
			"Africa/Abidjan|Africa/Timbuktu",
			"Africa/Abidjan|Atlantic/St_Helena",
			"Africa/Cairo|Egypt",
			"Africa/Johannesburg|Africa/Maseru",
			"Africa/Johannesburg|Africa/Mbabane",
			"Africa/Khartoum|Africa/Juba",
			"Africa/Lagos|Africa/Bangui",
			"Africa/Lagos|Africa/Brazzaville",
			"Africa/Lagos|Africa/Douala",
			"Africa/Lagos|Africa/Kinshasa",
			"Africa/Lagos|Africa/Libreville",
			"Africa/Lagos|Africa/Luanda",
			"Africa/Lagos|Africa/Malabo",
			"Africa/Lagos|Africa/Niamey",
			"Africa/Lagos|Africa/Porto-Novo",
			"Africa/Maputo|Africa/Blantyre",
			"Africa/Maputo|Africa/Bujumbura",
			"Africa/Maputo|Africa/Gaborone",
			"Africa/Maputo|Africa/Harare",
			"Africa/Maputo|Africa/Kigali",
			"Africa/Maputo|Africa/Lubumbashi",
			"Africa/Maputo|Africa/Lusaka",
			"Africa/Nairobi|Africa/Addis_Ababa",
			"Africa/Nairobi|Africa/Asmara",
			"Africa/Nairobi|Africa/Asmera",
			"Africa/Nairobi|Africa/Dar_es_Salaam",
			"Africa/Nairobi|Africa/Djibouti",
			"Africa/Nairobi|Africa/Kampala",
			"Africa/Nairobi|Africa/Mogadishu",
			"Africa/Nairobi|Indian/Antananarivo",
			"Africa/Nairobi|Indian/Comoro",
			"Africa/Nairobi|Indian/Mayotte",
			"Africa/Tripoli|Libya",
			"America/Adak|America/Atka",
			"America/Adak|US/Aleutian",
			"America/Anchorage|US/Alaska",
			"America/Argentina/Buenos_Aires|America/Buenos_Aires",
			"America/Argentina/Catamarca|America/Argentina/ComodRivadavia",
			"America/Argentina/Catamarca|America/Catamarca",
			"America/Argentina/Cordoba|America/Cordoba",
			"America/Argentina/Cordoba|America/Rosario",
			"America/Argentina/Jujuy|America/Jujuy",
			"America/Argentina/Mendoza|America/Mendoza",
			"America/Atikokan|America/Coral_Harbour",
			"America/Chicago|US/Central",
			"America/Curacao|America/Aruba",
			"America/Curacao|America/Kralendijk",
			"America/Curacao|America/Lower_Princes",
			"America/Denver|America/Shiprock",
			"America/Denver|Navajo",
			"America/Denver|US/Mountain",
			"America/Detroit|US/Michigan",
			"America/Edmonton|Canada/Mountain",
			"America/Fort_Wayne|America/Indiana/Indianapolis",
			"America/Fort_Wayne|America/Indianapolis",
			"America/Fort_Wayne|US/East-Indiana",
			"America/Halifax|Canada/Atlantic",
			"America/Havana|Cuba",
			"America/Indiana/Knox|America/Knox_IN",
			"America/Indiana/Knox|US/Indiana-Starke",
			"America/Jamaica|Jamaica",
			"America/Kentucky/Louisville|America/Louisville",
			"America/Los_Angeles|US/Pacific",
			"America/Los_Angeles|US/Pacific-New",
			"America/Manaus|Brazil/West",
			"America/Mazatlan|Mexico/BajaSur",
			"America/Mexico_City|Mexico/General",
			"America/New_York|US/Eastern",
			"America/Noronha|Brazil/DeNoronha",
			"America/Panama|America/Cayman",
			"America/Phoenix|US/Arizona",
			"America/Port_of_Spain|America/Anguilla",
			"America/Port_of_Spain|America/Antigua",
			"America/Port_of_Spain|America/Dominica",
			"America/Port_of_Spain|America/Grenada",
			"America/Port_of_Spain|America/Guadeloupe",
			"America/Port_of_Spain|America/Marigot",
			"America/Port_of_Spain|America/Montserrat",
			"America/Port_of_Spain|America/St_Barthelemy",
			"America/Port_of_Spain|America/St_Kitts",
			"America/Port_of_Spain|America/St_Lucia",
			"America/Port_of_Spain|America/St_Thomas",
			"America/Port_of_Spain|America/St_Vincent",
			"America/Port_of_Spain|America/Tortola",
			"America/Port_of_Spain|America/Virgin",
			"America/Regina|Canada/East-Saskatchewan",
			"America/Regina|Canada/Saskatchewan",
			"America/Rio_Branco|America/Porto_Acre",
			"America/Rio_Branco|Brazil/Acre",
			"America/Santiago|Chile/Continental",
			"America/Sao_Paulo|Brazil/East",
			"America/St_Johns|Canada/Newfoundland",
			"America/Tijuana|America/Ensenada",
			"America/Tijuana|America/Santa_Isabel",
			"America/Tijuana|Mexico/BajaNorte",
			"America/Toronto|America/Montreal",
			"America/Toronto|Canada/Eastern",
			"America/Vancouver|Canada/Pacific",
			"America/Whitehorse|Canada/Yukon",
			"America/Winnipeg|Canada/Central",
			"Asia/Ashgabat|Asia/Ashkhabad",
			"Asia/Bangkok|Asia/Phnom_Penh",
			"Asia/Bangkok|Asia/Vientiane",
			"Asia/Dhaka|Asia/Dacca",
			"Asia/Dubai|Asia/Muscat",
			"Asia/Ho_Chi_Minh|Asia/Saigon",
			"Asia/Hong_Kong|Hongkong",
			"Asia/Jerusalem|Asia/Tel_Aviv",
			"Asia/Jerusalem|Israel",
			"Asia/Kathmandu|Asia/Katmandu",
			"Asia/Kolkata|Asia/Calcutta",
			"Asia/Macau|Asia/Macao",
			"Asia/Makassar|Asia/Ujung_Pandang",
			"Asia/Nicosia|Europe/Nicosia",
			"Asia/Qatar|Asia/Bahrain",
			"Asia/Rangoon|Asia/Yangon",
			"Asia/Riyadh|Asia/Aden",
			"Asia/Riyadh|Asia/Kuwait",
			"Asia/Seoul|ROK",
			"Asia/Shanghai|Asia/Chongqing",
			"Asia/Shanghai|Asia/Chungking",
			"Asia/Shanghai|Asia/Harbin",
			"Asia/Shanghai|PRC",
			"Asia/Singapore|Singapore",
			"Asia/Taipei|ROC",
			"Asia/Tehran|Iran",
			"Asia/Thimphu|Asia/Thimbu",
			"Asia/Tokyo|Japan",
			"Asia/Ulaanbaatar|Asia/Ulan_Bator",
			"Asia/Urumqi|Asia/Kashgar",
			"Atlantic/Faroe|Atlantic/Faeroe",
			"Atlantic/Reykjavik|Iceland",
			"Australia/Adelaide|Australia/South",
			"Australia/Brisbane|Australia/Queensland",
			"Australia/Broken_Hill|Australia/Yancowinna",
			"Australia/Darwin|Australia/North",
			"Australia/Hobart|Australia/Tasmania",
			"Australia/Lord_Howe|Australia/LHI",
			"Australia/Melbourne|Australia/Victoria",
			"Australia/Perth|Australia/West",
			"Australia/Sydney|Australia/ACT",
			"Australia/Sydney|Australia/Canberra",
			"Australia/Sydney|Australia/NSW",
			"Etc/GMT+0|Etc/GMT",
			"Etc/GMT+0|Etc/GMT-0",
			"Etc/GMT+0|Etc/GMT0",
			"Etc/GMT+0|Etc/Greenwich",
			"Etc/GMT+0|GMT",
			"Etc/GMT+0|GMT+0",
			"Etc/GMT+0|GMT-0",
			"Etc/GMT+0|GMT0",
			"Etc/GMT+0|Greenwich",
			"Etc/UCT|UCT",
			"Etc/UTC|Etc/Universal",
			"Etc/UTC|Etc/Zulu",
			"Etc/UTC|UTC",
			"Etc/UTC|Universal",
			"Etc/UTC|Zulu",
			"Europe/Belgrade|Europe/Ljubljana",
			"Europe/Belgrade|Europe/Podgorica",
			"Europe/Belgrade|Europe/Sarajevo",
			"Europe/Belgrade|Europe/Skopje",
			"Europe/Belgrade|Europe/Zagreb",
			"Europe/Chisinau|Europe/Tiraspol",
			"Europe/Dublin|Eire",
			"Europe/Helsinki|Europe/Mariehamn",
			"Europe/Istanbul|Asia/Istanbul",
			"Europe/Istanbul|Turkey",
			"Europe/Lisbon|Portugal",
			"Europe/London|Europe/Belfast",
			"Europe/London|Europe/Guernsey",
			"Europe/London|Europe/Isle_of_Man",
			"Europe/London|Europe/Jersey",
			"Europe/London|GB",
			"Europe/London|GB-Eire",
			"Europe/Moscow|W-SU",
			"Europe/Oslo|Arctic/Longyearbyen",
			"Europe/Oslo|Atlantic/Jan_Mayen",
			"Europe/Prague|Europe/Bratislava",
			"Europe/Rome|Europe/San_Marino",
			"Europe/Rome|Europe/Vatican",
			"Europe/Warsaw|Poland",
			"Europe/Zurich|Europe/Busingen",
			"Europe/Zurich|Europe/Vaduz",
			"Pacific/Auckland|Antarctica/McMurdo",
			"Pacific/Auckland|Antarctica/South_Pole",
			"Pacific/Auckland|NZ",
			"Pacific/Chatham|NZ-CHAT",
			"Pacific/Chuuk|Pacific/Truk",
			"Pacific/Chuuk|Pacific/Yap",
			"Pacific/Easter|Chile/EasterIsland",
			"Pacific/Guam|Pacific/Saipan",
			"Pacific/Honolulu|Pacific/Johnston",
			"Pacific/Honolulu|US/Hawaii",
			"Pacific/Kwajalein|Kwajalein",
			"Pacific/Pago_Pago|Pacific/Midway",
			"Pacific/Pago_Pago|Pacific/Samoa",
			"Pacific/Pago_Pago|US/Samoa",
			"Pacific/Pohnpei|Pacific/Ponape"
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MomentZoneRulesProvider = undefined;

	var _jsJoda = __webpack_require__(4);

	var _MomentZoneRules = __webpack_require__(5);

	var _unpack = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var TZDB_VERSION = null;
	var AVAILABLE_ZONE_IDS = [];

	var zones = {};
	var links = {};

	var MomentZoneRulesProvider = exports.MomentZoneRulesProvider = function (_ZoneRulesProvider) {
	    _inherits(MomentZoneRulesProvider, _ZoneRulesProvider);

	    function MomentZoneRulesProvider() {
	        _classCallCheck(this, MomentZoneRulesProvider);

	        return _possibleConstructorReturn(this, _ZoneRulesProvider.apply(this, arguments));
	    }

	    MomentZoneRulesProvider.getRules = function getRules(zoneId) {
	        var tzdbZoneInfo = zones[links[zoneId]];
	        if (tzdbZoneInfo == null) {
	            throw new _jsJoda.DateTimeException('Unknown time-zone ID: ' + zoneId);
	        }
	        return new _MomentZoneRules.MomentZoneRules(tzdbZoneInfo);
	    };

	    MomentZoneRulesProvider.getAvailableZoneIds = function getAvailableZoneIds() {
	        return AVAILABLE_ZONE_IDS;
	    };

	    MomentZoneRulesProvider.getVersion = function getVersion() {
	        return TZDB_VERSION;
	    };

	    MomentZoneRulesProvider.loadData = function loadData(packedJson) {
	        TZDB_VERSION = packedJson.version;

	        for (var _iterator = packedJson.zones, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }

	            var packedZoneInfo = _ref;

	            var tzdbZoneInfo = (0, _unpack.unpack)(packedZoneInfo);
	            AVAILABLE_ZONE_IDS.push(tzdbZoneInfo.name);
	            zones[tzdbZoneInfo.name] = tzdbZoneInfo;
	            links[tzdbZoneInfo.name] = tzdbZoneInfo.name;
	        }

	        for (var _iterator2 = packedJson.links, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;

	            if (_isArray2) {
	                if (_i2 >= _iterator2.length) break;
	                _ref2 = _iterator2[_i2++];
	            } else {
	                _i2 = _iterator2.next();
	                if (_i2.done) break;
	                _ref2 = _i2.value;
	            }

	            var packedLink = _ref2;

	            var link = packedLink.split('|');
	            AVAILABLE_ZONE_IDS.push(link[1]);
	            links[link[1]] = link[0];
	        }
	    };

	    return MomentZoneRulesProvider;
	}(_jsJoda.ZoneRulesProvider);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.MomentZoneRules = undefined;

	var _jsJoda = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var MomentZoneRules = exports.MomentZoneRules = function (_ZoneRules) {
	    _inherits(MomentZoneRules, _ZoneRules);

	    function MomentZoneRules(tzdbInfo) {
	        _classCallCheck(this, MomentZoneRules);

	        var _this = _possibleConstructorReturn(this, _ZoneRules.call(this));

	        _this._tzdbInfo = tzdbInfo;
	        _this._ldtUntils = new LDTUntils(_this._tzdbInfo.untils, _this._tzdbInfo.offsets);
	        return _this;
	    }

	    MomentZoneRules.prototype.isFixedOffset = function isFixedOffset() {
	        return this._tzdbInfo.offsets.length === 1;
	    };

	    MomentZoneRules.prototype.offsetOfInstant = function offsetOfInstant(instant) {
	        var epochMilli = instant.toEpochMilli();
	        return this.offsetOfEpochMilli(epochMilli);
	    };

	    MomentZoneRules.prototype.offsetOfEpochMilli = function offsetOfEpochMilli(epochMilli) {
	        var index = binarySearch(this._tzdbInfo.untils, epochMilli);
	        return _jsJoda.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(index));
	    };

	    MomentZoneRules.prototype.offsetOfLocalDateTime = function offsetOfLocalDateTime(localDateTime) {
	        var info = this._offsetInfo(localDateTime);
	        if (info instanceof _jsJoda.ZoneOffsetTransition) {
	            return info.offsetBefore();
	        }
	        return info;
	    };

	    MomentZoneRules.prototype._offsetInfo = function _offsetInfo(localDateTime) {
	        var index = ldtBinarySearch(this._ldtUntils, localDateTime);
	        var offsetIndex = index >> 1;

	        if (index % 2 === 1) {
	            var ldtBefore = this._ldtUntils.get(Math.max(index - 1, 0));
	            var ldtAfter = this._ldtUntils.get(Math.min(index, this._ldtUntils.size - 1));
	            var offsetBefore = _jsJoda.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(offsetIndex));
	            var offsetAfter = _jsJoda.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(Math.min(offsetIndex + 1, this._tzdbInfo.offsets.length - 1)));

	            if (offsetBefore.compareTo(offsetAfter) > 0) {
	                return _jsJoda.ZoneOffsetTransition.of(ldtBefore, offsetBefore, offsetAfter);
	            } else {
	                return _jsJoda.ZoneOffsetTransition.of(ldtAfter, offsetBefore, offsetAfter);
	            }
	        }
	        return _jsJoda.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(offsetIndex));
	    };

	    MomentZoneRules.prototype._offsetByIndexInSeconds = function _offsetByIndexInSeconds(index) {
	        return -offsetInSeconds(this._tzdbInfo.offsets[index]);
	    };

	    MomentZoneRules.prototype.validOffsets = function validOffsets(localDateTime) {
	        var info = this._offsetInfo(localDateTime);
	        if (info instanceof _jsJoda.ZoneOffsetTransition) {
	            return info.validOffsets();
	        }
	        return [info];
	    };

	    MomentZoneRules.prototype.transition = function transition(localDateTime) {
	        var info = this._offsetInfo(localDateTime);
	        if (info instanceof _jsJoda.ZoneOffsetTransition) {
	            return info;
	        }
	        return null;
	    };

	    MomentZoneRules.prototype.standardOffset = function standardOffset(instant) {
	        notSupported('ZoneRules.standardOffset');
	    };

	    MomentZoneRules.prototype.daylightSavings = function daylightSavings(instant) {
	        notSupported('ZoneRules.daylightSavings');
	    };

	    MomentZoneRules.prototype.isDaylightSavings = function isDaylightSavings(instant) {
	        notSupported('ZoneRules.isDaylightSavings');
	    };

	    MomentZoneRules.prototype.isValidOffset = function isValidOffset(localDateTime, offset) {
	        return this.validOffsets(localDateTime).some(function (o) {
	            return o.equals(offset);
	        });
	    };

	    MomentZoneRules.prototype.nextTransition = function nextTransition(instant) {
	        notSupported('ZoneRules.nextTransition');
	    };

	    MomentZoneRules.prototype.previousTransition = function previousTransition(instant) {
	        notSupported('ZoneRules.previousTransition');
	    };

	    MomentZoneRules.prototype.transitions = function transitions() {
	        notSupported('ZoneRules.transitions');
	    };

	    MomentZoneRules.prototype.transitionRules = function transitionRules() {
	        notSupported('ZoneRules.transitionRules');
	    };

	    MomentZoneRules.prototype.equals = function equals(other) {
	        if (this === other) {
	            return true;
	        }
	        if (other instanceof MomentZoneRules) {
	            return this._tzdbInfo === other._tzdbInfo;
	        }
	        return false;
	    };

	    MomentZoneRules.prototype.toString = function toString() {
	        return this._tzdbInfo.name;
	    };

	    return MomentZoneRules;
	}(_jsJoda.ZoneRules);

	var LDTUntils = function () {
	    function LDTUntils(_tzdbUntils, tzdbOffsets) {
	        _classCallCheck(this, LDTUntils);

	        this._tzdbUntils = _tzdbUntils;
	        this._tzdbOffsets = tzdbOffsets;
	        this._ldtUntils = [];
	        this.size = this._tzdbUntils.length * 2;
	    }

	    LDTUntils.prototype._generateTupple = function _generateTupple(index) {
	        var epochMillis = this._tzdbUntils[index];
	        if (epochMillis === Infinity) {
	            return [_jsJoda.LocalDateTime.MAX, _jsJoda.LocalDateTime.MAX];
	        }
	        var instant = _jsJoda.Instant.ofEpochMilli(epochMillis);

	        var offset1 = offsetInSeconds(this._tzdbOffsets[index]);
	        var zone1 = _jsJoda.ZoneOffset.ofTotalSeconds(-offset1);
	        var ldt1 = _jsJoda.LocalDateTime.ofInstant(instant, zone1);

	        var nextIndex = Math.min(index + 1, this._tzdbOffsets.length - 1);
	        var offset2 = offsetInSeconds(this._tzdbOffsets[nextIndex]);
	        var zone2 = _jsJoda.ZoneOffset.ofTotalSeconds(-offset2);
	        var ldt2 = _jsJoda.LocalDateTime.ofInstant(instant, zone2);

	        if (offset1 > offset2) {
	            return [ldt1, ldt2];
	        } else {
	            return [ldt2, ldt1];
	        }
	    };

	    LDTUntils.prototype._getTupple = function _getTupple(index) {
	        if (this._ldtUntils[index] == null) {
	            this._ldtUntils[index] = this._generateTupple(index);
	        }
	        return this._ldtUntils[index];
	    };

	    LDTUntils.prototype.get = function get(index) {
	        var ldtTupple = this._getTupple(index >> 1);
	        return ldtTupple[index % 2];
	    };

	    return LDTUntils;
	}();

	function ldtBinarySearch(array, value) {
	    var hi = array.size - 1,
	        lo = -1,
	        mid = void 0;
	    while (hi - lo > 1) {
	        if (!value.isBefore(array.get(mid = hi + lo >> 1))) {
	            lo = mid;
	        } else {
	            hi = mid;
	        }
	    }
	    return hi;
	}

	function offsetInSeconds(tzdbOffset) {
	    return roundDown(+tzdbOffset * 60);
	}

	function roundDown(r) {
	    if (r < 0) {
	        return Math.ceil(r);
	    } else {
	        return Math.floor(r);
	    }
	}

	function binarySearch(array, value) {
	    var hi = array.length - 1,
	        lo = -1,
	        mid = void 0;
	    while (hi - lo > 1) {
	        if (array[mid = hi + lo >> 1] <= value) {
	            lo = mid;
	        } else {
	            hi = mid;
	        }
	    }
	    return hi;
	}

	function notSupported(msg) {
	    throw new Error('not supported: ' + msg);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.unpack = unpack;


	function charCodeToInt(charCode) {
	    if (charCode > 96) {
	        return charCode - 87;
	    } else if (charCode > 64) {
	        return charCode - 29;
	    }
	    return charCode - 48;
	}

	function unpackBase60(string) {
	    var i = 0,
	        parts = string.split('.'),
	        whole = parts[0],
	        fractional = parts[1] || '',
	        multiplier = 1,
	        num,
	        out = 0,
	        sign = 1;

	    if (string.charCodeAt(0) === 45) {
	        i = 1;
	        sign = -1;
	    }

	    for (i; i < whole.length; i++) {
	        num = charCodeToInt(whole.charCodeAt(i));
	        out = 60 * out + num;
	    }

	    for (i = 0; i < fractional.length; i++) {
	        multiplier = multiplier / 60;
	        num = charCodeToInt(fractional.charCodeAt(i));
	        out += num * multiplier;
	    }

	    return out * sign;
	}

	function arrayToInt(array) {
	    for (var i = 0; i < array.length; i++) {
	        array[i] = unpackBase60(array[i]);
	    }
	}

	function intToUntil(array, length) {
	    for (var i = 0; i < length; i++) {
	        array[i] = Math.round((array[i - 1] || 0) + array[i] * 60000);
	    }

	    array[length - 1] = Infinity;
	}

	function mapIndices(source, indices) {
	    var out = [],
	        i;

	    for (i = 0; i < indices.length; i++) {
	        out[i] = source[indices[i]];
	    }

	    return out;
	}

	function unpack(string) {
	    var data = string.split('|'),
	        offsets = data[2].split(' '),
	        indices = data[3].split(''),
	        untils = data[4].split(' ');

	    arrayToInt(offsets);
	    arrayToInt(indices);
	    arrayToInt(untils);

	    intToUntil(untils, indices.length);

	    return {
	        name: data[0],
	        abbrs: mapIndices(data[1].split(' '), indices),
	        offsets: mapIndices(offsets, indices),
	        untils: untils,
	        population: data[5] | 0
	    };
	}

/***/ }
/******/ ])
});
;
