<!DOCTYPE html>
<!-- saved from url=(0023)https://try.terser.org/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style>body {transition: opacity ease-in 0.2s; } 
body[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } 
</style><link rel="shortcut icon" href="https://try.terser.org/favicon.ico"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#000000"><script src="./auth0-spa-js.production_files/source-map.js.download"></script><script src="./auth0-spa-js.production_files/bundle.min.js.download"></script><meta name="description" content="Try the latest version of Terser on this page."><link rel="manifest" href="https://try.terser.org/manifest.json"><title>Terser REPL</title><script defer="defer" src="./auth0-spa-js.production_files/main.8f234c26.js.download"></script><link href="./auth0-spa-js.production_files/main.c3341e64.css" rel="stylesheet"><style type="text/css">li.svelte-10ibojx.svelte-10ibojx{padding:2px 7px;list-style-type:none;display:flex;justify-content:space-between;border-bottom:1px solid rgba(0, 0, 0, 0.1)}li.svelte-10ibojx a.svelte-10ibojx{word-break:break-word;color:#3b3737;font-size:14px}.volume.svelte-10ibojx.svelte-10ibojx{margin-left:5px;word-break:normal;color:#3b3737;font-size:14px}</style><style type="text/css">#fk-app.svelte-1dnzmeo .initial-keywords-container.svelte-1dnzmeo{width:250px}#fk-app.svelte-1dnzmeo #no-results.svelte-1dnzmeo{text-align:center;margin:10px;font-size:1.2rem;color:orange}#fk-app.svelte-1dnzmeo.svelte-1dnzmeo{position:absolute;top:0;left:0;width:100%;z-index:99999;display:flex;align-content:center;justify-content:center}#fk-app.svelte-1dnzmeo #app-container.svelte-1dnzmeo{background-color:inherit;padding-bottom:10px;min-height:450px}#fk-app.svelte-1dnzmeo #app-container.no-result.svelte-1dnzmeo{min-height:0px !important;padding-bottom:0px}#fk-app.svelte-1dnzmeo #searchResults.svelte-1dnzmeo{display:flex;justify-content:center;background-color:#fdfdfd;padding-bottom:20px}#fk-app.svelte-1dnzmeo #searchResults.dark.svelte-1dnzmeo{background-color:#202124}#fk-app.svelte-1dnzmeo .no-result #searchResults.svelte-1dnzmeo{padding-bottom:0px !important;border:1px solid gray;border-radius:5px;box-shadow:0 0 10px 0px grey}#fk-app.svelte-1dnzmeo #searchResultContainer.svelte-1dnzmeo{display:flex;gap:5px;justify-content:center;flex-wrap:wrap}#fk-app.svelte-1dnzmeo .keywords-container.svelte-1dnzmeo{border:1px dashed gray;width:250px;border-radius:5px;word-break:break-all;word-wrap:break-word;transition:all 0.2s ease-in-out}#fk-app.svelte-1dnzmeo #actions-wrapper.svelte-1dnzmeo{display:flex;flex-direction:column}#fk-app.svelte-1dnzmeo #actions-wrapper button.svelte-1dnzmeo{cursor:pointer;padding:2px 4px;margin:10px;transition:all 0.2s ease-in-out;text-align:center;font-size:0.9rem;border:none;border-radius:3px;padding:2px 6px;border:1px solid gray;background-color:#ededed}#fk-app.svelte-1dnzmeo button#close.svelte-1dnzmeo,#fk-app.svelte-1dnzmeo button#copy.svelte-1dnzmeo,#fk-app.svelte-1dnzmeo button#export.svelte-1dnzmeo{background:#1972e6;color:#ffffff}#fk-app.svelte-1dnzmeo button#close.svelte-1dnzmeo:hover,#fk-app.svelte-1dnzmeo button#copy.svelte-1dnzmeo:hover,#fk-app.svelte-1dnzmeo button#export.svelte-1dnzmeo:hover{background-color:#126db5}#loader.svelte-1dnzmeo.svelte-1dnzmeo{min-width:400px;text-align:center;padding:10px 0px}#loader.svelte-1dnzmeo img.svelte-1dnzmeo{width:50px;height:50px}</style><style type="text/css">#search-keyword-button {
  width: 50px;
  height: 20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  background-color: #ededed;
  margin-top: 8px;
  box-shadow: inset 0px 0 0px 1px rgb(64 60 67 / 24%);
  display: inline-block;
  vertical-align: middle;
}
</style><style type="text/css">#search-input {
  display: flex;
}

#fk-app.youtube .keyword-item a {
  font-size: 1.3rem !important;
}
</style><style type="text/css">.nav-fill.bg-fix {
  background-color: #ffffff;
}

#fk-app.amazon #searchResults {
  background-color: #5e5f5f !important;
}
</style><style type="text/css">#fk-search-input-outer-wrapper {
  margin-top: 0px;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-align: left;
  outline: none;
  text-decoration: none;
  -webkit-appearance: none;
  position: relative;
  padding-right: 35px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 12px;
  height: 48px;
  color: #222222;
  font-weight: bold;
  white-space: nowrap;
  transition: border 200ms ease-out, color 200ms ease-out;
  border-left: 0;
  border-right: 0;
  border-width: 2px;
  border-color: #222222;
  border-top-style: solid;
  border-bottom-style: solid;
}
</style><style type="text/css">form#gh-f td.gh-td-s {
  position: relative;
}
#search-keyword-button.ebay {
  position: absolute;
  top: 3px;
  right: 10px;
}
</style></head><body cz-shortcut-listen="true"><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"><div class="App_container__Rt8T2"><div class="Header_container__R0h29"><header><a href="https://terser.org/"><img src="./auth0-spa-js.production_files/terser-square-logo.png" alt="" role="presentation"><h1>Terser REPL</h1></a><p>Try Terser in your browser</p></header></div><div class="Repl_container__HLrVP"><div class="CodeMirrorPanel_container__ynVR2 Repl_panel__7tk5I Repl_panelOptions__U9ujY"><div class="CodeMirrorPanel_codeMirror__4Ap9Z"><textarea autocomplete="off" placeholder="Edit terser config here" style="display: none;">// edit terser options
{
  module: true,
  compress: {},
  mangle: {},
  output: {},
  parse: {},
  rename: {},
}</textarea><div class="CodeMirror CodeMirror-wrap cm-s-paraiso-light" translate="no"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 84px; left: 133.094px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 29px; margin-bottom: -15px; border-right-width: 35px; min-height: 188px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like"><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 104.094px; top: 80px; height: 20px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// edit terser options</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">{</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">module</span>: <span class="cm-atom">true</span>,</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">compress</span>: {},</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">mangle</span>: {},</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">output</span>: {},</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">parse</span>: {},</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">rename</span>: {},</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 35px; width: 1px; border-bottom: 0px solid transparent; top: 188px;"></div><div class="CodeMirror-gutters" style="height: 223px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div></div></div></div></div></div><div class="CodeMirrorPanel_container__ynVR2 Repl_panel__7tk5I Repl_panelInput__EjdBh"><div class="CodeMirrorPanel_codeMirror__4Ap9Z"><textarea autocomplete="off" placeholder="Write or paste code here" style="display: none;">// write or paste code here
(function(l, r) {
    if (!l || l.getElementById("livereloadscript")) return;
    r = l.createElement("script");
    r.async = 1;
    r.src = "//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
    r.id = "livereloadscript";
    l.getElementsByTagName("head")[0].appendChild(r);
})(self.document);

(function(global, factory) {
    typeof exports === "object" &amp;&amp; typeof module !== "undefined" ? factory(exports, require("core-js/es/string/starts-with"), require("core-js/es/symbol"), require("core-js/es/array/from"), require("core-js/es/typed-array/slice"), require("core-js/es/array/includes"), require("core-js/es/string/includes"), require("core-js/es/set"), require("fast-text-encoding"), require("abortcontroller-polyfill/dist/abortcontroller-polyfill-only")) : typeof define === "function" &amp;&amp; define.amd ? define([ "exports", "core-js/es/string/starts-with", "core-js/es/symbol", "core-js/es/array/from", "core-js/es/typed-array/slice", "core-js/es/array/includes", "core-js/es/string/includes", "core-js/es/set", "fast-text-encoding", "abortcontroller-polyfill/dist/abortcontroller-polyfill-only" ], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
    factory(global.auth0 = {}));
})(this, (function(exports) {
    "use strict";
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array &amp;&amp; function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" &amp;&amp; b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    }
    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i &lt; n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) &amp;&amp; e.indexOf(p) &lt; 0) t[p] = s[p];
        if (s != null &amp;&amp; typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i &lt; p.length; i++) {
            if (e.indexOf(p[i]) &lt; 0 &amp;&amp; Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P((function(resolve) {
                resolve(value);
            }));
        }
        return new (P || (P = Promise))((function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        }));
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] &amp; 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" &amp;&amp; (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([ n, v ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y &amp;&amp; (t = op[0] &amp; 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) &amp;&amp; t.call(y), 
                0) : y.next) &amp;&amp; !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [ op[0] &amp; 2, t.value ];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [ 0 ];
                    continue;

                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;

                  default:
                    if (!(t = _.trys, t = t.length &gt; 0 &amp;&amp; t[t.length - 1]) &amp;&amp; (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 &amp;&amp; (!t || op[1] &gt; t[0] &amp;&amp; op[1] &lt; t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 &amp;&amp; _.label &lt; t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t &amp;&amp; _.label &lt; t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [ 6, e ];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] &amp; 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" &amp;&amp; o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- &gt; 0) &amp;&amp; !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally {
            try {
                if (r &amp;&amp; !r.done &amp;&amp; (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i &lt; l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function finallyConstructor(callback) {
        var constructor = this.constructor;
        return this.then((function(value) {
            return constructor.resolve(callback()).then((function() {
                return value;
            }));
        }), (function(reason) {
            return constructor.resolve(callback()).then((function() {
                return constructor.reject(reason);
            }));
        }));
    }
    function allSettled(arr) {
        var P = this;
        return new P((function(resolve, reject) {
            if (!(arr &amp;&amp; typeof arr.length !== "undefined")) {
                return reject(new TypeError(typeof arr + " " + arr + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            }
            var args = Array.prototype.slice.call(arr);
            if (args.length === 0) return resolve([]);
            var remaining = args.length;
            function res(i, val) {
                if (val &amp;&amp; (typeof val === "object" || typeof val === "function")) {
                    var then = val.then;
                    if (typeof then === "function") {
                        then.call(val, (function(val) {
                            res(i, val);
                        }), (function(e) {
                            args[i] = {
                                status: "rejected",
                                reason: e
                            };
                            if (--remaining === 0) {
                                resolve(args);
                            }
                        }));
                        return;
                    }
                }
                args[i] = {
                    status: "fulfilled",
                    value: val
                };
                if (--remaining === 0) {
                    resolve(args);
                }
            }
            for (var i = 0; i &lt; args.length; i++) {
                res(i, args[i]);
            }
        }));
    }
    var setTimeoutFunc = setTimeout;
    function isArray(x) {
        return Boolean(x &amp;&amp; typeof x.length !== "undefined");
    }
    function noop() {}
    function bind(fn, thisArg) {
        return function() {
            fn.apply(thisArg, arguments);
        };
    }
    function Promise$1(fn) {
        if (!(this instanceof Promise$1)) throw new TypeError("Promises must be constructed via new");
        if (typeof fn !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];
        doResolve(fn, this);
    }
    function handle(self, deferred) {
        while (self._state === 3) {
            self = self._value;
        }
        if (self._state === 0) {
            self._deferreds.push(deferred);
            return;
        }
        self._handled = true;
        Promise$1._immediateFn((function() {
            var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
            if (cb === null) {
                (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                return;
            }
            var ret;
            try {
                ret = cb(self._value);
            } catch (e) {
                reject(deferred.promise, e);
                return;
            }
            resolve(deferred.promise, ret);
        }));
    }
    function resolve(self, newValue) {
        try {
            if (newValue === self) throw new TypeError("A promise cannot be resolved with itself.");
            if (newValue &amp;&amp; (typeof newValue === "object" || typeof newValue === "function")) {
                var then = newValue.then;
                if (newValue instanceof Promise$1) {
                    self._state = 3;
                    self._value = newValue;
                    finale(self);
                    return;
                } else if (typeof then === "function") {
                    doResolve(bind(then, newValue), self);
                    return;
                }
            }
            self._state = 1;
            self._value = newValue;
            finale(self);
        } catch (e) {
            reject(self, e);
        }
    }
    function reject(self, newValue) {
        self._state = 2;
        self._value = newValue;
        finale(self);
    }
    function finale(self) {
        if (self._state === 2 &amp;&amp; self._deferreds.length === 0) {
            Promise$1._immediateFn((function() {
                if (!self._handled) {
                    Promise$1._unhandledRejectionFn(self._value);
                }
            }));
        }
        for (var i = 0, len = self._deferreds.length; i &lt; len; i++) {
            handle(self, self._deferreds[i]);
        }
        self._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, promise) {
        this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
        this.onRejected = typeof onRejected === "function" ? onRejected : null;
        this.promise = promise;
    }
    function doResolve(fn, self) {
        var done = false;
        try {
            fn((function(value) {
                if (done) return;
                done = true;
                resolve(self, value);
            }), (function(reason) {
                if (done) return;
                done = true;
                reject(self, reason);
            }));
        } catch (ex) {
            if (done) return;
            done = true;
            reject(self, ex);
        }
    }
    Promise$1.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
    };
    Promise$1.prototype.then = function(onFulfilled, onRejected) {
        var prom = new this.constructor(noop);
        handle(this, new Handler(onFulfilled, onRejected, prom));
        return prom;
    };
    Promise$1.prototype["finally"] = finallyConstructor;
    Promise$1.all = function(arr) {
        return new Promise$1((function(resolve, reject) {
            if (!isArray(arr)) {
                return reject(new TypeError("Promise.all accepts an array"));
            }
            var args = Array.prototype.slice.call(arr);
            if (args.length === 0) return resolve([]);
            var remaining = args.length;
            function res(i, val) {
                try {
                    if (val &amp;&amp; (typeof val === "object" || typeof val === "function")) {
                        var then = val.then;
                        if (typeof then === "function") {
                            then.call(val, (function(val) {
                                res(i, val);
                            }), reject);
                            return;
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                } catch (ex) {
                    reject(ex);
                }
            }
            for (var i = 0; i &lt; args.length; i++) {
                res(i, args[i]);
            }
        }));
    };
    Promise$1.allSettled = allSettled;
    Promise$1.resolve = function(value) {
        if (value &amp;&amp; typeof value === "object" &amp;&amp; value.constructor === Promise$1) {
            return value;
        }
        return new Promise$1((function(resolve) {
            resolve(value);
        }));
    };
    Promise$1.reject = function(value) {
        return new Promise$1((function(resolve, reject) {
            reject(value);
        }));
    };
    Promise$1.race = function(arr) {
        return new Promise$1((function(resolve, reject) {
            if (!isArray(arr)) {
                return reject(new TypeError("Promise.race accepts an array"));
            }
            for (var i = 0, len = arr.length; i &lt; len; i++) {
                Promise$1.resolve(arr[i]).then(resolve, reject);
            }
        }));
    };
    Promise$1._immediateFn = typeof setImmediate === "function" &amp;&amp; function(fn) {
        setImmediate(fn);
    } || function(fn) {
        setTimeoutFunc(fn, 0);
    };
    Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
        if (typeof console !== "undefined" &amp;&amp; console) {
            console.warn("Possible Unhandled Promise Rejection:", err);
        }
    };
    var globalNS = function() {
        if (typeof self !== "undefined") {
            return self;
        }
        if (typeof window !== "undefined") {
            return window;
        }
        if (typeof global !== "undefined") {
            return global;
        }
        throw new Error("unable to locate global object");
    }();
    if (typeof globalNS["Promise"] !== "function") {
        globalNS["Promise"] = Promise$1;
    } else {
        if (!globalNS.Promise.prototype["finally"]) {
            globalNS.Promise.prototype["finally"] = finallyConstructor;
        }
        if (!globalNS.Promise.allSettled) {
            globalNS.Promise.allSettled = allSettled;
        }
    }
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function unwrapExports(x) {
        return x &amp;&amp; x.__esModule &amp;&amp; Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    function createCommonjsModule(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports), module.exports;
    }
    var processLock = createCommonjsModule((function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var ProcessLocking = function() {
            function ProcessLocking() {
                var _this = this;
                this.locked = new Map;
                this.addToLocked = function(key, toAdd) {
                    var callbacks = _this.locked.get(key);
                    if (callbacks === undefined) {
                        if (toAdd === undefined) {
                            _this.locked.set(key, []);
                        } else {
                            _this.locked.set(key, [ toAdd ]);
                        }
                    } else {
                        if (toAdd !== undefined) {
                            callbacks.unshift(toAdd);
                            _this.locked.set(key, callbacks);
                        }
                    }
                };
                this.isLocked = function(key) {
                    return _this.locked.has(key);
                };
                this.lock = function(key) {
                    return new Promise((function(resolve, reject) {
                        if (_this.isLocked(key)) {
                            _this.addToLocked(key, resolve);
                        } else {
                            _this.addToLocked(key);
                            resolve();
                        }
                    }));
                };
                this.unlock = function(key) {
                    var callbacks = _this.locked.get(key);
                    if (callbacks === undefined || callbacks.length === 0) {
                        _this.locked.delete(key);
                        return;
                    }
                    var toCall = callbacks.pop();
                    _this.locked.set(key, callbacks);
                    if (toCall !== undefined) {
                        setTimeout(toCall, 0);
                    }
                };
            }
            ProcessLocking.getInstance = function() {
                if (ProcessLocking.instance === undefined) {
                    ProcessLocking.instance = new ProcessLocking;
                }
                return ProcessLocking.instance;
            };
            return ProcessLocking;
        }();
        function getLock() {
            return ProcessLocking.getInstance();
        }
        exports.default = getLock;
    }));
    unwrapExports(processLock);
    var browserTabsLock = createCommonjsModule((function(module, exports) {
        var __awaiter = commonjsGlobal &amp;&amp; commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P((function(resolve) {
                        resolve(result.value);
                    })).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        var __generator = commonjsGlobal &amp;&amp; commonjsGlobal.__generator || function(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                    if (t[0] &amp; 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, typeof Symbol === "function" &amp;&amp; (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return step([ n, v ]);
                };
            }
            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y &amp;&amp; (t = op[0] &amp; 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) &amp;&amp; t.call(y), 
                    0) : y.next) &amp;&amp; !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [ op[0] &amp; 2, t.value ];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;

                      case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };

                      case 5:
                        _.label++;
                        y = op[1];
                        op = [ 0 ];
                        continue;

                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;

                      default:
                        if (!(t = _.trys, t = t.length &gt; 0 &amp;&amp; t[t.length - 1]) &amp;&amp; (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 &amp;&amp; (!t || op[1] &gt; t[0] &amp;&amp; op[1] &lt; t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 &amp;&amp; _.label &lt; t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t &amp;&amp; _.label &lt; t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [ 6, e ];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] &amp; 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var LOCK_STORAGE_KEY = "browser-tabs-lock-key";
        function delay(milliseconds) {
            return new Promise((function(resolve) {
                return setTimeout(resolve, milliseconds);
            }));
        }
        function generateRandomString(length) {
            var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var randomstring = "";
            for (var i = 0; i &lt; length; i++) {
                var INDEX = Math.floor(Math.random() * CHARS.length);
                randomstring += CHARS[INDEX];
            }
            return randomstring;
        }
        function getLockId() {
            return Date.now().toString() + generateRandomString(15);
        }
        var SuperTokensLock = function() {
            function SuperTokensLock() {
                this.acquiredIatSet = new Set;
                this.id = getLockId();
                this.acquireLock = this.acquireLock.bind(this);
                this.releaseLock = this.releaseLock.bind(this);
                this.releaseLock__private__ = this.releaseLock__private__.bind(this);
                this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this);
                this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this);
                if (SuperTokensLock.waiters === undefined) {
                    SuperTokensLock.waiters = [];
                }
            }
            SuperTokensLock.prototype.acquireLock = function(lockKey, timeout) {
                if (timeout === void 0) {
                    timeout = 5e3;
                }
                return __awaiter(this, void 0, void 0, (function() {
                    var iat, MAX_TIME, STORAGE_KEY, STORAGE, lockObj, TIMEOUT_KEY, lockObjPostDelay;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            iat = Date.now() + generateRandomString(4);
                            MAX_TIME = Date.now() + timeout;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            STORAGE = window.localStorage;
                            _a.label = 1;

                          case 1:
                            if (!(Date.now() &lt; MAX_TIME)) return [ 3, 8 ];
                            return [ 4, delay(30) ];

                          case 2:
                            _a.sent();
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (!(lockObj === null)) return [ 3, 5 ];
                            TIMEOUT_KEY = this.id + "-" + lockKey + "-" + iat;
                            return [ 4, delay(Math.floor(Math.random() * 25)) ];

                          case 3:
                            _a.sent();
                            STORAGE.setItem(STORAGE_KEY, JSON.stringify({
                                id: this.id,
                                iat: iat,
                                timeoutKey: TIMEOUT_KEY,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            }));
                            return [ 4, delay(30) ];

                          case 4:
                            _a.sent();
                            lockObjPostDelay = STORAGE.getItem(STORAGE_KEY);
                            if (lockObjPostDelay !== null) {
                                lockObjPostDelay = JSON.parse(lockObjPostDelay);
                                if (lockObjPostDelay.id === this.id &amp;&amp; lockObjPostDelay.iat === iat) {
                                    this.acquiredIatSet.add(iat);
                                    this.refreshLockWhileAcquired(STORAGE_KEY, iat);
                                    return [ 2, true ];
                                }
                            }
                            return [ 3, 7 ];

                          case 5:
                            SuperTokensLock.lockCorrector();
                            return [ 4, this.waitForSomethingToChange(MAX_TIME) ];

                          case 6:
                            _a.sent();
                            _a.label = 7;

                          case 7:
                            iat = Date.now() + generateRandomString(4);
                            return [ 3, 1 ];

                          case 8:
                            return [ 2, false ];
                        }
                    }));
                }));
            };
            SuperTokensLock.prototype.refreshLockWhileAcquired = function(storageKey, iat) {
                return __awaiter(this, void 0, void 0, (function() {
                    var _this = this;
                    return __generator(this, (function(_a) {
                        setTimeout((function() {
                            return __awaiter(_this, void 0, void 0, (function() {
                                var STORAGE, lockObj;
                                return __generator(this, (function(_a) {
                                    switch (_a.label) {
                                      case 0:
                                        return [ 4, processLock.default().lock(iat) ];

                                      case 1:
                                        _a.sent();
                                        if (!this.acquiredIatSet.has(iat)) {
                                            processLock.default().unlock(iat);
                                            return [ 2 ];
                                        }
                                        STORAGE = window.localStorage;
                                        lockObj = STORAGE.getItem(storageKey);
                                        if (lockObj !== null) {
                                            lockObj = JSON.parse(lockObj);
                                            lockObj.timeRefreshed = Date.now();
                                            STORAGE.setItem(storageKey, JSON.stringify(lockObj));
                                            processLock.default().unlock(iat);
                                        } else {
                                            processLock.default().unlock(iat);
                                            return [ 2 ];
                                        }
                                        this.refreshLockWhileAcquired(storageKey, iat);
                                        return [ 2 ];
                                    }
                                }));
                            }));
                        }), 1e3);
                        return [ 2 ];
                    }));
                }));
            };
            SuperTokensLock.prototype.waitForSomethingToChange = function(MAX_TIME) {
                return __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, new Promise((function(resolve) {
                                var resolvedCalled = false;
                                var startedAt = Date.now();
                                var MIN_TIME_TO_WAIT = 50;
                                var removedListeners = false;
                                function stopWaiting() {
                                    if (!removedListeners) {
                                        window.removeEventListener("storage", stopWaiting);
                                        SuperTokensLock.removeFromWaiting(stopWaiting);
                                        clearTimeout(timeOutId);
                                        removedListeners = true;
                                    }
                                    if (!resolvedCalled) {
                                        resolvedCalled = true;
                                        var timeToWait = MIN_TIME_TO_WAIT - (Date.now() - startedAt);
                                        if (timeToWait &gt; 0) {
                                            setTimeout(resolve, timeToWait);
                                        } else {
                                            resolve();
                                        }
                                    }
                                }
                                window.addEventListener("storage", stopWaiting);
                                SuperTokensLock.addToWaiting(stopWaiting);
                                var timeOutId = setTimeout(stopWaiting, Math.max(0, MAX_TIME - Date.now()));
                            })) ];

                          case 1:
                            _a.sent();
                            return [ 2 ];
                        }
                    }));
                }));
            };
            SuperTokensLock.addToWaiting = function(func) {
                this.removeFromWaiting(func);
                if (SuperTokensLock.waiters === undefined) {
                    return;
                }
                SuperTokensLock.waiters.push(func);
            };
            SuperTokensLock.removeFromWaiting = function(func) {
                if (SuperTokensLock.waiters === undefined) {
                    return;
                }
                SuperTokensLock.waiters = SuperTokensLock.waiters.filter((function(i) {
                    return i !== func;
                }));
            };
            SuperTokensLock.notifyWaiters = function() {
                if (SuperTokensLock.waiters === undefined) {
                    return;
                }
                var waiters = SuperTokensLock.waiters.slice();
                waiters.forEach((function(i) {
                    return i();
                }));
            };
            SuperTokensLock.prototype.releaseLock = function(lockKey) {
                return __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, this.releaseLock__private__(lockKey) ];

                          case 1:
                            return [ 2, _a.sent() ];
                        }
                    }));
                }));
            };
            SuperTokensLock.prototype.releaseLock__private__ = function(lockKey) {
                return __awaiter(this, void 0, void 0, (function() {
                    var STORAGE, STORAGE_KEY, lockObj;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            STORAGE = window.localStorage;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (lockObj === null) {
                                return [ 2 ];
                            }
                            lockObj = JSON.parse(lockObj);
                            if (!(lockObj.id === this.id)) return [ 3, 2 ];
                            return [ 4, processLock.default().lock(lockObj.iat) ];

                          case 1:
                            _a.sent();
                            this.acquiredIatSet.delete(lockObj.iat);
                            STORAGE.removeItem(STORAGE_KEY);
                            processLock.default().unlock(lockObj.iat);
                            SuperTokensLock.notifyWaiters();
                            _a.label = 2;

                          case 2:
                            return [ 2 ];
                        }
                    }));
                }));
            };
            SuperTokensLock.lockCorrector = function() {
                var MIN_ALLOWED_TIME = Date.now() - 5e3;
                var STORAGE = window.localStorage;
                var KEYS = Object.keys(STORAGE);
                var notifyWaiters = false;
                for (var i = 0; i &lt; KEYS.length; i++) {
                    var LOCK_KEY = KEYS[i];
                    if (LOCK_KEY.includes(LOCK_STORAGE_KEY)) {
                        var lockObj = STORAGE.getItem(LOCK_KEY);
                        if (lockObj !== null) {
                            lockObj = JSON.parse(lockObj);
                            if (lockObj.timeRefreshed === undefined &amp;&amp; lockObj.timeAcquired &lt; MIN_ALLOWED_TIME || lockObj.timeRefreshed !== undefined &amp;&amp; lockObj.timeRefreshed &lt; MIN_ALLOWED_TIME) {
                                STORAGE.removeItem(LOCK_KEY);
                                notifyWaiters = true;
                            }
                        }
                    }
                }
                if (notifyWaiters) {
                    SuperTokensLock.notifyWaiters();
                }
            };
            SuperTokensLock.waiters = undefined;
            return SuperTokensLock;
        }();
        exports.default = SuperTokensLock;
    }));
    var Lock = unwrapExports(browserTabsLock);
    var version = "1.22.2";
    var DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;
    var DEFAULT_POPUP_CONFIG_OPTIONS = {
        timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
    };
    var DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;
    var CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;
    var DEFAULT_FETCH_TIMEOUT_MS = 1e4;
    var CACHE_LOCATION_MEMORY = "memory";
    var MISSING_REFRESH_TOKEN_ERROR_MESSAGE = "Missing Refresh Token";
    var INVALID_REFRESH_TOKEN_ERROR_MESSAGE = "invalid refresh token";
    var DEFAULT_SCOPE = "openid profile email";
    var DEFAULT_SESSION_CHECK_EXPIRY_DAYS = 1;
    var DEFAULT_AUTH0_CLIENT = {
        name: "auth0-spa-js",
        version: version
    };
    var DEFAULT_NOW_PROVIDER = function() {
        return Date.now();
    };
    var GenericError = function(_super) {
        __extends(GenericError, _super);
        function GenericError(error, error_description) {
            var _this = _super.call(this, error_description) || this;
            _this.error = error;
            _this.error_description = error_description;
            Object.setPrototypeOf(_this, GenericError.prototype);
            return _this;
        }
        GenericError.fromPayload = function(_a) {
            var error = _a.error, error_description = _a.error_description;
            return new GenericError(error, error_description);
        };
        return GenericError;
    }(Error);
    var AuthenticationError = function(_super) {
        __extends(AuthenticationError, _super);
        function AuthenticationError(error, error_description, state, appState) {
            if (appState === void 0) {
                appState = null;
            }
            var _this = _super.call(this, error, error_description) || this;
            _this.state = state;
            _this.appState = appState;
            Object.setPrototypeOf(_this, AuthenticationError.prototype);
            return _this;
        }
        return AuthenticationError;
    }(GenericError);
    var TimeoutError = function(_super) {
        __extends(TimeoutError, _super);
        function TimeoutError() {
            var _this = _super.call(this, "timeout", "Timeout") || this;
            Object.setPrototypeOf(_this, TimeoutError.prototype);
            return _this;
        }
        return TimeoutError;
    }(GenericError);
    var PopupTimeoutError = function(_super) {
        __extends(PopupTimeoutError, _super);
        function PopupTimeoutError(popup) {
            var _this = _super.call(this) || this;
            _this.popup = popup;
            Object.setPrototypeOf(_this, PopupTimeoutError.prototype);
            return _this;
        }
        return PopupTimeoutError;
    }(TimeoutError);
    var PopupCancelledError = function(_super) {
        __extends(PopupCancelledError, _super);
        function PopupCancelledError(popup) {
            var _this = _super.call(this, "cancelled", "Popup closed") || this;
            _this.popup = popup;
            Object.setPrototypeOf(_this, PopupCancelledError.prototype);
            return _this;
        }
        return PopupCancelledError;
    }(GenericError);
    var MfaRequiredError = function(_super) {
        __extends(MfaRequiredError, _super);
        function MfaRequiredError(error, error_description, mfa_token) {
            var _this = _super.call(this, error, error_description) || this;
            _this.mfa_token = mfa_token;
            Object.setPrototypeOf(_this, MfaRequiredError.prototype);
            return _this;
        }
        return MfaRequiredError;
    }(GenericError);
    var MissingRefreshTokenError = function(_super) {
        __extends(MissingRefreshTokenError, _super);
        function MissingRefreshTokenError(audience, scope) {
            var _this = _super.call(this, "missing_refresh_token", "Missing Refresh Token (audience: '".concat(valueOrEmptyString(audience, [ "default" ]), "', scope: '").concat(valueOrEmptyString(scope), "')")) || this;
            _this.audience = audience;
            _this.scope = scope;
            Object.setPrototypeOf(_this, MissingRefreshTokenError.prototype);
            return _this;
        }
        return MissingRefreshTokenError;
    }(GenericError);
    function valueOrEmptyString(value, exclude) {
        if (exclude === void 0) {
            exclude = [];
        }
        return value &amp;&amp; !exclude.includes(value) ? value : "";
    }
    var parseQueryResult = function(queryString) {
        if (queryString.indexOf("#") &gt; -1) {
            queryString = queryString.substr(0, queryString.indexOf("#"));
        }
        var queryParams = queryString.split("&amp;");
        var parsedQuery = {};
        queryParams.forEach((function(qp) {
            var _a = __read(qp.split("="), 2), key = _a[0], val = _a[1];
            parsedQuery[key] = decodeURIComponent(val);
        }));
        if (parsedQuery.expires_in) {
            parsedQuery.expires_in = parseInt(parsedQuery.expires_in);
        }
        return parsedQuery;
    };
    var runIframe = function(authorizeUrl, eventOrigin, timeoutInSeconds) {
        if (timeoutInSeconds === void 0) {
            timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS;
        }
        return new Promise((function(res, rej) {
            var iframe = window.document.createElement("iframe");
            iframe.setAttribute("width", "0");
            iframe.setAttribute("height", "0");
            iframe.style.display = "none";
            var removeIframe = function() {
                if (window.document.body.contains(iframe)) {
                    window.document.body.removeChild(iframe);
                    window.removeEventListener("message", iframeEventHandler, false);
                }
            };
            var iframeEventHandler;
            var timeoutSetTimeoutId = setTimeout((function() {
                rej(new TimeoutError);
                removeIframe();
            }), timeoutInSeconds * 1e3);
            iframeEventHandler = function(e) {
                if (e.origin != eventOrigin) return;
                if (!e.data || e.data.type !== "authorization_response") return;
                var eventSource = e.source;
                if (eventSource) {
                    eventSource.close();
                }
                e.data.response.error ? rej(GenericError.fromPayload(e.data.response)) : res(e.data.response);
                clearTimeout(timeoutSetTimeoutId);
                window.removeEventListener("message", iframeEventHandler, false);
                setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1e3);
            };
            window.addEventListener("message", iframeEventHandler, false);
            window.document.body.appendChild(iframe);
            iframe.setAttribute("src", authorizeUrl);
        }));
    };
    var openPopup = function(url) {
        var width = 400;
        var height = 600;
        var left = window.screenX + (window.innerWidth - width) / 2;
        var top = window.screenY + (window.innerHeight - height) / 2;
        return window.open(url, "auth0:authorize:popup", "left=".concat(left, ",top=").concat(top, ",width=").concat(width, ",height=").concat(height, ",resizable,scrollbars=yes,status=1"));
    };
    var runPopup = function(config) {
        return new Promise((function(resolve, reject) {
            var popupEventListener;
            var popupTimer = setInterval((function() {
                if (config.popup &amp;&amp; config.popup.closed) {
                    clearInterval(popupTimer);
                    clearTimeout(timeoutId);
                    window.removeEventListener("message", popupEventListener, false);
                    reject(new PopupCancelledError(config.popup));
                }
            }), 1e3);
            var timeoutId = setTimeout((function() {
                clearInterval(popupTimer);
                reject(new PopupTimeoutError(config.popup));
                window.removeEventListener("message", popupEventListener, false);
            }), (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) * 1e3);
            popupEventListener = function(e) {
                if (!e.data || e.data.type !== "authorization_response") {
                    return;
                }
                clearTimeout(timeoutId);
                clearInterval(popupTimer);
                window.removeEventListener("message", popupEventListener, false);
                config.popup.close();
                if (e.data.response.error) {
                    return reject(GenericError.fromPayload(e.data.response));
                }
                resolve(e.data.response);
            };
            window.addEventListener("message", popupEventListener);
        }));
    };
    var getCrypto = function() {
        return window.crypto;
    };
    var createRandomString = function() {
        var charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
        var random = "";
        var randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
        randomValues.forEach((function(v) {
            return random += charset[v % charset.length];
        }));
        return random;
    };
    var encode = function(value) {
        return btoa(value);
    };
    var stripUndefined = function(params) {
        return Object.keys(params).filter((function(k) {
            return typeof params[k] !== "undefined";
        })).reduce((function(acc, key) {
            var _a;
            return __assign(__assign({}, acc), (_a = {}, _a[key] = params[key], _a));
        }), {});
    };
    var createQueryParams = function(_a) {
        var client_id = _a.clientId, params = __rest(_a, [ "clientId" ]);
        return new URLSearchParams(stripUndefined(__assign({
            client_id: client_id
        }, params))).toString();
    };
    var sha256 = function(s) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var digestOp;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    digestOp = getCrypto().subtle.digest({
                        name: "SHA-256"
                    }, (new TextEncoder).encode(s));
                    return [ 4, digestOp ];

                  case 1:
                    return [ 2, _a.sent() ];
                }
            }));
        }));
    };
    var urlEncodeB64 = function(input) {
        var b64Chars = {
            "+": "-",
            "/": "_",
            "=": ""
        };
        return input.replace(/[+/=]/g, (function(m) {
            return b64Chars[m];
        }));
    };
    var decodeB64 = function(input) {
        return decodeURIComponent(atob(input).split("").map((function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })).join(""));
    };
    var urlDecodeB64 = function(input) {
        return decodeB64(input.replace(/_/g, "/").replace(/-/g, "+"));
    };
    var bufferToBase64UrlEncoded = function(input) {
        var ie11SafeInput = new Uint8Array(input);
        return urlEncodeB64(window.btoa(String.fromCharCode.apply(String, __spreadArray([], __read(Array.from(ie11SafeInput)), false))));
    };
    var validateCrypto = function() {
        if (!getCrypto()) {
            throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
        }
        if (typeof getCrypto().subtle === "undefined") {
            throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
        }
    };
    function fetch$1(e, n) {
        return n = n || {}, new Promise((function(t, r) {
            var s = new XMLHttpRequest, o = [], u = [], i = {}, a = function() {
                return {
                    ok: 2 == (s.status / 100 | 0),
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function() {
                        return Promise.resolve(s.responseText);
                    },
                    json: function() {
                        return Promise.resolve(s.responseText).then(JSON.parse);
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([ s.response ]));
                    },
                    clone: a,
                    headers: {
                        keys: function() {
                            return o;
                        },
                        entries: function() {
                            return u;
                        },
                        get: function(e) {
                            return i[e.toLowerCase()];
                        },
                        has: function(e) {
                            return e.toLowerCase() in i;
                        }
                    }
                };
            };
            for (var l in s.open(n.method || "get", e, !0), s.onload = function() {
                s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, n, t) {
                    o.push(n = n.toLowerCase()), u.push([ n, t ]), i[n] = i[n] ? i[n] + "," + t : t;
                })), t(a());
            }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) s.setRequestHeader(l, n.headers[l]);
            s.send(n.body || null);
        }));
    }
    var sendMessage = function(message, to) {
        return new Promise((function(resolve, reject) {
            var messageChannel = new MessageChannel;
            messageChannel.port1.onmessage = function(event) {
                if (event.data.error) {
                    reject(new Error(event.data.error));
                } else {
                    resolve(event.data);
                }
            };
            to.postMessage(message, [ messageChannel.port2 ]);
        }));
    };
    var createAbortController = function() {
        return new AbortController;
    };
    var dofetch = function(fetchUrl, fetchOptions) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var response;
            var _a;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    return [ 4, fetch$1(fetchUrl, fetchOptions) ];

                  case 1:
                    response = _b.sent();
                    _a = {
                        ok: response.ok
                    };
                    return [ 4, response.json() ];

                  case 2:
                    return [ 2, (_a.json = _b.sent(), _a) ];
                }
            }));
        }));
    };
    var fetchWithoutWorker = function(fetchUrl, fetchOptions, timeout) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var controller, timeoutId;
            return __generator(this, (function(_a) {
                controller = createAbortController();
                fetchOptions.signal = controller.signal;
                return [ 2, Promise.race([ dofetch(fetchUrl, fetchOptions), new Promise((function(_, reject) {
                    timeoutId = setTimeout((function() {
                        controller.abort();
                        reject(new Error("Timeout when executing 'fetch'"));
                    }), timeout);
                })) ]).finally((function() {
                    clearTimeout(timeoutId);
                })) ];
            }));
        }));
    };
    var fetchWithWorker = function(fetchUrl, audience, scope, fetchOptions, timeout, worker, useFormData) {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(_a) {
                return [ 2, sendMessage({
                    auth: {
                        audience: audience,
                        scope: scope
                    },
                    timeout: timeout,
                    fetchUrl: fetchUrl,
                    fetchOptions: fetchOptions,
                    useFormData: useFormData
                }, worker) ];
            }));
        }));
    };
    var switchFetch = function(fetchUrl, audience, scope, fetchOptions, worker, useFormData, timeout) {
        if (timeout === void 0) {
            timeout = DEFAULT_FETCH_TIMEOUT_MS;
        }
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(_a) {
                if (worker) {
                    return [ 2, fetchWithWorker(fetchUrl, audience, scope, fetchOptions, timeout, worker, useFormData) ];
                } else {
                    return [ 2, fetchWithoutWorker(fetchUrl, fetchOptions, timeout) ];
                }
            }));
        }));
    };
    function getJSON(url, timeout, audience, scope, options, worker, useFormData) {
        return __awaiter(this, void 0, void 0, (function() {
            var fetchError, response, i, e_1, _a, error, error_description, data, ok, errorMessage;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    fetchError = null;
                    i = 0;
                    _b.label = 1;

                  case 1:
                    if (!(i &lt; DEFAULT_SILENT_TOKEN_RETRY_COUNT)) return [ 3, 6 ];
                    _b.label = 2;

                  case 2:
                    _b.trys.push([ 2, 4, , 5 ]);
                    return [ 4, switchFetch(url, audience, scope, options, worker, useFormData, timeout) ];

                  case 3:
                    response = _b.sent();
                    fetchError = null;
                    return [ 3, 6 ];

                  case 4:
                    e_1 = _b.sent();
                    fetchError = e_1;
                    return [ 3, 5 ];

                  case 5:
                    i++;
                    return [ 3, 1 ];

                  case 6:
                    if (fetchError) {
                        fetchError.message = fetchError.message || "Failed to fetch";
                        throw fetchError;
                    }
                    _a = response.json, error = _a.error, error_description = _a.error_description, 
                    data = __rest(_a, [ "error", "error_description" ]), ok = response.ok;
                    if (!ok) {
                        errorMessage = error_description || "HTTP error. Unable to fetch ".concat(url);
                        if (error === "mfa_required") {
                            throw new MfaRequiredError(error, errorMessage, data.mfa_token);
                        }
                        throw new GenericError(error || "request_error", errorMessage);
                    }
                    return [ 2, data ];
                }
            }));
        }));
    }
    function oauthToken(_a, worker) {
        var baseUrl = _a.baseUrl, timeout = _a.timeout, audience = _a.audience, scope = _a.scope, auth0Client = _a.auth0Client, useFormData = _a.useFormData, options = __rest(_a, [ "baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData" ]);
        return __awaiter(this, void 0, void 0, (function() {
            var body;
            return __generator(this, (function(_b) {
                switch (_b.label) {
                  case 0:
                    body = useFormData ? createQueryParams(options) : JSON.stringify(options);
                    return [ 4, getJSON("".concat(baseUrl, "/oauth/token"), timeout, audience || "default", scope, {
                        method: "POST",
                        body: body,
                        headers: {
                            "Content-Type": useFormData ? "application/x-www-form-urlencoded" : "application/json",
                            "Auth0-Client": btoa(JSON.stringify(auth0Client || DEFAULT_AUTH0_CLIENT))
                        }
                    }, worker, useFormData) ];

                  case 1:
                    return [ 2, _b.sent() ];
                }
            }));
        }));
    }
    var dedupe = function(arr) {
        return Array.from(new Set(arr));
    };
    var getUniqueScopes = function() {
        var scopes = [];
        for (var _i = 0; _i &lt; arguments.length; _i++) {
            scopes[_i] = arguments[_i];
        }
        return dedupe(scopes.join(" ").trim().split(/\s+/)).join(" ");
    };
    var CACHE_KEY_PREFIX = "@@auth0spajs@@";
    var CacheKey = function() {
        function CacheKey(data, prefix) {
            if (prefix === void 0) {
                prefix = CACHE_KEY_PREFIX;
            }
            this.prefix = prefix;
            this.clientId = data.clientId;
            this.scope = data.scope;
            this.audience = data.audience;
        }
        CacheKey.prototype.toKey = function() {
            return [ this.prefix, this.clientId, this.audience, this.scope ].filter(Boolean).join("::");
        };
        CacheKey.fromKey = function(key) {
            var _a = __read(key.split("::"), 4), prefix = _a[0], clientId = _a[1], audience = _a[2], scope = _a[3];
            return new CacheKey({
                clientId: clientId,
                scope: scope,
                audience: audience
            }, prefix);
        };
        CacheKey.fromCacheEntry = function(entry) {
            var scope = entry.scope, audience = entry.audience, clientId = entry.client_id;
            return new CacheKey({
                scope: scope,
                audience: audience,
                clientId: clientId
            });
        };
        return CacheKey;
    }();
    var LocalStorageCache = function() {
        function LocalStorageCache() {}
        LocalStorageCache.prototype.set = function(key, entry) {
            localStorage.setItem(key, JSON.stringify(entry));
        };
        LocalStorageCache.prototype.get = function(key) {
            var json = window.localStorage.getItem(key);
            if (!json) return;
            try {
                var payload = JSON.parse(json);
                return payload;
            } catch (e) {
                return;
            }
        };
        LocalStorageCache.prototype.remove = function(key) {
            localStorage.removeItem(key);
        };
        LocalStorageCache.prototype.allKeys = function() {
            return Object.keys(window.localStorage).filter((function(key) {
                return key.startsWith(CACHE_KEY_PREFIX);
            }));
        };
        return LocalStorageCache;
    }();
    var InMemoryCache = function() {
        function InMemoryCache() {
            this.enclosedCache = function() {
                var cache = {};
                return {
                    set: function(key, entry) {
                        cache[key] = entry;
                    },
                    get: function(key) {
                        var cacheEntry = cache[key];
                        if (!cacheEntry) {
                            return;
                        }
                        return cacheEntry;
                    },
                    remove: function(key) {
                        delete cache[key];
                    },
                    allKeys: function() {
                        return Object.keys(cache);
                    }
                };
            }();
        }
        return InMemoryCache;
    }();
    var DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;
    var CacheManager = function() {
        function CacheManager(cache, keyManifest, nowProvider) {
            this.cache = cache;
            this.keyManifest = keyManifest;
            this.nowProvider = nowProvider;
            this.nowProvider = this.nowProvider || DEFAULT_NOW_PROVIDER;
        }
        CacheManager.prototype.get = function(cacheKey, expiryAdjustmentSeconds) {
            var _a;
            if (expiryAdjustmentSeconds === void 0) {
                expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS;
            }
            return __awaiter(this, void 0, void 0, (function() {
                var wrappedEntry, keys, matchedKey, now, nowSeconds;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        return [ 4, this.cache.get(cacheKey.toKey()) ];

                      case 1:
                        wrappedEntry = _b.sent();
                        if (!!wrappedEntry) return [ 3, 4 ];
                        return [ 4, this.getCacheKeys() ];

                      case 2:
                        keys = _b.sent();
                        if (!keys) return [ 2 ];
                        matchedKey = this.matchExistingCacheKey(cacheKey, keys);
                        if (!matchedKey) return [ 3, 4 ];
                        return [ 4, this.cache.get(matchedKey) ];

                      case 3:
                        wrappedEntry = _b.sent();
                        _b.label = 4;

                      case 4:
                        if (!wrappedEntry) {
                            return [ 2 ];
                        }
                        return [ 4, this.nowProvider() ];

                      case 5:
                        now = _b.sent();
                        nowSeconds = Math.floor(now / 1e3);
                        if (!(wrappedEntry.expiresAt - expiryAdjustmentSeconds &lt; nowSeconds)) return [ 3, 10 ];
                        if (!wrappedEntry.body.refresh_token) return [ 3, 7 ];
                        wrappedEntry.body = {
                            refresh_token: wrappedEntry.body.refresh_token
                        };
                        return [ 4, this.cache.set(cacheKey.toKey(), wrappedEntry) ];

                      case 6:
                        _b.sent();
                        return [ 2, wrappedEntry.body ];

                      case 7:
                        return [ 4, this.cache.remove(cacheKey.toKey()) ];

                      case 8:
                        _b.sent();
                        return [ 4, (_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.remove(cacheKey.toKey()) ];

                      case 9:
                        _b.sent();
                        return [ 2 ];

                      case 10:
                        return [ 2, wrappedEntry.body ];
                    }
                }));
            }));
        };
        CacheManager.prototype.set = function(entry) {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var cacheKey, wrappedEntry;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        cacheKey = new CacheKey({
                            clientId: entry.client_id,
                            scope: entry.scope,
                            audience: entry.audience
                        });
                        return [ 4, this.wrapCacheEntry(entry) ];

                      case 1:
                        wrappedEntry = _b.sent();
                        return [ 4, this.cache.set(cacheKey.toKey(), wrappedEntry) ];

                      case 2:
                        _b.sent();
                        return [ 4, (_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.add(cacheKey.toKey()) ];

                      case 3:
                        _b.sent();
                        return [ 2 ];
                    }
                }));
            }));
        };
        CacheManager.prototype.clear = function(clientId) {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var keys;
                var _this = this;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        return [ 4, this.getCacheKeys() ];

                      case 1:
                        keys = _b.sent();
                        if (!keys) return [ 2 ];
                        return [ 4, keys.filter((function(key) {
                            return clientId ? key.includes(clientId) : true;
                        })).reduce((function(memo, key) {
                            return __awaiter(_this, void 0, void 0, (function() {
                                return __generator(this, (function(_a) {
                                    switch (_a.label) {
                                      case 0:
                                        return [ 4, memo ];

                                      case 1:
                                        _a.sent();
                                        return [ 4, this.cache.remove(key) ];

                                      case 2:
                                        _a.sent();
                                        return [ 2 ];
                                    }
                                }));
                            }));
                        }), Promise.resolve()) ];

                      case 2:
                        _b.sent();
                        return [ 4, (_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.clear() ];

                      case 3:
                        _b.sent();
                        return [ 2 ];
                    }
                }));
            }));
        };
        CacheManager.prototype.clearSync = function(clientId) {
            var _this = this;
            var keys = this.cache.allKeys();
            if (!keys) return;
            keys.filter((function(key) {
                return clientId ? key.includes(clientId) : true;
            })).forEach((function(key) {
                _this.cache.remove(key);
            }));
        };
        CacheManager.prototype.wrapCacheEntry = function(entry) {
            return __awaiter(this, void 0, void 0, (function() {
                var now, expiresInTime;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this.nowProvider() ];

                      case 1:
                        now = _a.sent();
                        expiresInTime = Math.floor(now / 1e3) + entry.expires_in;
                        return [ 2, {
                            body: entry,
                            expiresAt: expiresInTime
                        } ];
                    }
                }));
            }));
        };
        CacheManager.prototype.getCacheKeys = function() {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var _b;
                return __generator(this, (function(_c) {
                    switch (_c.label) {
                      case 0:
                        if (!this.keyManifest) return [ 3, 2 ];
                        return [ 4, this.keyManifest.get() ];

                      case 1:
                        _b = (_a = _c.sent()) === null || _a === void 0 ? void 0 : _a.keys;
                        return [ 3, 4 ];

                      case 2:
                        return [ 4, this.cache.allKeys() ];

                      case 3:
                        _b = _c.sent();
                        _c.label = 4;

                      case 4:
                        return [ 2, _b ];
                    }
                }));
            }));
        };
        CacheManager.prototype.matchExistingCacheKey = function(keyToMatch, allKeys) {
            return allKeys.filter((function(key) {
                var _a;
                var cacheKey = CacheKey.fromKey(key);
                var scopeSet = new Set(cacheKey.scope &amp;&amp; cacheKey.scope.split(" "));
                var scopesToMatch = ((_a = keyToMatch.scope) === null || _a === void 0 ? void 0 : _a.split(" ")) || [];
                var hasAllScopes = cacheKey.scope &amp;&amp; scopesToMatch.reduce((function(acc, current) {
                    return acc &amp;&amp; scopeSet.has(current);
                }), true);
                return cacheKey.prefix === CACHE_KEY_PREFIX &amp;&amp; cacheKey.clientId === keyToMatch.clientId &amp;&amp; cacheKey.audience === keyToMatch.audience &amp;&amp; hasAllScopes;
            }))[0];
        };
        return CacheManager;
    }();
    var TRANSACTION_STORAGE_KEY_PREFIX = "a0.spajs.txs";
    var TransactionManager = function() {
        function TransactionManager(storage, clientId) {
            this.storage = storage;
            this.clientId = clientId;
            this.storageKey = "".concat(TRANSACTION_STORAGE_KEY_PREFIX, ".").concat(this.clientId);
            this.transaction = this.storage.get(this.storageKey);
        }
        TransactionManager.prototype.create = function(transaction) {
            this.transaction = transaction;
            this.storage.save(this.storageKey, transaction, {
                daysUntilExpire: 1
            });
        };
        TransactionManager.prototype.get = function() {
            return this.transaction;
        };
        TransactionManager.prototype.remove = function() {
            delete this.transaction;
            this.storage.remove(this.storageKey);
        };
        return TransactionManager;
    }();
    var isNumber = function(n) {
        return typeof n === "number";
    };
    var idTokendecoded = [ "iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm" ];
    var decode = function(token) {
        var parts = token.split(".");
        var _a = __read(parts, 3), header = _a[0], payload = _a[1], signature = _a[2];
        if (parts.length !== 3 || !header || !payload || !signature) {
            throw new Error("ID token could not be decoded");
        }
        var payloadJSON = JSON.parse(urlDecodeB64(payload));
        var claims = {
            __raw: token
        };
        var user = {};
        Object.keys(payloadJSON).forEach((function(k) {
            claims[k] = payloadJSON[k];
            if (!idTokendecoded.includes(k)) {
                user[k] = payloadJSON[k];
            }
        }));
        return {
            encoded: {
                header: header,
                payload: payload,
                signature: signature
            },
            header: JSON.parse(urlDecodeB64(header)),
            claims: claims,
            user: user
        };
    };
    var verify = function(options) {
        if (!options.id_token) {
            throw new Error("ID token is required but missing");
        }
        var decoded = decode(options.id_token);
        if (!decoded.claims.iss) {
            throw new Error("Issuer (iss) claim must be a string present in the ID token");
        }
        if (decoded.claims.iss !== options.iss) {
            throw new Error('Issuer (iss) claim mismatch in the ID token; expected "'.concat(options.iss, '", found "').concat(decoded.claims.iss, '"'));
        }
        if (!decoded.user.sub) {
            throw new Error("Subject (sub) claim must be a string present in the ID token");
        }
        if (decoded.header.alg !== "RS256") {
            throw new Error('Signature algorithm of "'.concat(decoded.header.alg, '" is not supported. Expected the ID token to be signed with "RS256".'));
        }
        if (!decoded.claims.aud || !(typeof decoded.claims.aud === "string" || Array.isArray(decoded.claims.aud))) {
            throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
        }
        if (Array.isArray(decoded.claims.aud)) {
            if (!decoded.claims.aud.includes(options.aud)) {
                throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(options.aud, '" but was not one of "').concat(decoded.claims.aud.join(", "), '"'));
            }
            if (decoded.claims.aud.length &gt; 1) {
                if (!decoded.claims.azp) {
                    throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
                }
                if (decoded.claims.azp !== options.aud) {
                    throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'.concat(options.aud, '", found "').concat(decoded.claims.azp, '"'));
                }
            }
        } else if (decoded.claims.aud !== options.aud) {
            throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(options.aud, '" but found "').concat(decoded.claims.aud, '"'));
        }
        if (options.nonce) {
            if (!decoded.claims.nonce) {
                throw new Error("Nonce (nonce) claim must be a string present in the ID token");
            }
            if (decoded.claims.nonce !== options.nonce) {
                throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'.concat(options.nonce, '", found "').concat(decoded.claims.nonce, '"'));
            }
        }
        if (options.max_age &amp;&amp; !isNumber(decoded.claims.auth_time)) {
            throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
        }
        if (!isNumber(decoded.claims.exp)) {
            throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
        }
        if (!isNumber(decoded.claims.iat)) {
            throw new Error("Issued At (iat) claim must be a number present in the ID token");
        }
        var leeway = options.leeway || 60;
        var now = new Date(options.now || Date.now());
        var expDate = new Date(0);
        var nbfDate = new Date(0);
        var authTimeDate = new Date(0);
        authTimeDate.setUTCSeconds(parseInt(decoded.claims.auth_time) + options.max_age + leeway);
        expDate.setUTCSeconds(decoded.claims.exp + leeway);
        nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
        if (now &gt; expDate) {
            throw new Error("Expiration Time (exp) claim error in the ID token; current time (".concat(now, ") is after expiration time (").concat(expDate, ")"));
        }
        if (isNumber(decoded.claims.nbf) &amp;&amp; now &lt; nbfDate) {
            throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (".concat(now, ") is before ").concat(nbfDate));
        }
        if (isNumber(decoded.claims.auth_time) &amp;&amp; now &gt; authTimeDate) {
            throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (".concat(now, ") is after last auth at ").concat(authTimeDate));
        }
        if (options.organizationId) {
            if (!decoded.claims.org_id) {
                throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
            } else if (options.organizationId !== decoded.claims.org_id) {
                throw new Error('Organization ID (org_id) claim mismatch in the ID token; expected "'.concat(options.organizationId, '", found "').concat(decoded.claims.org_id, '"'));
            }
        }
        return decoded;
    };
    var esCookie = createCommonjsModule((function(module, exports) {
        var __assign = commonjsGlobal &amp;&amp; commonjsGlobal.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i &lt; n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        exports.__esModule = true;
        function stringifyAttribute(name, value) {
            if (!value) {
                return "";
            }
            var stringified = "; " + name;
            if (value === true) {
                return stringified;
            }
            return stringified + "=" + value;
        }
        function stringifyAttributes(attributes) {
            if (typeof attributes.expires === "number") {
                var expires = new Date;
                expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
                attributes.expires = expires;
            }
            return stringifyAttribute("Expires", attributes.expires ? attributes.expires.toUTCString() : "") + stringifyAttribute("Domain", attributes.domain) + stringifyAttribute("Path", attributes.path) + stringifyAttribute("Secure", attributes.secure) + stringifyAttribute("SameSite", attributes.sameSite);
        }
        function encode(name, value, attributes) {
            return encodeURIComponent(name).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(value).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + stringifyAttributes(attributes);
        }
        exports.encode = encode;
        function parse(cookieString) {
            var result = {};
            var cookies = cookieString ? cookieString.split("; ") : [];
            var rdecode = /(%[\dA-F]{2})+/gi;
            for (var i = 0; i &lt; cookies.length; i++) {
                var parts = cookies[i].split("=");
                var cookie = parts.slice(1).join("=");
                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }
                try {
                    var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                    result[name_1] = cookie.replace(rdecode, decodeURIComponent);
                } catch (e) {}
            }
            return result;
        }
        exports.parse = parse;
        function getAll() {
            return parse(document.cookie);
        }
        exports.getAll = getAll;
        function get(name) {
            return getAll()[name];
        }
        exports.get = get;
        function set(name, value, attributes) {
            document.cookie = encode(name, value, __assign({
                path: "/"
            }, attributes));
        }
        exports.set = set;
        function remove(name, attributes) {
            set(name, "", __assign(__assign({}, attributes), {
                expires: -1
            }));
        }
        exports.remove = remove;
    }));
    unwrapExports(esCookie);
    esCookie.encode;
    esCookie.parse;
    esCookie.getAll;
    var esCookie_4 = esCookie.get;
    var esCookie_5 = esCookie.set;
    var esCookie_6 = esCookie.remove;
    var CookieStorage = {
        get: function(key) {
            var value = esCookie_4(key);
            if (typeof value === "undefined") {
                return;
            }
            return JSON.parse(value);
        },
        save: function(key, value, options) {
            var cookieAttributes = {};
            if ("https:" === window.location.protocol) {
                cookieAttributes = {
                    secure: true,
                    sameSite: "none"
                };
            }
            if (options === null || options === void 0 ? void 0 : options.daysUntilExpire) {
                cookieAttributes.expires = options.daysUntilExpire;
            }
            if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
                cookieAttributes.domain = options.cookieDomain;
            }
            esCookie_5(key, JSON.stringify(value), cookieAttributes);
        },
        remove: function(key) {
            esCookie_6(key);
        }
    };
    var LEGACY_PREFIX = "_legacy_";
    var CookieStorageWithLegacySameSite = {
        get: function(key) {
            var value = CookieStorage.get(key);
            if (value) {
                return value;
            }
            return CookieStorage.get("".concat(LEGACY_PREFIX).concat(key));
        },
        save: function(key, value, options) {
            var cookieAttributes = {};
            if ("https:" === window.location.protocol) {
                cookieAttributes = {
                    secure: true
                };
            }
            if (options === null || options === void 0 ? void 0 : options.daysUntilExpire) {
                cookieAttributes.expires = options.daysUntilExpire;
            }
            esCookie_5("".concat(LEGACY_PREFIX).concat(key), JSON.stringify(value), cookieAttributes);
            CookieStorage.save(key, value, options);
        },
        remove: function(key) {
            CookieStorage.remove(key);
            CookieStorage.remove("".concat(LEGACY_PREFIX).concat(key));
        }
    };
    var SessionStorage = {
        get: function(key) {
            if (typeof sessionStorage === "undefined") {
                return;
            }
            var value = sessionStorage.getItem(key);
            if (typeof value === "undefined") {
                return;
            }
            return JSON.parse(value);
        },
        save: function(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        remove: function(key) {
            sessionStorage.removeItem(key);
        }
    };
    function funcToSource(fn, sourcemapArg) {
        var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
        var source = fn.toString();
        var lines = source.split("\n");
        lines.pop();
        lines.shift();
        var blankPrefixLength = lines[0].search(/\S/);
        var regex = /(['"])__worker_loader_strict__(['"])/g;
        for (var i = 0, n = lines.length; i &lt; n; ++i) {
            lines[i] = lines[i].substring(blankPrefixLength).replace(regex, "$1use strict$2") + "\n";
        }
        if (sourcemap) {
            lines.push("//# sourceMappingURL=" + sourcemap + "\n");
        }
        return lines;
    }
    function createURL(fn, sourcemapArg) {
        var lines = funcToSource(fn, sourcemapArg);
        var blob = new Blob(lines, {
            type: "application/javascript"
        });
        return URL.createObjectURL(blob);
    }
    function createInlineWorkerFactory(fn, sourcemapArg) {
        var url;
        return function WorkerFactory(options) {
            url = url || createURL(fn, sourcemapArg);
            return new Worker(url, options);
        };
    }
    var WorkerFactory = createInlineWorkerFactory((function() {
        (function() {
            "__worker_loader_strict__";
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array &amp;&amp; function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                if (typeof b !== "function" &amp;&amp; b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
            }
            var __assign = function() {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i &lt; n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) &amp;&amp; e.indexOf(p) &lt; 0) t[p] = s[p];
                if (s != null &amp;&amp; typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i &lt; p.length; i++) {
                    if (e.indexOf(p[i]) &lt; 0 &amp;&amp; Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
                }
                return t;
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }));
                }
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }
            function __generator(thisArg, body) {
                var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] &amp; 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                }, f, y, t, g;
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, typeof Symbol === "function" &amp;&amp; (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return step([ n, v ]);
                    };
                }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while (_) try {
                        if (f = 1, y &amp;&amp; (t = op[0] &amp; 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) &amp;&amp; t.call(y), 
                        0) : y.next) &amp;&amp; !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [ op[0] &amp; 2, t.value ];
                        switch (op[0]) {
                          case 0:
                          case 1:
                            t = op;
                            break;

                          case 4:
                            _.label++;
                            return {
                                value: op[1],
                                done: false
                            };

                          case 5:
                            _.label++;
                            y = op[1];
                            op = [ 0 ];
                            continue;

                          case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;

                          default:
                            if (!(t = _.trys, t = t.length &gt; 0 &amp;&amp; t[t.length - 1]) &amp;&amp; (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 &amp;&amp; (!t || op[1] &gt; t[0] &amp;&amp; op[1] &lt; t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 &amp;&amp; _.label &lt; t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t &amp;&amp; _.label &lt; t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [ 6, e ];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                    if (op[0] &amp; 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" &amp;&amp; o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- &gt; 0) &amp;&amp; !(r = i.next()).done) ar.push(r.value);
                } catch (error) {
                    e = {
                        error: error
                    };
                } finally {
                    try {
                        if (r &amp;&amp; !r.done &amp;&amp; (m = i["return"])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            }
            var GenericError = function(_super) {
                __extends(GenericError, _super);
                function GenericError(error, error_description) {
                    var _this = _super.call(this, error_description) || this;
                    _this.error = error;
                    _this.error_description = error_description;
                    Object.setPrototypeOf(_this, GenericError.prototype);
                    return _this;
                }
                GenericError.fromPayload = function(_a) {
                    var error = _a.error, error_description = _a.error_description;
                    return new GenericError(error, error_description);
                };
                return GenericError;
            }(Error);
            (function(_super) {
                __extends(AuthenticationError, _super);
                function AuthenticationError(error, error_description, state, appState) {
                    if (appState === void 0) {
                        appState = null;
                    }
                    var _this = _super.call(this, error, error_description) || this;
                    _this.state = state;
                    _this.appState = appState;
                    Object.setPrototypeOf(_this, AuthenticationError.prototype);
                    return _this;
                }
                return AuthenticationError;
            })(GenericError);
            var TimeoutError = function(_super) {
                __extends(TimeoutError, _super);
                function TimeoutError() {
                    var _this = _super.call(this, "timeout", "Timeout") || this;
                    Object.setPrototypeOf(_this, TimeoutError.prototype);
                    return _this;
                }
                return TimeoutError;
            }(GenericError);
            (function(_super) {
                __extends(PopupTimeoutError, _super);
                function PopupTimeoutError(popup) {
                    var _this = _super.call(this) || this;
                    _this.popup = popup;
                    Object.setPrototypeOf(_this, PopupTimeoutError.prototype);
                    return _this;
                }
                return PopupTimeoutError;
            })(TimeoutError);
            (function(_super) {
                __extends(PopupCancelledError, _super);
                function PopupCancelledError(popup) {
                    var _this = _super.call(this, "cancelled", "Popup closed") || this;
                    _this.popup = popup;
                    Object.setPrototypeOf(_this, PopupCancelledError.prototype);
                    return _this;
                }
                return PopupCancelledError;
            })(GenericError);
            (function(_super) {
                __extends(MfaRequiredError, _super);
                function MfaRequiredError(error, error_description, mfa_token) {
                    var _this = _super.call(this, error, error_description) || this;
                    _this.mfa_token = mfa_token;
                    Object.setPrototypeOf(_this, MfaRequiredError.prototype);
                    return _this;
                }
                return MfaRequiredError;
            })(GenericError);
            var MissingRefreshTokenError = function(_super) {
                __extends(MissingRefreshTokenError, _super);
                function MissingRefreshTokenError(audience, scope) {
                    var _this = _super.call(this, "missing_refresh_token", "Missing Refresh Token (audience: '".concat(valueOrEmptyString(audience, [ "default" ]), "', scope: '").concat(valueOrEmptyString(scope), "')")) || this;
                    _this.audience = audience;
                    _this.scope = scope;
                    Object.setPrototypeOf(_this, MissingRefreshTokenError.prototype);
                    return _this;
                }
                return MissingRefreshTokenError;
            }(GenericError);
            function valueOrEmptyString(value, exclude) {
                if (exclude === void 0) {
                    exclude = [];
                }
                return value &amp;&amp; !exclude.includes(value) ? value : "";
            }
            var stripUndefined = function(params) {
                return Object.keys(params).filter((function(k) {
                    return typeof params[k] !== "undefined";
                })).reduce((function(acc, key) {
                    var _a;
                    return __assign(__assign({}, acc), (_a = {}, _a[key] = params[key], _a));
                }), {});
            };
            var createQueryParams = function(_a) {
                var client_id = _a.clientId, params = __rest(_a, [ "clientId" ]);
                return new URLSearchParams(stripUndefined(__assign({
                    client_id: client_id
                }, params))).toString();
            };
            var refreshTokens = {};
            var cacheKey = function(audience, scope) {
                return "".concat(audience, "|").concat(scope);
            };
            var getRefreshToken = function(audience, scope) {
                return refreshTokens[cacheKey(audience, scope)];
            };
            var setRefreshToken = function(refreshToken, audience, scope) {
                return refreshTokens[cacheKey(audience, scope)] = refreshToken;
            };
            var deleteRefreshToken = function(audience, scope) {
                return delete refreshTokens[cacheKey(audience, scope)];
            };
            var wait = function(time) {
                return new Promise((function(resolve) {
                    return setTimeout(resolve, time);
                }));
            };
            var formDataToObject = function(formData) {
                var queryParams = new URLSearchParams(formData);
                var parsedQuery = {};
                queryParams.forEach((function(val, key) {
                    parsedQuery[key] = val;
                }));
                return parsedQuery;
            };
            var messageHandler = function(_a) {
                var _b = _a.data, timeout = _b.timeout, auth = _b.auth, fetchUrl = _b.fetchUrl, fetchOptions = _b.fetchOptions, useFormData = _b.useFormData, _c = __read(_a.ports, 1), port = _c[0];
                return __awaiter(void 0, void 0, void 0, (function() {
                    var json, _d, audience, scope, body, refreshToken, abortController, response, error_1, error_2;
                    return __generator(this, (function(_e) {
                        switch (_e.label) {
                          case 0:
                            _d = auth || {}, audience = _d.audience, scope = _d.scope;
                            _e.label = 1;

                          case 1:
                            _e.trys.push([ 1, 7, , 8 ]);
                            body = useFormData ? formDataToObject(fetchOptions.body) : JSON.parse(fetchOptions.body);
                            if (!body.refresh_token &amp;&amp; body.grant_type === "refresh_token") {
                                refreshToken = getRefreshToken(audience, scope);
                                if (!refreshToken) {
                                    throw new MissingRefreshTokenError(audience, scope);
                                }
                                fetchOptions.body = useFormData ? createQueryParams(__assign(__assign({}, body), {
                                    refresh_token: refreshToken
                                })) : JSON.stringify(__assign(__assign({}, body), {
                                    refresh_token: refreshToken
                                }));
                            }
                            abortController = void 0;
                            if (typeof AbortController === "function") {
                                abortController = new AbortController;
                                fetchOptions.signal = abortController.signal;
                            }
                            response = void 0;
                            _e.label = 2;

                          case 2:
                            _e.trys.push([ 2, 4, , 5 ]);
                            return [ 4, Promise.race([ wait(timeout), fetch(fetchUrl, __assign({}, fetchOptions)) ]) ];

                          case 3:
                            response = _e.sent();
                            return [ 3, 5 ];

                          case 4:
                            error_1 = _e.sent();
                            port.postMessage({
                                error: error_1.message
                            });
                            return [ 2 ];

                          case 5:
                            if (!response) {
                                if (abortController) abortController.abort();
                                port.postMessage({
                                    error: "Timeout when executing 'fetch'"
                                });
                                return [ 2 ];
                            }
                            return [ 4, response.json() ];

                          case 6:
                            json = _e.sent();
                            if (json.refresh_token) {
                                setRefreshToken(json.refresh_token, audience, scope);
                                delete json.refresh_token;
                            } else {
                                deleteRefreshToken(audience, scope);
                            }
                            port.postMessage({
                                ok: response.ok,
                                json: json
                            });
                            return [ 3, 8 ];

                          case 7:
                            error_2 = _e.sent();
                            port.postMessage({
                                ok: false,
                                json: {
                                    error_description: error_2.message
                                }
                            });
                            return [ 3, 8 ];

                          case 8:
                            return [ 2 ];
                        }
                    }));
                }));
            };
            {
                addEventListener("message", messageHandler);
            }
        })();
    }), null);
    var singlePromiseMap = {};
    var singlePromise = function(cb, key) {
        var promise = singlePromiseMap[key];
        if (!promise) {
            promise = cb().finally((function() {
                delete singlePromiseMap[key];
                promise = null;
            }));
            singlePromiseMap[key] = promise;
        }
        return promise;
    };
    var retryPromise = function(cb, maxNumberOfRetries) {
        if (maxNumberOfRetries === void 0) {
            maxNumberOfRetries = 3;
        }
        return __awaiter(void 0, void 0, void 0, (function() {
            var i;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    i = 0;
                    _a.label = 1;

                  case 1:
                    if (!(i &lt; maxNumberOfRetries)) return [ 3, 4 ];
                    return [ 4, cb() ];

                  case 2:
                    if (_a.sent()) {
                        return [ 2, true ];
                    }
                    _a.label = 3;

                  case 3:
                    i++;
                    return [ 3, 1 ];

                  case 4:
                    return [ 2, false ];
                }
            }));
        }));
    };
    var CacheKeyManifest = function() {
        function CacheKeyManifest(cache, clientId) {
            this.cache = cache;
            this.clientId = clientId;
            this.manifestKey = this.createManifestKeyFrom(this.clientId);
        }
        CacheKeyManifest.prototype.add = function(key) {
            var _a;
            return __awaiter(this, void 0, void 0, (function() {
                var keys, _b;
                return __generator(this, (function(_c) {
                    switch (_c.label) {
                      case 0:
                        _b = Set.bind;
                        return [ 4, this.cache.get(this.manifestKey) ];

                      case 1:
                        keys = new (_b.apply(Set, [ void 0, ((_a = _c.sent()) === null || _a === void 0 ? void 0 : _a.keys) || [] ]));
                        keys.add(key);
                        return [ 4, this.cache.set(this.manifestKey, {
                            keys: __spreadArray([], __read(keys), false)
                        }) ];

                      case 2:
                        _c.sent();
                        return [ 2 ];
                    }
                }));
            }));
        };
        CacheKeyManifest.prototype.remove = function(key) {
            return __awaiter(this, void 0, void 0, (function() {
                var entry, keys;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this.cache.get(this.manifestKey) ];

                      case 1:
                        entry = _a.sent();
                        if (!entry) return [ 3, 5 ];
                        keys = new Set(entry.keys);
                        keys.delete(key);
                        if (!(keys.size &gt; 0)) return [ 3, 3 ];
                        return [ 4, this.cache.set(this.manifestKey, {
                            keys: __spreadArray([], __read(keys), false)
                        }) ];

                      case 2:
                        return [ 2, _a.sent() ];

                      case 3:
                        return [ 4, this.cache.remove(this.manifestKey) ];

                      case 4:
                        return [ 2, _a.sent() ];

                      case 5:
                        return [ 2 ];
                    }
                }));
            }));
        };
        CacheKeyManifest.prototype.get = function() {
            return this.cache.get(this.manifestKey);
        };
        CacheKeyManifest.prototype.clear = function() {
            return this.cache.remove(this.manifestKey);
        };
        CacheKeyManifest.prototype.createManifestKeyFrom = function(clientId) {
            return "".concat(CACHE_KEY_PREFIX, "::").concat(clientId);
        };
        return CacheKeyManifest;
    }();
    var lock = new Lock;
    var GET_TOKEN_SILENTLY_LOCK_KEY = "auth0.lock.getTokenSilently";
    var buildOrganizationHintCookieName = function(clientId) {
        return "auth0.".concat(clientId, ".organization_hint");
    };
    var OLD_IS_AUTHENTICATED_COOKIE_NAME = "auth0.is.authenticated";
    var buildIsAuthenticatedCookieName = function(clientId) {
        return "auth0.".concat(clientId, ".is.authenticated");
    };
    var cacheLocationBuilders = {
        memory: function() {
            return (new InMemoryCache).enclosedCache;
        },
        localstorage: function() {
            return new LocalStorageCache;
        }
    };
    var cacheFactory = function(location) {
        return cacheLocationBuilders[location];
    };
    var getTokenIssuer = function(issuer, domainUrl) {
        if (issuer) {
            return issuer.startsWith("https://") ? issuer : "https://".concat(issuer, "/");
        }
        return "".concat(domainUrl, "/");
    };
    var getDomain = function(domainUrl) {
        if (!/^https?:\/\//.test(domainUrl)) {
            return "https://".concat(domainUrl);
        }
        return domainUrl;
    };
    var getCustomInitialOptions = function(options) {
        options.advancedOptions;
        options.audience;
        options.auth0Client;
        options.authorizeTimeoutInSeconds;
        options.cacheLocation;
        options.cache;
        options.clientId;
        options.domain;
        options.issuer;
        options.leeway;
        options.max_age;
        options.nowProvider;
        options.redirect_uri;
        options.scope;
        options.useRefreshTokens;
        options.useRefreshTokensFallback;
        options.useCookiesForTransactions;
        options.useFormData;
        var customParams = __rest(options, [ "advancedOptions", "audience", "auth0Client", "authorizeTimeoutInSeconds", "cacheLocation", "cache", "clientId", "domain", "issuer", "leeway", "max_age", "nowProvider", "redirect_uri", "scope", "useRefreshTokens", "useRefreshTokensFallback", "useCookiesForTransactions", "useFormData" ]);
        return customParams;
    };
    var Auth0Client = function() {
        function Auth0Client(options) {
            var _a, _b;
            this.defaultOptions = {
                useRefreshTokensFallback: false,
                useFormData: true
            };
            this.options = __assign(__assign({}, this.defaultOptions), options);
            typeof window !== "undefined" &amp;&amp; validateCrypto();
            if (options.cache &amp;&amp; options.cacheLocation) {
                console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.");
            }
            var cache;
            if (options.cache) {
                cache = options.cache;
            } else {
                this.cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
                if (!cacheFactory(this.cacheLocation)) {
                    throw new Error('Invalid cache location "'.concat(this.cacheLocation, '"'));
                }
                cache = cacheFactory(this.cacheLocation)();
            }
            this.httpTimeoutMs = options.httpTimeoutInSeconds ? options.httpTimeoutInSeconds * 1e3 : DEFAULT_FETCH_TIMEOUT_MS;
            this.cookieStorage = options.legacySameSiteCookie === false ? CookieStorage : CookieStorageWithLegacySameSite;
            this.orgHintCookieName = buildOrganizationHintCookieName(this.options.clientId);
            this.isAuthenticatedCookieName = buildIsAuthenticatedCookieName(this.options.clientId);
            this.sessionCheckExpiryDays = options.sessionCheckExpiryDays || DEFAULT_SESSION_CHECK_EXPIRY_DAYS;
            var transactionStorage = options.useCookiesForTransactions ? this.cookieStorage : SessionStorage;
            this.scope = this.options.scope;
            this.transactionManager = new TransactionManager(transactionStorage, this.options.clientId);
            this.nowProvider = this.options.nowProvider || DEFAULT_NOW_PROVIDER;
            this.cacheManager = new CacheManager(cache, !cache.allKeys ? new CacheKeyManifest(cache, this.options.clientId) : null, this.nowProvider);
            this.domainUrl = getDomain(this.options.domain);
            this.tokenIssuer = getTokenIssuer(this.options.issuer, this.domainUrl);
            this.defaultScope = getUniqueScopes("openid", ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedOptions) === null || _b === void 0 ? void 0 : _b.defaultScope) !== undefined ? this.options.advancedOptions.defaultScope : DEFAULT_SCOPE);
            if (this.options.useRefreshTokens) {
                this.scope = getUniqueScopes(this.scope, "offline_access");
            }
            if (typeof window !== "undefined" &amp;&amp; window.Worker &amp;&amp; this.options.useRefreshTokens &amp;&amp; this.cacheLocation === CACHE_LOCATION_MEMORY) {
                this.worker = new WorkerFactory;
            }
            this.customOptions = getCustomInitialOptions(options);
        }
        Auth0Client.prototype._url = function(path) {
            var auth0Client = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || DEFAULT_AUTH0_CLIENT)));
            return "".concat(this.domainUrl).concat(path, "&amp;auth0Client=").concat(auth0Client);
        };
        Auth0Client.prototype._getParams = function(authorizeOptions, state, nonce, code_challenge, redirect_uri) {
            var _a = this.options;
            _a.useRefreshTokens;
            _a.useCookiesForTransactions;
            _a.useFormData;
            _a.auth0Client;
            _a.cacheLocation;
            _a.advancedOptions;
            _a.detailedResponse;
            _a.nowProvider;
            _a.authorizeTimeoutInSeconds;
            _a.legacySameSiteCookie;
            _a.sessionCheckExpiryDays;
            _a.domain;
            _a.leeway;
            _a.httpTimeoutInSeconds;
            _a.useRefreshTokensFallback;
            var loginOptions = __rest(_a, [ "useRefreshTokens", "useCookiesForTransactions", "useFormData", "auth0Client", "cacheLocation", "advancedOptions", "detailedResponse", "nowProvider", "authorizeTimeoutInSeconds", "legacySameSiteCookie", "sessionCheckExpiryDays", "domain", "leeway", "httpTimeoutInSeconds", "useRefreshTokensFallback" ]);
            return __assign(__assign(__assign({}, loginOptions), authorizeOptions), {
                scope: getUniqueScopes(this.defaultScope, this.scope, authorizeOptions.scope),
                response_type: "code",
                response_mode: "query",
                state: state,
                nonce: nonce,
                redirect_uri: redirect_uri || this.options.redirect_uri,
                code_challenge: code_challenge,
                code_challenge_method: "S256"
            });
        };
        Auth0Client.prototype._authorizeUrl = function(authorizeOptions) {
            return this._url("/authorize?".concat(createQueryParams(authorizeOptions)));
        };
        Auth0Client.prototype._verifyIdToken = function(id_token, nonce, organizationId) {
            return __awaiter(this, void 0, void 0, (function() {
                var now;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this.nowProvider() ];

                      case 1:
                        now = _a.sent();
                        return [ 2, verify({
                            iss: this.tokenIssuer,
                            aud: this.options.clientId,
                            id_token: id_token,
                            nonce: nonce,
                            organizationId: organizationId,
                            leeway: this.options.leeway,
                            max_age: this._parseNumber(this.options.max_age),
                            now: now
                        }) ];
                    }
                }));
            }));
        };
        Auth0Client.prototype._parseNumber = function(value) {
            if (typeof value !== "string") {
                return value;
            }
            return parseInt(value, 10) || undefined;
        };
        Auth0Client.prototype._processOrgIdHint = function(organizationId) {
            if (organizationId) {
                this.cookieStorage.save(this.orgHintCookieName, organizationId, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                    cookieDomain: this.options.cookieDomain
                });
            } else {
                this.cookieStorage.remove(this.orgHintCookieName);
            }
        };
        Auth0Client.prototype.buildAuthorizeUrl = function(options) {
            if (options === void 0) {
                options = {};
            }
            return __awaiter(this, void 0, void 0, (function() {
                var url;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this._prepareAuthorizeUrl(options) ];

                      case 1:
                        url = _a.sent().url;
                        return [ 2, url ];
                    }
                }));
            }));
        };
        Auth0Client.prototype._prepareAuthorizeUrl = function(options) {
            if (options === void 0) {
                options = {};
            }
            return __awaiter(this, void 0, void 0, (function() {
                var redirect_uri, appState, authorizeOptions, state, nonce, code_verifier, code_challengeBuffer, code_challenge, fragment, params, url;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        redirect_uri = options.redirect_uri, appState = options.appState, authorizeOptions = __rest(options, [ "redirect_uri", "appState" ]);
                        state = encode(createRandomString());
                        nonce = encode(createRandomString());
                        code_verifier = createRandomString();
                        return [ 4, sha256(code_verifier) ];

                      case 1:
                        code_challengeBuffer = _a.sent();
                        code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                        fragment = options.fragment ? "#".concat(options.fragment) : "";
                        params = this._getParams(authorizeOptions, state, nonce, code_challenge, redirect_uri);
                        url = this._authorizeUrl(params);
                        return [ 2, {
                            nonce: nonce,
                            code_verifier: code_verifier,
                            appState: appState,
                            scope: params.scope,
                            audience: params.audience || "default",
                            redirect_uri: params.redirect_uri,
                            state: state,
                            url: url + fragment
                        } ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.loginWithPopup = function(options, config) {
            return __awaiter(this, void 0, void 0, (function() {
                var authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, codeResult, authResult, organizationId, decodedToken, cacheEntry;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        options = options || {};
                        config = config || {};
                        if (!config.popup) {
                            config.popup = openPopup("");
                            if (!config.popup) {
                                throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
                            }
                        }
                        authorizeOptions = __rest(options, []);
                        stateIn = encode(createRandomString());
                        nonceIn = encode(createRandomString());
                        code_verifier = createRandomString();
                        return [ 4, sha256(code_verifier) ];

                      case 1:
                        code_challengeBuffer = _a.sent();
                        code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                        params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, this.options.redirect_uri || window.location.origin);
                        url = this._authorizeUrl(__assign(__assign({}, params), {
                            response_mode: "web_message"
                        }));
                        config.popup.location.href = url;
                        return [ 4, runPopup(__assign(__assign({}, config), {
                            timeoutInSeconds: config.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
                        })) ];

                      case 2:
                        codeResult = _a.sent();
                        if (stateIn !== codeResult.state) {
                            throw new Error("Invalid state");
                        }
                        return [ 4, oauthToken({
                            audience: params.audience,
                            scope: params.scope,
                            baseUrl: this.domainUrl,
                            client_id: this.options.clientId,
                            code_verifier: code_verifier,
                            code: codeResult.code,
                            grant_type: "authorization_code",
                            redirect_uri: params.redirect_uri,
                            auth0Client: this.options.auth0Client,
                            useFormData: this.options.useFormData,
                            timeout: this.httpTimeoutMs
                        }, this.worker) ];

                      case 3:
                        authResult = _a.sent();
                        organizationId = options.organization || this.options.organization;
                        return [ 4, this._verifyIdToken(authResult.id_token, nonceIn, organizationId) ];

                      case 4:
                        decodedToken = _a.sent();
                        cacheEntry = __assign(__assign({}, authResult), {
                            decodedToken: decodedToken,
                            scope: params.scope,
                            audience: params.audience || "default",
                            client_id: this.options.clientId
                        });
                        return [ 4, this._saveEntryInCache(cacheEntry) ];

                      case 5:
                        _a.sent();
                        this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                            daysUntilExpire: this.sessionCheckExpiryDays,
                            cookieDomain: this.options.cookieDomain
                        });
                        this._processOrgIdHint(decodedToken.claims.org_id);
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.getUser = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var audience, scope, cache;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        audience = this.options.audience || "default";
                        scope = getUniqueScopes(this.defaultScope, this.scope);
                        return [ 4, this.cacheManager.get(new CacheKey({
                            clientId: this.options.clientId,
                            audience: audience,
                            scope: scope
                        })) ];

                      case 1:
                        cache = _a.sent();
                        return [ 2, cache &amp;&amp; cache.decodedToken &amp;&amp; cache.decodedToken.user ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.getIdTokenClaims = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var audience, scope, cache;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        audience = this.options.audience || "default";
                        scope = getUniqueScopes(this.defaultScope, this.scope);
                        return [ 4, this.cacheManager.get(new CacheKey({
                            clientId: this.options.clientId,
                            audience: audience,
                            scope: scope
                        })) ];

                      case 1:
                        cache = _a.sent();
                        return [ 2, cache &amp;&amp; cache.decodedToken &amp;&amp; cache.decodedToken.claims ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.loginWithRedirect = function(options) {
            if (options === void 0) {
                options = {};
            }
            return __awaiter(this, void 0, void 0, (function() {
                var onRedirect, urlOptions, organizationId, _a, url, transaction;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        onRedirect = options.onRedirect, urlOptions = __rest(options, [ "onRedirect" ]);
                        organizationId = urlOptions.organization || this.options.organization;
                        return [ 4, this._prepareAuthorizeUrl(urlOptions) ];

                      case 1:
                        _a = _b.sent(), url = _a.url, transaction = __rest(_a, [ "url" ]);
                        this.transactionManager.create(__assign(__assign({}, transaction), organizationId &amp;&amp; {
                            organizationId: organizationId
                        }));
                        if (!onRedirect) return [ 3, 3 ];
                        return [ 4, onRedirect(url) ];

                      case 2:
                        _b.sent();
                        return [ 3, 4 ];

                      case 3:
                        window.location.assign(url);
                        _b.label = 4;

                      case 4:
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.handleRedirectCallback = function(url) {
            if (url === void 0) {
                url = window.location.href;
            }
            return __awaiter(this, void 0, void 0, (function() {
                var queryStringFragments, _a, state, code, error, error_description, transaction, tokenOptions, authResult, decodedToken;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        queryStringFragments = url.split("?").slice(1);
                        if (queryStringFragments.length === 0) {
                            throw new Error("There are no query params available for parsing.");
                        }
                        _a = parseQueryResult(queryStringFragments.join("")), state = _a.state, code = _a.code, 
                        error = _a.error, error_description = _a.error_description;
                        transaction = this.transactionManager.get();
                        if (!transaction) {
                            throw new Error("Invalid state");
                        }
                        this.transactionManager.remove();
                        if (error) {
                            throw new AuthenticationError(error, error_description, state, transaction.appState);
                        }
                        if (!transaction.code_verifier || transaction.state &amp;&amp; transaction.state !== state) {
                            throw new Error("Invalid state");
                        }
                        tokenOptions = {
                            audience: transaction.audience,
                            scope: transaction.scope,
                            baseUrl: this.domainUrl,
                            client_id: this.options.clientId,
                            code_verifier: transaction.code_verifier,
                            grant_type: "authorization_code",
                            code: code,
                            auth0Client: this.options.auth0Client,
                            useFormData: this.options.useFormData,
                            timeout: this.httpTimeoutMs
                        };
                        if (undefined !== transaction.redirect_uri) {
                            tokenOptions.redirect_uri = transaction.redirect_uri;
                        }
                        return [ 4, oauthToken(tokenOptions, this.worker) ];

                      case 1:
                        authResult = _b.sent();
                        return [ 4, this._verifyIdToken(authResult.id_token, transaction.nonce, transaction.organizationId) ];

                      case 2:
                        decodedToken = _b.sent();
                        return [ 4, this._saveEntryInCache(__assign(__assign(__assign(__assign({}, authResult), {
                            decodedToken: decodedToken,
                            audience: transaction.audience,
                            scope: transaction.scope
                        }), authResult.scope ? {
                            oauthTokenScope: authResult.scope
                        } : null), {
                            client_id: this.options.clientId
                        })) ];

                      case 3:
                        _b.sent();
                        this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                            daysUntilExpire: this.sessionCheckExpiryDays,
                            cookieDomain: this.options.cookieDomain
                        });
                        this._processOrgIdHint(decodedToken.claims.org_id);
                        return [ 2, {
                            appState: transaction.appState
                        } ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.checkSession = function(options) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                            if (!this.cookieStorage.get(OLD_IS_AUTHENTICATED_COOKIE_NAME)) {
                                return [ 2 ];
                            } else {
                                this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                                    daysUntilExpire: this.sessionCheckExpiryDays,
                                    cookieDomain: this.options.cookieDomain
                                });
                                this.cookieStorage.remove(OLD_IS_AUTHENTICATED_COOKIE_NAME);
                            }
                        }
                        _a.label = 1;

                      case 1:
                        _a.trys.push([ 1, 3, , 4 ]);
                        return [ 4, this.getTokenSilently(options) ];

                      case 2:
                        _a.sent();
                        return [ 3, 4 ];

                      case 3:
                        _a.sent();
                        return [ 3, 4 ];

                      case 4:
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.getTokenSilently = function(options) {
            if (options === void 0) {
                options = {};
            }
            return __awaiter(this, void 0, void 0, (function() {
                var _a, cacheMode, getTokenOptions;
                var _this = this;
                return __generator(this, (function(_b) {
                    _a = __assign(__assign({
                        audience: this.options.audience,
                        cacheMode: "on"
                    }, options), {
                        scope: getUniqueScopes(this.defaultScope, this.scope, options.scope)
                    }), cacheMode = _a.cacheMode, getTokenOptions = __rest(_a, [ "cacheMode" ]);
                    return [ 2, singlePromise((function() {
                        return _this._getTokenSilently(__assign({
                            cacheMode: cacheMode
                        }, getTokenOptions));
                    }), "".concat(this.options.clientId, "::").concat(getTokenOptions.audience, "::").concat(getTokenOptions.scope)) ];
                }));
            }));
        };
        Auth0Client.prototype._getTokenSilently = function(options) {
            if (options === void 0) {
                options = {};
            }
            return __awaiter(this, void 0, void 0, (function() {
                var cacheMode, getTokenOptions, entry, entry, authResult, _a, id_token, access_token, oauthTokenScope, expires_in;
                return __generator(this, (function(_b) {
                    switch (_b.label) {
                      case 0:
                        cacheMode = options.cacheMode, getTokenOptions = __rest(options, [ "cacheMode" ]);
                        if (!(cacheMode !== "off")) return [ 3, 2 ];
                        return [ 4, this._getEntryFromCache({
                            scope: getTokenOptions.scope,
                            audience: getTokenOptions.audience || "default",
                            clientId: this.options.clientId,
                            getDetailedEntry: options.detailedResponse
                        }) ];

                      case 1:
                        entry = _b.sent();
                        if (entry) {
                            return [ 2, entry ];
                        }
                        _b.label = 2;

                      case 2:
                        if (cacheMode === "cache-only") {
                            return [ 2 ];
                        }
                        return [ 4, retryPromise((function() {
                            return lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5e3);
                        }), 10) ];

                      case 3:
                        if (!_b.sent()) return [ 3, 15 ];
                        _b.label = 4;

                      case 4:
                        _b.trys.push([ 4, , 12, 14 ]);
                        if (!(cacheMode !== "off")) return [ 3, 6 ];
                        return [ 4, this._getEntryFromCache({
                            scope: getTokenOptions.scope,
                            audience: getTokenOptions.audience || "default",
                            clientId: this.options.clientId,
                            getDetailedEntry: options.detailedResponse
                        }) ];

                      case 5:
                        entry = _b.sent();
                        if (entry) {
                            return [ 2, entry ];
                        }
                        _b.label = 6;

                      case 6:
                        if (!this.options.useRefreshTokens) return [ 3, 8 ];
                        return [ 4, this._getTokenUsingRefreshToken(getTokenOptions) ];

                      case 7:
                        _a = _b.sent();
                        return [ 3, 10 ];

                      case 8:
                        return [ 4, this._getTokenFromIFrame(getTokenOptions) ];

                      case 9:
                        _a = _b.sent();
                        _b.label = 10;

                      case 10:
                        authResult = _a;
                        return [ 4, this._saveEntryInCache(__assign({
                            client_id: this.options.clientId
                        }, authResult)) ];

                      case 11:
                        _b.sent();
                        this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                            daysUntilExpire: this.sessionCheckExpiryDays,
                            cookieDomain: this.options.cookieDomain
                        });
                        if (options.detailedResponse) {
                            id_token = authResult.id_token, access_token = authResult.access_token, oauthTokenScope = authResult.oauthTokenScope, 
                            expires_in = authResult.expires_in;
                            return [ 2, __assign(__assign({
                                id_token: id_token,
                                access_token: access_token
                            }, oauthTokenScope ? {
                                scope: oauthTokenScope
                            } : null), {
                                expires_in: expires_in
                            }) ];
                        }
                        return [ 2, authResult.access_token ];

                      case 12:
                        return [ 4, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY) ];

                      case 13:
                        _b.sent();
                        return [ 7 ];

                      case 14:
                        return [ 3, 16 ];

                      case 15:
                        throw new TimeoutError;

                      case 16:
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.getTokenWithPopup = function(options, config) {
            if (options === void 0) {
                options = {};
            }
            if (config === void 0) {
                config = {};
            }
            return __awaiter(this, void 0, void 0, (function() {
                var cache;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        options.audience = options.audience || this.options.audience;
                        options.scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                        config = __assign(__assign({}, DEFAULT_POPUP_CONFIG_OPTIONS), config);
                        return [ 4, this.loginWithPopup(options, config) ];

                      case 1:
                        _a.sent();
                        return [ 4, this.cacheManager.get(new CacheKey({
                            scope: options.scope,
                            audience: options.audience || "default",
                            clientId: this.options.clientId
                        })) ];

                      case 2:
                        cache = _a.sent();
                        return [ 2, cache.access_token ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.isAuthenticated = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var user;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this.getUser() ];

                      case 1:
                        user = _a.sent();
                        return [ 2, !!user ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.buildLogoutUrl = function(options) {
            if (options === void 0) {
                options = {};
            }
            if (options.clientId !== null) {
                options.clientId = options.clientId || this.options.clientId;
            } else {
                delete options.clientId;
            }
            var federated = options.federated, logoutOptions = __rest(options, [ "federated" ]);
            var federatedQuery = federated ? "&amp;federated" : "";
            var url = this._url("/v2/logout?".concat(createQueryParams(logoutOptions)));
            return url + federatedQuery;
        };
        Auth0Client.prototype.logout = function(options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            var localOnly = options.localOnly, logoutOptions = __rest(options, [ "localOnly" ]);
            if (localOnly &amp;&amp; logoutOptions.federated) {
                throw new Error("It is invalid to set both the `federated` and `localOnly` options to `true`");
            }
            var postCacheClear = function() {
                _this.cookieStorage.remove(_this.orgHintCookieName);
                _this.cookieStorage.remove(_this.isAuthenticatedCookieName);
                if (localOnly) {
                    return;
                }
                var url = _this.buildLogoutUrl(logoutOptions);
                window.location.assign(url);
            };
            if (this.options.cache) {
                return this.cacheManager.clear().then((function() {
                    return postCacheClear();
                }));
            } else {
                this.cacheManager.clearSync();
                postCacheClear();
            }
        };
        Auth0Client.prototype._getTokenFromIFrame = function(options) {
            return __awaiter(this, void 0, void 0, (function() {
                var stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, withoutClientOptions, params, orgIdHint, url, authorizeTimeout, codeResult, scope, audience, customOptions, tokenResult, decodedToken, e_1;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        stateIn = encode(createRandomString());
                        nonceIn = encode(createRandomString());
                        code_verifier = createRandomString();
                        return [ 4, sha256(code_verifier) ];

                      case 1:
                        code_challengeBuffer = _a.sent();
                        code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                        options.detailedResponse, withoutClientOptions = __rest(options, [ "detailedResponse" ]);
                        params = this._getParams(withoutClientOptions, stateIn, nonceIn, code_challenge, options.redirect_uri || this.options.redirect_uri || window.location.origin);
                        orgIdHint = this.cookieStorage.get(this.orgHintCookieName);
                        if (orgIdHint &amp;&amp; !params.organization) {
                            params.organization = orgIdHint;
                        }
                        url = this._authorizeUrl(__assign(__assign({}, params), {
                            prompt: "none",
                            response_mode: "web_message"
                        }));
                        _a.label = 2;

                      case 2:
                        _a.trys.push([ 2, 6, , 7 ]);
                        if (window.crossOriginIsolated) {
                            throw new GenericError("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
                        }
                        authorizeTimeout = options.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
                        return [ 4, runIframe(url, this.domainUrl, authorizeTimeout) ];

                      case 3:
                        codeResult = _a.sent();
                        if (stateIn !== codeResult.state) {
                            throw new Error("Invalid state");
                        }
                        scope = options.scope, audience = options.audience, options.redirect_uri, options.cacheMode, 
                        options.timeoutInSeconds, options.detailedResponse, customOptions = __rest(options, [ "scope", "audience", "redirect_uri", "cacheMode", "timeoutInSeconds", "detailedResponse" ]);
                        return [ 4, oauthToken(__assign(__assign(__assign({}, this.customOptions), customOptions), {
                            scope: scope,
                            audience: audience,
                            baseUrl: this.domainUrl,
                            client_id: this.options.clientId,
                            code_verifier: code_verifier,
                            code: codeResult.code,
                            grant_type: "authorization_code",
                            redirect_uri: params.redirect_uri,
                            auth0Client: this.options.auth0Client,
                            useFormData: this.options.useFormData,
                            timeout: customOptions.timeout || this.httpTimeoutMs
                        }), this.worker) ];

                      case 4:
                        tokenResult = _a.sent();
                        return [ 4, this._verifyIdToken(tokenResult.id_token, nonceIn) ];

                      case 5:
                        decodedToken = _a.sent();
                        this._processOrgIdHint(decodedToken.claims.org_id);
                        return [ 2, __assign(__assign({}, tokenResult), {
                            decodedToken: decodedToken,
                            scope: params.scope,
                            oauthTokenScope: tokenResult.scope,
                            audience: params.audience || "default"
                        }) ];

                      case 6:
                        e_1 = _a.sent();
                        if (e_1.error === "login_required") {
                            this.logout({
                                localOnly: true
                            });
                        }
                        throw e_1;

                      case 7:
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype._getTokenUsingRefreshToken = function(options) {
            return __awaiter(this, void 0, void 0, (function() {
                var cache, redirect_uri, tokenResult, scope, audience, customOptions, timeout, e_2, decodedToken;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        options.scope = getUniqueScopes(this.defaultScope, this.options.scope, options.scope);
                        return [ 4, this.cacheManager.get(new CacheKey({
                            scope: options.scope,
                            audience: options.audience || "default",
                            clientId: this.options.clientId
                        })) ];

                      case 1:
                        cache = _a.sent();
                        if (!((!cache || !cache.refresh_token) &amp;&amp; !this.worker)) return [ 3, 4 ];
                        if (!this.options.useRefreshTokensFallback) return [ 3, 3 ];
                        return [ 4, this._getTokenFromIFrame(options) ];

                      case 2:
                        return [ 2, _a.sent() ];

                      case 3:
                        throw new MissingRefreshTokenError(options.audience || "default", options.scope);

                      case 4:
                        redirect_uri = options.redirect_uri || this.options.redirect_uri || window.location.origin;
                        scope = options.scope, audience = options.audience, options.cacheMode, options.timeoutInSeconds, 
                        options.detailedResponse, customOptions = __rest(options, [ "scope", "audience", "cacheMode", "timeoutInSeconds", "detailedResponse" ]);
                        timeout = typeof options.timeoutInSeconds === "number" ? options.timeoutInSeconds * 1e3 : null;
                        _a.label = 5;

                      case 5:
                        _a.trys.push([ 5, 7, , 10 ]);
                        return [ 4, oauthToken(__assign(__assign(__assign(__assign(__assign({}, this.customOptions), customOptions), {
                            audience: audience,
                            scope: scope,
                            baseUrl: this.domainUrl,
                            client_id: this.options.clientId,
                            grant_type: "refresh_token",
                            refresh_token: cache &amp;&amp; cache.refresh_token,
                            redirect_uri: redirect_uri
                        }), timeout &amp;&amp; {
                            timeout: timeout
                        }), {
                            auth0Client: this.options.auth0Client,
                            useFormData: this.options.useFormData,
                            timeout: this.httpTimeoutMs
                        }), this.worker) ];

                      case 6:
                        tokenResult = _a.sent();
                        return [ 3, 10 ];

                      case 7:
                        e_2 = _a.sent();
                        if (!((e_2.message.indexOf(MISSING_REFRESH_TOKEN_ERROR_MESSAGE) &gt; -1 || e_2.message &amp;&amp; e_2.message.indexOf(INVALID_REFRESH_TOKEN_ERROR_MESSAGE) &gt; -1) &amp;&amp; this.options.useRefreshTokensFallback)) return [ 3, 9 ];
                        return [ 4, this._getTokenFromIFrame(options) ];

                      case 8:
                        return [ 2, _a.sent() ];

                      case 9:
                        throw e_2;

                      case 10:
                        return [ 4, this._verifyIdToken(tokenResult.id_token) ];

                      case 11:
                        decodedToken = _a.sent();
                        return [ 2, __assign(__assign({}, tokenResult), {
                            decodedToken: decodedToken,
                            scope: options.scope,
                            oauthTokenScope: tokenResult.scope,
                            audience: options.audience || "default"
                        }) ];
                    }
                }));
            }));
        };
        Auth0Client.prototype._saveEntryInCache = function(entry) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this.cacheManager.set(entry) ];

                      case 1:
                        _a.sent();
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype._updateIdTokenInCache = function(entry) {
            return __awaiter(this, void 0, void 0, (function() {
                var audience, scope, idTokenEntry;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        audience = this.options.audience || "default";
                        scope = getUniqueScopes(this.defaultScope, this.scope);
                        return [ 4, this.cacheManager.get(new CacheKey({
                            clientId: this.options.clientId,
                            audience: audience,
                            scope: scope
                        })) ];

                      case 1:
                        idTokenEntry = _a.sent();
                        return [ 4, this.cacheManager.set(__assign(__assign({}, idTokenEntry), {
                            client_id: this.options.clientId,
                            id_token: entry.id_token,
                            decodedToken: entry.decodedToken
                        })) ];

                      case 2:
                        _a.sent();
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype._getEntryFromCache = function(_a) {
            var scope = _a.scope, audience = _a.audience, clientId = _a.clientId, _b = _a.getDetailedEntry, getDetailedEntry = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, (function() {
                var entry, id_token, access_token, oauthTokenScope, expires_in;
                return __generator(this, (function(_c) {
                    switch (_c.label) {
                      case 0:
                        return [ 4, this.cacheManager.get(new CacheKey({
                            scope: scope,
                            audience: audience,
                            clientId: clientId
                        }), 60) ];

                      case 1:
                        entry = _c.sent();
                        if (entry &amp;&amp; entry.access_token) {
                            if (getDetailedEntry) {
                                id_token = entry.id_token, access_token = entry.access_token, oauthTokenScope = entry.oauthTokenScope, 
                                expires_in = entry.expires_in;
                                return [ 2, __assign(__assign({
                                    id_token: id_token,
                                    access_token: access_token
                                }, oauthTokenScope ? {
                                    scope: oauthTokenScope
                                } : null), {
                                    expires_in: expires_in
                                }) ];
                            }
                            return [ 2, entry.access_token ];
                        }
                        return [ 2 ];
                    }
                }));
            }));
        };
        Auth0Client.prototype.migrateToV2 = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var idTokenEntry, audience, scope, entryToMigrate;
                return __generator(this, (function(_a) {
                    switch (_a.label) {
                      case 0:
                        return [ 4, this.cacheManager.get(new CacheKey({
                            clientId: this.options.clientId
                        })) ];

                      case 1:
                        idTokenEntry = _a.sent();
                        if (idTokenEntry) {
                            return [ 2 ];
                        }
                        audience = this.options.audience || "default";
                        scope = getUniqueScopes(this.defaultScope, this.scope);
                        return [ 4, this.cacheManager.get(new CacheKey({
                            clientId: this.options.clientId,
                            scope: scope,
                            audience: audience
                        })) ];

                      case 2:
                        entryToMigrate = _a.sent();
                        if (!entryToMigrate) return [ 3, 4 ];
                        return [ 4, this.cacheManager.set({
                            client_id: this.options.clientId,
                            id_token: entryToMigrate.id_token,
                            decodedToken: entryToMigrate.decodedToken
                        }) ];

                      case 3:
                        _a.sent();
                        _a.label = 4;

                      case 4:
                        return [ 2 ];
                    }
                }));
            }));
        };
        return Auth0Client;
    }();
    var User = function() {
        function User() {}
        return User;
    }();
    function createAuth0Client(options) {
        return __awaiter(this, void 0, void 0, (function() {
            var auth0;
            return __generator(this, (function(_a) {
                switch (_a.label) {
                  case 0:
                    auth0 = new Auth0Client(options);
                    return [ 4, auth0.checkSession() ];

                  case 1:
                    _a.sent();
                    return [ 2, auth0 ];
                }
            }));
        }));
    }
    exports.Auth0Client = Auth0Client;
    exports.AuthenticationError = AuthenticationError;
    exports.CacheKey = CacheKey;
    exports.GenericError = GenericError;
    exports.InMemoryCache = InMemoryCache;
    exports.LocalStorageCache = LocalStorageCache;
    exports.MfaRequiredError = MfaRequiredError;
    exports.PopupCancelledError = PopupCancelledError;
    exports.PopupTimeoutError = PopupTimeoutError;
    exports.TimeoutError = TimeoutError;
    exports.User = User;
    exports.createAuth0Client = createAuth0Client;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
}));
//# sourceMappingURL=auth0-spa-js.development.js.map

</textarea><div class="CodeMirror CodeMirror-wrap cm-s-paraiso-light" translate="no"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 433px; left: 44px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true" style="display: block; bottom: 0px;"><div style="min-width: 1px; height: 73928px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 40px; margin-bottom: -15px; border-right-width: 35px; min-height: 73928px; padding-right: 15px; padding-bottom: 0px;"><div style="position: relative; top: 73220px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like">x</pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>3559</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""><div class="CodeMirror-cursor" style="left: 4px; top: 660px; height: 20px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3525</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">function</span> <span class="cm-def">createAuth0Client</span>(<span class="cm-def">options</span>) {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3526</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable-2">__awaiter</span>(<span class="cm-keyword">this</span>, <span class="cm-keyword">void</span> <span class="cm-number">0</span>, <span class="cm-keyword">void</span> <span class="cm-number">0</span>, (<span class="cm-keyword">function</span>() {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3527</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">var</span> <span class="cm-def">auth0</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3528</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable-2">__generator</span>(<span class="cm-keyword">this</span>, (<span class="cm-keyword">function</span>(<span class="cm-def">_a</span>) {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3529</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">switch</span> (<span class="cm-variable-2">_a</span>.<span class="cm-property">label</span>) {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3530</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">case</span> <span class="cm-number">0</span>:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3531</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">auth0</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable-2">Auth0Client</span>(<span class="cm-variable-2">options</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3532</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> [ <span class="cm-number">4</span>, <span class="cm-variable-2">auth0</span>.<span class="cm-property">checkSession</span>() ];</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3533</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3534</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">case</span> <span class="cm-number">1</span>:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3535</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">_a</span>.<span class="cm-property">sent</span>();</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3536</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> [ <span class="cm-number">2</span>, <span class="cm-variable-2">auth0</span> ];</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3537</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3538</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }));</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3539</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  }));</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3540</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3541</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">Auth0Client</span> <span class="cm-operator">=</span> <span class="cm-variable-2">Auth0Client</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3542</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">AuthenticationError</span> <span class="cm-operator">=</span> <span class="cm-variable-2">AuthenticationError</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3543</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">CacheKey</span> <span class="cm-operator">=</span> <span class="cm-variable-2">CacheKey</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3544</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">GenericError</span> <span class="cm-operator">=</span> <span class="cm-variable-2">GenericError</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3545</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">InMemoryCache</span> <span class="cm-operator">=</span> <span class="cm-variable-2">InMemoryCache</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3546</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">LocalStorageCache</span> <span class="cm-operator">=</span> <span class="cm-variable-2">LocalStorageCache</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3547</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">MfaRequiredError</span> <span class="cm-operator">=</span> <span class="cm-variable-2">MfaRequiredError</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3548</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">PopupCancelledError</span> <span class="cm-operator">=</span> <span class="cm-variable-2">PopupCancelledError</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3549</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">PopupTimeoutError</span> <span class="cm-operator">=</span> <span class="cm-variable-2">PopupTimeoutError</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3550</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">TimeoutError</span> <span class="cm-operator">=</span> <span class="cm-variable-2">TimeoutError</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3551</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">User</span> <span class="cm-operator">=</span> <span class="cm-variable-2">User</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3552</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable-2">exports</span>.<span class="cm-property">createAuth0Client</span> <span class="cm-operator">=</span> <span class="cm-variable-2">createAuth0Client</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3553</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">Object</span>.<span class="cm-property">defineProperty</span>(<span class="cm-variable-2">exports</span>, <span class="cm-string">"__esModule"</span>, {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3554</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-property">value</span>: <span class="cm-atom">true</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3555</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  });</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3556</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}));</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3557</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">//# sourceMappingURL=auth0-spa-js.development.js.map</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3558</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -40px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3559</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 35px; width: 1px; border-bottom: 0px solid transparent; top: 73928px;"></div><div class="CodeMirror-gutters" style="height: 73963px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 40px;"></div></div></div></div><div class="CodeMirrorPanel_fileSize__7mYzp">155800 bytes</div></div></div><div class="CodeMirrorPanel_container__ynVR2 Repl_panel__7tk5I Repl_panelOutput__ktckl"><div class="CodeMirrorPanel_codeMirror__4Ap9Z"><textarea autocomplete="off" placeholder="Terser output will be shown here" style="display: none;">var e,t;(e=self.document)&amp;&amp;!e.getElementById("livereloadscript")&amp;&amp;((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t)),function(e,t){"object"==typeof exports&amp;&amp;"undefined"!=typeof module?t(exports,require("core-js/es/string/starts-with"),require("core-js/es/symbol"),require("core-js/es/array/from"),require("core-js/es/typed-array/slice"),require("core-js/es/array/includes"),require("core-js/es/string/includes"),require("core-js/es/set"),require("fast-text-encoding"),require("abortcontroller-polyfill/dist/abortcontroller-polyfill-only")):"function"==typeof define&amp;&amp;define.amd?define(["exports","core-js/es/string/starts-with","core-js/es/symbol","core-js/es/array/from","core-js/es/typed-array/slice","core-js/es/array/includes","core-js/es/string/includes","core-js/es/set","fast-text-encoding","abortcontroller-polyfill/dist/abortcontroller-polyfill-only"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).auth0={})}(this,function(e){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&amp;&amp;function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&amp;&amp;(e[n]=t[n])},t(e,n)};function n(e,n){if("function"!=typeof n&amp;&amp;null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n&lt;o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&amp;&amp;(e[r]=t[r]);return e},o.apply(this,arguments)};function r(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&amp;&amp;t.indexOf(o)&lt;0&amp;&amp;(n[o]=e[o]);if(null!=e&amp;&amp;"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r&lt;o.length;r++)t.indexOf(o[r])&lt;0&amp;&amp;Object.prototype.propertyIsEnumerable.call(e,o[r])&amp;&amp;(n[o[r]]=e[o[r]])}return n}function i(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})}function s(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&amp;r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&amp;&amp;(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&amp;&amp;(r=2&amp;i[0]?o.return:i[0]?o.throw||((r=o.return)&amp;&amp;r.call(o),0):o.next)&amp;&amp;!(r=r.call(o,i[1])).done)return r;switch(o=0,r&amp;&amp;(i=[2&amp;i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length&gt;0&amp;&amp;r[r.length-1])||6!==i[0]&amp;&amp;2!==i[0])){s=0;continue}if(3===i[0]&amp;&amp;(!r||i[1]&gt;r[0]&amp;&amp;i[1]&lt;r[3])){s.label=i[1];break}if(6===i[0]&amp;&amp;s.label&lt;r[1]){s.label=r[1],r=i;break}if(r&amp;&amp;s.label&lt;r[2]){s.label=r[2],s.ops.push(i);break}r[2]&amp;&amp;s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&amp;i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function a(e,t){var n="function"==typeof Symbol&amp;&amp;e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- &gt;0)&amp;&amp;!(o=i.next()).done;)s.push(o.value)}catch(e){r={error:e}}finally{try{o&amp;&amp;!o.done&amp;&amp;(n=i.return)&amp;&amp;n.call(i)}finally{if(r)throw r.error}}return s}function c(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r&lt;i;r++)!o&amp;&amp;r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function u(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function l(e){return new this(function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,n){if(n&amp;&amp;("object"==typeof n||"function"==typeof n)){var s=n.then;if("function"==typeof s)return void s.call(n,function(t){i(e,t)},function(n){o[e]={status:"rejected",reason:n},0===--r&amp;&amp;t(o)})}o[e]={status:"fulfilled",value:n},0===--r&amp;&amp;t(o)}for(var s=0;s&lt;o.length;s++)i(s,o[s])})}var d=setTimeout;function h(e){return Boolean(e&amp;&amp;void 0!==e.length)}function f(){}function p(e){if(!(this instanceof p))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],_(e,this)}function v(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,p._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void y(t.promise,e)}m(t.promise,o)}else(1===e._state?m:y)(t.promise,e._value)})):e._deferreds.push(t)}function m(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&amp;&amp;("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof p)return e._state=3,e._value=t,void w(e);if("function"==typeof n)return void _((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,w(e)}catch(t){y(e,t)}var o,r}function y(e,t){e._state=2,e._value=t,w(e)}function w(e){2===e._state&amp;&amp;0===e._deferreds.length&amp;&amp;p._immediateFn(function(){e._handled||p._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t&lt;n;t++)v(e,e._deferreds[t]);e._deferreds=null}function g(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function _(e,t){var n=!1;try{e(function(e){n||(n=!0,m(t,e))},function(e){n||(n=!0,y(t,e))})}catch(e){if(n)return;n=!0,y(t,e)}}p.prototype.catch=function(e){return this.then(null,e)},p.prototype.then=function(e,t){var n=new this.constructor(f);return v(this,new g(e,t,n)),n},p.prototype.finally=u,p.all=function(e){return new p(function(t,n){if(!h(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,s){try{if(s&amp;&amp;("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(e,t)},n)}o[e]=s,0===--r&amp;&amp;t(o)}catch(e){n(e)}}for(var s=0;s&lt;o.length;s++)i(s,o[s])})},p.allSettled=l,p.resolve=function(e){return e&amp;&amp;"object"==typeof e&amp;&amp;e.constructor===p?e:new p(function(t){t(e)})},p.reject=function(e){return new p(function(t,n){n(e)})},p.race=function(e){return new p(function(t,n){if(!h(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,r=e.length;o&lt;r;o++)p.resolve(e[o]).then(t,n)})},p._immediateFn="function"==typeof setImmediate&amp;&amp;function(e){setImmediate(e)}||function(e){d(e,0)},p._unhandledRejectionFn=function(e){"undefined"!=typeof console&amp;&amp;console&amp;&amp;console.warn("Possible Unhandled Promise Rejection:",e)};var b=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"function"!=typeof b.Promise?b.Promise=p:(b.Promise.prototype.finally||(b.Promise.prototype.finally=u),b.Promise.allSettled||(b.Promise.allSettled=l));var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function I(e){return e&amp;&amp;e.__esModule&amp;&amp;Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function S(e,t){return e(t={exports:{}},t.exports),t.exports}var T=S(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var o=e.locked.get(t);void 0===o?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&amp;&amp;(o.unshift(n),e.locked.set(t,o))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise(function(n,o){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())})},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&amp;&amp;0!==n.length){var o=n.pop();e.locked.set(t,n),void 0!==o&amp;&amp;setTimeout(o,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&amp;&amp;(e.instance=new e),e.instance},e}();t.default=function(){return n.getInstance()}});I(T);var O=S(function(e,t){var n=k&amp;&amp;k.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}c((o=o.apply(e,t||[])).next())})},o=k&amp;&amp;k.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&amp;r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&amp;&amp;(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&amp;&amp;(r=2&amp;i[0]?o.return:i[0]?o.throw||((r=o.return)&amp;&amp;r.call(o),0):o.next)&amp;&amp;!(r=r.call(o,i[1])).done)return r;switch(o=0,r&amp;&amp;(i=[2&amp;i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length&gt;0&amp;&amp;r[r.length-1])||6!==i[0]&amp;&amp;2!==i[0])){s=0;continue}if(3===i[0]&amp;&amp;(!r||i[1]&gt;r[0]&amp;&amp;i[1]&lt;r[3])){s.label=i[1];break}if(6===i[0]&amp;&amp;s.label&lt;r[1]){s.label=r[1],r=i;break}if(r&amp;&amp;s.label&lt;r[2]){s.label=r[2],s.ops.push(i);break}r[2]&amp;&amp;s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&amp;i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var r="browser-tabs-lock-key";function i(e){return new Promise(function(t){return setTimeout(t,e)})}function s(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",o=0;o&lt;e;o++){n+=t[Math.floor(61*Math.random())]}return n}var a=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+s(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&amp;&amp;(e.waiters=[])}return e.prototype.acquireLock=function(t,a){return void 0===a&amp;&amp;(a=5e3),n(this,void 0,void 0,function(){var n,c,u,l,d,h;return o(this,function(o){switch(o.label){case 0:n=Date.now()+s(4),c=Date.now()+a,u=r+"-"+t,l=window.localStorage,o.label=1;case 1:return Date.now()&lt;c?[4,i(30)]:[3,8];case 2:return o.sent(),null!==l.getItem(u)?[3,5]:(d=this.id+"-"+t+"-"+n,[4,i(Math.floor(25*Math.random()))]);case 3:return o.sent(),l.setItem(u,JSON.stringify({id:this.id,iat:n,timeoutKey:d,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,i(30)];case 4:return o.sent(),null!==(h=l.getItem(u))&amp;&amp;(h=JSON.parse(h)).id===this.id&amp;&amp;h.iat===n?(this.acquiredIatSet.add(n),this.refreshLockWhileAcquired(u,n),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(c)];case 6:o.sent(),o.label=7;case 7:return n=Date.now()+s(4),[3,1];case 8:return[2,!1]}})})},e.prototype.refreshLockWhileAcquired=function(e,t){return n(this,void 0,void 0,function(){var r=this;return o(this,function(i){return setTimeout(function(){return n(r,void 0,void 0,function(){var n,r;return o(this,function(o){switch(o.label){case 0:return[4,T.default().lock(t)];case 1:return o.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(r=n.getItem(e))?(T.default().unlock(t),[2]):((r=JSON.parse(r)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(r)),T.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(T.default().unlock(t),[2])}})})},1e3),[2]})})},e.prototype.waitForSomethingToChange=function(t){return n(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,new Promise(function(n){var o=!1,r=Date.now(),i=!1;function s(){if(i||(window.removeEventListener("storage",s),e.removeFromWaiting(s),clearTimeout(a),i=!0),!o){o=!0;var t=50-(Date.now()-r);t&gt;0?setTimeout(n,t):n()}}window.addEventListener("storage",s),e.addToWaiting(s);var a=setTimeout(s,Math.max(0,t-Date.now()))})];case 1:return n.sent(),[2]}})})},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&amp;&amp;e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&amp;&amp;(e.waiters=e.waiters.filter(function(e){return e!==t}))},e.notifyWaiters=function(){void 0!==e.waiters&amp;&amp;e.waiters.slice().forEach(function(e){return e()})},e.prototype.releaseLock=function(e){return n(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}})})},e.prototype.releaseLock__private__=function(t){return n(this,void 0,void 0,function(){var n,i,s;return o(this,function(o){switch(o.label){case 0:return n=window.localStorage,i=r+"-"+t,null===(s=n.getItem(i))?[2]:(s=JSON.parse(s)).id!==this.id?[3,2]:[4,T.default().lock(s.iat)];case 1:o.sent(),this.acquiredIatSet.delete(s.iat),n.removeItem(i),T.default().unlock(s.iat),e.notifyWaiters(),o.label=2;case 2:return[2]}})})},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,o=Object.keys(n),i=!1,s=0;s&lt;o.length;s++){var a=o[s];if(a.includes(r)){var c=n.getItem(a);null!==c&amp;&amp;(void 0===(c=JSON.parse(c)).timeRefreshed&amp;&amp;c.timeAcquired&lt;t||void 0!==c.timeRefreshed&amp;&amp;c.timeRefreshed&lt;t)&amp;&amp;(n.removeItem(a),i=!0)}}i&amp;&amp;e.notifyWaiters()},e.waiters=void 0,e}();t.default=a}),E=I(O),C={timeoutInSeconds:60},x="memory",j={name:"auth0-spa-js",version:"1.22.2"},P=function(){return Date.now()},D=function(e){function t(n,o){var r=e.call(this,o)||this;return r.error=n,r.error_description=o,Object.setPrototypeOf(r,t.prototype),r}return n(t,e),t.fromPayload=function(e){return new t(e.error,e.error_description)},t}(Error),M=function(e){function t(n,o,r,i){void 0===i&amp;&amp;(i=null);var s=e.call(this,n,o)||this;return s.state=r,s.appState=i,Object.setPrototypeOf(s,t.prototype),s}return n(t,e),t}(D),A=function(e){function t(){var n=e.call(this,"timeout","Timeout")||this;return Object.setPrototypeOf(n,t.prototype),n}return n(t,e),t}(D),R=function(e){function t(n){var o=e.call(this)||this;return o.popup=n,Object.setPrototypeOf(o,t.prototype),o}return n(t,e),t}(A),U=function(e){function t(n){var o=e.call(this,"cancelled","Popup closed")||this;return o.popup=n,Object.setPrototypeOf(o,t.prototype),o}return n(t,e),t}(D),F=function(e){function t(n,o,r){var i=e.call(this,n,o)||this;return i.mfa_token=r,Object.setPrototypeOf(i,t.prototype),i}return n(t,e),t}(D),L=function(e){function t(n,o){var r=e.call(this,"missing_refresh_token","Missing Refresh Token (audience: '".concat(z(n,["default"]),"', scope: '").concat(z(o),"')"))||this;return r.audience=n,r.scope=o,Object.setPrototypeOf(r,t.prototype),r}return n(t,e),t}(D);function z(e,t){return void 0===t&amp;&amp;(t=[]),e&amp;&amp;!t.includes(e)?e:""}var N=function(e){return new Promise(function(t,n){var o,r=setInterval(function(){e.popup&amp;&amp;e.popup.closed&amp;&amp;(clearInterval(r),clearTimeout(i),window.removeEventListener("message",o,!1),n(new U(e.popup)))},1e3),i=setTimeout(function(){clearInterval(r),n(new R(e.popup)),window.removeEventListener("message",o,!1)},1e3*(e.timeoutInSeconds||60));o=function(s){if(s.data&amp;&amp;"authorization_response"===s.data.type){if(clearTimeout(i),clearInterval(r),window.removeEventListener("message",o,!1),e.popup.close(),s.data.response.error)return n(D.fromPayload(s.data.response));t(s.data.response)}},window.addEventListener("message",o)})},q=function(){return window.crypto},K=function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",t="";return Array.from(q().getRandomValues(new Uint8Array(43))).forEach(function(n){return t+=e[n%66]}),t},W=function(e){return btoa(e)},J=function(e){var t=e.clientId,n=r(e,["clientId"]);return new URLSearchParams(function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]}).reduce(function(t,n){var r;return o(o({},t),((r={})[n]=e[n],r))},{})}(o({client_id:t},n))).toString()},H=function(e){return i(void 0,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,q().subtle.digest({name:"SHA-256"},(new TextEncoder).encode(e))];case 1:return[2,t.sent()]}})})},B=function(e){return function(e){return decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}(e.replace(/_/g,"/").replace(/-/g,"+"))},G=function(e){var t=new Uint8Array(e);return function(e){var t={"+":"-","/":"_","=":""};return e.replace(/[+/=]/g,function(e){return t[e]})}(window.btoa(String.fromCharCode.apply(String,c([],a(Array.from(t)),!1))))};var V=function(e,t){return i(void 0,void 0,void 0,function(){var n,o;return s(this,function(r){switch(r.label){case 0:return[4,(i=e,s=t,s=s||{},new Promise(function(e,t){var n=new XMLHttpRequest,o=[],r=[],a={},c=function(){return{ok:2==(n.status/100|0),statusText:n.statusText,status:n.status,url:n.responseURL,text:function(){return Promise.resolve(n.responseText)},json:function(){return Promise.resolve(n.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([n.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return r},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var u in n.open(s.method||"get",i,!0),n.onload=function(){n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),r.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),e(c())},n.onerror=t,n.withCredentials="include"==s.credentials,s.headers)n.setRequestHeader(u,s.headers[u]);n.send(s.body||null)}))];case 1:return n=r.sent(),o={ok:n.ok},[4,n.json()];case 2:return[2,(o.json=r.sent(),o)]}var i,s})})},X=function(e,t,n){return i(void 0,void 0,void 0,function(){var o,r;return s(this,function(i){return o=new AbortController,t.signal=o.signal,[2,Promise.race([V(e,t),new Promise(function(e,t){r=setTimeout(function(){o.abort(),t(new Error("Timeout when executing 'fetch'"))},n)})]).finally(function(){clearTimeout(r)})]})})},Q=function(e,t,n,o,r,a,c){return i(void 0,void 0,void 0,function(){return s(this,function(i){return[2,(s={auth:{audience:t,scope:n},timeout:r,fetchUrl:e,fetchOptions:o,useFormData:c},u=a,new Promise(function(e,t){var n=new MessageChannel;n.port1.onmessage=function(n){n.data.error?t(new Error(n.data.error)):e(n.data)},u.postMessage(s,[n.port2])}))];var s,u})})},$=function(e,t,n,o,r,a,c){return void 0===c&amp;&amp;(c=1e4),i(void 0,void 0,void 0,function(){return s(this,function(i){return r?[2,Q(e,t,n,o,c,r,a)]:[2,X(e,o,c)]})})};function Y(e,t,n,o,a,c,u){return i(this,void 0,void 0,function(){var i,l,d,h,f,p,v,m,y;return s(this,function(s){switch(s.label){case 0:i=null,d=0,s.label=1;case 1:if(!(d&lt;3))return[3,6];s.label=2;case 2:return s.trys.push([2,4,,5]),[4,$(e,n,o,a,c,u,t)];case 3:return l=s.sent(),i=null,[3,6];case 4:return h=s.sent(),i=h,[3,5];case 5:return d++,[3,1];case 6:if(i)throw i.message=i.message||"Failed to fetch",i;if(f=l.json,p=f.error,v=f.error_description,m=r(f,["error","error_description"]),!l.ok){if(y=v||"HTTP error. Unable to fetch ".concat(e),"mfa_required"===p)throw new F(p,y,m.mfa_token);throw new D(p||"request_error",y)}return[2,m]}})})}function Z(e,t){var n=e.baseUrl,o=e.timeout,a=e.audience,c=e.scope,u=e.auth0Client,l=e.useFormData,d=r(e,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);return i(this,void 0,void 0,function(){var e;return s(this,function(r){switch(r.label){case 0:return e=l?J(d):JSON.stringify(d),[4,Y("".concat(n,"/oauth/token"),o,a||"default",c,{method:"POST",body:e,headers:{"Content-Type":l?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(u||j))}},t,l)];case 1:return[2,r.sent()]}})})}var ee=function(){for(var e,t=[],n=0;n&lt;arguments.length;n++)t[n]=arguments[n];return(e=t.join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ")},te="@@auth0spajs@@",ne=function(){function e(e,t){void 0===t&amp;&amp;(t=te),this.prefix=t,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}return e.prototype.toKey=function(){return[this.prefix,this.clientId,this.audience,this.scope].filter(Boolean).join("::")},e.fromKey=function(t){var n=a(t.split("::"),4),o=n[0],r=n[1],i=n[2];return new e({clientId:r,scope:n[3],audience:i},o)},e.fromCacheEntry=function(t){return new e({scope:t.scope,audience:t.audience,clientId:t.client_id})},e}(),oe=function(){function e(){}return e.prototype.set=function(e,t){localStorage.setItem(e,JSON.stringify(t))},e.prototype.get=function(e){var t=window.localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){return}},e.prototype.remove=function(e){localStorage.removeItem(e)},e.prototype.allKeys=function(){return Object.keys(window.localStorage).filter(function(e){return e.startsWith(te)})},e}(),re=function(){var e;this.enclosedCache=(e={},{set:function(t,n){e[t]=n},get:function(t){var n=e[t];if(n)return n},remove:function(t){delete e[t]},allKeys:function(){return Object.keys(e)}})},ie=function(){function e(e,t,n){this.cache=e,this.keyManifest=t,this.nowProvider=n,this.nowProvider=this.nowProvider||P}return e.prototype.get=function(e,t){var n;return void 0===t&amp;&amp;(t=0),i(this,void 0,void 0,function(){var o,r,i,a,c;return s(this,function(s){switch(s.label){case 0:return[4,this.cache.get(e.toKey())];case 1:return(o=s.sent())?[3,4]:[4,this.getCacheKeys()];case 2:return(r=s.sent())?(i=this.matchExistingCacheKey(e,r))?[4,this.cache.get(i)]:[3,4]:[2];case 3:o=s.sent(),s.label=4;case 4:return o?[4,this.nowProvider()]:[2];case 5:return a=s.sent(),c=Math.floor(a/1e3),o.expiresAt-t&lt;c?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},[4,this.cache.set(e.toKey(),o)]):[3,7]:[3,10];case 6:return s.sent(),[2,o.body];case 7:return[4,this.cache.remove(e.toKey())];case 8:return s.sent(),[4,null===(n=this.keyManifest)||void 0===n?void 0:n.remove(e.toKey())];case 9:return s.sent(),[2];case 10:return[2,o.body]}})})},e.prototype.set=function(e){var t;return i(this,void 0,void 0,function(){var n,o;return s(this,function(r){switch(r.label){case 0:return n=new ne({clientId:e.client_id,scope:e.scope,audience:e.audience}),[4,this.wrapCacheEntry(e)];case 1:return o=r.sent(),[4,this.cache.set(n.toKey(),o)];case 2:return r.sent(),[4,null===(t=this.keyManifest)||void 0===t?void 0:t.add(n.toKey())];case 3:return r.sent(),[2]}})})},e.prototype.clear=function(e){var t;return i(this,void 0,void 0,function(){var n,o=this;return s(this,function(r){switch(r.label){case 0:return[4,this.getCacheKeys()];case 1:return(n=r.sent())?[4,n.filter(function(t){return!e||t.includes(e)}).reduce(function(e,t){return i(o,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return[4,e];case 1:return n.sent(),[4,this.cache.remove(t)];case 2:return n.sent(),[2]}})})},Promise.resolve())]:[2];case 2:return r.sent(),[4,null===(t=this.keyManifest)||void 0===t?void 0:t.clear()];case 3:return r.sent(),[2]}})})},e.prototype.clearSync=function(e){var t=this,n=this.cache.allKeys();n&amp;&amp;n.filter(function(t){return!e||t.includes(e)}).forEach(function(e){t.cache.remove(e)})},e.prototype.wrapCacheEntry=function(e){return i(this,void 0,void 0,function(){var t,n;return s(this,function(o){switch(o.label){case 0:return[4,this.nowProvider()];case 1:return t=o.sent(),n=Math.floor(t/1e3)+e.expires_in,[2,{body:e,expiresAt:n}]}})})},e.prototype.getCacheKeys=function(){var e;return i(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return this.keyManifest?[4,this.keyManifest.get()]:[3,2];case 1:return t=null===(e=n.sent())||void 0===e?void 0:e.keys,[3,4];case 2:return[4,this.cache.allKeys()];case 3:t=n.sent(),n.label=4;case 4:return[2,t]}})})},e.prototype.matchExistingCacheKey=function(e,t){return t.filter(function(t){var n,o=ne.fromKey(t),r=new Set(o.scope&amp;&amp;o.scope.split(" ")),i=(null===(n=e.scope)||void 0===n?void 0:n.split(" "))||[],s=o.scope&amp;&amp;i.reduce(function(e,t){return e&amp;&amp;r.has(t)},!0);return o.prefix===te&amp;&amp;o.clientId===e.clientId&amp;&amp;o.audience===e.audience&amp;&amp;s})[0]},e}(),se=function(){function e(e,t){this.storage=e,this.clientId=t,this.storageKey="".concat("a0.spajs.txs",".").concat(this.clientId),this.transaction=this.storage.get(this.storageKey)}return e.prototype.create=function(e){this.transaction=e,this.storage.save(this.storageKey,e,{daysUntilExpire:1})},e.prototype.get=function(){return this.transaction},e.prototype.remove=function(){delete this.transaction,this.storage.remove(this.storageKey)},e}(),ae=function(e){return"number"==typeof e},ce=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],ue=function(e){if(!e.id_token)throw new Error("ID token is required but missing");var t=function(e){var t=e.split("."),n=a(t,3),o=n[0],r=n[1],i=n[2];if(3!==t.length||!o||!r||!i)throw new Error("ID token could not be decoded");var s=JSON.parse(B(r)),c={__raw:e},u={};return Object.keys(s).forEach(function(e){c[e]=s[e],ce.includes(e)||(u[e]=s[e])}),{encoded:{header:o,payload:r,signature:i},header:JSON.parse(B(o)),claims:c,user:u}}(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error('Issuer (iss) claim mismatch in the ID token; expected "'.concat(e.iss,'", found "').concat(t.claims.iss,'"'));if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if("RS256"!==t.header.alg)throw new Error('Signature algorithm of "'.concat(t.header.alg,'" is not supported. Expected the ID token to be signed with "RS256".'));if(!t.claims.aud||"string"!=typeof t.claims.aud&amp;&amp;!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(e.aud,'" but was not one of "').concat(t.claims.aud.join(", "),'"'));if(t.claims.aud.length&gt;1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'.concat(e.aud,'", found "').concat(t.claims.azp,'"'))}}else if(t.claims.aud!==e.aud)throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(e.aud,'" but found "').concat(t.claims.aud,'"'));if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'.concat(e.nonce,'", found "').concat(t.claims.nonce,'"'))}if(e.max_age&amp;&amp;!ae(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(!ae(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!ae(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");var n=e.leeway||60,o=new Date(e.now||Date.now()),r=new Date(0),i=new Date(0),s=new Date(0);if(s.setUTCSeconds(parseInt(t.claims.auth_time)+e.max_age+n),r.setUTCSeconds(t.claims.exp+n),i.setUTCSeconds(t.claims.nbf-n),o&gt;r)throw new Error("Expiration Time (exp) claim error in the ID token; current time (".concat(o,") is after expiration time (").concat(r,")"));if(ae(t.claims.nbf)&amp;&amp;o&lt;i)throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (".concat(o,") is before ").concat(i));if(ae(t.claims.auth_time)&amp;&amp;o&gt;s)throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (".concat(o,") is after last auth at ").concat(s));if(e.organizationId){if(!t.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(e.organizationId!==t.claims.org_id)throw new Error('Organization ID (org_id) claim mismatch in the ID token; expected "'.concat(e.organizationId,'", found "').concat(t.claims.org_id,'"'))}return t},le=S(function(e,t){var n=k&amp;&amp;k.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n&lt;o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&amp;&amp;(e[r]=t[r]);return e},n.apply(this,arguments)};function o(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function r(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return o("Expires",e.expires?e.expires.toUTCString():"")+o("Domain",e.domain)+o("Path",e.path)+o("Secure",e.secure)+o("SameSite",e.sameSite)}(n)}function i(e){for(var t={},n=e?e.split("; "):[],o=/(%[\dA-F]{2})+/gi,r=0;r&lt;n.length;r++){var i=n[r].split("="),s=i.slice(1).join("=");'"'===s.charAt(0)&amp;&amp;(s=s.slice(1,-1));try{t[i[0].replace(o,decodeURIComponent)]=s.replace(o,decodeURIComponent)}catch(e){}}return t}function s(){return i(document.cookie)}function a(e,t,o){document.cookie=r(e,t,n({path:"/"},o))}t.__esModule=!0,t.encode=r,t.parse=i,t.getAll=s,t.get=function(e){return s()[e]},t.set=a,t.remove=function(e,t){a(e,"",n(n({},t),{expires:-1}))}});I(le),le.encode,le.parse,le.getAll;var de=le.get,he=le.set,fe=le.remove,pe={get:function(e){var t=de(e);if(void 0!==t)return JSON.parse(t)},save:function(e,t,n){var o={};"https:"===window.location.protocol&amp;&amp;(o={secure:!0,sameSite:"none"}),(null==n?void 0:n.daysUntilExpire)&amp;&amp;(o.expires=n.daysUntilExpire),(null==n?void 0:n.cookieDomain)&amp;&amp;(o.domain=n.cookieDomain),he(e,JSON.stringify(t),o)},remove:function(e){fe(e)}},ve="_legacy_",me={get:function(e){var t=pe.get(e);return t||pe.get("".concat(ve).concat(e))},save:function(e,t,n){var o={};"https:"===window.location.protocol&amp;&amp;(o={secure:!0}),(null==n?void 0:n.daysUntilExpire)&amp;&amp;(o.expires=n.daysUntilExpire),he("".concat(ve).concat(e),JSON.stringify(t),o),pe.save(e,t,n)},remove:function(e){pe.remove(e),pe.remove("".concat(ve).concat(e))}},ye={get:function(e){if("undefined"!=typeof sessionStorage){var t=sessionStorage.getItem(e);if(void 0!==t)return JSON.parse(t)}},save:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},remove:function(e){sessionStorage.removeItem(e)}};var we,ge,_e,be=(we=function(){!function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&amp;&amp;function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&amp;&amp;(e[n]=t[n])},e(t,n)};function t(t,n){if("function"!=typeof n&amp;&amp;null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}var n=function(){return n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n&lt;o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&amp;&amp;(e[r]=t[r]);return e},n.apply(this,arguments)};function o(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})}function r(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&amp;r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&amp;&amp;(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&amp;&amp;(r=2&amp;i[0]?o.return:i[0]?o.throw||((r=o.return)&amp;&amp;r.call(o),0):o.next)&amp;&amp;!(r=r.call(o,i[1])).done)return r;switch(o=0,r&amp;&amp;(i=[2&amp;i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length&gt;0&amp;&amp;r[r.length-1])||6!==i[0]&amp;&amp;2!==i[0])){s=0;continue}if(3===i[0]&amp;&amp;(!r||i[1]&gt;r[0]&amp;&amp;i[1]&lt;r[3])){s.label=i[1];break}if(6===i[0]&amp;&amp;s.label&lt;r[1]){s.label=r[1],r=i;break}if(r&amp;&amp;s.label&lt;r[2]){s.label=r[2],s.ops.push(i);break}r[2]&amp;&amp;s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&amp;i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var i=function(e){function n(t,o){var r=e.call(this,o)||this;return r.error=t,r.error_description=o,Object.setPrototypeOf(r,n.prototype),r}return t(n,e),n.fromPayload=function(e){return new n(e.error,e.error_description)},n}(Error);!function(e){function n(t,o,r,i){void 0===i&amp;&amp;(i=null);var s=e.call(this,t,o)||this;return s.state=r,s.appState=i,Object.setPrototypeOf(s,n.prototype),s}t(n,e)}(i),function(e){function n(t){var o=e.call(this)||this;return o.popup=t,Object.setPrototypeOf(o,n.prototype),o}t(n,e)}(function(e){function n(){var t=e.call(this,"timeout","Timeout")||this;return Object.setPrototypeOf(t,n.prototype),t}return t(n,e),n}(i)),function(e){function n(t){var o=e.call(this,"cancelled","Popup closed")||this;return o.popup=t,Object.setPrototypeOf(o,n.prototype),o}t(n,e)}(i),function(e){function n(t,o,r){var i=e.call(this,t,o)||this;return i.mfa_token=r,Object.setPrototypeOf(i,n.prototype),i}t(n,e)}(i);var s=function(e){function n(t,o){var r=e.call(this,"missing_refresh_token","Missing Refresh Token (audience: '".concat(a(t,["default"]),"', scope: '").concat(a(o),"')"))||this;return r.audience=t,r.scope=o,Object.setPrototypeOf(r,n.prototype),r}return t(n,e),n}(i);function a(e,t){return void 0===t&amp;&amp;(t=[]),e&amp;&amp;!t.includes(e)?e:""}var c=function(e){var t=e.clientId,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&amp;&amp;t.indexOf(o)&lt;0&amp;&amp;(n[o]=e[o]);if(null!=e&amp;&amp;"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r&lt;o.length;r++)t.indexOf(o[r])&lt;0&amp;&amp;Object.prototype.propertyIsEnumerable.call(e,o[r])&amp;&amp;(n[o[r]]=e[o[r]])}return n}(e,["clientId"]);return new URLSearchParams(function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]}).reduce(function(t,o){var r;return n(n({},t),((r={})[o]=e[o],r))},{})}(n({client_id:t},o))).toString()},u={},l=function(e,t){return"".concat(e,"|").concat(t)};addEventListener("message",function(e){var t=e.data,i=t.timeout,a=t.auth,d=t.fetchUrl,h=t.fetchOptions,f=t.useFormData,p=function(e,t){var n="function"==typeof Symbol&amp;&amp;e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- &gt;0)&amp;&amp;!(o=i.next()).done;)s.push(o.value)}catch(e){r={error:e}}finally{try{o&amp;&amp;!o.done&amp;&amp;(n=i.return)&amp;&amp;n.call(i)}finally{if(r)throw r.error}}return s}(e.ports,1),v=p[0];return o(void 0,void 0,void 0,function(){var e,t,o,p,m,y,w,g,_,b;return r(this,function(r){switch(r.label){case 0:o=(t=a||{}).audience,p=t.scope,r.label=1;case 1:if(r.trys.push([1,7,,8]),!(m=f?(I=h.body,S=new URLSearchParams(I),T={},S.forEach(function(e,t){T[t]=e}),T):JSON.parse(h.body)).refresh_token&amp;&amp;"refresh_token"===m.grant_type){if(y=function(e,t){return u[l(e,t)]}(o,p),!y)throw new s(o,p);h.body=f?c(n(n({},m),{refresh_token:y})):JSON.stringify(n(n({},m),{refresh_token:y}))}w=void 0,"function"==typeof AbortController&amp;&amp;(w=new AbortController,h.signal=w.signal),g=void 0,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,Promise.race([(k=i,new Promise(function(e){return setTimeout(e,k)})),fetch(d,n({},h))])];case 3:return g=r.sent(),[3,5];case 4:return _=r.sent(),v.postMessage({error:_.message}),[2];case 5:return g?[4,g.json()]:(w&amp;&amp;w.abort(),v.postMessage({error:"Timeout when executing 'fetch'"}),[2]);case 6:return(e=r.sent()).refresh_token?(function(e,t,n){u[l(t,n)]=e}(e.refresh_token,o,p),delete e.refresh_token):function(e,t){delete u[l(e,t)]}(o,p),v.postMessage({ok:g.ok,json:e}),[3,8];case 7:return b=r.sent(),v.postMessage({ok:!1,json:{error_description:b.message}}),[3,8];case 8:return[2]}var k,I,S,T})})})}()},ge=null,function(e){return _e=_e||function(e,t){var n=function(e,t){var n=void 0===t?null:t,o=e.toString().split("\n");o.pop(),o.shift();for(var r=o[0].search(/\S/),i=/(['"])__worker_loader_strict__(['"])/g,s=0,a=o.length;s&lt;a;++s)o[s]=o[s].substring(r).replace(i,"$1use strict$2")+"\n";return n&amp;&amp;o.push("//# sourceMappingURL="+n+"\n"),o}(e,t),o=new Blob(n,{type:"application/javascript"});return URL.createObjectURL(o)}(we,ge),new Worker(_e,e)}),ke={},Ie=function(){function e(e,t){this.cache=e,this.clientId=t,this.manifestKey=this.createManifestKeyFrom(this.clientId)}return e.prototype.add=function(e){var t;return i(this,void 0,void 0,function(){var n,o;return s(this,function(r){switch(r.label){case 0:return o=Set.bind,[4,this.cache.get(this.manifestKey)];case 1:return(n=new(o.apply(Set,[void 0,(null===(t=r.sent())||void 0===t?void 0:t.keys)||[]]))).add(e),[4,this.cache.set(this.manifestKey,{keys:c([],a(n),!1)})];case 2:return r.sent(),[2]}})})},e.prototype.remove=function(e){return i(this,void 0,void 0,function(){var t,n;return s(this,function(o){switch(o.label){case 0:return[4,this.cache.get(this.manifestKey)];case 1:return(t=o.sent())?((n=new Set(t.keys)).delete(e),n.size&gt;0?[4,this.cache.set(this.manifestKey,{keys:c([],a(n),!1)})]:[3,3]):[3,5];case 2:case 4:return[2,o.sent()];case 3:return[4,this.cache.remove(this.manifestKey)];case 5:return[2]}})})},e.prototype.get=function(){return this.cache.get(this.manifestKey)},e.prototype.clear=function(){return this.cache.remove(this.manifestKey)},e.prototype.createManifestKeyFrom=function(e){return"".concat(te,"::").concat(e)},e}(),Se=new E,Te="auth0.lock.getTokenSilently",Oe="auth0.is.authenticated",Ee={memory:function(){return(new re).enclosedCache},localstorage:function(){return new oe}},Ce=function(e){return Ee[e]},xe=function(){function e(e){var t,n,i,s;if(this.defaultOptions={useRefreshTokensFallback:!1,useFormData:!0},this.options=o(o({},this.defaultOptions),e),"undefined"!=typeof window&amp;&amp;function(){if(!q())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(void 0===q().subtle)throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ")}(),e.cache&amp;&amp;e.cacheLocation&amp;&amp;console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(this.cacheLocation=e.cacheLocation||x,!Ce(this.cacheLocation))throw new Error('Invalid cache location "'.concat(this.cacheLocation,'"'));i=Ce(this.cacheLocation)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=!1===e.legacySameSiteCookie?pe:me,this.orgHintCookieName=(s=this.options.clientId,"auth0.".concat(s,".organization_hint")),this.isAuthenticatedCookieName=function(e){return"auth0.".concat(e,".is.authenticated")}(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;var a,c=e.useCookiesForTransactions?this.cookieStorage:ye;this.scope=this.options.scope,this.transactionManager=new se(c,this.options.clientId),this.nowProvider=this.options.nowProvider||P,this.cacheManager=new ie(i,i.allKeys?null:new Ie(i,this.options.clientId),this.nowProvider),this.domainUrl=(a=this.options.domain,/^https?:\/\//.test(a)?a:"https://".concat(a)),this.tokenIssuer=function(e,t){return e?e.startsWith("https://")?e:"https://".concat(e,"/"):"".concat(t,"/")}(this.options.issuer,this.domainUrl),this.defaultScope=ee("openid",void 0!==(null===(n=null===(t=this.options)||void 0===t?void 0:t.advancedOptions)||void 0===n?void 0:n.defaultScope)?this.options.advancedOptions.defaultScope:"openid profile email"),this.options.useRefreshTokens&amp;&amp;(this.scope=ee(this.scope,"offline_access")),"undefined"!=typeof window&amp;&amp;window.Worker&amp;&amp;this.options.useRefreshTokens&amp;&amp;this.cacheLocation===x&amp;&amp;(this.worker=new be),this.customOptions=function(e){return e.advancedOptions,e.audience,e.auth0Client,e.authorizeTimeoutInSeconds,e.cacheLocation,e.cache,e.clientId,e.domain,e.issuer,e.leeway,e.max_age,e.nowProvider,e.redirect_uri,e.scope,e.useRefreshTokens,e.useRefreshTokensFallback,e.useCookiesForTransactions,e.useFormData,r(e,["advancedOptions","audience","auth0Client","authorizeTimeoutInSeconds","cacheLocation","cache","clientId","domain","issuer","leeway","max_age","nowProvider","redirect_uri","scope","useRefreshTokens","useRefreshTokensFallback","useCookiesForTransactions","useFormData"])}(e)}return e.prototype._url=function(e){var t=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||j)));return"".concat(this.domainUrl).concat(e,"&amp;auth0Client=").concat(t)},e.prototype._getParams=function(e,t,n,i,s){var a=this.options;a.useRefreshTokens,a.useCookiesForTransactions,a.useFormData,a.auth0Client,a.cacheLocation,a.advancedOptions,a.detailedResponse,a.nowProvider,a.authorizeTimeoutInSeconds,a.legacySameSiteCookie,a.sessionCheckExpiryDays,a.domain,a.leeway,a.httpTimeoutInSeconds,a.useRefreshTokensFallback;var c=r(a,["useRefreshTokens","useCookiesForTransactions","useFormData","auth0Client","cacheLocation","advancedOptions","detailedResponse","nowProvider","authorizeTimeoutInSeconds","legacySameSiteCookie","sessionCheckExpiryDays","domain","leeway","httpTimeoutInSeconds","useRefreshTokensFallback"]);return o(o(o({},c),e),{scope:ee(this.defaultScope,this.scope,e.scope),response_type:"code",response_mode:"query",state:t,nonce:n,redirect_uri:s||this.options.redirect_uri,code_challenge:i,code_challenge_method:"S256"})},e.prototype._authorizeUrl=function(e){return this._url("/authorize?".concat(J(e)))},e.prototype._verifyIdToken=function(e,t,n){return i(this,void 0,void 0,function(){var o;return s(this,function(r){switch(r.label){case 0:return[4,this.nowProvider()];case 1:return o=r.sent(),[2,ue({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:t,organizationId:n,leeway:this.options.leeway,max_age:this._parseNumber(this.options.max_age),now:o})]}})})},e.prototype._parseNumber=function(e){return"string"!=typeof e?e:parseInt(e,10)||void 0},e.prototype._processOrgIdHint=function(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName)},e.prototype.buildAuthorizeUrl=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._prepareAuthorizeUrl(e)];case 1:return[2,t.sent().url]}})})},e.prototype._prepareAuthorizeUrl=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,o,i,a,c,u,l,d,h,f;return s(this,function(s){switch(s.label){case 0:return t=e.redirect_uri,n=e.appState,o=r(e,["redirect_uri","appState"]),i=W(K()),a=W(K()),c=K(),[4,H(c)];case 1:return u=s.sent(),l=G(u),d=e.fragment?"#".concat(e.fragment):"",h=this._getParams(o,i,a,l,t),f=this._authorizeUrl(h),[2,{nonce:a,code_verifier:c,appState:n,scope:h.scope,audience:h.audience||"default",redirect_uri:h.redirect_uri,state:i,url:f+d}]}})})},e.prototype.loginWithPopup=function(e,t){return i(this,void 0,void 0,function(){var n,i,a,c,u,l,d,h,f,p,v,m,y;return s(this,function(s){switch(s.label){case 0:if(e=e||{},!(t=t||{}).popup&amp;&amp;(t.popup=function(e){var t=window.screenX+(window.innerWidth-400)/2,n=window.screenY+(window.innerHeight-600)/2;return window.open(e,"auth0:authorize:popup","left=".concat(t,",top=").concat(n,",width=").concat(400,",height=").concat(600,",resizable,scrollbars=yes,status=1"))}(""),!t.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");return n=r(e,[]),i=W(K()),a=W(K()),c=K(),[4,H(c)];case 1:return u=s.sent(),l=G(u),d=this._getParams(n,i,a,l,this.options.redirect_uri||window.location.origin),h=this._authorizeUrl(o(o({},d),{response_mode:"web_message"})),t.popup.location.href=h,[4,N(o(o({},t),{timeoutInSeconds:t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}))];case 2:if(f=s.sent(),i!==f.state)throw new Error("Invalid state");return[4,Z({audience:d.audience,scope:d.scope,baseUrl:this.domainUrl,client_id:this.options.clientId,code_verifier:c,code:f.code,grant_type:"authorization_code",redirect_uri:d.redirect_uri,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},this.worker)];case 3:return p=s.sent(),v=e.organization||this.options.organization,[4,this._verifyIdToken(p.id_token,a,v)];case 4:return m=s.sent(),y=o(o({},p),{decodedToken:m,scope:d.scope,audience:d.audience||"default",client_id:this.options.clientId}),[4,this._saveEntryInCache(y)];case 5:return s.sent(),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgIdHint(m.claims.org_id),[2]}})})},e.prototype.getUser=function(){return i(this,void 0,void 0,function(){var e,t,n;return s(this,function(o){switch(o.label){case 0:return e=this.options.audience||"default",t=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,audience:e,scope:t}))];case 1:return[2,(n=o.sent())&amp;&amp;n.decodedToken&amp;&amp;n.decodedToken.user]}})})},e.prototype.getIdTokenClaims=function(){return i(this,void 0,void 0,function(){var e,t,n;return s(this,function(o){switch(o.label){case 0:return e=this.options.audience||"default",t=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,audience:e,scope:t}))];case 1:return[2,(n=o.sent())&amp;&amp;n.decodedToken&amp;&amp;n.decodedToken.claims]}})})},e.prototype.loginWithRedirect=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,i,a,c,u;return s(this,function(s){switch(s.label){case 0:return t=e.onRedirect,n=r(e,["onRedirect"]),i=n.organization||this.options.organization,[4,this._prepareAuthorizeUrl(n)];case 1:return a=s.sent(),c=a.url,u=r(a,["url"]),this.transactionManager.create(o(o({},u),i&amp;&amp;{organizationId:i})),t?[4,t(c)]:[3,3];case 2:return s.sent(),[3,4];case 3:window.location.assign(c),s.label=4;case 4:return[2]}})})},e.prototype.handleRedirectCallback=function(e){return void 0===e&amp;&amp;(e=window.location.href),i(this,void 0,void 0,function(){var t,n,r,i,c,u,l,d,h,f;return s(this,function(s){switch(s.label){case 0:if(0===(t=e.split("?").slice(1)).length)throw new Error("There are no query params available for parsing.");if(n=function(e){e.indexOf("#")&gt;-1&amp;&amp;(e=e.substr(0,e.indexOf("#")));var t=e.split("&amp;"),n={};return t.forEach(function(e){var t=a(e.split("="),2),o=t[0],r=t[1];n[o]=decodeURIComponent(r)}),n.expires_in&amp;&amp;(n.expires_in=parseInt(n.expires_in)),n}(t.join("")),r=n.state,i=n.code,c=n.error,u=n.error_description,!(l=this.transactionManager.get()))throw new Error("Invalid state");if(this.transactionManager.remove(),c)throw new M(c,u,r,l.appState);if(!l.code_verifier||l.state&amp;&amp;l.state!==r)throw new Error("Invalid state");return d={audience:l.audience,scope:l.scope,baseUrl:this.domainUrl,client_id:this.options.clientId,code_verifier:l.code_verifier,grant_type:"authorization_code",code:i,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},void 0!==l.redirect_uri&amp;&amp;(d.redirect_uri=l.redirect_uri),[4,Z(d,this.worker)];case 1:return h=s.sent(),[4,this._verifyIdToken(h.id_token,l.nonce,l.organizationId)];case 2:return f=s.sent(),[4,this._saveEntryInCache(o(o(o(o({},h),{decodedToken:f,audience:l.audience,scope:l.scope}),h.scope?{oauthTokenScope:h.scope}:null),{client_id:this.options.clientId}))];case 3:return s.sent(),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgIdHint(f.claims.org_id),[2,{appState:l.appState}]}})})},e.prototype.checkSession=function(e){return i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get(Oe))return[2];this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(Oe)}t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getTokenSilently(e)];case 2:case 3:return t.sent(),[3,4];case 4:return[2]}})})},e.prototype.getTokenSilently=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,i,a=this;return s(this,function(s){return t=o(o({audience:this.options.audience,cacheMode:"on"},e),{scope:ee(this.defaultScope,this.scope,e.scope)}),n=t.cacheMode,i=r(t,["cacheMode"]),[2,(c=function(){return a._getTokenSilently(o({cacheMode:n},i))},u="".concat(this.options.clientId,"::").concat(i.audience,"::").concat(i.scope),l=ke[u],l||(l=c().finally(function(){delete ke[u],l=null}),ke[u]=l),l)];var c,u,l})})},e.prototype._getTokenSilently=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,a,c,u,l,d,h,f;return s(this,function(p){switch(p.label){case 0:return t=e.cacheMode,n=r(e,["cacheMode"]),"off"===t?[3,2]:[4,this._getEntryFromCache({scope:n.scope,audience:n.audience||"default",clientId:this.options.clientId,getDetailedEntry:e.detailedResponse})];case 1:if(a=p.sent())return[2,a];p.label=2;case 2:return"cache-only"===t?[2]:[4,(v=function(){return Se.acquireLock(Te,5e3)},m=10,void 0===m&amp;&amp;(m=3),i(void 0,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:e=0,t.label=1;case 1:return e&lt;m?[4,v()]:[3,4];case 2:if(t.sent())return[2,!0];t.label=3;case 3:return e++,[3,1];case 4:return[2,!1]}})}))];case 3:if(!p.sent())return[3,15];p.label=4;case 4:return p.trys.push([4,,12,14]),"off"===t?[3,6]:[4,this._getEntryFromCache({scope:n.scope,audience:n.audience||"default",clientId:this.options.clientId,getDetailedEntry:e.detailedResponse})];case 5:if(a=p.sent())return[2,a];p.label=6;case 6:return this.options.useRefreshTokens?[4,this._getTokenUsingRefreshToken(n)]:[3,8];case 7:return u=p.sent(),[3,10];case 8:return[4,this._getTokenFromIFrame(n)];case 9:u=p.sent(),p.label=10;case 10:return c=u,[4,this._saveEntryInCache(o({client_id:this.options.clientId},c))];case 11:return p.sent(),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),e.detailedResponse?(l=c.id_token,d=c.access_token,h=c.oauthTokenScope,f=c.expires_in,[2,o(o({id_token:l,access_token:d},h?{scope:h}:null),{expires_in:f})]):[2,c.access_token];case 12:return[4,Se.releaseLock(Te)];case 13:return p.sent(),[7];case 14:return[3,16];case 15:throw new A;case 16:return[2]}var v,m})})},e.prototype.getTokenWithPopup=function(e,t){return void 0===e&amp;&amp;(e={}),void 0===t&amp;&amp;(t={}),i(this,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return e.audience=e.audience||this.options.audience,e.scope=ee(this.defaultScope,this.scope,e.scope),t=o(o({},C),t),[4,this.loginWithPopup(e,t)];case 1:return n.sent(),[4,this.cacheManager.get(new ne({scope:e.scope,audience:e.audience||"default",clientId:this.options.clientId}))];case 2:return[2,n.sent().access_token]}})})},e.prototype.isAuthenticated=function(){return i(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,this.getUser()];case 1:return[2,!!e.sent()]}})})},e.prototype.buildLogoutUrl=function(e){void 0===e&amp;&amp;(e={}),null!==e.clientId?e.clientId=e.clientId||this.options.clientId:delete e.clientId;var t=e.federated,n=r(e,["federated"]),o=t?"&amp;federated":"";return this._url("/v2/logout?".concat(J(n)))+o},e.prototype.logout=function(e){var t=this;void 0===e&amp;&amp;(e={});var n=e.localOnly,o=r(e,["localOnly"]);if(n&amp;&amp;o.federated)throw new Error("It is invalid to set both the `federated` and `localOnly` options to `true`");var i=function(){if(t.cookieStorage.remove(t.orgHintCookieName),t.cookieStorage.remove(t.isAuthenticatedCookieName),!n){var e=t.buildLogoutUrl(o);window.location.assign(e)}};if(this.options.cache)return this.cacheManager.clear().then(function(){return i()});this.cacheManager.clearSync(),i()},e.prototype._getTokenFromIFrame=function(e){return i(this,void 0,void 0,function(){var t,n,i,a,c,u,l,d,h,f,p,v,m,y,w,g,_;return s(this,function(s){switch(s.label){case 0:return t=W(K()),n=W(K()),i=K(),[4,H(i)];case 1:a=s.sent(),c=G(a),e.detailedResponse,u=r(e,["detailedResponse"]),l=this._getParams(u,t,n,c,e.redirect_uri||this.options.redirect_uri||window.location.origin),(d=this.cookieStorage.get(this.orgHintCookieName))&amp;&amp;!l.organization&amp;&amp;(l.organization=d),h=this._authorizeUrl(o(o({},l),{prompt:"none",response_mode:"web_message"})),s.label=2;case 2:if(s.trys.push([2,6,,7]),window.crossOriginIsolated)throw new D("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");return f=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,[4,(b=h,k=this.domainUrl,I=f,void 0===I&amp;&amp;(I=60),new Promise(function(e,t){var n=window.document.createElement("iframe");n.setAttribute("width","0"),n.setAttribute("height","0"),n.style.display="none";var o,r=function(){window.document.body.contains(n)&amp;&amp;(window.document.body.removeChild(n),window.removeEventListener("message",o,!1))},i=setTimeout(function(){t(new A),r()},1e3*I);o=function(n){if(n.origin==k&amp;&amp;n.data&amp;&amp;"authorization_response"===n.data.type){var s=n.source;s&amp;&amp;s.close(),n.data.response.error?t(D.fromPayload(n.data.response)):e(n.data.response),clearTimeout(i),window.removeEventListener("message",o,!1),setTimeout(r,2e3)}},window.addEventListener("message",o,!1),window.document.body.appendChild(n),n.setAttribute("src",b)}))];case 3:if(p=s.sent(),t!==p.state)throw new Error("Invalid state");return v=e.scope,m=e.audience,e.redirect_uri,e.cacheMode,e.timeoutInSeconds,e.detailedResponse,y=r(e,["scope","audience","redirect_uri","cacheMode","timeoutInSeconds","detailedResponse"]),[4,Z(o(o(o({},this.customOptions),y),{scope:v,audience:m,baseUrl:this.domainUrl,client_id:this.options.clientId,code_verifier:i,code:p.code,grant_type:"authorization_code",redirect_uri:l.redirect_uri,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:y.timeout||this.httpTimeoutMs}),this.worker)];case 4:return w=s.sent(),[4,this._verifyIdToken(w.id_token,n)];case 5:return g=s.sent(),this._processOrgIdHint(g.claims.org_id),[2,o(o({},w),{decodedToken:g,scope:l.scope,oauthTokenScope:w.scope,audience:l.audience||"default"})];case 6:throw"login_required"===(_=s.sent()).error&amp;&amp;this.logout({localOnly:!0}),_;case 7:return[2]}var b,k,I})})},e.prototype._getTokenUsingRefreshToken=function(e){return i(this,void 0,void 0,function(){var t,n,i,a,c,u,l,d,h;return s(this,function(s){switch(s.label){case 0:return e.scope=ee(this.defaultScope,this.options.scope,e.scope),[4,this.cacheManager.get(new ne({scope:e.scope,audience:e.audience||"default",clientId:this.options.clientId}))];case 1:return(t=s.sent())&amp;&amp;t.refresh_token||this.worker?[3,4]:this.options.useRefreshTokensFallback?[4,this._getTokenFromIFrame(e)]:[3,3];case 2:return[2,s.sent()];case 3:throw new L(e.audience||"default",e.scope);case 4:n=e.redirect_uri||this.options.redirect_uri||window.location.origin,a=e.scope,c=e.audience,e.cacheMode,e.timeoutInSeconds,e.detailedResponse,u=r(e,["scope","audience","cacheMode","timeoutInSeconds","detailedResponse"]),l="number"==typeof e.timeoutInSeconds?1e3*e.timeoutInSeconds:null,s.label=5;case 5:return s.trys.push([5,7,,10]),[4,Z(o(o(o(o(o({},this.customOptions),u),{audience:c,scope:a,baseUrl:this.domainUrl,client_id:this.options.clientId,grant_type:"refresh_token",refresh_token:t&amp;&amp;t.refresh_token,redirect_uri:n}),l&amp;&amp;{timeout:l}),{auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs}),this.worker)];case 6:return i=s.sent(),[3,10];case 7:return((d=s.sent()).message.indexOf("Missing Refresh Token")&gt;-1||d.message&amp;&amp;d.message.indexOf("invalid refresh token")&gt;-1)&amp;&amp;this.options.useRefreshTokensFallback?[4,this._getTokenFromIFrame(e)]:[3,9];case 8:return[2,s.sent()];case 9:throw d;case 10:return[4,this._verifyIdToken(i.id_token)];case 11:return h=s.sent(),[2,o(o({},i),{decodedToken:h,scope:e.scope,oauthTokenScope:i.scope,audience:e.audience||"default"})]}})})},e.prototype._saveEntryInCache=function(e){return i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this.cacheManager.set(e)];case 1:return t.sent(),[2]}})})},e.prototype._updateIdTokenInCache=function(e){return i(this,void 0,void 0,function(){var t,n,r;return s(this,function(i){switch(i.label){case 0:return t=this.options.audience||"default",n=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,audience:t,scope:n}))];case 1:return r=i.sent(),[4,this.cacheManager.set(o(o({},r),{client_id:this.options.clientId,id_token:e.id_token,decodedToken:e.decodedToken}))];case 2:return i.sent(),[2]}})})},e.prototype._getEntryFromCache=function(e){var t=e.scope,n=e.audience,r=e.clientId,a=e.getDetailedEntry,c=void 0!==a&amp;&amp;a;return i(this,void 0,void 0,function(){var e,i,a,u,l;return s(this,function(s){switch(s.label){case 0:return[4,this.cacheManager.get(new ne({scope:t,audience:n,clientId:r}),60)];case 1:return(e=s.sent())&amp;&amp;e.access_token?c?(i=e.id_token,a=e.access_token,u=e.oauthTokenScope,l=e.expires_in,[2,o(o({id_token:i,access_token:a},u?{scope:u}:null),{expires_in:l})]):[2,e.access_token]:[2]}})})},e.prototype.migrateToV2=function(){return i(this,void 0,void 0,function(){var e,t,n;return s(this,function(o){switch(o.label){case 0:return[4,this.cacheManager.get(new ne({clientId:this.options.clientId}))];case 1:return o.sent()?[2]:(e=this.options.audience||"default",t=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,scope:t,audience:e}))]);case 2:return(n=o.sent())?[4,this.cacheManager.set({client_id:this.options.clientId,id_token:n.id_token,decodedToken:n.decodedToken})]:[3,4];case 3:o.sent(),o.label=4;case 4:return[2]}})})},e}(),je=function(){};e.Auth0Client=xe,e.AuthenticationError=M,e.CacheKey=ne,e.GenericError=D,e.InMemoryCache=re,e.LocalStorageCache=oe,e.MfaRequiredError=F,e.PopupCancelledError=U,e.PopupTimeoutError=R,e.TimeoutError=A,e.User=je,e.createAuth0Client=function(e){return i(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return[4,(t=new xe(e)).checkSession()];case 1:return n.sent(),[2,t]}})})},Object.defineProperty(e,"__esModule",{value:!0})});</textarea><div class="CodeMirror CodeMirror-wrap cm-s-paraiso-dark" translate="no"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 713px; left: 656.484px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" readonly="" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; min-height: 1em; outline: none;"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true" style="display: block; bottom: 0px;"><div style="min-width: 1px; height: 14848px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 29px; margin-bottom: -15px; border-right-width: 35px; min-height: 14468px; padding-right: 15px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like">x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 0px; width: 748px; height: 20px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 20px; width: 748px; height: 14800px;"></div><div class="CodeMirror-selected" style="position: absolute; left: 4px; top: 14820px; width: 623.484px; height: 20px;"></div></div><div class="CodeMirror-cursors" style="visibility: hidden;"><div class="CodeMirror-cursor" style="left: 627.484px; top: 14819.5px; height: 20.5px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation"><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" aria-hidden="true" style="left: -29px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">e</span>,<span class="cm-def">t</span>;(<span class="cm-variable">e</span><span class="cm-operator">=</span><span class="cm-variable">self</span>.<span class="cm-property">document</span>)<span class="cm-operator">&amp;&amp;!</span><span class="cm-variable">e</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">"livereloadscript"</span>)<span class="cm-operator">&amp;&amp;</span>((<span class="cm-variable">t</span><span class="cm-operator">=</span><span class="cm-variable">e</span>.<span class="cm-property">createElement</span>(<span class="cm-string">"script"</span>)).<span class="cm-property">async</span><span class="cm-operator">=</span><span class="cm-number">1</span>,<span class="cm-variable">t</span>.<span class="cm-property">src</span><span class="cm-operator">=</span><span class="cm-string">"//"</span><span class="cm-operator">+</span>(<span class="cm-variable">self</span>.<span class="cm-property">location</span>.<span class="cm-property">host</span><span class="cm-operator">||</span><span class="cm-string">"localhost"</span>).<span class="cm-property">split</span>(<span class="cm-string">":"</span>)[<span class="cm-number">0</span>]<span class="cm-operator">+</span><span class="cm-string">":35729/livereload.js?snipver=1"</span>,<span class="cm-variable">t</span>.<span class="cm-property">id</span><span class="cm-operator">=</span><span class="cm-string">"livereloadscript"</span>,<span class="cm-variable">e</span>.<span class="cm-property">getElementsByTagName</span>(<span class="cm-string">"head"</span>)[<span class="cm-number">0</span>].<span class="cm-property">appendChild</span>(<span class="cm-variable">t</span>)),<span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-string">"object"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">exports</span><span class="cm-operator">&amp;&amp;</span><span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">module</span><span class="cm-operator">?</span><span class="cm-variable-2">t</span>(<span class="cm-variable">exports</span>,<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/string/starts-with"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/symbol"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/array/from"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/typed-array/slice"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/array/includes"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/string/includes"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"core-js/es/set"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"fast-text-encoding"</span>),<span class="cm-variable">require</span>(<span class="cm-string">"abortcontroller-polyfill/dist/abortcontroller-polyfill-only"</span>)):<span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">define</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable">define</span>.<span class="cm-property">amd</span><span class="cm-operator">?</span><span class="cm-variable">define</span>([<span class="cm-string">"exports"</span>,<span class="cm-string">"core-js/es/string/starts-with"</span>,<span class="cm-string">"core-js/es/symbol"</span>,<span class="cm-string">"core-js/es/array/from"</span>,<span class="cm-string">"core-js/es/typed-array/slice"</span>,<span class="cm-string">"core-js/es/array/includes"</span>,<span class="cm-string">"core-js/es/string/includes"</span>,<span class="cm-string">"core-js/es/set"</span>,<span class="cm-string">"fast-text-encoding"</span>,<span class="cm-string">"abortcontroller-polyfill/dist/abortcontroller-polyfill-only"</span>],<span class="cm-variable-2">t</span>):<span class="cm-variable-2">t</span>((<span class="cm-variable-2">e</span><span class="cm-operator">=</span><span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">globalThis</span><span class="cm-operator">?</span><span class="cm-variable">globalThis</span>:<span class="cm-variable-2">e</span><span class="cm-operator">||</span><span class="cm-variable">self</span>).<span class="cm-property">auth0</span><span class="cm-operator">=</span>{})}(<span class="cm-keyword">this</span>,<span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">var</span> <span class="cm-def">t</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">n</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">t</span><span class="cm-operator">=</span><span class="cm-variable">Object</span>.<span class="cm-property">setPrototypeOf</span><span class="cm-operator">||</span>{<span class="cm-property">__proto__</span>:[]}<span class="cm-keyword">instanceof</span> <span class="cm-variable">Array</span><span class="cm-operator">&amp;&amp;</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-variable-2">e</span>.<span class="cm-property">__proto__</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>}<span class="cm-operator">||</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">n</span> <span class="cm-keyword">in</span> <span class="cm-variable-2">t</span>)<span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">hasOwnProperty</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">n</span>)<span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">e</span>[<span class="cm-variable-2">n</span>]<span class="cm-operator">=</span><span class="cm-variable-2">t</span>[<span class="cm-variable-2">n</span>])},<span class="cm-variable-2">t</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">n</span>)};<span class="cm-keyword">function</span> <span class="cm-def">n</span>(<span class="cm-def">e</span>,<span class="cm-def">n</span>){<span class="cm-keyword">if</span>(<span class="cm-string">"function"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">n</span><span class="cm-operator">&amp;&amp;</span><span class="cm-atom">null</span><span class="cm-operator">!==</span><span class="cm-variable-2">n</span>)<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"Class extends value "</span><span class="cm-operator">+</span><span class="cm-variable">String</span>(<span class="cm-variable-2">n</span>)<span class="cm-operator">+</span><span class="cm-string">" is not a constructor or null"</span>);<span class="cm-keyword">function</span> <span class="cm-def">o</span>(){<span class="cm-keyword">this</span>.<span class="cm-property">constructor</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>}<span class="cm-variable-2">t</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">n</span>),<span class="cm-variable-2">e</span>.<span class="cm-property">prototype</span><span class="cm-operator">=</span><span class="cm-atom">null</span><span class="cm-operator">===</span><span class="cm-variable-2">n</span><span class="cm-operator">?</span><span class="cm-variable">Object</span>.<span class="cm-property">create</span>(<span class="cm-variable-2">n</span>):(<span class="cm-variable-2">o</span>.<span class="cm-property">prototype</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>.<span class="cm-property">prototype</span>,<span class="cm-keyword">new</span> <span class="cm-variable-2">o</span>)}<span class="cm-keyword">var</span> <span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable">Object</span>.<span class="cm-property">assign</span><span class="cm-operator">||</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">t</span>,<span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-number">1</span>,<span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-variable-2">arguments</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">n</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">o</span>;<span class="cm-variable-2">n</span><span class="cm-operator">++</span>)<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">r</span> <span class="cm-keyword">in</span> <span class="cm-variable-2">t</span><span class="cm-operator">=</span><span class="cm-variable-2">arguments</span>[<span class="cm-variable-2">n</span>])<span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">hasOwnProperty</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">r</span>)<span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">e</span>[<span class="cm-variable-2">r</span>]<span class="cm-operator">=</span><span class="cm-variable-2">t</span>[<span class="cm-variable-2">r</span>]);<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>},<span class="cm-variable-2">o</span>.<span class="cm-property">apply</span>(<span class="cm-keyword">this</span>,<span class="cm-variable-2">arguments</span>)};<span class="cm-keyword">function</span> <span class="cm-def">r</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span>{};<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">o</span> <span class="cm-keyword">in</span> <span class="cm-variable-2">e</span>)<span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">hasOwnProperty</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">o</span>)<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">t</span>.<span class="cm-property">indexOf</span>(<span class="cm-variable-2">o</span>)<span class="cm-operator">&lt;</span><span class="cm-number">0</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">n</span>[<span class="cm-variable-2">o</span>]<span class="cm-operator">=</span><span class="cm-variable-2">e</span>[<span class="cm-variable-2">o</span>]);<span class="cm-keyword">if</span>(<span class="cm-atom">null</span><span class="cm-operator">!=</span><span class="cm-variable-2">e</span><span class="cm-operator">&amp;&amp;</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">Object</span>.<span class="cm-property">getOwnPropertySymbols</span>){<span class="cm-keyword">var</span> <span class="cm-def">r</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-keyword">for</span>(<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable">Object</span>.<span class="cm-property">getOwnPropertySymbols</span>(<span class="cm-variable-2">e</span>);<span class="cm-variable-2">r</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">r</span><span class="cm-operator">++</span>)<span class="cm-variable-2">t</span>.<span class="cm-property">indexOf</span>(<span class="cm-variable-2">o</span>[<span class="cm-variable-2">r</span>])<span class="cm-operator">&lt;</span><span class="cm-number">0</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">propertyIsEnumerable</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">o</span>[<span class="cm-variable-2">r</span>])<span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">n</span>[<span class="cm-variable-2">o</span>[<span class="cm-variable-2">r</span>]]<span class="cm-operator">=</span><span class="cm-variable-2">e</span>[<span class="cm-variable-2">o</span>[<span class="cm-variable-2">r</span>]])}<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span>}<span class="cm-keyword">function</span> <span class="cm-def">i</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>,<span class="cm-def">n</span>,<span class="cm-def">o</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span>(<span class="cm-variable-2">n</span><span class="cm-operator">||</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=</span><span class="cm-variable">Promise</span>))(<span class="cm-keyword">function</span>(<span class="cm-def">r</span>,<span class="cm-def">i</span>){<span class="cm-keyword">function</span> <span class="cm-def">s</span>(<span class="cm-def">e</span>){<span class="cm-keyword">try</span>{<span class="cm-variable">c</span>(<span class="cm-variable-2">o</span>.<span class="cm-property">next</span>(<span class="cm-variable-2">e</span>))}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">i</span>(<span class="cm-variable-2">e</span>)}}<span class="cm-keyword">function</span> <span class="cm-def">a</span>(<span class="cm-def">e</span>){<span class="cm-keyword">try</span>{<span class="cm-variable">c</span>(<span class="cm-variable-2">o</span>.<span class="cm-property">throw</span>(<span class="cm-variable-2">e</span>))}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">i</span>(<span class="cm-variable-2">e</span>)}}<span class="cm-keyword">function</span> <span class="cm-def">c</span>(<span class="cm-def">e</span>){<span class="cm-keyword">var</span> <span class="cm-def">t</span>;<span class="cm-variable-2">e</span>.<span class="cm-property">done</span><span class="cm-operator">?</span><span class="cm-variable-2">r</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">value</span>):(<span class="cm-variable-2">t</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>.<span class="cm-property">value</span>,<span class="cm-variable-2">t</span> <span class="cm-keyword">instanceof</span> <span class="cm-variable-2">n</span><span class="cm-operator">?</span><span class="cm-variable-2">t</span>:<span class="cm-keyword">new</span> <span class="cm-variable-2">n</span>(<span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">e</span>(<span class="cm-variable-2">t</span>)})).<span class="cm-property">then</span>(<span class="cm-variable-2">s</span>,<span class="cm-variable-2">a</span>)}<span class="cm-variable-2">c</span>((<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">o</span>.<span class="cm-property">apply</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">t</span><span class="cm-operator">||</span>[])).<span class="cm-property">next</span>())})}<span class="cm-keyword">function</span> <span class="cm-def">s</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span>,<span class="cm-def">o</span>,<span class="cm-def">r</span>,<span class="cm-def">i</span>,<span class="cm-def">s</span><span class="cm-operator">=</span>{<span class="cm-property">label</span>:<span class="cm-number">0</span>,<span class="cm-property">sent</span>:<span class="cm-keyword">function</span>(){<span class="cm-keyword">if</span>(<span class="cm-number">1</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">r</span>[<span class="cm-number">0</span>])<span class="cm-keyword">throw</span> <span class="cm-variable-2">r</span>[<span class="cm-number">1</span>];<span class="cm-keyword">return</span> <span class="cm-variable-2">r</span>[<span class="cm-number">1</span>]},<span class="cm-property">trys</span>:[],<span class="cm-property">ops</span>:[]};<span class="cm-keyword">return</span> <span class="cm-variable-2">i</span><span class="cm-operator">=</span>{<span class="cm-property">next</span>:<span class="cm-variable">a</span>(<span class="cm-number">0</span>),<span class="cm-property">throw</span>:<span class="cm-variable">a</span>(<span class="cm-number">1</span>),<span class="cm-property">return</span>:<span class="cm-variable">a</span>(<span class="cm-number">2</span>)},<span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">Symbol</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">i</span>[<span class="cm-variable">Symbol</span>.<span class="cm-property">iterator</span>]<span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-keyword">this</span>}),<span class="cm-variable-2">i</span>;<span class="cm-keyword">function</span> <span class="cm-def">a</span>(<span class="cm-def">i</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">function</span>(<span class="cm-def">a</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">function</span>(<span class="cm-def">i</span>){<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span>)<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"Generator is already executing."</span>);<span class="cm-keyword">for</span>(;<span class="cm-variable-2">s</span>;)<span class="cm-keyword">try</span>{<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=</span><span class="cm-number">1</span>,<span class="cm-variable-2">o</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-number">2</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">?</span><span class="cm-variable-2">o</span>.<span class="cm-property">return</span>:<span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">?</span><span class="cm-variable-2">o</span>.<span class="cm-property">throw</span><span class="cm-operator">||</span>((<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">o</span>.<span class="cm-property">return</span>)<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">r</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">o</span>),<span class="cm-number">0</span>):<span class="cm-variable-2">o</span>.<span class="cm-property">next</span>)<span class="cm-operator">&amp;&amp;!</span>(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">o</span>,<span class="cm-variable-2">i</span>[<span class="cm-number">1</span>])).<span class="cm-property">done</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">r</span>;<span class="cm-keyword">switch</span>(<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-number">0</span>,<span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">i</span><span class="cm-operator">=</span>[<span class="cm-number">2</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>],<span class="cm-variable-2">r</span>.<span class="cm-property">value</span>]),<span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]){<span class="cm-keyword">case</span> <span class="cm-number">0</span>:<span class="cm-keyword">case</span> <span class="cm-number">1</span>:<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>;<span class="cm-keyword">break</span>;<span class="cm-keyword">case</span> <span class="cm-number">4</span>:<span class="cm-keyword">return</span> <span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">++</span>,{<span class="cm-property">value</span>:<span class="cm-variable-2">i</span>[<span class="cm-number">1</span>],<span class="cm-property">done</span>:<span class="cm-operator">!</span><span class="cm-number">1</span>};<span class="cm-keyword">case</span> <span class="cm-number">5</span>:<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">++</span>,<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>],<span class="cm-variable-2">i</span><span class="cm-operator">=</span>[<span class="cm-number">0</span>];<span class="cm-keyword">continue</span>;<span class="cm-keyword">case</span> <span class="cm-number">7</span>:<span class="cm-variable-2">i</span><span class="cm-operator">=</span><span class="cm-variable-2">s</span>.<span class="cm-property">ops</span>.<span class="cm-property">pop</span>(),<span class="cm-variable-2">s</span>.<span class="cm-property">trys</span>.<span class="cm-property">pop</span>();<span class="cm-keyword">continue</span>;<span class="cm-keyword">default</span>:<span class="cm-keyword">if</span>(<span class="cm-operator">!</span>(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">s</span>.<span class="cm-property">trys</span>,(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>.<span class="cm-property">length</span><span class="cm-operator">&gt;</span><span class="cm-number">0</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">r</span>[<span class="cm-variable-2">r</span>.<span class="cm-property">length</span><span class="cm-operator">-</span><span class="cm-number">1</span>])<span class="cm-operator">||</span><span class="cm-number">6</span><span class="cm-operator">!==</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-number">2</span><span class="cm-operator">!==</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>])){<span class="cm-variable-2">s</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-keyword">continue</span>}<span class="cm-keyword">if</span>(<span class="cm-number">3</span><span class="cm-operator">===</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span>(<span class="cm-operator">!</span><span class="cm-variable-2">r</span><span class="cm-operator">||</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>]<span class="cm-operator">&gt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>]<span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">3</span>])){<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>];<span class="cm-keyword">break</span>}<span class="cm-keyword">if</span>(<span class="cm-number">6</span><span class="cm-operator">===</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">1</span>]){<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>[<span class="cm-number">1</span>],<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>;<span class="cm-keyword">break</span>}<span class="cm-keyword">if</span>(<span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">2</span>]){<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>[<span class="cm-number">2</span>],<span class="cm-variable-2">s</span>.<span class="cm-property">ops</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">i</span>);<span class="cm-keyword">break</span>}<span class="cm-variable-2">r</span>[<span class="cm-number">2</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">s</span>.<span class="cm-property">ops</span>.<span class="cm-property">pop</span>(),<span class="cm-variable-2">s</span>.<span class="cm-property">trys</span>.<span class="cm-property">pop</span>();<span class="cm-keyword">continue</span>}<span class="cm-variable-2">i</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">s</span>)}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">i</span><span class="cm-operator">=</span>[<span class="cm-number">6</span>,<span class="cm-variable-2">e</span>],<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-number">0</span>}<span class="cm-keyword">finally</span>{<span class="cm-variable-2">n</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-number">0</span>}<span class="cm-keyword">if</span>(<span class="cm-number">5</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>])<span class="cm-keyword">throw</span> <span class="cm-variable-2">i</span>[<span class="cm-number">1</span>];<span class="cm-keyword">return</span>{<span class="cm-property">value</span>:<span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">?</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>]:<span class="cm-keyword">void</span> <span class="cm-number">0</span>,<span class="cm-property">done</span>:<span class="cm-operator">!</span><span class="cm-number">0</span>}}([<span class="cm-variable-2">i</span>,<span class="cm-variable-2">a</span>])}}}<span class="cm-keyword">function</span> <span class="cm-def">a</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">Symbol</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">e</span>[<span class="cm-variable">Symbol</span>.<span class="cm-property">iterator</span>];<span class="cm-keyword">if</span>(<span class="cm-operator">!</span><span class="cm-variable-2">n</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>;<span class="cm-keyword">var</span> <span class="cm-def">o</span>,<span class="cm-def">r</span>,<span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>),<span class="cm-def">s</span><span class="cm-operator">=</span>[];<span class="cm-keyword">try</span>{<span class="cm-keyword">for</span>(;(<span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">t</span><span class="cm-operator">||</span><span class="cm-variable-2">t</span><span class="cm-operator">--</span> <span class="cm-operator">&gt;</span><span class="cm-number">0</span>)<span class="cm-operator">&amp;&amp;!</span>(<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>.<span class="cm-property">next</span>()).<span class="cm-property">done</span>;)<span class="cm-variable-2">s</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">o</span>.<span class="cm-property">value</span>)}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">r</span><span class="cm-operator">=</span>{<span class="cm-property">error</span>:<span class="cm-variable-2">e</span>}}<span class="cm-keyword">finally</span>{<span class="cm-keyword">try</span>{<span class="cm-variable-2">o</span><span class="cm-operator">&amp;&amp;!</span><span class="cm-variable-2">o</span>.<span class="cm-property">done</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>.<span class="cm-property">return</span>)<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">n</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">i</span>)}<span class="cm-keyword">finally</span>{<span class="cm-keyword">if</span>(<span class="cm-variable-2">r</span>)<span class="cm-keyword">throw</span> <span class="cm-variable-2">r</span>.<span class="cm-property">error</span>}}<span class="cm-keyword">return</span> <span class="cm-variable-2">s</span>}<span class="cm-keyword">function</span> <span class="cm-def">c</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span><span class="cm-operator">||</span><span class="cm-number">2</span><span class="cm-operator">===</span><span class="cm-variable-2">arguments</span>.<span class="cm-property">length</span>)<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">o</span>,<span class="cm-def">r</span><span class="cm-operator">=</span><span class="cm-number">0</span>,<span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">r</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">i</span>;<span class="cm-variable-2">r</span><span class="cm-operator">++</span>)<span class="cm-operator">!</span><span class="cm-variable-2">o</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">r</span> <span class="cm-keyword">in</span> <span class="cm-variable-2">t</span><span class="cm-operator">||</span>(<span class="cm-variable-2">o</span><span class="cm-operator">||</span>(<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable">Array</span>.<span class="cm-property">prototype</span>.<span class="cm-property">slice</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">t</span>,<span class="cm-number">0</span>,<span class="cm-variable-2">r</span>)),<span class="cm-variable-2">o</span>[<span class="cm-variable-2">r</span>]<span class="cm-operator">=</span><span class="cm-variable-2">t</span>[<span class="cm-variable-2">r</span>]);<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>.<span class="cm-property">concat</span>(<span class="cm-variable-2">o</span><span class="cm-operator">||</span><span class="cm-variable">Array</span>.<span class="cm-property">prototype</span>.<span class="cm-property">slice</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">t</span>))}<span class="cm-keyword">function</span> <span class="cm-def">u</span>(<span class="cm-def">e</span>){<span class="cm-keyword">var</span> <span class="cm-def">t</span><span class="cm-operator">=</span><span class="cm-keyword">this</span>.<span class="cm-property">constructor</span>;<span class="cm-keyword">return</span> <span class="cm-keyword">this</span>.<span class="cm-property">then</span>(<span class="cm-keyword">function</span>(<span class="cm-def">n</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">t</span>.<span class="cm-property">resolve</span>(<span class="cm-variable-2">e</span>()).<span class="cm-property">then</span>(<span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span>})},<span class="cm-keyword">function</span>(<span class="cm-def">n</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">t</span>.<span class="cm-property">resolve</span>(<span class="cm-variable-2">e</span>()).<span class="cm-property">then</span>(<span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-variable-2">t</span>.<span class="cm-property">reject</span>(<span class="cm-variable-2">n</span>)})})}<span class="cm-keyword">function</span> <span class="cm-def">l</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span> <span class="cm-keyword">this</span>(<span class="cm-keyword">function</span>(<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-keyword">if</span>(<span class="cm-operator">!</span><span class="cm-variable-2">e</span><span class="cm-operator">||</span><span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">length</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span>(<span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-keyword">typeof</span> <span class="cm-variable-2">e</span><span class="cm-operator">+</span><span class="cm-string">" "</span><span class="cm-operator">+</span><span class="cm-variable-2">e</span><span class="cm-operator">+</span><span class="cm-string">" is not iterable(cannot read property Symbol(Symbol.iterator))"</span>));<span class="cm-keyword">var</span> <span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-variable">Array</span>.<span class="cm-property">prototype</span>.<span class="cm-property">slice</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>);<span class="cm-keyword">if</span>(<span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">t</span>([]);<span class="cm-keyword">var</span> <span class="cm-def">r</span><span class="cm-operator">=</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>;<span class="cm-keyword">function</span> <span class="cm-def">i</span>(<span class="cm-def">e</span>,<span class="cm-def">n</span>){<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-string">"object"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">n</span><span class="cm-operator">||</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">n</span>)){<span class="cm-keyword">var</span> <span class="cm-def">s</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>.<span class="cm-property">then</span>;<span class="cm-keyword">if</span>(<span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">s</span>)<span class="cm-keyword">return</span> <span class="cm-keyword">void</span> <span class="cm-variable-2">s</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">n</span>,<span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-variable-2">i</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">t</span>)},<span class="cm-keyword">function</span>(<span class="cm-def">n</span>){<span class="cm-variable-2">o</span>[<span class="cm-variable-2">e</span>]<span class="cm-operator">=</span>{<span class="cm-property">status</span>:<span class="cm-string">"rejected"</span>,<span class="cm-property">reason</span>:<span class="cm-variable-2">n</span>},<span class="cm-number">0</span><span class="cm-operator">===--</span><span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">t</span>(<span class="cm-variable-2">o</span>)})}<span class="cm-variable-2">o</span>[<span class="cm-variable-2">e</span>]<span class="cm-operator">=</span>{<span class="cm-property">status</span>:<span class="cm-string">"fulfilled"</span>,<span class="cm-property">value</span>:<span class="cm-variable-2">n</span>},<span class="cm-number">0</span><span class="cm-operator">===--</span><span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">t</span>(<span class="cm-variable-2">o</span>)}<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">s</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-variable-2">s</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">s</span><span class="cm-operator">++</span>)<span class="cm-variable-2">i</span>(<span class="cm-variable-2">s</span>,<span class="cm-variable-2">o</span>[<span class="cm-variable-2">s</span>])})}<span class="cm-keyword">var</span> <span class="cm-def">d</span><span class="cm-operator">=</span><span class="cm-variable">setTimeout</span>;<span class="cm-keyword">function</span> <span class="cm-def">h</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-variable">Boolean</span>(<span class="cm-variable-2">e</span><span class="cm-operator">&amp;&amp;</span><span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">!==</span><span class="cm-variable-2">e</span>.<span class="cm-property">length</span>)}<span class="cm-keyword">function</span> <span class="cm-def">f</span>(){}<span class="cm-keyword">function</span> <span class="cm-def">p</span>(<span class="cm-def">e</span>){<span class="cm-keyword">if</span>(<span class="cm-operator">!</span>(<span class="cm-keyword">this</span> <span class="cm-keyword">instanceof</span> <span class="cm-variable-2">p</span>))<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"Promises must be constructed via new"</span>);<span class="cm-keyword">if</span>(<span class="cm-string">"function"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">e</span>)<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"not a function"</span>);<span class="cm-keyword">this</span>.<span class="cm-property">_state</span><span class="cm-operator">=</span><span class="cm-number">0</span>,<span class="cm-keyword">this</span>.<span class="cm-property">_handled</span><span class="cm-operator">=!</span><span class="cm-number">1</span>,<span class="cm-keyword">this</span>.<span class="cm-property">_value</span><span class="cm-operator">=</span><span class="cm-keyword">void</span> <span class="cm-number">0</span>,<span class="cm-keyword">this</span>.<span class="cm-property">_deferreds</span><span class="cm-operator">=</span>[],<span class="cm-variable">_</span>(<span class="cm-variable-2">e</span>,<span class="cm-keyword">this</span>)}<span class="cm-keyword">function</span> <span class="cm-def">v</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">for</span>(;<span class="cm-number">3</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">_state</span>;)<span class="cm-variable-2">e</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>.<span class="cm-property">_value</span>;<span class="cm-number">0</span><span class="cm-operator">!==</span><span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">?</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">_handled</span><span class="cm-operator">=!</span><span class="cm-number">0</span>,<span class="cm-variable-2">p</span>.<span class="cm-property">_immediateFn</span>(<span class="cm-keyword">function</span>(){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-number">1</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">?</span><span class="cm-variable-2">t</span>.<span class="cm-property">onFulfilled</span>:<span class="cm-variable-2">t</span>.<span class="cm-property">onRejected</span>;<span class="cm-keyword">if</span>(<span class="cm-atom">null</span><span class="cm-operator">!==</span><span class="cm-variable-2">n</span>){<span class="cm-keyword">var</span> <span class="cm-def">o</span>;<span class="cm-keyword">try</span>{<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">_value</span>)}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">void</span> <span class="cm-variable">y</span>(<span class="cm-variable-2">t</span>.<span class="cm-property">promise</span>,<span class="cm-variable-2">e</span>)}<span class="cm-variable">m</span>(<span class="cm-variable-2">t</span>.<span class="cm-property">promise</span>,<span class="cm-variable-2">o</span>)}<span class="cm-keyword">else</span>(<span class="cm-number">1</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">?</span><span class="cm-variable">m</span>:<span class="cm-variable">y</span>)(<span class="cm-variable-2">t</span>.<span class="cm-property">promise</span>,<span class="cm-variable-2">e</span>.<span class="cm-property">_value</span>)})):<span class="cm-variable-2">e</span>.<span class="cm-property">_deferreds</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">t</span>)}<span class="cm-keyword">function</span> <span class="cm-def">m</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">try</span>{<span class="cm-keyword">if</span>(<span class="cm-variable-2">t</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>)<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"A promise cannot be resolved with itself."</span>);<span class="cm-keyword">if</span>(<span class="cm-variable-2">t</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-string">"object"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">t</span><span class="cm-operator">||</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">t</span>)){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>.<span class="cm-property">then</span>;<span class="cm-keyword">if</span>(<span class="cm-variable-2">t</span> <span class="cm-keyword">instanceof</span> <span class="cm-variable-2">p</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">=</span><span class="cm-number">3</span>,<span class="cm-variable-2">e</span>.<span class="cm-property">_value</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>,<span class="cm-keyword">void</span> <span class="cm-variable">w</span>(<span class="cm-variable-2">e</span>);<span class="cm-keyword">if</span>(<span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">n</span>)<span class="cm-keyword">return</span> <span class="cm-keyword">void</span> <span class="cm-variable">_</span>((<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>,<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>,<span class="cm-keyword">function</span>(){<span class="cm-variable-2">o</span>.<span class="cm-property">apply</span>(<span class="cm-variable-2">r</span>,<span class="cm-variable-2">arguments</span>)}),<span class="cm-variable-2">e</span>)}<span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">=</span><span class="cm-number">1</span>,<span class="cm-variable-2">e</span>.<span class="cm-property">_value</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>,<span class="cm-variable">w</span>(<span class="cm-variable-2">e</span>)}<span class="cm-keyword">catch</span>(<span class="cm-def">t</span>){<span class="cm-variable">y</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">t</span>)}<span class="cm-keyword">var</span> <span class="cm-def">o</span>,<span class="cm-def">r</span>}<span class="cm-keyword">function</span> <span class="cm-def">y</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">=</span><span class="cm-number">2</span>,<span class="cm-variable-2">e</span>.<span class="cm-property">_value</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>,<span class="cm-variable">w</span>(<span class="cm-variable-2">e</span>)}<span class="cm-keyword">function</span> <span class="cm-def">w</span>(<span class="cm-def">e</span>){<span class="cm-number">2</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">_state</span><span class="cm-operator">&amp;&amp;</span><span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">_deferreds</span>.<span class="cm-property">length</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">p</span>.<span class="cm-property">_immediateFn</span>(<span class="cm-keyword">function</span>(){<span class="cm-variable-2">e</span>.<span class="cm-property">_handled</span><span class="cm-operator">||</span><span class="cm-variable-2">p</span>.<span class="cm-property">_unhandledRejectionFn</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">_value</span>)});<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">t</span><span class="cm-operator">=</span><span class="cm-number">0</span>,<span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>.<span class="cm-property">_deferreds</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">t</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">n</span>;<span class="cm-variable-2">t</span><span class="cm-operator">++</span>)<span class="cm-variable-2">v</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">e</span>.<span class="cm-property">_deferreds</span>[<span class="cm-variable-2">t</span>]);<span class="cm-variable-2">e</span>.<span class="cm-property">_deferreds</span><span class="cm-operator">=</span><span class="cm-atom">null</span>}<span class="cm-keyword">function</span> <span class="cm-def">g</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-keyword">this</span>.<span class="cm-property">onFulfilled</span><span class="cm-operator">=</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">e</span><span class="cm-operator">?</span><span class="cm-variable-2">e</span>:<span class="cm-atom">null</span>,<span class="cm-keyword">this</span>.<span class="cm-property">onRejected</span><span class="cm-operator">=</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">t</span><span class="cm-operator">?</span><span class="cm-variable-2">t</span>:<span class="cm-atom">null</span>,<span class="cm-keyword">this</span>.<span class="cm-property">promise</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>}<span class="cm-keyword">function</span> <span class="cm-def">_</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=!</span><span class="cm-number">1</span>;<span class="cm-keyword">try</span>{<span class="cm-variable-2">e</span>(<span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">n</span><span class="cm-operator">||</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=!</span><span class="cm-number">0</span>,<span class="cm-variable-2">m</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">e</span>))},<span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">n</span><span class="cm-operator">||</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=!</span><span class="cm-number">0</span>,<span class="cm-variable-2">y</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">e</span>))})}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span>)<span class="cm-keyword">return</span>;<span class="cm-variable-2">n</span><span class="cm-operator">=!</span><span class="cm-number">0</span>,<span class="cm-variable-2">y</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">e</span>)}}<span class="cm-variable-2">p</span>.<span class="cm-property">prototype</span>.<span class="cm-property">catch</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">this</span>.<span class="cm-property">then</span>(<span class="cm-atom">null</span>,<span class="cm-variable-2">e</span>)},<span class="cm-variable-2">p</span>.<span class="cm-property">prototype</span>.<span class="cm-property">then</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-keyword">new</span> <span class="cm-keyword">this</span>.<span class="cm-property">constructor</span>(<span class="cm-variable-2">f</span>);<span class="cm-keyword">return</span> <span class="cm-variable-2">v</span>(<span class="cm-keyword">this</span>,<span class="cm-keyword">new</span> <span class="cm-variable-2">g</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">t</span>,<span class="cm-variable-2">n</span>)),<span class="cm-variable-2">n</span>},<span class="cm-variable-2">p</span>.<span class="cm-property">prototype</span>.<span class="cm-property">finally</span><span class="cm-operator">=</span><span class="cm-variable-2">u</span>,<span class="cm-variable-2">p</span>.<span class="cm-property">all</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span> <span class="cm-variable-2">p</span>(<span class="cm-keyword">function</span>(<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-keyword">if</span>(<span class="cm-operator">!</span><span class="cm-variable-2">h</span>(<span class="cm-variable-2">e</span>))<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span>(<span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"Promise.all accepts an array"</span>));<span class="cm-keyword">var</span> <span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-variable">Array</span>.<span class="cm-property">prototype</span>.<span class="cm-property">slice</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>);<span class="cm-keyword">if</span>(<span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">t</span>([]);<span class="cm-keyword">var</span> <span class="cm-def">r</span><span class="cm-operator">=</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>;<span class="cm-keyword">function</span> <span class="cm-def">i</span>(<span class="cm-def">e</span>,<span class="cm-def">s</span>){<span class="cm-keyword">try</span>{<span class="cm-keyword">if</span>(<span class="cm-variable-2">s</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-string">"object"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">s</span><span class="cm-operator">||</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">s</span>)){<span class="cm-keyword">var</span> <span class="cm-def">a</span><span class="cm-operator">=</span><span class="cm-variable-2">s</span>.<span class="cm-property">then</span>;<span class="cm-keyword">if</span>(<span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">a</span>)<span class="cm-keyword">return</span> <span class="cm-keyword">void</span> <span class="cm-variable-2">a</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">s</span>,<span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-variable-2">i</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">t</span>)},<span class="cm-variable-2">n</span>)}<span class="cm-variable-2">o</span>[<span class="cm-variable-2">e</span>]<span class="cm-operator">=</span><span class="cm-variable-2">s</span>,<span class="cm-number">0</span><span class="cm-operator">===--</span><span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">t</span>(<span class="cm-variable-2">o</span>)}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">n</span>(<span class="cm-variable-2">e</span>)}}<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">s</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-variable-2">s</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">o</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">s</span><span class="cm-operator">++</span>)<span class="cm-variable-2">i</span>(<span class="cm-variable-2">s</span>,<span class="cm-variable-2">o</span>[<span class="cm-variable-2">s</span>])})},<span class="cm-variable-2">p</span>.<span class="cm-property">allSettled</span><span class="cm-operator">=</span><span class="cm-variable-2">l</span>,<span class="cm-variable-2">p</span>.<span class="cm-property">resolve</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span><span class="cm-operator">&amp;&amp;</span><span class="cm-string">"object"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">e</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">e</span>.<span class="cm-property">constructor</span><span class="cm-operator">===</span><span class="cm-variable-2">p</span><span class="cm-operator">?</span><span class="cm-variable-2">e</span>:<span class="cm-keyword">new</span> <span class="cm-variable-2">p</span>(<span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-variable-2">t</span>(<span class="cm-variable-2">e</span>)})},<span class="cm-variable-2">p</span>.<span class="cm-property">reject</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span> <span class="cm-variable-2">p</span>(<span class="cm-keyword">function</span>(<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-variable-2">n</span>(<span class="cm-variable-2">e</span>)})},<span class="cm-variable-2">p</span>.<span class="cm-property">race</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span> <span class="cm-variable-2">p</span>(<span class="cm-keyword">function</span>(<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-keyword">if</span>(<span class="cm-operator">!</span><span class="cm-variable-2">h</span>(<span class="cm-variable-2">e</span>))<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span>(<span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"Promise.race accepts an array"</span>));<span class="cm-keyword">for</span>(<span class="cm-keyword">var</span> <span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-number">0</span>,<span class="cm-def">r</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>.<span class="cm-property">length</span>;<span class="cm-variable-2">o</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>;<span class="cm-variable-2">o</span><span class="cm-operator">++</span>)<span class="cm-variable-2">p</span>.<span class="cm-property">resolve</span>(<span class="cm-variable-2">e</span>[<span class="cm-variable-2">o</span>]).<span class="cm-property">then</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">n</span>)})},<span class="cm-variable-2">p</span>.<span class="cm-property">_immediateFn</span><span class="cm-operator">=</span><span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">setImmediate</span><span class="cm-operator">&amp;&amp;</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-variable">setImmediate</span>(<span class="cm-variable-2">e</span>)}<span class="cm-operator">||</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">d</span>(<span class="cm-variable-2">e</span>,<span class="cm-number">0</span>)},<span class="cm-variable-2">p</span>.<span class="cm-property">_unhandledRejectionFn</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>){<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">console</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable">console</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable">console</span>.<span class="cm-property">warn</span>(<span class="cm-string">"Possible Unhandled Promise Rejection:"</span>,<span class="cm-variable-2">e</span>)};<span class="cm-keyword">var</span> <span class="cm-def">b</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">if</span>(<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">self</span>)<span class="cm-keyword">return</span> <span class="cm-variable">self</span>;<span class="cm-keyword">if</span>(<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">window</span>)<span class="cm-keyword">return</span> <span class="cm-variable">window</span>;<span class="cm-keyword">if</span>(<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">global</span>)<span class="cm-keyword">return</span> <span class="cm-variable">global</span>;<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">Error</span>(<span class="cm-string">"unable to locate global object"</span>)}();<span class="cm-string">"function"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable-2">b</span>.<span class="cm-property">Promise</span><span class="cm-operator">?</span><span class="cm-variable-2">b</span>.<span class="cm-property">Promise</span><span class="cm-operator">=</span><span class="cm-variable-2">p</span>:(<span class="cm-variable-2">b</span>.<span class="cm-property">Promise</span>.<span class="cm-property">prototype</span>.<span class="cm-property">finally</span><span class="cm-operator">||</span>(<span class="cm-variable-2">b</span>.<span class="cm-property">Promise</span>.<span class="cm-property">prototype</span>.<span class="cm-property">finally</span><span class="cm-operator">=</span><span class="cm-variable-2">u</span>),<span class="cm-variable-2">b</span>.<span class="cm-property">Promise</span>.<span class="cm-property">allSettled</span><span class="cm-operator">||</span>(<span class="cm-variable-2">b</span>.<span class="cm-property">Promise</span>.<span class="cm-property">allSettled</span><span class="cm-operator">=</span><span class="cm-variable-2">l</span>));<span class="cm-keyword">var</span> <span class="cm-def">k</span><span class="cm-operator">=</span><span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">globalThis</span><span class="cm-operator">?</span><span class="cm-variable">globalThis</span>:<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">window</span><span class="cm-operator">?</span><span class="cm-variable">window</span>:<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">global</span><span class="cm-operator">?</span><span class="cm-variable">global</span>:<span class="cm-string">"undefined"</span><span class="cm-operator">!=</span><span class="cm-keyword">typeof</span> <span class="cm-variable">self</span><span class="cm-operator">?</span><span class="cm-variable">self</span>:{};<span class="cm-keyword">function</span> <span class="cm-def">I</span>(<span class="cm-def">e</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">e</span>.<span class="cm-property">__esModule</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable">Object</span>.<span class="cm-property">prototype</span>.<span class="cm-property">hasOwnProperty</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>,<span class="cm-string">"default"</span>)<span class="cm-operator">?</span><span class="cm-variable-2">e</span>.<span class="cm-property">default</span>:<span class="cm-variable-2">e</span>}<span class="cm-keyword">function</span> <span class="cm-def">S</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>(<span class="cm-variable-2">t</span><span class="cm-operator">=</span>{<span class="cm-property">exports</span>:{}},<span class="cm-variable-2">t</span>.<span class="cm-property">exports</span>),<span class="cm-variable-2">t</span>.<span class="cm-property">exports</span>}<span class="cm-keyword">var</span> <span class="cm-def">T</span><span class="cm-operator">=</span><span class="cm-variable-2">S</span>(<span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-variable">Object</span>.<span class="cm-property">defineProperty</span>(<span class="cm-variable-2">t</span>,<span class="cm-string">"__esModule"</span>,{<span class="cm-property">value</span>:<span class="cm-operator">!</span><span class="cm-number">0</span>});<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">function</span> <span class="cm-def">e</span>(){<span class="cm-keyword">var</span> <span class="cm-def">e</span><span class="cm-operator">=</span><span class="cm-keyword">this</span>;<span class="cm-keyword">this</span>.<span class="cm-property">locked</span><span class="cm-operator">=</span><span class="cm-keyword">new</span> <span class="cm-variable">Map</span>,<span class="cm-keyword">this</span>.<span class="cm-property">addToLocked</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">t</span>,<span class="cm-def">n</span>){<span class="cm-keyword">var</span> <span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">get</span>(<span class="cm-variable-2">t</span>);<span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">o</span><span class="cm-operator">?</span><span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">n</span><span class="cm-operator">?</span><span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">set</span>(<span class="cm-variable-2">t</span>,[]):<span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">set</span>(<span class="cm-variable-2">t</span>,[<span class="cm-variable-2">n</span>]):<span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">!==</span><span class="cm-variable-2">n</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">o</span>.<span class="cm-property">unshift</span>(<span class="cm-variable-2">n</span>),<span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">set</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">o</span>))},<span class="cm-keyword">this</span>.<span class="cm-property">isLocked</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">has</span>(<span class="cm-variable-2">t</span>)},<span class="cm-keyword">this</span>.<span class="cm-property">lock</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span> <span class="cm-variable">Promise</span>(<span class="cm-keyword">function</span>(<span class="cm-def">n</span>,<span class="cm-def">o</span>){<span class="cm-variable-2">e</span>.<span class="cm-property">isLocked</span>(<span class="cm-variable-2">t</span>)<span class="cm-operator">?</span><span class="cm-variable-2">e</span>.<span class="cm-property">addToLocked</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">n</span>):(<span class="cm-variable-2">e</span>.<span class="cm-property">addToLocked</span>(<span class="cm-variable-2">t</span>),<span class="cm-variable-2">n</span>())})},<span class="cm-keyword">this</span>.<span class="cm-property">unlock</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">get</span>(<span class="cm-variable-2">t</span>);<span class="cm-keyword">if</span>(<span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">!==</span><span class="cm-variable-2">n</span><span class="cm-operator">&amp;&amp;</span><span class="cm-number">0</span><span class="cm-operator">!==</span><span class="cm-variable-2">n</span>.<span class="cm-property">length</span>){<span class="cm-keyword">var</span> <span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-variable-2">n</span>.<span class="cm-property">pop</span>();<span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">set</span>(<span class="cm-variable-2">t</span>,<span class="cm-variable-2">n</span>),<span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">!==</span><span class="cm-variable-2">o</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable">setTimeout</span>(<span class="cm-variable-2">o</span>,<span class="cm-number">0</span>)}<span class="cm-keyword">else</span> <span class="cm-variable-2">e</span>.<span class="cm-property">locked</span>.<span class="cm-property">delete</span>(<span class="cm-variable-2">t</span>)}}<span class="cm-keyword">return</span> <span class="cm-variable-2">e</span>.<span class="cm-property">getInstance</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-keyword">void</span> <span class="cm-number">0</span><span class="cm-operator">===</span><span class="cm-variable-2">e</span>.<span class="cm-property">instance</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">instance</span><span class="cm-operator">=</span><span class="cm-keyword">new</span> <span class="cm-variable-2">e</span>),<span class="cm-variable-2">e</span>.<span class="cm-property">instance</span>},<span class="cm-variable-2">e</span>}();<span class="cm-variable-2">t</span>.<span class="cm-property">default</span><span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span>.<span class="cm-property">getInstance</span>()}});<span class="cm-variable-2">I</span>(<span class="cm-variable-2">T</span>);<span class="cm-keyword">var</span> <span class="cm-def">O</span><span class="cm-operator">=</span><span class="cm-variable-2">S</span>(<span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span><span class="cm-operator">=</span><span class="cm-variable-2">k</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">k</span>.<span class="cm-property">__awaiter</span><span class="cm-operator">||</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>,<span class="cm-def">n</span>,<span class="cm-def">o</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">new</span>(<span class="cm-variable-2">n</span><span class="cm-operator">||</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=</span><span class="cm-variable">Promise</span>))(<span class="cm-keyword">function</span>(<span class="cm-def">r</span>,<span class="cm-def">i</span>){<span class="cm-keyword">function</span> <span class="cm-def">s</span>(<span class="cm-def">e</span>){<span class="cm-keyword">try</span>{<span class="cm-variable-2">c</span>(<span class="cm-variable-2">o</span>.<span class="cm-property">next</span>(<span class="cm-variable-2">e</span>))}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">i</span>(<span class="cm-variable-2">e</span>)}}<span class="cm-keyword">function</span> <span class="cm-def">a</span>(<span class="cm-def">e</span>){<span class="cm-keyword">try</span>{<span class="cm-variable-2">c</span>(<span class="cm-variable-2">o</span>.<span class="cm-property">throw</span>(<span class="cm-variable-2">e</span>))}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">i</span>(<span class="cm-variable-2">e</span>)}}<span class="cm-keyword">function</span> <span class="cm-def">c</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">e</span>.<span class="cm-property">done</span><span class="cm-operator">?</span><span class="cm-variable-2">r</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">value</span>):<span class="cm-keyword">new</span> <span class="cm-variable-2">n</span>(<span class="cm-keyword">function</span>(<span class="cm-def">t</span>){<span class="cm-variable-2">t</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">value</span>)}).<span class="cm-property">then</span>(<span class="cm-variable-2">s</span>,<span class="cm-variable-2">a</span>)}<span class="cm-variable-2">c</span>((<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">o</span>.<span class="cm-property">apply</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">t</span><span class="cm-operator">||</span>[])).<span class="cm-property">next</span>())})},<span class="cm-def">o</span><span class="cm-operator">=</span><span class="cm-variable-2">k</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">k</span>.<span class="cm-property">__generator</span><span class="cm-operator">||</span><span class="cm-keyword">function</span>(<span class="cm-def">e</span>,<span class="cm-def">t</span>){<span class="cm-keyword">var</span> <span class="cm-def">n</span>,<span class="cm-def">o</span>,<span class="cm-def">r</span>,<span class="cm-def">i</span>,<span class="cm-def">s</span><span class="cm-operator">=</span>{<span class="cm-property">label</span>:<span class="cm-number">0</span>,<span class="cm-property">sent</span>:<span class="cm-keyword">function</span>(){<span class="cm-keyword">if</span>(<span class="cm-number">1</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">r</span>[<span class="cm-number">0</span>])<span class="cm-keyword">throw</span> <span class="cm-variable-2">r</span>[<span class="cm-number">1</span>];<span class="cm-keyword">return</span> <span class="cm-variable-2">r</span>[<span class="cm-number">1</span>]},<span class="cm-property">trys</span>:[],<span class="cm-property">ops</span>:[]};<span class="cm-keyword">return</span> <span class="cm-variable-2">i</span><span class="cm-operator">=</span>{<span class="cm-property">next</span>:<span class="cm-variable-2">a</span>(<span class="cm-number">0</span>),<span class="cm-property">throw</span>:<span class="cm-variable-2">a</span>(<span class="cm-number">1</span>),<span class="cm-property">return</span>:<span class="cm-variable-2">a</span>(<span class="cm-number">2</span>)},<span class="cm-string">"function"</span><span class="cm-operator">==</span><span class="cm-keyword">typeof</span> <span class="cm-variable">Symbol</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">i</span>[<span class="cm-variable">Symbol</span>.<span class="cm-property">iterator</span>]<span class="cm-operator">=</span><span class="cm-keyword">function</span>(){<span class="cm-keyword">return</span> <span class="cm-keyword">this</span>}),<span class="cm-variable-2">i</span>;<span class="cm-keyword">function</span> <span class="cm-def">a</span>(<span class="cm-def">i</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">function</span>(<span class="cm-def">a</span>){<span class="cm-keyword">return</span> <span class="cm-keyword">function</span>(<span class="cm-def">i</span>){<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span>)<span class="cm-keyword">throw</span> <span class="cm-keyword">new</span> <span class="cm-variable">TypeError</span>(<span class="cm-string">"Generator is already executing."</span>);<span class="cm-keyword">for</span>(;<span class="cm-variable-2">s</span>;)<span class="cm-keyword">try</span>{<span class="cm-keyword">if</span>(<span class="cm-variable-2">n</span><span class="cm-operator">=</span><span class="cm-number">1</span>,<span class="cm-variable-2">o</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-number">2</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">?</span><span class="cm-variable-2">o</span>.<span class="cm-property">return</span>:<span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">?</span><span class="cm-variable-2">o</span>.<span class="cm-property">throw</span><span class="cm-operator">||</span>((<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">o</span>.<span class="cm-property">return</span>)<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">r</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">o</span>),<span class="cm-number">0</span>):<span class="cm-variable-2">o</span>.<span class="cm-property">next</span>)<span class="cm-operator">&amp;&amp;!</span>(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">o</span>,<span class="cm-variable-2">i</span>[<span class="cm-number">1</span>])).<span class="cm-property">done</span>)<span class="cm-keyword">return</span> <span class="cm-variable-2">r</span>;<span class="cm-keyword">switch</span>(<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-number">0</span>,<span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span>(<span class="cm-variable-2">i</span><span class="cm-operator">=</span>[<span class="cm-number">2</span><span class="cm-operator">&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>],<span class="cm-variable-2">r</span>.<span class="cm-property">value</span>]),<span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]){<span class="cm-keyword">case</span> <span class="cm-number">0</span>:<span class="cm-keyword">case</span> <span class="cm-number">1</span>:<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>;<span class="cm-keyword">break</span>;<span class="cm-keyword">case</span> <span class="cm-number">4</span>:<span class="cm-keyword">return</span> <span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">++</span>,{<span class="cm-property">value</span>:<span class="cm-variable-2">i</span>[<span class="cm-number">1</span>],<span class="cm-property">done</span>:<span class="cm-operator">!</span><span class="cm-number">1</span>};<span class="cm-keyword">case</span> <span class="cm-number">5</span>:<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">++</span>,<span class="cm-variable-2">o</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>],<span class="cm-variable-2">i</span><span class="cm-operator">=</span>[<span class="cm-number">0</span>];<span class="cm-keyword">continue</span>;<span class="cm-keyword">case</span> <span class="cm-number">7</span>:<span class="cm-variable-2">i</span><span class="cm-operator">=</span><span class="cm-variable-2">s</span>.<span class="cm-property">ops</span>.<span class="cm-property">pop</span>(),<span class="cm-variable-2">s</span>.<span class="cm-property">trys</span>.<span class="cm-property">pop</span>();<span class="cm-keyword">continue</span>;<span class="cm-keyword">default</span>:<span class="cm-keyword">if</span>(<span class="cm-operator">!</span>(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">s</span>.<span class="cm-property">trys</span>,(<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>.<span class="cm-property">length</span><span class="cm-operator">&gt;</span><span class="cm-number">0</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">r</span>[<span class="cm-variable-2">r</span>.<span class="cm-property">length</span><span class="cm-operator">-</span><span class="cm-number">1</span>])<span class="cm-operator">||</span><span class="cm-number">6</span><span class="cm-operator">!==</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-number">2</span><span class="cm-operator">!==</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>])){<span class="cm-variable-2">s</span><span class="cm-operator">=</span><span class="cm-number">0</span>;<span class="cm-keyword">continue</span>}<span class="cm-keyword">if</span>(<span class="cm-number">3</span><span class="cm-operator">===</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span>(<span class="cm-operator">!</span><span class="cm-variable-2">r</span><span class="cm-operator">||</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>]<span class="cm-operator">&gt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>]<span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">3</span>])){<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>[<span class="cm-number">1</span>];<span class="cm-keyword">break</span>}<span class="cm-keyword">if</span>(<span class="cm-number">6</span><span class="cm-operator">===</span><span class="cm-variable-2">i</span>[<span class="cm-number">0</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">1</span>]){<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>[<span class="cm-number">1</span>],<span class="cm-variable-2">r</span><span class="cm-operator">=</span><span class="cm-variable-2">i</span>;<span class="cm-keyword">break</span>}<span class="cm-keyword">if</span>(<span class="cm-variable-2">r</span><span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">&lt;</span><span class="cm-variable-2">r</span>[<span class="cm-number">2</span>]){<span class="cm-variable-2">s</span>.<span class="cm-property">label</span><span class="cm-operator">=</span><span class="cm-variable-2">r</span>[<span class="cm-number">2</span>],<span class="cm-variable-2">s</span>.<span class="cm-property">ops</span>.<span class="cm-property">push</span>(<span class="cm-variable-2">i</span>);<span class="cm-keyword">break</span>}<span class="cm-variable-2">r</span>[<span class="cm-number">2</span>]<span class="cm-operator">&amp;&amp;</span><span class="cm-variable-2">s</span>.<span class="cm-property">ops</span>.<span class="cm-property">pop</span>(),<span class="cm-variable-2">s</span>.<span class="cm-property">trys</span>.<span class="cm-property">pop</span>();<span class="cm-keyword">continue</span>}<span class="cm-variable-2">i</span><span class="cm-operator">=</span><span class="cm-variable-2">t</span>.<span class="cm-property">call</span>(<span class="cm-variable-2">e</span>,<span class="cm-variable-2">s</span>)}<span class="cm-keyword">catch</span>(<span class="cm-def">e</span>){<span class="cm-variable-2">i</span><span class="cm-operator">=</span>[<span class="cm-number">6</span>,<span class="cm-variable-2">e</span>],o=0}finally{n=r=0}if(5&amp;i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var r="browser-tabs-lock-key";function i(e){return new Promise(function(t){return setTimeout(t,e)})}function s(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",o=0;o&lt;e;o++){n+=t[Math.floor(61*Math.random())]}return n}var a=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+s(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&amp;&amp;(e.waiters=[])}return e.prototype.acquireLock=function(t,a){return void 0===a&amp;&amp;(a=5e3),n(this,void 0,void 0,function(){var n,c,u,l,d,h;return o(this,function(o){switch(o.label){case 0:n=Date.now()+s(4),c=Date.now()+a,u=r+"-"+t,l=window.localStorage,o.label=1;case 1:return Date.now()&lt;c?[4,i(30)]:[3,8];case 2:return o.sent(),null!==l.getItem(u)?[3,5]:(d=this.id+"-"+t+"-"+n,[4,i(Math.floor(25*Math.random()))]);case 3:return o.sent(),l.setItem(u,JSON.stringify({id:this.id,iat:n,timeoutKey:d,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,i(30)];case 4:return o.sent(),null!==(h=l.getItem(u))&amp;&amp;(h=JSON.parse(h)).id===this.id&amp;&amp;h.iat===n?(this.acquiredIatSet.add(n),this.refreshLockWhileAcquired(u,n),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(c)];case 6:o.sent(),o.label=7;case 7:return n=Date.now()+s(4),[3,1];case 8:return[2,!1]}})})},e.prototype.refreshLockWhileAcquired=function(e,t){return n(this,void 0,void 0,function(){var r=this;return o(this,function(i){return setTimeout(function(){return n(r,void 0,void 0,function(){var n,r;return o(this,function(o){switch(o.label){case 0:return[4,T.default().lock(t)];case 1:return o.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(r=n.getItem(e))?(T.default().unlock(t),[2]):((r=JSON.parse(r)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(r)),T.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(T.default().unlock(t),[2])}})})},1e3),[2]})})},e.prototype.waitForSomethingToChange=function(t){return n(this,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,new Promise(function(n){var o=!1,r=Date.now(),i=!1;function s(){if(i||(window.removeEventListener("storage",s),e.removeFromWaiting(s),clearTimeout(a),i=!0),!o){o=!0;var t=50-(Date.now()-r);t&gt;0?setTimeout(n,t):n()}}window.addEventListener("storage",s),e.addToWaiting(s);var a=setTimeout(s,Math.max(0,t-Date.now()))})];case 1:return n.sent(),[2]}})})},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&amp;&amp;e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&amp;&amp;(e.waiters=e.waiters.filter(function(e){return e!==t}))},e.notifyWaiters=function(){void 0!==e.waiters&amp;&amp;e.waiters.slice().forEach(function(e){return e()})},e.prototype.releaseLock=function(e){return n(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}})})},e.prototype.releaseLock__private__=function(t){return n(this,void 0,void 0,function(){var n,i,s;return o(this,function(o){switch(o.label){case 0:return n=window.localStorage,i=r+"-"+t,null===(s=n.getItem(i))?[2]:(s=JSON.parse(s)).id!==this.id?[3,2]:[4,T.default().lock(s.iat)];case 1:o.sent(),this.acquiredIatSet.delete(s.iat),n.removeItem(i),T.default().unlock(s.iat),e.notifyWaiters(),o.label=2;case 2:return[2]}})})},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,o=Object.keys(n),i=!1,s=0;s&lt;o.length;s++){var a=o[s];if(a.includes(r)){var c=n.getItem(a);null!==c&amp;&amp;(void 0===(c=JSON.parse(c)).timeRefreshed&amp;&amp;c.timeAcquired&lt;t||void 0!==c.timeRefreshed&amp;&amp;c.timeRefreshed&lt;t)&amp;&amp;(n.removeItem(a),i=!0)}}i&amp;&amp;e.notifyWaiters()},e.waiters=void 0,e}();t.default=a}),E=I(O),C={timeoutInSeconds:60},x="memory",j={name:"auth0-spa-js",version:"1.22.2"},P=function(){return Date.now()},D=function(e){function t(n,o){var r=e.call(this,o)||this;return r.error=n,r.error_description=o,Object.setPrototypeOf(r,t.prototype),r}return n(t,e),t.fromPayload=function(e){return new t(e.error,e.error_description)},t}(Error),M=function(e){function t(n,o,r,i){void 0===i&amp;&amp;(i=null);var s=e.call(this,n,o)||this;return s.state=r,s.appState=i,Object.setPrototypeOf(s,t.prototype),s}return n(t,e),t}(D),A=function(e){function t(){var n=e.call(this,"timeout","Timeout")||this;return Object.setPrototypeOf(n,t.prototype),n}return n(t,e),t}(D),R=function(e){function t(n){var o=e.call(this)||this;return o.popup=n,Object.setPrototypeOf(o,t.prototype),o}return n(t,e),t}(A),U=function(e){function t(n){var o=e.call(this,"cancelled","Popup closed")||this;return o.popup=n,Object.setPrototypeOf(o,t.prototype),o}return n(t,e),t}(D),F=function(e){function t(n,o,r){var i=e.call(this,n,o)||this;return i.mfa_token=r,Object.setPrototypeOf(i,t.prototype),i}return n(t,e),t}(D),L=function(e){function t(n,o){var r=e.call(this,"missing_refresh_token","Missing Refresh Token (audience: '".concat(z(n,["default"]),"', scope: '").concat(z(o),"')"))||this;return r.audience=n,r.scope=o,Object.setPrototypeOf(r,t.prototype),r}return n(t,e),t}(D);function z(e,t){return void 0===t&amp;&amp;(t=[]),e&amp;&amp;!t.includes(e)?e:""}var N=function(e){return new Promise(function(t,n){var o,r=setInterval(function(){e.popup&amp;&amp;e.popup.closed&amp;&amp;(clearInterval(r),clearTimeout(i),window.removeEventListener("message",o,!1),n(new U(e.popup)))},1e3),i=setTimeout(function(){clearInterval(r),n(new R(e.popup)),window.removeEventListener("message",o,!1)},1e3*(e.timeoutInSeconds||60));o=function(s){if(s.data&amp;&amp;"authorization_response"===s.data.type){if(clearTimeout(i),clearInterval(r),window.removeEventListener("message",o,!1),e.popup.close(),s.data.response.error)return n(D.fromPayload(s.data.response));t(s.data.response)}},window.addEventListener("message",o)})},q=function(){return window.crypto},K=function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",t="";return Array.from(q().getRandomValues(new Uint8Array(43))).forEach(function(n){return t+=e[n%66]}),t},W=function(e){return btoa(e)},J=function(e){var t=e.clientId,n=r(e,["clientId"]);return new URLSearchParams(function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]}).reduce(function(t,n){var r;return o(o({},t),((r={})[n]=e[n],r))},{})}(o({client_id:t},n))).toString()},H=function(e){return i(void 0,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,q().subtle.digest({name:"SHA-256"},(new TextEncoder).encode(e))];case 1:return[2,t.sent()]}})})},B=function(e){return function(e){return decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))}(e.replace(/_/g,"/").replace(/-/g,"+"))},G=function(e){var t=new Uint8Array(e);return function(e){var t={"+":"-","/":"_","=":""};return e.replace(/[+/=]/g,function(e){return t[e]})}(window.btoa(String.fromCharCode.apply(String,c([],a(Array.from(t)),!1))))};var V=function(e,t){return i(void 0,void 0,void 0,function(){var n,o;return s(this,function(r){switch(r.label){case 0:return[4,(i=e,s=t,s=s||{},new Promise(function(e,t){var n=new XMLHttpRequest,o=[],r=[],a={},c=function(){return{ok:2==(n.status/100|0),statusText:n.statusText,status:n.status,url:n.responseURL,text:function(){return Promise.resolve(n.responseText)},json:function(){return Promise.resolve(n.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([n.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return r},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var u in n.open(s.method||"get",i,!0),n.onload=function(){n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),r.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),e(c())},n.onerror=t,n.withCredentials="include"==s.credentials,s.headers)n.setRequestHeader(u,s.headers[u]);n.send(s.body||null)}))];case 1:return n=r.sent(),o={ok:n.ok},[4,n.json()];case 2:return[2,(o.json=r.sent(),o)]}var i,s})})},X=function(e,t,n){return i(void 0,void 0,void 0,function(){var o,r;return s(this,function(i){return o=new AbortController,t.signal=o.signal,[2,Promise.race([V(e,t),new Promise(function(e,t){r=setTimeout(function(){o.abort(),t(new Error("Timeout when executing 'fetch'"))},n)})]).finally(function(){clearTimeout(r)})]})})},Q=function(e,t,n,o,r,a,c){return i(void 0,void 0,void 0,function(){return s(this,function(i){return[2,(s={auth:{audience:t,scope:n},timeout:r,fetchUrl:e,fetchOptions:o,useFormData:c},u=a,new Promise(function(e,t){var n=new MessageChannel;n.port1.onmessage=function(n){n.data.error?t(new Error(n.data.error)):e(n.data)},u.postMessage(s,[n.port2])}))];var s,u})})},$=function(e,t,n,o,r,a,c){return void 0===c&amp;&amp;(c=1e4),i(void 0,void 0,void 0,function(){return s(this,function(i){return r?[2,Q(e,t,n,o,c,r,a)]:[2,X(e,o,c)]})})};function Y(e,t,n,o,a,c,u){return i(this,void 0,void 0,function(){var i,l,d,h,f,p,v,m,y;return s(this,function(s){switch(s.label){case 0:i=null,d=0,s.label=1;case 1:if(!(d&lt;3))return[3,6];s.label=2;case 2:return s.trys.push([2,4,,5]),[4,$(e,n,o,a,c,u,t)];case 3:return l=s.sent(),i=null,[3,6];case 4:return h=s.sent(),i=h,[3,5];case 5:return d++,[3,1];case 6:if(i)throw i.message=i.message||"Failed to fetch",i;if(f=l.json,p=f.error,v=f.error_description,m=r(f,["error","error_description"]),!l.ok){if(y=v||"HTTP error. Unable to fetch ".concat(e),"mfa_required"===p)throw new F(p,y,m.mfa_token);throw new D(p||"request_error",y)}return[2,m]}})})}function Z(e,t){var n=e.baseUrl,o=e.timeout,a=e.audience,c=e.scope,u=e.auth0Client,l=e.useFormData,d=r(e,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);return i(this,void 0,void 0,function(){var e;return s(this,function(r){switch(r.label){case 0:return e=l?J(d):JSON.stringify(d),[4,Y("".concat(n,"/oauth/token"),o,a||"default",c,{method:"POST",body:e,headers:{"Content-Type":l?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(u||j))}},t,l)];case 1:return[2,r.sent()]}})})}var ee=function(){for(var e,t=[],n=0;n&lt;arguments.length;n++)t[n]=arguments[n];return(e=t.join(" ").trim().split(/\s+/),Array.from(new Set(e))).join(" ")},te="@@auth0spajs@@",ne=function(){function e(e,t){void 0===t&amp;&amp;(t=te),this.prefix=t,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience}return e.prototype.toKey=function(){return[this.prefix,this.clientId,this.audience,this.scope].filter(Boolean).join("::")},e.fromKey=function(t){var n=a(t.split("::"),4),o=n[0],r=n[1],i=n[2];return new e({clientId:r,scope:n[3],audience:i},o)},e.fromCacheEntry=function(t){return new e({scope:t.scope,audience:t.audience,clientId:t.client_id})},e}(),oe=function(){function e(){}return e.prototype.set=function(e,t){localStorage.setItem(e,JSON.stringify(t))},e.prototype.get=function(e){var t=window.localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){return}},e.prototype.remove=function(e){localStorage.removeItem(e)},e.prototype.allKeys=function(){return Object.keys(window.localStorage).filter(function(e){return e.startsWith(te)})},e}(),re=function(){var e;this.enclosedCache=(e={},{set:function(t,n){e[t]=n},get:function(t){var n=e[t];if(n)return n},remove:function(t){delete e[t]},allKeys:function(){return Object.keys(e)}})},ie=function(){function e(e,t,n){this.cache=e,this.keyManifest=t,this.nowProvider=n,this.nowProvider=this.nowProvider||P}return e.prototype.get=function(e,t){var n;return void 0===t&amp;&amp;(t=0),i(this,void 0,void 0,function(){var o,r,i,a,c;return s(this,function(s){switch(s.label){case 0:return[4,this.cache.get(e.toKey())];case 1:return(o=s.sent())?[3,4]:[4,this.getCacheKeys()];case 2:return(r=s.sent())?(i=this.matchExistingCacheKey(e,r))?[4,this.cache.get(i)]:[3,4]:[2];case 3:o=s.sent(),s.label=4;case 4:return o?[4,this.nowProvider()]:[2];case 5:return a=s.sent(),c=Math.floor(a/1e3),o.expiresAt-t&lt;c?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},[4,this.cache.set(e.toKey(),o)]):[3,7]:[3,10];case 6:return s.sent(),[2,o.body];case 7:return[4,this.cache.remove(e.toKey())];case 8:return s.sent(),[4,null===(n=this.keyManifest)||void 0===n?void 0:n.remove(e.toKey())];case 9:return s.sent(),[2];case 10:return[2,o.body]}})})},e.prototype.set=function(e){var t;return i(this,void 0,void 0,function(){var n,o;return s(this,function(r){switch(r.label){case 0:return n=new ne({clientId:e.client_id,scope:e.scope,audience:e.audience}),[4,this.wrapCacheEntry(e)];case 1:return o=r.sent(),[4,this.cache.set(n.toKey(),o)];case 2:return r.sent(),[4,null===(t=this.keyManifest)||void 0===t?void 0:t.add(n.toKey())];case 3:return r.sent(),[2]}})})},e.prototype.clear=function(e){var t;return i(this,void 0,void 0,function(){var n,o=this;return s(this,function(r){switch(r.label){case 0:return[4,this.getCacheKeys()];case 1:return(n=r.sent())?[4,n.filter(function(t){return!e||t.includes(e)}).reduce(function(e,t){return i(o,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return[4,e];case 1:return n.sent(),[4,this.cache.remove(t)];case 2:return n.sent(),[2]}})})},Promise.resolve())]:[2];case 2:return r.sent(),[4,null===(t=this.keyManifest)||void 0===t?void 0:t.clear()];case 3:return r.sent(),[2]}})})},e.prototype.clearSync=function(e){var t=this,n=this.cache.allKeys();n&amp;&amp;n.filter(function(t){return!e||t.includes(e)}).forEach(function(e){t.cache.remove(e)})},e.prototype.wrapCacheEntry=function(e){return i(this,void 0,void 0,function(){var t,n;return s(this,function(o){switch(o.label){case 0:return[4,this.nowProvider()];case 1:return t=o.sent(),n=Math.floor(t/1e3)+e.expires_in,[2,{body:e,expiresAt:n}]}})})},e.prototype.getCacheKeys=function(){var e;return i(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return this.keyManifest?[4,this.keyManifest.get()]:[3,2];case 1:return t=null===(e=n.sent())||void 0===e?void 0:e.keys,[3,4];case 2:return[4,this.cache.allKeys()];case 3:t=n.sent(),n.label=4;case 4:return[2,t]}})})},e.prototype.matchExistingCacheKey=function(e,t){return t.filter(function(t){var n,o=ne.fromKey(t),r=new Set(o.scope&amp;&amp;o.scope.split(" ")),i=(null===(n=e.scope)||void 0===n?void 0:n.split(" "))||[],s=o.scope&amp;&amp;i.reduce(function(e,t){return e&amp;&amp;r.has(t)},!0);return o.prefix===te&amp;&amp;o.clientId===e.clientId&amp;&amp;o.audience===e.audience&amp;&amp;s})[0]},e}(),se=function(){function e(e,t){this.storage=e,this.clientId=t,this.storageKey="".concat("a0.spajs.txs",".").concat(this.clientId),this.transaction=this.storage.get(this.storageKey)}return e.prototype.create=function(e){this.transaction=e,this.storage.save(this.storageKey,e,{daysUntilExpire:1})},e.prototype.get=function(){return this.transaction},e.prototype.remove=function(){delete this.transaction,this.storage.remove(this.storageKey)},e}(),ae=function(e){return"number"==typeof e},ce=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],ue=function(e){if(!e.id_token)throw new Error("ID token is required but missing");var t=function(e){var t=e.split("."),n=a(t,3),o=n[0],r=n[1],i=n[2];if(3!==t.length||!o||!r||!i)throw new Error("ID token could not be decoded");var s=JSON.parse(B(r)),c={__raw:e},u={};return Object.keys(s).forEach(function(e){c[e]=s[e],ce.includes(e)||(u[e]=s[e])}),{encoded:{header:o,payload:r,signature:i},header:JSON.parse(B(o)),claims:c,user:u}}(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error('Issuer (iss) claim mismatch in the ID token; expected "'.concat(e.iss,'", found "').concat(t.claims.iss,'"'));if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if("RS256"!==t.header.alg)throw new Error('Signature algorithm of "'.concat(t.header.alg,'" is not supported. Expected the ID token to be signed with "RS256".'));if(!t.claims.aud||"string"!=typeof t.claims.aud&amp;&amp;!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(e.aud,'" but was not one of "').concat(t.claims.aud.join(", "),'"'));if(t.claims.aud.length&gt;1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'.concat(e.aud,'", found "').concat(t.claims.azp,'"'))}}else if(t.claims.aud!==e.aud)throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(e.aud,'" but found "').concat(t.claims.aud,'"'));if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'.concat(e.nonce,'", found "').concat(t.claims.nonce,'"'))}if(e.max_age&amp;&amp;!ae(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(!ae(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!ae(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");var n=e.leeway||60,o=new Date(e.now||Date.now()),r=new Date(0),i=new Date(0),s=new Date(0);if(s.setUTCSeconds(parseInt(t.claims.auth_time)+e.max_age+n),r.setUTCSeconds(t.claims.exp+n),i.setUTCSeconds(t.claims.nbf-n),o&gt;r)throw new Error("Expiration Time (exp) claim error in the ID token; current time (".concat(o,") is after expiration time (").concat(r,")"));if(ae(t.claims.nbf)&amp;&amp;o&lt;i)throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (".concat(o,") is before ").concat(i));if(ae(t.claims.auth_time)&amp;&amp;o&gt;s)throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (".concat(o,") is after last auth at ").concat(s));if(e.organizationId){if(!t.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(e.organizationId!==t.claims.org_id)throw new Error('Organization ID (org_id) claim mismatch in the ID token; expected "'.concat(e.organizationId,'", found "').concat(t.claims.org_id,'"'))}return t},le=S(function(e,t){var n=k&amp;&amp;k.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n&lt;o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&amp;&amp;(e[r]=t[r]);return e},n.apply(this,arguments)};function o(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function r(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return o("Expires",e.expires?e.expires.toUTCString():"")+o("Domain",e.domain)+o("Path",e.path)+o("Secure",e.secure)+o("SameSite",e.sameSite)}(n)}function i(e){for(var t={},n=e?e.split("; "):[],o=/(%[\dA-F]{2})+/gi,r=0;r&lt;n.length;r++){var i=n[r].split("="),s=i.slice(1).join("=");'"'===s.charAt(0)&amp;&amp;(s=s.slice(1,-1));try{t[i[0].replace(o,decodeURIComponent)]=s.replace(o,decodeURIComponent)}catch(e){}}return t}function s(){return i(document.cookie)}function a(e,t,o){document.cookie=r(e,t,n({path:"/"},o))}t.__esModule=!0,t.encode=r,t.parse=i,t.getAll=s,t.get=function(e){return s()[e]},t.set=a,t.remove=function(e,t){a(e,"",n(n({},t),{expires:-1}))}});I(le),le.encode,le.parse,le.getAll;var de=le.get,he=le.set,fe=le.remove,pe={get:function(e){var t=de(e);if(void 0!==t)return JSON.parse(t)},save:function(e,t,n){var o={};"https:"===window.location.protocol&amp;&amp;(o={secure:!0,sameSite:"none"}),(null==n?void 0:n.daysUntilExpire)&amp;&amp;(o.expires=n.daysUntilExpire),(null==n?void 0:n.cookieDomain)&amp;&amp;(o.domain=n.cookieDomain),he(e,JSON.stringify(t),o)},remove:function(e){fe(e)}},ve="_legacy_",me={get:function(e){var t=pe.get(e);return t||pe.get("".concat(ve).concat(e))},save:function(e,t,n){var o={};"https:"===window.location.protocol&amp;&amp;(o={secure:!0}),(null==n?void 0:n.daysUntilExpire)&amp;&amp;(o.expires=n.daysUntilExpire),he("".concat(ve).concat(e),JSON.stringify(t),o),pe.save(e,t,n)},remove:function(e){pe.remove(e),pe.remove("".concat(ve).concat(e))}},ye={get:function(e){if("undefined"!=typeof sessionStorage){var t=sessionStorage.getItem(e);if(void 0!==t)return JSON.parse(t)}},save:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},remove:function(e){sessionStorage.removeItem(e)}};var we,ge,_e,be=(we=function(){!function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&amp;&amp;function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&amp;&amp;(e[n]=t[n])},e(t,n)};function t(t,n){if("function"!=typeof n&amp;&amp;null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}var n=function(){return n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n&lt;o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&amp;&amp;(e[r]=t[r]);return e},n.apply(this,arguments)};function o(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})}function r(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&amp;r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&amp;&amp;(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&amp;&amp;(r=2&amp;i[0]?o.return:i[0]?o.throw||((r=o.return)&amp;&amp;r.call(o),0):o.next)&amp;&amp;!(r=r.call(o,i[1])).done)return r;switch(o=0,r&amp;&amp;(i=[2&amp;i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length&gt;0&amp;&amp;r[r.length-1])||6!==i[0]&amp;&amp;2!==i[0])){s=0;continue}if(3===i[0]&amp;&amp;(!r||i[1]&gt;r[0]&amp;&amp;i[1]&lt;r[3])){s.label=i[1];break}if(6===i[0]&amp;&amp;s.label&lt;r[1]){s.label=r[1],r=i;break}if(r&amp;&amp;s.label&lt;r[2]){s.label=r[2],s.ops.push(i);break}r[2]&amp;&amp;s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&amp;i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var i=function(e){function n(t,o){var r=e.call(this,o)||this;return r.error=t,r.error_description=o,Object.setPrototypeOf(r,n.prototype),r}return t(n,e),n.fromPayload=function(e){return new n(e.error,e.error_description)},n}(Error);!function(e){function n(t,o,r,i){void 0===i&amp;&amp;(i=null);var s=e.call(this,t,o)||this;return s.state=r,s.appState=i,Object.setPrototypeOf(s,n.prototype),s}t(n,e)}(i),function(e){function n(t){var o=e.call(this)||this;return o.popup=t,Object.setPrototypeOf(o,n.prototype),o}t(n,e)}(function(e){function n(){var t=e.call(this,"timeout","Timeout")||this;return Object.setPrototypeOf(t,n.prototype),t}return t(n,e),n}(i)),function(e){function n(t){var o=e.call(this,"cancelled","Popup closed")||this;return o.popup=t,Object.setPrototypeOf(o,n.prototype),o}t(n,e)}(i),function(e){function n(t,o,r){var i=e.call(this,t,o)||this;return i.mfa_token=r,Object.setPrototypeOf(i,n.prototype),i}t(n,e)}(i);var s=function(e){function n(t,o){var r=e.call(this,"missing_refresh_token","Missing Refresh Token (audience: '".concat(a(t,["default"]),"', scope: '").concat(a(o),"')"))||this;return r.audience=t,r.scope=o,Object.setPrototypeOf(r,n.prototype),r}return t(n,e),n}(i);function a(e,t){return void 0===t&amp;&amp;(t=[]),e&amp;&amp;!t.includes(e)?e:""}var c=function(e){var t=e.clientId,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&amp;&amp;t.indexOf(o)&lt;0&amp;&amp;(n[o]=e[o]);if(null!=e&amp;&amp;"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r&lt;o.length;r++)t.indexOf(o[r])&lt;0&amp;&amp;Object.prototype.propertyIsEnumerable.call(e,o[r])&amp;&amp;(n[o[r]]=e[o[r]])}return n}(e,["clientId"]);return new URLSearchParams(function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]}).reduce(function(t,o){var r;return n(n({},t),((r={})[o]=e[o],r))},{})}(n({client_id:t},o))).toString()},u={},l=function(e,t){return"".concat(e,"|").concat(t)};addEventListener("message",function(e){var t=e.data,i=t.timeout,a=t.auth,d=t.fetchUrl,h=t.fetchOptions,f=t.useFormData,p=function(e,t){var n="function"==typeof Symbol&amp;&amp;e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- &gt;0)&amp;&amp;!(o=i.next()).done;)s.push(o.value)}catch(e){r={error:e}}finally{try{o&amp;&amp;!o.done&amp;&amp;(n=i.return)&amp;&amp;n.call(i)}finally{if(r)throw r.error}}return s}(e.ports,1),v=p[0];return o(void 0,void 0,void 0,function(){var e,t,o,p,m,y,w,g,_,b;return r(this,function(r){switch(r.label){case 0:o=(t=a||{}).audience,p=t.scope,r.label=1;case 1:if(r.trys.push([1,7,,8]),!(m=f?(I=h.body,S=new URLSearchParams(I),T={},S.forEach(function(e,t){T[t]=e}),T):JSON.parse(h.body)).refresh_token&amp;&amp;"refresh_token"===m.grant_type){if(y=function(e,t){return u[l(e,t)]}(o,p),!y)throw new s(o,p);h.body=f?c(n(n({},m),{refresh_token:y})):JSON.stringify(n(n({},m),{refresh_token:y}))}w=void 0,"function"==typeof AbortController&amp;&amp;(w=new AbortController,h.signal=w.signal),g=void 0,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,Promise.race([(k=i,new Promise(function(e){return setTimeout(e,k)})),fetch(d,n({},h))])];case 3:return g=r.sent(),[3,5];case 4:return _=r.sent(),v.postMessage({error:_.message}),[2];case 5:return g?[4,g.json()]:(w&amp;&amp;w.abort(),v.postMessage({error:"Timeout when executing 'fetch'"}),[2]);case 6:return(e=r.sent()).refresh_token?(function(e,t,n){u[l(t,n)]=e}(e.refresh_token,o,p),delete e.refresh_token):function(e,t){delete u[l(e,t)]}(o,p),v.postMessage({ok:g.ok,json:e}),[3,8];case 7:return b=r.sent(),v.postMessage({ok:!1,json:{error_description:b.message}}),[3,8];case 8:return[2]}var k,I,S,T})})})}()},ge=null,function(e){return _e=_e||function(e,t){var n=function(e,t){var n=void 0===t?null:t,o=e.toString().split("\n");o.pop(),o.shift();for(var r=o[0].search(/\S/),i=/(['"])__worker_loader_strict__(['"])/g,s=0,a=o.length;s&lt;a;++s)o[s]=o[s].substring(r).replace(i,"$1use strict$2")+"\n";return n&amp;&amp;o.push("//# sourceMappingURL="+n+"\n"),o}(e,t),o=new Blob(n,{type:"application/javascript"});return URL.createObjectURL(o)}(we,ge),new Worker(_e,e)}),ke={},Ie=function(){function e(e,t){this.cache=e,this.clientId=t,this.manifestKey=this.createManifestKeyFrom(this.clientId)}return e.prototype.add=function(e){var t;return i(this,void 0,void 0,function(){var n,o;return s(this,function(r){switch(r.label){case 0:return o=Set.bind,[4,this.cache.get(this.manifestKey)];case 1:return(n=new(o.apply(Set,[void 0,(null===(t=r.sent())||void 0===t?void 0:t.keys)||[]]))).add(e),[4,this.cache.set(this.manifestKey,{keys:c([],a(n),!1)})];case 2:return r.sent(),[2]}})})},e.prototype.remove=function(e){return i(this,void 0,void 0,function(){var t,n;return s(this,function(o){switch(o.label){case 0:return[4,this.cache.get(this.manifestKey)];case 1:return(t=o.sent())?((n=new Set(t.keys)).delete(e),n.size&gt;0?[4,this.cache.set(this.manifestKey,{keys:c([],a(n),!1)})]:[3,3]):[3,5];case 2:case 4:return[2,o.sent()];case 3:return[4,this.cache.remove(this.manifestKey)];case 5:return[2]}})})},e.prototype.get=function(){return this.cache.get(this.manifestKey)},e.prototype.clear=function(){return this.cache.remove(this.manifestKey)},e.prototype.createManifestKeyFrom=function(e){return"".concat(te,"::").concat(e)},e}(),Se=new E,Te="auth0.lock.getTokenSilently",Oe="auth0.is.authenticated",Ee={memory:function(){return(new re).enclosedCache},localstorage:function(){return new oe}},Ce=function(e){return Ee[e]},xe=function(){function e(e){var t,n,i,s;if(this.defaultOptions={useRefreshTokensFallback:!1,useFormData:!0},this.options=o(o({},this.defaultOptions),e),"undefined"!=typeof window&amp;&amp;function(){if(!q())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(void 0===q().subtle)throw new Error("\n &nbsp; &nbsp;  auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n &nbsp;  ")}(),e.cache&amp;&amp;e.cacheLocation&amp;&amp;console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else{if(this.cacheLocation=e.cacheLocation||x,!Ce(this.cacheLocation))throw new Error('Invalid cache location "'.concat(this.cacheLocation,'"'));i=Ce(this.cacheLocation)()}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=!1===e.legacySameSiteCookie?pe:me,this.orgHintCookieName=(s=this.options.clientId,"auth0.".concat(s,".organization_hint")),this.isAuthenticatedCookieName=function(e){return"auth0.".concat(e,".is.authenticated")}(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;var a,c=e.useCookiesForTransactions?this.cookieStorage:ye;this.scope=this.options.scope,this.transactionManager=new se(c,this.options.clientId),this.nowProvider=this.options.nowProvider||P,this.cacheManager=new ie(i,i.allKeys?null:new Ie(i,this.options.clientId),this.nowProvider),this.domainUrl=(a=this.options.domain,/^https?:\/\//.test(a)?a:"https://".concat(a)),this.tokenIssuer=function(e,t){return e?e.startsWith("https://")?e:"https://".concat(e,"/"):"".concat(t,"/")}(this.options.issuer,this.domainUrl),this.defaultScope=ee("openid",void 0!==(null===(n=null===(t=this.options)||void 0===t?void 0:t.advancedOptions)||void 0===n?void 0:n.defaultScope)?this.options.advancedOptions.defaultScope:"openid profile email"),this.options.useRefreshTokens&amp;&amp;(this.scope=ee(this.scope,"offline_access")),"undefined"!=typeof window&amp;&amp;window.Worker&amp;&amp;this.options.useRefreshTokens&amp;&amp;this.cacheLocation===x&amp;&amp;(this.worker=new be),this.customOptions=function(e){return e.advancedOptions,e.audience,e.auth0Client,e.authorizeTimeoutInSeconds,e.cacheLocation,e.cache,e.clientId,e.domain,e.issuer,e.leeway,e.max_age,e.nowProvider,e.redirect_uri,e.scope,e.useRefreshTokens,e.useRefreshTokensFallback,e.useCookiesForTransactions,e.useFormData,r(e,["advancedOptions","audience","auth0Client","authorizeTimeoutInSeconds","cacheLocation","cache","clientId","domain","issuer","leeway","max_age","nowProvider","redirect_uri","scope","useRefreshTokens","useRefreshTokensFallback","useCookiesForTransactions","useFormData"])}(e)}return e.prototype._url=function(e){var t=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||j)));return"".concat(this.domainUrl).concat(e,"&amp;auth0Client=").concat(t)},e.prototype._getParams=function(e,t,n,i,s){var a=this.options;a.useRefreshTokens,a.useCookiesForTransactions,a.useFormData,a.auth0Client,a.cacheLocation,a.advancedOptions,a.detailedResponse,a.nowProvider,a.authorizeTimeoutInSeconds,a.legacySameSiteCookie,a.sessionCheckExpiryDays,a.domain,a.leeway,a.httpTimeoutInSeconds,a.useRefreshTokensFallback;var c=r(a,["useRefreshTokens","useCookiesForTransactions","useFormData","auth0Client","cacheLocation","advancedOptions","detailedResponse","nowProvider","authorizeTimeoutInSeconds","legacySameSiteCookie","sessionCheckExpiryDays","domain","leeway","httpTimeoutInSeconds","useRefreshTokensFallback"]);return o(o(o({},c),e),{scope:ee(this.defaultScope,this.scope,e.scope),response_type:"code",response_mode:"query",state:t,nonce:n,redirect_uri:s||this.options.redirect_uri,code_challenge:i,code_challenge_method:"S256"})},e.prototype._authorizeUrl=function(e){return this._url("/authorize?".concat(J(e)))},e.prototype._verifyIdToken=function(e,t,n){return i(this,void 0,void 0,function(){var o;return s(this,function(r){switch(r.label){case 0:return[4,this.nowProvider()];case 1:return o=r.sent(),[2,ue({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:t,organizationId:n,leeway:this.options.leeway,max_age:this._parseNumber(this.options.max_age),now:o})]}})})},e.prototype._parseNumber=function(e){return"string"!=typeof e?e:parseInt(e,10)||void 0},e.prototype._processOrgIdHint=function(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName)},e.prototype.buildAuthorizeUrl=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._prepareAuthorizeUrl(e)];case 1:return[2,t.sent().url]}})})},e.prototype._prepareAuthorizeUrl=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,o,i,a,c,u,l,d,h,f;return s(this,function(s){switch(s.label){case 0:return t=e.redirect_uri,n=e.appState,o=r(e,["redirect_uri","appState"]),i=W(K()),a=W(K()),c=K(),[4,H(c)];case 1:return u=s.sent(),l=G(u),d=e.fragment?"#".concat(e.fragment):"",h=this._getParams(o,i,a,l,t),f=this._authorizeUrl(h),[2,{nonce:a,code_verifier:c,appState:n,scope:h.scope,audience:h.audience||"default",redirect_uri:h.redirect_uri,state:i,url:f+d}]}})})},e.prototype.loginWithPopup=function(e,t){return i(this,void 0,void 0,function(){var n,i,a,c,u,l,d,h,f,p,v,m,y;return s(this,function(s){switch(s.label){case 0:if(e=e||{},!(t=t||{}).popup&amp;&amp;(t.popup=function(e){var t=window.screenX+(window.innerWidth-400)/2,n=window.screenY+(window.innerHeight-600)/2;return window.open(e,"auth0:authorize:popup","left=".concat(t,",top=").concat(n,",width=").concat(400,",height=").concat(600,",resizable,scrollbars=yes,status=1"))}(""),!t.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");return n=r(e,[]),i=W(K()),a=W(K()),c=K(),[4,H(c)];case 1:return u=s.sent(),l=G(u),d=this._getParams(n,i,a,l,this.options.redirect_uri||window.location.origin),h=this._authorizeUrl(o(o({},d),{response_mode:"web_message"})),t.popup.location.href=h,[4,N(o(o({},t),{timeoutInSeconds:t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}))];case 2:if(f=s.sent(),i!==f.state)throw new Error("Invalid state");return[4,Z({audience:d.audience,scope:d.scope,baseUrl:this.domainUrl,client_id:this.options.clientId,code_verifier:c,code:f.code,grant_type:"authorization_code",redirect_uri:d.redirect_uri,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},this.worker)];case 3:return p=s.sent(),v=e.organization||this.options.organization,[4,this._verifyIdToken(p.id_token,a,v)];case 4:return m=s.sent(),y=o(o({},p),{decodedToken:m,scope:d.scope,audience:d.audience||"default",client_id:this.options.clientId}),[4,this._saveEntryInCache(y)];case 5:return s.sent(),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgIdHint(m.claims.org_id),[2]}})})},e.prototype.getUser=function(){return i(this,void 0,void 0,function(){var e,t,n;return s(this,function(o){switch(o.label){case 0:return e=this.options.audience||"default",t=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,audience:e,scope:t}))];case 1:return[2,(n=o.sent())&amp;&amp;n.decodedToken&amp;&amp;n.decodedToken.user]}})})},e.prototype.getIdTokenClaims=function(){return i(this,void 0,void 0,function(){var e,t,n;return s(this,function(o){switch(o.label){case 0:return e=this.options.audience||"default",t=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,audience:e,scope:t}))];case 1:return[2,(n=o.sent())&amp;&amp;n.decodedToken&amp;&amp;n.decodedToken.claims]}})})},e.prototype.loginWithRedirect=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,i,a,c,u;return s(this,function(s){switch(s.label){case 0:return t=e.onRedirect,n=r(e,["onRedirect"]),i=n.organization||this.options.organization,[4,this._prepareAuthorizeUrl(n)];case 1:return a=s.sent(),c=a.url,u=r(a,["url"]),this.transactionManager.create(o(o({},u),i&amp;&amp;{organizationId:i})),t?[4,t(c)]:[3,3];case 2:return s.sent(),[3,4];case 3:window.location.assign(c),s.label=4;case 4:return[2]}})})},e.prototype.handleRedirectCallback=function(e){return void 0===e&amp;&amp;(e=window.location.href),i(this,void 0,void 0,function(){var t,n,r,i,c,u,l,d,h,f;return s(this,function(s){switch(s.label){case 0:if(0===(t=e.split("?").slice(1)).length)throw new Error("There are no query params available for parsing.");if(n=function(e){e.indexOf("#")&gt;-1&amp;&amp;(e=e.substr(0,e.indexOf("#")));var t=e.split("&amp;"),n={};return t.forEach(function(e){var t=a(e.split("="),2),o=t[0],r=t[1];n[o]=decodeURIComponent(r)}),n.expires_in&amp;&amp;(n.expires_in=parseInt(n.expires_in)),n}(t.join("")),r=n.state,i=n.code,c=n.error,u=n.error_description,!(l=this.transactionManager.get()))throw new Error("Invalid state");if(this.transactionManager.remove(),c)throw new M(c,u,r,l.appState);if(!l.code_verifier||l.state&amp;&amp;l.state!==r)throw new Error("Invalid state");return d={audience:l.audience,scope:l.scope,baseUrl:this.domainUrl,client_id:this.options.clientId,code_verifier:l.code_verifier,grant_type:"authorization_code",code:i,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},void 0!==l.redirect_uri&amp;&amp;(d.redirect_uri=l.redirect_uri),[4,Z(d,this.worker)];case 1:return h=s.sent(),[4,this._verifyIdToken(h.id_token,l.nonce,l.organizationId)];case 2:return f=s.sent(),[4,this._saveEntryInCache(o(o(o(o({},h),{decodedToken:f,audience:l.audience,scope:l.scope}),h.scope?{oauthTokenScope:h.scope}:null),{client_id:this.options.clientId}))];case 3:return s.sent(),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgIdHint(f.claims.org_id),[2,{appState:l.appState}]}})})},e.prototype.checkSession=function(e){return i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get(Oe))return[2];this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(Oe)}t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getTokenSilently(e)];case 2:case 3:return t.sent(),[3,4];case 4:return[2]}})})},e.prototype.getTokenSilently=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,i,a=this;return s(this,function(s){return t=o(o({audience:this.options.audience,cacheMode:"on"},e),{scope:ee(this.defaultScope,this.scope,e.scope)}),n=t.cacheMode,i=r(t,["cacheMode"]),[2,(c=function(){return a._getTokenSilently(o({cacheMode:n},i))},u="".concat(this.options.clientId,"::").concat(i.audience,"::").concat(i.scope),l=ke[u],l||(l=c().finally(function(){delete ke[u],l=null}),ke[u]=l),l)];var c,u,l})})},e.prototype._getTokenSilently=function(e){return void 0===e&amp;&amp;(e={}),i(this,void 0,void 0,function(){var t,n,a,c,u,l,d,h,f;return s(this,function(p){switch(p.label){case 0:return t=e.cacheMode,n=r(e,["cacheMode"]),"off"===t?[3,2]:[4,this._getEntryFromCache({scope:n.scope,audience:n.audience||"default",clientId:this.options.clientId,getDetailedEntry:e.detailedResponse})];case 1:if(a=p.sent())return[2,a];p.label=2;case 2:return"cache-only"===t?[2]:[4,(v=function(){return Se.acquireLock(Te,5e3)},m=10,void 0===m&amp;&amp;(m=3),i(void 0,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:e=0,t.label=1;case 1:return e&lt;m?[4,v()]:[3,4];case 2:if(t.sent())return[2,!0];t.label=3;case 3:return e++,[3,1];case 4:return[2,!1]}})}))];case 3:if(!p.sent())return[3,15];p.label=4;case 4:return p.trys.push([4,,12,14]),"off"===t?[3,6]:[4,this._getEntryFromCache({scope:n.scope,audience:n.audience||"default",clientId:this.options.clientId,getDetailedEntry:e.detailedResponse})];case 5:if(a=p.sent())return[2,a];p.label=6;case 6:return this.options.useRefreshTokens?[4,this._getTokenUsingRefreshToken(n)]:[3,8];case 7:return u=p.sent(),[3,10];case 8:return[4,this._getTokenFromIFrame(n)];case 9:u=p.sent(),p.label=10;case 10:return c=u,[4,this._saveEntryInCache(o({client_id:this.options.clientId},c))];case 11:return p.sent(),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),e.detailedResponse?(l=c.id_token,d=c.access_token,h=c.oauthTokenScope,f=c.expires_in,[2,o(o({id_token:l,access_token:d},h?{scope:h}:null),{expires_in:f})]):[2,c.access_token];case 12:return[4,Se.releaseLock(Te)];case 13:return p.sent(),[7];case 14:return[3,16];case 15:throw new A;case 16:return[2]}var v,m})})},e.prototype.getTokenWithPopup=function(e,t){return void 0===e&amp;&amp;(e={}),void 0===t&amp;&amp;(t={}),i(this,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return e.audience=e.audience||this.options.audience,e.scope=ee(this.defaultScope,this.scope,e.scope),t=o(o({},C),t),[4,this.loginWithPopup(e,t)];case 1:return n.sent(),[4,this.cacheManager.get(new ne({scope:e.scope,audience:e.audience||"default",clientId:this.options.clientId}))];case 2:return[2,n.sent().access_token]}})})},e.prototype.isAuthenticated=function(){return i(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,this.getUser()];case 1:return[2,!!e.sent()]}})})},e.prototype.buildLogoutUrl=function(e){void 0===e&amp;&amp;(e={}),null!==e.clientId?e.clientId=e.clientId||this.options.clientId:delete e.clientId;var t=e.federated,n=r(e,["federated"]),o=t?"&amp;federated":"";return this._url("/v2/logout?".concat(J(n)))+o},e.prototype.logout=function(e){var t=this;void 0===e&amp;&amp;(e={});var n=e.localOnly,o=r(e,["localOnly"]);if(n&amp;&amp;o.federated)throw new Error("It is invalid to set both the `federated` and `localOnly` options to `true`");var i=function(){if(t.cookieStorage.remove(t.orgHintCookieName),t.cookieStorage.remove(t.isAuthenticatedCookieName),!n){var e=t.buildLogoutUrl(o);window.location.assign(e)}};if(this.options.cache)return this.cacheManager.clear().then(function(){return i()});this.cacheManager.clearSync(),i()},e.prototype._getTokenFromIFrame=function(e){return i(this,void 0,void 0,function(){var t,n,i,a,c,u,l,d,h,f,p,v,m,y,w,g,_;return s(this,function(s){switch(s.label){case 0:return t=W(K()),n=W(K()),i=K(),[4,H(i)];case 1:a=s.sent(),c=G(a),e.detailedResponse,u=r(e,["detailedResponse"]),l=this._getParams(u,t,n,c,e.redirect_uri||this.options.redirect_uri||window.location.origin),(d=this.cookieStorage.get(this.orgHintCookieName))&amp;&amp;!l.organization&amp;&amp;(l.organization=d),h=this._authorizeUrl(o(o({},l),{prompt:"none",response_mode:"web_message"})),s.label=2;case 2:if(s.trys.push([2,6,,7]),window.crossOriginIsolated)throw new D("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");return f=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,[4,(b=h,k=this.domainUrl,I=f,void 0===I&amp;&amp;(I=60),new Promise(function(e,t){var n=window.document.createElement("iframe");n.setAttribute("width","0"),n.setAttribute("height","0"),n.style.display="none";var o,r=function(){window.document.body.contains(n)&amp;&amp;(window.document.body.removeChild(n),window.removeEventListener("message",o,!1))},i=setTimeout(function(){t(new A),r()},1e3*I);o=function(n){if(n.origin==k&amp;&amp;n.data&amp;&amp;"authorization_response"===n.data.type){var s=n.source;s&amp;&amp;s.close(),n.data.response.error?t(D.fromPayload(n.data.response)):e(n.data.response),clearTimeout(i),window.removeEventListener("message",o,!1),setTimeout(r,2e3)}},window.addEventListener("message",o,!1),window.document.body.appendChild(n),n.setAttribute("src",b)}))];case 3:if(p=s.sent(),t!==p.state)throw new Error("Invalid state");return v=e.scope,m=e.audience,e.redirect_uri,e.cacheMode,e.timeoutInSeconds,e.detailedResponse,y=r(e,["scope","audience","redirect_uri","cacheMode","timeoutInSeconds","detailedResponse"]),[4,Z(o(o(o({},this.customOptions),y),{scope:v,audience:m,baseUrl:this.domainUrl,client_id:this.options.clientId,code_verifier:i,code:p.code,grant_type:"authorization_code",redirect_uri:l.redirect_uri,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:y.timeout||this.httpTimeoutMs}),this.worker)];case 4:return w=s.sent(),[4,this._verifyIdToken(w.id_token,n)];case 5:return g=s.sent(),this._processOrgIdHint(g.claims.org_id),[2,o(o({},w),{decodedToken:g,scope:l.scope,oauthTokenScope:w.scope,audience:l.audience||"default"})];case 6:throw"login_required"===(_=s.sent()).error&amp;&amp;this.logout({localOnly:!0}),_;case 7:return[2]}var b,k,I})})},e.prototype._getTokenUsingRefreshToken=function(e){return i(this,void 0,void 0,function(){var t,n,i,a,c,u,l,d,h;return s(this,function(s){switch(s.label){case 0:return e.scope=ee(this.defaultScope,this.options.scope,e.scope),[4,this.cacheManager.get(new ne({scope:e.scope,audience:e.audience||"default",clientId:this.options.clientId}))];case 1:return(t=s.sent())&amp;&amp;t.refresh_token||this.worker?[3,4]:this.options.useRefreshTokensFallback?[4,this._getTokenFromIFrame(e)]:[3,3];case 2:return[2,s.sent()];case 3:throw new L(e.audience||"default",e.scope);case 4:n=e.redirect_uri||this.options.redirect_uri||window.location.origin,a=e.scope,c=e.audience,e.cacheMode,e.timeoutInSeconds,e.detailedResponse,u=r(e,["scope","audience","cacheMode","timeoutInSeconds","detailedResponse"]),l="number"==typeof e.timeoutInSeconds?1e3*e.timeoutInSeconds:null,s.label=5;case 5:return s.trys.push([5,7,,10]),[4,Z(o(o(o(o(o({},this.customOptions),u),{audience:c,scope:a,baseUrl:this.domainUrl,client_id:this.options.clientId,grant_type:"refresh_token",refresh_token:t&amp;&amp;t.refresh_token,redirect_uri:n}),l&amp;&amp;{timeout:l}),{auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs}),this.worker)];case 6:return i=s.sent(),[3,10];case 7:return((d=s.sent()).message.indexOf("Missing Refresh Token")&gt;-1||d.message&amp;&amp;d.message.indexOf("invalid refresh token")&gt;-1)&amp;&amp;this.options.useRefreshTokensFallback?[4,this._getTokenFromIFrame(e)]:[3,9];case 8:return[2,s.sent()];case 9:throw d;case 10:return[4,this._verifyIdToken(i.id_token)];case 11:return h=s.sent(),[2,o(o({},i),{decodedToken:h,scope:e.scope,oauthTokenScope:i.scope,audience:e.audience||"default"})]}})})},e.prototype._saveEntryInCache=function(e){return i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this.cacheManager.set(e)];case 1:return t.sent(),[2]}})})},e.prototype._updateIdTokenInCache=function(e){return i(this,void 0,void 0,function(){var t,n,r;return s(this,function(i){switch(i.label){case 0:return t=this.options.audience||"default",n=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,audience:t,scope:n}))];case 1:return r=i.sent(),[4,this.cacheManager.set(o(o({},r),{client_id:this.options.clientId,id_token:e.id_token,decodedToken:e.decodedToken}))];case 2:return i.sent(),[2]}})})},e.prototype._getEntryFromCache=function(e){var t=e.scope,n=e.audience,r=e.clientId,a=e.getDetailedEntry,c=void 0!==a&amp;&amp;a;return i(this,void 0,void 0,function(){var e,i,a,u,l;return s(this,function(s){switch(s.label){case 0:return[4,this.cacheManager.get(new ne({scope:t,audience:n,clientId:r}),60)];case 1:return(e=s.sent())&amp;&amp;e.access_token?c?(i=e.id_token,a=e.access_token,u=e.oauthTokenScope,l=e.expires_in,[2,o(o({id_token:i,access_token:a},u?{scope:u}:null),{expires_in:l})]):[2,e.access_token]:[2]}})})},e.prototype.migrateToV2=function(){return i(this,void 0,void 0,function(){var e,t,n;return s(this,function(o){switch(o.label){case 0:return[4,this.cacheManager.get(new ne({clientId:this.options.clientId}))];case 1:return o.sent()?[2]:(e=this.options.audience||"default",t=ee(this.defaultScope,this.scope),[4,this.cacheManager.get(new ne({clientId:this.options.clientId,scope:t,audience:e}))]);case 2:return(n=o.sent())?[4,this.cacheManager.set({client_id:this.options.clientId,id_token:n.id_token,decodedToken:n.decodedToken})]:[3,4];case 3:o.sent(),o.label=4;case 4:return[2]}})})},e}(),je=function(){};e.Auth0Client=xe,e.AuthenticationError=M,e.CacheKey=ne,e.GenericError=D,e.InMemoryCache=re,e.LocalStorageCache=oe,e.MfaRequiredError=F,e.PopupCancelledError=U,e.PopupTimeoutError=R,e.TimeoutError=A,e.User=je,e.createAuth0Client=function(e){return i(this,void 0,void 0,function(){var t;return s(this,function(n){switch(n.label){case 0:return[4,(t=new xe(e)).checkSession()];case 1:return n.sent(),[2,t]}})})},Object.defineProperty(e,"__esModule",{value:!0})});</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 35px; width: 1px; border-bottom: 0px solid transparent; top: 14468px;"></div><div class="CodeMirror-gutters" style="height: 14503px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div></div></div></div><div class="CodeMirrorPanel_fileSize__7mYzp">59614 bytes</div></div></div></div></div></div></body></html>