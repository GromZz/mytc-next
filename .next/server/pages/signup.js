(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./src/components/Base/index.js":
/*!**************************************!*\
  !*** ./src/components/Base/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons_Brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons/Brand */ "./src/lib/icons/Brand.jsx");
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/header.module.scss */ "./src/styles/header.module.scss");
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Base\\index.js";





const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_lib_icons_Brand__WEBPACK_IMPORTED_MODULE_1__.Logo, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
            children: "MYTC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/signin",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            children: "Sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/lib/icons/Brand.jsx":
/*!*********************************!*\
  !*** ./src/lib/icons/Brand.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\lib\\icons\\Brand.jsx";

const Logo = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "650.000000pt",
    height: "650.000000pt",
    viewBox: "0 0 650.000000 650.000000",
    preserveAspectRatio: "xMidYMid meet",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      transform: "translate(0.000000,708.000000) scale(0.100000,-0.100000)",
      fill: "#000000",
      stroke: "none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3335 6429 c-867 -58 -1648 -496 -2164 -1211 -248 -343 -427 -775\r\n-495 -1188 -45 -274 -53 -588 -22 -830 87 -676 379 -1264 860 -1733 438 -427\r\n999 -702 1621 -794 173 -25 621 -25 790 1 572 87 1060 309 1484 672 459 393\r\n782 914 926 1494 62 250 85 441 85 709 0 451 -97 865 -301 1277 -266 541 -710\r\n996 -1242 1274 -386 202 -751 303 -1190 330 -177 11 -178 11 -352 -1z m580\r\n-383 c682 -110 1296 -493 1688 -1053 419 -599 558 -1357 381 -2068 -164 -660\r\n-601 -1236 -1198 -1580 -261 -151 -547 -251 -871 -307 -110 -18 -169 -22 -380\r\n-22 -253 -1 -300 3 -515 46 -412 80 -830 288 -1153 571 -450 396 -734 903\r\n-839 1502 -29 166 -36 528 -14 705 85 673 414 1262 938 1682 341 273 779 464\r\n1193 522 61 9 124 17 140 20 74 10 534 -3 630 -18z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3465 5898 c-14 -13 -30 -40 -35 -61 -12 -54 -4 -152 15 -180 36 -56\r\n115 -59 160 -5 22 26 25 39 25 108 0 44 -5 91 -12 105 -25 54 -107 72 -153 33z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M1873 5241 c-37 -23 -54 -71 -41 -116 9 -35 90 -119 129 -136 69 -28\r\n139 21 139 96 0 32 -9 46 -62 101 -74 76 -112 88 -165 55z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M5075 5242 c-38 -24 -103 -96 -115 -128 -23 -60 29 -134 94 -134 67\r\n0 176 112 176 180 0 73 -92 122 -155 82z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M1924 4360 c-111 -22 -224 -113 -283 -225 l-36 -70 0 -520 0 -520 31\r\n-65 c66 -137 181 -221 331 -240 105 -14 3043 -13 3137 0 150 22 283 134 333\r\n281 16 49 18 95 18 539 0 539 0 538 -66 640 -45 70 -118 130 -196 162 l-58 23\r\n-1585 1 c-872 1 -1604 -2 -1626 -6z m579 -617 c13 -21 62 -111 108 -200 46\r\n-90 86 -163 89 -163 3 0 50 84 104 188 54 103 103 193 108 200 13 15 60 16 76\r\n0 17 -17 17 -589 0 -606 -7 -7 -22 -12 -34 -12 -43 0 -49 22 -54 219 l-5 186\r\n-59 -115 c-93 -180 -101 -192 -139 -188 -30 3 -37 11 -94 118 -34 63 -71 131\r\n-82 150 l-21 35 0 -184 c0 -157 -2 -187 -17 -203 -18 -21 -53 -24 -71 -6 -17\r\n17 -17 589 0 606 7 7 25 12 40 12 21 0 33 -9 51 -37z m734 -69 c48 -58 92\r\n-112 98 -121 9 -12 27 5 106 104 72 89 101 119 121 121 30 4 60 -30 51 -57 -3\r\n-9 -53 -74 -110 -145 l-103 -128 0 -131 c0 -107 -3 -134 -17 -149 -20 -22 -51\r\n-23 -75 -1 -16 14 -18 33 -18 150 l0 134 -105 127 c-105 127 -122 161 -93 190\r\n30 30 57 13 145 -94z m925 89 c23 -21 23 -38 -2 -63 -17 -17 -33 -20 -110 -20\r\nl-90 0 0 -249 c0 -214 -2 -252 -16 -265 -20 -21 -53 -20 -76 1 -16 15 -18 37\r\n-18 265 l0 248 -79 0 c-102 0 -131 10 -131 48 0 51 6 52 264 52 209 0 242 -2\r\n258 -17z m473 -14 c53 -27 76 -58 67 -91 -8 -33 -30 -32 -97 2 -57 29 -71 32\r\n-129 28 -80 -5 -111 -25 -145 -93 -36 -70 -36 -192 0 -261 49 -95 156 -121\r\n265 -64 64 34 93 35 104 5 13 -35 -6 -62 -67 -91 -43 -22 -76 -30 -130 -32\r\n-130 -7 -225 45 -281 152 -24 46 -27 62 -27 161 0 129 17 178 85 243 57 56\r\n106 72 215 69 75 -2 99 -6 140 -28z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M1218 3645 c-32 -18 -58 -63 -58 -99 0 -14 13 -40 29 -58 29 -33 29\r\n-33 126 -33 97 0 97 0 126 33 39 44 39 90 0 134 -28 32 -33 33 -113 36 -60 2\r\n-91 -2 -110 -13z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M5640 3643 c-39 -27 -49 -45 -49 -88 -1 -75 43 -105 151 -105 88 0\r\n135 23 144 70 20 97 -25 140 -147 140 -54 0 -81 -5 -99 -17z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M1945 2111 c-41 -24 -112 -106 -117 -134 -12 -63 40 -127 103 -127\r\n56 0 169 115 169 172 0 88 -82 134 -155 89z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M4992 2105 c-36 -30 -50 -81 -32 -116 17 -34 90 -108 122 -125 44\r\n-23 77 -17 114 20 26 26 34 42 34 71 0 32 -9 46 -63 102 -51 53 -69 65 -103\r\n70 -33 4 -45 1 -72 -22z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M3503 1493 c-60 -11 -89 -85 -77 -195 5 -48 12 -63 36 -83 19 -16 42\r\n-25 64 -25 77 0 104 41 104 159 0 74 -2 83 -27 110 -29 30 -61 41 -100 34z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 1
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 1
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/lib/icons/Undraw.jsx":
/*!**********************************!*\
  !*** ./src/lib/icons/Undraw.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Booking": () => (/* binding */ Booking),
/* harmony export */   "Checking": () => (/* binding */ Checking),
/* harmony export */   "Events": () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\lib\\icons\\Undraw.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Booking = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 853.117 565"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M819.77 378.11c-6.16 6.73-13.8 11.74-22.09 15.63h-.01c-.78.37-1.56.73-2.35 1.07h-.01l-.01.01-.01-.01h-.01a.01.01 0 01-.01.01h-.01l-.01-.01c-.01.01-.01.01-.02 0l-.01.01-.01-.01h-.01c-.01.01-.01.01-.02 0h-.01a139.774 139.774 0 01-17.06 6.1A236.651 236.651 0 01673 406.4l-2-.36v-81.11c.66-.28 1.33-.56 2-.83q6.555-2.715 13.27-4.99 9.66-3.3 19.59-5.66a212.167 212.167 0 0166.04-5.34q6.045.45 12.06 1.3c8.39 1.17 17.19 3.21 24.93 6.75h.01c1.13.53 2.24 1.08 3.34 1.67 6.88 3.73 12.68 8.86 16.22 15.89a30.573 30.573 0 012.72 7.99v.02c.2.96.34 1.93.45 2.89 1.26 11.84-3.65 24.51-11.86 33.49z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M831.63 344.62a1.358 1.358 0 01-.3.04q-25.695 1.125-51.32 3.34h-.03c-.07.01-.13.01-.2.02q-26.31 2.28-52.51 5.71c-.74.1-1.47.2-2.2.29q-18.12 2.415-36.17 5.36-7.965 1.305-15.9 2.72c-.67.12-1.33.23-2 .36v-3.03c.67-.13 1.34-.24 2-.36q26.43-4.68 53.04-8.17 6.69-.9 13.4-1.7 19.38-2.34 38.82-4.04l2.84-.24q24.885-2.115 49.84-3.21a.939.939 0 01.24.02c1.6.14 1.94 2.54.45 2.89z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M796.056 391.863c-21.34.157-42.363-8.892-57.458-23.87a77.826 77.826 0 01-11.184-14.07c-1.017-1.63-3.398.169-2.389 1.786 11.723 18.8 31.25 32.193 52.778 37.118a80.811 80.811 0 0018.637 1.994c1.913-.014 1.517-2.972-.384-2.958zM705.86 313.45a1.692 1.692 0 01-1.25 1.13 65.22 65.22 0 00-14.08 5.5A68.406 68.406 0 00673 333.33c-.27.27-.53.54-.78.82-.42.44-.82.89-1.22 1.35v-4.36a41.8 41.8 0 012-1.99 71.912 71.912 0 0113.27-10.04q9.66-3.3 19.59-5.66zm104.799 1.922a69.402 69.402 0 00-32.422 28.585 1.5 1.5 0 00.793 1.954 1.528 1.528 0 001.953-.792 66.049 66.049 0 0130.797-26.984c1.765-.754.648-3.519-1.121-2.763z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M851.58 230.44c-2.32 8.82-6.77 16.81-12.3 24.1l-.01.01c-.51.68-1.04 1.37-1.59 2.03v.01a139.27 139.27 0 01-12.41 13.39 233.429 233.429 0 01-53.37 38.13c-30.67 16.02-64.95 25.49-98.9 26.03-.26.01-.52.01-.78.01-.41.01-.82.01-1.22.01v-45.45c.65-1.24 1.32-2.48 2-3.71a219.524 219.524 0 0132.03-43.82c.3-.33.61-.66.92-.98q7.02-7.41 14.72-14.11a210.819 210.819 0 0167.29-39.85c7.97-2.86 16.71-5.15 25.21-5.6 1.25-.07 2.49-.1 3.74-.09 7.83.11 15.34 1.96 21.75 6.54a30.999 30.999 0 016.12 5.81c.62.77 1.19 1.56 1.74 2.37v.01c6.62 9.9 8.16 23.39 5.06 35.16z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M846.52 195.27v.01a1.461 1.461 0 01-.24.17q-22.2 12.915-43.84 26.77c-.02.01-.03.02-.05.03a1.74 1.74 0 01-.18.11q-22.245 14.25-43.86 29.46c-.6.42-1.21.85-1.82 1.28q-14.925 10.545-29.54 21.54-27.6 20.79-53.99 43.12c-.67.56-1.33 1.13-2 1.7v-3.89c.66-.57 1.33-1.14 2-1.7q10.11-8.535 20.4-16.83c2.05-1.65 4.11-3.3 6.17-4.93q27.45-21.855 56.13-42.08h.01q5.64-3.975 11.3-7.88 16.08-11.07 32.52-21.61c.79-.51 1.59-1.02 2.39-1.53q21.045-13.44 42.64-26a1.489 1.489 0 01.22-.11c1.5-.6 2.91 1.38 1.74 2.37z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M836.968 253.633c-18.825 10.052-41.646 11.805-61.97 5.553a77.827 77.827 0 01-16.44-7.264c-1.66-.973-2.931 1.726-1.286 2.69 19.114 11.204 42.627 13.993 63.98 8.353a80.812 80.812 0 0017.43-6.89c1.688-.902-.037-3.337-1.714-2.442zm-140.847 36.589a68.553 68.553 0 01-.952-15.87 72.319 72.319 0 0110.78-34.15q7.029-7.408 14.724-14.112a1.705 1.705 0 01-.586 1.585 65.451 65.451 0 00-9.912 11.407 69.122 69.122 0 00-11.082 50.892 1.212 1.212 0 01-.314 1.143 1.625 1.625 0 01-2.658-.895zm118.247-111.11a69.402 69.402 0 00-15.433 40.375 1.5 1.5 0 001.61 1.362 1.528 1.528 0 001.361-1.61 66.048 66.048 0 0114.738-38.2c1.213-1.488-1.061-3.417-2.276-1.927z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M710.81 211.97v.01c-.07.86-.15 1.71-.24 2.56v.02a141.3 141.3 0 01-3.25 17.96c-.7 2.9-1.46 5.78-2.29 8.66-.1.37-.21.74-.32 1.1v.01a229.523 229.523 0 01-8.74 24.65A238.918 238.918 0 01673 309.16c-.65.97-1.32 1.94-2 2.9v-156.6c.67-.04 1.33-.04 2-.02q.48 0 .96.03a30.322 30.322 0 018.28 1.61c.94.31 1.85.66 2.75 1.05 10.91 4.78 19.48 15.32 23.2 26.91 2.79 8.68 3.35 17.81 2.62 26.93z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M684.99 158.13a1.076 1.076 0 01-.11.28q-6.075 11.805-11.88 23.73c-.67 1.37-1.34 2.75-2 4.12v-6.8q.99-2.04 2-4.08 4.485-9.09 9.12-18.1a1.304 1.304 0 01.12-.2c.92-1.32 3.2-.42 2.75 1.05zm26.14 55.45c-.18.32-.36.64-.56.96a79.816 79.816 0 01-10.42 14.24A85.916 85.916 0 01673 248.55c-.66.32-1.33.62-2 .9v-3.25c.67-.3 1.34-.61 2-.93a80.866 80.866 0 0035.37-32.82 1.645 1.645 0 012.44-.47 1.153 1.153 0 01.32 1.6z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M673 33v76h-2v-.81H2v.81H0V33A33.032 33.032 0 0133 0h607a33.032 33.032 0 0133 33z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M640 0H33A33.032 33.032 0 000 33v434a33.032 33.032 0 0033 33h607a33.032 33.032 0 0033-33V33a33.032 33.032 0 00-33-33zm31 467a31.04 31.04 0 01-31 31H33a31.04 31.04 0 01-31-31V33A31.04 31.04 0 0133 2h607a31.04 31.04 0 0131 31z",
      fill: "#3f3d56"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 136,
      cy: 54.5,
      r: 20,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 537,
      cy: 54.5,
      r: 20,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M193.785 277.502H74.808a19.033 19.033 0 01-19.011-19.012v-56.232a19.033 19.033 0 0119.011-19.012h118.977a19.033 19.033 0 0119.011 19.012v56.232a19.033 19.033 0 01-19.011 19.012zm202.398 0H277.207a19.033 19.033 0 01-19.011-19.012v-56.232a19.033 19.033 0 0119.011-19.012h118.976a19.033 19.033 0 0119.012 19.012v56.232a19.033 19.033 0 01-19.012 19.012z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M396.183 422.793H277.207a19.61 19.61 0 01-19.588-19.587v-56.233a19.61 19.61 0 0119.588-19.588h118.976a19.61 19.61 0 0119.588 19.588v56.233a19.61 19.61 0 01-19.588 19.587zm-202.789 0H74.418a19.61 19.61 0 01-19.587-19.587v-56.233a19.61 19.61 0 0119.587-19.588h118.976a19.61 19.61 0 0119.588 19.588v56.233a19.61 19.61 0 01-19.588 19.587zm405.188 0H479.606a19.61 19.61 0 01-19.588-19.587v-56.233a19.61 19.61 0 0119.588-19.588h118.976a19.61 19.61 0 0119.587 19.588v56.233a19.61 19.61 0 01-19.587 19.587zm0-145.178H479.606a19.61 19.61 0 01-19.588-19.588v-56.233a19.61 19.61 0 0119.588-19.587h118.976a19.61 19.61 0 0119.587 19.587v56.233a19.61 19.61 0 01-19.587 19.588z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 134.297,
      cy: 230.374,
      r: 32.262,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M131.099 242.681a3.346 3.346 0 01-2.014-.668l-.036-.027-7.581-5.805a3.368 3.368 0 114.097-5.348l4.91 3.766 11.606-15.135a3.368 3.368 0 014.723-.624l-.072.098.074-.096a3.372 3.372 0 01.623 4.723l-13.65 17.802a3.37 3.37 0 01-2.68 1.314z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 337.271,
      cy: 229.911,
      r: 32.262,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M334.073 242.218a3.346 3.346 0 01-2.013-.669l-.036-.027-7.582-5.805a3.368 3.368 0 114.098-5.347l4.91 3.765 11.606-15.134a3.368 3.368 0 014.722-.624l-.072.098.074-.096a3.372 3.372 0 01.624 4.722l-13.65 17.803a3.37 3.37 0 01-2.68 1.314z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M555.312 382.15a10.743 10.743 0 00-2.183-16.328l-18.01-96.172-21.905 8.122 24.592 91.98a10.8 10.8 0 0017.506 12.398zM380.527 235.4a11.406 11.406 0 01.022 1.796l42.59 32.78 12.078-4.96 9.867 17.25-20.528 10.857a8.67 8.67 0 01-10.276-1.627l-42.571-43.89a11.376 11.376 0 118.818-12.206zm99.501 317.449h-12.259l-5.833-37.288 18.095.001-.003 37.287z",
      fill: "#a0616a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M483.155 564.733l-39.53-.001v-.5a15.386 15.386 0 0115.386-15.386h24.145z",
      fill: "#2f2e41"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#a0616a",
      d: "M526.028 552.849h-12.259l-5.833-37.288 18.095.001-.003 37.287z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M529.155 564.733l-39.53-.001v-.5a15.386 15.386 0 0115.386-15.386h24.145zm-63.932-19.253a4.49 4.49 0 01-4.475-4.073l-10.683-143.69.504-.04 73.521-6.043.02.522 5.845 148.85a4.5 4.5 0 01-4.497 4.669h-14.416a4.475 4.475 0 01-4.447-3.816l-19.577-120.245a.5.5 0 00-.994.072l-.888 118.724a4.505 4.505 0 01-4.263 4.462l-15.409.6c-.08.005-.161.007-.241.007z",
      fill: "#2f2e41"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 477.772,
      cy: 191.564,
      r: 24.561,
      fill: "#a0616a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M482.527 406.882a121.037 121.037 0 01-31.769-4.342 4.51 4.51 0 01-3.236-4.687c3.307-49.693 4.084-88.257-2.869-114.939-2.963-11.372-1.618-23.349 3.691-32.86 7.99-14.313 22.676-23.024 38.34-22.723q1.124.021 2.269.08c23.773 1.224 42.297 22.73 41.294 47.942l-4.782 120.168a4.44 4.44 0 01-2.815 4.044 114.245 114.245 0 01-40.123 7.317z",
      fill: "#3f3d56"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M448.695 292.14l-18.397-22.544a5.761 5.761 0 011.514-8.591l24.921-14.85a16 16 0 0120.16 24.852l-19.477 21.373a5.761 5.761 0 01-8.72-.24zm57.875-2.828a5.755 5.755 0 01-3.164-3.606L495.124 258a16 16 0 0128.943-13.652l16.017 24.188a5.761 5.761 0 01-2.362 8.399l-26.354 12.336a5.755 5.755 0 01-4.798.04z",
      fill: "#3f3d56"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M489.909 211.717l-18.206-4.167c-1.878-.43-4.134-1.25-4.395-3.159-.35-2.565 3.342-4.352 3.001-6.918-.33-2.486-3.692-2.806-6.09-3.54a9.11 9.11 0 01-5.672-11.34c-2.595 3.656-8.522 3.969-11.887 1.007s-4.01-8.336-1.99-12.338a14.287 14.287 0 0110.724-7.24 22.617 22.617 0 0113.023 2.428c.267-2.834 3.805-3.983 6.65-4.008a28.43 28.43 0 0126.644 19.446c3.492 11.253 1.156 23.587-8.615 30.17z",
      fill: "#2f2e41"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M673.287 565h-381a1 1 0 110-2h381a1 1 0 110 2z",
      fill: "#3f3d56"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};
const Checking = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1177 643.22"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M458.33 127.92l-51 63.17 40.65-70.43a101.89 101.89 0 00-19.68-9.36 101.35 101.35 0 10-202.11-5.53l92.12 6.06-90.5 8.13a101.5 101.5 0 0044.88 66.65l50.43-32.72-41.94 37.6a101.56 101.56 0 0012.88 5.54 101.33 101.33 0 0067.44 105.58 101.34 101.34 0 00137.86 104.32 34.76 34.76 0 004.69 11.17 33.28 33.28 0 0012.83 11.89 34.62 34.62 0 0018.21 28.54 34.68 34.68 0 0018.21 28.53 34.66 34.66 0 0018.2 28.55 33.4 33.4 0 005.38 16.64c8.23 12.89 22.89 18.25 32.74 12s11.16-21.83 2.93-34.73a33.44 33.44 0 00-12.81-11.91 34.68 34.68 0 00-18.24-28.57 34.66 34.66 0 00-18.22-28.53 34.62 34.62 0 00-18.21-28.53 33.39 33.39 0 00-5.39-16.64 34.6 34.6 0 00-8-8.86 101.33 101.33 0 00-35.91-169.55 101.41 101.41 0 00-37.43-89zm209.24-50.71l-9.1 5.77L664 72.93a9 9 0 00-5.51-2h-.14a10.79 10.79 0 01-1.89-.14l-3.09 2 1.33-2.41a11 11 0 01-5.4-4.09l-5.52 3.5 3.49-6.34a16.17 16.17 0 00-12.37-6.26c-5.75 0-10.86 3.42-14.16 8.74a10.57 10.57 0 01-9.36 5h-.31c-6.34 0-11.48 7.19-11.48 16s5.14 16.05 11.48 16.05a8.62 8.62 0 004-1 16.56 16.56 0 0113.89-.27 14.52 14.52 0 0011.81 0 16.58 16.58 0 0113.77.27 8.61 8.61 0 004 1c6.34 0 11.48-7.18 11.48-16.05a20.28 20.28 0 00-2.45-9.72z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M650.42 100.7a17 17 0 00-9.83 1.07 14.52 14.52 0 01-11.81 0 16.58 16.58 0 00-13.9.27 8.55 8.55 0 01-4 1c-5.64 0-10.32-5.67-11.3-13.15a10.93 10.93 0 002.82-3c3.3-5.32 8.42-8.73 14.16-8.73s10.79 3.37 14.09 8.63a10.85 10.85 0 009.36 5.14h.15c4.49-.07 8.34 3.53 10.26 8.77z",
      opacity: 0.03
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M1004.57 38.21l-9.1 5.77 5.53-10.05a9 9 0 00-5.51-2h-.14a10.79 10.79 0 01-1.89-.14l-3.09 2 1.33-2.41a11 11 0 01-5.4-4.09l-5.52 3.5 3.49-6.34a16.17 16.17 0 00-12.37-6.26c-5.75 0-10.86 3.42-14.16 8.74a10.57 10.57 0 01-9.36 5h-.31c-6.34 0-11.48 7.19-11.48 16s5.14 16.05 11.48 16.05a8.62 8.62 0 004-1 16.56 16.56 0 0113.89-.27 14.52 14.52 0 0011.81 0 16.58 16.58 0 0113.77.27 8.61 8.61 0 004 1c6.34 0 11.48-7.18 11.48-16.05a20.28 20.28 0 00-2.45-9.72z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M987.42 61.7a17 17 0 00-9.83 1.07 14.52 14.52 0 01-11.81 0 16.58 16.58 0 00-13.9.27 8.55 8.55 0 01-4 1c-5.64 0-10.32-5.67-11.3-13.15a10.93 10.93 0 002.82-3c3.3-5.32 8.42-8.73 14.16-8.73s10.79 3.37 14.09 8.63a10.85 10.85 0 009.36 5.14h.15c4.49-.07 8.34 3.53 10.26 8.77z",
      opacity: 0.03
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M779.84 132.61l14.66 9.32-8.88-16.15a14.48 14.48 0 018.85-3.15h.23a17.08 17.08 0 003-.22l4.95 3.14-2.15-3.86a17.78 17.78 0 008.67-6.58l8.87 5.62-5.54-10.19c5.19-6.22 12.18-10 19.87-10 9.23 0 17.44 5.48 22.75 14a17 17 0 0015 8.11h.5c10.18 0 18.43 11.54 18.43 25.78s-8.25 25.79-18.43 25.79a13.86 13.86 0 01-6.43-1.61 26.59 26.59 0 00-22.31-.43 23.28 23.28 0 01-19 0 26.64 26.64 0 00-22.12.43 13.9 13.9 0 01-6.35 1.57c-10.19 0-18.44-11.54-18.44-25.79a32.78 32.78 0 013.87-15.78z",
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M807.39 170.38a27.36 27.36 0 0115.8 1.72 23.28 23.28 0 0019 0 26.61 26.61 0 0122.32.43 13.82 13.82 0 006.42 1.61c9.05 0 16.57-9.11 18.14-21.13a17.44 17.44 0 01-4.52-4.88c-5.31-8.54-13.52-14-22.75-14s-17.33 5.42-22.64 13.88a17.44 17.44 0 01-15 8.25h-.23c-7.26-.07-13.5 5.71-16.54 14.12z",
      opacity: 0.03
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: 588.5,
      cy: 622.22,
      rx: 588.5,
      ry: 21,
      fill: "#3f3d56"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 171.5,
      y: 155.97,
      width: 834,
      height: 456,
      rx: 20.42,
      fill: "#f2f2f2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M1005.5 176.39v11.58h-834v-11.58a20.42 20.42 0 0120.42-20.42h793.16a20.42 20.42 0 0120.42 20.42z",
      fill: "#3f3d56"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 193,
      cy: 172.47,
      r: 6,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 208,
      cy: 172.47,
      r: 6,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 223,
      cy: 172.47,
      r: 6,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 298.5,
      y: 240.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 410.5,
      y: 240.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 522.5,
      y: 240.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 634.5,
      y: 240.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 746.5,
      y: 240.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 298.5,
      y: 371.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 410.5,
      y: 371.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 522.5,
      y: 371.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 634.5,
      y: 371.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 746.5,
      y: 371.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 298.5,
      y: 502.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 410.5,
      y: 502.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 522.5,
      y: 502.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 634.5,
      y: 502.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#6775ee",
      opacity: 0.3
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("rect", {
      x: 746.5,
      y: 502.97,
      width: 96,
      height: 78,
      rx: 9.29,
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M528.72 226.61l-5.06-5.09a2.68 2.68 0 00-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 00-3.78 0l-5.11 5.05a2.72 2.72 0 000 3.82l20.39 20.55a2.72 2.72 0 003.82 0l38.74-38.46a2.68 2.68 0 000-3.82zm340 0l-5.06-5.09a2.68 2.68 0 00-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 00-3.78 0l-5.11 5.05a2.72 2.72 0 000 3.82l20.39 20.55a2.72 2.72 0 003.82 0l38.74-38.46a2.68 2.68 0 000-3.82zm-228 130l-5.06-5.09a2.68 2.68 0 00-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 00-3.78 0l-5.11 5.05a2.72 2.72 0 000 3.82l20.39 20.55a2.72 2.72 0 003.82 0l38.74-38.46a2.68 2.68 0 000-3.82zm111 136l-5.06-5.09a2.68 2.68 0 00-3.81 0l-31.76 31.49-13.43-13.54a2.66 2.66 0 00-3.78 0l-5.11 5a2.72 2.72 0 000 3.82l20.39 20.55a2.72 2.72 0 003.82 0l38.74-38.46a2.68 2.68 0 000-3.77z",
      fill: "#3acc6c"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M1012.4 618.39c-3-5.51.4-12.27 4.29-17.18s8.61-10 8.51-16.29c-.15-9-9.7-14.32-17.33-19.09a84 84 0 01-15.56-12.51 22.8 22.8 0 01-4.78-6.4c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26 1.91-38.49",
      fill: "none",
      stroke: "#3f3d56",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M973.5 496.36a14 14 0 017-11.5l3.14 6.22-.1-7.53a14.22 14.22 0 014.63-.56 14 14 0 11-14.67 13.37zm25 94.99a14 14 0 10-.68-11.3l8.77 7.13-9.65-2.23a14 14 0 001.56 6.4zm7-27.25a14 14 0 004.4-27.49l.08 5.78-3.18-6.29a14 14 0 00-14.67 13.36 13.84 13.84 0 00.6 4.79 14 14 0 0012.77 9.85zm-34.12-22.67a14 14 0 10-6.21-26.27l2.48 6.8-5.1-4.9a14 14 0 00-4.53 9.69 13.79 13.79 0 00.35 3.87 14 14 0 0013.01 10.81z",
      fill: "#57b894"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M975.38 500.1c3.24.35 6.39 1.36 9.64 1.56s6.82-.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 013.54-3.33 14 14 0 11-26.24 9.32q.8.03 1.59.12zm-4 41.33a14 14 0 0013.35-20 10.37 10.37 0 00-2.82 2.82c-1 1.51-1.61 3.26-2.78 4.64-2.19 2.57-5.92 3.41-9.31 3.26s-6.66-1.12-10-1.43c-.47 0-.94-.07-1.42-.08a14 14 0 0012.98 10.79zm34.12 22.67a14 14 0 0013.46-19.76 11.48 11.48 0 00-3 2.85c-1.09 1.54-1.77 3.31-3 4.73-2.37 2.64-6.35 3.57-9.93 3.49s-6.83-.93-10.28-1.2a14 14 0 0012.75 9.89zm-7 27.25a14.017 14.017 0 0025.59-11.45 13.59 13.59 0 00-3.08 2.75c-1.34 1.62-2.22 3.47-3.76 5-2.87 2.82-7.5 4-11.63 4.09a60 60 0 01-7.12-.39z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M1033.57 612.04s-11.08-.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-2 32.4-4 4.03-10.94 4.03-10.94z",
      fill: "#656380"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M996.92 625.66c12.51.1 29.06-1.95 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h.37s-.7 8.94-4 11-19.89 4.08-32.4 4c-3.61 0-4.85-1.31-4.78-3.21.47 1.12 1.84 1.81 4.53 1.86z",
      opacity: 0.2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M184.29 613.47c-4.39-8.12.59-18.08 6.31-25.33s12.7-14.78 12.56-24c-.22-13.27-14.3-21.1-25.56-28.14a124.61 124.61 0 01-22.94-18.44 33.79 33.79 0 01-7-9.44c-2.33-5.19-2.26-11.09-2.11-16.78q.72-28.4 2.8-56.75",
      fill: "none",
      stroke: "#3f3d56",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M126.91 433.54a20.68 20.68 0 0110.33-17l4.64 9.17-.14-11.1a20.7 20.7 0 11-14.83 18.89zm36.91 140.07a20.69 20.69 0 10-1-16.66l12.92 10.51-14.24-3.29a20.61 20.61 0 002.32 9.44zm10.22-40.18a20.7 20.7 0 006.56-40.6l.11 8.52-4.69-9.27h-.05a20.7 20.7 0 10-1.93 41.35zM123.8 500a20.71 20.71 0 0021.64-19.71 20.44 20.44 0 00-2-9.81 20.67 20.67 0 00-28.83-9.21l3.65 10-7.52-7.22a20.7 20.7 0 0013 35.93z",
      fill: "#57b894"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M129.7 439.05c4.77.53 9.42 2 14.21 2.31s10.06-.85 13.09-4.58c1.63-2 2.45-4.54 3.83-6.73a14.77 14.77 0 015.21-4.91 20.7 20.7 0 11-38.69 13.74c.78.03 1.57.09 2.35.17zM123.8 500a20.71 20.71 0 0021.64-19.71 20.44 20.44 0 00-2-9.81 15.39 15.39 0 00-4.16 4.16c-1.47 2.23-2.37 4.8-4.1 6.84-3.22 3.79-8.73 5-13.72 4.8s-9.82-1.64-14.79-2.1c-.69-.06-1.39-.11-2.09-.13A20.69 20.69 0 00123.8 500zm50.24 33.43a20.69 20.69 0 0019.85-29.14 16.69 16.69 0 00-4.37 4.21c-1.61 2.27-2.61 4.88-4.5 7-3.49 3.89-9.36 5.26-14.65 5.14-5.12-.12-10.06-1.37-15.15-1.76a20.71 20.71 0 0018.82 14.55zm-10.22 40.18a20.7 20.7 0 0037.73-16.89 20.9 20.9 0 00-4.55 4c-2 2.4-3.26 5.12-5.54 7.36-4.23 4.15-11.06 5.86-17.14 6a89.06 89.06 0 01-10.5-.47z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M215.5 604.12s-16.33-.5-21.26-4-25.12-7.69-26.34-2.07-24.55 28-6.11 28.11 42.85-2.87 47.76-5.87 5.95-16.17 5.95-16.17z",
      fill: "#656380"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M161.5 624.19c18.44.15 42.85-2.87 47.76-5.86 3.74-2.28 5.24-10.46 5.73-14.23h.55s-1 13.17-5.95 16.16-29.32 6-47.76 5.87c-5.32 0-7.16-1.94-7.06-4.74.73 1.71 2.73 2.77 6.73 2.8z",
      opacity: 0.2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M861.26 563.61a4.83 4.83 0 00-.32 1.31c-1.59 10.47-10.74 18.2-14.08 28.25a27.1 27.1 0 001.18 19.87 6.57 6.57 0 01.91 2.87c0 1-.8 2.09-1.81 2-2.42-.16-4.33-2-6.35-3.3a22.61 22.61 0 01-6.46-6 11.18 11.18 0 01-1.91-8.43c1.2-5.46 5.37-10.33 6.67-15.77l3.41-14.11a22.07 22.07 0 012.8-7.53 4.65 4.65 0 012.36-2 5.58 5.58 0 011.78-.14c3.95.17 8.06 1.65 11.82 2.98z",
      fill: "#ffc1c7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M847.25 611.38a1.89 1.89 0 011.08.08 2.68 2.68 0 011 1.28 11.72 11.72 0 004.71 4.73 13.63 13.63 0 012.3 1.3 2.67 2.67 0 011.11 2.28c-.16 1.31-1.59 2-2.85 2.39a21.38 21.38 0 01-8.34.73 7.31 7.31 0 01-3-.84 8.87 8.87 0 01-2.31-2.34 58 58 0 00-7.4-8.39 32.4 32.4 0 01-3.88-3.61 6.44 6.44 0 01-1.63-4.88c.39-2.6 2.85-4.3 4.4-6.43 2.49 3.2 5 6.45 6.52 10.21a29.35 29.35 0 001.86 4.39c.71 1.17 1.73 2.52 3 1.76s1.58-2.34 3.43-2.66z",
      fill: "#ff6584"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M877.31 486.88a13.16 13.16 0 01.89 5.92l-.09 14.93a60 60 0 01-.46 8.69c-.79 5.19-2.92 10.1-3.85 15.27-.88 4.85-.71 9.89-2.14 14.61-2.22 7.31-8.1 13.1-10.17 20.46a2.32 2.32 0 01-.59 1.19 1.71 1.71 0 01-.84.36 8.93 8.93 0 01-4.81-.9l-10.75-4.22c-.74.32-1.25-.53-1.21-1.35a3.91 3.91 0 011.07-2.13 35.75 35.75 0 003.46-5.33 47.89 47.89 0 005-19.29 142.59 142.59 0 00-.59-20l-1.1-14.42c-.17-2.29-.3-4.77 1-6.68s3.51-2.7 5.64-3.36a91.68 91.68 0 0119.54-3.75z",
      fill: "#3c354c"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M877.31 486.88a13.16 13.16 0 01.89 5.92l-.09 14.93a60 60 0 01-.46 8.69c-.79 5.19-2.92 10.1-3.85 15.27-.88 4.85-.71 9.89-2.14 14.61-2.22 7.31-8.1 13.1-10.17 20.46a2.32 2.32 0 01-.59 1.19 1.71 1.71 0 01-.84.36 8.93 8.93 0 01-4.81-.9l-10.75-4.22c-.74.32-1.25-.53-1.21-1.35a3.91 3.91 0 011.07-2.13 35.75 35.75 0 003.46-5.33 47.89 47.89 0 005-19.29 142.59 142.59 0 00-.59-20l-1.1-14.42c-.17-2.29-.3-4.77 1-6.68s3.51-2.7 5.64-3.36a91.68 91.68 0 0119.54-3.75z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M900.85 509.5a31.09 31.09 0 00-3.59 6.91 37 37 0 00-1.21 5.62c-1.4 8.83-2.81 17.74-2.27 26.66a5.62 5.62 0 01-5-1.24 14.29 14.29 0 01-3.27-4.23 45 45 0 01-2.69-5.38 33.69 33.69 0 01-2.55-13.11 2.26 2.26 0 01.18-1.07 2.47 2.47 0 01.53-.63c5.87-5.56 9.25-13.19 12.48-20.6a38.1 38.1 0 002.68-7.57c.53-2.64.57-5.56 2.24-7.67 1.5-1.88 4-2.67 6.34-3a11.93 11.93 0 015.12.21c1.82.56 6.13 2.69 6.38 4.84s-3.59 4.9-4.84 6.33a121.86 121.86 0 00-10.53 13.93z",
      fill: "#ffc1c7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M897.28 548.61c1.28 2.15 3.07 4.55 2.16 6.87s-4.24 2.84-6.24 1.41a9.62 9.62 0 01-1.56-1.5 153.83 153.83 0 01-15-19.74c-1.66-2.59-3.28-5.35-3.56-8.41a1.76 1.76 0 01.14-1 1.93 1.93 0 01.78-.66 38.84 38.84 0 018.66-3.6 18.37 18.37 0 002.56 9.75 46.56 46.56 0 013.3 6.68c.68 1.68 1.38 1.81 3.13 1.83 1.41 0 2.42-.17 3.1 1.26 1.08 2.24 1.16 4.81 2.53 7.11z",
      fill: "#ff6584"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M859.8 461.61c12.86.2 25.7 1.1 38.53 2l8.34.59a31.16 31.16 0 017.27 1.08 31.91 31.91 0 016.44 3.19 5.65 5.65 0 011.8 1.44 5.39 5.39 0 01.76 2 11.39 11.39 0 01.47 4.62 11.27 11.27 0 01-1.23 3.17l-5.84 11.54c-1.87-.61-3.32-1.83-5.15-2.55a25.41 25.41 0 00-6.82-1.3l-6.08-.6a1.73 1.73 0 01-.17-1.2c-5.34 1.86-10.66 3.59-16 5.45-9.8 3.41-19.62 6.83-29.06 11.15-1.4.64-3 1.31-4.43.77a4.61 4.61 0 01-1.39-.92 14.29 14.29 0 01-4.3-8.37 31.22 31.22 0 01.14-9.55c.9-6.51 2.87-13.32 7.85-17.61 2.63-2.33 5.39-4.99 8.87-4.9z",
      fill: "#3c354c"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M910.96 472.85a61.52 61.52 0 00-8.26 4.84 6.72 6.72 0 00-1.09.89 8.16 8.16 0 00-.67.88 16.52 16.52 0 00-2.82 5.62",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M778.6 457.26c-1.8 1.51-2.86 3.69-4.13 5.67-3.05 4.8-7.43 8.66-10.44 13.49-1.29 2.08-2.36 4.38-4.2 6-2.2 2-5.24 2.69-8.18 2.92-2.65.19-5.45.06-7.79 1.33-2 1.1-3.4 3.09-4.68 5v.06a2.26 2.26 0 002.7 3.36 40.25 40.25 0 016.63-1.93 42 42 0 005.9-1.34 27.59 27.59 0 005.28-2.81 34.32 34.32 0 004.15-2.91c1.61-1.37 3-3 4.52-4.45a70.68 70.68 0 017-5.08A53.4 53.4 0 00791 459.48a3.88 3.88 0 00.71-2.27 4.11 4.11 0 00-1-2c-1.77-2.25-3.38-4.09-5.84-2-1.94 1.61-4.37 2.4-6.27 4.05zm50.31-48.73a3 3 0 00.64 1.76c.66.67 1.75.53 2.69.47a8.89 8.89 0 017.06 2.45c1.71 1.79 2.38 4.32 2.78 6.77a12.58 12.58 0 01-.18 6.16 9.46 9.46 0 01-5.09 5.14 23.77 23.77 0 01-7.18 1.76 17.93 17.93 0 01-6.2 0c-2.43-.56-4.54-2-6.73-3.21a36.86 36.86 0 01-4.43-2.5 7 7 0 01-2.89-4.06 2.2 2.2 0 01.73-2.35 4.16 4.16 0 011.12-.34 4.74 4.74 0 003.41-3.35c.67-2.59-.94-5.2-1.1-7.87a3.73 3.73 0 01.47-2.23 4.9 4.9 0 012.25-1.6l5-2.24a29.91 29.91 0 014.71-2.09c1.59-.41 1.7.69 2 2 .37 1.79.7 3.56.94 5.33z",
      fill: "#ffc1c7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M828.91 408.53a3 3 0 00.64 1.76c.66.67 1.75.53 2.69.47a8.89 8.89 0 017.06 2.45c1.71 1.79 2.38 4.32 2.78 6.77a12.58 12.58 0 01-.18 6.16 9.46 9.46 0 01-5.09 5.14 23.77 23.77 0 01-7.18 1.76 17.93 17.93 0 01-6.2 0c-2.43-.56-4.54-2-6.73-3.21a36.86 36.86 0 01-4.43-2.5 7 7 0 01-2.89-4.06 2.2 2.2 0 01.73-2.35 4.16 4.16 0 011.12-.34 4.74 4.74 0 003.41-3.35c.67-2.59-.94-5.2-1.1-7.87a3.73 3.73 0 01.47-2.23 4.9 4.9 0 012.25-1.6l5-2.24a29.91 29.91 0 014.71-2.09c1.59-.41 1.7.69 2 2 .37 1.79.7 3.56.94 5.33z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 815.9,
      cy: 400.24,
      r: 12.47,
      fill: "#ffc1c7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M830.39 411.61a17.15 17.15 0 015.86-1.48 6.93 6.93 0 015.46 2.16c1.17 1.37 1.56 3.22 2.49 4.75 1.84 3 5.43 4.37 8.3 6.42a6.26 6.26 0 011.72 1.68c1 1.52.73 3.47.71 5.27a25.46 25.46 0 003.67 12.62 74.48 74.48 0 007.9 10.71 10.68 10.68 0 011.72 2.55c.7 1.68.5 3.71 1.54 5.2a14.53 14.53 0 00-7.37 1c-3.61 1.49-3.78 6.77-5.48 10.29-3.14 6.51-7.5 12.34-11.65 18.26a23.32 23.32 0 00-2.76 4.57c-.74-1.57-.23-3.44-.32-5.17-.2-3.87-2.44-7.34-3.07-11.16a52.67 52.67 0 01-.33-5.76 27.56 27.56 0 00-1.87-8.5 54.57 54.57 0 00-4.44-8.33 11.76 11.76 0 00-3.35-4c-1.66-1.08-3.95-1.39-5-3.07a6.7 6.7 0 00-1-1.62 3.74 3.74 0 00-1.16-.59 51.09 51.09 0 01-5.92-3.28c-2-1.09-4.27-1.9-6.48-1.41a80 80 0 01-13.83 12.68c-1.58 1.16-3.28 2.35-4.06 4.15a21.12 21.12 0 01-6.57-4.91 3.33 3.33 0 01-.7-1c-.51-1.46 1-2.77 2.2-3.69a29.9 29.9 0 009.94-13.23c1.29-3.39 2.14-7.29 5.08-9.42a17.49 17.49 0 002.63-1.85 33.28 33.28 0 002-3.12 5.29 5.29 0 015.55-1.88 24.52 24.52 0 013.31 1.59c2.77 1.25 5.95 1 9 .66l11.71-1.19a4 4 0 00-.86-3.8 11.63 11.63 0 00-1.55-1.23 8.61 8.61 0 01-3.02-4.87z",
      fill: "#ff6584"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M822.5 378.69a10.78 10.78 0 016.27 6.14 25.06 25.06 0 001.32 3.51 20.25 20.25 0 003.25 3.62c1.12 1.19 2.08 2.74 1.82 4.35-.1.6-.36 1.16-.44 1.75-.35 2.59 2.59 4.37 3.49 6.82 1.17 3.22-1.38 7.06.18 10.1.59 1.14 1.66 2 2.33 3s.74 2.8-.39 3.41c-1.76.95-3.8-1.83-5.67-1.1-.48.19-.85.6-1.32.81-1.31.59-2.84-.57-3.27-1.94a10.21 10.21 0 01.08-4.26 5.15 5.15 0 00-.8-4.09c-.76-.87-2-1.21-2.79-2-1.44-1.46-1.17-3.81-1-5.85.31-4.12-.43-8.63-3.38-11.53a.75.75 0 00-.53-.29.85.85 0 00-.53.33 24.9 24.9 0 01-4.48 3.71 2.82 2.82 0 01-1.6.58c-.57 0-1.14-.58-1-1.13a11.75 11.75 0 00-3.74 2.74 3.91 3.91 0 01-.3-1.72 16.13 16.13 0 01-2 3.06 24.91 24.91 0 00-2.2 2.72 4 4 0 00-.56 3.33c1.12 3.21 6.83 2.47 8.07 5.64.27.71.26 1.49.54 2.19.55 1.36 2 2 3.2 2.9s2.24 2.43 1.52 3.7c-.63 1.09-2.1 1.21-3.32 1.49a8 8 0 00-5 3.76 4.72 4.72 0 01-1.29 1.77 3.63 3.63 0 01-1.63.4c-1.7.14-3.65.18-4.82-1-1.57-1.65-.83-4.65-2.43-6.27-.37-.36-.83-.62-1.18-1a4.46 4.46 0 01-.89-3.35c.16-3.33 1.39-6.59 1.2-9.92a56.74 56.74 0 00-1.27-6.54 17.6 17.6 0 013.56-14.39c2.72-3.19 6.27-4.44 10.29-5 3.58-.53 7.04-1.78 10.71-.45z",
      fill: "#3c354c"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};
const Events = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 965.64 800.81"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "prefix__a",
        x1: 478.38,
        y1: 695.72,
        x2: 478.38,
        y2: 33.2,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: 0,
          stopColor: "gray",
          stopOpacity: 0.25
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: 0.54,
          stopColor: "gray",
          stopOpacity: 0.12
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: 1,
          stopColor: "gray",
          stopOpacity: 0.1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "prefix__b",
        x1: 1834.21,
        y1: 806.87,
        x2: 1834.21,
        y2: 194.98,
        gradientTransform: "matrix(-1 0 0 1 2766 0)",
        xlinkHref: "#prefix__a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M901.88 442.5c-37.09 60-30.14 141.74-13.85 206.19 5.45 21.58 11.73 44.36 7.07 68.51-5.7 29.53-26.48 52.72-47.51 66-38.34 24.15-82.12 23.48-114-1.77-27.53-21.81-45.66-59.85-73.77-80.49-47-34.55-111.54-13.61-167.58 18.68-39.63 22.79-83.25 51.79-119.88 35.37-25.77-11.53-41.84-44.06-49.34-79.46-3.62-17.09-5.81-35.76-14.11-48.78-4.94-7.74-11.73-12.92-18.77-17.17-64.25-38.74-151.18-6.35-213.14-50.22-41.85-29.62-65.64-90.8-73.46-156.22S2.15 267.72 10.2 198.8c5.73-49 13.48-101.42 39.2-141.27 27.21-42.15 70.1-61 107.38-57s69.65 27.62 97.55 56.49c34.87 36.08 66.32 82.16 111.45 93.8 30.74 7.93 64.31-1.25 97-6.44 54.58-8.68 108.4-6.19 161.84-2.93 51.16 3.12 102.63 7 150.3 25 33.73 12.75 59.62 39.29 91.1 56.55 20.52 11.25 43.67 12.68 62.79 27.68 23.55 18.48 43.93 52.59 34.5 95.71-8.99 41.02-41.75 64.27-61.43 96.11z",
      fill: "#6775ee",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M664.49 306.88s101-84.63 123.46-127.3S839 100.14 839 100.14",
      fill: "none",
      stroke: "#535461",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M825.72 195.53l-43.69-9.85s10.31 46.08 43.69 9.85z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M758.96 148.49l25.14 37.65s-49.15 3.55-25.14-37.65zm83.95 11.65l-39.93-7s25.08 38.15 39.93 7zm-59.09-33.65l19.67 25.76s-34.82 3.3-19.67-25.76zm39.81-5.13s34 1.62 38 4.87-5.07 22.3-18 19.19-20-24.06-20-24.06zm-13.59-30.39s13.89 25.31 13.37 30.13-21.17 10.23-25.34-8 11.97-22.13 11.97-22.13z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 963.75,
      cy: 154.12,
      r: 9.49,
      transform: "matrix(.3 -.95 .95 .3 408.68 976.78)",
      fill: "#ffd037"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 948.9,
      cy: 144.43,
      r: 9.49,
      transform: "matrix(.3 -.95 .95 .3 407.54 955.85)",
      fill: "#ffd037"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M349.46 638.63s16.21-48.22-86.55-106.35c0 0-104.34-30.43-93.67-134.93 0 0-120.28 88.12-38.89 200.37s151.64 87.75 151.64 87.75z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M318.13 660.41s-50.14-54.19-98.2-75.14a95.71 95.71 0 01-26.11-17.39c-30.64-28-44-70.25-36.1-111l11.55-59.53",
      fill: "none",
      stroke: "#535461",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "url(#prefix__a)",
      d: "M193.07 33.2h570.61v662.53H193.07z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#f7f7fd",
      d: "M199.72 40.91h557.32V688H199.72z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#e2e2ec",
      d: "M233.38 113.85h140.89v11.22H233.38zm0 27.43h240.63v11.22H233.38z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M630.36 103.13h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M729.82 103.63v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M529.37 103.13h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M628.82 103.63v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M630.36 190.41h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M729.82 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M529.37 190.41h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M628.82 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M428.38 190.41h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M527.87 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M327.39 190.41h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M426.88 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M226.4 190.41h99.99v86.28H226.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M325.89 190.91v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M630.36 277.68h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M729.82 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M529.37 277.68h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M628.82 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M428.38 277.68h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M527.87 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M327.39 277.68h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M426.88 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M226.4 277.68h99.99v86.28H226.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M325.89 278.19v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M630.36 364.96h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M729.82 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M529.37 364.96h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M628.82 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M428.38 364.96h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M527.87 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M327.39 364.96h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M426.88 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M226.4 364.96h99.99v86.28H226.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M325.89 365.46v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M630.36 452.23h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M729.82 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M529.37 452.23h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M628.82 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M428.38 452.23h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M527.87 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M327.39 452.23h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M426.88 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M226.4 452.23h99.99v86.28H226.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M325.89 452.74v85.27h-99v-85.27h99m1-1h-101v87.27h101v-87.27z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M630.36 539.51h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M729.82 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M529.37 539.51h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M628.82 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M428.38 539.51h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M527.87 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M327.39 539.51h99.99v86.28h-99.99z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M426.88 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "#fff",
      d: "M226.4 539.51h99.99v86.28H226.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M325.89 540.01v85.28h-99v-85.28h99m1-1h-101v87.28h101v-87.28z",
      fill: "#e2e2ec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M436.42 704.89c2.86-2.17 5.55-4.73 6.38-7.85a6.64 6.64 0 00-4.46-8c-4.09-1.28-8.46 1-11.78 3.37s-7.11 5-11.45 4.51c4.49-3.25 6.63-8.52 5.39-13.31a5.16 5.16 0 00-1.5-2.7c-2.27-2-6.39-1.13-9.11.43-8.65 5-11.06 14.55-11.11 23.18-.87-3.11-.14-6.35-.16-9.55s-1.09-6.73-4.39-8.45a15.71 15.71 0 00-6.7-1.29c-3.89-.12-8.22.2-10.87 2.52-3.3 2.88-2.44 7.72.43 10.89s7.24 5.16 11.25 7.35c3.06 1.67 6.16 3.62 8 6.26a5.68 5.68 0 01.6 1.12h24.37a70.07 70.07 0 0015.11-8.48z",
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 239.59,
      cy: 203.53,
      r: 5.7,
      fill: "#fc6681"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 253.83,
      cy: 203.53,
      r: 5.7,
      fill: "#ffd037"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 440.87,
      cy: 288.03,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 455.12,
      cy: 288.03,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 745.64,
      cy: 451.33,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 748.49,
      cy: 444.69,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 751.34,
      cy: 438.99,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 645,
      cy: 203.53,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 659.24,
      cy: 203.53,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 673.49,
      cy: 203.53,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 687.73,
      cy: 203.53,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 645,
      cy: 380.12,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 659.24,
      cy: 380.12,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 673.49,
      cy: 380.12,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 687.73,
      cy: 380.12,
      r: 5.7,
      fill: "#6775ee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 340.23,
      cy: 288.03,
      r: 5.7,
      fill: "#ffd037"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 239.59,
      cy: 374.43,
      r: 5.7,
      fill: "#fc6681"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M857.9 515.22c6.25 3.69 16 6.09 28.35-1.84l-.12 17.56c.88 12 15.77 55.91 15.77 55.91l10.5 36.1a282.47 282.47 0 0111.54 78.53c0 8.81.82 17.89 3.35 24.72 5.59 15.11-2.2 34.58-5.58 41.83a175.68 175.68 0 01-17.33 4.88 11.84 11.84 0 00-1.55.47l-.07-.1S887 779.53 880 778.67c-5.22-.64-8.49 5.87-4.4 10.66-3.86 1-7.82 1.71-10.49 1.38-7-.86-10.51 11.18 2.63 14.62s87.59 0 87.59 0a10.56 10.56 0 005.6-11.66c5.72-.22 9.29-.39 9.29-.39s13.14-6 0-22.37l-.7.53-2.81-8.27V752s16.64-80 11.39-89.46-7.88-57.63-7.88-57.63l1.78-52.47c4.75-9.8 7.18-25.16 8.41-37.17a78.87 78.87 0 003.36-17.63c.21-2.82.38-5.78.49-8.85A59.33 59.33 0 00981 469c5-7.2 13.13-18.33 19.84-24.91 10.51-10.32 7.88-22.37 7.88-22.37l-4.38-29.25-10.51-49.89c1.32-13.84-1.57-21.81-4.76-26.31.76-4.47 1.47-8.94 2-13.43a171.87 171.87 0 00-3.07-58.48c-1.52-6.69-3.59-13.55-8.28-18.62-5.31-5.74-13.93-9.24-15.91-16.76-.49-1.87-.51-3.86-1.22-5.66-1.92-4.92-8-6.71-13.32-7.35-9.48-1.15-23.19-2-32.3 1.7-6.36 2.6-15.12 9.76-18.6 17.44-2 3.53-2.93 7.24-2.08 10.73a14.71 14.71 0 001.51 3.67 33 33 0 00-2.04 11.49 33.56 33.56 0 0021.42 31.13c.21.66.4 1.31.56 1.95a33.42 33.42 0 01.86 4.69c-.17 3-.36 6.09-.5 9.14q-.15.63-.32 1.24a225.38 225.38 0 00-22 11.22c5.26 7.74-.88 40.43-.88 40.43-13.14 7.74-26.28 27.53-12.26 48.17s6.13 43 6.13 43l-2.19 33.63v.06l-.44 6.73h.17l-.17 2.55.38.07v2.74c-6.15 2.26-15.14 6.82-20.5 15.25a53.81 53.81 0 01-9.17 11.25 6.76 6.76 0 001.05 10.97zm105.76-89.36a32 32 0 013.11-16.92q3.09.06 6.19.07c.21 1.45.46 2.83.76 4.09 1.78 7.58-5.33 11.21-10.07 12.75z",
      transform: "translate(-117.18 -49.59)",
      fill: "url(#prefix__b)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M848.21 709.66l3.37 10.11-11 11-36.24 8.43-26.13-2.53 1.69-9.27a11.18 11.18 0 018.3-8.17c10.74-2.52 31.22-8.28 35.52-16.27z",
      fill: "#db8b8b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M848.21 709.66l3.37 10.11-11 11-36.24 8.43-26.13-2.53 1.69-9.27a11.18 11.18 0 018.3-8.17c10.74-2.52 31.22-8.28 35.52-16.27z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M786.68 734.1l5.06-6.74-5.06-7.81s-15.17 6.12-21.91 5.28-10.11 11 2.53 14.33 84.28 0 84.28 0 12.64-5.9 0-21.91l-11 8.43s-18.54 10.11-27.81 8.43z",
      fill: "#2e3037"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M763.92 748.41l26.13 2.53 36.24-8.43 11-11-.89-2.68-1.26-3.76-1.26-3.66-24.44-6.74a15.14 15.14 0 01-5 5c-7.94 5.43-22.2 9.35-30.57 11.31a8.77 8.77 0 00-1 .31 11.14 11.14 0 00-7.26 7.86z",
      fill: "#db8b8b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M763.92 748.41l26.13 2.53 36.24-8.43 11-11-.89-2.68-10.06 7.74s-18.54 10.11-27.81 8.43h-26.18l5.06-6.74-4.54-7a11.14 11.14 0 00-7.26 7.86z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M772.35 745.9l5.06-6.74-5.06-7.81s-15.17 6.12-21.91 5.28-10.11 11 2.53 14.33 84.28 0 84.28 0 12.64-5.9 0-21.91l-11 8.43s-18.54 10.11-27.81 8.43z",
      fill: "#2e3037"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M793.42 257.07s40.46 4.21 34.56-12.64a30.34 30.34 0 01-1.25-14.88 41.25 41.25 0 017.15-17.14l-37.93 5.9a47.5 47.5 0 015.14 12.18c4.52 17.87-7.67 26.58-7.67 26.58z",
      fill: "#db8b8b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M862.53 449.23s-.84 36.24-9.27 53.94l-1.69 51.41s2.53 47.2 7.59 56.47-11 87.65-11 87.65v13.49s-27 10.11-34.56-1.69l7.59-100.3-3.37-139.06z",
      fill: "#474463"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M862.53 449.23s-.84 36.24-9.27 53.94l-1.69 51.41s2.53 47.2 7.59 56.47-11 87.65-11 87.65v13.49s-27 10.11-34.56-1.69l7.59-100.3-3.37-139.06z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M879.39 332.92l5.06 13.49 4.21 28.66a25.35 25.35 0 01-7.59 21.91c-10.11 10.11-23.6 31.18-23.6 31.18l-16-48s16-2.53 13.49-13.49-1.7-31.26-1.7-31.26z",
      fill: "#fc6681"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M879.39 332.92l5.06 13.49 4.21 28.66a25.35 25.35 0 01-7.59 21.91c-10.11 10.11-23.6 31.18-23.6 31.18l-16-48s16-2.53 13.49-13.49-1.7-31.26-1.7-31.26z",
      opacity: 0.05
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M804.48 719.68c10.81 17 27.64 7.37 30.62 5.45l-1.22-3.72-24.44-6.74a15.14 15.14 0 01-4.96 5.01z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M770.67 482.1c.84 11.8 15.17 54.78 15.17 54.78l10.11 35.37a281.44 281.44 0 0111.11 76.94c0 8.63.79 17.53 3.23 24.22 6.74 18.54-6.74 43.83-6.74 43.83 11.8 21.07 32 6.74 32 6.74V710.5s16-73.33 11.8-87.65-5.9-53.1-5.9-53.1v-70a79.38 79.38 0 0023.13-50.32c.2-2.76.36-5.66.47-8.67.68-19-12.32-41.31-17.4-49.25-1.22-1.92-2-3-2-3l-74.42 29.52-.17.07v9.25z",
      fill: "#474463"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M795.95 218.3a47.5 47.5 0 015.14 12.18 33 33 0 0025.64-.94 41.25 41.25 0 017.15-17.13z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 812.81,
      cy: 198.06,
      r: 32.87,
      fill: "#db8b8b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M770.67 427.32l.36.07c35.34 7.27 79.71-29.57 79.71-29.57a43.68 43.68 0 01-3.07-6.27c-1.22-1.92-2-3-2-3l-74.42 29.52-.19 2.95z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M779.94 256.22s47.2-28.66 62.37-16.86l21.07 27s13.49 4.21 11 31.18l10.07 48.87-30.34 7.59s-17.7 16.86-3.37 41.3c0 0-44.67 37.08-80.07 29.5l2.53-39.61s7.59-21.91-5.9-42.14-.84-39.61 11.8-47.2c0-.01 5.89-32.04.84-39.63z",
      fill: "#fc6681"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M777.41 428.16s-17.7 3.37-26.13 16.86a52.53 52.53 0 01-8.82 11 6.69 6.69 0 001 10.66c6.69 4 17.6 6.49 31.38-4.83 23.64-19.36 2.57-33.69 2.57-33.69z",
      fill: "#db8b8b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M803.54 272.24s16.86-1.69 21.07 42.14 11 53.94 11 53.94 4.21 22.76-5.9 36.24-29.5 42.14-29.5 42.14-21.07 5.9-25.28-15.17l26.13-48.88s4.21-16.86-5.9-28.66-17.75-90.18 8.38-81.75z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M801.82 269.71s16.86-1.69 21.07 42.14 11 53.94 11 53.94 4.21 22.76-5.9 36.24-29.5 42.14-29.5 42.14-21.07 5.9-25.28-15.17l26.13-48.88s4.21-16.86-5.9-28.66-17.72-90.18 8.38-81.75z",
      fill: "#fc6681"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M787.94 301.31s-1.68 26.1 5.88 40.46 7.59 32.87 0 43m-10.09-115.48s6.74-6.74 26.13-7.59 27.81-6.74 27.81-6.74",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M830.61 155.59c5.12.63 11 2.39 12.82 7.2.68 1.77.7 3.72 1.17 5.55 1.91 7.36 10.2 10.79 15.31 16.42 4.51 5 6.5 11.69 8 18.24a171.4 171.4 0 013 57.26c-1.64 14-5 27.74-5.94 41.78s.78 28.81 8.45 40.61c3.3 5.07 7.66 9.53 10 15.11-4.83 3.92-11.5 4.48-17.73 4.69q-10.87.37-21.75 0c-3.8-.13-7.77-.38-11.05-2.3a17.06 17.06 0 01-5.8-6.23c-4.15-7-5.19-15.5-5-23.66s1.47-16.28 1.62-24.45c.08-4.45-.27-9.18-2.83-12.82-1.85-2.63-4.66-4.4-7.06-6.53-9-8-12.12-20.82-12.42-32.87s1.69-24.12.67-36.13c-.4-4.7-2.16-10.35-6.78-11.26-1.46-.29-3 0-4.4-.56-3.71-1.43-3.35-6.66-4.41-10.49-1.19-4.3-4.86-7.62-5.89-12-2.43-10.2 10.55-22.37 19.06-25.92 8.65-3.62 21.84-2.76 30.96-1.64z",
      opacity: 0.1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M831.45 153.91c5.12.63 11 2.39 12.82 7.2.68 1.77.7 3.72 1.17 5.55 1.91 7.36 10.2 10.79 15.31 16.42 4.51 5 6.5 11.69 8 18.24a171.4 171.4 0 013 57.26c-1.64 14-5 27.74-5.94 41.78s.78 28.81 8.45 40.61c3.3 5.07 7.66 9.53 10 15.11-4.83 3.92-11.5 4.48-17.73 4.69q-10.87.37-21.75 0c-3.8-.13-7.77-.38-11.05-2.3a17.06 17.06 0 01-5.8-6.23c-4.15-7-5.19-15.5-5-23.66s1.47-16.28 1.62-24.45c.08-4.45-.27-9.18-2.83-12.82-1.85-2.63-4.66-4.4-7.06-6.53-9-8-12.12-20.82-12.42-32.87s1.69-24.12.67-36.13c-.4-4.7-2.16-10.35-6.78-11.26-1.46-.29-3 0-4.4-.56-3.71-1.43-3.35-6.66-4.41-10.49-1.19-4.3-4.86-7.62-5.89-12-2.43-10.2 10.55-22.37 19.06-25.92 8.65-3.63 21.84-2.77 30.96-1.64z",
      fill: "#472727"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/pages/signup.js":
/*!*****************************!*\
  !*** ./src/pages/signup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Base */ "./src/components/Base/index.js");
/* harmony import */ var _lib_icons_Undraw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/icons/Undraw */ "./src/lib/icons/Undraw.jsx");
/* harmony import */ var _styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/login.module.sass */ "./src/styles/login.module.sass");
/* harmony import */ var _styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\pages\\signup.js";













const Signup = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: passwordConfirmation,
    1: setPasswordConfirmation
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      case "passwordConfirmation":
        setPasswordConfirmation(e.target.value);
        break;
    }
  };

  const handleSubmit = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      data: {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      },
      url: `${"http://127.0.0.1:8000/api"}/auth/register`
    };
    const promise = axios__WEBPACK_IMPORTED_MODULE_2___default().post(api.url, api.data, {
      headers: api.headers,
      withCredentials: true
    });
    react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().promise(promise, {
      loading: "Signing up..",
      success: response => {
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(null, "user", response.data.cookie, {
          maxAge: JSON.parse(response.data.cookie).ttl,
          path: "/"
        });
        router.replace("/calendars");
        return response.data.message;
      },
      error: error => {
        if (error.response.data.errors) {
          if (error.response.data.errors.name) for (let i = 0; i < error.response.data.errors.name.length; i++) react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(error.response.data.errors.name[i]);
          if (error.response.data.errors.email) for (let i = 0; i < error.response.data.errors.email.length; i++) react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(error.response.data.errors.password[i]);
          if (error.response.data.errors.password) for (let i = 0; i < error.response.data.errors.password.length; i++) react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(error.response.data.errors.password[i]);
        }

        return error.response.data.message;
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Sign up \u2223 MYTC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Base__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default().login),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default().fields),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
            children: "Welcome to MYTC!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: "Sign up to gain access to all features of the application, create and manage events and connect to others."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
            onSubmit: e => handleSubmit(e.preventDefault()),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
              children: ["Your name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                type: "name",
                id: "name",
                name: "name",
                value: name,
                onChange: handleChange,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
              children: ["Your email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                type: "email",
                id: "email",
                name: "email",
                value: email,
                onChange: handleChange,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
              children: ["Your password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                type: "password",
                id: "password",
                name: "password",
                minLength: 8,
                value: password,
                onChange: handleChange,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
              children: ["Repeat your password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                type: "password",
                id: "passwordConfirmation",
                name: "passwordConfirmation",
                value: passwordConfirmation,
                onChange: handleChange,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              type: "submit",
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: ["Already a member?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/signin",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "Sign in!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default().info),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_lib_icons_Undraw__WEBPACK_IMPORTED_MODULE_9__.Checking, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h4", {
            children: "Why MYTC?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: "Simply organize your events and share them with others! Explore our solutions to create a community, calendar or more!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
      position: "bottom-center",
      reverseOrder: false,
      toastOptions: {
        style: {
          borderRadius: "8px",
          backgroundColor: "white",
          padding: "10px"
        },
        duration: 2000,
        success: {
          iconTheme: {
            primary: "#7c6aef",
            secondary: "#FFF"
          }
        },
        error: {
          duration: 4000
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async function getServerSideProps(ctx) {
  if (!!nookies__WEBPACK_IMPORTED_MODULE_3___default().get(ctx).user) return {
    redirect: {
      permanent: false,
      destination: "/calendars"
    }
  };
  return {
    props: {}
  };
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(Signup));

/***/ }),

/***/ "./src/styles/header.module.scss":
/*!***************************************!*\
  !*** ./src/styles/header.module.scss ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__10AWY"
};


/***/ }),

/***/ "./src/styles/login.module.sass":
/*!**************************************!*\
  !*** ./src/styles/login.module.sass ***!
  \**************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"login": "login_login__2443r",
	"fields": "login_fields__1oRB4",
	"info": "login_info__3jOcA"
};


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9CYXNlL2luZGV4LmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvbGliL2ljb25zL0JyYW5kLmpzeCIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2xpYi9pY29ucy9VbmRyYXcuanN4Iiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvc3R5bGVzL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL3N0eWxlcy9sb2dpbi5tb2R1bGUuc2FzcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3QtaG90LXRvYXN0XCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3dlZXZlbHkvaWdub3JlZHxDOlxcVXNlcnNcXNCS0LvQsNC0XFxEZXNrdG9wXFxteXRjXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnMvQnJhbmRcIlxyXG5pbXBvcnQgc2NzcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2hlYWRlci5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzY3NzLmhlYWRlcn0+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nLyc+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8TG9nbyAvPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TVlUQzwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWduaW4nPlxyXG5cdFx0XHRcdFx0XHQ8YT5TaWduIGluPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImV4cG9ydCBjb25zdCBMb2dvID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiB3aWR0aD1cIjY1MC4wMDAwMDBwdFwiIGhlaWdodD1cIjY1MC4wMDAwMDBwdFwiIHZpZXdCb3g9XCIwIDAgNjUwLjAwMDAwMCA2NTAuMDAwMDAwXCJcclxuIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XHJcblxyXG48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNzA4LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiXHJcbmZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPlxyXG48cGF0aCBkPVwiTTMzMzUgNjQyOSBjLTg2NyAtNTggLTE2NDggLTQ5NiAtMjE2NCAtMTIxMSAtMjQ4IC0zNDMgLTQyNyAtNzc1XHJcbi00OTUgLTExODggLTQ1IC0yNzQgLTUzIC01ODggLTIyIC04MzAgODcgLTY3NiAzNzkgLTEyNjQgODYwIC0xNzMzIDQzOCAtNDI3XHJcbjk5OSAtNzAyIDE2MjEgLTc5NCAxNzMgLTI1IDYyMSAtMjUgNzkwIDEgNTcyIDg3IDEwNjAgMzA5IDE0ODQgNjcyIDQ1OSAzOTNcclxuNzgyIDkxNCA5MjYgMTQ5NCA2MiAyNTAgODUgNDQxIDg1IDcwOSAwIDQ1MSAtOTcgODY1IC0zMDEgMTI3NyAtMjY2IDU0MSAtNzEwXHJcbjk5NiAtMTI0MiAxMjc0IC0zODYgMjAyIC03NTEgMzAzIC0xMTkwIDMzMCAtMTc3IDExIC0xNzggMTEgLTM1MiAtMXogbTU4MFxyXG4tMzgzIGM2ODIgLTExMCAxMjk2IC00OTMgMTY4OCAtMTA1MyA0MTkgLTU5OSA1NTggLTEzNTcgMzgxIC0yMDY4IC0xNjQgLTY2MFxyXG4tNjAxIC0xMjM2IC0xMTk4IC0xNTgwIC0yNjEgLTE1MSAtNTQ3IC0yNTEgLTg3MSAtMzA3IC0xMTAgLTE4IC0xNjkgLTIyIC0zODBcclxuLTIyIC0yNTMgLTEgLTMwMCAzIC01MTUgNDYgLTQxMiA4MCAtODMwIDI4OCAtMTE1MyA1NzEgLTQ1MCAzOTYgLTczNCA5MDNcclxuLTgzOSAxNTAyIC0yOSAxNjYgLTM2IDUyOCAtMTQgNzA1IDg1IDY3MyA0MTQgMTI2MiA5MzggMTY4MiAzNDEgMjczIDc3OSA0NjRcclxuMTE5MyA1MjIgNjEgOSAxMjQgMTcgMTQwIDIwIDc0IDEwIDUzNCAtMyA2MzAgLTE4elwiLz5cclxuPHBhdGggZD1cIk0zNDY1IDU4OTggYy0xNCAtMTMgLTMwIC00MCAtMzUgLTYxIC0xMiAtNTQgLTQgLTE1MiAxNSAtMTgwIDM2IC01NlxyXG4xMTUgLTU5IDE2MCAtNSAyMiAyNiAyNSAzOSAyNSAxMDggMCA0NCAtNSA5MSAtMTIgMTA1IC0yNSA1NCAtMTA3IDcyIC0xNTMgMzN6XCIvPlxyXG48cGF0aCBkPVwiTTE4NzMgNTI0MSBjLTM3IC0yMyAtNTQgLTcxIC00MSAtMTE2IDkgLTM1IDkwIC0xMTkgMTI5IC0xMzYgNjkgLTI4XHJcbjEzOSAyMSAxMzkgOTYgMCAzMiAtOSA0NiAtNjIgMTAxIC03NCA3NiAtMTEyIDg4IC0xNjUgNTV6XCIvPlxyXG48cGF0aCBkPVwiTTUwNzUgNTI0MiBjLTM4IC0yNCAtMTAzIC05NiAtMTE1IC0xMjggLTIzIC02MCAyOSAtMTM0IDk0IC0xMzQgNjdcclxuMCAxNzYgMTEyIDE3NiAxODAgMCA3MyAtOTIgMTIyIC0xNTUgODJ6XCIvPlxyXG48cGF0aCBkPVwiTTE5MjQgNDM2MCBjLTExMSAtMjIgLTIyNCAtMTEzIC0yODMgLTIyNSBsLTM2IC03MCAwIC01MjAgMCAtNTIwIDMxXHJcbi02NSBjNjYgLTEzNyAxODEgLTIyMSAzMzEgLTI0MCAxMDUgLTE0IDMwNDMgLTEzIDMxMzcgMCAxNTAgMjIgMjgzIDEzNCAzMzNcclxuMjgxIDE2IDQ5IDE4IDk1IDE4IDUzOSAwIDUzOSAwIDUzOCAtNjYgNjQwIC00NSA3MCAtMTE4IDEzMCAtMTk2IDE2MiBsLTU4IDIzXHJcbi0xNTg1IDEgYy04NzIgMSAtMTYwNCAtMiAtMTYyNiAtNnogbTU3OSAtNjE3IGMxMyAtMjEgNjIgLTExMSAxMDggLTIwMCA0NlxyXG4tOTAgODYgLTE2MyA4OSAtMTYzIDMgMCA1MCA4NCAxMDQgMTg4IDU0IDEwMyAxMDMgMTkzIDEwOCAyMDAgMTMgMTUgNjAgMTYgNzZcclxuMCAxNyAtMTcgMTcgLTU4OSAwIC02MDYgLTcgLTcgLTIyIC0xMiAtMzQgLTEyIC00MyAwIC00OSAyMiAtNTQgMjE5IGwtNSAxODZcclxuLTU5IC0xMTUgYy05MyAtMTgwIC0xMDEgLTE5MiAtMTM5IC0xODggLTMwIDMgLTM3IDExIC05NCAxMTggLTM0IDYzIC03MSAxMzFcclxuLTgyIDE1MCBsLTIxIDM1IDAgLTE4NCBjMCAtMTU3IC0yIC0xODcgLTE3IC0yMDMgLTE4IC0yMSAtNTMgLTI0IC03MSAtNiAtMTdcclxuMTcgLTE3IDU4OSAwIDYwNiA3IDcgMjUgMTIgNDAgMTIgMjEgMCAzMyAtOSA1MSAtMzd6IG03MzQgLTY5IGM0OCAtNTggOTJcclxuLTExMiA5OCAtMTIxIDkgLTEyIDI3IDUgMTA2IDEwNCA3MiA4OSAxMDEgMTE5IDEyMSAxMjEgMzAgNCA2MCAtMzAgNTEgLTU3IC0zXHJcbi05IC01MyAtNzQgLTExMCAtMTQ1IGwtMTAzIC0xMjggMCAtMTMxIGMwIC0xMDcgLTMgLTEzNCAtMTcgLTE0OSAtMjAgLTIyIC01MVxyXG4tMjMgLTc1IC0xIC0xNiAxNCAtMTggMzMgLTE4IDE1MCBsMCAxMzQgLTEwNSAxMjcgYy0xMDUgMTI3IC0xMjIgMTYxIC05MyAxOTBcclxuMzAgMzAgNTcgMTMgMTQ1IC05NHogbTkyNSA4OSBjMjMgLTIxIDIzIC0zOCAtMiAtNjMgLTE3IC0xNyAtMzMgLTIwIC0xMTAgLTIwXHJcbmwtOTAgMCAwIC0yNDkgYzAgLTIxNCAtMiAtMjUyIC0xNiAtMjY1IC0yMCAtMjEgLTUzIC0yMCAtNzYgMSAtMTYgMTUgLTE4IDM3XHJcbi0xOCAyNjUgbDAgMjQ4IC03OSAwIGMtMTAyIDAgLTEzMSAxMCAtMTMxIDQ4IDAgNTEgNiA1MiAyNjQgNTIgMjA5IDAgMjQyIC0yXHJcbjI1OCAtMTd6IG00NzMgLTE0IGM1MyAtMjcgNzYgLTU4IDY3IC05MSAtOCAtMzMgLTMwIC0zMiAtOTcgMiAtNTcgMjkgLTcxIDMyXHJcbi0xMjkgMjggLTgwIC01IC0xMTEgLTI1IC0xNDUgLTkzIC0zNiAtNzAgLTM2IC0xOTIgMCAtMjYxIDQ5IC05NSAxNTYgLTEyMVxyXG4yNjUgLTY0IDY0IDM0IDkzIDM1IDEwNCA1IDEzIC0zNSAtNiAtNjIgLTY3IC05MSAtNDMgLTIyIC03NiAtMzAgLTEzMCAtMzJcclxuLTEzMCAtNyAtMjI1IDQ1IC0yODEgMTUyIC0yNCA0NiAtMjcgNjIgLTI3IDE2MSAwIDEyOSAxNyAxNzggODUgMjQzIDU3IDU2XHJcbjEwNiA3MiAyMTUgNjkgNzUgLTIgOTkgLTYgMTQwIC0yOHpcIi8+XHJcbjxwYXRoIGQ9XCJNMTIxOCAzNjQ1IGMtMzIgLTE4IC01OCAtNjMgLTU4IC05OSAwIC0xNCAxMyAtNDAgMjkgLTU4IDI5IC0zMyAyOVxyXG4tMzMgMTI2IC0zMyA5NyAwIDk3IDAgMTI2IDMzIDM5IDQ0IDM5IDkwIDAgMTM0IC0yOCAzMiAtMzMgMzMgLTExMyAzNiAtNjAgMlxyXG4tOTEgLTIgLTExMCAtMTN6XCIvPlxyXG48cGF0aCBkPVwiTTU2NDAgMzY0MyBjLTM5IC0yNyAtNDkgLTQ1IC00OSAtODggLTEgLTc1IDQzIC0xMDUgMTUxIC0xMDUgODggMFxyXG4xMzUgMjMgMTQ0IDcwIDIwIDk3IC0yNSAxNDAgLTE0NyAxNDAgLTU0IDAgLTgxIC01IC05OSAtMTd6XCIvPlxyXG48cGF0aCBkPVwiTTE5NDUgMjExMSBjLTQxIC0yNCAtMTEyIC0xMDYgLTExNyAtMTM0IC0xMiAtNjMgNDAgLTEyNyAxMDMgLTEyN1xyXG41NiAwIDE2OSAxMTUgMTY5IDE3MiAwIDg4IC04MiAxMzQgLTE1NSA4OXpcIi8+XHJcbjxwYXRoIGQ9XCJNNDk5MiAyMTA1IGMtMzYgLTMwIC01MCAtODEgLTMyIC0xMTYgMTcgLTM0IDkwIC0xMDggMTIyIC0xMjUgNDRcclxuLTIzIDc3IC0xNyAxMTQgMjAgMjYgMjYgMzQgNDIgMzQgNzEgMCAzMiAtOSA0NiAtNjMgMTAyIC01MSA1MyAtNjkgNjUgLTEwM1xyXG43MCAtMzMgNCAtNDUgMSAtNzIgLTIyelwiLz5cclxuPHBhdGggZD1cIk0zNTAzIDE0OTMgYy02MCAtMTEgLTg5IC04NSAtNzcgLTE5NSA1IC00OCAxMiAtNjMgMzYgLTgzIDE5IC0xNiA0MlxyXG4tMjUgNjQgLTI1IDc3IDAgMTA0IDQxIDEwNCAxNTkgMCA3NCAtMiA4MyAtMjcgMTEwIC0yOSAzMCAtNjEgNDEgLTEwMCAzNHpcIi8+XHJcbjwvZz5cclxuPC9zdmc+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBCb29raW5nID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgODUzLjExNyA1NjVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MTkuNzcgMzc4LjExYy02LjE2IDYuNzMtMTMuOCAxMS43NC0yMi4wOSAxNS42M2gtLjAxYy0uNzguMzctMS41Ni43My0yLjM1IDEuMDdoLS4wMWwtLjAxLjAxLS4wMS0uMDFoLS4wMWEuMDEuMDEgMCAwMS0uMDEuMDFoLS4wMWwtLjAxLS4wMWMtLjAxLjAxLS4wMS4wMS0uMDIgMGwtLjAxLjAxLS4wMS0uMDFoLS4wMWMtLjAxLjAxLS4wMS4wMS0uMDIgMGgtLjAxYTEzOS43NzQgMTM5Ljc3NCAwIDAxLTE3LjA2IDYuMUEyMzYuNjUxIDIzNi42NTEgMCAwMTY3MyA0MDYuNGwtMi0uMzZ2LTgxLjExYy42Ni0uMjggMS4zMy0uNTYgMi0uODNxNi41NTUtMi43MTUgMTMuMjctNC45OSA5LjY2LTMuMyAxOS41OS01LjY2YTIxMi4xNjcgMjEyLjE2NyAwIDAxNjYuMDQtNS4zNHE2LjA0NS40NSAxMi4wNiAxLjNjOC4zOSAxLjE3IDE3LjE5IDMuMjEgMjQuOTMgNi43NWguMDFjMS4xMy41MyAyLjI0IDEuMDggMy4zNCAxLjY3IDYuODggMy43MyAxMi42OCA4Ljg2IDE2LjIyIDE1Ljg5YTMwLjU3MyAzMC41NzMgMCAwMTIuNzIgNy45OXYuMDJjLjIuOTYuMzQgMS45My40NSAyLjg5IDEuMjYgMTEuODQtMy42NSAyNC41MS0xMS44NiAzMy40OXpcIlxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgzMS42MyAzNDQuNjJhMS4zNTggMS4zNTggMCAwMS0uMy4wNHEtMjUuNjk1IDEuMTI1LTUxLjMyIDMuMzRoLS4wM2MtLjA3LjAxLS4xMy4wMS0uMi4wMnEtMjYuMzEgMi4yOC01Mi41MSA1LjcxYy0uNzQuMS0xLjQ3LjItMi4yLjI5cS0xOC4xMiAyLjQxNS0zNi4xNyA1LjM2LTcuOTY1IDEuMzA1LTE1LjkgMi43MmMtLjY3LjEyLTEuMzMuMjMtMiAuMzZ2LTMuMDNjLjY3LS4xMyAxLjM0LS4yNCAyLS4zNnEyNi40My00LjY4IDUzLjA0LTguMTcgNi42OS0uOSAxMy40LTEuNyAxOS4zOC0yLjM0IDM4LjgyLTQuMDRsMi44NC0uMjRxMjQuODg1LTIuMTE1IDQ5Ljg0LTMuMjFhLjkzOS45MzkgMCAwMS4yNC4wMmMxLjYuMTQgMS45NCAyLjU0LjQ1IDIuODl6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03OTYuMDU2IDM5MS44NjNjLTIxLjM0LjE1Ny00Mi4zNjMtOC44OTItNTcuNDU4LTIzLjg3YTc3LjgyNiA3Ny44MjYgMCAwMS0xMS4xODQtMTQuMDdjLTEuMDE3LTEuNjMtMy4zOTguMTY5LTIuMzg5IDEuNzg2IDExLjcyMyAxOC44IDMxLjI1IDMyLjE5MyA1Mi43NzggMzcuMTE4YTgwLjgxMSA4MC44MTEgMCAwMDE4LjYzNyAxLjk5NGMxLjkxMy0uMDE0IDEuNTE3LTIuOTcyLS4zODQtMi45NTh6TTcwNS44NiAzMTMuNDVhMS42OTIgMS42OTIgMCAwMS0xLjI1IDEuMTMgNjUuMjIgNjUuMjIgMCAwMC0xNC4wOCA1LjVBNjguNDA2IDY4LjQwNiAwIDAwNjczIDMzMy4zM2MtLjI3LjI3LS41My41NC0uNzguODItLjQyLjQ0LS44Mi44OS0xLjIyIDEuMzV2LTQuMzZhNDEuOCA0MS44IDAgMDEyLTEuOTkgNzEuOTEyIDcxLjkxMiAwIDAxMTMuMjctMTAuMDRxOS42Ni0zLjMgMTkuNTktNS42NnptMTA0Ljc5OSAxLjkyMmE2OS40MDIgNjkuNDAyIDAgMDAtMzIuNDIyIDI4LjU4NSAxLjUgMS41IDAgMDAuNzkzIDEuOTU0IDEuNTI4IDEuNTI4IDAgMDAxLjk1My0uNzkyIDY2LjA0OSA2Ni4wNDkgMCAwMTMwLjc5Ny0yNi45ODRjMS43NjUtLjc1NC42NDgtMy41MTktMS4xMjEtMi43NjN6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04NTEuNTggMjMwLjQ0Yy0yLjMyIDguODItNi43NyAxNi44MS0xMi4zIDI0LjFsLS4wMS4wMWMtLjUxLjY4LTEuMDQgMS4zNy0xLjU5IDIuMDN2LjAxYTEzOS4yNyAxMzkuMjcgMCAwMS0xMi40MSAxMy4zOSAyMzMuNDI5IDIzMy40MjkgMCAwMS01My4zNyAzOC4xM2MtMzAuNjcgMTYuMDItNjQuOTUgMjUuNDktOTguOSAyNi4wMy0uMjYuMDEtLjUyLjAxLS43OC4wMS0uNDEuMDEtLjgyLjAxLTEuMjIuMDF2LTQ1LjQ1Yy42NS0xLjI0IDEuMzItMi40OCAyLTMuNzFhMjE5LjUyNCAyMTkuNTI0IDAgMDEzMi4wMy00My44MmMuMy0uMzMuNjEtLjY2LjkyLS45OHE3LjAyLTcuNDEgMTQuNzItMTQuMTFhMjEwLjgxOSAyMTAuODE5IDAgMDE2Ny4yOS0zOS44NWM3Ljk3LTIuODYgMTYuNzEtNS4xNSAyNS4yMS01LjYgMS4yNS0uMDcgMi40OS0uMSAzLjc0LS4wOSA3LjgzLjExIDE1LjM0IDEuOTYgMjEuNzUgNi41NGEzMC45OTkgMzAuOTk5IDAgMDE2LjEyIDUuODFjLjYyLjc3IDEuMTkgMS41NiAxLjc0IDIuMzd2LjAxYzYuNjIgOS45IDguMTYgMjMuMzkgNS4wNiAzNS4xNnpcIlxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg0Ni41MiAxOTUuMjd2LjAxYTEuNDYxIDEuNDYxIDAgMDEtLjI0LjE3cS0yMi4yIDEyLjkxNS00My44NCAyNi43N2MtLjAyLjAxLS4wMy4wMi0uMDUuMDNhMS43NCAxLjc0IDAgMDEtLjE4LjExcS0yMi4yNDUgMTQuMjUtNDMuODYgMjkuNDZjLS42LjQyLTEuMjEuODUtMS44MiAxLjI4cS0xNC45MjUgMTAuNTQ1LTI5LjU0IDIxLjU0LTI3LjYgMjAuNzktNTMuOTkgNDMuMTJjLS42Ny41Ni0xLjMzIDEuMTMtMiAxLjd2LTMuODljLjY2LS41NyAxLjMzLTEuMTQgMi0xLjdxMTAuMTEtOC41MzUgMjAuNC0xNi44M2MyLjA1LTEuNjUgNC4xMS0zLjMgNi4xNy00LjkzcTI3LjQ1LTIxLjg1NSA1Ni4xMy00Mi4wOGguMDFxNS42NC0zLjk3NSAxMS4zLTcuODggMTYuMDgtMTEuMDcgMzIuNTItMjEuNjFjLjc5LS41MSAxLjU5LTEuMDIgMi4zOS0xLjUzcTIxLjA0NS0xMy40NCA0Mi42NC0yNmExLjQ4OSAxLjQ4OSAwIDAxLjIyLS4xMWMxLjUtLjYgMi45MSAxLjM4IDEuNzQgMi4zN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgzNi45NjggMjUzLjYzM2MtMTguODI1IDEwLjA1Mi00MS42NDYgMTEuODA1LTYxLjk3IDUuNTUzYTc3LjgyNyA3Ny44MjcgMCAwMS0xNi40NC03LjI2NGMtMS42Ni0uOTczLTIuOTMxIDEuNzI2LTEuMjg2IDIuNjkgMTkuMTE0IDExLjIwNCA0Mi42MjcgMTMuOTkzIDYzLjk4IDguMzUzYTgwLjgxMiA4MC44MTIgMCAwMDE3LjQzLTYuODljMS42ODgtLjkwMi0uMDM3LTMuMzM3LTEuNzE0LTIuNDQyem0tMTQwLjg0NyAzNi41ODlhNjguNTUzIDY4LjU1MyAwIDAxLS45NTItMTUuODcgNzIuMzE5IDcyLjMxOSAwIDAxMTAuNzgtMzQuMTVxNy4wMjktNy40MDggMTQuNzI0LTE0LjExMmExLjcwNSAxLjcwNSAwIDAxLS41ODYgMS41ODUgNjUuNDUxIDY1LjQ1MSAwIDAwLTkuOTEyIDExLjQwNyA2OS4xMjIgNjkuMTIyIDAgMDAtMTEuMDgyIDUwLjg5MiAxLjIxMiAxLjIxMiAwIDAxLS4zMTQgMS4xNDMgMS42MjUgMS42MjUgMCAwMS0yLjY1OC0uODk1em0xMTguMjQ3LTExMS4xMWE2OS40MDIgNjkuNDAyIDAgMDAtMTUuNDMzIDQwLjM3NSAxLjUgMS41IDAgMDAxLjYxIDEuMzYyIDEuNTI4IDEuNTI4IDAgMDAxLjM2MS0xLjYxIDY2LjA0OCA2Ni4wNDggMCAwMTE0LjczOC0zOC4yYzEuMjEzLTEuNDg4LTEuMDYxLTMuNDE3LTIuMjc2LTEuOTI3elwiXHJcbiAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzEwLjgxIDIxMS45N3YuMDFjLS4wNy44Ni0uMTUgMS43MS0uMjQgMi41NnYuMDJhMTQxLjMgMTQxLjMgMCAwMS0zLjI1IDE3Ljk2Yy0uNyAyLjktMS40NiA1Ljc4LTIuMjkgOC42Ni0uMS4zNy0uMjEuNzQtLjMyIDEuMXYuMDFhMjI5LjUyMyAyMjkuNTIzIDAgMDEtOC43NCAyNC42NUEyMzguOTE4IDIzOC45MTggMCAwMTY3MyAzMDkuMTZjLS42NS45Ny0xLjMyIDEuOTQtMiAyLjl2LTE1Ni42Yy42Ny0uMDQgMS4zMy0uMDQgMi0uMDJxLjQ4IDAgLjk2LjAzYTMwLjMyMiAzMC4zMjIgMCAwMTguMjggMS42MWMuOTQuMzEgMS44NS42NiAyLjc1IDEuMDUgMTAuOTEgNC43OCAxOS40OCAxNS4zMiAyMy4yIDI2LjkxIDIuNzkgOC42OCAzLjM1IDE3LjgxIDIuNjIgMjYuOTN6XCJcclxuICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02ODQuOTkgMTU4LjEzYTEuMDc2IDEuMDc2IDAgMDEtLjExLjI4cS02LjA3NSAxMS44MDUtMTEuODggMjMuNzNjLS42NyAxLjM3LTEuMzQgMi43NS0yIDQuMTJ2LTYuOHEuOTktMi4wNCAyLTQuMDggNC40ODUtOS4wOSA5LjEyLTE4LjFhMS4zMDQgMS4zMDQgMCAwMS4xMi0uMmMuOTItMS4zMiAzLjItLjQyIDIuNzUgMS4wNXptMjYuMTQgNTUuNDVjLS4xOC4zMi0uMzYuNjQtLjU2Ljk2YTc5LjgxNiA3OS44MTYgMCAwMS0xMC40MiAxNC4yNEE4NS45MTYgODUuOTE2IDAgMDE2NzMgMjQ4LjU1Yy0uNjYuMzItMS4zMy42Mi0yIC45di0zLjI1Yy42Ny0uMyAxLjM0LS42MSAyLS45M2E4MC44NjYgODAuODY2IDAgMDAzNS4zNy0zMi44MiAxLjY0NSAxLjY0NSAwIDAxMi40NC0uNDcgMS4xNTMgMS4xNTMgMCAwMS4zMiAxLjZ6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02NzMgMzN2NzZoLTJ2LS44MUgydi44MUgwVjMzQTMzLjAzMiAzMy4wMzIgMCAwMTMzIDBoNjA3YTMzLjAzMiAzMy4wMzIgMCAwMTMzIDMzelwiXHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNjQwIDBIMzNBMzMuMDMyIDMzLjAzMiAwIDAwMCAzM3Y0MzRhMzMuMDMyIDMzLjAzMiAwIDAwMzMgMzNoNjA3YTMzLjAzMiAzMy4wMzIgMCAwMDMzLTMzVjMzYTMzLjAzMiAzMy4wMzIgMCAwMC0zMy0zM3ptMzEgNDY3YTMxLjA0IDMxLjA0IDAgMDEtMzEgMzFIMzNhMzEuMDQgMzEuMDQgMCAwMS0zMS0zMVYzM0EzMS4wNCAzMS4wNCAwIDAxMzMgMmg2MDdhMzEuMDQgMzEuMDQgMCAwMTMxIDMxelwiXHJcbiAgICAgICAgZmlsbD1cIiMzZjNkNTZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsxMzZ9IGN5PXs1NC41fSByPXsyMH0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs1Mzd9IGN5PXs1NC41fSByPXsyMH0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTkzLjc4NSAyNzcuNTAySDc0LjgwOGExOS4wMzMgMTkuMDMzIDAgMDEtMTkuMDExLTE5LjAxMnYtNTYuMjMyYTE5LjAzMyAxOS4wMzMgMCAwMTE5LjAxMS0xOS4wMTJoMTE4Ljk3N2ExOS4wMzMgMTkuMDMzIDAgMDExOS4wMTEgMTkuMDEydjU2LjIzMmExOS4wMzMgMTkuMDMzIDAgMDEtMTkuMDExIDE5LjAxMnptMjAyLjM5OCAwSDI3Ny4yMDdhMTkuMDMzIDE5LjAzMyAwIDAxLTE5LjAxMS0xOS4wMTJ2LTU2LjIzMmExOS4wMzMgMTkuMDMzIDAgMDExOS4wMTEtMTkuMDEyaDExOC45NzZhMTkuMDMzIDE5LjAzMyAwIDAxMTkuMDEyIDE5LjAxMnY1Ni4yMzJhMTkuMDMzIDE5LjAzMyAwIDAxLTE5LjAxMiAxOS4wMTJ6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0zOTYuMTgzIDQyMi43OTNIMjc3LjIwN2ExOS42MSAxOS42MSAwIDAxLTE5LjU4OC0xOS41ODd2LTU2LjIzM2ExOS42MSAxOS42MSAwIDAxMTkuNTg4LTE5LjU4OGgxMTguOTc2YTE5LjYxIDE5LjYxIDAgMDExOS41ODggMTkuNTg4djU2LjIzM2ExOS42MSAxOS42MSAwIDAxLTE5LjU4OCAxOS41ODd6bS0yMDIuNzg5IDBINzQuNDE4YTE5LjYxIDE5LjYxIDAgMDEtMTkuNTg3LTE5LjU4N3YtNTYuMjMzYTE5LjYxIDE5LjYxIDAgMDExOS41ODctMTkuNTg4aDExOC45NzZhMTkuNjEgMTkuNjEgMCAwMTE5LjU4OCAxOS41ODh2NTYuMjMzYTE5LjYxIDE5LjYxIDAgMDEtMTkuNTg4IDE5LjU4N3ptNDA1LjE4OCAwSDQ3OS42MDZhMTkuNjEgMTkuNjEgMCAwMS0xOS41ODgtMTkuNTg3di01Ni4yMzNhMTkuNjEgMTkuNjEgMCAwMTE5LjU4OC0xOS41ODhoMTE4Ljk3NmExOS42MSAxOS42MSAwIDAxMTkuNTg3IDE5LjU4OHY1Ni4yMzNhMTkuNjEgMTkuNjEgMCAwMS0xOS41ODcgMTkuNTg3em0wLTE0NS4xNzhINDc5LjYwNmExOS42MSAxOS42MSAwIDAxLTE5LjU4OC0xOS41ODh2LTU2LjIzM2ExOS42MSAxOS42MSAwIDAxMTkuNTg4LTE5LjU4N2gxMTguOTc2YTE5LjYxIDE5LjYxIDAgMDExOS41ODcgMTkuNTg3djU2LjIzM2ExOS42MSAxOS42MSAwIDAxLTE5LjU4NyAxOS41ODh6XCJcclxuICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezEzNC4yOTd9IGN5PXsyMzAuMzc0fSByPXszMi4yNjJ9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEzMS4wOTkgMjQyLjY4MWEzLjM0NiAzLjM0NiAwIDAxLTIuMDE0LS42NjhsLS4wMzYtLjAyNy03LjU4MS01LjgwNWEzLjM2OCAzLjM2OCAwIDExNC4wOTctNS4zNDhsNC45MSAzLjc2NiAxMS42MDYtMTUuMTM1YTMuMzY4IDMuMzY4IDAgMDE0LjcyMy0uNjI0bC0uMDcyLjA5OC4wNzQtLjA5NmEzLjM3MiAzLjM3MiAwIDAxLjYyMyA0LjcyM2wtMTMuNjUgMTcuODAyYTMuMzcgMy4zNyAwIDAxLTIuNjggMS4zMTR6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezMzNy4yNzF9IGN5PXsyMjkuOTExfSByPXszMi4yNjJ9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTMzNC4wNzMgMjQyLjIxOGEzLjM0NiAzLjM0NiAwIDAxLTIuMDEzLS42NjlsLS4wMzYtLjAyNy03LjU4Mi01LjgwNWEzLjM2OCAzLjM2OCAwIDExNC4wOTgtNS4zNDdsNC45MSAzLjc2NSAxMS42MDYtMTUuMTM0YTMuMzY4IDMuMzY4IDAgMDE0LjcyMi0uNjI0bC0uMDcyLjA5OC4wNzQtLjA5NmEzLjM3MiAzLjM3MiAwIDAxLjYyNCA0LjcyMmwtMTMuNjUgMTcuODAzYTMuMzcgMy4zNyAwIDAxLTIuNjggMS4zMTR6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01NTUuMzEyIDM4Mi4xNWExMC43NDMgMTAuNzQzIDAgMDAtMi4xODMtMTYuMzI4bC0xOC4wMS05Ni4xNzItMjEuOTA1IDguMTIyIDI0LjU5MiA5MS45OGExMC44IDEwLjggMCAwMDE3LjUwNiAxMi4zOTh6TTM4MC41MjcgMjM1LjRhMTEuNDA2IDExLjQwNiAwIDAxLjAyMiAxLjc5Nmw0Mi41OSAzMi43OCAxMi4wNzgtNC45NiA5Ljg2NyAxNy4yNS0yMC41MjggMTAuODU3YTguNjcgOC42NyAwIDAxLTEwLjI3Ni0xLjYyN2wtNDIuNTcxLTQzLjg5YTExLjM3NiAxMS4zNzYgMCAxMTguODE4LTEyLjIwNnptOTkuNTAxIDMxNy40NDloLTEyLjI1OWwtNS44MzMtMzcuMjg4IDE4LjA5NS4wMDEtLjAwMyAzNy4yODd6XCJcclxuICAgICAgICBmaWxsPVwiI2EwNjE2YVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00ODMuMTU1IDU2NC43MzNsLTM5LjUzLS4wMDF2LS41YTE1LjM4NiAxNS4zODYgMCAwMTE1LjM4Ni0xNS4zODZoMjQuMTQ1elwiXHJcbiAgICAgICAgZmlsbD1cIiMyZjJlNDFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCIjYTA2MTZhXCJcclxuICAgICAgICBkPVwiTTUyNi4wMjggNTUyLjg0OWgtMTIuMjU5bC01LjgzMy0zNy4yODggMTguMDk1LjAwMS0uMDAzIDM3LjI4N3pcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNTI5LjE1NSA1NjQuNzMzbC0zOS41My0uMDAxdi0uNWExNS4zODYgMTUuMzg2IDAgMDExNS4zODYtMTUuMzg2aDI0LjE0NXptLTYzLjkzMi0xOS4yNTNhNC40OSA0LjQ5IDAgMDEtNC40NzUtNC4wNzNsLTEwLjY4My0xNDMuNjkuNTA0LS4wNCA3My41MjEtNi4wNDMuMDIuNTIyIDUuODQ1IDE0OC44NWE0LjUgNC41IDAgMDEtNC40OTcgNC42NjloLTE0LjQxNmE0LjQ3NSA0LjQ3NSAwIDAxLTQuNDQ3LTMuODE2bC0xOS41NzctMTIwLjI0NWEuNS41IDAgMDAtLjk5NC4wNzJsLS44ODggMTE4LjcyNGE0LjUwNSA0LjUwNSAwIDAxLTQuMjYzIDQuNDYybC0xNS40MDkuNmMtLjA4LjAwNS0uMTYxLjAwNy0uMjQxLjAwN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjMmYyZTQxXCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NDc3Ljc3Mn0gY3k9ezE5MS41NjR9IHI9ezI0LjU2MX0gZmlsbD1cIiNhMDYxNmFcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDgyLjUyNyA0MDYuODgyYTEyMS4wMzcgMTIxLjAzNyAwIDAxLTMxLjc2OS00LjM0MiA0LjUxIDQuNTEgMCAwMS0zLjIzNi00LjY4N2MzLjMwNy00OS42OTMgNC4wODQtODguMjU3LTIuODY5LTExNC45MzktMi45NjMtMTEuMzcyLTEuNjE4LTIzLjM0OSAzLjY5MS0zMi44NiA3Ljk5LTE0LjMxMyAyMi42NzYtMjMuMDI0IDM4LjM0LTIyLjcyM3ExLjEyNC4wMjEgMi4yNjkuMDhjMjMuNzczIDEuMjI0IDQyLjI5NyAyMi43MyA0MS4yOTQgNDcuOTQybC00Ljc4MiAxMjAuMTY4YTQuNDQgNC40NCAwIDAxLTIuODE1IDQuMDQ0IDExNC4yNDUgMTE0LjI0NSAwIDAxLTQwLjEyMyA3LjMxN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjM2YzZDU2XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQ0OC42OTUgMjkyLjE0bC0xOC4zOTctMjIuNTQ0YTUuNzYxIDUuNzYxIDAgMDExLjUxNC04LjU5MWwyNC45MjEtMTQuODVhMTYgMTYgMCAwMTIwLjE2IDI0Ljg1MmwtMTkuNDc3IDIxLjM3M2E1Ljc2MSA1Ljc2MSAwIDAxLTguNzItLjI0em01Ny44NzUtMi44MjhhNS43NTUgNS43NTUgMCAwMS0zLjE2NC0zLjYwNkw0OTUuMTI0IDI1OGExNiAxNiAwIDAxMjguOTQzLTEzLjY1MmwxNi4wMTcgMjQuMTg4YTUuNzYxIDUuNzYxIDAgMDEtMi4zNjIgOC4zOTlsLTI2LjM1NCAxMi4zMzZhNS43NTUgNS43NTUgMCAwMS00Ljc5OC4wNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjM2YzZDU2XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQ4OS45MDkgMjExLjcxN2wtMTguMjA2LTQuMTY3Yy0xLjg3OC0uNDMtNC4xMzQtMS4yNS00LjM5NS0zLjE1OS0uMzUtMi41NjUgMy4zNDItNC4zNTIgMy4wMDEtNi45MTgtLjMzLTIuNDg2LTMuNjkyLTIuODA2LTYuMDktMy41NGE5LjExIDkuMTEgMCAwMS01LjY3Mi0xMS4zNGMtMi41OTUgMy42NTYtOC41MjIgMy45NjktMTEuODg3IDEuMDA3cy00LjAxLTguMzM2LTEuOTktMTIuMzM4YTE0LjI4NyAxNC4yODcgMCAwMTEwLjcyNC03LjI0IDIyLjYxNyAyMi42MTcgMCAwMTEzLjAyMyAyLjQyOGMuMjY3LTIuODM0IDMuODA1LTMuOTgzIDYuNjUtNC4wMDhhMjguNDMgMjguNDMgMCAwMTI2LjY0NCAxOS40NDZjMy40OTIgMTEuMjUzIDEuMTU2IDIzLjU4Ny04LjYxNSAzMC4xN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjMmYyZTQxXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZD1cIk02NzMuMjg3IDU2NWgtMzgxYTEgMSAwIDExMC0yaDM4MWExIDEgMCAxMTAgMnpcIiBmaWxsPVwiIzNmM2Q1NlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja2luZyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDExNzcgNjQzLjIyXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDU4LjMzIDEyNy45MmwtNTEgNjMuMTcgNDAuNjUtNzAuNDNhMTAxLjg5IDEwMS44OSAwIDAwLTE5LjY4LTkuMzYgMTAxLjM1IDEwMS4zNSAwIDEwLTIwMi4xMS01LjUzbDkyLjEyIDYuMDYtOTAuNSA4LjEzYTEwMS41IDEwMS41IDAgMDA0NC44OCA2Ni42NWw1MC40My0zMi43Mi00MS45NCAzNy42YTEwMS41NiAxMDEuNTYgMCAwMDEyLjg4IDUuNTQgMTAxLjMzIDEwMS4zMyAwIDAwNjcuNDQgMTA1LjU4IDEwMS4zNCAxMDEuMzQgMCAwMDEzNy44NiAxMDQuMzIgMzQuNzYgMzQuNzYgMCAwMDQuNjkgMTEuMTcgMzMuMjggMzMuMjggMCAwMDEyLjgzIDExLjg5IDM0LjYyIDM0LjYyIDAgMDAxOC4yMSAyOC41NCAzNC42OCAzNC42OCAwIDAwMTguMjEgMjguNTMgMzQuNjYgMzQuNjYgMCAwMDE4LjIgMjguNTUgMzMuNCAzMy40IDAgMDA1LjM4IDE2LjY0YzguMjMgMTIuODkgMjIuODkgMTguMjUgMzIuNzQgMTJzMTEuMTYtMjEuODMgMi45My0zNC43M2EzMy40NCAzMy40NCAwIDAwLTEyLjgxLTExLjkxIDM0LjY4IDM0LjY4IDAgMDAtMTguMjQtMjguNTcgMzQuNjYgMzQuNjYgMCAwMC0xOC4yMi0yOC41MyAzNC42MiAzNC42MiAwIDAwLTE4LjIxLTI4LjUzIDMzLjM5IDMzLjM5IDAgMDAtNS4zOS0xNi42NCAzNC42IDM0LjYgMCAwMC04LTguODYgMTAxLjMzIDEwMS4zMyAwIDAwLTM1LjkxLTE2OS41NSAxMDEuNDEgMTAxLjQxIDAgMDAtMzcuNDMtODl6bTIwOS4yNC01MC43MWwtOS4xIDUuNzdMNjY0IDcyLjkzYTkgOSAwIDAwLTUuNTEtMmgtLjE0YTEwLjc5IDEwLjc5IDAgMDEtMS44OS0uMTRsLTMuMDkgMiAxLjMzLTIuNDFhMTEgMTEgMCAwMS01LjQtNC4wOWwtNS41MiAzLjUgMy40OS02LjM0YTE2LjE3IDE2LjE3IDAgMDAtMTIuMzctNi4yNmMtNS43NSAwLTEwLjg2IDMuNDItMTQuMTYgOC43NGExMC41NyAxMC41NyAwIDAxLTkuMzYgNWgtLjMxYy02LjM0IDAtMTEuNDggNy4xOS0xMS40OCAxNnM1LjE0IDE2LjA1IDExLjQ4IDE2LjA1YTguNjIgOC42MiAwIDAwNC0xIDE2LjU2IDE2LjU2IDAgMDExMy44OS0uMjcgMTQuNTIgMTQuNTIgMCAwMDExLjgxIDAgMTYuNTggMTYuNTggMCAwMTEzLjc3LjI3IDguNjEgOC42MSAwIDAwNCAxYzYuMzQgMCAxMS40OC03LjE4IDExLjQ4LTE2LjA1YTIwLjI4IDIwLjI4IDAgMDAtMi40NS05LjcyelwiXHJcbiAgICAgICAgZmlsbD1cIiNmMmYyZjJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNjUwLjQyIDEwMC43YTE3IDE3IDAgMDAtOS44MyAxLjA3IDE0LjUyIDE0LjUyIDAgMDEtMTEuODEgMCAxNi41OCAxNi41OCAwIDAwLTEzLjkuMjcgOC41NSA4LjU1IDAgMDEtNCAxYy01LjY0IDAtMTAuMzItNS42Ny0xMS4zLTEzLjE1YTEwLjkzIDEwLjkzIDAgMDAyLjgyLTNjMy4zLTUuMzIgOC40Mi04LjczIDE0LjE2LTguNzNzMTAuNzkgMy4zNyAxNC4wOSA4LjYzYTEwLjg1IDEwLjg1IDAgMDA5LjM2IDUuMTRoLjE1YzQuNDktLjA3IDguMzQgMy41MyAxMC4yNiA4Ljc3elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4wM31cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEwMDQuNTcgMzguMjFsLTkuMSA1Ljc3IDUuNTMtMTAuMDVhOSA5IDAgMDAtNS41MS0yaC0uMTRhMTAuNzkgMTAuNzkgMCAwMS0xLjg5LS4xNGwtMy4wOSAyIDEuMzMtMi40MWExMSAxMSAwIDAxLTUuNC00LjA5bC01LjUyIDMuNSAzLjQ5LTYuMzRhMTYuMTcgMTYuMTcgMCAwMC0xMi4zNy02LjI2Yy01Ljc1IDAtMTAuODYgMy40Mi0xNC4xNiA4Ljc0YTEwLjU3IDEwLjU3IDAgMDEtOS4zNiA1aC0uMzFjLTYuMzQgMC0xMS40OCA3LjE5LTExLjQ4IDE2czUuMTQgMTYuMDUgMTEuNDggMTYuMDVhOC42MiA4LjYyIDAgMDA0LTEgMTYuNTYgMTYuNTYgMCAwMTEzLjg5LS4yNyAxNC41MiAxNC41MiAwIDAwMTEuODEgMCAxNi41OCAxNi41OCAwIDAxMTMuNzcuMjcgOC42MSA4LjYxIDAgMDA0IDFjNi4zNCAwIDExLjQ4LTcuMTggMTEuNDgtMTYuMDVhMjAuMjggMjAuMjggMCAwMC0yLjQ1LTkuNzJ6XCJcclxuICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05ODcuNDIgNjEuN2ExNyAxNyAwIDAwLTkuODMgMS4wNyAxNC41MiAxNC41MiAwIDAxLTExLjgxIDAgMTYuNTggMTYuNTggMCAwMC0xMy45LjI3IDguNTUgOC41NSAwIDAxLTQgMWMtNS42NCAwLTEwLjMyLTUuNjctMTEuMy0xMy4xNWExMC45MyAxMC45MyAwIDAwMi44Mi0zYzMuMy01LjMyIDguNDItOC43MyAxNC4xNi04LjczczEwLjc5IDMuMzcgMTQuMDkgOC42M2ExMC44NSAxMC44NSAwIDAwOS4zNiA1LjE0aC4xNWM0LjQ5LS4wNyA4LjM0IDMuNTMgMTAuMjYgOC43N3pcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMDN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzkuODQgMTMyLjYxbDE0LjY2IDkuMzItOC44OC0xNi4xNWExNC40OCAxNC40OCAwIDAxOC44NS0zLjE1aC4yM2ExNy4wOCAxNy4wOCAwIDAwMy0uMjJsNC45NSAzLjE0LTIuMTUtMy44NmExNy43OCAxNy43OCAwIDAwOC42Ny02LjU4bDguODcgNS42Mi01LjU0LTEwLjE5YzUuMTktNi4yMiAxMi4xOC0xMCAxOS44Ny0xMCA5LjIzIDAgMTcuNDQgNS40OCAyMi43NSAxNGExNyAxNyAwIDAwMTUgOC4xMWguNWMxMC4xOCAwIDE4LjQzIDExLjU0IDE4LjQzIDI1Ljc4cy04LjI1IDI1Ljc5LTE4LjQzIDI1Ljc5YTEzLjg2IDEzLjg2IDAgMDEtNi40My0xLjYxIDI2LjU5IDI2LjU5IDAgMDAtMjIuMzEtLjQzIDIzLjI4IDIzLjI4IDAgMDEtMTkgMCAyNi42NCAyNi42NCAwIDAwLTIyLjEyLjQzIDEzLjkgMTMuOSAwIDAxLTYuMzUgMS41N2MtMTAuMTkgMC0xOC40NC0xMS41NC0xOC40NC0yNS43OWEzMi43OCAzMi43OCAwIDAxMy44Ny0xNS43OHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgwNy4zOSAxNzAuMzhhMjcuMzYgMjcuMzYgMCAwMTE1LjggMS43MiAyMy4yOCAyMy4yOCAwIDAwMTkgMCAyNi42MSAyNi42MSAwIDAxMjIuMzIuNDMgMTMuODIgMTMuODIgMCAwMDYuNDIgMS42MWM5LjA1IDAgMTYuNTctOS4xMSAxOC4xNC0yMS4xM2ExNy40NCAxNy40NCAwIDAxLTQuNTItNC44OGMtNS4zMS04LjU0LTEzLjUyLTE0LTIyLjc1LTE0cy0xNy4zMyA1LjQyLTIyLjY0IDEzLjg4YTE3LjQ0IDE3LjQ0IDAgMDEtMTUgOC4yNWgtLjIzYy03LjI2LS4wNy0xMy41IDUuNzEtMTYuNTQgMTQuMTJ6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjAzfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZWxsaXBzZSBjeD17NTg4LjV9IGN5PXs2MjIuMjJ9IHJ4PXs1ODguNX0gcnk9ezIxfSBmaWxsPVwiIzNmM2Q1NlwiIC8+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17MTcxLjV9XHJcbiAgICAgICAgeT17MTU1Ljk3fVxyXG4gICAgICAgIHdpZHRoPXs4MzR9XHJcbiAgICAgICAgaGVpZ2h0PXs0NTZ9XHJcbiAgICAgICAgcng9ezIwLjQyfVxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEwMDUuNSAxNzYuMzl2MTEuNThoLTgzNHYtMTEuNThhMjAuNDIgMjAuNDIgMCAwMTIwLjQyLTIwLjQyaDc5My4xNmEyMC40MiAyMC40MiAwIDAxMjAuNDIgMjAuNDJ6XCJcclxuICAgICAgICBmaWxsPVwiIzNmM2Q1NlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezE5M30gY3k9ezE3Mi40N30gcj17Nn0gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsyMDh9IGN5PXsxNzIuNDd9IHI9ezZ9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MjIzfSBjeT17MTcyLjQ3fSByPXs2fSBmaWxsPVwiIzY3NzVlZVwiIC8+XHJcbiAgICAgIDxyZWN0IHg9ezI5OC41fSB5PXsyNDAuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0MTAuNX1cclxuICAgICAgICB5PXsyNDAuOTd9XHJcbiAgICAgICAgd2lkdGg9ezk2fVxyXG4gICAgICAgIGhlaWdodD17Nzh9XHJcbiAgICAgICAgcng9ezkuMjl9XHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdCB4PXs1MjIuNX0geT17MjQwLjk3fSB3aWR0aD17OTZ9IGhlaWdodD17Nzh9IHJ4PXs5LjI5fSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9ezYzNC41fSB5PXsyNDAuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs3NDYuNX1cclxuICAgICAgICB5PXsyNDAuOTd9XHJcbiAgICAgICAgd2lkdGg9ezk2fVxyXG4gICAgICAgIGhlaWdodD17Nzh9XHJcbiAgICAgICAgcng9ezkuMjl9XHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdCB4PXsyOTguNX0geT17MzcxLjk3fSB3aWR0aD17OTZ9IGhlaWdodD17Nzh9IHJ4PXs5LjI5fSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9ezQxMC41fSB5PXszNzEuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs1MjIuNX1cclxuICAgICAgICB5PXszNzEuOTd9XHJcbiAgICAgICAgd2lkdGg9ezk2fVxyXG4gICAgICAgIGhlaWdodD17Nzh9XHJcbiAgICAgICAgcng9ezkuMjl9XHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdCB4PXs2MzQuNX0geT17MzcxLjk3fSB3aWR0aD17OTZ9IGhlaWdodD17Nzh9IHJ4PXs5LjI5fSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9ezc0Ni41fSB5PXszNzEuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3QgeD17Mjk4LjV9IHk9ezUwMi45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cmVjdCB4PXs0MTAuNX0geT17NTAyLjk3fSB3aWR0aD17OTZ9IGhlaWdodD17Nzh9IHJ4PXs5LjI5fSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9ezUyMi41fSB5PXs1MDIuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs2MzQuNX1cclxuICAgICAgICB5PXs1MDIuOTd9XHJcbiAgICAgICAgd2lkdGg9ezk2fVxyXG4gICAgICAgIGhlaWdodD17Nzh9XHJcbiAgICAgICAgcng9ezkuMjl9XHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuM31cclxuICAgICAgLz5cclxuICAgICAgPHJlY3QgeD17NzQ2LjV9IHk9ezUwMi45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNTI4LjcyIDIyNi42MWwtNS4wNi01LjA5YTIuNjggMi42OCAwIDAwLTMuODEgMGwtMzEuNzYgMzEuNDktMTMuNDMtMTMuNTRhMi42NiAyLjY2IDAgMDAtMy43OCAwbC01LjExIDUuMDVhMi43MiAyLjcyIDAgMDAwIDMuODJsMjAuMzkgMjAuNTVhMi43MiAyLjcyIDAgMDAzLjgyIDBsMzguNzQtMzguNDZhMi42OCAyLjY4IDAgMDAwLTMuODJ6bTM0MCAwbC01LjA2LTUuMDlhMi42OCAyLjY4IDAgMDAtMy44MSAwbC0zMS43NiAzMS40OS0xMy40My0xMy41NGEyLjY2IDIuNjYgMCAwMC0zLjc4IDBsLTUuMTEgNS4wNWEyLjcyIDIuNzIgMCAwMDAgMy44MmwyMC4zOSAyMC41NWEyLjcyIDIuNzIgMCAwMDMuODIgMGwzOC43NC0zOC40NmEyLjY4IDIuNjggMCAwMDAtMy44MnptLTIyOCAxMzBsLTUuMDYtNS4wOWEyLjY4IDIuNjggMCAwMC0zLjgxIDBsLTMxLjc2IDMxLjQ5LTEzLjQzLTEzLjU0YTIuNjYgMi42NiAwIDAwLTMuNzggMGwtNS4xMSA1LjA1YTIuNzIgMi43MiAwIDAwMCAzLjgybDIwLjM5IDIwLjU1YTIuNzIgMi43MiAwIDAwMy44MiAwbDM4Ljc0LTM4LjQ2YTIuNjggMi42OCAwIDAwMC0zLjgyem0xMTEgMTM2bC01LjA2LTUuMDlhMi42OCAyLjY4IDAgMDAtMy44MSAwbC0zMS43NiAzMS40OS0xMy40My0xMy41NGEyLjY2IDIuNjYgMCAwMC0zLjc4IDBsLTUuMTEgNWEyLjcyIDIuNzIgMCAwMDAgMy44MmwyMC4zOSAyMC41NWEyLjcyIDIuNzIgMCAwMDMuODIgMGwzOC43NC0zOC40NmEyLjY4IDIuNjggMCAwMDAtMy43N3pcIlxyXG4gICAgICAgIGZpbGw9XCIjM2FjYzZjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEwMTIuNCA2MTguMzljLTMtNS41MS40LTEyLjI3IDQuMjktMTcuMThzOC42MS0xMCA4LjUxLTE2LjI5Yy0uMTUtOS05LjctMTQuMzItMTcuMzMtMTkuMDlhODQgODQgMCAwMS0xNS41Ni0xMi41MSAyMi44IDIyLjggMCAwMS00Ljc4LTYuNGMtMS41OC0zLjUyLTEuNTQtNy41Mi0xLjQ0LTExLjM3cS41MS0xOS4yNiAxLjkxLTM4LjQ5XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiIzNmM2Q1NlwiXHJcbiAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD17MTB9XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05NzMuNSA0OTYuMzZhMTQgMTQgMCAwMTctMTEuNWwzLjE0IDYuMjItLjEtNy41M2ExNC4yMiAxNC4yMiAwIDAxNC42My0uNTYgMTQgMTQgMCAxMS0xNC42NyAxMy4zN3ptMjUgOTQuOTlhMTQgMTQgMCAxMC0uNjgtMTEuM2w4Ljc3IDcuMTMtOS42NS0yLjIzYTE0IDE0IDAgMDAxLjU2IDYuNHptNy0yNy4yNWExNCAxNCAwIDAwNC40LTI3LjQ5bC4wOCA1Ljc4LTMuMTgtNi4yOWExNCAxNCAwIDAwLTE0LjY3IDEzLjM2IDEzLjg0IDEzLjg0IDAgMDAuNiA0Ljc5IDE0IDE0IDAgMDAxMi43NyA5Ljg1em0tMzQuMTItMjIuNjdhMTQgMTQgMCAxMC02LjIxLTI2LjI3bDIuNDggNi44LTUuMS00LjlhMTQgMTQgMCAwMC00LjUzIDkuNjkgMTMuNzkgMTMuNzkgMCAwMC4zNSAzLjg3IDE0IDE0IDAgMDAxMy4wMSAxMC44MXpcIlxyXG4gICAgICAgIGZpbGw9XCIjNTdiODk0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTk3NS4zOCA1MDAuMWMzLjI0LjM1IDYuMzkgMS4zNiA5LjY0IDEuNTZzNi44Mi0uNTcgOC44OC0zLjFjMS4xLTEuMzYgMS42Ni0zLjA4IDIuNTktNC41N2ExMCAxMCAwIDAxMy41NC0zLjMzIDE0IDE0IDAgMTEtMjYuMjQgOS4zMnEuOC4wMyAxLjU5LjEyem0tNCA0MS4zM2ExNCAxNCAwIDAwMTMuMzUtMjAgMTAuMzcgMTAuMzcgMCAwMC0yLjgyIDIuODJjLTEgMS41MS0xLjYxIDMuMjYtMi43OCA0LjY0LTIuMTkgMi41Ny01LjkyIDMuNDEtOS4zMSAzLjI2cy02LjY2LTEuMTItMTAtMS40M2MtLjQ3IDAtLjk0LS4wNy0xLjQyLS4wOGExNCAxNCAwIDAwMTIuOTggMTAuNzl6bTM0LjEyIDIyLjY3YTE0IDE0IDAgMDAxMy40Ni0xOS43NiAxMS40OCAxMS40OCAwIDAwLTMgMi44NWMtMS4wOSAxLjU0LTEuNzcgMy4zMS0zIDQuNzMtMi4zNyAyLjY0LTYuMzUgMy41Ny05LjkzIDMuNDlzLTYuODMtLjkzLTEwLjI4LTEuMmExNCAxNCAwIDAwMTIuNzUgOS44OXptLTcgMjcuMjVhMTQuMDE3IDE0LjAxNyAwIDAwMjUuNTktMTEuNDUgMTMuNTkgMTMuNTkgMCAwMC0zLjA4IDIuNzVjLTEuMzQgMS42Mi0yLjIyIDMuNDctMy43NiA1LTIuODcgMi44Mi03LjUgNC0xMS42MyA0LjA5YTYwIDYwIDAgMDEtNy4xMi0uMzl6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xMDMzLjU3IDYxMi4wNHMtMTEuMDgtLjM0LTE0LjQyLTIuNzItMTctNS4yMS0xNy44Ni0xLjQtMTYuNjUgMTktNC4xNSAxOS4wNiAyOS4wNi0yIDMyLjQtNCA0LjAzLTEwLjk0IDQuMDMtMTAuOTR6XCJcclxuICAgICAgICBmaWxsPVwiIzY1NjM4MFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05OTYuOTIgNjI1LjY2YzEyLjUxLjEgMjkuMDYtMS45NSAzMi4zOS00IDIuNTQtMS41NSAzLjU1LTcuMDkgMy44OS05LjY1aC4zN3MtLjcgOC45NC00IDExLTE5Ljg5IDQuMDgtMzIuNCA0Yy0zLjYxIDAtNC44NS0xLjMxLTQuNzgtMy4yMS40NyAxLjEyIDEuODQgMS44MSA0LjUzIDEuODZ6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xODQuMjkgNjEzLjQ3Yy00LjM5LTguMTIuNTktMTguMDggNi4zMS0yNS4zM3MxMi43LTE0Ljc4IDEyLjU2LTI0Yy0uMjItMTMuMjctMTQuMy0yMS4xLTI1LjU2LTI4LjE0YTEyNC42MSAxMjQuNjEgMCAwMS0yMi45NC0xOC40NCAzMy43OSAzMy43OSAwIDAxLTctOS40NGMtMi4zMy01LjE5LTIuMjYtMTEuMDktMi4xMS0xNi43OHEuNzItMjguNCAyLjgtNTYuNzVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2U9XCIjM2YzZDU2XCJcclxuICAgICAgICBzdHJva2VNaXRlcmxpbWl0PXsxMH1cclxuICAgICAgICBzdHJva2VXaWR0aD17NH1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEyNi45MSA0MzMuNTRhMjAuNjggMjAuNjggMCAwMTEwLjMzLTE3bDQuNjQgOS4xNy0uMTQtMTEuMWEyMC43IDIwLjcgMCAxMS0xNC44MyAxOC44OXptMzYuOTEgMTQwLjA3YTIwLjY5IDIwLjY5IDAgMTAtMS0xNi42NmwxMi45MiAxMC41MS0xNC4yNC0zLjI5YTIwLjYxIDIwLjYxIDAgMDAyLjMyIDkuNDR6bTEwLjIyLTQwLjE4YTIwLjcgMjAuNyAwIDAwNi41Ni00MC42bC4xMSA4LjUyLTQuNjktOS4yN2gtLjA1YTIwLjcgMjAuNyAwIDEwLTEuOTMgNDEuMzV6TTEyMy44IDUwMGEyMC43MSAyMC43MSAwIDAwMjEuNjQtMTkuNzEgMjAuNDQgMjAuNDQgMCAwMC0yLTkuODEgMjAuNjcgMjAuNjcgMCAwMC0yOC44My05LjIxbDMuNjUgMTAtNy41Mi03LjIyYTIwLjcgMjAuNyAwIDAwMTMgMzUuOTN6XCJcclxuICAgICAgICBmaWxsPVwiIzU3Yjg5NFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xMjkuNyA0MzkuMDVjNC43Ny41MyA5LjQyIDIgMTQuMjEgMi4zMXMxMC4wNi0uODUgMTMuMDktNC41OGMxLjYzLTIgMi40NS00LjU0IDMuODMtNi43M2ExNC43NyAxNC43NyAwIDAxNS4yMS00LjkxIDIwLjcgMjAuNyAwIDExLTM4LjY5IDEzLjc0Yy43OC4wMyAxLjU3LjA5IDIuMzUuMTd6TTEyMy44IDUwMGEyMC43MSAyMC43MSAwIDAwMjEuNjQtMTkuNzEgMjAuNDQgMjAuNDQgMCAwMC0yLTkuODEgMTUuMzkgMTUuMzkgMCAwMC00LjE2IDQuMTZjLTEuNDcgMi4yMy0yLjM3IDQuOC00LjEgNi44NC0zLjIyIDMuNzktOC43MyA1LTEzLjcyIDQuOHMtOS44Mi0xLjY0LTE0Ljc5LTIuMWMtLjY5LS4wNi0xLjM5LS4xMS0yLjA5LS4xM0EyMC42OSAyMC42OSAwIDAwMTIzLjggNTAwem01MC4yNCAzMy40M2EyMC42OSAyMC42OSAwIDAwMTkuODUtMjkuMTQgMTYuNjkgMTYuNjkgMCAwMC00LjM3IDQuMjFjLTEuNjEgMi4yNy0yLjYxIDQuODgtNC41IDctMy40OSAzLjg5LTkuMzYgNS4yNi0xNC42NSA1LjE0LTUuMTItLjEyLTEwLjA2LTEuMzctMTUuMTUtMS43NmEyMC43MSAyMC43MSAwIDAwMTguODIgMTQuNTV6bS0xMC4yMiA0MC4xOGEyMC43IDIwLjcgMCAwMDM3LjczLTE2Ljg5IDIwLjkgMjAuOSAwIDAwLTQuNTUgNGMtMiAyLjQtMy4yNiA1LjEyLTUuNTQgNy4zNi00LjIzIDQuMTUtMTEuMDYgNS44Ni0xNy4xNCA2YTg5LjA2IDg5LjA2IDAgMDEtMTAuNS0uNDd6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yMTUuNSA2MDQuMTJzLTE2LjMzLS41LTIxLjI2LTQtMjUuMTItNy42OS0yNi4zNC0yLjA3LTI0LjU1IDI4LTYuMTEgMjguMTEgNDIuODUtMi44NyA0Ny43Ni01Ljg3IDUuOTUtMTYuMTcgNS45NS0xNi4xN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjNjU2MzgwXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE2MS41IDYyNC4xOWMxOC40NC4xNSA0Mi44NS0yLjg3IDQ3Ljc2LTUuODYgMy43NC0yLjI4IDUuMjQtMTAuNDYgNS43My0xNC4yM2guNTVzLTEgMTMuMTctNS45NSAxNi4xNi0yOS4zMiA2LTQ3Ljc2IDUuODdjLTUuMzIgMC03LjE2LTEuOTQtNy4wNi00Ljc0LjczIDEuNzEgMi43MyAyLjc3IDYuNzMgMi44elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4yfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODYxLjI2IDU2My42MWE0LjgzIDQuODMgMCAwMC0uMzIgMS4zMWMtMS41OSAxMC40Ny0xMC43NCAxOC4yLTE0LjA4IDI4LjI1YTI3LjEgMjcuMSAwIDAwMS4xOCAxOS44NyA2LjU3IDYuNTcgMCAwMS45MSAyLjg3YzAgMS0uOCAyLjA5LTEuODEgMi0yLjQyLS4xNi00LjMzLTItNi4zNS0zLjNhMjIuNjEgMjIuNjEgMCAwMS02LjQ2LTYgMTEuMTggMTEuMTggMCAwMS0xLjkxLTguNDNjMS4yLTUuNDYgNS4zNy0xMC4zMyA2LjY3LTE1Ljc3bDMuNDEtMTQuMTFhMjIuMDcgMjIuMDcgMCAwMTIuOC03LjUzIDQuNjUgNC42NSAwIDAxMi4zNi0yIDUuNTggNS41OCAwIDAxMS43OC0uMTRjMy45NS4xNyA4LjA2IDEuNjUgMTEuODIgMi45OHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZjMWM3XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg0Ny4yNSA2MTEuMzhhMS44OSAxLjg5IDAgMDExLjA4LjA4IDIuNjggMi42OCAwIDAxMSAxLjI4IDExLjcyIDExLjcyIDAgMDA0LjcxIDQuNzMgMTMuNjMgMTMuNjMgMCAwMTIuMyAxLjMgMi42NyAyLjY3IDAgMDExLjExIDIuMjhjLS4xNiAxLjMxLTEuNTkgMi0yLjg1IDIuMzlhMjEuMzggMjEuMzggMCAwMS04LjM0LjczIDcuMzEgNy4zMSAwIDAxLTMtLjg0IDguODcgOC44NyAwIDAxLTIuMzEtMi4zNCA1OCA1OCAwIDAwLTcuNC04LjM5IDMyLjQgMzIuNCAwIDAxLTMuODgtMy42MSA2LjQ0IDYuNDQgMCAwMS0xLjYzLTQuODhjLjM5LTIuNiAyLjg1LTQuMyA0LjQtNi40MyAyLjQ5IDMuMiA1IDYuNDUgNi41MiAxMC4yMWEyOS4zNSAyOS4zNSAwIDAwMS44NiA0LjM5Yy43MSAxLjE3IDEuNzMgMi41MiAzIDEuNzZzMS41OC0yLjM0IDMuNDMtMi42NnpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmY2NTg0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg3Ny4zMSA0ODYuODhhMTMuMTYgMTMuMTYgMCAwMS44OSA1LjkybC0uMDkgMTQuOTNhNjAgNjAgMCAwMS0uNDYgOC42OWMtLjc5IDUuMTktMi45MiAxMC4xLTMuODUgMTUuMjctLjg4IDQuODUtLjcxIDkuODktMi4xNCAxNC42MS0yLjIyIDcuMzEtOC4xIDEzLjEtMTAuMTcgMjAuNDZhMi4zMiAyLjMyIDAgMDEtLjU5IDEuMTkgMS43MSAxLjcxIDAgMDEtLjg0LjM2IDguOTMgOC45MyAwIDAxLTQuODEtLjlsLTEwLjc1LTQuMjJjLS43NC4zMi0xLjI1LS41My0xLjIxLTEuMzVhMy45MSAzLjkxIDAgMDExLjA3LTIuMTMgMzUuNzUgMzUuNzUgMCAwMDMuNDYtNS4zMyA0Ny44OSA0Ny44OSAwIDAwNS0xOS4yOSAxNDIuNTkgMTQyLjU5IDAgMDAtLjU5LTIwbC0xLjEtMTQuNDJjLS4xNy0yLjI5LS4zLTQuNzcgMS02LjY4czMuNTEtMi43IDUuNjQtMy4zNmE5MS42OCA5MS42OCAwIDAxMTkuNTQtMy43NXpcIlxyXG4gICAgICAgIGZpbGw9XCIjM2MzNTRjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg3Ny4zMSA0ODYuODhhMTMuMTYgMTMuMTYgMCAwMS44OSA1LjkybC0uMDkgMTQuOTNhNjAgNjAgMCAwMS0uNDYgOC42OWMtLjc5IDUuMTktMi45MiAxMC4xLTMuODUgMTUuMjctLjg4IDQuODUtLjcxIDkuODktMi4xNCAxNC42MS0yLjIyIDcuMzEtOC4xIDEzLjEtMTAuMTcgMjAuNDZhMi4zMiAyLjMyIDAgMDEtLjU5IDEuMTkgMS43MSAxLjcxIDAgMDEtLjg0LjM2IDguOTMgOC45MyAwIDAxLTQuODEtLjlsLTEwLjc1LTQuMjJjLS43NC4zMi0xLjI1LS41My0xLjIxLTEuMzVhMy45MSAzLjkxIDAgMDExLjA3LTIuMTMgMzUuNzUgMzUuNzUgMCAwMDMuNDYtNS4zMyA0Ny44OSA0Ny44OSAwIDAwNS0xOS4yOSAxNDIuNTkgMTQyLjU5IDAgMDAtLjU5LTIwbC0xLjEtMTQuNDJjLS4xNy0yLjI5LS4zLTQuNzcgMS02LjY4czMuNTEtMi43IDUuNjQtMy4zNmE5MS42OCA5MS42OCAwIDAxMTkuNTQtMy43NXpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTkwMC44NSA1MDkuNWEzMS4wOSAzMS4wOSAwIDAwLTMuNTkgNi45MSAzNyAzNyAwIDAwLTEuMjEgNS42MmMtMS40IDguODMtMi44MSAxNy43NC0yLjI3IDI2LjY2YTUuNjIgNS42MiAwIDAxLTUtMS4yNCAxNC4yOSAxNC4yOSAwIDAxLTMuMjctNC4yMyA0NSA0NSAwIDAxLTIuNjktNS4zOCAzMy42OSAzMy42OSAwIDAxLTIuNTUtMTMuMTEgMi4yNiAyLjI2IDAgMDEuMTgtMS4wNyAyLjQ3IDIuNDcgMCAwMS41My0uNjNjNS44Ny01LjU2IDkuMjUtMTMuMTkgMTIuNDgtMjAuNmEzOC4xIDM4LjEgMCAwMDIuNjgtNy41N2MuNTMtMi42NC41Ny01LjU2IDIuMjQtNy42NyAxLjUtMS44OCA0LTIuNjcgNi4zNC0zYTExLjkzIDExLjkzIDAgMDE1LjEyLjIxYzEuODIuNTYgNi4xMyAyLjY5IDYuMzggNC44NHMtMy41OSA0LjktNC44NCA2LjMzYTEyMS44NiAxMjEuODYgMCAwMC0xMC41MyAxMy45M3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZjMWM3XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg5Ny4yOCA1NDguNjFjMS4yOCAyLjE1IDMuMDcgNC41NSAyLjE2IDYuODdzLTQuMjQgMi44NC02LjI0IDEuNDFhOS42MiA5LjYyIDAgMDEtMS41Ni0xLjUgMTUzLjgzIDE1My44MyAwIDAxLTE1LTE5Ljc0Yy0xLjY2LTIuNTktMy4yOC01LjM1LTMuNTYtOC40MWExLjc2IDEuNzYgMCAwMS4xNC0xIDEuOTMgMS45MyAwIDAxLjc4LS42NiAzOC44NCAzOC44NCAwIDAxOC42Ni0zLjYgMTguMzcgMTguMzcgMCAwMDIuNTYgOS43NSA0Ni41NiA0Ni41NiAwIDAxMy4zIDYuNjhjLjY4IDEuNjggMS4zOCAxLjgxIDMuMTMgMS44MyAxLjQxIDAgMi40Mi0uMTcgMy4xIDEuMjYgMS4wOCAyLjI0IDEuMTYgNC44MSAyLjUzIDcuMTF6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmNjU4NFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04NTkuOCA0NjEuNjFjMTIuODYuMiAyNS43IDEuMSAzOC41MyAybDguMzQuNTlhMzEuMTYgMzEuMTYgMCAwMTcuMjcgMS4wOCAzMS45MSAzMS45MSAwIDAxNi40NCAzLjE5IDUuNjUgNS42NSAwIDAxMS44IDEuNDQgNS4zOSA1LjM5IDAgMDEuNzYgMiAxMS4zOSAxMS4zOSAwIDAxLjQ3IDQuNjIgMTEuMjcgMTEuMjcgMCAwMS0xLjIzIDMuMTdsLTUuODQgMTEuNTRjLTEuODctLjYxLTMuMzItMS44My01LjE1LTIuNTVhMjUuNDEgMjUuNDEgMCAwMC02LjgyLTEuM2wtNi4wOC0uNmExLjczIDEuNzMgMCAwMS0uMTctMS4yYy01LjM0IDEuODYtMTAuNjYgMy41OS0xNiA1LjQ1LTkuOCAzLjQxLTE5LjYyIDYuODMtMjkuMDYgMTEuMTUtMS40LjY0LTMgMS4zMS00LjQzLjc3YTQuNjEgNC42MSAwIDAxLTEuMzktLjkyIDE0LjI5IDE0LjI5IDAgMDEtNC4zLTguMzcgMzEuMjIgMzEuMjIgMCAwMS4xNC05LjU1Yy45LTYuNTEgMi44Ny0xMy4zMiA3Ljg1LTE3LjYxIDIuNjMtMi4zMyA1LjM5LTQuOTkgOC44Ny00Ljl6XCJcclxuICAgICAgICBmaWxsPVwiIzNjMzU0Y1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05MTAuOTYgNDcyLjg1YTYxLjUyIDYxLjUyIDAgMDAtOC4yNiA0Ljg0IDYuNzIgNi43MiAwIDAwLTEuMDkuODkgOC4xNiA4LjE2IDAgMDAtLjY3Ljg4IDE2LjUyIDE2LjUyIDAgMDAtMi44MiA1LjYyXCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiIzAwMFwiXHJcbiAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD17MTB9XHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzc4LjYgNDU3LjI2Yy0xLjggMS41MS0yLjg2IDMuNjktNC4xMyA1LjY3LTMuMDUgNC44LTcuNDMgOC42Ni0xMC40NCAxMy40OS0xLjI5IDIuMDgtMi4zNiA0LjM4LTQuMiA2LTIuMiAyLTUuMjQgMi42OS04LjE4IDIuOTItMi42NS4xOS01LjQ1LjA2LTcuNzkgMS4zMy0yIDEuMS0zLjQgMy4wOS00LjY4IDV2LjA2YTIuMjYgMi4yNiAwIDAwMi43IDMuMzYgNDAuMjUgNDAuMjUgMCAwMTYuNjMtMS45MyA0MiA0MiAwIDAwNS45LTEuMzQgMjcuNTkgMjcuNTkgMCAwMDUuMjgtMi44MSAzNC4zMiAzNC4zMiAwIDAwNC4xNS0yLjkxYzEuNjEtMS4zNyAzLTMgNC41Mi00LjQ1YTcwLjY4IDcwLjY4IDAgMDE3LTUuMDhBNTMuNCA1My40IDAgMDA3OTEgNDU5LjQ4YTMuODggMy44OCAwIDAwLjcxLTIuMjcgNC4xMSA0LjExIDAgMDAtMS0yYy0xLjc3LTIuMjUtMy4zOC00LjA5LTUuODQtMi0xLjk0IDEuNjEtNC4zNyAyLjQtNi4yNyA0LjA1em01MC4zMS00OC43M2EzIDMgMCAwMC42NCAxLjc2Yy42Ni42NyAxLjc1LjUzIDIuNjkuNDdhOC44OSA4Ljg5IDAgMDE3LjA2IDIuNDVjMS43MSAxLjc5IDIuMzggNC4zMiAyLjc4IDYuNzdhMTIuNTggMTIuNTggMCAwMS0uMTggNi4xNiA5LjQ2IDkuNDYgMCAwMS01LjA5IDUuMTQgMjMuNzcgMjMuNzcgMCAwMS03LjE4IDEuNzYgMTcuOTMgMTcuOTMgMCAwMS02LjIgMGMtMi40My0uNTYtNC41NC0yLTYuNzMtMy4yMWEzNi44NiAzNi44NiAwIDAxLTQuNDMtMi41IDcgNyAwIDAxLTIuODktNC4wNiAyLjIgMi4yIDAgMDEuNzMtMi4zNSA0LjE2IDQuMTYgMCAwMTEuMTItLjM0IDQuNzQgNC43NCAwIDAwMy40MS0zLjM1Yy42Ny0yLjU5LS45NC01LjItMS4xLTcuODdhMy43MyAzLjczIDAgMDEuNDctMi4yMyA0LjkgNC45IDAgMDEyLjI1LTEuNmw1LTIuMjRhMjkuOTEgMjkuOTEgMCAwMTQuNzEtMi4wOWMxLjU5LS40MSAxLjcuNjkgMiAyIC4zNyAxLjc5LjcgMy41Ni45NCA1LjMzelwiXHJcbiAgICAgICAgZmlsbD1cIiNmZmMxYzdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODI4LjkxIDQwOC41M2EzIDMgMCAwMC42NCAxLjc2Yy42Ni42NyAxLjc1LjUzIDIuNjkuNDdhOC44OSA4Ljg5IDAgMDE3LjA2IDIuNDVjMS43MSAxLjc5IDIuMzggNC4zMiAyLjc4IDYuNzdhMTIuNTggMTIuNTggMCAwMS0uMTggNi4xNiA5LjQ2IDkuNDYgMCAwMS01LjA5IDUuMTQgMjMuNzcgMjMuNzcgMCAwMS03LjE4IDEuNzYgMTcuOTMgMTcuOTMgMCAwMS02LjIgMGMtMi40My0uNTYtNC41NC0yLTYuNzMtMy4yMWEzNi44NiAzNi44NiAwIDAxLTQuNDMtMi41IDcgNyAwIDAxLTIuODktNC4wNiAyLjIgMi4yIDAgMDEuNzMtMi4zNSA0LjE2IDQuMTYgMCAwMTEuMTItLjM0IDQuNzQgNC43NCAwIDAwMy40MS0zLjM1Yy42Ny0yLjU5LS45NC01LjItMS4xLTcuODdhMy43MyAzLjczIDAgMDEuNDctMi4yMyA0LjkgNC45IDAgMDEyLjI1LTEuNmw1LTIuMjRhMjkuOTEgMjkuOTEgMCAwMTQuNzEtMi4wOWMxLjU5LS40MSAxLjcuNjkgMiAyIC4zNyAxLjc5LjcgMy41Ni45NCA1LjMzelwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs4MTUuOX0gY3k9ezQwMC4yNH0gcj17MTIuNDd9IGZpbGw9XCIjZmZjMWM3XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgzMC4zOSA0MTEuNjFhMTcuMTUgMTcuMTUgMCAwMTUuODYtMS40OCA2LjkzIDYuOTMgMCAwMTUuNDYgMi4xNmMxLjE3IDEuMzcgMS41NiAzLjIyIDIuNDkgNC43NSAxLjg0IDMgNS40MyA0LjM3IDguMyA2LjQyYTYuMjYgNi4yNiAwIDAxMS43MiAxLjY4YzEgMS41Mi43MyAzLjQ3LjcxIDUuMjdhMjUuNDYgMjUuNDYgMCAwMDMuNjcgMTIuNjIgNzQuNDggNzQuNDggMCAwMDcuOSAxMC43MSAxMC42OCAxMC42OCAwIDAxMS43MiAyLjU1Yy43IDEuNjguNSAzLjcxIDEuNTQgNS4yYTE0LjUzIDE0LjUzIDAgMDAtNy4zNyAxYy0zLjYxIDEuNDktMy43OCA2Ljc3LTUuNDggMTAuMjktMy4xNCA2LjUxLTcuNSAxMi4zNC0xMS42NSAxOC4yNmEyMy4zMiAyMy4zMiAwIDAwLTIuNzYgNC41N2MtLjc0LTEuNTctLjIzLTMuNDQtLjMyLTUuMTctLjItMy44Ny0yLjQ0LTcuMzQtMy4wNy0xMS4xNmE1Mi42NyA1Mi42NyAwIDAxLS4zMy01Ljc2IDI3LjU2IDI3LjU2IDAgMDAtMS44Ny04LjUgNTQuNTcgNTQuNTcgMCAwMC00LjQ0LTguMzMgMTEuNzYgMTEuNzYgMCAwMC0zLjM1LTRjLTEuNjYtMS4wOC0zLjk1LTEuMzktNS0zLjA3YTYuNyA2LjcgMCAwMC0xLTEuNjIgMy43NCAzLjc0IDAgMDAtMS4xNi0uNTkgNTEuMDkgNTEuMDkgMCAwMS01LjkyLTMuMjhjLTItMS4wOS00LjI3LTEuOS02LjQ4LTEuNDFhODAgODAgMCAwMS0xMy44MyAxMi42OGMtMS41OCAxLjE2LTMuMjggMi4zNS00LjA2IDQuMTVhMjEuMTIgMjEuMTIgMCAwMS02LjU3LTQuOTEgMy4zMyAzLjMzIDAgMDEtLjctMWMtLjUxLTEuNDYgMS0yLjc3IDIuMi0zLjY5YTI5LjkgMjkuOSAwIDAwOS45NC0xMy4yM2MxLjI5LTMuMzkgMi4xNC03LjI5IDUuMDgtOS40MmExNy40OSAxNy40OSAwIDAwMi42My0xLjg1IDMzLjI4IDMzLjI4IDAgMDAyLTMuMTIgNS4yOSA1LjI5IDAgMDE1LjU1LTEuODggMjQuNTIgMjQuNTIgMCAwMTMuMzEgMS41OWMyLjc3IDEuMjUgNS45NSAxIDkgLjY2bDExLjcxLTEuMTlhNCA0IDAgMDAtLjg2LTMuOCAxMS42MyAxMS42MyAwIDAwLTEuNTUtMS4yMyA4LjYxIDguNjEgMCAwMS0zLjAyLTQuODd6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmNjU4NFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MjIuNSAzNzguNjlhMTAuNzggMTAuNzggMCAwMTYuMjcgNi4xNCAyNS4wNiAyNS4wNiAwIDAwMS4zMiAzLjUxIDIwLjI1IDIwLjI1IDAgMDAzLjI1IDMuNjJjMS4xMiAxLjE5IDIuMDggMi43NCAxLjgyIDQuMzUtLjEuNi0uMzYgMS4xNi0uNDQgMS43NS0uMzUgMi41OSAyLjU5IDQuMzcgMy40OSA2LjgyIDEuMTcgMy4yMi0xLjM4IDcuMDYuMTggMTAuMS41OSAxLjE0IDEuNjYgMiAyLjMzIDNzLjc0IDIuOC0uMzkgMy40MWMtMS43Ni45NS0zLjgtMS44My01LjY3LTEuMS0uNDguMTktLjg1LjYtMS4zMi44MS0xLjMxLjU5LTIuODQtLjU3LTMuMjctMS45NGExMC4yMSAxMC4yMSAwIDAxLjA4LTQuMjYgNS4xNSA1LjE1IDAgMDAtLjgtNC4wOWMtLjc2LS44Ny0yLTEuMjEtMi43OS0yLTEuNDQtMS40Ni0xLjE3LTMuODEtMS01Ljg1LjMxLTQuMTItLjQzLTguNjMtMy4zOC0xMS41M2EuNzUuNzUgMCAwMC0uNTMtLjI5Ljg1Ljg1IDAgMDAtLjUzLjMzIDI0LjkgMjQuOSAwIDAxLTQuNDggMy43MSAyLjgyIDIuODIgMCAwMS0xLjYuNThjLS41NyAwLTEuMTQtLjU4LTEtMS4xM2ExMS43NSAxMS43NSAwIDAwLTMuNzQgMi43NCAzLjkxIDMuOTEgMCAwMS0uMy0xLjcyIDE2LjEzIDE2LjEzIDAgMDEtMiAzLjA2IDI0LjkxIDI0LjkxIDAgMDAtMi4yIDIuNzIgNCA0IDAgMDAtLjU2IDMuMzNjMS4xMiAzLjIxIDYuODMgMi40NyA4LjA3IDUuNjQuMjcuNzEuMjYgMS40OS41NCAyLjE5LjU1IDEuMzYgMiAyIDMuMiAyLjlzMi4yNCAyLjQzIDEuNTIgMy43Yy0uNjMgMS4wOS0yLjEgMS4yMS0zLjMyIDEuNDlhOCA4IDAgMDAtNSAzLjc2IDQuNzIgNC43MiAwIDAxLTEuMjkgMS43NyAzLjYzIDMuNjMgMCAwMS0xLjYzLjRjLTEuNy4xNC0zLjY1LjE4LTQuODItMS0xLjU3LTEuNjUtLjgzLTQuNjUtMi40My02LjI3LS4zNy0uMzYtLjgzLS42Mi0xLjE4LTFhNC40NiA0LjQ2IDAgMDEtLjg5LTMuMzVjLjE2LTMuMzMgMS4zOS02LjU5IDEuMi05LjkyYTU2Ljc0IDU2Ljc0IDAgMDAtMS4yNy02LjU0IDE3LjYgMTcuNiAwIDAxMy41Ni0xNC4zOWMyLjcyLTMuMTkgNi4yNy00LjQ0IDEwLjI5LTUgMy41OC0uNTMgNy4wNC0xLjc4IDEwLjcxLS40NXpcIlxyXG4gICAgICAgIGZpbGw9XCIjM2MzNTRjXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50cyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDk2NS42NCA4MDAuODFcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2FcIlxyXG4gICAgICAgICAgeDE9ezQ3OC4zOH1cclxuICAgICAgICAgIHkxPXs2OTUuNzJ9XHJcbiAgICAgICAgICB4Mj17NDc4LjM4fVxyXG4gICAgICAgICAgeTI9ezMzLjJ9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiZ3JheVwiIHN0b3BPcGFjaXR5PXswLjI1fSAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjU0fSBzdG9wQ29sb3I9XCJncmF5XCIgc3RvcE9wYWNpdHk9ezAuMTJ9IC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cImdyYXlcIiBzdG9wT3BhY2l0eT17MC4xfSAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fYlwiXHJcbiAgICAgICAgICB4MT17MTgzNC4yMX1cclxuICAgICAgICAgIHkxPXs4MDYuODd9XHJcbiAgICAgICAgICB4Mj17MTgzNC4yMX1cclxuICAgICAgICAgIHkyPXsxOTQuOTh9XHJcbiAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cIm1hdHJpeCgtMSAwIDAgMSAyNzY2IDApXCJcclxuICAgICAgICAgIHhsaW5rSHJlZj1cIiNwcmVmaXhfX2FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTkwMS44OCA0NDIuNWMtMzcuMDkgNjAtMzAuMTQgMTQxLjc0LTEzLjg1IDIwNi4xOSA1LjQ1IDIxLjU4IDExLjczIDQ0LjM2IDcuMDcgNjguNTEtNS43IDI5LjUzLTI2LjQ4IDUyLjcyLTQ3LjUxIDY2LTM4LjM0IDI0LjE1LTgyLjEyIDIzLjQ4LTExNC0xLjc3LTI3LjUzLTIxLjgxLTQ1LjY2LTU5Ljg1LTczLjc3LTgwLjQ5LTQ3LTM0LjU1LTExMS41NC0xMy42MS0xNjcuNTggMTguNjgtMzkuNjMgMjIuNzktODMuMjUgNTEuNzktMTE5Ljg4IDM1LjM3LTI1Ljc3LTExLjUzLTQxLjg0LTQ0LjA2LTQ5LjM0LTc5LjQ2LTMuNjItMTcuMDktNS44MS0zNS43Ni0xNC4xMS00OC43OC00Ljk0LTcuNzQtMTEuNzMtMTIuOTItMTguNzctMTcuMTctNjQuMjUtMzguNzQtMTUxLjE4LTYuMzUtMjEzLjE0LTUwLjIyLTQxLjg1LTI5LjYyLTY1LjY0LTkwLjgtNzMuNDYtMTU2LjIyUzIuMTUgMjY3LjcyIDEwLjIgMTk4LjhjNS43My00OSAxMy40OC0xMDEuNDIgMzkuMi0xNDEuMjcgMjcuMjEtNDIuMTUgNzAuMS02MSAxMDcuMzgtNTdzNjkuNjUgMjcuNjIgOTcuNTUgNTYuNDljMzQuODcgMzYuMDggNjYuMzIgODIuMTYgMTExLjQ1IDkzLjggMzAuNzQgNy45MyA2NC4zMS0xLjI1IDk3LTYuNDQgNTQuNTgtOC42OCAxMDguNC02LjE5IDE2MS44NC0yLjkzIDUxLjE2IDMuMTIgMTAyLjYzIDcgMTUwLjMgMjUgMzMuNzMgMTIuNzUgNTkuNjIgMzkuMjkgOTEuMSA1Ni41NSAyMC41MiAxMS4yNSA0My42NyAxMi42OCA2Mi43OSAyNy42OCAyMy41NSAxOC40OCA0My45MyA1Mi41OSAzNC41IDk1LjcxLTguOTkgNDEuMDItNDEuNzUgNjQuMjctNjEuNDMgOTYuMTF6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNjY0LjQ5IDMwNi44OHMxMDEtODQuNjMgMTIzLjQ2LTEyNy4zUzgzOSAxMDAuMTQgODM5IDEwMC4xNFwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZT1cIiM1MzU0NjFcIlxyXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxyXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODI1LjcyIDE5NS41M2wtNDMuNjktOS44NXMxMC4zMSA0Ni4wOCA0My42OSA5Ljg1elwiXHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzU4Ljk2IDE0OC40OWwyNS4xNCAzNy42NXMtNDkuMTUgMy41NS0yNS4xNC0zNy42NXptODMuOTUgMTEuNjVsLTM5LjkzLTdzMjUuMDggMzguMTUgMzkuOTMgN3ptLTU5LjA5LTMzLjY1bDE5LjY3IDI1Ljc2cy0zNC44MiAzLjMtMTkuNjctMjUuNzZ6bTM5LjgxLTUuMTNzMzQgMS42MiAzOCA0Ljg3LTUuMDcgMjIuMy0xOCAxOS4xOS0yMC0yNC4wNi0yMC0yNC4wNnptLTEzLjU5LTMwLjM5czEzLjg5IDI1LjMxIDEzLjM3IDMwLjEzLTIxLjE3IDEwLjIzLTI1LjM0LTggMTEuOTctMjIuMTMgMTEuOTctMjIuMTN6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxjaXJjbGVcclxuICAgICAgICBjeD17OTYzLjc1fVxyXG4gICAgICAgIGN5PXsxNTQuMTJ9XHJcbiAgICAgICAgcj17OS40OX1cclxuICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjMgLS45NSAuOTUgLjMgNDA4LjY4IDk3Ni43OClcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZkMDM3XCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZVxyXG4gICAgICAgIGN4PXs5NDguOX1cclxuICAgICAgICBjeT17MTQ0LjQzfVxyXG4gICAgICAgIHI9ezkuNDl9XHJcbiAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC4zIC0uOTUgLjk1IC4zIDQwNy41NCA5NTUuODUpXCJcclxuICAgICAgICBmaWxsPVwiI2ZmZDAzN1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0zNDkuNDYgNjM4LjYzczE2LjIxLTQ4LjIyLTg2LjU1LTEwNi4zNWMwIDAtMTA0LjM0LTMwLjQzLTkzLjY3LTEzNC45MyAwIDAtMTIwLjI4IDg4LjEyLTM4Ljg5IDIwMC4zN3MxNTEuNjQgODcuNzUgMTUxLjY0IDg3Ljc1elwiXHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzE4LjEzIDY2MC40MXMtNTAuMTQtNTQuMTktOTguMi03NS4xNGE5NS43MSA5NS43MSAwIDAxLTI2LjExLTE3LjM5Yy0zMC42NC0yOC00NC03MC4yNS0zNi4xLTExMWwxMS41NS01OS41M1wiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZT1cIiM1MzU0NjFcIlxyXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxyXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwidXJsKCNwcmVmaXhfX2EpXCIgZD1cIk0xOTMuMDcgMzMuMmg1NzAuNjF2NjYyLjUzSDE5My4wN3pcIiAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2Y3ZjdmZFwiIGQ9XCJNMTk5LjcyIDQwLjkxaDU1Ny4zMlY2ODhIMTk5LjcyelwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAgIGQ9XCJNMjMzLjM4IDExMy44NWgxNDAuODl2MTEuMjJIMjMzLjM4em0wIDI3LjQzaDI0MC42M3YxMS4yMkgyMzMuMzh6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTYzMC4zNiAxMDMuMTNoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03MjkuODIgMTAzLjYzdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTUyOS4zNyAxMDMuMTNoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02MjguODIgMTAzLjYzdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTYzMC4zNiAxOTAuNDFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03MjkuODIgMTkwLjkxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTUyOS4zNyAxOTAuNDFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02MjguODIgMTkwLjkxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTQyOC4zOCAxOTAuNDFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01MjcuODcgMTkwLjkxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTMyNy4zOSAxOTAuNDFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00MjYuODggMTkwLjkxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIyNi40IDE5MC40MWg5OS45OXY4Ni4yOEgyMjYuNHpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzI1Ljg5IDE5MC45MXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02MzAuMzYgMjc3LjY4aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzI5LjgyIDI3OC4xOXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk01MjkuMzcgMjc3LjY4aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNjI4LjgyIDI3OC4xOXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk00MjguMzggMjc3LjY4aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNTI3Ljg3IDI3OC4xOXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0zMjcuMzkgMjc3LjY4aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDI2Ljg4IDI3OC4xOXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0yMjYuNCAyNzcuNjhoOTkuOTl2ODYuMjhIMjI2LjR6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTMyNS44OSAyNzguMTl2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjMwLjM2IDM2NC45Nmg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcyOS44MiAzNjUuNDZ2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNTI5LjM3IDM2NC45Nmg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTYyOC44MiAzNjUuNDZ2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNDI4LjM4IDM2NC45Nmg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTUyNy44NyAzNjUuNDZ2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzI3LjM5IDM2NC45Nmg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQyNi44OCAzNjUuNDZ2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMjI2LjQgMzY0Ljk2aDk5Ljk5djg2LjI4SDIyNi40elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0zMjUuODkgMzY1LjQ2djg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTYzMC4zNiA0NTIuMjNoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03MjkuODIgNDUyLjc0djg1LjI3aC05OXYtODUuMjdoOTltMS0xaC0xMDF2ODcuMjdoMTAxdi04Ny4yN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTUyOS4zNyA0NTIuMjNoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02MjguODIgNDUyLjc0djg1LjI3aC05OXYtODUuMjdoOTltMS0xaC0xMDF2ODcuMjdoMTAxdi04Ny4yN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTQyOC4zOCA0NTIuMjNoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01MjcuODcgNDUyLjc0djg1LjI3aC05OXYtODUuMjdoOTltMS0xaC0xMDF2ODcuMjdoMTAxdi04Ny4yN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTMyNy4zOSA0NTIuMjNoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00MjYuODggNDUyLjc0djg1LjI3aC05OXYtODUuMjdoOTltMS0xaC0xMDF2ODcuMjdoMTAxdi04Ny4yN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIyNi40IDQ1Mi4yM2g5OS45OXY4Ni4yOEgyMjYuNHpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzI1Ljg5IDQ1Mi43NHY4NS4yN2gtOTl2LTg1LjI3aDk5bTEtMWgtMTAxdjg3LjI3aDEwMXYtODcuMjd6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02MzAuMzYgNTM5LjUxaDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzI5LjgyIDU0MC4wMXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk01MjkuMzcgNTM5LjUxaDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNjI4LjgyIDU0MC4wMXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk00MjguMzggNTM5LjUxaDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNTI3Ljg3IDU0MC4wMXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0zMjcuMzkgNTM5LjUxaDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDI2Ljg4IDU0MC4wMXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0yMjYuNCA1MzkuNTFoOTkuOTl2ODYuMjhIMjI2LjR6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTMyNS44OSA1NDAuMDF2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDM2LjQyIDcwNC44OWMyLjg2LTIuMTcgNS41NS00LjczIDYuMzgtNy44NWE2LjY0IDYuNjQgMCAwMC00LjQ2LThjLTQuMDktMS4yOC04LjQ2IDEtMTEuNzggMy4zN3MtNy4xMSA1LTExLjQ1IDQuNTFjNC40OS0zLjI1IDYuNjMtOC41MiA1LjM5LTEzLjMxYTUuMTYgNS4xNiAwIDAwLTEuNS0yLjdjLTIuMjctMi02LjM5LTEuMTMtOS4xMS40My04LjY1IDUtMTEuMDYgMTQuNTUtMTEuMTEgMjMuMTgtLjg3LTMuMTEtLjE0LTYuMzUtLjE2LTkuNTVzLTEuMDktNi43My00LjM5LTguNDVhMTUuNzEgMTUuNzEgMCAwMC02LjctMS4yOWMtMy44OS0uMTItOC4yMi4yLTEwLjg3IDIuNTItMy4zIDIuODgtMi40NCA3LjcyLjQzIDEwLjg5czcuMjQgNS4xNiAxMS4yNSA3LjM1YzMuMDYgMS42NyA2LjE2IDMuNjIgOCA2LjI2YTUuNjggNS42OCAwIDAxLjYgMS4xMmgyNC4zN2E3MC4wNyA3MC4wNyAwIDAwMTUuMTEtOC40OHpcIlxyXG4gICAgICAgIGZpbGw9XCIjNjc3NWVlXCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MjM5LjU5fSBjeT17MjAzLjUzfSByPXs1Ljd9IGZpbGw9XCIjZmM2NjgxXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MjUzLjgzfSBjeT17MjAzLjUzfSByPXs1Ljd9IGZpbGw9XCIjZmZkMDM3XCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NDQwLjg3fSBjeT17Mjg4LjAzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NDU1LjEyfSBjeT17Mjg4LjAzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NzQ1LjY0fSBjeT17NDUxLjMzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NzQ4LjQ5fSBjeT17NDQ0LjY5fSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NzUxLjM0fSBjeT17NDM4Ljk5fSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NjQ1fSBjeT17MjAzLjUzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NjU5LjI0fSBjeT17MjAzLjUzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NjczLjQ5fSBjeT17MjAzLjUzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17Njg3LjczfSBjeT17MjAzLjUzfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NjQ1fSBjeT17MzgwLjEyfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NjU5LjI0fSBjeT17MzgwLjEyfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17NjczLjQ5fSBjeT17MzgwLjEyfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17Njg3LjczfSBjeT17MzgwLjEyfSByPXs1Ljd9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MzQwLjIzfSBjeT17Mjg4LjAzfSByPXs1Ljd9IGZpbGw9XCIjZmZkMDM3XCIgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MjM5LjU5fSBjeT17Mzc0LjQzfSByPXs1Ljd9IGZpbGw9XCIjZmM2NjgxXCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg1Ny45IDUxNS4yMmM2LjI1IDMuNjkgMTYgNi4wOSAyOC4zNS0xLjg0bC0uMTIgMTcuNTZjLjg4IDEyIDE1Ljc3IDU1LjkxIDE1Ljc3IDU1LjkxbDEwLjUgMzYuMWEyODIuNDcgMjgyLjQ3IDAgMDExMS41NCA3OC41M2MwIDguODEuODIgMTcuODkgMy4zNSAyNC43MiA1LjU5IDE1LjExLTIuMiAzNC41OC01LjU4IDQxLjgzYTE3NS42OCAxNzUuNjggMCAwMS0xNy4zMyA0Ljg4IDExLjg0IDExLjg0IDAgMDAtMS41NS40N2wtLjA3LS4xUzg4NyA3NzkuNTMgODgwIDc3OC42N2MtNS4yMi0uNjQtOC40OSA1Ljg3LTQuNCAxMC42Ni0zLjg2IDEtNy44MiAxLjcxLTEwLjQ5IDEuMzgtNy0uODYtMTAuNTEgMTEuMTggMi42MyAxNC42MnM4Ny41OSAwIDg3LjU5IDBhMTAuNTYgMTAuNTYgMCAwMDUuNi0xMS42NmM1LjcyLS4yMiA5LjI5LS4zOSA5LjI5LS4zOXMxMy4xNC02IDAtMjIuMzdsLS43LjUzLTIuODEtOC4yN1Y3NTJzMTYuNjQtODAgMTEuMzktODkuNDYtNy44OC01Ny42My03Ljg4LTU3LjYzbDEuNzgtNTIuNDdjNC43NS05LjggNy4xOC0yNS4xNiA4LjQxLTM3LjE3YTc4Ljg3IDc4Ljg3IDAgMDAzLjM2LTE3LjYzYy4yMS0yLjgyLjM4LTUuNzguNDktOC44NUE1OS4zMyA1OS4zMyAwIDAwOTgxIDQ2OWM1LTcuMiAxMy4xMy0xOC4zMyAxOS44NC0yNC45MSAxMC41MS0xMC4zMiA3Ljg4LTIyLjM3IDcuODgtMjIuMzdsLTQuMzgtMjkuMjUtMTAuNTEtNDkuODljMS4zMi0xMy44NC0xLjU3LTIxLjgxLTQuNzYtMjYuMzEuNzYtNC40NyAxLjQ3LTguOTQgMi0xMy40M2ExNzEuODcgMTcxLjg3IDAgMDAtMy4wNy01OC40OGMtMS41Mi02LjY5LTMuNTktMTMuNTUtOC4yOC0xOC42Mi01LjMxLTUuNzQtMTMuOTMtOS4yNC0xNS45MS0xNi43Ni0uNDktMS44Ny0uNTEtMy44Ni0xLjIyLTUuNjYtMS45Mi00LjkyLTgtNi43MS0xMy4zMi03LjM1LTkuNDgtMS4xNS0yMy4xOS0yLTMyLjMgMS43LTYuMzYgMi42LTE1LjEyIDkuNzYtMTguNiAxNy40NC0yIDMuNTMtMi45MyA3LjI0LTIuMDggMTAuNzNhMTQuNzEgMTQuNzEgMCAwMDEuNTEgMy42NyAzMyAzMyAwIDAwLTIuMDQgMTEuNDkgMzMuNTYgMzMuNTYgMCAwMDIxLjQyIDMxLjEzYy4yMS42Ni40IDEuMzEuNTYgMS45NWEzMy40MiAzMy40MiAwIDAxLjg2IDQuNjljLS4xNyAzLS4zNiA2LjA5LS41IDkuMTRxLS4xNS42My0uMzIgMS4yNGEyMjUuMzggMjI1LjM4IDAgMDAtMjIgMTEuMjJjNS4yNiA3Ljc0LS44OCA0MC40My0uODggNDAuNDMtMTMuMTQgNy43NC0yNi4yOCAyNy41My0xMi4yNiA0OC4xN3M2LjEzIDQzIDYuMTMgNDNsLTIuMTkgMzMuNjN2LjA2bC0uNDQgNi43M2guMTdsLS4xNyAyLjU1LjM4LjA3djIuNzRjLTYuMTUgMi4yNi0xNS4xNCA2LjgyLTIwLjUgMTUuMjVhNTMuODEgNTMuODEgMCAwMS05LjE3IDExLjI1IDYuNzYgNi43NiAwIDAwMS4wNSAxMC45N3ptMTA1Ljc2LTg5LjM2YTMyIDMyIDAgMDEzLjExLTE2LjkycTMuMDkuMDYgNi4xOS4wN2MuMjEgMS40NS40NiAyLjgzLjc2IDQuMDkgMS43OCA3LjU4LTUuMzMgMTEuMjEtMTAuMDcgMTIuNzV6XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTExNy4xOCAtNDkuNTkpXCJcclxuICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2IpXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg0OC4yMSA3MDkuNjZsMy4zNyAxMC4xMS0xMSAxMS0zNi4yNCA4LjQzLTI2LjEzLTIuNTMgMS42OS05LjI3YTExLjE4IDExLjE4IDAgMDE4LjMtOC4xN2MxMC43NC0yLjUyIDMxLjIyLTguMjggMzUuNTItMTYuMjd6XCJcclxuICAgICAgICBmaWxsPVwiI2RiOGI4YlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04NDguMjEgNzA5LjY2bDMuMzcgMTAuMTEtMTEgMTEtMzYuMjQgOC40My0yNi4xMy0yLjUzIDEuNjktOS4yN2ExMS4xOCAxMS4xOCAwIDAxOC4zLTguMTdjMTAuNzQtMi41MiAzMS4yMi04LjI4IDM1LjUyLTE2LjI3elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzg2LjY4IDczNC4xbDUuMDYtNi43NC01LjA2LTcuODFzLTE1LjE3IDYuMTItMjEuOTEgNS4yOC0xMC4xMSAxMSAyLjUzIDE0LjMzIDg0LjI4IDAgODQuMjggMCAxMi42NC01LjkgMC0yMS45MWwtMTEgOC40M3MtMTguNTQgMTAuMTEtMjcuODEgOC40M3pcIlxyXG4gICAgICAgIGZpbGw9XCIjMmUzMDM3XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc2My45MiA3NDguNDFsMjYuMTMgMi41MyAzNi4yNC04LjQzIDExLTExLS44OS0yLjY4LTEuMjYtMy43Ni0xLjI2LTMuNjYtMjQuNDQtNi43NGExNS4xNCAxNS4xNCAwIDAxLTUgNWMtNy45NCA1LjQzLTIyLjIgOS4zNS0zMC41NyAxMS4zMWE4Ljc3IDguNzcgMCAwMC0xIC4zMSAxMS4xNCAxMS4xNCAwIDAwLTcuMjYgNy44NnpcIlxyXG4gICAgICAgIGZpbGw9XCIjZGI4YjhiXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc2My45MiA3NDguNDFsMjYuMTMgMi41MyAzNi4yNC04LjQzIDExLTExLS44OS0yLjY4LTEwLjA2IDcuNzRzLTE4LjU0IDEwLjExLTI3LjgxIDguNDNoLTI2LjE4bDUuMDYtNi43NC00LjU0LTdhMTEuMTQgMTEuMTQgMCAwMC03LjI2IDcuODZ6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzIuMzUgNzQ1LjlsNS4wNi02Ljc0LTUuMDYtNy44MXMtMTUuMTcgNi4xMi0yMS45MSA1LjI4LTEwLjExIDExIDIuNTMgMTQuMzMgODQuMjggMCA4NC4yOCAwIDEyLjY0LTUuOSAwLTIxLjkxbC0xMSA4LjQzcy0xOC41NCAxMC4xMS0yNy44MSA4LjQzelwiXHJcbiAgICAgICAgZmlsbD1cIiMyZTMwMzdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzkzLjQyIDI1Ny4wN3M0MC40NiA0LjIxIDM0LjU2LTEyLjY0YTMwLjM0IDMwLjM0IDAgMDEtMS4yNS0xNC44OCA0MS4yNSA0MS4yNSAwIDAxNy4xNS0xNy4xNGwtMzcuOTMgNS45YTQ3LjUgNDcuNSAwIDAxNS4xNCAxMi4xOGM0LjUyIDE3Ljg3LTcuNjcgMjYuNTgtNy42NyAyNi41OHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZGI4YjhiXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg2Mi41MyA0NDkuMjNzLS44NCAzNi4yNC05LjI3IDUzLjk0bC0xLjY5IDUxLjQxczIuNTMgNDcuMiA3LjU5IDU2LjQ3LTExIDg3LjY1LTExIDg3LjY1djEzLjQ5cy0yNyAxMC4xMS0zNC41Ni0xLjY5bDcuNTktMTAwLjMtMy4zNy0xMzkuMDZ6XCJcclxuICAgICAgICBmaWxsPVwiIzQ3NDQ2M1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04NjIuNTMgNDQ5LjIzcy0uODQgMzYuMjQtOS4yNyA1My45NGwtMS42OSA1MS40MXMyLjUzIDQ3LjIgNy41OSA1Ni40Ny0xMSA4Ny42NS0xMSA4Ny42NXYxMy40OXMtMjcgMTAuMTEtMzQuNTYtMS42OWw3LjU5LTEwMC4zLTMuMzctMTM5LjA2elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODc5LjM5IDMzMi45Mmw1LjA2IDEzLjQ5IDQuMjEgMjguNjZhMjUuMzUgMjUuMzUgMCAwMS03LjU5IDIxLjkxYy0xMC4xMSAxMC4xMS0yMy42IDMxLjE4LTIzLjYgMzEuMThsLTE2LTQ4czE2LTIuNTMgMTMuNDktMTMuNDktMS43LTMxLjI2LTEuNy0zMS4yNnpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmM2NjgxXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg3OS4zOSAzMzIuOTJsNS4wNiAxMy40OSA0LjIxIDI4LjY2YTI1LjM1IDI1LjM1IDAgMDEtNy41OSAyMS45MWMtMTAuMTEgMTAuMTEtMjMuNiAzMS4xOC0yMy42IDMxLjE4bC0xNi00OHMxNi0yLjUzIDEzLjQ5LTEzLjQ5LTEuNy0zMS4yNi0xLjctMzEuMjZ6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjA1fVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODA0LjQ4IDcxOS42OGMxMC44MSAxNyAyNy42NCA3LjM3IDMwLjYyIDUuNDVsLTEuMjItMy43Mi0yNC40NC02Ljc0YTE1LjE0IDE1LjE0IDAgMDEtNC45NiA1LjAxelwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzcwLjY3IDQ4Mi4xYy44NCAxMS44IDE1LjE3IDU0Ljc4IDE1LjE3IDU0Ljc4bDEwLjExIDM1LjM3YTI4MS40NCAyODEuNDQgMCAwMTExLjExIDc2Ljk0YzAgOC42My43OSAxNy41MyAzLjIzIDI0LjIyIDYuNzQgMTguNTQtNi43NCA0My44My02Ljc0IDQzLjgzIDExLjggMjEuMDcgMzIgNi43NCAzMiA2Ljc0VjcxMC41czE2LTczLjMzIDExLjgtODcuNjUtNS45LTUzLjEtNS45LTUzLjF2LTcwYTc5LjM4IDc5LjM4IDAgMDAyMy4xMy01MC4zMmMuMi0yLjc2LjM2LTUuNjYuNDctOC42Ny42OC0xOS0xMi4zMi00MS4zMS0xNy40LTQ5LjI1LTEuMjItMS45Mi0yLTMtMi0zbC03NC40MiAyOS41Mi0uMTcuMDd2OS4yNXpcIlxyXG4gICAgICAgIGZpbGw9XCIjNDc0NDYzXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc5NS45NSAyMTguM2E0Ny41IDQ3LjUgMCAwMTUuMTQgMTIuMTggMzMgMzMgMCAwMDI1LjY0LS45NCA0MS4yNSA0MS4yNSAwIDAxNy4xNS0xNy4xM3pcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZSBjeD17ODEyLjgxfSBjeT17MTk4LjA2fSByPXszMi44N30gZmlsbD1cIiNkYjhiOGJcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzcwLjY3IDQyNy4zMmwuMzYuMDdjMzUuMzQgNy4yNyA3OS43MS0yOS41NyA3OS43MS0yOS41N2E0My42OCA0My42OCAwIDAxLTMuMDctNi4yN2MtMS4yMi0xLjkyLTItMy0yLTNsLTc0LjQyIDI5LjUyLS4xOSAyLjk1elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzc5Ljk0IDI1Ni4yMnM0Ny4yLTI4LjY2IDYyLjM3LTE2Ljg2bDIxLjA3IDI3czEzLjQ5IDQuMjEgMTEgMzEuMThsMTAuMDcgNDguODctMzAuMzQgNy41OXMtMTcuNyAxNi44Ni0zLjM3IDQxLjNjMCAwLTQ0LjY3IDM3LjA4LTgwLjA3IDI5LjVsMi41My0zOS42MXM3LjU5LTIxLjkxLTUuOS00Mi4xNC0uODQtMzkuNjEgMTEuOC00Ny4yYzAtLjAxIDUuODktMzIuMDQuODQtMzkuNjN6XCJcclxuICAgICAgICBmaWxsPVwiI2ZjNjY4MVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzcuNDEgNDI4LjE2cy0xNy43IDMuMzctMjYuMTMgMTYuODZhNTIuNTMgNTIuNTMgMCAwMS04LjgyIDExIDYuNjkgNi42OSAwIDAwMSAxMC42NmM2LjY5IDQgMTcuNiA2LjQ5IDMxLjM4LTQuODMgMjMuNjQtMTkuMzYgMi41Ny0zMy42OSAyLjU3LTMzLjY5elwiXHJcbiAgICAgICAgZmlsbD1cIiNkYjhiOGJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODAzLjU0IDI3Mi4yNHMxNi44Ni0xLjY5IDIxLjA3IDQyLjE0IDExIDUzLjk0IDExIDUzLjk0IDQuMjEgMjIuNzYtNS45IDM2LjI0LTI5LjUgNDIuMTQtMjkuNSA0Mi4xNC0yMS4wNyA1LjktMjUuMjgtMTUuMTdsMjYuMTMtNDguODhzNC4yMS0xNi44Ni01LjktMjguNjYtMTcuNzUtOTAuMTggOC4zOC04MS43NXpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgwMS44MiAyNjkuNzFzMTYuODYtMS42OSAyMS4wNyA0Mi4xNCAxMSA1My45NCAxMSA1My45NCA0LjIxIDIyLjc2LTUuOSAzNi4yNC0yOS41IDQyLjE0LTI5LjUgNDIuMTQtMjEuMDcgNS45LTI1LjI4LTE1LjE3bDI2LjEzLTQ4Ljg4czQuMjEtMTYuODYtNS45LTI4LjY2LTE3LjcyLTkwLjE4IDguMzgtODEuNzV6XCJcclxuICAgICAgICBmaWxsPVwiI2ZjNjY4MVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03ODcuOTQgMzAxLjMxcy0xLjY4IDI2LjEgNS44OCA0MC40NiA3LjU5IDMyLjg3IDAgNDNtLTEwLjA5LTExNS40OHM2Ljc0LTYuNzQgMjYuMTMtNy41OSAyNy44MS02Ljc0IDI3LjgxLTYuNzRcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgzMC42MSAxNTUuNTljNS4xMi42MyAxMSAyLjM5IDEyLjgyIDcuMi42OCAxLjc3LjcgMy43MiAxLjE3IDUuNTUgMS45MSA3LjM2IDEwLjIgMTAuNzkgMTUuMzEgMTYuNDIgNC41MSA1IDYuNSAxMS42OSA4IDE4LjI0YTE3MS40IDE3MS40IDAgMDEzIDU3LjI2Yy0xLjY0IDE0LTUgMjcuNzQtNS45NCA0MS43OHMuNzggMjguODEgOC40NSA0MC42MWMzLjMgNS4wNyA3LjY2IDkuNTMgMTAgMTUuMTEtNC44MyAzLjkyLTExLjUgNC40OC0xNy43MyA0LjY5cS0xMC44Ny4zNy0yMS43NSAwYy0zLjgtLjEzLTcuNzctLjM4LTExLjA1LTIuM2ExNy4wNiAxNy4wNiAwIDAxLTUuOC02LjIzYy00LjE1LTctNS4xOS0xNS41LTUtMjMuNjZzMS40Ny0xNi4yOCAxLjYyLTI0LjQ1Yy4wOC00LjQ1LS4yNy05LjE4LTIuODMtMTIuODItMS44NS0yLjYzLTQuNjYtNC40LTcuMDYtNi41My05LTgtMTIuMTItMjAuODItMTIuNDItMzIuODdzMS42OS0yNC4xMi42Ny0zNi4xM2MtLjQtNC43LTIuMTYtMTAuMzUtNi43OC0xMS4yNi0xLjQ2LS4yOS0zIDAtNC40LS41Ni0zLjcxLTEuNDMtMy4zNS02LjY2LTQuNDEtMTAuNDktMS4xOS00LjMtNC44Ni03LjYyLTUuODktMTItMi40My0xMC4yIDEwLjU1LTIyLjM3IDE5LjA2LTI1LjkyIDguNjUtMy42MiAyMS44NC0yLjc2IDMwLjk2LTEuNjR6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MzEuNDUgMTUzLjkxYzUuMTIuNjMgMTEgMi4zOSAxMi44MiA3LjIuNjggMS43Ny43IDMuNzIgMS4xNyA1LjU1IDEuOTEgNy4zNiAxMC4yIDEwLjc5IDE1LjMxIDE2LjQyIDQuNTEgNSA2LjUgMTEuNjkgOCAxOC4yNGExNzEuNCAxNzEuNCAwIDAxMyA1Ny4yNmMtMS42NCAxNC01IDI3Ljc0LTUuOTQgNDEuNzhzLjc4IDI4LjgxIDguNDUgNDAuNjFjMy4zIDUuMDcgNy42NiA5LjUzIDEwIDE1LjExLTQuODMgMy45Mi0xMS41IDQuNDgtMTcuNzMgNC42OXEtMTAuODcuMzctMjEuNzUgMGMtMy44LS4xMy03Ljc3LS4zOC0xMS4wNS0yLjNhMTcuMDYgMTcuMDYgMCAwMS01LjgtNi4yM2MtNC4xNS03LTUuMTktMTUuNS01LTIzLjY2czEuNDctMTYuMjggMS42Mi0yNC40NWMuMDgtNC40NS0uMjctOS4xOC0yLjgzLTEyLjgyLTEuODUtMi42My00LjY2LTQuNC03LjA2LTYuNTMtOS04LTEyLjEyLTIwLjgyLTEyLjQyLTMyLjg3czEuNjktMjQuMTIuNjctMzYuMTNjLS40LTQuNy0yLjE2LTEwLjM1LTYuNzgtMTEuMjYtMS40Ni0uMjktMyAwLTQuNC0uNTYtMy43MS0xLjQzLTMuMzUtNi42Ni00LjQxLTEwLjQ5LTEuMTktNC4zLTQuODYtNy42Mi01Ljg5LTEyLTIuNDMtMTAuMiAxMC41NS0yMi4zNyAxOS4wNi0yNS45MiA4LjY1LTMuNjMgMjEuODQtMi43NyAzMC45Ni0xLjY0elwiXHJcbiAgICAgICAgZmlsbD1cIiM0NzI3MjdcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBub29raWVzLCB7IHNldENvb2tpZSB9IGZyb20gXCJub29raWVzXCJcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNlXCJcclxuaW1wb3J0IHsgQ2hlY2tpbmcgfSBmcm9tIFwiLi4vbGliL2ljb25zL1VuZHJhd1wiXHJcbmltcG9ydCBzYXNzIGZyb20gXCIuLi9zdHlsZXMvbG9naW4ubW9kdWxlLnNhc3NcIlxyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXHJcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cdGNvbnN0IFtwYXNzd29yZENvbmZpcm1hdGlvbiwgc2V0UGFzc3dvcmRDb25maXJtYXRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG5cdFx0XHRjYXNlIFwibmFtZVwiOlxyXG5cdFx0XHRcdHNldE5hbWUoZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBcImVtYWlsXCI6XHJcblx0XHRcdFx0c2V0RW1haWwoZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBcInBhc3N3b3JkXCI6XHJcblx0XHRcdFx0c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBcInBhc3N3b3JkQ29uZmlybWF0aW9uXCI6XHJcblx0XHRcdFx0c2V0UGFzc3dvcmRDb25maXJtYXRpb24oZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGFwaSA9IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdGVtYWlsOiBlbWFpbCxcclxuXHRcdFx0XHRwYXNzd29yZDogcGFzc3dvcmQsXHJcblx0XHRcdFx0cGFzc3dvcmRfY29uZmlybWF0aW9uOiBwYXNzd29yZENvbmZpcm1hdGlvbixcclxuXHRcdFx0fSxcclxuXHRcdFx0dXJsOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hdXRoL3JlZ2lzdGVyYCxcclxuXHRcdH1cclxuXHRcdGNvbnN0IHByb21pc2UgPSBheGlvcy5wb3N0KGFwaS51cmwsIGFwaS5kYXRhLCB7XHJcblx0XHRcdGhlYWRlcnM6IGFwaS5oZWFkZXJzLFxyXG5cdFx0XHR3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcblx0XHR9KVxyXG5cdFx0dG9hc3QucHJvbWlzZShwcm9taXNlLCB7XHJcblx0XHRcdGxvYWRpbmc6IFwiU2lnbmluZyB1cC4uXCIsXHJcblx0XHRcdHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdHNldENvb2tpZShudWxsLCBcInVzZXJcIiwgcmVzcG9uc2UuZGF0YS5jb29raWUsIHtcclxuXHRcdFx0XHRcdG1heEFnZTogSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmNvb2tpZSkudHRsLFxyXG5cdFx0XHRcdFx0cGF0aDogXCIvXCIsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyb3V0ZXIucmVwbGFjZShcIi9jYWxlbmRhcnNcIilcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcclxuXHRcdFx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycy5uYW1lKVxyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDwgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMubmFtZS5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHR0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycy5uYW1lW2ldKVxyXG5cdFx0XHRcdFx0aWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmVtYWlsKVxyXG5cdFx0XHRcdFx0XHRmb3IgKFxyXG5cdFx0XHRcdFx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0XHRcdFx0XHRpIDwgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMuZW1haWwubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0dG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMucGFzc3dvcmRbaV0pXHJcblx0XHRcdFx0XHRpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMucGFzc3dvcmQpXHJcblx0XHRcdFx0XHRcdGZvciAoXHJcblx0XHRcdFx0XHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGkgPCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycy5wYXNzd29yZC5sZW5ndGg7XHJcblx0XHRcdFx0XHRcdFx0aSsrXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHR0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycy5wYXNzd29yZFtpXSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG5cdFx0XHR9LFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+U2lnbiB1cCAmIzg3Mzk7IE1ZVEM8L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRuYW1lPSd2aWV3cG9ydCdcclxuXHRcdFx0XHRcdGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxIZWFkZXIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c2Fzcy5sb2dpbn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c2Fzcy5maWVsZHN9PlxyXG5cdFx0XHRcdFx0XHQ8aDE+V2VsY29tZSB0byBNWVRDITwvaDE+XHJcblx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFNpZ24gdXAgdG8gZ2FpbiBhY2Nlc3MgdG8gYWxsIGZlYXR1cmVzIG9mIHRoZVxyXG5cdFx0XHRcdFx0XHRcdGFwcGxpY2F0aW9uLCBjcmVhdGUgYW5kIG1hbmFnZSBldmVudHMgYW5kIGNvbm5lY3QgdG9cclxuXHRcdFx0XHRcdFx0XHRvdGhlcnMuXHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGZvcm1cclxuXHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlLnByZXZlbnREZWZhdWx0KCkpfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0WW91ciBuYW1lXHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nbmFtZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J25hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFlvdXIgZW1haWxcclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdlbWFpbCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFlvdXIgcGFzc3dvcmRcclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWluTGVuZ3RoPXs4fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0UmVwZWF0IHlvdXIgcGFzc3dvcmRcclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3Bhc3N3b3JkQ29uZmlybWF0aW9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZENvbmZpcm1hdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkQ29uZmlybWF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0Jz5TaWduIHVwPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0QWxyZWFkeSBhIG1lbWJlcj97XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ25pbic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YT5TaWduIGluITwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3Nhc3MuaW5mb30+XHJcblx0XHRcdFx0XHRcdDxDaGVja2luZyAvPlxyXG5cdFx0XHRcdFx0XHQ8aDQ+V2h5IE1ZVEM/PC9oND5cclxuXHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0U2ltcGx5IG9yZ2FuaXplIHlvdXIgZXZlbnRzIGFuZCBzaGFyZSB0aGVtIHdpdGhcclxuXHRcdFx0XHRcdFx0XHRvdGhlcnMhIEV4cGxvcmUgb3VyIHNvbHV0aW9ucyB0byBjcmVhdGUgYSBjb21tdW5pdHksXHJcblx0XHRcdFx0XHRcdFx0Y2FsZW5kYXIgb3IgbW9yZSFcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VG9hc3RlclxyXG5cdFx0XHRcdHBvc2l0aW9uPSdib3R0b20tY2VudGVyJ1xyXG5cdFx0XHRcdHJldmVyc2VPcmRlcj17ZmFsc2V9XHJcblx0XHRcdFx0dG9hc3RPcHRpb25zPXt7XHJcblx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjEwcHhcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHtcclxuXHRcdFx0XHRcdFx0aWNvblRoZW1lOiB7XHJcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogXCIjN2M2YWVmXCIsXHJcblx0XHRcdFx0XHRcdFx0c2Vjb25kYXJ5OiBcIiNGRkZcIixcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcjogeyBkdXJhdGlvbjogNDAwMCB9LFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcblx0aWYgKCEhbm9va2llcy5nZXQoY3R4KS51c2VyKVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9jYWxlbmRhcnNcIixcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHJcblx0cmV0dXJuIHsgcHJvcHM6IHt9IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzEwQVdZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpblwiOiBcImxvZ2luX2xvZ2luX18yNDQzclwiLFxuXHRcImZpZWxkc1wiOiBcImxvZ2luX2ZpZWxkc19fMW9SQjRcIixcblx0XCJpbmZvXCI6IFwibG9naW5faW5mb19fM2pPY0FcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJMb2dvIiwic2NzcyIsIkhlYWRlciIsImhlYWRlciIsIkJvb2tpbmciLCJDaGVja2luZyIsIkV2ZW50cyIsImF4aW9zIiwibm9va2llcyIsInNldENvb2tpZSIsInRvYXN0IiwiVG9hc3RlciIsIkhlYWQiLCJzYXNzIiwiU2lnbnVwIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJzZXRQYXNzd29yZENvbmZpcm1hdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImFwaSIsImhlYWRlcnMiLCJBY2NlcHQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJBUElfVVJMIiwicHJvbWlzZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJsb2FkaW5nIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiY29va2llIiwibWF4QWdlIiwidHRsIiwiZXJyb3JzIiwiaSIsImxvZ2luIiwiZmllbGRzIiwiaW5mbyIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImR1cmF0aW9uIiwiaWNvblRoZW1lIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImdldFNlcnZlclNpZGVQcm9wcyIsInVzZXIiLCJyZWRpcmVjdCIsInBlcm1hbmVudCJdLCJzb3VyY2VSb290IjoiIn0=