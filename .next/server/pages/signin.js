(() => {
var exports = {};
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
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

/***/ "./src/pages/signin.js":
/*!*****************************!*\
  !*** ./src/pages/signin.js ***!
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
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
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


var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\pages\\signin.js";













const Signin = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
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
        password: password
      },
      url: `${"http://127.0.0.1:8000/api"}/auth/signin`
    };
    const promise = axios__WEBPACK_IMPORTED_MODULE_3___default().post(api.url, api.data, {
      headers: api.headers,
      withCredentials: true
    });
    react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().promise(promise, {
      loading: "Logging in...",
      success: response => {
        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(null, "user", response.data.cookie, {
          maxAge: JSON.parse(response.data.cookie).ttl,
          path: "/"
        });
        router.replace("/calendars");
        return response.data.message;
      },
      error: error => {
        if (error.response.data.errors) {
          if (error.response.data.errors.name) for (let i = 0; i < error.response.data.errors.name.length; i++) react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(error.response.data.errors.name[i]);
          if (error.response.data.errors.password) for (let i = 0; i < error.response.data.errors.password.length; i++) react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(error.response.data.errors.password[i]);
        }

        return error.response.data.message;
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Sign in \u2223 MYTC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Base__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default().login),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default().fields),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
            children: "Welcome to MYTC!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: "Log in to gain access to all features of the application, create and manage events and connect to others."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
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
                lineNumber: 101,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
              children: ["Your password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                type: "password",
                id: "password",
                name: "password",
                value: password,
                onChange: handleChange,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              type: "submit",
              children: "Sign in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: ["Forgot your password?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/reset-password",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "Let's get it back!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: ["Not a member yet?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/signup",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "Sign up!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_styles_login_module_sass__WEBPACK_IMPORTED_MODULE_11___default().info),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_lib_icons_Undraw__WEBPACK_IMPORTED_MODULE_9__.Booking, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h4", {
            children: "We've missed you!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: "Create as many calendars as you want, share them with your friends, coworkers or employees! Various types of events with great customization!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 147,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async function getServerSideProps(ctx) {
  if (!!nookies__WEBPACK_IMPORTED_MODULE_2___default().get(ctx).user) return {
    redirect: {
      permanent: false,
      destination: "/calendars"
    }
  };
  return {
    props: {}
  };
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(Signin));

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/signin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2lnbmluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMseUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixtQkFBTyxDQUFDLDJEQUFELENBQXRCOztBQUNBLElBQUlHLGdCQUFnQixHQUFHSCxtQkFBTyxDQUFDLCtFQUFELENBQTlCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNRSxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLElBQTFCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1BQUksQ0FBQyxDQUFDLEdBQUdWLE9BQUosRUFBYVcsVUFBYixDQUF3QkgsSUFBeEIsQ0FBTCxFQUFvQyxPQUZLLENBR3pDO0FBQ0E7QUFDQTtBQUNBOztBQUNBRCxFQUFBQSxNQUFNLENBQUNELFFBQVAsQ0FBZ0JFLElBQWhCLEVBQXNCQyxFQUF0QixFQUEwQkMsT0FBMUIsRUFBbUNFLEtBQW5DLENBQTBDQyxHQUFELElBQU87QUFDNUMsY0FBMkM7QUFDdkM7QUFDQSxZQUFNQSxHQUFOO0FBQ0g7QUFDSixHQUxEO0FBTUEsUUFBTUMsU0FBUyxHQUFHSixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDSyxNQUFmLEtBQTBCLFdBQXJDLEdBQW1ETCxPQUFPLENBQUNLLE1BQTNELEdBQW9FUixNQUFNLElBQUlBLE1BQU0sQ0FBQ1EsTUFBdkcsQ0FieUMsQ0FjekM7O0FBQ0FWLEVBQUFBLFVBQVUsQ0FBQ0csSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkssU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUFWLEdBQW1FLElBQW5FO0FBQ0g7O0FBQ0QsU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWNELEtBQUssQ0FBQ0UsYUFBMUI7QUFDQSxTQUFPRCxNQUFNLElBQUlBLE1BQU0sS0FBSyxPQUFyQixJQUFnQ0QsS0FBSyxDQUFDRyxPQUF0QyxJQUFpREgsS0FBSyxDQUFDSSxPQUF2RCxJQUFrRUosS0FBSyxDQUFDSyxRQUF4RSxJQUFvRkwsS0FBSyxDQUFDTSxNQUExRixJQUFvR04sS0FBSyxDQUFDTyxXQUFOLElBQXFCUCxLQUFLLENBQUNPLFdBQU4sQ0FBa0JDLEtBQWxCLEtBQTRCLENBQTVKO0FBQ0g7O0FBQ0QsU0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JwQixNQUF4QixFQUFnQ0MsSUFBaEMsRUFBc0NDLEVBQXRDLEVBQTBDbUIsT0FBMUMsRUFBbURDLE9BQW5ELEVBQTREQyxNQUE1RCxFQUFvRWYsTUFBcEUsRUFBNEU7QUFDeEUsUUFBTTtBQUFFZ0IsSUFBQUE7QUFBRixNQUFnQkosQ0FBQyxDQUFDUixhQUF4Qjs7QUFDQSxNQUFJWSxRQUFRLEtBQUssR0FBYixLQUFxQmYsZUFBZSxDQUFDVyxDQUFELENBQWYsSUFBc0IsQ0FBQyxDQUFDLEdBQUczQixPQUFKLEVBQWFXLFVBQWIsQ0FBd0JILElBQXhCLENBQTVDLENBQUosRUFBZ0Y7QUFDNUU7QUFDQTtBQUNIOztBQUNEbUIsRUFBQUEsQ0FBQyxDQUFDSyxjQUFGLEdBTndFLENBT3hFOztBQUNBLE1BQUlGLE1BQU0sSUFBSSxJQUFWLElBQWtCckIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXLEdBQVgsS0FBbUIsQ0FBekMsRUFBNEM7QUFDeENILElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0gsR0FWdUUsQ0FXeEU7OztBQUNBdkIsRUFBQUEsTUFBTSxDQUFDcUIsT0FBTyxHQUFHLFNBQUgsR0FBZSxNQUF2QixDQUFOLENBQXFDcEIsSUFBckMsRUFBMkNDLEVBQTNDLEVBQStDO0FBQzNDb0IsSUFBQUEsT0FEMkM7QUFFM0NkLElBQUFBLE1BRjJDO0FBRzNDZSxJQUFBQTtBQUgyQyxHQUEvQztBQUtIOztBQUNELFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNqQixZQUEyQztBQUN2QyxhQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUMzQixhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ0UsR0FBSSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLDZCQUE0QkgsSUFBSSxDQUFDSSxNQUFPLGFBQTlHLElBQThILFNBQWdDLENBQWhDLEdBQXFHLEVBQW5PLENBQVYsQ0FBUDtBQUNILEtBSHNDLENBSXZDOzs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRztBQUN2QmxDLE1BQUFBLElBQUksRUFBRTtBQURpQixLQUEzQjtBQUdBLFVBQU1tQyxhQUFhLEdBQUduRCxNQUFNLENBQUNvRCxJQUFQLENBQVlGLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQ0UsT0FBZCxDQUF1Qk4sR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUlKLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLElBQWMsSUFBZCxJQUFzQixPQUFPSixLQUFLLENBQUNJLEdBQUQsQ0FBWixLQUFzQixRQUF0QixJQUFrQyxPQUFPSixLQUFLLENBQUNJLEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTUgsZUFBZSxDQUFDO0FBQ2xCRyxZQUFBQSxHQURrQjtBQUVsQkMsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVOLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLEtBQWUsSUFBZixHQUFzQixNQUF0QixHQUErQixPQUFPSixLQUFLLENBQUNJLEdBQUQ7QUFIakMsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPO0FBQ0g7QUFDQTtBQUNBLGNBQU1PLENBQUMsR0FBR1AsR0FBVjtBQUNIO0FBQ0osS0FkRCxFQVR1QyxDQXdCdkM7O0FBQ0EsVUFBTVEsa0JBQWtCLEdBQUc7QUFDdkJ0QyxNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJtQixNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCbUIsTUFBQUEsUUFBUSxFQUFFLElBTGE7QUFNdkIxQyxNQUFBQSxRQUFRLEVBQUUsSUFOYTtBQU92QlMsTUFBQUEsTUFBTSxFQUFFO0FBUGUsS0FBM0I7QUFTQSxVQUFNa0MsYUFBYSxHQUFHekQsTUFBTSxDQUFDb0QsSUFBUCxDQUFZRyxrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUNKLE9BQWQsQ0FBdUJOLEdBQUQsSUFBTztBQUN6QixZQUFNVyxPQUFPLEdBQUcsT0FBT2YsS0FBSyxDQUFDSSxHQUFELENBQTVCOztBQUNBLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsWUFBSUosS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBY1csT0FBTyxLQUFLLFFBQTFCLElBQXNDQSxPQUFPLEtBQUssUUFBdEQsRUFBZ0U7QUFDNUQsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxzQkFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFUztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTyxJQUFJWCxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUN6QixZQUFJSixLQUFLLENBQUNJLEdBQUQsQ0FBTCxJQUFjVyxPQUFPLEtBQUssUUFBOUIsRUFBd0M7QUFDcEMsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxVQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBLElBQUlYLEdBQUcsS0FBSyxTQUFSLElBQXFCQSxHQUFHLEtBQUssUUFBN0IsSUFBeUNBLEdBQUcsS0FBSyxTQUFqRCxJQUE4REEsR0FBRyxLQUFLLFVBQXRFLElBQW9GQSxHQUFHLEtBQUssVUFBaEcsRUFBNEc7QUFDL0csWUFBSUosS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCVyxPQUFPLEtBQUssU0FBdEMsRUFBaUQ7QUFDN0MsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxXQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBO0FBQ0g7QUFDQTtBQUNBLGNBQU1KLENBQUMsR0FBR1AsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU1ZLFNBQVMsR0FBR3RELE1BQU0sQ0FBQ0QsT0FBUCxDQUFld0QsTUFBZixDQUFzQixLQUF0QixDQUFsQjs7QUFDQSxRQUFJakIsS0FBSyxDQUFDN0IsUUFBTixJQUFrQixDQUFDNkMsU0FBUyxDQUFDRSxPQUFqQyxFQUEwQztBQUN0Q0YsTUFBQUEsU0FBUyxDQUFDRSxPQUFWLEdBQW9CLElBQXBCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLHNLQUFiO0FBQ0g7QUFDSjs7QUFDRCxRQUFNQyxDQUFDLEdBQUdyQixLQUFLLENBQUM3QixRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBR04sUUFBSixFQUFjd0QsU0FBZCxFQUFmOztBQUNBLFFBQU07QUFBRWpELElBQUFBLElBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUFpQlosTUFBTSxDQUFDRCxPQUFQLENBQWU4RCxPQUFmLENBQXVCLE1BQUk7QUFDOUMsVUFBTSxDQUFDQyxZQUFELEVBQWVDLFVBQWYsSUFBNkIsQ0FBQyxHQUFHNUQsT0FBSixFQUFhNkQsV0FBYixDQUF5QnRELE1BQXpCLEVBQWlDNEIsS0FBSyxDQUFDM0IsSUFBdkMsRUFBNkMsSUFBN0MsQ0FBbkM7QUFDQSxXQUFPO0FBQ0hBLE1BQUFBLElBQUksRUFBRW1ELFlBREg7QUFFSGxELE1BQUFBLEVBQUUsRUFBRTBCLEtBQUssQ0FBQzFCLEVBQU4sR0FBVyxDQUFDLEdBQUdULE9BQUosRUFBYTZELFdBQWIsQ0FBeUJ0RCxNQUF6QixFQUFpQzRCLEtBQUssQ0FBQzFCLEVBQXZDLENBQVgsR0FBd0RtRCxVQUFVLElBQUlEO0FBRnZFLEtBQVA7QUFJSCxHQU5zQixFQU1wQixDQUNDcEQsTUFERCxFQUVDNEIsS0FBSyxDQUFDM0IsSUFGUCxFQUdDMkIsS0FBSyxDQUFDMUIsRUFIUCxDQU5vQixDQUF2Qjs7QUFXQSxNQUFJO0FBQUVxRCxJQUFBQSxRQUFGO0FBQWFsQyxJQUFBQSxPQUFiO0FBQXVCQyxJQUFBQSxPQUF2QjtBQUFpQ0MsSUFBQUEsTUFBakM7QUFBMENmLElBQUFBO0FBQTFDLE1BQXNEb0IsS0FBMUQsQ0F6RmlCLENBMEZqQjs7QUFDQSxNQUFJLE9BQU8yQixRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCQSxJQUFBQSxRQUFRLEdBQUcsYUFBY2pFLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUUsYUFBZixDQUE2QixHQUE3QixFQUFrQyxJQUFsQyxFQUF3Q0QsUUFBeEMsQ0FBekI7QUFDSCxHQTdGZ0IsQ0E4RmpCOzs7QUFDQSxNQUFJRSxLQUFKOztBQUNBLFlBQTRDO0FBQ3hDLFFBQUk7QUFDQUEsTUFBQUEsS0FBSyxHQUFHbkUsTUFBTSxDQUFDRCxPQUFQLENBQWVxRSxRQUFmLENBQXdCQyxJQUF4QixDQUE2QkosUUFBN0IsQ0FBUjtBQUNILEtBRkQsQ0FFRSxPQUFPakQsR0FBUCxFQUFZO0FBQ1YsWUFBTSxJQUFJeUIsS0FBSixDQUFXLDhEQUE2REgsS0FBSyxDQUFDM0IsSUFBSyw0RkFBekUsSUFBd0ssU0FBZ0MsQ0FBaEMsR0FBc0csRUFBOVEsQ0FBVixDQUFOO0FBQ0g7QUFDSixHQU5ELE1BTU8sRUFFTjs7QUFDRCxRQUFNMkQsUUFBUSxHQUFHSCxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDSSxHQUE3RDtBQUNBLFFBQU0sQ0FBQ0Msa0JBQUQsRUFBcUJDLFNBQXJCLElBQWtDLENBQUMsR0FBR3BFLGdCQUFKLEVBQXNCcUUsZUFBdEIsQ0FBc0M7QUFDMUVDLElBQUFBLFVBQVUsRUFBRTtBQUQ4RCxHQUF0QyxDQUF4Qzs7QUFHQSxRQUFNQyxNQUFNLEdBQUc1RSxNQUFNLENBQUNELE9BQVAsQ0FBZThFLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q04sSUFBQUEsa0JBQWtCLENBQUNNLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNRLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT1IsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDZCxPQUFULEdBQW1Cc0IsRUFBbkI7QUFDSDtBQUNKO0FBQ0osR0FSYyxFQVFaLENBQ0NSLFFBREQsRUFFQ0Usa0JBRkQsQ0FSWSxDQUFmOztBQVlBeEUsRUFBQUEsTUFBTSxDQUFDRCxPQUFQLENBQWVnRixTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTUMsY0FBYyxHQUFHUCxTQUFTLElBQUlkLENBQWIsSUFBa0IsQ0FBQyxHQUFHeEQsT0FBSixFQUFhVyxVQUFiLENBQXdCSCxJQUF4QixDQUF6QztBQUNBLFVBQU1NLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q1IsTUFBTSxJQUFJQSxNQUFNLENBQUNRLE1BQTVFO0FBQ0EsVUFBTStELFlBQVksR0FBR3pFLFVBQVUsQ0FBQ0csSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkssU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUEvQjs7QUFDQSxRQUFJK0QsY0FBYyxJQUFJLENBQUNDLFlBQXZCLEVBQXFDO0FBQ2pDeEUsTUFBQUEsUUFBUSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2Qk0sUUFBQUEsTUFBTSxFQUFFRDtBQURlLE9BQW5CLENBQVI7QUFHSDtBQUNKLEdBVEQsRUFTRyxDQUNDTCxFQURELEVBRUNELElBRkQsRUFHQzhELFNBSEQsRUFJQ3ZELE1BSkQsRUFLQ3lDLENBTEQsRUFNQ2pELE1BTkQsQ0FUSDs7QUFpQkEsUUFBTXdFLFVBQVUsR0FBRztBQUNmWCxJQUFBQSxHQUFHLEVBQUVLLE1BRFU7QUFFZk8sSUFBQUEsT0FBTyxFQUFHckQsQ0FBRCxJQUFLO0FBQ1YsVUFBSXFDLEtBQUssQ0FBQzdCLEtBQU4sSUFBZSxPQUFPNkIsS0FBSyxDQUFDN0IsS0FBTixDQUFZNkMsT0FBbkIsS0FBK0IsVUFBbEQsRUFBOEQ7QUFDMURoQixRQUFBQSxLQUFLLENBQUM3QixLQUFOLENBQVk2QyxPQUFaLENBQW9CckQsQ0FBcEI7QUFDSDs7QUFDRCxVQUFJLENBQUNBLENBQUMsQ0FBQ3NELGdCQUFQLEVBQXlCO0FBQ3JCdkQsUUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlwQixNQUFKLEVBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCbUIsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxNQUF4QyxFQUFnRGYsTUFBaEQsQ0FBWDtBQUNIO0FBQ0o7QUFUYyxHQUFuQjs7QUFXQWdFLEVBQUFBLFVBQVUsQ0FBQ0csWUFBWCxHQUEyQnZELENBQUQsSUFBSztBQUMzQixRQUFJLENBQUMsQ0FBQyxHQUFHM0IsT0FBSixFQUFhVyxVQUFiLENBQXdCSCxJQUF4QixDQUFMLEVBQW9DOztBQUNwQyxRQUFJd0QsS0FBSyxDQUFDN0IsS0FBTixJQUFlLE9BQU82QixLQUFLLENBQUM3QixLQUFOLENBQVkrQyxZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtBQUMvRGxCLE1BQUFBLEtBQUssQ0FBQzdCLEtBQU4sQ0FBWStDLFlBQVosQ0FBeUJ2RCxDQUF6QjtBQUNIOztBQUNEckIsSUFBQUEsUUFBUSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2QjBFLE1BQUFBLFFBQVEsRUFBRTtBQURhLEtBQW5CLENBQVI7QUFHSCxHQVJELENBckppQixDQThKakI7QUFDQTs7O0FBQ0EsTUFBSWhELEtBQUssQ0FBQ2EsUUFBTixJQUFrQmdCLEtBQUssQ0FBQ29CLElBQU4sS0FBZSxHQUFmLElBQXNCLEVBQUUsVUFBVXBCLEtBQUssQ0FBQzdCLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU1yQixTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNSLE1BQU0sSUFBSUEsTUFBTSxDQUFDUSxNQUE1RSxDQURrRSxDQUVsRTtBQUNBOztBQUNBLFVBQU1zRSxZQUFZLEdBQUc5RSxNQUFNLElBQUlBLE1BQU0sQ0FBQytFLGNBQWpCLElBQW1DLENBQUMsR0FBR3RGLE9BQUosRUFBYXVGLGVBQWIsQ0FBNkI5RSxFQUE3QixFQUFpQ0ssU0FBakMsRUFBNENQLE1BQU0sSUFBSUEsTUFBTSxDQUFDaUYsT0FBN0QsRUFBc0VqRixNQUFNLElBQUlBLE1BQU0sQ0FBQ2tGLGFBQXZGLENBQXhEO0FBQ0FWLElBQUFBLFVBQVUsQ0FBQ3ZFLElBQVgsR0FBa0I2RSxZQUFZLElBQUksQ0FBQyxHQUFHckYsT0FBSixFQUFhMEYsV0FBYixDQUF5QixDQUFDLEdBQUcxRixPQUFKLEVBQWEyRixTQUFiLENBQXVCbEYsRUFBdkIsRUFBMkJLLFNBQTNCLEVBQXNDUCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3FGLGFBQXZELENBQXpCLENBQWxDO0FBQ0g7O0FBQ0QsU0FBTyxhQUFjL0YsTUFBTSxDQUFDRCxPQUFQLENBQWVpRyxZQUFmLENBQTRCN0IsS0FBNUIsRUFBbUNlLFVBQW5DLENBQXJCO0FBQ0g7O0FBQ0QsSUFBSWUsUUFBUSxHQUFHNUQsSUFBZjtBQUNBeEMsZUFBQSxHQUFrQm9HLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYnRHLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELCtCQUFBLEdBQWtDcUcsdUJBQWxDO0FBQ0FyRyxrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVNxRyx1QkFBVCxDQUFpQ0UsSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxLQUFzQkQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlERixJQUFoRTtBQUNIOztBQUNELE1BQU1ELDBCQUEwQixHQUFHSSxNQUFBLEdBQXFDSCxDQUFyQyxHQVEvQkYsdUJBUko7QUFTQXJHLGtDQUFBLEdBQXFDc0csMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYnhHLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELDJCQUFBLEdBQThCQSwwQkFBQSxHQUE2QixLQUFLLENBQWhFOztBQUNBLE1BQU04RyxtQkFBbUIsR0FBRyxPQUFPRSxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNGLG1CQUFwQyxJQUEyREUsSUFBSSxDQUFDRixtQkFBTCxDQUF5QkcsSUFBekIsQ0FBOEJDLE1BQTlCLENBQTNELElBQW9HLFVBQVNDLEVBQVQsRUFBYTtBQUN6SSxNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFaO0FBQ0EsU0FBT0MsVUFBVSxDQUFDLFlBQVc7QUFDekJKLElBQUFBLEVBQUUsQ0FBQztBQUNDSyxNQUFBQSxVQUFVLEVBQUUsS0FEYjtBQUVDQyxNQUFBQSxhQUFhLEVBQUUsWUFBVztBQUN0QixlQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTU4sSUFBSSxDQUFDQyxHQUFMLEtBQWFGLEtBQW5CLENBQVosQ0FBUDtBQUNIO0FBSkYsS0FBRCxDQUFGO0FBTUgsR0FQZ0IsRUFPZCxDQVBjLENBQWpCO0FBUUgsQ0FWRDs7QUFXQXBILDJCQUFBLEdBQThCOEcsbUJBQTlCOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLE9BQU9DLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0Qsa0JBQXBDLElBQTBEQyxJQUFJLENBQUNELGtCQUFMLENBQXdCRSxJQUF4QixDQUE2QkMsTUFBN0IsQ0FBMUQsSUFBa0csVUFBU1UsRUFBVCxFQUFhO0FBQ3RJLFNBQU9DLFlBQVksQ0FBQ0QsRUFBRCxDQUFuQjtBQUNILENBRkQ7O0FBR0E1SCwwQkFBQSxHQUE2QitHLGtCQUE3Qjs7Ozs7Ozs7Ozs7QUNwQmE7O0FBQ2JqSCw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxzQkFBQSxHQUF5QjhILGNBQXpCO0FBQ0E5SCxvQkFBQSxHQUF1QitILFlBQXZCO0FBQ0EvSCw4QkFBQSxHQUFpQ2dJLHNCQUFqQztBQUNBaEkseUJBQUEsR0FBNEJpSSxpQkFBNUI7O0FBQ0EsSUFBSUMsc0JBQXNCLEdBQUc5SCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxrSEFBRCxDQUFSLENBQW5EOztBQUNBLElBQUk4SCxvQkFBb0IsR0FBRzlILG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU0ySCxpQkFBaUIsR0FBRyxJQUExQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CeEYsR0FBcEIsRUFBeUJ5RixHQUF6QixFQUE4QkMsU0FBOUIsRUFBeUM7QUFDckMsTUFBSUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLEdBQUosQ0FBUTVGLEdBQVIsQ0FBWjs7QUFDQSxNQUFJMkYsS0FBSixFQUFXO0FBQ1AsUUFBSSxZQUFZQSxLQUFoQixFQUF1QjtBQUNuQixhQUFPQSxLQUFLLENBQUNFLE1BQWI7QUFDSDs7QUFDRCxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JKLEtBQWhCLENBQVA7QUFDSDs7QUFDRCxNQUFJSyxRQUFKO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlILE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQ2hDQyxJQUFBQSxRQUFRLEdBQUdELE9BQVg7QUFDSCxHQUZZLENBQWI7QUFHQU4sRUFBQUEsR0FBRyxDQUFDUyxHQUFKLENBQVFsRyxHQUFSLEVBQWEyRixLQUFLLEdBQUc7QUFDakJJLElBQUFBLE9BQU8sRUFBRUMsUUFEUTtBQUVqQkgsSUFBQUEsTUFBTSxFQUFFSTtBQUZTLEdBQXJCO0FBSUEsU0FBT1AsU0FBUyxHQUFHQSxTQUFTLEdBQUdTLElBQVosQ0FBa0IvSSxLQUFELEtBQVU0SSxRQUFRLENBQUM1SSxLQUFELENBQVIsRUFBaUJBLEtBQTNCLENBQWpCLENBQUgsR0FDWjZJLElBREo7QUFFSDs7QUFDRCxTQUFTRyxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN2QixNQUFJO0FBQ0FBLElBQUFBLElBQUksR0FBR0MsUUFBUSxDQUFDOUUsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDNkMsTUFBTSxDQUFDa0Msb0JBQVQsSUFBaUMsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFlBQTdDLElBQThESCxJQUFJLENBQUNJLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixVQUF0QjtBQUY5RDtBQUdILEdBTEQsQ0FLRSxPQUFPdEgsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNdUgsV0FBVyxHQUFHUCxXQUFXLEVBQS9COztBQUNBLFNBQVNRLGNBQVQsQ0FBd0IzSSxJQUF4QixFQUE4QkMsRUFBOUIsRUFBa0NtSSxJQUFsQyxFQUF3QztBQUNwQyxTQUFPLElBQUlQLE9BQUosQ0FBWSxDQUFDZSxHQUFELEVBQU1DLEdBQU4sS0FBWTtBQUMzQixRQUFJUixRQUFRLENBQUNTLGFBQVQsQ0FBd0IsK0JBQThCOUksSUFBSyxJQUEzRCxDQUFKLEVBQXFFO0FBQ2pFLGFBQU80SSxHQUFHLEVBQVY7QUFDSDs7QUFDRFIsSUFBQUEsSUFBSSxHQUFHQyxRQUFRLENBQUM5RSxhQUFULENBQXVCLE1BQXZCLENBQVAsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSXRELEVBQUosRUFBUW1JLElBQUksQ0FBQ25JLEVBQUwsR0FBVUEsRUFBVjtBQUNSbUksSUFBQUEsSUFBSSxDQUFDVyxHQUFMLEdBQVksVUFBWjtBQUNBWCxJQUFBQSxJQUFJLENBQUNZLFdBQUwsR0FBbUJwRCxTQUFuQjtBQUNBd0MsSUFBQUEsSUFBSSxDQUFDYyxNQUFMLEdBQWNOLEdBQWQ7QUFDQVIsSUFBQUEsSUFBSSxDQUFDZSxPQUFMLEdBQWVOLEdBQWYsQ0FWMkIsQ0FXM0I7O0FBQ0FULElBQUFBLElBQUksQ0FBQ3BJLElBQUwsR0FBWUEsSUFBWjtBQUNBcUksSUFBQUEsUUFBUSxDQUFDZSxJQUFULENBQWNDLFdBQWQsQ0FBMEJqQixJQUExQjtBQUNILEdBZE0sQ0FBUDtBQWVIOztBQUNELE1BQU1rQixnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDLGtCQUFELENBQS9COztBQUNBLFNBQVN2QyxjQUFULENBQXdCM0csR0FBeEIsRUFBNkI7QUFDekIsU0FBT3JCLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQm9CLEdBQXRCLEVBQTJCaUosZ0JBQTNCLEVBQTZDLEVBQTdDLENBQVA7QUFFSDs7QUFDRCxTQUFTckMsWUFBVCxDQUFzQjVHLEdBQXRCLEVBQTJCO0FBQ3ZCLFNBQU9BLEdBQUcsSUFBSWlKLGdCQUFnQixJQUFJakosR0FBbEM7QUFDSDs7QUFDRCxTQUFTbUosWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQy9CLFNBQU8sSUFBSTdCLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVU2QixNQUFWLEtBQW1CO0FBQ2xDRCxJQUFBQSxNQUFNLEdBQUdyQixRQUFRLENBQUM5RSxhQUFULENBQXVCLFFBQXZCLENBQVQsQ0FEa0MsQ0FFbEM7QUFDQTtBQUNBOztBQUNBbUcsSUFBQUEsTUFBTSxDQUFDUixNQUFQLEdBQWdCcEIsT0FBaEI7O0FBQ0E0QixJQUFBQSxNQUFNLENBQUNQLE9BQVAsR0FBaUIsTUFBSVEsTUFBTSxDQUFDM0MsY0FBYyxDQUFDLElBQUlsRixLQUFKLENBQVcsMEJBQXlCMkgsR0FBSSxFQUF4QyxDQUFELENBQWYsQ0FBM0IsQ0FOa0MsQ0FRbEM7QUFDQTs7O0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ1YsV0FBUCxHQUFxQnBELFNBQXJCLENBVmtDLENBV2xDO0FBQ0E7O0FBQ0E4RCxJQUFBQSxNQUFNLENBQUNELEdBQVAsR0FBYUEsR0FBYjtBQUNBcEIsSUFBQUEsUUFBUSxDQUFDdUIsSUFBVCxDQUFjUCxXQUFkLENBQTBCSyxNQUExQjtBQUNILEdBZk0sQ0FBUDtBQWdCSCxFQUNEO0FBQ0E7OztBQUNBLElBQUlHLGVBQUosRUFDQTs7QUFDQSxTQUFTQyx5QkFBVCxDQUFtQzlHLENBQW5DLEVBQXNDK0csRUFBdEMsRUFBMEMxSixHQUExQyxFQUErQztBQUMzQyxTQUFPLElBQUl3SCxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVNkIsTUFBVixLQUFtQjtBQUNsQyxRQUFJSyxTQUFTLEdBQUcsS0FBaEI7QUFDQWhILElBQUFBLENBQUMsQ0FBQ2tGLElBQUYsQ0FBUStCLENBQUQsSUFBSztBQUNSO0FBQ0FELE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0FsQyxNQUFBQSxPQUFPLENBQUNtQyxDQUFELENBQVA7QUFDSCxLQUpELEVBSUc3SixLQUpILENBSVN1SixNQUpULEVBRmtDLENBT2xDO0FBQ0E7O0FBQ0EsY0FBNEM7QUFDeEMsT0FBQ0UsZUFBZSxJQUFJaEMsT0FBTyxDQUFDQyxPQUFSLEVBQXBCLEVBQXVDSSxJQUF2QyxDQUE0QyxNQUFJO0FBQzVDLFNBQUMsR0FBR2Isb0JBQUosRUFBMEJyQixtQkFBMUIsQ0FBOEMsTUFBSVMsVUFBVSxDQUFDLE1BQUk7QUFDekQsY0FBSSxDQUFDdUQsU0FBTCxFQUFnQjtBQUNaTCxZQUFBQSxNQUFNLENBQUN0SixHQUFELENBQU47QUFDSDtBQUNKLFNBSnVELEVBSXJEMEosRUFKcUQsQ0FBNUQ7QUFNSCxPQVBEO0FBUUg7O0FBQ0QsZUFBNEMsRUFPM0M7QUFDSixHQTNCTSxDQUFQO0FBNEJIOztBQUNELFNBQVM3QyxzQkFBVCxHQUFrQztBQUM5QixNQUFJaEIsSUFBSSxDQUFDZ0UsZ0JBQVQsRUFBMkI7QUFDdkIsV0FBT3JDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjVCLElBQUksQ0FBQ2dFLGdCQUFyQixDQUFQO0FBQ0g7O0FBQ0QsUUFBTUMsZUFBZSxHQUFHLElBQUl0QyxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUMzQztBQUNBLFVBQU16QixFQUFFLEdBQUdILElBQUksQ0FBQ2tFLG1CQUFoQjs7QUFDQWxFLElBQUFBLElBQUksQ0FBQ2tFLG1CQUFMLEdBQTJCLE1BQUk7QUFDM0J0QyxNQUFBQSxPQUFPLENBQUM1QixJQUFJLENBQUNnRSxnQkFBTixDQUFQO0FBQ0E3RCxNQUFBQSxFQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNILEtBSEQ7QUFJSCxHQVB1QixDQUF4QjtBQVFBLFNBQU95RCx5QkFBeUIsQ0FBQ0ssZUFBRCxFQUFrQjdDLGlCQUFsQixFQUFxQ04sY0FBYyxDQUFDLElBQUlsRixLQUFKLENBQVUsc0NBQVYsQ0FBRCxDQUFuRCxDQUFoQztBQUNIOztBQUNELFNBQVN1SSxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzFDLFlBQTRDO0FBQ3hDLFdBQU8xQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFDbkIwQyxNQUFBQSxPQUFPLEVBQUUsQ0FDTEYsV0FBVyxHQUFHLDRCQUFkLEdBQTZDRyxTQUFTLENBQUMsQ0FBQyxHQUFHckQsc0JBQUosRUFBNEJoSSxPQUE1QixDQUFvQ21MLEtBQXBDLEVBQTJDLEtBQTNDLENBQUQsQ0FEakQsQ0FEVTtBQUluQjtBQUNBRyxNQUFBQSxHQUFHLEVBQUU7QUFMYyxLQUFoQixDQUFQO0FBT0g7O0FBQ0QsU0FBT3hELHNCQUFzQixHQUFHZ0IsSUFBekIsQ0FBK0J5QyxRQUFELElBQVk7QUFDN0MsUUFBSSxFQUFFSixLQUFLLElBQUlJLFFBQVgsQ0FBSixFQUEwQjtBQUN0QixZQUFNM0QsY0FBYyxDQUFDLElBQUlsRixLQUFKLENBQVcsMkJBQTBCeUksS0FBTSxFQUEzQyxDQUFELENBQXBCO0FBQ0g7O0FBQ0QsVUFBTUssUUFBUSxHQUFHRCxRQUFRLENBQUNKLEtBQUQsQ0FBUixDQUFnQi9DLEdBQWhCLENBQXFCRSxLQUFELElBQVM0QyxXQUFXLEdBQUcsU0FBZCxHQUEwQkcsU0FBUyxDQUFDL0MsS0FBRCxDQUFoRSxDQUFqQjtBQUVBLFdBQU87QUFDSDhDLE1BQUFBLE9BQU8sRUFBRUksUUFBUSxDQUFDQyxNQUFULENBQWlCQyxDQUFELElBQUtBLENBQUMsQ0FBQ3BGLFFBQUYsQ0FBVyxLQUFYLENBQXJCLENBRE47QUFHSGdGLE1BQUFBLEdBQUcsRUFBRUUsUUFBUSxDQUFDQyxNQUFULENBQWlCQyxDQUFELElBQUtBLENBQUMsQ0FBQ3BGLFFBQUYsQ0FBVyxNQUFYLENBQXJCO0FBSEYsS0FBUDtBQU1ILEdBWk0sQ0FBUDtBQWFIOztBQUNELFNBQVN5QixpQkFBVCxDQUEyQm1ELFdBQTNCLEVBQXdDO0FBQ3BDLFFBQU1TLFdBQVcsR0FBRyxJQUFJQyxHQUFKLEVBQXBCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLElBQUlELEdBQUosRUFBdEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsSUFBSUYsR0FBSixFQUFwQjtBQUNBLFFBQU1HLE1BQU0sR0FBRyxJQUFJSCxHQUFKLEVBQWY7O0FBQ0EsV0FBU0ksa0JBQVQsQ0FBNEIzQixHQUE1QixFQUFpQztBQUM3QixRQUFJekIsSUFBSSxHQUFHaUQsYUFBYSxDQUFDdEQsR0FBZCxDQUFrQjhCLEdBQWxCLENBQVg7O0FBQ0EsUUFBSXpCLElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSCxLQUo0QixDQUs3Qjs7O0FBQ0EsUUFBSUssUUFBUSxDQUFDUyxhQUFULENBQXdCLGdCQUFlVyxHQUFJLElBQTNDLENBQUosRUFBcUQ7QUFDakQsYUFBTzVCLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0g7O0FBQ0RtRCxJQUFBQSxhQUFhLENBQUNoRCxHQUFkLENBQWtCd0IsR0FBbEIsRUFBdUJ6QixJQUFJLEdBQUd3QixZQUFZLENBQUNDLEdBQUQsQ0FBMUM7QUFDQSxXQUFPekIsSUFBUDtBQUNIOztBQUNELFdBQVNxRCxlQUFULENBQXlCckwsSUFBekIsRUFBK0I7QUFDM0IsUUFBSWdJLElBQUksR0FBR2tELFdBQVcsQ0FBQ3ZELEdBQVosQ0FBZ0IzSCxJQUFoQixDQUFYOztBQUNBLFFBQUlnSSxJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0g7O0FBQ0RrRCxJQUFBQSxXQUFXLENBQUNqRCxHQUFaLENBQWdCakksSUFBaEIsRUFBc0JnSSxJQUFJLEdBQUdzRCxLQUFLLENBQUN0TCxJQUFELENBQUwsQ0FBWWtJLElBQVosQ0FBa0JVLEdBQUQsSUFBTztBQUNqRCxVQUFJLENBQUNBLEdBQUcsQ0FBQzJDLEVBQVQsRUFBYTtBQUNULGNBQU0sSUFBSXpKLEtBQUosQ0FBVyw4QkFBNkI5QixJQUFLLEVBQTdDLENBQU47QUFDSDs7QUFDRCxhQUFPNEksR0FBRyxDQUFDNEMsSUFBSixHQUFXdEQsSUFBWCxDQUFpQnNELElBQUQsS0FBUztBQUN4QnhMLFFBQUFBLElBQUksRUFBRUEsSUFEa0I7QUFFeEJ5TCxRQUFBQSxPQUFPLEVBQUVEO0FBRmUsT0FBVCxDQUFoQixDQUFQO0FBS0gsS0FUNEIsRUFTMUJwTCxLQVQwQixDQVNuQkMsR0FBRCxJQUFPO0FBQ1osWUFBTTJHLGNBQWMsQ0FBQzNHLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU8ySCxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIMEQsSUFBQUEsY0FBYyxDQUFFbkIsS0FBRixFQUFTO0FBQ25CLGFBQU9oRCxVQUFVLENBQUNnRCxLQUFELEVBQVFRLFdBQVIsQ0FBakI7QUFDSCxLQUhFOztBQUlIWSxJQUFBQSxZQUFZLENBQUVwQixLQUFGLEVBQVNxQixPQUFULEVBQWtCO0FBQzFCL0QsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCOEQsT0FBaEIsRUFBeUIxRCxJQUF6QixDQUErQjJELEVBQUQsSUFBTUEsRUFBRSxFQUF0QyxFQUNFM0QsSUFERixDQUNRaEosT0FBRCxLQUFZO0FBQ1g0TSxRQUFBQSxTQUFTLEVBQUU1TSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsT0FBbkIsSUFBOEJGLE9BRDlCO0FBRVhBLFFBQUFBLE9BQU8sRUFBRUE7QUFGRSxPQUFaLENBRFAsRUFLR21CLEdBQUQsS0FBUTtBQUNGMEwsUUFBQUEsS0FBSyxFQUFFMUw7QUFETCxPQUFSLENBTEYsRUFRRTZILElBUkYsQ0FRUThELEtBQUQsSUFBUztBQUNaLGNBQU1DLEdBQUcsR0FBR2xCLFdBQVcsQ0FBQ3BELEdBQVosQ0FBZ0I0QyxLQUFoQixDQUFaO0FBQ0FRLFFBQUFBLFdBQVcsQ0FBQzlDLEdBQVosQ0FBZ0JzQyxLQUFoQixFQUF1QnlCLEtBQXZCO0FBQ0EsWUFBSUMsR0FBRyxJQUFJLGFBQWFBLEdBQXhCLEVBQTZCQSxHQUFHLENBQUNuRSxPQUFKLENBQVlrRSxLQUFaO0FBQ2hDLE9BWkQ7QUFhSCxLQWxCRTs7QUFtQkhFLElBQUFBLFNBQVMsQ0FBRTNCLEtBQUYsRUFBU3pLLFFBQVQsRUFBbUI7QUFDeEIsYUFBT3lILFVBQVUsQ0FBQ2dELEtBQUQsRUFBUVksTUFBUixFQUFnQixNQUFJO0FBQ2pDLGNBQU1nQixpQkFBaUIsR0FBRzlCLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUNyQyxJQUFyQyxDQUEwQyxDQUFDO0FBQUVzQyxVQUFBQSxPQUFGO0FBQVlFLFVBQUFBO0FBQVosU0FBRCxLQUFzQjtBQUN0RixpQkFBTzdDLE9BQU8sQ0FBQ3VFLEdBQVIsQ0FBWSxDQUNmckIsV0FBVyxDQUFDc0IsR0FBWixDQUFnQjlCLEtBQWhCLElBQXlCLEVBQXpCLEdBQThCMUMsT0FBTyxDQUFDdUUsR0FBUixDQUFZNUIsT0FBTyxDQUFDaEQsR0FBUixDQUFZNEQsa0JBQVosQ0FBWixDQURmLEVBRWZ2RCxPQUFPLENBQUN1RSxHQUFSLENBQVkxQixHQUFHLENBQUNsRCxHQUFKLENBQVE2RCxlQUFSLENBQVosQ0FGZSxDQUFaLENBQVA7QUFJSCxTQUx5QixFQUt2Qm5ELElBTHVCLENBS2pCVSxHQUFELElBQU87QUFDWCxpQkFBTyxLQUFLOEMsY0FBTCxDQUFvQm5CLEtBQXBCLEVBQTJCckMsSUFBM0IsQ0FBaUNvRSxVQUFELEtBQWU7QUFDOUNBLFlBQUFBLFVBRDhDO0FBRTlDQyxZQUFBQSxNQUFNLEVBQUUzRCxHQUFHLENBQUMsQ0FBRDtBQUZtQyxXQUFmLENBQWhDLENBQVA7QUFLSCxTQVh5QixDQUExQjs7QUFZQSxrQkFBNEM7QUFDeENpQixVQUFBQSxlQUFlLEdBQUcsSUFBSWhDLE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQ3JDLGdCQUFJcUUsaUJBQUosRUFBdUI7QUFDbkIscUJBQU9BLGlCQUFpQixDQUFDSyxPQUFsQixDQUEwQixNQUFJO0FBQ2pDMUUsZ0JBQUFBLE9BQU87QUFDVixlQUZNLENBQVA7QUFHSDtBQUNKLFdBTmlCLENBQWxCO0FBT0g7O0FBQ0QsZUFBT2dDLHlCQUF5QixDQUFDcUMsaUJBQUQsRUFBb0I3RSxpQkFBcEIsRUFBdUNOLGNBQWMsQ0FBQyxJQUFJbEYsS0FBSixDQUFXLG1DQUFrQ3lJLEtBQU0sRUFBbkQsQ0FBRCxDQUFyRCxDQUF6QixDQUF1SXJDLElBQXZJLENBQTRJLENBQUM7QUFBRW9FLFVBQUFBLFVBQUY7QUFBZUMsVUFBQUE7QUFBZixTQUFELEtBQTRCO0FBQzNLLGdCQUFNM0QsR0FBRyxHQUFHNUosTUFBTSxDQUFDeU4sTUFBUCxDQUFjO0FBQ3RCRixZQUFBQSxNQUFNLEVBQUVBO0FBRGMsV0FBZCxFQUVURCxVQUZTLENBQVo7QUFHQSxpQkFBTyxXQUFXQSxVQUFYLEdBQXdCQSxVQUF4QixHQUFxQzFELEdBQTVDO0FBQ0gsU0FMTSxFQUtKeEksS0FMSSxDQUtHQyxHQUFELElBQU87QUFDWixjQUFJUCxRQUFKLEVBQWM7QUFDVjtBQUNBLGtCQUFNTyxHQUFOO0FBQ0g7O0FBQ0QsaUJBQU87QUFDSDBMLFlBQUFBLEtBQUssRUFBRTFMO0FBREosV0FBUDtBQUdILFNBYk0sQ0FBUDtBQWNILE9BcENnQixDQUFqQjtBQXFDSCxLQXpERTs7QUEwREhQLElBQUFBLFFBQVEsQ0FBRXlLLEtBQUYsRUFBUztBQUNiO0FBQ0E7QUFDQSxVQUFJbUMsRUFBSjs7QUFDQSxVQUFJQSxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsVUFBbkIsRUFBK0I7QUFDM0I7QUFDQSxZQUFJRixFQUFFLENBQUNHLFFBQUgsSUFBZSxLQUFLOUcsSUFBTCxDQUFVMkcsRUFBRSxDQUFDSSxhQUFiLENBQW5CLEVBQWdELE9BQU9qRixPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNuRDs7QUFDRCxhQUFPdUMsZ0JBQWdCLENBQUNDLFdBQUQsRUFBY0MsS0FBZCxDQUFoQixDQUFxQ3JDLElBQXJDLENBQTJDNkUsTUFBRCxJQUFVbEYsT0FBTyxDQUFDdUUsR0FBUixDQUFZMUQsV0FBVyxHQUFHcUUsTUFBTSxDQUFDdkMsT0FBUCxDQUFlaEQsR0FBZixDQUFvQmtDLE1BQUQsSUFBVWYsY0FBYyxDQUFDZSxNQUFELEVBQVMsUUFBVCxDQUEzQyxDQUFILEdBQzFFLEVBRG1ELENBQXBELEVBRUx4QixJQUZLLENBRUEsTUFBSTtBQUNQLFNBQUMsR0FBR2Isb0JBQUosRUFBMEJyQixtQkFBMUIsQ0FBOEMsTUFBSSxLQUFLa0csU0FBTCxDQUFlM0IsS0FBZixFQUFzQixJQUF0QixFQUE0Qm5LLEtBQTVCLENBQWtDLE1BQUksQ0FDbkYsQ0FENkMsQ0FBbEQ7QUFHSCxPQU5NLEVBTUpBLEtBTkksRUFNRTtBQUNULFlBQUksQ0FDSCxDQVJNLENBQVA7QUFTSDs7QUEzRUUsR0FBUDtBQTZFSDs7Ozs7Ozs7Ozs7QUN0Ulk7O0FBQ2JwQiw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBSCwwQ0FBeUM7QUFDckNnTyxFQUFBQSxVQUFVLEVBQUUsSUFEeUI7QUFFckNyRixFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9uSSxPQUFPLENBQUNKLE9BQWY7QUFDSDtBQUpvQyxDQUF6QztBQU1BSiw4Q0FBNkM7QUFDekNnTyxFQUFBQSxVQUFVLEVBQUUsSUFENkI7QUFFekNyRixFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU9zRixXQUFXLENBQUM3TixPQUFuQjtBQUNIO0FBSndDLENBQTdDO0FBTUFGLGlCQUFBLEdBQW9CK0QsU0FBcEI7QUFDQS9ELG9CQUFBLEdBQXVCZ08sWUFBdkI7QUFDQWhPLGdDQUFBLEdBQW1DaU8sd0JBQW5DO0FBQ0FqTyxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSUcsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLE9BQU8sR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMseUZBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJNk4sY0FBYyxHQUFHN04sbUJBQU8sQ0FBQyxrRUFBRCxDQUE1Qjs7QUFDQSxJQUFJME4sV0FBVyxHQUFHM04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMscUVBQUQsQ0FBUixDQUF4Qzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTTBOLGVBQWUsR0FBRztBQUNwQnROLEVBQUFBLE1BQU0sRUFBRSxJQURZO0FBRXBCdU4sRUFBQUEsY0FBYyxFQUFFLEVBRkk7O0FBR3BCQyxFQUFBQSxLQUFLLENBQUVsSCxFQUFGLEVBQU07QUFDUCxRQUFJLEtBQUt0RyxNQUFULEVBQWlCLE9BQU9zRyxFQUFFLEVBQVQ7O0FBQ2pCLGVBQW1DLEVBRWxDO0FBQ0o7O0FBUm1CLENBQXhCLEVBVUE7O0FBQ0EsTUFBTW9ILGlCQUFpQixHQUFHLENBQ3RCLFVBRHNCLEVBRXRCLE9BRnNCLEVBR3RCLE9BSHNCLEVBSXRCLFFBSnNCLEVBS3RCLFlBTHNCLEVBTXRCLFlBTnNCLEVBT3RCLFVBUHNCLEVBUXRCLFFBUnNCLEVBU3RCLFNBVHNCLEVBVXRCLGVBVnNCLEVBV3RCLFNBWHNCLEVBWXRCLFdBWnNCLEVBYXRCLGdCQWJzQixFQWN0QixlQWRzQixDQUExQjtBQWdCQSxNQUFNQyxZQUFZLEdBQUcsQ0FDakIsa0JBRGlCLEVBRWpCLHFCQUZpQixFQUdqQixxQkFIaUIsRUFJakIsa0JBSmlCLEVBS2pCLGlCQUxpQixFQU1qQixvQkFOaUIsQ0FBckI7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUNyQixNQURxQixFQUVyQixTQUZxQixFQUdyQixRQUhxQixFQUlyQixNQUpxQixFQUtyQixVQUxxQixFQU1yQixnQkFOcUIsQ0FBekIsRUFRQTs7QUFDQTNPLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQm9PLGVBQXRCLEVBQXVDLFFBQXZDLEVBQWlEO0FBQzdDMUYsRUFBQUEsR0FBRyxHQUFJO0FBQ0gsV0FBT25JLE9BQU8sQ0FBQ0osT0FBUixDQUFnQndPLE1BQXZCO0FBQ0g7O0FBSDRDLENBQWpEO0FBS0FILGlCQUFpQixDQUFDcEwsT0FBbEIsQ0FBMkJ3TCxLQUFELElBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTdPLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQm9PLGVBQXRCLEVBQXVDUSxLQUF2QyxFQUE4QztBQUMxQ2xHLElBQUFBLEdBQUcsR0FBSTtBQUNILFlBQU01SCxNQUFNLEdBQUcrTixTQUFTLEVBQXhCO0FBQ0EsYUFBTy9OLE1BQU0sQ0FBQzhOLEtBQUQsQ0FBYjtBQUNIOztBQUp5QyxHQUE5QztBQU1ILENBWEQ7QUFZQUYsZ0JBQWdCLENBQUN0TCxPQUFqQixDQUEwQndMLEtBQUQsSUFBUztBQUM5QlIsRUFBQUEsZUFBZSxDQUFDUSxLQUFELENBQWYsR0FBeUIsQ0FBQyxHQUFHaE0sSUFBSixLQUFXO0FBQ2hDLFVBQU05QixNQUFNLEdBQUcrTixTQUFTLEVBQXhCO0FBQ0EsV0FBTy9OLE1BQU0sQ0FBQzhOLEtBQUQsQ0FBTixDQUFjLEdBQUdoTSxJQUFqQixDQUFQO0FBQ0gsR0FIRDtBQUlILENBTEQ7QUFNQTZMLFlBQVksQ0FBQ3JMLE9BQWIsQ0FBc0I1QixLQUFELElBQVM7QUFDMUI0TSxFQUFBQSxlQUFlLENBQUNFLEtBQWhCLENBQXNCLE1BQUk7QUFDdEIvTixJQUFBQSxPQUFPLENBQUNKLE9BQVIsQ0FBZ0J3TyxNQUFoQixDQUF1QkcsRUFBdkIsQ0FBMEJ0TixLQUExQixFQUFpQyxDQUFDLEdBQUdvQixJQUFKLEtBQVc7QUFDeEMsWUFBTW1NLFVBQVUsR0FBSSxLQUFJdk4sS0FBSyxDQUFDd04sTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBQThCLEdBQUV6TixLQUFLLENBQUMwTixTQUFOLENBQWdCLENBQWhCLENBQW1CLEVBQTNFO0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUdmLGVBQXpCOztBQUNBLFVBQUllLGdCQUFnQixDQUFDSixVQUFELENBQXBCLEVBQWtDO0FBQzlCLFlBQUk7QUFDQUksVUFBQUEsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBR25NLElBQWhDO0FBQ0gsU0FGRCxDQUVFLE9BQU94QixHQUFQLEVBQVk7QUFDVnlDLFVBQUFBLE9BQU8sQ0FBQ2lKLEtBQVIsQ0FBZSx3Q0FBdUNpQyxVQUFXLEVBQWpFO0FBQ0FsTCxVQUFBQSxPQUFPLENBQUNpSixLQUFSLENBQWUsR0FBRTFMLEdBQUcsQ0FBQ2dPLE9BQVEsS0FBSWhPLEdBQUcsQ0FBQ2lPLEtBQU0sRUFBM0M7QUFDSDtBQUNKO0FBQ0osS0FYRDtBQVlILEdBYkQ7QUFjSCxDQWZEOztBQWdCQSxTQUFTUixTQUFULEdBQXFCO0FBQ2pCLE1BQUksQ0FBQ1QsZUFBZSxDQUFDdE4sTUFBckIsRUFBNkI7QUFDekIsVUFBTXNPLE9BQU8sR0FBRyxnQ0FBZ0MscUVBQWhEO0FBQ0EsVUFBTSxJQUFJdk0sS0FBSixDQUFVdU0sT0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBT2hCLGVBQWUsQ0FBQ3ROLE1BQXZCO0FBQ0g7O0FBQ0QsSUFBSXVGLFFBQVEsR0FBRytILGVBQWY7QUFDQW5PLGVBQUEsR0FBa0JvRyxRQUFsQjs7QUFDQSxTQUFTckMsU0FBVCxHQUFxQjtBQUNqQixTQUFPNUQsTUFBTSxDQUFDRCxPQUFQLENBQWVtUCxVQUFmLENBQTBCbkIsY0FBYyxDQUFDb0IsYUFBekMsQ0FBUDtBQUNIOztBQUNELFNBQVN0QixZQUFULENBQXNCLEdBQUdyTCxJQUF6QixFQUErQjtBQUMzQndMLEVBQUFBLGVBQWUsQ0FBQ3ROLE1BQWhCLEdBQXlCLElBQUlQLE9BQU8sQ0FBQ0osT0FBWixDQUFvQixHQUFHeUMsSUFBdkIsQ0FBekI7QUFDQXdMLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsQ0FBK0JqTCxPQUEvQixDQUF3Q2dFLEVBQUQsSUFBTUEsRUFBRSxFQUEvQztBQUVBZ0gsRUFBQUEsZUFBZSxDQUFDQyxjQUFoQixHQUFpQyxFQUFqQztBQUNBLFNBQU9ELGVBQWUsQ0FBQ3ROLE1BQXZCO0FBQ0g7O0FBQ0QsU0FBU29OLHdCQUFULENBQWtDcE4sTUFBbEMsRUFBMEM7QUFDdEMsUUFBTU4sUUFBUSxHQUFHTSxNQUFqQjtBQUNBLFFBQU0wTyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxNQUFNQyxRQUFYLElBQXVCakIsaUJBQXZCLEVBQXlDO0FBQ3JDLFFBQUksT0FBT2hPLFFBQVEsQ0FBQ2lQLFFBQUQsQ0FBZixLQUE4QixRQUFsQyxFQUE0QztBQUN4Q0QsTUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUIxUCxNQUFNLENBQUN5TixNQUFQLENBQWNrQyxLQUFLLENBQUNDLE9BQU4sQ0FBY25QLFFBQVEsQ0FBQ2lQLFFBQUQsQ0FBdEIsSUFBb0MsRUFBcEMsR0FBeUMsRUFBdkQsRUFDbEJqUCxRQUFRLENBQUNpUCxRQUFELENBRFUsQ0FBckIsQ0FDdUI7QUFEdkI7QUFHQTtBQUNIOztBQUNERCxJQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFxQmpQLFFBQVEsQ0FBQ2lQLFFBQUQsQ0FBN0I7QUFDSCxHQVpxQyxDQWF0Qzs7O0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ2IsTUFBVCxHQUFrQnBPLE9BQU8sQ0FBQ0osT0FBUixDQUFnQndPLE1BQWxDO0FBQ0FELEVBQUFBLGdCQUFnQixDQUFDdEwsT0FBakIsQ0FBMEJ3TCxLQUFELElBQVM7QUFDOUJZLElBQUFBLFFBQVEsQ0FBQ1osS0FBRCxDQUFSLEdBQWtCLENBQUMsR0FBR2hNLElBQUosS0FBVztBQUN6QixhQUFPcEMsUUFBUSxDQUFDb08sS0FBRCxDQUFSLENBQWdCLEdBQUdoTSxJQUFuQixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBSkQ7QUFLQSxTQUFPNE0sUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ3hKWTs7QUFDYnpQLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCNkUsZUFBMUI7O0FBQ0EsSUFBSTFFLE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJOEgsb0JBQW9CLEdBQUc5SCxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU1zUCx1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTL0ssZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWUrSyxFQUFBQTtBQUFmLENBQXpCLEVBQXFEO0FBQ2pELFFBQU1DLFVBQVUsR0FBR0QsUUFBUSxJQUFJLENBQUNGLHVCQUFoQztBQUNBLFFBQU1JLFNBQVMsR0FBRyxDQUFDLEdBQUc1UCxNQUFKLEVBQVl1RCxNQUFaLEVBQWxCO0FBQ0EsUUFBTSxDQUFDc00sT0FBRCxFQUFVQyxVQUFWLElBQXdCLENBQUMsR0FBRzlQLE1BQUosRUFBWStQLFFBQVosQ0FBcUIsS0FBckIsQ0FBOUI7QUFDQSxRQUFNbkwsTUFBTSxHQUFHLENBQUMsR0FBRzVFLE1BQUosRUFBWTZFLFdBQVosQ0FBeUJDLEVBQUQsSUFBTTtBQUN6QyxRQUFJOEssU0FBUyxDQUFDcE0sT0FBZCxFQUF1QjtBQUNuQm9NLE1BQUFBLFNBQVMsQ0FBQ3BNLE9BQVY7QUFDQW9NLE1BQUFBLFNBQVMsQ0FBQ3BNLE9BQVYsR0FBb0J3TSxTQUFwQjtBQUNIOztBQUNELFFBQUlMLFVBQVUsSUFBSUUsT0FBbEIsRUFBMkI7O0FBQzNCLFFBQUkvSyxFQUFFLElBQUlBLEVBQUUsQ0FBQ21MLE9BQWIsRUFBc0I7QUFDbEJMLE1BQUFBLFNBQVMsQ0FBQ3BNLE9BQVYsR0FBb0IwTSxPQUFPLENBQUNwTCxFQUFELEVBQU1MLFNBQUQsSUFBYUEsU0FBUyxJQUFJcUwsVUFBVSxDQUFDckwsU0FBRCxDQUF6QyxFQUN6QjtBQUNFRSxRQUFBQTtBQURGLE9BRHlCLENBQTNCO0FBSUg7QUFDSixHQVpjLEVBWVosQ0FDQ2dMLFVBREQsRUFFQ2hMLFVBRkQsRUFHQ2tMLE9BSEQsQ0FaWSxDQUFmO0FBaUJBLEdBQUMsR0FBRzdQLE1BQUosRUFBWStFLFNBQVosQ0FBc0IsTUFBSTtBQUN0QixRQUFJLENBQUN5Syx1QkFBTCxFQUE4QjtBQUMxQixVQUFJLENBQUNLLE9BQUwsRUFBYztBQUNWLGNBQU1NLFlBQVksR0FBRyxDQUFDLEdBQUduSSxvQkFBSixFQUEwQnJCLG1CQUExQixDQUE4QyxNQUFJbUosVUFBVSxDQUFDLElBQUQsQ0FBNUQsQ0FBckI7QUFFQSxlQUFPLE1BQUksQ0FBQyxHQUFHOUgsb0JBQUosRUFBMEJwQixrQkFBMUIsQ0FBNkN1SixZQUE3QyxDQUFYO0FBRUg7QUFDSjtBQUNKLEdBVEQsRUFTRyxDQUNDTixPQURELENBVEg7QUFZQSxTQUFPLENBQ0hqTCxNQURHLEVBRUhpTCxPQUZHLENBQVA7QUFJSDs7QUFDRCxTQUFTSyxPQUFULENBQWlCRSxPQUFqQixFQUEwQkMsUUFBMUIsRUFBb0N4UCxPQUFwQyxFQUE2QztBQUN6QyxRQUFNO0FBQUU0RyxJQUFBQSxFQUFGO0FBQU82SSxJQUFBQSxRQUFQO0FBQWtCQyxJQUFBQTtBQUFsQixNQUFnQ0MsY0FBYyxDQUFDM1AsT0FBRCxDQUFwRDtBQUNBMFAsRUFBQUEsUUFBUSxDQUFDM0gsR0FBVCxDQUFhd0gsT0FBYixFQUFzQkMsUUFBdEI7QUFDQUMsRUFBQUEsUUFBUSxDQUFDSixPQUFULENBQWlCRSxPQUFqQjtBQUNBLFNBQU8sU0FBU1IsU0FBVCxHQUFxQjtBQUN4QlcsSUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCTCxPQUFoQjtBQUNBRSxJQUFBQSxRQUFRLENBQUNWLFNBQVQsQ0FBbUJRLE9BQW5CLEVBRndCLENBR3hCOztBQUNBLFFBQUlHLFFBQVEsQ0FBQ0csSUFBVCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkosTUFBQUEsUUFBUSxDQUFDSyxVQUFUO0FBQ0FDLE1BQUFBLFNBQVMsQ0FBQ0gsTUFBVixDQUFpQmhKLEVBQWpCO0FBQ0g7QUFDSixHQVJEO0FBU0g7O0FBQ0QsTUFBTW1KLFNBQVMsR0FBRyxJQUFJakYsR0FBSixFQUFsQjs7QUFDQSxTQUFTNkUsY0FBVCxDQUF3QjNQLE9BQXhCLEVBQWlDO0FBQzdCLFFBQU00RyxFQUFFLEdBQUc1RyxPQUFPLENBQUM4RCxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsTUFBSXlLLFFBQVEsR0FBR3dCLFNBQVMsQ0FBQ3RJLEdBQVYsQ0FBY2IsRUFBZCxDQUFmOztBQUNBLE1BQUkySCxRQUFKLEVBQWM7QUFDVixXQUFPQSxRQUFQO0FBQ0g7O0FBQ0QsUUFBTW1CLFFBQVEsR0FBRyxJQUFJNUUsR0FBSixFQUFqQjtBQUNBLFFBQU0yRSxRQUFRLEdBQUcsSUFBSWIsb0JBQUosQ0FBMEJvQixPQUFELElBQVc7QUFDakRBLElBQUFBLE9BQU8sQ0FBQzdOLE9BQVIsQ0FBaUJxRixLQUFELElBQVM7QUFDckIsWUFBTWdJLFFBQVEsR0FBR0UsUUFBUSxDQUFDakksR0FBVCxDQUFhRCxLQUFLLENBQUNoSCxNQUFuQixDQUFqQjtBQUNBLFlBQU1vRCxTQUFTLEdBQUc0RCxLQUFLLENBQUN5SSxjQUFOLElBQXdCekksS0FBSyxDQUFDMEksaUJBQU4sR0FBMEIsQ0FBcEU7O0FBQ0EsVUFBSVYsUUFBUSxJQUFJNUwsU0FBaEIsRUFBMkI7QUFDdkI0TCxRQUFBQSxRQUFRLENBQUM1TCxTQUFELENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJnQixFQVFkNUQsT0FSYyxDQUFqQjtBQVNBK1AsRUFBQUEsU0FBUyxDQUFDaEksR0FBVixDQUFjbkIsRUFBZCxFQUFrQjJILFFBQVEsR0FBRztBQUN6QjNILElBQUFBLEVBRHlCO0FBRXpCNkksSUFBQUEsUUFGeUI7QUFHekJDLElBQUFBO0FBSHlCLEdBQTdCO0FBS0EsU0FBT25CLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNuRlk7O0FBQ2J6UCw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCbVIsVUFBbEI7O0FBQ0EsSUFBSWhSLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMkRBQUQsQ0FBckI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVMwUSxVQUFULENBQW9CQyxpQkFBcEIsRUFBdUM7QUFDbkMsV0FBU0MsaUJBQVQsQ0FBMkI1TyxLQUEzQixFQUFrQztBQUM5QixXQUFPLGFBQWN0QyxNQUFNLENBQUNELE9BQVAsQ0FBZW1FLGFBQWYsQ0FBNkIrTSxpQkFBN0IsRUFBZ0R0UixNQUFNLENBQUN5TixNQUFQLENBQWM7QUFDL0UxTSxNQUFBQSxNQUFNLEVBQUUsQ0FBQyxHQUFHUCxPQUFKLEVBQWF5RCxTQUFiO0FBRHVFLEtBQWQsRUFFbEV0QixLQUZrRSxDQUFoRCxDQUFyQjtBQUdIOztBQUNENE8sRUFBQUEsaUJBQWlCLENBQUNDLGVBQWxCLEdBQW9DRixpQkFBaUIsQ0FBQ0UsZUFBdEQ7QUFDQUQsRUFBQUEsaUJBQWlCLENBQUNFLG1CQUFsQixHQUF3Q0gsaUJBQWlCLENBQUNHLG1CQUExRDs7QUFDQSxZQUEyQztBQUN2QyxVQUFNQyxJQUFJLEdBQUdKLGlCQUFpQixDQUFDSyxXQUFsQixJQUFpQ0wsaUJBQWlCLENBQUNJLElBQW5ELElBQTJELFNBQXhFO0FBQ0FILElBQUFBLGlCQUFpQixDQUFDSSxXQUFsQixHQUFpQyxjQUFhRCxJQUFLLEdBQW5EO0FBQ0g7O0FBQ0QsU0FBT0gsaUJBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN6Qlk7O0FBQ2J2Uiw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCx1QkFBQSxHQUEwQjZGLGVBQTFCO0FBQ0E3RixpQkFBQSxHQUFvQmlHLFNBQXBCO0FBQ0FqRyxpQkFBQSxHQUFvQjBSLFNBQXBCO0FBQ0ExUixtQkFBQSxHQUFzQjJSLFdBQXRCO0FBQ0EzUixtQkFBQSxHQUFzQmdHLFdBQXRCO0FBQ0FoRyxtQkFBQSxHQUFzQjRSLFdBQXRCO0FBQ0E1UixrQkFBQSxHQUFxQmlCLFVBQXJCO0FBQ0FqQixxQkFBQSxHQUF3QjZSLGFBQXhCO0FBQ0E3UixtQkFBQSxHQUFzQm1FLFdBQXRCO0FBQ0FuRSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSThSLHVCQUF1QixHQUFHelIsbUJBQU8sQ0FBQyw2R0FBRCxDQUFyQzs7QUFDQSxJQUFJMFIsWUFBWSxHQUFHMVIsbUJBQU8sQ0FBQyxxRkFBRCxDQUExQjs7QUFDQSxJQUFJMlIsb0JBQW9CLEdBQUczUixtQkFBTyxDQUFDLG9GQUFELENBQWxDOztBQUNBLElBQUk0UixvQkFBb0IsR0FBRzVSLG1CQUFPLENBQUMsb0VBQUQsQ0FBbEM7O0FBQ0EsSUFBSTZSLEtBQUssR0FBRzlSLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdCQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSThSLE1BQU0sR0FBRzlSLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0FBQ0EsSUFBSStSLFVBQVUsR0FBRy9SLG1CQUFPLENBQUMsOENBQUQsQ0FBeEI7O0FBQ0EsSUFBSWdTLGlCQUFpQixHQUFHaFMsbUJBQU8sQ0FBQyw4REFBRCxDQUEvQjs7QUFDQSxJQUFJaVMsWUFBWSxHQUFHalMsbUJBQU8sQ0FBQyxnREFBRCxDQUExQjs7QUFDQSxJQUFJa1MsZ0JBQWdCLEdBQUduUyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFSLENBQTdDOztBQUNBLElBQUltUyxhQUFhLEdBQUduUyxtQkFBTyxDQUFDLG9EQUFELENBQTNCOztBQUNBLElBQUlvUyxXQUFXLEdBQUdwUyxtQkFBTyxDQUFDLGdEQUFELENBQXpCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxJQUFJaVMsa0JBQUo7O0FBQ0EsSUFBSWhNLEtBQUosRUFBcUMsRUFFcEM7O0FBQ0QsTUFBTWtNLFFBQVEsR0FBR2xNLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBU29NLHNCQUFULEdBQWtDO0FBQzlCLFNBQU9oVCxNQUFNLENBQUN5TixNQUFQLENBQWMsSUFBSTNLLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTRDO0FBQy9Da0ksSUFBQUEsU0FBUyxFQUFFO0FBRG9DLEdBQTVDLENBQVA7QUFHSDs7QUFDRCxTQUFTaUksYUFBVCxDQUF1QnhNLElBQXZCLEVBQTZCeU0sTUFBN0IsRUFBcUM7QUFDakMsU0FBT0EsTUFBTSxJQUFJek0sSUFBSSxDQUFDME0sVUFBTCxDQUFnQixHQUFoQixDQUFWLEdBQWlDMU0sSUFBSSxLQUFLLEdBQVQsR0FBZSxDQUFDLEdBQUd1TCx1QkFBSixFQUE2QnhMLDBCQUE3QixDQUF3RDBNLE1BQXhELENBQWYsR0FBa0YsR0FBRUEsTUFBTyxHQUFFRSxlQUFlLENBQUMzTSxJQUFELENBQWYsS0FBMEIsR0FBMUIsR0FBZ0NBLElBQUksQ0FBQzBJLFNBQUwsQ0FBZSxDQUFmLENBQWhDLEdBQW9EMUksSUFBSyxFQUF2TCxHQUEyTEEsSUFBbE07QUFDSDs7QUFDRCxTQUFTVixlQUFULENBQXlCVSxJQUF6QixFQUErQmxGLE1BQS9CLEVBQXVDeUUsT0FBdkMsRUFBZ0RDLGFBQWhELEVBQStEO0FBQzNELE1BQUlXLEtBQUosRUFBcUMsRUFBckMsTUFPTztBQUNILFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBU1QsU0FBVCxDQUFtQk0sSUFBbkIsRUFBeUJsRixNQUF6QixFQUFpQzZFLGFBQWpDLEVBQWdEO0FBQzVDLE1BQUlRLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0gsSUFBUDtBQUNIOztBQUNELFNBQVNtTCxTQUFULENBQW1CbkwsSUFBbkIsRUFBeUJsRixNQUF6QixFQUFpQztBQUM3QixNQUFJcUYsS0FBSixFQUFxQyxFQUtwQzs7QUFDRCxTQUFPSCxJQUFQO0FBQ0g7O0FBQ0QsU0FBUzJNLGVBQVQsQ0FBeUIzTSxJQUF6QixFQUErQjtBQUMzQixRQUFNdU4sVUFBVSxHQUFHdk4sSUFBSSxDQUFDaEUsT0FBTCxDQUFhLEdBQWIsQ0FBbkI7QUFDQSxRQUFNd1IsU0FBUyxHQUFHeE4sSUFBSSxDQUFDaEUsT0FBTCxDQUFhLEdBQWIsQ0FBbEI7O0FBQ0EsTUFBSXVSLFVBQVUsR0FBRyxDQUFDLENBQWQsSUFBbUJDLFNBQVMsR0FBRyxDQUFDLENBQXBDLEVBQXVDO0FBQ25DeE4sSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUMwSSxTQUFMLENBQWUsQ0FBZixFQUFrQjZFLFVBQVUsR0FBRyxDQUFDLENBQWQsR0FBa0JBLFVBQWxCLEdBQStCQyxTQUFqRCxDQUFQO0FBQ0g7O0FBQ0QsU0FBT3hOLElBQVA7QUFDSDs7QUFDRCxTQUFTb0wsV0FBVCxDQUFxQnBMLElBQXJCLEVBQTJCO0FBQ3ZCQSxFQUFBQSxJQUFJLEdBQUcyTSxlQUFlLENBQUMzTSxJQUFELENBQXRCO0FBQ0EsU0FBT0EsSUFBSSxLQUFLcU0sUUFBVCxJQUFxQnJNLElBQUksQ0FBQzBNLFVBQUwsQ0FBZ0JMLFFBQVEsR0FBRyxHQUEzQixDQUE1QjtBQUNIOztBQUNELFNBQVM1TSxXQUFULENBQXFCTyxJQUFyQixFQUEyQjtBQUN2QjtBQUNBLFNBQU93TSxhQUFhLENBQUN4TSxJQUFELEVBQU9xTSxRQUFQLENBQXBCO0FBQ0g7O0FBQ0QsU0FBU2hCLFdBQVQsQ0FBcUJyTCxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNFLEtBQUwsQ0FBV21NLFFBQVEsQ0FBQ2dCLE1BQXBCLENBQVA7QUFDQSxNQUFJLENBQUNyTixJQUFJLENBQUMwTSxVQUFMLENBQWdCLEdBQWhCLENBQUwsRUFBMkIxTSxJQUFJLEdBQUksSUFBR0EsSUFBSyxFQUFoQjtBQUMzQixTQUFPQSxJQUFQO0FBQ0g7O0FBQ0QsU0FBU3RGLFVBQVQsQ0FBb0IrUyxHQUFwQixFQUF5QjtBQUNyQjtBQUNBLE1BQUlBLEdBQUcsQ0FBQ2YsVUFBSixDQUFlLEdBQWYsS0FBdUJlLEdBQUcsQ0FBQ2YsVUFBSixDQUFlLEdBQWYsQ0FBdkIsSUFBOENlLEdBQUcsQ0FBQ2YsVUFBSixDQUFlLEdBQWYsQ0FBbEQsRUFBdUUsT0FBTyxJQUFQOztBQUN2RSxNQUFJO0FBQ0E7QUFDQSxVQUFNZ0IsY0FBYyxHQUFHLENBQUMsR0FBRzlCLE1BQUosRUFBWStCLGlCQUFaLEVBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUUosR0FBUixFQUFhQyxjQUFiLENBQWpCO0FBQ0EsV0FBT0UsUUFBUSxDQUFDRSxNQUFULEtBQW9CSixjQUFwQixJQUFzQ3RDLFdBQVcsQ0FBQ3dDLFFBQVEsQ0FBQ1gsUUFBVixDQUF4RDtBQUNILEdBTEQsQ0FLRSxPQUFPcFEsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFTeU8sYUFBVCxDQUF1QnhHLEtBQXZCLEVBQThCaUosVUFBOUIsRUFBMENDLEtBQTFDLEVBQWlEO0FBQzdDLE1BQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBR2hDLFdBQUosRUFBaUJpQyxhQUFqQixDQUErQnJKLEtBQS9CLENBQXJCO0FBQ0EsUUFBTXNKLGFBQWEsR0FBR0YsWUFBWSxDQUFDRyxNQUFuQztBQUNBLFFBQU1DLGNBQWMsR0FBRztBQUN2QixHQUFDUCxVQUFVLEtBQUtqSixLQUFmLEdBQXVCLENBQUMsR0FBR21ILGFBQUosRUFBbUJzQyxlQUFuQixDQUFtQ0wsWUFBbkMsRUFBaURILFVBQWpELENBQXZCLEdBQXNGLEVBQXZGLEtBQThGO0FBQzlGO0FBQ0FDLEVBQUFBLEtBSEE7QUFJQUMsRUFBQUEsaUJBQWlCLEdBQUduSixLQUFwQjtBQUNBLFFBQU0wSixNQUFNLEdBQUdqVixNQUFNLENBQUNvRCxJQUFQLENBQVl5UixhQUFaLENBQWY7O0FBQ0EsTUFBSSxDQUFDSSxNQUFNLENBQUNDLEtBQVAsQ0FBY0MsS0FBRCxJQUFTO0FBQ3ZCLFFBQUloVixLQUFLLEdBQUc0VSxjQUFjLENBQUNJLEtBQUQsQ0FBZCxJQUF5QixFQUFyQztBQUNBLFVBQU07QUFBRUMsTUFBQUEsTUFBRjtBQUFXQyxNQUFBQTtBQUFYLFFBQXlCUixhQUFhLENBQUNNLEtBQUQsQ0FBNUMsQ0FGdUIsQ0FHdkI7QUFDQTs7QUFDQSxRQUFJRyxRQUFRLEdBQUksSUFBR0YsTUFBTSxHQUFHLEtBQUgsR0FBVyxFQUFHLEdBQUVELEtBQU0sR0FBL0M7O0FBQ0EsUUFBSUUsUUFBSixFQUFjO0FBQ1ZDLE1BQUFBLFFBQVEsR0FBSSxHQUFFLENBQUNuVixLQUFELEdBQVMsR0FBVCxHQUFlLEVBQUcsSUFBR21WLFFBQVMsR0FBNUM7QUFDSDs7QUFDRCxRQUFJRixNQUFNLElBQUksQ0FBQ3pGLEtBQUssQ0FBQ0MsT0FBTixDQUFjelAsS0FBZCxDQUFmLEVBQXFDQSxLQUFLLEdBQUcsQ0FDekNBLEtBRHlDLENBQVI7QUFHckMsV0FBTyxDQUFDa1YsUUFBUSxJQUFJRixLQUFLLElBQUlKLGNBQXRCLE1BQ05MLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQ3RTLE9BQWxCLENBQTBCa1QsUUFBMUIsRUFBb0NGLE1BQU0sR0FBR2pWLEtBQUssQ0FBQ3FJLEdBQU4sRUFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQytNLElBQUFBLE9BQUQsSUFBV0Msa0JBQWtCLENBQUNELE9BQUQsQ0FKcUMsRUFLaEVFLElBTGdFLENBSzNELEdBTDJELENBQUgsR0FLakRELGtCQUFrQixDQUFDclYsS0FBRCxDQUxYLEtBS3VCLEdBTnJDLENBQVA7QUFPSCxHQW5CSSxDQUFMLEVBbUJJO0FBQ0F1VSxJQUFBQSxpQkFBaUIsR0FBRyxFQUFwQixDQUF1QjtBQUF2QixLQURBLENBR0o7QUFDQTtBQUNDOztBQUNELFNBQU87QUFDSE8sSUFBQUEsTUFERztBQUVIUyxJQUFBQSxNQUFNLEVBQUVoQjtBQUZMLEdBQVA7QUFJSDs7QUFDRCxTQUFTaUIsa0JBQVQsQ0FBNEJsQixLQUE1QixFQUFtQ1EsTUFBbkMsRUFBMkM7QUFDdkMsUUFBTVcsYUFBYSxHQUFHLEVBQXRCO0FBRUE1VixFQUFBQSxNQUFNLENBQUNvRCxJQUFQLENBQVlxUixLQUFaLEVBQW1CcFIsT0FBbkIsQ0FBNEJOLEdBQUQsSUFBTztBQUM5QixRQUFJLENBQUNrUyxNQUFNLENBQUNZLFFBQVAsQ0FBZ0I5UyxHQUFoQixDQUFMLEVBQTJCO0FBQ3ZCNlMsTUFBQUEsYUFBYSxDQUFDN1MsR0FBRCxDQUFiLEdBQXFCMFIsS0FBSyxDQUFDMVIsR0FBRCxDQUExQjtBQUNIO0FBQ0osR0FKRDtBQUtBLFNBQU82UyxhQUFQO0FBQ0g7O0FBQ0QsU0FBU3ZSLFdBQVQsQ0FBcUJ0RCxNQUFyQixFQUE2QkMsSUFBN0IsRUFBbUM4VSxTQUFuQyxFQUE4QztBQUMxQztBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsT0FBT2hWLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLENBQUMsR0FBR3FSLE1BQUosRUFBWTRELG9CQUFaLENBQWlDalYsSUFBakMsQ0FBcEQsQ0FIMEMsQ0FJMUM7QUFDQTs7QUFDQSxRQUFNa1YsYUFBYSxHQUFHRixXQUFXLENBQUNHLEtBQVosQ0FBa0Isb0JBQWxCLENBQXRCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdGLGFBQWEsR0FBR0YsV0FBVyxDQUFDakMsTUFBWixDQUFtQm1DLGFBQWEsQ0FBQyxDQUFELENBQWIsQ0FBaUJwQyxNQUFwQyxDQUFILEdBQWlEa0MsV0FBekY7QUFDQSxRQUFNSyxRQUFRLEdBQUdELGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixDQUFqQjs7QUFDQSxNQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZSxFQUFoQixFQUFvQkYsS0FBcEIsQ0FBMEIsV0FBMUIsQ0FBSixFQUE0QztBQUN4Q3JTLElBQUFBLE9BQU8sQ0FBQ2lKLEtBQVIsQ0FBZSx1Q0FBc0NpSixXQUFZLDZFQUFqRTtBQUNBLFVBQU1PLGFBQWEsR0FBRyxDQUFDLEdBQUdsRSxNQUFKLEVBQVltRSx3QkFBWixDQUFxQ0osa0JBQXJDLENBQXRCO0FBQ0FKLElBQUFBLFdBQVcsR0FBRyxDQUFDRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQyxDQUFELENBQWhCLEdBQXNCLEVBQXBDLElBQTBDSyxhQUF4RDtBQUNILEdBYnlDLENBYzFDOzs7QUFDQSxNQUFJLENBQUNwVixVQUFVLENBQUM2VSxXQUFELENBQWYsRUFBOEI7QUFDMUIsV0FBT0YsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7O0FBQ0QsTUFBSTtBQUNBRCxJQUFBQSxJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUTBCLFdBQVcsQ0FBQzdDLFVBQVosQ0FBdUIsR0FBdkIsSUFBOEJwUyxNQUFNLENBQUMwVixNQUFyQyxHQUE4QzFWLE1BQU0sQ0FBQzJTLFFBQTdELEVBQXVFLFVBQXZFLENBQVA7QUFDSCxHQUZELENBRUUsT0FBT3BRLENBQVAsRUFBVTtBQUNSO0FBQ0F5UyxJQUFBQSxJQUFJLEdBQUcsSUFBSXpCLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBYixDQUFQO0FBQ0g7O0FBQ0QsTUFBSTtBQUNBLFVBQU1vQyxRQUFRLEdBQUcsSUFBSXBDLEdBQUosQ0FBUTBCLFdBQVIsRUFBcUJELElBQXJCLENBQWpCO0FBQ0FXLElBQUFBLFFBQVEsQ0FBQ2hELFFBQVQsR0FBb0IsQ0FBQyxHQUFHMUIsdUJBQUosRUFBNkJ4TCwwQkFBN0IsQ0FBd0RrUSxRQUFRLENBQUNoRCxRQUFqRSxDQUFwQjtBQUNBLFFBQUlpRCxjQUFjLEdBQUcsRUFBckI7O0FBQ0EsUUFBSSxDQUFDLEdBQUdyRSxVQUFKLEVBQWdCc0UsY0FBaEIsQ0FBK0JGLFFBQVEsQ0FBQ2hELFFBQXhDLEtBQXFEZ0QsUUFBUSxDQUFDRyxZQUE5RCxJQUE4RWYsU0FBbEYsRUFBNkY7QUFDekYsWUFBTXJCLEtBQUssR0FBRyxDQUFDLEdBQUdqQyxZQUFKLEVBQWtCc0Usc0JBQWxCLENBQXlDSixRQUFRLENBQUNHLFlBQWxELENBQWQ7QUFDQSxZQUFNO0FBQUVuQixRQUFBQSxNQUFGO0FBQVdULFFBQUFBO0FBQVgsVUFBdUJsRCxhQUFhLENBQUMyRSxRQUFRLENBQUNoRCxRQUFWLEVBQW9CZ0QsUUFBUSxDQUFDaEQsUUFBN0IsRUFBdUNlLEtBQXZDLENBQTFDOztBQUNBLFVBQUlpQixNQUFKLEVBQVk7QUFDUmlCLFFBQUFBLGNBQWMsR0FBRyxDQUFDLEdBQUd0RSxNQUFKLEVBQVk0RCxvQkFBWixDQUFpQztBQUM5Q3ZDLFVBQUFBLFFBQVEsRUFBRWdDLE1BRG9DO0FBRTlDcUIsVUFBQUEsSUFBSSxFQUFFTCxRQUFRLENBQUNLLElBRitCO0FBRzlDdEMsVUFBQUEsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUNsQixLQUFELEVBQVFRLE1BQVI7QUFIcUIsU0FBakMsQ0FBakI7QUFLSDtBQUNKLEtBZEQsQ0FlQTs7O0FBQ0EsVUFBTTlRLFlBQVksR0FBR3VTLFFBQVEsQ0FBQ25DLE1BQVQsS0FBb0J3QixJQUFJLENBQUN4QixNQUF6QixHQUFrQ21DLFFBQVEsQ0FBQzFWLElBQVQsQ0FBYzJGLEtBQWQsQ0FBb0IrUCxRQUFRLENBQUNuQyxNQUFULENBQWdCVCxNQUFwQyxDQUFsQyxHQUFnRjRDLFFBQVEsQ0FBQzFWLElBQTlHO0FBQ0EsV0FBTzhVLFNBQVMsR0FBRyxDQUNmM1IsWUFEZSxFQUVmd1MsY0FBYyxJQUFJeFMsWUFGSCxDQUFILEdBR1pBLFlBSEo7QUFJSCxHQXJCRCxDQXFCRSxPQUFPYixDQUFQLEVBQVU7QUFDUixXQUFPd1MsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7QUFDSjs7QUFDRCxTQUFTZ0IsV0FBVCxDQUFxQjlDLEdBQXJCLEVBQTBCO0FBQ3RCLFFBQU1LLE1BQU0sR0FBRyxDQUFDLEdBQUdsQyxNQUFKLEVBQVkrQixpQkFBWixFQUFmO0FBQ0EsU0FBT0YsR0FBRyxDQUFDZixVQUFKLENBQWVvQixNQUFmLElBQXlCTCxHQUFHLENBQUMvRSxTQUFKLENBQWNvRixNQUFNLENBQUNULE1BQXJCLENBQXpCLEdBQXdESSxHQUEvRDtBQUNIOztBQUNELFNBQVMrQyxZQUFULENBQXNCbFcsTUFBdEIsRUFBOEJtVCxHQUE5QixFQUFtQ2pULEVBQW5DLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQSxNQUFJLENBQUNrRCxZQUFELEVBQWVDLFVBQWYsSUFBNkJDLFdBQVcsQ0FBQ3RELE1BQUQsRUFBU21ULEdBQVQsRUFBYyxJQUFkLENBQTVDO0FBQ0EsUUFBTUssTUFBTSxHQUFHLENBQUMsR0FBR2xDLE1BQUosRUFBWStCLGlCQUFaLEVBQWY7QUFDQSxRQUFNOEMsYUFBYSxHQUFHL1MsWUFBWSxDQUFDZ1AsVUFBYixDQUF3Qm9CLE1BQXhCLENBQXRCO0FBQ0EsUUFBTTRDLFdBQVcsR0FBRy9TLFVBQVUsSUFBSUEsVUFBVSxDQUFDK08sVUFBWCxDQUFzQm9CLE1BQXRCLENBQWxDO0FBQ0FwUSxFQUFBQSxZQUFZLEdBQUc2UyxXQUFXLENBQUM3UyxZQUFELENBQTFCO0FBQ0FDLEVBQUFBLFVBQVUsR0FBR0EsVUFBVSxHQUFHNFMsV0FBVyxDQUFDNVMsVUFBRCxDQUFkLEdBQTZCQSxVQUFwRDtBQUNBLFFBQU1nVCxXQUFXLEdBQUdGLGFBQWEsR0FBRy9TLFlBQUgsR0FBa0IrQixXQUFXLENBQUMvQixZQUFELENBQTlEO0FBQ0EsUUFBTWtULFVBQVUsR0FBR3BXLEVBQUUsR0FBRytWLFdBQVcsQ0FBQzNTLFdBQVcsQ0FBQ3RELE1BQUQsRUFBU0UsRUFBVCxDQUFaLENBQWQsR0FBMENtRCxVQUFVLElBQUlELFlBQTdFO0FBQ0EsU0FBTztBQUNIK1AsSUFBQUEsR0FBRyxFQUFFa0QsV0FERjtBQUVIblcsSUFBQUEsRUFBRSxFQUFFa1csV0FBVyxHQUFHRSxVQUFILEdBQWdCblIsV0FBVyxDQUFDbVIsVUFBRDtBQUZ2QyxHQUFQO0FBSUg7O0FBQ0QsU0FBU0MsbUJBQVQsQ0FBNkI1RCxRQUE3QixFQUF1QzZELEtBQXZDLEVBQThDO0FBQzFDLFFBQU1DLGFBQWEsR0FBRyxDQUFDLEdBQUd4Rix1QkFBSixFQUE2QnpMLHVCQUE3QixDQUFxRCxDQUFDLEdBQUcyTCxvQkFBSixFQUEwQnVGLG1CQUExQixDQUE4Qy9ELFFBQTlDLENBQXJELENBQXRCOztBQUNBLE1BQUk4RCxhQUFhLEtBQUssTUFBbEIsSUFBNEJBLGFBQWEsS0FBSyxTQUFsRCxFQUE2RDtBQUN6RCxXQUFPOUQsUUFBUDtBQUNILEdBSnlDLENBSzFDOzs7QUFDQSxNQUFJLENBQUM2RCxLQUFLLENBQUMxQixRQUFOLENBQWUyQixhQUFmLENBQUwsRUFBb0M7QUFDaEM7QUFDQUQsSUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVlDLElBQUQsSUFBUTtBQUNmLFVBQUksQ0FBQyxHQUFHckYsVUFBSixFQUFnQnNFLGNBQWhCLENBQStCZSxJQUEvQixLQUF3QyxDQUFDLEdBQUdoRixXQUFKLEVBQWlCaUMsYUFBakIsQ0FBK0IrQyxJQUEvQixFQUFxQ0MsRUFBckMsQ0FBd0M3USxJQUF4QyxDQUE2Q3lRLGFBQTdDLENBQTVDLEVBQXlHO0FBQ3JHOUQsUUFBQUEsUUFBUSxHQUFHaUUsSUFBWDtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUNELFNBQU8sQ0FBQyxHQUFHM0YsdUJBQUosRUFBNkJ6TCx1QkFBN0IsQ0FBcURtTixRQUFyRCxDQUFQO0FBQ0g7O0FBQ0QsTUFBTW1FLHVCQUF1QixHQUFHalIsTUFBQSxJQUFtSCxDQUFuSjtBQVFBLE1BQU13UixrQkFBa0IsR0FBRzdOLE1BQU0sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxTQUFTOE4sVUFBVCxDQUFvQm5FLEdBQXBCLEVBQXlCb0UsUUFBekIsRUFBbUM7QUFDL0IsU0FBT2hNLEtBQUssQ0FBQzRILEdBQUQsRUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXFFLElBQUFBLFdBQVcsRUFBRTtBQVpDLEdBQU4sQ0FBTCxDQWFKclAsSUFiSSxDQWFFVSxHQUFELElBQU87QUFDWCxRQUFJLENBQUNBLEdBQUcsQ0FBQzJDLEVBQVQsRUFBYTtBQUNULFVBQUkrTCxRQUFRLEdBQUcsQ0FBWCxJQUFnQjFPLEdBQUcsQ0FBQzRPLE1BQUosSUFBYyxHQUFsQyxFQUF1QztBQUNuQyxlQUFPSCxVQUFVLENBQUNuRSxHQUFELEVBQU1vRSxRQUFRLEdBQUcsQ0FBakIsQ0FBakI7QUFDSDs7QUFDRCxVQUFJMU8sR0FBRyxDQUFDNE8sTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3BCLGVBQU81TyxHQUFHLENBQUM2TyxJQUFKLEdBQVd2UCxJQUFYLENBQWlCd1AsSUFBRCxJQUFRO0FBQzNCLGNBQUlBLElBQUksQ0FBQ0MsUUFBVCxFQUFtQjtBQUNmLG1CQUFPO0FBQ0hBLGNBQUFBLFFBQVEsRUFBRVA7QUFEUCxhQUFQO0FBR0g7O0FBQ0QsZ0JBQU0sSUFBSXRWLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0gsU0FQTSxDQUFQO0FBUUg7O0FBQ0QsWUFBTSxJQUFJQSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNIOztBQUNELFdBQU84RyxHQUFHLENBQUM2TyxJQUFKLEVBQVA7QUFDSCxHQS9CTSxDQUFQO0FBZ0NIOztBQUNELFNBQVNHLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDQyxjQUFqQyxFQUFpRDtBQUM3QyxTQUFPVCxVQUFVLENBQUNRLFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDMVgsS0FBN0MsQ0FBb0RDLEdBQUQsSUFBTztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUN5WCxjQUFMLEVBQXFCO0FBQ2pCLE9BQUMsR0FBRzdHLFlBQUosRUFBa0JqSyxjQUFsQixDQUFpQzNHLEdBQWpDO0FBQ0g7O0FBQ0QsVUFBTUEsR0FBTjtBQUNILEdBUk0sQ0FBUDtBQVNIOztBQUNELE1BQU0wWCxNQUFOLENBQWE7QUFDVEMsRUFBQUEsV0FBVyxDQUFDQyxTQUFELEVBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUVDLElBQUFBLFlBQUY7QUFBaUJDLElBQUFBLFVBQWpCO0FBQThCQyxJQUFBQSxHQUE5QjtBQUFvQ0MsSUFBQUEsT0FBcEM7QUFBOENDLElBQUFBLFNBQVMsRUFBRUMsVUFBekQ7QUFBc0VwWSxJQUFBQSxHQUFHLEVBQUVxWSxJQUEzRTtBQUFrRkMsSUFBQUEsWUFBbEY7QUFBaUdDLElBQUFBLFVBQWpHO0FBQThHclksSUFBQUEsTUFBOUc7QUFBdUh5RSxJQUFBQSxPQUF2SDtBQUFpSUksSUFBQUEsYUFBakk7QUFBaUpILElBQUFBLGFBQWpKO0FBQWlLNFQsSUFBQUE7QUFBakssR0FBekIsRUFBdU07QUFDOU07QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWCxDQUY4TSxDQUk5TTs7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUVBLFNBQUtDLElBQUwsR0FBWSxDQUFaOztBQUNBLFNBQUtDLFVBQUwsR0FBbUI5WCxDQUFELElBQUs7QUFDbkIsWUFBTStYLEtBQUssR0FBRy9YLENBQUMsQ0FBQytYLEtBQWhCOztBQUNBLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFFeEcsVUFBQUEsUUFBUSxFQUFFdUYsU0FBWjtBQUF3QnhFLFVBQUFBLEtBQUssRUFBRXlFO0FBQS9CLFlBQTJDLElBQWpEO0FBQ0EsYUFBS2lCLFdBQUwsQ0FBaUIsY0FBakIsRUFBaUMsQ0FBQyxHQUFHOUgsTUFBSixFQUFZNEQsb0JBQVosQ0FBaUM7QUFDOUR2QyxVQUFBQSxRQUFRLEVBQUV4TixXQUFXLENBQUMrUyxTQUFELENBRHlDO0FBRTlEeEUsVUFBQUEsS0FBSyxFQUFFeUU7QUFGdUQsU0FBakMsQ0FBakMsRUFHSSxDQUFDLEdBQUc3RyxNQUFKLEVBQVkrSCxNQUFaLEVBSEo7QUFJQTtBQUNIOztBQUNELFVBQUksQ0FBQ0YsS0FBSyxDQUFDRyxHQUFYLEVBQWdCO0FBQ1o7QUFDSDs7QUFDRCxVQUFJQyxZQUFKO0FBQ0EsWUFBTTtBQUFFcEcsUUFBQUEsR0FBRjtBQUFRalQsUUFBQUEsRUFBRSxFQUFFa1ksR0FBWjtBQUFrQmpZLFFBQUFBLE9BQWxCO0FBQTRCcVosUUFBQUE7QUFBNUIsVUFBcUNMLEtBQTNDOztBQUNBLFVBQUl0VCxLQUFKLEVBQTJDLEVBdUIxQzs7QUFDRCxXQUFLb1QsSUFBTCxHQUFZTyxHQUFaO0FBQ0EsWUFBTTtBQUFFN0csUUFBQUEsUUFBUSxFQUFFdUY7QUFBWixVQUEyQixDQUFDLEdBQUcxRyxpQkFBSixFQUF1QnlJLGdCQUF2QixDQUF3QzlHLEdBQXhDLENBQWpDLENBakRtQixDQWtEbkI7QUFDQTs7QUFDQSxVQUFJLEtBQUsrRyxLQUFMLElBQWM5QixHQUFHLEtBQUssS0FBSzFDLE1BQTNCLElBQXFDd0MsU0FBUyxLQUFLLEtBQUt2RixRQUE1RCxFQUFzRTtBQUNsRTtBQUNILE9BdERrQixDQXVEbkI7QUFDQTs7O0FBQ0EsVUFBSSxLQUFLd0gsSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVaEIsS0FBVixDQUFsQixFQUFvQztBQUNoQztBQUNIOztBQUNELFdBQUtpQixNQUFMLENBQVksY0FBWixFQUE0QmpILEdBQTVCLEVBQWlDaUYsR0FBakMsRUFBc0NuWixNQUFNLENBQUN5TixNQUFQLENBQWMsRUFBZCxFQUNuQ3ZNLE9BRG1DLEVBQzFCO0FBQ1JtQixRQUFBQSxPQUFPLEVBQUVuQixPQUFPLENBQUNtQixPQUFSLElBQW1CLEtBQUsrWSxRQUR6QjtBQUVSN1osUUFBQUEsTUFBTSxFQUFFTCxPQUFPLENBQUNLLE1BQVIsSUFBa0IsS0FBSzZFO0FBRnZCLE9BRDBCLENBQXRDLEVBSUlrVSxZQUpKO0FBS0gsS0FqRUQsQ0FSOE0sQ0EwRTlNOzs7QUFDQSxTQUFLL08sS0FBTCxHQUFhLENBQUMsR0FBR3lHLHVCQUFKLEVBQTZCekwsdUJBQTdCLENBQXFEMFMsU0FBckQsQ0FBYixDQTNFOE0sQ0E0RTlNOztBQUNBLFNBQUtvQyxVQUFMLEdBQWtCLEVBQWxCLENBN0U4TSxDQStFOU07QUFDQTtBQUNBOztBQUNBLFFBQUlwQyxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDekIsV0FBS29DLFVBQUwsQ0FBZ0IsS0FBSzlQLEtBQXJCLElBQThCO0FBQzFCaU8sUUFBQUEsU0FBUyxFQUFFQyxVQURlO0FBRTFCNkIsUUFBQUEsT0FBTyxFQUFFLElBRmlCO0FBRzFCM1ksUUFBQUEsS0FBSyxFQUFFeVcsWUFIbUI7QUFJMUIvWCxRQUFBQSxHQUFHLEVBQUVxWSxJQUpxQjtBQUsxQjZCLFFBQUFBLE9BQU8sRUFBRW5DLFlBQVksSUFBSUEsWUFBWSxDQUFDbUMsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFcEMsWUFBWSxJQUFJQSxZQUFZLENBQUNvQztBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QjdCLE1BQUFBLFNBQVMsRUFBRUYsR0FEWTtBQUV2QnBOLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLMEMsTUFBTCxHQUFjbUssTUFBTSxDQUFDbkssTUFBckI7QUFDQSxTQUFLeUssVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLM0YsUUFBTCxHQUFnQnVGLFNBQWhCO0FBQ0EsU0FBS3hFLEtBQUwsR0FBYXlFLE1BQWIsQ0FyRzhNLENBc0c5TTtBQUNBOztBQUNBLFVBQU11QyxpQkFBaUIsR0FBRyxDQUFDLEdBQUduSixVQUFKLEVBQWdCc0UsY0FBaEIsQ0FBK0JxQyxTQUEvQixLQUE2Qy9SLElBQUksQ0FBQ3dVLGFBQUwsQ0FBbUJDLFVBQTFGOztBQUNBLFNBQUtsRixNQUFMLEdBQWNnRixpQkFBaUIsR0FBR3hDLFNBQUgsR0FBZUUsR0FBOUM7QUFDQSxTQUFLckcsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLOEksR0FBTCxHQUFXakMsWUFBWDtBQUNBLFNBQUtrQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0J2QyxPQUFoQixDQTdHOE0sQ0E4RzlNO0FBQ0E7O0FBQ0EsU0FBSzBCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS3JCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS21DLE9BQUwsR0FBZSxDQUFDLEVBQUU3VSxJQUFJLENBQUN3VSxhQUFMLENBQW1CTSxJQUFuQixJQUEyQjlVLElBQUksQ0FBQ3dVLGFBQUwsQ0FBbUJPLEdBQTlDLElBQXFEL1UsSUFBSSxDQUFDd1UsYUFBTCxDQUFtQlEsTUFBbkIsSUFBNkIsQ0FBQ2hWLElBQUksQ0FBQ3dVLGFBQUwsQ0FBbUJTLEdBQXRHLElBQTZHLENBQUNWLGlCQUFELElBQXNCLENBQUN2VSxJQUFJLENBQUNrVixRQUFMLENBQWNDLE1BQXJDLElBQStDLENBQUN6VixLQUEvSixDQUFoQjtBQUNBLFNBQUtpVCxTQUFMLEdBQWlCLENBQUMsQ0FBQ0EsU0FBbkI7QUFDQSxTQUFLL1QsY0FBTCxHQUFzQixLQUF0Qjs7QUFDQSxRQUFJYyxLQUFKLEVBQXFDLEVBTXBDOztBQUNELGVBQW1DLEVBdUJsQztBQUNKOztBQUNEK1YsRUFBQUEsTUFBTSxHQUFHO0FBQ0x2VixJQUFBQSxNQUFNLENBQUNnVixRQUFQLENBQWdCTyxNQUFoQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7QUFBTUMsRUFBQUEsSUFBSSxHQUFHO0FBQ0x4VixJQUFBQSxNQUFNLENBQUMyUSxPQUFQLENBQWU2RSxJQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNcE8sRUFBQUEsSUFBSSxDQUFDMEYsR0FBRCxFQUFNalQsRUFBTixFQUFVQyxPQUFPLEdBQUcsRUFBcEIsRUFDSDtBQUNDLFFBQUkwRixLQUFKLEVBQTJDLEVBYTFDOztBQUNELEtBQUM7QUFBRXNOLE1BQUFBLEdBQUY7QUFBUWpULE1BQUFBO0FBQVIsUUFBZ0JnVyxZQUFZLENBQUMsSUFBRCxFQUFPL0MsR0FBUCxFQUFZalQsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS2thLE1BQUwsQ0FBWSxXQUFaLEVBQXlCakgsR0FBekIsRUFBOEJqVCxFQUE5QixFQUFrQ0MsT0FBbEMsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTWtCLEVBQUFBLE9BQU8sQ0FBQzhSLEdBQUQsRUFBTWpULEVBQU4sRUFBVUMsT0FBTyxHQUFHLEVBQXBCLEVBQ047QUFDQyxLQUFDO0FBQUVnVCxNQUFBQSxHQUFGO0FBQVFqVCxNQUFBQTtBQUFSLFFBQWdCZ1csWUFBWSxDQUFDLElBQUQsRUFBTy9DLEdBQVAsRUFBWWpULEVBQVosQ0FBN0I7QUFDQSxXQUFPLEtBQUtrYSxNQUFMLENBQVksY0FBWixFQUE0QmpILEdBQTVCLEVBQWlDalQsRUFBakMsRUFBcUNDLE9BQXJDLENBQVA7QUFDSDs7QUFDVyxRQUFOaWEsTUFBTSxDQUFDMEIsTUFBRCxFQUFTM0ksR0FBVCxFQUFjalQsRUFBZCxFQUFrQkMsT0FBbEIsRUFBMkJvWixZQUEzQixFQUF5QztBQUNqRCxRQUFJLENBQUNuWixVQUFVLENBQUMrUyxHQUFELENBQWYsRUFBc0I7QUFDbEI5TSxNQUFBQSxNQUFNLENBQUNnVixRQUFQLENBQWdCcGIsSUFBaEIsR0FBdUJrVCxHQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUNELFVBQU00SSxpQkFBaUIsR0FBRzVJLEdBQUcsS0FBS2pULEVBQVIsSUFBY0MsT0FBTyxDQUFDNmIsRUFBdEIsSUFBNEI3YixPQUFPLENBQUNzYixrQkFBOUQsQ0FMaUQsQ0FNakQ7QUFDQTs7QUFDQSxRQUFJdGIsT0FBTyxDQUFDNmIsRUFBWixFQUFnQjtBQUNaLFdBQUtoQixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQU1pQixVQUFVLEdBQUcsS0FBS3piLE1BQXhCOztBQUNBLFFBQUlxRixLQUFKLEVBQXFDLFlBNkNwQzs7QUFDRCxRQUFJLENBQUMxRixPQUFPLENBQUM2YixFQUFiLEVBQWlCO0FBQ2IsV0FBSzlCLEtBQUwsR0FBYSxLQUFiO0FBQ0gsS0E1RGdELENBNkRqRDs7O0FBQ0EsUUFBSTVJLE1BQU0sQ0FBQ2dMLEVBQVgsRUFBZTtBQUNYQyxNQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBaUIsYUFBakI7QUFDSDs7QUFDRCxVQUFNO0FBQUVsYixNQUFBQSxPQUFPLEdBQUU7QUFBWCxRQUFzQm5CLE9BQTVCO0FBQ0EsVUFBTXNjLFVBQVUsR0FBRztBQUNmbmIsTUFBQUE7QUFEZSxLQUFuQjs7QUFHQSxRQUFJLEtBQUtvYixjQUFULEVBQXlCO0FBQ3JCLFdBQUtDLGtCQUFMLENBQXdCLEtBQUtELGNBQTdCLEVBQTZDRCxVQUE3QztBQUNIOztBQUNEdmMsSUFBQUEsRUFBRSxHQUFHaUYsV0FBVyxDQUFDQyxTQUFTLENBQUMwTCxXQUFXLENBQUM1USxFQUFELENBQVgsR0FBa0I2USxXQUFXLENBQUM3USxFQUFELENBQTdCLEdBQW9DQSxFQUFyQyxFQUF5Q0MsT0FBTyxDQUFDSyxNQUFqRCxFQUF5RCxLQUFLNkUsYUFBOUQsQ0FBVixDQUFoQjtBQUNBLFVBQU11WCxTQUFTLEdBQUcvTCxTQUFTLENBQUNDLFdBQVcsQ0FBQzVRLEVBQUQsQ0FBWCxHQUFrQjZRLFdBQVcsQ0FBQzdRLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDLEtBQUtNLE1BQTlDLENBQTNCO0FBQ0EsU0FBS2tjLGNBQUwsR0FBc0J4YyxFQUF0QjtBQUNBLFFBQUkyYyxZQUFZLEdBQUdaLFVBQVUsS0FBSyxLQUFLemIsTUFBdkMsQ0EzRWlELENBNEVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBQ0wsT0FBTyxDQUFDNmIsRUFBVCxJQUFlLEtBQUtjLGVBQUwsQ0FBcUJGLFNBQXJCLENBQWYsSUFBa0QsQ0FBQ0MsWUFBdkQsRUFBcUU7QUFDakUsV0FBS25ILE1BQUwsR0FBY2tILFNBQWQ7QUFDQTVFLE1BQUFBLE1BQU0sQ0FBQ25LLE1BQVAsQ0FBY2tQLElBQWQsQ0FBbUIsaUJBQW5CLEVBQXNDN2MsRUFBdEMsRUFBMEN1YyxVQUExQyxFQUZpRSxDQUdqRTs7QUFDQSxXQUFLckQsV0FBTCxDQUFpQjBDLE1BQWpCLEVBQXlCM0ksR0FBekIsRUFBOEJqVCxFQUE5QixFQUFrQ0MsT0FBbEM7QUFDQSxXQUFLNmMsWUFBTCxDQUFrQkosU0FBbEI7QUFDQSxXQUFLSyxNQUFMLENBQVksS0FBSzNDLFVBQUwsQ0FBZ0IsS0FBSzlQLEtBQXJCLENBQVosRUFBeUMsSUFBekM7QUFDQXdOLE1BQUFBLE1BQU0sQ0FBQ25LLE1BQVAsQ0FBY2tQLElBQWQsQ0FBbUIsb0JBQW5CLEVBQXlDN2MsRUFBekMsRUFBNkN1YyxVQUE3QztBQUNBLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUlTLE1BQU0sR0FBRyxDQUFDLEdBQUcxTCxpQkFBSixFQUF1QnlJLGdCQUF2QixDQUF3QzlHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUVSLE1BQUFBLFFBQVEsRUFBRXVGLFNBQVo7QUFBd0J4RSxNQUFBQSxLQUFLLEVBQUV5RTtBQUEvQixRQUEyQytFLE1BQS9DLENBNUZpRCxDQTZGakQ7QUFDQTtBQUNBOztBQUNBLFFBQUkxRyxLQUFKLEVBQVcyRyxRQUFYOztBQUNBLFFBQUk7QUFDQTNHLE1BQUFBLEtBQUssR0FBRyxNQUFNLEtBQUs4QixVQUFMLENBQWdCOEUsV0FBaEIsRUFBZDtBQUNBLE9BQUM7QUFBRUMsUUFBQUEsVUFBVSxFQUFFRjtBQUFkLFVBQTRCLE1BQU0sQ0FBQyxHQUFHak0sWUFBSixFQUFrQi9KLHNCQUFsQixFQUFuQztBQUNILEtBSEQsQ0FHRSxPQUFPd1IsSUFBUCxFQUFhO0FBQ1g7QUFDQTtBQUNBdFMsTUFBQUEsTUFBTSxDQUFDZ1YsUUFBUCxDQUFnQnBiLElBQWhCLEdBQXVCQyxFQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNILEtBekdnRCxDQTBHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDLEtBQUtvZCxRQUFMLENBQWNWLFNBQWQsQ0FBRCxJQUE2QixDQUFDQyxZQUFsQyxFQUFnRDtBQUM1Q2YsTUFBQUEsTUFBTSxHQUFHLGNBQVQ7QUFDSCxLQWpIZ0QsQ0FrSGpEO0FBQ0E7OztBQUNBLFFBQUl6WSxVQUFVLEdBQUduRCxFQUFqQixDQXBIaUQsQ0FxSGpEO0FBQ0E7QUFDQTs7QUFDQWdZLElBQUFBLFNBQVMsR0FBR0EsU0FBUyxHQUFHLENBQUMsR0FBR2pILHVCQUFKLEVBQTZCekwsdUJBQTdCLENBQXFEdUwsV0FBVyxDQUFDbUgsU0FBRCxDQUFoRSxDQUFILEdBQWtGQSxTQUF2Rzs7QUFDQSxRQUFJNkQsaUJBQWlCLElBQUk3RCxTQUFTLEtBQUssU0FBdkMsRUFBa0Q7QUFDOUMvWCxNQUFBQSxPQUFPLENBQUNzYixrQkFBUixHQUE2QixJQUE3Qjs7QUFDQSxVQUFJNVYsS0FBSixFQUEyRCxFQUEzRCxNQVdPO0FBQ0hxWCxRQUFBQSxNQUFNLENBQUN2SyxRQUFQLEdBQWtCNEQsbUJBQW1CLENBQUMyQixTQUFELEVBQVkxQixLQUFaLENBQXJDOztBQUNBLFlBQUkwRyxNQUFNLENBQUN2SyxRQUFQLEtBQW9CdUYsU0FBeEIsRUFBbUM7QUFDL0JBLFVBQUFBLFNBQVMsR0FBR2dGLE1BQU0sQ0FBQ3ZLLFFBQW5CO0FBQ0F1SyxVQUFBQSxNQUFNLENBQUN2SyxRQUFQLEdBQWtCeE4sV0FBVyxDQUFDK1MsU0FBRCxDQUE3QjtBQUNBL0UsVUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzdCLE1BQUosRUFBWTRELG9CQUFaLENBQWlDZ0ksTUFBakMsQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxVQUFNMVMsS0FBSyxHQUFHLENBQUMsR0FBR3lHLHVCQUFKLEVBQTZCekwsdUJBQTdCLENBQXFEMFMsU0FBckQsQ0FBZDs7QUFDQSxRQUFJLENBQUM5WCxVQUFVLENBQUNGLEVBQUQsQ0FBZixFQUFxQjtBQUNqQixnQkFBMkM7QUFDdkMsY0FBTSxJQUFJNkIsS0FBSixDQUFXLGtCQUFpQm9SLEdBQUksY0FBYWpULEVBQUcsMkNBQXRDLEdBQW9GLG9GQUE5RixDQUFOO0FBQ0g7O0FBQ0RtRyxNQUFBQSxNQUFNLENBQUNnVixRQUFQLENBQWdCcGIsSUFBaEIsR0FBdUJDLEVBQXZCO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7O0FBQ0RtRCxJQUFBQSxVQUFVLEdBQUd3TixTQUFTLENBQUNFLFdBQVcsQ0FBQzFOLFVBQUQsQ0FBWixFQUEwQixLQUFLN0MsTUFBL0IsQ0FBdEI7O0FBQ0EsUUFBSSxDQUFDLEdBQUcrUSxVQUFKLEVBQWdCc0UsY0FBaEIsQ0FBK0JyTCxLQUEvQixDQUFKLEVBQTJDO0FBQ3ZDLFlBQU0wUixRQUFRLEdBQUcsQ0FBQyxHQUFHMUssaUJBQUosRUFBdUJ5SSxnQkFBdkIsQ0FBd0M1VyxVQUF4QyxDQUFqQjtBQUNBLFlBQU1vUSxVQUFVLEdBQUd5SSxRQUFRLENBQUN2SixRQUE1QjtBQUNBLFlBQU04SyxVQUFVLEdBQUcsQ0FBQyxHQUFHN0wsV0FBSixFQUFpQmlDLGFBQWpCLENBQStCckosS0FBL0IsQ0FBbkI7QUFDQSxZQUFNa1QsVUFBVSxHQUFHLENBQUMsR0FBRy9MLGFBQUosRUFBbUJzQyxlQUFuQixDQUFtQ3dKLFVBQW5DLEVBQStDaEssVUFBL0MsQ0FBbkI7QUFDQSxZQUFNa0ssaUJBQWlCLEdBQUduVCxLQUFLLEtBQUtpSixVQUFwQztBQUNBLFlBQU1tQyxjQUFjLEdBQUcrSCxpQkFBaUIsR0FBRzNNLGFBQWEsQ0FBQ3hHLEtBQUQsRUFBUWlKLFVBQVIsRUFBb0IwRSxNQUFwQixDQUFoQixHQUE4QyxFQUF0Rjs7QUFFQSxVQUFJLENBQUN1RixVQUFELElBQWVDLGlCQUFpQixJQUFJLENBQUMvSCxjQUFjLENBQUNqQixNQUF4RCxFQUFnRTtBQUM1RCxjQUFNaUosYUFBYSxHQUFHM2UsTUFBTSxDQUFDb0QsSUFBUCxDQUFZb2IsVUFBVSxDQUFDMUosTUFBdkIsRUFBK0JqSixNQUEvQixDQUF1Q3NKLEtBQUQsSUFBUyxDQUFDK0QsTUFBTSxDQUFDL0QsS0FBRCxDQUF0RCxDQUF0Qjs7QUFFQSxZQUFJd0osYUFBYSxDQUFDN0ssTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixvQkFBMkM7QUFDdkNoUSxZQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxHQUFFMmEsaUJBQWlCLEdBQUksb0JBQUosR0FBMkIsaUNBQWlDLDhCQUFoRixHQUFpSCxlQUFjQyxhQUFhLENBQUNsSixJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUkzUyxLQUFKLENBQVUsQ0FBQzRiLGlCQUFpQixHQUFJLDBCQUF5QnhLLEdBQUksb0NBQW1DeUssYUFBYSxDQUFDbEosSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCakIsVUFBVyw4Q0FBNkNqSixLQUFNLEtBQTlPLElBQXVQLCtDQUE4Q21ULGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUJ6ZCxRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHb1IsTUFBSixFQUFZNEQsb0JBQVosQ0FBaUNqVyxNQUFNLENBQUN5TixNQUFQLENBQWMsRUFBZCxFQUNuQ3dQLFFBRG1DLEVBQ3pCO0FBQ1R2SixVQUFBQSxRQUFRLEVBQUVpRCxjQUFjLENBQUNqQixNQURoQjtBQUVUakIsVUFBQUEsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUN1RCxNQUFELEVBQVN2QyxjQUFjLENBQUMxQixNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQWpWLFFBQUFBLE1BQU0sQ0FBQ3lOLE1BQVAsQ0FBY3lMLE1BQWQsRUFBc0J1RixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0QxRixJQUFBQSxNQUFNLENBQUNuSyxNQUFQLENBQWNrUCxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzdjLEVBQXZDLEVBQTJDdWMsVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUk1WSxHQUFKLEVBQVNnYSxJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQnZULEtBQWxCLEVBQXlCME4sU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDalksRUFBNUMsRUFBZ0RtRCxVQUFoRCxFQUE0RG9aLFVBQTVELENBQXRCO0FBQ0EsVUFBSTtBQUFFelEsUUFBQUEsS0FBRjtBQUFVcEssUUFBQUEsS0FBVjtBQUFrQjRZLFFBQUFBLE9BQWxCO0FBQTRCQyxRQUFBQTtBQUE1QixVQUF5Q3FELFNBQTdDLENBSEEsQ0FJQTs7QUFDQSxVQUFJLENBQUN0RCxPQUFPLElBQUlDLE9BQVosS0FBd0I3WSxLQUE1QixFQUFtQztBQUMvQixZQUFJQSxLQUFLLENBQUNvYyxTQUFOLElBQW1CcGMsS0FBSyxDQUFDb2MsU0FBTixDQUFnQkMsWUFBdkMsRUFBcUQ7QUFDakQsZ0JBQU1DLFdBQVcsR0FBR3RjLEtBQUssQ0FBQ29jLFNBQU4sQ0FBZ0JDLFlBQXBDLENBRGlELENBRWpEO0FBQ0E7QUFDQTs7QUFDQSxjQUFJQyxXQUFXLENBQUM5TCxVQUFaLENBQXVCLEdBQXZCLENBQUosRUFBaUM7QUFDN0Isa0JBQU0rTCxVQUFVLEdBQUcsQ0FBQyxHQUFHM00saUJBQUosRUFBdUJ5SSxnQkFBdkIsQ0FBd0NpRSxXQUF4QyxDQUFuQjtBQUNBQyxZQUFBQSxVQUFVLENBQUN4TCxRQUFYLEdBQXNCNEQsbUJBQW1CLENBQUM0SCxVQUFVLENBQUN4TCxRQUFaLEVBQXNCNkQsS0FBdEIsQ0FBekM7QUFDQSxrQkFBTTtBQUFFckQsY0FBQUEsR0FBRyxFQUFFaUwsTUFBUDtBQUFnQmxlLGNBQUFBLEVBQUUsRUFBRW1lO0FBQXBCLGdCQUErQm5JLFlBQVksQ0FBQyxJQUFELEVBQU9nSSxXQUFQLEVBQW9CQSxXQUFwQixDQUFqRDtBQUNBLG1CQUFPLEtBQUs5RCxNQUFMLENBQVkwQixNQUFaLEVBQW9Cc0MsTUFBcEIsRUFBNEJDLEtBQTVCLEVBQW1DbGUsT0FBbkMsQ0FBUDtBQUNIOztBQUNEa0csVUFBQUEsTUFBTSxDQUFDZ1YsUUFBUCxDQUFnQnBiLElBQWhCLEdBQXVCaWUsV0FBdkI7QUFDQSxpQkFBTyxJQUFJcFcsT0FBSixDQUFZLE1BQUksQ0FDdEIsQ0FETSxDQUFQO0FBRUg7O0FBQ0QsYUFBS2dSLFNBQUwsR0FBaUIsQ0FBQyxDQUFDbFgsS0FBSyxDQUFDMGMsV0FBekIsQ0FoQitCLENBaUIvQjs7QUFDQSxZQUFJMWMsS0FBSyxDQUFDZ1csUUFBTixLQUFtQlAsa0JBQXZCLEVBQTJDO0FBQ3ZDLGNBQUlrSCxhQUFKOztBQUNBLGNBQUk7QUFDQSxrQkFBTSxLQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQU47QUFDQUQsWUFBQUEsYUFBYSxHQUFHLE1BQWhCO0FBQ0gsV0FIRCxDQUdFLE9BQU9oYyxDQUFQLEVBQVU7QUFDUmdjLFlBQUFBLGFBQWEsR0FBRyxTQUFoQjtBQUNIOztBQUNEVCxVQUFBQSxTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQWtCUSxhQUFsQixFQUFpQ0EsYUFBakMsRUFBZ0RwRyxNQUFoRCxFQUF3RGpZLEVBQXhELEVBQTREbUQsVUFBNUQsRUFBd0U7QUFDdEYvQixZQUFBQSxPQUFPLEVBQUU7QUFENkUsV0FBeEUsQ0FBbEI7QUFHSDtBQUNKOztBQUNEMFcsTUFBQUEsTUFBTSxDQUFDbkssTUFBUCxDQUFja1AsSUFBZCxDQUFtQixxQkFBbkIsRUFBMEM3YyxFQUExQyxFQUE4Q3VjLFVBQTlDO0FBQ0EsV0FBS3JELFdBQUwsQ0FBaUIwQyxNQUFqQixFQUF5QjNJLEdBQXpCLEVBQThCalQsRUFBOUIsRUFBa0NDLE9BQWxDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNc2UsT0FBTyxHQUFHLEtBQUtuRSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCN0IsU0FBekM7QUFDQXBTLFFBQUFBLE1BQU0sQ0FBQ3FZLElBQVAsQ0FBWUMsYUFBWixHQUE0QkYsT0FBTyxDQUFDaE8sZUFBUixLQUE0QmdPLE9BQU8sQ0FBQy9OLG1CQUFwQyxJQUEyRCxDQUFDb04sU0FBUyxDQUFDckYsU0FBVixDQUFvQmhJLGVBQTVHO0FBQ0g7O0FBQ0QsVUFBSXRRLE9BQU8sQ0FBQzZiLEVBQVIsSUFBYzlELFNBQVMsS0FBSyxTQUE1QixJQUF5QyxDQUFDLENBQUNyVSxHQUFHLEdBQUdzQyxJQUFJLENBQUN3VSxhQUFMLENBQW1CL1ksS0FBMUIsTUFBcUMsSUFBckMsSUFBNkNpQyxHQUFHLEtBQUssS0FBSyxDQUExRCxHQUE4RCxLQUFLLENBQW5FLEdBQXVFLENBQUNnYSxJQUFJLEdBQUdoYSxHQUFHLENBQUNtYSxTQUFaLE1BQTJCLElBQTNCLElBQW1DSCxJQUFJLEtBQUssS0FBSyxDQUFqRCxHQUFxRCxLQUFLLENBQTFELEdBQThEQSxJQUFJLENBQUNlLFVBQTNJLE1BQTJKLEdBQXBNLEtBQTRNaGQsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ29jLFNBQWhRLENBQUosRUFBZ1I7QUFDNVE7QUFDQTtBQUNBcGMsUUFBQUEsS0FBSyxDQUFDb2MsU0FBTixDQUFnQlksVUFBaEIsR0FBNkIsR0FBN0I7QUFDSCxPQTlDRCxDQStDQTs7O0FBQ0EsWUFBTUMsbUJBQW1CLEdBQUcxZSxPQUFPLENBQUNtQixPQUFSLElBQW1CLEtBQUtrSixLQUFMLEtBQWVBLEtBQTlEOztBQUNBLFVBQUlzVSxPQUFKOztBQUNBLFlBQU1DLFlBQVksR0FBRyxDQUFDRCxPQUFPLEdBQUczZSxPQUFPLENBQUNvQixNQUFuQixNQUErQixJQUEvQixJQUF1Q3VkLE9BQU8sS0FBSyxLQUFLLENBQXhELEdBQTREQSxPQUE1RCxHQUFzRSxDQUFDRCxtQkFBNUY7QUFDQSxZQUFNRyxXQUFXLEdBQUdELFlBQVksR0FBRztBQUMvQnBGLFFBQUFBLENBQUMsRUFBRSxDQUQ0QjtBQUUvQkUsUUFBQUEsQ0FBQyxFQUFFO0FBRjRCLE9BQUgsR0FHNUIsSUFISjtBQUlBLFlBQU0sS0FBSzNSLEdBQUwsQ0FBU3NDLEtBQVQsRUFBZ0IwTixTQUFoQixFQUEyQkMsTUFBM0IsRUFBbUN5RSxTQUFuQyxFQUE4Q2tCLFNBQTlDLEVBQXlEdkUsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUssS0FBSyxDQUEvQyxHQUFtREEsWUFBbkQsR0FBa0V5RixXQUEzSCxFQUF3STNlLEtBQXhJLENBQStJZSxDQUFELElBQUs7QUFDckosWUFBSUEsQ0FBQyxDQUFDNkksU0FBTixFQUFpQitCLEtBQUssR0FBR0EsS0FBSyxJQUFJNUssQ0FBakIsQ0FBakIsS0FDSyxNQUFNQSxDQUFOO0FBQ1IsT0FISyxDQUFOOztBQUlBLFVBQUk0SyxLQUFKLEVBQVc7QUFDUGdNLFFBQUFBLE1BQU0sQ0FBQ25LLE1BQVAsQ0FBY2tQLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDL1EsS0FBdkMsRUFBOEM0USxTQUE5QyxFQUF5REgsVUFBekQ7QUFDQSxjQUFNelEsS0FBTjtBQUNIOztBQUNELFVBQUluRyxLQUFKLEVBQXFDLEVBSXBDOztBQUNEbVMsTUFBQUEsTUFBTSxDQUFDbkssTUFBUCxDQUFja1AsSUFBZCxDQUFtQixxQkFBbkIsRUFBMEM3YyxFQUExQyxFQUE4Q3VjLFVBQTlDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0F0RUQsQ0FzRUUsT0FBTzlELElBQVAsRUFBYTtBQUNYLFVBQUlBLElBQUksQ0FBQzFPLFNBQVQsRUFBb0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsWUFBTTBPLElBQU47QUFDSDtBQUNKOztBQUNEUyxFQUFBQSxXQUFXLENBQUMwQyxNQUFELEVBQVMzSSxHQUFULEVBQWNqVCxFQUFkLEVBQWtCQyxPQUFPLEdBQUcsRUFBNUIsRUFDUjtBQUNDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT2tHLE1BQU0sQ0FBQzJRLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNqVSxRQUFBQSxPQUFPLENBQUNpSixLQUFSLENBQWUsMkNBQWY7QUFDQTtBQUNIOztBQUNELFVBQUksT0FBTzNGLE1BQU0sQ0FBQzJRLE9BQVAsQ0FBZThFLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQy9ZLFFBQUFBLE9BQU8sQ0FBQ2lKLEtBQVIsQ0FBZSwyQkFBMEI4UCxNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQixDQUFDLEdBQUd4SyxNQUFKLEVBQVkrSCxNQUFaLE9BQXlCblosRUFBdkQsRUFBMkQ7QUFDdkQsV0FBS21hLFFBQUwsR0FBZ0JsYSxPQUFPLENBQUNtQixPQUF4QjtBQUNBK0UsTUFBQUEsTUFBTSxDQUFDMlEsT0FBUCxDQUFlOEUsTUFBZixFQUF1QjtBQUNuQjNJLFFBQUFBLEdBRG1CO0FBRW5CalQsUUFBQUEsRUFGbUI7QUFHbkJDLFFBQUFBLE9BSG1CO0FBSW5CbVosUUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJFLFFBQUFBLEdBQUcsRUFBRSxLQUFLUCxJQUFMLEdBQVk2QyxNQUFNLEtBQUssV0FBWCxHQUF5QixLQUFLN0MsSUFBOUIsR0FBcUMsS0FBS0EsSUFBTCxHQUFZO0FBTC9DLE9BQXZCLEVBTUc7QUFDSDtBQUNBO0FBQ0EsUUFUQSxFQVNJL1ksRUFUSjtBQVVIO0FBQ0o7O0FBQ3lCLFFBQXBCaWYsb0JBQW9CLENBQUM3ZSxHQUFELEVBQU1xUyxRQUFOLEVBQWdCZSxLQUFoQixFQUF1QnhULEVBQXZCLEVBQTJCdWMsVUFBM0IsRUFBdUMyQyxhQUF2QyxFQUFzRDtBQUM1RSxRQUFJOWUsR0FBRyxDQUFDMkosU0FBUixFQUFtQjtBQUNmO0FBQ0EsWUFBTTNKLEdBQU47QUFDSDs7QUFDRCxRQUFJLENBQUMsR0FBRzRRLFlBQUosRUFBa0JoSyxZQUFsQixDQUErQjVHLEdBQS9CLEtBQXVDOGUsYUFBM0MsRUFBMEQ7QUFDdERwSCxNQUFBQSxNQUFNLENBQUNuSyxNQUFQLENBQWNrUCxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q3pjLEdBQXZDLEVBQTRDSixFQUE1QyxFQUFnRHVjLFVBQWhELEVBRHNELENBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FwVyxNQUFBQSxNQUFNLENBQUNnVixRQUFQLENBQWdCcGIsSUFBaEIsR0FBdUJDLEVBQXZCLENBUHNELENBUXREO0FBQ0E7O0FBQ0EsWUFBTStSLHNCQUFzQixFQUE1QjtBQUNIOztBQUNELFFBQUk7QUFDQSxVQUFJeUcsVUFBSjtBQUNBLFVBQUl2TixXQUFKO0FBQ0EsVUFBSXZKLEtBQUo7O0FBQ0EsVUFBSSxPQUFPOFcsVUFBUCxLQUFzQixXQUF0QixJQUFxQyxPQUFPdk4sV0FBUCxLQUF1QixXQUFoRSxFQUE2RTtBQUN6RSxTQUFDO0FBQUV5TCxVQUFBQSxJQUFJLEVBQUU4QixVQUFSO0FBQXFCdk4sVUFBQUE7QUFBckIsWUFBc0MsTUFBTSxLQUFLcVQsY0FBTCxDQUFvQixTQUFwQixDQUE3QztBQUNIOztBQUNELFlBQU1WLFNBQVMsR0FBRztBQUNkbGMsUUFBQUEsS0FEYztBQUVkNlcsUUFBQUEsU0FBUyxFQUFFQyxVQUZHO0FBR2R2TixRQUFBQSxXQUhjO0FBSWQ3SyxRQUFBQSxHQUpjO0FBS2QwTCxRQUFBQSxLQUFLLEVBQUUxTDtBQUxPLE9BQWxCOztBQU9BLFVBQUksQ0FBQ3dkLFNBQVMsQ0FBQ2xjLEtBQWYsRUFBc0I7QUFDbEIsWUFBSTtBQUNBa2MsVUFBQUEsU0FBUyxDQUFDbGMsS0FBVixHQUFrQixNQUFNLEtBQUs2TyxlQUFMLENBQXFCaUksVUFBckIsRUFBaUM7QUFDckRwWSxZQUFBQSxHQURxRDtBQUVyRHFTLFlBQUFBLFFBRnFEO0FBR3JEZSxZQUFBQTtBQUhxRCxXQUFqQyxDQUF4QjtBQUtILFNBTkQsQ0FNRSxPQUFPMkwsTUFBUCxFQUFlO0FBQ2J0YyxVQUFBQSxPQUFPLENBQUNpSixLQUFSLENBQWMseUNBQWQsRUFBeURxVCxNQUF6RDtBQUNBdkIsVUFBQUEsU0FBUyxDQUFDbGMsS0FBVixHQUFrQixFQUFsQjtBQUVIO0FBQ0o7O0FBQ0QsYUFBT2tjLFNBQVA7QUFDSCxLQTVCRCxDQTRCRSxPQUFPd0IsWUFBUCxFQUFxQjtBQUNuQixhQUFPLEtBQUtILG9CQUFMLENBQTBCRyxZQUExQixFQUF3QzNNLFFBQXhDLEVBQWtEZSxLQUFsRCxFQUF5RHhULEVBQXpELEVBQTZEdWMsVUFBN0QsRUFBeUUsSUFBekUsQ0FBUDtBQUNIO0FBQ0o7O0FBQ2lCLFFBQVpzQixZQUFZLENBQUN2VCxLQUFELEVBQVFtSSxRQUFSLEVBQWtCZSxLQUFsQixFQUF5QnhULEVBQXpCLEVBQTZCbUQsVUFBN0IsRUFBeUNvWixVQUF6QyxFQUFxRDtBQUNuRSxRQUFJO0FBQ0EsWUFBTThDLGlCQUFpQixHQUFHLEtBQUtqRixVQUFMLENBQWdCOVAsS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSWlTLFVBQVUsQ0FBQ25iLE9BQVgsSUFBc0JpZSxpQkFBdEIsSUFBMkMsS0FBSy9VLEtBQUwsS0FBZUEsS0FBOUQsRUFBcUU7QUFDakUsZUFBTytVLGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0RqUSxTQUF0RCxHQUFrRWlRLGlCQUExRjtBQUNBLFlBQU16QixTQUFTLEdBQUcwQixlQUFlLEdBQUdBLGVBQUgsR0FBcUIsTUFBTSxLQUFLaEIsY0FBTCxDQUFvQmhVLEtBQXBCLEVBQTJCckMsSUFBM0IsQ0FBaUNVLEdBQUQsS0FBUTtBQUM1RjRQLFFBQUFBLFNBQVMsRUFBRTVQLEdBQUcsQ0FBQytOLElBRDZFO0FBRTVGekwsUUFBQUEsV0FBVyxFQUFFdEMsR0FBRyxDQUFDc0MsV0FGMkU7QUFHNUZxUCxRQUFBQSxPQUFPLEVBQUUzUixHQUFHLENBQUM0VyxHQUFKLENBQVFqRixPQUgyRTtBQUk1RkMsUUFBQUEsT0FBTyxFQUFFNVIsR0FBRyxDQUFDNFcsR0FBSixDQUFRaEY7QUFKMkUsT0FBUixDQUFoQyxDQUE1RDtBQU9BLFlBQU07QUFBRWhDLFFBQUFBLFNBQVMsRUFBRUMsVUFBYjtBQUEwQjhCLFFBQUFBLE9BQTFCO0FBQW9DQyxRQUFBQTtBQUFwQyxVQUFpRHFELFNBQXZEOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUU0QixVQUFBQTtBQUFGLFlBQTBCbGdCLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkM7O0FBQ0EsWUFBSSxDQUFDa2dCLGtCQUFrQixDQUFDaEgsVUFBRCxDQUF2QixFQUFxQztBQUNqQyxnQkFBTSxJQUFJM1csS0FBSixDQUFXLHlEQUF3RDRRLFFBQVMsR0FBNUUsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBSW1GLFFBQUo7O0FBQ0EsVUFBSTBDLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtBQUNwQjNDLFFBQUFBLFFBQVEsR0FBRyxLQUFLUSxVQUFMLENBQWdCcUgsV0FBaEIsQ0FBNEIsQ0FBQyxHQUFHck8sTUFBSixFQUFZNEQsb0JBQVosQ0FBaUM7QUFDcEV2QyxVQUFBQSxRQURvRTtBQUVwRWUsVUFBQUE7QUFGb0UsU0FBakMsQ0FBNUIsRUFHUHJRLFVBSE8sRUFHS21YLE9BSEwsRUFHYyxLQUFLaGEsTUFIbkIsQ0FBWDtBQUlIOztBQUNELFlBQU1vQixLQUFLLEdBQUcsTUFBTSxLQUFLZ2UsUUFBTCxDQUFjLE1BQUlwRixPQUFPLEdBQUcsS0FBS3FGLGNBQUwsQ0FBb0IvSCxRQUFwQixDQUFILEdBQW1DMkMsT0FBTyxHQUFHLEtBQUtxRixjQUFMLENBQW9CaEksUUFBcEIsQ0FBSCxHQUFtQyxLQUFLckgsZUFBTCxDQUFxQmlJLFVBQXJCLEVBQWlDO0FBQ3ZKO0FBQ0kvRixRQUFBQSxRQURKO0FBRUllLFFBQUFBLEtBRko7QUFHSWdDLFFBQUFBLE1BQU0sRUFBRXhWLEVBSFo7QUFJSU0sUUFBQUEsTUFBTSxFQUFFLEtBQUtBLE1BSmpCO0FBS0l5RSxRQUFBQSxPQUFPLEVBQUUsS0FBS0EsT0FMbEI7QUFNSUksUUFBQUEsYUFBYSxFQUFFLEtBQUtBO0FBTnhCLE9BRHNILENBQXRHLENBQXBCO0FBVUF5WSxNQUFBQSxTQUFTLENBQUNsYyxLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFdBQUswWSxVQUFMLENBQWdCOVAsS0FBaEIsSUFBeUJzVCxTQUF6QjtBQUNBLGFBQU9BLFNBQVA7QUFDSCxLQXhDRCxDQXdDRSxPQUFPaUMsSUFBUCxFQUFhO0FBQ1gsYUFBTyxLQUFLWixvQkFBTCxDQUEwQlksSUFBMUIsRUFBZ0NwTixRQUFoQyxFQUEwQ2UsS0FBMUMsRUFBaUR4VCxFQUFqRCxFQUFxRHVjLFVBQXJELENBQVA7QUFDSDtBQUNKOztBQUNEdlUsRUFBQUEsR0FBRyxDQUFDc0MsS0FBRCxFQUFRbUksUUFBUixFQUFrQmUsS0FBbEIsRUFBeUJ4VCxFQUF6QixFQUE2QnlYLElBQTdCLEVBQW1DcUgsV0FBbkMsRUFBZ0Q7QUFDL0MsU0FBS25HLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLck8sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS21JLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS2UsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2dDLE1BQUwsR0FBY3hWLEVBQWQ7QUFDQSxXQUFPLEtBQUsrYyxNQUFMLENBQVl0RixJQUFaLEVBQWtCcUgsV0FBbEIsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7OztBQUFNZ0IsRUFBQUEsY0FBYyxDQUFDMVosRUFBRCxFQUFLO0FBQ2pCLFNBQUs2VCxJQUFMLEdBQVk3VCxFQUFaO0FBQ0g7O0FBQ0R3VyxFQUFBQSxlQUFlLENBQUM1YyxFQUFELEVBQUs7QUFDaEIsUUFBSSxDQUFDLEtBQUt3VixNQUFWLEVBQWtCLE9BQU8sS0FBUDtBQUNsQixVQUFNLENBQUN1SyxZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBS3hLLE1BQUwsQ0FBWUgsS0FBWixDQUFrQixHQUFsQixDQUFoQztBQUNBLFVBQU0sQ0FBQzRLLFlBQUQsRUFBZUMsT0FBZixJQUEwQmxnQixFQUFFLENBQUNxVixLQUFILENBQVMsR0FBVCxDQUFoQyxDQUhnQixDQUloQjs7QUFDQSxRQUFJNkssT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCLElBQTRDRCxPQUFPLEtBQUtFLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUGUsQ0FRaEI7OztBQUNBLFFBQUlILFlBQVksS0FBS0UsWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FYZSxDQVloQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtBQUNIOztBQUNEcEQsRUFBQUEsWUFBWSxDQUFDOWMsRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHOFYsSUFBSCxJQUFXOVYsRUFBRSxDQUFDcVYsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsUUFBSVMsSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9CM1AsTUFBQUEsTUFBTSxDQUFDZ2EsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FQWSxDQVFiOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdoWSxRQUFRLENBQUNpWSxjQUFULENBQXdCdkssSUFBeEIsQ0FBYjs7QUFDQSxRQUFJc0ssSUFBSixFQUFVO0FBQ05BLE1BQUFBLElBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FiWSxDQWNiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR25ZLFFBQVEsQ0FBQ29ZLGlCQUFULENBQTJCMUssSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJeUssTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsRCxFQUFBQSxRQUFRLENBQUM1SCxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFvQixRQUFSM1YsUUFBUSxDQUFDb1QsR0FBRCxFQUFNdUMsTUFBTSxHQUFHdkMsR0FBZixFQUFvQmhULE9BQU8sR0FBRyxFQUE5QixFQUNiO0FBQ0MsUUFBSStjLE1BQU0sR0FBRyxDQUFDLEdBQUcxTCxpQkFBSixFQUF1QnlJLGdCQUF2QixDQUF3QzlHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUVSLE1BQUFBLFFBQVEsRUFBRWdPO0FBQVosUUFBMkJ6RCxNQUEvQjs7QUFDQSxRQUFJclgsS0FBSixFQUFxQyxFQVdwQzs7QUFDRCxVQUFNMlEsS0FBSyxHQUFHLE1BQU0sS0FBSzhCLFVBQUwsQ0FBZ0I4RSxXQUFoQixFQUFwQjtBQUNBLFFBQUkvWixVQUFVLEdBQUdxUyxNQUFqQjs7QUFDQSxRQUFJN1AsS0FBSixFQUErRCxFQUEvRCxNQWFPO0FBQ0hxWCxNQUFBQSxNQUFNLENBQUN2SyxRQUFQLEdBQWtCNEQsbUJBQW1CLENBQUMyRyxNQUFNLENBQUN2SyxRQUFSLEVBQWtCNkQsS0FBbEIsQ0FBckM7O0FBQ0EsVUFBSTBHLE1BQU0sQ0FBQ3ZLLFFBQVAsS0FBb0JnTyxTQUF4QixFQUFtQztBQUMvQkEsUUFBQUEsU0FBUyxHQUFHekQsTUFBTSxDQUFDdkssUUFBbkI7QUFDQXVLLFFBQUFBLE1BQU0sQ0FBQ3ZLLFFBQVAsR0FBa0JnTyxTQUFsQjtBQUNBeE4sUUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzdCLE1BQUosRUFBWTRELG9CQUFaLENBQWlDZ0ksTUFBakMsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBTTFTLEtBQUssR0FBRyxDQUFDLEdBQUd5Ryx1QkFBSixFQUE2QnpMLHVCQUE3QixDQUFxRG1iLFNBQXJELENBQWQsQ0F0Q0QsQ0F1Q0M7O0FBQ0EsY0FBMkM7QUFDdkM7QUFDSDs7QUFDRCxVQUFNN1ksT0FBTyxDQUFDdUUsR0FBUixDQUFZLENBQ2QsS0FBS2lNLFVBQUwsQ0FBZ0JzSSxNQUFoQixDQUF1QnBXLEtBQXZCLEVBQThCckMsSUFBOUIsQ0FBb0MwWSxLQUFELElBQVM7QUFDeEMsYUFBT0EsS0FBSyxHQUFHLEtBQUtoQixjQUFMLENBQW9CLEtBQUt2SCxVQUFMLENBQWdCcUgsV0FBaEIsQ0FBNEJ4TSxHQUE1QixFQUFpQzlQLFVBQWpDLEVBQTZDLElBQTdDLEVBQW1ELE9BQU9sRCxPQUFPLENBQUNLLE1BQWYsS0FBMEIsV0FBMUIsR0FBd0NMLE9BQU8sQ0FBQ0ssTUFBaEQsR0FBeUQsS0FBS0EsTUFBakgsQ0FBcEIsQ0FBSCxHQUFtSixLQUEvSjtBQUNILEtBRkQsQ0FEYyxFQUlkLEtBQUs4WCxVQUFMLENBQWdCblksT0FBTyxDQUFDeUUsUUFBUixHQUFtQixVQUFuQixHQUFnQyxVQUFoRCxFQUE0RDRGLEtBQTVELENBSmMsQ0FBWixDQUFOO0FBTUg7O0FBQ21CLFFBQWRnVSxjQUFjLENBQUNoVSxLQUFELEVBQVE7QUFDeEIsUUFBSVAsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU02VyxNQUFNLEdBQUcsS0FBS2hHLEdBQUwsR0FBVyxNQUFJO0FBQzFCN1EsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFVBQU04VyxlQUFlLEdBQUcsTUFBTSxLQUFLekksVUFBTCxDQUFnQjBJLFFBQWhCLENBQXlCeFcsS0FBekIsQ0FBOUI7O0FBQ0EsUUFBSVAsU0FBSixFQUFlO0FBQ1gsWUFBTStCLEtBQUssR0FBRyxJQUFJakssS0FBSixDQUFXLHdDQUF1Q3lJLEtBQU0sR0FBeEQsQ0FBZDtBQUNBd0IsTUFBQUEsS0FBSyxDQUFDL0IsU0FBTixHQUFrQixJQUFsQjtBQUNBLFlBQU0rQixLQUFOO0FBQ0g7O0FBQ0QsUUFBSThVLE1BQU0sS0FBSyxLQUFLaEcsR0FBcEIsRUFBeUI7QUFDckIsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxXQUFPaUcsZUFBUDtBQUNIOztBQUNEbkIsRUFBQUEsUUFBUSxDQUFDOVQsRUFBRCxFQUFLO0FBQ1QsUUFBSTdCLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNNlcsTUFBTSxHQUFHLE1BQUk7QUFDZjdXLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxTQUFLNlEsR0FBTCxHQUFXZ0csTUFBWDtBQUNBLFdBQU9oVixFQUFFLEdBQUczRCxJQUFMLENBQVd3UCxJQUFELElBQVE7QUFDckIsVUFBSW1KLE1BQU0sS0FBSyxLQUFLaEcsR0FBcEIsRUFBeUI7QUFDckIsYUFBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxVQUFJN1EsU0FBSixFQUFlO0FBQ1gsY0FBTThWLElBQUksR0FBRyxJQUFJaGUsS0FBSixDQUFVLGlDQUFWLENBQWI7QUFDQWdlLFFBQUFBLElBQUksQ0FBQzlWLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxjQUFNOFYsSUFBTjtBQUNIOztBQUNELGFBQU9wSSxJQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0g7O0FBQ0RrSSxFQUFBQSxjQUFjLENBQUMvSCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFN1gsTUFBQUEsSUFBSSxFQUFFZ2hCO0FBQVIsUUFBc0IsSUFBSTFOLEdBQUosQ0FBUXVFLFFBQVIsRUFBa0J6UixNQUFNLENBQUNnVixRQUFQLENBQWdCcGIsSUFBbEMsQ0FBNUI7O0FBQ0EsUUFBSSxLQUFKLEVBQW9GLEVBRW5GOztBQUNELFdBQU80WCxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLb0MsS0FBaEIsQ0FBYixDQUFvQy9SLElBQXBDLENBQTBDd1AsSUFBRCxJQUFRO0FBQ3BELFdBQUtvQixHQUFMLENBQVNrSSxRQUFULElBQXFCdEosSUFBckI7QUFDQSxhQUFPQSxJQUFQO0FBQ0gsS0FITSxDQUFQO0FBSUg7O0FBQ0RtSSxFQUFBQSxjQUFjLENBQUNoSSxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFN1gsTUFBQUEsSUFBSSxFQUFFaWhCO0FBQVIsUUFBeUIsSUFBSTNOLEdBQUosQ0FBUXVFLFFBQVIsRUFBa0J6UixNQUFNLENBQUNnVixRQUFQLENBQWdCcGIsSUFBbEMsQ0FBL0I7O0FBQ0EsUUFBSSxLQUFLK1ksR0FBTCxDQUFTa0ksV0FBVCxDQUFKLEVBQTJCO0FBQ3ZCLGFBQU8sS0FBS2xJLEdBQUwsQ0FBU2tJLFdBQVQsQ0FBUDtBQUNIOztBQUNELFdBQU8sS0FBS2xJLEdBQUwsQ0FBU2tJLFdBQVQsSUFBd0JySixhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLb0MsS0FBaEIsQ0FBYixDQUFvQy9SLElBQXBDLENBQTBDd1AsSUFBRCxJQUFRO0FBQzVFLGFBQU8sS0FBS3FCLEdBQUwsQ0FBU2tJLFdBQVQsQ0FBUDtBQUNBLGFBQU92SixJQUFQO0FBQ0gsS0FIOEIsRUFHNUJ0WCxLQUg0QixDQUdyQjBmLElBQUQsSUFBUTtBQUNiLGFBQU8sS0FBSy9HLEdBQUwsQ0FBU2tJLFdBQVQsQ0FBUDtBQUNBLFlBQU1uQixJQUFOO0FBQ0gsS0FOOEIsQ0FBL0I7QUFPSDs7QUFDRHRQLEVBQUFBLGVBQWUsQ0FBQ2dJLFNBQUQsRUFBWTBJLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFMUksTUFBQUEsU0FBUyxFQUFFMkk7QUFBYixRQUF1QixLQUFLOUcsVUFBTCxDQUFnQixPQUFoQixDQUE3Qjs7QUFDQSxVQUFNK0csT0FBTyxHQUFHLEtBQUt0RyxRQUFMLENBQWNxRyxJQUFkLENBQWhCOztBQUNBRCxJQUFBQSxHQUFHLENBQUNFLE9BQUosR0FBY0EsT0FBZDtBQUNBLFdBQU8sQ0FBQyxHQUFHL1AsTUFBSixFQUFZZ1EsbUJBQVosQ0FBZ0NGLElBQWhDLEVBQXNDO0FBQ3pDQyxNQUFBQSxPQUR5QztBQUV6QzVJLE1BQUFBLFNBRnlDO0FBR3pDelksTUFBQUEsTUFBTSxFQUFFLElBSGlDO0FBSXpDbWhCLE1BQUFBO0FBSnlDLEtBQXRDLENBQVA7QUFNSDs7QUFDRHhFLEVBQUFBLGtCQUFrQixDQUFDemMsRUFBRCxFQUFLdWMsVUFBTCxFQUFpQjtBQUMvQixRQUFJLEtBQUszQixHQUFULEVBQWM7QUFDVjlDLE1BQUFBLE1BQU0sQ0FBQ25LLE1BQVAsQ0FBY2tQLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDOUssc0JBQXNCLEVBQTdELEVBQWlFL1IsRUFBakUsRUFBcUV1YyxVQUFyRTtBQUNBLFdBQUszQixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNEbUMsRUFBQUEsTUFBTSxDQUFDdEYsSUFBRCxFQUFPcUgsV0FBUCxFQUFvQjtBQUN0QixXQUFPLEtBQUtuRSxHQUFMLENBQVNsRCxJQUFULEVBQWUsS0FBSzJDLFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUI3QixTQUF4QyxFQUFtRHVHLFdBQW5ELENBQVA7QUFDSDs7QUF2dkJROztBQXl2QmJoSCxNQUFNLENBQUNuSyxNQUFQLEdBQWdCLENBQUMsR0FBR3dELEtBQUosRUFBV2hTLE9BQVgsRUFBaEI7QUFDQUYsZUFBQSxHQUFrQjZZLE1BQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZpQ0E7QUFFQTtBQUNBOzs7QUFFQSxNQUFNeUosTUFBTSxHQUFHLE1BQU07QUFDcEIsc0JBQ0M7QUFBSyxhQUFTLEVBQUVELDBFQUFoQjtBQUFBLDJCQUNDO0FBQUEsOEJBQ0MsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNDO0FBQUEsa0NBQ0MsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFPQztBQUFBLCtCQUNDLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQWlCQSxDQWxCRDs7QUFvQkEsaUVBQWVDLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qk8sTUFBTUYsSUFBSSxHQUFJM2YsS0FBRCxJQUFXO0FBQzdCLHNCQUNFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQ0gsU0FBSyxFQUFDLGNBREg7QUFDa0IsVUFBTSxFQUFDLGNBRHpCO0FBQ3dDLFdBQU8sRUFBQywyQkFEaEQ7QUFFSCx1QkFBbUIsRUFBQyxlQUZqQjtBQUFBLDJCQUlKO0FBQUcsZUFBUyxFQUFDLDBEQUFiO0FBQ0EsVUFBSSxFQUFDLFNBREw7QUFDZSxZQUFNLEVBQUMsTUFEdEI7QUFBQSw4QkFFQTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFZQTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkEsZUFjQTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEEsZUFnQkE7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCQSxlQWtCQTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJBLGVBc0NBO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0Q0EsZUF5Q0E7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpDQSxlQTJDQTtBQUFNLFNBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0NBLGVBNkNBO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3Q0EsZUFnREE7QUFBTSxTQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwREQsQ0EzRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxNQUFNK2YsT0FBTyxHQUFJL2YsS0FBRCxJQUFXO0FBQ2hDLHNCQUNFO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsV0FBTyxFQUFDO0FBRlYsS0FHTUEsS0FITjtBQUFBLDRCQUtFO0FBQ0UsT0FBQyxFQUFDLHlrQkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFTRTtBQUNFLE9BQUMsRUFBQyxtWEFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFhRTtBQUNFLE9BQUMsRUFBQyxrbUJBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLGVBaUJFO0FBQ0UsT0FBQyxFQUFDLHFpQkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBcUJFO0FBQ0UsT0FBQyxFQUFDLGdmQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkYsZUF5QkU7QUFDRSxPQUFDLEVBQUMscW9CQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkYsZUE2QkU7QUFDRSxPQUFDLEVBQUMsNlhBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQWlDRTtBQUNFLE9BQUMsRUFBQyx5WkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakNGLGVBcUNFO0FBQ0UsT0FBQyxFQUFDLG1GQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0YsZUF5Q0U7QUFDRSxPQUFDLEVBQUMsa09BREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRixlQTZDRTtBQUFRLFFBQUUsRUFBRSxHQUFaO0FBQWlCLFFBQUUsRUFBRSxJQUFyQjtBQUEyQixPQUFDLEVBQUUsRUFBOUI7QUFBa0MsVUFBSSxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0NGLGVBOENFO0FBQVEsUUFBRSxFQUFFLEdBQVo7QUFBaUIsUUFBRSxFQUFFLElBQXJCO0FBQTJCLE9BQUMsRUFBRSxFQUE5QjtBQUFrQyxVQUFJLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Q0YsZUErQ0U7QUFDRSxPQUFDLEVBQUMsK1ZBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9DRixlQW1ERTtBQUNFLE9BQUMsRUFBQyx3cEJBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5ERixlQXVERTtBQUFRLFFBQUUsRUFBRSxPQUFaO0FBQXFCLFFBQUUsRUFBRSxPQUF6QjtBQUFrQyxPQUFDLEVBQUUsTUFBckM7QUFBNkMsVUFBSSxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkRGLGVBd0RFO0FBQ0UsT0FBQyxFQUFDLDRPQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4REYsZUE0REU7QUFBUSxRQUFFLEVBQUUsT0FBWjtBQUFxQixRQUFFLEVBQUUsT0FBekI7QUFBa0MsT0FBQyxFQUFFLE1BQXJDO0FBQTZDLFVBQUksRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVERixlQTZERTtBQUNFLE9BQUMsRUFBQyw0T0FESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0RGLGVBaUVFO0FBQ0UsT0FBQyxFQUFDLDBWQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRUYsZUFxRUU7QUFDRSxPQUFDLEVBQUMsMEVBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJFRixlQXlFRTtBQUNFLFVBQUksRUFBQyxTQURQO0FBRUUsT0FBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6RUYsZUE2RUU7QUFDRSxPQUFDLEVBQUMsOFZBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdFRixlQWlGRTtBQUFRLFFBQUUsRUFBRSxPQUFaO0FBQXFCLFFBQUUsRUFBRSxPQUF6QjtBQUFrQyxPQUFDLEVBQUUsTUFBckM7QUFBNkMsVUFBSSxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakZGLGVBa0ZFO0FBQ0UsT0FBQyxFQUFDLDRVQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRkYsZUFzRkU7QUFDRSxPQUFDLEVBQUMsNlNBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRGRixlQTBGRTtBQUNFLE9BQUMsRUFBQyxpWUFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUZGLGVBOEZFO0FBQU0sT0FBQyxFQUFDLGdEQUFSO0FBQXlELFVBQUksRUFBQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtHRCxDQW5HTTtBQXFHQSxNQUFNZ2dCLFFBQVEsR0FBSWhnQixLQUFELElBQVc7QUFDakMsc0JBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxXQUFPLEVBQUM7QUFGVixLQUdNQSxLQUhOO0FBQUEsNEJBS0U7QUFDRSxPQUFDLEVBQUMsaW9DQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVNFO0FBQ0UsT0FBQyxFQUFDLCtRQURKO0FBRUUsYUFBTyxFQUFFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQWFFO0FBQ0UsT0FBQyxFQUFDLGljQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQWlCRTtBQUNFLE9BQUMsRUFBQyw4UUFESjtBQUVFLGFBQU8sRUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBcUJFO0FBQ0UsT0FBQyxFQUFDLDZkQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkYsZUF5QkU7QUFDRSxPQUFDLEVBQUMsK1JBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCRixlQTZCRTtBQUFTLFFBQUUsRUFBRSxLQUFiO0FBQW9CLFFBQUUsRUFBRSxNQUF4QjtBQUFnQyxRQUFFLEVBQUUsS0FBcEM7QUFBMkMsUUFBRSxFQUFFLEVBQS9DO0FBQW1ELFVBQUksRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRixlQThCRTtBQUNFLE9BQUMsRUFBRSxLQURMO0FBRUUsT0FBQyxFQUFFLE1BRkw7QUFHRSxXQUFLLEVBQUUsR0FIVDtBQUlFLFlBQU0sRUFBRSxHQUpWO0FBS0UsUUFBRSxFQUFFLEtBTE47QUFNRSxVQUFJLEVBQUM7QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRixlQXNDRTtBQUNFLE9BQUMsRUFBQyxrR0FESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGLGVBMENFO0FBQVEsUUFBRSxFQUFFLEdBQVo7QUFBaUIsUUFBRSxFQUFFLE1BQXJCO0FBQTZCLE9BQUMsRUFBRSxDQUFoQztBQUFtQyxVQUFJLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0YsZUEyQ0U7QUFBUSxRQUFFLEVBQUUsR0FBWjtBQUFpQixRQUFFLEVBQUUsTUFBckI7QUFBNkIsT0FBQyxFQUFFLENBQWhDO0FBQW1DLFVBQUksRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNDRixlQTRDRTtBQUFRLFFBQUUsRUFBRSxHQUFaO0FBQWlCLFFBQUUsRUFBRSxNQUFyQjtBQUE2QixPQUFDLEVBQUUsQ0FBaEM7QUFBbUMsVUFBSSxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUNGLGVBNkNFO0FBQU0sT0FBQyxFQUFFLEtBQVQ7QUFBZ0IsT0FBQyxFQUFFLE1BQW5CO0FBQTJCLFdBQUssRUFBRSxFQUFsQztBQUFzQyxZQUFNLEVBQUUsRUFBOUM7QUFBa0QsUUFBRSxFQUFFLElBQXREO0FBQTRELFVBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdDRixlQThDRTtBQUNFLE9BQUMsRUFBRSxLQURMO0FBRUUsT0FBQyxFQUFFLE1BRkw7QUFHRSxXQUFLLEVBQUUsRUFIVDtBQUlFLFlBQU0sRUFBRSxFQUpWO0FBS0UsUUFBRSxFQUFFLElBTE47QUFNRSxVQUFJLEVBQUM7QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlDRixlQXNERTtBQUFNLE9BQUMsRUFBRSxLQUFUO0FBQWdCLE9BQUMsRUFBRSxNQUFuQjtBQUEyQixXQUFLLEVBQUUsRUFBbEM7QUFBc0MsWUFBTSxFQUFFLEVBQTlDO0FBQWtELFFBQUUsRUFBRSxJQUF0RDtBQUE0RCxVQUFJLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0REYsZUF1REU7QUFBTSxPQUFDLEVBQUUsS0FBVDtBQUFnQixPQUFDLEVBQUUsTUFBbkI7QUFBMkIsV0FBSyxFQUFFLEVBQWxDO0FBQXNDLFlBQU0sRUFBRSxFQUE5QztBQUFrRCxRQUFFLEVBQUUsSUFBdEQ7QUFBNEQsVUFBSSxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkRGLGVBd0RFO0FBQ0UsT0FBQyxFQUFFLEtBREw7QUFFRSxPQUFDLEVBQUUsTUFGTDtBQUdFLFdBQUssRUFBRSxFQUhUO0FBSUUsWUFBTSxFQUFFLEVBSlY7QUFLRSxRQUFFLEVBQUUsSUFMTjtBQU1FLFVBQUksRUFBQztBQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeERGLGVBZ0VFO0FBQU0sT0FBQyxFQUFFLEtBQVQ7QUFBZ0IsT0FBQyxFQUFFLE1BQW5CO0FBQTJCLFdBQUssRUFBRSxFQUFsQztBQUFzQyxZQUFNLEVBQUUsRUFBOUM7QUFBa0QsUUFBRSxFQUFFLElBQXREO0FBQTRELFVBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhFRixlQWlFRTtBQUFNLE9BQUMsRUFBRSxLQUFUO0FBQWdCLE9BQUMsRUFBRSxNQUFuQjtBQUEyQixXQUFLLEVBQUUsRUFBbEM7QUFBc0MsWUFBTSxFQUFFLEVBQTlDO0FBQWtELFFBQUUsRUFBRSxJQUF0RDtBQUE0RCxVQUFJLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRUYsZUFrRUU7QUFDRSxPQUFDLEVBQUUsS0FETDtBQUVFLE9BQUMsRUFBRSxNQUZMO0FBR0UsV0FBSyxFQUFFLEVBSFQ7QUFJRSxZQUFNLEVBQUUsRUFKVjtBQUtFLFFBQUUsRUFBRSxJQUxOO0FBTUUsVUFBSSxFQUFDO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRUYsZUEwRUU7QUFBTSxPQUFDLEVBQUUsS0FBVDtBQUFnQixPQUFDLEVBQUUsTUFBbkI7QUFBMkIsV0FBSyxFQUFFLEVBQWxDO0FBQXNDLFlBQU0sRUFBRSxFQUE5QztBQUFrRCxRQUFFLEVBQUUsSUFBdEQ7QUFBNEQsVUFBSSxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUVGLGVBMkVFO0FBQU0sT0FBQyxFQUFFLEtBQVQ7QUFBZ0IsT0FBQyxFQUFFLE1BQW5CO0FBQTJCLFdBQUssRUFBRSxFQUFsQztBQUFzQyxZQUFNLEVBQUUsRUFBOUM7QUFBa0QsUUFBRSxFQUFFLElBQXREO0FBQTRELFVBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNFRixlQTRFRTtBQUFNLE9BQUMsRUFBRSxLQUFUO0FBQWdCLE9BQUMsRUFBRSxNQUFuQjtBQUEyQixXQUFLLEVBQUUsRUFBbEM7QUFBc0MsWUFBTSxFQUFFLEVBQTlDO0FBQWtELFFBQUUsRUFBRSxJQUF0RDtBQUE0RCxVQUFJLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1RUYsZUE2RUU7QUFBTSxPQUFDLEVBQUUsS0FBVDtBQUFnQixPQUFDLEVBQUUsTUFBbkI7QUFBMkIsV0FBSyxFQUFFLEVBQWxDO0FBQXNDLFlBQU0sRUFBRSxFQUE5QztBQUFrRCxRQUFFLEVBQUUsSUFBdEQ7QUFBNEQsVUFBSSxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0VGLGVBOEVFO0FBQU0sT0FBQyxFQUFFLEtBQVQ7QUFBZ0IsT0FBQyxFQUFFLE1BQW5CO0FBQTJCLFdBQUssRUFBRSxFQUFsQztBQUFzQyxZQUFNLEVBQUUsRUFBOUM7QUFBa0QsUUFBRSxFQUFFLElBQXREO0FBQTRELFVBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlFRixlQStFRTtBQUNFLE9BQUMsRUFBRSxLQURMO0FBRUUsT0FBQyxFQUFFLE1BRkw7QUFHRSxXQUFLLEVBQUUsRUFIVDtBQUlFLFlBQU0sRUFBRSxFQUpWO0FBS0UsUUFBRSxFQUFFLElBTE47QUFNRSxVQUFJLEVBQUMsU0FOUDtBQU9FLGFBQU8sRUFBRTtBQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0VGLGVBd0ZFO0FBQU0sT0FBQyxFQUFFLEtBQVQ7QUFBZ0IsT0FBQyxFQUFFLE1BQW5CO0FBQTJCLFdBQUssRUFBRSxFQUFsQztBQUFzQyxZQUFNLEVBQUUsRUFBOUM7QUFBa0QsUUFBRSxFQUFFLElBQXREO0FBQTRELFVBQUksRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhGRixlQXlGRTtBQUNFLE9BQUMsRUFBQyxndkJBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpGRixlQTZGRTtBQUNFLE9BQUMsRUFBQywrTEFESjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxzQkFBZ0IsRUFBRSxFQUpwQjtBQUtFLGlCQUFXLEVBQUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdGRixlQW9HRTtBQUNFLE9BQUMsRUFBQyxxWkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEdGLGVBd0dFO0FBQ0UsT0FBQyxFQUFDLGtuQkFESjtBQUVFLGFBQU8sRUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEdGLGVBNEdFO0FBQ0UsT0FBQyxFQUFDLG1IQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1R0YsZUFnSEU7QUFDRSxPQUFDLEVBQUMsc0tBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhIRixlQW9IRTtBQUNFLE9BQUMsRUFBQywrTUFESjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxzQkFBZ0IsRUFBRSxFQUpwQjtBQUtFLGlCQUFXLEVBQUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBIRixlQTJIRTtBQUNFLE9BQUMsRUFBQywyWUFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0hGLGVBK0hFO0FBQ0UsT0FBQyxFQUFDLDJzQkFESjtBQUVFLGFBQU8sRUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0hGLGVBbUlFO0FBQ0UsT0FBQyxFQUFDLHdIQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuSUYsZUF1SUU7QUFDRSxPQUFDLEVBQUMsaUxBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZJRixlQTJJRTtBQUNFLE9BQUMsRUFBQyx1V0FESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0lGLGVBK0lFO0FBQ0UsT0FBQyxFQUFDLDJhQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvSUYsZUFtSkU7QUFDRSxPQUFDLEVBQUMsc2NBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5KRixlQXVKRTtBQUNFLE9BQUMsRUFBQyxzY0FESjtBQUVFLGFBQU8sRUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkpGLGVBMkpFO0FBQ0UsT0FBQyxFQUFDLGdjQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzSkYsZUErSkU7QUFDRSxPQUFDLEVBQUMsaVdBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9KRixlQW1LRTtBQUNFLE9BQUMsRUFBQyxrZ0JBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5LRixlQXVLRTtBQUNFLE9BQUMsRUFBQyxtSEFESjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsWUFBTSxFQUFDLE1BSFQ7QUFJRSxzQkFBZ0IsRUFBRSxFQUpwQjtBQUtFLGFBQU8sRUFBRTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdktGLGVBOEtFO0FBQ0UsT0FBQyxFQUFDLHU4QkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUtGLGVBa0xFO0FBQ0UsT0FBQyxFQUFDLG1mQURKO0FBRUUsYUFBTyxFQUFFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsTEYsZUFzTEU7QUFBUSxRQUFFLEVBQUUsS0FBWjtBQUFtQixRQUFFLEVBQUUsTUFBdkI7QUFBK0IsT0FBQyxFQUFFLEtBQWxDO0FBQXlDLFVBQUksRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRMRixlQXVMRTtBQUNFLE9BQUMsRUFBQyxraUNBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZMRixlQTJMRTtBQUNFLE9BQUMsRUFBQyxpa0NBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtNRCxDQW5NTTtBQXFNQSxNQUFNaWdCLE1BQU0sR0FBSWpnQixLQUFELElBQVc7QUFDL0Isc0JBQ0U7QUFDRSxTQUFLLEVBQUMsNEJBRFI7QUFFRSxXQUFPLEVBQUM7QUFGVixLQUdNQSxLQUhOO0FBQUEsNEJBS0U7QUFBQSw4QkFDRTtBQUNFLFVBQUUsRUFBQyxXQURMO0FBRUUsVUFBRSxFQUFFLE1BRk47QUFHRSxVQUFFLEVBQUUsTUFITjtBQUlFLFVBQUUsRUFBRSxNQUpOO0FBS0UsVUFBRSxFQUFFLElBTE47QUFNRSxxQkFBYSxFQUFDLGdCQU5oQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBRSxDQUFkO0FBQWlCLG1CQUFTLEVBQUMsTUFBM0I7QUFBa0MscUJBQVcsRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBTSxnQkFBTSxFQUFFLElBQWQ7QUFBb0IsbUJBQVMsRUFBQyxNQUE5QjtBQUFxQyxxQkFBVyxFQUFFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFNLGdCQUFNLEVBQUUsQ0FBZDtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQWtDLHFCQUFXLEVBQUU7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFhRTtBQUNFLFVBQUUsRUFBQyxXQURMO0FBRUUsVUFBRSxFQUFFLE9BRk47QUFHRSxVQUFFLEVBQUUsTUFITjtBQUlFLFVBQUUsRUFBRSxPQUpOO0FBS0UsVUFBRSxFQUFFLE1BTE47QUFNRSx5QkFBaUIsRUFBQyx5QkFOcEI7QUFPRSxpQkFBUyxFQUFDO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUE0QkU7QUFDRSxPQUFDLEVBQUMsK3lCQURKO0FBRUUsVUFBSSxFQUFDLFNBRlA7QUFHRSxhQUFPLEVBQUU7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRixlQWlDRTtBQUNFLE9BQUMsRUFBQyw2REFESjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsWUFBTSxFQUFDLFNBSFQ7QUFJRSxzQkFBZ0IsRUFBRSxFQUpwQjtBQUtFLGlCQUFXLEVBQUU7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDRixlQXdDRTtBQUNFLE9BQUMsRUFBQyxvREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeENGLGVBNENFO0FBQ0UsT0FBQyxFQUFDLG1TQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0YsZUFnREU7QUFDRSxRQUFFLEVBQUUsTUFETjtBQUVFLFFBQUUsRUFBRSxNQUZOO0FBR0UsT0FBQyxFQUFFLElBSEw7QUFJRSxlQUFTLEVBQUMsc0NBSlo7QUFLRSxVQUFJLEVBQUM7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhERixlQXVERTtBQUNFLFFBQUUsRUFBRSxLQUROO0FBRUUsUUFBRSxFQUFFLE1BRk47QUFHRSxPQUFDLEVBQUUsSUFITDtBQUlFLGVBQVMsRUFBQyxzQ0FKWjtBQUtFLFVBQUksRUFBQztBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkRGLGVBOERFO0FBQ0UsT0FBQyxFQUFDLGdJQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5REYsZUFrRUU7QUFDRSxPQUFDLEVBQUMsNkdBREo7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLFlBQU0sRUFBQyxTQUhUO0FBSUUsc0JBQWdCLEVBQUUsRUFKcEI7QUFLRSxpQkFBVyxFQUFFO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRUYsZUF5RUU7QUFBTSxVQUFJLEVBQUMsaUJBQVg7QUFBNkIsT0FBQyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekVGLGVBMEVFO0FBQU0sVUFBSSxFQUFDLFNBQVg7QUFBcUIsT0FBQyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUVGLGVBMkVFO0FBQ0UsVUFBSSxFQUFDLFNBRFA7QUFFRSxPQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNFRixlQStFRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9FRixlQWdGRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEZGLGVBb0ZFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEZGLGVBcUZFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyRkYsZUF5RkU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6RkYsZUEwRkU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFGRixlQThGRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlGRixlQStGRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0ZGLGVBbUdFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkdGLGVBb0dFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwR0YsZUF3R0U7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4R0YsZUF5R0U7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpHRixlQTZHRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdHRixlQThHRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUdGLGVBa0hFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEhGLGVBbUhFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuSEYsZUF1SEU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2SEYsZUF3SEU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhIRixlQTRIRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVIRixlQTZIRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0hGLGVBaUlFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaklGLGVBa0lFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsSUYsZUFzSUU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0SUYsZUF1SUU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZJRixlQTJJRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNJRixlQTRJRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUlGLGVBZ0pFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEpGLGVBaUpFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqSkYsZUFxSkU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFySkYsZUFzSkU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRKRixlQTBKRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFKRixlQTJKRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0pGLGVBK0pFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0pGLGVBZ0tFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoS0YsZUFvS0U7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwS0YsZUFxS0U7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJLRixlQXlLRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpLRixlQTBLRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUtGLGVBOEtFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUtGLGVBK0tFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvS0YsZUFtTEU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuTEYsZUFvTEU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBMRixlQXdMRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhMRixlQXlMRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekxGLGVBNkxFO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0xGLGVBOExFO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5TEYsZUFrTUU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsTUYsZUFtTUU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5NRixlQXVNRTtBQUFNLFVBQUksRUFBQyxNQUFYO0FBQWtCLE9BQUMsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZNRixlQXdNRTtBQUNFLE9BQUMsRUFBQywrREFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeE1GLGVBNE1FO0FBQU0sVUFBSSxFQUFDLE1BQVg7QUFBa0IsT0FBQyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNU1GLGVBNk1FO0FBQ0UsT0FBQyxFQUFDLCtEQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3TUYsZUFpTkU7QUFBTSxVQUFJLEVBQUMsTUFBWDtBQUFrQixPQUFDLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqTkYsZUFrTkU7QUFDRSxPQUFDLEVBQUMsK0RBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxORixlQXNORTtBQUNFLE9BQUMsRUFBQyw2Y0FESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdE5GLGVBME5FO0FBQVEsUUFBRSxFQUFFLE1BQVo7QUFBb0IsUUFBRSxFQUFFLE1BQXhCO0FBQWdDLE9BQUMsRUFBRSxHQUFuQztBQUF3QyxVQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExTkYsZUEyTkU7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixRQUFFLEVBQUUsTUFBeEI7QUFBZ0MsT0FBQyxFQUFFLEdBQW5DO0FBQXdDLFVBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNORixlQTRORTtBQUFRLFFBQUUsRUFBRSxNQUFaO0FBQW9CLFFBQUUsRUFBRSxNQUF4QjtBQUFnQyxPQUFDLEVBQUUsR0FBbkM7QUFBd0MsVUFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNU5GLGVBNk5FO0FBQVEsUUFBRSxFQUFFLE1BQVo7QUFBb0IsUUFBRSxFQUFFLE1BQXhCO0FBQWdDLE9BQUMsRUFBRSxHQUFuQztBQUF3QyxVQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3TkYsZUE4TkU7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixRQUFFLEVBQUUsTUFBeEI7QUFBZ0MsT0FBQyxFQUFFLEdBQW5DO0FBQXdDLFVBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlORixlQStORTtBQUFRLFFBQUUsRUFBRSxNQUFaO0FBQW9CLFFBQUUsRUFBRSxNQUF4QjtBQUFnQyxPQUFDLEVBQUUsR0FBbkM7QUFBd0MsVUFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL05GLGVBZ09FO0FBQVEsUUFBRSxFQUFFLE1BQVo7QUFBb0IsUUFBRSxFQUFFLE1BQXhCO0FBQWdDLE9BQUMsRUFBRSxHQUFuQztBQUF3QyxVQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoT0YsZUFpT0U7QUFBUSxRQUFFLEVBQUUsR0FBWjtBQUFpQixRQUFFLEVBQUUsTUFBckI7QUFBNkIsT0FBQyxFQUFFLEdBQWhDO0FBQXFDLFVBQUksRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpPRixlQWtPRTtBQUFRLFFBQUUsRUFBRSxNQUFaO0FBQW9CLFFBQUUsRUFBRSxNQUF4QjtBQUFnQyxPQUFDLEVBQUUsR0FBbkM7QUFBd0MsVUFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbE9GLGVBbU9FO0FBQVEsUUFBRSxFQUFFLE1BQVo7QUFBb0IsUUFBRSxFQUFFLE1BQXhCO0FBQWdDLE9BQUMsRUFBRSxHQUFuQztBQUF3QyxVQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuT0YsZUFvT0U7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixRQUFFLEVBQUUsTUFBeEI7QUFBZ0MsT0FBQyxFQUFFLEdBQW5DO0FBQXdDLFVBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBPRixlQXFPRTtBQUFRLFFBQUUsRUFBRSxHQUFaO0FBQWlCLFFBQUUsRUFBRSxNQUFyQjtBQUE2QixPQUFDLEVBQUUsR0FBaEM7QUFBcUMsVUFBSSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBck9GLGVBc09FO0FBQVEsUUFBRSxFQUFFLE1BQVo7QUFBb0IsUUFBRSxFQUFFLE1BQXhCO0FBQWdDLE9BQUMsRUFBRSxHQUFuQztBQUF3QyxVQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0T0YsZUF1T0U7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixRQUFFLEVBQUUsTUFBeEI7QUFBZ0MsT0FBQyxFQUFFLEdBQW5DO0FBQXdDLFVBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZPRixlQXdPRTtBQUFRLFFBQUUsRUFBRSxNQUFaO0FBQW9CLFFBQUUsRUFBRSxNQUF4QjtBQUFnQyxPQUFDLEVBQUUsR0FBbkM7QUFBd0MsVUFBSSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeE9GLGVBeU9FO0FBQVEsUUFBRSxFQUFFLE1BQVo7QUFBb0IsUUFBRSxFQUFFLE1BQXhCO0FBQWdDLE9BQUMsRUFBRSxHQUFuQztBQUF3QyxVQUFJLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6T0YsZUEwT0U7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixRQUFFLEVBQUUsTUFBeEI7QUFBZ0MsT0FBQyxFQUFFLEdBQW5DO0FBQXdDLFVBQUksRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFPRixlQTJPRTtBQUNFLE9BQUMsRUFBQyx5L0NBREo7QUFFRSxlQUFTLEVBQUMsMkJBRlo7QUFHRSxVQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNPRixlQWdQRTtBQUNFLE9BQUMsRUFBQyw2SEFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaFBGLGVBb1BFO0FBQ0UsT0FBQyxFQUFDLDZIQURKO0FBRUUsYUFBTyxFQUFFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwUEYsZUF3UEU7QUFDRSxPQUFDLEVBQUMsa0pBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhQRixlQTRQRTtBQUNFLE9BQUMsRUFBQywyTEFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNVBGLGVBZ1FFO0FBQ0UsT0FBQyxFQUFDLDRJQURKO0FBRUUsYUFBTyxFQUFFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoUUYsZUFvUUU7QUFDRSxPQUFDLEVBQUMsa0pBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBRRixlQXdRRTtBQUNFLE9BQUMsRUFBQyxvS0FESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeFFGLGVBNFFFO0FBQ0UsT0FBQyxFQUFDLDRJQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1UUYsZUFnUkU7QUFDRSxPQUFDLEVBQUMsNElBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhSRixlQW9SRTtBQUNFLE9BQUMsRUFBQyxxSkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcFJGLGVBd1JFO0FBQ0UsT0FBQyxFQUFDLHFKQURKO0FBRUUsYUFBTyxFQUFFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4UkYsZUE0UkU7QUFDRSxPQUFDLEVBQUMsaUdBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVSRixlQWdTRTtBQUNFLE9BQUMsRUFBQyw4VkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaFNGLGVBb1NFO0FBQ0UsT0FBQyxFQUFDLHdGQURKO0FBRUUsYUFBTyxFQUFFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwU0YsZUF3U0U7QUFBUSxRQUFFLEVBQUUsTUFBWjtBQUFvQixRQUFFLEVBQUUsTUFBeEI7QUFBZ0MsT0FBQyxFQUFFLEtBQW5DO0FBQTBDLFVBQUksRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhTRixlQXlTRTtBQUNFLE9BQUMsRUFBQywrSEFESjtBQUVFLGFBQU8sRUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBelNGLGVBNlNFO0FBQ0UsT0FBQyxFQUFDLDJOQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3U0YsZUFpVEU7QUFDRSxPQUFDLEVBQUMscUpBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpURixlQXFURTtBQUNFLE9BQUMsRUFBQyxtTEFESjtBQUVFLGFBQU8sRUFBRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBclRGLGVBeVRFO0FBQ0UsT0FBQyxFQUFDLG1MQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6VEYsZUE2VEU7QUFDRSxPQUFDLEVBQUMsK0dBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdURixlQWlVRTtBQUNFLE9BQUMsRUFBQyxtcEJBREo7QUFFRSxhQUFPLEVBQUU7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpVRixlQXFVRTtBQUNFLE9BQUMsRUFBQyxtcEJBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJVRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTRVRCxDQTdVTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNeWdCLE1BQU0sR0FBRyxNQUFNO0FBQ3BCLFFBQU1yaUIsTUFBTSxHQUFHa0Qsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ3lOLElBQUQ7QUFBQSxPQUFPMlI7QUFBUCxNQUFrQmpULCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDa1QsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJuVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7O0FBRUEsUUFBTW9ULFlBQVksR0FBSXJoQixDQUFELElBQU87QUFDM0IsWUFBUUEsQ0FBQyxDQUFDVCxNQUFGLENBQVNnUSxJQUFqQjtBQUNDLFdBQUssTUFBTDtBQUNDMlIsUUFBQUEsT0FBTyxDQUFDbGhCLENBQUMsQ0FBQ1QsTUFBRixDQUFTdkIsS0FBVixDQUFQO0FBQ0E7O0FBQ0QsV0FBSyxVQUFMO0FBQ0NvakIsUUFBQUEsV0FBVyxDQUFDcGhCLENBQUMsQ0FBQ1QsTUFBRixDQUFTdkIsS0FBVixDQUFYO0FBQ0E7QUFORjtBQVFBLEdBVEQ7O0FBV0EsUUFBTXNqQixZQUFZLEdBQUcsTUFBTTtBQUMxQixVQUFNQyxHQUFHLEdBQUc7QUFDWEMsTUFBQUEsT0FBTyxFQUFFO0FBQ1Isd0JBQWdCLGtCQURSO0FBRVJDLFFBQUFBLE1BQU0sRUFBRTtBQUZBLE9BREU7QUFLWGxMLE1BQUFBLElBQUksRUFBRTtBQUNMaEgsUUFBQUEsSUFBSSxFQUFFQSxJQUREO0FBRUw0UixRQUFBQSxRQUFRLEVBQUVBO0FBRkwsT0FMSztBQVNYcFAsTUFBQUEsR0FBRyxFQUFHLEdBQUV0TiwyQkFBb0I7QUFUakIsS0FBWjtBQVdBLFVBQU1rZCxPQUFPLEdBQUdmLGlEQUFBLENBQVdXLEdBQUcsQ0FBQ3hQLEdBQWYsRUFBb0J3UCxHQUFHLENBQUNoTCxJQUF4QixFQUE4QjtBQUM3Q2lMLE1BQUFBLE9BQU8sRUFBRUQsR0FBRyxDQUFDQyxPQURnQztBQUU3Q0ssTUFBQUEsZUFBZSxFQUFFO0FBRjRCLEtBQTlCLENBQWhCO0FBSUFoQixJQUFBQSw4REFBQSxDQUFjYyxPQUFkLEVBQXVCO0FBQ3RCRyxNQUFBQSxPQUFPLEVBQUUsZUFEYTtBQUV0QkMsTUFBQUEsT0FBTyxFQUFHQyxRQUFELElBQWM7QUFDdEJyQixRQUFBQSxrREFBUyxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWVxQixRQUFRLENBQUN6TCxJQUFULENBQWMwTCxNQUE3QixFQUFxQztBQUM3Q0MsVUFBQUEsTUFBTSxFQUFFN0osSUFBSSxDQUFDTyxLQUFMLENBQVdvSixRQUFRLENBQUN6TCxJQUFULENBQWMwTCxNQUF6QixFQUFpQ0UsR0FESTtBQUU3QzdkLFVBQUFBLElBQUksRUFBRTtBQUZ1QyxTQUFyQyxDQUFUO0FBSUExRixRQUFBQSxNQUFNLENBQUNxQixPQUFQLENBQWUsWUFBZjtBQUNBLGVBQU8raEIsUUFBUSxDQUFDekwsSUFBVCxDQUFjckosT0FBckI7QUFDQSxPQVRxQjtBQVV0QnRDLE1BQUFBLEtBQUssRUFBR0EsS0FBRCxJQUFXO0FBQ2pCLFlBQUlBLEtBQUssQ0FBQ29YLFFBQU4sQ0FBZXpMLElBQWYsQ0FBb0I2TCxNQUF4QixFQUFnQztBQUMvQixjQUFJeFgsS0FBSyxDQUFDb1gsUUFBTixDQUFlekwsSUFBZixDQUFvQjZMLE1BQXBCLENBQTJCN1MsSUFBL0IsRUFDQyxLQUNDLElBQUk4UyxDQUFDLEdBQUcsQ0FEVCxFQUVDQSxDQUFDLEdBQUd6WCxLQUFLLENBQUNvWCxRQUFOLENBQWV6TCxJQUFmLENBQW9CNkwsTUFBcEIsQ0FBMkI3UyxJQUEzQixDQUFnQ29DLE1BRnJDLEVBR0MwUSxDQUFDLEVBSEYsRUFLQ3hCLDREQUFBLENBQVlqVyxLQUFLLENBQUNvWCxRQUFOLENBQWV6TCxJQUFmLENBQW9CNkwsTUFBcEIsQ0FBMkI3UyxJQUEzQixDQUFnQzhTLENBQWhDLENBQVo7QUFDRixjQUFJelgsS0FBSyxDQUFDb1gsUUFBTixDQUFlekwsSUFBZixDQUFvQjZMLE1BQXBCLENBQTJCakIsUUFBL0IsRUFDQyxLQUNDLElBQUlrQixDQUFDLEdBQUcsQ0FEVCxFQUVDQSxDQUFDLEdBQUd6WCxLQUFLLENBQUNvWCxRQUFOLENBQWV6TCxJQUFmLENBQW9CNkwsTUFBcEIsQ0FBMkJqQixRQUEzQixDQUFvQ3hQLE1BRnpDLEVBR0MwUSxDQUFDLEVBSEYsRUFLQ3hCLDREQUFBLENBQVlqVyxLQUFLLENBQUNvWCxRQUFOLENBQWV6TCxJQUFmLENBQW9CNkwsTUFBcEIsQ0FBMkJqQixRQUEzQixDQUFvQ2tCLENBQXBDLENBQVo7QUFDRjs7QUFDRCxlQUFPelgsS0FBSyxDQUFDb1gsUUFBTixDQUFlekwsSUFBZixDQUFvQnJKLE9BQTNCO0FBQ0E7QUE1QnFCLEtBQXZCO0FBOEJBLEdBOUNEOztBQWdEQSxzQkFDQztBQUFBLDRCQUNDLCtEQUFDLGtEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUNDLFlBQUksRUFBQyxVQUROO0FBRUMsZUFBTyxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFRQztBQUFBLDhCQUNDLCtEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQztBQUFLLGlCQUFTLEVBQUU4VCx5RUFBaEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQsZUFPQztBQUNDLG9CQUFRLEVBQUdoaEIsQ0FBRCxJQUFPc2hCLFlBQVksQ0FBQ3RoQixDQUFDLENBQUNLLGNBQUYsRUFBRCxDQUQ5QjtBQUFBLG9DQUdDO0FBQUEsbURBRUM7QUFDQyxvQkFBSSxFQUFDLE1BRE47QUFFQyxrQkFBRSxFQUFDLE1BRko7QUFHQyxvQkFBSSxFQUFDLE1BSE47QUFJQyxxQkFBSyxFQUFFa1AsSUFKUjtBQUtDLHdCQUFRLEVBQUU4UixZQUxYO0FBTUMsd0JBQVE7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRCxlQWNDO0FBQUEsdURBRUM7QUFDQyxvQkFBSSxFQUFDLFVBRE47QUFFQyxrQkFBRSxFQUFDLFVBRko7QUFHQyxvQkFBSSxFQUFDLFVBSE47QUFJQyxxQkFBSyxFQUFFRixRQUpSO0FBS0Msd0JBQVEsRUFBRUUsWUFMWDtBQU1DLHdCQUFRO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEQsZUF5QkM7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRCxlQWtDQztBQUFBLGdEQUN1QixHQUR2QixlQUVDLCtEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxpQkFBWDtBQUFBLHFDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbENELGVBd0NDO0FBQUEsNENBQ21CLEdBRG5CLGVBRUMsK0RBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFNBQVg7QUFBQSxxQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFnREM7QUFBSyxtQkFBUyxFQUFFTCx3RUFBaEI7QUFBQSxrQ0FDQywrREFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkQsZUFxRUMsK0RBQUMsb0RBQUQ7QUFDQyxjQUFRLEVBQUMsZUFEVjtBQUVDLGtCQUFZLEVBQUUsS0FGZjtBQUdDLGtCQUFZLEVBQUU7QUFDYnlCLFFBQUFBLEtBQUssRUFBRTtBQUNOQyxVQUFBQSxZQUFZLEVBQUUsS0FEUjtBQUVOQyxVQUFBQSxlQUFlLEVBQUUsT0FGWDtBQUdOQyxVQUFBQSxPQUFPLEVBQUU7QUFISCxTQURNO0FBTWJDLFFBQUFBLFFBQVEsRUFBRSxJQU5HO0FBT2JkLFFBQUFBLE9BQU8sRUFBRTtBQUNSZSxVQUFBQSxTQUFTLEVBQUU7QUFDVkMsWUFBQUEsT0FBTyxFQUFFLFNBREM7QUFFVkMsWUFBQUEsU0FBUyxFQUFFO0FBRkQ7QUFESCxTQVBJO0FBYWJwWSxRQUFBQSxLQUFLLEVBQUU7QUFBRWlZLFVBQUFBLFFBQVEsRUFBRTtBQUFaO0FBYk07QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJFRDtBQUFBLGtCQUREO0FBMkZBLENBM0pEOztBQTZKTyxNQUFlSSxrQkFBdEIsd0dBQXNCQSxrQkFBdEIsQ0FBeUNsRCxHQUF6QyxFQUE4QztBQUM3QyxNQUFJLENBQUMsQ0FBQ1csa0RBQUEsQ0FBWVgsR0FBWixFQUFpQm1ELElBQXZCLEVBQ0MsT0FBTztBQUNOQyxJQUFBQSxRQUFRLEVBQUU7QUFDVEMsTUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVHRHLE1BQUFBLFdBQVcsRUFBRTtBQUZKO0FBREosR0FBUDtBQU9ELFNBQU87QUFBRXRjLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQVA7QUFDQSxDQVZEO0FBWUEsaUVBQWUscUZBQUF5Z0IsTUFBZjs7Ozs7Ozs7OztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxrSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0Jhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9saWIvaWNvbnMvQnJhbmQuanN4Iiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvbGliL2ljb25zL1VuZHJhdy5qc3giLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9wYWdlcy9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvc3R5bGVzL2xvZ2luLm1vZHVsZS5zYXNzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJyZWFjdC1ob3QtdG9hc3RcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9pZ25vcmVkfEM6XFxVc2Vyc1xc0JLQu9Cw0LRcXERlc2t0b3BcXG15dGNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29ucy9CcmFuZFwiXHJcbmltcG9ydCBzY3NzIGZyb20gXCIuLi8uLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3Njc3MuaGVhZGVyfT5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8TGluayBocmVmPScvJz5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxMb2dvIC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbD5NWVRDPC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ25pbic+XHJcblx0XHRcdFx0XHRcdDxhPlNpZ24gaW48L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiZXhwb3J0IGNvbnN0IExvZ28gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuIHdpZHRoPVwiNjUwLjAwMDAwMHB0XCIgaGVpZ2h0PVwiNjUwLjAwMDAwMHB0XCIgdmlld0JveD1cIjAgMCA2NTAuMDAwMDAwIDY1MC4wMDAwMDBcIlxyXG4gcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cclxuXHJcbjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw3MDguMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCJcclxuZmlsbD1cIiMwMDAwMDBcIiBzdHJva2U9XCJub25lXCI+XHJcbjxwYXRoIGQ9XCJNMzMzNSA2NDI5IGMtODY3IC01OCAtMTY0OCAtNDk2IC0yMTY0IC0xMjExIC0yNDggLTM0MyAtNDI3IC03NzVcclxuLTQ5NSAtMTE4OCAtNDUgLTI3NCAtNTMgLTU4OCAtMjIgLTgzMCA4NyAtNjc2IDM3OSAtMTI2NCA4NjAgLTE3MzMgNDM4IC00MjdcclxuOTk5IC03MDIgMTYyMSAtNzk0IDE3MyAtMjUgNjIxIC0yNSA3OTAgMSA1NzIgODcgMTA2MCAzMDkgMTQ4NCA2NzIgNDU5IDM5M1xyXG43ODIgOTE0IDkyNiAxNDk0IDYyIDI1MCA4NSA0NDEgODUgNzA5IDAgNDUxIC05NyA4NjUgLTMwMSAxMjc3IC0yNjYgNTQxIC03MTBcclxuOTk2IC0xMjQyIDEyNzQgLTM4NiAyMDIgLTc1MSAzMDMgLTExOTAgMzMwIC0xNzcgMTEgLTE3OCAxMSAtMzUyIC0xeiBtNTgwXHJcbi0zODMgYzY4MiAtMTEwIDEyOTYgLTQ5MyAxNjg4IC0xMDUzIDQxOSAtNTk5IDU1OCAtMTM1NyAzODEgLTIwNjggLTE2NCAtNjYwXHJcbi02MDEgLTEyMzYgLTExOTggLTE1ODAgLTI2MSAtMTUxIC01NDcgLTI1MSAtODcxIC0zMDcgLTExMCAtMTggLTE2OSAtMjIgLTM4MFxyXG4tMjIgLTI1MyAtMSAtMzAwIDMgLTUxNSA0NiAtNDEyIDgwIC04MzAgMjg4IC0xMTUzIDU3MSAtNDUwIDM5NiAtNzM0IDkwM1xyXG4tODM5IDE1MDIgLTI5IDE2NiAtMzYgNTI4IC0xNCA3MDUgODUgNjczIDQxNCAxMjYyIDkzOCAxNjgyIDM0MSAyNzMgNzc5IDQ2NFxyXG4xMTkzIDUyMiA2MSA5IDEyNCAxNyAxNDAgMjAgNzQgMTAgNTM0IC0zIDYzMCAtMTh6XCIvPlxyXG48cGF0aCBkPVwiTTM0NjUgNTg5OCBjLTE0IC0xMyAtMzAgLTQwIC0zNSAtNjEgLTEyIC01NCAtNCAtMTUyIDE1IC0xODAgMzYgLTU2XHJcbjExNSAtNTkgMTYwIC01IDIyIDI2IDI1IDM5IDI1IDEwOCAwIDQ0IC01IDkxIC0xMiAxMDUgLTI1IDU0IC0xMDcgNzIgLTE1MyAzM3pcIi8+XHJcbjxwYXRoIGQ9XCJNMTg3MyA1MjQxIGMtMzcgLTIzIC01NCAtNzEgLTQxIC0xMTYgOSAtMzUgOTAgLTExOSAxMjkgLTEzNiA2OSAtMjhcclxuMTM5IDIxIDEzOSA5NiAwIDMyIC05IDQ2IC02MiAxMDEgLTc0IDc2IC0xMTIgODggLTE2NSA1NXpcIi8+XHJcbjxwYXRoIGQ9XCJNNTA3NSA1MjQyIGMtMzggLTI0IC0xMDMgLTk2IC0xMTUgLTEyOCAtMjMgLTYwIDI5IC0xMzQgOTQgLTEzNCA2N1xyXG4wIDE3NiAxMTIgMTc2IDE4MCAwIDczIC05MiAxMjIgLTE1NSA4MnpcIi8+XHJcbjxwYXRoIGQ9XCJNMTkyNCA0MzYwIGMtMTExIC0yMiAtMjI0IC0xMTMgLTI4MyAtMjI1IGwtMzYgLTcwIDAgLTUyMCAwIC01MjAgMzFcclxuLTY1IGM2NiAtMTM3IDE4MSAtMjIxIDMzMSAtMjQwIDEwNSAtMTQgMzA0MyAtMTMgMzEzNyAwIDE1MCAyMiAyODMgMTM0IDMzM1xyXG4yODEgMTYgNDkgMTggOTUgMTggNTM5IDAgNTM5IDAgNTM4IC02NiA2NDAgLTQ1IDcwIC0xMTggMTMwIC0xOTYgMTYyIGwtNTggMjNcclxuLTE1ODUgMSBjLTg3MiAxIC0xNjA0IC0yIC0xNjI2IC02eiBtNTc5IC02MTcgYzEzIC0yMSA2MiAtMTExIDEwOCAtMjAwIDQ2XHJcbi05MCA4NiAtMTYzIDg5IC0xNjMgMyAwIDUwIDg0IDEwNCAxODggNTQgMTAzIDEwMyAxOTMgMTA4IDIwMCAxMyAxNSA2MCAxNiA3NlxyXG4wIDE3IC0xNyAxNyAtNTg5IDAgLTYwNiAtNyAtNyAtMjIgLTEyIC0zNCAtMTIgLTQzIDAgLTQ5IDIyIC01NCAyMTkgbC01IDE4NlxyXG4tNTkgLTExNSBjLTkzIC0xODAgLTEwMSAtMTkyIC0xMzkgLTE4OCAtMzAgMyAtMzcgMTEgLTk0IDExOCAtMzQgNjMgLTcxIDEzMVxyXG4tODIgMTUwIGwtMjEgMzUgMCAtMTg0IGMwIC0xNTcgLTIgLTE4NyAtMTcgLTIwMyAtMTggLTIxIC01MyAtMjQgLTcxIC02IC0xN1xyXG4xNyAtMTcgNTg5IDAgNjA2IDcgNyAyNSAxMiA0MCAxMiAyMSAwIDMzIC05IDUxIC0zN3ogbTczNCAtNjkgYzQ4IC01OCA5MlxyXG4tMTEyIDk4IC0xMjEgOSAtMTIgMjcgNSAxMDYgMTA0IDcyIDg5IDEwMSAxMTkgMTIxIDEyMSAzMCA0IDYwIC0zMCA1MSAtNTcgLTNcclxuLTkgLTUzIC03NCAtMTEwIC0xNDUgbC0xMDMgLTEyOCAwIC0xMzEgYzAgLTEwNyAtMyAtMTM0IC0xNyAtMTQ5IC0yMCAtMjIgLTUxXHJcbi0yMyAtNzUgLTEgLTE2IDE0IC0xOCAzMyAtMTggMTUwIGwwIDEzNCAtMTA1IDEyNyBjLTEwNSAxMjcgLTEyMiAxNjEgLTkzIDE5MFxyXG4zMCAzMCA1NyAxMyAxNDUgLTk0eiBtOTI1IDg5IGMyMyAtMjEgMjMgLTM4IC0yIC02MyAtMTcgLTE3IC0zMyAtMjAgLTExMCAtMjBcclxubC05MCAwIDAgLTI0OSBjMCAtMjE0IC0yIC0yNTIgLTE2IC0yNjUgLTIwIC0yMSAtNTMgLTIwIC03NiAxIC0xNiAxNSAtMTggMzdcclxuLTE4IDI2NSBsMCAyNDggLTc5IDAgYy0xMDIgMCAtMTMxIDEwIC0xMzEgNDggMCA1MSA2IDUyIDI2NCA1MiAyMDkgMCAyNDIgLTJcclxuMjU4IC0xN3ogbTQ3MyAtMTQgYzUzIC0yNyA3NiAtNTggNjcgLTkxIC04IC0zMyAtMzAgLTMyIC05NyAyIC01NyAyOSAtNzEgMzJcclxuLTEyOSAyOCAtODAgLTUgLTExMSAtMjUgLTE0NSAtOTMgLTM2IC03MCAtMzYgLTE5MiAwIC0yNjEgNDkgLTk1IDE1NiAtMTIxXHJcbjI2NSAtNjQgNjQgMzQgOTMgMzUgMTA0IDUgMTMgLTM1IC02IC02MiAtNjcgLTkxIC00MyAtMjIgLTc2IC0zMCAtMTMwIC0zMlxyXG4tMTMwIC03IC0yMjUgNDUgLTI4MSAxNTIgLTI0IDQ2IC0yNyA2MiAtMjcgMTYxIDAgMTI5IDE3IDE3OCA4NSAyNDMgNTcgNTZcclxuMTA2IDcyIDIxNSA2OSA3NSAtMiA5OSAtNiAxNDAgLTI4elwiLz5cclxuPHBhdGggZD1cIk0xMjE4IDM2NDUgYy0zMiAtMTggLTU4IC02MyAtNTggLTk5IDAgLTE0IDEzIC00MCAyOSAtNTggMjkgLTMzIDI5XHJcbi0zMyAxMjYgLTMzIDk3IDAgOTcgMCAxMjYgMzMgMzkgNDQgMzkgOTAgMCAxMzQgLTI4IDMyIC0zMyAzMyAtMTEzIDM2IC02MCAyXHJcbi05MSAtMiAtMTEwIC0xM3pcIi8+XHJcbjxwYXRoIGQ9XCJNNTY0MCAzNjQzIGMtMzkgLTI3IC00OSAtNDUgLTQ5IC04OCAtMSAtNzUgNDMgLTEwNSAxNTEgLTEwNSA4OCAwXHJcbjEzNSAyMyAxNDQgNzAgMjAgOTcgLTI1IDE0MCAtMTQ3IDE0MCAtNTQgMCAtODEgLTUgLTk5IC0xN3pcIi8+XHJcbjxwYXRoIGQ9XCJNMTk0NSAyMTExIGMtNDEgLTI0IC0xMTIgLTEwNiAtMTE3IC0xMzQgLTEyIC02MyA0MCAtMTI3IDEwMyAtMTI3XHJcbjU2IDAgMTY5IDExNSAxNjkgMTcyIDAgODggLTgyIDEzNCAtMTU1IDg5elwiLz5cclxuPHBhdGggZD1cIk00OTkyIDIxMDUgYy0zNiAtMzAgLTUwIC04MSAtMzIgLTExNiAxNyAtMzQgOTAgLTEwOCAxMjIgLTEyNSA0NFxyXG4tMjMgNzcgLTE3IDExNCAyMCAyNiAyNiAzNCA0MiAzNCA3MSAwIDMyIC05IDQ2IC02MyAxMDIgLTUxIDUzIC02OSA2NSAtMTAzXHJcbjcwIC0zMyA0IC00NSAxIC03MiAtMjJ6XCIvPlxyXG48cGF0aCBkPVwiTTM1MDMgMTQ5MyBjLTYwIC0xMSAtODkgLTg1IC03NyAtMTk1IDUgLTQ4IDEyIC02MyAzNiAtODMgMTkgLTE2IDQyXHJcbi0yNSA2NCAtMjUgNzcgMCAxMDQgNDEgMTA0IDE1OSAwIDc0IC0yIDgzIC0yNyAxMTAgLTI5IDMwIC02MSA0MSAtMTAwIDM0elwiLz5cclxuPC9nPlxyXG48L3N2Zz5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEJvb2tpbmcgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA4NTMuMTE3IDU2NVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgxOS43NyAzNzguMTFjLTYuMTYgNi43My0xMy44IDExLjc0LTIyLjA5IDE1LjYzaC0uMDFjLS43OC4zNy0xLjU2LjczLTIuMzUgMS4wN2gtLjAxbC0uMDEuMDEtLjAxLS4wMWgtLjAxYS4wMS4wMSAwIDAxLS4wMS4wMWgtLjAxbC0uMDEtLjAxYy0uMDEuMDEtLjAxLjAxLS4wMiAwbC0uMDEuMDEtLjAxLS4wMWgtLjAxYy0uMDEuMDEtLjAxLjAxLS4wMiAwaC0uMDFhMTM5Ljc3NCAxMzkuNzc0IDAgMDEtMTcuMDYgNi4xQTIzNi42NTEgMjM2LjY1MSAwIDAxNjczIDQwNi40bC0yLS4zNnYtODEuMTFjLjY2LS4yOCAxLjMzLS41NiAyLS44M3E2LjU1NS0yLjcxNSAxMy4yNy00Ljk5IDkuNjYtMy4zIDE5LjU5LTUuNjZhMjEyLjE2NyAyMTIuMTY3IDAgMDE2Ni4wNC01LjM0cTYuMDQ1LjQ1IDEyLjA2IDEuM2M4LjM5IDEuMTcgMTcuMTkgMy4yMSAyNC45MyA2Ljc1aC4wMWMxLjEzLjUzIDIuMjQgMS4wOCAzLjM0IDEuNjcgNi44OCAzLjczIDEyLjY4IDguODYgMTYuMjIgMTUuODlhMzAuNTczIDMwLjU3MyAwIDAxMi43MiA3Ljk5di4wMmMuMi45Ni4zNCAxLjkzLjQ1IDIuODkgMS4yNiAxMS44NC0zLjY1IDI0LjUxLTExLjg2IDMzLjQ5elwiXHJcbiAgICAgICAgZmlsbD1cIiNmMmYyZjJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODMxLjYzIDM0NC42MmExLjM1OCAxLjM1OCAwIDAxLS4zLjA0cS0yNS42OTUgMS4xMjUtNTEuMzIgMy4zNGgtLjAzYy0uMDcuMDEtLjEzLjAxLS4yLjAycS0yNi4zMSAyLjI4LTUyLjUxIDUuNzFjLS43NC4xLTEuNDcuMi0yLjIuMjlxLTE4LjEyIDIuNDE1LTM2LjE3IDUuMzYtNy45NjUgMS4zMDUtMTUuOSAyLjcyYy0uNjcuMTItMS4zMy4yMy0yIC4zNnYtMy4wM2MuNjctLjEzIDEuMzQtLjI0IDItLjM2cTI2LjQzLTQuNjggNTMuMDQtOC4xNyA2LjY5LS45IDEzLjQtMS43IDE5LjM4LTIuMzQgMzguODItNC4wNGwyLjg0LS4yNHEyNC44ODUtMi4xMTUgNDkuODQtMy4yMWEuOTM5LjkzOSAwIDAxLjI0LjAyYzEuNi4xNCAxLjk0IDIuNTQuNDUgMi44OXpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc5Ni4wNTYgMzkxLjg2M2MtMjEuMzQuMTU3LTQyLjM2My04Ljg5Mi01Ny40NTgtMjMuODdhNzcuODI2IDc3LjgyNiAwIDAxLTExLjE4NC0xNC4wN2MtMS4wMTctMS42My0zLjM5OC4xNjktMi4zODkgMS43ODYgMTEuNzIzIDE4LjggMzEuMjUgMzIuMTkzIDUyLjc3OCAzNy4xMThhODAuODExIDgwLjgxMSAwIDAwMTguNjM3IDEuOTk0YzEuOTEzLS4wMTQgMS41MTctMi45NzItLjM4NC0yLjk1OHpNNzA1Ljg2IDMxMy40NWExLjY5MiAxLjY5MiAwIDAxLTEuMjUgMS4xMyA2NS4yMiA2NS4yMiAwIDAwLTE0LjA4IDUuNUE2OC40MDYgNjguNDA2IDAgMDA2NzMgMzMzLjMzYy0uMjcuMjctLjUzLjU0LS43OC44Mi0uNDIuNDQtLjgyLjg5LTEuMjIgMS4zNXYtNC4zNmE0MS44IDQxLjggMCAwMTItMS45OSA3MS45MTIgNzEuOTEyIDAgMDExMy4yNy0xMC4wNHE5LjY2LTMuMyAxOS41OS01LjY2em0xMDQuNzk5IDEuOTIyYTY5LjQwMiA2OS40MDIgMCAwMC0zMi40MjIgMjguNTg1IDEuNSAxLjUgMCAwMC43OTMgMS45NTQgMS41MjggMS41MjggMCAwMDEuOTUzLS43OTIgNjYuMDQ5IDY2LjA0OSAwIDAxMzAuNzk3LTI2Ljk4NGMxLjc2NS0uNzU0LjY0OC0zLjUxOS0xLjEyMS0yLjc2M3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg1MS41OCAyMzAuNDRjLTIuMzIgOC44Mi02Ljc3IDE2LjgxLTEyLjMgMjQuMWwtLjAxLjAxYy0uNTEuNjgtMS4wNCAxLjM3LTEuNTkgMi4wM3YuMDFhMTM5LjI3IDEzOS4yNyAwIDAxLTEyLjQxIDEzLjM5IDIzMy40MjkgMjMzLjQyOSAwIDAxLTUzLjM3IDM4LjEzYy0zMC42NyAxNi4wMi02NC45NSAyNS40OS05OC45IDI2LjAzLS4yNi4wMS0uNTIuMDEtLjc4LjAxLS40MS4wMS0uODIuMDEtMS4yMi4wMXYtNDUuNDVjLjY1LTEuMjQgMS4zMi0yLjQ4IDItMy43MWEyMTkuNTI0IDIxOS41MjQgMCAwMTMyLjAzLTQzLjgyYy4zLS4zMy42MS0uNjYuOTItLjk4cTcuMDItNy40MSAxNC43Mi0xNC4xMWEyMTAuODE5IDIxMC44MTkgMCAwMTY3LjI5LTM5Ljg1YzcuOTctMi44NiAxNi43MS01LjE1IDI1LjIxLTUuNiAxLjI1LS4wNyAyLjQ5LS4xIDMuNzQtLjA5IDcuODMuMTEgMTUuMzQgMS45NiAyMS43NSA2LjU0YTMwLjk5OSAzMC45OTkgMCAwMTYuMTIgNS44MWMuNjIuNzcgMS4xOSAxLjU2IDEuNzQgMi4zN3YuMDFjNi42MiA5LjkgOC4xNiAyMy4zOSA1LjA2IDM1LjE2elwiXHJcbiAgICAgICAgZmlsbD1cIiNmMmYyZjJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODQ2LjUyIDE5NS4yN3YuMDFhMS40NjEgMS40NjEgMCAwMS0uMjQuMTdxLTIyLjIgMTIuOTE1LTQzLjg0IDI2Ljc3Yy0uMDIuMDEtLjAzLjAyLS4wNS4wM2ExLjc0IDEuNzQgMCAwMS0uMTguMTFxLTIyLjI0NSAxNC4yNS00My44NiAyOS40NmMtLjYuNDItMS4yMS44NS0xLjgyIDEuMjhxLTE0LjkyNSAxMC41NDUtMjkuNTQgMjEuNTQtMjcuNiAyMC43OS01My45OSA0My4xMmMtLjY3LjU2LTEuMzMgMS4xMy0yIDEuN3YtMy44OWMuNjYtLjU3IDEuMzMtMS4xNCAyLTEuN3ExMC4xMS04LjUzNSAyMC40LTE2LjgzYzIuMDUtMS42NSA0LjExLTMuMyA2LjE3LTQuOTNxMjcuNDUtMjEuODU1IDU2LjEzLTQyLjA4aC4wMXE1LjY0LTMuOTc1IDExLjMtNy44OCAxNi4wOC0xMS4wNyAzMi41Mi0yMS42MWMuNzktLjUxIDEuNTktMS4wMiAyLjM5LTEuNTNxMjEuMDQ1LTEzLjQ0IDQyLjY0LTI2YTEuNDg5IDEuNDg5IDAgMDEuMjItLjExYzEuNS0uNiAyLjkxIDEuMzggMS43NCAyLjM3elwiXHJcbiAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODM2Ljk2OCAyNTMuNjMzYy0xOC44MjUgMTAuMDUyLTQxLjY0NiAxMS44MDUtNjEuOTcgNS41NTNhNzcuODI3IDc3LjgyNyAwIDAxLTE2LjQ0LTcuMjY0Yy0xLjY2LS45NzMtMi45MzEgMS43MjYtMS4yODYgMi42OSAxOS4xMTQgMTEuMjA0IDQyLjYyNyAxMy45OTMgNjMuOTggOC4zNTNhODAuODEyIDgwLjgxMiAwIDAwMTcuNDMtNi44OWMxLjY4OC0uOTAyLS4wMzctMy4zMzctMS43MTQtMi40NDJ6bS0xNDAuODQ3IDM2LjU4OWE2OC41NTMgNjguNTUzIDAgMDEtLjk1Mi0xNS44NyA3Mi4zMTkgNzIuMzE5IDAgMDExMC43OC0zNC4xNXE3LjAyOS03LjQwOCAxNC43MjQtMTQuMTEyYTEuNzA1IDEuNzA1IDAgMDEtLjU4NiAxLjU4NSA2NS40NTEgNjUuNDUxIDAgMDAtOS45MTIgMTEuNDA3IDY5LjEyMiA2OS4xMjIgMCAwMC0xMS4wODIgNTAuODkyIDEuMjEyIDEuMjEyIDAgMDEtLjMxNCAxLjE0MyAxLjYyNSAxLjYyNSAwIDAxLTIuNjU4LS44OTV6bTExOC4yNDctMTExLjExYTY5LjQwMiA2OS40MDIgMCAwMC0xNS40MzMgNDAuMzc1IDEuNSAxLjUgMCAwMDEuNjEgMS4zNjIgMS41MjggMS41MjggMCAwMDEuMzYxLTEuNjEgNjYuMDQ4IDY2LjA0OCAwIDAxMTQuNzM4LTM4LjJjMS4yMTMtMS40ODgtMS4wNjEtMy40MTctMi4yNzYtMS45Mjd6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03MTAuODEgMjExLjk3di4wMWMtLjA3Ljg2LS4xNSAxLjcxLS4yNCAyLjU2di4wMmExNDEuMyAxNDEuMyAwIDAxLTMuMjUgMTcuOTZjLS43IDIuOS0xLjQ2IDUuNzgtMi4yOSA4LjY2LS4xLjM3LS4yMS43NC0uMzIgMS4xdi4wMWEyMjkuNTIzIDIyOS41MjMgMCAwMS04Ljc0IDI0LjY1QTIzOC45MTggMjM4LjkxOCAwIDAxNjczIDMwOS4xNmMtLjY1Ljk3LTEuMzIgMS45NC0yIDIuOXYtMTU2LjZjLjY3LS4wNCAxLjMzLS4wNCAyLS4wMnEuNDggMCAuOTYuMDNhMzAuMzIyIDMwLjMyMiAwIDAxOC4yOCAxLjYxYy45NC4zMSAxLjg1LjY2IDIuNzUgMS4wNSAxMC45MSA0Ljc4IDE5LjQ4IDE1LjMyIDIzLjIgMjYuOTEgMi43OSA4LjY4IDMuMzUgMTcuODEgMi42MiAyNi45M3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTY4NC45OSAxNTguMTNhMS4wNzYgMS4wNzYgMCAwMS0uMTEuMjhxLTYuMDc1IDExLjgwNS0xMS44OCAyMy43M2MtLjY3IDEuMzctMS4zNCAyLjc1LTIgNC4xMnYtNi44cS45OS0yLjA0IDItNC4wOCA0LjQ4NS05LjA5IDkuMTItMTguMWExLjMwNCAxLjMwNCAwIDAxLjEyLS4yYy45Mi0xLjMyIDMuMi0uNDIgMi43NSAxLjA1em0yNi4xNCA1NS40NWMtLjE4LjMyLS4zNi42NC0uNTYuOTZhNzkuODE2IDc5LjgxNiAwIDAxLTEwLjQyIDE0LjI0QTg1LjkxNiA4NS45MTYgMCAwMTY3MyAyNDguNTVjLS42Ni4zMi0xLjMzLjYyLTIgLjl2LTMuMjVjLjY3LS4zIDEuMzQtLjYxIDItLjkzYTgwLjg2NiA4MC44NjYgMCAwMDM1LjM3LTMyLjgyIDEuNjQ1IDEuNjQ1IDAgMDEyLjQ0LS40NyAxLjE1MyAxLjE1MyAwIDAxLjMyIDEuNnpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTY3MyAzM3Y3NmgtMnYtLjgxSDJ2LjgxSDBWMzNBMzMuMDMyIDMzLjAzMiAwIDAxMzMgMGg2MDdhMzMuMDMyIDMzLjAzMiAwIDAxMzMgMzN6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02NDAgMEgzM0EzMy4wMzIgMzMuMDMyIDAgMDAwIDMzdjQzNGEzMy4wMzIgMzMuMDMyIDAgMDAzMyAzM2g2MDdhMzMuMDMyIDMzLjAzMiAwIDAwMzMtMzNWMzNhMzMuMDMyIDMzLjAzMiAwIDAwLTMzLTMzem0zMSA0NjdhMzEuMDQgMzEuMDQgMCAwMS0zMSAzMUgzM2EzMS4wNCAzMS4wNCAwIDAxLTMxLTMxVjMzQTMxLjA0IDMxLjA0IDAgMDEzMyAyaDYwN2EzMS4wNCAzMS4wNCAwIDAxMzEgMzF6XCJcclxuICAgICAgICBmaWxsPVwiIzNmM2Q1NlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezEzNn0gY3k9ezU0LjV9IHI9ezIwfSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezUzN30gY3k9ezU0LjV9IHI9ezIwfSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xOTMuNzg1IDI3Ny41MDJINzQuODA4YTE5LjAzMyAxOS4wMzMgMCAwMS0xOS4wMTEtMTkuMDEydi01Ni4yMzJhMTkuMDMzIDE5LjAzMyAwIDAxMTkuMDExLTE5LjAxMmgxMTguOTc3YTE5LjAzMyAxOS4wMzMgMCAwMTE5LjAxMSAxOS4wMTJ2NTYuMjMyYTE5LjAzMyAxOS4wMzMgMCAwMS0xOS4wMTEgMTkuMDEyem0yMDIuMzk4IDBIMjc3LjIwN2ExOS4wMzMgMTkuMDMzIDAgMDEtMTkuMDExLTE5LjAxMnYtNTYuMjMyYTE5LjAzMyAxOS4wMzMgMCAwMTE5LjAxMS0xOS4wMTJoMTE4Ljk3NmExOS4wMzMgMTkuMDMzIDAgMDExOS4wMTIgMTkuMDEydjU2LjIzMmExOS4wMzMgMTkuMDMzIDAgMDEtMTkuMDEyIDE5LjAxMnpcIlxyXG4gICAgICAgIGZpbGw9XCIjNjc3NWVlXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTM5Ni4xODMgNDIyLjc5M0gyNzcuMjA3YTE5LjYxIDE5LjYxIDAgMDEtMTkuNTg4LTE5LjU4N3YtNTYuMjMzYTE5LjYxIDE5LjYxIDAgMDExOS41ODgtMTkuNTg4aDExOC45NzZhMTkuNjEgMTkuNjEgMCAwMTE5LjU4OCAxOS41ODh2NTYuMjMzYTE5LjYxIDE5LjYxIDAgMDEtMTkuNTg4IDE5LjU4N3ptLTIwMi43ODkgMEg3NC40MThhMTkuNjEgMTkuNjEgMCAwMS0xOS41ODctMTkuNTg3di01Ni4yMzNhMTkuNjEgMTkuNjEgMCAwMTE5LjU4Ny0xOS41ODhoMTE4Ljk3NmExOS42MSAxOS42MSAwIDAxMTkuNTg4IDE5LjU4OHY1Ni4yMzNhMTkuNjEgMTkuNjEgMCAwMS0xOS41ODggMTkuNTg3em00MDUuMTg4IDBINDc5LjYwNmExOS42MSAxOS42MSAwIDAxLTE5LjU4OC0xOS41ODd2LTU2LjIzM2ExOS42MSAxOS42MSAwIDAxMTkuNTg4LTE5LjU4OGgxMTguOTc2YTE5LjYxIDE5LjYxIDAgMDExOS41ODcgMTkuNTg4djU2LjIzM2ExOS42MSAxOS42MSAwIDAxLTE5LjU4NyAxOS41ODd6bTAtMTQ1LjE3OEg0NzkuNjA2YTE5LjYxIDE5LjYxIDAgMDEtMTkuNTg4LTE5LjU4OHYtNTYuMjMzYTE5LjYxIDE5LjYxIDAgMDExOS41ODgtMTkuNTg3aDExOC45NzZhMTkuNjEgMTkuNjEgMCAwMTE5LjU4NyAxOS41ODd2NTYuMjMzYTE5LjYxIDE5LjYxIDAgMDEtMTkuNTg3IDE5LjU4OHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MTM0LjI5N30gY3k9ezIzMC4zNzR9IHI9ezMyLjI2Mn0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTMxLjA5OSAyNDIuNjgxYTMuMzQ2IDMuMzQ2IDAgMDEtMi4wMTQtLjY2OGwtLjAzNi0uMDI3LTcuNTgxLTUuODA1YTMuMzY4IDMuMzY4IDAgMTE0LjA5Ny01LjM0OGw0LjkxIDMuNzY2IDExLjYwNi0xNS4xMzVhMy4zNjggMy4zNjggMCAwMTQuNzIzLS42MjRsLS4wNzIuMDk4LjA3NC0uMDk2YTMuMzcyIDMuMzcyIDAgMDEuNjIzIDQuNzIzbC0xMy42NSAxNy44MDJhMy4zNyAzLjM3IDAgMDEtMi42OCAxLjMxNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjNjc3NWVlXCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MzM3LjI3MX0gY3k9ezIyOS45MTF9IHI9ezMyLjI2Mn0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzM0LjA3MyAyNDIuMjE4YTMuMzQ2IDMuMzQ2IDAgMDEtMi4wMTMtLjY2OWwtLjAzNi0uMDI3LTcuNTgyLTUuODA1YTMuMzY4IDMuMzY4IDAgMTE0LjA5OC01LjM0N2w0LjkxIDMuNzY1IDExLjYwNi0xNS4xMzRhMy4zNjggMy4zNjggMCAwMTQuNzIyLS42MjRsLS4wNzIuMDk4LjA3NC0uMDk2YTMuMzcyIDMuMzcyIDAgMDEuNjI0IDQuNzIybC0xMy42NSAxNy44MDNhMy4zNyAzLjM3IDAgMDEtMi42OCAxLjMxNHpcIlxyXG4gICAgICAgIGZpbGw9XCIjNjc3NWVlXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTU1NS4zMTIgMzgyLjE1YTEwLjc0MyAxMC43NDMgMCAwMC0yLjE4My0xNi4zMjhsLTE4LjAxLTk2LjE3Mi0yMS45MDUgOC4xMjIgMjQuNTkyIDkxLjk4YTEwLjggMTAuOCAwIDAwMTcuNTA2IDEyLjM5OHpNMzgwLjUyNyAyMzUuNGExMS40MDYgMTEuNDA2IDAgMDEuMDIyIDEuNzk2bDQyLjU5IDMyLjc4IDEyLjA3OC00Ljk2IDkuODY3IDE3LjI1LTIwLjUyOCAxMC44NTdhOC42NyA4LjY3IDAgMDEtMTAuMjc2LTEuNjI3bC00Mi41NzEtNDMuODlhMTEuMzc2IDExLjM3NiAwIDExOC44MTgtMTIuMjA2em05OS41MDEgMzE3LjQ0OWgtMTIuMjU5bC01LjgzMy0zNy4yODggMTguMDk1LjAwMS0uMDAzIDM3LjI4N3pcIlxyXG4gICAgICAgIGZpbGw9XCIjYTA2MTZhXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQ4My4xNTUgNTY0LjczM2wtMzkuNTMtLjAwMXYtLjVhMTUuMzg2IDE1LjM4NiAwIDAxMTUuMzg2LTE1LjM4NmgyNC4xNDV6XCJcclxuICAgICAgICBmaWxsPVwiIzJmMmU0MVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNhMDYxNmFcIlxyXG4gICAgICAgIGQ9XCJNNTI2LjAyOCA1NTIuODQ5aC0xMi4yNTlsLTUuODMzLTM3LjI4OCAxOC4wOTUuMDAxLS4wMDMgMzcuMjg3elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01MjkuMTU1IDU2NC43MzNsLTM5LjUzLS4wMDF2LS41YTE1LjM4NiAxNS4zODYgMCAwMTE1LjM4Ni0xNS4zODZoMjQuMTQ1em0tNjMuOTMyLTE5LjI1M2E0LjQ5IDQuNDkgMCAwMS00LjQ3NS00LjA3M2wtMTAuNjgzLTE0My42OS41MDQtLjA0IDczLjUyMS02LjA0My4wMi41MjIgNS44NDUgMTQ4Ljg1YTQuNSA0LjUgMCAwMS00LjQ5NyA0LjY2OWgtMTQuNDE2YTQuNDc1IDQuNDc1IDAgMDEtNC40NDctMy44MTZsLTE5LjU3Ny0xMjAuMjQ1YS41LjUgMCAwMC0uOTk0LjA3MmwtLjg4OCAxMTguNzI0YTQuNTA1IDQuNTA1IDAgMDEtNC4yNjMgNC40NjJsLTE1LjQwOS42Yy0uMDguMDA1LS4xNjEuMDA3LS4yNDEuMDA3elwiXHJcbiAgICAgICAgZmlsbD1cIiMyZjJlNDFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs0NzcuNzcyfSBjeT17MTkxLjU2NH0gcj17MjQuNTYxfSBmaWxsPVwiI2EwNjE2YVwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00ODIuNTI3IDQwNi44ODJhMTIxLjAzNyAxMjEuMDM3IDAgMDEtMzEuNzY5LTQuMzQyIDQuNTEgNC41MSAwIDAxLTMuMjM2LTQuNjg3YzMuMzA3LTQ5LjY5MyA0LjA4NC04OC4yNTctMi44NjktMTE0LjkzOS0yLjk2My0xMS4zNzItMS42MTgtMjMuMzQ5IDMuNjkxLTMyLjg2IDcuOTktMTQuMzEzIDIyLjY3Ni0yMy4wMjQgMzguMzQtMjIuNzIzcTEuMTI0LjAyMSAyLjI2OS4wOGMyMy43NzMgMS4yMjQgNDIuMjk3IDIyLjczIDQxLjI5NCA0Ny45NDJsLTQuNzgyIDEyMC4xNjhhNC40NCA0LjQ0IDAgMDEtMi44MTUgNC4wNDQgMTE0LjI0NSAxMTQuMjQ1IDAgMDEtNDAuMTIzIDcuMzE3elwiXHJcbiAgICAgICAgZmlsbD1cIiMzZjNkNTZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDQ4LjY5NSAyOTIuMTRsLTE4LjM5Ny0yMi41NDRhNS43NjEgNS43NjEgMCAwMTEuNTE0LTguNTkxbDI0LjkyMS0xNC44NWExNiAxNiAwIDAxMjAuMTYgMjQuODUybC0xOS40NzcgMjEuMzczYTUuNzYxIDUuNzYxIDAgMDEtOC43Mi0uMjR6bTU3Ljg3NS0yLjgyOGE1Ljc1NSA1Ljc1NSAwIDAxLTMuMTY0LTMuNjA2TDQ5NS4xMjQgMjU4YTE2IDE2IDAgMDEyOC45NDMtMTMuNjUybDE2LjAxNyAyNC4xODhhNS43NjEgNS43NjEgMCAwMS0yLjM2MiA4LjM5OWwtMjYuMzU0IDEyLjMzNmE1Ljc1NSA1Ljc1NSAwIDAxLTQuNzk4LjA0elwiXHJcbiAgICAgICAgZmlsbD1cIiMzZjNkNTZcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDg5LjkwOSAyMTEuNzE3bC0xOC4yMDYtNC4xNjdjLTEuODc4LS40My00LjEzNC0xLjI1LTQuMzk1LTMuMTU5LS4zNS0yLjU2NSAzLjM0Mi00LjM1MiAzLjAwMS02LjkxOC0uMzMtMi40ODYtMy42OTItMi44MDYtNi4wOS0zLjU0YTkuMTEgOS4xMSAwIDAxLTUuNjcyLTExLjM0Yy0yLjU5NSAzLjY1Ni04LjUyMiAzLjk2OS0xMS44ODcgMS4wMDdzLTQuMDEtOC4zMzYtMS45OS0xMi4zMzhhMTQuMjg3IDE0LjI4NyAwIDAxMTAuNzI0LTcuMjQgMjIuNjE3IDIyLjYxNyAwIDAxMTMuMDIzIDIuNDI4Yy4yNjctMi44MzQgMy44MDUtMy45ODMgNi42NS00LjAwOGEyOC40MyAyOC40MyAwIDAxMjYuNjQ0IDE5LjQ0NmMzLjQ5MiAxMS4yNTMgMS4xNTYgMjMuNTg3LTguNjE1IDMwLjE3elwiXHJcbiAgICAgICAgZmlsbD1cIiMyZjJlNDFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTY3My4yODcgNTY1aC0zODFhMSAxIDAgMTEwLTJoMzgxYTEgMSAwIDExMCAyelwiIGZpbGw9XCIjM2YzZDU2XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNraW5nID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTE3NyA2NDMuMjJcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00NTguMzMgMTI3LjkybC01MSA2My4xNyA0MC42NS03MC40M2ExMDEuODkgMTAxLjg5IDAgMDAtMTkuNjgtOS4zNiAxMDEuMzUgMTAxLjM1IDAgMTAtMjAyLjExLTUuNTNsOTIuMTIgNi4wNi05MC41IDguMTNhMTAxLjUgMTAxLjUgMCAwMDQ0Ljg4IDY2LjY1bDUwLjQzLTMyLjcyLTQxLjk0IDM3LjZhMTAxLjU2IDEwMS41NiAwIDAwMTIuODggNS41NCAxMDEuMzMgMTAxLjMzIDAgMDA2Ny40NCAxMDUuNTggMTAxLjM0IDEwMS4zNCAwIDAwMTM3Ljg2IDEwNC4zMiAzNC43NiAzNC43NiAwIDAwNC42OSAxMS4xNyAzMy4yOCAzMy4yOCAwIDAwMTIuODMgMTEuODkgMzQuNjIgMzQuNjIgMCAwMDE4LjIxIDI4LjU0IDM0LjY4IDM0LjY4IDAgMDAxOC4yMSAyOC41MyAzNC42NiAzNC42NiAwIDAwMTguMiAyOC41NSAzMy40IDMzLjQgMCAwMDUuMzggMTYuNjRjOC4yMyAxMi44OSAyMi44OSAxOC4yNSAzMi43NCAxMnMxMS4xNi0yMS44MyAyLjkzLTM0LjczYTMzLjQ0IDMzLjQ0IDAgMDAtMTIuODEtMTEuOTEgMzQuNjggMzQuNjggMCAwMC0xOC4yNC0yOC41NyAzNC42NiAzNC42NiAwIDAwLTE4LjIyLTI4LjUzIDM0LjYyIDM0LjYyIDAgMDAtMTguMjEtMjguNTMgMzMuMzkgMzMuMzkgMCAwMC01LjM5LTE2LjY0IDM0LjYgMzQuNiAwIDAwLTgtOC44NiAxMDEuMzMgMTAxLjMzIDAgMDAtMzUuOTEtMTY5LjU1IDEwMS40MSAxMDEuNDEgMCAwMC0zNy40My04OXptMjA5LjI0LTUwLjcxbC05LjEgNS43N0w2NjQgNzIuOTNhOSA5IDAgMDAtNS41MS0yaC0uMTRhMTAuNzkgMTAuNzkgMCAwMS0xLjg5LS4xNGwtMy4wOSAyIDEuMzMtMi40MWExMSAxMSAwIDAxLTUuNC00LjA5bC01LjUyIDMuNSAzLjQ5LTYuMzRhMTYuMTcgMTYuMTcgMCAwMC0xMi4zNy02LjI2Yy01Ljc1IDAtMTAuODYgMy40Mi0xNC4xNiA4Ljc0YTEwLjU3IDEwLjU3IDAgMDEtOS4zNiA1aC0uMzFjLTYuMzQgMC0xMS40OCA3LjE5LTExLjQ4IDE2czUuMTQgMTYuMDUgMTEuNDggMTYuMDVhOC42MiA4LjYyIDAgMDA0LTEgMTYuNTYgMTYuNTYgMCAwMTEzLjg5LS4yNyAxNC41MiAxNC41MiAwIDAwMTEuODEgMCAxNi41OCAxNi41OCAwIDAxMTMuNzcuMjcgOC42MSA4LjYxIDAgMDA0IDFjNi4zNCAwIDExLjQ4LTcuMTggMTEuNDgtMTYuMDVhMjAuMjggMjAuMjggMCAwMC0yLjQ1LTkuNzJ6XCJcclxuICAgICAgICBmaWxsPVwiI2YyZjJmMlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02NTAuNDIgMTAwLjdhMTcgMTcgMCAwMC05LjgzIDEuMDcgMTQuNTIgMTQuNTIgMCAwMS0xMS44MSAwIDE2LjU4IDE2LjU4IDAgMDAtMTMuOS4yNyA4LjU1IDguNTUgMCAwMS00IDFjLTUuNjQgMC0xMC4zMi01LjY3LTExLjMtMTMuMTVhMTAuOTMgMTAuOTMgMCAwMDIuODItM2MzLjMtNS4zMiA4LjQyLTguNzMgMTQuMTYtOC43M3MxMC43OSAzLjM3IDE0LjA5IDguNjNhMTAuODUgMTAuODUgMCAwMDkuMzYgNS4xNGguMTVjNC40OS0uMDcgOC4zNCAzLjUzIDEwLjI2IDguNzd6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjAzfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTAwNC41NyAzOC4yMWwtOS4xIDUuNzcgNS41My0xMC4wNWE5IDkgMCAwMC01LjUxLTJoLS4xNGExMC43OSAxMC43OSAwIDAxLTEuODktLjE0bC0zLjA5IDIgMS4zMy0yLjQxYTExIDExIDAgMDEtNS40LTQuMDlsLTUuNTIgMy41IDMuNDktNi4zNGExNi4xNyAxNi4xNyAwIDAwLTEyLjM3LTYuMjZjLTUuNzUgMC0xMC44NiAzLjQyLTE0LjE2IDguNzRhMTAuNTcgMTAuNTcgMCAwMS05LjM2IDVoLS4zMWMtNi4zNCAwLTExLjQ4IDcuMTktMTEuNDggMTZzNS4xNCAxNi4wNSAxMS40OCAxNi4wNWE4LjYyIDguNjIgMCAwMDQtMSAxNi41NiAxNi41NiAwIDAxMTMuODktLjI3IDE0LjUyIDE0LjUyIDAgMDAxMS44MSAwIDE2LjU4IDE2LjU4IDAgMDExMy43Ny4yNyA4LjYxIDguNjEgMCAwMDQgMWM2LjM0IDAgMTEuNDgtNy4xOCAxMS40OC0xNi4wNWEyMC4yOCAyMC4yOCAwIDAwLTIuNDUtOS43MnpcIlxyXG4gICAgICAgIGZpbGw9XCIjZjJmMmYyXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTk4Ny40MiA2MS43YTE3IDE3IDAgMDAtOS44MyAxLjA3IDE0LjUyIDE0LjUyIDAgMDEtMTEuODEgMCAxNi41OCAxNi41OCAwIDAwLTEzLjkuMjcgOC41NSA4LjU1IDAgMDEtNCAxYy01LjY0IDAtMTAuMzItNS42Ny0xMS4zLTEzLjE1YTEwLjkzIDEwLjkzIDAgMDAyLjgyLTNjMy4zLTUuMzIgOC40Mi04LjczIDE0LjE2LTguNzNzMTAuNzkgMy4zNyAxNC4wOSA4LjYzYTEwLjg1IDEwLjg1IDAgMDA5LjM2IDUuMTRoLjE1YzQuNDktLjA3IDguMzQgMy41MyAxMC4yNiA4Ljc3elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4wM31cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc3OS44NCAxMzIuNjFsMTQuNjYgOS4zMi04Ljg4LTE2LjE1YTE0LjQ4IDE0LjQ4IDAgMDE4Ljg1LTMuMTVoLjIzYTE3LjA4IDE3LjA4IDAgMDAzLS4yMmw0Ljk1IDMuMTQtMi4xNS0zLjg2YTE3Ljc4IDE3Ljc4IDAgMDA4LjY3LTYuNThsOC44NyA1LjYyLTUuNTQtMTAuMTljNS4xOS02LjIyIDEyLjE4LTEwIDE5Ljg3LTEwIDkuMjMgMCAxNy40NCA1LjQ4IDIyLjc1IDE0YTE3IDE3IDAgMDAxNSA4LjExaC41YzEwLjE4IDAgMTguNDMgMTEuNTQgMTguNDMgMjUuNzhzLTguMjUgMjUuNzktMTguNDMgMjUuNzlhMTMuODYgMTMuODYgMCAwMS02LjQzLTEuNjEgMjYuNTkgMjYuNTkgMCAwMC0yMi4zMS0uNDMgMjMuMjggMjMuMjggMCAwMS0xOSAwIDI2LjY0IDI2LjY0IDAgMDAtMjIuMTIuNDMgMTMuOSAxMy45IDAgMDEtNi4zNSAxLjU3Yy0xMC4xOSAwLTE4LjQ0LTExLjU0LTE4LjQ0LTI1Ljc5YTMyLjc4IDMyLjc4IDAgMDEzLjg3LTE1Ljc4elwiXHJcbiAgICAgICAgZmlsbD1cIiNmMmYyZjJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODA3LjM5IDE3MC4zOGEyNy4zNiAyNy4zNiAwIDAxMTUuOCAxLjcyIDIzLjI4IDIzLjI4IDAgMDAxOSAwIDI2LjYxIDI2LjYxIDAgMDEyMi4zMi40MyAxMy44MiAxMy44MiAwIDAwNi40MiAxLjYxYzkuMDUgMCAxNi41Ny05LjExIDE4LjE0LTIxLjEzYTE3LjQ0IDE3LjQ0IDAgMDEtNC41Mi00Ljg4Yy01LjMxLTguNTQtMTMuNTItMTQtMjIuNzUtMTRzLTE3LjMzIDUuNDItMjIuNjQgMTMuODhhMTcuNDQgMTcuNDQgMCAwMS0xNSA4LjI1aC0uMjNjLTcuMjYtLjA3LTEzLjUgNS43MS0xNi41NCAxNC4xMnpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMDN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxlbGxpcHNlIGN4PXs1ODguNX0gY3k9ezYyMi4yMn0gcng9ezU4OC41fSByeT17MjF9IGZpbGw9XCIjM2YzZDU2XCIgLz5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXsxNzEuNX1cclxuICAgICAgICB5PXsxNTUuOTd9XHJcbiAgICAgICAgd2lkdGg9ezgzNH1cclxuICAgICAgICBoZWlnaHQ9ezQ1Nn1cclxuICAgICAgICByeD17MjAuNDJ9XHJcbiAgICAgICAgZmlsbD1cIiNmMmYyZjJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTAwNS41IDE3Ni4zOXYxMS41OGgtODM0di0xMS41OGEyMC40MiAyMC40MiAwIDAxMjAuNDItMjAuNDJoNzkzLjE2YTIwLjQyIDIwLjQyIDAgMDEyMC40MiAyMC40MnpcIlxyXG4gICAgICAgIGZpbGw9XCIjM2YzZDU2XCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZSBjeD17MTkzfSBjeT17MTcyLjQ3fSByPXs2fSBmaWxsPVwiIzY3NzVlZVwiIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezIwOH0gY3k9ezE3Mi40N30gcj17Nn0gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsyMjN9IGN5PXsxNzIuNDd9IHI9ezZ9IGZpbGw9XCIjNjc3NWVlXCIgLz5cclxuICAgICAgPHJlY3QgeD17Mjk4LjV9IHk9ezI0MC45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQxMC41fVxyXG4gICAgICAgIHk9ezI0MC45N31cclxuICAgICAgICB3aWR0aD17OTZ9XHJcbiAgICAgICAgaGVpZ2h0PXs3OH1cclxuICAgICAgICByeD17OS4yOX1cclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxyZWN0IHg9ezUyMi41fSB5PXsyNDAuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3QgeD17NjM0LjV9IHk9ezI0MC45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezc0Ni41fVxyXG4gICAgICAgIHk9ezI0MC45N31cclxuICAgICAgICB3aWR0aD17OTZ9XHJcbiAgICAgICAgaGVpZ2h0PXs3OH1cclxuICAgICAgICByeD17OS4yOX1cclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxyZWN0IHg9ezI5OC41fSB5PXszNzEuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3QgeD17NDEwLjV9IHk9ezM3MS45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezUyMi41fVxyXG4gICAgICAgIHk9ezM3MS45N31cclxuICAgICAgICB3aWR0aD17OTZ9XHJcbiAgICAgICAgaGVpZ2h0PXs3OH1cclxuICAgICAgICByeD17OS4yOX1cclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxyZWN0IHg9ezYzNC41fSB5PXszNzEuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3QgeD17NzQ2LjV9IHk9ezM3MS45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cmVjdCB4PXsyOTguNX0geT17NTAyLjk3fSB3aWR0aD17OTZ9IGhlaWdodD17Nzh9IHJ4PXs5LjI5fSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxyZWN0IHg9ezQxMC41fSB5PXs1MDIuOTd9IHdpZHRoPXs5Nn0gaGVpZ2h0PXs3OH0gcng9ezkuMjl9IGZpbGw9XCIjZmZmXCIgLz5cclxuICAgICAgPHJlY3QgeD17NTIyLjV9IHk9ezUwMi45N30gd2lkdGg9ezk2fSBoZWlnaHQ9ezc4fSByeD17OS4yOX0gZmlsbD1cIiNmZmZcIiAvPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezYzNC41fVxyXG4gICAgICAgIHk9ezUwMi45N31cclxuICAgICAgICB3aWR0aD17OTZ9XHJcbiAgICAgICAgaGVpZ2h0PXs3OH1cclxuICAgICAgICByeD17OS4yOX1cclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4zfVxyXG4gICAgICAvPlxyXG4gICAgICA8cmVjdCB4PXs3NDYuNX0geT17NTAyLjk3fSB3aWR0aD17OTZ9IGhlaWdodD17Nzh9IHJ4PXs5LjI5fSBmaWxsPVwiI2ZmZlwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01MjguNzIgMjI2LjYxbC01LjA2LTUuMDlhMi42OCAyLjY4IDAgMDAtMy44MSAwbC0zMS43NiAzMS40OS0xMy40My0xMy41NGEyLjY2IDIuNjYgMCAwMC0zLjc4IDBsLTUuMTEgNS4wNWEyLjcyIDIuNzIgMCAwMDAgMy44MmwyMC4zOSAyMC41NWEyLjcyIDIuNzIgMCAwMDMuODIgMGwzOC43NC0zOC40NmEyLjY4IDIuNjggMCAwMDAtMy44MnptMzQwIDBsLTUuMDYtNS4wOWEyLjY4IDIuNjggMCAwMC0zLjgxIDBsLTMxLjc2IDMxLjQ5LTEzLjQzLTEzLjU0YTIuNjYgMi42NiAwIDAwLTMuNzggMGwtNS4xMSA1LjA1YTIuNzIgMi43MiAwIDAwMCAzLjgybDIwLjM5IDIwLjU1YTIuNzIgMi43MiAwIDAwMy44MiAwbDM4Ljc0LTM4LjQ2YTIuNjggMi42OCAwIDAwMC0zLjgyem0tMjI4IDEzMGwtNS4wNi01LjA5YTIuNjggMi42OCAwIDAwLTMuODEgMGwtMzEuNzYgMzEuNDktMTMuNDMtMTMuNTRhMi42NiAyLjY2IDAgMDAtMy43OCAwbC01LjExIDUuMDVhMi43MiAyLjcyIDAgMDAwIDMuODJsMjAuMzkgMjAuNTVhMi43MiAyLjcyIDAgMDAzLjgyIDBsMzguNzQtMzguNDZhMi42OCAyLjY4IDAgMDAwLTMuODJ6bTExMSAxMzZsLTUuMDYtNS4wOWEyLjY4IDIuNjggMCAwMC0zLjgxIDBsLTMxLjc2IDMxLjQ5LTEzLjQzLTEzLjU0YTIuNjYgMi42NiAwIDAwLTMuNzggMGwtNS4xMSA1YTIuNzIgMi43MiAwIDAwMCAzLjgybDIwLjM5IDIwLjU1YTIuNzIgMi43MiAwIDAwMy44MiAwbDM4Ljc0LTM4LjQ2YTIuNjggMi42OCAwIDAwMC0zLjc3elwiXHJcbiAgICAgICAgZmlsbD1cIiMzYWNjNmNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTAxMi40IDYxOC4zOWMtMy01LjUxLjQtMTIuMjcgNC4yOS0xNy4xOHM4LjYxLTEwIDguNTEtMTYuMjljLS4xNS05LTkuNy0xNC4zMi0xNy4zMy0xOS4wOWE4NCA4NCAwIDAxLTE1LjU2LTEyLjUxIDIyLjggMjIuOCAwIDAxLTQuNzgtNi40Yy0xLjU4LTMuNTItMS41NC03LjUyLTEuNDQtMTEuMzdxLjUxLTE5LjI2IDEuOTEtMzguNDlcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2U9XCIjM2YzZDU2XCJcclxuICAgICAgICBzdHJva2VNaXRlcmxpbWl0PXsxMH1cclxuICAgICAgICBzdHJva2VXaWR0aD17NH1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTk3My41IDQ5Ni4zNmExNCAxNCAwIDAxNy0xMS41bDMuMTQgNi4yMi0uMS03LjUzYTE0LjIyIDE0LjIyIDAgMDE0LjYzLS41NiAxNCAxNCAwIDExLTE0LjY3IDEzLjM3em0yNSA5NC45OWExNCAxNCAwIDEwLS42OC0xMS4zbDguNzcgNy4xMy05LjY1LTIuMjNhMTQgMTQgMCAwMDEuNTYgNi40em03LTI3LjI1YTE0IDE0IDAgMDA0LjQtMjcuNDlsLjA4IDUuNzgtMy4xOC02LjI5YTE0IDE0IDAgMDAtMTQuNjcgMTMuMzYgMTMuODQgMTMuODQgMCAwMC42IDQuNzkgMTQgMTQgMCAwMDEyLjc3IDkuODV6bS0zNC4xMi0yMi42N2ExNCAxNCAwIDEwLTYuMjEtMjYuMjdsMi40OCA2LjgtNS4xLTQuOWExNCAxNCAwIDAwLTQuNTMgOS42OSAxMy43OSAxMy43OSAwIDAwLjM1IDMuODcgMTQgMTQgMCAwMDEzLjAxIDEwLjgxelwiXHJcbiAgICAgICAgZmlsbD1cIiM1N2I4OTRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOTc1LjM4IDUwMC4xYzMuMjQuMzUgNi4zOSAxLjM2IDkuNjQgMS41NnM2LjgyLS41NyA4Ljg4LTMuMWMxLjEtMS4zNiAxLjY2LTMuMDggMi41OS00LjU3YTEwIDEwIDAgMDEzLjU0LTMuMzMgMTQgMTQgMCAxMS0yNi4yNCA5LjMycS44LjAzIDEuNTkuMTJ6bS00IDQxLjMzYTE0IDE0IDAgMDAxMy4zNS0yMCAxMC4zNyAxMC4zNyAwIDAwLTIuODIgMi44MmMtMSAxLjUxLTEuNjEgMy4yNi0yLjc4IDQuNjQtMi4xOSAyLjU3LTUuOTIgMy40MS05LjMxIDMuMjZzLTYuNjYtMS4xMi0xMC0xLjQzYy0uNDcgMC0uOTQtLjA3LTEuNDItLjA4YTE0IDE0IDAgMDAxMi45OCAxMC43OXptMzQuMTIgMjIuNjdhMTQgMTQgMCAwMDEzLjQ2LTE5Ljc2IDExLjQ4IDExLjQ4IDAgMDAtMyAyLjg1Yy0xLjA5IDEuNTQtMS43NyAzLjMxLTMgNC43My0yLjM3IDIuNjQtNi4zNSAzLjU3LTkuOTMgMy40OXMtNi44My0uOTMtMTAuMjgtMS4yYTE0IDE0IDAgMDAxMi43NSA5Ljg5em0tNyAyNy4yNWExNC4wMTcgMTQuMDE3IDAgMDAyNS41OS0xMS40NSAxMy41OSAxMy41OSAwIDAwLTMuMDggMi43NWMtMS4zNCAxLjYyLTIuMjIgMy40Ny0zLjc2IDUtMi44NyAyLjgyLTcuNSA0LTExLjYzIDQuMDlhNjAgNjAgMCAwMS03LjEyLS4zOXpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEwMzMuNTcgNjEyLjA0cy0xMS4wOC0uMzQtMTQuNDItMi43Mi0xNy01LjIxLTE3Ljg2LTEuNC0xNi42NSAxOS00LjE1IDE5LjA2IDI5LjA2LTIgMzIuNC00IDQuMDMtMTAuOTQgNC4wMy0xMC45NHpcIlxyXG4gICAgICAgIGZpbGw9XCIjNjU2MzgwXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTk5Ni45MiA2MjUuNjZjMTIuNTEuMSAyOS4wNi0xLjk1IDMyLjM5LTQgMi41NC0xLjU1IDMuNTUtNy4wOSAzLjg5LTkuNjVoLjM3cy0uNyA4Ljk0LTQgMTEtMTkuODkgNC4wOC0zMi40IDRjLTMuNjEgMC00Ljg1LTEuMzEtNC43OC0zLjIxLjQ3IDEuMTIgMS44NCAxLjgxIDQuNTMgMS44NnpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMn1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE4NC4yOSA2MTMuNDdjLTQuMzktOC4xMi41OS0xOC4wOCA2LjMxLTI1LjMzczEyLjctMTQuNzggMTIuNTYtMjRjLS4yMi0xMy4yNy0xNC4zLTIxLjEtMjUuNTYtMjguMTRhMTI0LjYxIDEyNC42MSAwIDAxLTIyLjk0LTE4LjQ0IDMzLjc5IDMzLjc5IDAgMDEtNy05LjQ0Yy0yLjMzLTUuMTktMi4yNi0xMS4wOS0yLjExLTE2Ljc4cS43Mi0yOC40IDIuOC01Ni43NVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHN0cm9rZT1cIiMzZjNkNTZcIlxyXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ9ezEwfVxyXG4gICAgICAgIHN0cm9rZVdpZHRoPXs0fVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTI2LjkxIDQzMy41NGEyMC42OCAyMC42OCAwIDAxMTAuMzMtMTdsNC42NCA5LjE3LS4xNC0xMS4xYTIwLjcgMjAuNyAwIDExLTE0LjgzIDE4Ljg5em0zNi45MSAxNDAuMDdhMjAuNjkgMjAuNjkgMCAxMC0xLTE2LjY2bDEyLjkyIDEwLjUxLTE0LjI0LTMuMjlhMjAuNjEgMjAuNjEgMCAwMDIuMzIgOS40NHptMTAuMjItNDAuMThhMjAuNyAyMC43IDAgMDA2LjU2LTQwLjZsLjExIDguNTItNC42OS05LjI3aC0uMDVhMjAuNyAyMC43IDAgMTAtMS45MyA0MS4zNXpNMTIzLjggNTAwYTIwLjcxIDIwLjcxIDAgMDAyMS42NC0xOS43MSAyMC40NCAyMC40NCAwIDAwLTItOS44MSAyMC42NyAyMC42NyAwIDAwLTI4LjgzLTkuMjFsMy42NSAxMC03LjUyLTcuMjJhMjAuNyAyMC43IDAgMDAxMyAzNS45M3pcIlxyXG4gICAgICAgIGZpbGw9XCIjNTdiODk0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEyOS43IDQzOS4wNWM0Ljc3LjUzIDkuNDIgMiAxNC4yMSAyLjMxczEwLjA2LS44NSAxMy4wOS00LjU4YzEuNjMtMiAyLjQ1LTQuNTQgMy44My02LjczYTE0Ljc3IDE0Ljc3IDAgMDE1LjIxLTQuOTEgMjAuNyAyMC43IDAgMTEtMzguNjkgMTMuNzRjLjc4LjAzIDEuNTcuMDkgMi4zNS4xN3pNMTIzLjggNTAwYTIwLjcxIDIwLjcxIDAgMDAyMS42NC0xOS43MSAyMC40NCAyMC40NCAwIDAwLTItOS44MSAxNS4zOSAxNS4zOSAwIDAwLTQuMTYgNC4xNmMtMS40NyAyLjIzLTIuMzcgNC44LTQuMSA2Ljg0LTMuMjIgMy43OS04LjczIDUtMTMuNzIgNC44cy05LjgyLTEuNjQtMTQuNzktMi4xYy0uNjktLjA2LTEuMzktLjExLTIuMDktLjEzQTIwLjY5IDIwLjY5IDAgMDAxMjMuOCA1MDB6bTUwLjI0IDMzLjQzYTIwLjY5IDIwLjY5IDAgMDAxOS44NS0yOS4xNCAxNi42OSAxNi42OSAwIDAwLTQuMzcgNC4yMWMtMS42MSAyLjI3LTIuNjEgNC44OC00LjUgNy0zLjQ5IDMuODktOS4zNiA1LjI2LTE0LjY1IDUuMTQtNS4xMi0uMTItMTAuMDYtMS4zNy0xNS4xNS0xLjc2YTIwLjcxIDIwLjcxIDAgMDAxOC44MiAxNC41NXptLTEwLjIyIDQwLjE4YTIwLjcgMjAuNyAwIDAwMzcuNzMtMTYuODkgMjAuOSAyMC45IDAgMDAtNC41NSA0Yy0yIDIuNC0zLjI2IDUuMTItNS41NCA3LjM2LTQuMjMgNC4xNS0xMS4wNiA1Ljg2LTE3LjE0IDZhODkuMDYgODkuMDYgMCAwMS0xMC41LS40N3pcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTIxNS41IDYwNC4xMnMtMTYuMzMtLjUtMjEuMjYtNC0yNS4xMi03LjY5LTI2LjM0LTIuMDctMjQuNTUgMjgtNi4xMSAyOC4xMSA0Mi44NS0yLjg3IDQ3Ljc2LTUuODcgNS45NS0xNi4xNyA1Ljk1LTE2LjE3elwiXHJcbiAgICAgICAgZmlsbD1cIiM2NTYzODBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTYxLjUgNjI0LjE5YzE4LjQ0LjE1IDQyLjg1LTIuODcgNDcuNzYtNS44NiAzLjc0LTIuMjggNS4yNC0xMC40NiA1LjczLTE0LjIzaC41NXMtMSAxMy4xNy01Ljk1IDE2LjE2LTI5LjMyIDYtNDcuNzYgNS44N2MtNS4zMiAwLTcuMTYtMS45NC03LjA2LTQuNzQuNzMgMS43MSAyLjczIDIuNzcgNi43MyAyLjh6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04NjEuMjYgNTYzLjYxYTQuODMgNC44MyAwIDAwLS4zMiAxLjMxYy0xLjU5IDEwLjQ3LTEwLjc0IDE4LjItMTQuMDggMjguMjVhMjcuMSAyNy4xIDAgMDAxLjE4IDE5Ljg3IDYuNTcgNi41NyAwIDAxLjkxIDIuODdjMCAxLS44IDIuMDktMS44MSAyLTIuNDItLjE2LTQuMzMtMi02LjM1LTMuM2EyMi42MSAyMi42MSAwIDAxLTYuNDYtNiAxMS4xOCAxMS4xOCAwIDAxLTEuOTEtOC40M2MxLjItNS40NiA1LjM3LTEwLjMzIDYuNjctMTUuNzdsMy40MS0xNC4xMWEyMi4wNyAyMi4wNyAwIDAxMi44LTcuNTMgNC42NSA0LjY1IDAgMDEyLjM2LTIgNS41OCA1LjU4IDAgMDExLjc4LS4xNGMzLjk1LjE3IDguMDYgMS42NSAxMS44MiAyLjk4elwiXHJcbiAgICAgICAgZmlsbD1cIiNmZmMxYzdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODQ3LjI1IDYxMS4zOGExLjg5IDEuODkgMCAwMTEuMDguMDggMi42OCAyLjY4IDAgMDExIDEuMjggMTEuNzIgMTEuNzIgMCAwMDQuNzEgNC43MyAxMy42MyAxMy42MyAwIDAxMi4zIDEuMyAyLjY3IDIuNjcgMCAwMTEuMTEgMi4yOGMtLjE2IDEuMzEtMS41OSAyLTIuODUgMi4zOWEyMS4zOCAyMS4zOCAwIDAxLTguMzQuNzMgNy4zMSA3LjMxIDAgMDEtMy0uODQgOC44NyA4Ljg3IDAgMDEtMi4zMS0yLjM0IDU4IDU4IDAgMDAtNy40LTguMzkgMzIuNCAzMi40IDAgMDEtMy44OC0zLjYxIDYuNDQgNi40NCAwIDAxLTEuNjMtNC44OGMuMzktMi42IDIuODUtNC4zIDQuNC02LjQzIDIuNDkgMy4yIDUgNi40NSA2LjUyIDEwLjIxYTI5LjM1IDI5LjM1IDAgMDAxLjg2IDQuMzljLjcxIDEuMTcgMS43MyAyLjUyIDMgMS43NnMxLjU4LTIuMzQgMy40My0yLjY2elwiXHJcbiAgICAgICAgZmlsbD1cIiNmZjY1ODRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODc3LjMxIDQ4Ni44OGExMy4xNiAxMy4xNiAwIDAxLjg5IDUuOTJsLS4wOSAxNC45M2E2MCA2MCAwIDAxLS40NiA4LjY5Yy0uNzkgNS4xOS0yLjkyIDEwLjEtMy44NSAxNS4yNy0uODggNC44NS0uNzEgOS44OS0yLjE0IDE0LjYxLTIuMjIgNy4zMS04LjEgMTMuMS0xMC4xNyAyMC40NmEyLjMyIDIuMzIgMCAwMS0uNTkgMS4xOSAxLjcxIDEuNzEgMCAwMS0uODQuMzYgOC45MyA4LjkzIDAgMDEtNC44MS0uOWwtMTAuNzUtNC4yMmMtLjc0LjMyLTEuMjUtLjUzLTEuMjEtMS4zNWEzLjkxIDMuOTEgMCAwMTEuMDctMi4xMyAzNS43NSAzNS43NSAwIDAwMy40Ni01LjMzIDQ3Ljg5IDQ3Ljg5IDAgMDA1LTE5LjI5IDE0Mi41OSAxNDIuNTkgMCAwMC0uNTktMjBsLTEuMS0xNC40MmMtLjE3LTIuMjktLjMtNC43NyAxLTYuNjhzMy41MS0yLjcgNS42NC0zLjM2YTkxLjY4IDkxLjY4IDAgMDExOS41NC0zLjc1elwiXHJcbiAgICAgICAgZmlsbD1cIiMzYzM1NGNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODc3LjMxIDQ4Ni44OGExMy4xNiAxMy4xNiAwIDAxLjg5IDUuOTJsLS4wOSAxNC45M2E2MCA2MCAwIDAxLS40NiA4LjY5Yy0uNzkgNS4xOS0yLjkyIDEwLjEtMy44NSAxNS4yNy0uODggNC44NS0uNzEgOS44OS0yLjE0IDE0LjYxLTIuMjIgNy4zMS04LjEgMTMuMS0xMC4xNyAyMC40NmEyLjMyIDIuMzIgMCAwMS0uNTkgMS4xOSAxLjcxIDEuNzEgMCAwMS0uODQuMzYgOC45MyA4LjkzIDAgMDEtNC44MS0uOWwtMTAuNzUtNC4yMmMtLjc0LjMyLTEuMjUtLjUzLTEuMjEtMS4zNWEzLjkxIDMuOTEgMCAwMTEuMDctMi4xMyAzNS43NSAzNS43NSAwIDAwMy40Ni01LjMzIDQ3Ljg5IDQ3Ljg5IDAgMDA1LTE5LjI5IDE0Mi41OSAxNDIuNTkgMCAwMC0uNTktMjBsLTEuMS0xNC40MmMtLjE3LTIuMjktLjMtNC43NyAxLTYuNjhzMy41MS0yLjcgNS42NC0zLjM2YTkxLjY4IDkxLjY4IDAgMDExOS41NC0zLjc1elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOTAwLjg1IDUwOS41YTMxLjA5IDMxLjA5IDAgMDAtMy41OSA2LjkxIDM3IDM3IDAgMDAtMS4yMSA1LjYyYy0xLjQgOC44My0yLjgxIDE3Ljc0LTIuMjcgMjYuNjZhNS42MiA1LjYyIDAgMDEtNS0xLjI0IDE0LjI5IDE0LjI5IDAgMDEtMy4yNy00LjIzIDQ1IDQ1IDAgMDEtMi42OS01LjM4IDMzLjY5IDMzLjY5IDAgMDEtMi41NS0xMy4xMSAyLjI2IDIuMjYgMCAwMS4xOC0xLjA3IDIuNDcgMi40NyAwIDAxLjUzLS42M2M1Ljg3LTUuNTYgOS4yNS0xMy4xOSAxMi40OC0yMC42YTM4LjEgMzguMSAwIDAwMi42OC03LjU3Yy41My0yLjY0LjU3LTUuNTYgMi4yNC03LjY3IDEuNS0xLjg4IDQtMi42NyA2LjM0LTNhMTEuOTMgMTEuOTMgMCAwMTUuMTIuMjFjMS44Mi41NiA2LjEzIDIuNjkgNi4zOCA0Ljg0cy0zLjU5IDQuOS00Ljg0IDYuMzNhMTIxLjg2IDEyMS44NiAwIDAwLTEwLjUzIDEzLjkzelwiXHJcbiAgICAgICAgZmlsbD1cIiNmZmMxYzdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODk3LjI4IDU0OC42MWMxLjI4IDIuMTUgMy4wNyA0LjU1IDIuMTYgNi44N3MtNC4yNCAyLjg0LTYuMjQgMS40MWE5LjYyIDkuNjIgMCAwMS0xLjU2LTEuNSAxNTMuODMgMTUzLjgzIDAgMDEtMTUtMTkuNzRjLTEuNjYtMi41OS0zLjI4LTUuMzUtMy41Ni04LjQxYTEuNzYgMS43NiAwIDAxLjE0LTEgMS45MyAxLjkzIDAgMDEuNzgtLjY2IDM4Ljg0IDM4Ljg0IDAgMDE4LjY2LTMuNiAxOC4zNyAxOC4zNyAwIDAwMi41NiA5Ljc1IDQ2LjU2IDQ2LjU2IDAgMDEzLjMgNi42OGMuNjggMS42OCAxLjM4IDEuODEgMy4xMyAxLjgzIDEuNDEgMCAyLjQyLS4xNyAzLjEgMS4yNiAxLjA4IDIuMjQgMS4xNiA0LjgxIDIuNTMgNy4xMXpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmY2NTg0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg1OS44IDQ2MS42MWMxMi44Ni4yIDI1LjcgMS4xIDM4LjUzIDJsOC4zNC41OWEzMS4xNiAzMS4xNiAwIDAxNy4yNyAxLjA4IDMxLjkxIDMxLjkxIDAgMDE2LjQ0IDMuMTkgNS42NSA1LjY1IDAgMDExLjggMS40NCA1LjM5IDUuMzkgMCAwMS43NiAyIDExLjM5IDExLjM5IDAgMDEuNDcgNC42MiAxMS4yNyAxMS4yNyAwIDAxLTEuMjMgMy4xN2wtNS44NCAxMS41NGMtMS44Ny0uNjEtMy4zMi0xLjgzLTUuMTUtMi41NWEyNS40MSAyNS40MSAwIDAwLTYuODItMS4zbC02LjA4LS42YTEuNzMgMS43MyAwIDAxLS4xNy0xLjJjLTUuMzQgMS44Ni0xMC42NiAzLjU5LTE2IDUuNDUtOS44IDMuNDEtMTkuNjIgNi44My0yOS4wNiAxMS4xNS0xLjQuNjQtMyAxLjMxLTQuNDMuNzdhNC42MSA0LjYxIDAgMDEtMS4zOS0uOTIgMTQuMjkgMTQuMjkgMCAwMS00LjMtOC4zNyAzMS4yMiAzMS4yMiAwIDAxLjE0LTkuNTVjLjktNi41MSAyLjg3LTEzLjMyIDcuODUtMTcuNjEgMi42My0yLjMzIDUuMzktNC45OSA4Ljg3LTQuOXpcIlxyXG4gICAgICAgIGZpbGw9XCIjM2MzNTRjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTkxMC45NiA0NzIuODVhNjEuNTIgNjEuNTIgMCAwMC04LjI2IDQuODQgNi43MiA2LjcyIDAgMDAtMS4wOS44OSA4LjE2IDguMTYgMCAwMC0uNjcuODggMTYuNTIgMTYuNTIgMCAwMC0yLjgyIDUuNjJcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICBzdHJva2U9XCIjMDAwXCJcclxuICAgICAgICBzdHJva2VNaXRlcmxpbWl0PXsxMH1cclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzguNiA0NTcuMjZjLTEuOCAxLjUxLTIuODYgMy42OS00LjEzIDUuNjctMy4wNSA0LjgtNy40MyA4LjY2LTEwLjQ0IDEzLjQ5LTEuMjkgMi4wOC0yLjM2IDQuMzgtNC4yIDYtMi4yIDItNS4yNCAyLjY5LTguMTggMi45Mi0yLjY1LjE5LTUuNDUuMDYtNy43OSAxLjMzLTIgMS4xLTMuNCAzLjA5LTQuNjggNXYuMDZhMi4yNiAyLjI2IDAgMDAyLjcgMy4zNiA0MC4yNSA0MC4yNSAwIDAxNi42My0xLjkzIDQyIDQyIDAgMDA1LjktMS4zNCAyNy41OSAyNy41OSAwIDAwNS4yOC0yLjgxIDM0LjMyIDM0LjMyIDAgMDA0LjE1LTIuOTFjMS42MS0xLjM3IDMtMyA0LjUyLTQuNDVhNzAuNjggNzAuNjggMCAwMTctNS4wOEE1My40IDUzLjQgMCAwMDc5MSA0NTkuNDhhMy44OCAzLjg4IDAgMDAuNzEtMi4yNyA0LjExIDQuMTEgMCAwMC0xLTJjLTEuNzctMi4yNS0zLjM4LTQuMDktNS44NC0yLTEuOTQgMS42MS00LjM3IDIuNC02LjI3IDQuMDV6bTUwLjMxLTQ4LjczYTMgMyAwIDAwLjY0IDEuNzZjLjY2LjY3IDEuNzUuNTMgMi42OS40N2E4Ljg5IDguODkgMCAwMTcuMDYgMi40NWMxLjcxIDEuNzkgMi4zOCA0LjMyIDIuNzggNi43N2ExMi41OCAxMi41OCAwIDAxLS4xOCA2LjE2IDkuNDYgOS40NiAwIDAxLTUuMDkgNS4xNCAyMy43NyAyMy43NyAwIDAxLTcuMTggMS43NiAxNy45MyAxNy45MyAwIDAxLTYuMiAwYy0yLjQzLS41Ni00LjU0LTItNi43My0zLjIxYTM2Ljg2IDM2Ljg2IDAgMDEtNC40My0yLjUgNyA3IDAgMDEtMi44OS00LjA2IDIuMiAyLjIgMCAwMS43My0yLjM1IDQuMTYgNC4xNiAwIDAxMS4xMi0uMzQgNC43NCA0Ljc0IDAgMDAzLjQxLTMuMzVjLjY3LTIuNTktLjk0LTUuMi0xLjEtNy44N2EzLjczIDMuNzMgMCAwMS40Ny0yLjIzIDQuOSA0LjkgMCAwMTIuMjUtMS42bDUtMi4yNGEyOS45MSAyOS45MSAwIDAxNC43MS0yLjA5YzEuNTktLjQxIDEuNy42OSAyIDIgLjM3IDEuNzkuNyAzLjU2Ljk0IDUuMzN6XCJcclxuICAgICAgICBmaWxsPVwiI2ZmYzFjN1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MjguOTEgNDA4LjUzYTMgMyAwIDAwLjY0IDEuNzZjLjY2LjY3IDEuNzUuNTMgMi42OS40N2E4Ljg5IDguODkgMCAwMTcuMDYgMi40NWMxLjcxIDEuNzkgMi4zOCA0LjMyIDIuNzggNi43N2ExMi41OCAxMi41OCAwIDAxLS4xOCA2LjE2IDkuNDYgOS40NiAwIDAxLTUuMDkgNS4xNCAyMy43NyAyMy43NyAwIDAxLTcuMTggMS43NiAxNy45MyAxNy45MyAwIDAxLTYuMiAwYy0yLjQzLS41Ni00LjU0LTItNi43My0zLjIxYTM2Ljg2IDM2Ljg2IDAgMDEtNC40My0yLjUgNyA3IDAgMDEtMi44OS00LjA2IDIuMiAyLjIgMCAwMS43My0yLjM1IDQuMTYgNC4xNiAwIDAxMS4xMi0uMzQgNC43NCA0Ljc0IDAgMDAzLjQxLTMuMzVjLjY3LTIuNTktLjk0LTUuMi0xLjEtNy44N2EzLjczIDMuNzMgMCAwMS40Ny0yLjIzIDQuOSA0LjkgMCAwMTIuMjUtMS42bDUtMi4yNGEyOS45MSAyOS45MSAwIDAxNC43MS0yLjA5YzEuNTktLjQxIDEuNy42OSAyIDIgLjM3IDEuNzkuNyAzLjU2Ljk0IDUuMzN6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezgxNS45fSBjeT17NDAwLjI0fSByPXsxMi40N30gZmlsbD1cIiNmZmMxYzdcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODMwLjM5IDQxMS42MWExNy4xNSAxNy4xNSAwIDAxNS44Ni0xLjQ4IDYuOTMgNi45MyAwIDAxNS40NiAyLjE2YzEuMTcgMS4zNyAxLjU2IDMuMjIgMi40OSA0Ljc1IDEuODQgMyA1LjQzIDQuMzcgOC4zIDYuNDJhNi4yNiA2LjI2IDAgMDExLjcyIDEuNjhjMSAxLjUyLjczIDMuNDcuNzEgNS4yN2EyNS40NiAyNS40NiAwIDAwMy42NyAxMi42MiA3NC40OCA3NC40OCAwIDAwNy45IDEwLjcxIDEwLjY4IDEwLjY4IDAgMDExLjcyIDIuNTVjLjcgMS42OC41IDMuNzEgMS41NCA1LjJhMTQuNTMgMTQuNTMgMCAwMC03LjM3IDFjLTMuNjEgMS40OS0zLjc4IDYuNzctNS40OCAxMC4yOS0zLjE0IDYuNTEtNy41IDEyLjM0LTExLjY1IDE4LjI2YTIzLjMyIDIzLjMyIDAgMDAtMi43NiA0LjU3Yy0uNzQtMS41Ny0uMjMtMy40NC0uMzItNS4xNy0uMi0zLjg3LTIuNDQtNy4zNC0zLjA3LTExLjE2YTUyLjY3IDUyLjY3IDAgMDEtLjMzLTUuNzYgMjcuNTYgMjcuNTYgMCAwMC0xLjg3LTguNSA1NC41NyA1NC41NyAwIDAwLTQuNDQtOC4zMyAxMS43NiAxMS43NiAwIDAwLTMuMzUtNGMtMS42Ni0xLjA4LTMuOTUtMS4zOS01LTMuMDdhNi43IDYuNyAwIDAwLTEtMS42MiAzLjc0IDMuNzQgMCAwMC0xLjE2LS41OSA1MS4wOSA1MS4wOSAwIDAxLTUuOTItMy4yOGMtMi0xLjA5LTQuMjctMS45LTYuNDgtMS40MWE4MCA4MCAwIDAxLTEzLjgzIDEyLjY4Yy0xLjU4IDEuMTYtMy4yOCAyLjM1LTQuMDYgNC4xNWEyMS4xMiAyMS4xMiAwIDAxLTYuNTctNC45MSAzLjMzIDMuMzMgMCAwMS0uNy0xYy0uNTEtMS40NiAxLTIuNzcgMi4yLTMuNjlhMjkuOSAyOS45IDAgMDA5Ljk0LTEzLjIzYzEuMjktMy4zOSAyLjE0LTcuMjkgNS4wOC05LjQyYTE3LjQ5IDE3LjQ5IDAgMDAyLjYzLTEuODUgMzMuMjggMzMuMjggMCAwMDItMy4xMiA1LjI5IDUuMjkgMCAwMTUuNTUtMS44OCAyNC41MiAyNC41MiAwIDAxMy4zMSAxLjU5YzIuNzcgMS4yNSA1Ljk1IDEgOSAuNjZsMTEuNzEtMS4xOWE0IDQgMCAwMC0uODYtMy44IDExLjYzIDExLjYzIDAgMDAtMS41NS0xLjIzIDguNjEgOC42MSAwIDAxLTMuMDItNC44N3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZmY2NTg0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgyMi41IDM3OC42OWExMC43OCAxMC43OCAwIDAxNi4yNyA2LjE0IDI1LjA2IDI1LjA2IDAgMDAxLjMyIDMuNTEgMjAuMjUgMjAuMjUgMCAwMDMuMjUgMy42MmMxLjEyIDEuMTkgMi4wOCAyLjc0IDEuODIgNC4zNS0uMS42LS4zNiAxLjE2LS40NCAxLjc1LS4zNSAyLjU5IDIuNTkgNC4zNyAzLjQ5IDYuODIgMS4xNyAzLjIyLTEuMzggNy4wNi4xOCAxMC4xLjU5IDEuMTQgMS42NiAyIDIuMzMgM3MuNzQgMi44LS4zOSAzLjQxYy0xLjc2Ljk1LTMuOC0xLjgzLTUuNjctMS4xLS40OC4xOS0uODUuNi0xLjMyLjgxLTEuMzEuNTktMi44NC0uNTctMy4yNy0xLjk0YTEwLjIxIDEwLjIxIDAgMDEuMDgtNC4yNiA1LjE1IDUuMTUgMCAwMC0uOC00LjA5Yy0uNzYtLjg3LTItMS4yMS0yLjc5LTItMS40NC0xLjQ2LTEuMTctMy44MS0xLTUuODUuMzEtNC4xMi0uNDMtOC42My0zLjM4LTExLjUzYS43NS43NSAwIDAwLS41My0uMjkuODUuODUgMCAwMC0uNTMuMzMgMjQuOSAyNC45IDAgMDEtNC40OCAzLjcxIDIuODIgMi44MiAwIDAxLTEuNi41OGMtLjU3IDAtMS4xNC0uNTgtMS0xLjEzYTExLjc1IDExLjc1IDAgMDAtMy43NCAyLjc0IDMuOTEgMy45MSAwIDAxLS4zLTEuNzIgMTYuMTMgMTYuMTMgMCAwMS0yIDMuMDYgMjQuOTEgMjQuOTEgMCAwMC0yLjIgMi43MiA0IDQgMCAwMC0uNTYgMy4zM2MxLjEyIDMuMjEgNi44MyAyLjQ3IDguMDcgNS42NC4yNy43MS4yNiAxLjQ5LjU0IDIuMTkuNTUgMS4zNiAyIDIgMy4yIDIuOXMyLjI0IDIuNDMgMS41MiAzLjdjLS42MyAxLjA5LTIuMSAxLjIxLTMuMzIgMS40OWE4IDggMCAwMC01IDMuNzYgNC43MiA0LjcyIDAgMDEtMS4yOSAxLjc3IDMuNjMgMy42MyAwIDAxLTEuNjMuNGMtMS43LjE0LTMuNjUuMTgtNC44Mi0xLTEuNTctMS42NS0uODMtNC42NS0yLjQzLTYuMjctLjM3LS4zNi0uODMtLjYyLTEuMTgtMWE0LjQ2IDQuNDYgMCAwMS0uODktMy4zNWMuMTYtMy4zMyAxLjM5LTYuNTkgMS4yLTkuOTJhNTYuNzQgNTYuNzQgMCAwMC0xLjI3LTYuNTQgMTcuNiAxNy42IDAgMDEzLjU2LTE0LjM5YzIuNzItMy4xOSA2LjI3LTQuNDQgMTAuMjktNSAzLjU4LS41MyA3LjA0LTEuNzggMTAuNzEtLjQ1elwiXHJcbiAgICAgICAgZmlsbD1cIiMzYzM1NGNcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgOTY1LjY0IDgwMC44MVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fYVwiXHJcbiAgICAgICAgICB4MT17NDc4LjM4fVxyXG4gICAgICAgICAgeTE9ezY5NS43Mn1cclxuICAgICAgICAgIHgyPXs0NzguMzh9XHJcbiAgICAgICAgICB5Mj17MzMuMn1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCJncmF5XCIgc3RvcE9wYWNpdHk9ezAuMjV9IC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNTR9IHN0b3BDb2xvcj1cImdyYXlcIiBzdG9wT3BhY2l0eT17MC4xMn0gLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiZ3JheVwiIHN0b3BPcGFjaXR5PXswLjF9IC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19iXCJcclxuICAgICAgICAgIHgxPXsxODM0LjIxfVxyXG4gICAgICAgICAgeTE9ezgwNi44N31cclxuICAgICAgICAgIHgyPXsxODM0LjIxfVxyXG4gICAgICAgICAgeTI9ezE5NC45OH1cclxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwibWF0cml4KC0xIDAgMCAxIDI3NjYgMClcIlxyXG4gICAgICAgICAgeGxpbmtIcmVmPVwiI3ByZWZpeF9fYVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOTAxLjg4IDQ0Mi41Yy0zNy4wOSA2MC0zMC4xNCAxNDEuNzQtMTMuODUgMjA2LjE5IDUuNDUgMjEuNTggMTEuNzMgNDQuMzYgNy4wNyA2OC41MS01LjcgMjkuNTMtMjYuNDggNTIuNzItNDcuNTEgNjYtMzguMzQgMjQuMTUtODIuMTIgMjMuNDgtMTE0LTEuNzctMjcuNTMtMjEuODEtNDUuNjYtNTkuODUtNzMuNzctODAuNDktNDctMzQuNTUtMTExLjU0LTEzLjYxLTE2Ny41OCAxOC42OC0zOS42MyAyMi43OS04My4yNSA1MS43OS0xMTkuODggMzUuMzctMjUuNzctMTEuNTMtNDEuODQtNDQuMDYtNDkuMzQtNzkuNDYtMy42Mi0xNy4wOS01LjgxLTM1Ljc2LTE0LjExLTQ4Ljc4LTQuOTQtNy43NC0xMS43My0xMi45Mi0xOC43Ny0xNy4xNy02NC4yNS0zOC43NC0xNTEuMTgtNi4zNS0yMTMuMTQtNTAuMjItNDEuODUtMjkuNjItNjUuNjQtOTAuOC03My40Ni0xNTYuMjJTMi4xNSAyNjcuNzIgMTAuMiAxOTguOGM1LjczLTQ5IDEzLjQ4LTEwMS40MiAzOS4yLTE0MS4yNyAyNy4yMS00Mi4xNSA3MC4xLTYxIDEwNy4zOC01N3M2OS42NSAyNy42MiA5Ny41NSA1Ni40OWMzNC44NyAzNi4wOCA2Ni4zMiA4Mi4xNiAxMTEuNDUgOTMuOCAzMC43NCA3LjkzIDY0LjMxLTEuMjUgOTctNi40NCA1NC41OC04LjY4IDEwOC40LTYuMTkgMTYxLjg0LTIuOTMgNTEuMTYgMy4xMiAxMDIuNjMgNyAxNTAuMyAyNSAzMy43MyAxMi43NSA1OS42MiAzOS4yOSA5MS4xIDU2LjU1IDIwLjUyIDExLjI1IDQzLjY3IDEyLjY4IDYyLjc5IDI3LjY4IDIzLjU1IDE4LjQ4IDQzLjkzIDUyLjU5IDM0LjUgOTUuNzEtOC45OSA0MS4wMi00MS43NSA2NC4yNy02MS40MyA5Ni4xMXpcIlxyXG4gICAgICAgIGZpbGw9XCIjNjc3NWVlXCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02NjQuNDkgMzA2Ljg4czEwMS04NC42MyAxMjMuNDYtMTI3LjNTODM5IDEwMC4xNCA4MzkgMTAwLjE0XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiIzUzNTQ2MVwiXHJcbiAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD17MTB9XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MjUuNzIgMTk1LjUzbC00My42OS05Ljg1czEwLjMxIDQ2LjA4IDQzLjY5IDkuODV6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NTguOTYgMTQ4LjQ5bDI1LjE0IDM3LjY1cy00OS4xNSAzLjU1LTI1LjE0LTM3LjY1em04My45NSAxMS42NWwtMzkuOTMtN3MyNS4wOCAzOC4xNSAzOS45MyA3em0tNTkuMDktMzMuNjVsMTkuNjcgMjUuNzZzLTM0LjgyIDMuMy0xOS42Ny0yNS43NnptMzkuODEtNS4xM3MzNCAxLjYyIDM4IDQuODctNS4wNyAyMi4zLTE4IDE5LjE5LTIwLTI0LjA2LTIwLTI0LjA2em0tMTMuNTktMzAuMzlzMTMuODkgMjUuMzEgMTMuMzcgMzAuMTMtMjEuMTcgMTAuMjMtMjUuMzQtOCAxMS45Ny0yMi4xMyAxMS45Ny0yMi4xM3pcIlxyXG4gICAgICAgIGZpbGw9XCIjNjc3NWVlXCJcclxuICAgICAgLz5cclxuICAgICAgPGNpcmNsZVxyXG4gICAgICAgIGN4PXs5NjMuNzV9XHJcbiAgICAgICAgY3k9ezE1NC4xMn1cclxuICAgICAgICByPXs5LjQ5fVxyXG4gICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCguMyAtLjk1IC45NSAuMyA0MDguNjggOTc2Ljc4KVwiXHJcbiAgICAgICAgZmlsbD1cIiNmZmQwMzdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Y2lyY2xlXHJcbiAgICAgICAgY3g9ezk0OC45fVxyXG4gICAgICAgIGN5PXsxNDQuNDN9XHJcbiAgICAgICAgcj17OS40OX1cclxuICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjMgLS45NSAuOTUgLjMgNDA3LjU0IDk1NS44NSlcIlxyXG4gICAgICAgIGZpbGw9XCIjZmZkMDM3XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTM0OS40NiA2MzguNjNzMTYuMjEtNDguMjItODYuNTUtMTA2LjM1YzAgMC0xMDQuMzQtMzAuNDMtOTMuNjctMTM0LjkzIDAgMC0xMjAuMjggODguMTItMzguODkgMjAwLjM3czE1MS42NCA4Ny43NSAxNTEuNjQgODcuNzV6XCJcclxuICAgICAgICBmaWxsPVwiIzY3NzVlZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0zMTguMTMgNjYwLjQxcy01MC4xNC01NC4xOS05OC4yLTc1LjE0YTk1LjcxIDk1LjcxIDAgMDEtMjYuMTEtMTcuMzljLTMwLjY0LTI4LTQ0LTcwLjI1LTM2LjEtMTExbDExLjU1LTU5LjUzXCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgc3Ryb2tlPVwiIzUzNTQ2MVwiXHJcbiAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD17MTB9XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCJ1cmwoI3ByZWZpeF9fYSlcIiBkPVwiTTE5My4wNyAzMy4yaDU3MC42MXY2NjIuNTNIMTkzLjA3elwiIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZjdmN2ZkXCIgZD1cIk0xOTkuNzIgNDAuOTFoNTU3LjMyVjY4OEgxOTkuNzJ6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgICAgZD1cIk0yMzMuMzggMTEzLjg1aDE0MC44OXYxMS4yMkgyMzMuMzh6bTAgMjcuNDNoMjQwLjYzdjExLjIySDIzMy4zOHpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjMwLjM2IDEwMy4xM2g5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcyOS44MiAxMDMuNjN2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNTI5LjM3IDEwMy4xM2g5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTYyOC44MiAxMDMuNjN2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjMwLjM2IDE5MC40MWg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcyOS44MiAxOTAuOTF2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNTI5LjM3IDE5MC40MWg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTYyOC44MiAxOTAuOTF2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNDI4LjM4IDE5MC40MWg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTUyNy44NyAxOTAuOTF2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzI3LjM5IDE5MC40MWg5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQyNi44OCAxOTAuOTF2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMjI2LjQgMTkwLjQxaDk5Ljk5djg2LjI4SDIyNi40elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0zMjUuODkgMTkwLjkxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTYzMC4zNiAyNzcuNjhoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03MjkuODIgMjc4LjE5djg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTUyOS4zNyAyNzcuNjhoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02MjguODIgMjc4LjE5djg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTQyOC4zOCAyNzcuNjhoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01MjcuODcgMjc4LjE5djg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTMyNy4zOSAyNzcuNjhoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00MjYuODggMjc4LjE5djg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIyNi40IDI3Ny42OGg5OS45OXY4Ni4yOEgyMjYuNHpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzI1Ljg5IDI3OC4xOXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk02MzAuMzYgMzY0Ljk2aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzI5LjgyIDM2NS40NnY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk01MjkuMzcgMzY0Ljk2aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNjI4LjgyIDM2NS40NnY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk00MjguMzggMzY0Ljk2aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNTI3Ljg3IDM2NS40NnY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0zMjcuMzkgMzY0Ljk2aDk5Ljk5djg2LjI4aC05OS45OXpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNDI2Ljg4IDM2NS40NnY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0yMjYuNCAzNjQuOTZoOTkuOTl2ODYuMjhIMjI2LjR6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTMyNS44OSAzNjUuNDZ2ODUuMjhoLTk5di04NS4yOGg5OW0xLTFoLTEwMXY4Ny4yOGgxMDF2LTg3LjI4elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNjMwLjM2IDQ1Mi4yM2g5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcyOS44MiA0NTIuNzR2ODUuMjdoLTk5di04NS4yN2g5OW0xLTFoLTEwMXY4Ny4yN2gxMDF2LTg3LjI3elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNTI5LjM3IDQ1Mi4yM2g5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTYyOC44MiA0NTIuNzR2ODUuMjdoLTk5di04NS4yN2g5OW0xLTFoLTEwMXY4Ny4yN2gxMDF2LTg3LjI3elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNDI4LjM4IDQ1Mi4yM2g5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTUyNy44NyA0NTIuNzR2ODUuMjdoLTk5di04NS4yN2g5OW0xLTFoLTEwMXY4Ny4yN2gxMDF2LTg3LjI3elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzI3LjM5IDQ1Mi4yM2g5OS45OXY4Ni4yOGgtOTkuOTl6XCIgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQyNi44OCA0NTIuNzR2ODUuMjdoLTk5di04NS4yN2g5OW0xLTFoLTEwMXY4Ny4yN2gxMDF2LTg3LjI3elwiXHJcbiAgICAgICAgZmlsbD1cIiNlMmUyZWNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMjI2LjQgNDUyLjIzaDk5Ljk5djg2LjI4SDIyNi40elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0zMjUuODkgNDUyLjc0djg1LjI3aC05OXYtODUuMjdoOTltMS0xaC0xMDF2ODcuMjdoMTAxdi04Ny4yN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTYzMC4zNiA1MzkuNTFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03MjkuODIgNTQwLjAxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTUyOS4zNyA1MzkuNTFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk02MjguODIgNTQwLjAxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTQyOC4zOCA1MzkuNTFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk01MjcuODcgNTQwLjAxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTMyNy4zOSA1MzkuNTFoOTkuOTl2ODYuMjhoLTk5Ljk5elwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00MjYuODggNTQwLjAxdjg1LjI4aC05OXYtODUuMjhoOTltMS0xaC0xMDF2ODcuMjhoMTAxdi04Ny4yOHpcIlxyXG4gICAgICAgIGZpbGw9XCIjZTJlMmVjXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTIyNi40IDUzOS41MWg5OS45OXY4Ni4yOEgyMjYuNHpcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzI1Ljg5IDU0MC4wMXY4NS4yOGgtOTl2LTg1LjI4aDk5bTEtMWgtMTAxdjg3LjI4aDEwMXYtODcuMjh6XCJcclxuICAgICAgICBmaWxsPVwiI2UyZTJlY1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00MzYuNDIgNzA0Ljg5YzIuODYtMi4xNyA1LjU1LTQuNzMgNi4zOC03Ljg1YTYuNjQgNi42NCAwIDAwLTQuNDYtOGMtNC4wOS0xLjI4LTguNDYgMS0xMS43OCAzLjM3cy03LjExIDUtMTEuNDUgNC41MWM0LjQ5LTMuMjUgNi42My04LjUyIDUuMzktMTMuMzFhNS4xNiA1LjE2IDAgMDAtMS41LTIuN2MtMi4yNy0yLTYuMzktMS4xMy05LjExLjQzLTguNjUgNS0xMS4wNiAxNC41NS0xMS4xMSAyMy4xOC0uODctMy4xMS0uMTQtNi4zNS0uMTYtOS41NXMtMS4wOS02LjczLTQuMzktOC40NWExNS43MSAxNS43MSAwIDAwLTYuNy0xLjI5Yy0zLjg5LS4xMi04LjIyLjItMTAuODcgMi41Mi0zLjMgMi44OC0yLjQ0IDcuNzIuNDMgMTAuODlzNy4yNCA1LjE2IDExLjI1IDcuMzVjMy4wNiAxLjY3IDYuMTYgMy42MiA4IDYuMjZhNS42OCA1LjY4IDAgMDEuNiAxLjEyaDI0LjM3YTcwLjA3IDcwLjA3IDAgMDAxNS4xMS04LjQ4elwiXHJcbiAgICAgICAgZmlsbD1cIiM2Nzc1ZWVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsyMzkuNTl9IGN5PXsyMDMuNTN9IHI9ezUuN30gZmlsbD1cIiNmYzY2ODFcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsyNTMuODN9IGN5PXsyMDMuNTN9IHI9ezUuN30gZmlsbD1cIiNmZmQwMzdcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs0NDAuODd9IGN5PXsyODguMDN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs0NTUuMTJ9IGN5PXsyODguMDN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs3NDUuNjR9IGN5PXs0NTEuMzN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs3NDguNDl9IGN5PXs0NDQuNjl9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs3NTEuMzR9IGN5PXs0MzguOTl9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2NDV9IGN5PXsyMDMuNTN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2NTkuMjR9IGN5PXsyMDMuNTN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2NzMuNDl9IGN5PXsyMDMuNTN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2ODcuNzN9IGN5PXsyMDMuNTN9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2NDV9IGN5PXszODAuMTJ9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2NTkuMjR9IGN5PXszODAuMTJ9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2NzMuNDl9IGN5PXszODAuMTJ9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs2ODcuNzN9IGN5PXszODAuMTJ9IHI9ezUuN30gZmlsbD1cIiM2Nzc1ZWVcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXszNDAuMjN9IGN5PXsyODguMDN9IHI9ezUuN30gZmlsbD1cIiNmZmQwMzdcIiAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsyMzkuNTl9IGN5PXszNzQuNDN9IHI9ezUuN30gZmlsbD1cIiNmYzY2ODFcIiAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODU3LjkgNTE1LjIyYzYuMjUgMy42OSAxNiA2LjA5IDI4LjM1LTEuODRsLS4xMiAxNy41NmMuODggMTIgMTUuNzcgNTUuOTEgMTUuNzcgNTUuOTFsMTAuNSAzNi4xYTI4Mi40NyAyODIuNDcgMCAwMTExLjU0IDc4LjUzYzAgOC44MS44MiAxNy44OSAzLjM1IDI0LjcyIDUuNTkgMTUuMTEtMi4yIDM0LjU4LTUuNTggNDEuODNhMTc1LjY4IDE3NS42OCAwIDAxLTE3LjMzIDQuODggMTEuODQgMTEuODQgMCAwMC0xLjU1LjQ3bC0uMDctLjFTODg3IDc3OS41MyA4ODAgNzc4LjY3Yy01LjIyLS42NC04LjQ5IDUuODctNC40IDEwLjY2LTMuODYgMS03LjgyIDEuNzEtMTAuNDkgMS4zOC03LS44Ni0xMC41MSAxMS4xOCAyLjYzIDE0LjYyczg3LjU5IDAgODcuNTkgMGExMC41NiAxMC41NiAwIDAwNS42LTExLjY2YzUuNzItLjIyIDkuMjktLjM5IDkuMjktLjM5czEzLjE0LTYgMC0yMi4zN2wtLjcuNTMtMi44MS04LjI3Vjc1MnMxNi42NC04MCAxMS4zOS04OS40Ni03Ljg4LTU3LjYzLTcuODgtNTcuNjNsMS43OC01Mi40N2M0Ljc1LTkuOCA3LjE4LTI1LjE2IDguNDEtMzcuMTdhNzguODcgNzguODcgMCAwMDMuMzYtMTcuNjNjLjIxLTIuODIuMzgtNS43OC40OS04Ljg1QTU5LjMzIDU5LjMzIDAgMDA5ODEgNDY5YzUtNy4yIDEzLjEzLTE4LjMzIDE5Ljg0LTI0LjkxIDEwLjUxLTEwLjMyIDcuODgtMjIuMzcgNy44OC0yMi4zN2wtNC4zOC0yOS4yNS0xMC41MS00OS44OWMxLjMyLTEzLjg0LTEuNTctMjEuODEtNC43Ni0yNi4zMS43Ni00LjQ3IDEuNDctOC45NCAyLTEzLjQzYTE3MS44NyAxNzEuODcgMCAwMC0zLjA3LTU4LjQ4Yy0xLjUyLTYuNjktMy41OS0xMy41NS04LjI4LTE4LjYyLTUuMzEtNS43NC0xMy45My05LjI0LTE1LjkxLTE2Ljc2LS40OS0xLjg3LS41MS0zLjg2LTEuMjItNS42Ni0xLjkyLTQuOTItOC02LjcxLTEzLjMyLTcuMzUtOS40OC0xLjE1LTIzLjE5LTItMzIuMyAxLjctNi4zNiAyLjYtMTUuMTIgOS43Ni0xOC42IDE3LjQ0LTIgMy41My0yLjkzIDcuMjQtMi4wOCAxMC43M2ExNC43MSAxNC43MSAwIDAwMS41MSAzLjY3IDMzIDMzIDAgMDAtMi4wNCAxMS40OSAzMy41NiAzMy41NiAwIDAwMjEuNDIgMzEuMTNjLjIxLjY2LjQgMS4zMS41NiAxLjk1YTMzLjQyIDMzLjQyIDAgMDEuODYgNC42OWMtLjE3IDMtLjM2IDYuMDktLjUgOS4xNHEtLjE1LjYzLS4zMiAxLjI0YTIyNS4zOCAyMjUuMzggMCAwMC0yMiAxMS4yMmM1LjI2IDcuNzQtLjg4IDQwLjQzLS44OCA0MC40My0xMy4xNCA3Ljc0LTI2LjI4IDI3LjUzLTEyLjI2IDQ4LjE3czYuMTMgNDMgNi4xMyA0M2wtMi4xOSAzMy42M3YuMDZsLS40NCA2LjczaC4xN2wtLjE3IDIuNTUuMzguMDd2Mi43NGMtNi4xNSAyLjI2LTE1LjE0IDYuODItMjAuNSAxNS4yNWE1My44MSA1My44MSAwIDAxLTkuMTcgMTEuMjUgNi43NiA2Ljc2IDAgMDAxLjA1IDEwLjk3em0xMDUuNzYtODkuMzZhMzIgMzIgMCAwMTMuMTEtMTYuOTJxMy4wOS4wNiA2LjE5LjA3Yy4yMSAxLjQ1LjQ2IDIuODMuNzYgNC4wOSAxLjc4IDcuNTgtNS4zMyAxMS4yMS0xMC4wNyAxMi43NXpcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTE3LjE4IC00OS41OSlcIlxyXG4gICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fYilcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODQ4LjIxIDcwOS42NmwzLjM3IDEwLjExLTExIDExLTM2LjI0IDguNDMtMjYuMTMtMi41MyAxLjY5LTkuMjdhMTEuMTggMTEuMTggMCAwMTguMy04LjE3YzEwLjc0LTIuNTIgMzEuMjItOC4yOCAzNS41Mi0xNi4yN3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZGI4YjhiXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg0OC4yMSA3MDkuNjZsMy4zNyAxMC4xMS0xMSAxMS0zNi4yNCA4LjQzLTI2LjEzLTIuNTMgMS42OS05LjI3YTExLjE4IDExLjE4IDAgMDE4LjMtOC4xN2MxMC43NC0yLjUyIDMxLjIyLTguMjggMzUuNTItMTYuMjd6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03ODYuNjggNzM0LjFsNS4wNi02Ljc0LTUuMDYtNy44MXMtMTUuMTcgNi4xMi0yMS45MSA1LjI4LTEwLjExIDExIDIuNTMgMTQuMzMgODQuMjggMCA4NC4yOCAwIDEyLjY0LTUuOSAwLTIxLjkxbC0xMSA4LjQzcy0xOC41NCAxMC4xMS0yNy44MSA4LjQzelwiXHJcbiAgICAgICAgZmlsbD1cIiMyZTMwMzdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzYzLjkyIDc0OC40MWwyNi4xMyAyLjUzIDM2LjI0LTguNDMgMTEtMTEtLjg5LTIuNjgtMS4yNi0zLjc2LTEuMjYtMy42Ni0yNC40NC02Ljc0YTE1LjE0IDE1LjE0IDAgMDEtNSA1Yy03Ljk0IDUuNDMtMjIuMiA5LjM1LTMwLjU3IDExLjMxYTguNzcgOC43NyAwIDAwLTEgLjMxIDExLjE0IDExLjE0IDAgMDAtNy4yNiA3Ljg2elwiXHJcbiAgICAgICAgZmlsbD1cIiNkYjhiOGJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzYzLjkyIDc0OC40MWwyNi4xMyAyLjUzIDM2LjI0LTguNDMgMTEtMTEtLjg5LTIuNjgtMTAuMDYgNy43NHMtMTguNTQgMTAuMTEtMjcuODEgOC40M2gtMjYuMThsNS4wNi02Ljc0LTQuNTQtN2ExMS4xNCAxMS4xNCAwIDAwLTcuMjYgNy44NnpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc3Mi4zNSA3NDUuOWw1LjA2LTYuNzQtNS4wNi03Ljgxcy0xNS4xNyA2LjEyLTIxLjkxIDUuMjgtMTAuMTEgMTEgMi41MyAxNC4zMyA4NC4yOCAwIDg0LjI4IDAgMTIuNjQtNS45IDAtMjEuOTFsLTExIDguNDNzLTE4LjU0IDEwLjExLTI3LjgxIDguNDN6XCJcclxuICAgICAgICBmaWxsPVwiIzJlMzAzN1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03OTMuNDIgMjU3LjA3czQwLjQ2IDQuMjEgMzQuNTYtMTIuNjRhMzAuMzQgMzAuMzQgMCAwMS0xLjI1LTE0Ljg4IDQxLjI1IDQxLjI1IDAgMDE3LjE1LTE3LjE0bC0zNy45MyA1LjlhNDcuNSA0Ny41IDAgMDE1LjE0IDEyLjE4YzQuNTIgMTcuODctNy42NyAyNi41OC03LjY3IDI2LjU4elwiXHJcbiAgICAgICAgZmlsbD1cIiNkYjhiOGJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODYyLjUzIDQ0OS4yM3MtLjg0IDM2LjI0LTkuMjcgNTMuOTRsLTEuNjkgNTEuNDFzMi41MyA0Ny4yIDcuNTkgNTYuNDctMTEgODcuNjUtMTEgODcuNjV2MTMuNDlzLTI3IDEwLjExLTM0LjU2LTEuNjlsNy41OS0xMDAuMy0zLjM3LTEzOS4wNnpcIlxyXG4gICAgICAgIGZpbGw9XCIjNDc0NDYzXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTg2Mi41MyA0NDkuMjNzLS44NCAzNi4yNC05LjI3IDUzLjk0bC0xLjY5IDUxLjQxczIuNTMgNDcuMiA3LjU5IDU2LjQ3LTExIDg3LjY1LTExIDg3LjY1djEzLjQ5cy0yNyAxMC4xMS0zNC41Ni0xLjY5bDcuNTktMTAwLjMtMy4zNy0xMzkuMDZ6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04NzkuMzkgMzMyLjkybDUuMDYgMTMuNDkgNC4yMSAyOC42NmEyNS4zNSAyNS4zNSAwIDAxLTcuNTkgMjEuOTFjLTEwLjExIDEwLjExLTIzLjYgMzEuMTgtMjMuNiAzMS4xOGwtMTYtNDhzMTYtMi41MyAxMy40OS0xMy40OS0xLjctMzEuMjYtMS43LTMxLjI2elwiXHJcbiAgICAgICAgZmlsbD1cIiNmYzY2ODFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODc5LjM5IDMzMi45Mmw1LjA2IDEzLjQ5IDQuMjEgMjguNjZhMjUuMzUgMjUuMzUgMCAwMS03LjU5IDIxLjkxYy0xMC4xMSAxMC4xMS0yMy42IDMxLjE4LTIzLjYgMzEuMThsLTE2LTQ4czE2LTIuNTMgMTMuNDktMTMuNDktMS43LTMxLjI2LTEuNy0zMS4yNnpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMDV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MDQuNDggNzE5LjY4YzEwLjgxIDE3IDI3LjY0IDcuMzcgMzAuNjIgNS40NWwtMS4yMi0zLjcyLTI0LjQ0LTYuNzRhMTUuMTQgMTUuMTQgMCAwMS00Ljk2IDUuMDF6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzAuNjcgNDgyLjFjLjg0IDExLjggMTUuMTcgNTQuNzggMTUuMTcgNTQuNzhsMTAuMTEgMzUuMzdhMjgxLjQ0IDI4MS40NCAwIDAxMTEuMTEgNzYuOTRjMCA4LjYzLjc5IDE3LjUzIDMuMjMgMjQuMjIgNi43NCAxOC41NC02Ljc0IDQzLjgzLTYuNzQgNDMuODMgMTEuOCAyMS4wNyAzMiA2Ljc0IDMyIDYuNzRWNzEwLjVzMTYtNzMuMzMgMTEuOC04Ny42NS01LjktNTMuMS01LjktNTMuMXYtNzBhNzkuMzggNzkuMzggMCAwMDIzLjEzLTUwLjMyYy4yLTIuNzYuMzYtNS42Ni40Ny04LjY3LjY4LTE5LTEyLjMyLTQxLjMxLTE3LjQtNDkuMjUtMS4yMi0xLjkyLTItMy0yLTNsLTc0LjQyIDI5LjUyLS4xNy4wN3Y5LjI1elwiXHJcbiAgICAgICAgZmlsbD1cIiM0NzQ0NjNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNzk1Ljk1IDIxOC4zYTQ3LjUgNDcuNSAwIDAxNS4xNCAxMi4xOCAzMyAzMyAwIDAwMjUuNjQtLjk0IDQxLjI1IDQxLjI1IDAgMDE3LjE1LTE3LjEzelwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXs4MTIuODF9IGN5PXsxOTguMDZ9IHI9ezMyLjg3fSBmaWxsPVwiI2RiOGI4YlwiIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzAuNjcgNDI3LjMybC4zNi4wN2MzNS4zNCA3LjI3IDc5LjcxLTI5LjU3IDc5LjcxLTI5LjU3YTQzLjY4IDQzLjY4IDAgMDEtMy4wNy02LjI3Yy0xLjIyLTEuOTItMi0zLTItM2wtNzQuNDIgMjkuNTItLjE5IDIuOTV6XCJcclxuICAgICAgICBvcGFjaXR5PXswLjF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03NzkuOTQgMjU2LjIyczQ3LjItMjguNjYgNjIuMzctMTYuODZsMjEuMDcgMjdzMTMuNDkgNC4yMSAxMSAzMS4xOGwxMC4wNyA0OC44Ny0zMC4zNCA3LjU5cy0xNy43IDE2Ljg2LTMuMzcgNDEuM2MwIDAtNDQuNjcgMzcuMDgtODAuMDcgMjkuNWwyLjUzLTM5LjYxczcuNTktMjEuOTEtNS45LTQyLjE0LS44NC0zOS42MSAxMS44LTQ3LjJjMC0uMDEgNS44OS0zMi4wNC44NC0zOS42M3pcIlxyXG4gICAgICAgIGZpbGw9XCIjZmM2NjgxXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc3Ny40MSA0MjguMTZzLTE3LjcgMy4zNy0yNi4xMyAxNi44NmE1Mi41MyA1Mi41MyAwIDAxLTguODIgMTEgNi42OSA2LjY5IDAgMDAxIDEwLjY2YzYuNjkgNCAxNy42IDYuNDkgMzEuMzgtNC44MyAyMy42NC0xOS4zNiAyLjU3LTMzLjY5IDIuNTctMzMuNjl6XCJcclxuICAgICAgICBmaWxsPVwiI2RiOGI4YlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04MDMuNTQgMjcyLjI0czE2Ljg2LTEuNjkgMjEuMDcgNDIuMTQgMTEgNTMuOTQgMTEgNTMuOTQgNC4yMSAyMi43Ni01LjkgMzYuMjQtMjkuNSA0Mi4xNC0yOS41IDQyLjE0LTIxLjA3IDUuOS0yNS4yOC0xNS4xN2wyNi4xMy00OC44OHM0LjIxLTE2Ljg2LTUuOS0yOC42Ni0xNy43NS05MC4xOCA4LjM4LTgxLjc1elwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODAxLjgyIDI2OS43MXMxNi44Ni0xLjY5IDIxLjA3IDQyLjE0IDExIDUzLjk0IDExIDUzLjk0IDQuMjEgMjIuNzYtNS45IDM2LjI0LTI5LjUgNDIuMTQtMjkuNSA0Mi4xNC0yMS4wNyA1LjktMjUuMjgtMTUuMTdsMjYuMTMtNDguODhzNC4yMS0xNi44Ni01LjktMjguNjYtMTcuNzItOTAuMTggOC4zOC04MS43NXpcIlxyXG4gICAgICAgIGZpbGw9XCIjZmM2NjgxXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTc4Ny45NCAzMDEuMzFzLTEuNjggMjYuMSA1Ljg4IDQwLjQ2IDcuNTkgMzIuODcgMCA0M20tMTAuMDktMTE1LjQ4czYuNzQtNi43NCAyNi4xMy03LjU5IDI3LjgxLTYuNzQgMjcuODEtNi43NFwiXHJcbiAgICAgICAgb3BhY2l0eT17MC4xfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNODMwLjYxIDE1NS41OWM1LjEyLjYzIDExIDIuMzkgMTIuODIgNy4yLjY4IDEuNzcuNyAzLjcyIDEuMTcgNS41NSAxLjkxIDcuMzYgMTAuMiAxMC43OSAxNS4zMSAxNi40MiA0LjUxIDUgNi41IDExLjY5IDggMTguMjRhMTcxLjQgMTcxLjQgMCAwMTMgNTcuMjZjLTEuNjQgMTQtNSAyNy43NC01Ljk0IDQxLjc4cy43OCAyOC44MSA4LjQ1IDQwLjYxYzMuMyA1LjA3IDcuNjYgOS41MyAxMCAxNS4xMS00LjgzIDMuOTItMTEuNSA0LjQ4LTE3LjczIDQuNjlxLTEwLjg3LjM3LTIxLjc1IDBjLTMuOC0uMTMtNy43Ny0uMzgtMTEuMDUtMi4zYTE3LjA2IDE3LjA2IDAgMDEtNS44LTYuMjNjLTQuMTUtNy01LjE5LTE1LjUtNS0yMy42NnMxLjQ3LTE2LjI4IDEuNjItMjQuNDVjLjA4LTQuNDUtLjI3LTkuMTgtMi44My0xMi44Mi0xLjg1LTIuNjMtNC42Ni00LjQtNy4wNi02LjUzLTktOC0xMi4xMi0yMC44Mi0xMi40Mi0zMi44N3MxLjY5LTI0LjEyLjY3LTM2LjEzYy0uNC00LjctMi4xNi0xMC4zNS02Ljc4LTExLjI2LTEuNDYtLjI5LTMgMC00LjQtLjU2LTMuNzEtMS40My0zLjM1LTYuNjYtNC40MS0xMC40OS0xLjE5LTQuMy00Ljg2LTcuNjItNS44OS0xMi0yLjQzLTEwLjIgMTAuNTUtMjIuMzcgMTkuMDYtMjUuOTIgOC42NS0zLjYyIDIxLjg0LTIuNzYgMzAuOTYtMS42NHpcIlxyXG4gICAgICAgIG9wYWNpdHk9ezAuMX1cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTgzMS40NSAxNTMuOTFjNS4xMi42MyAxMSAyLjM5IDEyLjgyIDcuMi42OCAxLjc3LjcgMy43MiAxLjE3IDUuNTUgMS45MSA3LjM2IDEwLjIgMTAuNzkgMTUuMzEgMTYuNDIgNC41MSA1IDYuNSAxMS42OSA4IDE4LjI0YTE3MS40IDE3MS40IDAgMDEzIDU3LjI2Yy0xLjY0IDE0LTUgMjcuNzQtNS45NCA0MS43OHMuNzggMjguODEgOC40NSA0MC42MWMzLjMgNS4wNyA3LjY2IDkuNTMgMTAgMTUuMTEtNC44MyAzLjkyLTExLjUgNC40OC0xNy43MyA0LjY5cS0xMC44Ny4zNy0yMS43NSAwYy0zLjgtLjEzLTcuNzctLjM4LTExLjA1LTIuM2ExNy4wNiAxNy4wNiAwIDAxLTUuOC02LjIzYy00LjE1LTctNS4xOS0xNS41LTUtMjMuNjZzMS40Ny0xNi4yOCAxLjYyLTI0LjQ1Yy4wOC00LjQ1LS4yNy05LjE4LTIuODMtMTIuODItMS44NS0yLjYzLTQuNjYtNC40LTcuMDYtNi41My05LTgtMTIuMTItMjAuODItMTIuNDItMzIuODdzMS42OS0yNC4xMi42Ny0zNi4xM2MtLjQtNC43LTIuMTYtMTAuMzUtNi43OC0xMS4yNi0xLjQ2LS4yOS0zIDAtNC40LS41Ni0zLjcxLTEuNDMtMy4zNS02LjY2LTQuNDEtMTAuNDktMS4xOS00LjMtNC44Ni03LjYyLTUuODktMTItMi40My0xMC4yIDEwLjU1LTIyLjM3IDE5LjA2LTI1LjkyIDguNjUtMy42MyAyMS44NC0yLjc3IDMwLjk2LTEuNjR6XCJcclxuICAgICAgICBmaWxsPVwiIzQ3MjcyN1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgbm9va2llcywgeyBzZXRDb29raWUgfSBmcm9tIFwibm9va2llc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhc2VcIlxyXG5pbXBvcnQgeyBCb29raW5nIH0gZnJvbSBcIi4uL2xpYi9pY29ucy9VbmRyYXdcIlxyXG5pbXBvcnQgc2FzcyBmcm9tIFwiLi4vc3R5bGVzL2xvZ2luLm1vZHVsZS5zYXNzXCJcclxuXHJcbmNvbnN0IFNpZ25pbiA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0c3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcblx0XHRcdGNhc2UgXCJuYW1lXCI6XHJcblx0XHRcdFx0c2V0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlIFwicGFzc3dvcmRcIjpcclxuXHRcdFx0XHRzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBpID0ge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cmw6IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2F1dGgvc2lnbmluYCxcclxuXHRcdH1cclxuXHRcdGNvbnN0IHByb21pc2UgPSBheGlvcy5wb3N0KGFwaS51cmwsIGFwaS5kYXRhLCB7XHJcblx0XHRcdGhlYWRlcnM6IGFwaS5oZWFkZXJzLFxyXG5cdFx0XHR3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcblx0XHR9KVxyXG5cdFx0dG9hc3QucHJvbWlzZShwcm9taXNlLCB7XHJcblx0XHRcdGxvYWRpbmc6IFwiTG9nZ2luZyBpbi4uLlwiLFxyXG5cdFx0XHRzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRzZXRDb29raWUobnVsbCwgXCJ1c2VyXCIsIHJlc3BvbnNlLmRhdGEuY29va2llLCB7XHJcblx0XHRcdFx0XHRtYXhBZ2U6IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YS5jb29raWUpLnR0bCxcclxuXHRcdFx0XHRcdHBhdGg6IFwiL1wiLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cm91dGVyLnJlcGxhY2UoXCIvY2FsZW5kYXJzXCIpXHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0aWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XHJcblx0XHRcdFx0XHRpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMubmFtZSlcclxuXHRcdFx0XHRcdFx0Zm9yIChcclxuXHRcdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0aSA8IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzLm5hbWUubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRcdGkrK1xyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0dG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMubmFtZVtpXSlcclxuXHRcdFx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycy5wYXNzd29yZClcclxuXHRcdFx0XHRcdFx0Zm9yIChcclxuXHRcdFx0XHRcdFx0XHRsZXQgaSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0aSA8IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzLnBhc3N3b3JkLmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0XHRpKytcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzLnBhc3N3b3JkW2ldKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcblx0XHRcdH0sXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5TaWduIGluICYjODczOTsgTVlUQzwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9J3ZpZXdwb3J0J1xyXG5cdFx0XHRcdFx0Y29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzYXNzLmxvZ2lufT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzYXNzLmZpZWxkc30+XHJcblx0XHRcdFx0XHRcdDxoMT5XZWxjb21lIHRvIE1ZVEMhPC9oMT5cclxuXHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0TG9nIGluIHRvIGdhaW4gYWNjZXNzIHRvIGFsbCBmZWF0dXJlcyBvZiB0aGVcclxuXHRcdFx0XHRcdFx0XHRhcHBsaWNhdGlvbiwgY3JlYXRlIGFuZCBtYW5hZ2UgZXZlbnRzIGFuZCBjb25uZWN0IHRvXHJcblx0XHRcdFx0XHRcdFx0b3RoZXJzLlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZS5wcmV2ZW50RGVmYXVsdCgpKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFlvdXIgbmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J25hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSduYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRZb3VyIHBhc3N3b3JkXHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ncGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2lnbiBpbjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdEZvcmdvdCB5b3VyIHBhc3N3b3JkP3tcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzZXQtcGFzc3dvcmQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+TGV0JmFwb3M7cyBnZXQgaXQgYmFjayE8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdE5vdCBhIG1lbWJlciB5ZXQ/e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWdudXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGE+U2lnbiB1cCE8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzYXNzLmluZm99PlxyXG5cdFx0XHRcdFx0XHQ8Qm9va2luZyAvPlxyXG5cdFx0XHRcdFx0XHQ8aDQ+V2UmYXBvczt2ZSBtaXNzZWQgeW91ITwvaDQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdENyZWF0ZSBhcyBtYW55IGNhbGVuZGFycyBhcyB5b3Ugd2FudCwgc2hhcmUgdGhlbVxyXG5cdFx0XHRcdFx0XHRcdHdpdGggeW91ciBmcmllbmRzLCBjb3dvcmtlcnMgb3IgZW1wbG95ZWVzISBWYXJpb3VzXHJcblx0XHRcdFx0XHRcdFx0dHlwZXMgb2YgZXZlbnRzIHdpdGggZ3JlYXQgY3VzdG9taXphdGlvbiFcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8VG9hc3RlclxyXG5cdFx0XHRcdHBvc2l0aW9uPSdib3R0b20tY2VudGVyJ1xyXG5cdFx0XHRcdHJldmVyc2VPcmRlcj17ZmFsc2V9XHJcblx0XHRcdFx0dG9hc3RPcHRpb25zPXt7XHJcblx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjEwcHhcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHtcclxuXHRcdFx0XHRcdFx0aWNvblRoZW1lOiB7XHJcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogXCIjN2M2YWVmXCIsXHJcblx0XHRcdFx0XHRcdFx0c2Vjb25kYXJ5OiBcIiNGRkZcIixcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcjogeyBkdXJhdGlvbjogNDAwMCB9LFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcblx0aWYgKCEhbm9va2llcy5nZXQoY3R4KS51c2VyKVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9jYWxlbmRhcnNcIixcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHJcblx0cmV0dXJuIHsgcHJvcHM6IHt9IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzEwQVdZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpblwiOiBcImxvZ2luX2xvZ2luX18yNDQzclwiLFxuXHRcImZpZWxkc1wiOiBcImxvZ2luX2ZpZWxkc19fMW9SQjRcIixcblx0XCJpbmZvXCI6IFwibG9naW5faW5mb19fM2pPY0FcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob3QtdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJMb2dvIiwic2NzcyIsIkhlYWRlciIsImhlYWRlciIsIkJvb2tpbmciLCJDaGVja2luZyIsIkV2ZW50cyIsIm5vb2tpZXMiLCJzZXRDb29raWUiLCJheGlvcyIsInRvYXN0IiwiVG9hc3RlciIsIkhlYWQiLCJzYXNzIiwiU2lnbmluIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJhcGkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQVBJX1VSTCIsInByb21pc2UiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImNvb2tpZSIsIm1heEFnZSIsInR0bCIsImVycm9ycyIsImkiLCJsb2dpbiIsImZpZWxkcyIsImluZm8iLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJkdXJhdGlvbiIsImljb25UaGVtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJ1c2VyIiwicmVkaXJlY3QiLCJwZXJtYW5lbnQiXSwic291cmNlUm9vdCI6IiJ9