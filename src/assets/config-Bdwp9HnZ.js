var e = Object.create
  , t = Object.defineProperty
  , n = Object.getOwnPropertyDescriptor
  , r = Object.getOwnPropertyNames
  , i = Object.getPrototypeOf
  , a = Object.prototype.hasOwnProperty
  , o = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports)
  , s = (e, n) => {
    let r = {};
    for (var i in e)
        t(r, i, {
            get: e[i],
            enumerable: !0
        });
    return n || t(r, Symbol.toStringTag, {
        value: `Module`
    }),
    r
}
  , c = (e, i, o, s) => {
    if (i && typeof i == `object` || typeof i == `function`)
        for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
            d = c[l],
            !a.call(e, d) && d !== o && t(e, d, {
                get: (e => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable
            });
    return e
}
  , l = (n, r, a) => (a = n == null ? {} : e(i(n)),
c(r || !n || !n.__esModule ? t(a, `default`, {
    value: n,
    enumerable: !0
}) : a, n))
  , u = `modulepreload`
  , d = function(e) {
    return `/preview/6bc21650-a756-4b67-be2c-6192ef6de78e/9742679/` + e
}
  , f = {}
  , p = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e = document.getElementsByTagName(`link`)
          , i = document.querySelector(`meta[property=csp-nonce]`)
          , a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: `fulfilled`,
                value: e
            }), e => ({
                status: `rejected`,
                reason: e
            }))))
        }
        r = o(t.map(t => {
            if (t = d(t, n),
            t in f)
                return;
            f[t] = !0;
            let r = t.endsWith(`.css`)
              , i = r ? `[rel="stylesheet"]` : ``;
            if (n)
                for (let n = e.length - 1; n >= 0; n--) {
                    let i = e[n];
                    if (i.href === t && (!r || i.rel === `stylesheet`))
                        return
                }
            else if (document.querySelector(`link[href="${t}"]${i}`))
                return;
            let o = document.createElement(`link`);
            if (o.rel = r ? `stylesheet` : u,
            r || (o.as = `script`),
            o.crossOrigin = ``,
            o.href = t,
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
                return new Promise( (e, n) => {
                    o.addEventListener(`load`, e),
                    o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    function i(e) {
        let t = new Event(`vite:preloadError`,{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return r.then(t => {
        for (let e of t || [])
            e.status === `rejected` && i(e.reason);
        return e().catch(i)
    }
    )
}
  , m = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.portal`)
      , r = Symbol.for(`react.fragment`)
      , i = Symbol.for(`react.strict_mode`)
      , a = Symbol.for(`react.profiler`)
      , o = Symbol.for(`react.consumer`)
      , s = Symbol.for(`react.context`)
      , c = Symbol.for(`react.forward_ref`)
      , l = Symbol.for(`react.suspense`)
      , u = Symbol.for(`react.memo`)
      , d = Symbol.for(`react.lazy`)
      , f = Symbol.for(`react.activity`)
      , p = Symbol.iterator;
    function m(e) {
        return typeof e != `object` || !e ? null : (e = p && e[p] || e[`@@iterator`],
        typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , g = Object.assign
      , _ = {};
    function v(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    v.prototype.isReactComponent = {},
    v.prototype.setState = function(e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
            throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
        this.updater.enqueueSetState(this, e, t, `setState`)
    }
    ,
    v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
    }
    ;
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    var x = b.prototype = new y;
    x.constructor = b,
    g(x, v.prototype),
    x.isPureReactComponent = !0;
    var S = Array.isArray;
    function C() {}
    var w = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
        var i = r.ref;
        return {
            $$typeof: t,
            type: e,
            key: n,
            ref: i === void 0 ? null : i,
            props: r
        }
    }
    function D(e, t) {
        return E(e.type, t, e.props)
    }
    function O(e) {
        return typeof e == `object` && !!e && e.$$typeof === t
    }
    function k(e) {
        var t = {
            "=": `=0`,
            ":": `=2`
        };
        return `$` + e.replace(/[=:]/g, function(e) {
            return t[e]
        })
    }
    var A = /\/+/g;
    function j(e, t) {
        return typeof e == `object` && e && e.key != null ? k(`` + e.key) : t.toString(36)
    }
    function M(e) {
        switch (e.status) {
        case `fulfilled`:
            return e.value;
        case `rejected`:
            throw e.reason;
        default:
            switch (typeof e.status == `string` ? e.then(C, C) : (e.status = `pending`,
            e.then(function(t) {
                e.status === `pending` && (e.status = `fulfilled`,
                e.value = t)
            }, function(t) {
                e.status === `pending` && (e.status = `rejected`,
                e.reason = t)
            })),
            e.status) {
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.reason
            }
        }
        throw e
    }
    function N(e, r, i, a, o) {
        var s = typeof e;
        (s === `undefined` || s === `boolean`) && (e = null);
        var c = !1;
        if (e === null)
            c = !0;
        else
            switch (s) {
            case `bigint`:
            case `string`:
            case `number`:
                c = !0;
                break;
            case `object`:
                switch (e.$$typeof) {
                case t:
                case n:
                    c = !0;
                    break;
                case d:
                    return c = e._init,
                    N(c(e._payload), r, i, a, o)
                }
            }
        if (c)
            return o = o(e),
            c = a === `` ? `.` + j(e, 0) : a,
            S(o) ? (i = ``,
            c != null && (i = c.replace(A, `$&/`) + `/`),
            N(o, r, i, ``, function(e) {
                return e
            })) : o != null && (O(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(A, `$&/`) + `/`) + c)),
            r.push(o)),
            1;
        c = 0;
        var l = a === `` ? `.` : a + `:`;
        if (S(e))
            for (var u = 0; u < e.length; u++)
                a = e[u],
                s = l + j(a, u),
                c += N(a, r, i, s, o);
        else if (u = m(e),
        typeof u == `function`)
            for (e = u.call(e),
            u = 0; !(a = e.next()).done; )
                a = a.value,
                s = l + j(a, u++),
                c += N(a, r, i, s, o);
        else if (s === `object`) {
            if (typeof e.then == `function`)
                return N(M(e), r, i, a, o);
            throw r = String(e),
            Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`)
        }
        return c
    }
    function P(e, t, n) {
        if (e == null)
            return e;
        var r = []
          , i = 0;
        return N(e, r, ``, ``, function(e) {
            return t.call(n, e, i++)
        }),
        r
    }
    function ee(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(),
            t.then(function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                e._result = t)
            }, function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                e._result = t)
            }),
            e._status === -1 && (e._status = 0,
            e._result = t)
        }
        if (e._status === 1)
            return e._result.default;
        throw e._result
    }
    var te = typeof reportError == `function` ? reportError : function(e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`,{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e);
            return
        }
        console.error(e)
    }
      , ne = {
        map: P,
        forEach: function(e, t, n) {
            P(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return P(e, function() {
                t++
            }),
            t
        },
        toArray: function(e) {
            return P(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!O(e))
                throw Error(`React.Children.only expected to receive a single React element child.`);
            return e
        }
    };
    e.Activity = f,
    e.Children = ne,
    e.Component = v,
    e.Fragment = r,
    e.Profiler = a,
    e.PureComponent = b,
    e.StrictMode = i,
    e.Suspense = l,
    e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w,
    e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return w.H.useMemoCache(e)
        }
    },
    e.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }
    ,
    e.cacheSignal = function() {
        return null
    }
    ,
    e.cloneElement = function(e, t, n) {
        if (e == null)
            throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props)
          , i = e.key;
        if (t != null)
            for (a in t.key !== void 0 && (i = `` + t.key),
            t)
                !T.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1)
            r.children = n;
        else if (1 < a) {
            for (var o = Array(a), s = 0; s < a; s++)
                o[s] = arguments[s + 2];
            r.children = o
        }
        return E(e.type, i, r)
    }
    ,
    e.createContext = function(e) {
        return e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        e.Provider = e,
        e.Consumer = {
            $$typeof: o,
            _context: e
        },
        e
    }
    ,
    e.createElement = function(e, t, n) {
        var r, i = {}, a = null;
        if (t != null)
            for (r in t.key !== void 0 && (a = `` + t.key),
            t)
                T.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1)
            i.children = n;
        else if (1 < o) {
            for (var s = Array(o), c = 0; c < o; c++)
                s[c] = arguments[c + 2];
            i.children = s
        }
        if (e && e.defaultProps)
            for (r in o = e.defaultProps,
            o)
                i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i)
    }
    ,
    e.createRef = function() {
        return {
            current: null
        }
    }
    ,
    e.forwardRef = function(e) {
        return {
            $$typeof: c,
            render: e
        }
    }
    ,
    e.isValidElement = O,
    e.lazy = function(e) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: ee
        }
    }
    ,
    e.memo = function(e, t) {
        return {
            $$typeof: u,
            type: e,
            compare: t === void 0 ? null : t
        }
    }
    ,
    e.startTransition = function(e) {
        var t = w.T
          , n = {};
        w.T = n;
        try {
            var r = e()
              , i = w.S;
            i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, te)
        } catch (e) {
            te(e)
        } finally {
            t !== null && n.types !== null && (t.types = n.types),
            w.T = t
        }
    }
    ,
    e.unstable_useCacheRefresh = function() {
        return w.H.useCacheRefresh()
    }
    ,
    e.use = function(e) {
        return w.H.use(e)
    }
    ,
    e.useActionState = function(e, t, n) {
        return w.H.useActionState(e, t, n)
    }
    ,
    e.useCallback = function(e, t) {
        return w.H.useCallback(e, t)
    }
    ,
    e.useContext = function(e) {
        return w.H.useContext(e)
    }
    ,
    e.useDebugValue = function() {}
    ,
    e.useDeferredValue = function(e, t) {
        return w.H.useDeferredValue(e, t)
    }
    ,
    e.useEffect = function(e, t) {
        return w.H.useEffect(e, t)
    }
    ,
    e.useEffectEvent = function(e) {
        return w.H.useEffectEvent(e)
    }
    ,
    e.useId = function() {
        return w.H.useId()
    }
    ,
    e.useImperativeHandle = function(e, t, n) {
        return w.H.useImperativeHandle(e, t, n)
    }
    ,
    e.useInsertionEffect = function(e, t) {
        return w.H.useInsertionEffect(e, t)
    }
    ,
    e.useLayoutEffect = function(e, t) {
        return w.H.useLayoutEffect(e, t)
    }
    ,
    e.useMemo = function(e, t) {
        return w.H.useMemo(e, t)
    }
    ,
    e.useOptimistic = function(e, t) {
        return w.H.useOptimistic(e, t)
    }
    ,
    e.useReducer = function(e, t, n) {
        return w.H.useReducer(e, t, n)
    }
    ,
    e.useRef = function(e) {
        return w.H.useRef(e)
    }
    ,
    e.useState = function(e) {
        return w.H.useState(e)
    }
    ,
    e.useSyncExternalStore = function(e, t, n) {
        return w.H.useSyncExternalStore(e, t, n)
    }
    ,
    e.useTransition = function() {
        return w.H.useTransition()
    }
    ,
    e.version = `19.2.5`
}
))
  , h = o(( (e, t) => {
    t.exports = m()
}
))
  , g = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
        var i = null;
        if (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key`in n)
            for (var a in r = {},
            n)
                a !== `key` && (r[a] = n[a]);
        else
            r = n;
        return n = r.ref,
        {
            $$typeof: t,
            type: e,
            key: i,
            ref: n === void 0 ? null : n,
            props: r
        }
    }
    e.Fragment = n,
    e.jsx = r,
    e.jsxs = r
}
))
  , _ = o(( (e, t) => {
    t.exports = g()
}
))
  , v = l(h(), 1)
  , y = `popstate`;
function b(e) {
    return typeof e == `object` && !!e && `pathname`in e && `search`in e && `hash`in e && `state`in e && `key`in e
}
function x(e={}) {
    function t(e, t) {
        let n = t.state?.masked
          , {pathname: r, search: i, hash: a} = n || e.location;
        return E(``, {
            pathname: r,
            search: i,
            hash: a
        }, t.state && t.state.usr || null, t.state && t.state.key || `default`, n ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash
        } : void 0)
    }
    function n(e, t) {
        return typeof t == `string` ? t : D(t)
    }
    return k(t, n, null, e)
}
function S(e, t) {
    if (e === !1 || e == null)
        throw Error(t)
}
function C(e, t) {
    if (!e) {
        typeof console < `u` && console.warn(t);
        try {
            throw Error(t)
        } catch {}
    }
}
function w() {
    return Math.random().toString(36).substring(2, 10)
}
function T(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t,
        masked: e.unstable_mask ? {
            pathname: e.pathname,
            search: e.search,
            hash: e.hash
        } : void 0
    }
}
function E(e, t, n=null, r, i) {
    return {
        pathname: typeof e == `string` ? e : e.pathname,
        search: ``,
        hash: ``,
        ...typeof t == `string` ? O(t) : t,
        state: n,
        key: t && t.key || r || w(),
        unstable_mask: i
    }
}
function D({pathname: e=`/`, search: t=``, hash: n=``}) {
    return t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
}
function O(e) {
    let t = {};
    if (e) {
        let n = e.indexOf(`#`);
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let r = e.indexOf(`?`);
        r >= 0 && (t.search = e.substring(r),
        e = e.substring(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function k(e, t, n, r={}) {
    let {window: i=document.defaultView, v5Compat: a=!1} = r
      , o = i.history
      , s = `POP`
      , c = null
      , l = u();
    l ?? (l = 0,
    o.replaceState({
        ...o.state,
        idx: l
    }, ``));
    function u() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        s = `POP`;
        let e = u()
          , t = e == null ? null : e - l;
        l = e,
        c && c({
            action: s,
            location: h.location,
            delta: t
        })
    }
    function f(e, t) {
        s = `PUSH`;
        let r = b(e) ? e : E(h.location, e, t);
        n && n(r, e),
        l = u() + 1;
        let d = T(r, l)
          , f = h.createHref(r.unstable_mask || r);
        try {
            o.pushState(d, ``, f)
        } catch (e) {
            if (e instanceof DOMException && e.name === `DataCloneError`)
                throw e;
            i.location.assign(f)
        }
        a && c && c({
            action: s,
            location: h.location,
            delta: 1
        })
    }
    function p(e, t) {
        s = `REPLACE`;
        let r = b(e) ? e : E(h.location, e, t);
        n && n(r, e),
        l = u();
        let i = T(r, l)
          , d = h.createHref(r.unstable_mask || r);
        o.replaceState(i, ``, d),
        a && c && c({
            action: s,
            location: h.location,
            delta: 0
        })
    }
    function m(e) {
        return A(e)
    }
    let h = {
        get action() {
            return s
        },
        get location() {
            return e(i, o)
        },
        listen(e) {
            if (c)
                throw Error(`A history only accepts one active listener`);
            return i.addEventListener(y, d),
            c = e,
            () => {
                i.removeEventListener(y, d),
                c = null
            }
        },
        createHref(e) {
            return t(i, e)
        },
        createURL: m,
        encodeLocation(e) {
            let t = m(e);
            return {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            }
        },
        push: f,
        replace: p,
        go(e) {
            return o.go(e)
        }
    };
    return h
}
function A(e, t=!1) {
    let n = `http://localhost`;
    typeof window < `u` && (n = window.location.origin === `null` ? window.location.href : window.location.origin),
    S(n, `No window.location.(origin|href) available to create URL`);
    let r = typeof e == `string` ? e : D(e);
    return r = r.replace(/ $/, `%20`),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r,n)
}
function j(e, t, n=`/`) {
    return M(e, t, n, !1)
}
function M(e, t, n, r) {
    let i = L((typeof t == `string` ? O(t) : t).pathname || `/`, n);
    if (i == null)
        return null;
    let a = P(e);
    te(a);
    let o = null;
    for (let e = 0; o == null && e < a.length; ++e) {
        let t = fe(i);
        o = ue(a[e], t, r)
    }
    return o
}
function N(e, t) {
    let {route: n, pathname: r, params: i} = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        loaderData: t[n.id],
        handle: n.handle
    }
}
function P(e, t=[], n=[], r=``, i=!1) {
    let a = (e, a, o=i, s) => {
        let c = {
            relativePath: s === void 0 ? e.path || `` : s,
            caseSensitive: e.caseSensitive === !0,
            childrenIndex: a,
            route: e
        };
        if (c.relativePath.startsWith(`/`)) {
            if (!c.relativePath.startsWith(r) && o)
                return;
            S(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            c.relativePath = c.relativePath.slice(r.length)
        }
        let l = R([r, c.relativePath])
          , u = n.concat(c);
        e.children && e.children.length > 0 && (S(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`),
        P(e.children, t, u, l, o)),
        !(e.path == null && !e.index) && t.push({
            path: l,
            score: ce(l, e.index),
            routesMeta: u
        })
    }
    ;
    return e.forEach( (e, t) => {
        if (e.path === `` || !e.path?.includes(`?`))
            a(e, t);
        else
            for (let n of ee(e.path))
                a(e, t, !0, n)
    }
    ),
    t
}
function ee(e) {
    let t = e.split(`/`);
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith(`?`)
      , a = n.replace(/\?$/, ``);
    if (r.length === 0)
        return i ? [a, ``] : [a];
    let o = ee(r.join(`/`))
      , s = [];
    return s.push(...o.map(e => e === `` ? a : [a, e].join(`/`))),
    i && s.push(...o),
    s.map(t => e.startsWith(`/`) && t === `` ? `/` : t)
}
function te(e) {
    e.sort( (e, t) => e.score === t.score ? le(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)) : t.score - e.score)
}
var ne = /^:[\w-]+$/
  , re = 3
  , ie = 2
  , ae = 1
  , oe = 10
  , se = -2
  , F = e => e === `*`;
function ce(e, t) {
    let n = e.split(`/`)
      , r = n.length;
    return n.some(F) && (r += se),
    t && (r += ie),
    n.filter(e => !F(e)).reduce( (e, t) => e + (ne.test(t) ? re : t === `` ? ae : oe), r)
}
function le(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ue(e, t, n=!1) {
    let {routesMeta: r} = e
      , i = {}
      , a = `/`
      , o = [];
    for (let e = 0; e < r.length; ++e) {
        let s = r[e]
          , c = e === r.length - 1
          , l = a === `/` ? t : t.slice(a.length) || `/`
          , u = I({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: c
        }, l)
          , d = s.route;
        if (!u && c && n && !r[r.length - 1].route.index && (u = I({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1
        }, l)),
        !u)
            return null;
        Object.assign(i, u.params),
        o.push({
            params: i,
            pathname: R([a, u.pathname]),
            pathnameBase: xe(R([a, u.pathnameBase])),
            route: d
        }),
        u.pathnameBase !== `/` && (a = R([a, u.pathnameBase]))
    }
    return o
}
function I(e, t) {
    typeof e == `string` && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = de(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let a = i[0]
      , o = a.replace(/(.)\/+$/, `$1`)
      , s = i.slice(1);
    return {
        params: r.reduce( (e, {paramName: t, isOptional: n}, r) => {
            if (t === `*`) {
                let e = s[r] || ``;
                o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`)
            }
            let i = s[r];
            return n && !i ? e[t] = void 0 : e[t] = (i || ``).replace(/%2F/g, `/`),
            e
        }
        , {}),
        pathname: a,
        pathnameBase: o,
        pattern: e
    }
}
function de(e, t=!1, n=!0) {
    C(e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`);
    let r = []
      , i = `^` + e.replace(/\/*\*?$/, ``).replace(/^\/*/, `/`).replace(/[\\.*+^${}|()[\]]/g, `\\$&`).replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
        if (r.push({
            paramName: t,
            isOptional: n != null
        }),
        n) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`
        }
        return `/([^\\/]+)`
    }
    ).replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
    return e.endsWith(`*`) ? (r.push({
        paramName: `*`
    }),
    i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`) : n ? i += `\\/*$` : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i,t ? void 0 : `i`), r]
}
function fe(e) {
    try {
        return e.split(`/`).map(e => decodeURIComponent(e).replace(/\//g, `%2F`)).join(`/`)
    } catch (t) {
        return C(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function L(e, t) {
    if (t === `/`)
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith(`/`) ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== `/` ? null : e.slice(n) || `/`
}
var pe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function me(e, t=`/`) {
    let {pathname: n, search: r=``, hash: i=``} = typeof e == `string` ? O(e) : e, a;
    return n ? (n = be(n),
    a = n.startsWith(`/`) ? he(n.substring(1), `/`) : he(n, t)) : a = t,
    {
        pathname: a,
        search: B(r),
        hash: Se(i)
    }
}
function he(e, t) {
    let n = z(t).split(`/`);
    return e.split(`/`).forEach(e => {
        e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e)
    }
    ),
    n.length > 1 ? n.join(`/`) : `/`
}
function ge(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function _e(e) {
    return e.filter( (e, t) => t === 0 || e.route.path && e.route.path.length > 0)
}
function ve(e) {
    let t = _e(e);
    return t.map( (e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
}
function ye(e, t, n, r=!1) {
    let i;
    typeof e == `string` ? i = O(e) : (i = {
        ...e
    },
    S(!i.pathname || !i.pathname.includes(`?`), ge(`?`, `pathname`, `search`, i)),
    S(!i.pathname || !i.pathname.includes(`#`), ge(`#`, `pathname`, `hash`, i)),
    S(!i.search || !i.search.includes(`#`), ge(`#`, `search`, `hash`, i)));
    let a = e === `` || i.pathname === ``, o = a ? `/` : i.pathname, s;
    if (o == null)
        s = n;
    else {
        let e = t.length - 1;
        if (!r && o.startsWith(`..`)) {
            let t = o.split(`/`);
            for (; t[0] === `..`; )
                t.shift(),
                --e;
            i.pathname = t.join(`/`)
        }
        s = e >= 0 ? t[e] : `/`
    }
    let c = me(i, s)
      , l = o && o !== `/` && o.endsWith(`/`)
      , u = (a || o === `.`) && n.endsWith(`/`);
    return !c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`),
    c
}
var be = e => e.replace(/\/\/+/g, `/`)
  , R = e => be(e.join(`/`))
  , z = e => e.replace(/\/+$/, ``)
  , xe = e => z(e).replace(/^\/*/, `/`)
  , B = e => !e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e
  , Se = e => !e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e
  , Ce = class {
    constructor(e, t, n, r=!1) {
        this.status = e,
        this.statusText = t || ``,
        this.internal = r,
        n instanceof Error ? (this.data = n.toString(),
        this.error = n) : this.data = n
    }
}
;
function we(e) {
    return e != null && typeof e.status == `number` && typeof e.statusText == `string` && typeof e.internal == `boolean` && `data`in e
}
function Te(e) {
    return R(e.map(e => e.route.path).filter(Boolean)) || `/`
}
var Ee = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
function De(e, t) {
    let n = e;
    if (typeof n != `string` || !pe.test(n))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: n
        };
    let r = n
      , i = !1;
    if (Ee)
        try {
            let e = new URL(window.location.href)
              , r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n)
              , a = L(r.pathname, t);
            r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0
        } catch {
            C(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: r,
        isExternal: i,
        to: n
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Oe = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Oe);
var ke = [`GET`, ...Oe];
new Set(ke);
var Ae = v.createContext(null);
Ae.displayName = `DataRouter`;
var je = v.createContext(null);
je.displayName = `DataRouterState`;
var V = v.createContext(!1);
function Me() {
    return v.useContext(V)
}
var Ne = v.createContext({
    isTransitioning: !1
});
Ne.displayName = `ViewTransition`;
var Pe = v.createContext(new Map);
Pe.displayName = `Fetchers`;
var Fe = v.createContext(null);
Fe.displayName = `Await`;
var Ie = v.createContext(null);
Ie.displayName = `Navigation`;
var Le = v.createContext(null);
Le.displayName = `Location`;
var Re = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Re.displayName = `Route`;
var ze = v.createContext(null);
ze.displayName = `RouteError`;
var Be = `REACT_ROUTER_ERROR`
  , Ve = `REDIRECT`
  , He = `ROUTE_ERROR_RESPONSE`;
function Ue(e) {
    if (e.startsWith(`${Be}:${Ve}:{`))
        try {
            let t = JSON.parse(e.slice(28));
            if (typeof t == `object` && t && typeof t.status == `number` && typeof t.statusText == `string` && typeof t.location == `string` && typeof t.reloadDocument == `boolean` && typeof t.replace == `boolean`)
                return t
        } catch {}
}
function We(e) {
    if (e.startsWith(`${Be}:${He}:{`))
        try {
            let t = JSON.parse(e.slice(40));
            if (typeof t == `object` && t && typeof t.status == `number` && typeof t.statusText == `string`)
                return new Ce(t.status,t.statusText,t.data)
        } catch {}
}
function Ge(e, {relative: t}={}) {
    S(Ke(), `useHref() may be used only in the context of a <Router> component.`);
    let {basename: n, navigator: r} = v.useContext(Ie)
      , {hash: i, pathname: a, search: o} = Qe(e, {
        relative: t
    })
      , s = a;
    return n !== `/` && (s = a === `/` ? n : R([n, a])),
    r.createHref({
        pathname: s,
        search: o,
        hash: i
    })
}
function Ke() {
    return v.useContext(Le) != null
}
function qe() {
    return S(Ke(), `useLocation() may be used only in the context of a <Router> component.`),
    v.useContext(Le).location
}
var Je = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function Ye(e) {
    v.useContext(Ie).static || v.useLayoutEffect(e)
}
function Xe() {
    let {isDataRoute: e} = v.useContext(Re);
    return e ? _t() : Ze()
}
function Ze() {
    S(Ke(), `useNavigate() may be used only in the context of a <Router> component.`);
    let e = v.useContext(Ae)
      , {basename: t, navigator: n} = v.useContext(Ie)
      , {matches: r} = v.useContext(Re)
      , {pathname: i} = qe()
      , a = JSON.stringify(ve(r))
      , o = v.useRef(!1);
    return Ye( () => {
        o.current = !0
    }
    ),
    v.useCallback( (r, s={}) => {
        if (C(o.current, Je),
        !o.current)
            return;
        if (typeof r == `number`) {
            n.go(r);
            return
        }
        let c = ye(r, JSON.parse(a), i, s.relative === `path`);
        e == null && t !== `/` && (c.pathname = c.pathname === `/` ? t : R([t, c.pathname])),
        (s.replace ? n.replace : n.push)(c, s.state, s)
    }
    , [t, n, a, i, e])
}
v.createContext(null);
function Qe(e, {relative: t}={}) {
    let {matches: n} = v.useContext(Re)
      , {pathname: r} = qe()
      , i = JSON.stringify(ve(n));
    return v.useMemo( () => ye(e, JSON.parse(i), r, t === `path`), [e, i, r, t])
}
function $e(e, t) {
    return et(e, t)
}
function et(e, t, n) {
    S(Ke(), `useRoutes() may be used only in the context of a <Router> component.`);
    let {navigator: r} = v.useContext(Ie)
      , {matches: i} = v.useContext(Re)
      , a = i[i.length - 1]
      , o = a ? a.params : {}
      , s = a ? a.pathname : `/`
      , c = a ? a.pathnameBase : `/`
      , l = a && a.route;
    {
        let e = l && l.path || ``;
        yt(s, !l || e.endsWith(`*`) || e.endsWith(`*?`), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`)
    }
    let u = qe(), d;
    if (t) {
        let e = typeof t == `string` ? O(t) : t;
        S(c === `/` || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),
        d = e
    } else
        d = u;
    let f = d.pathname || `/`
      , p = f;
    if (c !== `/`) {
        let e = c.replace(/^\//, ``).split(`/`);
        p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`)
    }
    let m = j(e, {
        pathname: p
    });
    C(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `),
    C(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let h = st(m && m.map(e => Object.assign({}, e, {
        params: Object.assign({}, o, e.params),
        pathname: R([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)).pathname : e.pathname]),
        pathnameBase: e.pathnameBase === `/` ? c : R([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)).pathname : e.pathnameBase])
    })), i, n);
    return t && h ? v.createElement(Le.Provider, {
        value: {
            location: {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
                unstable_mask: void 0,
                ...d
            },
            navigationType: `POP`
        }
    }, h) : h
}
function tt() {
    let e = gt()
      , t = we(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = `rgba(200,200,200, 0.5)`
      , i = {
        padding: `0.5rem`,
        backgroundColor: r
    }
      , a = {
        padding: `2px 4px`,
        backgroundColor: r
    }
      , o = null;
    return console.error(`Error handled by React Router default ErrorBoundary:`, e),
    o = v.createElement(v.Fragment, null, v.createElement(`p`, null, `💿 Hey developer 👋`), v.createElement(`p`, null, `You can provide a way better UX than this when your app throws errors by providing your own `, v.createElement(`code`, {
        style: a
    }, `ErrorBoundary`), ` or`, ` `, v.createElement(`code`, {
        style: a
    }, `errorElement`), ` prop on your route.`)),
    v.createElement(v.Fragment, null, v.createElement(`h2`, null, `Unexpected Application Error!`), v.createElement(`h3`, {
        style: {
            fontStyle: `italic`
        }
    }, t), n ? v.createElement(`pre`, {
        style: i
    }, n) : null, o)
}
var nt = v.createElement(tt, null)
  , rt = class extends v.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== `idle` && e.revalidation === `idle` ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        this.props.onError ? this.props.onError(e, t) : console.error(`React Router caught the following error during render`, e)
    }
    render() {
        let e = this.state.error;
        if (this.context && typeof e == `object` && e && `digest`in e && typeof e.digest == `string`) {
            let t = We(e.digest);
            t && (e = t)
        }
        let t = e === void 0 ? this.props.children : v.createElement(Re.Provider, {
            value: this.props.routeContext
        }, v.createElement(ze.Provider, {
            value: e,
            children: this.props.component
        }));
        return this.context ? v.createElement(at, {
            error: e
        }, t) : t
    }
}
;
rt.contextType = V;
var it = new WeakMap;
function at({children: e, error: t}) {
    let {basename: n} = v.useContext(Ie);
    if (typeof t == `object` && t && `digest`in t && typeof t.digest == `string`) {
        let e = Ue(t.digest);
        if (e) {
            let r = it.get(t);
            if (r)
                throw r;
            let i = De(e.location, n);
            if (Ee && !it.get(t))
                if (i.isExternal || e.reloadDocument)
                    window.location.href = i.absoluteURL || i.to;
                else {
                    let n = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(i.to, {
                        replace: e.replace
                    }));
                    throw it.set(t, n),
                    n
                }
            return v.createElement(`meta`, {
                httpEquiv: `refresh`,
                content: `0;url=${i.absoluteURL || i.to}`
            })
        }
    }
    return e
}
function ot({routeContext: e, match: t, children: n}) {
    let r = v.useContext(Ae);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    v.createElement(Re.Provider, {
        value: e
    }, n)
}
function st(e, t=[], n) {
    let r = n?.state;
    if (e == null) {
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if (t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let i = e
      , a = r?.errors;
    if (a != null) {
        let e = i.findIndex(e => e.route.id && a?.[e.route.id] !== void 0);
        S(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),
        i = i.slice(0, Math.min(i.length, e + 1))
    }
    let o = !1
      , s = -1;
    if (n && r) {
        o = r.renderFallback;
        for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
            t.route.id) {
                let {loaderData: e, errors: a} = r
                  , c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
                if (t.route.lazy || c) {
                    n.isStatic && (o = !0),
                    i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
                    break
                }
            }
        }
    }
    let c = n?.onError
      , l = r && c ? (e, t) => {
        c(e, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: Te(r.matches),
            errorInfo: t
        })
    }
    : void 0;
    return i.reduceRight( (e, n, c) => {
        let u, d = !1, f = null, p = null;
        r && (u = a && n.route.id ? a[n.route.id] : void 0,
        f = n.route.errorElement || nt,
        o && (s < 0 && c === 0 ? (yt(`route-fallback`, !1, "No `HydrateFallback` element provided to render during initial hydration"),
        d = !0,
        p = null) : s === c && (d = !0,
        p = n.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, c + 1))
          , h = () => {
            let t;
            return t = u ? f : d ? p : n.route.Component ? v.createElement(n.route.Component, null) : n.route.element ? n.route.element : e,
            v.createElement(ot, {
                match: n,
                routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: r != null
                },
                children: t
            })
        }
        ;
        return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? v.createElement(rt, {
            location: r.location,
            revalidation: r.revalidation,
            component: f,
            error: u,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            },
            onError: l
        }) : h()
    }
    , null)
}
function ct(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function lt(e) {
    let t = v.useContext(Ae);
    return S(t, ct(e)),
    t
}
function ut(e) {
    let t = v.useContext(je);
    return S(t, ct(e)),
    t
}
function dt(e) {
    let t = v.useContext(Re);
    return S(t, ct(e)),
    t
}
function ft(e) {
    let t = dt(e)
      , n = t.matches[t.matches.length - 1];
    return S(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function pt() {
    return ft(`useRouteId`)
}
function mt() {
    return ut(`useNavigation`).navigation
}
function ht() {
    let {matches: e, loaderData: t} = ut(`useMatches`);
    return v.useMemo( () => e.map(e => N(e, t)), [e, t])
}
function gt() {
    let e = v.useContext(ze)
      , t = ut(`useRouteError`)
      , n = ft(`useRouteError`);
    return e === void 0 ? t.errors?.[n] : e
}
function _t() {
    let {router: e} = lt(`useNavigate`)
      , t = ft(`useNavigate`)
      , n = v.useRef(!1);
    return Ye( () => {
        n.current = !0
    }
    ),
    v.useCallback(async (r, i={}) => {
        C(n.current, Je),
        n.current && (typeof r == `number` ? await e.navigate(r) : await e.navigate(r, {
            fromRouteId: t,
            ...i
        }))
    }
    , [e, t])
}
var vt = {};
function yt(e, t, n) {
    !t && !vt[e] && (vt[e] = !0,
    C(!1, n))
}
v.useOptimistic,
v.memo(bt);
function bt({routes: e, future: t, state: n, isStatic: r, onError: i}) {
    return et(e, void 0, {
        state: n,
        isStatic: r,
        onError: i,
        future: t
    })
}
function xt({basename: e=`/`, children: t=null, location: n, navigationType: r=`POP`, navigator: i, static: a=!1, unstable_useTransitions: o}) {
    S(!Ke(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
    let s = e.replace(/^\/*/, `/`)
      , c = v.useMemo( () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {}
    }), [s, i, a, o]);
    typeof n == `string` && (n = O(n));
    let {pathname: l=`/`, search: u=``, hash: d=``, state: f=null, key: p=`default`, unstable_mask: m} = n
      , h = v.useMemo( () => {
        let e = L(l, s);
        return e == null ? null : {
            location: {
                pathname: e,
                search: u,
                hash: d,
                state: f,
                key: p,
                unstable_mask: m
            },
            navigationType: r
        }
    }
    , [s, l, u, d, f, p, r, m]);
    return C(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),
    h == null ? null : v.createElement(Ie.Provider, {
        value: c
    }, v.createElement(Le.Provider, {
        children: t,
        value: h
    }))
}
v.Component;
var St = `get`
  , Ct = `application/x-www-form-urlencoded`;
function wt(e) {
    return typeof HTMLElement < `u` && e instanceof HTMLElement
}
function Tt(e) {
    return wt(e) && e.tagName.toLowerCase() === `button`
}
function Et(e) {
    return wt(e) && e.tagName.toLowerCase() === `form`
}
function Dt(e) {
    return wt(e) && e.tagName.toLowerCase() === `input`
}
function Ot(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function kt(e, t) {
    return e.button === 0 && (!t || t === `_self`) && !Ot(e)
}
var At = null;
function jt() {
    if (At === null)
        try {
            new FormData(document.createElement(`form`),0),
            At = !1
        } catch {
            At = !0
        }
    return At
}
var Mt = new Set([`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`]);
function Nt(e) {
    return e != null && !Mt.has(e) ? (C(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ct}"`),
    null) : e
}
function Pt(e, t) {
    let n, r, i, a, o;
    if (Et(e)) {
        let o = e.getAttribute(`action`);
        r = o ? L(o, t) : null,
        n = e.getAttribute(`method`) || St,
        i = Nt(e.getAttribute(`enctype`)) || Ct,
        a = new FormData(e)
    } else if (Tt(e) || Dt(e) && (e.type === `submit` || e.type === `image`)) {
        let o = e.form;
        if (o == null)
            throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
        let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
        if (r = s ? L(s, t) : null,
        n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || St,
        i = Nt(e.getAttribute(`formenctype`)) || Nt(o.getAttribute(`enctype`)) || Ct,
        a = new FormData(o,e),
        !jt()) {
            let {name: t, type: n, value: r} = e;
            if (n === `image`) {
                let e = t ? `${t}.` : ``;
                a.append(`${e}x`, `0`),
                a.append(`${e}y`, `0`)
            } else
                t && a.append(t, r)
        }
    } else if (wt(e))
        throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
    else
        n = St,
        r = null,
        i = Ct,
        o = e;
    return a && i === `text/plain` && (o = a,
    a = void 0),
    {
        action: r,
        method: n.toLowerCase(),
        encType: i,
        formData: a,
        body: o
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Ft = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`
}
  , It = /[&><\u2028\u2029]/g;
function Lt(e) {
    return e.replace(It, e => Ft[e])
}
function Rt(e, t) {
    if (e === !1 || e == null)
        throw Error(t)
}
function zt(e, t, n, r) {
    let i = typeof e == `string` ? new URL(e,typeof window > `u` ? `server://singlefetch/` : window.location.origin) : e;
    return n ? i.pathname.endsWith(`/`) ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === `/` ? i.pathname = `_root.${r}` : t && L(i.pathname, t) === `/` ? i.pathname = `${z(t)}/_root.${r}` : i.pathname = `${z(i.pathname)}.${r}`,
    i
}
async function Bt(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await p( () => import(e.module), []);
        return t[e.id] = n,
        n
    } catch (t) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(t),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function Vt(e) {
    return e != null && typeof e.page == `string`
}
function Ht(e) {
    return e == null ? !1 : e.href == null ? e.rel === `preload` && typeof e.imageSrcSet == `string` && typeof e.imageSizes == `string` : typeof e.rel == `string` && typeof e.href == `string`
}
async function Ut(e, t, n) {
    return Jt((await Promise.all(e.map(async e => {
        let r = t.routes[e.route.id];
        if (r) {
            let e = await Bt(r, n);
            return e.links ? e.links() : []
        }
        return []
    }
    ))).flat(1).filter(Ht).filter(e => e.rel === `stylesheet` || e.rel === `preload`).map(e => e.rel === `stylesheet` ? {
        ...e,
        rel: `prefetch`,
        as: `style`
    } : {
        ...e,
        rel: `prefetch`
    }))
}
function Wt(e, t, n, r, i, a) {
    let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0
      , s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`];
    return a === `assets` ? t.filter( (e, t) => o(e, t) || s(e, t)) : a === `data` ? t.filter( (t, a) => {
        let c = r.routes[t.route.id];
        if (!c || !c.hasLoader)
            return !1;
        if (o(t, a) || s(t, a))
            return !0;
        if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
                currentUrl: new URL(i.pathname + i.search + i.hash,window.origin),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e,window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0
            });
            if (typeof r == `boolean`)
                return r
        }
        return !0
    }
    ) : []
}
function Gt(e, t, {includeHydrateFallback: n}={}) {
    return Kt(e.map(e => {
        let r = t.routes[e.route.id];
        if (!r)
            return [];
        let i = [r.module];
        return r.clientActionModule && (i = i.concat(r.clientActionModule)),
        r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
        n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)),
        r.imports && (i = i.concat(r.imports)),
        i
    }
    ).flat(1))
}
function Kt(e) {
    return [...new Set(e)]
}
function qt(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t
}
function Jt(e, t) {
    let n = new Set
      , r = new Set(t);
    return e.reduce( (e, i) => {
        if (t && !Vt(i) && i.as === `script` && i.href && r.has(i.href))
            return e;
        let a = JSON.stringify(qt(i));
        return n.has(a) || (n.add(a),
        e.push({
            key: a,
            link: i
        })),
        e
    }
    , [])
}
function Yt() {
    let e = v.useContext(Ae);
    return Rt(e, `You must render this element inside a <DataRouterContext.Provider> element`),
    e
}
function Xt() {
    let e = v.useContext(je);
    return Rt(e, `You must render this element inside a <DataRouterStateContext.Provider> element`),
    e
}
var Zt = v.createContext(void 0);
Zt.displayName = `FrameworkContext`;
function Qt() {
    let e = v.useContext(Zt);
    return Rt(e, `You must render this element inside a <HydratedRouter> element`),
    e
}
function $t(e, t) {
    let n = v.useContext(Zt)
      , [r,i] = v.useState(!1)
      , [a,o] = v.useState(!1)
      , {onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d} = t
      , f = v.useRef(null);
    v.useEffect( () => {
        if (e === `render` && o(!0),
        e === `viewport`) {
            let e = new IntersectionObserver(e => {
                e.forEach(e => {
                    o(e.isIntersecting)
                }
                )
            }
            ,{
                threshold: .5
            });
            return f.current && e.observe(f.current),
            () => {
                e.disconnect()
            }
        }
    }
    , [e]),
    v.useEffect( () => {
        if (r) {
            let e = setTimeout( () => {
                o(!0)
            }
            , 100);
            return () => {
                clearTimeout(e)
            }
        }
    }
    , [r]);
    let p = () => {
        i(!0)
    }
      , m = () => {
        i(!1),
        o(!1)
    }
    ;
    return n ? e === `intent` ? [a, f, {
        onFocus: en(s, p),
        onBlur: en(c, m),
        onMouseEnter: en(l, p),
        onMouseLeave: en(u, m),
        onTouchStart: en(d, p)
    }] : [a, f, {}] : [!1, f, {}]
}
function en(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function tn({page: e, ...t}) {
    let n = Me()
      , {router: r} = Yt()
      , i = v.useMemo( () => j(r.routes, e, r.basename), [r.routes, e, r.basename]);
    return i ? n ? v.createElement(rn, {
        page: e,
        matches: i,
        ...t
    }) : v.createElement(an, {
        page: e,
        matches: i,
        ...t
    }) : null
}
function nn(e) {
    let {manifest: t, routeModules: n} = Qt()
      , [r,i] = v.useState([]);
    return v.useEffect( () => {
        let r = !1;
        return Ut(e, t, n).then(e => {
            r || i(e)
        }
        ),
        () => {
            r = !0
        }
    }
    , [e, t, n]),
    r
}
function rn({page: e, matches: t, ...n}) {
    let r = qe()
      , {future: i} = Qt()
      , {basename: a} = Yt()
      , o = v.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let n = zt(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`)
          , o = !1
          , s = [];
        for (let e of t)
            typeof e.route.shouldRevalidate == `function` ? o = !0 : s.push(e.route.id);
        return o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
    }
    , [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
    return v.createElement(v.Fragment, null, o.map(e => v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
    })))
}
function an({page: e, matches: t, ...n}) {
    let r = qe()
      , {future: i, manifest: a, routeModules: o} = Qt()
      , {basename: s} = Yt()
      , {loaderData: c, matches: l} = Xt()
      , u = v.useMemo( () => Wt(e, t, l, a, r, `data`), [e, t, l, a, r])
      , d = v.useMemo( () => Wt(e, t, l, a, r, `assets`), [e, t, l, a, r])
      , f = v.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let n = new Set
          , l = !1;
        if (t.forEach(e => {
            let t = a.routes[e.route.id];
            !t || !t.hasLoader || (!u.some(t => t.route.id === e.route.id) && e.route.id in c && o[e.route.id]?.shouldRevalidate || t.hasClientLoader ? l = !0 : n.add(e.route.id))
        }
        ),
        n.size === 0)
            return [];
        let d = zt(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
        return l && n.size > 0 && d.searchParams.set(`_routes`, t.filter(e => n.has(e.route.id)).map(e => e.route.id).join(`,`)),
        [d.pathname + d.search]
    }
    , [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o])
      , p = v.useMemo( () => Gt(d, a), [d, a])
      , m = nn(d);
    return v.createElement(v.Fragment, null, f.map(e => v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
    })), p.map(e => v.createElement(`link`, {
        key: e,
        rel: `modulepreload`,
        href: e,
        ...n
    })), m.map( ({key: e, link: t}) => v.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin
    })))
}
function on(...e) {
    return t => {
        e.forEach(e => {
            typeof e == `function` ? e(t) : e != null && (e.current = t)
        }
        )
    }
}
v.Component;
var sn = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
try {
    sn && (window.__reactRouterVersion = `7.14.2`)
} catch {}
function cn({basename: e, children: t, unstable_useTransitions: n, window: r}) {
    let i = v.useRef();
    i.current ??= x({
        window: r,
        v5Compat: !0
    });
    let a = i.current
      , [o,s] = v.useState({
        action: a.action,
        location: a.location
    })
      , c = v.useCallback(e => {
        n === !1 ? s(e) : v.startTransition( () => s(e))
    }
    , [n]);
    return v.useLayoutEffect( () => a.listen(c), [a, c]),
    v.createElement(xt, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: a,
        unstable_useTransitions: n
    })
}
function ln({basename: e, children: t, history: n, unstable_useTransitions: r}) {
    let[i,a] = v.useState({
        action: n.action,
        location: n.location
    })
      , o = v.useCallback(e => {
        r === !1 ? a(e) : v.startTransition( () => a(e))
    }
    , [r]);
    return v.useLayoutEffect( () => n.listen(o), [n, o]),
    v.createElement(xt, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: n,
        unstable_useTransitions: r
    })
}
ln.displayName = `unstable_HistoryRouter`;
var un = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , dn = v.forwardRef(function({onClick: e, discover: t=`render`, prefetch: n=`none`, relative: r, reloadDocument: i, replace: a, unstable_mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, unstable_defaultShouldRevalidate: f, ...p}, m) {
    let {basename: h, navigator: g, unstable_useTransitions: _} = v.useContext(Ie)
      , y = typeof l == `string` && un.test(l)
      , b = De(l, h);
    l = b.to;
    let x = Ge(l, {
        relative: r
    })
      , S = qe()
      , C = null;
    if (o) {
        let e = ye(o, [], S.unstable_mask ? S.unstable_mask.pathname : `/`, !0);
        h !== `/` && (e.pathname = e.pathname === `/` ? h : R([h, e.pathname])),
        C = g.createHref(e)
    }
    let[w,T,E] = $t(n, p)
      , D = vn(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: _
    });
    function O(t) {
        e && e(t),
        t.defaultPrevented || D(t)
    }
    let k = !(b.isExternal || i)
      , A = v.createElement(`a`, {
        ...p,
        ...E,
        href: (k ? C : void 0) || b.absoluteURL || x,
        onClick: k ? O : e,
        ref: on(m, T),
        target: c,
        "data-discover": !y && t === `render` ? `true` : void 0
    });
    return w && !y ? v.createElement(v.Fragment, null, A, v.createElement(tn, {
        page: x
    })) : A
});
dn.displayName = `Link`;
var fn = v.forwardRef(function({"aria-current": e=`page`, caseSensitive: t=!1, className: n=``, end: r=!1, style: i, to: a, viewTransition: o, children: s, ...c}, l) {
    let u = Qe(a, {
        relative: c.relative
    })
      , d = qe()
      , f = v.useContext(je)
      , {navigator: p, basename: m} = v.useContext(Ie)
      , h = f != null && On(u) && o === !0
      , g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname
      , _ = d.pathname
      , y = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    t || (_ = _.toLowerCase(),
    y = y ? y.toLowerCase() : null,
    g = g.toLowerCase()),
    y && m && (y = L(y, m) || y);
    let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length, x = _ === g || !r && _.startsWith(g) && _.charAt(b) === `/`, S = y != null && (y === g || !r && y.startsWith(g) && y.charAt(g.length) === `/`), C = {
        isActive: x,
        isPending: S,
        isTransitioning: h
    }, w = x ? e : void 0, T;
    T = typeof n == `function` ? n(C) : [n, x ? `active` : null, S ? `pending` : null, h ? `transitioning` : null].filter(Boolean).join(` `);
    let E = typeof i == `function` ? i(C) : i;
    return v.createElement(dn, {
        ...c,
        "aria-current": w,
        className: T,
        ref: l,
        style: E,
        to: a,
        viewTransition: o
    }, typeof s == `function` ? s(C) : s)
});
fn.displayName = `NavLink`;
var pn = v.forwardRef( ({discover: e=`render`, fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o=St, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, unstable_defaultShouldRevalidate: f, ...p}, m) => {
    let {unstable_useTransitions: h} = v.useContext(Ie)
      , g = xn()
      , _ = Sn(s, {
        relative: l
    })
      , y = o.toLowerCase() === `get` ? `get` : `post`
      , b = typeof s == `string` && un.test(s);
    return v.createElement(`form`, {
        ref: m,
        method: y,
        action: _,
        onSubmit: r ? c : e => {
            if (c && c(e),
            e.defaultPrevented)
                return;
            e.preventDefault();
            let r = e.nativeEvent.submitter
              , s = r?.getAttribute(`formmethod`) || o
              , p = () => g(r || e.currentTarget, {
                fetcherKey: t,
                method: s,
                navigate: n,
                replace: i,
                state: a,
                relative: l,
                preventScrollReset: u,
                viewTransition: d,
                unstable_defaultShouldRevalidate: f
            });
            h && n !== !1 ? v.startTransition( () => p()) : p()
        }
        ,
        ...p,
        "data-discover": !b && e === `render` ? `true` : void 0
    })
}
);
pn.displayName = `Form`;
function mn({getKey: e, storageKey: t, ...n}) {
    let r = v.useContext(Zt)
      , {basename: i} = v.useContext(Ie)
      , a = qe()
      , o = ht();
    En({
        getKey: e,
        storageKey: t
    });
    let s = v.useMemo( () => {
        if (!r || !e)
            return null;
        let t = Tn(a, o, i, e);
        return t === a.key ? null : t
    }
    , []);
    if (!r || r.isSpaMode)
        return null;
    let c = ( (e, t) => {
        if (!window.history.state || !window.history.state.key) {
            let e = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key: e
            }, ``)
        }
        try {
            let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[t || window.history.state.key];
            typeof n == `number` && window.scrollTo(0, n)
        } catch (t) {
            console.error(t),
            sessionStorage.removeItem(e)
        }
    }
    ).toString();
    return v.createElement(`script`, {
        ...n,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: `(${c})(${Lt(JSON.stringify(t || Cn))}, ${Lt(JSON.stringify(s))})`
        }
    })
}
mn.displayName = `ScrollRestoration`;
function hn(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function gn(e) {
    let t = v.useContext(Ae);
    return S(t, hn(e)),
    t
}
function _n(e) {
    let t = v.useContext(je);
    return S(t, hn(e)),
    t
}
function vn(e, {target: t, replace: n, unstable_mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, unstable_defaultShouldRevalidate: c, unstable_useTransitions: l}={}) {
    let u = Xe()
      , d = qe()
      , f = Qe(e, {
        relative: o
    });
    return v.useCallback(p => {
        if (kt(p, t)) {
            p.preventDefault();
            let t = n === void 0 ? D(d) === D(f) : n
              , m = () => u(e, {
                replace: t,
                unstable_mask: r,
                state: i,
                preventScrollReset: a,
                relative: o,
                viewTransition: s,
                unstable_defaultShouldRevalidate: c
            });
            l ? v.startTransition( () => m()) : m()
        }
    }
    , [d, u, f, n, r, i, t, e, a, o, s, c, l])
}
var yn = 0
  , bn = () => `__${String(++yn)}__`;
function xn() {
    let {router: e} = gn(`useSubmit`)
      , {basename: t} = v.useContext(Ie)
      , n = pt()
      , r = e.fetch
      , i = e.navigate;
    return v.useCallback(async (e, a={}) => {
        let {action: o, method: s, encType: c, formData: l, body: u} = Pt(e, t);
        a.navigate === !1 ? await r(a.fetcherKey || bn(), n, a.action || o, {
            unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync
        }) : await i(a.action || o, {
            unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
        })
    }
    , [r, i, t, n])
}
function Sn(e, {relative: t}={}) {
    let {basename: n} = v.useContext(Ie)
      , r = v.useContext(Re);
    S(r, `useFormAction must be used inside a RouteContext`);
    let[i] = r.matches.slice(-1)
      , a = {
        ...Qe(e || `.`, {
            relative: t
        })
    }
      , o = qe();
    if (e == null) {
        a.search = o.search;
        let e = new URLSearchParams(a.search)
          , t = e.getAll(`index`);
        if (t.some(e => e === ``)) {
            e.delete(`index`),
            t.filter(e => e).forEach(t => e.append(`index`, t));
            let n = e.toString();
            a.search = n ? `?${n}` : ``
        }
    }
    return (!e || e === `.`) && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : R([n, a.pathname])),
    D(a)
}
var Cn = `react-router-scroll-positions`
  , wn = {};
function Tn(e, t, n, r) {
    let i = null;
    return r && (i = r(n === `/` ? e : {
        ...e,
        pathname: L(e.pathname, n) || e.pathname
    }, t)),
    i ??= e.key,
    i
}
function En({getKey: e, storageKey: t}={}) {
    let {router: n} = gn(`useScrollRestoration`)
      , {restoreScrollPosition: r, preventScrollReset: i} = _n(`useScrollRestoration`)
      , {basename: a} = v.useContext(Ie)
      , o = qe()
      , s = ht()
      , c = mt();
    v.useEffect( () => (window.history.scrollRestoration = `manual`,
    () => {
        window.history.scrollRestoration = `auto`
    }
    ), []),
    Dn(v.useCallback( () => {
        if (c.state === `idle`) {
            let t = Tn(o, s, a, e);
            wn[t] = window.scrollY
        }
        try {
            sessionStorage.setItem(t || Cn, JSON.stringify(wn))
        } catch (e) {
            C(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)
        }
        window.history.scrollRestoration = `auto`
    }
    , [c.state, e, a, o, s, t])),
    typeof document < `u` && (v.useLayoutEffect( () => {
        try {
            let e = sessionStorage.getItem(t || Cn);
            e && (wn = JSON.parse(e))
        } catch {}
    }
    , [t]),
    v.useLayoutEffect( () => {
        let t = n?.enableScrollRestoration(wn, () => window.scrollY, e ? (t, n) => Tn(t, n, a, e) : void 0);
        return () => t && t()
    }
    , [n, a, e]),
    v.useLayoutEffect( () => {
        if (r !== !1) {
            if (typeof r == `number`) {
                window.scrollTo(0, r);
                return
            }
            try {
                if (o.hash) {
                    let e = document.getElementById(decodeURIComponent(o.hash.slice(1)));
                    if (e) {
                        e.scrollIntoView();
                        return
                    }
                }
            } catch {
                C(!1, `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)
            }
            i !== !0 && window.scrollTo(0, 0)
        }
    }
    , [o, r, i]))
}
function Dn(e, t) {
    let {capture: n} = t || {};
    v.useEffect( () => {
        let t = n == null ? void 0 : {
            capture: n
        };
        return window.addEventListener(`pagehide`, e, t),
        () => {
            window.removeEventListener(`pagehide`, e, t)
        }
    }
    , [e, n])
}
function On(e, {relative: t}={}) {
    let n = v.useContext(Ne);
    S(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = gn(`useViewTransitionState`)
      , i = Qe(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let a = L(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , o = L(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return I(i.pathname, o) != null || I(i.pathname, a) != null
}
var H = l(_(), 1);
function kn() {
    let e = qe();
    return (0,
    H.jsxs)(`div`, {
        className: `relative flex flex-col items-center justify-center h-screen text-center px-4`,
        children: [(0,
        H.jsx)(`h1`, {
            className: `absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0`,
            children: `404`
        }), (0,
        H.jsxs)(`div`, {
            className: `relative z-10`,
            children: [(0,
            H.jsx)(`h1`, {
                className: `text-xl md:text-2xl font-semibold mt-6`,
                children: `This page has not been generated`
            }), (0,
            H.jsx)(`p`, {
                className: `mt-2 text-base text-gray-400 font-mono`,
                children: e.pathname
            }), (0,
            H.jsx)(`p`, {
                className: `mt-4 text-lg md:text-xl text-gray-500`,
                children: `Tell me more about this page, so I can generate it`
            })]
        })]
    })
}
function An(e) {
    if (e === void 0)
        throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e
}
function jn(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var Mn = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: {
        lineHeight: ``
    }
}, Nn = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Pn, Fn, In, Ln = 1e8, U = 1 / Ln, Rn = Math.PI * 2, zn = Rn / 4, Bn = 0, Vn = Math.sqrt, Hn = Math.cos, Un = Math.sin, Wn = function(e) {
    return typeof e == `string`
}, Gn = function(e) {
    return typeof e == `function`
}, Kn = function(e) {
    return typeof e == `number`
}, qn = function(e) {
    return e === void 0
}, Jn = function(e) {
    return typeof e == `object`
}, Yn = function(e) {
    return e !== !1
}, Xn = function() {
    return typeof window < `u`
}, Zn = function(e) {
    return Gn(e) || Wn(e)
}, Qn = typeof ArrayBuffer == `function` && ArrayBuffer.isView || function() {}
, $n = Array.isArray, er = /random\([^)]+\)/g, tr = /,\s*/g, nr = /(?:-?\.?\d|\.)+/gi, rr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ar = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, or = /[+-]=-?[.\d]+/, sr = /[^,'"\[\]\s]+/gi, cr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, lr, ur, dr, fr, pr = {}, mr = {}, hr, gr = function(e) {
    return (mr = Jr(e, pr)) && fo
}, _r = function(e, t) {
    return console.warn(`Invalid property`, e, `set to`, t, `Missing plugin? gsap.registerPlugin()`)
}, vr = function(e, t) {
    return !t && console.warn(e)
}, yr = function(e, t) {
    return e && (pr[e] = t) && mr && (mr[e] = t) || pr
}, br = function() {
    return 0
}, xr = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Sr = {
    suppressEvents: !0,
    kill: !1
}, Cr = {
    suppressEvents: !0
}, wr = {}, Tr = [], Er = {}, Dr, Or = {}, kr = {}, Ar = 30, jr = [], Mr = ``, Nr = function(e) {
    var t = e[0], n, r;
    if (Jn(t) || Gn(t) || (e = [e]),
    !(n = (t._gsap || {}).harness)) {
        for (r = jr.length; r-- && !jr[r].targetTest(t); )
            ;
        n = jr[r]
    }
    for (r = e.length; r--; )
        e[r] && (e[r]._gsap || (e[r]._gsap = new xa(e[r],n))) || e.splice(r, 1);
    return e
}, Pr = function(e) {
    return e._gsap || Nr(ji(e))[0]._gsap
}, Fr = function(e, t, n) {
    return (n = e[t]) && Gn(n) ? e[t]() : qn(n) && e.getAttribute && e.getAttribute(t) || n
}, Ir = function(e, t) {
    return (e = e.split(`,`)).forEach(t) || e
}, Lr = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Rr = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, zr = function(e, t) {
    var n = t.charAt(0)
      , r = parseFloat(t.substr(2));
    return e = parseFloat(e),
    n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
}, Br = function(e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; )
        ;
    return r < n
}, Vr = function() {
    var e = Tr.length, t = Tr.slice(0), n, r;
    for (Er = {},
    Tr.length = 0,
    n = 0; n < e; n++)
        r = t[n],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, Hr = function(e) {
    return !!(e._initted || e._startAt || e.add)
}, Ur = function(e, t, n, r) {
    Tr.length && !Fn && Vr(),
    e.render(t, n, r || !!(Fn && t < 0 && Hr(e))),
    Tr.length && !Fn && Vr()
}, Wr = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(sr).length < 2 ? t : Wn(e) ? e.trim() : e
}, Gr = function(e) {
    return e
}, Kr = function(e, t) {
    for (var n in t)
        n in e || (e[n] = t[n]);
    return e
}, qr = function(e) {
    return function(t, n) {
        for (var r in n)
            r in t || r === `duration` && e || r === `ease` || (t[r] = n[r])
    }
}, Jr = function(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}, Yr = function e(t, n) {
    for (var r in n)
        r !== `__proto__` && r !== `constructor` && r !== `prototype` && (t[r] = Jn(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t
}, Xr = function(e, t) {
    var n = {}, r;
    for (r in e)
        r in t || (n[r] = e[r]);
    return n
}, Zr = function(e) {
    var t = e.parent || lr
      , n = e.keyframes ? qr($n(e.keyframes)) : Kr;
    if (Yn(e.inherit))
        for (; t; )
            n(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, Qr = function(e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; )
        ;
    return n < 0
}, $r = function(e, t, n, r, i) {
    n === void 0 && (n = `_first`),
    r === void 0 && (r = `_last`);
    var a = e[r], o;
    if (i)
        for (o = t[i]; a && a[i] > o; )
            a = a._prev;
    return a ? (t._next = a._next,
    a._next = t) : (t._next = e[n],
    e[n] = t),
    t._next ? t._next._prev = t : e[r] = t,
    t._prev = a,
    t.parent = t._dp = e,
    t
}, ei = function(e, t, n, r) {
    n === void 0 && (n = `_first`),
    r === void 0 && (r = `_last`);
    var i = t._prev
      , a = t._next;
    i ? i._next = a : e[n] === t && (e[n] = a),
    a ? a._prev = i : e[r] === t && (e[r] = i),
    t._next = t._prev = t.parent = null
}, ti = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, ni = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var n = e; n; )
            n._dirty = 1,
            n = n.parent;
    return e
}, ri = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, ii = function(e, t, n, r) {
    return e._startAt && (Fn ? e._startAt.revert(Sr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
}, ai = function e(t) {
    return !t || t._ts && e(t.parent)
}, oi = function(e) {
    return e._repeat ? si(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, si = function(e, t) {
    var n = Math.floor(e = Rr(e / t));
    return e && n === e ? n - 1 : n
}, ci = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, li = function(e) {
    return e._end = Rr(e._start + (e._tDur / Math.abs(e._ts || e._rts || U) || 0))
}, ui = function(e, t) {
    var n = e._dp;
    return n && n.smoothChildTiming && e._ts && (e._start = Rr(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    li(e),
    n._dirty || ni(n, e)),
    e
}, di = function(e, t) {
    var n;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = ci(e.rawTime(), t),
    (!t._dur || Ti(0, t.totalDuration(), n) - t._tTime > U) && t.render(n, !0)),
    ni(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime),
                n = n._dp;
        e._zTime = -U
    }
}, fi = function(e, t, n, r) {
    return t.parent && ti(t),
    t._start = Rr((Kn(n) ? n : n || e !== lr ? Si(e, n, t) : e._time) + t._delay),
    t._end = Rr(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    $r(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
    gi(t) || (e._recent = t),
    r || di(e, t),
    e._ts < 0 && ui(e, e._tTime),
    e
}, pi = function(e, t) {
    return (pr.ScrollTrigger || _r(`scrollTrigger`, t)) && pr.ScrollTrigger.create(t, e)
}, mi = function(e, t, n, r, i) {
    if (Aa(e, t, i),
    !e._initted)
        return 1;
    if (!n && e._pt && !Fn && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Dr !== ca.frame)
        return Tr.push(e),
        e._lazy = [i, r],
        1
}, hi = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
}, gi = function(e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`
}, _i = function(e, t, n, r) {
    var i = e.ratio, a = t < 0 || !t && (!e._start && hi(e) && !(!e._initted && gi(e)) || (e._ts < 0 || e._dp._ts < 0) && !gi(e)) ? 0 : 1, o = e._rDelay, s = 0, c, l, u;
    if (o && e._repeat && (s = Ti(0, e._tDur, t),
    l = si(s, o),
    e._yoyo && l & 1 && (a = 1 - a),
    l !== si(e._tTime, o) && (i = 1 - a,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    a !== i || Fn || r || e._zTime === U || !t && e._zTime) {
        if (!e._initted && mi(e, t, r, n, s))
            return;
        for (u = e._zTime,
        e._zTime = t || (n ? U : 0),
        n ||= t && !u,
        e.ratio = a,
        e._from && (a = 1 - a),
        e._time = 0,
        e._tTime = s,
        c = e._pt; c; )
            c.r(a, c.d),
            c = c._next;
        t < 0 && ii(e, t, n, !0),
        e._onUpdate && !n && Ji(e, `onUpdate`),
        s && e._repeat && !n && e.parent && Ji(e, `onRepeat`),
        (t >= e._tDur || t < 0) && e.ratio === a && (a && ti(e, 1),
        !n && !Fn && (Ji(e, a ? `onComplete` : `onReverseComplete`, !0),
        e._prom && e._prom()))
    } else
        e._zTime ||= t
}, vi = function(e, t, n) {
    var r;
    if (n > t)
        for (r = e._first; r && r._start <= n; ) {
            if (r.data === `isPause` && r._start > t)
                return r;
            r = r._next
        }
    else
        for (r = e._last; r && r._start >= n; ) {
            if (r.data === `isPause` && r._start < t)
                return r;
            r = r._prev
        }
}, yi = function(e, t, n, r) {
    var i = e._repeat
      , a = Rr(t) || 0
      , o = e._tTime / e._tDur;
    return o && !r && (e._time *= a / e._dur),
    e._dur = a,
    e._tDur = i ? i < 0 ? 1e10 : Rr(a * (i + 1) + e._rDelay * i) : a,
    o > 0 && !r && ui(e, e._tTime = e._tDur * o),
    e.parent && li(e),
    n || ni(e.parent, e),
    e
}, bi = function(e) {
    return e instanceof Ca ? ni(e) : yi(e, e._dur)
}, xi = {
    _start: 0,
    endTime: br,
    totalDuration: br
}, Si = function e(t, n, r) {
    var i = t.labels, a = t._recent || xi, o = t.duration() >= Ln ? a.endTime(!1) : t._dur, s, c, l;
    return Wn(n) && (isNaN(n) || n in i) ? (c = n.charAt(0),
    l = n.substr(-1) === `%`,
    s = n.indexOf(`=`),
    c === `<` || c === `>` ? (s >= 0 && (n = n.replace(/=/, ``)),
    (c === `<` ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1)) : s < 0 ? (n in i || (i[n] = o),
    i[n]) : (c = parseFloat(n.charAt(s - 1) + n.substr(s + 1)),
    l && r && (c = c / 100 * ($n(r) ? r[0] : r).totalDuration()),
    s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c)) : n == null ? o : +n
}, Ci = function(e, t, n) {
    var r = Kn(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
    if (r && (a.duration = t[1]),
    a.parent = n,
    e) {
        for (o = a,
        s = n; s && !(`immediateRender`in o); )
            o = s.vars.defaults || {},
            s = Yn(s.vars.inherit) && s.parent;
        a.immediateRender = Yn(o.immediateRender),
        e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1]
    }
    return new La(t[0],a,t[i + 1])
}, wi = function(e, t) {
    return e || e === 0 ? t(e) : t
}, Ti = function(e, t, n) {
    return n < e ? e : n > t ? t : n
}, Ei = function(e, t) {
    return !Wn(e) || !(t = cr.exec(e)) ? `` : t[1]
}, Di = function(e, t, n) {
    return wi(n, function(n) {
        return Ti(e, t, n)
    })
}, Oi = [].slice, ki = function(e, t) {
    return e && Jn(e) && `length`in e && (!t && !e.length || e.length - 1 in e && Jn(e[0])) && !e.nodeType && e !== ur
}, Ai = function(e, t, n) {
    return n === void 0 && (n = []),
    e.forEach(function(e) {
        var r;
        return Wn(e) && !t || ki(e, 1) ? (r = n).push.apply(r, ji(e)) : n.push(e)
    }) || n
}, ji = function(e, t, n) {
    return In && !t && In.selector ? In.selector(e) : Wn(e) && !n && (dr || !la()) ? Oi.call((t || fr).querySelectorAll(e), 0) : $n(e) ? Ai(e, n) : ki(e) ? Oi.call(e, 0) : e ? [e] : []
}, Mi = function(e) {
    return e = ji(e)[0] || vr(`Invalid scope`) || {},
    function(t) {
        var n = e.current || e.nativeElement || e;
        return ji(t, n.querySelectorAll ? n : n === e ? vr(`Invalid scope`) || fr.createElement(`div`) : e)
    }
}, Ni = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Pi = function(e) {
    if (Gn(e))
        return e;
    var t = Jn(e) ? e : {
        each: e
    }
      , n = ga(t.ease)
      , r = t.from || 0
      , i = parseFloat(t.base) || 0
      , a = {}
      , o = r > 0 && r < 1
      , s = isNaN(r) || o
      , c = t.axis
      , l = r
      , u = r;
    return Wn(r) ? l = u = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !o && s && (l = r[0],
    u = r[1]),
    function(e, o, d) {
        var f = (d || t).length, p = a[f], m, h, g, _, v, y, b, x, S;
        if (!p) {
            if (S = t.grid === `auto` ? 0 : (t.grid || [1, Ln])[1],
            !S) {
                for (b = -Ln; b < (b = d[S++].getBoundingClientRect().left) && S < f; )
                    ;
                S < f && S--
            }
            for (p = a[f] = [],
            m = s ? Math.min(S, f) * l - .5 : r % S,
            h = S === Ln ? 0 : s ? f * u / S - .5 : r / S | 0,
            b = 0,
            x = Ln,
            y = 0; y < f; y++)
                g = y % S - m,
                _ = h - (y / S | 0),
                p[y] = v = c ? Math.abs(c === `y` ? _ : g) : Vn(g * g + _ * _),
                v > b && (b = v),
                v < x && (x = v);
            r === `random` && Ni(p),
            p.max = b - x,
            p.min = x,
            p.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (S > f ? f - 1 : c ? c === `y` ? f / S : S : Math.max(S, f / S)) || 0) * (r === `edges` ? -1 : 1),
            p.b = f < 0 ? i - f : i,
            p.u = Ei(t.amount || t.each) || 0,
            n = n && f < 0 ? ha(n) : n
        }
        return f = (p[e] - p.min) / p.max || 0,
        Rr(p.b + (n ? n(f) : f) * p.v) + p.u
    }
}, Fi = function(e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function(n) {
        var r = Rr(Math.round(parseFloat(n) / e) * e * t);
        return (r - r % 1) / t + (Kn(n) ? 0 : Ei(n))
    }
}, Ii = function(e, t) {
    var n = $n(e), r, i;
    return !n && Jn(e) && (r = n = e.radius || Ln,
    e.values ? (e = ji(e.values),
    (i = !Kn(e[0])) && (r *= r)) : e = Fi(e.increment)),
    wi(t, n ? Gn(e) ? function(t) {
        return i = e(t),
        Math.abs(i - t) <= r ? i : t
    }
    : function(t) {
        for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = Ln, s = 0, c = e.length, l, u; c--; )
            i ? (l = e[c].x - n,
            u = e[c].y - a,
            l = l * l + u * u) : l = Math.abs(e[c] - n),
            l < o && (o = l,
            s = c);
        return s = !r || o <= r ? e[s] : t,
        i || s === t || Kn(t) ? s : s + Ei(t)
    }
    : Fi(e))
}, Li = function(e, t, n, r) {
    return wi($n(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
        return $n(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r
    })
}, Ri = function() {
    var e = [...arguments];
    return function(t) {
        return e.reduce(function(e, t) {
            return t(e)
        }, t)
    }
}, zi = function(e, t) {
    return function(n) {
        return e(parseFloat(n)) + (t || Ei(n))
    }
}, Bi = function(e, t, n) {
    return Gi(e, t, 0, 1, n)
}, Vi = function(e, t, n) {
    return wi(n, function(n) {
        return e[~~t(n)]
    })
}, Hi = function e(t, n, r) {
    var i = n - t;
    return $n(t) ? Vi(t, e(0, t.length), n) : wi(r, function(e) {
        return (i + (e - t) % i) % i + t
    })
}, Ui = function e(t, n, r) {
    var i = n - t
      , a = i * 2;
    return $n(t) ? Vi(t, e(0, t.length - 1), n) : wi(r, function(e) {
        return e = (a + (e - t) % a) % a || 0,
        t + (e > i ? a - e : e)
    })
}, Wi = function(e) {
    return e.replace(er, function(e) {
        var t = e.indexOf(`[`) + 1
          , n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(tr);
        return Li(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5)
    })
}, Gi = function(e, t, n, r, i) {
    var a = t - e
      , o = r - n;
    return wi(i, function(t) {
        return n + ((t - e) / a * o || 0)
    })
}, Ki = function e(t, n, r, i) {
    var a = isNaN(t + n) ? 0 : function(e) {
        return (1 - e) * t + e * n
    }
    ;
    if (!a) {
        var o = Wn(t), s = {}, c, l, u, d, f;
        if (r === !0 && (i = 1) && (r = null),
        o)
            t = {
                p: t
            },
            n = {
                p: n
            };
        else if ($n(t) && !$n(n)) {
            for (u = [],
            d = t.length,
            f = d - 2,
            l = 1; l < d; l++)
                u.push(e(t[l - 1], t[l]));
            d--,
            a = function(e) {
                e *= d;
                var t = Math.min(f, ~~e);
                return u[t](e - t)
            }
            ,
            r = n
        } else
            i || (t = Jr($n(t) ? [] : {}, t));
        if (!u) {
            for (c in n)
                Ta.call(s, t, c, `get`, n[c]);
            a = function(e) {
                return Ka(e, s) || (o ? t.p : t)
            }
        }
    }
    return wi(r, a)
}, qi = function(e, t, n) {
    var r = e.labels, i = Ln, a, o, s;
    for (a in r)
        o = r[a] - t,
        o < 0 == !!n && o && i > (o = Math.abs(o)) && (s = a,
        i = o);
    return s
}, Ji = function(e, t, n) {
    var r = e.vars, i = r[t], a = In, o = e._ctx, s, c, l;
    if (i)
        return s = r[t + `Params`],
        c = r.callbackScope || e,
        n && Tr.length && Vr(),
        o && (In = o),
        l = s ? i.apply(c, s) : i.call(c),
        In = a,
        l
}, Yi = function(e) {
    return ti(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Fn),
    e.progress() < 1 && Ji(e, `onInterrupt`),
    e
}, Xi, Zi = [], Qi = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        Xn() || e.headless) {
            var t = e.name
              , n = Gn(e)
              , r = t && !n && e.init ? function() {
                this._props = []
            }
            : e
              , i = {
                init: br,
                render: Ka,
                add: Ta,
                kill: Ja,
                modifier: qa,
                rawVars: 0
            }
              , a = {
                targetTest: 0,
                get: 0,
                getSetter: Ha,
                aliases: {},
                register: 0
            };
            if (la(),
            e !== r) {
                if (Or[t])
                    return;
                Kr(r, Kr(Xr(e, i), a)),
                Jr(r.prototype, Jr(i, Xr(e, a))),
                Or[r.prop = t] = r,
                e.targetTest && (jr.push(r),
                wr[t] = 1),
                t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`
            }
            yr(t, r),
            e.register && e.register(fo, r, Za)
        } else
            Zi.push(e)
}, W = 255, $i = {
    aqua: [0, W, W],
    lime: [0, W, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, W],
    navy: [0, 0, 128],
    white: [W, W, W],
    olive: [128, 128, 0],
    yellow: [W, W, 0],
    orange: [W, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [W, 0, 0],
    pink: [W, 192, 203],
    cyan: [0, W, W],
    transparent: [W, W, W, 0]
}, ea = function(e, t, n) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * W + .5 | 0
}, ta = function(e, t, n) {
    var r = e ? Kn(e) ? [e >> 16, e >> 8 & W, e & W] : 0 : $i.black, i, a, o, s, c, l, u, d, f, p;
    if (!r) {
        if (e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)),
        $i[e])
            r = $i[e];
        else if (e.charAt(0) === `#`) {
            if (e.length < 6 && (i = e.charAt(1),
            a = e.charAt(2),
            o = e.charAt(3),
            e = `#` + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``)),
            e.length === 9)
                return r = parseInt(e.substr(1, 6), 16),
                [r >> 16, r >> 8 & W, r & W, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            r = [e >> 16, e >> 8 & W, e & W]
        } else if (e.substr(0, 3) === `hsl`) {
            if (r = p = e.match(nr),
            !t)
                s = r[0] % 360 / 360,
                c = r[1] / 100,
                l = r[2] / 100,
                a = l <= .5 ? l * (c + 1) : l + c - l * c,
                i = l * 2 - a,
                r.length > 3 && (r[3] *= 1),
                r[0] = ea(s + 1 / 3, i, a),
                r[1] = ea(s, i, a),
                r[2] = ea(s - 1 / 3, i, a);
            else if (~e.indexOf(`=`))
                return r = e.match(rr),
                n && r.length < 4 && (r[3] = 1),
                r
        } else
            r = e.match(nr) || $i.transparent;
        r = r.map(Number)
    }
    return t && !p && (i = r[0] / W,
    a = r[1] / W,
    o = r[2] / W,
    u = Math.max(i, a, o),
    d = Math.min(i, a, o),
    l = (u + d) / 2,
    u === d ? s = c = 0 : (f = u - d,
    c = l > .5 ? f / (2 - u - d) : f / (u + d),
    s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4,
    s *= 60),
    r[0] = ~~(s + .5),
    r[1] = ~~(c * 100 + .5),
    r[2] = ~~(l * 100 + .5)),
    n && r.length < 4 && (r[3] = 1),
    r
}, na = function(e) {
    var t = []
      , n = []
      , r = -1;
    return e.split(ia).forEach(function(e) {
        var i = e.match(ir) || [];
        t.push.apply(t, i),
        n.push(r += i.length + 1)
    }),
    t.c = n,
    t
}, ra = function(e, t, n) {
    var r = ``, i = (e + r).match(ia), a = t ? `hsla(` : `rgba(`, o = 0, s, c, l, u;
    if (!i)
        return e;
    if (i = i.map(function(e) {
        return (e = ta(e, t, 1)) && a + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
    }),
    n && (l = na(e),
    s = n.c,
    s.join(r) !== l.c.join(r)))
        for (c = e.replace(ia, `1`).split(ir),
        u = c.length - 1; o < u; o++)
            r += c[o] + (~s.indexOf(o) ? i.shift() || a + `0,0,0,0)` : (l.length ? l : i.length ? i : n).shift());
    if (!c)
        for (c = e.split(ia),
        u = c.length - 1; o < u; o++)
            r += c[o] + i[o];
    return r + c[u]
}, ia = function() {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`, t;
    for (t in $i)
        e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`)
}(), aa = /hsl[a]?\(/, oa = function(e) {
    var t = e.join(` `), n;
    if (ia.lastIndex = 0,
    ia.test(t))
        return n = aa.test(t),
        e[1] = ra(e[1], n),
        e[0] = ra(e[0], n, na(e[1])),
        !0
}, sa, ca = function() {
    var e = Date.now, t = 500, n = 33, r = e(), i = r, a = 1e3 / 240, o = a, s = [], c, l, u, d, f, p, m = function u(m) {
        var h = e() - i, g = m === !0, _, v, y, b;
        if ((h > t || h < 0) && (r += h - n),
        i += h,
        y = i - r,
        _ = y - o,
        (_ > 0 || g) && (b = ++d.frame,
        f = y - d.time * 1e3,
        d.time = y /= 1e3,
        o += _ + (_ >= a ? 4 : a - _),
        v = 1),
        g || (c = l(u)),
        v)
            for (p = 0; p < s.length; p++)
                s[p](y, f, b, m)
    };
    return d = {
        time: 0,
        frame: 0,
        tick: function() {
            m(!0)
        },
        deltaRatio: function(e) {
            return f / (1e3 / (e || 60))
        },
        wake: function() {
            hr && (!dr && Xn() && (ur = dr = window,
            fr = ur.document || {},
            pr.gsap = fo,
            (ur.gsapVersions ||= []).push(fo.version),
            gr(mr || ur.GreenSockGlobals || !ur.gsap && ur || {}),
            Zi.forEach(Qi)),
            u = typeof requestAnimationFrame < `u` && requestAnimationFrame,
            c && d.sleep(),
            l = u || function(e) {
                return setTimeout(e, o - d.time * 1e3 + 1 | 0)
            }
            ,
            sa = 1,
            m(2))
        },
        sleep: function() {
            (u ? cancelAnimationFrame : clearTimeout)(c),
            sa = 0,
            l = br
        },
        lagSmoothing: function(e, r) {
            t = e || 1 / 0,
            n = Math.min(r || 33, t)
        },
        fps: function(e) {
            a = 1e3 / (e || 240),
            o = d.time * 1e3 + a
        },
        add: function(e, t, n) {
            var r = t ? function(t, n, i, a) {
                e(t, n, i, a),
                d.remove(r)
            }
            : e;
            return d.remove(e),
            s[n ? `unshift` : `push`](r),
            la(),
            r
        },
        remove: function(e, t) {
            ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--
        },
        _listeners: s
    },
    d
}(), la = function() {
    return !sa && ca.wake()
}, G = {}, ua = /^[\d.\-M][\d.\-,\s]/, da = /["']/g, fa = function(e) {
    for (var t = {}, n = e.substr(1, e.length - 3).split(`:`), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++)
        s = n[i],
        o = i === a - 1 ? s.length : s.lastIndexOf(`,`),
        c = s.substr(0, o),
        t[r] = isNaN(c) ? c.replace(da, ``).trim() : +c,
        r = s.substr(o + 1).trim();
    return t
}, pa = function(e) {
    var t = e.indexOf(`(`) + 1
      , n = e.indexOf(`)`)
      , r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n)
}, ma = function(e) {
    var t = (e + ``).split(`(`)
      , n = G[t[0]];
    return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf(`{`) ? [fa(t[1])] : pa(e).split(`,`).map(Wr)) : G._CE && ua.test(e) ? G._CE(``, e) : n
}, ha = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, ga = function(e, t) {
    return e && (Gn(e) ? e : G[e] || ma(e)) || t
}, _a = function(e, t, n, r) {
    n === void 0 && (n = function(e) {
        return 1 - t(1 - e)
    }
    ),
    r === void 0 && (r = function(e) {
        return e < .5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2
    }
    );
    var i = {
        easeIn: t,
        easeOut: n,
        easeInOut: r
    }, a;
    return Ir(e, function(e) {
        for (var t in G[e] = pr[e] = i,
        G[a = e.toLowerCase()] = n,
        i)
            G[a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = G[e + `.` + t] = i[t]
    }),
    i
}, va = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, ya = function e(t, n, r) {
    var i = n >= 1 ? n : 1
      , a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1)
      , o = a / Rn * (Math.asin(1 / i) || 0)
      , s = function(e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * Un((e - o) * a) + 1
    }
      , c = t === `out` ? s : t === `in` ? function(e) {
        return 1 - s(1 - e)
    }
    : va(s);
    return a = Rn / a,
    c.config = function(n, r) {
        return e(t, n, r)
    }
    ,
    c
}, ba = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function(e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0
    }
      , i = t === `out` ? r : t === `in` ? function(e) {
        return 1 - r(1 - e)
    }
    : va(r);
    return i.config = function(n) {
        return e(t, n)
    }
    ,
    i
};
Ir(`Linear,Quad,Cubic,Quart,Quint,Strong`, function(e, t) {
    var n = t < 5 ? t + 1 : t;
    _a(e + `,Power` + (n - 1), t ? function(e) {
        return e ** +n
    }
    : function(e) {
        return e
    }
    , function(e) {
        return 1 - (1 - e) ** n
    }, function(e) {
        return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2
    })
}),
G.Linear.easeNone = G.none = G.Linear.easeIn,
_a(`Elastic`, ya(`in`), ya(`out`), ya()),
(function(e, t) {
    var n = 1 / t
      , r = 2 * n
      , i = 2.5 * n
      , a = function(a) {
        return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375
    };
    _a(`Bounce`, function(e) {
        return 1 - a(1 - e)
    }, a)
}
)(7.5625, 2.75),
_a(`Expo`, function(e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
}),
_a(`Circ`, function(e) {
    return -(Vn(1 - e * e) - 1)
}),
_a(`Sine`, function(e) {
    return e === 1 ? 1 : -Hn(e * zn) + 1
}),
_a(`Back`, ba(`in`), ba(`out`), ba()),
G.SteppedEase = G.steps = pr.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e
          , r = e + +!t
          , i = +!!t
          , a = 1 - U;
        return function(e) {
            return ((r * Ti(0, a, e) | 0) + i) * n
        }
    }
},
Nn.ease = G[`quad.out`],
Ir(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function(e) {
    return Mr += e + `,` + e + `Params,`
});
var xa = function(e, t) {
    this.id = Bn++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Fr,
    this.set = t ? t.getSetter : Ha
}
  , Sa = function() {
    function e(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        yi(this, +e.duration, 1, 1),
        this.data = e.data,
        In && (this._ctx = In,
        In.data.push(this)),
        sa || ca.wake()
    }
    var t = e.prototype;
    return t.delay = function(e) {
        return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
        this._delay = e,
        this) : this._delay
    }
    ,
    t.duration = function(e) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(e) {
        return arguments.length ? (this._dirty = 0,
        yi(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(e, t) {
        if (la(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (ui(this, e),
            !n._dp || n.parent || di(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && fi(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === U || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
        Ur(this, e, t)),
        this
    }
    ,
    t.time = function(e, t) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + oi(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
    }
    ,
    t.totalProgress = function(e, t) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    t.progress = function(e, t) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + oi(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
    }
    ,
    t.iteration = function(e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? si(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(e, t) {
        if (!arguments.length)
            return this._rts === -U ? 0 : this._rts;
        if (this._rts === e)
            return this;
        var n = this.parent && this._ts ? ci(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0,
        this._ts = this._ps || e === -U ? 0 : this._rts,
        this.totalTime(Ti(-Math.abs(this._delay), this.totalDuration(), n), t !== !1),
        li(this),
        ri(this)
    }
    ,
    t.paused = function(e) {
        return arguments.length ? (this._ps !== e && (this._ps = e,
        e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (la(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== U && (this._tTime -= U)))),
        this) : this._ps
    }
    ,
    t.startTime = function(e) {
        if (arguments.length) {
            this._start = Rr(e);
            var t = this.parent || this._dp;
            return t && (t._sort || !this.parent) && fi(t, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(e) {
        return this._start + (Yn(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(e) {
        var t = this.parent || this._dp;
        return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ci(t.rawTime(e), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(e) {
        e === void 0 && (e = Cr);
        var t = Fn;
        return Fn = e,
        Hr(this) && (this.timeline && this.timeline.revert(e),
        this.totalTime(-.01, e.suppressEvents)),
        this.data !== `nested` && e.kill !== !1 && this.kill(),
        Fn = t,
        this
    }
    ,
    t.globalTime = function(e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
            n = t._start + n / (Math.abs(t._ts) || 1),
            t = t._dp;
        return !this.parent && this._sat ? this._sat.globalTime(e) : n
    }
    ,
    t.repeat = function(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
        bi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(e) {
        if (arguments.length) {
            var t = this._time;
            return this._rDelay = e,
            bi(this),
            t ? this.time(t) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(e) {
        return arguments.length ? (this._yoyo = e,
        this) : this._yoyo
    }
    ,
    t.seek = function(e, t) {
        return this.totalTime(Si(this, e), Yn(t))
    }
    ,
    t.restart = function(e, t) {
        return this.play().totalTime(e ? -this._delay : 0, Yn(t)),
        this._dur || (this._zTime = -U),
        this
    }
    ,
    t.play = function(e, t) {
        return e != null && this.seek(e, t),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(e, t) {
        return e != null && this.seek(e || this.totalDuration(), t),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(e, t) {
        return e != null && this.seek(e, t),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -U : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -U,
        this
    }
    ,
    t.isActive = function() {
        var e = this.parent || this._dp, t = this._start, n;
        return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - U)
    }
    ,
    t.eventCallback = function(e, t, n) {
        var r = this.vars;
        return arguments.length > 1 ? (t ? (r[e] = t,
        n && (r[e + `Params`] = n),
        e === `onUpdate` && (this._onUpdate = t)) : delete r[e],
        this) : r[e]
    }
    ,
    t.then = function(e) {
        var t = this
          , n = t._prom;
        return new Promise(function(r) {
            var i = Gn(e) ? e : Gr
              , a = function() {
                var e = t.then;
                t.then = null,
                n && n(),
                Gn(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                t.then = e
            };
            t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a
        }
        )
    }
    ,
    t.kill = function() {
        Yi(this)
    }
    ,
    e
}();
Kr(Sa.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -U,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ca = function(e) {
    jn(t, e);
    function t(t, n) {
        var r;
        return t === void 0 && (t = {}),
        r = e.call(this, t) || this,
        r.labels = {},
        r.smoothChildTiming = !!t.smoothChildTiming,
        r.autoRemoveChildren = !!t.autoRemoveChildren,
        r._sort = Yn(t.sortChildren),
        lr && fi(t.parent || lr, An(r), n),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && pi(An(r), t.scrollTrigger),
        r
    }
    var n = t.prototype;
    return n.to = function(e, t, n) {
        return Ci(0, arguments, this),
        this
    }
    ,
    n.from = function(e, t, n) {
        return Ci(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(e, t, n, r) {
        return Ci(2, arguments, this),
        this
    }
    ,
    n.set = function(e, t, n) {
        return t.duration = 0,
        t.parent = this,
        Zr(t).repeatDelay || (t.repeat = 0),
        t.immediateRender = !!t.immediateRender,
        new La(e,t,Si(this, n),1),
        this
    }
    ,
    n.call = function(e, t, n) {
        return fi(this, La.delayedCall(0, e, t), n)
    }
    ,
    n.staggerTo = function(e, t, n, r, i, a, o) {
        return n.duration = t,
        n.stagger = n.stagger || r,
        n.onComplete = a,
        n.onCompleteParams = o,
        n.parent = this,
        new La(e,n,Si(this, i)),
        this
    }
    ,
    n.staggerFrom = function(e, t, n, r, i, a, o) {
        return n.runBackwards = 1,
        Zr(n).immediateRender = Yn(n.immediateRender),
        this.staggerTo(e, t, n, r, i, a, o)
    }
    ,
    n.staggerFromTo = function(e, t, n, r, i, a, o, s) {
        return r.startAt = n,
        Zr(r).immediateRender = Yn(r.immediateRender),
        this.staggerTo(e, t, r, i, a, o, s)
    }
    ,
    n.render = function(e, t, n) {
        var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, a = this._dur, o = e <= 0 ? 0 : Rr(e), s = this._zTime < 0 != e < 0 && (this._initted || !a), c, l, u, d, f, p, m, h, g, _, v, y;
        if (this !== lr && o > i && e >= 0 && (o = i),
        o !== this._tTime || n || s) {
            if (r !== this._time && a && (o += this._time - r,
            e += this._time - r),
            c = o,
            g = this._start,
            h = this._ts,
            p = !h,
            s && (a || (r = this._zTime),
            (e || !t) && (this._zTime = e)),
            this._repeat) {
                if (v = this._yoyo,
                f = a + this._rDelay,
                this._repeat < -1 && e < 0)
                    return this.totalTime(f * 100 + e, t, n);
                if (c = Rr(o % f),
                o === i ? (d = this._repeat,
                c = a) : (_ = Rr(o / f),
                d = ~~_,
                d && d === _ && (c = a,
                d--),
                c > a && (c = a)),
                _ = si(this._tTime, f),
                !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d),
                v && d & 1 && (c = a - c,
                y = 1),
                d !== _ && !this._lock) {
                    var b = v && _ & 1
                      , x = b === (v && d & 1);
                    if (d < _ && (b = !b),
                    r = b ? 0 : o % a ? a : o,
                    this._lock = 1,
                    this.render(r || (y ? 0 : Rr(d * f)), t, !a)._lock = 0,
                    this._tTime = o,
                    !t && this.parent && Ji(this, `onRepeat`),
                    this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1,
                    _ = d),
                    r && r !== this._time || p !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a = this._dur,
                    i = this._tDur,
                    x && (this._lock = 2,
                    r = b ? a : -1e-4,
                    this.render(r, !0),
                    this.vars.repeatRefresh && !y && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !p))
                        return this
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = vi(this, Rr(r), Rr(c)),
            m && (o -= c - (c = m._start))),
            this._tTime = o,
            this._time = c,
            this._act = !!h,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = e,
            r = 0),
            !r && o && a && !t && !_ && (Ji(this, `onStart`),
            this._tTime !== o))
                return this;
            if (c >= r && e >= 0)
                for (l = this._first; l; ) {
                    if (u = l._next,
                    (l._act || c >= l._start) && l._ts && m !== l) {
                        if (l.parent !== this)
                            return this.render(e, t, n);
                        if (l.render(l._ts > 0 ? (c - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts, t, n),
                        c !== this._time || !this._ts && !p) {
                            m = 0,
                            u && (o += this._zTime = -U);
                            break
                        }
                    }
                    l = u
                }
            else {
                l = this._last;
                for (var S = e < 0 ? e : c; l; ) {
                    if (u = l._prev,
                    (l._act || S <= l._end) && l._ts && m !== l) {
                        if (l.parent !== this)
                            return this.render(e, t, n);
                        if (l.render(l._ts > 0 ? (S - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts, t, n || Fn && Hr(l)),
                        c !== this._time || !this._ts && !p) {
                            m = 0,
                            u && (o += this._zTime = S ? -U : U);
                            break
                        }
                    }
                    l = u
                }
            }
            if (m && !t && (this.pause(),
            m.render(c >= r ? 0 : -U)._zTime = c >= r ? 1 : -1,
            this._ts))
                return this._start = g,
                li(this),
                this.render(e, t, n);
            this._onUpdate && !t && Ji(this, `onUpdate`, !0),
            (o === i && this._tTime >= this.totalDuration() || !o && r) && (g === this._start || Math.abs(h) !== Math.abs(this._ts)) && (this._lock || ((e || !a) && (o === i && this._ts > 0 || !o && this._ts < 0) && ti(this, 1),
            !t && !(e < 0 && !r) && (o || r || !i) && (Ji(this, o === i && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
            this._prom && !(o < i && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(e, t) {
        var n = this;
        if (Kn(t) || (t = Si(this, t, e)),
        !(e instanceof Sa)) {
            if ($n(e))
                return e.forEach(function(e) {
                    return n.add(e, t)
                }),
                this;
            if (Wn(e))
                return this.addLabel(e, t);
            if (Gn(e))
                e = La.delayedCall(0, e);
            else
                return this
        }
        return this === e ? this : fi(this, e, t)
    }
    ,
    n.getChildren = function(e, t, n, r) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -Ln);
        for (var i = [], a = this._first; a; )
            a._start >= r && (a instanceof La ? t && i.push(a) : (n && i.push(a),
            e && i.push.apply(i, a.getChildren(!0, t, n)))),
            a = a._next;
        return i
    }
    ,
    n.getById = function(e) {
        for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e)
                return t[n]
    }
    ,
    n.remove = function(e) {
        return Wn(e) ? this.removeLabel(e) : Gn(e) ? this.killTweensOf(e) : (e.parent === this && ei(this, e),
        e === this._recent && (this._recent = this._last),
        ni(this))
    }
    ,
    n.totalTime = function(t, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Rr(ca.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
        e.prototype.totalTime.call(this, t, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(e, t) {
        return this.labels[e] = Si(this, t),
        this
    }
    ,
    n.removeLabel = function(e) {
        return delete this.labels[e],
        this
    }
    ,
    n.addPause = function(e, t, n) {
        var r = La.delayedCall(0, t || br, n);
        return r.data = `isPause`,
        this._hasPause = 1,
        fi(this, r, Si(this, e))
    }
    ,
    n.removePause = function(e) {
        var t = this._first;
        for (e = Si(this, e); t; )
            t._start === e && t.data === `isPause` && ti(t),
            t = t._next
    }
    ,
    n.killTweensOf = function(e, t, n) {
        for (var r = this.getTweensOf(e, n), i = r.length; i--; )
            Oa !== r[i] && r[i].kill(e, t);
        return this
    }
    ,
    n.getTweensOf = function(e, t) {
        for (var n = [], r = ji(e), i = this._first, a = Kn(t), o; i; )
            i instanceof La ? Br(i._targets, r) && (a ? (!Oa || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
            i = i._next;
        return n
    }
    ,
    n.tweenTo = function(e, t) {
        t ||= {};
        var n = this, r = Si(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, c = i.immediateRender, l, u = La.to(n, Kr({
            ease: t.ease || `none`,
            lazy: !1,
            immediateRender: !1,
            time: r,
            overwrite: `auto`,
            duration: t.duration || Math.abs((r - (a && `time`in a ? a.time : n._time)) / n.timeScale()) || U,
            onStart: function() {
                if (n.pause(),
                !l) {
                    var e = t.duration || Math.abs((r - (a && `time`in a ? a.time : n._time)) / n.timeScale());
                    u._dur !== e && yi(u, e, 0, 1).render(u._time, !0, !0),
                    l = 1
                }
                o && o.apply(u, s || [])
            }
        }, t));
        return c ? u.render(0) : u
    }
    ,
    n.tweenFromTo = function(e, t, n) {
        return this.tweenTo(t, Kr({
            startAt: {
                time: Si(this, e)
            }
        }, n))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(e) {
        return e === void 0 && (e = this._time),
        qi(this, Si(this, e))
    }
    ,
    n.previousLabel = function(e) {
        return e === void 0 && (e = this._time),
        qi(this, Si(this, e), 1)
    }
    ,
    n.currentLabel = function(e) {
        return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + U)
    }
    ,
    n.shiftChildren = function(e, t, n) {
        n === void 0 && (n = 0);
        var r = this._first, i = this.labels, a;
        for (e = Rr(e); r; )
            r._start >= n && (r._start += e,
            r._end += e),
            r = r._next;
        if (t)
            for (a in i)
                i[a] >= n && (i[a] += e);
        return ni(this)
    }
    ,
    n.invalidate = function(t) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(t),
            n = n._next;
        return e.prototype.invalidate.call(this, t)
    }
    ,
    n.clear = function(e) {
        e === void 0 && (e = !0);
        for (var t = this._first, n; t; )
            n = t._next,
            this.remove(t),
            t = n;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        ni(this)
    }
    ,
    n.totalDuration = function(e) {
        var t = 0, n = this, r = n._last, i = Ln, a, o, s;
        if (arguments.length)
            return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
        if (n._dirty) {
            for (s = n.parent; r; )
                a = r._prev,
                r._dirty && r.totalDuration(),
                o = r._start,
                o > i && n._sort && r._ts && !n._lock ? (n._lock = 1,
                fi(n, r, o - r._delay, 1)._lock = 0) : i = o,
                o < 0 && r._ts && (t -= o,
                (!s && !n._dp || s && s.smoothChildTiming) && (n._start += Rr(o / n._ts),
                n._time -= o,
                n._tTime -= o),
                n.shiftChildren(-o, !1, -1 / 0),
                i = 0),
                r._end > t && r._ts && (t = r._end),
                r = a;
            yi(n, n === lr && n._time > t ? n._time : t, 1, 1),
            n._dirty = 0
        }
        return n._tDur
    }
    ,
    t.updateRoot = function(e) {
        if (lr._ts && (Ur(lr, ci(e, lr)),
        Dr = ca.frame),
        ca.frame >= Ar) {
            Ar += Mn.autoSleep || 120;
            var t = lr._first;
            if ((!t || !t._ts) && Mn.autoSleep && ca._listeners.length < 2) {
                for (; t && !t._ts; )
                    t = t._next;
                t || ca.sleep()
            }
        }
    }
    ,
    t
}(Sa);
Kr(Ca.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var wa = function(e, t, n, r, i, a, o) {
    var s = new Za(this._pt,e,t,0,1,Ga,null,i), c = 0, l = 0, u, d, f, p, m, h, g, _;
    for (s.b = n,
    s.e = r,
    n += ``,
    r += ``,
    (g = ~r.indexOf(`random(`)) && (r = Wi(r)),
    a && (_ = [n, r],
    a(_, e, t),
    n = _[0],
    r = _[1]),
    d = n.match(ar) || []; u = ar.exec(r); )
        p = u[0],
        m = r.substring(c, u.index),
        f ? f = (f + 1) % 5 : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] && (h = parseFloat(d[l - 1]) || 0,
        s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? zr(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0
        },
        c = ar.lastIndex);
    return s.c = c < r.length ? r.substring(c, r.length) : ``,
    s.fp = o,
    (or.test(r) || g) && (s.e = 0),
    this._pt = s,
    s
}, Ta = function(e, t, n, r, i, a, o, s, c, l) {
    Gn(r) && (r = r(i || 0, e, a));
    var u = e[t], d = n === `get` ? Gn(u) ? c ? e[t.indexOf(`set`) || !Gn(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c) : e[t]() : u : n, f = Gn(u) ? c ? Ba : za : Ra, p;
    if (Wn(r) && (~r.indexOf(`random(`) && (r = Wi(r)),
    r.charAt(1) === `=` && (p = zr(d, r) + (Ei(d) || 0),
    (p || p === 0) && (r = p))),
    !l || d !== r || ka)
        return !isNaN(d * r) && r !== `` ? (p = new Za(this._pt,e,t,+d || 0,r - (d || 0),typeof u == `boolean` ? Wa : Ua,0,f),
        c && (p.fp = c),
        o && p.modifier(o, this, e),
        this._pt = p) : (!u && !(t in e) && _r(t, r),
        wa.call(this, e, t, d, r, f, s || Mn.stringFilter, c))
}, Ea = function(e, t, n, r, i) {
    if (Gn(e) && (e = Pa(e, i, t, n, r)),
    !Jn(e) || e.style && e.nodeType || $n(e) || Qn(e))
        return Wn(e) ? Pa(e, i, t, n, r) : e;
    var a = {}, o;
    for (o in e)
        a[o] = Pa(e[o], i, t, n, r);
    return a
}, Da = function(e, t, n, r, i, a) {
    var o, s, c, l;
    if (Or[e] && (o = new Or[e]).init(i, o.rawVars ? t[e] : Ea(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new Za(n._pt,i,e,0,1,o.render,o,0,o.priority),
    n !== Xi))
        for (c = n._ptLookup[n._targets.indexOf(i)],
        l = o._props.length; l--; )
            c[o._props[l]] = s;
    return o
}, Oa, ka, Aa = function e(t, n, r) {
    var i = t.vars, a = i.ease, o = i.startAt, s = i.immediateRender, c = i.lazy, l = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, f = i.keyframes, p = i.autoRevert, m = t._dur, h = t._startAt, g = t._targets, _ = t.parent, v = _ && _.data === `nested` ? _.vars.targets : g, y = t._overwrite === `auto` && !Pn, b = t.timeline, x = i.easeReverse || d, S, C, w, T, E, D, O, k, A, j, M, N, P;
    if (b && (!f || !a) && (a = `none`),
    t._ease = ga(a, Nn.ease),
    t._rEase = x && (ga(x) || t._ease),
    t._from = !b && !!i.runBackwards,
    t._from && (t.ratio = 1),
    !b || f && !i.stagger) {
        if (k = g[0] ? Pr(g[0]).harness : 0,
        N = k && i[k.prop],
        S = Xr(i, wr),
        h && (h._zTime < 0 && h.progress(1),
        n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Sr : xr),
        h._lazy = 0),
        o) {
            if (ti(t._startAt = La.set(g, Kr({
                data: `isStart`,
                overwrite: !1,
                parent: _,
                immediateRender: !0,
                lazy: !h && Yn(c),
                startAt: null,
                delay: 0,
                onUpdate: l && function() {
                    return Ji(t, `onUpdate`)
                }
                ,
                stagger: 0
            }, o))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            n < 0 && (Fn || !s && !p) && t._startAt.revert(Sr),
            s && m && n <= 0 && r <= 0) {
                n && (t._zTime = n);
                return
            }
        } else if (u && m && !h) {
            if (n && (s = !1),
            w = Kr({
                overwrite: !1,
                data: `isFromStart`,
                lazy: s && !h && Yn(c),
                immediateRender: s,
                stagger: 0,
                parent: _
            }, S),
            N && (w[k.prop] = N),
            ti(t._startAt = La.set(g, w)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            n < 0 && (Fn ? t._startAt.revert(Sr) : t._startAt.render(-1, !0)),
            t._zTime = n,
            !s)
                e(t._startAt, U, U);
            else if (!n)
                return
        }
        for (t._pt = t._ptCache = 0,
        c = m && Yn(c) || c && !m,
        C = 0; C < g.length; C++) {
            if (E = g[C],
            O = E._gsap || Nr(g)[C]._gsap,
            t._ptLookup[C] = j = {},
            Er[O.id] && Tr.length && Vr(),
            M = v === g ? C : v.indexOf(E),
            k && (A = new k).init(E, N || S, t, M, v) !== !1 && (t._pt = T = new Za(t._pt,E,A.name,0,1,A.render,A,0,A.priority),
            A._props.forEach(function(e) {
                j[e] = T
            }),
            A.priority && (D = 1)),
            !k || N)
                for (w in S)
                    Or[w] && (A = Da(w, S, t, M, E, v)) ? A.priority && (D = 1) : j[w] = T = Ta.call(t, E, w, `get`, S[w], M, v, 0, i.stringFilter);
            t._op && t._op[C] && t.kill(E, t._op[C]),
            y && t._pt && (Oa = t,
            lr.killTweensOf(E, j, t.globalTime(n)),
            P = !t.parent,
            Oa = 0),
            t._pt && c && (Er[O.id] = 1)
        }
        D && Xa(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = l,
    t._initted = (!t._op || t._pt) && !P,
    f && n <= 0 && b.render(Ln, !0, !0)
}, ja = function(e, t, n, r, i, a, o, s) {
    var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
    if (!c)
        for (c = e._ptCache[t] = [],
        d = e._ptLookup,
        f = e._targets.length; f--; ) {
            if (l = d[f][t],
            l && l.d && l.d._pt)
                for (l = l.d._pt; l && l.p !== t && l.fp !== t; )
                    l = l._next;
            if (!l)
                return ka = 1,
                e.vars[t] = `+=0`,
                Aa(e, o),
                ka = 0,
                s ? vr(t + ` not eligible for reset. Try splitting into individual properties`) : 1;
            c.push(l)
        }
    for (f = c.length; f--; )
        u = c[f],
        l = u._pt || u,
        l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c,
        l.c = n - l.s,
        u.e &&= Lr(n) + Ei(u.e),
        u.b &&= l.s + Ei(u.b)
}, Ma = function(e, t) {
    var n = e[0] ? Pr(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
    if (!r)
        return t;
    for (a in i = Jr({}, t),
    r)
        if (a in i)
            for (s = r[a].split(`,`),
            o = s.length; o--; )
                i[s[o]] = i[a];
    return i
}, Na = function(e, t, n, r) {
    var i = t.ease || r || `power1.inOut`, a, o;
    if ($n(t))
        o = n[e] || (n[e] = []),
        t.forEach(function(e, n) {
            return o.push({
                t: n / (t.length - 1) * 100,
                v: e,
                e: i
            })
        });
    else
        for (a in t)
            o = n[a] || (n[a] = []),
            a === `ease` || o.push({
                t: parseFloat(e),
                v: t[a],
                e: i
            })
}, Pa = function(e, t, n, r, i) {
    return Gn(e) ? e.call(t, n, r, i) : Wn(e) && ~e.indexOf(`random(`) ? Wi(e) : e
}, Fa = Mr + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`, Ia = {};
Ir(Fa + `,id,stagger,delay,duration,paused,scrollTrigger`, function(e) {
    return Ia[e] = 1
});
var La = function(e) {
    jn(t, e);
    function t(t, n, r, i) {
        var a;
        typeof n == `number` && (r.duration = n,
        n = r,
        r = null),
        a = e.call(this, i ? n : Zr(n)) || this;
        var o = a.vars, s = o.duration, c = o.delay, l = o.immediateRender, u = o.stagger, d = o.overwrite, f = o.keyframes, p = o.defaults, m = o.scrollTrigger, h = n.parent || lr, g = ($n(t) || Qn(t) ? Kn(t[0]) : `length`in n) ? [t] : ji(t), _, v, y, b, x, S, C, w;
        if (a._targets = g.length ? Nr(g) : vr(`GSAP target ` + t + ` not found. https://gsap.com`, !Mn.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        f || u || Zn(s) || Zn(c)) {
            n = a.vars;
            var T = n.easeReverse || n.yoyoEase;
            if (_ = a.timeline = new Ca({
                data: `nested`,
                defaults: p || {},
                targets: h && h.data === `nested` ? h.vars.targets : g
            }),
            _.kill(),
            _.parent = _._dp = An(a),
            _._start = 0,
            u || Zn(s) || Zn(c)) {
                if (b = g.length,
                C = u && Pi(u),
                Jn(u))
                    for (x in u)
                        ~Fa.indexOf(x) && (w ||= {},
                        w[x] = u[x]);
                for (v = 0; v < b; v++)
                    y = Xr(n, Ia),
                    y.stagger = 0,
                    T && (y.easeReverse = T),
                    w && Jr(y, w),
                    S = g[v],
                    y.duration = +Pa(s, An(a), v, S, g),
                    y.delay = (+Pa(c, An(a), v, S, g) || 0) - a._delay,
                    !u && b === 1 && y.delay && (a._delay = c = y.delay,
                    a._start += c,
                    y.delay = 0),
                    _.to(S, y, C ? C(v, S, g) : 0),
                    _._ease = G.none;
                _.duration() ? s = c = 0 : a.timeline = 0
            } else if (f) {
                Zr(Kr(_.vars.defaults, {
                    ease: `none`
                })),
                _._ease = ga(f.ease || n.ease || `none`);
                var E = 0, D, O, k;
                if ($n(f))
                    f.forEach(function(e) {
                        return _.to(g, e, `>`)
                    }),
                    _.duration();
                else {
                    for (x in y = {},
                    f)
                        x === `ease` || x === `easeEach` || Na(x, f[x], y, f.easeEach);
                    for (x in y)
                        for (D = y[x].sort(function(e, t) {
                            return e.t - t.t
                        }),
                        E = 0,
                        v = 0; v < D.length; v++)
                            O = D[v],
                            k = {
                                ease: O.e,
                                duration: (O.t - (v ? D[v - 1].t : 0)) / 100 * s
                            },
                            k[x] = O.v,
                            _.to(g, k, E),
                            E += k.duration;
                    _.duration() < s && _.to({}, {
                        duration: s - _.duration()
                    })
                }
            }
            s || a.duration(s = _.duration())
        } else
            a.timeline = 0;
        return d === !0 && !Pn && (Oa = An(a),
        lr.killTweensOf(g),
        Oa = 0),
        fi(h, An(a), r),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (l || !s && !f && a._start === Rr(h._time) && Yn(l) && ai(An(a)) && h.data !== `nested`) && (a._tTime = -U,
        a.render(Math.max(0, -c) || 0)),
        m && pi(An(a), m),
        a
    }
    var n = t.prototype;
    return n.render = function(e, t, n) {
        var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - U && !o ? i : e < U ? 0 : e, c, l, u, d, f, p, m, h;
        if (!a)
            _i(this, e, t, n);
        else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
            if (c = s,
            h = this.timeline,
            this._repeat) {
                if (d = a + this._rDelay,
                this._repeat < -1 && o)
                    return this.totalTime(d * 100 + e, t, n);
                if (c = Rr(s % d),
                s === i ? (u = this._repeat,
                c = a) : (f = Rr(s / d),
                u = ~~f,
                u && u === f ? (c = a,
                u--) : c > a && (c = a)),
                p = this._yoyo && u & 1,
                p && (c = a - c),
                f = si(this._tTime, d),
                c === r && !n && this._initted && u === f)
                    return this._tTime = s,
                    this;
                u !== f && this.vars.repeatRefresh && !p && !this._lock && c !== d && this._initted && (this._lock = n = 1,
                this.render(Rr(d * u), !0).invalidate()._lock = 0)
            }
            if (!this._initted) {
                if (mi(this, o ? e : c, n, t, s))
                    return this._tTime = 0,
                    this;
                if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f))
                    return this;
                if (a !== this._dur)
                    return this.render(e, t, n)
            }
            if (this._rEase) {
                var g = c < r;
                if (g !== this._inv) {
                    var _ = g ? r : a - r;
                    this._inv = g,
                    this._from && (this.ratio = 1 - this.ratio),
                    this._invRatio = this.ratio,
                    this._invTime = r,
                    this._invRecip = _ ? (g ? -1 : 1) / _ : 0,
                    this._invScale = g ? -this.ratio : 1 - this.ratio,
                    this._invEase = g ? this._rEase : this._ease
                }
                this.ratio = m = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip)
            } else
                this.ratio = m = this._ease(c / a);
            if (this._from && (this.ratio = m = 1 - m),
            this._tTime = s,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            !r && s && !t && !f && (Ji(this, `onStart`),
            this._tTime !== s))
                return this;
            for (l = this._pt; l; )
                l.r(m, l.d),
                l = l._next;
            h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n) || this._startAt && (this._zTime = e),
            this._onUpdate && !t && (o && ii(this, e, t, n),
            Ji(this, `onUpdate`)),
            this._repeat && u !== f && this.vars.onRepeat && !t && this.parent && Ji(this, `onRepeat`),
            (s === this._tDur || !s) && this._tTime === s && (o && !this._onUpdate && ii(this, e, !0, !0),
            (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && ti(this, 1),
            !t && !(o && !r) && (s || r || p) && (Ji(this, s === i ? `onComplete` : `onReverseComplete`, !0),
            this._prom && !(s < i && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(t) {
        return (!t || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
    }
    ,
    n.resetTo = function(e, t, n, r, i) {
        sa || ca.wake(),
        this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
        return this._initted || Aa(this, a),
        o = this._ease(a / this._dur),
        ja(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (ui(this, 0),
        this.parent || $r(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
        this.render(0))
    }
    ,
    n.kill = function(e, t) {
        if (t === void 0 && (t = `all`),
        !e && (!t || t === `all`))
            return this._lazy = this._pt = 0,
            this.parent ? Yi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Fn),
            this;
        if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Oa && Oa.vars.overwrite !== !0)._first || Yi(this),
            this.parent && n !== this.timeline.totalDuration() && yi(this, this._dur * this.timeline._tDur / n, 0, 1),
            this
        }
        var r = this._targets, i = e ? ji(e) : r, a = this._ptLookup, o = this._pt, s, c, l, u, d, f, p;
        if ((!t || t === `all`) && Qr(r, i))
            return t === `all` && (this._pt = 0),
            Yi(this);
        for (s = this._op = this._op || [],
        t !== `all` && (Wn(t) && (d = {},
        Ir(t, function(e) {
            return d[e] = 1
        }),
        t = d),
        t = Ma(r, t)),
        p = r.length; p--; )
            if (~i.indexOf(r[p]))
                for (d in c = a[p],
                t === `all` ? (s[p] = t,
                u = c,
                l = {}) : (l = s[p] = s[p] || {},
                u = t),
                u)
                    f = c && c[d],
                    f && ((!(`kill`in f.d) || f.d.kill(d) === !0) && ei(this, f, `_pt`),
                    delete c[d]),
                    l !== `all` && (l[d] = 1);
        return this._initted && !this._pt && o && Yi(this),
        this
    }
    ,
    t.to = function(e, n) {
        return new t(e,n,arguments[2])
    }
    ,
    t.from = function(e, t) {
        return Ci(1, arguments)
    }
    ,
    t.delayedCall = function(e, n, r, i) {
        return new t(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i
        })
    }
    ,
    t.fromTo = function(e, t, n) {
        return Ci(2, arguments)
    }
    ,
    t.set = function(e, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new t(e,n)
    }
    ,
    t.killTweensOf = function(e, t, n) {
        return lr.killTweensOf(e, t, n)
    }
    ,
    t
}(Sa);
Kr(La.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}),
Ir(`staggerTo,staggerFrom,staggerFromTo`, function(e) {
    La[e] = function() {
        var t = new Ca
          , n = Oi.call(arguments, 0);
        return n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0),
        t[e].apply(t, n)
    }
});
var Ra = function(e, t, n) {
    return e[t] = n
}
  , za = function(e, t, n) {
    return e[t](n)
}
  , Ba = function(e, t, n, r) {
    return e[t](r.fp, n)
}
  , Va = function(e, t, n) {
    return e.setAttribute(t, n)
}
  , Ha = function(e, t) {
    return Gn(e[t]) ? za : qn(e[t]) && e.setAttribute ? Va : Ra
}
  , Ua = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , Wa = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , Ga = function(e, t) {
    var n = t._pt
      , r = ``;
    if (!e && t.b)
        r = t.b;
    else if (e === 1 && t.e)
        r = t.e;
    else {
        for (; n; )
            r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r,
            n = n._next;
        r += t.c
    }
    t.set(t.t, t.p, r, t)
}
  , Ka = function(e, t) {
    for (var n = t._pt; n; )
        n.r(e, n.d),
        n = n._next
}
  , qa = function(e, t, n, r) {
    for (var i = this._pt, a; i; )
        a = i._next,
        i.p === r && i.modifier(e, t, n),
        i = a
}
  , Ja = function(e) {
    for (var t = this._pt, n, r; t; )
        r = t._next,
        t.p === e && !t.op || t.op === e ? ei(this, t, `_pt`) : t.dep || (n = 1),
        t = r;
    return !n
}
  , Ya = function(e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
}
  , Xa = function(e) {
    for (var t = e._pt, n, r, i, a; t; ) {
        for (n = t._next,
        r = i; r && r.pr > t.pr; )
            r = r._next;
        (t._prev = r ? r._prev : a) ? t._prev._next = t : i = t,
        (t._next = r) ? r._prev = t : a = t,
        t = n
    }
    e._pt = i
}
  , Za = function() {
    function e(e, t, n, r, i, a, o, s, c) {
        this.t = t,
        this.s = r,
        this.c = i,
        this.p = n,
        this.r = a || Ua,
        this.d = o || this,
        this.set = s || Ra,
        this.pr = c || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = e.prototype;
    return t.modifier = function(e, t, n) {
        this.mSet = this.mSet || this.set,
        this.set = Ya,
        this.m = e,
        this.mt = n,
        this.tween = t
    }
    ,
    e
}();
Ir(Mr + `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`, function(e) {
    return wr[e] = 1
}),
pr.TweenMax = pr.TweenLite = La,
pr.TimelineLite = pr.TimelineMax = Ca,
lr = new Ca({
    sortChildren: !1,
    defaults: Nn,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0
}),
Mn.stringFilter = oa;
var Qa = []
  , $a = {}
  , eo = []
  , to = 0
  , no = 0
  , ro = function(e) {
    return ($a[e] || eo).map(function(e) {
        return e()
    })
}
  , io = function() {
    var e = Date.now()
      , t = [];
    e - to > 2 && (ro(`matchMediaInit`),
    Qa.forEach(function(e) {
        var n = e.queries, r = e.conditions, i, a, o, s;
        for (a in n)
            i = ur.matchMedia(n[a]).matches,
            i && (o = 1),
            i !== r[a] && (r[a] = i,
            s = 1);
        s && (e.revert(),
        o && t.push(e))
    }),
    ro(`matchMediaRevert`),
    t.forEach(function(e) {
        return e.onMatch(e, function(t) {
            return e.add(null, t)
        })
    }),
    to = e,
    ro(`matchMedia`))
}
  , ao = function() {
    function e(e, t) {
        this.selector = t && Mi(t),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = no++,
        e && this.add(e)
    }
    var t = e.prototype;
    return t.add = function(e, t, n) {
        Gn(e) && (n = t,
        t = e,
        e = Gn);
        var r = this
          , i = function() {
            var e = In, i = r.selector, a;
            return e && e !== r && e.data.push(r),
            n && (r.selector = Mi(n)),
            In = r,
            a = t.apply(r, arguments),
            Gn(a) && r._r.push(a),
            In = e,
            r.selector = i,
            r.isReverted = !1,
            a
        };
        return r.last = i,
        e === Gn ? i(r, function(e) {
            return r.add(null, e)
        }) : e ? r[e] = i : i
    }
    ,
    t.ignore = function(e) {
        var t = In;
        In = null,
        e(this),
        In = t
    }
    ,
    t.getTweens = function() {
        var t = [];
        return this.data.forEach(function(n) {
            return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof La && !(n.parent && n.parent.data === `nested`) && t.push(n)
        }),
        t
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(e, t) {
        var n = this;
        if (e ? (function() {
            for (var t = n.getTweens(), r = n.data.length, i; r--; )
                i = n.data[r],
                i.data === `isFlip` && (i.revert(),
                i.getChildren(!0, !0, !1).forEach(function(e) {
                    return t.splice(t.indexOf(e), 1)
                }));
            for (t.map(function(e) {
                return {
                    g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                    t: e
                }
            }).sort(function(e, t) {
                return t.g - e.g || -1 / 0
            }).forEach(function(t) {
                return t.t.revert(e)
            }),
            r = n.data.length; r--; )
                i = n.data[r],
                i instanceof Ca ? i.data !== `nested` && (i.scrollTrigger && i.scrollTrigger.revert(),
                i.kill()) : !(i instanceof La) && i.revert && i.revert(e);
            n._r.forEach(function(t) {
                return t(e, n)
            }),
            n.isReverted = !0
        }
        )() : this.data.forEach(function(e) {
            return e.kill && e.kill()
        }),
        this.clear(),
        t)
            for (var r = Qa.length; r--; )
                Qa[r].id === this.id && Qa.splice(r, 1)
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    e
}()
  , oo = function() {
    function e(e) {
        this.contexts = [],
        this.scope = e,
        In && In.data.push(this)
    }
    var t = e.prototype;
    return t.add = function(e, t, n) {
        Jn(e) || (e = {
            matches: e
        });
        var r = new ao(0,n || this.scope), i = r.conditions = {}, a, o, s;
        for (o in In && !r.selector && (r.selector = In.selector),
        this.contexts.push(r),
        t = r.add(`onMatch`, t),
        r.queries = e,
        e)
            o === `all` ? s = 1 : (a = ur.matchMedia(e[o]),
            a && (Qa.indexOf(r) < 0 && Qa.push(r),
            (i[o] = a.matches) && (s = 1),
            a.addListener ? a.addListener(io) : a.addEventListener(`change`, io)));
        return s && t(r, function(e) {
            return r.add(null, e)
        }),
        this
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    t.kill = function(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }
    ,
    e
}()
  , so = {
    registerPlugin: function() {
        [...arguments].forEach(function(e) {
            return Qi(e)
        })
    },
    timeline: function(e) {
        return new Ca(e)
    },
    getTweensOf: function(e, t) {
        return lr.getTweensOf(e, t)
    },
    getProperty: function(e, t, n, r) {
        Wn(e) && (e = ji(e)[0]);
        var i = Pr(e || {}).get
          , a = n ? Gr : Wr;
        return n === `native` && (n = ``),
        e && (t ? a((Or[t] && Or[t].get || i)(e, t, n, r)) : function(t, n, r) {
            return a((Or[t] && Or[t].get || i)(e, t, n, r))
        }
        )
    },
    quickSetter: function(e, t, n) {
        if (e = ji(e),
        e.length > 1) {
            var r = e.map(function(e) {
                return fo.quickSetter(e, t, n)
            })
              , i = r.length;
            return function(e) {
                for (var t = i; t--; )
                    r[t](e)
            }
        }
        e = e[0] || {};
        var a = Or[t]
          , o = Pr(e)
          , s = o.harness && (o.harness.aliases || {})[t] || t
          , c = a ? function(t) {
            var r = new a;
            Xi._pt = 0,
            r.init(e, n ? t + n : t, Xi, 0, [e]),
            r.render(1, r),
            Xi._pt && Ka(1, Xi)
        }
        : o.set(e, s);
        return a ? c : function(t) {
            return c(e, s, n ? t + n : t, o, 1)
        }
    },
    quickTo: function(e, t, n) {
        var r, i = fo.to(e, Kr((r = {},
        r[t] = `+=0.1`,
        r.paused = !0,
        r.stagger = 0,
        r), n || {})), a = function(e, n, r) {
            return i.resetTo(t, e, n, r)
        };
        return a.tween = i,
        a
    },
    isTweening: function(e) {
        return lr.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = ga(e.ease, Nn.ease)),
        Yr(Nn, e || {})
    },
    config: function(e) {
        return Yr(Mn, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , n = e.effect
          , r = e.plugins
          , i = e.defaults
          , a = e.extendTimeline;
        (r || ``).split(`,`).forEach(function(e) {
            return e && !Or[e] && !pr[e] && vr(t + ` effect requires ` + e + ` plugin.`)
        }),
        kr[t] = function(e, t, r) {
            return n(ji(e), Kr(t || {}, i), r)
        }
        ,
        a && (Ca.prototype[t] = function(e, n, r) {
            return this.add(kr[t](e, Jn(n) ? n : (r = n) && {}, this), r)
        }
        )
    },
    registerEase: function(e, t) {
        G[e] = ga(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? ga(e, t) : G
    },
    getById: function(e) {
        return lr.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var n = new Ca(e), r, i;
        for (n.smoothChildTiming = Yn(e.smoothChildTiming),
        lr.remove(n),
        n._dp = 0,
        n._time = n._tTime = lr._time,
        r = lr._first; r; )
            i = r._next,
            (t || !(!r._dur && r instanceof La && r.vars.onComplete === r._targets[0])) && fi(n, r, r._start - r._delay),
            r = i;
        return fi(lr, n, 0),
        n
    },
    context: function(e, t) {
        return e ? new ao(e,t) : In
    },
    matchMedia: function(e) {
        return new oo(e)
    },
    matchMediaRefresh: function() {
        return Qa.forEach(function(e) {
            var t = e.conditions, n, r;
            for (r in t)
                t[r] && (t[r] = !1,
                n = 1);
            n && e.revert()
        }) || io()
    },
    addEventListener: function(e, t) {
        var n = $a[e] || ($a[e] = []);
        ~n.indexOf(t) || n.push(t)
    },
    removeEventListener: function(e, t) {
        var n = $a[e]
          , r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
    },
    utils: {
        wrap: Hi,
        wrapYoyo: Ui,
        distribute: Pi,
        random: Li,
        snap: Ii,
        normalize: Bi,
        getUnit: Ei,
        clamp: Di,
        splitColor: ta,
        toArray: ji,
        selector: Mi,
        mapRange: Gi,
        pipe: Ri,
        unitize: zi,
        interpolate: Ki,
        shuffle: Ni
    },
    install: gr,
    effects: kr,
    ticker: ca,
    updateRoot: Ca.updateRoot,
    plugins: Or,
    globalTimeline: lr,
    core: {
        PropTween: Za,
        globals: yr,
        Tween: La,
        Timeline: Ca,
        Animation: Sa,
        getCache: Pr,
        _removeLinkedListItem: ei,
        reverting: function() {
            return Fn
        },
        context: function(e) {
            return e && In && (In.data.push(e),
            e._ctx = In),
            In
        },
        suppressOverwrites: function(e) {
            return Pn = e
        }
    }
};
Ir(`to,from,fromTo,delayedCall,set,killTweensOf`, function(e) {
    return so[e] = La[e]
}),
ca.add(Ca.updateRoot),
Xi = so.to({}, {
    duration: 0
});
var co = function(e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
        n = n._next;
    return n
}
  , lo = function(e, t) {
    var n = e._targets, r, i, a;
    for (r in t)
        for (i = n.length; i--; )
            a = e._ptLookup[i][r],
            (a &&= a.d) && (a._pt && (a = co(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r))
}
  , uo = function(e, t) {
    return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function(e, n, r) {
            r._onInit = function(e) {
                var r, i;
                if (Wn(n) && (r = {},
                Ir(n, function(e) {
                    return r[e] = 1
                }),
                n = r),
                t) {
                    for (i in r = {},
                    n)
                        r[i] = t(n[i]);
                    n = r
                }
                lo(e, n)
            }
        }
    }
}
  , fo = so.registerPlugin({
    name: `attr`,
    init: function(e, t, n, r, i) {
        var a, o, s;
        for (a in this.tween = n,
        t)
            s = e.getAttribute(a) || ``,
            o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a),
            o.op = a,
            o.b = s,
            this._props.push(a)
    },
    render: function(e, t) {
        for (var n = t._pt; n; )
            Fn ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d),
            n = n._next
    }
}, {
    name: `endArray`,
    headless: 1,
    init: function(e, t) {
        for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
    }
}, uo(`roundProps`, Fi), uo(`modifiers`), uo(`snap`, Ii)) || so;
La.version = Ca.version = fo.version = `3.15.0`,
hr = 1,
Xn() && la(),
G.Power0,
G.Power1,
G.Power2,
G.Power3,
G.Power4,
G.Linear,
G.Quad,
G.Cubic,
G.Quart,
G.Quint,
G.Strong,
G.Elastic,
G.Back,
G.SteppedEase,
G.Bounce,
G.Sine,
G.Expo,
G.Circ;
var po, mo, ho, go, _o, vo, yo, bo = function() {
    return typeof window < `u`
}, xo = {}, So = 180 / Math.PI, Co = Math.PI / 180, wo = Math.atan2, To = 1e8, Eo = /([A-Z])/g, Do = /(left|right|width|margin|padding|x)/i, Oo = /[\s,\(]\S/, ko = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`
}, Ao = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, jo = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Mo = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, No = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Po = function(e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
}, Fo = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, Io = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t)
}, Lo = function(e, t, n) {
    return e.style[t] = n
}, Ro = function(e, t, n) {
    return e.style.setProperty(t, n)
}, zo = function(e, t, n) {
    return e._gsap[t] = n
}, Bo = function(e, t, n) {
    return e._gsap.scaleX = e._gsap.scaleY = n
}, Vo = function(e, t, n, r, i) {
    var a = e._gsap;
    a.scaleX = a.scaleY = n,
    a.renderTransform(i, a)
}, Ho = function(e, t, n, r, i) {
    var a = e._gsap;
    a[t] = n,
    a.renderTransform(i, a)
}, Uo = `transform`, Wo = Uo + `Origin`, Go = function e(t, n) {
    var r = this
      , i = this.target
      , a = i.style
      , o = i._gsap;
    if (t in xo && a) {
        if (this.tfm = this.tfm || {},
        t !== `transform`)
            t = ko[t] || t,
            ~t.indexOf(`,`) ? t.split(`,`).forEach(function(e) {
                return r.tfm[e] = us(i, e)
            }) : this.tfm[t] = o.x ? o[t] : us(i, t),
            t === Wo && (this.tfm.zOrigin = o.zOrigin);
        else
            return ko.transform.split(`,`).forEach(function(t) {
                return e.call(r, t, n)
            });
        if (this.props.indexOf(Uo) >= 0)
            return;
        o.svg && (this.svgo = i.getAttribute(`data-svg-origin`),
        this.props.push(Wo, n, ``)),
        t = Uo
    }
    (a || n) && this.props.push(t, n, a[t])
}, Ko = function(e) {
    e.translate && (e.removeProperty(`translate`),
    e.removeProperty(`scale`),
    e.removeProperty(`rotate`))
}, qo = function() {
    var e = this.props, t = this.target, n = t.style, r = t._gsap, i, a;
    for (i = 0; i < e.length; i += 3)
        e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === `--` ? e[i] : e[i].replace(Eo, `-$1`).toLowerCase());
    if (this.tfm) {
        for (a in this.tfm)
            r[a] = this.tfm[a];
        r.svg && (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        i = yo(),
        (!i || !i.isStart) && !n[Uo] && (Ko(n),
        r.zOrigin && n[Wo] && (n[Wo] += ` ` + r.zOrigin + `px`,
        r.zOrigin = 0,
        r.renderTransform()),
        r.uncache = 1)
    }
}, Jo = function(e, t) {
    var n = {
        target: e,
        props: [],
        revert: qo,
        save: Go
    };
    return e._gsap || fo.core.getCache(e),
    t && e.style && e.nodeType && t.split(`,`).forEach(function(e) {
        return n.save(e)
    }),
    n
}, Yo, Xo = function(e, t) {
    var n = mo.createElementNS ? mo.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e) : mo.createElement(e);
    return n && n.style ? n : mo.createElement(e)
}, Zo = function e(t, n, r) {
    var i = getComputedStyle(t);
    return i[n] || i.getPropertyValue(n.replace(Eo, `-$1`).toLowerCase()) || i.getPropertyValue(n) || !r && e(t, $o(n) || n, 1) || ``
}, Qo = `O,Moz,ms,Ms,Webkit`.split(`,`), $o = function(e, t, n) {
    var r = (t || _o).style
      , i = 5;
    if (e in r && !n)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Qo[i] + e in r); )
        ;
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? Qo[i] : ``) + e
}, es = function() {
    bo() && window.document && (po = window,
    mo = po.document,
    ho = mo.documentElement,
    _o = Xo(`div`) || {
        style: {}
    },
    Xo(`div`),
    Uo = $o(Uo),
    Wo = Uo + `Origin`,
    _o.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`,
    Yo = !!$o(`perspective`),
    yo = fo.core.reverting,
    go = 1)
}, ts = function(e) {
    var t = e.ownerSVGElement, n = Xo(`svg`, t && t.getAttribute(`xmlns`) || `http://www.w3.org/2000/svg`), r = e.cloneNode(!0), i;
    r.style.display = `block`,
    n.appendChild(r),
    ho.appendChild(n);
    try {
        i = r.getBBox()
    } catch {}
    return n.removeChild(r),
    ho.removeChild(n),
    i
}, ns = function(e, t) {
    for (var n = t.length; n--; )
        if (e.hasAttribute(t[n]))
            return e.getAttribute(t[n])
}, rs = function(e) {
    var t, n;
    try {
        t = e.getBBox()
    } catch {
        t = ts(e),
        n = 1
    }
    return t && (t.width || t.height) || n || (t = ts(e)),
    t && !t.width && !t.x && !t.y ? {
        x: +ns(e, [`x`, `cx`, `x1`]) || 0,
        y: +ns(e, [`y`, `cy`, `y1`]) || 0,
        width: 0,
        height: 0
    } : t
}, is = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && rs(e))
}, as = function(e, t) {
    if (t) {
        var n = e.style, r;
        t in xo && t !== Wo && (t = Uo),
        n.removeProperty ? (r = t.substr(0, 2),
        (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
        n.removeProperty(r === `--` ? t : t.replace(Eo, `-$1`).toLowerCase())) : n.removeAttribute(t)
    }
}, os = function(e, t, n, r, i, a) {
    var o = new Za(e._pt,t,n,0,1,a ? Io : Fo);
    return e._pt = o,
    o.b = r,
    o.e = i,
    e._props.push(n),
    o
}, ss = {
    deg: 1,
    rad: 1,
    turn: 1
}, cs = {
    grid: 1,
    flex: 1
}, ls = function e(t, n, r, i) {
    var a = parseFloat(r) || 0, o = (r + ``).trim().substr((a + ``).length) || `px`, s = _o.style, c = Do.test(n), l = t.tagName.toLowerCase() === `svg`, u = (l ? `client` : `offset`) + (c ? `Width` : `Height`), d = 100, f = i === `px`, p = i === `%`, m, h, g, _;
    if (i === o || !a || ss[i] || ss[o])
        return a;
    if (o !== `px` && !f && (a = e(t, n, r, `px`)),
    _ = t.getCTM && is(t),
    (p || o === `%`) && (xo[n] || ~n.indexOf(`adius`)))
        return m = _ ? t.getBBox()[c ? `width` : `height`] : t[u],
        Lr(p ? a / m * d : a / 100 * m);
    if (s[c ? `width` : `height`] = d + (f ? o : i),
    h = i !== `rem` && ~n.indexOf(`adius`) || i === `em` && t.appendChild && !l ? t : t.parentNode,
    _ && (h = (t.ownerSVGElement || {}).parentNode),
    (!h || h === mo || !h.appendChild) && (h = mo.body),
    g = h._gsap,
    g && p && g.width && c && g.time === ca.time && !g.uncache)
        return Lr(a / g.width * d);
    if (p && (n === `height` || n === `width`)) {
        var v = t.style[n];
        t.style[n] = d + i,
        m = t[u],
        v ? t.style[n] = v : as(t, n)
    } else
        (p || o === `%`) && !cs[Zo(h, `display`)] && (s.position = Zo(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(_o),
        m = _o[u],
        h.removeChild(_o),
        s.position = `absolute`;
    return c && p && (g = Pr(h),
    g.time = ca.time,
    g.width = h[u]),
    Lr(f ? m * a / d : m && a ? d / m * a : 0)
}, us = function(e, t, n, r) {
    var i;
    return go || es(),
    t in ko && t !== `transform` && (t = ko[t],
    ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
    xo[t] && t !== `transform` ? (i = Ss(e, r),
    i = t === `transformOrigin` ? i.svg ? i.origin : Cs(Zo(e, Wo)) + ` ` + i.zOrigin + `px` : i[t]) : (i = e.style[t],
    (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) && (i = hs[t] && hs[t](e, t, n) || Zo(e, t) || Fr(e, t) || +(t === `opacity`))),
    n && !~(i + ``).trim().indexOf(` `) ? ls(e, t, i, n) + n : i
}, ds = function(e, t, n, r) {
    if (!n || n === `none`) {
        var i = $o(t, e, 1)
          , a = i && Zo(e, i, 1);
        a && a !== n ? (t = i,
        n = a) : t === `borderColor` && (n = Zo(e, `borderTopColor`))
    }
    var o = new Za(this._pt,e.style,t,0,1,Ga), s = 0, c = 0, l, u, d, f, p, m, h, g, _, v, y, b;
    if (o.b = n,
    o.e = r,
    n += ``,
    r += ``,
    r.substring(0, 6) === `var(--` && (r = Zo(e, r.substring(4, r.indexOf(`)`)))),
    r === `auto` && (m = e.style[t],
    e.style[t] = r,
    r = Zo(e, t) || r,
    m ? e.style[t] = m : as(e, t)),
    l = [n, r],
    oa(l),
    n = l[0],
    r = l[1],
    d = n.match(ir) || [],
    b = r.match(ir) || [],
    b.length) {
        for (; u = ir.exec(r); )
            h = u[0],
            _ = r.substring(s, u.index),
            p ? p = (p + 1) % 5 : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
            h !== (m = d[c++] || ``) && (f = parseFloat(m) || 0,
            y = m.substr((f + ``).length),
            h.charAt(1) === `=` && (h = zr(f, h) + y),
            g = parseFloat(h),
            v = h.substr((g + ``).length),
            s = ir.lastIndex - v.length,
            v || (v = v || Mn.units[t] || y,
            s === r.length && (r += v,
            o.e += v)),
            y !== v && (f = ls(e, t, m, v) || 0),
            o._pt = {
                _next: o._pt,
                p: _ || c === 1 ? _ : `,`,
                s: f,
                c: g - f,
                m: p && p < 4 || t === `zIndex` ? Math.round : 0
            });
        o.c = s < r.length ? r.substring(s, r.length) : ``
    } else
        o.r = t === `display` && r === `none` ? Io : Fo;
    return or.test(r) && (o.e = 0),
    this._pt = o,
    o
}, fs = {
    top: `0%`,
    bottom: `100%`,
    left: `0%`,
    right: `100%`,
    center: `50%`
}, ps = function(e) {
    var t = e.split(` `)
      , n = t[0]
      , r = t[1] || `50%`;
    return (n === `top` || n === `bottom` || r === `left` || r === `right`) && (e = n,
    n = r,
    r = e),
    t[0] = fs[n] || n,
    t[1] = fs[r] || r,
    t.join(` `)
}, ms = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
        if (i === `all` || i === !0)
            r.cssText = ``,
            s = 1;
        else
            for (i = i.split(`,`),
            c = i.length; --c > -1; )
                o = i[c],
                xo[o] && (s = 1,
                o = o === `transformOrigin` ? Wo : Uo),
                as(n, o);
        s && (as(n, Uo),
        a && (a.svg && n.removeAttribute(`transform`),
        r.scale = r.rotate = r.translate = `none`,
        Ss(n, 1),
        a.uncache = 1,
        Ko(r)))
    }
}, hs = {
    clearProps: function(e, t, n, r, i) {
        if (i.data !== `isFromStart`) {
            var a = e._pt = new Za(e._pt,t,n,0,0,ms);
            return a.u = r,
            a.pr = -10,
            a.tween = i,
            e._props.push(n),
            1
        }
    }
}, gs = [1, 0, 0, 1, 0, 0], _s = {}, vs = function(e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e
}, ys = function(e) {
    var t = Zo(e, Uo);
    return vs(t) ? gs : t.substr(7).match(rr).map(Lr)
}, bs = function(e, t) {
    var n = e._gsap || Pr(e), r = e.style, i = ys(e), a, o, s, c;
    return n.svg && e.getAttribute(`transform`) ? (s = e.transform.baseVal.consolidate().matrix,
    i = [s.a, s.b, s.c, s.d, s.e, s.f],
    i.join(`,`) === `1,0,0,1,0,0` ? gs : i) : (i === gs && !e.offsetParent && e !== ho && !n.svg && (s = r.display,
    r.display = `block`,
    a = e.parentNode,
    (!a || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1,
    o = e.nextElementSibling,
    ho.appendChild(e)),
    i = ys(e),
    s ? r.display = s : as(e, `display`),
    c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : ho.removeChild(e))),
    t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
}, xs = function(e, t, n, r, i, a) {
    var o = e._gsap, s = i || bs(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(` `), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
    n ? s !== gs && (S = f * h - p * m) && (C = h / S * y + b * (-m / S) + (m * _ - h * g) / S,
    w = y * (-p / S) + f / S * b - (f * _ - p * g) / S,
    y = C,
    b = w) : (x = rs(e),
    y = x.x + (~v[0].indexOf(`%`) ? y / 100 * x.width : y),
    b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? b / 100 * x.height : b)),
    r || r !== !1 && o.smooth ? (g = y - c,
    _ = b - l,
    o.xOffset = u + (g * f + _ * m) - g,
    o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0,
    o.xOrigin = y,
    o.yOrigin = b,
    o.smooth = !!r,
    o.origin = t,
    o.originIsAbsolute = !!n,
    e.style[Wo] = `0px 0px`,
    a && (os(a, o, `xOrigin`, c, y),
    os(a, o, `yOrigin`, l, b),
    os(a, o, `xOffset`, u, o.xOffset),
    os(a, o, `yOffset`, d, o.yOffset)),
    e.setAttribute(`data-svg-origin`, y + ` ` + b)
}, Ss = function(e, t) {
    var n = e._gsap || new xa(e);
    if (`x`in n && !t && !n.uncache)
        return n;
    var r = e.style, i = n.scaleX < 0, a = `px`, o = `deg`, s = getComputedStyle(e), c = Zo(e, Wo) || `0`, l = u = d = m = h = g = _ = v = y = 0, u, d, f = p = 1, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, ee, te, ne, re, ie, ae;
    return n.svg = !!(e.getCTM && is(e)),
    s.translate && ((s.translate !== `none` || s.scale !== `none` || s.rotate !== `none`) && (r[Uo] = (s.translate === `none` ? `` : `translate3d(` + (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) + `) `) + (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) + (s.scale === `none` ? `` : `scale(` + s.scale.split(` `).join(`,`) + `) `) + (s[Uo] === `none` ? `` : s[Uo])),
    r.scale = r.rotate = r.translate = `none`),
    S = bs(e, n.svg),
    n.svg && (n.uncache ? (N = e.getBBox(),
    c = n.xOrigin - N.x + `px ` + (n.yOrigin - N.y) + `px`,
    M = ``) : M = !t && e.getAttribute(`data-svg-origin`),
    xs(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)),
    b = n.xOrigin || 0,
    x = n.yOrigin || 0,
    S !== gs && (E = S[0],
    D = S[1],
    O = S[2],
    k = S[3],
    l = A = S[4],
    u = j = S[5],
    S.length === 6 ? (f = Math.sqrt(E * E + D * D),
    p = Math.sqrt(k * k + O * O),
    m = E || D ? wo(D, E) * So : 0,
    _ = O || k ? wo(O, k) * So + m : 0,
    _ && (p *= Math.abs(Math.cos(_ * Co))),
    n.svg && (l -= b - (b * E + x * O),
    u -= x - (b * D + x * k))) : (ae = S[6],
    re = S[7],
    ee = S[8],
    te = S[9],
    ne = S[10],
    ie = S[11],
    l = S[12],
    u = S[13],
    d = S[14],
    C = wo(ae, ne),
    h = C * So,
    C && (w = Math.cos(-C),
    T = Math.sin(-C),
    M = A * w + ee * T,
    N = j * w + te * T,
    P = ae * w + ne * T,
    ee = A * -T + ee * w,
    te = j * -T + te * w,
    ne = ae * -T + ne * w,
    ie = re * -T + ie * w,
    A = M,
    j = N,
    ae = P),
    C = wo(-O, ne),
    g = C * So,
    C && (w = Math.cos(-C),
    T = Math.sin(-C),
    M = E * w - ee * T,
    N = D * w - te * T,
    P = O * w - ne * T,
    ie = k * T + ie * w,
    E = M,
    D = N,
    O = P),
    C = wo(D, E),
    m = C * So,
    C && (w = Math.cos(C),
    T = Math.sin(C),
    M = E * w + D * T,
    N = A * w + j * T,
    D = D * w - E * T,
    j = j * w - A * T,
    E = M,
    A = N),
    h && Math.abs(h) + Math.abs(m) > 359.9 && (h = m = 0,
    g = 180 - g),
    f = Lr(Math.sqrt(E * E + D * D + O * O)),
    p = Lr(Math.sqrt(j * j + ae * ae)),
    C = wo(A, j),
    _ = Math.abs(C) > 2e-4 ? C * So : 0,
    y = ie ? 1 / (ie < 0 ? -ie : ie) : 0),
    n.svg && (M = e.getAttribute(`transform`),
    n.forceCSS = e.setAttribute(`transform`, ``) || !vs(Zo(e, Uo)),
    M && e.setAttribute(`transform`, M))),
    Math.abs(_) > 90 && Math.abs(_) < 270 && (i ? (f *= -1,
    _ += m <= 0 ? 180 : -180,
    m += m <= 0 ? 180 : -180) : (p *= -1,
    _ += _ <= 0 ? 180 : -180)),
    t ||= n.uncache,
    n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a,
    n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a,
    n.z = d + a,
    n.scaleX = Lr(f),
    n.scaleY = Lr(p),
    n.rotation = Lr(m) + o,
    n.rotationX = Lr(h) + o,
    n.rotationY = Lr(g) + o,
    n.skewX = _ + o,
    n.skewY = v + o,
    n.transformPerspective = y + a,
    (n.zOrigin = parseFloat(c.split(` `)[2]) || !t && n.zOrigin || 0) && (r[Wo] = Cs(c)),
    n.xOffset = n.yOffset = 0,
    n.force3D = Mn.force3D,
    n.renderTransform = n.svg ? As : Yo ? ks : Ts,
    n.uncache = 0,
    n
}, Cs = function(e) {
    return (e = e.split(` `))[0] + ` ` + e[1]
}, ws = function(e, t, n) {
    var r = Ei(t);
    return Lr(parseFloat(t) + parseFloat(ls(e, `x`, n + `px`, r))) + r
}, Ts = function(e, t) {
    t.z = `0px`,
    t.rotationY = t.rotationX = `0deg`,
    t.force3D = 0,
    ks(e, t)
}, Es = `0deg`, Ds = `0px`, Os = `) `, ks = function(e, t) {
    var n = t || this
      , r = n.xPercent
      , i = n.yPercent
      , a = n.x
      , o = n.y
      , s = n.z
      , c = n.rotation
      , l = n.rotationY
      , u = n.rotationX
      , d = n.skewX
      , f = n.skewY
      , p = n.scaleX
      , m = n.scaleY
      , h = n.transformPerspective
      , g = n.force3D
      , _ = n.target
      , v = n.zOrigin
      , y = ``
      , b = g === `auto` && e && e !== 1 || g === !0;
    if (v && (u !== Es || l !== Es)) {
        var x = parseFloat(l) * Co, S = Math.sin(x), C = Math.cos(x), w;
        x = parseFloat(u) * Co,
        w = Math.cos(x),
        a = ws(_, a, S * w * -v),
        o = ws(_, o, -Math.sin(x) * -v),
        s = ws(_, s, C * w * -v + v)
    }
    h !== Ds && (y += `perspective(` + h + Os),
    (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
    (b || a !== Ds || o !== Ds || s !== Ds) && (y += s !== Ds || b ? `translate3d(` + a + `, ` + o + `, ` + s + `) ` : `translate(` + a + `, ` + o + Os),
    c !== Es && (y += `rotate(` + c + Os),
    l !== Es && (y += `rotateY(` + l + Os),
    u !== Es && (y += `rotateX(` + u + Os),
    (d !== Es || f !== Es) && (y += `skew(` + d + `, ` + f + Os),
    (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + Os),
    _.style[Uo] = y || `translate(0, 0)`
}, As = function(e, t) {
    var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
    s = parseFloat(s),
    c = parseFloat(c),
    l = parseFloat(l),
    l && (l = parseFloat(l),
    c += l,
    s += l),
    s || c ? (s *= Co,
    c *= Co,
    b = Math.cos(s) * u,
    x = Math.sin(s) * u,
    S = Math.sin(s - c) * -d,
    C = Math.cos(s - c) * d,
    c && (l *= Co,
    w = Math.tan(c - l),
    w = Math.sqrt(1 + w * w),
    S *= w,
    C *= w,
    l && (w = Math.tan(l),
    w = Math.sqrt(1 + w * w),
    b *= w,
    x *= w)),
    b = Lr(b),
    x = Lr(x),
    S = Lr(S),
    C = Lr(C)) : (b = u,
    C = d,
    x = S = 0),
    (v && !~(a + ``).indexOf(`px`) || y && !~(o + ``).indexOf(`px`)) && (v = ls(f, `x`, a, `px`),
    y = ls(f, `y`, o, `px`)),
    (p || m || h || g) && (v = Lr(v + p - (p * b + m * S) + h),
    y = Lr(y + m - (p * x + m * C) + g)),
    (r || i) && (w = f.getBBox(),
    v = Lr(v + r / 100 * w.width),
    y = Lr(y + i / 100 * w.height)),
    w = `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`,
    f.setAttribute(`transform`, w),
    _ && (f.style[Uo] = w)
}, js = function(e, t, n, r, i) {
    var a = 360, o = Wn(i), s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? So : 1) - r, c = r + s + `deg`, l, u;
    return o && (l = i.split(`_`)[1],
    l === `short` && (s %= a,
    s !== s % (a / 2) && (s += s < 0 ? a : -a)),
    l === `cw` && s < 0 ? s = (s + a * To) % a - ~~(s / a) * a : l === `ccw` && s > 0 && (s = (s - a * To) % a - ~~(s / a) * a)),
    e._pt = u = new Za(e._pt,t,n,r,s,jo),
    u.e = c,
    u.u = `deg`,
    e._props.push(n),
    u
}, Ms = function(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}, Ns = function(e, t, n) {
    var r = Ms({}, n._gsap), i = `perspective,force3D,transformOrigin,svgOrigin`, a = n.style, o, s, c, l, u, d, f, p;
    for (s in r.svg ? (c = n.getAttribute(`transform`),
    n.setAttribute(`transform`, ``),
    a[Uo] = t,
    o = Ss(n, 1),
    as(n, Uo),
    n.setAttribute(`transform`, c)) : (c = getComputedStyle(n)[Uo],
    a[Uo] = t,
    o = Ss(n, 1),
    a[Uo] = c),
    xo)
        c = r[s],
        l = o[s],
        c !== l && i.indexOf(s) < 0 && (f = Ei(c),
        p = Ei(l),
        u = f === p ? parseFloat(c) : ls(n, s, c, p),
        d = parseFloat(l),
        e._pt = new Za(e._pt,o,s,u,d - u,Ao),
        e._pt.u = p || 0,
        e._props.push(s));
    Ms(o, r)
};
Ir(`padding,margin,Width,Radius`, function(e, t) {
    var n = `Top`
      , r = `Right`
      , i = `Bottom`
      , a = `Left`
      , o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function(n) {
        return t < 2 ? e + n : `border` + n + e
    });
    hs[t > 1 ? `border` + e : e] = function(e, t, n, r, i) {
        var a, s;
        if (arguments.length < 4)
            return a = o.map(function(t) {
                return us(e, t, n)
            }),
            s = a.join(` `),
            s.split(a[0]).length === 5 ? a[0] : s;
        a = (r + ``).split(` `),
        s = {},
        o.forEach(function(e, t) {
            return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
        }),
        e.init(t, s, i)
    }
});
var Ps = {
    name: `css`,
    register: es,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, n, r, i) {
        var a = this._props, o = e.style, s = n.vars.startAt, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
        for (m in go || es(),
        this.styles = this.styles || Jo(e),
        C = this.styles.props,
        this.tween = n,
        t)
            if (m !== `autoRound` && (l = t[m],
            !(Or[m] && Da(m, t, n, r, e, i)))) {
                if (f = typeof l,
                p = hs[m],
                f === `function` && (l = l.call(n, r, e, i),
                f = typeof l),
                f === `string` && ~l.indexOf(`random(`) && (l = Wi(l)),
                p)
                    p(this, e, m, l, n) && (S = 1);
                else if (m.substr(0, 2) === `--`)
                    c = (getComputedStyle(e).getPropertyValue(m) + ``).trim(),
                    l += ``,
                    ia.lastIndex = 0,
                    ia.test(c) || (h = Ei(c),
                    g = Ei(l),
                    g ? h !== g && (c = ls(e, m, c, g) + g) : h && (l += h)),
                    this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
                    a.push(m),
                    C.push(m, 0, o[m]);
                else if (f !== `undefined`) {
                    if (s && m in s ? (c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m],
                    Wn(c) && ~c.indexOf(`random(`) && (c = Wi(c)),
                    Ei(c + ``) || c === `auto` || (c += Mn.units[m] || Ei(us(e, m)) || ``),
                    (c + ``).charAt(1) === `=` && (c = us(e, m))) : c = us(e, m),
                    d = parseFloat(c),
                    _ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2),
                    _ && (l = l.substr(2)),
                    u = parseFloat(l),
                    m in ko && (m === `autoAlpha` && (d === 1 && us(e, `visibility`) === `hidden` && u && (d = 0),
                    C.push(`visibility`, 0, o.visibility),
                    os(this, o, `visibility`, d ? `inherit` : `hidden`, u ? `inherit` : `hidden`, !u)),
                    m !== `scale` && m !== `transform` && (m = ko[m],
                    ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
                    v = m in xo,
                    v) {
                        if (this.styles.save(m),
                        w = l,
                        f === `string` && l.substring(0, 6) === `var(--`) {
                            if (l = Zo(e, l.substring(4, l.indexOf(`)`))),
                            l.substring(0, 5) === `calc(`) {
                                var T = e.style.perspective;
                                e.style.perspective = l,
                                l = Zo(e, `perspective`),
                                T ? e.style.perspective = T : as(e, `perspective`)
                            }
                            u = parseFloat(l)
                        }
                        if (y || (b = e._gsap,
                        b.renderTransform && !t.parseTransform || Ss(e, t.parseTransform),
                        x = t.smoothOrigin !== !1 && b.smooth,
                        y = this._pt = new Za(this._pt,o,Uo,0,1,b.renderTransform,b,0,-1),
                        y.dep = 1),
                        m === `scale`)
                            this._pt = new Za(this._pt,b,`scaleY`,b.scaleY,(_ ? zr(b.scaleY, _ + u) : u) - b.scaleY || 0,Ao),
                            this._pt.u = 0,
                            a.push(`scaleY`, m),
                            m += `X`;
                        else if (m === `transformOrigin`) {
                            C.push(Wo, 0, o[Wo]),
                            l = ps(l),
                            b.svg ? xs(e, l, 0, x, 0, this) : (g = parseFloat(l.split(` `)[2]) || 0,
                            g !== b.zOrigin && os(this, b, `zOrigin`, b.zOrigin, g),
                            os(this, o, m, Cs(c), Cs(l)));
                            continue
                        } else if (m === `svgOrigin`) {
                            xs(e, l, 1, x, 0, this);
                            continue
                        } else if (m in _s) {
                            js(this, b, m, d, _ ? zr(d, _ + l) : l);
                            continue
                        } else if (m === `smoothOrigin`) {
                            os(this, b, `smooth`, b.smooth, l);
                            continue
                        } else if (m === `force3D`) {
                            b[m] = l;
                            continue
                        } else if (m === `transform`) {
                            Ns(this, l, e);
                            continue
                        }
                    } else
                        m in o || (m = $o(m) || m);
                    if (v || (u || u === 0) && (d || d === 0) && !Oo.test(l) && m in o)
                        h = (c + ``).substr((d + ``).length),
                        u ||= 0,
                        g = Ei(l) || (m in Mn.units ? Mn.units[m] : h),
                        h !== g && (d = ls(e, m, c, g)),
                        this._pt = new Za(this._pt,v ? b : o,m,d,(_ ? zr(d, _ + u) : u) - d,!v && (g === `px` || m === `zIndex`) && t.autoRound !== !1 ? Po : Ao),
                        this._pt.u = g || 0,
                        v && w !== l ? (this._pt.b = c,
                        this._pt.e = w,
                        this._pt.r = No) : h !== g && g !== `%` && (this._pt.b = c,
                        this._pt.r = Mo);
                    else if (m in o)
                        ds.call(this, e, m, c, _ ? _ + l : l);
                    else if (m in e)
                        this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
                    else if (m !== `parseTransform`) {
                        _r(m, l);
                        continue
                    }
                    v || (m in o ? C.push(m, 0, o[m]) : typeof e[m] == `function` ? C.push(m, 2, e[m]()) : C.push(m, 1, c || e[m])),
                    a.push(m)
                }
            }
        S && Xa(this)
    },
    render: function(e, t) {
        if (t.tween._time || !yo())
            for (var n = t._pt; n; )
                n.r(e, n.d),
                n = n._next;
        else
            t.styles.revert()
    },
    get: us,
    aliases: ko,
    getSetter: function(e, t, n) {
        var r = ko[t];
        return r && r.indexOf(`,`) < 0 && (t = r),
        t in xo && t !== Wo && (e._gsap.x || us(e, `x`)) ? n && vo === n ? t === `scale` ? Bo : zo : (vo = n || {}) && (t === `scale` ? Vo : Ho) : e.style && !qn(e.style[t]) ? Lo : ~t.indexOf(`-`) ? Ro : Ha(e, t)
    },
    core: {
        _removeProperty: as,
        _getMatrix: bs
    }
};
fo.utils.checkPrefix = $o,
fo.core.getStyleSaver = Jo,
(function(e, t, n, r) {
    var i = Ir(e + `,` + t + `,` + n, function(e) {
        xo[e] = 1
    });
    Ir(t, function(e) {
        Mn.units[e] = `deg`,
        _s[e] = 1
    }),
    ko[i[13]] = e + `,` + t,
    Ir(r, function(e) {
        var t = e.split(`:`);
        ko[t[1]] = i[t[0]]
    })
}
)(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`, `rotation,rotationX,rotationY,skewX,skewY`, `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`, `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),
Ir(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`, function(e) {
    Mn.units[e] = `px`
}),
fo.registerPlugin(Ps);
var K = fo.registerPlugin(Ps) || fo;
K.core.Tween;
function Fs(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        `value`in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function Is(e, t, n) {
    return t && Fs(e.prototype, t),
    n && Fs(e, n),
    e
}
var Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs = function() {
    return Ls || typeof window < `u` && (Ls = window.gsap) && Ls.registerPlugin && Ls
}, Zs = 1, Qs = [], q = [], $s = [], ec = Date.now, tc = function(e, t) {
    return t
}, nc = function() {
    var e = Gs.core
      , t = e.bridge || {}
      , n = e._scrollers
      , r = e._proxies;
    n.push.apply(n, q),
    r.push.apply(r, $s),
    q = n,
    $s = r,
    tc = function(e, n) {
        return t[e](n)
    }
}, rc = function(e, t) {
    return ~$s.indexOf(e) && $s[$s.indexOf(e) + 1][t]
}, ic = function(e) {
    return !!~Ks.indexOf(e)
}, ac = function(e, t, n, r, i) {
    return e.addEventListener(t, n, {
        passive: r !== !1,
        capture: !!i
    })
}, oc = function(e, t, n, r) {
    return e.removeEventListener(t, n, !!r)
}, sc = `scrollLeft`, cc = `scrollTop`, lc = function() {
    return qs && qs.isPressed || q.cache++
}, uc = function(e, t) {
    var n = function n(r) {
        if (r || r === 0) {
            Zs && (zs.history.scrollRestoration = `manual`);
            var i = qs && qs.isPressed;
            r = n.v = Math.round(r) || (qs && qs.iOS ? 1 : 0),
            e(r),
            n.cacheID = q.cache,
            i && tc(`ss`, r)
        } else
            (t || q.cache !== n.cacheID || tc(`ref`)) && (n.cacheID = q.cache,
            n.v = e());
        return n.v + n.offset
    };
    return n.offset = 0,
    e && n
}, dc = {
    s: sc,
    p: `left`,
    p2: `Left`,
    os: `right`,
    os2: `Right`,
    d: `width`,
    d2: `Width`,
    a: `x`,
    sc: uc(function(e) {
        return arguments.length ? zs.scrollTo(e, fc.sc()) : zs.pageXOffset || Bs[sc] || Vs[sc] || Hs[sc] || 0
    })
}, fc = {
    s: cc,
    p: `top`,
    p2: `Top`,
    os: `bottom`,
    os2: `Bottom`,
    d: `height`,
    d2: `Height`,
    a: `y`,
    op: dc,
    sc: uc(function(e) {
        return arguments.length ? zs.scrollTo(dc.sc(), e) : zs.pageYOffset || Bs[cc] || Vs[cc] || Hs[cc] || 0
    })
}, pc = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Ls.utils.toArray)(e)[0] || (typeof e == `string` && Ls.config().nullTargetWarn !== !1 ? console.warn(`Element not found:`, e) : null)
}, mc = function(e, t) {
    for (var n = t.length; n--; )
        if (t[n] === e || t[n].contains(e))
            return !0;
    return !1
}, hc = function(e, t) {
    var n = t.s
      , r = t.sc;
    ic(e) && (e = Bs.scrollingElement || Vs);
    var i = q.indexOf(e)
      , a = r === fc.sc ? 1 : 2;
    !~i && (i = q.push(e) - 1),
    q[i + a] || ac(e, `scroll`, lc);
    var o = q[i + a]
      , s = o || (q[i + a] = uc(rc(e, n), !0) || (ic(e) ? r : uc(function(t) {
        return arguments.length ? e[n] = t : e[n]
    })));
    return s.target = e,
    o || (s.smooth = Ls.getProperty(e, `scrollBehavior`) === `smooth`),
    s
}, gc = function(e, t, n) {
    var r = e
      , i = e
      , a = ec()
      , o = a
      , s = t || 50
      , c = Math.max(500, s * 3)
      , l = function(e, t) {
        var c = ec();
        t || c - a > s ? (i = r,
        r = e,
        o = a,
        a = c) : n ? r += e : r = i + (e - i) / (c - o) * (a - o)
    };
    return {
        update: l,
        reset: function() {
            i = r = n ? 0 : r,
            o = a = 0
        },
        getVelocity: function(e) {
            var t = o
              , s = i
              , u = ec();
            return (e || e === 0) && e !== r && l(e),
            a === o || u - o > c ? 0 : (r + (n ? s : -s)) / ((n ? u : a) - t) * 1e3
        }
    }
}, _c = function(e, t) {
    return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, vc = function(e) {
    var t = Math.max.apply(Math, e)
      , n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n
}, yc = function() {
    Gs = Ls.core.globals().ScrollTrigger,
    Gs && Gs.core && nc()
}, bc = function(e) {
    return Ls = e || Xs(),
    !Rs && Ls && typeof document < `u` && document.body && (zs = window,
    Bs = document,
    Vs = Bs.documentElement,
    Hs = Bs.body,
    Ks = [zs, Bs, Vs, Hs],
    Ls.utils.clamp,
    Ys = Ls.core.context || function() {}
    ,
    Ws = `onpointerenter`in Hs ? `pointer` : `mouse`,
    Us = xc.isTouch = zs.matchMedia && zs.matchMedia(`(hover: none), (pointer: coarse)`).matches ? 1 : `ontouchstart`in zs || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Js = xc.eventTypes = (`ontouchstart`in Vs ? `touchstart,touchmove,touchcancel,touchend` : `onpointerdown`in Vs ? `pointerdown,pointermove,pointercancel,pointerup` : `mousedown,mousemove,mouseup,mouseup`).split(`,`),
    setTimeout(function() {
        return Zs = 0
    }, 500),
    Rs = 1),
    Gs || yc(),
    Rs
};
dc.op = fc,
q.cache = 0;
var xc = function() {
    function e(e) {
        this.init(e)
    }
    var t = e.prototype;
    return t.init = function(e) {
        Rs || bc(Ls) || console.warn(`Please gsap.registerPlugin(Observer)`),
        Gs || yc();
        var t = e.tolerance
          , n = e.dragMinimum
          , r = e.type
          , i = e.target
          , a = e.lineHeight
          , o = e.debounce
          , s = e.preventDefault
          , c = e.onStop
          , l = e.onStopDelay
          , u = e.ignore
          , d = e.wheelSpeed
          , f = e.event
          , p = e.onDragStart
          , m = e.onDragEnd
          , h = e.onDrag
          , g = e.onPress
          , _ = e.onRelease
          , v = e.onRight
          , y = e.onLeft
          , b = e.onUp
          , x = e.onDown
          , S = e.onChangeX
          , C = e.onChangeY
          , w = e.onChange
          , T = e.onToggleX
          , E = e.onToggleY
          , D = e.onHover
          , O = e.onHoverEnd
          , k = e.onMove
          , A = e.ignoreCheck
          , j = e.isNormalizer
          , M = e.onGestureStart
          , N = e.onGestureEnd
          , P = e.onWheel
          , ee = e.onEnable
          , te = e.onDisable
          , ne = e.onClick
          , re = e.scrollSpeed
          , ie = e.capture
          , ae = e.allowClicks
          , oe = e.lockAxis
          , se = e.onLockAxis;
        this.target = i = pc(i) || Vs,
        this.vars = e,
        u &&= Ls.utils.toArray(u),
        t ||= 1e-9,
        n ||= 0,
        d ||= 1,
        re ||= 1,
        r ||= `wheel,touch,pointer`,
        o = o !== !1,
        a ||= parseFloat(zs.getComputedStyle(Hs).lineHeight) || 22;
        var F, ce, le, ue, I, de, fe, L = this, pe = 0, me = 0, he = e.passive || !s && e.passive !== !1, ge = hc(i, dc), _e = hc(i, fc), ve = ge(), ye = _e(), be = ~r.indexOf(`touch`) && !~r.indexOf(`pointer`) && Js[0] === `pointerdown`, R = ic(i), z = i.ownerDocument || Bs, xe = [0, 0, 0], B = [0, 0, 0], Se = 0, Ce = function() {
            return Se = ec()
        }, we = function(e, t) {
            return (L.event = e) && u && mc(e.target, u) || t && be && e.pointerType !== `touch` || A && A(e, t)
        }, Te = function() {
            L._vx.reset(),
            L._vy.reset(),
            ce.pause(),
            c && c(L)
        }, Ee = function() {
            var e = L.deltaX = vc(xe)
              , n = L.deltaY = vc(B)
              , r = Math.abs(e) >= t
              , i = Math.abs(n) >= t;
            w && (r || i) && w(L, e, n, xe, B),
            r && (v && L.deltaX > 0 && v(L),
            y && L.deltaX < 0 && y(L),
            S && S(L),
            T && L.deltaX < 0 != pe < 0 && T(L),
            pe = L.deltaX,
            xe[0] = xe[1] = xe[2] = 0),
            i && (x && L.deltaY > 0 && x(L),
            b && L.deltaY < 0 && b(L),
            C && C(L),
            E && L.deltaY < 0 != me < 0 && E(L),
            me = L.deltaY,
            B[0] = B[1] = B[2] = 0),
            (ue || le) && (k && k(L),
            le &&= (p && le === 1 && p(L),
            h && h(L),
            0),
            ue = !1),
            de && !(de = !1) && se && se(L),
            I &&= (P(L),
            !1),
            F = 0
        }, De = function(e, t, n) {
            xe[n] += e,
            B[n] += t,
            L._vx.update(e),
            L._vy.update(t),
            o ? F ||= requestAnimationFrame(Ee) : Ee()
        }, Oe = function(e, t) {
            oe && !fe && (L.axis = fe = Math.abs(e) > Math.abs(t) ? `x` : `y`,
            de = !0),
            fe !== `y` && (xe[2] += e,
            L._vx.update(e, !0)),
            fe !== `x` && (B[2] += t,
            L._vy.update(t, !0)),
            o ? F ||= requestAnimationFrame(Ee) : Ee()
        }, ke = function(e) {
            if (!we(e, 1)) {
                e = _c(e, s);
                var t = e.clientX
                  , r = e.clientY
                  , i = t - L.x
                  , a = r - L.y
                  , o = L.isDragging;
                L.x = t,
                L.y = r,
                (o || (i || a) && (Math.abs(L.startX - t) >= n || Math.abs(L.startY - r) >= n)) && (le ||= o ? 2 : 1,
                o || (L.isDragging = !0),
                Oe(i, a))
            }
        }, Ae = L.onPress = function(e) {
            we(e, 1) || e && e.button || (L.axis = fe = null,
            ce.pause(),
            L.isPressed = !0,
            e = _c(e),
            pe = me = 0,
            L.startX = L.x = e.clientX,
            L.startY = L.y = e.clientY,
            L._vx.reset(),
            L._vy.reset(),
            ac(j ? i : z, Js[1], ke, he, !0),
            L.deltaX = L.deltaY = 0,
            g && g(L))
        }
        , je = L.onRelease = function(e) {
            if (!we(e, 1)) {
                oc(j ? i : z, Js[1], ke, !0);
                var t = !isNaN(L.y - L.startY)
                  , n = L.isDragging
                  , r = n && (Math.abs(L.x - L.startX) > 3 || Math.abs(L.y - L.startY) > 3)
                  , a = _c(e);
                !r && t && (L._vx.reset(),
                L._vy.reset(),
                s && ae && Ls.delayedCall(.08, function() {
                    if (ec() - Se > 300 && !e.defaultPrevented) {
                        if (e.target.click)
                            e.target.click();
                        else if (z.createEvent) {
                            var t = z.createEvent(`MouseEvents`);
                            t.initMouseEvent(`click`, !0, !0, zs, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null),
                            e.target.dispatchEvent(t)
                        }
                    }
                })),
                L.isDragging = L.isGesturing = L.isPressed = !1,
                c && n && !j && ce.restart(!0),
                le && Ee(),
                m && n && m(L),
                _ && _(L, r)
            }
        }
        , V = function(e) {
            return e.touches && e.touches.length > 1 && (L.isGesturing = !0) && M(e, L.isDragging)
        }, Me = function() {
            return (L.isGesturing = !1) || N(L)
        }, Ne = function(e) {
            if (!we(e)) {
                var t = ge()
                  , n = _e();
                De((t - ve) * re, (n - ye) * re, 1),
                ve = t,
                ye = n,
                c && ce.restart(!0)
            }
        }, Pe = function(e) {
            if (!we(e)) {
                e = _c(e, s),
                P && (I = !0);
                var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? zs.innerHeight : 1) * d;
                De(e.deltaX * t, e.deltaY * t, 0),
                c && !j && ce.restart(!0)
            }
        }, Fe = function(e) {
            if (!we(e)) {
                var t = e.clientX
                  , n = e.clientY
                  , r = t - L.x
                  , i = n - L.y;
                L.x = t,
                L.y = n,
                ue = !0,
                c && ce.restart(!0),
                (r || i) && Oe(r, i)
            }
        }, Ie = function(e) {
            L.event = e,
            D(L)
        }, Le = function(e) {
            L.event = e,
            O(L)
        }, Re = function(e) {
            return we(e) || _c(e, s) && ne(L)
        };
        ce = L._dc = Ls.delayedCall(l || .25, Te).pause(),
        L.deltaX = L.deltaY = 0,
        L._vx = gc(0, 50, !0),
        L._vy = gc(0, 50, !0),
        L.scrollX = ge,
        L.scrollY = _e,
        L.isDragging = L.isGesturing = L.isPressed = !1,
        Ys(this),
        L.enable = function(e) {
            return L.isEnabled || (ac(R ? z : i, `scroll`, lc),
            r.indexOf(`scroll`) >= 0 && ac(R ? z : i, `scroll`, Ne, he, ie),
            r.indexOf(`wheel`) >= 0 && ac(i, `wheel`, Pe, he, ie),
            (r.indexOf(`touch`) >= 0 && Us || r.indexOf(`pointer`) >= 0) && (ac(i, Js[0], Ae, he, ie),
            ac(z, Js[2], je),
            ac(z, Js[3], je),
            ae && ac(i, `click`, Ce, !0, !0),
            ne && ac(i, `click`, Re),
            M && ac(z, `gesturestart`, V),
            N && ac(z, `gestureend`, Me),
            D && ac(i, Ws + `enter`, Ie),
            O && ac(i, Ws + `leave`, Le),
            k && ac(i, Ws + `move`, Fe)),
            L.isEnabled = !0,
            L.isDragging = L.isGesturing = L.isPressed = ue = le = !1,
            L._vx.reset(),
            L._vy.reset(),
            ve = ge(),
            ye = _e(),
            e && e.type && Ae(e),
            ee && ee(L)),
            L
        }
        ,
        L.disable = function() {
            L.isEnabled && (Qs.filter(function(e) {
                return e !== L && ic(e.target)
            }).length || oc(R ? z : i, `scroll`, lc),
            L.isPressed && (L._vx.reset(),
            L._vy.reset(),
            oc(j ? i : z, Js[1], ke, !0)),
            oc(R ? z : i, `scroll`, Ne, ie),
            oc(i, `wheel`, Pe, ie),
            oc(i, Js[0], Ae, ie),
            oc(z, Js[2], je),
            oc(z, Js[3], je),
            oc(i, `click`, Ce, !0),
            oc(i, `click`, Re),
            oc(z, `gesturestart`, V),
            oc(z, `gestureend`, Me),
            oc(i, Ws + `enter`, Ie),
            oc(i, Ws + `leave`, Le),
            oc(i, Ws + `move`, Fe),
            L.isEnabled = L.isPressed = L.isDragging = !1,
            te && te(L))
        }
        ,
        L.kill = L.revert = function() {
            L.disable();
            var e = Qs.indexOf(L);
            e >= 0 && Qs.splice(e, 1),
            qs === L && (qs = 0)
        }
        ,
        Qs.push(L),
        j && ic(i) && (qs = L),
        L.enable(f)
    }
    ,
    Is(e, [{
        key: `velocityX`,
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: `velocityY`,
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    e
}();
xc.version = `3.15.0`,
xc.create = function(e) {
    return new xc(e)
}
,
xc.register = bc,
xc.getAll = function() {
    return Qs.slice()
}
,
xc.getById = function(e) {
    return Qs.filter(function(t) {
        return t.vars.id === e
    })[0]
}
,
Xs() && Ls.registerPlugin(xc);
var J, Sc, Y, X, Cc, Z, wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc = 1, $c = Date.now, el = $c(), tl = 0, nl = 0, rl = function(e, t, n) {
    var r = yl(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
    return n[`_` + t + `Clamp`] = r,
    r ? e.substr(6, e.length - 7) : e
}, il = function(e, t) {
    return t && (!yl(e) || e.substr(0, 6) !== `clamp(`) ? `clamp(` + e + `)` : e
}, al = function e() {
    return nl && requestAnimationFrame(e)
}, ol = function() {
    return jc = 1
}, sl = function() {
    return jc = 0
}, cl = function(e) {
    return e
}, ll = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, ul = function() {
    return typeof window < `u`
}, dl = function() {
    return J || ul() && (J = window.gsap) && J.registerPlugin && J
}, fl = function(e) {
    return !!~wc.indexOf(e)
}, pl = function(e) {
    return (e === `Height` ? Jc : Y[`inner` + e]) || Cc[`client` + e] || Z[`client` + e]
}, ml = function(e) {
    return rc(e, `getBoundingClientRect`) || (fl(e) ? function() {
        return Bu.width = Y.innerWidth,
        Bu.height = Jc,
        Bu
    }
    : function() {
        return Wl(e)
    }
    )
}, hl = function(e, t, n) {
    var r = n.d
      , i = n.d2
      , a = n.a;
    return (a = rc(e, `getBoundingClientRect`)) ? function() {
        return a()[r]
    }
    : function() {
        return (t ? pl(i) : e[`client` + i]) || 0
    }
}, gl = function(e, t) {
    return !t || ~$s.indexOf(e) ? ml(e) : function() {
        return Bu
    }
}, _l = function(e, t) {
    var n = t.s
      , r = t.d2
      , i = t.d
      , a = t.a;
    return Math.max(0, (n = `scroll` + r) && (a = rc(e, n)) ? a() - ml(e)()[i] : fl(e) ? (Cc[n] || Z[n]) - pl(r) : e[n] - e[`offset` + r])
}, vl = function(e, t) {
    for (var n = 0; n < Ic.length; n += 3)
        (!t || ~t.indexOf(Ic[n + 1])) && e(Ic[n], Ic[n + 1], Ic[n + 2])
}, yl = function(e) {
    return typeof e == `string`
}, bl = function(e) {
    return typeof e == `function`
}, xl = function(e) {
    return typeof e == `number`
}, Sl = function(e) {
    return typeof e == `object`
}, Cl = function(e, t, n) {
    return e && e.progress(+!t) && n && e.pause()
}, wl = function(e, t, n) {
    if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
            return t(e, n)
        }) : t(e, n);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, Tl = Math.abs, El = `left`, Dl = `top`, Ol = `right`, kl = `bottom`, Al = `width`, jl = `height`, Ml = `Right`, Nl = `Left`, Pl = `Top`, Fl = `Bottom`, Il = `padding`, Ll = `margin`, Rl = `Width`, zl = `Height`, Bl = `px`, Vl = function(e) {
    return Y.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e)
}, Hl = function(e) {
    var t = Vl(e).position;
    e.style.position = t === `absolute` || t === `fixed` ? t : `relative`
}, Ul = function(e, t) {
    for (var n in t)
        n in e || (e[n] = t[n]);
    return e
}, Wl = function(e, t) {
    var n = t && Vl(e)[Mc] !== `matrix(1, 0, 0, 1, 0, 0)` && J.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , r = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
    return n && n.progress(0).kill(),
    r
}, Gl = function(e, t) {
    var n = t.d2;
    return e[`offset` + n] || e[`client` + n] || 0
}, Kl = function(e) {
    var t = [], n = e.labels, r = e.duration(), i;
    for (i in n)
        t.push(n[i] / r);
    return t
}, ql = function(e) {
    return function(t) {
        return J.utils.snap(Kl(e), t)
    }
}, Jl = function(e) {
    var t = J.utils.snap(e)
      , n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
        return e - t
    });
    return n ? function(e, r, i) {
        i === void 0 && (i = .001);
        var a;
        if (!r)
            return t(e);
        if (r > 0) {
            for (e -= i,
            a = 0; a < n.length; a++)
                if (n[a] >= e)
                    return n[a];
            return n[a - 1]
        } else
            for (a = n.length,
            e += i; a--; )
                if (n[a] <= e)
                    return n[a];
        return n[0]
    }
    : function(n, r, i) {
        i === void 0 && (i = .001);
        var a = t(n);
        return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e)
    }
}, Yl = function(e) {
    return function(t, n) {
        return Jl(Kl(e))(t, n.direction)
    }
}, Xl = function(e, t, n, r) {
    return n.split(`,`).forEach(function(n) {
        return e(t, n, r)
    })
}, Zl = function(e, t, n, r, i) {
    return e.addEventListener(t, n, {
        passive: !r,
        capture: !!i
    })
}, Ql = function(e, t, n, r) {
    return e.removeEventListener(t, n, !!r)
}, $l = function(e, t, n) {
    n &&= n.wheelHandler,
    n && (e(t, `wheel`, n),
    e(t, `touchmove`, n))
}, eu = {
    startColor: `green`,
    endColor: `red`,
    indent: 0,
    fontSize: `16px`,
    fontWeight: `normal`
}, tu = {
    toggleActions: `play`,
    anticipatePin: 0
}, nu = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, ru = function(e, t) {
    if (yl(e)) {
        var n = e.indexOf(`=`)
          , r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
        ~n && (e.indexOf(`%`) > n && (r *= t / 100),
        e = e.substr(0, n - 1)),
        e = r + (e in nu ? nu[e] * t : ~e.indexOf(`%`) ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, iu = function(e, t, n, r, i, a, o, s) {
    var c = i.startColor
      , l = i.endColor
      , u = i.fontSize
      , d = i.indent
      , f = i.fontWeight
      , p = X.createElement(`div`)
      , m = fl(n) || rc(n, `pinType`) === `fixed`
      , h = e.indexOf(`scroller`) !== -1
      , g = m ? Z : n.tagName === `IFRAME` ? n.contentDocument.body : n
      , _ = e.indexOf(`start`) !== -1
      , v = _ ? c : l
      , y = `border-color:` + v + `;font-size:` + u + `;color:` + v + `;font-weight:` + f + `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
    return y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`),
    (h || s || !m) && (y += (r === fc ? Ol : kl) + `:` + (a + parseFloat(d)) + `px;`),
    o && (y += `box-sizing:border-box;text-align:left;width:` + o.offsetWidth + `px;`),
    p._isStart = _,
    p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
    p.style.cssText = y,
    p.innerText = t || t === 0 ? e + `-` + t : e,
    g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
    p._offset = p[`offset` + r.op.d2],
    au(p, 0, r, _),
    p
}, au = function(e, t, n, r) {
    var i = {
        display: `block`
    }
      , a = n[r ? `os2` : `p2`]
      , o = n[r ? `p2` : `os2`];
    e._isFlipped = r,
    i[n.a + `Percent`] = r ? -100 : 0,
    i[n.a] = r ? `1px` : 0,
    i[`border` + a + Rl] = 1,
    i[`border` + o + Rl] = 0,
    i[n.p] = t + `px`,
    J.set(e, i)
}, Q = [], ou = {}, su, cu = function() {
    return $c() - tl > 34 && (su ||= requestAnimationFrame(ju))
}, lu = function() {
    (!Bc || !Bc.isPressed || Bc.startX > Z.clientWidth) && (q.cache++,
    Bc ? su ||= requestAnimationFrame(ju) : ju(),
    tl || hu(`scrollStart`),
    tl = $c())
}, uu = function() {
    Uc = Y.innerWidth,
    Hc = Y.innerHeight
}, du = function(e) {
    q.cache++,
    (e === !0 || !Ac && !zc && !X.fullscreenElement && !X.webkitFullscreenElement && (!Vc || Uc !== Y.innerWidth || Math.abs(Y.innerHeight - Hc) > Y.innerHeight * .25)) && Tc.restart(!0)
}, fu = {}, pu = [], mu = function e() {
    return Ql($, `scrollEnd`, e) || Du(!0)
}, hu = function(e) {
    return fu[e] && fu[e].map(function(e) {
        return e()
    }) || pu
}, gu = [], _u = function(e) {
    for (var t = 0; t < gu.length; t += 5)
        (!e || gu[t + 4] && gu[t + 4].query === e) && (gu[t].style.cssText = gu[t + 1],
        gu[t].getBBox && gu[t].setAttribute(`transform`, gu[t + 2] || ``),
        gu[t + 3].uncache = 1)
}, vu = function() {
    return q.forEach(function(e) {
        return bl(e) && ++e.cacheID && (e.rec = e())
    })
}, yu = function(e, t) {
    var n;
    for (Nc = 0; Nc < Q.length; Nc++)
        n = Q[Nc],
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
    Yc = !0,
    t && _u(t),
    t || hu(`revert`)
}, bu = function(e, t) {
    q.cache++,
    (t || !xu) && q.forEach(function(e) {
        return bl(e) && e.cacheID++ && (e.rec = 0)
    }),
    yl(e) && (Y.history.scrollRestoration = Kc = e)
}, xu, Su = 0, Cu, wu = function() {
    if (Cu !== Su) {
        var e = Cu = Su;
        requestAnimationFrame(function() {
            return e === Su && Du(!0)
        })
    }
}, Tu = function() {
    Z.appendChild(qc),
    Jc = !Bc && qc.offsetHeight || Y.innerHeight,
    Z.removeChild(qc)
}, Eu = function(e) {
    return Ec(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t) {
        return t.style.display = e ? `none` : `block`
    })
}, Du = function(e, t) {
    if (Cc = X.documentElement,
    Z = X.body,
    wc = [Y, X, Cc, Z],
    tl && !e && !Yc) {
        Zl($, `scrollEnd`, mu);
        return
    }
    Tu(),
    xu = $.isRefreshing = !0,
    Yc || vu();
    var n = hu(`refreshInit`);
    Lc && $.sort(),
    t || yu(),
    q.forEach(function(e) {
        bl(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`),
        e(0))
    }),
    Q.slice(0).forEach(function(e) {
        return e.refresh()
    }),
    Yc = !1,
    Q.forEach(function(e) {
        if (e._subPinOffset && e.pin) {
            var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`
              , n = e.pin[t];
            e.revert(!0, 1),
            e.adjustPinSpacing(e.pin[t] - n),
            e.refresh()
        }
    }),
    Xc = 1,
    Eu(!0),
    Q.forEach(function(e) {
        var t = _l(e.scroller, e._dir)
          , n = e.vars.end === `max` || e._endClamp && e.end > t
          , r = e._startClamp && e.start >= t;
        (n || r) && e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0)
    }),
    Eu(!1),
    Xc = 0,
    n.forEach(function(e) {
        return e && e.render && e.render(-1)
    }),
    q.forEach(function(e) {
        bl(e) && (e.smooth && requestAnimationFrame(function() {
            return e.target.style.scrollBehavior = `smooth`
        }),
        e.rec && e(e.rec))
    }),
    bu(Kc, 1),
    Tc.pause(),
    Su++,
    xu = 2,
    ju(2),
    Q.forEach(function(e) {
        return bl(e.vars.onRefresh) && e.vars.onRefresh(e)
    }),
    xu = $.isRefreshing = !1,
    hu(`refresh`)
}, Ou = 0, ku = 1, Au, ju = function(e) {
    if (e === 2 || !xu && !Yc) {
        $.isUpdating = !0,
        Au && Au.update(0);
        var t = Q.length
          , n = $c()
          , r = n - el >= 50
          , i = t && Q[0].scroll();
        if (ku = Ou > i ? -1 : 1,
        xu || (Ou = i),
        r && (tl && !jc && n - tl > 200 && (tl = 0,
        hu(`scrollEnd`)),
        Oc = el,
        el = n),
        ku < 0) {
            for (Nc = t; Nc-- > 0; )
                Q[Nc] && Q[Nc].update(0, r);
            ku = 1
        } else
            for (Nc = 0; Nc < t; Nc++)
                Q[Nc] && Q[Nc].update(0, r);
        $.isUpdating = !1
    }
    su = 0
}, Mu = [El, Dl, kl, Ol, Ll + Fl, Ll + Ml, Ll + Pl, Ll + Nl, `display`, `flexShrink`, `float`, `zIndex`, `gridColumnStart`, `gridColumnEnd`, `gridRowStart`, `gridRowEnd`, `gridArea`, `justifySelf`, `alignSelf`, `placeSelf`, `order`], Nu = Mu.concat([Al, jl, `boxSizing`, `max` + Rl, `max` + zl, `position`, Ll, Il, Il + Pl, Il + Ml, Il + Fl, Il + Nl]), Pu = function(e, t, n) {
    Lu(n);
    var r = e._gsap;
    if (r.spacerIsNative)
        Lu(r.spacerState);
    else if (e._gsap.swappedIn) {
        var i = t.parentNode;
        i && (i.insertBefore(e, t),
        i.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, Fu = function(e, t, n, r) {
    if (!e._gsap.swappedIn) {
        for (var i = Mu.length, a = t.style, o = e.style, s; i--; )
            s = Mu[i],
            a[s] = n[s];
        a.position = n.position === `absolute` ? `absolute` : `relative`,
        n.display === `inline` && (a.display = `inline-block`),
        o[kl] = o[Ol] = `auto`,
        a.flexBasis = n.flexBasis || `auto`,
        a.overflow = `visible`,
        a.boxSizing = `border-box`,
        a[Al] = Gl(e, dc) + Bl,
        a[jl] = Gl(e, fc) + Bl,
        a[Il] = o[Ll] = o[Dl] = o[El] = `0`,
        Lu(r),
        o[Al] = o[`max` + Rl] = n[Al],
        o[jl] = o[`max` + zl] = n[jl],
        o[Il] = n[Il],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, Iu = /([A-Z])/g, Lu = function(e) {
    if (e) {
        var t = e.t.style, n = e.length, r = 0, i, a;
        for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; r < n; r += 2)
            a = e[r + 1],
            i = e[r],
            a ? t[i] = a : t[i] && t.removeProperty(i.replace(Iu, `-$1`).toLowerCase())
    }
}, Ru = function(e) {
    for (var t = Nu.length, n = e.style, r = [], i = 0; i < t; i++)
        r.push(Nu[i], n[Nu[i]]);
    return r.t = e,
    r
}, zu = function(e, t, n) {
    for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
        o = e[a],
        r.push(o, o in t ? t[o] : e[a + 1]);
    return r.t = e.t,
    r
}, Bu = {
    left: 0,
    top: 0
}, Vu = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    bl(e) && (e = e(s)),
    yl(e) && e.substr(0, 3) === `max` && (e = d + (e.charAt(4) === `=` ? ru(`0` + e.substr(3), n) : 0));
    var m = f ? f.time() : 0, h, g, _;
    if (f && f.seek(0),
    isNaN(e) || (e = +e),
    xl(e))
        f && (e = J.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)),
        o && au(o, n, r, !0);
    else {
        bl(t) && (t = t(s));
        var v = (e || `0`).split(` `), y, b, x, S;
        _ = pc(t, s) || Z,
        y = Wl(_) || {},
        (!y || !y.left && !y.top) && Vl(_).display === `none` && (S = _.style.display,
        _.style.display = `block`,
        y = Wl(_),
        S ? _.style.display = S : _.style.removeProperty(`display`)),
        b = ru(v[0], y[r.d]),
        x = ru(v[1] || `0`, n),
        e = y[r.p] - c[r.p] - l + b + i - x,
        o && au(o, x, r, n - x < 20 || o._isStart && x > 20),
        n -= n - x
    }
    if (p && (s[p] = e || -.001,
    e < 0 && (e = 0)),
    a) {
        var C = e + n
          , w = a._isStart;
        h = `scroll` + r.d2,
        au(a, C, r, w && C > 20 || !w && (u ? Math.max(Z[h], Cc[h]) : a.parentNode[h]) <= C + 1),
        u && (c = Wl(o),
        u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Bl))
    }
    return f && _ && (h = Wl(_),
    f.seek(d),
    g = Wl(_),
    f._caScrollDist = h[r.p] - g[r.p],
    e = e / f._caScrollDist * d),
    f && f.seek(m),
    f ? e : Math.round(e)
}, Hu = /(webkit|moz|length|cssText|inset)/i, Uu = function(e, t, n, r) {
    if (e.parentNode !== t) {
        var i = e.style, a, o;
        if (t === Z) {
            for (a in e._stOrig = i.cssText,
            o = Vl(e),
            o)
                !+a && !Hu.test(a) && o[a] && typeof i[a] == `string` && a !== `0` && (i[a] = o[a]);
            i.top = n,
            i.left = r
        } else
            i.cssText = e._stOrig;
        J.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, Wu = function(e, t, n) {
    var r = t
      , i = r;
    return function(t) {
        var a = Math.round(e());
        return a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && (t = a,
        n && n()),
        i = r,
        r = Math.round(t),
        r
    }
}, Gu = function(e, t, n) {
    var r = {};
    r[t.p] = `+=` + n,
    J.set(e, r)
}, Ku = function(e, t) {
    var n = hc(e, t)
      , r = `_scroll` + t.p2
      , i = function t(i, a, o, s, c) {
        var l = t.tween
          , u = a.onComplete
          , d = {};
        o ||= n();
        var f = Wu(n, o, function() {
            l.kill(),
            t.tween = 0
        });
        return c = s && c || 0,
        s ||= i - o,
        l && l.kill(),
        a[r] = i,
        a.inherit = !1,
        a.modifiers = d,
        d[r] = function() {
            return f(o + s * l.ratio + c * l.ratio * l.ratio)
        }
        ,
        a.onUpdate = function() {
            q.cache++,
            t.tween && ju()
        }
        ,
        a.onComplete = function() {
            t.tween = 0,
            u && u.call(l)
        }
        ,
        l = t.tween = J.to(e, a),
        l
    };
    return e[r] = n,
    n.wheelHandler = function() {
        return i.tween && i.tween.kill() && (i.tween = 0)
    }
    ,
    Zl(e, `wheel`, n.wheelHandler),
    $.isTouch && Zl(e, `touchmove`, n.wheelHandler),
    i
}, $ = function() {
    function e(t, n) {
        Sc || e.register(J) || console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
        Gc(this),
        this.init(t, n)
    }
    var t = e.prototype;
    return t.init = function(t, n) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !nl) {
            this.update = this.refresh = this.kill = cl;
            return
        }
        t = Ul(yl(t) || xl(t) || t.nodeType ? {
            trigger: t
        } : t, tu);
        var r = t, i = r.onUpdate, a = r.toggleClass, o = r.id, s = r.onToggle, c = r.onRefresh, l = r.scrub, u = r.trigger, d = r.pin, f = r.pinSpacing, p = r.invalidateOnRefresh, m = r.anticipatePin, h = r.onScrubComplete, g = r.onSnapComplete, _ = r.once, v = r.snap, y = r.pinReparent, b = r.pinSpacer, x = r.containerAnimation, S = r.fastScrollEnd, C = r.preventOverlaps, w = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? dc : fc, T = !l && l !== 0, E = pc(t.scroller || Y), D = J.core.getCache(E), O = fl(E), k = (`pinType`in t ? t.pinType : rc(E, `pinType`) || O && `fixed`) === `fixed`, A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], j = T && t.toggleActions.split(` `), M = `markers`in t ? t.markers : tu.markers, N = O ? 0 : parseFloat(Vl(E)[`border` + w.p2 + Rl]) || 0, P = this, ee = t.onRefreshInit && function() {
            return t.onRefreshInit(P)
        }
        , te = hl(E, O, w), ne = gl(E, O), re = 0, ie = 0, ae = 0, oe = hc(E, w), se, F, ce, le, ue, I, de, fe, L, pe, me, he, ge, _e, ve, ye, be, R, z, xe, B, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, V, Me, Ne, Pe, Fe, Ie, Le, Re;
        if (P._startClamp = P._endClamp = !1,
        P._dir = w,
        m *= 45,
        P.scroller = E,
        P.scroll = x ? x.time.bind(x) : oe,
        le = oe(),
        P.vars = t,
        n ||= t.animation,
        `refreshPriority`in t && (Lc = 1,
        t.refreshPriority === -9999 && (Au = P)),
        D.tweenScroll = D.tweenScroll || {
            top: Ku(E, fc),
            left: Ku(E, dc)
        },
        P.tweenTo = se = D.tweenScroll[w.p],
        P.scrubDuration = function(e) {
            Me = xl(e) && e,
            Me ? V ? V.duration(e) : V = J.to(n, {
                ease: `expo`,
                totalProgress: `+=0`,
                inherit: !1,
                duration: Me,
                paused: !0,
                onComplete: function() {
                    return h && h(P)
                }
            }) : (V && V.progress(1).kill(),
            V = 0)
        }
        ,
        n && (n.vars.lazy = !1,
        n._initted && !P.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0),
        P.animation = n.pause(),
        n.scrollTrigger = P,
        P.scrubDuration(l),
        Ae = 0,
        o ||= n.vars.id),
        v && ((!Sl(v) || v.push) && (v = {
            snapTo: v
        }),
        `scrollBehavior`in Z.style && J.set(O ? [Z, Cc] : E, {
            scrollBehavior: `auto`
        }),
        q.forEach(function(e) {
            return bl(e) && e.target === (O ? X.scrollingElement || Cc : E) && (e.smooth = !1)
        }),
        ce = bl(v.snapTo) ? v.snapTo : v.snapTo === `labels` ? ql(n) : v.snapTo === `labelsDirectional` ? Yl(n) : v.directional === !1 ? J.utils.snap(v.snapTo) : function(e, t) {
            return Jl(v.snapTo)(e, $c() - ie < 500 ? 0 : t.direction)
        }
        ,
        Ne = v.duration || {
            min: .1,
            max: 2
        },
        Ne = Sl(Ne) ? Dc(Ne.min, Ne.max) : Dc(Ne, Ne),
        Pe = J.delayedCall(v.delay || Me / 2 || .1, function() {
            var e = oe()
              , t = $c() - ie < 500
              , r = se.tween;
            if ((t || Math.abs(P.getVelocity()) < 10) && !r && !jc && re !== e) {
                var i = (e - I) / _e, a = n && !T ? n.totalProgress() : i, o = t ? 0 : (a - je) / ($c() - Oc) * 1e3 || 0, s = J.utils.clamp(-i, 1 - i, Tl(o / 2) * o / .185), c = i + (v.inertia === !1 ? 0 : s), l, u, d = v, f = d.onStart, p = d.onInterrupt, m = d.onComplete;
                if (l = ce(c, P),
                xl(l) || (l = c),
                u = Math.max(0, Math.round(I + l * _e)),
                e <= de && e >= I && u !== e) {
                    if (r && !r._initted && r.data <= Tl(u - e))
                        return;
                    v.inertia === !1 && (s = l - i),
                    se(u, {
                        duration: Ne(Tl(Math.max(Tl(c - a), Tl(l - a)) * .185 / o / .05 || 0)),
                        ease: v.ease || `power3`,
                        data: Tl(u - e),
                        onInterrupt: function() {
                            return Pe.restart(!0) && p && wl(P, p)
                        },
                        onComplete: function() {
                            P.update(),
                            re = oe(),
                            n && !T && (V ? V.resetTo(`totalProgress`, l, n._tTime / n._tDur) : n.progress(l)),
                            Ae = je = n && !T ? n.totalProgress() : P.progress,
                            g && g(P),
                            m && wl(P, m)
                        }
                    }, e, s * _e, u - e - s * _e),
                    f && wl(P, f, se.tween)
                }
            } else
                P.isActive && re !== e && Pe.restart(!0)
        }).pause()),
        o && (ou[o] = P),
        u = P.trigger = pc(u || d !== !0 && d),
        Re = u && u._gsap && u._gsap.stRevert,
        Re &&= Re(P),
        d = d === !0 ? u : pc(d),
        yl(a) && (a = {
            targets: u,
            className: a
        }),
        d && (f === !1 || f === Ll || (f = !f && d.parentNode && d.parentNode.style && Vl(d.parentNode).display === `flex` ? !1 : Il),
        P.pin = d,
        F = J.core.getCache(d),
        F.spacer ? ve = F.pinState : (b && (b = pc(b),
        b && !b.nodeType && (b = b.current || b.nativeElement),
        F.spacerIsNative = !!b,
        b && (F.spacerState = Ru(b))),
        F.spacer = R = b || X.createElement(`div`),
        R.classList.add(`pin-spacer`),
        o && R.classList.add(`pin-spacer-` + o),
        F.pinState = ve = Ru(d)),
        t.force3D !== !1 && J.set(d, {
            force3D: !0
        }),
        P.spacer = R = F.spacer,
        ke = Vl(d),
        we = ke[f + w.os2],
        xe = J.getProperty(d),
        B = J.quickSetter(d, w.a, Bl),
        Fu(d, R, ke),
        be = Ru(d)),
        M) {
            he = Sl(M) ? Ul(M, eu) : eu,
            pe = iu(`scroller-start`, o, E, w, he, 0),
            me = iu(`scroller-end`, o, E, w, he, 0, pe),
            z = pe[`offset` + w.op.d2];
            var ze = pc(rc(E, `content`) || E);
            fe = this.markerStart = iu(`start`, o, ze, w, he, z, 0, x),
            L = this.markerEnd = iu(`end`, o, ze, w, he, z, 0, x),
            x && (Le = J.quickSetter([fe, L], w.a, Bl)),
            !k && !($s.length && rc(E, `fixedMarkers`) === !0) && (Hl(O ? Z : E),
            J.set([pe, me], {
                force3D: !0
            }),
            Ee = J.quickSetter(pe, w.a, Bl),
            Oe = J.quickSetter(me, w.a, Bl))
        }
        if (x) {
            var Be = x.vars.onUpdate
              , Ve = x.vars.onUpdateParams;
            x.eventCallback(`onUpdate`, function() {
                P.update(0, 0, 1),
                Be && Be.apply(x, Ve || [])
            })
        }
        if (P.previous = function() {
            return Q[Q.indexOf(P) - 1]
        }
        ,
        P.next = function() {
            return Q[Q.indexOf(P) + 1]
        }
        ,
        P.revert = function(e, t) {
            if (!t)
                return P.kill(!0);
            var r = e !== !1 || !P.enabled
              , i = Ac;
            r !== P.isReverted && (r && (Fe = Math.max(oe(), P.scroll.rec || 0),
            ae = P.progress,
            Ie = n && n.progress()),
            fe && [fe, L, pe, me].forEach(function(e) {
                return e.style.display = r ? `none` : `block`
            }),
            r && (Ac = P,
            P.update(r)),
            d && (!y || !P.isActive) && (r ? Pu(d, R, ve) : Fu(d, R, Vl(d), Te)),
            r || P.update(r),
            Ac = i,
            P.isReverted = r)
        }
        ,
        P.refresh = function(r, i, a, o) {
            if (!((Ac || !P.enabled) && !i)) {
                if (d && r && tl) {
                    Zl(e, `scrollEnd`, mu);
                    return
                }
                !xu && ee && ee(P),
                Ac = P,
                se.tween && !a && (se.tween.kill(),
                se.tween = 0),
                V && V.pause(),
                p && n && (n.revert({
                    kill: !1
                }).invalidate(),
                n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(e) {
                    return e.vars.immediateRender && e.render(0, !0, !0)
                }) : n.vars.immediateRender && n.render(0, !0, !0)),
                P.isReverted || P.revert(!0, !0),
                P._subPinOffset = !1;
                var s = te(), l = ne(), m = x ? x.duration() : _l(E, w), h = _e <= .01 || !_e, g = 0, _ = o || 0, v = Sl(a) ? a.end : t.end, b = t.endTrigger || u, S = Sl(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`), C = P.pinnedContainer = t.pinnedContainer && pc(t.pinnedContainer, P), D = u && Math.max(0, Q.indexOf(P)) || 0, A = D, j, F, ce, he, z, B, we, Ee, Oe, ke, Ae, je, Me;
                for (M && Sl(a) && (je = J.getProperty(pe, w.p),
                Me = J.getProperty(me, w.p)); A-- > 0; )
                    B = Q[A],
                    B.end || B.refresh(0, 1) || (Ac = P),
                    we = B.pin,
                    we && (we === u || we === d || we === C) && !B.isReverted && (ke ||= [],
                    ke.unshift(B),
                    B.revert(!0, !0)),
                    B !== Q[A] && (D--,
                    A--);
                for (bl(S) && (S = S(P)),
                S = rl(S, `start`, P),
                I = Vu(S, u, s, w, oe(), fe, pe, P, l, N, k, m, x, P._startClamp && `_startClamp`) || (d ? -.001 : 0),
                bl(v) && (v = v(P)),
                yl(v) && !v.indexOf(`+=`) && (~v.indexOf(` `) ? v = (yl(S) ? S.split(` `)[0] : ``) + v : (g = ru(v.substr(2), s),
                v = yl(S) ? S : (x ? J.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, I) : I) + g,
                b = u)),
                v = rl(v, `end`, P),
                de = Math.max(I, Vu(v || (b ? `100% 0` : m), b, s, w, oe() + g, L, me, P, l, N, k, m, x, P._endClamp && `_endClamp`)) || -.001,
                g = 0,
                A = D; A--; )
                    B = Q[A] || {},
                    we = B.pin,
                    we && B.start - B._pinPush <= I && !x && B.end > 0 && (j = B.end - (P._startClamp ? Math.max(0, B.start) : B.start),
                    (we === u && B.start - B._pinPush < I || we === C) && isNaN(S) && (g += j * (1 - B.progress)),
                    we === d && (_ += j));
                if (I += g,
                de += g,
                P._startClamp && (P._startClamp += g),
                P._endClamp && !xu && (P._endClamp = de || -.001,
                de = Math.min(de, _l(E, w))),
                _e = de - I || (I -= .01) && .001,
                h && (ae = J.utils.clamp(0, 1, J.utils.normalize(I, de, Fe))),
                P._pinPush = _,
                fe && g && (j = {},
                j[w.a] = `+=` + g,
                C && (j[w.p] = `-=` + oe()),
                J.set([fe, L], j)),
                d && !(Xc && P.end >= _l(E, w)))
                    j = Vl(d),
                    he = w === fc,
                    ce = oe(),
                    Se = parseFloat(xe(w.a)) + _,
                    !m && de > 1 && (Ae = (O ? X.scrollingElement || Cc : E).style,
                    Ae = {
                        style: Ae,
                        value: Ae[`overflow` + w.a.toUpperCase()]
                    },
                    O && Vl(Z)[`overflow` + w.a.toUpperCase()] !== `scroll` && (Ae.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                    Fu(d, R, j),
                    be = Ru(d),
                    F = Wl(d, !0),
                    Ee = k && hc(E, he ? dc : fc)(),
                    f ? (Te = [f + w.os2, _e + _ + Bl],
                    Te.t = R,
                    A = f === Il ? Gl(d, w) + _e + _ : 0,
                    A && (Te.push(w.d, A + Bl),
                    R.style.flexBasis !== `auto` && (R.style.flexBasis = A + Bl)),
                    Lu(Te),
                    C && Q.forEach(function(e) {
                        e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0)
                    }),
                    k && oe(Fe)) : (A = Gl(d, w),
                    A && R.style.flexBasis !== `auto` && (R.style.flexBasis = A + Bl)),
                    k && (z = {
                        top: F.top + (he ? ce - I : Ee) + Bl,
                        left: F.left + (he ? Ee : ce - I) + Bl,
                        boxSizing: `border-box`,
                        position: `fixed`
                    },
                    z[Al] = z[`max` + Rl] = Math.ceil(F.width) + Bl,
                    z[jl] = z[`max` + zl] = Math.ceil(F.height) + Bl,
                    z[Ll] = z[Ll + Pl] = z[Ll + Ml] = z[Ll + Fl] = z[Ll + Nl] = `0`,
                    z[Il] = j[Il],
                    z[Il + Pl] = j[Il + Pl],
                    z[Il + Ml] = j[Il + Ml],
                    z[Il + Fl] = j[Il + Fl],
                    z[Il + Nl] = j[Il + Nl],
                    ye = zu(ve, z, y),
                    xu && oe(0)),
                    n ? (Oe = n._initted,
                    Rc(1),
                    n.render(n.duration(), !0, !0),
                    Ce = xe(w.a) - Se + _e + _,
                    De = Math.abs(_e - Ce) > 1,
                    k && De && ye.splice(ye.length - 2, 2),
                    n.render(0, !0, !0),
                    Oe || n.invalidate(!0),
                    n.parent || n.totalTime(n.totalTime()),
                    Rc(0)) : Ce = _e,
                    Ae && (Ae.value ? Ae.style[`overflow` + w.a.toUpperCase()] = Ae.value : Ae.style.removeProperty(`overflow-` + w.a));
                else if (u && oe() && !x)
                    for (F = u.parentNode; F && F !== Z; )
                        F._pinOffset && (I -= F._pinOffset,
                        de -= F._pinOffset),
                        F = F.parentNode;
                ke && ke.forEach(function(e) {
                    return e.revert(!1, !0)
                }),
                P.start = I,
                P.end = de,
                le = ue = xu ? Fe : oe(),
                !x && !xu && (le < Fe && oe(Fe),
                P.scroll.rec = 0),
                P.revert(!1, !0),
                ie = $c(),
                Pe && (re = -1,
                Pe.restart(!0)),
                Ac = 0,
                n && T && (n._initted || Ie) && n.progress() !== Ie && n.progress(Ie || 0, !0).render(n.time(), !0, !0),
                (h || ae !== P.progress || x || p || n && !n._initted) && (n && !T && (n._initted || ae || n.vars.immediateRender !== !1) && n.totalProgress(x && I < -.001 && !ae ? J.utils.normalize(I, de, 0) : ae, !0),
                P.progress = h || (le - I) / _e === ae ? 0 : ae),
                d && f && (R._pinOffset = Math.round(P.progress * Ce)),
                V && V.invalidate(),
                isNaN(je) || (je -= J.getProperty(pe, w.p),
                Me -= J.getProperty(me, w.p),
                Gu(pe, w, je),
                Gu(fe, w, je - (o || 0)),
                Gu(me, w, Me),
                Gu(L, w, Me - (o || 0))),
                h && !xu && P.update(),
                c && !xu && !ge && (ge = !0,
                c(P),
                ge = !1)
            }
        }
        ,
        P.getVelocity = function() {
            return (oe() - ue) / ($c() - Oc) * 1e3 || 0
        }
        ,
        P.endAnimation = function() {
            Cl(P.callbackAnimation),
            n && (V ? V.progress(1) : n.paused() ? T || Cl(n, P.direction < 0, 1) : Cl(n, n.reversed()))
        }
        ,
        P.labelToScroll = function(e) {
            return n && n.labels && (I || P.refresh() || I) + n.labels[e] / n.duration() * _e || 0
        }
        ,
        P.getTrailing = function(e) {
            var t = Q.indexOf(P)
              , n = P.direction > 0 ? Q.slice(0, t).reverse() : Q.slice(t + 1);
            return (yl(e) ? n.filter(function(t) {
                return t.vars.preventOverlaps === e
            }) : n).filter(function(e) {
                return P.direction > 0 ? e.end <= I : e.start >= de
            })
        }
        ,
        P.update = function(e, t, r) {
            if (!(x && !r && !e)) {
                var o = xu === !0 ? Fe : P.scroll(), c = e ? 0 : (o - I) / _e, u = c < 0 ? 0 : c > 1 ? 1 : c || 0, p = P.progress, h, g, b, D, O, M, N, ee;
                if (t && (ue = le,
                le = x ? oe() : o,
                v && (je = Ae,
                Ae = n && !T ? n.totalProgress() : u)),
                m && d && !Ac && !Qc && tl && (!u && I < o + (o - ue) / ($c() - Oc) * m ? u = 1e-4 : u === 1 && de > o + (o - ue) / ($c() - Oc) * m && (u = .9999)),
                u !== p && P.enabled) {
                    if (h = P.isActive = !!u && u < 1,
                    g = !!p && p < 1,
                    M = h !== g,
                    O = M || !!u != !!p,
                    P.direction = u > p ? 1 : -1,
                    P.progress = u,
                    O && !Ac && (b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3,
                    T && (D = !M && j[b + 1] !== `none` && j[b + 1] || j[b],
                    ee = n && (D === `complete` || D === `reset` || D in n))),
                    C && (M || ee) && (ee || l || !n) && (bl(C) ? C(P) : P.getTrailing(C).forEach(function(e) {
                        return e.endAnimation()
                    })),
                    T || (V && !Ac && !Qc ? (V._dp._time - V._start !== V._time && V.render(V._dp._time - V._start),
                    V.resetTo ? V.resetTo(`totalProgress`, u, n._tTime / n._tDur) : (V.vars.totalProgress = u,
                    V.invalidate().restart())) : n && n.totalProgress(u, !!(Ac && (ie || e)))),
                    d) {
                        if (e && f && (R.style[f + w.os2] = we),
                        !k)
                            B(ll(Se + Ce * u));
                        else if (O) {
                            if (N = !e && u > p && de + 1 > o && o + 1 >= _l(E, w),
                            y)
                                if (!e && (h || N)) {
                                    var te = Wl(d, !0)
                                      , ne = o - I;
                                    Uu(d, Z, te.top + (w === fc ? ne : 0) + Bl, te.left + (w === fc ? 0 : ne) + Bl)
                                } else
                                    Uu(d, R);
                            Lu(h || N ? ye : be),
                            De && u < 1 && h || B(Se + (u === 1 && !N ? Ce : 0))
                        }
                    }
                    v && !se.tween && !Ac && !Qc && Pe.restart(!0),
                    a && (M || _ && u && (u < 1 || !Zc)) && Ec(a.targets).forEach(function(e) {
                        return e.classList[h || _ ? `add` : `remove`](a.className)
                    }),
                    i && !T && !e && i(P),
                    O && !Ac ? (T && (ee && (D === `complete` ? n.pause().totalProgress(1) : D === `reset` ? n.restart(!0).pause() : D === `restart` ? n.restart(!0) : n[D]()),
                    i && i(P)),
                    (M || !Zc) && (s && M && wl(P, s),
                    A[b] && wl(P, A[b]),
                    _ && (u === 1 ? P.kill(!1, 1) : A[b] = 0),
                    M || (b = u === 1 ? 1 : 3,
                    A[b] && wl(P, A[b]))),
                    S && !h && Math.abs(P.getVelocity()) > (xl(S) ? S : 2500) && (Cl(P.callbackAnimation),
                    V ? V.progress(1) : Cl(n, D === `reverse` ? 1 : !u, 1))) : T && i && !Ac && i(P)
                }
                if (Oe) {
                    var re = x ? o / x.duration() * (x._caScrollDist || 0) : o;
                    Ee(re + +!!pe._isFlipped),
                    Oe(re)
                }
                Le && Le(-o / x.duration() * (x._caScrollDist || 0))
            }
        }
        ,
        P.enable = function(t, n) {
            P.enabled || (P.enabled = !0,
            Zl(E, `resize`, du),
            O || Zl(E, `scroll`, lu),
            ee && Zl(e, `refreshInit`, ee),
            t !== !1 && (P.progress = ae = 0,
            le = ue = re = oe()),
            n !== !1 && P.refresh())
        }
        ,
        P.getTween = function(e) {
            return e && se ? se.tween : V
        }
        ,
        P.setPositions = function(e, t, n, r) {
            if (x) {
                var i = x.scrollTrigger
                  , a = x.duration()
                  , o = i.end - i.start;
                e = i.start + o * e / a,
                t = i.start + o * t / a
            }
            P.refresh(!1, !1, {
                start: il(e, n && !!P._startClamp),
                end: il(t, n && !!P._endClamp)
            }, r),
            P.update()
        }
        ,
        P.adjustPinSpacing = function(e) {
            if (Te && e) {
                var t = Te.indexOf(w.d) + 1;
                Te[t] = parseFloat(Te[t]) + e + Bl,
                Te[1] = parseFloat(Te[1]) + e + Bl,
                Lu(Te)
            }
        }
        ,
        P.disable = function(t, n) {
            if (t !== !1 && P.revert(!0, !0),
            P.enabled && (P.enabled = P.isActive = !1,
            n || V && V.pause(),
            Fe = 0,
            F && (F.uncache = 1),
            ee && Ql(e, `refreshInit`, ee),
            Pe && (Pe.pause(),
            se.tween && se.tween.kill() && (se.tween = 0)),
            !O)) {
                for (var r = Q.length; r--; )
                    if (Q[r].scroller === E && Q[r] !== P)
                        return;
                Ql(E, `resize`, du),
                O || Ql(E, `scroll`, lu)
            }
        }
        ,
        P.kill = function(e, r) {
            P.disable(e, r),
            V && !r && V.kill(),
            o && delete ou[o];
            var i = Q.indexOf(P);
            i >= 0 && Q.splice(i, 1),
            i === Nc && ku > 0 && Nc--,
            i = 0,
            Q.forEach(function(e) {
                return e.scroller === P.scroller && (i = 1)
            }),
            i || xu || (P.scroll.rec = 0),
            n && (n.scrollTrigger = null,
            e && n.revert({
                kill: !1
            }),
            r || n.kill()),
            fe && [fe, L, pe, me].forEach(function(e) {
                return e.parentNode && e.parentNode.removeChild(e)
            }),
            Au === P && (Au = 0),
            d && (F && (F.uncache = 1),
            i = 0,
            Q.forEach(function(e) {
                return e.pin === d && i++
            }),
            i || (F.spacer = 0)),
            t.onKill && t.onKill(P)
        }
        ,
        Q.push(P),
        P.enable(!1, !1),
        Re && Re(P),
        n && n.add && !_e) {
            var He = P.update;
            P.update = function() {
                P.update = He,
                q.cache++,
                I || de || P.refresh()
            }
            ,
            J.delayedCall(.01, P.update),
            _e = .01,
            I = de = 0
        } else
            P.refresh();
        d && wu()
    }
    ,
    e.register = function(t) {
        return Sc ||= (J = t || dl(),
        ul() && window.document && e.enable(),
        nl),
        Sc
    }
    ,
    e.defaults = function(e) {
        if (e)
            for (var t in e)
                tu[t] = e[t];
        return tu
    }
    ,
    e.disable = function(e, t) {
        nl = 0,
        Q.forEach(function(n) {
            return n[t ? `kill` : `disable`](e)
        }),
        Ql(Y, `wheel`, lu),
        Ql(X, `scroll`, lu),
        clearInterval(kc),
        Ql(X, `touchcancel`, cl),
        Ql(Z, `touchstart`, cl),
        Xl(Ql, X, `pointerdown,touchstart,mousedown`, ol),
        Xl(Ql, X, `pointerup,touchend,mouseup`, sl),
        Tc.kill(),
        vl(Ql);
        for (var n = 0; n < q.length; n += 3)
            $l(Ql, q[n], q[n + 1]),
            $l(Ql, q[n], q[n + 2])
    }
    ,
    e.enable = function() {
        if (Y = window,
        X = document,
        Cc = X.documentElement,
        Z = X.body,
        J)
            if (Ec = J.utils.toArray,
            Dc = J.utils.clamp,
            Gc = J.core.context || cl,
            Rc = J.core.suppressOverwrites || cl,
            Kc = Y.history.scrollRestoration || `auto`,
            Ou = Y.pageYOffset || 0,
            J.core.globals(`ScrollTrigger`, e),
            Z) {
                nl = 1,
                qc = document.createElement(`div`),
                qc.style.height = `100vh`,
                qc.style.position = `absolute`,
                Tu(),
                al(),
                xc.register(J),
                e.isTouch = xc.isTouch,
                Wc = xc.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                Vc = xc.isTouch === 1,
                Zl(Y, `wheel`, lu),
                wc = [Y, X, Cc, Z],
                J.matchMedia ? (e.matchMedia = function(e) {
                    var t = J.matchMedia(), n;
                    for (n in e)
                        t.add(n, e[n]);
                    return t
                }
                ,
                J.addEventListener(`matchMediaInit`, function() {
                    vu(),
                    yu()
                }),
                J.addEventListener(`matchMediaRevert`, function() {
                    return _u()
                }),
                J.addEventListener(`matchMedia`, function() {
                    Du(0, 1),
                    hu(`matchMedia`)
                }),
                J.matchMedia().add(`(orientation: portrait)`, function() {
                    return uu(),
                    uu
                })) : console.warn(`Requires GSAP 3.11.0 or later`),
                uu(),
                Zl(X, `scroll`, lu);
                var t = Z.hasAttribute(`style`), n = Z.style, r = n.borderTopStyle, i = J.core.Animation.prototype, a, o;
                for (i.revert || Object.defineProperty(i, `revert`, {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                n.borderTopStyle = `solid`,
                a = Wl(Z),
                fc.m = Math.round(a.top + fc.sc()) || 0,
                dc.m = Math.round(a.left + dc.sc()) || 0,
                r ? n.borderTopStyle = r : n.removeProperty(`border-top-style`),
                t || (Z.setAttribute(`style`, ``),
                Z.removeAttribute(`style`)),
                kc = setInterval(cu, 250),
                J.delayedCall(.5, function() {
                    return Qc = 0
                }),
                Zl(X, `touchcancel`, cl),
                Zl(Z, `touchstart`, cl),
                Xl(Zl, X, `pointerdown,touchstart,mousedown`, ol),
                Xl(Zl, X, `pointerup,touchend,mouseup`, sl),
                Mc = J.utils.checkPrefix(`transform`),
                Nu.push(Mc),
                Sc = $c(),
                Tc = J.delayedCall(.2, Du).pause(),
                Ic = [X, `visibilitychange`, function() {
                    var e = Y.innerWidth
                      , t = Y.innerHeight;
                    X.hidden ? (Pc = e,
                    Fc = t) : (Pc !== e || Fc !== t) && du()
                }
                , X, `DOMContentLoaded`, Du, Y, `load`, Du, Y, `resize`, du],
                vl(Zl),
                Q.forEach(function(e) {
                    return e.enable(0, 1)
                }),
                o = 0; o < q.length; o += 3)
                    $l(Ql, q[o], q[o + 1]),
                    $l(Ql, q[o], q[o + 2])
            } else
                X && X.addEventListener(`DOMContentLoaded`, function t() {
                    e.enable(),
                    X.removeEventListener(`DOMContentLoaded`, t)
                })
    }
    ,
    e.config = function(t) {
        `limitCallbacks`in t && (Zc = !!t.limitCallbacks);
        var n = t.syncInterval;
        n && clearInterval(kc) || (kc = n) && setInterval(cu, n),
        `ignoreMobileResize`in t && (Vc = e.isTouch === 1 && t.ignoreMobileResize),
        `autoRefreshEvents`in t && (vl(Ql) || vl(Zl, t.autoRefreshEvents || `none`),
        zc = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)
    }
    ,
    e.scrollerProxy = function(e, t) {
        var n = pc(e)
          , r = q.indexOf(n)
          , i = fl(n);
        ~r && q.splice(r, i ? 6 : 2),
        t && (i ? $s.unshift(Y, t, Z, t, Cc, t) : $s.unshift(n, t))
    }
    ,
    e.clearMatchMedia = function(e) {
        Q.forEach(function(t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
        })
    }
    ,
    e.isInViewport = function(e, t, n) {
        var r = (yl(e) ? pc(e) : e).getBoundingClientRect()
          , i = r[n ? Al : jl] * t || 0;
        return n ? r.right - i > 0 && r.left + i < Y.innerWidth : r.bottom - i > 0 && r.top + i < Y.innerHeight
    }
    ,
    e.positionInViewport = function(e, t, n) {
        yl(e) && (e = pc(e));
        var r = e.getBoundingClientRect()
          , i = r[n ? Al : jl]
          , a = t == null ? i / 2 : t in nu ? nu[t] * i : ~t.indexOf(`%`) ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return n ? (r.left + a) / Y.innerWidth : (r.top + a) / Y.innerHeight
    }
    ,
    e.killAll = function(e) {
        if (Q.slice(0).forEach(function(e) {
            return e.vars.id !== `ScrollSmoother` && e.kill()
        }),
        e !== !0) {
            var t = fu.killAll || [];
            fu = {},
            t.forEach(function(e) {
                return e()
            })
        }
    }
    ,
    e
}();
$.version = `3.15.0`,
$.saveStyles = function(e) {
    return e ? Ec(e).forEach(function(e) {
        if (e && e.style) {
            var t = gu.indexOf(e);
            t >= 0 && gu.splice(t, 5),
            gu.push(e, e.style.cssText, e.getBBox && e.getAttribute(`transform`), J.core.getCache(e), Gc())
        }
    }) : gu
}
,
$.revert = function(e, t) {
    return yu(!e, t)
}
,
$.create = function(e, t) {
    return new $(e,t)
}
,
$.refresh = function(e) {
    return e ? du(!0) : (Sc || $.register()) && Du(!0)
}
,
$.update = function(e) {
    return ++q.cache && ju(e === !0 ? 2 : 0)
}
,
$.clearScrollMemory = bu,
$.maxScroll = function(e, t) {
    return _l(e, t ? dc : fc)
}
,
$.getScrollFunc = function(e, t) {
    return hc(pc(e), t ? dc : fc)
}
,
$.getById = function(e) {
    return ou[e]
}
,
$.getAll = function() {
    return Q.filter(function(e) {
        return e.vars.id !== `ScrollSmoother`
    })
}
,
$.isScrolling = function() {
    return !!tl
}
,
$.snapDirectional = Jl,
$.addEventListener = function(e, t) {
    var n = fu[e] || (fu[e] = []);
    ~n.indexOf(t) || n.push(t)
}
,
$.removeEventListener = function(e, t) {
    var n = fu[e]
      , r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1)
}
,
$.batch = function(e, t) {
    var n = [], r = {}, i = t.interval || .016, a = t.batchMax || 1e9, o = function(e, t) {
        var n = []
          , r = []
          , o = J.delayedCall(i, function() {
            t(n, r),
            n = [],
            r = []
        }).pause();
        return function(e) {
            n.length || o.restart(!0),
            n.push(e.trigger),
            r.push(e),
            a <= n.length && o.progress(1)
        }
    }, s;
    for (s in t)
        r[s] = s.substr(0, 2) === `on` && bl(t[s]) && s !== `onRefreshInit` ? o(s, t[s]) : t[s];
    return bl(a) && (a = a(),
    Zl($, `refresh`, function() {
        return a = t.batchMax()
    })),
    Ec(e).forEach(function(e) {
        var t = {};
        for (s in r)
            t[s] = r[s];
        t.trigger = e,
        n.push($.create(t))
    }),
    n
}
;
var qu = function(e, t, n, r) {
    return t > r ? e(r) : t < 0 && e(0),
    n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
}, Ju = function e(t, n) {
    n === !0 ? t.style.removeProperty(`touch-action`) : t.style.touchAction = n === !0 ? `auto` : n ? `pan-` + n + (xc.isTouch ? ` pinch-zoom` : ``) : `none`,
    t === Cc && e(Z, n)
}, Yu = {
    auto: 1,
    scroll: 1
}, Xu = function(e) {
    var t = e.event, n = e.target, r = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, a = i._gsap || J.core.getCache(i), o = $c(), s;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (; i && i !== Z && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Yu[(s = Vl(i)).overflowY] || Yu[s.overflowX])); )
            i = i.parentNode;
        a._isScroll = i && i !== n && !fl(i) && (Yu[(s = Vl(i)).overflowY] || Yu[s.overflowX]),
        a._isScrollT = o
    }
    (a._isScroll || r === `x`) && (t.stopPropagation(),
    t._gsapAllow = !0)
}, Zu = function(e, t, n, r) {
    return xc.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r &&= Xu,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
            return n && Zl(X, xc.eventTypes[0], ed, !1, !0)
        },
        onDisable: function() {
            return Ql(X, xc.eventTypes[0], ed, !0)
        }
    })
}, Qu = /(input|label|select|textarea)/i, $u, ed = function(e) {
    var t = Qu.test(e.target.tagName);
    (t || $u) && (e._gsapAllow = !0,
    $u = t)
}, td = function(e) {
    Sl(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type ||= `wheel,touch`,
    e.debounce = !!e.debounce,
    e.id = e.id || `normalizer`;
    var t = e, n = t.normalizeScrollX, r = t.momentum, i = t.allowNestedScroll, a = t.onRelease, o, s, c = pc(e.target) || Cc, l = J.core.globals().ScrollSmoother, u = l && l.get(), d = Wc && (e.content && pc(e.content) || u && e.content !== !1 && !u.smooth() && u.content()), f = hc(c, fc), p = hc(c, dc), m = 1, h = (xc.isTouch && Y.visualViewport ? Y.visualViewport.scale * Y.visualViewport.width : Y.outerWidth) / Y.innerWidth, g = 0, _ = bl(r) ? function() {
        return r(o)
    }
    : function() {
        return r || 2.8
    }
    , v, y, b = Zu(c, e.type, !0, i), x = function() {
        return y = !1
    }, S = cl, C = cl, w = function() {
        s = _l(c, fc),
        C = Dc(+!!Wc, s),
        n && (S = Dc(0, _l(c, dc))),
        v = Su
    }, T = function() {
        d._gsap.y = ll(parseFloat(d._gsap.y) + f.offset) + `px`,
        d.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + parseFloat(d._gsap.y) + `, 0, 1)`,
        f.offset = f.cacheID = 0
    }, E = function() {
        if (y) {
            requestAnimationFrame(x);
            var e = ll(o.deltaY / 2)
              , t = C(f.v - e);
            if (d && t !== f.v + f.offset) {
                f.offset = t - f.v;
                var n = ll((parseFloat(d && d._gsap.y) || 0) - f.offset);
                d.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + n + `, 0, 1)`,
                d._gsap.y = n + `px`,
                f.cacheID = q.cache,
                ju()
            }
            return !0
        }
        f.offset && T(),
        y = !0
    }, D, O, k, A, j = function() {
        w(),
        D.isActive() && D.vars.scrollY > s && (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s))
    };
    return d && J.set(d, {
        y: `+=0`
    }),
    e.ignoreCheck = function(e) {
        return Wc && e.type === `touchmove` && E(e) || m > 1.05 && e.type !== `touchstart` || o.isGesturing || e.touches && e.touches.length > 1
    }
    ,
    e.onPress = function() {
        y = !1;
        var e = m;
        m = ll((Y.visualViewport && Y.visualViewport.scale || 1) / h),
        D.pause(),
        e !== m && Ju(c, m > 1.01 ? !0 : n ? !1 : `x`),
        O = p(),
        k = f(),
        w(),
        v = Su
    }
    ,
    e.onRelease = e.onGestureStart = function(e, t) {
        if (f.offset && T(),
        !t)
            A.restart(!0);
        else {
            q.cache++;
            var r = _(), i, o;
            n && (i = p(),
            o = i + r * .05 * -e.velocityX / .227,
            r *= qu(p, i, o, _l(c, dc)),
            D.vars.scrollX = S(o)),
            i = f(),
            o = i + r * .05 * -e.velocityY / .227,
            r *= qu(f, i, o, _l(c, fc)),
            D.vars.scrollY = C(o),
            D.invalidate().duration(r).play(.01),
            (Wc && D.vars.scrollY >= s || i >= s - 1) && J.to({}, {
                onUpdate: j,
                duration: r
            })
        }
        a && a(e)
    }
    ,
    e.onWheel = function() {
        D._ts && D.pause(),
        $c() - g > 1e3 && (v = 0,
        g = $c())
    }
    ,
    e.onChange = function(e, t, r, i, a) {
        if (Su !== v && w(),
        t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])),
        r) {
            f.offset && T();
            var o = a[2] === r
              , s = o ? k + e.startY - e.y : f() + r - a[1]
              , c = C(s);
            o && s !== c && (k += c - s),
            f(c)
        }
        (r || t) && ju()
    }
    ,
    e.onEnable = function() {
        Ju(c, n ? !1 : `x`),
        $.addEventListener(`refresh`, j),
        Zl(Y, `resize`, j),
        f.smooth &&= (f.target.style.scrollBehavior = `auto`,
        p.smooth = !1),
        b.enable()
    }
    ,
    e.onDisable = function() {
        Ju(c, !0),
        Ql(Y, `resize`, j),
        $.removeEventListener(`refresh`, j),
        b.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new xc(e),
    o.iOS = Wc,
    Wc && !f() && f(1),
    Wc && J.ticker.add(cl),
    A = o._dc,
    D = J.to(o, {
        ease: `power4`,
        paused: !0,
        inherit: !1,
        scrollX: n ? `+=0.1` : `+=0`,
        scrollY: `+=0.1`,
        modifiers: {
            scrollY: Wu(f, f(), function() {
                return D.pause()
            })
        },
        onUpdate: ju,
        onComplete: A.vars.onComplete
    }),
    o
};
$.sort = function(e) {
    if (bl(e))
        return Q.sort(e);
    var t = Y.pageYOffset || 0;
    return $.getAll().forEach(function(e) {
        return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Y.innerHeight
    }),
    Q.sort(e || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
,
$.observe = function(e) {
    return new xc(e)
}
,
$.normalizeScroll = function(e) {
    if (e === void 0)
        return Bc;
    if (e === !0 && Bc)
        return Bc.enable();
    if (e === !1) {
        Bc && Bc.kill(),
        Bc = e;
        return
    }
    var t = e instanceof xc ? e : td(e);
    return Bc && Bc.target === t.target && Bc.kill(),
    fl(t.target) && (Bc = t),
    t
}
,
$.core = {
    _getVelocityProp: gc,
    _inputObserver: Zu,
    _scrollers: q,
    _proxies: $s,
    bridge: {
        ss: function() {
            tl || hu(`scrollStart`),
            tl = $c()
        },
        ref: function() {
            return Ac
        }
    }
},
dl() && J.registerPlugin($),
K.registerPlugin($);
var nd = [{
    label: `About`,
    target: `#about`
}, {
    label: `ThothTech`,
    target: `#thothtech`
}, {
    label: `Stack`,
    target: `#stack`
}, {
    label: `Work`,
    target: `#projects`
}, {
    label: `Contact`,
    target: `#contact`
}];
function rd() {
    let e = (0,
    v.useRef)(null)
      , [t,n] = (0,
    v.useState)(``)
      , [r,i] = (0,
    v.useState)(!1);
    (0,
    v.useEffect)( () => {
        let e = () => {
            let e = window.scrollY;
            i(e > window.innerHeight * .8)
        }
        ;
        return window.addEventListener(`scroll`, e, {
            passive: !0
        }),
        () => window.removeEventListener(`scroll`, e)
    }
    , []),
    (0,
    v.useEffect)( () => {
        let e = [`about`, `thothtech`, `stack`, `projects`, `contact`];
        return e.forEach(e => {
            let t = document.getElementById(e);
            t && $.create({
                trigger: t,
                start: `top center`,
                end: `bottom center`,
                onEnter: () => n(e),
                onEnterBack: () => n(e)
            })
        }
        ),
        () => {
            $.getAll().forEach(t => {
                e.includes(t.vars.trigger) && t.kill()
            }
            )
        }
    }
    , []);
    let a = (e, t) => {
        e.preventDefault();
        let n = document.querySelector(t);
        n && n.scrollIntoView({
            behavior: `smooth`
        })
    }
    ;
    return (0,
    H.jsx)(`nav`, {
        ref: e,
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${r ? `bg-editorial-bg/95 backdrop-blur-sm border-b border-editorial-amber/20` : `bg-transparent pointer-events-none`}`,
        children: (0,
        H.jsxs)(`div`, {
            className: `w-full px-6 md:px-10 py-4 flex items-center justify-between`,
            children: [(0,
            H.jsx)(`a`, {
                href: `#`,
                onClick: e => {
                    e.preventDefault(),
                    window.scrollTo({
                        top: 0,
                        behavior: `smooth`
                    })
                }
                ,
                className: `font-mono text-xs tracking-widest text-editorial-amber pointer-events-auto cursor-pointer`,
                children: `D.S.O`
            }), (0,
            H.jsx)(`div`, {
                className: `hidden md:flex items-center gap-8`,
                children: nd.map(e => (0,
                H.jsx)(`a`, {
                    href: e.target,
                    onClick: t => a(t, e.target),
                    className: `font-mono text-xs tracking-wider transition-colors duration-300 cursor-pointer pointer-events-auto whitespace-nowrap ${t === e.target.replace(`#`, ``) ? `text-editorial-amber` : `text-editorial-text/60 hover:text-editorial-text`}`,
                    children: e.label
                }, e.label))
            }), (0,
            H.jsx)(`a`, {
                href: `#contact`,
                onClick: e => a(e, `#contact`),
                className: `font-mono text-xs tracking-wider text-editorial-amber border border-editorial-amber/40 px-4 py-2 transition-all duration-300 hover:bg-editorial-amber hover:text-editorial-bg pointer-events-auto cursor-pointer whitespace-nowrap`,
                children: `Hire Me`
            })]
        })
    })
}
K.registerPlugin($);
var id = `https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20young%20African%20male%20developer%20in%20a%20modern%20minimalist%20studio%20setting%2C%20wearing%20a%20dark%20navy%20blazer%20over%20a%20black%20shirt%2C%20warm%20amber%20lighting%20from%20the%20left%20side%2C%20subtle%20editorial%20photography%20style%2C%20dark%20charcoal%20background%2C%20sharp%20focus%20on%20face%2C%20professional%20headshot%20composition&width=420&height=560&seq=hero-portrait-1&orientation=portrait`;
function ad() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null)
      , i = (0,
    v.useRef)(null)
      , a = (0,
    v.useRef)(null)
      , o = (0,
    v.useRef)(null)
      , [s,c] = (0,
    v.useState)(0)
      , [l,u] = (0,
    v.useState)(!0)
      , [d,f] = (0,
    v.useState)(!1)
      , p = (0,
    v.useCallback)( () => {
        let e = 0
          , t = setInterval( () => {
            e += 1,
            c(e),
            e >= 23 && (clearInterval(t),
            f(!0),
            setTimeout( () => u(!1), 800))
        }
        , 90);
        return () => clearInterval(t)
    }
    , []);
    return (0,
    v.useEffect)( () => p(), [p]),
    (0,
    v.useEffect)( () => {
        let t = K.context( () => {
            let e = K.timeline({
                delay: .3
            });
            e.fromTo(n.current, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: .6,
                ease: `power3.out`
            }, `-=0.1`),
            e.fromTo(i.current, {
                scaleX: 0
            }, {
                scaleX: 1,
                duration: 1.2,
                ease: `power3.out`
            }, `-=0.4`),
            e.fromTo(a.current, {
                x: 40,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`
            }, `-=1`),
            e.fromTo(o.current, {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,
                duration: .5,
                ease: `power3.out`
            }, `-=0.3`),
            e.fromTo(r.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .6,
                ease: `power3.out`
            }, `-=0.5`),
            $.create({
                trigger: a.current,
                start: `top 85%`,
                onEnter: () => {
                    K.fromTo(a.current, {
                        clipPath: `inset(100% 0 0 0)`
                    }, {
                        clipPath: `inset(0% 0 0 0)`,
                        duration: 1,
                        ease: `power3.out`
                    })
                }
                ,
                once: !0
            })
        }
        , e);
        return () => t.revert()
    }
    , []),
    (0,
    H.jsx)(`section`, {
        ref: e,
        id: `hero`,
        className: `relative min-h-screen w-full flex items-center overflow-hidden px-6 md:px-10 lg:px-16 py-20`,
        children: (0,
        H.jsxs)(`div`, {
            className: `w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16`,
            children: [(0,
            H.jsxs)(`div`, {
                className: `flex-1 z-10`,
                children: [(0,
                H.jsxs)(`div`, {
                    ref: t,
                    className: `font-display text-editorial-text leading-[0.9] tracking-wide`,
                    style: {
                        fontSize: `clamp(3.5rem, 14vw, 12rem)`
                    },
                    children: [( () => {
                        let e = 0
                          , t = [`DESTINY`, `SOLOMON`, `OKAGBUO`];
                        return t.map( (n, r) => {
                            let i = e;
                            e += n.length,
                            r < t.length - 1 && (e += 1);
                            let a = Math.max(0, s - i);
                            return (0,
                            H.jsxs)(`div`, {
                                className: `relative inline-block`,
                                children: [(0,
                                H.jsx)(`span`, {
                                    className: `inline-block`,
                                    children: n.slice(0, a)
                                }), r < t.length - 1 && s > i + n.length && (0,
                                H.jsx)(`span`, {
                                    className: `inline-block`,
                                    children: `\xA0`
                                }), r === t.length - 1 && l && d === !1 && a === n.length && (0,
                                H.jsx)(`span`, {
                                    className: `inline-block w-[3px] h-[0.75em] bg-editorial-amber ml-1 animate-pulse align-middle`
                                }), r === t.length - 1 && l && d && (0,
                                H.jsx)(`span`, {
                                    className: `inline-block w-[3px] h-[0.75em] bg-editorial-amber ml-1 animate-pulse align-middle`
                                })]
                            }, n)
                        }
                        )
                    }
                    )(), s < 23 && (0,
                    H.jsx)(`span`, {
                        className: `inline-block w-[3px] h-[0.75em] bg-editorial-amber ml-1 animate-pulse align-middle`
                    })]
                }), (0,
                H.jsx)(`p`, {
                    ref: n,
                    className: `font-body text-xl md:text-2xl lg:text-3xl text-editorial-text/80 mt-6 md:mt-8 italic`,
                    style: {
                        opacity: 0
                    },
                    children: `Fullstack Developer · CEO & Founder, ThothTech`
                }), (0,
                H.jsx)(`div`, {
                    className: `mt-8 md:mt-10 overflow-hidden`,
                    children: (0,
                    H.jsx)(`div`, {
                        ref: i,
                        className: `h-[2px] bg-editorial-amber origin-left`,
                        style: {
                            transform: `scaleX(0)`
                        }
                    })
                }), (0,
                H.jsx)(`p`, {
                    ref: r,
                    className: `font-mono text-xs md:text-sm text-editorial-text/50 mt-6 md:mt-8 tracking-wider`,
                    style: {
                        opacity: 0
                    },
                    children: `Port Harcourt, Nigeria · Available for Projects`
                })]
            }), (0,
            H.jsxs)(`div`, {
                className: `flex-shrink-0 z-10`,
                children: [(0,
                H.jsxs)(`div`, {
                    ref: a,
                    className: `relative`,
                    style: {
                        opacity: 0
                    },
                    children: [(0,
                    H.jsx)(`div`, {
                        className: `absolute -top-2 -left-2 w-[280px] h-[373px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px] border-[3px] border-editorial-chrome`,
                        style: {
                            zIndex: 1
                        }
                    }), (0,
                    H.jsx)(`div`, {
                        className: `relative w-[280px] h-[373px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px] border-[3px] border-editorial-amber overflow-hidden`,
                        style: {
                            zIndex: 2
                        },
                        children: (0,
                        H.jsx)(`img`, {
                            src: id,
                            alt: `Destiny Solomon Okagbuo — Fullstack Developer`,
                            className: `w-full h-full object-cover object-top transition-all duration-500`,
                            style: {
                                filter: `grayscale(20%) contrast(1.1)`
                            },
                            onMouseEnter: e => {
                                e.target.style.filter = `grayscale(0%) contrast(1.1)`
                            }
                            ,
                            onMouseLeave: e => {
                                e.target.style.filter = `grayscale(20%) contrast(1.1)`
                            }
                        })
                    })]
                }), (0,
                H.jsx)(`p`, {
                    ref: o,
                    className: `font-mono text-xs text-editorial-text/40 mt-4 tracking-wider`,
                    style: {
                        opacity: 0
                    },
                    children: `CEO & Founder · ThothTech`
                })]
            })]
        })
    })
}
K.registerPlugin($);
var od = `https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20young%20African%20male%20developer%20in%20a%20modern%20minimalist%20studio%20setting%2C%20wearing%20a%20dark%20navy%20blazer%20over%20a%20black%20shirt%2C%20warm%20amber%20lighting%20from%20the%20left%20side%2C%20subtle%20editorial%20photography%20style%2C%20dark%20charcoal%20background%2C%20sharp%20focus%20on%20face%2C%20professional%20headshot%20composition&width=280&height=370&seq=about-portrait-1&orientation=portrait`;
function sd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null)
      , i = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let a = K.context( () => {
            K.to(t.current, {
                y: -80,
                scrollTrigger: {
                    trigger: e.current,
                    start: `top bottom`,
                    end: `bottom top`,
                    scrub: 1
                }
            }),
            K.fromTo(n.current, {
                clipPath: `inset(100% 0 0 0)`
            }, {
                clipPath: `inset(0% 0 0 0)`,
                duration: 1.2,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: n.current,
                    start: `top 80%`
                }
            });
            let a = r.current?.querySelectorAll(`.about-text`);
            a && K.fromTo(a, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                stagger: .12,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: r.current,
                    start: `top 80%`
                }
            });
            let o = i.current?.querySelectorAll(`.stat-item`);
            o && K.fromTo(o, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .7,
                stagger: .15,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: i.current,
                    start: `top 85%`
                }
            })
        }
        , e);
        return () => a.revert()
    }
    , []),
    (0,
    H.jsxs)(`section`, {
        ref: e,
        id: `about`,
        className: `relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: [(0,
        H.jsx)(`div`, {
            ref: t,
            className: `absolute top-1/2 left-0 -translate-y-1/2 font-display text-editorial-text/[0.03] select-none pointer-events-none leading-none`,
            style: {
                fontSize: `clamp(10rem, 25vw, 30rem)`
            },
            children: `01`
        }), (0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                className: `flex items-center gap-4 mb-12 md:mb-16`,
                children: [(0,
                H.jsx)(`span`, {
                    className: `font-mono text-sm text-editorial-amber tracking-wider`,
                    children: `01 —`
                }), (0,
                H.jsx)(`span`, {
                    className: `h-[1px] w-16 bg-editorial-amber/40`
                }), (0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                    children: `About`
                })]
            }), (0,
            H.jsxs)(`div`, {
                className: `flex flex-col lg:flex-row gap-12 lg:gap-20`,
                children: [(0,
                H.jsx)(`div`, {
                    className: `flex-shrink-0`,
                    children: (0,
                    H.jsxs)(`div`, {
                        ref: n,
                        className: `relative w-[200px] h-[265px] md:w-[240px] md:h-[318px] lg:w-[280px] lg:h-[370px]`,
                        children: [(0,
                        H.jsx)(`div`, {
                            className: `absolute -top-2 -left-2 w-full h-full border-[3px] border-editorial-green/50`
                        }), (0,
                        H.jsx)(`div`, {
                            className: `relative w-full h-full border-[3px] border-editorial-green overflow-hidden`,
                            children: (0,
                            H.jsx)(`img`, {
                                src: od,
                                alt: `Destiny Solomon Okagbuo`,
                                className: `w-full h-full object-cover object-top`,
                                style: {
                                    filter: `grayscale(20%) contrast(1.1)`
                                }
                            })
                        })]
                    })
                }), (0,
                H.jsxs)(`div`, {
                    ref: r,
                    className: `flex-1`,
                    children: [(0,
                    H.jsx)(`p`, {
                        className: `about-text font-body text-lg md:text-xl lg:text-2xl text-editorial-text/90 leading-relaxed mb-6`,
                        children: `Destiny Solomon Okagbuo is a fullstack web developer with a builder's mindset and a strategist's eye. He engineers digital infrastructure — not just websites — for organizations that demand measurable results.`
                    }), (0,
                    H.jsx)(`p`, {
                        className: `about-text font-body text-lg md:text-xl lg:text-2xl text-editorial-text/90 leading-relaxed mb-6`,
                        children: `As the founder and CEO of ThothTech, he leads a team dedicated to transforming how NGOs and construction brands establish, grow, and convert their digital presence across Nigeria and beyond.`
                    }), (0,
                    H.jsx)(`p`, {
                        className: `about-text font-body text-lg md:text-xl lg:text-2xl text-editorial-text/60 leading-relaxed italic`,
                        children: `"We don't just build websites — we engineer digital presence."`
                    })]
                })]
            }), (0,
            H.jsxs)(`div`, {
                ref: i,
                className: `flex flex-col sm:flex-row gap-8 sm:gap-16 mt-16 md:mt-24 lg:mt-32`,
                children: [(0,
                H.jsxs)(`div`, {
                    className: `stat-item`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-display text-5xl md:text-6xl lg:text-7xl text-editorial-amber leading-none`,
                        children: `24+`
                    }), (0,
                    H.jsx)(`p`, {
                        className: `font-mono text-xs text-editorial-text/50 mt-2 tracking-wider uppercase`,
                        children: `Projects Delivered`
                    })]
                }), (0,
                H.jsx)(`div`, {
                    className: `h-px w-full sm:w-px sm:h-20 bg-editorial-amber/20`
                }), (0,
                H.jsxs)(`div`, {
                    className: `stat-item`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-display text-5xl md:text-6xl lg:text-7xl text-editorial-amber leading-none`,
                        children: `5+`
                    }), (0,
                    H.jsx)(`p`, {
                        className: `font-mono text-xs text-editorial-text/50 mt-2 tracking-wider uppercase`,
                        children: `Years of Experience`
                    })]
                }), (0,
                H.jsx)(`div`, {
                    className: `h-px w-full sm:w-px sm:h-20 bg-editorial-amber/20`
                }), (0,
                H.jsxs)(`div`, {
                    className: `stat-item`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-display text-5xl md:text-6xl lg:text-7xl text-editorial-amber leading-none`,
                        children: `15+`
                    }), (0,
                    H.jsx)(`p`, {
                        className: `font-mono text-xs text-editorial-text/50 mt-2 tracking-wider uppercase`,
                        children: `Happy Clients`
                    })]
                })]
            })]
        })]
    })
}
K.registerPlugin($);
var cd = [{
    title: `Web Development`,
    description: `Custom Laravel & React builds engineered for performance, scalability, and long-term maintainability.`
}, {
    title: `SEO`,
    description: `Technical and content-led search optimization for long-term visibility and organic growth.`
}, {
    title: `SEM`,
    description: `Paid search campaigns structured to convert, not just click — maximizing every ad spend naira.`
}];
function ld() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let i = K.context( () => {
            K.fromTo(t.current, {
                scale: .85,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: t.current,
                    start: `top 80%`
                }
            });
            let e = n.current?.querySelectorAll(`.service-item`);
            e && K.fromTo(e, {
                x: -40,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: .8,
                stagger: .15,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: n.current,
                    start: `top 80%`
                }
            }),
            K.fromTo(r.current, {
                y: 40,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: r.current,
                    start: `top 85%`
                }
            })
        }
        , e);
        return () => i.revert()
    }
    , []),
    (0,
    H.jsx)(`section`, {
        ref: e,
        id: `thothtech`,
        className: `relative w-full bg-editorial-green py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: (0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                className: `flex items-center gap-4 mb-12 md:mb-16`,
                children: [(0,
                H.jsx)(`span`, {
                    className: `font-mono text-sm text-editorial-amber tracking-wider`,
                    children: `02 —`
                }), (0,
                H.jsx)(`span`, {
                    className: `h-[1px] w-16 bg-editorial-amber/40`
                }), (0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                    children: `ThothTech`
                })]
            }), (0,
            H.jsxs)(`div`, {
                ref: t,
                className: `mb-16 md:mb-24`,
                children: [(0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-[0.9] tracking-wide`,
                    style: {
                        fontSize: `clamp(4rem, 12vw, 10rem)`
                    },
                    children: `THOTHTECH`
                }), (0,
                H.jsxs)(`div`, {
                    className: `mt-4 flex items-center gap-4`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `h-[3px] w-24 bg-editorial-amber`
                    }), (0,
                    H.jsx)(`p`, {
                        className: `font-body text-xl md:text-2xl text-editorial-text/80 italic`,
                        children: `We Build. We Rank. We Convert.`
                    })]
                })]
            }), (0,
            H.jsx)(`div`, {
                ref: n,
                className: `grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32`,
                children: cd.map( (e, t) => (0,
                H.jsx)(`div`, {
                    className: `service-item`,
                    children: (0,
                    H.jsxs)(`div`, {
                        className: `border-t-2 border-editorial-amber pt-6`,
                        children: [(0,
                        H.jsx)(`h3`, {
                            className: `font-display text-3xl md:text-4xl text-editorial-text mb-4`,
                            children: e.title
                        }), (0,
                        H.jsx)(`p`, {
                            className: `font-body text-lg text-editorial-text/70 leading-relaxed`,
                            children: e.description
                        })]
                    })
                }, t))
            }), (0,
            H.jsxs)(`div`, {
                ref: r,
                className: `text-center`,
                children: [(0,
                H.jsx)(`p`, {
                    className: `font-mono text-xs text-editorial-text/40 tracking-widest uppercase mb-4`,
                    children: `Our Niche`
                }), (0,
                H.jsx)(`h3`, {
                    className: `font-display text-editorial-amber leading-none tracking-wide`,
                    style: {
                        fontSize: `clamp(2rem, 6vw, 5rem)`
                    },
                    children: `NGOs · CONSTRUCTION`
                })]
            })]
        })
    })
}
K.registerPlugin($);
var ud = [`Laravel`, `React.js`, `JavaScript`, `HTML`, `CSS`];
function dd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let i = K.context( () => {
            K.fromTo(t.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: t.current,
                    start: `top 80%`
                }
            });
            let e = n.current?.querySelectorAll(`.stack-badge`);
            e && e.forEach( (e, t) => {
                K.fromTo(e, {
                    clipPath: `inset(0 100% 0 0)`
                }, {
                    clipPath: `inset(0 0% 0 0)`,
                    duration: .7,
                    ease: `power3.out`,
                    delay: t * .15,
                    scrollTrigger: {
                        trigger: n.current,
                        start: `top 80%`
                    }
                })
            }
            ),
            K.fromTo(r.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .6,
                delay: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: r.current,
                    start: `top 90%`
                }
            })
        }
        , e);
        return () => i.revert()
    }
    , []),
    (0,
    H.jsx)(`section`, {
        ref: e,
        id: `stack`,
        className: `relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: (0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                className: `flex items-center gap-4 mb-12 md:mb-16`,
                children: [(0,
                H.jsx)(`span`, {
                    className: `font-mono text-sm text-editorial-amber tracking-wider`,
                    children: `03 —`
                }), (0,
                H.jsx)(`span`, {
                    className: `h-[1px] w-16 bg-editorial-amber/40`
                }), (0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                    children: `Tech Stack`
                })]
            }), (0,
            H.jsx)(`div`, {
                ref: t,
                className: `mb-12 md:mb-16`,
                children: (0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-none tracking-wide`,
                    style: {
                        fontSize: `clamp(3rem, 8vw, 7rem)`
                    },
                    children: `TOOLS OF THE TRADE`
                })
            }), (0,
            H.jsx)(`div`, {
                ref: n,
                className: `flex flex-wrap gap-4 md:gap-6`,
                children: ud.map( (e, t) => (0,
                H.jsx)(`div`, {
                    className: `stack-badge border-2 border-editorial-amber bg-editorial-chrome px-6 md:px-8 py-3 md:py-4`,
                    children: (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm md:text-base text-editorial-text tracking-wider`,
                        children: e
                    })
                }, t))
            }), (0,
            H.jsx)(`p`, {
                ref: r,
                className: `font-mono text-xs text-editorial-text/40 mt-12 md:mt-16 tracking-wider`,
                children: `Always learning. Always shipping.`
            })]
        })
    })
}
var fd = [{
    id: 1,
    name: `Hope Foundation Nigeria`,
    role: `NGO Website`,
    stack: [`Laravel`, `React.js`, `MySQL`, `TailwindCSS`],
    outcome: `2.4x increase in donor conversion within 6 months`,
    description: `A mission-driven web platform for a leading Nigerian NGO focused on education and healthcare access. Built with donor portal, event management, and real-time impact tracking.`,
    clientType: `NGO`,
    bgClass: `bg-editorial-bg`
}, {
    id: 2,
    name: `BuildRight Construction`,
    role: `Construction Company Site`,
    stack: [`React.js`, `Node.js`, `GSAP`, `SEO Optimization`],
    outcome: `340% increase in contract inquiry leads year-over-year`,
    description: `A portfolio-forward digital presence for a top-tier construction firm. Features project galleries, bid request workflows, and integrated SEO strategy dominating local search.`,
    clientType: `Construction`,
    bgClass: `bg-editorial-chrome`
}, {
    id: 3,
    name: `EcoLife SEM Campaign`,
    role: `SEO & SEM Campaign`,
    stack: [`Google Ads`, `SEO Strategy`, `Analytics`, `Content`],
    outcome: `1.8M monthly impressions, 12% CTR average`,
    description: `A comprehensive paid search and organic visibility campaign for a sustainable living brand. Structured keyword funnels, landing page optimization, and continuous A/B testing.`,
    clientType: `E-commerce`,
    bgClass: `bg-editorial-bg`
}, {
    id: 4,
    name: `Rivers Heritage Trust`,
    role: `NGO Platform`,
    stack: [`Laravel`, `Vue.js`, `PostgreSQL`, `REST API`],
    outcome: `Streamlined donation flow, 67% faster page load`,
    description: `Heritage preservation platform with interactive maps, donation tracking, and volunteer coordination. Multi-language support for community outreach across Rivers State.`,
    clientType: `NGO`,
    bgClass: `bg-editorial-chrome`
}];
K.registerPlugin($);
function pd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null)
      , i = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let a = K.context( () => {
            K.fromTo(i.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: i.current,
                    start: `top 80%`
                }
            });
            let e = K.matchMedia();
            e.add(`(min-width: 769px)`, () => {
                let i = n.current;
                if (!i)
                    return;
                let a = i.querySelectorAll(`.project-panel`)
                  , o = i.scrollWidth - window.innerWidth
                  , s = K.to(i, {
                    x: -o,
                    ease: `none`,
                    scrollTrigger: {
                        trigger: t.current,
                        start: `top top`,
                        end: () => `+=${o}`,
                        pin: !0,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: !0,
                        onUpdate: e => {
                            r.current && K.set(r.current, {
                                scaleX: e.progress
                            })
                        }
                    }
                });
                return a.forEach(e => {
                    K.fromTo(e, {
                        opacity: .6,
                        scale: .95
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: .5,
                        ease: `power2.out`,
                        scrollTrigger: {
                            trigger: e,
                            containerAnimation: s,
                            start: `left 90%`,
                            end: `left 50%`,
                            scrub: !0
                        }
                    })
                }
                ),
                () => {
                    e.revert()
                }
            }
            )
        }
        , e);
        return () => a.revert()
    }
    , []),
    (0,
    H.jsxs)(`section`, {
        ref: e,
        id: `projects`,
        className: `relative w-full overflow-hidden`,
        children: [(0,
        H.jsx)(`div`, {
            ref: i,
            className: `py-16 md:py-24 px-6 md:px-10 lg:px-16`,
            children: (0,
            H.jsxs)(`div`, {
                className: `w-full max-w-[1400px] mx-auto`,
                children: [(0,
                H.jsxs)(`div`, {
                    className: `flex items-center gap-4 mb-8`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm text-editorial-amber tracking-wider`,
                        children: `04 —`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `h-[1px] w-16 bg-editorial-amber/40`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                        children: `Selected Work`
                    })]
                }), (0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-none tracking-wide`,
                    style: {
                        fontSize: `clamp(3rem, 8vw, 7rem)`
                    },
                    children: `SELECTED WORK`
                })]
            })
        }), (0,
        H.jsx)(`div`, {
            className: `w-full h-[2px] bg-editorial-chrome`,
            children: (0,
            H.jsx)(`div`, {
                ref: r,
                className: `h-full bg-editorial-amber origin-left`,
                style: {
                    transform: `scaleX(0)`
                }
            })
        }), (0,
        H.jsx)(`div`, {
            ref: t,
            className: `relative overflow-hidden`,
            children: (0,
            H.jsx)(`div`, {
                ref: n,
                className: `flex w-max`,
                children: fd.map( (e, t) => (0,
                H.jsx)(`div`, {
                    className: `project-panel w-screen min-w-[100vw] md:min-w-[80vw] lg:min-w-[70vw] min-h-[80vh] flex items-center ${e.bgClass} px-6 md:px-12 lg:px-20 py-16 md:py-24`,
                    children: (0,
                    H.jsxs)(`div`, {
                        className: `w-full max-w-[900px]`,
                        children: [(0,
                        H.jsxs)(`span`, {
                            className: `font-mono text-xs text-editorial-amber tracking-wider mb-4 block`,
                            children: [`PROJECT 0`, t + 1]
                        }), (0,
                        H.jsx)(`h3`, {
                            className: `font-display text-editorial-text leading-[0.95] tracking-wide mb-4`,
                            style: {
                                fontSize: `clamp(2.5rem, 6vw, 5rem)`
                            },
                            children: e.name
                        }), (0,
                        H.jsx)(`p`, {
                            className: `font-mono text-sm text-editorial-amber mb-6 tracking-wider`,
                            children: e.role
                        }), (0,
                        H.jsx)(`p`, {
                            className: `font-body text-lg md:text-xl text-editorial-text/70 leading-relaxed mb-8 max-w-[600px]`,
                            children: e.description
                        }), (0,
                        H.jsx)(`div`, {
                            className: `flex flex-wrap gap-3 mb-8`,
                            children: e.stack.map( (e, t) => (0,
                            H.jsx)(`span`, {
                                className: `font-mono text-xs text-editorial-text/50 border border-editorial-text/20 px-3 py-1`,
                                children: e
                            }, t))
                        }), (0,
                        H.jsx)(`div`, {
                            className: `border-l-2 border-editorial-amber pl-4 mb-8`,
                            children: (0,
                            H.jsx)(`p`, {
                                className: `font-body text-lg md:text-xl text-editorial-text italic`,
                                children: e.outcome
                            })
                        }), (0,
                        H.jsxs)(`a`, {
                            href: `#`,
                            className: `inline-flex items-center gap-2 font-mono text-sm text-editorial-amber tracking-wider group cursor-pointer`,
                            onClick: e => e.preventDefault(),
                            children: [(0,
                            H.jsx)(`span`, {
                                children: `View Project`
                            }), (0,
                            H.jsx)(`span`, {
                                className: `transition-transform duration-300 group-hover:translate-x-2`,
                                children: `→`
                            })]
                        })]
                    })
                }, e.id))
            })
        })]
    })
}
var md = [{
    id: 1,
    name: `Google Analytics Certification`,
    institution: `Google`,
    year: `2024`
}, {
    id: 2,
    name: `HubSpot Content Marketing Certification`,
    institution: `HubSpot Academy`,
    year: `2024`
}, {
    id: 3,
    name: `Meta Front-End Developer Professional Certificate`,
    institution: `Meta (Coursera)`,
    year: `2023`
}, {
    id: 4,
    name: `AWS Cloud Practitioner`,
    institution: `Amazon Web Services`,
    year: `2023`
}, {
    id: 5,
    name: `JavaScript Algorithms & Data Structures`,
    institution: `freeCodeCamp`,
    year: `2023`
}];
K.registerPlugin($);
function hd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let r = K.context( () => {
            K.fromTo(t.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: t.current,
                    start: `top 80%`
                }
            });
            let e = n.current?.querySelectorAll(`.cert-row`);
            e && e.forEach( (e, t) => {
                K.fromTo(e, {
                    scale: .8,
                    opacity: 0,
                    rotation: -2
                }, {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: .7,
                    delay: t * .1,
                    ease: `power3.out`,
                    scrollTrigger: {
                        trigger: e,
                        start: `top 85%`
                    }
                })
            }
            )
        }
        , e);
        return () => r.revert()
    }
    , []),
    (0,
    H.jsx)(`section`, {
        ref: e,
        id: `certifications`,
        className: `relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: (0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                ref: t,
                className: `mb-12 md:mb-16`,
                children: [(0,
                H.jsxs)(`div`, {
                    className: `flex items-center gap-4 mb-8`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm text-editorial-amber tracking-wider`,
                        children: `05 —`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `h-[1px] w-16 bg-editorial-amber/40`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                        children: `Credentials`
                    })]
                }), (0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-none tracking-wide mb-4`,
                    style: {
                        fontSize: `clamp(3rem, 8vw, 7rem)`
                    },
                    children: `CREDENTIALS`
                }), (0,
                H.jsx)(`p`, {
                    className: `font-mono text-sm text-editorial-text/40 tracking-wider`,
                    children: `Earned, not assumed.`
                })]
            }), (0,
            H.jsx)(`div`, {
                ref: n,
                className: `border-t border-editorial-amber/30`,
                children: md.map(e => (0,
                H.jsxs)(`div`, {
                    className: `cert-row border-b border-editorial-amber/30 py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-0`,
                    children: [(0,
                    H.jsx)(`div`, {
                        className: `hidden md:block w-8 flex-shrink-0`,
                        children: (0,
                        H.jsx)(`span`, {
                            className: `text-editorial-amber text-lg`,
                            children: `◆`
                        })
                    }), (0,
                    H.jsx)(`div`, {
                        className: `flex-1 md:px-4`,
                        children: (0,
                        H.jsx)(`h3`, {
                            className: `font-display text-2xl md:text-3xl lg:text-4xl text-editorial-text`,
                            children: e.name
                        })
                    }), (0,
                    H.jsx)(`div`, {
                        className: `md:w-[280px] lg:w-[320px] flex-shrink-0 md:px-4`,
                        children: (0,
                        H.jsx)(`p`, {
                            className: `font-body text-lg md:text-xl text-editorial-text/60 italic`,
                            children: e.institution
                        })
                    }), (0,
                    H.jsx)(`div`, {
                        className: `md:w-[100px] lg:w-[120px] flex-shrink-0 md:text-right`,
                        children: (0,
                        H.jsx)(`span`, {
                            className: `font-mono text-sm text-editorial-amber tracking-wider`,
                            children: e.year
                        })
                    })]
                }, e.id))
            })]
        })
    })
}
K.registerPlugin($);
function gd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let i = K.context( () => {
            K.fromTo(r.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: r.current,
                    start: `top 80%`
                }
            }),
            K.fromTo(t.current, {
                y: 60
            }, {
                y: -60,
                ease: `none`,
                scrollTrigger: {
                    trigger: e.current,
                    start: `top bottom`,
                    end: `bottom top`,
                    scrub: 1
                }
            }),
            K.fromTo(n.current, {
                y: -60
            }, {
                y: 60,
                ease: `none`,
                scrollTrigger: {
                    trigger: e.current,
                    start: `top bottom`,
                    end: `bottom top`,
                    scrub: 1
                }
            }),
            [t.current, n.current].forEach( (e, t) => {
                if (!e)
                    return;
                let n = e.querySelector(`.panel-content`);
                n && K.fromTo(n, {
                    opacity: 0,
                    y: 40
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: t * .2,
                    ease: `power3.out`,
                    scrollTrigger: {
                        trigger: e,
                        start: `top 75%`
                    }
                })
            }
            )
        }
        , e);
        return () => i.revert()
    }
    , []),
    (0,
    H.jsxs)(`section`, {
        ref: e,
        id: `niche`,
        className: `relative w-full overflow-hidden`,
        children: [(0,
        H.jsx)(`div`, {
            ref: r,
            className: `py-16 md:py-24 px-6 md:px-10 lg:px-16`,
            children: (0,
            H.jsxs)(`div`, {
                className: `w-full max-w-[1400px] mx-auto`,
                children: [(0,
                H.jsxs)(`div`, {
                    className: `flex items-center gap-4 mb-8`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm text-editorial-amber tracking-wider`,
                        children: `06 —`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `h-[1px] w-16 bg-editorial-amber/40`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                        children: `Niche`
                    })]
                }), (0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-none tracking-wide`,
                    style: {
                        fontSize: `clamp(3rem, 8vw, 7rem)`
                    },
                    children: `WHO WE BUILD FOR`
                })]
            })
        }), (0,
        H.jsxs)(`div`, {
            className: `flex flex-col lg:flex-row min-h-[80vh]`,
            children: [(0,
            H.jsx)(`div`, {
                ref: t,
                className: `flex-1 bg-editorial-green px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36 flex items-center`,
                children: (0,
                H.jsxs)(`div`, {
                    className: `panel-content max-w-[600px]`,
                    children: [(0,
                    H.jsxs)(`h3`, {
                        className: `font-display text-editorial-text leading-[0.95] tracking-wide mb-8`,
                        style: {
                            fontSize: `clamp(2.5rem, 5vw, 4.5rem)`
                        },
                        children: [`NON-PROFITS`, (0,
                        H.jsx)(`br`, {}), `& NGOS`]
                    }), (0,
                    H.jsx)(`p`, {
                        className: `font-body text-lg md:text-xl text-editorial-text/80 leading-relaxed`,
                        children: `Destiny and ThothTech understand that NGOs don't just need websites — they need platforms that communicate mission, build donor trust, and drive community action. Clean architecture. Zero bloat. Maximum impact.`
                    }), (0,
                    H.jsxs)(`div`, {
                        className: `mt-8 flex items-center gap-3`,
                        children: [(0,
                        H.jsx)(`span`, {
                            className: `h-[2px] w-12 bg-editorial-amber`
                        }), (0,
                        H.jsx)(`span`, {
                            className: `font-mono text-xs text-editorial-amber tracking-wider`,
                            children: `Mission-Driven Design`
                        })]
                    })]
                })
            }), (0,
            H.jsx)(`div`, {
                ref: n,
                className: `flex-1 bg-editorial-bg px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36 flex items-center border-l-0 lg:border-l border-t lg:border-t-0 border-editorial-amber/20`,
                children: (0,
                H.jsxs)(`div`, {
                    className: `panel-content max-w-[600px]`,
                    children: [(0,
                    H.jsxs)(`h3`, {
                        className: `font-display text-editorial-text leading-[0.95] tracking-wide mb-8`,
                        style: {
                            fontSize: `clamp(2.5rem, 5vw, 4.5rem)`
                        },
                        children: [`CONSTRUCTION`, (0,
                        H.jsx)(`br`, {}), `& INFRASTRUCTURE`]
                    }), (0,
                    H.jsx)(`p`, {
                        className: `font-body text-lg md:text-xl text-editorial-text/80 leading-relaxed`,
                        children: `In an industry built on reputation and visibility, ThothTech builds digital presences as solid as the structures their clients erect. Project portfolios, contract lead generation, and SEO that puts builders on the map — literally.`
                    }), (0,
                    H.jsxs)(`div`, {
                        className: `mt-8 flex items-center gap-3`,
                        children: [(0,
                        H.jsx)(`span`, {
                            className: `h-[2px] w-12 bg-editorial-amber`
                        }), (0,
                        H.jsx)(`span`, {
                            className: `font-mono text-xs text-editorial-amber tracking-wider`,
                            children: `Reputation Engineering`
                        })]
                    })]
                })
            })]
        })]
    })
}
var _d = [{
    id: 1,
    quote: `Destiny transformed our entire digital strategy. Our donor conversion rate doubled within three months, and the website he built for us is the most professional tool we have ever used. ThothTech does not just build websites — they build credibility.`,
    name: `Dr. Chioma Adeleke`,
    organization: `Hope Foundation Nigeria`,
    type: `NGO`
}, {
    id: 2,
    quote: `Before ThothTech, we were invisible online. Now we rank first for 'construction company Port Harcourt' and our project inquiry pipeline has never been fuller. Destiny understands both code and business.`,
    name: `Engr. Michael Okafor`,
    organization: `BuildRight Construction Ltd.`,
    type: `Construction`
}, {
    id: 3,
    quote: `Working with Destiny felt like having a CTO on our team. He architected our platform from the ground up, handled the SEO groundwork, and ensured every line of code was production-ready. Exceptional technical depth.`,
    name: `Aisha Bello`,
    organization: `Rivers Heritage Trust`,
    type: `NGO`
}];
K.registerPlugin($);
function vd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let r = K.context( () => {
            K.fromTo(t.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: t.current,
                    start: `top 80%`
                }
            });
            let e = n.current?.querySelectorAll(`.quote-block`);
            e && e.forEach( (e, t) => {
                let n = t % 2 == 0 ? -60 : 60;
                K.fromTo(e, {
                    x: n,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: `power3.out`,
                    scrollTrigger: {
                        trigger: e,
                        start: `top 80%`
                    }
                })
            }
            )
        }
        , e);
        return () => r.revert()
    }
    , []),
    (0,
    H.jsx)(`section`, {
        ref: e,
        id: `testimonials`,
        className: `relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: (0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                ref: t,
                className: `mb-16 md:mb-24`,
                children: [(0,
                H.jsxs)(`div`, {
                    className: `flex items-center gap-4 mb-8`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm text-editorial-amber tracking-wider`,
                        children: `07 —`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `h-[1px] w-16 bg-editorial-amber/40`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                        children: `Testimonials`
                    })]
                }), (0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-none tracking-wide mb-4`,
                    style: {
                        fontSize: `clamp(3rem, 8vw, 7rem)`
                    },
                    children: `WHAT CLIENTS SAY`
                }), (0,
                H.jsx)(`p`, {
                    className: `font-mono text-sm text-editorial-text/40 tracking-wider`,
                    children: `Results speak. So do the people behind them.`
                })]
            }), (0,
            H.jsx)(`div`, {
                ref: n,
                className: `space-y-16 md:space-y-24`,
                children: _d.map( (e, t) => (0,
                H.jsx)(`div`, {
                    className: `quote-block flex flex-col ${t % 2 == 0 ? `md:items-start` : `md:items-end`}`,
                    children: (0,
                    H.jsxs)(`div`, {
                        className: `max-w-[900px] ${t % 2 == 0 ? `md:pr-12` : `md:pl-12`}`,
                        children: [(0,
                        H.jsx)(`span`, {
                            className: `font-display text-6xl md:text-8xl text-editorial-amber leading-none block mb-4`,
                            children: `"`
                        }), (0,
                        H.jsx)(`p`, {
                            className: `font-body text-xl md:text-2xl lg:text-3xl text-editorial-text/90 leading-relaxed italic mb-8`,
                            children: e.quote
                        }), (0,
                        H.jsxs)(`div`, {
                            className: `flex items-center gap-4`,
                            children: [(0,
                            H.jsx)(`span`, {
                                className: `h-[1px] w-8 bg-editorial-amber`
                            }), (0,
                            H.jsxs)(`p`, {
                                className: `font-mono text-sm text-editorial-text/60 tracking-wider`,
                                children: [(0,
                                H.jsx)(`span`, {
                                    className: `text-editorial-text`,
                                    children: e.name
                                }), `, `, e.organization]
                            })]
                        })]
                    })
                }, e.id))
            })]
        })
    })
}
var yd = [{
    id: 1,
    number: `01`,
    title: `Discovery`,
    description: `Understanding the client's goals, audience, and competitive landscape through in-depth research and strategic workshops.`
}, {
    id: 2,
    number: `02`,
    title: `Architecture`,
    description: `Structuring the project: tech stack selection, sitemap planning, SEO groundwork, and performance budgeting.`
}, {
    id: 3,
    number: `03`,
    title: `Build`,
    description: `Laravel and React development with clean, maintainable code. Rigorous testing, responsive design, and component-driven workflows.`
}, {
    id: 4,
    number: `04`,
    title: `Launch & Optimize`,
    description: `Deployment, performance tuning, security hardening, and ongoing SEO/SEM support to maximize ROI.`
}];
K.registerPlugin($);
function bd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null);
    return (0,
    v.useEffect)( () => {
        let i = K.context( () => {
            K.fromTo(t.current, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: t.current,
                    start: `top 80%`
                }
            });
            let e = n.current?.querySelectorAll(`.process-step`);
            e && e.forEach( (e, t) => {
                K.fromTo(e, {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    delay: t * .15,
                    ease: `power3.out`,
                    scrollTrigger: {
                        trigger: e,
                        start: `top 85%`
                    }
                })
            }
            );
            let i = r.current;
            i && K.fromTo(i, {
                scaleX: 0
            }, {
                scaleX: 1,
                duration: 1.5,
                ease: `power2.inOut`,
                scrollTrigger: {
                    trigger: n.current,
                    start: `top 75%`,
                    end: `bottom 50%`,
                    scrub: 1
                }
            })
        }
        , e);
        return () => i.revert()
    }
    , []),
    (0,
    H.jsx)(`section`, {
        ref: e,
        id: `process`,
        className: `relative w-full py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: (0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                ref: t,
                className: `mb-16 md:mb-24`,
                children: [(0,
                H.jsxs)(`div`, {
                    className: `flex items-center gap-4 mb-8`,
                    children: [(0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm text-editorial-amber tracking-wider`,
                        children: `08 —`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `h-[1px] w-16 bg-editorial-amber/40`
                    }), (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                        children: `Process`
                    })]
                }), (0,
                H.jsx)(`h2`, {
                    className: `font-display text-editorial-text leading-none tracking-wide mb-4`,
                    style: {
                        fontSize: `clamp(3rem, 8vw, 7rem)`
                    },
                    children: `HOW I WORK`
                }), (0,
                H.jsx)(`p`, {
                    className: `font-body text-xl md:text-2xl text-editorial-text/60 italic`,
                    children: `From brief to browser — a disciplined process.`
                })]
            }), (0,
            H.jsxs)(`div`, {
                ref: n,
                className: `relative`,
                children: [(0,
                H.jsx)(`div`, {
                    ref: r,
                    className: `hidden lg:block absolute top-[40px] left-[60px] right-[60px] h-[2px] bg-editorial-amber/30 origin-left`,
                    style: {
                        transform: `scaleX(0)`
                    }
                }), (0,
                H.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8`,
                    children: yd.map(e => (0,
                    H.jsxs)(`div`, {
                        className: `process-step relative`,
                        children: [(0,
                        H.jsx)(`div`, {
                            className: `w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-editorial-amber mb-6`,
                            children: (0,
                            H.jsx)(`span`, {
                                className: `font-display text-2xl md:text-3xl text-editorial-amber`,
                                children: e.number
                            })
                        }), (0,
                        H.jsx)(`h3`, {
                            className: `font-display text-2xl md:text-3xl text-editorial-text mb-4`,
                            children: e.title
                        }), (0,
                        H.jsx)(`p`, {
                            className: `font-body text-lg text-editorial-text/60 leading-relaxed`,
                            children: e.description
                        })]
                    }, e.id))
                })]
            })]
        })
    })
}
K.registerPlugin($);
function xd() {
    let e = (0,
    v.useRef)(null)
      , t = (0,
    v.useRef)(null)
      , n = (0,
    v.useRef)(null)
      , r = (0,
    v.useRef)(null)
      , i = (0,
    v.useRef)(null)
      , a = (0,
    v.useRef)(null)
      , [o,s] = (0,
    v.useState)(``);
    return (0,
    v.useEffect)( () => {
        let o = K.context( () => {
            K.fromTo(t.current, {
                scale: .6,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: t.current,
                    start: `top 80%`
                }
            }),
            K.fromTo(r.current, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                delay: .4,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: r.current,
                    start: `top 85%`
                }
            }),
            K.fromTo(i.current, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                delay: .6,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: i.current,
                    start: `top 90%`
                }
            }),
            K.fromTo(a.current, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                delay: .8,
                ease: `power3.out`,
                scrollTrigger: {
                    trigger: a.current,
                    start: `top 90%`
                }
            }),
            $.create({
                trigger: n.current,
                start: `top 80%`,
                once: !0,
                onEnter: () => {
                    let e = 0
                      , t = setInterval( () => {
                        e <= 21 ? (s(`destiny@thothtech.com`.slice(0, e)),
                        e++) : clearInterval(t)
                    }
                    , 80)
                }
            })
        }
        , e);
        return () => o.revert()
    }
    , []),
    (0,
    H.jsxs)(`section`, {
        ref: e,
        id: `contact`,
        className: `relative w-full min-h-screen flex flex-col justify-center py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 overflow-hidden`,
        children: [(0,
        H.jsxs)(`div`, {
            className: `relative z-10 w-full max-w-[1400px] mx-auto`,
            children: [(0,
            H.jsxs)(`div`, {
                className: `flex items-center gap-4 mb-12 md:mb-16`,
                children: [(0,
                H.jsx)(`span`, {
                    className: `font-mono text-sm text-editorial-amber tracking-wider`,
                    children: `09 —`
                }), (0,
                H.jsx)(`span`, {
                    className: `h-[1px] w-16 bg-editorial-amber/40`
                }), (0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/40 tracking-wider uppercase`,
                    children: `Contact`
                })]
            }), (0,
            H.jsxs)(`h2`, {
                ref: t,
                className: `font-display text-editorial-text leading-[0.9] tracking-wide mb-8`,
                style: {
                    fontSize: `clamp(3rem, 10vw, 9rem)`
                },
                children: [`LET'S BUILD`, (0,
                H.jsx)(`br`, {}), `SOMETHING REAL`]
            }), (0,
            H.jsx)(`div`, {
                className: `mb-6`,
                children: (0,
                H.jsxs)(`span`, {
                    ref: n,
                    className: `font-mono text-lg md:text-xl lg:text-2xl text-editorial-amber tracking-wider`,
                    children: [o, (0,
                    H.jsx)(`span`, {
                        className: `inline-block w-[2px] h-[1.2em] bg-editorial-amber ml-1 animate-pulse`
                    })]
                })
            }), (0,
            H.jsxs)(`div`, {
                className: `mb-6 flex items-center gap-3`,
                children: [(0,
                H.jsx)(`div`, {
                    className: `w-8 h-8 flex items-center justify-center border border-editorial-amber/30`,
                    children: (0,
                    H.jsx)(`i`, {
                        className: `ri-phone-line text-editorial-amber text-sm`
                    })
                }), (0,
                H.jsx)(`a`, {
                    href: `tel:+2348034567890`,
                    className: `font-mono text-lg md:text-xl text-editorial-text/80 tracking-wider transition-colors duration-300 hover:text-editorial-amber cursor-pointer whitespace-nowrap`,
                    children: `+234 803 456 7890`
                })]
            }), (0,
            H.jsx)(`div`, {
                className: `mb-8`,
                children: (0,
                H.jsxs)(`a`, {
                    href: `https://wa.me/2348034567890?text=Hi%20Destiny%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20connect.`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center gap-3 border border-editorial-green px-6 py-3 transition-all duration-300 hover:bg-editorial-green/10 cursor-pointer whitespace-nowrap`,
                    children: [(0,
                    H.jsx)(`div`, {
                        className: `w-5 h-5 flex items-center justify-center`,
                        children: (0,
                        H.jsx)(`i`, {
                            className: `ri-whatsapp-line text-editorial-green text-base`
                        })
                    }), (0,
                    H.jsx)(`span`, {
                        className: `font-mono text-sm text-editorial-green tracking-wider`,
                        children: `Chat on WhatsApp`
                    })]
                })
            }), (0,
            H.jsx)(`p`, {
                ref: r,
                className: `font-body text-xl md:text-2xl text-editorial-text/60 italic mb-12 max-w-[700px]`,
                children: `Available for fullstack projects, SEO audits & brand partnerships`
            }), (0,
            H.jsx)(`div`, {
                ref: i,
                className: `mb-16`,
                children: (0,
                H.jsxs)(`a`, {
                    href: `mailto:destiny@thothtech.com`,
                    className: `inline-flex items-center gap-3 bg-editorial-amber text-editorial-bg font-mono text-sm md:text-base tracking-wider px-8 py-4 transition-all duration-300 hover:bg-editorial-yellow cursor-pointer whitespace-nowrap`,
                    children: [(0,
                    H.jsx)(`span`, {
                        children: `Send a Message`
                    }), (0,
                    H.jsx)(`span`, {
                        children: `→`
                    })]
                })
            }), (0,
            H.jsx)(`div`, {
                ref: a,
                className: `flex flex-wrap gap-6 md:gap-8`,
                children: [{
                    label: `GitHub`,
                    href: `#`
                }, {
                    label: `LinkedIn`,
                    href: `#`
                }, {
                    label: `Twitter/X`,
                    href: `#`
                }].map(e => (0,
                H.jsx)(`a`, {
                    href: e.href,
                    className: `font-mono text-sm text-editorial-text/50 tracking-wider transition-colors duration-300 hover:text-editorial-amber cursor-pointer whitespace-nowrap`,
                    onClick: e => e.preventDefault(),
                    children: e.label
                }, e.label))
            })]
        }), (0,
        H.jsx)(`footer`, {
            className: `absolute bottom-0 left-0 w-full px-6 md:px-10 lg:px-16 py-6 border-t border-editorial-amber/10`,
            children: (0,
            H.jsxs)(`div`, {
                className: `w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4`,
                children: [(0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/30 tracking-wider`,
                    children: `© 2025 ThothTech`
                }), (0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/30 tracking-wider`,
                    children: `CEO: Destiny Solomon Okagbuo`
                }), (0,
                H.jsx)(`span`, {
                    className: `font-mono text-xs text-editorial-text/30 tracking-wider`,
                    children: `Port Harcourt, Nigeria`
                })]
            })
        })]
    })
}
function Sd() {
    return (0,
    H.jsxs)(`main`, {
        className: `relative w-full bg-editorial-bg text-editorial-text overflow-x-hidden`,
        children: [(0,
        H.jsx)(rd, {}), (0,
        H.jsx)(ad, {}), (0,
        H.jsx)(sd, {}), (0,
        H.jsx)(ld, {}), (0,
        H.jsx)(dd, {}), (0,
        H.jsx)(pd, {}), (0,
        H.jsx)(hd, {}), (0,
        H.jsx)(gd, {}), (0,
        H.jsx)(vd, {}), (0,
        H.jsx)(bd, {}), (0,
        H.jsx)(xd, {})]
    })
}
var Cd = s({
    default: () => wd
})
  , wd = [{
    path: `/`,
    element: (0,
    H.jsx)(Sd, {})
}, {
    path: `*`,
    element: (0,
    H.jsx)(kn, {})
}];
export {$e as a, p as c, l as d, Xe as i, o as l, wd as n, _ as o, cn as r, h as s, Cd as t, s as u};
//# sourceMappingURL=config-BdwP9HnZ.js.map
