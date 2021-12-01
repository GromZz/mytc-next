(() => {
var exports = {};
exports.id = "pages/calendars/[id]";
exports.ids = ["pages/calendars/[id]"];
exports.modules = {

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["d3djy7pad2souj.cloudfront.net"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

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

/***/ "./src/components/Base/Bar.js":
/*!************************************!*\
  !*** ./src/components/Base/Bar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_icons_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons/Brand */ "./src/lib/icons/Brand.jsx");
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var _Dropdowns_AccountDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dropdowns/AccountDropdown */ "./src/components/Dropdowns/AccountDropdown.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Base\\Bar.js";








const Bar = ({
  user
}) => {
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptions),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/calendars",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Brand__WEBPACK_IMPORTED_MODULE_2__.Logo, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 7
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/calendars",
        children: pathname.match(/^\/calendars/) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: `${(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton)} ${(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButtonActive)}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__.Calendar, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__.Calendar, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/shared",
        children: pathname.match(/^\/shared/) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: `${(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton)} ${(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButtonActive)}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__.Shared, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__.Shared, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/hidden",
        children: pathname.match(/^\/hidden/) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: `${(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton)} ${(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButtonActive)}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__.Hidden, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barOptionsButton),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_3__.Hidden, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().barAccount),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Dropdowns_AccountDropdown__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bar);

/***/ }),

/***/ "./src/components/Calendars/BigCalendar.js":
/*!*************************************************!*\
  !*** ./src/components/Calendars/BigCalendar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Events_EventList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Events/EventList */ "./src/components/Events/EventList.js");
/* harmony import */ var _DateSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateSwitcher */ "./src/components/Calendars/DateSwitcher.js");
/* harmony import */ var _DateList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateList */ "./src/components/Calendars/DateList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Calendars\\BigCalendar.js";








const BigCalendar = ({
  calendar,
  accessToken
}) => {
  const dt = new Date();
  const {
    0: month,
    1: setMonth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dt.getMonth() + 1);
  const {
    0: year,
    1: setYear
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dt.getFullYear());
  const {
    0: days,
    1: setDays
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(year, month, 0).getDate());
  const {
    0: selectedDay,
    1: setSelectedDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dt.getDate());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDays(new Date(year, month, 0).getDate());
  }, [month, year]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bigCalendar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DateSwitcher__WEBPACK_IMPORTED_MODULE_2__.default, {
        month: month,
        setMonth: setMonth,
        year: year,
        setYear: setYear
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_DateList__WEBPACK_IMPORTED_MODULE_3__.default, {
        days: days,
        events: calendar.events,
        month: month - 1,
        year: year,
        selectedDay: selectedDay,
        setSelectedDay: setSelectedDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Events_EventList__WEBPACK_IMPORTED_MODULE_1__.default, {
      calendar: calendar,
      selectedDay: selectedDay,
      month: month - 1,
      year: year,
      accessToken: accessToken
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BigCalendar);

/***/ }),

/***/ "./src/components/Calendars/DateList.js":
/*!**********************************************!*\
  !*** ./src/components/Calendars/DateList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Calendars\\DateList.js";




const Heading = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateHeading),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Sun"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Mon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Tue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Wed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Thu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Fri"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      children: "Sat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined);
};

const DateList = ({
  days,
  events,
  month,
  year,
  selectedDay,
  setSelectedDay
}) => {
  const handleClick = value => setSelectedDay(value);

  const today = new Date().getDate();
  const weekday = new Date(1, month, year).getDay();
  let itemList = [];

  for (let skip = 1; skip < weekday; skip++) {
    itemList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateSkipped),
      id: skip,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        type: "button",
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateElementNumber),
        name: "skip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)
    }, skip + "s", false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined));
  }

  for (let i = 1; i < days + 1; i++) {
    let dot = false;

    for (let j = 0; j < events.length; j++) {
      const eD = new Date(events[j].target);

      if (new Date(eD.getFullYear(), eD.getMonth(), eD.getDate()).getTime() === new Date(year, month, i).getTime()) {
        itemList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateElement),
          onClick: e => handleClick(+e.currentTarget.id),
          id: i,
          label: today == i ? "today" : "hello",
          name: selectedDay == i ? "selected" : "hello",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
            type: "button",
            className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateElementNumber),
            value: i
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_0__.Circle, {
            fill: "#6775ee"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, undefined)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, undefined));
        dot = true;
        break;
      }
    }

    if (!dot) itemList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateElement),
      onClick: e => handleClick(+e.currentTarget.id),
      id: i,
      label: today == i ? "today" : "hello",
      name: selectedDay == i ? "selected" : "hello",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        type: "button",
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateElementNumber),
        value: i
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 6
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }, undefined));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateList),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Heading, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateContent),
      children: itemList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateList);

/***/ }),

/***/ "./src/components/Calendars/DateSwitcher.js":
/*!**************************************************!*\
  !*** ./src/components/Calendars/DateSwitcher.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Calendars\\DateSwitcher.js";



const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DateSwitcher = ({
  month,
  setMonth,
  year,
  setYear
}) => {
  const handleChange = value => {
    if (month === 12 && value === 1) {
      setMonth(value);
      setYear(year + 1);
    } else if (month === 1 && value === -1) {
      setMonth(12);
      setYear(year - 1);
    } else setMonth(month + value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateSwitcher),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateMonth),
      children: monthNames[month - 1]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateButtons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateSwitch),
        value: -1,
        onClick: e => handleChange(+e.currentTarget.value),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_0__.Arrow, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_2___default().dateSwitch),
        value: 1,
        onClick: e => handleChange(+e.currentTarget.value),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_0__.Arrow, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateSwitcher);

/***/ }),

/***/ "./src/components/Dropdowns/AccountDropdown.js":
/*!*****************************************************!*\
  !*** ./src/components/Dropdowns/AccountDropdown.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Dropdowns\\AccountDropdown.js";










const AccountDropdown = ({
  user
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const logout = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: user.token
      },
      url: `${"http://127.0.0.1:8000/api"}/auth/signout`
    };
    axios__WEBPACK_IMPORTED_MODULE_5___default().post(api.url, null, {
      headers: api.headers,
      withCredentials: true
    }).then(() => {
      (0,nookies__WEBPACK_IMPORTED_MODULE_0__.destroyCookie)(null, "user", {
        path: "/"
      });
      router.replace("/");
      return "Goodbye!";
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      onClick: () => setToggle(!toggle),
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().barAccountButton),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().barAccountImage),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: user.image,
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().barAccountImage),
          width: 34,
          height: 34,
          alt: "avatarPreview",
          quality: 60,
          objectFit: "cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined), toggle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownBarOptions),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/account",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownBarOption),
          children: "Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/user/${user.name}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownBarOption),
          children: "Public profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownBarOption),
        name: "danger",
        onClick: () => logout(),
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountDropdown);

/***/ }),

/***/ "./src/components/Events/EventCreate.js":
/*!**********************************************!*\
  !*** ./src/components/Events/EventCreate.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Events\\EventCreate.js";





const EventCreate = ({
  calendarId,
  setEvents,
  accessToken,
  year,
  month,
  day
}) => {
  const createEvent = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: accessToken
      },
      data: {
        target: `${year}-${month}-${day}`
      },
      url: `${"http://127.0.0.1:8000/api"}/calendars/${calendarId}/events`
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(api.url, api.data, {
      headers: api.headers
    }).then(res => {
      setEvents(prevState => [...prevState, Object.assign(res.data, {
        title: "New event",
        category: "Reminder"
      })]);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3___default().eventListAdd),
    onClick: () => createEvent(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_1__.PlusCircle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3___default().eventListAddText),
      children: "Create event"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventCreate);

/***/ }),

/***/ "./src/components/Events/EventElement.js":
/*!***********************************************!*\
  !*** ./src/components/Events/EventElement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modals_EventModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modals/EventModal */ "./src/components/Modals/EventModal.js");
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Events\\EventElement.js";






const EventElement = ({
  event,
  accessToken,
  setEvents
}) => {
  const {
    0: eventState,
    1: setEventState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(event);
  const {
    0: modal,
    1: setModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElement),
    onClick: () => setModal(true),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElementWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElementTarget),
        children: [(eventState.target.getHours() < 10 ? "0" : "") + eventState.target.getHours(), ":", (eventState.target.getMinutes() < 10 ? "0" : "") + eventState.target.getMinutes()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElementData),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElementCategory),
          children: eventState.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElementTitle),
          children: eventState.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventElementArrow),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_2__.Arrow, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), modal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Modals_EventModal__WEBPACK_IMPORTED_MODULE_1__.default, {
      event: eventState,
      setEventState: setEventState,
      modal: modal,
      setModal: setModal,
      accessToken: accessToken,
      setEvents: setEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventElement);

/***/ }),

/***/ "./src/components/Events/EventList.js":
/*!********************************************!*\
  !*** ./src/components/Events/EventList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventElement */ "./src/components/Events/EventElement.js");
/* harmony import */ var _EventCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventCreate */ "./src/components/Events/EventCreate.js");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Events\\EventList.js";





const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const EventList = ({
  calendar,
  selectedDay,
  month,
  year,
  accessToken
}) => {
  const {
    0: events,
    1: setEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(calendar.events);
  let selectedEvents = [];

  for (let i = 0; i < events.length; i++) {
    const eD = new Date(events[i].target);
    if (new Date(eD.getFullYear(), eD.getMonth(), eD.getDate()).getTime() === new Date(year, month, selectedDay).getTime()) selectedEvents.push(events[i]);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventList),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventListDate),
      children: [monthNames[month], " ", selectedDay, ", ", year]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventListItems),
      children: [selectedEvents.map(event => {
        event.target = new Date(event.target);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_EventElement__WEBPACK_IMPORTED_MODULE_1__.default, {
          event: event,
          accessToken: accessToken,
          setEvents: setEvents
        }, event.id, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_EventCreate__WEBPACK_IMPORTED_MODULE_2__.default, {
        calendarId: calendar.id,
        setEvents: setEvents,
        accessToken: accessToken,
        year: year,
        month: month + 1,
        day: selectedDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventList);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Base_Bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Base/Bar */ "./src/components/Base/Bar.js");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Layout.js";






const Application = ({
  children,
  user,
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: [title, " \u2223 MYTC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3___default().app),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Base_Bar__WEBPACK_IMPORTED_MODULE_1__.default, {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);

/***/ }),

/***/ "./src/components/Modals/EventModal.js":
/*!*********************************************!*\
  !*** ./src/components/Modals/EventModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/modals.module.scss */ "./src/styles/modals.module.scss");
/* harmony import */ var _styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Modals\\EventModal.js";






const EventModal = ({
  event,
  setEventState,
  modal,
  setModal,
  accessToken,
  setEvents
}) => {
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(event.title);
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(event.content || "");
  const {
    0: category,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(event.category);
  const {
    0: date,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`${event.target.getFullYear()}-${event.target.getMonth() + 1}-${event.target.getDate()}`);
  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`${(event.target.getHours() < 10 ? "0" : "") + event.target.getHours()}:${(event.target.getMinutes() < 10 ? "0" : "") + event.target.getMinutes()}`);

  const handleChange = target => {
    switch (target.name) {
      case "title":
        setTitle(target.value);
        break;

      case "content":
        setContent(target.value);
        break;

      case "category":
        setCategory(target.value);
        break;

      case "date":
        setDate(target.value);
        break;

      case "time":
        setTime(target.value);
        break;
    }
  };

  const handleReset = () => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${"http://127.0.0.1:8000/api"}/calendars/${event.calendar_id}/events/${event.id}`, {
      headers: {
        Authorization: accessToken
      }
    }).finally(() => {
      setEvents(prevState => prevState.filter(item => item.id !== event.id));
      setModal(false);
    });
  };

  const handleSumbit = () => {
    const dt = new Date(`${date} ${time}:00`);
    const offset = dt.getTimezoneOffset() * 60 * 1000;
    const utcTime = new Date(dt.setTime(dt.getTime() + offset));
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: accessToken
      },
      data: {
        title,
        content,
        category,
        target: `${utcTime.getFullYear()}-${utcTime.getMonth() + 1}-${utcTime.getDate()} ${(utcTime.getHours() < 10 ? "0" : "") + utcTime.getHours()}:${(utcTime.getMinutes() < 10 ? "0" : "") + utcTime.getMinutes()}:00`
      },
      url: `${"http://127.0.0.1:8000/api"}/calendars/${event.calendar_id}/events/${event.id}`
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch(api.url, api.data, {
      headers: api.headers
    }).then(res => {
      res.data.target = new Date(res.data.target);
      setEventState(res.data);
      setModal(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    isOpen: modal,
    contentLabel: "Event modal",
    className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModal),
    ariaHideApp: false,
    onRequestClose: e => {
      e.stopPropagation();
      setModal(false);
    },
    shouldCloseOnOverlayClick: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      onSubmit: e => handleSumbit(e.preventDefault()),
      onReset: e => handleReset(e.preventDefault()),
      className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalForm),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
        type: "text",
        value: title,
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalInput),
        name: "title",
        onChange: e => handleChange(e.target)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", {
        type: "text",
        value: content,
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalTextarea),
        placeholder: "Add some description ...",
        name: "content",
        onChange: e => handleChange(e.target)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
        value: category,
        name: "category",
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalSelect),
        onChange: e => handleChange(e.target),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          children: "Arrangement"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          children: "Reminder"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
          children: "Task"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalDateTimeBox),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "date",
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalDate),
          value: date,
          min: `${event.target.getFullYear()}-${event.target.getMonth() + 1}-${event.target.getDate()}`,
          max: "9999-12-31",
          name: "date",
          onChange: e => handleChange(e.target)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "time",
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalTime),
          value: time,
          name: "time",
          onChange: e => handleChange(e.target)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalBox),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "submit",
          value: "Apply",
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalApply)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "reset",
          value: "Delete event",
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eventModalDelete)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventModal);

/***/ }),

/***/ "./src/lib/helpers/addHolidays.js":
/*!****************************************!*\
  !*** ./src/lib/helpers/addHolidays.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHolidays)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function addHolidays(calendar_id, token) {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.db-ip.com/v2/free/self`);
  const api = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token
    },
    data: {
      country: response.data.countryCode,
      year: new Date().getFullYear() - 1
    },
    url: `${"http://127.0.0.1:8000/api"}/calendars/${calendar_id}/holidays`
  };
  await axios__WEBPACK_IMPORTED_MODULE_0___default().post(api.url, api.data, {
    headers: api.headers
  });
}

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

/***/ "./src/lib/icons/Misc.jsx":
/*!********************************!*\
  !*** ./src/lib/icons/Misc.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": () => (/* binding */ Arrow),
/* harmony export */   "Calendar": () => (/* binding */ Calendar),
/* harmony export */   "Connect": () => (/* binding */ Connect),
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "Shared": () => (/* binding */ Shared),
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "Party": () => (/* binding */ Party),
/* harmony export */   "Lock": () => (/* binding */ Lock),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "Plus": () => (/* binding */ Plus),
/* harmony export */   "PlusCircle": () => (/* binding */ PlusCircle),
/* harmony export */   "Dots": () => (/* binding */ Dots),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Hidden": () => (/* binding */ Hidden),
/* harmony export */   "Remove": () => (/* binding */ Remove)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\lib\\icons\\Misc.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Arrow = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M17.091 24a4.095 4.095 0 01-2.59-.92L4.34 14.66a3.397 3.397 0 01-1.277-2.659 3.41 3.41 0 011.277-2.66L14.501.922a4.176 4.176 0 014.403-.52 3.51 3.51 0 011.512 1.281 3.53 3.53 0 01.58 1.899V20.42a3.53 3.53 0 01-.58 1.899 3.509 3.509 0 01-1.512 1.281c-.569.26-1.187.396-1.813.4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};
const Calendar = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 60C0 26.863 26.863 0 60 0h392c33.137 0 60 26.863 60 60v53.179H0V60zm0 96.295h512V452c0 33.137-26.863 60-60 60H60c-33.137 0-60-26.863-60-60V156.295zm134.737 145.516c20.836 0 37.726-16.891 37.726-37.727 0-20.835-16.89-37.726-37.726-37.726S97.01 243.249 97.01 264.084c0 20.836 16.891 37.727 37.727 37.727zm158.989-37.727c0 20.836-16.89 37.727-37.726 37.727s-37.726-16.891-37.726-37.727c0-20.835 16.89-37.726 37.726-37.726s37.726 16.891 37.726 37.726zm83.537 37.727c20.836 0 37.727-16.891 37.727-37.727 0-20.835-16.891-37.726-37.727-37.726-20.835 0-37.726 16.891-37.726 37.726 0 20.836 16.891 37.727 37.726 37.727zm-83.537 91.621c0 20.835-16.89 37.726-37.726 37.726s-37.726-16.891-37.726-37.726c0-20.836 16.89-37.727 37.726-37.727s37.726 16.891 37.726 37.727zm-158.989 37.726c20.836 0 37.726-16.891 37.726-37.726 0-20.836-16.89-37.727-37.726-37.727S97.01 372.596 97.01 393.432c0 20.835 16.891 37.726 37.727 37.726z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};
const Connect = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M256 150.5c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75-33.647 75-75 75zM10.026 429c-20.669-35.815-8.35-81.768 27.466-102.451 36.551-21.085 82.083-7.806 102.451 27.451 20.722 35.87 8.44 81.717-27.451 102.451-35.96 20.737-81.757 8.396-102.466-27.451zm389.482 27.451C363.641 435.73 351.323 389.89 372.057 354c20.367-35.256 65.898-48.537 102.451-27.451 35.815 20.684 48.135 66.636 27.466 102.451-20.683 35.802-66.455 48.218-102.466 27.451zM61.293 275.587l-29.941-1.641c3.896-70.957 41.807-136.641 101.396-175.723l16.465 25.078c-51.665 33.883-84.522 90.821-87.92 152.286zM450.707 275.587c-3.398-61.465-36.255-118.403-87.92-152.285l16.465-25.078c59.59 39.082 97.5 104.766 101.396 175.723zM256 511.5c-35.684 0-69.8-8.115-101.426-24.097l13.535-26.777c54.785 27.715 120.996 27.715 175.781 0l13.535 26.777C325.8 503.385 291.684 511.5 256 511.5z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};
const Settings = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M509.931 223.915c-3.349-25.835-30.251-43.52-56-33.877-9.643 3.648-21.248-1.771-25.6-11.499a189.583 189.583 0 00-19.008-33.045c-6.613-9.195-5.355-21.227 2.859-28.011 9.813-8.064 15.296-19.989 15.04-32.683-.256-12.907-6.336-24.789-16.683-32.64-17.024-12.885-35.584-23.616-55.189-31.872-5.291-2.219-10.837-3.349-16.491-3.349-20.437 0-37.675 14.528-41.003 34.539-1.749 10.517-11.712 17.664-22.933 16.448a181.135 181.135 0 00-37.867 0c-11.179 1.216-21.184-5.931-22.933-16.448-3.328-20.011-20.565-34.539-41.003-34.539-5.653 0-11.2 1.131-16.469 3.349A255.192 255.192 0 00101.44 52.16c-10.325 7.851-16.405 19.733-16.661 32.619-.256 12.715 5.227 24.619 15.04 32.725 8.235 6.763 9.451 18.795 2.859 27.968a189.687 189.687 0 00-19.029 33.045c-4.352 9.728-15.104 15.445-25.835 11.413-4.693-1.749-9.579-2.645-14.528-2.645-20.821 0-38.528 15.744-41.237 36.629A255.675 255.675 0 000 256c0 10.688.704 21.504 2.069 32.085 3.328 25.813 30.208 43.499 56 33.877 9.621-3.648 21.248 1.771 25.6 11.499a189.583 189.583 0 0019.008 33.045c6.613 9.195 5.355 21.227-2.859 28.011-9.813 8.064-15.296 19.989-15.04 32.683.256 12.907 6.336 24.789 16.683 32.64 17.024 12.885 35.584 23.616 55.189 31.872 5.291 2.219 10.837 3.349 16.491 3.349 20.437 0 37.675-14.528 41.003-34.539 1.749-10.517 11.733-17.557 22.933-16.448a181.135 181.135 0 0037.867 0c11.221-1.131 21.184 5.931 22.933 16.448 3.328 20.011 20.565 34.517 41.003 34.539 5.653 0 11.2-1.131 16.469-3.349a255.04 255.04 0 0055.189-31.872c10.325-7.851 16.427-19.733 16.683-32.619.256-12.715-5.227-24.619-15.04-32.725-8.235-6.763-9.451-18.795-2.859-27.968a189.687 189.687 0 0019.029-33.045c4.352-9.749 15.125-15.445 25.835-11.413a41.006 41.006 0 0014.528 2.667c20.821 0 38.528-15.744 41.237-36.629C511.296 277.397 512 266.624 512 256c0-10.624-.704-21.397-2.069-32.085zM256 341.333c-47.061 0-85.333-38.272-85.333-85.333s38.272-85.333 85.333-85.333 85.333 38.272 85.333 85.333-38.272 85.333-85.333 85.333z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};
const Shared = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      clipPath: "url(#prefix__clip0)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M512 54.857v402.286C512 487.44 487.44 512 457.143 512H54.857C24.56 512 0 487.44 0 457.143V54.857C0 24.56 24.56 0 54.857 0h402.286C487.44 0 512 24.56 512 54.857zM347.429 301.714c-16.643 0-31.798 6.356-43.181 16.767l-77.666-46.6a64.399 64.399 0 000-31.763l77.666-46.6c11.383 10.412 26.538 16.768 43.181 16.768 35.346 0 64-28.654 64-64 0-35.347-28.654-64-64-64-35.347 0-64 28.653-64 64 0 5.482.691 10.803 1.988 15.882l-77.666 46.6C196.369 198.355 181.214 192 164.571 192c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64 16.643 0 31.798-6.355 43.181-16.767l77.666 46.6a64.06 64.06 0 00-1.988 15.882c0 35.347 28.653 64 64 64 35.346 0 64-28.653 64-64-.001-35.347-28.655-64.001-64.001-64.001z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("clipPath", {
        id: "prefix__clip0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          fill: "#fff",
          d: "M0 0h512v512H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined);
};
const Event = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M316.047 396.427c.205-.073.407-.155.605-.246 1.821-.832 4.642-1.916 6.157-2.498a72.862 72.862 0 001.26-.494v.001c11.205-4.649 18.364-13.063 20.703-24.332 2.288-11.024-.172-24.197-5.845-38.338 35.583-1.886 59.966 3.316 90.599 13.231 5.448 1.761 10.306 2.47 14.6 2.469 11.213 0 18.571-4.837 22.478-8.416 8.744-8.011 12.447-20.534 9.665-32.684-3.08-13.451-13.291-23.699-28.013-28.115-26.02-7.807-79.255-23.777-137.714 4.902-5.727-7.787-11.882-15.482-18.241-22.918l103.39-85.864c.177-.147.347-.302.51-.464 3.354-3.353 5.203-7.821 5.203-12.581 0-4.761-1.849-9.229-5.205-12.584l-32.159-32.113c-6.936-6.934-18.226-6.935-25.164 0a7.726 7.726 0 00-.465.509l-31.548 37.931a7.5 7.5 0 0011.533 9.592l31.256-37.58c1.086-.911 2.769-.858 3.787.161l32.159 32.113c.701.701.807 1.537.807 1.972a2.8 2.8 0 01-.645 1.797L282.357 247.75a460.661 460.661 0 00-8.691-9.247 6.353 6.353 0 00-.184-.183 461.862 461.862 0 00-9.747-9.141l31.852-38.295a7.5 7.5 0 10-11.531-9.592l-31.582 37.969c-6.928-5.9-14.077-11.617-21.312-16.976 32.605-57.434 19.2-111.934 12.642-138.589-3.664-14.914-13.382-25.621-26.664-29.376-12.011-3.395-24.72-.324-33.166 8.014-5.211 5.144-13.153 16.753-7.793 36.694 8.621 32.161 12.57 57.712 8.145 95.269-15.253-6.521-29.491-9.488-41.27-7.042-11.269 2.339-19.683 9.494-24.332 20.69-.095.232-.269.673-.494 1.257-.582 1.515-1.666 4.334-2.499 6.153a7.768 7.768 0 00-.247.606l-9.499 26.687c-.01.027-.023.053-.033.08L89.93 267.734c-.02.057-.033.115-.052.173l-23.065 64.802c-.022.057-.05.11-.07.167l-6.995 19.683-31.542 88.619c-5.795 16.324-4.06 30.031 4.738 37.759 4.73 5.356 11.677 8.087 20.085 8.087 5.365 0 11.326-1.113 17.679-3.366l88.483-31.46 19.871-7.054c.057-.02.109-.048.165-.069l64.82-23.047c.063-.021.128-.036.191-.059l45.027-16.014c.029-.01.056-.024.085-.035zm127.898-105.055c12.881 3.864 16.62 12.37 17.702 17.096 1.557 6.796-.476 13.969-5.176 18.276-5.177 4.743-13.11 5.715-22.33 2.734-33.256-10.764-60.986-16.487-102-13.561-3.715-7.097-8.063-14.327-12.874-21.557 52.441-24.658 100.853-10.135 124.678-2.988zM190.667 75.141c-2.512-9.345-1.147-17.204 3.844-22.131 4.544-4.485 11.825-6.154 18.548-4.255 4.667 1.319 12.974 5.479 16.179 18.523 6.034 24.523 18.31 74.444-10.396 126.298-6.787-4.561-13.58-8.721-20.27-12.343 5.723-42.764 1.6-70.636-7.905-106.092zM129.51 201.289c.994-2.211 2.108-5.111 2.72-6.702.149-.388.262-.683.325-.839a.977.977 0 00.02-.048c2.774-6.681 7.073-10.416 13.528-11.756 9.837-2.041 23.895 1.597 40.35 9.842.37.23.765.426 1.178.59 8.993 4.595 18.679 10.542 28.776 17.682.269.226.551.442.858.633.033.021.069.034.103.054 14.659 10.448 30.149 23.364 45.604 38.277a458.043 458.043 0 0112.807 13.816c.02.025.037.052.057.077.061.074.13.138.194.209 9.725 10.952 18.369 21.785 25.75 32.191.235.402.5.776.795 1.117 7.423 10.562 13.519 20.661 18.119 29.974.177.475.398.925.662 1.346 7.46 15.47 10.675 28.681 8.729 38.06-1.339 6.453-5.077 10.751-11.763 13.525l-.048.021c-.157.063-.452.176-.842.325-1.592.611-4.492 1.725-6.705 2.718l-18.824 6.693c-9.934-31.827-37.65-66.505-54.174-85.231a7.5 7.5 0 10-11.247 9.925c26.273 29.775 44.606 58.58 51.281 80.334l-32.215 11.454c-12.317-24.289-33.215-52.243-59.505-79.486a8.69 8.69 0 00-.192-.192c-27.257-26.275-55.223-47.16-79.525-59.471l11.455-32.185c22.705 7.007 53.621 27.014 84.385 54.812a7.5 7.5 0 0010.056-11.13c-32.442-29.314-64.444-49.933-89.41-57.815zm50.023 227.756c-11.793-17.294-26.756-35.473-43.576-52.899a6.84 6.84 0 00-.191-.19c-17.436-16.812-35.624-31.765-52.924-43.55l18.407-51.715c22.396 11.692 48.933 31.671 74.094 55.91 24.249 25.144 44.238 51.664 55.937 74.046zm-25.066 8.912l-26.597 9.442c-8.983-11.417-18.884-22.735-29.487-33.707a10.573 10.573 0 00-.184-.183c-10.976-10.597-22.3-20.492-33.721-29.469l9.361-26.34 3.798-10.67c15.6 10.925 31.903 24.483 47.622 39.629 15.15 15.705 28.713 31.997 39.644 47.587zM65.69 469.522c-10.203 3.618-18.299 3.357-21.658-.697a7.515 7.515 0 00-1.006-1.004c-4.051-3.337-4.306-11.422-.686-21.621l16.807-47.221c9.655 7.79 19.224 16.24 28.541 25.231 8.992 9.309 17.445 18.87 25.237 28.516zM387.658 63.847l18.932 13.374c.072.164.23.598.412 1.58l4.043 21.888c.355 2.336 1.222 7.516 6.148 9.521a8.603 8.603 0 003.268.648c3.595 0 6.561-2.242 8.052-3.368l17.54-13.507c.374-.243 1.387-.506 1.808-.49l22.011 2.929c2.325.292 7.77.977 11.101-3.27 3.284-4.186 1.45-9.138.613-11.327l-7.477-20.994c-.329-.936-.403-1.376-.42-1.541l9.701-21.097c1.067-2.139 3.371-6.92.559-11.378-2.861-4.534-8.233-4.436-10.539-4.391l-23.218.453L433.53 6.728c-1.517-1.463-5.55-5.348-10.92-3.915-5.371 1.434-6.928 6.811-7.513 8.835l-.01.035-6.336 22.278-20.375 11.231c-2.002 1.109-6.69 3.705-6.901 9.062-.207 5.277 4.191 8.274 6.183 9.593zm28.986-17.11c4.481-2.488 5.594-5.33 6.419-8.266l4.682-16.462 11.799 11.436.441.432c2.148 2.116 4.493 4.014 9.549 4.014l.223-.001 17.421-.34-7.171 15.594c-2.254 4.947-1.207 9.372-.035 12.697l5.284 14.837-15.358-2.044c-4.24-.596-9.576.823-12.961 3.442l-12.323 9.488-2.86-15.487c-.591-3.195-1.892-7.81-6.381-11.015l-14.01-9.898z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M281.649 75.074l15.892 9.202a13.646 13.646 0 006.79 1.801c4.448 0 8.933-2.13 12.194-6.097l29.323-35.296c2.4-2.885 3.38-6.732 2.687-10.555-.771-4.256-3.485-8.084-7.263-10.244L312.04 6.999c-3.776-2.171-8.465-2.581-12.542-1.099-3.639 1.323-6.46 4.091-7.733 7.566L275.84 56.458c-2.771 7.402-.374 15.062 5.809 18.616zm8.248-13.382l15.306-41.32 27.936 16.138-28.175 33.916a3.235 3.235 0 01-.523.514l-14.731-8.53c.024-.185.078-.428.187-.718zM508.469 140.77c-3.222-3.822-8.152-6.103-13.189-6.103h-44.268c-5.031 0-9.962 2.285-13.188 6.112-2.864 3.398-4.045 7.579-3.326 11.77l10.146 59.297c1.577 9.18 8.214 15.347 16.514 15.347h24.004c8.301 0 14.937-6.167 16.516-15.356l10.114-59.285c.723-4.199-.458-8.384-3.323-11.782zm-21.575 68.537c-.238 1.389-.969 2.888-1.731 2.888h-24.004c-.852 0-1.525-1.689-1.73-2.883l-10.083-58.929c.293-.307.985-.716 1.667-.716h44.268c.686 0 1.378.405 1.669.707zM42.252 237.154c1.358 0 2.738-.178 4.118-.543l23.162-6.218c8.053-2.133 12.879-9.814 12.009-19.109l-5.585-59.913c-.399-4.245-2.635-7.979-6.295-10.517-4.106-2.846-9.452-3.762-14.282-2.453l-42.742 11.454c-4.867 1.294-9.043 4.768-11.171 9.294-1.895 4.029-1.953 8.383-.167 12.249l25.149 54.655c3.226 6.988 9.263 11.101 15.804 11.101zM16.493 164.35l.021-.006 42.766-11.46c.653-.18 1.419.037 1.775.254l5.55 59.541c.13 1.395-.182 3.02-.938 3.22l-23.162 6.218c-.828.223-1.928-1.243-2.435-2.344l-24.995-54.32c.204-.366.764-.93 1.418-1.103zM378.625 452.556l-45.212-32.014c-7.247-5.165-15.908-4.842-21.555.802l-15.613 15.605c-5.651 5.647-5.974 14.31-.817 21.536l32.036 45.194c2.365 3.351 6.01 5.398 10.263 5.764.448.038.896.057 1.346.057 4.316 0 8.606-1.757 11.691-4.84l28.828-28.813c3.405-3.403 5.194-8.274 4.787-13.031-.363-4.256-2.411-7.903-5.754-10.26zm-9.635 12.68l-28.828 28.814c-.226.225-.569.363-.838.42l-31.672-44.679c-.797-1.117-.892-2.012-.803-2.233l15.637-15.64a.535.535 0 01.133-.013c.338 0 1.134.17 2.107.864l44.682 31.638c-.058.268-.196.607-.418.829zM48.647 64.259c.002.019.049.47-.497 2.011l-8.126 22.792c-.874 2.271-2.785 7.4.569 11.676 3.405 4.342 8.859 3.645 11.521 3.305l23.785-3.18c.609-.059 1.998.316 2.449.63l19.106 14.754c1.628 1.226 4.618 3.478 8.251 3.478a8.81 8.81 0 003.33-.658c5.027-2.033 5.939-7.426 6.32-9.827l4.36-23.737c.308-1.623.562-2.008.617-2.057l20.704-14.639c2.215-1.477 6.639-4.496 6.409-9.884-.233-5.451-5.107-8.129-7.177-9.266l-22.332-12.321-6.97-24.428c-.601-2.121-2.195-7.723-7.679-9.199-5.49-1.479-9.689 2.58-11.272 4.112L74.174 25.094l-.426.418-25.466-.486c-2.385-.055-7.969-.184-10.896 4.447-2.883 4.561-.544 9.375.661 11.771zm25.335-23.74c5.377.11 7.763-1.816 10.117-4.15l14.07-13.632 5.388 18.882c.891 3.168 2.007 6.001 6.686 8.605l17.464 9.635-16.011 11.321c-4.63 3.245-6.022 7.861-6.726 11.566l-3.274 17.824-14.21-10.972c-3.022-2.31-7.526-3.731-11.551-3.731-.676 0-1.339.04-1.979.123l-17.759 2.374 6.086-17.07c1.236-3.489 2.351-8.155-.023-13.327l-8.209-17.829zM501.788 392.571l-24.812-6.135-13.055-21.803c-1.122-1.886-4.1-6.895-9.789-6.91h-.024c-5.675 0-8.68 4.995-9.813 6.877a.091.091 0 01-.008.013l-12.772 21.326-.295.497-24.829 6.139c-2.309.577-7.714 1.927-9.329 7.135-1.595 5.139 1.9 9.19 3.669 11.19l16.224 19.524c.017.044.161.478.033 2.088l-1.92 24.14c-.268 2.428-.793 7.851 3.523 11.123 4.394 3.331 9.5 1.272 12.034.249l22.186-9.249c.559-.21 1.989-.215 2.541-.013l22.312 9.289c1.445.587 3.817 1.55 6.425 1.55 1.795 0 3.701-.456 5.495-1.805 4.34-3.263 3.826-8.713 3.574-11.127l-1.951-24.154c-.127-1.613.017-2.047.044-2.093l16.241-19.521c1.765-1.996 5.255-6.038 3.659-11.182-1.617-5.212-7.033-6.566-9.363-7.148zm-22.062 28.252c-3.635 4.358-3.765 9.17-3.471 12.888l1.463 18.115-16.593-6.909c-4.178-1.745-9.812-1.749-14.049-.001l-16.577 6.911 1.442-18.127c.294-3.704.166-8.516-3.461-12.866l-12.589-15.157 19.391-4.794c5.232-1.281 7.055-3.761 8.741-6.632l10.074-16.826 9.725 16.237.351.593c1.687 2.869 3.509 5.348 8.721 6.624l19.427 4.804z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};
const Party = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 512.048 512.048",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M156.468 174.854a10.002 10.002 0 00-16.088 2.749L3.27 463.621a8.733 8.733 0 00-.212.473c-5.78 13.859-3.249 28.115 6.77 38.134 6.474 6.474 14.714 9.821 23.475 9.821 4.798 0 9.754-1.005 14.659-3.051.16-.066.318-.138.474-.212l286.018-137.109a10 10 0 002.748-16.089zm-4.158 24.127l101.17 101.17c-39.145-1.61-82.104-16.675-128.126-44.94zM40.046 490.627c-3.701 1.497-10.507 3.027-16.077-2.543-5.567-5.567-4.038-12.374-2.542-16.075L48.421 415.7c19.318 16.183 38.851 30.566 58.337 42.948zm196.001-93.957c-11.992-2.977-24.402-7.084-36.954-12.257-5.107-2.107-10.952.328-13.057 5.435-2.104 5.105.329 10.951 5.435 13.056a305.404 305.404 0 0017.686 6.657l-80.954 38.807c-23.586-14.073-47.372-31.295-70.85-51.301l27.979-58.366a567.082 567.082 0 0025.792 19.229 9.952 9.952 0 005.732 1.813 9.989 9.989 0 008.197-4.261c3.171-4.521 2.075-10.758-2.447-13.929-9.456-6.629-18.983-13.798-28.404-21.356l22.461-46.854c51.325 31.204 99.573 46.954 143.817 46.954 4.269 0 8.505-.152 12.701-.446l39.893 39.893zM194.213 116.55c1.922 1.746 4.959 4.504 6.146 6.173-1.382 1.552-4.185 4.097-6.153 5.885-6.413 5.835-10.168 13.819-10.577 22.48-.408 8.661 2.582 16.962 8.417 23.374s13.819 10.169 22.48 10.576c.523.025 1.043.037 1.563.037 8.092 0 15.786-2.97 21.809-8.451 5.255-4.773 11.212-10.183 16.728-18.315 7.416-10.934 11.021-22.622 11.021-35.733 0-28.848-14.745-42.238-27.755-54.054-1.921-1.745-4.958-4.503-6.145-6.171 1.379-1.549 4.176-4.09 6.152-5.885 13.237-12.046 14.206-32.616 2.159-45.854C234.223 4.199 226.239.443 217.578.036c-8.644-.4-16.954 2.579-23.365 8.409-5.255 4.771-11.211 10.178-16.733 18.319-7.417 10.933-11.022 22.622-11.022 35.734.001 28.85 14.746 42.24 27.755 54.052zm21.255 48.511a12.377 12.377 0 01-8.629-4.06 12.382 12.382 0 01-3.231-8.973 12.374 12.374 0 014.052-8.623c2.496-2.267 4.901-4.454 6.898-6.591l9.505 9.602c4.272 4.316 4.334 11.249.188 15.569a12.341 12.341 0 01-8.783 3.076zm30.18-42.485c0 5.614-.919 10.726-2.832 15.607a31.136 31.136 0 00-4.538-5.836l-25.729-25.99c-.015-.015-.032-.028-.048-.043-1.577-1.598-3.237-3.11-4.843-4.569-11.844-10.755-21.2-19.251-21.2-39.246 0-5.614.919-10.726 2.832-15.607a31.136 31.136 0 004.538 5.836l25.728 25.99c.017.017.036.031.053.048 1.576 1.596 3.234 3.107 4.839 4.564 11.845 10.755 21.2 19.252 21.2 39.246zM216.04 20a12.375 12.375 0 019.229 4.074c4.625 5.082 4.253 12.979-.837 17.61-2.49 2.262-4.89 4.444-6.882 6.576l-9.506-9.603c-4.273-4.316-4.334-11.25-.186-15.57 2.284-2 5.158-3.087 8.182-3.087zM386.723 139.475c5.849 5.849 13.531 8.772 21.214 8.772 7.682 0 15.364-2.924 21.213-8.772l14.143-14.143c11.697-11.697 11.697-30.729 0-42.427L429.15 68.763c-11.697-11.696-30.729-11.698-42.427 0L372.58 82.906c-5.65 5.65-8.763 13.185-8.763 21.214 0 8.028 3.112 15.562 8.763 21.213zm0-42.427l14.143-14.142c1.873-1.873 4.384-2.905 7.071-2.905s5.197 1.032 7.07 2.905l14.143 14.142c1.873 1.873 2.905 4.384 2.905 7.071s-1.032 5.197-2.905 7.07l-14.143 14.143c-1.873 1.873-4.384 2.905-7.07 2.905-2.688 0-5.198-1.032-7.071-2.905l-14.143-14.143c-1.873-1.873-2.905-4.384-2.905-7.07s1.031-5.198 2.905-7.071zM501.444 271.996c-6.413-5.837-14.712-8.817-23.376-8.418-8.661.408-16.645 4.164-22.487 10.585-1.781 1.961-4.325 4.763-5.877 6.145-1.668-1.187-4.427-4.225-6.174-6.148-11.814-13.008-25.204-27.751-54.051-27.751-13.112 0-24.801 3.604-35.734 11.021-8.135 5.519-13.545 11.476-18.311 16.725-.123.135-.237.275-.357.412l-.007.008c-5.592 6.354-8.454 14.48-8.054 22.956.408 8.661 4.164 16.645 10.576 22.479 13.237 12.048 33.807 11.077 45.871-2.176 1.778-1.959 4.319-4.756 5.869-6.136 1.668 1.186 4.426 4.223 6.171 6.145 11.813 13.01 25.204 27.755 54.054 27.755 13.112 0 24.801-3.605 35.734-11.021 8.131-5.516 13.54-11.471 18.312-16.725 12.046-13.24 11.078-33.81-2.159-45.856zm-31.063 15.62a12.38 12.38 0 018.629-4.061c3.327-.142 6.511.992 8.973 3.231 5.021 4.57 5.434 12.329.981 17.416-4.32 4.144-11.252 4.078-15.565-.191l-9.602-9.506c2.135-1.995 4.321-4.398 6.584-6.889zm-101.724 16.771a12.382 12.382 0 01-8.63 4.061c-3.338.163-6.511-.991-8.973-3.231a12.38 12.38 0 01-4.061-8.628 12.381 12.381 0 013.083-8.793c4.323-4.138 11.249-4.072 15.56.195l9.603 9.506c-2.133 1.995-4.317 4.397-6.582 6.89zm41.653.009c-1.461-1.609-2.976-3.271-4.577-4.851l-.035-.039-25.99-25.729a31.171 31.171 0 00-5.835-4.538c4.881-1.913 9.994-2.832 15.607-2.832 19.993 0 28.489 9.354 39.247 21.199 1.456 1.603 2.965 3.26 4.561 4.835.018.018.033.038.051.056l25.99 25.729a31.183 31.183 0 005.836 4.539c-4.881 1.913-9.993 2.832-15.607 2.832-19.997-.001-28.492-9.356-39.248-21.201zM474.227 47.829c5.522 0 10-4.478 10-10s-4.478-10-10-10h-.008c-5.522 0-9.996 4.478-9.996 10s4.482 10 10.004 10zM337.608 40.61c5.522 0 10-4.478 10-10s-4.478-10-10-10h-.007c-5.522 0-9.997 4.478-9.997 10s4.482 10 10.004 10zM306.319 131.295c5.522 0 10-4.478 10-10s-4.478-10-10-10h-.008c-5.522 0-9.996 4.478-9.996 10s4.482 10 10.004 10zM298.686 223.373c5.522 0 10-4.478 10-10s-4.478-10-10-10h-.008c-5.522 0-9.996 4.478-9.996 10s4.482 10 10.004 10zM471.446 174.447v.008c0 5.522 4.478 9.996 10 9.996s10-4.481 10-10.004-4.478-10-10-10-10 4.477-10 10zM380.76 205.737v.007c0 5.522 4.478 9.997 10 9.997s10-4.481 10-10.004-4.478-10-10-10-10 4.477-10 10z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M154.876 363.842h-.008c-5.523 0-9.996 4.478-9.996 10s4.481 10 10.004 10 10-4.478 10-10-4.477-10-10-10z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined);
};
const Lock = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M18.75 9H18V6c0-3.309-2.691-6-6-6S6 2.691 6 6v3h-.75A2.253 2.253 0 003 11.25v10.5C3 22.991 4.01 24 5.25 24h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5C21 10.009 19.99 9 18.75 9zM8 6c0-2.206 1.794-4 4-4s4 1.794 4 4v3H8zm5 10.722V19a1 1 0 11-2 0v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, undefined);
};
const Link = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 512.092 512.092",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M312.453 199.601a116.167 116.167 0 00-20.053-16.128 119.472 119.472 0 00-64.427-18.859 118.952 118.952 0 00-84.48 34.987L34.949 308.23a119.466 119.466 0 00-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0084.395-34.816l89.6-89.6a8.534 8.534 0 00-6.059-14.592h-3.413a143.626 143.626 0 01-54.613-10.581 8.533 8.533 0 00-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 009.899-21.675 34.137 34.137 0 00-9.9-26.282z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 00-1.792 9.387 8.532 8.532 0 008.021 5.205h3.157a143.357 143.357 0 0154.528 10.667 8.533 8.533 0 009.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 00-9.899 21.845 34.137 34.137 0 009.899 26.283 118.447 118.447 0 0034.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 005.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0055.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, undefined);
};
const Time = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "1 0 512 511",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M512 255.5l-.004 1c-.187 48.668-14.078 95.938-40.2 136.777-3.816 5.965-10.273 9.227-16.866 9.227a19.924 19.924 0 01-10.758-3.156c-9.305-5.953-12.024-18.32-6.07-27.625C460.188 337.195 471.906 297.187 472 256c-.27-118.875-96.617-215.5-215-215.5-75.64 0-145.82 40.125-184.684 103.93l45.715.07c11.047.016 19.985 8.984 19.969 20.031-.016 11.031-8.969 19.969-20 19.969h-.031l-58.516-.09c-15.941.035-30.781-6.066-41.933-17.215C6.156 155.832-.066 140.578 0 124.242V66.5c0-11.047 8.953-20 20-20s20 8.953 20 20v54.105c19.79-31.57 46.29-58.543 77.844-79.015C159.28 14.707 207.398.5 257 .5c68.34 0 132.465 26.645 180.563 75.023C485.327 123.57 511.743 187.453 512 255.5zM380.543 432.703C344.215 458.082 301.496 471.5 257 471.5c-.168 0-.332.02-.5.023-.168-.003-.332-.023-.5-.023-3.035 0-6.121-.066-9.172-.191-11.004-.461-20.351 8.117-20.812 19.152-.457 11.035 8.117 20.355 19.156 20.812 3.598.149 7.242.227 10.828.227.168 0 .332-.02.5-.023.168.003.332.023.5.023 52.73 0 103.371-15.906 146.453-46.004 9.055-6.328 11.27-18.797 4.942-27.851-6.325-9.055-18.793-11.266-27.852-4.942zm-283.129-30.55c-7.5-8.106-20.156-8.602-28.262-1.098-8.109 7.5-8.601 20.152-1.097 28.261a259.781 259.781 0 0014.144 14.149 19.931 19.931 0 0013.578 5.316 19.953 19.953 0 0014.688-6.418c7.5-8.105 7.008-20.761-1.098-28.261a216.897 216.897 0 01-11.953-11.95zM53.437 330.68c-3.847-10.356-15.355-15.637-25.71-11.79-10.356 3.844-15.633 15.356-11.79 25.712a255.1 255.1 0 007.7 18.476c3.386 7.3 10.61 11.594 18.16 11.594a19.94 19.94 0 008.398-1.863c10.024-4.645 14.38-16.536 9.73-26.559a215.832 215.832 0 01-6.488-15.57zm127.418 127.394a214.68 214.68 0 01-15.582-6.492c-10.023-4.648-21.914-.293-26.558 9.73-4.649 10.02-.293 21.91 9.726 26.56a254.232 254.232 0 0018.5 7.702 19.949 19.949 0 006.954 1.258c8.125 0 15.761-4.988 18.753-13.05 3.84-10.356-1.437-21.864-11.793-25.708zM21.04 285.48c11.04-.457 19.613-9.777 19.152-20.812A223.87 223.87 0 0140 255.5c0-11.047-8.953-20-20-20s-20 8.953-20 20c0 3.602.078 7.246.227 10.832C.672 277.086 9.53 285.5 20.19 285.5c.282 0 .567-.008.848-.02zm158.492-18.761c6.297-5.125 13.094-9.559 20.239-13.293C188.098 240.059 181 222.598 181 203.5c0-41.906 34.094-76 76-76s76 34.094 76 76c0 19.098-7.098 36.559-18.773 49.926a120.404 120.404 0 0120.242 13.293c21.308 17.34 36.129 41.554 41.73 68.176 2.305 10.94-.418 22.199-7.465 30.882-7.074 8.723-17.593 13.723-28.859 13.723h-165.75c-11.266 0-21.785-5-28.86-13.723-7.046-8.683-9.769-19.941-7.468-30.882 5.601-26.622 20.422-50.836 41.734-68.176zM221 203.5c0 19.852 16.148 36 36 36s36-16.148 36-36-16.148-36-36-36-36 16.148-36 36zm-43.203 136h158.406c-9.121-34.984-41.555-60-78.523-60h-1.36c-36.968 0-69.402 25.016-78.523 60zm0 0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, undefined);
};
const Plus = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, undefined);
};
const PlusCircle = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M12 8.333V12 8.333zM12 12v3.667V12zm0 0h3.667H12zm0 0H8.333 12zm11 0a11 11 0 11-22 0 11 11 0 0122 0z",
      stroke: props.fill,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, undefined);
};
const Dots = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 384"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 192,
      cy: 42.667,
      r: 42.667
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 192,
      cy: 192,
      r: 42.667
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: 192,
      cy: 341.333,
      r: 42.667
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 5
  }, undefined);
};
const Circle = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 128 128",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M64 128c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 5
  }, undefined);
};
const Hidden = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M15.086 20.468l-3.4-3.402A5.03 5.03 0 016.98 12.36l-4.62-4.62A12.551 12.551 0 000 12.046c1.602 5.102 6.37 8.804 12 8.804 1.065 0 2.099-.133 3.086-.381z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.086 2.353a1.258 1.258 0 00-1.778 1.778l17.606 17.607a1.257 1.257 0 001.778-1.779l-1.852-1.852A12.594 12.594 0 0024 12.045c-1.602-5.102-6.369-8.803-12-8.803a12.523 12.523 0 00-5.674 1.35L4.087 2.354h-.001zM9.445 7.71l1.904 1.906a2.519 2.519 0 013.08 3.08l1.905 1.905a5.03 5.03 0 00-6.89-6.89z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }, undefined);
};
const Remove = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 384 384",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M233.132 219.436a41.138 41.138 0 0141.141 41.141v13.714C274.273 328.35 223.259 384 137.137 384 51.015 384 0 328.35 0 274.291v-13.714a41.14 41.14 0 0141.141-41.141h191.991zM137.137 41.158a75.424 75.424 0 0153.333 128.759A75.424 75.424 0 1183.803 63.25a75.426 75.426 0 0153.334-22.092zm131.212-38.7l1.92 1.564 45.145 45.172L360.56 4.023a13.73 13.73 0 1119.418 19.418l-45.173 45.146 45.173 45.145a13.716 13.716 0 011.564 17.499l-1.564 1.92a13.71 13.71 0 01-17.498 1.563l-1.92-1.563-45.146-45.173-45.145 45.173a13.731 13.731 0 01-19.419-19.419l45.173-45.145L250.85 23.44a13.712 13.712 0 01-1.563-17.498l1.563-1.92a13.715 13.715 0 0115.415-2.743l2.084 1.18z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/pages/calendars/[id].js":
/*!*************************************!*\
  !*** ./src/pages/calendars/[id].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Calendars_BigCalendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Calendars/BigCalendar */ "./src/components/Calendars/BigCalendar.js");
/* harmony import */ var _lib_helpers_addHolidays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/helpers/addHolidays */ "./src/lib/helpers/addHolidays.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\pages\\calendars\\[id].js";









const Calendar = ({
  user,
  calendar
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (calendar.main && calendar.events.length === 0) (0,_lib_helpers_addHolidays__WEBPACK_IMPORTED_MODULE_6__.default)(calendar.id, user.token).then(() => location.reload());
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    user: user,
    title: calendar.title,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().pageTitle),
      children: calendar.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().calendarPage),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Calendars_BigCalendar__WEBPACK_IMPORTED_MODULE_5__.default, {
        calendar: calendar,
        accessToken: user.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};

const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async function getServerSideProps(ctx) {
  const cookie = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(ctx).user;
  if (!!!cookie) return {
    redirect: {
      permanent: false,
      destination: "/signin"
    }
  };
  const user = JSON.parse(cookie);
  const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"http://127.0.0.1:8000/api"}/calendars/${ctx.params.id}`, {
    headers: {
      Accept: "application/json",
      Authorization: user.token
    }
  });
  return {
    props: {
      user: user,
      calendar: response.data
    }
  };
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(Calendar));

/***/ }),

/***/ "./src/styles/app.module.scss":
/*!************************************!*\
  !*** ./src/styles/app.module.scss ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"app": "app_app__3GZZ9",
	"bar": "app_bar__3Zno5",
	"barOptions": "app_barOptions__3WLd-",
	"barOptionsButton": "app_barOptionsButton__20Xvc",
	"barOptionsButtonActive": "app_barOptionsButtonActive__3EDOx",
	"barAccount": "app_barAccount__3_awH",
	"barAccountButton": "app_barAccountButton__2rR8-",
	"barAccountImage": "app_barAccountImage__xkzVS",
	"dropdownBarOptions": "app_dropdownBarOptions__1LoWi",
	"dropdownBarOption": "app_dropdownBarOption__1RfpK",
	"pageTitle": "app_pageTitle__3ABUq",
	"calendarsPage": "app_calendarsPage__284Yz",
	"calendarElement": "app_calendarElement__oDCKy",
	"fadeIn": "app_fadeIn__1-xV7",
	"calendarData": "app_calendarData__1hlGj",
	"calendarTitle": "app_calendarTitle__3ephq",
	"calendarButtonMore": "app_calendarButtonMore__ksBD8",
	"calendarSpan": "app_calendarSpan__2Ly_A",
	"calendarOpenButton": "app_calendarOpenButton__3gcs7",
	"calendarCreateBlock": "app_calendarCreateBlock__1jqzw",
	"dropdownOptions": "app_dropdownOptions__2S2xo",
	"dropdownOption": "app_dropdownOption__3DFzL",
	"userPage": "app_userPage__Jt8-k",
	"userBanner": "app_userBanner__1FOeE",
	"userBannerImageBlock": "app_userBannerImageBlock__2-cMi",
	"userBannerImage": "app_userBannerImage__sMvdi",
	"userBannerDataBlock": "app_userBannerDataBlock__26NXh",
	"userBannerDataName": "app_userBannerDataName__AnPQa",
	"userBannerDataStatus": "app_userBannerDataStatus__5TLRm",
	"userBannerDataStat": "app_userBannerDataStat__1azWo",
	"userBannerDataStatTitle": "app_userBannerDataStatTitle__33OXo",
	"userBannerDataStatContent": "app_userBannerDataStatContent__1ZYbz",
	"userBannerOwnerButton": "app_userBannerOwnerButton__1cV8C",
	"userSharedCalendars": "app_userSharedCalendars___j-1N",
	"accountPage": "app_accountPage__Zzg1h",
	"accountPageMain": "app_accountPageMain__3d1By",
	"accountImageBlock": "app_accountImageBlock__3fQZC",
	"accountDataBlock": "app_accountDataBlock__WYC0y",
	"calendarPage": "app_calendarPage__3pOoi",
	"bigCalendar": "app_bigCalendar__8jqhq",
	"dateSwitcher": "app_dateSwitcher__3-biv",
	"dateMonth": "app_dateMonth__tjF3h",
	"dateButtons": "app_dateButtons__1DIc0",
	"dateSwitch": "app_dateSwitch__qJf2H",
	"dateList": "app_dateList__17Ekw",
	"dateHeading": "app_dateHeading__3NjzU",
	"dateContent": "app_dateContent__3pG_j",
	"dateElement": "app_dateElement__1jBRG",
	"dateElementNumber": "app_dateElementNumber__3xX4F",
	"dateSkipped": "app_dateSkipped__1i4tt",
	"eventList": "app_eventList__3laRM",
	"eventListDate": "app_eventListDate__z3iz4",
	"eventListItems": "app_eventListItems__2o2xr",
	"eventElement": "app_eventElement__hDAMX",
	"eventElementWrapper": "app_eventElementWrapper__iWOWv",
	"eventElementTarget": "app_eventElementTarget__1Dvsi",
	"eventElementData": "app_eventElementData__3XLiG",
	"eventElementCategory": "app_eventElementCategory__3K9rA",
	"eventElementTitle": "app_eventElementTitle__19wXK",
	"eventElementDuration": "app_eventElementDuration__2cq-A",
	"eventElementArrow": "app_eventElementArrow__A2d8H",
	"eventListAdd": "app_eventListAdd__2X00l",
	"eventListAddText": "app_eventListAddText__3U5fz"
};


/***/ }),

/***/ "./src/styles/modals.module.scss":
/*!***************************************!*\
  !*** ./src/styles/modals.module.scss ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"sharedModal": "modals_sharedModal__h8-0e",
	"sharedModalForm": "modals_sharedModalForm__2bedo",
	"sharedModalFormUser": "modals_sharedModalFormUser__35WUX",
	"sharedModalFormInput": "modals_sharedModalFormInput__s1twe",
	"sharedModalFormUserAvatar": "modals_sharedModalFormUserAvatar__3s_WZ",
	"sharedModalFormHint": "modals_sharedModalFormHint__2RL_L",
	"sharedModalFormButton": "modals_sharedModalFormButton__5ie51",
	"calendarModal": "modals_calendarModal__3ypUo",
	"calendarModalForm": "modals_calendarModalForm__3fp55",
	"calendarModalLabel": "modals_calendarModalLabel__261aQ",
	"calendarModalInput": "modals_calendarModalInput__3-stN",
	"calendarModalApply": "modals_calendarModalApply__lUqdq",
	"eventModal": "modals_eventModal__2Sx0R",
	"eventModalForm": "modals_eventModalForm__2-4ne",
	"eventModalInput": "modals_eventModalInput__2wiCM",
	"eventModalTextarea": "modals_eventModalTextarea___thAv",
	"eventModalSelect": "modals_eventModalSelect__seYgR",
	"eventModalDateTimeBox": "modals_eventModalDateTimeBox__3rKaJ",
	"eventModalDate": "modals_eventModalDate__3n9l3",
	"eventModalTime": "modals_eventModalTime__3J7U-",
	"eventModalBox": "modals_eventModalBox__qkr98",
	"eventModalApply": "modals_eventModalApply__3OJ2M",
	"eventModalDelete": "modals_eventModalDelete__3PZEq"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


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

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/calendars/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxrSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9CYXNlL0Jhci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXJzL0JpZ0NhbGVuZGFyLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhcnMvRGF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFycy9EYXRlU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3ducy9BY2NvdW50RHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0V2ZW50cy9FdmVudENyZWF0ZS5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2NvbXBvbmVudHMvRXZlbnRzL0V2ZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2NvbXBvbmVudHMvRXZlbnRzL0V2ZW50TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9Nb2RhbHMvRXZlbnRNb2RhbC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2xpYi9oZWxwZXJzL2FkZEhvbGlkYXlzLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvbGliL2ljb25zL0JyYW5kLmpzeCIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2xpYi9pY29ucy9NaXNjLmpzeCIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL3BhZ2VzL2NhbGVuZGFycy9baWRdLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvc3R5bGVzL2FwcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL3N0eWxlcy9tb2RhbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3QtbW9kYWxcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9pZ25vcmVkfEM6XFxVc2Vyc1xc0JLQu9Cw0LRcXERlc2t0b3BcXG15dGNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IExvZ28gfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL0JyYW5kXCJcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIEhpZGRlbiwgU2hhcmVkIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29ucy9NaXNjXCJcclxuaW1wb3J0IEFjY291bnREcm9wZG93biBmcm9tIFwiLi4vRHJvcGRvd25zL0FjY291bnREcm9wZG93blwiXHJcblxyXG5jb25zdCBCYXIgPSAoeyB1c2VyIH0pID0+IHtcclxuXHRjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyT3B0aW9uc30+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nL2NhbGVuZGFycyc+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhck9wdGlvbnNCdXR0b259PlxyXG5cdFx0XHRcdFx0XHQ8TG9nbyAvPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy9jYWxlbmRhcnMnPlxyXG5cdFx0XHRcdFx0e3BhdGhuYW1lLm1hdGNoKC9eXFwvY2FsZW5kYXJzLykgPyAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJPcHRpb25zQnV0dG9ufSAke3N0eWxlcy5iYXJPcHRpb25zQnV0dG9uQWN0aXZlfWB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXIgLz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhck9wdGlvbnNCdXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdDxDYWxlbmRhciAvPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaGFyZWQnPlxyXG5cdFx0XHRcdFx0e3BhdGhuYW1lLm1hdGNoKC9eXFwvc2hhcmVkLykgPyAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJPcHRpb25zQnV0dG9ufSAke3N0eWxlcy5iYXJPcHRpb25zQnV0dG9uQWN0aXZlfWB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8U2hhcmVkIC8+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYXJPcHRpb25zQnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHQ8U2hhcmVkIC8+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nL2hpZGRlbic+XHJcblx0XHRcdFx0XHR7cGF0aG5hbWUubWF0Y2goL15cXC9oaWRkZW4vKSA/IChcclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhck9wdGlvbnNCdXR0b259ICR7c3R5bGVzLmJhck9wdGlvbnNCdXR0b25BY3RpdmV9YH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxIaWRkZW4gLz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhck9wdGlvbnNCdXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdDxIaWRkZW4gLz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQWNjb3VudH0+XHJcblx0XHRcdFx0PEFjY291bnREcm9wZG93biB1c2VyPXt1c2VyfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSBcIi4uL0V2ZW50cy9FdmVudExpc3RcIlxyXG5pbXBvcnQgRGF0ZVN3aXRjaGVyIGZyb20gXCIuL0RhdGVTd2l0Y2hlclwiXHJcbmltcG9ydCBEYXRlTGlzdCBmcm9tIFwiLi9EYXRlTGlzdFwiXHJcblxyXG5jb25zdCBCaWdDYWxlbmRhciA9ICh7IGNhbGVuZGFyLCBhY2Nlc3NUb2tlbiB9KSA9PiB7XHJcblx0Y29uc3QgZHQgPSBuZXcgRGF0ZSgpXHJcblx0Y29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZShkdC5nZXRNb250aCgpICsgMSlcclxuXHRjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShkdC5nZXRGdWxsWWVhcigpKVxyXG5cdGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCkpXHJcblx0Y29uc3QgW3NlbGVjdGVkRGF5LCBzZXRTZWxlY3RlZERheV0gPSB1c2VTdGF0ZShkdC5nZXREYXRlKCkpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXREYXlzKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCkpXHJcblx0fSwgW21vbnRoLCB5ZWFyXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnQ2FsZW5kYXJ9PlxyXG5cdFx0XHRcdDxEYXRlU3dpdGNoZXJcclxuXHRcdFx0XHRcdG1vbnRoPXttb250aH1cclxuXHRcdFx0XHRcdHNldE1vbnRoPXtzZXRNb250aH1cclxuXHRcdFx0XHRcdHllYXI9e3llYXJ9XHJcblx0XHRcdFx0XHRzZXRZZWFyPXtzZXRZZWFyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PERhdGVMaXN0XHJcblx0XHRcdFx0XHRkYXlzPXtkYXlzfVxyXG5cdFx0XHRcdFx0ZXZlbnRzPXtjYWxlbmRhci5ldmVudHN9XHJcblx0XHRcdFx0XHRtb250aD17bW9udGggLSAxfVxyXG5cdFx0XHRcdFx0eWVhcj17eWVhcn1cclxuXHRcdFx0XHRcdHNlbGVjdGVkRGF5PXtzZWxlY3RlZERheX1cclxuXHRcdFx0XHRcdHNldFNlbGVjdGVkRGF5PXtzZXRTZWxlY3RlZERheX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEV2ZW50TGlzdFxyXG5cdFx0XHRcdGNhbGVuZGFyPXtjYWxlbmRhcn1cclxuXHRcdFx0XHRzZWxlY3RlZERheT17c2VsZWN0ZWREYXl9XHJcblx0XHRcdFx0bW9udGg9e21vbnRoIC0gMX1cclxuXHRcdFx0XHR5ZWFyPXt5ZWFyfVxyXG5cdFx0XHRcdGFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn1cclxuXHRcdFx0Lz5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmlnQ2FsZW5kYXJcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gXCIuLi8uLi9saWIvaWNvbnMvTWlzY1wiXHJcblxyXG5jb25zdCBIZWFkaW5nID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVIZWFkaW5nfT5cclxuXHRcdFx0PHNwYW4+U3VuPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj5Nb248L3NwYW4+XHJcblx0XHRcdDxzcGFuPlR1ZTwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+V2VkPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj5UaHU8L3NwYW4+XHJcblx0XHRcdDxzcGFuPkZyaTwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+U2F0PC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBEYXRlTGlzdCA9ICh7XHJcblx0ZGF5cyxcclxuXHRldmVudHMsXHJcblx0bW9udGgsXHJcblx0eWVhcixcclxuXHRzZWxlY3RlZERheSxcclxuXHRzZXRTZWxlY3RlZERheSxcclxufSkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHZhbHVlKSA9PiBzZXRTZWxlY3RlZERheSh2YWx1ZSlcclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpXHJcblx0Y29uc3Qgd2Vla2RheSA9IG5ldyBEYXRlKDEsIG1vbnRoLCB5ZWFyKS5nZXREYXkoKVxyXG5cdGxldCBpdGVtTGlzdCA9IFtdXHJcblx0Zm9yIChsZXQgc2tpcCA9IDE7IHNraXAgPCB3ZWVrZGF5OyBza2lwKyspIHtcclxuXHRcdGl0ZW1MaXN0LnB1c2goXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZVNraXBwZWR9IGtleT17c2tpcCArIFwic1wifSBpZD17c2tpcH0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kYXRlRWxlbWVudE51bWJlcn1cclxuXHRcdFx0XHRcdG5hbWU9J3NraXAnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgZGF5cyArIDE7IGkrKykge1xyXG5cdFx0bGV0IGRvdCA9IGZhbHNlXHJcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRjb25zdCBlRCA9IG5ldyBEYXRlKGV2ZW50c1tqXS50YXJnZXQpXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRuZXcgRGF0ZShcclxuXHRcdFx0XHRcdGVELmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdFx0XHRlRC5nZXRNb250aCgpLFxyXG5cdFx0XHRcdFx0ZUQuZ2V0RGF0ZSgpXHJcblx0XHRcdFx0KS5nZXRUaW1lKCkgPT09IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBpKS5nZXRUaW1lKClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0aXRlbUxpc3QucHVzaChcclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGF0ZUVsZW1lbnR9XHJcblx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKCtlLmN1cnJlbnRUYXJnZXQuaWQpfVxyXG5cdFx0XHRcdFx0XHRpZD17aX1cclxuXHRcdFx0XHRcdFx0bGFiZWw9e3RvZGF5ID09IGkgPyBcInRvZGF5XCIgOiBcImhlbGxvXCJ9XHJcblx0XHRcdFx0XHRcdG5hbWU9e3NlbGVjdGVkRGF5ID09IGkgPyBcInNlbGVjdGVkXCIgOiBcImhlbGxvXCJ9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kYXRlRWxlbWVudE51bWJlcn1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PENpcmNsZSBmaWxsPScjNjc3NWVlJyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KVxyXG5cdFx0XHRcdGRvdCA9IHRydWVcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIWRvdClcclxuXHRcdFx0aXRlbUxpc3QucHVzaChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kYXRlRWxlbWVudH1cclxuXHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljaygrZS5jdXJyZW50VGFyZ2V0LmlkKX1cclxuXHRcdFx0XHRcdGlkPXtpfVxyXG5cdFx0XHRcdFx0bGFiZWw9e3RvZGF5ID09IGkgPyBcInRvZGF5XCIgOiBcImhlbGxvXCJ9XHJcblx0XHRcdFx0XHRuYW1lPXtzZWxlY3RlZERheSA9PSBpID8gXCJzZWxlY3RlZFwiIDogXCJoZWxsb1wifVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmRhdGVFbGVtZW50TnVtYmVyfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVMaXN0fT5cclxuXHRcdFx0PEhlYWRpbmcgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlQ29udGVudH0+e2l0ZW1MaXN0fTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlTGlzdFxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYXBwLm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL01pc2NcIlxyXG5cclxuY29uc3QgbW9udGhOYW1lcyA9IFtcclxuXHRcIkphbnVhcnlcIixcclxuXHRcIkZlYnJ1YXJ5XCIsXHJcblx0XCJNYXJjaFwiLFxyXG5cdFwiQXByaWxcIixcclxuXHRcIk1heVwiLFxyXG5cdFwiSnVuZVwiLFxyXG5cdFwiSnVseVwiLFxyXG5cdFwiQXVndXN0XCIsXHJcblx0XCJTZXB0ZW1iZXJcIixcclxuXHRcIk9jdG9iZXJcIixcclxuXHRcIk5vdmVtYmVyXCIsXHJcblx0XCJEZWNlbWJlclwiLFxyXG5dXHJcblxyXG5jb25zdCBEYXRlU3dpdGNoZXIgPSAoeyBtb250aCwgc2V0TW9udGgsIHllYXIsIHNldFllYXIgfSkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG5cdFx0aWYgKG1vbnRoID09PSAxMiAmJiB2YWx1ZSA9PT0gMSkge1xyXG5cdFx0XHRzZXRNb250aCh2YWx1ZSlcclxuXHRcdFx0c2V0WWVhcih5ZWFyICsgMSlcclxuXHRcdH0gZWxzZSBpZiAobW9udGggPT09IDEgJiYgdmFsdWUgPT09IC0xKSB7XHJcblx0XHRcdHNldE1vbnRoKDEyKVxyXG5cdFx0XHRzZXRZZWFyKHllYXIgLSAxKVxyXG5cdFx0fSBlbHNlIHNldE1vbnRoKG1vbnRoICsgdmFsdWUpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlU3dpdGNoZXJ9PlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlTW9udGh9Pnttb250aE5hbWVzW21vbnRoIC0gMV19PC9zcGFuPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVCdXR0b25zfT5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kYXRlU3dpdGNofVxyXG5cdFx0XHRcdFx0dmFsdWU9ey0xfVxyXG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IGhhbmRsZUNoYW5nZSgrZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8QXJyb3cgLz5cclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kYXRlU3dpdGNofVxyXG5cdFx0XHRcdFx0dmFsdWU9ezF9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKCtlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxBcnJvdyAvPlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVN3aXRjaGVyXHJcbiIsImltcG9ydCB7IGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBBY2NvdW50RHJvcGRvd24gPSAoeyB1c2VyIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBpID0ge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiB1c2VyLnRva2VuLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cmw6IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2F1dGgvc2lnbm91dGAsXHJcblx0XHR9XHJcblx0XHRheGlvc1xyXG5cdFx0XHQucG9zdChhcGkudXJsLCBudWxsLCB7XHJcblx0XHRcdFx0aGVhZGVyczogYXBpLmhlYWRlcnMsXHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0ZGVzdHJveUNvb2tpZShudWxsLCBcInVzZXJcIiwgeyBwYXRoOiBcIi9cIiB9KVxyXG5cdFx0XHRcdHJvdXRlci5yZXBsYWNlKFwiL1wiKVxyXG5cdFx0XHRcdHJldHVybiBcIkdvb2RieWUhXCJcclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhckFjY291bnRCdXR0b259XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhckFjY291bnRJbWFnZX0+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0c3JjPXt1c2VyLmltYWdlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5iYXJBY2NvdW50SW1hZ2V9XHJcblx0XHRcdFx0XHRcdHdpZHRoPXszNH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXszNH1cclxuXHRcdFx0XHRcdFx0YWx0PSdhdmF0YXJQcmV2aWV3J1xyXG5cdFx0XHRcdFx0XHRxdWFsaXR5PXs2MH1cclxuXHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb3ZlcidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHR7dG9nZ2xlICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duQmFyT3B0aW9uc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvYWNjb3VudCcgcGFzc0hyZWY+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25CYXJPcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdEFjY291bnRcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3VzZXIvJHt1c2VyLm5hbWV9YH0+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25CYXJPcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFB1YmxpYyBwcm9maWxlXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bkJhck9wdGlvbn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0TG9nb3V0XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudERyb3Bkb3duXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29ucy9NaXNjXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBFdmVudENyZWF0ZSA9ICh7XHJcblx0Y2FsZW5kYXJJZCxcclxuXHRzZXRFdmVudHMsXHJcblx0YWNjZXNzVG9rZW4sXHJcblx0eWVhcixcclxuXHRtb250aCxcclxuXHRkYXksXHJcbn0pID0+IHtcclxuXHRjb25zdCBjcmVhdGVFdmVudCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGFwaSA9IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0YXJnZXQ6IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWAsXHJcblx0XHRcdH0sXHJcblx0XHRcdHVybDogYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2FsZW5kYXJzLyR7Y2FsZW5kYXJJZH0vZXZlbnRzYCxcclxuXHRcdH1cclxuXHRcdGF4aW9zLnBvc3QoYXBpLnVybCwgYXBpLmRhdGEsIHsgaGVhZGVyczogYXBpLmhlYWRlcnMgfSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHNldEV2ZW50cygocHJldlN0YXRlKSA9PiBbXHJcblx0XHRcdFx0Li4ucHJldlN0YXRlLFxyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24ocmVzLmRhdGEsIHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIk5ldyBldmVudFwiLFxyXG5cdFx0XHRcdFx0Y2F0ZWdvcnk6IFwiUmVtaW5kZXJcIixcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RBZGR9IG9uQ2xpY2s9eygpID0+IGNyZWF0ZUV2ZW50KCl9PlxyXG5cdFx0XHQ8UGx1c0NpcmNsZSAvPlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudExpc3RBZGRUZXh0fT5DcmVhdGUgZXZlbnQ8L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q3JlYXRlXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEV2ZW50TW9kYWwgZnJvbSBcIi4uL01vZGFscy9FdmVudE1vZGFsXCJcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL01pc2NcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYXBwLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IEV2ZW50RWxlbWVudCA9ICh7IGV2ZW50LCBhY2Nlc3NUb2tlbiwgc2V0RXZlbnRzIH0pID0+IHtcclxuXHRjb25zdCBbZXZlbnRTdGF0ZSwgc2V0RXZlbnRTdGF0ZV0gPSB1c2VTdGF0ZShldmVudClcclxuXHRjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudEVsZW1lbnR9IG9uQ2xpY2s9eygpID0+IHNldE1vZGFsKHRydWUpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudEVsZW1lbnRXcmFwcGVyfT5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudEVsZW1lbnRUYXJnZXR9PlxyXG5cdFx0XHRcdFx0eyhldmVudFN0YXRlLnRhcmdldC5nZXRIb3VycygpIDwgMTAgPyBcIjBcIiA6IFwiXCIpICtcclxuXHRcdFx0XHRcdFx0ZXZlbnRTdGF0ZS50YXJnZXQuZ2V0SG91cnMoKX1cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdHsoZXZlbnRTdGF0ZS50YXJnZXQuZ2V0TWludXRlcygpIDwgMTAgPyBcIjBcIiA6IFwiXCIpICtcclxuXHRcdFx0XHRcdFx0ZXZlbnRTdGF0ZS50YXJnZXQuZ2V0TWludXRlcygpfVxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50RWxlbWVudERhdGF9PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRFbGVtZW50Q2F0ZWdvcnl9PlxyXG5cdFx0XHRcdFx0XHR7ZXZlbnRTdGF0ZS5jYXRlZ29yeX1cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50RWxlbWVudFRpdGxlfT5cclxuXHRcdFx0XHRcdFx0e2V2ZW50U3RhdGUudGl0bGV9XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50RWxlbWVudEFycm93fT5cclxuXHRcdFx0XHQ8QXJyb3cgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHttb2RhbCAmJiAoXHJcblx0XHRcdFx0PEV2ZW50TW9kYWxcclxuXHRcdFx0XHRcdGV2ZW50PXtldmVudFN0YXRlfVxyXG5cdFx0XHRcdFx0c2V0RXZlbnRTdGF0ZT17c2V0RXZlbnRTdGF0ZX1cclxuXHRcdFx0XHRcdG1vZGFsPXttb2RhbH1cclxuXHRcdFx0XHRcdHNldE1vZGFsPXtzZXRNb2RhbH1cclxuXHRcdFx0XHRcdGFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn1cclxuXHRcdFx0XHRcdHNldEV2ZW50cz17c2V0RXZlbnRzfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RWxlbWVudFxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBFdmVudEVsZW1lbnQgZnJvbSBcIi4vRXZlbnRFbGVtZW50XCJcclxuaW1wb3J0IEV2ZW50Q3JlYXRlIGZyb20gXCIuL0V2ZW50Q3JlYXRlXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBtb250aE5hbWVzID0gW1xyXG5cdFwiSmFudWFyeVwiLFxyXG5cdFwiRmVicnVhcnlcIixcclxuXHRcIk1hcmNoXCIsXHJcblx0XCJBcHJpbFwiLFxyXG5cdFwiTWF5XCIsXHJcblx0XCJKdW5lXCIsXHJcblx0XCJKdWx5XCIsXHJcblx0XCJBdWd1c3RcIixcclxuXHRcIlNlcHRlbWJlclwiLFxyXG5cdFwiT2N0b2JlclwiLFxyXG5cdFwiTm92ZW1iZXJcIixcclxuXHRcIkRlY2VtYmVyXCIsXHJcbl1cclxuXHJcbmNvbnN0IEV2ZW50TGlzdCA9ICh7IGNhbGVuZGFyLCBzZWxlY3RlZERheSwgbW9udGgsIHllYXIsIGFjY2Vzc1Rva2VuIH0pID0+IHtcclxuXHRjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoY2FsZW5kYXIuZXZlbnRzKVxyXG5cclxuXHRsZXQgc2VsZWN0ZWRFdmVudHMgPSBbXVxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBlRCA9IG5ldyBEYXRlKGV2ZW50c1tpXS50YXJnZXQpXHJcblx0XHRpZiAoXHJcblx0XHRcdG5ldyBEYXRlKFxyXG5cdFx0XHRcdGVELmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdFx0ZUQuZ2V0TW9udGgoKSxcclxuXHRcdFx0XHRlRC5nZXREYXRlKClcclxuXHRcdFx0KS5nZXRUaW1lKCkgPT09IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBzZWxlY3RlZERheSkuZ2V0VGltZSgpXHJcblx0XHQpXHJcblx0XHRcdHNlbGVjdGVkRXZlbnRzLnB1c2goZXZlbnRzW2ldKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0fT5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50TGlzdERhdGV9PlxyXG5cdFx0XHRcdHttb250aE5hbWVzW21vbnRoXX0ge3NlbGVjdGVkRGF5fSwge3llYXJ9XHJcblx0XHRcdDwvaDE+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRMaXN0SXRlbXN9PlxyXG5cdFx0XHRcdHtzZWxlY3RlZEV2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRldmVudC50YXJnZXQgPSBuZXcgRGF0ZShldmVudC50YXJnZXQpXHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8RXZlbnRFbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtldmVudC5pZH1cclxuXHRcdFx0XHRcdFx0XHRldmVudD17ZXZlbnR9XHJcblx0XHRcdFx0XHRcdFx0YWNjZXNzVG9rZW49e2FjY2Vzc1Rva2VufVxyXG5cdFx0XHRcdFx0XHRcdHNldEV2ZW50cz17c2V0RXZlbnRzfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDxFdmVudENyZWF0ZVxyXG5cdFx0XHRcdFx0Y2FsZW5kYXJJZD17Y2FsZW5kYXIuaWR9XHJcblx0XHRcdFx0XHRzZXRFdmVudHM9e3NldEV2ZW50c31cclxuXHRcdFx0XHRcdGFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn1cclxuXHRcdFx0XHRcdHllYXI9e3llYXJ9XHJcblx0XHRcdFx0XHRtb250aD17bW9udGggKyAxfVxyXG5cdFx0XHRcdFx0ZGF5PXtzZWxlY3RlZERheX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhc2UvQmFyXCJcclxuaW1wb3J0IHNjc3MgZnJvbSBcIi4uL3N0eWxlcy9hcHAubW9kdWxlLnNjc3NcIlxyXG5cclxuY29uc3QgQXBwbGljYXRpb24gPSAoeyBjaGlsZHJlbiwgdXNlciwgdGl0bGUgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3RpdGxlfSAmIzg3Mzk7IE1ZVEM8L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRuYW1lPSd2aWV3cG9ydCdcclxuXHRcdFx0XHRcdGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c2Nzcy5hcHB9PlxyXG5cdFx0XHRcdDxCYXIgdXNlcj17dXNlcn0gLz5cclxuXHRcdFx0XHQ8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb25cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL21vZGFscy5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBFdmVudE1vZGFsID0gKHtcclxuXHRldmVudCxcclxuXHRzZXRFdmVudFN0YXRlLFxyXG5cdG1vZGFsLFxyXG5cdHNldE1vZGFsLFxyXG5cdGFjY2Vzc1Rva2VuLFxyXG5cdHNldEV2ZW50cyxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoZXZlbnQudGl0bGUpXHJcblx0Y29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoZXZlbnQuY29udGVudCB8fCBcIlwiKVxyXG5cdGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoZXZlbnQuY2F0ZWdvcnkpXHJcblx0Y29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoXHJcblx0XHRgJHtldmVudC50YXJnZXQuZ2V0RnVsbFllYXIoKX0tJHtcclxuXHRcdFx0ZXZlbnQudGFyZ2V0LmdldE1vbnRoKCkgKyAxXHJcblx0XHR9LSR7ZXZlbnQudGFyZ2V0LmdldERhdGUoKX1gXHJcblx0KVxyXG5cdGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKFxyXG5cdFx0YCR7XHJcblx0XHRcdChldmVudC50YXJnZXQuZ2V0SG91cnMoKSA8IDEwID8gXCIwXCIgOiBcIlwiKSArIGV2ZW50LnRhcmdldC5nZXRIb3VycygpXHJcblx0XHR9OiR7XHJcblx0XHRcdChldmVudC50YXJnZXQuZ2V0TWludXRlcygpIDwgMTAgPyBcIjBcIiA6IFwiXCIpICtcclxuXHRcdFx0ZXZlbnQudGFyZ2V0LmdldE1pbnV0ZXMoKVxyXG5cdFx0fWBcclxuXHQpXHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh0YXJnZXQpID0+IHtcclxuXHRcdHN3aXRjaCAodGFyZ2V0Lm5hbWUpIHtcclxuXHRcdFx0Y2FzZSBcInRpdGxlXCI6XHJcblx0XHRcdFx0c2V0VGl0bGUodGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgXCJjb250ZW50XCI6XHJcblx0XHRcdFx0c2V0Q29udGVudCh0YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBcImNhdGVnb3J5XCI6XHJcblx0XHRcdFx0c2V0Q2F0ZWdvcnkodGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgXCJkYXRlXCI6XHJcblx0XHRcdFx0c2V0RGF0ZSh0YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSBcInRpbWVcIjpcclxuXHRcdFx0XHRzZXRUaW1lKHRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRheGlvc1xyXG5cdFx0XHQuZGVsZXRlKFxyXG5cdFx0XHRcdGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2NhbGVuZGFycy8ke2V2ZW50LmNhbGVuZGFyX2lkfS9ldmVudHMvJHtldmVudC5pZH1gLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0c2V0RXZlbnRzKChwcmV2U3RhdGUpID0+XHJcblx0XHRcdFx0XHRwcmV2U3RhdGUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBldmVudC5pZClcclxuXHRcdFx0XHQpXHJcblx0XHRcdFx0c2V0TW9kYWwoZmFsc2UpXHJcblx0XHRcdH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVTdW1iaXQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBkdCA9IG5ldyBEYXRlKGAke2RhdGV9ICR7dGltZX06MDBgKVxyXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gZHQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMFxyXG5cdFx0Y29uc3QgdXRjVGltZSA9IG5ldyBEYXRlKGR0LnNldFRpbWUoZHQuZ2V0VGltZSgpICsgb2Zmc2V0KSlcclxuXHRcdGNvbnN0IGFwaSA9IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0aXRsZSxcclxuXHRcdFx0XHRjb250ZW50LFxyXG5cdFx0XHRcdGNhdGVnb3J5LFxyXG5cdFx0XHRcdHRhcmdldDogYCR7dXRjVGltZS5nZXRGdWxsWWVhcigpfS0ke1xyXG5cdFx0XHRcdFx0dXRjVGltZS5nZXRNb250aCgpICsgMVxyXG5cdFx0XHRcdH0tJHt1dGNUaW1lLmdldERhdGUoKX0gJHtcclxuXHRcdFx0XHRcdCh1dGNUaW1lLmdldEhvdXJzKCkgPCAxMCA/IFwiMFwiIDogXCJcIikgKyB1dGNUaW1lLmdldEhvdXJzKClcclxuXHRcdFx0XHR9OiR7XHJcblx0XHRcdFx0XHQodXRjVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/IFwiMFwiIDogXCJcIikgK1xyXG5cdFx0XHRcdFx0dXRjVGltZS5nZXRNaW51dGVzKClcclxuXHRcdFx0XHR9OjAwYCxcclxuXHRcdFx0fSxcclxuXHRcdFx0dXJsOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9jYWxlbmRhcnMvJHtldmVudC5jYWxlbmRhcl9pZH0vZXZlbnRzLyR7ZXZlbnQuaWR9YCxcclxuXHRcdH1cclxuXHJcblx0XHRheGlvc1xyXG5cdFx0XHQucGF0Y2goYXBpLnVybCwgYXBpLmRhdGEsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiBhcGkuaGVhZGVycyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJlcy5kYXRhLnRhcmdldCA9IG5ldyBEYXRlKHJlcy5kYXRhLnRhcmdldClcclxuXHRcdFx0XHRzZXRFdmVudFN0YXRlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdHNldE1vZGFsKGZhbHNlKVxyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNb2RhbFxyXG5cdFx0XHRpc09wZW49e21vZGFsfVxyXG5cdFx0XHRjb250ZW50TGFiZWw9J0V2ZW50IG1vZGFsJ1xyXG5cdFx0XHRjbGFzc05hbWU9e3N0eWxlLmV2ZW50TW9kYWx9XHJcblx0XHRcdGFyaWFIaWRlQXBwPXtmYWxzZX1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cdFx0XHRcdHNldE1vZGFsKGZhbHNlKVxyXG5cdFx0XHR9fVxyXG5cdFx0XHRzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Zm9ybVxyXG5cdFx0XHRcdG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VtYml0KGUucHJldmVudERlZmF1bHQoKSl9XHJcblx0XHRcdFx0b25SZXNldD17KGUpID0+IGhhbmRsZVJlc2V0KGUucHJldmVudERlZmF1bHQoKSl9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5ldmVudE1vZGFsRm9ybX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdHZhbHVlPXt0aXRsZX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGUuZXZlbnRNb2RhbElucHV0fVxyXG5cdFx0XHRcdFx0bmFtZT0ndGl0bGUnXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldCl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHR2YWx1ZT17Y29udGVudH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGUuZXZlbnRNb2RhbFRleHRhcmVhfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e1wiQWRkIHNvbWUgZGVzY3JpcHRpb24gLi4uXCJ9XHJcblx0XHRcdFx0XHRuYW1lPSdjb250ZW50J1xyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0dmFsdWU9e2NhdGVnb3J5fVxyXG5cdFx0XHRcdFx0bmFtZT0nY2F0ZWdvcnknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlLmV2ZW50TW9kYWxTZWxlY3R9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldCl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PG9wdGlvbj5BcnJhbmdlbWVudDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0PG9wdGlvbj5SZW1pbmRlcjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0PG9wdGlvbj5UYXNrPC9vcHRpb24+XHJcblx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLmV2ZW50TW9kYWxEYXRlVGltZUJveH0+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0nZGF0ZSdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5ldmVudE1vZGFsRGF0ZX1cclxuXHRcdFx0XHRcdFx0dmFsdWU9e2RhdGV9XHJcblx0XHRcdFx0XHRcdG1pbj17YCR7ZXZlbnQudGFyZ2V0LmdldEZ1bGxZZWFyKCl9LSR7XHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LmdldE1vbnRoKCkgKyAxXHJcblx0XHRcdFx0XHRcdH0tJHtldmVudC50YXJnZXQuZ2V0RGF0ZSgpfWB9XHJcblx0XHRcdFx0XHRcdG1heD0nOTk5OS0xMi0zMSdcclxuXHRcdFx0XHRcdFx0bmFtZT0nZGF0ZSdcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSd0aW1lJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlLmV2ZW50TW9kYWxUaW1lfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGltZX1cclxuXHRcdFx0XHRcdFx0bmFtZT0ndGltZSdcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZXZlbnRNb2RhbEJveH0+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT0nQXBwbHknXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGUuZXZlbnRNb2RhbEFwcGx5fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPSdyZXNldCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9J0RlbGV0ZSBldmVudCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5ldmVudE1vZGFsRGVsZXRlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50TW9kYWxcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRIb2xpZGF5cyhjYWxlbmRhcl9pZCwgdG9rZW4pIHtcclxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZGItaXAuY29tL3YyL2ZyZWUvc2VsZmApXHJcblx0Y29uc3QgYXBpID0ge1xyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogdG9rZW4sXHJcblx0XHR9LFxyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHRjb3VudHJ5OiByZXNwb25zZS5kYXRhLmNvdW50cnlDb2RlLFxyXG5cdFx0XHR5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxLFxyXG5cdFx0fSxcclxuXHRcdHVybDogYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2FsZW5kYXJzLyR7Y2FsZW5kYXJfaWR9L2hvbGlkYXlzYCxcclxuXHR9XHJcblx0YXdhaXQgYXhpb3MucG9zdChhcGkudXJsLCBhcGkuZGF0YSwgeyBoZWFkZXJzOiBhcGkuaGVhZGVycyB9KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBMb2dvID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiB3aWR0aD1cIjY1MC4wMDAwMDBwdFwiIGhlaWdodD1cIjY1MC4wMDAwMDBwdFwiIHZpZXdCb3g9XCIwIDAgNjUwLjAwMDAwMCA2NTAuMDAwMDAwXCJcclxuIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XHJcblxyXG48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNzA4LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiXHJcbmZpbGw9XCIjMDAwMDAwXCIgc3Ryb2tlPVwibm9uZVwiPlxyXG48cGF0aCBkPVwiTTMzMzUgNjQyOSBjLTg2NyAtNTggLTE2NDggLTQ5NiAtMjE2NCAtMTIxMSAtMjQ4IC0zNDMgLTQyNyAtNzc1XHJcbi00OTUgLTExODggLTQ1IC0yNzQgLTUzIC01ODggLTIyIC04MzAgODcgLTY3NiAzNzkgLTEyNjQgODYwIC0xNzMzIDQzOCAtNDI3XHJcbjk5OSAtNzAyIDE2MjEgLTc5NCAxNzMgLTI1IDYyMSAtMjUgNzkwIDEgNTcyIDg3IDEwNjAgMzA5IDE0ODQgNjcyIDQ1OSAzOTNcclxuNzgyIDkxNCA5MjYgMTQ5NCA2MiAyNTAgODUgNDQxIDg1IDcwOSAwIDQ1MSAtOTcgODY1IC0zMDEgMTI3NyAtMjY2IDU0MSAtNzEwXHJcbjk5NiAtMTI0MiAxMjc0IC0zODYgMjAyIC03NTEgMzAzIC0xMTkwIDMzMCAtMTc3IDExIC0xNzggMTEgLTM1MiAtMXogbTU4MFxyXG4tMzgzIGM2ODIgLTExMCAxMjk2IC00OTMgMTY4OCAtMTA1MyA0MTkgLTU5OSA1NTggLTEzNTcgMzgxIC0yMDY4IC0xNjQgLTY2MFxyXG4tNjAxIC0xMjM2IC0xMTk4IC0xNTgwIC0yNjEgLTE1MSAtNTQ3IC0yNTEgLTg3MSAtMzA3IC0xMTAgLTE4IC0xNjkgLTIyIC0zODBcclxuLTIyIC0yNTMgLTEgLTMwMCAzIC01MTUgNDYgLTQxMiA4MCAtODMwIDI4OCAtMTE1MyA1NzEgLTQ1MCAzOTYgLTczNCA5MDNcclxuLTgzOSAxNTAyIC0yOSAxNjYgLTM2IDUyOCAtMTQgNzA1IDg1IDY3MyA0MTQgMTI2MiA5MzggMTY4MiAzNDEgMjczIDc3OSA0NjRcclxuMTE5MyA1MjIgNjEgOSAxMjQgMTcgMTQwIDIwIDc0IDEwIDUzNCAtMyA2MzAgLTE4elwiLz5cclxuPHBhdGggZD1cIk0zNDY1IDU4OTggYy0xNCAtMTMgLTMwIC00MCAtMzUgLTYxIC0xMiAtNTQgLTQgLTE1MiAxNSAtMTgwIDM2IC01NlxyXG4xMTUgLTU5IDE2MCAtNSAyMiAyNiAyNSAzOSAyNSAxMDggMCA0NCAtNSA5MSAtMTIgMTA1IC0yNSA1NCAtMTA3IDcyIC0xNTMgMzN6XCIvPlxyXG48cGF0aCBkPVwiTTE4NzMgNTI0MSBjLTM3IC0yMyAtNTQgLTcxIC00MSAtMTE2IDkgLTM1IDkwIC0xMTkgMTI5IC0xMzYgNjkgLTI4XHJcbjEzOSAyMSAxMzkgOTYgMCAzMiAtOSA0NiAtNjIgMTAxIC03NCA3NiAtMTEyIDg4IC0xNjUgNTV6XCIvPlxyXG48cGF0aCBkPVwiTTUwNzUgNTI0MiBjLTM4IC0yNCAtMTAzIC05NiAtMTE1IC0xMjggLTIzIC02MCAyOSAtMTM0IDk0IC0xMzQgNjdcclxuMCAxNzYgMTEyIDE3NiAxODAgMCA3MyAtOTIgMTIyIC0xNTUgODJ6XCIvPlxyXG48cGF0aCBkPVwiTTE5MjQgNDM2MCBjLTExMSAtMjIgLTIyNCAtMTEzIC0yODMgLTIyNSBsLTM2IC03MCAwIC01MjAgMCAtNTIwIDMxXHJcbi02NSBjNjYgLTEzNyAxODEgLTIyMSAzMzEgLTI0MCAxMDUgLTE0IDMwNDMgLTEzIDMxMzcgMCAxNTAgMjIgMjgzIDEzNCAzMzNcclxuMjgxIDE2IDQ5IDE4IDk1IDE4IDUzOSAwIDUzOSAwIDUzOCAtNjYgNjQwIC00NSA3MCAtMTE4IDEzMCAtMTk2IDE2MiBsLTU4IDIzXHJcbi0xNTg1IDEgYy04NzIgMSAtMTYwNCAtMiAtMTYyNiAtNnogbTU3OSAtNjE3IGMxMyAtMjEgNjIgLTExMSAxMDggLTIwMCA0NlxyXG4tOTAgODYgLTE2MyA4OSAtMTYzIDMgMCA1MCA4NCAxMDQgMTg4IDU0IDEwMyAxMDMgMTkzIDEwOCAyMDAgMTMgMTUgNjAgMTYgNzZcclxuMCAxNyAtMTcgMTcgLTU4OSAwIC02MDYgLTcgLTcgLTIyIC0xMiAtMzQgLTEyIC00MyAwIC00OSAyMiAtNTQgMjE5IGwtNSAxODZcclxuLTU5IC0xMTUgYy05MyAtMTgwIC0xMDEgLTE5MiAtMTM5IC0xODggLTMwIDMgLTM3IDExIC05NCAxMTggLTM0IDYzIC03MSAxMzFcclxuLTgyIDE1MCBsLTIxIDM1IDAgLTE4NCBjMCAtMTU3IC0yIC0xODcgLTE3IC0yMDMgLTE4IC0yMSAtNTMgLTI0IC03MSAtNiAtMTdcclxuMTcgLTE3IDU4OSAwIDYwNiA3IDcgMjUgMTIgNDAgMTIgMjEgMCAzMyAtOSA1MSAtMzd6IG03MzQgLTY5IGM0OCAtNTggOTJcclxuLTExMiA5OCAtMTIxIDkgLTEyIDI3IDUgMTA2IDEwNCA3MiA4OSAxMDEgMTE5IDEyMSAxMjEgMzAgNCA2MCAtMzAgNTEgLTU3IC0zXHJcbi05IC01MyAtNzQgLTExMCAtMTQ1IGwtMTAzIC0xMjggMCAtMTMxIGMwIC0xMDcgLTMgLTEzNCAtMTcgLTE0OSAtMjAgLTIyIC01MVxyXG4tMjMgLTc1IC0xIC0xNiAxNCAtMTggMzMgLTE4IDE1MCBsMCAxMzQgLTEwNSAxMjcgYy0xMDUgMTI3IC0xMjIgMTYxIC05MyAxOTBcclxuMzAgMzAgNTcgMTMgMTQ1IC05NHogbTkyNSA4OSBjMjMgLTIxIDIzIC0zOCAtMiAtNjMgLTE3IC0xNyAtMzMgLTIwIC0xMTAgLTIwXHJcbmwtOTAgMCAwIC0yNDkgYzAgLTIxNCAtMiAtMjUyIC0xNiAtMjY1IC0yMCAtMjEgLTUzIC0yMCAtNzYgMSAtMTYgMTUgLTE4IDM3XHJcbi0xOCAyNjUgbDAgMjQ4IC03OSAwIGMtMTAyIDAgLTEzMSAxMCAtMTMxIDQ4IDAgNTEgNiA1MiAyNjQgNTIgMjA5IDAgMjQyIC0yXHJcbjI1OCAtMTd6IG00NzMgLTE0IGM1MyAtMjcgNzYgLTU4IDY3IC05MSAtOCAtMzMgLTMwIC0zMiAtOTcgMiAtNTcgMjkgLTcxIDMyXHJcbi0xMjkgMjggLTgwIC01IC0xMTEgLTI1IC0xNDUgLTkzIC0zNiAtNzAgLTM2IC0xOTIgMCAtMjYxIDQ5IC05NSAxNTYgLTEyMVxyXG4yNjUgLTY0IDY0IDM0IDkzIDM1IDEwNCA1IDEzIC0zNSAtNiAtNjIgLTY3IC05MSAtNDMgLTIyIC03NiAtMzAgLTEzMCAtMzJcclxuLTEzMCAtNyAtMjI1IDQ1IC0yODEgMTUyIC0yNCA0NiAtMjcgNjIgLTI3IDE2MSAwIDEyOSAxNyAxNzggODUgMjQzIDU3IDU2XHJcbjEwNiA3MiAyMTUgNjkgNzUgLTIgOTkgLTYgMTQwIC0yOHpcIi8+XHJcbjxwYXRoIGQ9XCJNMTIxOCAzNjQ1IGMtMzIgLTE4IC01OCAtNjMgLTU4IC05OSAwIC0xNCAxMyAtNDAgMjkgLTU4IDI5IC0zMyAyOVxyXG4tMzMgMTI2IC0zMyA5NyAwIDk3IDAgMTI2IDMzIDM5IDQ0IDM5IDkwIDAgMTM0IC0yOCAzMiAtMzMgMzMgLTExMyAzNiAtNjAgMlxyXG4tOTEgLTIgLTExMCAtMTN6XCIvPlxyXG48cGF0aCBkPVwiTTU2NDAgMzY0MyBjLTM5IC0yNyAtNDkgLTQ1IC00OSAtODggLTEgLTc1IDQzIC0xMDUgMTUxIC0xMDUgODggMFxyXG4xMzUgMjMgMTQ0IDcwIDIwIDk3IC0yNSAxNDAgLTE0NyAxNDAgLTU0IDAgLTgxIC01IC05OSAtMTd6XCIvPlxyXG48cGF0aCBkPVwiTTE5NDUgMjExMSBjLTQxIC0yNCAtMTEyIC0xMDYgLTExNyAtMTM0IC0xMiAtNjMgNDAgLTEyNyAxMDMgLTEyN1xyXG41NiAwIDE2OSAxMTUgMTY5IDE3MiAwIDg4IC04MiAxMzQgLTE1NSA4OXpcIi8+XHJcbjxwYXRoIGQ9XCJNNDk5MiAyMTA1IGMtMzYgLTMwIC01MCAtODEgLTMyIC0xMTYgMTcgLTM0IDkwIC0xMDggMTIyIC0xMjUgNDRcclxuLTIzIDc3IC0xNyAxMTQgMjAgMjYgMjYgMzQgNDIgMzQgNzEgMCAzMiAtOSA0NiAtNjMgMTAyIC01MSA1MyAtNjkgNjUgLTEwM1xyXG43MCAtMzMgNCAtNDUgMSAtNzIgLTIyelwiLz5cclxuPHBhdGggZD1cIk0zNTAzIDE0OTMgYy02MCAtMTEgLTg5IC04NSAtNzcgLTE5NSA1IC00OCAxMiAtNjMgMzYgLTgzIDE5IC0xNiA0MlxyXG4tMjUgNjQgLTI1IDc3IDAgMTA0IDQxIDEwNCAxNTkgMCA3NCAtMiA4MyAtMjcgMTEwIC0yOSAzMCAtNjEgNDEgLTEwMCAzNHpcIi8+XHJcbjwvZz5cclxuPC9zdmc+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBBcnJvdyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE3LjA5MSAyNGE0LjA5NSA0LjA5NSAwIDAxLTIuNTktLjkyTDQuMzQgMTQuNjZhMy4zOTcgMy4zOTcgMCAwMS0xLjI3Ny0yLjY1OSAzLjQxIDMuNDEgMCAwMTEuMjc3LTIuNjZMMTQuNTAxLjkyMmE0LjE3NiA0LjE3NiAwIDAxNC40MDMtLjUyIDMuNTEgMy41MSAwIDAxMS41MTIgMS4yODEgMy41MyAzLjUzIDAgMDEuNTggMS44OTlWMjAuNDJhMy41MyAzLjUzIDAgMDEtLjU4IDEuODk5IDMuNTA5IDMuNTA5IDAgMDEtMS41MTIgMS4yODFjLS41NjkuMjYtMS4xODcuMzk2LTEuODEzLjR6XCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhbGVuZGFyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBkPVwiTTAgNjBDMCAyNi44NjMgMjYuODYzIDAgNjAgMGgzOTJjMzMuMTM3IDAgNjAgMjYuODYzIDYwIDYwdjUzLjE3OUgwVjYwem0wIDk2LjI5NWg1MTJWNDUyYzAgMzMuMTM3LTI2Ljg2MyA2MC02MCA2MEg2MGMtMzMuMTM3IDAtNjAtMjYuODYzLTYwLTYwVjE1Ni4yOTV6bTEzNC43MzcgMTQ1LjUxNmMyMC44MzYgMCAzNy43MjYtMTYuODkxIDM3LjcyNi0zNy43MjcgMC0yMC44MzUtMTYuODktMzcuNzI2LTM3LjcyNi0zNy43MjZTOTcuMDEgMjQzLjI0OSA5Ny4wMSAyNjQuMDg0YzAgMjAuODM2IDE2Ljg5MSAzNy43MjcgMzcuNzI3IDM3LjcyN3ptMTU4Ljk4OS0zNy43MjdjMCAyMC44MzYtMTYuODkgMzcuNzI3LTM3LjcyNiAzNy43MjdzLTM3LjcyNi0xNi44OTEtMzcuNzI2LTM3LjcyN2MwLTIwLjgzNSAxNi44OS0zNy43MjYgMzcuNzI2LTM3LjcyNnMzNy43MjYgMTYuODkxIDM3LjcyNiAzNy43MjZ6bTgzLjUzNyAzNy43MjdjMjAuODM2IDAgMzcuNzI3LTE2Ljg5MSAzNy43MjctMzcuNzI3IDAtMjAuODM1LTE2Ljg5MS0zNy43MjYtMzcuNzI3LTM3LjcyNi0yMC44MzUgMC0zNy43MjYgMTYuODkxLTM3LjcyNiAzNy43MjYgMCAyMC44MzYgMTYuODkxIDM3LjcyNyAzNy43MjYgMzcuNzI3em0tODMuNTM3IDkxLjYyMWMwIDIwLjgzNS0xNi44OSAzNy43MjYtMzcuNzI2IDM3LjcyNnMtMzcuNzI2LTE2Ljg5MS0zNy43MjYtMzcuNzI2YzAtMjAuODM2IDE2Ljg5LTM3LjcyNyAzNy43MjYtMzcuNzI3czM3LjcyNiAxNi44OTEgMzcuNzI2IDM3LjcyN3ptLTE1OC45ODkgMzcuNzI2YzIwLjgzNiAwIDM3LjcyNi0xNi44OTEgMzcuNzI2LTM3LjcyNiAwLTIwLjgzNi0xNi44OS0zNy43MjctMzcuNzI2LTM3LjcyN1M5Ny4wMSAzNzIuNTk2IDk3LjAxIDM5My40MzJjMCAyMC44MzUgMTYuODkxIDM3LjcyNiAzNy43MjcgMzcuNzI2elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjU2IDE1MC41Yy00MS4zNTMgMC03NS0zMy42NDctNzUtNzVzMzMuNjQ3LTc1IDc1LTc1IDc1IDMzLjY0NyA3NSA3NS0zMy42NDcgNzUtNzUgNzV6TTEwLjAyNiA0MjljLTIwLjY2OS0zNS44MTUtOC4zNS04MS43NjggMjcuNDY2LTEwMi40NTEgMzYuNTUxLTIxLjA4NSA4Mi4wODMtNy44MDYgMTAyLjQ1MSAyNy40NTEgMjAuNzIyIDM1Ljg3IDguNDQgODEuNzE3LTI3LjQ1MSAxMDIuNDUxLTM1Ljk2IDIwLjczNy04MS43NTcgOC4zOTYtMTAyLjQ2Ni0yNy40NTF6bTM4OS40ODIgMjcuNDUxQzM2My42NDEgNDM1LjczIDM1MS4zMjMgMzg5Ljg5IDM3Mi4wNTcgMzU0YzIwLjM2Ny0zNS4yNTYgNjUuODk4LTQ4LjUzNyAxMDIuNDUxLTI3LjQ1MSAzNS44MTUgMjAuNjg0IDQ4LjEzNSA2Ni42MzYgMjcuNDY2IDEwMi40NTEtMjAuNjgzIDM1LjgwMi02Ni40NTUgNDguMjE4LTEwMi40NjYgMjcuNDUxek02MS4yOTMgMjc1LjU4N2wtMjkuOTQxLTEuNjQxYzMuODk2LTcwLjk1NyA0MS44MDctMTM2LjY0MSAxMDEuMzk2LTE3NS43MjNsMTYuNDY1IDI1LjA3OGMtNTEuNjY1IDMzLjg4My04NC41MjIgOTAuODIxLTg3LjkyIDE1Mi4yODZ6TTQ1MC43MDcgMjc1LjU4N2MtMy4zOTgtNjEuNDY1LTM2LjI1NS0xMTguNDAzLTg3LjkyLTE1Mi4yODVsMTYuNDY1LTI1LjA3OGM1OS41OSAzOS4wODIgOTcuNSAxMDQuNzY2IDEwMS4zOTYgMTc1LjcyM3pNMjU2IDUxMS41Yy0zNS42ODQgMC02OS44LTguMTE1LTEwMS40MjYtMjQuMDk3bDEzLjUzNS0yNi43NzdjNTQuNzg1IDI3LjcxNSAxMjAuOTk2IDI3LjcxNSAxNzUuNzgxIDBsMTMuNTM1IDI2Ljc3N0MzMjUuOCA1MDMuMzg1IDI5MS42ODQgNTExLjUgMjU2IDUxMS41elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZXR0aW5ncyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aCBkPVwiTTUwOS45MzEgMjIzLjkxNWMtMy4zNDktMjUuODM1LTMwLjI1MS00My41Mi01Ni0zMy44NzctOS42NDMgMy42NDgtMjEuMjQ4LTEuNzcxLTI1LjYtMTEuNDk5YTE4OS41ODMgMTg5LjU4MyAwIDAwLTE5LjAwOC0zMy4wNDVjLTYuNjEzLTkuMTk1LTUuMzU1LTIxLjIyNyAyLjg1OS0yOC4wMTEgOS44MTMtOC4wNjQgMTUuMjk2LTE5Ljk4OSAxNS4wNC0zMi42ODMtLjI1Ni0xMi45MDctNi4zMzYtMjQuNzg5LTE2LjY4My0zMi42NC0xNy4wMjQtMTIuODg1LTM1LjU4NC0yMy42MTYtNTUuMTg5LTMxLjg3Mi01LjI5MS0yLjIxOS0xMC44MzctMy4zNDktMTYuNDkxLTMuMzQ5LTIwLjQzNyAwLTM3LjY3NSAxNC41MjgtNDEuMDAzIDM0LjUzOS0xLjc0OSAxMC41MTctMTEuNzEyIDE3LjY2NC0yMi45MzMgMTYuNDQ4YTE4MS4xMzUgMTgxLjEzNSAwIDAwLTM3Ljg2NyAwYy0xMS4xNzkgMS4yMTYtMjEuMTg0LTUuOTMxLTIyLjkzMy0xNi40NDgtMy4zMjgtMjAuMDExLTIwLjU2NS0zNC41MzktNDEuMDAzLTM0LjUzOS01LjY1MyAwLTExLjIgMS4xMzEtMTYuNDY5IDMuMzQ5QTI1NS4xOTIgMjU1LjE5MiAwIDAwMTAxLjQ0IDUyLjE2Yy0xMC4zMjUgNy44NTEtMTYuNDA1IDE5LjczMy0xNi42NjEgMzIuNjE5LS4yNTYgMTIuNzE1IDUuMjI3IDI0LjYxOSAxNS4wNCAzMi43MjUgOC4yMzUgNi43NjMgOS40NTEgMTguNzk1IDIuODU5IDI3Ljk2OGExODkuNjg3IDE4OS42ODcgMCAwMC0xOS4wMjkgMzMuMDQ1Yy00LjM1MiA5LjcyOC0xNS4xMDQgMTUuNDQ1LTI1LjgzNSAxMS40MTMtNC42OTMtMS43NDktOS41NzktMi42NDUtMTQuNTI4LTIuNjQ1LTIwLjgyMSAwLTM4LjUyOCAxNS43NDQtNDEuMjM3IDM2LjYyOUEyNTUuNjc1IDI1NS42NzUgMCAwMDAgMjU2YzAgMTAuNjg4LjcwNCAyMS41MDQgMi4wNjkgMzIuMDg1IDMuMzI4IDI1LjgxMyAzMC4yMDggNDMuNDk5IDU2IDMzLjg3NyA5LjYyMS0zLjY0OCAyMS4yNDggMS43NzEgMjUuNiAxMS40OTlhMTg5LjU4MyAxODkuNTgzIDAgMDAxOS4wMDggMzMuMDQ1YzYuNjEzIDkuMTk1IDUuMzU1IDIxLjIyNy0yLjg1OSAyOC4wMTEtOS44MTMgOC4wNjQtMTUuMjk2IDE5Ljk4OS0xNS4wNCAzMi42ODMuMjU2IDEyLjkwNyA2LjMzNiAyNC43ODkgMTYuNjgzIDMyLjY0IDE3LjAyNCAxMi44ODUgMzUuNTg0IDIzLjYxNiA1NS4xODkgMzEuODcyIDUuMjkxIDIuMjE5IDEwLjgzNyAzLjM0OSAxNi40OTEgMy4zNDkgMjAuNDM3IDAgMzcuNjc1LTE0LjUyOCA0MS4wMDMtMzQuNTM5IDEuNzQ5LTEwLjUxNyAxMS43MzMtMTcuNTU3IDIyLjkzMy0xNi40NDhhMTgxLjEzNSAxODEuMTM1IDAgMDAzNy44NjcgMGMxMS4yMjEtMS4xMzEgMjEuMTg0IDUuOTMxIDIyLjkzMyAxNi40NDggMy4zMjggMjAuMDExIDIwLjU2NSAzNC41MTcgNDEuMDAzIDM0LjUzOSA1LjY1MyAwIDExLjItMS4xMzEgMTYuNDY5LTMuMzQ5YTI1NS4wNCAyNTUuMDQgMCAwMDU1LjE4OS0zMS44NzJjMTAuMzI1LTcuODUxIDE2LjQyNy0xOS43MzMgMTYuNjgzLTMyLjYxOS4yNTYtMTIuNzE1LTUuMjI3LTI0LjYxOS0xNS4wNC0zMi43MjUtOC4yMzUtNi43NjMtOS40NTEtMTguNzk1LTIuODU5LTI3Ljk2OGExODkuNjg3IDE4OS42ODcgMCAwMDE5LjAyOS0zMy4wNDVjNC4zNTItOS43NDkgMTUuMTI1LTE1LjQ0NSAyNS44MzUtMTEuNDEzYTQxLjAwNiA0MS4wMDYgMCAwMDE0LjUyOCAyLjY2N2MyMC44MjEgMCAzOC41MjgtMTUuNzQ0IDQxLjIzNy0zNi42MjlDNTExLjI5NiAyNzcuMzk3IDUxMiAyNjYuNjI0IDUxMiAyNTZjMC0xMC42MjQtLjcwNC0yMS4zOTctMi4wNjktMzIuMDg1ek0yNTYgMzQxLjMzM2MtNDcuMDYxIDAtODUuMzMzLTM4LjI3Mi04NS4zMzMtODUuMzMzczM4LjI3Mi04NS4zMzMgODUuMzMzLTg1LjMzMyA4NS4zMzMgMzguMjcyIDg1LjMzMyA4NS4zMzMtMzguMjcyIDg1LjMzMy04NS4zMzMgODUuMzMzelwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaGFyZWQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT5cclxuICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI3ByZWZpeF9fY2xpcDApXCI+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNTEyIDU0Ljg1N3Y0MDIuMjg2QzUxMiA0ODcuNDQgNDg3LjQ0IDUxMiA0NTcuMTQzIDUxMkg1NC44NTdDMjQuNTYgNTEyIDAgNDg3LjQ0IDAgNDU3LjE0M1Y1NC44NTdDMCAyNC41NiAyNC41NiAwIDU0Ljg1NyAwaDQwMi4yODZDNDg3LjQ0IDAgNTEyIDI0LjU2IDUxMiA1NC44NTd6TTM0Ny40MjkgMzAxLjcxNGMtMTYuNjQzIDAtMzEuNzk4IDYuMzU2LTQzLjE4MSAxNi43NjdsLTc3LjY2Ni00Ni42YTY0LjM5OSA2NC4zOTkgMCAwMDAtMzEuNzYzbDc3LjY2Ni00Ni42YzExLjM4MyAxMC40MTIgMjYuNTM4IDE2Ljc2OCA0My4xODEgMTYuNzY4IDM1LjM0NiAwIDY0LTI4LjY1NCA2NC02NCAwLTM1LjM0Ny0yOC42NTQtNjQtNjQtNjQtMzUuMzQ3IDAtNjQgMjguNjUzLTY0IDY0IDAgNS40ODIuNjkxIDEwLjgwMyAxLjk4OCAxNS44ODJsLTc3LjY2NiA0Ni42QzE5Ni4zNjkgMTk4LjM1NSAxODEuMjE0IDE5MiAxNjQuNTcxIDE5MmMtMzUuMzQ2IDAtNjQgMjguNjU0LTY0IDY0IDAgMzUuMzQ2IDI4LjY1NCA2NCA2NCA2NCAxNi42NDMgMCAzMS43OTgtNi4zNTUgNDMuMTgxLTE2Ljc2N2w3Ny42NjYgNDYuNmE2NC4wNiA2NC4wNiAwIDAwLTEuOTg4IDE1Ljg4MmMwIDM1LjM0NyAyOC42NTMgNjQgNjQgNjQgMzUuMzQ2IDAgNjQtMjguNjUzIDY0LTY0LS4wMDEtMzUuMzQ3LTI4LjY1NS02NC4wMDEtNjQuMDAxLTY0LjAwMXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGNsaXBQYXRoIGlkPVwicHJlZml4X19jbGlwMFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTAgMGg1MTJ2NTEySDB6XCIgLz5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFdmVudCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMzE2LjA0NyAzOTYuNDI3Yy4yMDUtLjA3My40MDctLjE1NS42MDUtLjI0NiAxLjgyMS0uODMyIDQuNjQyLTEuOTE2IDYuMTU3LTIuNDk4YTcyLjg2MiA3Mi44NjIgMCAwMDEuMjYtLjQ5NHYuMDAxYzExLjIwNS00LjY0OSAxOC4zNjQtMTMuMDYzIDIwLjcwMy0yNC4zMzIgMi4yODgtMTEuMDI0LS4xNzItMjQuMTk3LTUuODQ1LTM4LjMzOCAzNS41ODMtMS44ODYgNTkuOTY2IDMuMzE2IDkwLjU5OSAxMy4yMzEgNS40NDggMS43NjEgMTAuMzA2IDIuNDcgMTQuNiAyLjQ2OSAxMS4yMTMgMCAxOC41NzEtNC44MzcgMjIuNDc4LTguNDE2IDguNzQ0LTguMDExIDEyLjQ0Ny0yMC41MzQgOS42NjUtMzIuNjg0LTMuMDgtMTMuNDUxLTEzLjI5MS0yMy42OTktMjguMDEzLTI4LjExNS0yNi4wMi03LjgwNy03OS4yNTUtMjMuNzc3LTEzNy43MTQgNC45MDItNS43MjctNy43ODctMTEuODgyLTE1LjQ4Mi0xOC4yNDEtMjIuOTE4bDEwMy4zOS04NS44NjRjLjE3Ny0uMTQ3LjM0Ny0uMzAyLjUxLS40NjQgMy4zNTQtMy4zNTMgNS4yMDMtNy44MjEgNS4yMDMtMTIuNTgxIDAtNC43NjEtMS44NDktOS4yMjktNS4yMDUtMTIuNTg0bC0zMi4xNTktMzIuMTEzYy02LjkzNi02LjkzNC0xOC4yMjYtNi45MzUtMjUuMTY0IDBhNy43MjYgNy43MjYgMCAwMC0uNDY1LjUwOWwtMzEuNTQ4IDM3LjkzMWE3LjUgNy41IDAgMDAxMS41MzMgOS41OTJsMzEuMjU2LTM3LjU4YzEuMDg2LS45MTEgMi43NjktLjg1OCAzLjc4Ny4xNjFsMzIuMTU5IDMyLjExM2MuNzAxLjcwMS44MDcgMS41MzcuODA3IDEuOTcyYTIuOCAyLjggMCAwMS0uNjQ1IDEuNzk3TDI4Mi4zNTcgMjQ3Ljc1YTQ2MC42NjEgNDYwLjY2MSAwIDAwLTguNjkxLTkuMjQ3IDYuMzUzIDYuMzUzIDAgMDAtLjE4NC0uMTgzIDQ2MS44NjIgNDYxLjg2MiAwIDAwLTkuNzQ3LTkuMTQxbDMxLjg1Mi0zOC4yOTVhNy41IDcuNSAwIDEwLTExLjUzMS05LjU5MmwtMzEuNTgyIDM3Ljk2OWMtNi45MjgtNS45LTE0LjA3Ny0xMS42MTctMjEuMzEyLTE2Ljk3NiAzMi42MDUtNTcuNDM0IDE5LjItMTExLjkzNCAxMi42NDItMTM4LjU4OS0zLjY2NC0xNC45MTQtMTMuMzgyLTI1LjYyMS0yNi42NjQtMjkuMzc2LTEyLjAxMS0zLjM5NS0yNC43Mi0uMzI0LTMzLjE2NiA4LjAxNC01LjIxMSA1LjE0NC0xMy4xNTMgMTYuNzUzLTcuNzkzIDM2LjY5NCA4LjYyMSAzMi4xNjEgMTIuNTcgNTcuNzEyIDguMTQ1IDk1LjI2OS0xNS4yNTMtNi41MjEtMjkuNDkxLTkuNDg4LTQxLjI3LTcuMDQyLTExLjI2OSAyLjMzOS0xOS42ODMgOS40OTQtMjQuMzMyIDIwLjY5LS4wOTUuMjMyLS4yNjkuNjczLS40OTQgMS4yNTctLjU4MiAxLjUxNS0xLjY2NiA0LjMzNC0yLjQ5OSA2LjE1M2E3Ljc2OCA3Ljc2OCAwIDAwLS4yNDcuNjA2bC05LjQ5OSAyNi42ODdjLS4wMS4wMjctLjAyMy4wNTMtLjAzMy4wOEw4OS45MyAyNjcuNzM0Yy0uMDIuMDU3LS4wMzMuMTE1LS4wNTIuMTczbC0yMy4wNjUgNjQuODAyYy0uMDIyLjA1Ny0uMDUuMTEtLjA3LjE2N2wtNi45OTUgMTkuNjgzLTMxLjU0MiA4OC42MTljLTUuNzk1IDE2LjMyNC00LjA2IDMwLjAzMSA0LjczOCAzNy43NTkgNC43MyA1LjM1NiAxMS42NzcgOC4wODcgMjAuMDg1IDguMDg3IDUuMzY1IDAgMTEuMzI2LTEuMTEzIDE3LjY3OS0zLjM2Nmw4OC40ODMtMzEuNDYgMTkuODcxLTcuMDU0Yy4wNTctLjAyLjEwOS0uMDQ4LjE2NS0uMDY5bDY0LjgyLTIzLjA0N2MuMDYzLS4wMjEuMTI4LS4wMzYuMTkxLS4wNTlsNDUuMDI3LTE2LjAxNGMuMDI5LS4wMS4wNTYtLjAyNC4wODUtLjAzNXptMTI3Ljg5OC0xMDUuMDU1YzEyLjg4MSAzLjg2NCAxNi42MiAxMi4zNyAxNy43MDIgMTcuMDk2IDEuNTU3IDYuNzk2LS40NzYgMTMuOTY5LTUuMTc2IDE4LjI3Ni01LjE3NyA0Ljc0My0xMy4xMSA1LjcxNS0yMi4zMyAyLjczNC0zMy4yNTYtMTAuNzY0LTYwLjk4Ni0xNi40ODctMTAyLTEzLjU2MS0zLjcxNS03LjA5Ny04LjA2My0xNC4zMjctMTIuODc0LTIxLjU1NyA1Mi40NDEtMjQuNjU4IDEwMC44NTMtMTAuMTM1IDEyNC42NzgtMi45ODh6TTE5MC42NjcgNzUuMTQxYy0yLjUxMi05LjM0NS0xLjE0Ny0xNy4yMDQgMy44NDQtMjIuMTMxIDQuNTQ0LTQuNDg1IDExLjgyNS02LjE1NCAxOC41NDgtNC4yNTUgNC42NjcgMS4zMTkgMTIuOTc0IDUuNDc5IDE2LjE3OSAxOC41MjMgNi4wMzQgMjQuNTIzIDE4LjMxIDc0LjQ0NC0xMC4zOTYgMTI2LjI5OC02Ljc4Ny00LjU2MS0xMy41OC04LjcyMS0yMC4yNy0xMi4zNDMgNS43MjMtNDIuNzY0IDEuNi03MC42MzYtNy45MDUtMTA2LjA5MnpNMTI5LjUxIDIwMS4yODljLjk5NC0yLjIxMSAyLjEwOC01LjExMSAyLjcyLTYuNzAyLjE0OS0uMzg4LjI2Mi0uNjgzLjMyNS0uODM5YS45NzcuOTc3IDAgMDAuMDItLjA0OGMyLjc3NC02LjY4MSA3LjA3My0xMC40MTYgMTMuNTI4LTExLjc1NiA5LjgzNy0yLjA0MSAyMy44OTUgMS41OTcgNDAuMzUgOS44NDIuMzcuMjMuNzY1LjQyNiAxLjE3OC41OSA4Ljk5MyA0LjU5NSAxOC42NzkgMTAuNTQyIDI4Ljc3NiAxNy42ODIuMjY5LjIyNi41NTEuNDQyLjg1OC42MzMuMDMzLjAyMS4wNjkuMDM0LjEwMy4wNTQgMTQuNjU5IDEwLjQ0OCAzMC4xNDkgMjMuMzY0IDQ1LjYwNCAzOC4yNzdhNDU4LjA0MyA0NTguMDQzIDAgMDExMi44MDcgMTMuODE2Yy4wMi4wMjUuMDM3LjA1Mi4wNTcuMDc3LjA2MS4wNzQuMTMuMTM4LjE5NC4yMDkgOS43MjUgMTAuOTUyIDE4LjM2OSAyMS43ODUgMjUuNzUgMzIuMTkxLjIzNS40MDIuNS43NzYuNzk1IDEuMTE3IDcuNDIzIDEwLjU2MiAxMy41MTkgMjAuNjYxIDE4LjExOSAyOS45NzQuMTc3LjQ3NS4zOTguOTI1LjY2MiAxLjM0NiA3LjQ2IDE1LjQ3IDEwLjY3NSAyOC42ODEgOC43MjkgMzguMDYtMS4zMzkgNi40NTMtNS4wNzcgMTAuNzUxLTExLjc2MyAxMy41MjVsLS4wNDguMDIxYy0uMTU3LjA2My0uNDUyLjE3Ni0uODQyLjMyNS0xLjU5Mi42MTEtNC40OTIgMS43MjUtNi43MDUgMi43MThsLTE4LjgyNCA2LjY5M2MtOS45MzQtMzEuODI3LTM3LjY1LTY2LjUwNS01NC4xNzQtODUuMjMxYTcuNSA3LjUgMCAxMC0xMS4yNDcgOS45MjVjMjYuMjczIDI5Ljc3NSA0NC42MDYgNTguNTggNTEuMjgxIDgwLjMzNGwtMzIuMjE1IDExLjQ1NGMtMTIuMzE3LTI0LjI4OS0zMy4yMTUtNTIuMjQzLTU5LjUwNS03OS40ODZhOC42OSA4LjY5IDAgMDAtLjE5Mi0uMTkyYy0yNy4yNTctMjYuMjc1LTU1LjIyMy00Ny4xNi03OS41MjUtNTkuNDcxbDExLjQ1NS0zMi4xODVjMjIuNzA1IDcuMDA3IDUzLjYyMSAyNy4wMTQgODQuMzg1IDU0LjgxMmE3LjUgNy41IDAgMDAxMC4wNTYtMTEuMTNjLTMyLjQ0Mi0yOS4zMTQtNjQuNDQ0LTQ5LjkzMy04OS40MS01Ny44MTV6bTUwLjAyMyAyMjcuNzU2Yy0xMS43OTMtMTcuMjk0LTI2Ljc1Ni0zNS40NzMtNDMuNTc2LTUyLjg5OWE2Ljg0IDYuODQgMCAwMC0uMTkxLS4xOWMtMTcuNDM2LTE2LjgxMi0zNS42MjQtMzEuNzY1LTUyLjkyNC00My41NWwxOC40MDctNTEuNzE1YzIyLjM5NiAxMS42OTIgNDguOTMzIDMxLjY3MSA3NC4wOTQgNTUuOTEgMjQuMjQ5IDI1LjE0NCA0NC4yMzggNTEuNjY0IDU1LjkzNyA3NC4wNDZ6bS0yNS4wNjYgOC45MTJsLTI2LjU5NyA5LjQ0MmMtOC45ODMtMTEuNDE3LTE4Ljg4NC0yMi43MzUtMjkuNDg3LTMzLjcwN2ExMC41NzMgMTAuNTczIDAgMDAtLjE4NC0uMTgzYy0xMC45NzYtMTAuNTk3LTIyLjMtMjAuNDkyLTMzLjcyMS0yOS40NjlsOS4zNjEtMjYuMzQgMy43OTgtMTAuNjdjMTUuNiAxMC45MjUgMzEuOTAzIDI0LjQ4MyA0Ny42MjIgMzkuNjI5IDE1LjE1IDE1LjcwNSAyOC43MTMgMzEuOTk3IDM5LjY0NCA0Ny41ODd6TTY1LjY5IDQ2OS41MjJjLTEwLjIwMyAzLjYxOC0xOC4yOTkgMy4zNTctMjEuNjU4LS42OTdhNy41MTUgNy41MTUgMCAwMC0xLjAwNi0xLjAwNGMtNC4wNTEtMy4zMzctNC4zMDYtMTEuNDIyLS42ODYtMjEuNjIxbDE2LjgwNy00Ny4yMjFjOS42NTUgNy43OSAxOS4yMjQgMTYuMjQgMjguNTQxIDI1LjIzMSA4Ljk5MiA5LjMwOSAxNy40NDUgMTguODcgMjUuMjM3IDI4LjUxNnpNMzg3LjY1OCA2My44NDdsMTguOTMyIDEzLjM3NGMuMDcyLjE2NC4yMy41OTguNDEyIDEuNThsNC4wNDMgMjEuODg4Yy4zNTUgMi4zMzYgMS4yMjIgNy41MTYgNi4xNDggOS41MjFhOC42MDMgOC42MDMgMCAwMDMuMjY4LjY0OGMzLjU5NSAwIDYuNTYxLTIuMjQyIDguMDUyLTMuMzY4bDE3LjU0LTEzLjUwN2MuMzc0LS4yNDMgMS4zODctLjUwNiAxLjgwOC0uNDlsMjIuMDExIDIuOTI5YzIuMzI1LjI5MiA3Ljc3Ljk3NyAxMS4xMDEtMy4yNyAzLjI4NC00LjE4NiAxLjQ1LTkuMTM4LjYxMy0xMS4zMjdsLTcuNDc3LTIwLjk5NGMtLjMyOS0uOTM2LS40MDMtMS4zNzYtLjQyLTEuNTQxbDkuNzAxLTIxLjA5N2MxLjA2Ny0yLjEzOSAzLjM3MS02LjkyLjU1OS0xMS4zNzgtMi44NjEtNC41MzQtOC4yMzMtNC40MzYtMTAuNTM5LTQuMzkxbC0yMy4yMTguNDUzTDQzMy41MyA2LjcyOGMtMS41MTctMS40NjMtNS41NS01LjM0OC0xMC45Mi0zLjkxNS01LjM3MSAxLjQzNC02LjkyOCA2LjgxMS03LjUxMyA4LjgzNWwtLjAxLjAzNS02LjMzNiAyMi4yNzgtMjAuMzc1IDExLjIzMWMtMi4wMDIgMS4xMDktNi42OSAzLjcwNS02LjkwMSA5LjA2Mi0uMjA3IDUuMjc3IDQuMTkxIDguMjc0IDYuMTgzIDkuNTkzem0yOC45ODYtMTcuMTFjNC40ODEtMi40ODggNS41OTQtNS4zMyA2LjQxOS04LjI2Nmw0LjY4Mi0xNi40NjIgMTEuNzk5IDExLjQzNi40NDEuNDMyYzIuMTQ4IDIuMTE2IDQuNDkzIDQuMDE0IDkuNTQ5IDQuMDE0bC4yMjMtLjAwMSAxNy40MjEtLjM0LTcuMTcxIDE1LjU5NGMtMi4yNTQgNC45NDctMS4yMDcgOS4zNzItLjAzNSAxMi42OTdsNS4yODQgMTQuODM3LTE1LjM1OC0yLjA0NGMtNC4yNC0uNTk2LTkuNTc2LjgyMy0xMi45NjEgMy40NDJsLTEyLjMyMyA5LjQ4OC0yLjg2LTE1LjQ4N2MtLjU5MS0zLjE5NS0xLjg5Mi03LjgxLTYuMzgxLTExLjAxNWwtMTQuMDEtOS44OTh6XCIgLz5cclxuICAgICAgPHBhdGggZD1cIk0yODEuNjQ5IDc1LjA3NGwxNS44OTIgOS4yMDJhMTMuNjQ2IDEzLjY0NiAwIDAwNi43OSAxLjgwMWM0LjQ0OCAwIDguOTMzLTIuMTMgMTIuMTk0LTYuMDk3bDI5LjMyMy0zNS4yOTZjMi40LTIuODg1IDMuMzgtNi43MzIgMi42ODctMTAuNTU1LS43NzEtNC4yNTYtMy40ODUtOC4wODQtNy4yNjMtMTAuMjQ0TDMxMi4wNCA2Ljk5OWMtMy43NzYtMi4xNzEtOC40NjUtMi41ODEtMTIuNTQyLTEuMDk5LTMuNjM5IDEuMzIzLTYuNDYgNC4wOTEtNy43MzMgNy41NjZMMjc1Ljg0IDU2LjQ1OGMtMi43NzEgNy40MDItLjM3NCAxNS4wNjIgNS44MDkgMTguNjE2em04LjI0OC0xMy4zODJsMTUuMzA2LTQxLjMyIDI3LjkzNiAxNi4xMzgtMjguMTc1IDMzLjkxNmEzLjIzNSAzLjIzNSAwIDAxLS41MjMuNTE0bC0xNC43MzEtOC41M2MuMDI0LS4xODUuMDc4LS40MjguMTg3LS43MTh6TTUwOC40NjkgMTQwLjc3Yy0zLjIyMi0zLjgyMi04LjE1Mi02LjEwMy0xMy4xODktNi4xMDNoLTQ0LjI2OGMtNS4wMzEgMC05Ljk2MiAyLjI4NS0xMy4xODggNi4xMTItMi44NjQgMy4zOTgtNC4wNDUgNy41NzktMy4zMjYgMTEuNzdsMTAuMTQ2IDU5LjI5N2MxLjU3NyA5LjE4IDguMjE0IDE1LjM0NyAxNi41MTQgMTUuMzQ3aDI0LjAwNGM4LjMwMSAwIDE0LjkzNy02LjE2NyAxNi41MTYtMTUuMzU2bDEwLjExNC01OS4yODVjLjcyMy00LjE5OS0uNDU4LTguMzg0LTMuMzIzLTExLjc4MnptLTIxLjU3NSA2OC41MzdjLS4yMzggMS4zODktLjk2OSAyLjg4OC0xLjczMSAyLjg4OGgtMjQuMDA0Yy0uODUyIDAtMS41MjUtMS42ODktMS43My0yLjg4M2wtMTAuMDgzLTU4LjkyOWMuMjkzLS4zMDcuOTg1LS43MTYgMS42NjctLjcxNmg0NC4yNjhjLjY4NiAwIDEuMzc4LjQwNSAxLjY2OS43MDd6TTQyLjI1MiAyMzcuMTU0YzEuMzU4IDAgMi43MzgtLjE3OCA0LjExOC0uNTQzbDIzLjE2Mi02LjIxOGM4LjA1My0yLjEzMyAxMi44NzktOS44MTQgMTIuMDA5LTE5LjEwOWwtNS41ODUtNTkuOTEzYy0uMzk5LTQuMjQ1LTIuNjM1LTcuOTc5LTYuMjk1LTEwLjUxNy00LjEwNi0yLjg0Ni05LjQ1Mi0zLjc2Mi0xNC4yODItMi40NTNsLTQyLjc0MiAxMS40NTRjLTQuODY3IDEuMjk0LTkuMDQzIDQuNzY4LTExLjE3MSA5LjI5NC0xLjg5NSA0LjAyOS0xLjk1MyA4LjM4My0uMTY3IDEyLjI0OWwyNS4xNDkgNTQuNjU1YzMuMjI2IDYuOTg4IDkuMjYzIDExLjEwMSAxNS44MDQgMTEuMTAxek0xNi40OTMgMTY0LjM1bC4wMjEtLjAwNiA0Mi43NjYtMTEuNDZjLjY1My0uMTggMS40MTkuMDM3IDEuNzc1LjI1NGw1LjU1IDU5LjU0MWMuMTMgMS4zOTUtLjE4MiAzLjAyLS45MzggMy4yMmwtMjMuMTYyIDYuMjE4Yy0uODI4LjIyMy0xLjkyOC0xLjI0My0yLjQzNS0yLjM0NGwtMjQuOTk1LTU0LjMyYy4yMDQtLjM2Ni43NjQtLjkzIDEuNDE4LTEuMTAzek0zNzguNjI1IDQ1Mi41NTZsLTQ1LjIxMi0zMi4wMTRjLTcuMjQ3LTUuMTY1LTE1LjkwOC00Ljg0Mi0yMS41NTUuODAybC0xNS42MTMgMTUuNjA1Yy01LjY1MSA1LjY0Ny01Ljk3NCAxNC4zMS0uODE3IDIxLjUzNmwzMi4wMzYgNDUuMTk0YzIuMzY1IDMuMzUxIDYuMDEgNS4zOTggMTAuMjYzIDUuNzY0LjQ0OC4wMzguODk2LjA1NyAxLjM0Ni4wNTcgNC4zMTYgMCA4LjYwNi0xLjc1NyAxMS42OTEtNC44NGwyOC44MjgtMjguODEzYzMuNDA1LTMuNDAzIDUuMTk0LTguMjc0IDQuNzg3LTEzLjAzMS0uMzYzLTQuMjU2LTIuNDExLTcuOTAzLTUuNzU0LTEwLjI2em0tOS42MzUgMTIuNjhsLTI4LjgyOCAyOC44MTRjLS4yMjYuMjI1LS41NjkuMzYzLS44MzguNDJsLTMxLjY3Mi00NC42NzljLS43OTctMS4xMTctLjg5Mi0yLjAxMi0uODAzLTIuMjMzbDE1LjYzNy0xNS42NGEuNTM1LjUzNSAwIDAxLjEzMy0uMDEzYy4zMzggMCAxLjEzNC4xNyAyLjEwNy44NjRsNDQuNjgyIDMxLjYzOGMtLjA1OC4yNjgtLjE5Ni42MDctLjQxOC44Mjl6TTQ4LjY0NyA2NC4yNTljLjAwMi4wMTkuMDQ5LjQ3LS40OTcgMi4wMTFsLTguMTI2IDIyLjc5MmMtLjg3NCAyLjI3MS0yLjc4NSA3LjQuNTY5IDExLjY3NiAzLjQwNSA0LjM0MiA4Ljg1OSAzLjY0NSAxMS41MjEgMy4zMDVsMjMuNzg1LTMuMThjLjYwOS0uMDU5IDEuOTk4LjMxNiAyLjQ0OS42M2wxOS4xMDYgMTQuNzU0YzEuNjI4IDEuMjI2IDQuNjE4IDMuNDc4IDguMjUxIDMuNDc4YTguODEgOC44MSAwIDAwMy4zMy0uNjU4YzUuMDI3LTIuMDMzIDUuOTM5LTcuNDI2IDYuMzItOS44MjdsNC4zNi0yMy43MzdjLjMwOC0xLjYyMy41NjItMi4wMDguNjE3LTIuMDU3bDIwLjcwNC0xNC42MzljMi4yMTUtMS40NzcgNi42MzktNC40OTYgNi40MDktOS44ODQtLjIzMy01LjQ1MS01LjEwNy04LjEyOS03LjE3Ny05LjI2NmwtMjIuMzMyLTEyLjMyMS02Ljk3LTI0LjQyOGMtLjYwMS0yLjEyMS0yLjE5NS03LjcyMy03LjY3OS05LjE5OS01LjQ5LTEuNDc5LTkuNjg5IDIuNTgtMTEuMjcyIDQuMTEyTDc0LjE3NCAyNS4wOTRsLS40MjYuNDE4LTI1LjQ2Ni0uNDg2Yy0yLjM4NS0uMDU1LTcuOTY5LS4xODQtMTAuODk2IDQuNDQ3LTIuODgzIDQuNTYxLS41NDQgOS4zNzUuNjYxIDExLjc3MXptMjUuMzM1LTIzLjc0YzUuMzc3LjExIDcuNzYzLTEuODE2IDEwLjExNy00LjE1bDE0LjA3LTEzLjYzMiA1LjM4OCAxOC44ODJjLjg5MSAzLjE2OCAyLjAwNyA2LjAwMSA2LjY4NiA4LjYwNWwxNy40NjQgOS42MzUtMTYuMDExIDExLjMyMWMtNC42MyAzLjI0NS02LjAyMiA3Ljg2MS02LjcyNiAxMS41NjZsLTMuMjc0IDE3LjgyNC0xNC4yMS0xMC45NzJjLTMuMDIyLTIuMzEtNy41MjYtMy43MzEtMTEuNTUxLTMuNzMxLS42NzYgMC0xLjMzOS4wNC0xLjk3OS4xMjNsLTE3Ljc1OSAyLjM3NCA2LjA4Ni0xNy4wN2MxLjIzNi0zLjQ4OSAyLjM1MS04LjE1NS0uMDIzLTEzLjMyN2wtOC4yMDktMTcuODI5ek01MDEuNzg4IDM5Mi41NzFsLTI0LjgxMi02LjEzNS0xMy4wNTUtMjEuODAzYy0xLjEyMi0xLjg4Ni00LjEtNi44OTUtOS43ODktNi45MWgtLjAyNGMtNS42NzUgMC04LjY4IDQuOTk1LTkuODEzIDYuODc3YS4wOTEuMDkxIDAgMDEtLjAwOC4wMTNsLTEyLjc3MiAyMS4zMjYtLjI5NS40OTctMjQuODI5IDYuMTM5Yy0yLjMwOS41NzctNy43MTQgMS45MjctOS4zMjkgNy4xMzUtMS41OTUgNS4xMzkgMS45IDkuMTkgMy42NjkgMTEuMTlsMTYuMjI0IDE5LjUyNGMuMDE3LjA0NC4xNjEuNDc4LjAzMyAyLjA4OGwtMS45MiAyNC4xNGMtLjI2OCAyLjQyOC0uNzkzIDcuODUxIDMuNTIzIDExLjEyMyA0LjM5NCAzLjMzMSA5LjUgMS4yNzIgMTIuMDM0LjI0OWwyMi4xODYtOS4yNDljLjU1OS0uMjEgMS45ODktLjIxNSAyLjU0MS0uMDEzbDIyLjMxMiA5LjI4OWMxLjQ0NS41ODcgMy44MTcgMS41NSA2LjQyNSAxLjU1IDEuNzk1IDAgMy43MDEtLjQ1NiA1LjQ5NS0xLjgwNSA0LjM0LTMuMjYzIDMuODI2LTguNzEzIDMuNTc0LTExLjEyN2wtMS45NTEtMjQuMTU0Yy0uMTI3LTEuNjEzLjAxNy0yLjA0Ny4wNDQtMi4wOTNsMTYuMjQxLTE5LjUyMWMxLjc2NS0xLjk5NiA1LjI1NS02LjAzOCAzLjY1OS0xMS4xODItMS42MTctNS4yMTItNy4wMzMtNi41NjYtOS4zNjMtNy4xNDh6bS0yMi4wNjIgMjguMjUyYy0zLjYzNSA0LjM1OC0zLjc2NSA5LjE3LTMuNDcxIDEyLjg4OGwxLjQ2MyAxOC4xMTUtMTYuNTkzLTYuOTA5Yy00LjE3OC0xLjc0NS05LjgxMi0xLjc0OS0xNC4wNDktLjAwMWwtMTYuNTc3IDYuOTExIDEuNDQyLTE4LjEyN2MuMjk0LTMuNzA0LjE2Ni04LjUxNi0zLjQ2MS0xMi44NjZsLTEyLjU4OS0xNS4xNTcgMTkuMzkxLTQuNzk0YzUuMjMyLTEuMjgxIDcuMDU1LTMuNzYxIDguNzQxLTYuNjMybDEwLjA3NC0xNi44MjYgOS43MjUgMTYuMjM3LjM1MS41OTNjMS42ODcgMi44NjkgMy41MDkgNS4zNDggOC43MjEgNi42MjRsMTkuNDI3IDQuODA0elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYXJ0eSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyLjA0OCA1MTIuMDQ4XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0xNTYuNDY4IDE3NC44NTRhMTAuMDAyIDEwLjAwMiAwIDAwLTE2LjA4OCAyLjc0OUwzLjI3IDQ2My42MjFhOC43MzMgOC43MzMgMCAwMC0uMjEyLjQ3M2MtNS43OCAxMy44NTktMy4yNDkgMjguMTE1IDYuNzcgMzguMTM0IDYuNDc0IDYuNDc0IDE0LjcxNCA5LjgyMSAyMy40NzUgOS44MjEgNC43OTggMCA5Ljc1NC0xLjAwNSAxNC42NTktMy4wNTEuMTYtLjA2Ni4zMTgtLjEzOC40NzQtLjIxMmwyODYuMDE4LTEzNy4xMDlhMTAgMTAgMCAwMDIuNzQ4LTE2LjA4OXptLTQuMTU4IDI0LjEyN2wxMDEuMTcgMTAxLjE3Yy0zOS4xNDUtMS42MS04Mi4xMDQtMTYuNjc1LTEyOC4xMjYtNDQuOTR6TTQwLjA0NiA0OTAuNjI3Yy0zLjcwMSAxLjQ5Ny0xMC41MDcgMy4wMjctMTYuMDc3LTIuNTQzLTUuNTY3LTUuNTY3LTQuMDM4LTEyLjM3NC0yLjU0Mi0xNi4wNzVMNDguNDIxIDQxNS43YzE5LjMxOCAxNi4xODMgMzguODUxIDMwLjU2NiA1OC4zMzcgNDIuOTQ4em0xOTYuMDAxLTkzLjk1N2MtMTEuOTkyLTIuOTc3LTI0LjQwMi03LjA4NC0zNi45NTQtMTIuMjU3LTUuMTA3LTIuMTA3LTEwLjk1Mi4zMjgtMTMuMDU3IDUuNDM1LTIuMTA0IDUuMTA1LjMyOSAxMC45NTEgNS40MzUgMTMuMDU2YTMwNS40MDQgMzA1LjQwNCAwIDAwMTcuNjg2IDYuNjU3bC04MC45NTQgMzguODA3Yy0yMy41ODYtMTQuMDczLTQ3LjM3Mi0zMS4yOTUtNzAuODUtNTEuMzAxbDI3Ljk3OS01OC4zNjZhNTY3LjA4MiA1NjcuMDgyIDAgMDAyNS43OTIgMTkuMjI5IDkuOTUyIDkuOTUyIDAgMDA1LjczMiAxLjgxMyA5Ljk4OSA5Ljk4OSAwIDAwOC4xOTctNC4yNjFjMy4xNzEtNC41MjEgMi4wNzUtMTAuNzU4LTIuNDQ3LTEzLjkyOS05LjQ1Ni02LjYyOS0xOC45ODMtMTMuNzk4LTI4LjQwNC0yMS4zNTZsMjIuNDYxLTQ2Ljg1NGM1MS4zMjUgMzEuMjA0IDk5LjU3MyA0Ni45NTQgMTQzLjgxNyA0Ni45NTQgNC4yNjkgMCA4LjUwNS0uMTUyIDEyLjcwMS0uNDQ2bDM5Ljg5MyAzOS44OTN6TTE5NC4yMTMgMTE2LjU1YzEuOTIyIDEuNzQ2IDQuOTU5IDQuNTA0IDYuMTQ2IDYuMTczLTEuMzgyIDEuNTUyLTQuMTg1IDQuMDk3LTYuMTUzIDUuODg1LTYuNDEzIDUuODM1LTEwLjE2OCAxMy44MTktMTAuNTc3IDIyLjQ4LS40MDggOC42NjEgMi41ODIgMTYuOTYyIDguNDE3IDIzLjM3NHMxMy44MTkgMTAuMTY5IDIyLjQ4IDEwLjU3NmMuNTIzLjAyNSAxLjA0My4wMzcgMS41NjMuMDM3IDguMDkyIDAgMTUuNzg2LTIuOTcgMjEuODA5LTguNDUxIDUuMjU1LTQuNzczIDExLjIxMi0xMC4xODMgMTYuNzI4LTE4LjMxNSA3LjQxNi0xMC45MzQgMTEuMDIxLTIyLjYyMiAxMS4wMjEtMzUuNzMzIDAtMjguODQ4LTE0Ljc0NS00Mi4yMzgtMjcuNzU1LTU0LjA1NC0xLjkyMS0xLjc0NS00Ljk1OC00LjUwMy02LjE0NS02LjE3MSAxLjM3OS0xLjU0OSA0LjE3Ni00LjA5IDYuMTUyLTUuODg1IDEzLjIzNy0xMi4wNDYgMTQuMjA2LTMyLjYxNiAyLjE1OS00NS44NTRDMjM0LjIyMyA0LjE5OSAyMjYuMjM5LjQ0MyAyMTcuNTc4LjAzNmMtOC42NDQtLjQtMTYuOTU0IDIuNTc5LTIzLjM2NSA4LjQwOS01LjI1NSA0Ljc3MS0xMS4yMTEgMTAuMTc4LTE2LjczMyAxOC4zMTktNy40MTcgMTAuOTMzLTExLjAyMiAyMi42MjItMTEuMDIyIDM1LjczNC4wMDEgMjguODUgMTQuNzQ2IDQyLjI0IDI3Ljc1NSA1NC4wNTJ6bTIxLjI1NSA0OC41MTFhMTIuMzc3IDEyLjM3NyAwIDAxLTguNjI5LTQuMDYgMTIuMzgyIDEyLjM4MiAwIDAxLTMuMjMxLTguOTczIDEyLjM3NCAxMi4zNzQgMCAwMTQuMDUyLTguNjIzYzIuNDk2LTIuMjY3IDQuOTAxLTQuNDU0IDYuODk4LTYuNTkxbDkuNTA1IDkuNjAyYzQuMjcyIDQuMzE2IDQuMzM0IDExLjI0OS4xODggMTUuNTY5YTEyLjM0MSAxMi4zNDEgMCAwMS04Ljc4MyAzLjA3NnptMzAuMTgtNDIuNDg1YzAgNS42MTQtLjkxOSAxMC43MjYtMi44MzIgMTUuNjA3YTMxLjEzNiAzMS4xMzYgMCAwMC00LjUzOC01LjgzNmwtMjUuNzI5LTI1Ljk5Yy0uMDE1LS4wMTUtLjAzMi0uMDI4LS4wNDgtLjA0My0xLjU3Ny0xLjU5OC0zLjIzNy0zLjExLTQuODQzLTQuNTY5LTExLjg0NC0xMC43NTUtMjEuMi0xOS4yNTEtMjEuMi0zOS4yNDYgMC01LjYxNC45MTktMTAuNzI2IDIuODMyLTE1LjYwN2EzMS4xMzYgMzEuMTM2IDAgMDA0LjUzOCA1LjgzNmwyNS43MjggMjUuOTljLjAxNy4wMTcuMDM2LjAzMS4wNTMuMDQ4IDEuNTc2IDEuNTk2IDMuMjM0IDMuMTA3IDQuODM5IDQuNTY0IDExLjg0NSAxMC43NTUgMjEuMiAxOS4yNTIgMjEuMiAzOS4yNDZ6TTIxNi4wNCAyMGExMi4zNzUgMTIuMzc1IDAgMDE5LjIyOSA0LjA3NGM0LjYyNSA1LjA4MiA0LjI1MyAxMi45NzktLjgzNyAxNy42MS0yLjQ5IDIuMjYyLTQuODkgNC40NDQtNi44ODIgNi41NzZsLTkuNTA2LTkuNjAzYy00LjI3My00LjMxNi00LjMzNC0xMS4yNS0uMTg2LTE1LjU3IDIuMjg0LTIgNS4xNTgtMy4wODcgOC4xODItMy4wODd6TTM4Ni43MjMgMTM5LjQ3NWM1Ljg0OSA1Ljg0OSAxMy41MzEgOC43NzIgMjEuMjE0IDguNzcyIDcuNjgyIDAgMTUuMzY0LTIuOTI0IDIxLjIxMy04Ljc3MmwxNC4xNDMtMTQuMTQzYzExLjY5Ny0xMS42OTcgMTEuNjk3LTMwLjcyOSAwLTQyLjQyN0w0MjkuMTUgNjguNzYzYy0xMS42OTctMTEuNjk2LTMwLjcyOS0xMS42OTgtNDIuNDI3IDBMMzcyLjU4IDgyLjkwNmMtNS42NSA1LjY1LTguNzYzIDEzLjE4NS04Ljc2MyAyMS4yMTQgMCA4LjAyOCAzLjExMiAxNS41NjIgOC43NjMgMjEuMjEzem0wLTQyLjQyN2wxNC4xNDMtMTQuMTQyYzEuODczLTEuODczIDQuMzg0LTIuOTA1IDcuMDcxLTIuOTA1czUuMTk3IDEuMDMyIDcuMDcgMi45MDVsMTQuMTQzIDE0LjE0MmMxLjg3MyAxLjg3MyAyLjkwNSA0LjM4NCAyLjkwNSA3LjA3MXMtMS4wMzIgNS4xOTctMi45MDUgNy4wN2wtMTQuMTQzIDE0LjE0M2MtMS44NzMgMS44NzMtNC4zODQgMi45MDUtNy4wNyAyLjkwNS0yLjY4OCAwLTUuMTk4LTEuMDMyLTcuMDcxLTIuOTA1bC0xNC4xNDMtMTQuMTQzYy0xLjg3My0xLjg3My0yLjkwNS00LjM4NC0yLjkwNS03LjA3czEuMDMxLTUuMTk4IDIuOTA1LTcuMDcxek01MDEuNDQ0IDI3MS45OTZjLTYuNDEzLTUuODM3LTE0LjcxMi04LjgxNy0yMy4zNzYtOC40MTgtOC42NjEuNDA4LTE2LjY0NSA0LjE2NC0yMi40ODcgMTAuNTg1LTEuNzgxIDEuOTYxLTQuMzI1IDQuNzYzLTUuODc3IDYuMTQ1LTEuNjY4LTEuMTg3LTQuNDI3LTQuMjI1LTYuMTc0LTYuMTQ4LTExLjgxNC0xMy4wMDgtMjUuMjA0LTI3Ljc1MS01NC4wNTEtMjcuNzUxLTEzLjExMiAwLTI0LjgwMSAzLjYwNC0zNS43MzQgMTEuMDIxLTguMTM1IDUuNTE5LTEzLjU0NSAxMS40NzYtMTguMzExIDE2LjcyNS0uMTIzLjEzNS0uMjM3LjI3NS0uMzU3LjQxMmwtLjAwNy4wMDhjLTUuNTkyIDYuMzU0LTguNDU0IDE0LjQ4LTguMDU0IDIyLjk1Ni40MDggOC42NjEgNC4xNjQgMTYuNjQ1IDEwLjU3NiAyMi40NzkgMTMuMjM3IDEyLjA0OCAzMy44MDcgMTEuMDc3IDQ1Ljg3MS0yLjE3NiAxLjc3OC0xLjk1OSA0LjMxOS00Ljc1NiA1Ljg2OS02LjEzNiAxLjY2OCAxLjE4NiA0LjQyNiA0LjIyMyA2LjE3MSA2LjE0NSAxMS44MTMgMTMuMDEgMjUuMjA0IDI3Ljc1NSA1NC4wNTQgMjcuNzU1IDEzLjExMiAwIDI0LjgwMS0zLjYwNSAzNS43MzQtMTEuMDIxIDguMTMxLTUuNTE2IDEzLjU0LTExLjQ3MSAxOC4zMTItMTYuNzI1IDEyLjA0Ni0xMy4yNCAxMS4wNzgtMzMuODEtMi4xNTktNDUuODU2em0tMzEuMDYzIDE1LjYyYTEyLjM4IDEyLjM4IDAgMDE4LjYyOS00LjA2MWMzLjMyNy0uMTQyIDYuNTExLjk5MiA4Ljk3MyAzLjIzMSA1LjAyMSA0LjU3IDUuNDM0IDEyLjMyOS45ODEgMTcuNDE2LTQuMzIgNC4xNDQtMTEuMjUyIDQuMDc4LTE1LjU2NS0uMTkxbC05LjYwMi05LjUwNmMyLjEzNS0xLjk5NSA0LjMyMS00LjM5OCA2LjU4NC02Ljg4OXptLTEwMS43MjQgMTYuNzcxYTEyLjM4MiAxMi4zODIgMCAwMS04LjYzIDQuMDYxYy0zLjMzOC4xNjMtNi41MTEtLjk5MS04Ljk3My0zLjIzMWExMi4zOCAxMi4zOCAwIDAxLTQuMDYxLTguNjI4IDEyLjM4MSAxMi4zODEgMCAwMTMuMDgzLTguNzkzYzQuMzIzLTQuMTM4IDExLjI0OS00LjA3MiAxNS41Ni4xOTVsOS42MDMgOS41MDZjLTIuMTMzIDEuOTk1LTQuMzE3IDQuMzk3LTYuNTgyIDYuODl6bTQxLjY1My4wMDljLTEuNDYxLTEuNjA5LTIuOTc2LTMuMjcxLTQuNTc3LTQuODUxbC0uMDM1LS4wMzktMjUuOTktMjUuNzI5YTMxLjE3MSAzMS4xNzEgMCAwMC01LjgzNS00LjUzOGM0Ljg4MS0xLjkxMyA5Ljk5NC0yLjgzMiAxNS42MDctMi44MzIgMTkuOTkzIDAgMjguNDg5IDkuMzU0IDM5LjI0NyAyMS4xOTkgMS40NTYgMS42MDMgMi45NjUgMy4yNiA0LjU2MSA0LjgzNS4wMTguMDE4LjAzMy4wMzguMDUxLjA1NmwyNS45OSAyNS43MjlhMzEuMTgzIDMxLjE4MyAwIDAwNS44MzYgNC41MzljLTQuODgxIDEuOTEzLTkuOTkzIDIuODMyLTE1LjYwNyAyLjgzMi0xOS45OTctLjAwMS0yOC40OTItOS4zNTYtMzkuMjQ4LTIxLjIwMXpNNDc0LjIyNyA0Ny44MjljNS41MjIgMCAxMC00LjQ3OCAxMC0xMHMtNC40NzgtMTAtMTAtMTBoLS4wMDhjLTUuNTIyIDAtOS45OTYgNC40NzgtOS45OTYgMTBzNC40ODIgMTAgMTAuMDA0IDEwek0zMzcuNjA4IDQwLjYxYzUuNTIyIDAgMTAtNC40NzggMTAtMTBzLTQuNDc4LTEwLTEwLTEwaC0uMDA3Yy01LjUyMiAwLTkuOTk3IDQuNDc4LTkuOTk3IDEwczQuNDgyIDEwIDEwLjAwNCAxMHpNMzA2LjMxOSAxMzEuMjk1YzUuNTIyIDAgMTAtNC40NzggMTAtMTBzLTQuNDc4LTEwLTEwLTEwaC0uMDA4Yy01LjUyMiAwLTkuOTk2IDQuNDc4LTkuOTk2IDEwczQuNDgyIDEwIDEwLjAwNCAxMHpNMjk4LjY4NiAyMjMuMzczYzUuNTIyIDAgMTAtNC40NzggMTAtMTBzLTQuNDc4LTEwLTEwLTEwaC0uMDA4Yy01LjUyMiAwLTkuOTk2IDQuNDc4LTkuOTk2IDEwczQuNDgyIDEwIDEwLjAwNCAxMHpNNDcxLjQ0NiAxNzQuNDQ3di4wMDhjMCA1LjUyMiA0LjQ3OCA5Ljk5NiAxMCA5Ljk5NnMxMC00LjQ4MSAxMC0xMC4wMDQtNC40NzgtMTAtMTAtMTAtMTAgNC40NzctMTAgMTB6TTM4MC43NiAyMDUuNzM3di4wMDdjMCA1LjUyMiA0LjQ3OCA5Ljk5NyAxMCA5Ljk5N3MxMC00LjQ4MSAxMC0xMC4wMDQtNC40NzgtMTAtMTAtMTAtMTAgNC40NzctMTAgMTB6XCIgLz5cclxuICAgICAgPHBhdGggZD1cIk0xNTQuODc2IDM2My44NDJoLS4wMDhjLTUuNTIzIDAtOS45OTYgNC40NzgtOS45OTYgMTBzNC40ODEgMTAgMTAuMDA0IDEwIDEwLTQuNDc4IDEwLTEwLTQuNDc3LTEwLTEwLTEwelwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2NrID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTguNzUgOUgxOFY2YzAtMy4zMDktMi42OTEtNi02LTZTNiAyLjY5MSA2IDZ2M2gtLjc1QTIuMjUzIDIuMjUzIDAgMDAzIDExLjI1djEwLjVDMyAyMi45OTEgNC4wMSAyNCA1LjI1IDI0aDEzLjVjMS4yNCAwIDIuMjUtMS4wMDkgMi4yNS0yLjI1di0xMC41QzIxIDEwLjAwOSAxOS45OSA5IDE4Ljc1IDl6TTggNmMwLTIuMjA2IDEuNzk0LTQgNC00czQgMS43OTQgNCA0djNIOHptNSAxMC43MjJWMTlhMSAxIDAgMTEtMiAwdi0yLjI3OGMtLjU5NS0uMzQ3LTEtLjk4NS0xLTEuNzIyIDAtMS4xMDMuODk3LTIgMi0yczIgLjg5NyAyIDJjMCAuNzM3LS40MDUgMS4zNzUtMSAxLjcyMnpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyLjA5MiA1MTIuMDkyXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0zMTIuNDUzIDE5OS42MDFhMTE2LjE2NyAxMTYuMTY3IDAgMDAtMjAuMDUzLTE2LjEyOCAxMTkuNDcyIDExOS40NzIgMCAwMC02NC40MjctMTguODU5IDExOC45NTIgMTE4Ljk1MiAwIDAwLTg0LjQ4IDM0Ljk4N0wzNC45NDkgMzA4LjIzYTExOS40NjYgMTE5LjQ2NiAwIDAwLTM0LjkxIDg0LjMxOGMtLjA0MiA2NS45OCA1My40MSAxMTkuNTAxIDExOS4zOSAxMTkuNTQzYTExOC43IDExOC43IDAgMDA4NC4zOTUtMzQuODE2bDg5LjYtODkuNmE4LjUzNCA4LjUzNCAwIDAwLTYuMDU5LTE0LjU5MmgtMy40MTNhMTQzLjYyNiAxNDMuNjI2IDAgMDEtNTQuNjEzLTEwLjU4MSA4LjUzMyA4LjUzMyAwIDAwLTkuMzAxIDEuODc3bC02NC40MjcgNjQuNTEyYy0yMC4wMDYgMjAuMDA2LTUyLjQ0MiAyMC4wMDYtNzIuNDQ4IDAtMjAuMDA2LTIwLjAwNi0yMC4wMDYtNTIuNDQyIDAtNzIuNDQ4bDEwOC45NzEtMTA4Ljg4NWMxOS45OS0xOS45NjUgNTIuMzczLTE5Ljk2NSA3Mi4zNjMgMCAxMy40NzIgMTIuNjc5IDM0LjQ4NiAxMi42NzkgNDcuOTU3IDBhMzQuMTM0IDM0LjEzNCAwIDAwOS44OTktMjEuNjc1IDM0LjEzNyAzNC4xMzcgMCAwMC05LjktMjYuMjgyelwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDc3LjA2MSAzNC45OTNjLTQ2LjY1Ny00Ni42NTctMTIyLjMwMy00Ni42NTctMTY4Ljk2IDBsLTg5LjUxNSA4OS40MjlhOC41MzMgOC41MzMgMCAwMC0xLjc5MiA5LjM4NyA4LjUzMiA4LjUzMiAwIDAwOC4wMjEgNS4yMDVoMy4xNTdhMTQzLjM1NyAxNDMuMzU3IDAgMDE1NC41MjggMTAuNjY3IDguNTMzIDguNTMzIDAgMDA5LjMwMS0xLjg3N2w2NC4yNTYtNjQuMTcxYzIwLjAwNi0yMC4wMDYgNTIuNDQyLTIwLjAwNiA3Mi40NDggMCAyMC4wMDYgMjAuMDA2IDIwLjAwNiA1Mi40NDIgMCA3Mi40NDhsLTgwLjA0MyA3OS45NTctLjY4My43NjgtMjcuOTg5IDI3LjgxOWMtMTkuOTkgMTkuOTY1LTUyLjM3MyAxOS45NjUtNzIuMzYzIDAtMTMuNDcyLTEyLjY3OS0zNC40ODYtMTIuNjc5LTQ3Ljk1NyAwYTM0LjEzOSAzNC4xMzkgMCAwMC05Ljg5OSAyMS44NDUgMzQuMTM3IDM0LjEzNyAwIDAwOS44OTkgMjYuMjgzIDExOC40NDcgMTE4LjQ0NyAwIDAwMzQuMTMzIDIzLjg5M2MxLjc5Mi44NTMgMy41ODQgMS41MzYgNS4zNzYgMi4zMDQgMS43OTIuNzY4IDMuNjY5IDEuMzY1IDUuNDYxIDIuMDQ4YTY3Ljc5OSA2Ny43OTkgMCAwMDUuNDYxIDEuNzkybDUuMDM1IDEuMzY1YzMuNDEzLjg1MyA2LjgyNyAxLjUzNiAxMC4zMjUgMi4xMzMgNC4yMTQuNjI2IDguNDU4IDEuMDI1IDEyLjcxNSAxLjE5NUgyODQuNDYxbDUuMTItLjU5N2MxLjg3Ny0uMDg1IDMuODQtLjUxMiA2LjA1OS0uNTEyaDIuOTAxbDUuODg4LS44NTMgMi43MzEtLjUxMiA0Ljk0OS0xLjAyNGguOTM5YTExOS40NTYgMTE5LjQ1NiAwIDAwNTUuMzgxLTMxLjQwM2wxMDguNjI5LTEwOC42MjljNDYuNjYtNDYuNjU3IDQ2LjY2LTEyMi4zMDMuMDAzLTE2OC45NnpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGltZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIxIDAgNTEyIDUxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aCBkPVwiTTUxMiAyNTUuNWwtLjAwNCAxYy0uMTg3IDQ4LjY2OC0xNC4wNzggOTUuOTM4LTQwLjIgMTM2Ljc3Ny0zLjgxNiA1Ljk2NS0xMC4yNzMgOS4yMjctMTYuODY2IDkuMjI3YTE5LjkyNCAxOS45MjQgMCAwMS0xMC43NTgtMy4xNTZjLTkuMzA1LTUuOTUzLTEyLjAyNC0xOC4zMi02LjA3LTI3LjYyNUM0NjAuMTg4IDMzNy4xOTUgNDcxLjkwNiAyOTcuMTg3IDQ3MiAyNTZjLS4yNy0xMTguODc1LTk2LjYxNy0yMTUuNS0yMTUtMjE1LjUtNzUuNjQgMC0xNDUuODIgNDAuMTI1LTE4NC42ODQgMTAzLjkzbDQ1LjcxNS4wN2MxMS4wNDcuMDE2IDE5Ljk4NSA4Ljk4NCAxOS45NjkgMjAuMDMxLS4wMTYgMTEuMDMxLTguOTY5IDE5Ljk2OS0yMCAxOS45NjloLS4wMzFsLTU4LjUxNi0uMDljLTE1Ljk0MS4wMzUtMzAuNzgxLTYuMDY2LTQxLjkzMy0xNy4yMTVDNi4xNTYgMTU1LjgzMi0uMDY2IDE0MC41NzggMCAxMjQuMjQyVjY2LjVjMC0xMS4wNDcgOC45NTMtMjAgMjAtMjBzMjAgOC45NTMgMjAgMjB2NTQuMTA1YzE5Ljc5LTMxLjU3IDQ2LjI5LTU4LjU0MyA3Ny44NDQtNzkuMDE1QzE1OS4yOCAxNC43MDcgMjA3LjM5OC41IDI1NyAuNWM2OC4zNCAwIDEzMi40NjUgMjYuNjQ1IDE4MC41NjMgNzUuMDIzQzQ4NS4zMjcgMTIzLjU3IDUxMS43NDMgMTg3LjQ1MyA1MTIgMjU1LjV6TTM4MC41NDMgNDMyLjcwM0MzNDQuMjE1IDQ1OC4wODIgMzAxLjQ5NiA0NzEuNSAyNTcgNDcxLjVjLS4xNjggMC0uMzMyLjAyLS41LjAyMy0uMTY4LS4wMDMtLjMzMi0uMDIzLS41LS4wMjMtMy4wMzUgMC02LjEyMS0uMDY2LTkuMTcyLS4xOTEtMTEuMDA0LS40NjEtMjAuMzUxIDguMTE3LTIwLjgxMiAxOS4xNTItLjQ1NyAxMS4wMzUgOC4xMTcgMjAuMzU1IDE5LjE1NiAyMC44MTIgMy41OTguMTQ5IDcuMjQyLjIyNyAxMC44MjguMjI3LjE2OCAwIC4zMzItLjAyLjUtLjAyMy4xNjguMDAzLjMzMi4wMjMuNS4wMjMgNTIuNzMgMCAxMDMuMzcxLTE1LjkwNiAxNDYuNDUzLTQ2LjAwNCA5LjA1NS02LjMyOCAxMS4yNy0xOC43OTcgNC45NDItMjcuODUxLTYuMzI1LTkuMDU1LTE4Ljc5My0xMS4yNjYtMjcuODUyLTQuOTQyem0tMjgzLjEyOS0zMC41NWMtNy41LTguMTA2LTIwLjE1Ni04LjYwMi0yOC4yNjItMS4wOTgtOC4xMDkgNy41LTguNjAxIDIwLjE1Mi0xLjA5NyAyOC4yNjFhMjU5Ljc4MSAyNTkuNzgxIDAgMDAxNC4xNDQgMTQuMTQ5IDE5LjkzMSAxOS45MzEgMCAwMDEzLjU3OCA1LjMxNiAxOS45NTMgMTkuOTUzIDAgMDAxNC42ODgtNi40MThjNy41LTguMTA1IDcuMDA4LTIwLjc2MS0xLjA5OC0yOC4yNjFhMjE2Ljg5NyAyMTYuODk3IDAgMDEtMTEuOTUzLTExLjk1ek01My40MzcgMzMwLjY4Yy0zLjg0Ny0xMC4zNTYtMTUuMzU1LTE1LjYzNy0yNS43MS0xMS43OS0xMC4zNTYgMy44NDQtMTUuNjMzIDE1LjM1Ni0xMS43OSAyNS43MTJhMjU1LjEgMjU1LjEgMCAwMDcuNyAxOC40NzZjMy4zODYgNy4zIDEwLjYxIDExLjU5NCAxOC4xNiAxMS41OTRhMTkuOTQgMTkuOTQgMCAwMDguMzk4LTEuODYzYzEwLjAyNC00LjY0NSAxNC4zOC0xNi41MzYgOS43My0yNi41NTlhMjE1LjgzMiAyMTUuODMyIDAgMDEtNi40ODgtMTUuNTd6bTEyNy40MTggMTI3LjM5NGEyMTQuNjggMjE0LjY4IDAgMDEtMTUuNTgyLTYuNDkyYy0xMC4wMjMtNC42NDgtMjEuOTE0LS4yOTMtMjYuNTU4IDkuNzMtNC42NDkgMTAuMDItLjI5MyAyMS45MSA5LjcyNiAyNi41NmEyNTQuMjMyIDI1NC4yMzIgMCAwMDE4LjUgNy43MDIgMTkuOTQ5IDE5Ljk0OSAwIDAwNi45NTQgMS4yNThjOC4xMjUgMCAxNS43NjEtNC45ODggMTguNzUzLTEzLjA1IDMuODQtMTAuMzU2LTEuNDM3LTIxLjg2NC0xMS43OTMtMjUuNzA4ek0yMS4wNCAyODUuNDhjMTEuMDQtLjQ1NyAxOS42MTMtOS43NzcgMTkuMTUyLTIwLjgxMkEyMjMuODcgMjIzLjg3IDAgMDE0MCAyNTUuNWMwLTExLjA0Ny04Ljk1My0yMC0yMC0yMHMtMjAgOC45NTMtMjAgMjBjMCAzLjYwMi4wNzggNy4yNDYuMjI3IDEwLjgzMkMuNjcyIDI3Ny4wODYgOS41MyAyODUuNSAyMC4xOSAyODUuNWMuMjgyIDAgLjU2Ny0uMDA4Ljg0OC0uMDJ6bTE1OC40OTItMTguNzYxYzYuMjk3LTUuMTI1IDEzLjA5NC05LjU1OSAyMC4yMzktMTMuMjkzQzE4OC4wOTggMjQwLjA1OSAxODEgMjIyLjU5OCAxODEgMjAzLjVjMC00MS45MDYgMzQuMDk0LTc2IDc2LTc2czc2IDM0LjA5NCA3NiA3NmMwIDE5LjA5OC03LjA5OCAzNi41NTktMTguNzczIDQ5LjkyNmExMjAuNDA0IDEyMC40MDQgMCAwMTIwLjI0MiAxMy4yOTNjMjEuMzA4IDE3LjM0IDM2LjEyOSA0MS41NTQgNDEuNzMgNjguMTc2IDIuMzA1IDEwLjk0LS40MTggMjIuMTk5LTcuNDY1IDMwLjg4Mi03LjA3NCA4LjcyMy0xNy41OTMgMTMuNzIzLTI4Ljg1OSAxMy43MjNoLTE2NS43NWMtMTEuMjY2IDAtMjEuNzg1LTUtMjguODYtMTMuNzIzLTcuMDQ2LTguNjgzLTkuNzY5LTE5Ljk0MS03LjQ2OC0zMC44ODIgNS42MDEtMjYuNjIyIDIwLjQyMi01MC44MzYgNDEuNzM0LTY4LjE3NnpNMjIxIDIwMy41YzAgMTkuODUyIDE2LjE0OCAzNiAzNiAzNnMzNi0xNi4xNDggMzYtMzYtMTYuMTQ4LTM2LTM2LTM2LTM2IDE2LjE0OC0zNiAzNnptLTQzLjIwMyAxMzZoMTU4LjQwNmMtOS4xMjEtMzQuOTg0LTQxLjU1NS02MC03OC41MjMtNjBoLTEuMzZjLTM2Ljk2OCAwLTY5LjQwMiAyNS4wMTYtNzguNTIzIDYwem0wIDBcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGx1cyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aCBkPVwiTTQ5MiAyMzZIMjc2VjIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCA4Ljk1NC0yMCAyMHYyMTZIMjBjLTExLjA0NiAwLTIwIDguOTU0LTIwIDIwczguOTU0IDIwIDIwIDIwaDIxNnYyMTZjMCAxMS4wNDYgOC45NTQgMjAgMjAgMjBzMjAtOC45NTQgMjAtMjBWMjc2aDIxNmMxMS4wNDYgMCAyMC04Ljk1NCAyMC0yMHMtOC45NTQtMjAtMjAtMjB6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNDaXJjbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTEyIDguMzMzVjEyIDguMzMzek0xMiAxMnYzLjY2N1YxMnptMCAwaDMuNjY3SDEyem0wIDBIOC4zMzMgMTJ6bTExIDBhMTEgMTEgMCAxMS0yMiAwIDExIDExIDAgMDEyMiAwelwiXHJcbiAgICAgICAgc3Ryb2tlPXtwcm9wcy5maWxsfVxyXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERvdHMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzODQgMzg0XCIgey4uLnByb3BzfT5cclxuICAgICAgPGNpcmNsZSBjeD17MTkyfSBjeT17NDIuNjY3fSByPXs0Mi42Njd9IC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezE5Mn0gY3k9ezE5Mn0gcj17NDIuNjY3fSAvPlxyXG4gICAgICA8Y2lyY2xlIGN4PXsxOTJ9IGN5PXszNDEuMzMzfSByPXs0Mi42Njd9IC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaXJjbGUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEyOCAxMjhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGggZD1cIk02NCAxMjhjMzUuMzQ2IDAgNjQtMjguNjU0IDY0LTY0IDAtMzUuMzQ2LTI4LjY1NC02NC02NC02NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0YzAgMzUuMzQ2IDI4LjY1NCA2NCA2NCA2NHpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGlkZGVuID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTUuMDg2IDIwLjQ2OGwtMy40LTMuNDAyQTUuMDMgNS4wMyAwIDAxNi45OCAxMi4zNmwtNC42Mi00LjYyQTEyLjU1MSAxMi41NTEgMCAwMDAgMTIuMDQ2YzEuNjAyIDUuMTAyIDYuMzcgOC44MDQgMTIgOC44MDQgMS4wNjUgMCAyLjA5OS0uMTMzIDMuMDg2LS4zODF6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk00LjA4NiAyLjM1M2ExLjI1OCAxLjI1OCAwIDAwLTEuNzc4IDEuNzc4bDE3LjYwNiAxNy42MDdhMS4yNTcgMS4yNTcgMCAwMDEuNzc4LTEuNzc5bC0xLjg1Mi0xLjg1MkExMi41OTQgMTIuNTk0IDAgMDAyNCAxMi4wNDVjLTEuNjAyLTUuMTAyLTYuMzY5LTguODAzLTEyLTguODAzYTEyLjUyMyAxMi41MjMgMCAwMC01LjY3NCAxLjM1TDQuMDg3IDIuMzU0aC0uMDAxek05LjQ0NSA3LjcxbDEuOTA0IDEuOTA2YTIuNTE5IDIuNTE5IDAgMDEzLjA4IDMuMDhsMS45MDUgMS45MDVhNS4wMyA1LjAzIDAgMDAtNi44OS02Ljg5elwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZW1vdmUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDM4NCAzODRcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTIzMy4xMzIgMjE5LjQzNmE0MS4xMzggNDEuMTM4IDAgMDE0MS4xNDEgNDEuMTQxdjEzLjcxNEMyNzQuMjczIDMyOC4zNSAyMjMuMjU5IDM4NCAxMzcuMTM3IDM4NCA1MS4wMTUgMzg0IDAgMzI4LjM1IDAgMjc0LjI5MXYtMTMuNzE0YTQxLjE0IDQxLjE0IDAgMDE0MS4xNDEtNDEuMTQxaDE5MS45OTF6TTEzNy4xMzcgNDEuMTU4YTc1LjQyNCA3NS40MjQgMCAwMTUzLjMzMyAxMjguNzU5QTc1LjQyNCA3NS40MjQgMCAxMTgzLjgwMyA2My4yNWE3NS40MjYgNzUuNDI2IDAgMDE1My4zMzQtMjIuMDkyem0xMzEuMjEyLTM4LjdsMS45MiAxLjU2NCA0NS4xNDUgNDUuMTcyTDM2MC41NiA0LjAyM2ExMy43MyAxMy43MyAwIDExMTkuNDE4IDE5LjQxOGwtNDUuMTczIDQ1LjE0NiA0NS4xNzMgNDUuMTQ1YTEzLjcxNiAxMy43MTYgMCAwMTEuNTY0IDE3LjQ5OWwtMS41NjQgMS45MmExMy43MSAxMy43MSAwIDAxLTE3LjQ5OCAxLjU2M2wtMS45Mi0xLjU2My00NS4xNDYtNDUuMTczLTQ1LjE0NSA0NS4xNzNhMTMuNzMxIDEzLjczMSAwIDAxLTE5LjQxOS0xOS40MTlsNDUuMTczLTQ1LjE0NUwyNTAuODUgMjMuNDRhMTMuNzEyIDEzLjcxMiAwIDAxLTEuNTYzLTE3LjQ5OGwxLjU2My0xLjkyYTEzLjcxNSAxMy43MTUgMCAwMTE1LjQxNS0yLjc0M2wyLjA4NCAxLjE4elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9hcHAubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IEJpZ0NhbGVuZGFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhbGVuZGFycy9CaWdDYWxlbmRhclwiXHJcbmltcG9ydCBhZGRIb2xpZGF5cyBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnMvYWRkSG9saWRheXNcIlxyXG5cclxuY29uc3QgQ2FsZW5kYXIgPSAoeyB1c2VyLCBjYWxlbmRhciB9KSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChjYWxlbmRhci5tYWluICYmIGNhbGVuZGFyLmV2ZW50cy5sZW5ndGggPT09IDApXHJcblx0XHRcdGFkZEhvbGlkYXlzKGNhbGVuZGFyLmlkLCB1c2VyLnRva2VuKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKVxyXG5cdH0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8QXBwbGljYXRpb24gdXNlcj17dXNlcn0gdGl0bGU9e2NhbGVuZGFyLnRpdGxlfT5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VUaXRsZX0+e2NhbGVuZGFyLnRpdGxlfTwvaDE+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJQYWdlfT5cclxuXHRcdFx0XHQ8QmlnQ2FsZW5kYXIgY2FsZW5kYXI9e2NhbGVuZGFyfSBhY2Nlc3NUb2tlbj17dXNlci50b2tlbn0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0FwcGxpY2F0aW9uPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuXHRjb25zdCBjb29raWUgPSBub29raWVzLmdldChjdHgpLnVzZXJcclxuXHRpZiAoISEhY29va2llKVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVkaXJlY3Q6IHtcclxuXHRcdFx0XHRwZXJtYW5lbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdGRlc3RpbmF0aW9uOiBcIi9zaWduaW5cIixcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHJcblx0Y29uc3QgdXNlciA9IEpTT04ucGFyc2UoY29va2llKVxyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG5cdFx0YCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2FsZW5kYXJzLyR7Y3R4LnBhcmFtcy5pZH1gLFxyXG5cdFx0e1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiB1c2VyLnRva2VuLFxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdClcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHVzZXI6IHVzZXIsXHJcblx0XHRcdGNhbGVuZGFyOiByZXNwb25zZS5kYXRhLFxyXG5cdFx0fSxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFwcFwiOiBcImFwcF9hcHBfXzNHWlo5XCIsXG5cdFwiYmFyXCI6IFwiYXBwX2Jhcl9fM1pubzVcIixcblx0XCJiYXJPcHRpb25zXCI6IFwiYXBwX2Jhck9wdGlvbnNfXzNXTGQtXCIsXG5cdFwiYmFyT3B0aW9uc0J1dHRvblwiOiBcImFwcF9iYXJPcHRpb25zQnV0dG9uX18yMFh2Y1wiLFxuXHRcImJhck9wdGlvbnNCdXR0b25BY3RpdmVcIjogXCJhcHBfYmFyT3B0aW9uc0J1dHRvbkFjdGl2ZV9fM0VET3hcIixcblx0XCJiYXJBY2NvdW50XCI6IFwiYXBwX2JhckFjY291bnRfXzNfYXdIXCIsXG5cdFwiYmFyQWNjb3VudEJ1dHRvblwiOiBcImFwcF9iYXJBY2NvdW50QnV0dG9uX18yclI4LVwiLFxuXHRcImJhckFjY291bnRJbWFnZVwiOiBcImFwcF9iYXJBY2NvdW50SW1hZ2VfX3hrelZTXCIsXG5cdFwiZHJvcGRvd25CYXJPcHRpb25zXCI6IFwiYXBwX2Ryb3Bkb3duQmFyT3B0aW9uc19fMUxvV2lcIixcblx0XCJkcm9wZG93bkJhck9wdGlvblwiOiBcImFwcF9kcm9wZG93bkJhck9wdGlvbl9fMVJmcEtcIixcblx0XCJwYWdlVGl0bGVcIjogXCJhcHBfcGFnZVRpdGxlX18zQUJVcVwiLFxuXHRcImNhbGVuZGFyc1BhZ2VcIjogXCJhcHBfY2FsZW5kYXJzUGFnZV9fMjg0WXpcIixcblx0XCJjYWxlbmRhckVsZW1lbnRcIjogXCJhcHBfY2FsZW5kYXJFbGVtZW50X19vRENLeVwiLFxuXHRcImZhZGVJblwiOiBcImFwcF9mYWRlSW5fXzEteFY3XCIsXG5cdFwiY2FsZW5kYXJEYXRhXCI6IFwiYXBwX2NhbGVuZGFyRGF0YV9fMWhsR2pcIixcblx0XCJjYWxlbmRhclRpdGxlXCI6IFwiYXBwX2NhbGVuZGFyVGl0bGVfXzNlcGhxXCIsXG5cdFwiY2FsZW5kYXJCdXR0b25Nb3JlXCI6IFwiYXBwX2NhbGVuZGFyQnV0dG9uTW9yZV9fa3NCRDhcIixcblx0XCJjYWxlbmRhclNwYW5cIjogXCJhcHBfY2FsZW5kYXJTcGFuX18yTHlfQVwiLFxuXHRcImNhbGVuZGFyT3BlbkJ1dHRvblwiOiBcImFwcF9jYWxlbmRhck9wZW5CdXR0b25fXzNnY3M3XCIsXG5cdFwiY2FsZW5kYXJDcmVhdGVCbG9ja1wiOiBcImFwcF9jYWxlbmRhckNyZWF0ZUJsb2NrX18xanF6d1wiLFxuXHRcImRyb3Bkb3duT3B0aW9uc1wiOiBcImFwcF9kcm9wZG93bk9wdGlvbnNfXzJTMnhvXCIsXG5cdFwiZHJvcGRvd25PcHRpb25cIjogXCJhcHBfZHJvcGRvd25PcHRpb25fXzNERnpMXCIsXG5cdFwidXNlclBhZ2VcIjogXCJhcHBfdXNlclBhZ2VfX0p0OC1rXCIsXG5cdFwidXNlckJhbm5lclwiOiBcImFwcF91c2VyQmFubmVyX18xRk9lRVwiLFxuXHRcInVzZXJCYW5uZXJJbWFnZUJsb2NrXCI6IFwiYXBwX3VzZXJCYW5uZXJJbWFnZUJsb2NrX18yLWNNaVwiLFxuXHRcInVzZXJCYW5uZXJJbWFnZVwiOiBcImFwcF91c2VyQmFubmVySW1hZ2VfX3NNdmRpXCIsXG5cdFwidXNlckJhbm5lckRhdGFCbG9ja1wiOiBcImFwcF91c2VyQmFubmVyRGF0YUJsb2NrX18yNk5YaFwiLFxuXHRcInVzZXJCYW5uZXJEYXRhTmFtZVwiOiBcImFwcF91c2VyQmFubmVyRGF0YU5hbWVfX0FuUFFhXCIsXG5cdFwidXNlckJhbm5lckRhdGFTdGF0dXNcIjogXCJhcHBfdXNlckJhbm5lckRhdGFTdGF0dXNfXzVUTFJtXCIsXG5cdFwidXNlckJhbm5lckRhdGFTdGF0XCI6IFwiYXBwX3VzZXJCYW5uZXJEYXRhU3RhdF9fMWF6V29cIixcblx0XCJ1c2VyQmFubmVyRGF0YVN0YXRUaXRsZVwiOiBcImFwcF91c2VyQmFubmVyRGF0YVN0YXRUaXRsZV9fMzNPWG9cIixcblx0XCJ1c2VyQmFubmVyRGF0YVN0YXRDb250ZW50XCI6IFwiYXBwX3VzZXJCYW5uZXJEYXRhU3RhdENvbnRlbnRfXzFaWWJ6XCIsXG5cdFwidXNlckJhbm5lck93bmVyQnV0dG9uXCI6IFwiYXBwX3VzZXJCYW5uZXJPd25lckJ1dHRvbl9fMWNWOENcIixcblx0XCJ1c2VyU2hhcmVkQ2FsZW5kYXJzXCI6IFwiYXBwX3VzZXJTaGFyZWRDYWxlbmRhcnNfX19qLTFOXCIsXG5cdFwiYWNjb3VudFBhZ2VcIjogXCJhcHBfYWNjb3VudFBhZ2VfX1p6ZzFoXCIsXG5cdFwiYWNjb3VudFBhZ2VNYWluXCI6IFwiYXBwX2FjY291bnRQYWdlTWFpbl9fM2QxQnlcIixcblx0XCJhY2NvdW50SW1hZ2VCbG9ja1wiOiBcImFwcF9hY2NvdW50SW1hZ2VCbG9ja19fM2ZRWkNcIixcblx0XCJhY2NvdW50RGF0YUJsb2NrXCI6IFwiYXBwX2FjY291bnREYXRhQmxvY2tfX1dZQzB5XCIsXG5cdFwiY2FsZW5kYXJQYWdlXCI6IFwiYXBwX2NhbGVuZGFyUGFnZV9fM3BPb2lcIixcblx0XCJiaWdDYWxlbmRhclwiOiBcImFwcF9iaWdDYWxlbmRhcl9fOGpxaHFcIixcblx0XCJkYXRlU3dpdGNoZXJcIjogXCJhcHBfZGF0ZVN3aXRjaGVyX18zLWJpdlwiLFxuXHRcImRhdGVNb250aFwiOiBcImFwcF9kYXRlTW9udGhfX3RqRjNoXCIsXG5cdFwiZGF0ZUJ1dHRvbnNcIjogXCJhcHBfZGF0ZUJ1dHRvbnNfXzFESWMwXCIsXG5cdFwiZGF0ZVN3aXRjaFwiOiBcImFwcF9kYXRlU3dpdGNoX19xSmYySFwiLFxuXHRcImRhdGVMaXN0XCI6IFwiYXBwX2RhdGVMaXN0X18xN0Vrd1wiLFxuXHRcImRhdGVIZWFkaW5nXCI6IFwiYXBwX2RhdGVIZWFkaW5nX18zTmp6VVwiLFxuXHRcImRhdGVDb250ZW50XCI6IFwiYXBwX2RhdGVDb250ZW50X18zcEdfalwiLFxuXHRcImRhdGVFbGVtZW50XCI6IFwiYXBwX2RhdGVFbGVtZW50X18xakJSR1wiLFxuXHRcImRhdGVFbGVtZW50TnVtYmVyXCI6IFwiYXBwX2RhdGVFbGVtZW50TnVtYmVyX18zeFg0RlwiLFxuXHRcImRhdGVTa2lwcGVkXCI6IFwiYXBwX2RhdGVTa2lwcGVkX18xaTR0dFwiLFxuXHRcImV2ZW50TGlzdFwiOiBcImFwcF9ldmVudExpc3RfXzNsYVJNXCIsXG5cdFwiZXZlbnRMaXN0RGF0ZVwiOiBcImFwcF9ldmVudExpc3REYXRlX196M2l6NFwiLFxuXHRcImV2ZW50TGlzdEl0ZW1zXCI6IFwiYXBwX2V2ZW50TGlzdEl0ZW1zX18ybzJ4clwiLFxuXHRcImV2ZW50RWxlbWVudFwiOiBcImFwcF9ldmVudEVsZW1lbnRfX2hEQU1YXCIsXG5cdFwiZXZlbnRFbGVtZW50V3JhcHBlclwiOiBcImFwcF9ldmVudEVsZW1lbnRXcmFwcGVyX19pV09XdlwiLFxuXHRcImV2ZW50RWxlbWVudFRhcmdldFwiOiBcImFwcF9ldmVudEVsZW1lbnRUYXJnZXRfXzFEdnNpXCIsXG5cdFwiZXZlbnRFbGVtZW50RGF0YVwiOiBcImFwcF9ldmVudEVsZW1lbnREYXRhX18zWExpR1wiLFxuXHRcImV2ZW50RWxlbWVudENhdGVnb3J5XCI6IFwiYXBwX2V2ZW50RWxlbWVudENhdGVnb3J5X18zSzlyQVwiLFxuXHRcImV2ZW50RWxlbWVudFRpdGxlXCI6IFwiYXBwX2V2ZW50RWxlbWVudFRpdGxlX18xOXdYS1wiLFxuXHRcImV2ZW50RWxlbWVudER1cmF0aW9uXCI6IFwiYXBwX2V2ZW50RWxlbWVudER1cmF0aW9uX18yY3EtQVwiLFxuXHRcImV2ZW50RWxlbWVudEFycm93XCI6IFwiYXBwX2V2ZW50RWxlbWVudEFycm93X19BMmQ4SFwiLFxuXHRcImV2ZW50TGlzdEFkZFwiOiBcImFwcF9ldmVudExpc3RBZGRfXzJYMDBsXCIsXG5cdFwiZXZlbnRMaXN0QWRkVGV4dFwiOiBcImFwcF9ldmVudExpc3RBZGRUZXh0X18zVTVmelwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2hhcmVkTW9kYWxcIjogXCJtb2RhbHNfc2hhcmVkTW9kYWxfX2g4LTBlXCIsXG5cdFwic2hhcmVkTW9kYWxGb3JtXCI6IFwibW9kYWxzX3NoYXJlZE1vZGFsRm9ybV9fMmJlZG9cIixcblx0XCJzaGFyZWRNb2RhbEZvcm1Vc2VyXCI6IFwibW9kYWxzX3NoYXJlZE1vZGFsRm9ybVVzZXJfXzM1V1VYXCIsXG5cdFwic2hhcmVkTW9kYWxGb3JtSW5wdXRcIjogXCJtb2RhbHNfc2hhcmVkTW9kYWxGb3JtSW5wdXRfX3MxdHdlXCIsXG5cdFwic2hhcmVkTW9kYWxGb3JtVXNlckF2YXRhclwiOiBcIm1vZGFsc19zaGFyZWRNb2RhbEZvcm1Vc2VyQXZhdGFyX18zc19XWlwiLFxuXHRcInNoYXJlZE1vZGFsRm9ybUhpbnRcIjogXCJtb2RhbHNfc2hhcmVkTW9kYWxGb3JtSGludF9fMlJMX0xcIixcblx0XCJzaGFyZWRNb2RhbEZvcm1CdXR0b25cIjogXCJtb2RhbHNfc2hhcmVkTW9kYWxGb3JtQnV0dG9uX181aWU1MVwiLFxuXHRcImNhbGVuZGFyTW9kYWxcIjogXCJtb2RhbHNfY2FsZW5kYXJNb2RhbF9fM3lwVW9cIixcblx0XCJjYWxlbmRhck1vZGFsRm9ybVwiOiBcIm1vZGFsc19jYWxlbmRhck1vZGFsRm9ybV9fM2ZwNTVcIixcblx0XCJjYWxlbmRhck1vZGFsTGFiZWxcIjogXCJtb2RhbHNfY2FsZW5kYXJNb2RhbExhYmVsX18yNjFhUVwiLFxuXHRcImNhbGVuZGFyTW9kYWxJbnB1dFwiOiBcIm1vZGFsc19jYWxlbmRhck1vZGFsSW5wdXRfXzMtc3ROXCIsXG5cdFwiY2FsZW5kYXJNb2RhbEFwcGx5XCI6IFwibW9kYWxzX2NhbGVuZGFyTW9kYWxBcHBseV9fbFVxZHFcIixcblx0XCJldmVudE1vZGFsXCI6IFwibW9kYWxzX2V2ZW50TW9kYWxfXzJTeDBSXCIsXG5cdFwiZXZlbnRNb2RhbEZvcm1cIjogXCJtb2RhbHNfZXZlbnRNb2RhbEZvcm1fXzItNG5lXCIsXG5cdFwiZXZlbnRNb2RhbElucHV0XCI6IFwibW9kYWxzX2V2ZW50TW9kYWxJbnB1dF9fMndpQ01cIixcblx0XCJldmVudE1vZGFsVGV4dGFyZWFcIjogXCJtb2RhbHNfZXZlbnRNb2RhbFRleHRhcmVhX19fdGhBdlwiLFxuXHRcImV2ZW50TW9kYWxTZWxlY3RcIjogXCJtb2RhbHNfZXZlbnRNb2RhbFNlbGVjdF9fc2VZZ1JcIixcblx0XCJldmVudE1vZGFsRGF0ZVRpbWVCb3hcIjogXCJtb2RhbHNfZXZlbnRNb2RhbERhdGVUaW1lQm94X18zckthSlwiLFxuXHRcImV2ZW50TW9kYWxEYXRlXCI6IFwibW9kYWxzX2V2ZW50TW9kYWxEYXRlX18zbjlsM1wiLFxuXHRcImV2ZW50TW9kYWxUaW1lXCI6IFwibW9kYWxzX2V2ZW50TW9kYWxUaW1lX18zSjdVLVwiLFxuXHRcImV2ZW50TW9kYWxCb3hcIjogXCJtb2RhbHNfZXZlbnRNb2RhbEJveF9fcWtyOThcIixcblx0XCJldmVudE1vZGFsQXBwbHlcIjogXCJtb2RhbHNfZXZlbnRNb2RhbEFwcGx5X18zT0oyTVwiLFxuXHRcImV2ZW50TW9kYWxEZWxldGVcIjogXCJtb2RhbHNfZXZlbnRNb2RhbERlbGV0ZV9fM1BaRXFcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkxvZ28iLCJDYWxlbmRhciIsIkhpZGRlbiIsIlNoYXJlZCIsIkFjY291bnREcm9wZG93biIsIkJhciIsInVzZXIiLCJiYXIiLCJiYXJPcHRpb25zIiwiYmFyT3B0aW9uc0J1dHRvbiIsImJhck9wdGlvbnNCdXR0b25BY3RpdmUiLCJiYXJBY2NvdW50IiwiRXZlbnRMaXN0IiwiRGF0ZVN3aXRjaGVyIiwiRGF0ZUxpc3QiLCJCaWdDYWxlbmRhciIsImNhbGVuZGFyIiwiYWNjZXNzVG9rZW4iLCJkdCIsIm1vbnRoIiwic2V0TW9udGgiLCJnZXRNb250aCIsInllYXIiLCJzZXRZZWFyIiwiZ2V0RnVsbFllYXIiLCJkYXlzIiwic2V0RGF5cyIsImdldERhdGUiLCJzZWxlY3RlZERheSIsInNldFNlbGVjdGVkRGF5IiwiYmlnQ2FsZW5kYXIiLCJDaXJjbGUiLCJIZWFkaW5nIiwiZGF0ZUhlYWRpbmciLCJoYW5kbGVDbGljayIsInRvZGF5Iiwid2Vla2RheSIsImdldERheSIsIml0ZW1MaXN0Iiwic2tpcCIsImRhdGVTa2lwcGVkIiwiZGF0ZUVsZW1lbnROdW1iZXIiLCJkb3QiLCJqIiwiZUQiLCJnZXRUaW1lIiwiZGF0ZUVsZW1lbnQiLCJkYXRlTGlzdCIsImRhdGVDb250ZW50IiwiQXJyb3ciLCJtb250aE5hbWVzIiwiaGFuZGxlQ2hhbmdlIiwiZGF0ZVN3aXRjaGVyIiwiZGF0ZU1vbnRoIiwiZGF0ZUJ1dHRvbnMiLCJkYXRlU3dpdGNoIiwiZGVzdHJveUNvb2tpZSIsIkltYWdlIiwiYXhpb3MiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJsb2dvdXQiLCJhcGkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiQVBJX1VSTCIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJiYXJBY2NvdW50QnV0dG9uIiwiYmFyQWNjb3VudEltYWdlIiwiaW1hZ2UiLCJkcm9wZG93bkJhck9wdGlvbnMiLCJkcm9wZG93bkJhck9wdGlvbiIsIlBsdXNDaXJjbGUiLCJFdmVudENyZWF0ZSIsImNhbGVuZGFySWQiLCJzZXRFdmVudHMiLCJkYXkiLCJjcmVhdGVFdmVudCIsInByZXZTdGF0ZSIsInRpdGxlIiwiY2F0ZWdvcnkiLCJldmVudExpc3RBZGQiLCJldmVudExpc3RBZGRUZXh0IiwiRXZlbnRNb2RhbCIsIkV2ZW50RWxlbWVudCIsImV2ZW50U3RhdGUiLCJzZXRFdmVudFN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsImV2ZW50RWxlbWVudCIsImV2ZW50RWxlbWVudFdyYXBwZXIiLCJldmVudEVsZW1lbnRUYXJnZXQiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJldmVudEVsZW1lbnREYXRhIiwiZXZlbnRFbGVtZW50Q2F0ZWdvcnkiLCJldmVudEVsZW1lbnRUaXRsZSIsImV2ZW50RWxlbWVudEFycm93Iiwic2VsZWN0ZWRFdmVudHMiLCJldmVudExpc3QiLCJldmVudExpc3REYXRlIiwiZXZlbnRMaXN0SXRlbXMiLCJIZWFkIiwic2NzcyIsIkFwcGxpY2F0aW9uIiwiYXBwIiwiTW9kYWwiLCJzZXRUaXRsZSIsInNldENvbnRlbnQiLCJzZXRDYXRlZ29yeSIsImRhdGUiLCJzZXREYXRlIiwidGltZSIsInNldFRpbWUiLCJoYW5kbGVSZXNldCIsImNhbGVuZGFyX2lkIiwiaXRlbSIsImhhbmRsZVN1bWJpdCIsIm9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwidXRjVGltZSIsInBhdGNoIiwiZXZlbnRNb2RhbCIsInN0b3BQcm9wYWdhdGlvbiIsImV2ZW50TW9kYWxGb3JtIiwiZXZlbnRNb2RhbElucHV0IiwiZXZlbnRNb2RhbFRleHRhcmVhIiwiZXZlbnRNb2RhbFNlbGVjdCIsImV2ZW50TW9kYWxEYXRlVGltZUJveCIsImV2ZW50TW9kYWxEYXRlIiwiZXZlbnRNb2RhbFRpbWUiLCJldmVudE1vZGFsQm94IiwiZXZlbnRNb2RhbEFwcGx5IiwiZXZlbnRNb2RhbERlbGV0ZSIsImFkZEhvbGlkYXlzIiwicmVzcG9uc2UiLCJjb3VudHJ5IiwiY291bnRyeUNvZGUiLCJDb25uZWN0IiwiU2V0dGluZ3MiLCJFdmVudCIsIlBhcnR5IiwiTG9jayIsIlRpbWUiLCJQbHVzIiwiZmlsbCIsIkRvdHMiLCJSZW1vdmUiLCJub29raWVzIiwibWFpbiIsInBhZ2VUaXRsZSIsImNhbGVuZGFyUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvb2tpZSIsInJlZGlyZWN0IiwicGVybWFuZW50Il0sInNvdXJjZVJvb3QiOiIifQ==