(() => {
var exports = {};
exports.id = "pages/calendars";
exports.ids = ["pages/calendars"];
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

/***/ "./src/components/Calendars/CalendarElement.js":
/*!*****************************************************!*\
  !*** ./src/components/Calendars/CalendarElement.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var _Dropdowns_CalendarDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dropdowns/CalendarDropdown */ "./src/components/Dropdowns/CalendarDropdown.js");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Calendars\\CalendarElement.js";









const CalendarElement = ({
  calendar,
  setCalendars,
  accessToken
}) => {
  dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()));
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  let upcoming = 0;
  let holiday = 0;

  for (let i = 0; i < calendar.events.length; i++) if (!calendar.events[i].system) upcoming++;else holiday++;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarElement),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarData),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarTitle),
        children: [calendar.title, pathname.match(/^\/shared/) ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Dropdowns_CalendarDropdown__WEBPACK_IMPORTED_MODULE_5__.default, {
          calendar: calendar,
          setCalendars: setCalendars,
          accessToken: accessToken
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarSpan),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__.Party, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, undefined), upcoming, " events"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, undefined), calendar.main && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarSpan),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__.Party, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }, undefined), holiday, " holidays"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }, undefined), calendar.shared ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarSpan),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__.Link, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, undefined), "Shared"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 6
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarSpan),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__.Lock, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }, undefined), "Private"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarSpan),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__.Time, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, undefined), "Created ", dayjs__WEBPACK_IMPORTED_MODULE_1___default()(calendar.created_at).fromNow()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: `/calendars/${calendar.id}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_7___default().calendarOpenButton),
        children: "Open"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarElement);

/***/ }),

/***/ "./src/components/Calendars/CalendarList.js":
/*!**************************************************!*\
  !*** ./src/components/Calendars/CalendarList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalendarElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarElement */ "./src/components/Calendars/CalendarElement.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Calendars\\CalendarList.js";



const CalendarList = ({
  calendars,
  setCalendars,
  accessToken
}) => {
  return calendars.map(calendar => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CalendarElement__WEBPACK_IMPORTED_MODULE_0__.default, {
      calendar: calendar,
      setCalendars: setCalendars,
      accessToken: accessToken
    }, calendar.id, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarList);

/***/ }),

/***/ "./src/components/Calendars/NewCalendar.js":
/*!*************************************************!*\
  !*** ./src/components/Calendars/NewCalendar.js ***!
  \*************************************************/
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
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Calendars\\NewCalendar.js";





const NewCalendar = ({
  setCalendars,
  user
}) => {
  const addCalendar = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: user.token
      },
      data: {},
      url: `${"http://127.0.0.1:8000/api"}/calendars/my`
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(api.url, api.data, {
      headers: api.headers
    }).then(response => {
      setCalendars(prevState => [...prevState, Object.assign(response.data.calendar, {
        events: {
          length: 0
        },
        users: [user]
      })]);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_3___default().calendarCreateBlock),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      onClick: () => addCalendar(),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_1__.Plus, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewCalendar);

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

/***/ "./src/components/Dropdowns/CalendarDropdown.js":
/*!******************************************************!*\
  !*** ./src/components/Dropdowns/CalendarDropdown.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modals_CalendarModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/CalendarModal */ "./src/components/Modals/CalendarModal.js");
/* harmony import */ var _Modals_SharingModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/SharingModal */ "./src/components/Modals/SharingModal.js");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Dropdowns\\CalendarDropdown.js";









const CalendarDrowdown = props => {
  const {
    0: editing,
    1: setEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: sharing,
    1: setSharing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const deleteRecord = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: props.accessToken
      },
      url: `${"http://127.0.0.1:8000/api"}/calendars/${props.calendar.id}`
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default().delete(api.url, {
      headers: api.headers
    }).finally(() => {
      props.setCalendars(prevState => prevState.filter(item => item.id !== props.calendar.id));
    });
  };

  const editRecord = fin => {
    setEditing(!editing);
    fin && setToggle(!toggle);
  };

  const sharedMenu = fin => {
    setSharing(!sharing);
    fin && setToggle(!toggle);
  };

  const hideCalendar = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://127.0.0.1:8000/api"}/calendars/${props.calendar.id}/hide`, null, {
      headers: {
        Authorization: props.accessToken
      }
    }).finally(() => {
      props.setCalendars(prevState => prevState.filter(item => item.id !== props.calendar.id));
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().calendarButtonMore),
      onClick: () => setToggle(!toggle),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_4__.Dots, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, undefined), toggle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdownOptions),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdownOption),
        onClick: () => editRecord(),
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }, undefined), props.calendar.main || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdownOption),
        onClick: () => sharedMenu(),
        children: "Share"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, undefined), props.calendar.main || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdownOption),
        onClick: () => hideCalendar(),
        children: "Hide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined), props.calendar.main || /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropdownOption),
        onClick: () => deleteRecord(),
        name: "danger",
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }, undefined), editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Modals_CalendarModal__WEBPACK_IMPORTED_MODULE_2__.default, {
        calendar: props.calendar,
        editing: editing,
        editRecord: editRecord,
        accessToken: props.accessToken
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, undefined), sharing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Modals_SharingModal__WEBPACK_IMPORTED_MODULE_3__.default, {
        calendar_id: props.calendar.id,
        users: props.calendar.users,
        sharing: sharing,
        sharedMenu: sharedMenu,
        accessToken: props.accessToken
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarDrowdown);

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

/***/ "./src/components/Modals/CalendarModal.js":
/*!************************************************!*\
  !*** ./src/components/Modals/CalendarModal.js ***!
  \************************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/modals.module.scss */ "./src/styles/modals.module.scss");
/* harmony import */ var _styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Modals\\CalendarModal.js";







const CalendarModal = ({
  calendar,
  editing,
  editRecord,
  accessToken
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(calendar.title);

  const applyChanges = () => {
    const api = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: accessToken
      },
      data: {
        title: title
      },
      url: `${"http://127.0.0.1:8000/api"}/calendars/${calendar.id}`
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch(api.url, api.data, {
      headers: api.headers
    }).finally(() => {
      editRecord(true);
      router.reload();
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
    isOpen: editing,
    contentLabel: "Calendar Modal",
    className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5___default().calendarModal),
    ariaHideApp: false,
    onRequestClose: e => {
      e.stopPropagation();
      editRecord(true);
    },
    shouldCloseOnOverlayClick: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5___default().calendarModalForm),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
        htmlFor: "calendarTitle",
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5___default().calendarModalLabel),
        children: ["Calendar Title", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5___default().calendarModalInput),
          id: "calendarTitle",
          placeholder: "Calendar title",
          value: title,
          onChange: e => setTitle(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_5___default().calendarModalApply),
        type: "submit",
        onClick: e => applyChanges(e.preventDefault()),
        children: "Apply"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarModal);

/***/ }),

/***/ "./src/components/Modals/SharingModal.js":
/*!***********************************************!*\
  !*** ./src/components/Modals/SharingModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/modals.module.scss */ "./src/styles/modals.module.scss");
/* harmony import */ var _styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_icons_Misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/icons/Misc */ "./src/lib/icons/Misc.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\components\\Modals\\SharingModal.js";









const EventModal = ({
  calendar_id,
  users,
  sharing,
  sharedMenu,
  accessToken
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: names,
    1: setNames
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(() => {
    const namesArr = [];

    for (let i = 0; i < users.length; i++) namesArr.push(users[i].name);

    return namesArr;
  });
  const {
    0: newName,
    1: setNewName
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");

  const onAdd = () => {
    if (newName.length === 0) return;
    if (names.indexOf(newName) !== -1) return;
    setNames([...names, newName]);
    setNewName("");
  };

  const onRemove = name => setNames(names.filter(item => item !== name));

  const onSubmit = () => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"http://127.0.0.1:8000/api"}/calendars/${calendar_id}/share`, {
      users: JSON.stringify(names)
    }, {
      headers: {
        Authorization: accessToken
      }
    }).finally(() => {
      sharedMenu(true);
      router.reload();
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
    isOpen: sharing,
    contentLabel: "Sharing calendar",
    className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModal),
    ariaHideApp: false,
    onRequestClose: e => {
      e.stopPropagation();
      sharedMenu(true);
    },
    shouldCloseOnOverlayClick: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Share calendar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalForm),
      onSubmit: e => onSubmit(e.preventDefault()),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormHint),
        children: "Enter user's name or ShareID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormUser),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          name: "Add",
          value: newName,
          onChange: e => setNewName(e.target.value),
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormInput)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "button",
          value: "Add",
          onClick: e => onAdd(e.preventDefault()),
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormButton)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, undefined), names.map(name => {
        let image = "https://d3djy7pad2souj.cloudfront.net/avatar_p.png";

        for (let i = 0; i < users.length; i++) if (users[i].name === name) image = users[i].image;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormUser),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormUserAvatar),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: image,
              alt: "avatarPreview",
              width: 34,
              height: 34,
              quality: 50,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 8
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            readOnly: true,
            value: name,
            className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormInput)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 8
          }, undefined), names.indexOf(name) === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            name: name,
            disabled: true,
            onClick: e => onRemove(e.currentTarget.name),
            className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormButton),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_5__.Remove, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 10
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 9
          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            name: name,
            onClick: e => onRemove(e.currentTarget.name),
            className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormButton),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_lib_icons_Misc__WEBPACK_IMPORTED_MODULE_5__.Remove, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 10
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 9
          }, undefined)]
        }, names.indexOf(name), true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 7
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
        type: "submit",
        value: "Apply",
        className: (_styles_modals_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sharedModalFormButton)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventModal);

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

/***/ "./src/pages/calendars/index.js":
/*!**************************************!*\
  !*** ./src/pages/calendars/index.js ***!
  \**************************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Calendars_CalendarList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Calendars/CalendarList */ "./src/components/Calendars/CalendarList.js");
/* harmony import */ var _components_Calendars_NewCalendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Calendars/NewCalendar */ "./src/components/Calendars/NewCalendar.js");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/app.module.scss */ "./src/styles/app.module.scss");
/* harmony import */ var _styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\\u0412\u043B\u0430\u0434\\Desktop\\mytc\\src\\pages\\calendars\\index.js";









const Calendars = ({
  user,
  data
}) => {
  const {
    0: calendars,
    1: setCalendars
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    title: "Your calendars",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().pageTitle),
      children: "Your calendars"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: (_styles_app_module_scss__WEBPACK_IMPORTED_MODULE_8___default().calendarsPage),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Calendars_CalendarList__WEBPACK_IMPORTED_MODULE_4__.default, {
        calendars: calendars,
        setCalendars: setCalendars,
        accessToken: user.token
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Calendars_NewCalendar__WEBPACK_IMPORTED_MODULE_5__.default, {
        setCalendars: setCalendars,
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, undefined);
};

const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONProps)(async function getServerSideProps(ctx) {
  const cookie = nookies__WEBPACK_IMPORTED_MODULE_2___default().get(ctx).user;
  if (!!!cookie) return {
    redirect: {
      permanent: false,
      destination: "/signin"
    }
  };
  const user = JSON.parse(cookie);
  const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${"http://127.0.0.1:8000/api"}/calendars/my/private`, {
    headers: {
      Accept: "application/json",
      Authorization: user.token
    }
  });
  return {
    props: {
      user: user,
      data: response.data
    }
  };
}, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__.withSuperJSONPage)(Calendars));

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

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/relativeTime":
/*!********************************************!*\
  !*** external "dayjs/plugin/relativeTime" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/calendars/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLGtKQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0Jhc2UvQmFyLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhcnMvQ2FsZW5kYXJFbGVtZW50LmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhcnMvQ2FsZW5kYXJMaXN0LmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhcnMvTmV3Q2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3ducy9BY2NvdW50RHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3ducy9DYWxlbmRhckRyb3Bkb3duLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9jb21wb25lbnRzL01vZGFscy9DYWxlbmRhck1vZGFsLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvY29tcG9uZW50cy9Nb2RhbHMvU2hhcmluZ01vZGFsLmpzIiwid2VicGFjazovL3dlZXZlbHkvLi9zcmMvbGliL2ljb25zL0JyYW5kLmpzeCIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL2xpYi9pY29ucy9NaXNjLmpzeCIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL3BhZ2VzL2NhbGVuZGFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vc3JjL3N0eWxlcy9hcHAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VldmVseS8uL3NyYy9zdHlsZXMvbW9kYWxzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3dlZXZlbHkvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly93ZWV2ZWx5Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwiZGF5anNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3dlZXZlbHkvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3QtbW9kYWxcIiIsIndlYnBhY2s6Ly93ZWV2ZWx5L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vd2VldmVseS9pZ25vcmVkfEM6XFxVc2Vyc1xc0JLQu9Cw0LRcXERlc2t0b3BcXG15dGNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IExvZ28gfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL0JyYW5kXCJcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIEhpZGRlbiwgU2hhcmVkIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29ucy9NaXNjXCJcclxuaW1wb3J0IEFjY291bnREcm9wZG93biBmcm9tIFwiLi4vRHJvcGRvd25zL0FjY291bnREcm9wZG93blwiXHJcblxyXG5jb25zdCBCYXIgPSAoeyB1c2VyIH0pID0+IHtcclxuXHRjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyT3B0aW9uc30+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nL2NhbGVuZGFycyc+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhck9wdGlvbnNCdXR0b259PlxyXG5cdFx0XHRcdFx0XHQ8TG9nbyAvPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy9jYWxlbmRhcnMnPlxyXG5cdFx0XHRcdFx0e3BhdGhuYW1lLm1hdGNoKC9eXFwvY2FsZW5kYXJzLykgPyAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJPcHRpb25zQnV0dG9ufSAke3N0eWxlcy5iYXJPcHRpb25zQnV0dG9uQWN0aXZlfWB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXIgLz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhck9wdGlvbnNCdXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdDxDYWxlbmRhciAvPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaGFyZWQnPlxyXG5cdFx0XHRcdFx0e3BhdGhuYW1lLm1hdGNoKC9eXFwvc2hhcmVkLykgPyAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJPcHRpb25zQnV0dG9ufSAke3N0eWxlcy5iYXJPcHRpb25zQnV0dG9uQWN0aXZlfWB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8U2hhcmVkIC8+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYXJPcHRpb25zQnV0dG9ufT5cclxuXHRcdFx0XHRcdFx0XHQ8U2hhcmVkIC8+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nL2hpZGRlbic+XHJcblx0XHRcdFx0XHR7cGF0aG5hbWUubWF0Y2goL15cXC9oaWRkZW4vKSA/IChcclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhck9wdGlvbnNCdXR0b259ICR7c3R5bGVzLmJhck9wdGlvbnNCdXR0b25BY3RpdmV9YH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxIaWRkZW4gLz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhck9wdGlvbnNCdXR0b259PlxyXG5cdFx0XHRcdFx0XHRcdDxIaWRkZW4gLz5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQWNjb3VudH0+XHJcblx0XHRcdFx0PEFjY291bnREcm9wZG93biB1c2VyPXt1c2VyfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyXHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZVwiXHJcblxyXG5pbXBvcnQgeyBMb2NrLCBMaW5rIGFzIExpbmtTVkcsIFBhcnR5LCBUaW1lIH0gZnJvbSBcIi4uLy4uL2xpYi9pY29ucy9NaXNjXCJcclxuaW1wb3J0IENhbGVuZGFyRHJvd2Rvd24gZnJvbSBcIi4uL0Ryb3Bkb3ducy9DYWxlbmRhckRyb3Bkb3duXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBDYWxlbmRhckVsZW1lbnQgPSAoeyBjYWxlbmRhciwgc2V0Q2FsZW5kYXJzLCBhY2Nlc3NUb2tlbiB9KSA9PiB7XHJcblx0ZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSlcclxuXHRjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxyXG5cdGxldCB1cGNvbWluZyA9IDBcclxuXHRsZXQgaG9saWRheSA9IDBcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyLmV2ZW50cy5sZW5ndGg7IGkrKylcclxuXHRcdGlmICghY2FsZW5kYXIuZXZlbnRzW2ldLnN5c3RlbSkgdXBjb21pbmcrK1xyXG5cdFx0ZWxzZSBob2xpZGF5KytcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJFbGVtZW50fT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhckRhdGF9PlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhclRpdGxlfT5cclxuXHRcdFx0XHRcdHtjYWxlbmRhci50aXRsZX1cclxuXHRcdFx0XHRcdHtwYXRobmFtZS5tYXRjaCgvXlxcL3NoYXJlZC8pID8gbnVsbCA6IChcclxuXHRcdFx0XHRcdFx0PENhbGVuZGFyRHJvd2Rvd25cclxuXHRcdFx0XHRcdFx0XHRjYWxlbmRhcj17Y2FsZW5kYXJ9XHJcblx0XHRcdFx0XHRcdFx0c2V0Q2FsZW5kYXJzPXtzZXRDYWxlbmRhcnN9XHJcblx0XHRcdFx0XHRcdFx0YWNjZXNzVG9rZW49e2FjY2Vzc1Rva2VufVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyU3Bhbn0+XHJcblx0XHRcdFx0XHQ8UGFydHkgLz5cclxuXHRcdFx0XHRcdHt1cGNvbWluZ30gZXZlbnRzXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdHtjYWxlbmRhci5tYWluICYmIChcclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyU3Bhbn0+XHJcblx0XHRcdFx0XHRcdDxQYXJ0eSAvPlxyXG5cdFx0XHRcdFx0XHR7aG9saWRheX0gaG9saWRheXNcclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtjYWxlbmRhci5zaGFyZWQgPyAoXHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhclNwYW59PlxyXG5cdFx0XHRcdFx0XHQ8TGlua1NWRyAvPlxyXG5cdFx0XHRcdFx0XHRTaGFyZWRcclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJTcGFufT5cclxuXHRcdFx0XHRcdFx0PExvY2sgLz5cclxuXHRcdFx0XHRcdFx0UHJpdmF0ZVxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJTcGFufT5cclxuXHRcdFx0XHRcdDxUaW1lIC8+XHJcblx0XHRcdFx0XHRDcmVhdGVkIHtkYXlqcyhjYWxlbmRhci5jcmVhdGVkX2F0KS5mcm9tTm93KCl9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PExpbmsgaHJlZj17YC9jYWxlbmRhcnMvJHtjYWxlbmRhci5pZH1gfT5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyT3BlbkJ1dHRvbn0+T3BlbjwvYnV0dG9uPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyRWxlbWVudFxyXG4iLCJpbXBvcnQgQ2FsZW5kYXJFbGVtZW50IGZyb20gXCIuL0NhbGVuZGFyRWxlbWVudFwiXHJcblxyXG5jb25zdCBDYWxlbmRhckxpc3QgPSAoeyBjYWxlbmRhcnMsIHNldENhbGVuZGFycywgYWNjZXNzVG9rZW4gfSkgPT4ge1xyXG5cdHJldHVybiBjYWxlbmRhcnMubWFwKChjYWxlbmRhcikgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PENhbGVuZGFyRWxlbWVudFxyXG5cdFx0XHRcdGtleT17Y2FsZW5kYXIuaWR9XHJcblx0XHRcdFx0Y2FsZW5kYXI9e2NhbGVuZGFyfVxyXG5cdFx0XHRcdHNldENhbGVuZGFycz17c2V0Q2FsZW5kYXJzfVxyXG5cdFx0XHRcdGFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhckxpc3RcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IFBsdXMgfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL01pc2NcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYXBwLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IE5ld0NhbGVuZGFyID0gKHsgc2V0Q2FsZW5kYXJzLCB1c2VyIH0pID0+IHtcclxuXHRjb25zdCBhZGRDYWxlbmRhciA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGFwaSA9IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogdXNlci50b2tlbixcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGF0YToge30sXHJcblx0XHRcdHVybDogYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2FsZW5kYXJzL215YCxcclxuXHRcdH1cclxuXHRcdGF4aW9zXHJcblx0XHRcdC5wb3N0KGFwaS51cmwsIGFwaS5kYXRhLCB7XHJcblx0XHRcdFx0aGVhZGVyczogYXBpLmhlYWRlcnMsXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdHNldENhbGVuZGFycygocHJldlN0YXRlKSA9PiBbXHJcblx0XHRcdFx0XHQuLi5wcmV2U3RhdGUsXHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHJlc3BvbnNlLmRhdGEuY2FsZW5kYXIsIHtcclxuXHRcdFx0XHRcdFx0ZXZlbnRzOiB7IGxlbmd0aDogMCB9LFxyXG5cdFx0XHRcdFx0XHR1c2VyczogW3VzZXJdLFxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XSlcclxuXHRcdFx0fSlcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJDcmVhdGVCbG9ja30+XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQ2FsZW5kYXIoKX0+XHJcblx0XHRcdFx0PFBsdXMgLz5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0NhbGVuZGFyXHJcbiIsImltcG9ydCB7IGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBBY2NvdW50RHJvcGRvd24gPSAoeyB1c2VyIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBpID0ge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiB1c2VyLnRva2VuLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cmw6IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2F1dGgvc2lnbm91dGAsXHJcblx0XHR9XHJcblx0XHRheGlvc1xyXG5cdFx0XHQucG9zdChhcGkudXJsLCBudWxsLCB7XHJcblx0XHRcdFx0aGVhZGVyczogYXBpLmhlYWRlcnMsXHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0ZGVzdHJveUNvb2tpZShudWxsLCBcInVzZXJcIiwgeyBwYXRoOiBcIi9cIiB9KVxyXG5cdFx0XHRcdHJvdXRlci5yZXBsYWNlKFwiL1wiKVxyXG5cdFx0XHRcdHJldHVybiBcIkdvb2RieWUhXCJcclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJhckFjY291bnRCdXR0b259XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhckFjY291bnRJbWFnZX0+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0c3JjPXt1c2VyLmltYWdlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5iYXJBY2NvdW50SW1hZ2V9XHJcblx0XHRcdFx0XHRcdHdpZHRoPXszNH1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXszNH1cclxuXHRcdFx0XHRcdFx0YWx0PSdhdmF0YXJQcmV2aWV3J1xyXG5cdFx0XHRcdFx0XHRxdWFsaXR5PXs2MH1cclxuXHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb3ZlcidcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHR7dG9nZ2xlICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duQmFyT3B0aW9uc30+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvYWNjb3VudCcgcGFzc0hyZWY+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25CYXJPcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdEFjY291bnRcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtgL3VzZXIvJHt1c2VyLm5hbWV9YH0+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25CYXJPcHRpb259PlxyXG5cdFx0XHRcdFx0XHRcdFB1YmxpYyBwcm9maWxlXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bkJhck9wdGlvbn1cclxuXHRcdFx0XHRcdFx0bmFtZT0nZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0TG9nb3V0XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudERyb3Bkb3duXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5pbXBvcnQgQ2FsZW5kYXJNb2RhbCBmcm9tIFwiLi4vTW9kYWxzL0NhbGVuZGFyTW9kYWxcIlxyXG5pbXBvcnQgU2hhcmluZ01vZGFsIGZyb20gXCIuLi9Nb2RhbHMvU2hhcmluZ01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCB7IERvdHMgfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL01pc2NcIlxyXG5cclxuY29uc3QgQ2FsZW5kYXJEcm93ZG93biA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IFtlZGl0aW5nLCBzZXRFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtzaGFyaW5nLCBzZXRTaGFyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgZGVsZXRlUmVjb3JkID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBpID0ge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiBwcm9wcy5hY2Nlc3NUb2tlbixcclxuXHRcdFx0fSxcclxuXHRcdFx0dXJsOiBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9jYWxlbmRhcnMvJHtwcm9wcy5jYWxlbmRhci5pZH1gLFxyXG5cdFx0fVxyXG5cdFx0YXhpb3NcclxuXHRcdFx0LmRlbGV0ZShhcGkudXJsLCB7XHJcblx0XHRcdFx0aGVhZGVyczogYXBpLmhlYWRlcnMsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHRwcm9wcy5zZXRDYWxlbmRhcnMoKHByZXZTdGF0ZSkgPT5cclxuXHRcdFx0XHRcdHByZXZTdGF0ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb3BzLmNhbGVuZGFyLmlkKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGVkaXRSZWNvcmQgPSAoZmluKSA9PiB7XHJcblx0XHRzZXRFZGl0aW5nKCFlZGl0aW5nKVxyXG5cdFx0ZmluICYmIHNldFRvZ2dsZSghdG9nZ2xlKVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2hhcmVkTWVudSA9IChmaW4pID0+IHtcclxuXHRcdHNldFNoYXJpbmcoIXNoYXJpbmcpXHJcblx0XHRmaW4gJiYgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcblx0fVxyXG5cclxuXHRjb25zdCBoaWRlQ2FsZW5kYXIgPSAoKSA9PiB7XHJcblx0XHRheGlvc1xyXG5cdFx0XHQucG9zdChcclxuXHRcdFx0XHRgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9jYWxlbmRhcnMvJHtwcm9wcy5jYWxlbmRhci5pZH0vaGlkZWAsXHJcblx0XHRcdFx0bnVsbCxcclxuXHRcdFx0XHR7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogcHJvcHMuYWNjZXNzVG9rZW4gfSB9XHJcblx0XHRcdClcclxuXHRcdFx0LmZpbmFsbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHByb3BzLnNldENhbGVuZGFycygocHJldlN0YXRlKSA9PlxyXG5cdFx0XHRcdFx0cHJldlN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvcHMuY2FsZW5kYXIuaWQpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5jYWxlbmRhckJ1dHRvbk1vcmV9XHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PERvdHMgLz5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdHt0b2dnbGUgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25PcHRpb25zfT5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25PcHRpb259XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGVkaXRSZWNvcmQoKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0RWRpdFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR7cHJvcHMuY2FsZW5kYXIubWFpbiB8fCAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bk9wdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzaGFyZWRNZW51KCl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRTaGFyZVxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7cHJvcHMuY2FsZW5kYXIubWFpbiB8fCAoXHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bk9wdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoaWRlQ2FsZW5kYXIoKX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEhpZGVcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e3Byb3BzLmNhbGVuZGFyLm1haW4gfHwgKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25PcHRpb259XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlUmVjb3JkKCl9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nZGFuZ2VyJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0RGVsZXRlXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtlZGl0aW5nICYmIChcclxuXHRcdFx0XHRcdFx0PENhbGVuZGFyTW9kYWxcclxuXHRcdFx0XHRcdFx0XHRjYWxlbmRhcj17cHJvcHMuY2FsZW5kYXJ9XHJcblx0XHRcdFx0XHRcdFx0ZWRpdGluZz17ZWRpdGluZ31cclxuXHRcdFx0XHRcdFx0XHRlZGl0UmVjb3JkPXtlZGl0UmVjb3JkfVxyXG5cdFx0XHRcdFx0XHRcdGFjY2Vzc1Rva2VuPXtwcm9wcy5hY2Nlc3NUb2tlbn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7c2hhcmluZyAmJiAoXHJcblx0XHRcdFx0XHRcdDxTaGFyaW5nTW9kYWxcclxuXHRcdFx0XHRcdFx0XHRjYWxlbmRhcl9pZD17cHJvcHMuY2FsZW5kYXIuaWR9XHJcblx0XHRcdFx0XHRcdFx0dXNlcnM9e3Byb3BzLmNhbGVuZGFyLnVzZXJzfVxyXG5cdFx0XHRcdFx0XHRcdHNoYXJpbmc9e3NoYXJpbmd9XHJcblx0XHRcdFx0XHRcdFx0c2hhcmVkTWVudT17c2hhcmVkTWVudX1cclxuXHRcdFx0XHRcdFx0XHRhY2Nlc3NUb2tlbj17cHJvcHMuYWNjZXNzVG9rZW59XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhckRyb3dkb3duXHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhc2UvQmFyXCJcclxuaW1wb3J0IHNjc3MgZnJvbSBcIi4uL3N0eWxlcy9hcHAubW9kdWxlLnNjc3NcIlxyXG5cclxuY29uc3QgQXBwbGljYXRpb24gPSAoeyBjaGlsZHJlbiwgdXNlciwgdGl0bGUgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e3RpdGxlfSAmIzg3Mzk7IE1ZVEM8L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRuYW1lPSd2aWV3cG9ydCdcclxuXHRcdFx0XHRcdGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c2Nzcy5hcHB9PlxyXG5cdFx0XHRcdDxCYXIgdXNlcj17dXNlcn0gLz5cclxuXHRcdFx0XHQ8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb25cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL21vZGFscy5tb2R1bGUuc2Nzc1wiXHJcblxyXG5jb25zdCBDYWxlbmRhck1vZGFsID0gKHsgY2FsZW5kYXIsIGVkaXRpbmcsIGVkaXRSZWNvcmQsIGFjY2Vzc1Rva2VuIH0pID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoY2FsZW5kYXIudGl0bGUpXHJcblxyXG5cdGNvbnN0IGFwcGx5Q2hhbmdlcyA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGFwaSA9IHtcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4sXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0aXRsZTogdGl0bGUsXHJcblx0XHRcdH0sXHJcblx0XHRcdHVybDogYCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2FsZW5kYXJzLyR7Y2FsZW5kYXIuaWR9YCxcclxuXHRcdH1cclxuXHRcdGF4aW9zXHJcblx0XHRcdC5wYXRjaChhcGkudXJsLCBhcGkuZGF0YSwge1xyXG5cdFx0XHRcdGhlYWRlcnM6IGFwaS5oZWFkZXJzLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0ZWRpdFJlY29yZCh0cnVlKVxyXG5cdFx0XHRcdHJvdXRlci5yZWxvYWQoKVxyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNb2RhbFxyXG5cdFx0XHRpc09wZW49e2VkaXRpbmd9XHJcblx0XHRcdGNvbnRlbnRMYWJlbD0nQ2FsZW5kYXIgTW9kYWwnXHJcblx0XHRcdGNsYXNzTmFtZT17c3R5bGUuY2FsZW5kYXJNb2RhbH1cclxuXHRcdFx0YXJpYUhpZGVBcHA9e2ZhbHNlfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17KGUpID0+IHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXHJcblx0XHRcdFx0ZWRpdFJlY29yZCh0cnVlKVxyXG5cdFx0XHR9fVxyXG5cdFx0XHRzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9e3N0eWxlLmNhbGVuZGFyTW9kYWxGb3JtfT5cclxuXHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdGh0bWxGb3I9J2NhbGVuZGFyVGl0bGUnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlLmNhbGVuZGFyTW9kYWxMYWJlbH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRDYWxlbmRhciBUaXRsZVxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGUuY2FsZW5kYXJNb2RhbElucHV0fVxyXG5cdFx0XHRcdFx0XHRpZD0nY2FsZW5kYXJUaXRsZSdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0NhbGVuZGFyIHRpdGxlJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGUuY2FsZW5kYXJNb2RhbEFwcGx5fVxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IGFwcGx5Q2hhbmdlcyhlLnByZXZlbnREZWZhdWx0KCkpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdEFwcGx5XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvTW9kYWw+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhck1vZGFsXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIlxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9tb2RhbHMubW9kdWxlLnNjc3NcIlxyXG5pbXBvcnQgeyBSZW1vdmUgfSBmcm9tIFwiLi4vLi4vbGliL2ljb25zL01pc2NcIlxyXG5cclxuY29uc3QgRXZlbnRNb2RhbCA9ICh7XHJcblx0Y2FsZW5kYXJfaWQsXHJcblx0dXNlcnMsXHJcblx0c2hhcmluZyxcclxuXHRzaGFyZWRNZW51LFxyXG5cdGFjY2Vzc1Rva2VuLFxyXG59KSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCBbbmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuXHRcdGNvbnN0IG5hbWVzQXJyID0gW11cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIG5hbWVzQXJyLnB1c2godXNlcnNbaV0ubmFtZSlcclxuXHRcdHJldHVybiBuYW1lc0FyclxyXG5cdH0pXHJcblx0Y29uc3QgW25ld05hbWUsIHNldE5ld05hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcblx0Y29uc3Qgb25BZGQgPSAoKSA9PiB7XHJcblx0XHRpZiAobmV3TmFtZS5sZW5ndGggPT09IDApIHJldHVyblxyXG5cdFx0aWYgKG5hbWVzLmluZGV4T2YobmV3TmFtZSkgIT09IC0xKSByZXR1cm5cclxuXHRcdHNldE5hbWVzKFsuLi5uYW1lcywgbmV3TmFtZV0pXHJcblx0XHRzZXROZXdOYW1lKFwiXCIpXHJcblx0fVxyXG5cdGNvbnN0IG9uUmVtb3ZlID0gKG5hbWUpID0+IHNldE5hbWVzKG5hbWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbmFtZSkpXHJcblxyXG5cdGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0YXhpb3NcclxuXHRcdFx0LnBvc3QoXHJcblx0XHRcdFx0YCR7cHJvY2Vzcy5lbnYuQVBJX1VSTH0vY2FsZW5kYXJzLyR7Y2FsZW5kYXJfaWR9L3NoYXJlYCxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR1c2VyczogSlNPTi5zdHJpbmdpZnkobmFtZXMpLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiBhY2Nlc3NUb2tlbixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHRcdC5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHRzaGFyZWRNZW51KHRydWUpXHJcblx0XHRcdFx0cm91dGVyLnJlbG9hZCgpXHJcblx0XHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1vZGFsXHJcblx0XHRcdGlzT3Blbj17c2hhcmluZ31cclxuXHRcdFx0Y29udGVudExhYmVsPSdTaGFyaW5nIGNhbGVuZGFyJ1xyXG5cdFx0XHRjbGFzc05hbWU9e3N0eWxlLnNoYXJlZE1vZGFsfVxyXG5cdFx0XHRhcmlhSGlkZUFwcD17ZmFsc2V9XHJcblx0XHRcdG9uUmVxdWVzdENsb3NlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0XHRzaGFyZWRNZW51KHRydWUpXHJcblx0XHRcdH19XHJcblx0XHRcdHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s9e3RydWV9XHJcblx0XHQ+XHJcblx0XHRcdDxoMT5TaGFyZSBjYWxlbmRhcjwvaDE+XHJcblx0XHRcdDxmb3JtXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm19XHJcblx0XHRcdFx0b25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlLnByZXZlbnREZWZhdWx0KCkpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1IaW50fT5cclxuXHRcdFx0XHRcdEVudGVyIHVzZXImYXBvcztzIG5hbWUgb3IgU2hhcmVJRFxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2hhcmVkTW9kYWxGb3JtVXNlcn0+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0bmFtZT0nQWRkJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17bmV3TmFtZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXROZXdOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1JbnB1dH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT0nQWRkJ1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gb25BZGQoZS5wcmV2ZW50RGVmYXVsdCgpKX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1CdXR0b259XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtuYW1lcy5tYXAoKG5hbWUpID0+IHtcclxuXHRcdFx0XHRcdGxldCBpbWFnZSA9XHJcblx0XHRcdFx0XHRcdFwiaHR0cHM6Ly9kM2RqeTdwYWQyc291ai5jbG91ZGZyb250Lm5ldC9hdmF0YXJfcC5wbmdcIlxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdFx0aWYgKHVzZXJzW2ldLm5hbWUgPT09IG5hbWUpIGltYWdlID0gdXNlcnNbaV0uaW1hZ2VcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRrZXk9e25hbWVzLmluZGV4T2YobmFtZSl9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1Vc2VyfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlLnNoYXJlZE1vZGFsRm9ybVVzZXJBdmF0YXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nYXZhdGFyUHJldmlldydcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezM0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezM0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRxdWFsaXR5PXs1MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0PSdjb3ZlcidcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1JbnB1dH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtuYW1lcy5pbmRleE9mKG5hbWUpID09PSAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblJlbW92ZShlLmN1cnJlbnRUYXJnZXQubmFtZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlLnNoYXJlZE1vZGFsRm9ybUJ1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlbW92ZSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25SZW1vdmUoZS5jdXJyZW50VGFyZ2V0Lm5hbWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1CdXR0b259XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSZW1vdmUgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0dmFsdWU9J0FwcGx5J1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZS5zaGFyZWRNb2RhbEZvcm1CdXR0b259XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50TW9kYWxcclxuIiwiZXhwb3J0IGNvbnN0IExvZ28gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuIHdpZHRoPVwiNjUwLjAwMDAwMHB0XCIgaGVpZ2h0PVwiNjUwLjAwMDAwMHB0XCIgdmlld0JveD1cIjAgMCA2NTAuMDAwMDAwIDY1MC4wMDAwMDBcIlxyXG4gcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cclxuXHJcbjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw3MDguMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCJcclxuZmlsbD1cIiMwMDAwMDBcIiBzdHJva2U9XCJub25lXCI+XHJcbjxwYXRoIGQ9XCJNMzMzNSA2NDI5IGMtODY3IC01OCAtMTY0OCAtNDk2IC0yMTY0IC0xMjExIC0yNDggLTM0MyAtNDI3IC03NzVcclxuLTQ5NSAtMTE4OCAtNDUgLTI3NCAtNTMgLTU4OCAtMjIgLTgzMCA4NyAtNjc2IDM3OSAtMTI2NCA4NjAgLTE3MzMgNDM4IC00MjdcclxuOTk5IC03MDIgMTYyMSAtNzk0IDE3MyAtMjUgNjIxIC0yNSA3OTAgMSA1NzIgODcgMTA2MCAzMDkgMTQ4NCA2NzIgNDU5IDM5M1xyXG43ODIgOTE0IDkyNiAxNDk0IDYyIDI1MCA4NSA0NDEgODUgNzA5IDAgNDUxIC05NyA4NjUgLTMwMSAxMjc3IC0yNjYgNTQxIC03MTBcclxuOTk2IC0xMjQyIDEyNzQgLTM4NiAyMDIgLTc1MSAzMDMgLTExOTAgMzMwIC0xNzcgMTEgLTE3OCAxMSAtMzUyIC0xeiBtNTgwXHJcbi0zODMgYzY4MiAtMTEwIDEyOTYgLTQ5MyAxNjg4IC0xMDUzIDQxOSAtNTk5IDU1OCAtMTM1NyAzODEgLTIwNjggLTE2NCAtNjYwXHJcbi02MDEgLTEyMzYgLTExOTggLTE1ODAgLTI2MSAtMTUxIC01NDcgLTI1MSAtODcxIC0zMDcgLTExMCAtMTggLTE2OSAtMjIgLTM4MFxyXG4tMjIgLTI1MyAtMSAtMzAwIDMgLTUxNSA0NiAtNDEyIDgwIC04MzAgMjg4IC0xMTUzIDU3MSAtNDUwIDM5NiAtNzM0IDkwM1xyXG4tODM5IDE1MDIgLTI5IDE2NiAtMzYgNTI4IC0xNCA3MDUgODUgNjczIDQxNCAxMjYyIDkzOCAxNjgyIDM0MSAyNzMgNzc5IDQ2NFxyXG4xMTkzIDUyMiA2MSA5IDEyNCAxNyAxNDAgMjAgNzQgMTAgNTM0IC0zIDYzMCAtMTh6XCIvPlxyXG48cGF0aCBkPVwiTTM0NjUgNTg5OCBjLTE0IC0xMyAtMzAgLTQwIC0zNSAtNjEgLTEyIC01NCAtNCAtMTUyIDE1IC0xODAgMzYgLTU2XHJcbjExNSAtNTkgMTYwIC01IDIyIDI2IDI1IDM5IDI1IDEwOCAwIDQ0IC01IDkxIC0xMiAxMDUgLTI1IDU0IC0xMDcgNzIgLTE1MyAzM3pcIi8+XHJcbjxwYXRoIGQ9XCJNMTg3MyA1MjQxIGMtMzcgLTIzIC01NCAtNzEgLTQxIC0xMTYgOSAtMzUgOTAgLTExOSAxMjkgLTEzNiA2OSAtMjhcclxuMTM5IDIxIDEzOSA5NiAwIDMyIC05IDQ2IC02MiAxMDEgLTc0IDc2IC0xMTIgODggLTE2NSA1NXpcIi8+XHJcbjxwYXRoIGQ9XCJNNTA3NSA1MjQyIGMtMzggLTI0IC0xMDMgLTk2IC0xMTUgLTEyOCAtMjMgLTYwIDI5IC0xMzQgOTQgLTEzNCA2N1xyXG4wIDE3NiAxMTIgMTc2IDE4MCAwIDczIC05MiAxMjIgLTE1NSA4MnpcIi8+XHJcbjxwYXRoIGQ9XCJNMTkyNCA0MzYwIGMtMTExIC0yMiAtMjI0IC0xMTMgLTI4MyAtMjI1IGwtMzYgLTcwIDAgLTUyMCAwIC01MjAgMzFcclxuLTY1IGM2NiAtMTM3IDE4MSAtMjIxIDMzMSAtMjQwIDEwNSAtMTQgMzA0MyAtMTMgMzEzNyAwIDE1MCAyMiAyODMgMTM0IDMzM1xyXG4yODEgMTYgNDkgMTggOTUgMTggNTM5IDAgNTM5IDAgNTM4IC02NiA2NDAgLTQ1IDcwIC0xMTggMTMwIC0xOTYgMTYyIGwtNTggMjNcclxuLTE1ODUgMSBjLTg3MiAxIC0xNjA0IC0yIC0xNjI2IC02eiBtNTc5IC02MTcgYzEzIC0yMSA2MiAtMTExIDEwOCAtMjAwIDQ2XHJcbi05MCA4NiAtMTYzIDg5IC0xNjMgMyAwIDUwIDg0IDEwNCAxODggNTQgMTAzIDEwMyAxOTMgMTA4IDIwMCAxMyAxNSA2MCAxNiA3NlxyXG4wIDE3IC0xNyAxNyAtNTg5IDAgLTYwNiAtNyAtNyAtMjIgLTEyIC0zNCAtMTIgLTQzIDAgLTQ5IDIyIC01NCAyMTkgbC01IDE4NlxyXG4tNTkgLTExNSBjLTkzIC0xODAgLTEwMSAtMTkyIC0xMzkgLTE4OCAtMzAgMyAtMzcgMTEgLTk0IDExOCAtMzQgNjMgLTcxIDEzMVxyXG4tODIgMTUwIGwtMjEgMzUgMCAtMTg0IGMwIC0xNTcgLTIgLTE4NyAtMTcgLTIwMyAtMTggLTIxIC01MyAtMjQgLTcxIC02IC0xN1xyXG4xNyAtMTcgNTg5IDAgNjA2IDcgNyAyNSAxMiA0MCAxMiAyMSAwIDMzIC05IDUxIC0zN3ogbTczNCAtNjkgYzQ4IC01OCA5MlxyXG4tMTEyIDk4IC0xMjEgOSAtMTIgMjcgNSAxMDYgMTA0IDcyIDg5IDEwMSAxMTkgMTIxIDEyMSAzMCA0IDYwIC0zMCA1MSAtNTcgLTNcclxuLTkgLTUzIC03NCAtMTEwIC0xNDUgbC0xMDMgLTEyOCAwIC0xMzEgYzAgLTEwNyAtMyAtMTM0IC0xNyAtMTQ5IC0yMCAtMjIgLTUxXHJcbi0yMyAtNzUgLTEgLTE2IDE0IC0xOCAzMyAtMTggMTUwIGwwIDEzNCAtMTA1IDEyNyBjLTEwNSAxMjcgLTEyMiAxNjEgLTkzIDE5MFxyXG4zMCAzMCA1NyAxMyAxNDUgLTk0eiBtOTI1IDg5IGMyMyAtMjEgMjMgLTM4IC0yIC02MyAtMTcgLTE3IC0zMyAtMjAgLTExMCAtMjBcclxubC05MCAwIDAgLTI0OSBjMCAtMjE0IC0yIC0yNTIgLTE2IC0yNjUgLTIwIC0yMSAtNTMgLTIwIC03NiAxIC0xNiAxNSAtMTggMzdcclxuLTE4IDI2NSBsMCAyNDggLTc5IDAgYy0xMDIgMCAtMTMxIDEwIC0xMzEgNDggMCA1MSA2IDUyIDI2NCA1MiAyMDkgMCAyNDIgLTJcclxuMjU4IC0xN3ogbTQ3MyAtMTQgYzUzIC0yNyA3NiAtNTggNjcgLTkxIC04IC0zMyAtMzAgLTMyIC05NyAyIC01NyAyOSAtNzEgMzJcclxuLTEyOSAyOCAtODAgLTUgLTExMSAtMjUgLTE0NSAtOTMgLTM2IC03MCAtMzYgLTE5MiAwIC0yNjEgNDkgLTk1IDE1NiAtMTIxXHJcbjI2NSAtNjQgNjQgMzQgOTMgMzUgMTA0IDUgMTMgLTM1IC02IC02MiAtNjcgLTkxIC00MyAtMjIgLTc2IC0zMCAtMTMwIC0zMlxyXG4tMTMwIC03IC0yMjUgNDUgLTI4MSAxNTIgLTI0IDQ2IC0yNyA2MiAtMjcgMTYxIDAgMTI5IDE3IDE3OCA4NSAyNDMgNTcgNTZcclxuMTA2IDcyIDIxNSA2OSA3NSAtMiA5OSAtNiAxNDAgLTI4elwiLz5cclxuPHBhdGggZD1cIk0xMjE4IDM2NDUgYy0zMiAtMTggLTU4IC02MyAtNTggLTk5IDAgLTE0IDEzIC00MCAyOSAtNTggMjkgLTMzIDI5XHJcbi0zMyAxMjYgLTMzIDk3IDAgOTcgMCAxMjYgMzMgMzkgNDQgMzkgOTAgMCAxMzQgLTI4IDMyIC0zMyAzMyAtMTEzIDM2IC02MCAyXHJcbi05MSAtMiAtMTEwIC0xM3pcIi8+XHJcbjxwYXRoIGQ9XCJNNTY0MCAzNjQzIGMtMzkgLTI3IC00OSAtNDUgLTQ5IC04OCAtMSAtNzUgNDMgLTEwNSAxNTEgLTEwNSA4OCAwXHJcbjEzNSAyMyAxNDQgNzAgMjAgOTcgLTI1IDE0MCAtMTQ3IDE0MCAtNTQgMCAtODEgLTUgLTk5IC0xN3pcIi8+XHJcbjxwYXRoIGQ9XCJNMTk0NSAyMTExIGMtNDEgLTI0IC0xMTIgLTEwNiAtMTE3IC0xMzQgLTEyIC02MyA0MCAtMTI3IDEwMyAtMTI3XHJcbjU2IDAgMTY5IDExNSAxNjkgMTcyIDAgODggLTgyIDEzNCAtMTU1IDg5elwiLz5cclxuPHBhdGggZD1cIk00OTkyIDIxMDUgYy0zNiAtMzAgLTUwIC04MSAtMzIgLTExNiAxNyAtMzQgOTAgLTEwOCAxMjIgLTEyNSA0NFxyXG4tMjMgNzcgLTE3IDExNCAyMCAyNiAyNiAzNCA0MiAzNCA3MSAwIDMyIC05IDQ2IC02MyAxMDIgLTUxIDUzIC02OSA2NSAtMTAzXHJcbjcwIC0zMyA0IC00NSAxIC03MiAtMjJ6XCIvPlxyXG48cGF0aCBkPVwiTTM1MDMgMTQ5MyBjLTYwIC0xMSAtODkgLTg1IC03NyAtMTk1IDUgLTQ4IDEyIC02MyAzNiAtODMgMTkgLTE2IDQyXHJcbi0yNSA2NCAtMjUgNzcgMCAxMDQgNDEgMTA0IDE1OSAwIDc0IC0yIDgzIC0yNyAxMTAgLTI5IDMwIC02MSA0MSAtMTAwIDM0elwiLz5cclxuPC9nPlxyXG48L3N2Zz5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEFycm93ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTcuMDkxIDI0YTQuMDk1IDQuMDk1IDAgMDEtMi41OS0uOTJMNC4zNCAxNC42NmEzLjM5NyAzLjM5NyAwIDAxLTEuMjc3LTIuNjU5IDMuNDEgMy40MSAwIDAxMS4yNzctMi42NkwxNC41MDEuOTIyYTQuMTc2IDQuMTc2IDAgMDE0LjQwMy0uNTIgMy41MSAzLjUxIDAgMDExLjUxMiAxLjI4MSAzLjUzIDMuNTMgMCAwMS41OCAxLjg5OVYyMC40MmEzLjUzIDMuNTMgMCAwMS0uNTggMS44OTkgMy41MDkgMy41MDkgMCAwMS0xLjUxMiAxLjI4MWMtLjU2OS4yNi0xLjE4Ny4zOTYtMS44MTMuNHpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FsZW5kYXIgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGQ9XCJNMCA2MEMwIDI2Ljg2MyAyNi44NjMgMCA2MCAwaDM5MmMzMy4xMzcgMCA2MCAyNi44NjMgNjAgNjB2NTMuMTc5SDBWNjB6bTAgOTYuMjk1aDUxMlY0NTJjMCAzMy4xMzctMjYuODYzIDYwLTYwIDYwSDYwYy0zMy4xMzcgMC02MC0yNi44NjMtNjAtNjBWMTU2LjI5NXptMTM0LjczNyAxNDUuNTE2YzIwLjgzNiAwIDM3LjcyNi0xNi44OTEgMzcuNzI2LTM3LjcyNyAwLTIwLjgzNS0xNi44OS0zNy43MjYtMzcuNzI2LTM3LjcyNlM5Ny4wMSAyNDMuMjQ5IDk3LjAxIDI2NC4wODRjMCAyMC44MzYgMTYuODkxIDM3LjcyNyAzNy43MjcgMzcuNzI3em0xNTguOTg5LTM3LjcyN2MwIDIwLjgzNi0xNi44OSAzNy43MjctMzcuNzI2IDM3LjcyN3MtMzcuNzI2LTE2Ljg5MS0zNy43MjYtMzcuNzI3YzAtMjAuODM1IDE2Ljg5LTM3LjcyNiAzNy43MjYtMzcuNzI2czM3LjcyNiAxNi44OTEgMzcuNzI2IDM3LjcyNnptODMuNTM3IDM3LjcyN2MyMC44MzYgMCAzNy43MjctMTYuODkxIDM3LjcyNy0zNy43MjcgMC0yMC44MzUtMTYuODkxLTM3LjcyNi0zNy43MjctMzcuNzI2LTIwLjgzNSAwLTM3LjcyNiAxNi44OTEtMzcuNzI2IDM3LjcyNiAwIDIwLjgzNiAxNi44OTEgMzcuNzI3IDM3LjcyNiAzNy43Mjd6bS04My41MzcgOTEuNjIxYzAgMjAuODM1LTE2Ljg5IDM3LjcyNi0zNy43MjYgMzcuNzI2cy0zNy43MjYtMTYuODkxLTM3LjcyNi0zNy43MjZjMC0yMC44MzYgMTYuODktMzcuNzI3IDM3LjcyNi0zNy43MjdzMzcuNzI2IDE2Ljg5MSAzNy43MjYgMzcuNzI3em0tMTU4Ljk4OSAzNy43MjZjMjAuODM2IDAgMzcuNzI2LTE2Ljg5MSAzNy43MjYtMzcuNzI2IDAtMjAuODM2LTE2Ljg5LTM3LjcyNy0zNy43MjYtMzcuNzI3Uzk3LjAxIDM3Mi41OTYgOTcuMDEgMzkzLjQzMmMwIDIwLjgzNSAxNi44OTEgMzcuNzI2IDM3LjcyNyAzNy43MjZ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbm5lY3QgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGggZD1cIk0yNTYgMTUwLjVjLTQxLjM1MyAwLTc1LTMzLjY0Ny03NS03NXMzMy42NDctNzUgNzUtNzUgNzUgMzMuNjQ3IDc1IDc1LTMzLjY0NyA3NS03NSA3NXpNMTAuMDI2IDQyOWMtMjAuNjY5LTM1LjgxNS04LjM1LTgxLjc2OCAyNy40NjYtMTAyLjQ1MSAzNi41NTEtMjEuMDg1IDgyLjA4My03LjgwNiAxMDIuNDUxIDI3LjQ1MSAyMC43MjIgMzUuODcgOC40NCA4MS43MTctMjcuNDUxIDEwMi40NTEtMzUuOTYgMjAuNzM3LTgxLjc1NyA4LjM5Ni0xMDIuNDY2LTI3LjQ1MXptMzg5LjQ4MiAyNy40NTFDMzYzLjY0MSA0MzUuNzMgMzUxLjMyMyAzODkuODkgMzcyLjA1NyAzNTRjMjAuMzY3LTM1LjI1NiA2NS44OTgtNDguNTM3IDEwMi40NTEtMjcuNDUxIDM1LjgxNSAyMC42ODQgNDguMTM1IDY2LjYzNiAyNy40NjYgMTAyLjQ1MS0yMC42ODMgMzUuODAyLTY2LjQ1NSA0OC4yMTgtMTAyLjQ2NiAyNy40NTF6TTYxLjI5MyAyNzUuNTg3bC0yOS45NDEtMS42NDFjMy44OTYtNzAuOTU3IDQxLjgwNy0xMzYuNjQxIDEwMS4zOTYtMTc1LjcyM2wxNi40NjUgMjUuMDc4Yy01MS42NjUgMzMuODgzLTg0LjUyMiA5MC44MjEtODcuOTIgMTUyLjI4NnpNNDUwLjcwNyAyNzUuNTg3Yy0zLjM5OC02MS40NjUtMzYuMjU1LTExOC40MDMtODcuOTItMTUyLjI4NWwxNi40NjUtMjUuMDc4YzU5LjU5IDM5LjA4MiA5Ny41IDEwNC43NjYgMTAxLjM5NiAxNzUuNzIzek0yNTYgNTExLjVjLTM1LjY4NCAwLTY5LjgtOC4xMTUtMTAxLjQyNi0yNC4wOTdsMTMuNTM1LTI2Ljc3N2M1NC43ODUgMjcuNzE1IDEyMC45OTYgMjcuNzE1IDE3NS43ODEgMGwxMy41MzUgMjYuNzc3QzMyNS44IDUwMy4zODUgMjkxLjY4NCA1MTEuNSAyNTYgNTExLjV6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNTA5LjkzMSAyMjMuOTE1Yy0zLjM0OS0yNS44MzUtMzAuMjUxLTQzLjUyLTU2LTMzLjg3Ny05LjY0MyAzLjY0OC0yMS4yNDgtMS43NzEtMjUuNi0xMS40OTlhMTg5LjU4MyAxODkuNTgzIDAgMDAtMTkuMDA4LTMzLjA0NWMtNi42MTMtOS4xOTUtNS4zNTUtMjEuMjI3IDIuODU5LTI4LjAxMSA5LjgxMy04LjA2NCAxNS4yOTYtMTkuOTg5IDE1LjA0LTMyLjY4My0uMjU2LTEyLjkwNy02LjMzNi0yNC43ODktMTYuNjgzLTMyLjY0LTE3LjAyNC0xMi44ODUtMzUuNTg0LTIzLjYxNi01NS4xODktMzEuODcyLTUuMjkxLTIuMjE5LTEwLjgzNy0zLjM0OS0xNi40OTEtMy4zNDktMjAuNDM3IDAtMzcuNjc1IDE0LjUyOC00MS4wMDMgMzQuNTM5LTEuNzQ5IDEwLjUxNy0xMS43MTIgMTcuNjY0LTIyLjkzMyAxNi40NDhhMTgxLjEzNSAxODEuMTM1IDAgMDAtMzcuODY3IDBjLTExLjE3OSAxLjIxNi0yMS4xODQtNS45MzEtMjIuOTMzLTE2LjQ0OC0zLjMyOC0yMC4wMTEtMjAuNTY1LTM0LjUzOS00MS4wMDMtMzQuNTM5LTUuNjUzIDAtMTEuMiAxLjEzMS0xNi40NjkgMy4zNDlBMjU1LjE5MiAyNTUuMTkyIDAgMDAxMDEuNDQgNTIuMTZjLTEwLjMyNSA3Ljg1MS0xNi40MDUgMTkuNzMzLTE2LjY2MSAzMi42MTktLjI1NiAxMi43MTUgNS4yMjcgMjQuNjE5IDE1LjA0IDMyLjcyNSA4LjIzNSA2Ljc2MyA5LjQ1MSAxOC43OTUgMi44NTkgMjcuOTY4YTE4OS42ODcgMTg5LjY4NyAwIDAwLTE5LjAyOSAzMy4wNDVjLTQuMzUyIDkuNzI4LTE1LjEwNCAxNS40NDUtMjUuODM1IDExLjQxMy00LjY5My0xLjc0OS05LjU3OS0yLjY0NS0xNC41MjgtMi42NDUtMjAuODIxIDAtMzguNTI4IDE1Ljc0NC00MS4yMzcgMzYuNjI5QTI1NS42NzUgMjU1LjY3NSAwIDAwMCAyNTZjMCAxMC42ODguNzA0IDIxLjUwNCAyLjA2OSAzMi4wODUgMy4zMjggMjUuODEzIDMwLjIwOCA0My40OTkgNTYgMzMuODc3IDkuNjIxLTMuNjQ4IDIxLjI0OCAxLjc3MSAyNS42IDExLjQ5OWExODkuNTgzIDE4OS41ODMgMCAwMDE5LjAwOCAzMy4wNDVjNi42MTMgOS4xOTUgNS4zNTUgMjEuMjI3LTIuODU5IDI4LjAxMS05LjgxMyA4LjA2NC0xNS4yOTYgMTkuOTg5LTE1LjA0IDMyLjY4My4yNTYgMTIuOTA3IDYuMzM2IDI0Ljc4OSAxNi42ODMgMzIuNjQgMTcuMDI0IDEyLjg4NSAzNS41ODQgMjMuNjE2IDU1LjE4OSAzMS44NzIgNS4yOTEgMi4yMTkgMTAuODM3IDMuMzQ5IDE2LjQ5MSAzLjM0OSAyMC40MzcgMCAzNy42NzUtMTQuNTI4IDQxLjAwMy0zNC41MzkgMS43NDktMTAuNTE3IDExLjczMy0xNy41NTcgMjIuOTMzLTE2LjQ0OGExODEuMTM1IDE4MS4xMzUgMCAwMDM3Ljg2NyAwYzExLjIyMS0xLjEzMSAyMS4xODQgNS45MzEgMjIuOTMzIDE2LjQ0OCAzLjMyOCAyMC4wMTEgMjAuNTY1IDM0LjUxNyA0MS4wMDMgMzQuNTM5IDUuNjUzIDAgMTEuMi0xLjEzMSAxNi40NjktMy4zNDlhMjU1LjA0IDI1NS4wNCAwIDAwNTUuMTg5LTMxLjg3MmMxMC4zMjUtNy44NTEgMTYuNDI3LTE5LjczMyAxNi42ODMtMzIuNjE5LjI1Ni0xMi43MTUtNS4yMjctMjQuNjE5LTE1LjA0LTMyLjcyNS04LjIzNS02Ljc2My05LjQ1MS0xOC43OTUtMi44NTktMjcuOTY4YTE4OS42ODcgMTg5LjY4NyAwIDAwMTkuMDI5LTMzLjA0NWM0LjM1Mi05Ljc0OSAxNS4xMjUtMTUuNDQ1IDI1LjgzNS0xMS40MTNhNDEuMDA2IDQxLjAwNiAwIDAwMTQuNTI4IDIuNjY3YzIwLjgyMSAwIDM4LjUyOC0xNS43NDQgNDEuMjM3LTM2LjYyOUM1MTEuMjk2IDI3Ny4zOTcgNTEyIDI2Ni42MjQgNTEyIDI1NmMwLTEwLjYyNC0uNzA0LTIxLjM5Ny0yLjA2OS0zMi4wODV6TTI1NiAzNDEuMzMzYy00Ny4wNjEgMC04NS4zMzMtMzguMjcyLTg1LjMzMy04NS4zMzNzMzguMjcyLTg1LjMzMyA4NS4zMzMtODUuMzMzIDg1LjMzMyAzOC4yNzIgODUuMzMzIDg1LjMzMy0zOC4yNzIgODUuMzMzLTg1LjMzMyA4NS4zMzN6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNoYXJlZCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8ZyBjbGlwUGF0aD1cInVybCgjcHJlZml4X19jbGlwMClcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk01MTIgNTQuODU3djQwMi4yODZDNTEyIDQ4Ny40NCA0ODcuNDQgNTEyIDQ1Ny4xNDMgNTEySDU0Ljg1N0MyNC41NiA1MTIgMCA0ODcuNDQgMCA0NTcuMTQzVjU0Ljg1N0MwIDI0LjU2IDI0LjU2IDAgNTQuODU3IDBoNDAyLjI4NkM0ODcuNDQgMCA1MTIgMjQuNTYgNTEyIDU0Ljg1N3pNMzQ3LjQyOSAzMDEuNzE0Yy0xNi42NDMgMC0zMS43OTggNi4zNTYtNDMuMTgxIDE2Ljc2N2wtNzcuNjY2LTQ2LjZhNjQuMzk5IDY0LjM5OSAwIDAwMC0zMS43NjNsNzcuNjY2LTQ2LjZjMTEuMzgzIDEwLjQxMiAyNi41MzggMTYuNzY4IDQzLjE4MSAxNi43NjggMzUuMzQ2IDAgNjQtMjguNjU0IDY0LTY0IDAtMzUuMzQ3LTI4LjY1NC02NC02NC02NC0zNS4zNDcgMC02NCAyOC42NTMtNjQgNjQgMCA1LjQ4Mi42OTEgMTAuODAzIDEuOTg4IDE1Ljg4MmwtNzcuNjY2IDQ2LjZDMTk2LjM2OSAxOTguMzU1IDE4MS4yMTQgMTkyIDE2NC41NzEgMTkyYy0zNS4zNDYgMC02NCAyOC42NTQtNjQgNjQgMCAzNS4zNDYgMjguNjU0IDY0IDY0IDY0IDE2LjY0MyAwIDMxLjc5OC02LjM1NSA0My4xODEtMTYuNzY3bDc3LjY2NiA0Ni42YTY0LjA2IDY0LjA2IDAgMDAtMS45ODggMTUuODgyYzAgMzUuMzQ3IDI4LjY1MyA2NCA2NCA2NCAzNS4zNDYgMCA2NC0yOC42NTMgNjQtNjQtLjAwMS0zNS4zNDctMjguNjU1LTY0LjAwMS02NC4wMDEtNjQuMDAxelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJwcmVmaXhfX2NsaXAwXCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAwaDUxMnY1MTJIMHpcIiAvPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEV2ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0zMTYuMDQ3IDM5Ni40MjdjLjIwNS0uMDczLjQwNy0uMTU1LjYwNS0uMjQ2IDEuODIxLS44MzIgNC42NDItMS45MTYgNi4xNTctMi40OThhNzIuODYyIDcyLjg2MiAwIDAwMS4yNi0uNDk0di4wMDFjMTEuMjA1LTQuNjQ5IDE4LjM2NC0xMy4wNjMgMjAuNzAzLTI0LjMzMiAyLjI4OC0xMS4wMjQtLjE3Mi0yNC4xOTctNS44NDUtMzguMzM4IDM1LjU4My0xLjg4NiA1OS45NjYgMy4zMTYgOTAuNTk5IDEzLjIzMSA1LjQ0OCAxLjc2MSAxMC4zMDYgMi40NyAxNC42IDIuNDY5IDExLjIxMyAwIDE4LjU3MS00LjgzNyAyMi40NzgtOC40MTYgOC43NDQtOC4wMTEgMTIuNDQ3LTIwLjUzNCA5LjY2NS0zMi42ODQtMy4wOC0xMy40NTEtMTMuMjkxLTIzLjY5OS0yOC4wMTMtMjguMTE1LTI2LjAyLTcuODA3LTc5LjI1NS0yMy43NzctMTM3LjcxNCA0LjkwMi01LjcyNy03Ljc4Ny0xMS44ODItMTUuNDgyLTE4LjI0MS0yMi45MThsMTAzLjM5LTg1Ljg2NGMuMTc3LS4xNDcuMzQ3LS4zMDIuNTEtLjQ2NCAzLjM1NC0zLjM1MyA1LjIwMy03LjgyMSA1LjIwMy0xMi41ODEgMC00Ljc2MS0xLjg0OS05LjIyOS01LjIwNS0xMi41ODRsLTMyLjE1OS0zMi4xMTNjLTYuOTM2LTYuOTM0LTE4LjIyNi02LjkzNS0yNS4xNjQgMGE3LjcyNiA3LjcyNiAwIDAwLS40NjUuNTA5bC0zMS41NDggMzcuOTMxYTcuNSA3LjUgMCAwMDExLjUzMyA5LjU5MmwzMS4yNTYtMzcuNThjMS4wODYtLjkxMSAyLjc2OS0uODU4IDMuNzg3LjE2MWwzMi4xNTkgMzIuMTEzYy43MDEuNzAxLjgwNyAxLjUzNy44MDcgMS45NzJhMi44IDIuOCAwIDAxLS42NDUgMS43OTdMMjgyLjM1NyAyNDcuNzVhNDYwLjY2MSA0NjAuNjYxIDAgMDAtOC42OTEtOS4yNDcgNi4zNTMgNi4zNTMgMCAwMC0uMTg0LS4xODMgNDYxLjg2MiA0NjEuODYyIDAgMDAtOS43NDctOS4xNDFsMzEuODUyLTM4LjI5NWE3LjUgNy41IDAgMTAtMTEuNTMxLTkuNTkybC0zMS41ODIgMzcuOTY5Yy02LjkyOC01LjktMTQuMDc3LTExLjYxNy0yMS4zMTItMTYuOTc2IDMyLjYwNS01Ny40MzQgMTkuMi0xMTEuOTM0IDEyLjY0Mi0xMzguNTg5LTMuNjY0LTE0LjkxNC0xMy4zODItMjUuNjIxLTI2LjY2NC0yOS4zNzYtMTIuMDExLTMuMzk1LTI0LjcyLS4zMjQtMzMuMTY2IDguMDE0LTUuMjExIDUuMTQ0LTEzLjE1MyAxNi43NTMtNy43OTMgMzYuNjk0IDguNjIxIDMyLjE2MSAxMi41NyA1Ny43MTIgOC4xNDUgOTUuMjY5LTE1LjI1My02LjUyMS0yOS40OTEtOS40ODgtNDEuMjctNy4wNDItMTEuMjY5IDIuMzM5LTE5LjY4MyA5LjQ5NC0yNC4zMzIgMjAuNjktLjA5NS4yMzItLjI2OS42NzMtLjQ5NCAxLjI1Ny0uNTgyIDEuNTE1LTEuNjY2IDQuMzM0LTIuNDk5IDYuMTUzYTcuNzY4IDcuNzY4IDAgMDAtLjI0Ny42MDZsLTkuNDk5IDI2LjY4N2MtLjAxLjAyNy0uMDIzLjA1My0uMDMzLjA4TDg5LjkzIDI2Ny43MzRjLS4wMi4wNTctLjAzMy4xMTUtLjA1Mi4xNzNsLTIzLjA2NSA2NC44MDJjLS4wMjIuMDU3LS4wNS4xMS0uMDcuMTY3bC02Ljk5NSAxOS42ODMtMzEuNTQyIDg4LjYxOWMtNS43OTUgMTYuMzI0LTQuMDYgMzAuMDMxIDQuNzM4IDM3Ljc1OSA0LjczIDUuMzU2IDExLjY3NyA4LjA4NyAyMC4wODUgOC4wODcgNS4zNjUgMCAxMS4zMjYtMS4xMTMgMTcuNjc5LTMuMzY2bDg4LjQ4My0zMS40NiAxOS44NzEtNy4wNTRjLjA1Ny0uMDIuMTA5LS4wNDguMTY1LS4wNjlsNjQuODItMjMuMDQ3Yy4wNjMtLjAyMS4xMjgtLjAzNi4xOTEtLjA1OWw0NS4wMjctMTYuMDE0Yy4wMjktLjAxLjA1Ni0uMDI0LjA4NS0uMDM1em0xMjcuODk4LTEwNS4wNTVjMTIuODgxIDMuODY0IDE2LjYyIDEyLjM3IDE3LjcwMiAxNy4wOTYgMS41NTcgNi43OTYtLjQ3NiAxMy45NjktNS4xNzYgMTguMjc2LTUuMTc3IDQuNzQzLTEzLjExIDUuNzE1LTIyLjMzIDIuNzM0LTMzLjI1Ni0xMC43NjQtNjAuOTg2LTE2LjQ4Ny0xMDItMTMuNTYxLTMuNzE1LTcuMDk3LTguMDYzLTE0LjMyNy0xMi44NzQtMjEuNTU3IDUyLjQ0MS0yNC42NTggMTAwLjg1My0xMC4xMzUgMTI0LjY3OC0yLjk4OHpNMTkwLjY2NyA3NS4xNDFjLTIuNTEyLTkuMzQ1LTEuMTQ3LTE3LjIwNCAzLjg0NC0yMi4xMzEgNC41NDQtNC40ODUgMTEuODI1LTYuMTU0IDE4LjU0OC00LjI1NSA0LjY2NyAxLjMxOSAxMi45NzQgNS40NzkgMTYuMTc5IDE4LjUyMyA2LjAzNCAyNC41MjMgMTguMzEgNzQuNDQ0LTEwLjM5NiAxMjYuMjk4LTYuNzg3LTQuNTYxLTEzLjU4LTguNzIxLTIwLjI3LTEyLjM0MyA1LjcyMy00Mi43NjQgMS42LTcwLjYzNi03LjkwNS0xMDYuMDkyek0xMjkuNTEgMjAxLjI4OWMuOTk0LTIuMjExIDIuMTA4LTUuMTExIDIuNzItNi43MDIuMTQ5LS4zODguMjYyLS42ODMuMzI1LS44MzlhLjk3Ny45NzcgMCAwMC4wMi0uMDQ4YzIuNzc0LTYuNjgxIDcuMDczLTEwLjQxNiAxMy41MjgtMTEuNzU2IDkuODM3LTIuMDQxIDIzLjg5NSAxLjU5NyA0MC4zNSA5Ljg0Mi4zNy4yMy43NjUuNDI2IDEuMTc4LjU5IDguOTkzIDQuNTk1IDE4LjY3OSAxMC41NDIgMjguNzc2IDE3LjY4Mi4yNjkuMjI2LjU1MS40NDIuODU4LjYzMy4wMzMuMDIxLjA2OS4wMzQuMTAzLjA1NCAxNC42NTkgMTAuNDQ4IDMwLjE0OSAyMy4zNjQgNDUuNjA0IDM4LjI3N2E0NTguMDQzIDQ1OC4wNDMgMCAwMTEyLjgwNyAxMy44MTZjLjAyLjAyNS4wMzcuMDUyLjA1Ny4wNzcuMDYxLjA3NC4xMy4xMzguMTk0LjIwOSA5LjcyNSAxMC45NTIgMTguMzY5IDIxLjc4NSAyNS43NSAzMi4xOTEuMjM1LjQwMi41Ljc3Ni43OTUgMS4xMTcgNy40MjMgMTAuNTYyIDEzLjUxOSAyMC42NjEgMTguMTE5IDI5Ljk3NC4xNzcuNDc1LjM5OC45MjUuNjYyIDEuMzQ2IDcuNDYgMTUuNDcgMTAuNjc1IDI4LjY4MSA4LjcyOSAzOC4wNi0xLjMzOSA2LjQ1My01LjA3NyAxMC43NTEtMTEuNzYzIDEzLjUyNWwtLjA0OC4wMjFjLS4xNTcuMDYzLS40NTIuMTc2LS44NDIuMzI1LTEuNTkyLjYxMS00LjQ5MiAxLjcyNS02LjcwNSAyLjcxOGwtMTguODI0IDYuNjkzYy05LjkzNC0zMS44MjctMzcuNjUtNjYuNTA1LTU0LjE3NC04NS4yMzFhNy41IDcuNSAwIDEwLTExLjI0NyA5LjkyNWMyNi4yNzMgMjkuNzc1IDQ0LjYwNiA1OC41OCA1MS4yODEgODAuMzM0bC0zMi4yMTUgMTEuNDU0Yy0xMi4zMTctMjQuMjg5LTMzLjIxNS01Mi4yNDMtNTkuNTA1LTc5LjQ4NmE4LjY5IDguNjkgMCAwMC0uMTkyLS4xOTJjLTI3LjI1Ny0yNi4yNzUtNTUuMjIzLTQ3LjE2LTc5LjUyNS01OS40NzFsMTEuNDU1LTMyLjE4NWMyMi43MDUgNy4wMDcgNTMuNjIxIDI3LjAxNCA4NC4zODUgNTQuODEyYTcuNSA3LjUgMCAwMDEwLjA1Ni0xMS4xM2MtMzIuNDQyLTI5LjMxNC02NC40NDQtNDkuOTMzLTg5LjQxLTU3LjgxNXptNTAuMDIzIDIyNy43NTZjLTExLjc5My0xNy4yOTQtMjYuNzU2LTM1LjQ3My00My41NzYtNTIuODk5YTYuODQgNi44NCAwIDAwLS4xOTEtLjE5Yy0xNy40MzYtMTYuODEyLTM1LjYyNC0zMS43NjUtNTIuOTI0LTQzLjU1bDE4LjQwNy01MS43MTVjMjIuMzk2IDExLjY5MiA0OC45MzMgMzEuNjcxIDc0LjA5NCA1NS45MSAyNC4yNDkgMjUuMTQ0IDQ0LjIzOCA1MS42NjQgNTUuOTM3IDc0LjA0NnptLTI1LjA2NiA4LjkxMmwtMjYuNTk3IDkuNDQyYy04Ljk4My0xMS40MTctMTguODg0LTIyLjczNS0yOS40ODctMzMuNzA3YTEwLjU3MyAxMC41NzMgMCAwMC0uMTg0LS4xODNjLTEwLjk3Ni0xMC41OTctMjIuMy0yMC40OTItMzMuNzIxLTI5LjQ2OWw5LjM2MS0yNi4zNCAzLjc5OC0xMC42N2MxNS42IDEwLjkyNSAzMS45MDMgMjQuNDgzIDQ3LjYyMiAzOS42MjkgMTUuMTUgMTUuNzA1IDI4LjcxMyAzMS45OTcgMzkuNjQ0IDQ3LjU4N3pNNjUuNjkgNDY5LjUyMmMtMTAuMjAzIDMuNjE4LTE4LjI5OSAzLjM1Ny0yMS42NTgtLjY5N2E3LjUxNSA3LjUxNSAwIDAwLTEuMDA2LTEuMDA0Yy00LjA1MS0zLjMzNy00LjMwNi0xMS40MjItLjY4Ni0yMS42MjFsMTYuODA3LTQ3LjIyMWM5LjY1NSA3Ljc5IDE5LjIyNCAxNi4yNCAyOC41NDEgMjUuMjMxIDguOTkyIDkuMzA5IDE3LjQ0NSAxOC44NyAyNS4yMzcgMjguNTE2ek0zODcuNjU4IDYzLjg0N2wxOC45MzIgMTMuMzc0Yy4wNzIuMTY0LjIzLjU5OC40MTIgMS41OGw0LjA0MyAyMS44ODhjLjM1NSAyLjMzNiAxLjIyMiA3LjUxNiA2LjE0OCA5LjUyMWE4LjYwMyA4LjYwMyAwIDAwMy4yNjguNjQ4YzMuNTk1IDAgNi41NjEtMi4yNDIgOC4wNTItMy4zNjhsMTcuNTQtMTMuNTA3Yy4zNzQtLjI0MyAxLjM4Ny0uNTA2IDEuODA4LS40OWwyMi4wMTEgMi45MjljMi4zMjUuMjkyIDcuNzcuOTc3IDExLjEwMS0zLjI3IDMuMjg0LTQuMTg2IDEuNDUtOS4xMzguNjEzLTExLjMyN2wtNy40NzctMjAuOTk0Yy0uMzI5LS45MzYtLjQwMy0xLjM3Ni0uNDItMS41NDFsOS43MDEtMjEuMDk3YzEuMDY3LTIuMTM5IDMuMzcxLTYuOTIuNTU5LTExLjM3OC0yLjg2MS00LjUzNC04LjIzMy00LjQzNi0xMC41MzktNC4zOTFsLTIzLjIxOC40NTNMNDMzLjUzIDYuNzI4Yy0xLjUxNy0xLjQ2My01LjU1LTUuMzQ4LTEwLjkyLTMuOTE1LTUuMzcxIDEuNDM0LTYuOTI4IDYuODExLTcuNTEzIDguODM1bC0uMDEuMDM1LTYuMzM2IDIyLjI3OC0yMC4zNzUgMTEuMjMxYy0yLjAwMiAxLjEwOS02LjY5IDMuNzA1LTYuOTAxIDkuMDYyLS4yMDcgNS4yNzcgNC4xOTEgOC4yNzQgNi4xODMgOS41OTN6bTI4Ljk4Ni0xNy4xMWM0LjQ4MS0yLjQ4OCA1LjU5NC01LjMzIDYuNDE5LTguMjY2bDQuNjgyLTE2LjQ2MiAxMS43OTkgMTEuNDM2LjQ0MS40MzJjMi4xNDggMi4xMTYgNC40OTMgNC4wMTQgOS41NDkgNC4wMTRsLjIyMy0uMDAxIDE3LjQyMS0uMzQtNy4xNzEgMTUuNTk0Yy0yLjI1NCA0Ljk0Ny0xLjIwNyA5LjM3Mi0uMDM1IDEyLjY5N2w1LjI4NCAxNC44MzctMTUuMzU4LTIuMDQ0Yy00LjI0LS41OTYtOS41NzYuODIzLTEyLjk2MSAzLjQ0MmwtMTIuMzIzIDkuNDg4LTIuODYtMTUuNDg3Yy0uNTkxLTMuMTk1LTEuODkyLTcuODEtNi4zODEtMTEuMDE1bC0xNC4wMS05Ljg5OHpcIiAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTI4MS42NDkgNzUuMDc0bDE1Ljg5MiA5LjIwMmExMy42NDYgMTMuNjQ2IDAgMDA2Ljc5IDEuODAxYzQuNDQ4IDAgOC45MzMtMi4xMyAxMi4xOTQtNi4wOTdsMjkuMzIzLTM1LjI5NmMyLjQtMi44ODUgMy4zOC02LjczMiAyLjY4Ny0xMC41NTUtLjc3MS00LjI1Ni0zLjQ4NS04LjA4NC03LjI2My0xMC4yNDRMMzEyLjA0IDYuOTk5Yy0zLjc3Ni0yLjE3MS04LjQ2NS0yLjU4MS0xMi41NDItMS4wOTktMy42MzkgMS4zMjMtNi40NiA0LjA5MS03LjczMyA3LjU2NkwyNzUuODQgNTYuNDU4Yy0yLjc3MSA3LjQwMi0uMzc0IDE1LjA2MiA1LjgwOSAxOC42MTZ6bTguMjQ4LTEzLjM4MmwxNS4zMDYtNDEuMzIgMjcuOTM2IDE2LjEzOC0yOC4xNzUgMzMuOTE2YTMuMjM1IDMuMjM1IDAgMDEtLjUyMy41MTRsLTE0LjczMS04LjUzYy4wMjQtLjE4NS4wNzgtLjQyOC4xODctLjcxOHpNNTA4LjQ2OSAxNDAuNzdjLTMuMjIyLTMuODIyLTguMTUyLTYuMTAzLTEzLjE4OS02LjEwM2gtNDQuMjY4Yy01LjAzMSAwLTkuOTYyIDIuMjg1LTEzLjE4OCA2LjExMi0yLjg2NCAzLjM5OC00LjA0NSA3LjU3OS0zLjMyNiAxMS43N2wxMC4xNDYgNTkuMjk3YzEuNTc3IDkuMTggOC4yMTQgMTUuMzQ3IDE2LjUxNCAxNS4zNDdoMjQuMDA0YzguMzAxIDAgMTQuOTM3LTYuMTY3IDE2LjUxNi0xNS4zNTZsMTAuMTE0LTU5LjI4NWMuNzIzLTQuMTk5LS40NTgtOC4zODQtMy4zMjMtMTEuNzgyem0tMjEuNTc1IDY4LjUzN2MtLjIzOCAxLjM4OS0uOTY5IDIuODg4LTEuNzMxIDIuODg4aC0yNC4wMDRjLS44NTIgMC0xLjUyNS0xLjY4OS0xLjczLTIuODgzbC0xMC4wODMtNTguOTI5Yy4yOTMtLjMwNy45ODUtLjcxNiAxLjY2Ny0uNzE2aDQ0LjI2OGMuNjg2IDAgMS4zNzguNDA1IDEuNjY5LjcwN3pNNDIuMjUyIDIzNy4xNTRjMS4zNTggMCAyLjczOC0uMTc4IDQuMTE4LS41NDNsMjMuMTYyLTYuMjE4YzguMDUzLTIuMTMzIDEyLjg3OS05LjgxNCAxMi4wMDktMTkuMTA5bC01LjU4NS01OS45MTNjLS4zOTktNC4yNDUtMi42MzUtNy45NzktNi4yOTUtMTAuNTE3LTQuMTA2LTIuODQ2LTkuNDUyLTMuNzYyLTE0LjI4Mi0yLjQ1M2wtNDIuNzQyIDExLjQ1NGMtNC44NjcgMS4yOTQtOS4wNDMgNC43NjgtMTEuMTcxIDkuMjk0LTEuODk1IDQuMDI5LTEuOTUzIDguMzgzLS4xNjcgMTIuMjQ5bDI1LjE0OSA1NC42NTVjMy4yMjYgNi45ODggOS4yNjMgMTEuMTAxIDE1LjgwNCAxMS4xMDF6TTE2LjQ5MyAxNjQuMzVsLjAyMS0uMDA2IDQyLjc2Ni0xMS40NmMuNjUzLS4xOCAxLjQxOS4wMzcgMS43NzUuMjU0bDUuNTUgNTkuNTQxYy4xMyAxLjM5NS0uMTgyIDMuMDItLjkzOCAzLjIybC0yMy4xNjIgNi4yMThjLS44MjguMjIzLTEuOTI4LTEuMjQzLTIuNDM1LTIuMzQ0bC0yNC45OTUtNTQuMzJjLjIwNC0uMzY2Ljc2NC0uOTMgMS40MTgtMS4xMDN6TTM3OC42MjUgNDUyLjU1NmwtNDUuMjEyLTMyLjAxNGMtNy4yNDctNS4xNjUtMTUuOTA4LTQuODQyLTIxLjU1NS44MDJsLTE1LjYxMyAxNS42MDVjLTUuNjUxIDUuNjQ3LTUuOTc0IDE0LjMxLS44MTcgMjEuNTM2bDMyLjAzNiA0NS4xOTRjMi4zNjUgMy4zNTEgNi4wMSA1LjM5OCAxMC4yNjMgNS43NjQuNDQ4LjAzOC44OTYuMDU3IDEuMzQ2LjA1NyA0LjMxNiAwIDguNjA2LTEuNzU3IDExLjY5MS00Ljg0bDI4LjgyOC0yOC44MTNjMy40MDUtMy40MDMgNS4xOTQtOC4yNzQgNC43ODctMTMuMDMxLS4zNjMtNC4yNTYtMi40MTEtNy45MDMtNS43NTQtMTAuMjZ6bS05LjYzNSAxMi42OGwtMjguODI4IDI4LjgxNGMtLjIyNi4yMjUtLjU2OS4zNjMtLjgzOC40MmwtMzEuNjcyLTQ0LjY3OWMtLjc5Ny0xLjExNy0uODkyLTIuMDEyLS44MDMtMi4yMzNsMTUuNjM3LTE1LjY0YS41MzUuNTM1IDAgMDEuMTMzLS4wMTNjLjMzOCAwIDEuMTM0LjE3IDIuMTA3Ljg2NGw0NC42ODIgMzEuNjM4Yy0uMDU4LjI2OC0uMTk2LjYwNy0uNDE4LjgyOXpNNDguNjQ3IDY0LjI1OWMuMDAyLjAxOS4wNDkuNDctLjQ5NyAyLjAxMWwtOC4xMjYgMjIuNzkyYy0uODc0IDIuMjcxLTIuNzg1IDcuNC41NjkgMTEuNjc2IDMuNDA1IDQuMzQyIDguODU5IDMuNjQ1IDExLjUyMSAzLjMwNWwyMy43ODUtMy4xOGMuNjA5LS4wNTkgMS45OTguMzE2IDIuNDQ5LjYzbDE5LjEwNiAxNC43NTRjMS42MjggMS4yMjYgNC42MTggMy40NzggOC4yNTEgMy40NzhhOC44MSA4LjgxIDAgMDAzLjMzLS42NThjNS4wMjctMi4wMzMgNS45MzktNy40MjYgNi4zMi05LjgyN2w0LjM2LTIzLjczN2MuMzA4LTEuNjIzLjU2Mi0yLjAwOC42MTctMi4wNTdsMjAuNzA0LTE0LjYzOWMyLjIxNS0xLjQ3NyA2LjYzOS00LjQ5NiA2LjQwOS05Ljg4NC0uMjMzLTUuNDUxLTUuMTA3LTguMTI5LTcuMTc3LTkuMjY2bC0yMi4zMzItMTIuMzIxLTYuOTctMjQuNDI4Yy0uNjAxLTIuMTIxLTIuMTk1LTcuNzIzLTcuNjc5LTkuMTk5LTUuNDktMS40NzktOS42ODkgMi41OC0xMS4yNzIgNC4xMTJMNzQuMTc0IDI1LjA5NGwtLjQyNi40MTgtMjUuNDY2LS40ODZjLTIuMzg1LS4wNTUtNy45NjktLjE4NC0xMC44OTYgNC40NDctMi44ODMgNC41NjEtLjU0NCA5LjM3NS42NjEgMTEuNzcxem0yNS4zMzUtMjMuNzRjNS4zNzcuMTEgNy43NjMtMS44MTYgMTAuMTE3LTQuMTVsMTQuMDctMTMuNjMyIDUuMzg4IDE4Ljg4MmMuODkxIDMuMTY4IDIuMDA3IDYuMDAxIDYuNjg2IDguNjA1bDE3LjQ2NCA5LjYzNS0xNi4wMTEgMTEuMzIxYy00LjYzIDMuMjQ1LTYuMDIyIDcuODYxLTYuNzI2IDExLjU2NmwtMy4yNzQgMTcuODI0LTE0LjIxLTEwLjk3MmMtMy4wMjItMi4zMS03LjUyNi0zLjczMS0xMS41NTEtMy43MzEtLjY3NiAwLTEuMzM5LjA0LTEuOTc5LjEyM2wtMTcuNzU5IDIuMzc0IDYuMDg2LTE3LjA3YzEuMjM2LTMuNDg5IDIuMzUxLTguMTU1LS4wMjMtMTMuMzI3bC04LjIwOS0xNy44Mjl6TTUwMS43ODggMzkyLjU3MWwtMjQuODEyLTYuMTM1LTEzLjA1NS0yMS44MDNjLTEuMTIyLTEuODg2LTQuMS02Ljg5NS05Ljc4OS02LjkxaC0uMDI0Yy01LjY3NSAwLTguNjggNC45OTUtOS44MTMgNi44NzdhLjA5MS4wOTEgMCAwMS0uMDA4LjAxM2wtMTIuNzcyIDIxLjMyNi0uMjk1LjQ5Ny0yNC44MjkgNi4xMzljLTIuMzA5LjU3Ny03LjcxNCAxLjkyNy05LjMyOSA3LjEzNS0xLjU5NSA1LjEzOSAxLjkgOS4xOSAzLjY2OSAxMS4xOWwxNi4yMjQgMTkuNTI0Yy4wMTcuMDQ0LjE2MS40NzguMDMzIDIuMDg4bC0xLjkyIDI0LjE0Yy0uMjY4IDIuNDI4LS43OTMgNy44NTEgMy41MjMgMTEuMTIzIDQuMzk0IDMuMzMxIDkuNSAxLjI3MiAxMi4wMzQuMjQ5bDIyLjE4Ni05LjI0OWMuNTU5LS4yMSAxLjk4OS0uMjE1IDIuNTQxLS4wMTNsMjIuMzEyIDkuMjg5YzEuNDQ1LjU4NyAzLjgxNyAxLjU1IDYuNDI1IDEuNTUgMS43OTUgMCAzLjcwMS0uNDU2IDUuNDk1LTEuODA1IDQuMzQtMy4yNjMgMy44MjYtOC43MTMgMy41NzQtMTEuMTI3bC0xLjk1MS0yNC4xNTRjLS4xMjctMS42MTMuMDE3LTIuMDQ3LjA0NC0yLjA5M2wxNi4yNDEtMTkuNTIxYzEuNzY1LTEuOTk2IDUuMjU1LTYuMDM4IDMuNjU5LTExLjE4Mi0xLjYxNy01LjIxMi03LjAzMy02LjU2Ni05LjM2My03LjE0OHptLTIyLjA2MiAyOC4yNTJjLTMuNjM1IDQuMzU4LTMuNzY1IDkuMTctMy40NzEgMTIuODg4bDEuNDYzIDE4LjExNS0xNi41OTMtNi45MDljLTQuMTc4LTEuNzQ1LTkuODEyLTEuNzQ5LTE0LjA0OS0uMDAxbC0xNi41NzcgNi45MTEgMS40NDItMTguMTI3Yy4yOTQtMy43MDQuMTY2LTguNTE2LTMuNDYxLTEyLjg2NmwtMTIuNTg5LTE1LjE1NyAxOS4zOTEtNC43OTRjNS4yMzItMS4yODEgNy4wNTUtMy43NjEgOC43NDEtNi42MzJsMTAuMDc0LTE2LjgyNiA5LjcyNSAxNi4yMzcuMzUxLjU5M2MxLjY4NyAyLjg2OSAzLjUwOSA1LjM0OCA4LjcyMSA2LjYyNGwxOS40MjcgNC44MDR6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhcnR5ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCA1MTIuMDQ4IDUxMi4wNDhcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1Ni40NjggMTc0Ljg1NGExMC4wMDIgMTAuMDAyIDAgMDAtMTYuMDg4IDIuNzQ5TDMuMjcgNDYzLjYyMWE4LjczMyA4LjczMyAwIDAwLS4yMTIuNDczYy01Ljc4IDEzLjg1OS0zLjI0OSAyOC4xMTUgNi43NyAzOC4xMzQgNi40NzQgNi40NzQgMTQuNzE0IDkuODIxIDIzLjQ3NSA5LjgyMSA0Ljc5OCAwIDkuNzU0LTEuMDA1IDE0LjY1OS0zLjA1MS4xNi0uMDY2LjMxOC0uMTM4LjQ3NC0uMjEybDI4Ni4wMTgtMTM3LjEwOWExMCAxMCAwIDAwMi43NDgtMTYuMDg5em0tNC4xNTggMjQuMTI3bDEwMS4xNyAxMDEuMTdjLTM5LjE0NS0xLjYxLTgyLjEwNC0xNi42NzUtMTI4LjEyNi00NC45NHpNNDAuMDQ2IDQ5MC42MjdjLTMuNzAxIDEuNDk3LTEwLjUwNyAzLjAyNy0xNi4wNzctMi41NDMtNS41NjctNS41NjctNC4wMzgtMTIuMzc0LTIuNTQyLTE2LjA3NUw0OC40MjEgNDE1LjdjMTkuMzE4IDE2LjE4MyAzOC44NTEgMzAuNTY2IDU4LjMzNyA0Mi45NDh6bTE5Ni4wMDEtOTMuOTU3Yy0xMS45OTItMi45NzctMjQuNDAyLTcuMDg0LTM2Ljk1NC0xMi4yNTctNS4xMDctMi4xMDctMTAuOTUyLjMyOC0xMy4wNTcgNS40MzUtMi4xMDQgNS4xMDUuMzI5IDEwLjk1MSA1LjQzNSAxMy4wNTZhMzA1LjQwNCAzMDUuNDA0IDAgMDAxNy42ODYgNi42NTdsLTgwLjk1NCAzOC44MDdjLTIzLjU4Ni0xNC4wNzMtNDcuMzcyLTMxLjI5NS03MC44NS01MS4zMDFsMjcuOTc5LTU4LjM2NmE1NjcuMDgyIDU2Ny4wODIgMCAwMDI1Ljc5MiAxOS4yMjkgOS45NTIgOS45NTIgMCAwMDUuNzMyIDEuODEzIDkuOTg5IDkuOTg5IDAgMDA4LjE5Ny00LjI2MWMzLjE3MS00LjUyMSAyLjA3NS0xMC43NTgtMi40NDctMTMuOTI5LTkuNDU2LTYuNjI5LTE4Ljk4My0xMy43OTgtMjguNDA0LTIxLjM1NmwyMi40NjEtNDYuODU0YzUxLjMyNSAzMS4yMDQgOTkuNTczIDQ2Ljk1NCAxNDMuODE3IDQ2Ljk1NCA0LjI2OSAwIDguNTA1LS4xNTIgMTIuNzAxLS40NDZsMzkuODkzIDM5Ljg5M3pNMTk0LjIxMyAxMTYuNTVjMS45MjIgMS43NDYgNC45NTkgNC41MDQgNi4xNDYgNi4xNzMtMS4zODIgMS41NTItNC4xODUgNC4wOTctNi4xNTMgNS44ODUtNi40MTMgNS44MzUtMTAuMTY4IDEzLjgxOS0xMC41NzcgMjIuNDgtLjQwOCA4LjY2MSAyLjU4MiAxNi45NjIgOC40MTcgMjMuMzc0czEzLjgxOSAxMC4xNjkgMjIuNDggMTAuNTc2Yy41MjMuMDI1IDEuMDQzLjAzNyAxLjU2My4wMzcgOC4wOTIgMCAxNS43ODYtMi45NyAyMS44MDktOC40NTEgNS4yNTUtNC43NzMgMTEuMjEyLTEwLjE4MyAxNi43MjgtMTguMzE1IDcuNDE2LTEwLjkzNCAxMS4wMjEtMjIuNjIyIDExLjAyMS0zNS43MzMgMC0yOC44NDgtMTQuNzQ1LTQyLjIzOC0yNy43NTUtNTQuMDU0LTEuOTIxLTEuNzQ1LTQuOTU4LTQuNTAzLTYuMTQ1LTYuMTcxIDEuMzc5LTEuNTQ5IDQuMTc2LTQuMDkgNi4xNTItNS44ODUgMTMuMjM3LTEyLjA0NiAxNC4yMDYtMzIuNjE2IDIuMTU5LTQ1Ljg1NEMyMzQuMjIzIDQuMTk5IDIyNi4yMzkuNDQzIDIxNy41NzguMDM2Yy04LjY0NC0uNC0xNi45NTQgMi41NzktMjMuMzY1IDguNDA5LTUuMjU1IDQuNzcxLTExLjIxMSAxMC4xNzgtMTYuNzMzIDE4LjMxOS03LjQxNyAxMC45MzMtMTEuMDIyIDIyLjYyMi0xMS4wMjIgMzUuNzM0LjAwMSAyOC44NSAxNC43NDYgNDIuMjQgMjcuNzU1IDU0LjA1MnptMjEuMjU1IDQ4LjUxMWExMi4zNzcgMTIuMzc3IDAgMDEtOC42MjktNC4wNiAxMi4zODIgMTIuMzgyIDAgMDEtMy4yMzEtOC45NzMgMTIuMzc0IDEyLjM3NCAwIDAxNC4wNTItOC42MjNjMi40OTYtMi4yNjcgNC45MDEtNC40NTQgNi44OTgtNi41OTFsOS41MDUgOS42MDJjNC4yNzIgNC4zMTYgNC4zMzQgMTEuMjQ5LjE4OCAxNS41NjlhMTIuMzQxIDEyLjM0MSAwIDAxLTguNzgzIDMuMDc2em0zMC4xOC00Mi40ODVjMCA1LjYxNC0uOTE5IDEwLjcyNi0yLjgzMiAxNS42MDdhMzEuMTM2IDMxLjEzNiAwIDAwLTQuNTM4LTUuODM2bC0yNS43MjktMjUuOTljLS4wMTUtLjAxNS0uMDMyLS4wMjgtLjA0OC0uMDQzLTEuNTc3LTEuNTk4LTMuMjM3LTMuMTEtNC44NDMtNC41NjktMTEuODQ0LTEwLjc1NS0yMS4yLTE5LjI1MS0yMS4yLTM5LjI0NiAwLTUuNjE0LjkxOS0xMC43MjYgMi44MzItMTUuNjA3YTMxLjEzNiAzMS4xMzYgMCAwMDQuNTM4IDUuODM2bDI1LjcyOCAyNS45OWMuMDE3LjAxNy4wMzYuMDMxLjA1My4wNDggMS41NzYgMS41OTYgMy4yMzQgMy4xMDcgNC44MzkgNC41NjQgMTEuODQ1IDEwLjc1NSAyMS4yIDE5LjI1MiAyMS4yIDM5LjI0NnpNMjE2LjA0IDIwYTEyLjM3NSAxMi4zNzUgMCAwMTkuMjI5IDQuMDc0YzQuNjI1IDUuMDgyIDQuMjUzIDEyLjk3OS0uODM3IDE3LjYxLTIuNDkgMi4yNjItNC44OSA0LjQ0NC02Ljg4MiA2LjU3NmwtOS41MDYtOS42MDNjLTQuMjczLTQuMzE2LTQuMzM0LTExLjI1LS4xODYtMTUuNTcgMi4yODQtMiA1LjE1OC0zLjA4NyA4LjE4Mi0zLjA4N3pNMzg2LjcyMyAxMzkuNDc1YzUuODQ5IDUuODQ5IDEzLjUzMSA4Ljc3MiAyMS4yMTQgOC43NzIgNy42ODIgMCAxNS4zNjQtMi45MjQgMjEuMjEzLTguNzcybDE0LjE0My0xNC4xNDNjMTEuNjk3LTExLjY5NyAxMS42OTctMzAuNzI5IDAtNDIuNDI3TDQyOS4xNSA2OC43NjNjLTExLjY5Ny0xMS42OTYtMzAuNzI5LTExLjY5OC00Mi40MjcgMEwzNzIuNTggODIuOTA2Yy01LjY1IDUuNjUtOC43NjMgMTMuMTg1LTguNzYzIDIxLjIxNCAwIDguMDI4IDMuMTEyIDE1LjU2MiA4Ljc2MyAyMS4yMTN6bTAtNDIuNDI3bDE0LjE0My0xNC4xNDJjMS44NzMtMS44NzMgNC4zODQtMi45MDUgNy4wNzEtMi45MDVzNS4xOTcgMS4wMzIgNy4wNyAyLjkwNWwxNC4xNDMgMTQuMTQyYzEuODczIDEuODczIDIuOTA1IDQuMzg0IDIuOTA1IDcuMDcxcy0xLjAzMiA1LjE5Ny0yLjkwNSA3LjA3bC0xNC4xNDMgMTQuMTQzYy0xLjg3MyAxLjg3My00LjM4NCAyLjkwNS03LjA3IDIuOTA1LTIuNjg4IDAtNS4xOTgtMS4wMzItNy4wNzEtMi45MDVsLTE0LjE0My0xNC4xNDNjLTEuODczLTEuODczLTIuOTA1LTQuMzg0LTIuOTA1LTcuMDdzMS4wMzEtNS4xOTggMi45MDUtNy4wNzF6TTUwMS40NDQgMjcxLjk5NmMtNi40MTMtNS44MzctMTQuNzEyLTguODE3LTIzLjM3Ni04LjQxOC04LjY2MS40MDgtMTYuNjQ1IDQuMTY0LTIyLjQ4NyAxMC41ODUtMS43ODEgMS45NjEtNC4zMjUgNC43NjMtNS44NzcgNi4xNDUtMS42NjgtMS4xODctNC40MjctNC4yMjUtNi4xNzQtNi4xNDgtMTEuODE0LTEzLjAwOC0yNS4yMDQtMjcuNzUxLTU0LjA1MS0yNy43NTEtMTMuMTEyIDAtMjQuODAxIDMuNjA0LTM1LjczNCAxMS4wMjEtOC4xMzUgNS41MTktMTMuNTQ1IDExLjQ3Ni0xOC4zMTEgMTYuNzI1LS4xMjMuMTM1LS4yMzcuMjc1LS4zNTcuNDEybC0uMDA3LjAwOGMtNS41OTIgNi4zNTQtOC40NTQgMTQuNDgtOC4wNTQgMjIuOTU2LjQwOCA4LjY2MSA0LjE2NCAxNi42NDUgMTAuNTc2IDIyLjQ3OSAxMy4yMzcgMTIuMDQ4IDMzLjgwNyAxMS4wNzcgNDUuODcxLTIuMTc2IDEuNzc4LTEuOTU5IDQuMzE5LTQuNzU2IDUuODY5LTYuMTM2IDEuNjY4IDEuMTg2IDQuNDI2IDQuMjIzIDYuMTcxIDYuMTQ1IDExLjgxMyAxMy4wMSAyNS4yMDQgMjcuNzU1IDU0LjA1NCAyNy43NTUgMTMuMTEyIDAgMjQuODAxLTMuNjA1IDM1LjczNC0xMS4wMjEgOC4xMzEtNS41MTYgMTMuNTQtMTEuNDcxIDE4LjMxMi0xNi43MjUgMTIuMDQ2LTEzLjI0IDExLjA3OC0zMy44MS0yLjE1OS00NS44NTZ6bS0zMS4wNjMgMTUuNjJhMTIuMzggMTIuMzggMCAwMTguNjI5LTQuMDYxYzMuMzI3LS4xNDIgNi41MTEuOTkyIDguOTczIDMuMjMxIDUuMDIxIDQuNTcgNS40MzQgMTIuMzI5Ljk4MSAxNy40MTYtNC4zMiA0LjE0NC0xMS4yNTIgNC4wNzgtMTUuNTY1LS4xOTFsLTkuNjAyLTkuNTA2YzIuMTM1LTEuOTk1IDQuMzIxLTQuMzk4IDYuNTg0LTYuODg5em0tMTAxLjcyNCAxNi43NzFhMTIuMzgyIDEyLjM4MiAwIDAxLTguNjMgNC4wNjFjLTMuMzM4LjE2My02LjUxMS0uOTkxLTguOTczLTMuMjMxYTEyLjM4IDEyLjM4IDAgMDEtNC4wNjEtOC42MjggMTIuMzgxIDEyLjM4MSAwIDAxMy4wODMtOC43OTNjNC4zMjMtNC4xMzggMTEuMjQ5LTQuMDcyIDE1LjU2LjE5NWw5LjYwMyA5LjUwNmMtMi4xMzMgMS45OTUtNC4zMTcgNC4zOTctNi41ODIgNi44OXptNDEuNjUzLjAwOWMtMS40NjEtMS42MDktMi45NzYtMy4yNzEtNC41NzctNC44NTFsLS4wMzUtLjAzOS0yNS45OS0yNS43MjlhMzEuMTcxIDMxLjE3MSAwIDAwLTUuODM1LTQuNTM4YzQuODgxLTEuOTEzIDkuOTk0LTIuODMyIDE1LjYwNy0yLjgzMiAxOS45OTMgMCAyOC40ODkgOS4zNTQgMzkuMjQ3IDIxLjE5OSAxLjQ1NiAxLjYwMyAyLjk2NSAzLjI2IDQuNTYxIDQuODM1LjAxOC4wMTguMDMzLjAzOC4wNTEuMDU2bDI1Ljk5IDI1LjcyOWEzMS4xODMgMzEuMTgzIDAgMDA1LjgzNiA0LjUzOWMtNC44ODEgMS45MTMtOS45OTMgMi44MzItMTUuNjA3IDIuODMyLTE5Ljk5Ny0uMDAxLTI4LjQ5Mi05LjM1Ni0zOS4yNDgtMjEuMjAxek00NzQuMjI3IDQ3LjgyOWM1LjUyMiAwIDEwLTQuNDc4IDEwLTEwcy00LjQ3OC0xMC0xMC0xMGgtLjAwOGMtNS41MjIgMC05Ljk5NiA0LjQ3OC05Ljk5NiAxMHM0LjQ4MiAxMCAxMC4wMDQgMTB6TTMzNy42MDggNDAuNjFjNS41MjIgMCAxMC00LjQ3OCAxMC0xMHMtNC40NzgtMTAtMTAtMTBoLS4wMDdjLTUuNTIyIDAtOS45OTcgNC40NzgtOS45OTcgMTBzNC40ODIgMTAgMTAuMDA0IDEwek0zMDYuMzE5IDEzMS4yOTVjNS41MjIgMCAxMC00LjQ3OCAxMC0xMHMtNC40NzgtMTAtMTAtMTBoLS4wMDhjLTUuNTIyIDAtOS45OTYgNC40NzgtOS45OTYgMTBzNC40ODIgMTAgMTAuMDA0IDEwek0yOTguNjg2IDIyMy4zNzNjNS41MjIgMCAxMC00LjQ3OCAxMC0xMHMtNC40NzgtMTAtMTAtMTBoLS4wMDhjLTUuNTIyIDAtOS45OTYgNC40NzgtOS45OTYgMTBzNC40ODIgMTAgMTAuMDA0IDEwek00NzEuNDQ2IDE3NC40NDd2LjAwOGMwIDUuNTIyIDQuNDc4IDkuOTk2IDEwIDkuOTk2czEwLTQuNDgxIDEwLTEwLjAwNC00LjQ3OC0xMC0xMC0xMC0xMCA0LjQ3Ny0xMCAxMHpNMzgwLjc2IDIwNS43Mzd2LjAwN2MwIDUuNTIyIDQuNDc4IDkuOTk3IDEwIDkuOTk3czEwLTQuNDgxIDEwLTEwLjAwNC00LjQ3OC0xMC0xMC0xMC0xMCA0LjQ3Ny0xMCAxMHpcIiAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1NC44NzYgMzYzLjg0MmgtLjAwOGMtNS41MjMgMC05Ljk5NiA0LjQ3OC05Ljk5NiAxMHM0LjQ4MSAxMCAxMC4wMDQgMTAgMTAtNC40NzggMTAtMTAtNC40NzctMTAtMTAtMTB6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvY2sgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0xOC43NSA5SDE4VjZjMC0zLjMwOS0yLjY5MS02LTYtNlM2IDIuNjkxIDYgNnYzaC0uNzVBMi4yNTMgMi4yNTMgMCAwMDMgMTEuMjV2MTAuNUMzIDIyLjk5MSA0LjAxIDI0IDUuMjUgMjRoMTMuNWMxLjI0IDAgMi4yNS0xLjAwOSAyLjI1LTIuMjV2LTEwLjVDMjEgMTAuMDA5IDE5Ljk5IDkgMTguNzUgOXpNOCA2YzAtMi4yMDYgMS43OTQtNCA0LTRzNCAxLjc5NCA0IDR2M0g4em01IDEwLjcyMlYxOWExIDEgMCAxMS0yIDB2LTIuMjc4Yy0uNTk1LS4zNDctMS0uOTg1LTEtMS43MjIgMC0xLjEwMy44OTctMiAyLTJzMiAuODk3IDIgMmMwIC43MzctLjQwNSAxLjM3NS0xIDEuNzIyelwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgdmlld0JveD1cIjAgMCA1MTIuMDkyIDUxMi4wOTJcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTMxMi40NTMgMTk5LjYwMWExMTYuMTY3IDExNi4xNjcgMCAwMC0yMC4wNTMtMTYuMTI4IDExOS40NzIgMTE5LjQ3MiAwIDAwLTY0LjQyNy0xOC44NTkgMTE4Ljk1MiAxMTguOTUyIDAgMDAtODQuNDggMzQuOTg3TDM0Ljk0OSAzMDguMjNhMTE5LjQ2NiAxMTkuNDY2IDAgMDAtMzQuOTEgODQuMzE4Yy0uMDQyIDY1Ljk4IDUzLjQxIDExOS41MDEgMTE5LjM5IDExOS41NDNhMTE4LjcgMTE4LjcgMCAwMDg0LjM5NS0zNC44MTZsODkuNi04OS42YTguNTM0IDguNTM0IDAgMDAtNi4wNTktMTQuNTkyaC0zLjQxM2ExNDMuNjI2IDE0My42MjYgMCAwMS01NC42MTMtMTAuNTgxIDguNTMzIDguNTMzIDAgMDAtOS4zMDEgMS44NzdsLTY0LjQyNyA2NC41MTJjLTIwLjAwNiAyMC4wMDYtNTIuNDQyIDIwLjAwNi03Mi40NDggMC0yMC4wMDYtMjAuMDA2LTIwLjAwNi01Mi40NDIgMC03Mi40NDhsMTA4Ljk3MS0xMDguODg1YzE5Ljk5LTE5Ljk2NSA1Mi4zNzMtMTkuOTY1IDcyLjM2MyAwIDEzLjQ3MiAxMi42NzkgMzQuNDg2IDEyLjY3OSA0Ny45NTcgMGEzNC4xMzQgMzQuMTM0IDAgMDA5Ljg5OS0yMS42NzUgMzQuMTM3IDM0LjEzNyAwIDAwLTkuOS0yNi4yODJ6XCIgLz5cclxuICAgICAgPHBhdGggZD1cIk00NzcuMDYxIDM0Ljk5M2MtNDYuNjU3LTQ2LjY1Ny0xMjIuMzAzLTQ2LjY1Ny0xNjguOTYgMGwtODkuNTE1IDg5LjQyOWE4LjUzMyA4LjUzMyAwIDAwLTEuNzkyIDkuMzg3IDguNTMyIDguNTMyIDAgMDA4LjAyMSA1LjIwNWgzLjE1N2ExNDMuMzU3IDE0My4zNTcgMCAwMTU0LjUyOCAxMC42NjcgOC41MzMgOC41MzMgMCAwMDkuMzAxLTEuODc3bDY0LjI1Ni02NC4xNzFjMjAuMDA2LTIwLjAwNiA1Mi40NDItMjAuMDA2IDcyLjQ0OCAwIDIwLjAwNiAyMC4wMDYgMjAuMDA2IDUyLjQ0MiAwIDcyLjQ0OGwtODAuMDQzIDc5Ljk1Ny0uNjgzLjc2OC0yNy45ODkgMjcuODE5Yy0xOS45OSAxOS45NjUtNTIuMzczIDE5Ljk2NS03Mi4zNjMgMC0xMy40NzItMTIuNjc5LTM0LjQ4Ni0xMi42NzktNDcuOTU3IDBhMzQuMTM5IDM0LjEzOSAwIDAwLTkuODk5IDIxLjg0NSAzNC4xMzcgMzQuMTM3IDAgMDA5Ljg5OSAyNi4yODMgMTE4LjQ0NyAxMTguNDQ3IDAgMDAzNC4xMzMgMjMuODkzYzEuNzkyLjg1MyAzLjU4NCAxLjUzNiA1LjM3NiAyLjMwNCAxLjc5Mi43NjggMy42NjkgMS4zNjUgNS40NjEgMi4wNDhhNjcuNzk5IDY3Ljc5OSAwIDAwNS40NjEgMS43OTJsNS4wMzUgMS4zNjVjMy40MTMuODUzIDYuODI3IDEuNTM2IDEwLjMyNSAyLjEzMyA0LjIxNC42MjYgOC40NTggMS4wMjUgMTIuNzE1IDEuMTk1SDI4NC40NjFsNS4xMi0uNTk3YzEuODc3LS4wODUgMy44NC0uNTEyIDYuMDU5LS41MTJoMi45MDFsNS44ODgtLjg1MyAyLjczMS0uNTEyIDQuOTQ5LTEuMDI0aC45MzlhMTE5LjQ1NiAxMTkuNDU2IDAgMDA1NS4zODEtMzEuNDAzbDEwOC42MjktMTA4LjYyOWM0Ni42Ni00Ni42NTcgNDYuNjYtMTIyLjMwMy4wMDMtMTY4Ljk2elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmlld0JveD1cIjEgMCA1MTIgNTExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNTEyIDI1NS41bC0uMDA0IDFjLS4xODcgNDguNjY4LTE0LjA3OCA5NS45MzgtNDAuMiAxMzYuNzc3LTMuODE2IDUuOTY1LTEwLjI3MyA5LjIyNy0xNi44NjYgOS4yMjdhMTkuOTI0IDE5LjkyNCAwIDAxLTEwLjc1OC0zLjE1NmMtOS4zMDUtNS45NTMtMTIuMDI0LTE4LjMyLTYuMDctMjcuNjI1QzQ2MC4xODggMzM3LjE5NSA0NzEuOTA2IDI5Ny4xODcgNDcyIDI1NmMtLjI3LTExOC44NzUtOTYuNjE3LTIxNS41LTIxNS0yMTUuNS03NS42NCAwLTE0NS44MiA0MC4xMjUtMTg0LjY4NCAxMDMuOTNsNDUuNzE1LjA3YzExLjA0Ny4wMTYgMTkuOTg1IDguOTg0IDE5Ljk2OSAyMC4wMzEtLjAxNiAxMS4wMzEtOC45NjkgMTkuOTY5LTIwIDE5Ljk2OWgtLjAzMWwtNTguNTE2LS4wOWMtMTUuOTQxLjAzNS0zMC43ODEtNi4wNjYtNDEuOTMzLTE3LjIxNUM2LjE1NiAxNTUuODMyLS4wNjYgMTQwLjU3OCAwIDEyNC4yNDJWNjYuNWMwLTExLjA0NyA4Ljk1My0yMCAyMC0yMHMyMCA4Ljk1MyAyMCAyMHY1NC4xMDVjMTkuNzktMzEuNTcgNDYuMjktNTguNTQzIDc3Ljg0NC03OS4wMTVDMTU5LjI4IDE0LjcwNyAyMDcuMzk4LjUgMjU3IC41YzY4LjM0IDAgMTMyLjQ2NSAyNi42NDUgMTgwLjU2MyA3NS4wMjNDNDg1LjMyNyAxMjMuNTcgNTExLjc0MyAxODcuNDUzIDUxMiAyNTUuNXpNMzgwLjU0MyA0MzIuNzAzQzM0NC4yMTUgNDU4LjA4MiAzMDEuNDk2IDQ3MS41IDI1NyA0NzEuNWMtLjE2OCAwLS4zMzIuMDItLjUuMDIzLS4xNjgtLjAwMy0uMzMyLS4wMjMtLjUtLjAyMy0zLjAzNSAwLTYuMTIxLS4wNjYtOS4xNzItLjE5MS0xMS4wMDQtLjQ2MS0yMC4zNTEgOC4xMTctMjAuODEyIDE5LjE1Mi0uNDU3IDExLjAzNSA4LjExNyAyMC4zNTUgMTkuMTU2IDIwLjgxMiAzLjU5OC4xNDkgNy4yNDIuMjI3IDEwLjgyOC4yMjcuMTY4IDAgLjMzMi0uMDIuNS0uMDIzLjE2OC4wMDMuMzMyLjAyMy41LjAyMyA1Mi43MyAwIDEwMy4zNzEtMTUuOTA2IDE0Ni40NTMtNDYuMDA0IDkuMDU1LTYuMzI4IDExLjI3LTE4Ljc5NyA0Ljk0Mi0yNy44NTEtNi4zMjUtOS4wNTUtMTguNzkzLTExLjI2Ni0yNy44NTItNC45NDJ6bS0yODMuMTI5LTMwLjU1Yy03LjUtOC4xMDYtMjAuMTU2LTguNjAyLTI4LjI2Mi0xLjA5OC04LjEwOSA3LjUtOC42MDEgMjAuMTUyLTEuMDk3IDI4LjI2MWEyNTkuNzgxIDI1OS43ODEgMCAwMDE0LjE0NCAxNC4xNDkgMTkuOTMxIDE5LjkzMSAwIDAwMTMuNTc4IDUuMzE2IDE5Ljk1MyAxOS45NTMgMCAwMDE0LjY4OC02LjQxOGM3LjUtOC4xMDUgNy4wMDgtMjAuNzYxLTEuMDk4LTI4LjI2MWEyMTYuODk3IDIxNi44OTcgMCAwMS0xMS45NTMtMTEuOTV6TTUzLjQzNyAzMzAuNjhjLTMuODQ3LTEwLjM1Ni0xNS4zNTUtMTUuNjM3LTI1LjcxLTExLjc5LTEwLjM1NiAzLjg0NC0xNS42MzMgMTUuMzU2LTExLjc5IDI1LjcxMmEyNTUuMSAyNTUuMSAwIDAwNy43IDE4LjQ3NmMzLjM4NiA3LjMgMTAuNjEgMTEuNTk0IDE4LjE2IDExLjU5NGExOS45NCAxOS45NCAwIDAwOC4zOTgtMS44NjNjMTAuMDI0LTQuNjQ1IDE0LjM4LTE2LjUzNiA5LjczLTI2LjU1OWEyMTUuODMyIDIxNS44MzIgMCAwMS02LjQ4OC0xNS41N3ptMTI3LjQxOCAxMjcuMzk0YTIxNC42OCAyMTQuNjggMCAwMS0xNS41ODItNi40OTJjLTEwLjAyMy00LjY0OC0yMS45MTQtLjI5My0yNi41NTggOS43My00LjY0OSAxMC4wMi0uMjkzIDIxLjkxIDkuNzI2IDI2LjU2YTI1NC4yMzIgMjU0LjIzMiAwIDAwMTguNSA3LjcwMiAxOS45NDkgMTkuOTQ5IDAgMDA2Ljk1NCAxLjI1OGM4LjEyNSAwIDE1Ljc2MS00Ljk4OCAxOC43NTMtMTMuMDUgMy44NC0xMC4zNTYtMS40MzctMjEuODY0LTExLjc5My0yNS43MDh6TTIxLjA0IDI4NS40OGMxMS4wNC0uNDU3IDE5LjYxMy05Ljc3NyAxOS4xNTItMjAuODEyQTIyMy44NyAyMjMuODcgMCAwMTQwIDI1NS41YzAtMTEuMDQ3LTguOTUzLTIwLTIwLTIwcy0yMCA4Ljk1My0yMCAyMGMwIDMuNjAyLjA3OCA3LjI0Ni4yMjcgMTAuODMyQy42NzIgMjc3LjA4NiA5LjUzIDI4NS41IDIwLjE5IDI4NS41Yy4yODIgMCAuNTY3LS4wMDguODQ4LS4wMnptMTU4LjQ5Mi0xOC43NjFjNi4yOTctNS4xMjUgMTMuMDk0LTkuNTU5IDIwLjIzOS0xMy4yOTNDMTg4LjA5OCAyNDAuMDU5IDE4MSAyMjIuNTk4IDE4MSAyMDMuNWMwLTQxLjkwNiAzNC4wOTQtNzYgNzYtNzZzNzYgMzQuMDk0IDc2IDc2YzAgMTkuMDk4LTcuMDk4IDM2LjU1OS0xOC43NzMgNDkuOTI2YTEyMC40MDQgMTIwLjQwNCAwIDAxMjAuMjQyIDEzLjI5M2MyMS4zMDggMTcuMzQgMzYuMTI5IDQxLjU1NCA0MS43MyA2OC4xNzYgMi4zMDUgMTAuOTQtLjQxOCAyMi4xOTktNy40NjUgMzAuODgyLTcuMDc0IDguNzIzLTE3LjU5MyAxMy43MjMtMjguODU5IDEzLjcyM2gtMTY1Ljc1Yy0xMS4yNjYgMC0yMS43ODUtNS0yOC44Ni0xMy43MjMtNy4wNDYtOC42ODMtOS43NjktMTkuOTQxLTcuNDY4LTMwLjg4MiA1LjYwMS0yNi42MjIgMjAuNDIyLTUwLjgzNiA0MS43MzQtNjguMTc2ek0yMjEgMjAzLjVjMCAxOS44NTIgMTYuMTQ4IDM2IDM2IDM2czM2LTE2LjE0OCAzNi0zNi0xNi4xNDgtMzYtMzYtMzYtMzYgMTYuMTQ4LTM2IDM2em0tNDMuMjAzIDEzNmgxNTguNDA2Yy05LjEyMS0zNC45ODQtNDEuNTU1LTYwLTc4LjUyMy02MGgtMS4zNmMtMzYuOTY4IDAtNjkuNDAyIDI1LjAxNi03OC41MjMgNjB6bTAgMFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbHVzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDkyIDIzNkgyNzZWMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBzLTIwIDguOTU0LTIwIDIwdjIxNkgyMGMtMTEuMDQ2IDAtMjAgOC45NTQtMjAgMjBzOC45NTQgMjAgMjAgMjBoMjE2djIxNmMwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMHMyMC04Ljk1NCAyMC0yMFYyNzZoMjE2YzExLjA0NiAwIDIwLTguOTU0IDIwLTIwcy04Ljk1NC0yMC0yMC0yMHpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGx1c0NpcmNsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTIgOC4zMzNWMTIgOC4zMzN6TTEyIDEydjMuNjY3VjEyem0wIDBoMy42NjdIMTJ6bTAgMEg4LjMzMyAxMnptMTEgMGExMSAxMSAwIDExLTIyIDAgMTEgMTEgMCAwMTIyIDB6XCJcclxuICAgICAgICBzdHJva2U9e3Byb3BzLmZpbGx9XHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRG90cyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCAzODRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8Y2lyY2xlIGN4PXsxOTJ9IGN5PXs0Mi42Njd9IHI9ezQyLjY2N30gLz5cclxuICAgICAgPGNpcmNsZSBjeD17MTkyfSBjeT17MTkyfSByPXs0Mi42Njd9IC8+XHJcbiAgICAgIDxjaXJjbGUgY3g9ezE5Mn0gY3k9ezM0MS4zMzN9IHI9ezQyLjY2N30gLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENpcmNsZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aCBkPVwiTTY0IDEyOGMzNS4zNDYgMCA2NC0yOC42NTQgNjQtNjQgMC0zNS4zNDYtMjguNjU0LTY0LTY0LTY0QzI4LjY1NCAwIDAgMjguNjU0IDAgNjRjMCAzNS4zNDYgMjguNjU0IDY0IDY0IDY0elwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIaWRkZW4gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNS4wODYgMjAuNDY4bC0zLjQtMy40MDJBNS4wMyA1LjAzIDAgMDE2Ljk4IDEyLjM2bC00LjYyLTQuNjJBMTIuNTUxIDEyLjU1MSAwIDAwMCAxMi4wNDZjMS42MDIgNS4xMDIgNi4zNyA4LjgwNCAxMiA4LjgwNCAxLjA2NSAwIDIuMDk5LS4xMzMgMy4wODYtLjM4MXpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTQuMDg2IDIuMzUzYTEuMjU4IDEuMjU4IDAgMDAtMS43NzggMS43NzhsMTcuNjA2IDE3LjYwN2ExLjI1NyAxLjI1NyAwIDAwMS43NzgtMS43NzlsLTEuODUyLTEuODUyQTEyLjU5NCAxMi41OTQgMCAwMDI0IDEyLjA0NWMtMS42MDItNS4xMDItNi4zNjktOC44MDMtMTItOC44MDNhMTIuNTIzIDEyLjUyMyAwIDAwLTUuNjc0IDEuMzVMNC4wODcgMi4zNTRoLS4wMDF6TTkuNDQ1IDcuNzFsMS45MDQgMS45MDZhMi41MTkgMi41MTkgMCAwMTMuMDggMy4wOGwxLjkwNSAxLjkwNWE1LjAzIDUuMDMgMCAwMC02Ljg5LTYuODl6XCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlbW92ZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzg0IDM4NFwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjMzLjEzMiAyMTkuNDM2YTQxLjEzOCA0MS4xMzggMCAwMTQxLjE0MSA0MS4xNDF2MTMuNzE0QzI3NC4yNzMgMzI4LjM1IDIyMy4yNTkgMzg0IDEzNy4xMzcgMzg0IDUxLjAxNSAzODQgMCAzMjguMzUgMCAyNzQuMjkxdi0xMy43MTRhNDEuMTQgNDEuMTQgMCAwMTQxLjE0MS00MS4xNDFoMTkxLjk5MXpNMTM3LjEzNyA0MS4xNThhNzUuNDI0IDc1LjQyNCAwIDAxNTMuMzMzIDEyOC43NTlBNzUuNDI0IDc1LjQyNCAwIDExODMuODAzIDYzLjI1YTc1LjQyNiA3NS40MjYgMCAwMTUzLjMzNC0yMi4wOTJ6bTEzMS4yMTItMzguN2wxLjkyIDEuNTY0IDQ1LjE0NSA0NS4xNzJMMzYwLjU2IDQuMDIzYTEzLjczIDEzLjczIDAgMTExOS40MTggMTkuNDE4bC00NS4xNzMgNDUuMTQ2IDQ1LjE3MyA0NS4xNDVhMTMuNzE2IDEzLjcxNiAwIDAxMS41NjQgMTcuNDk5bC0xLjU2NCAxLjkyYTEzLjcxIDEzLjcxIDAgMDEtMTcuNDk4IDEuNTYzbC0xLjkyLTEuNTYzLTQ1LjE0Ni00NS4xNzMtNDUuMTQ1IDQ1LjE3M2ExMy43MzEgMTMuNzMxIDAgMDEtMTkuNDE5LTE5LjQxOWw0NS4xNzMtNDUuMTQ1TDI1MC44NSAyMy40NGExMy43MTIgMTMuNzEyIDAgMDEtMS41NjMtMTcuNDk4bDEuNTYzLTEuOTJhMTMuNzE1IDEzLjcxNSAwIDAxMTUuNDE1LTIuNzQzbDIuMDg0IDEuMTh6XCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCJcclxuXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgQ2FsZW5kYXJMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhbGVuZGFycy9DYWxlbmRhckxpc3RcIlxyXG5pbXBvcnQgTmV3Q2FsZW5kYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FsZW5kYXJzL05ld0NhbGVuZGFyXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2FwcC5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgQ2FsZW5kYXJzID0gKHsgdXNlciwgZGF0YSB9KSA9PiB7XHJcblx0Y29uc3QgW2NhbGVuZGFycywgc2V0Q2FsZW5kYXJzXSA9IHVzZVN0YXRlKGRhdGEpXHJcblx0cmV0dXJuIChcclxuXHRcdDxBcHBsaWNhdGlvbiB1c2VyPXt1c2VyfSB0aXRsZT0nWW91ciBjYWxlbmRhcnMnPlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXMucGFnZVRpdGxlfT5Zb3VyIGNhbGVuZGFyczwvaDE+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJzUGFnZX0+XHJcblx0XHRcdFx0PENhbGVuZGFyTGlzdFxyXG5cdFx0XHRcdFx0Y2FsZW5kYXJzPXtjYWxlbmRhcnN9XHJcblx0XHRcdFx0XHRzZXRDYWxlbmRhcnM9e3NldENhbGVuZGFyc31cclxuXHRcdFx0XHRcdGFjY2Vzc1Rva2VuPXt1c2VyLnRva2VufVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE5ld0NhbGVuZGFyIHNldENhbGVuZGFycz17c2V0Q2FsZW5kYXJzfSB1c2VyPXt1c2VyfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQXBwbGljYXRpb24+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG5cdGNvbnN0IGNvb2tpZSA9IG5vb2tpZXMuZ2V0KGN0eCkudXNlclxyXG5cdGlmICghISFjb29raWUpXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyZWRpcmVjdDoge1xyXG5cdFx0XHRcdHBlcm1hbmVudDogZmFsc2UsXHJcblx0XHRcdFx0ZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cclxuXHRjb25zdCB1c2VyID0gSlNPTi5wYXJzZShjb29raWUpXHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcblx0XHRgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9jYWxlbmRhcnMvbXkvcHJpdmF0ZWAsXHJcblx0XHR7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IHVzZXIudG9rZW4sXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0KVxyXG5cdHJldHVybiB7IHByb3BzOiB7IHVzZXI6IHVzZXIsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyc1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcHBcIjogXCJhcHBfYXBwX18zR1paOVwiLFxuXHRcImJhclwiOiBcImFwcF9iYXJfXzNabm81XCIsXG5cdFwiYmFyT3B0aW9uc1wiOiBcImFwcF9iYXJPcHRpb25zX18zV0xkLVwiLFxuXHRcImJhck9wdGlvbnNCdXR0b25cIjogXCJhcHBfYmFyT3B0aW9uc0J1dHRvbl9fMjBYdmNcIixcblx0XCJiYXJPcHRpb25zQnV0dG9uQWN0aXZlXCI6IFwiYXBwX2Jhck9wdGlvbnNCdXR0b25BY3RpdmVfXzNFRE94XCIsXG5cdFwiYmFyQWNjb3VudFwiOiBcImFwcF9iYXJBY2NvdW50X18zX2F3SFwiLFxuXHRcImJhckFjY291bnRCdXR0b25cIjogXCJhcHBfYmFyQWNjb3VudEJ1dHRvbl9fMnJSOC1cIixcblx0XCJiYXJBY2NvdW50SW1hZ2VcIjogXCJhcHBfYmFyQWNjb3VudEltYWdlX194a3pWU1wiLFxuXHRcImRyb3Bkb3duQmFyT3B0aW9uc1wiOiBcImFwcF9kcm9wZG93bkJhck9wdGlvbnNfXzFMb1dpXCIsXG5cdFwiZHJvcGRvd25CYXJPcHRpb25cIjogXCJhcHBfZHJvcGRvd25CYXJPcHRpb25fXzFSZnBLXCIsXG5cdFwicGFnZVRpdGxlXCI6IFwiYXBwX3BhZ2VUaXRsZV9fM0FCVXFcIixcblx0XCJjYWxlbmRhcnNQYWdlXCI6IFwiYXBwX2NhbGVuZGFyc1BhZ2VfXzI4NFl6XCIsXG5cdFwiY2FsZW5kYXJFbGVtZW50XCI6IFwiYXBwX2NhbGVuZGFyRWxlbWVudF9fb0RDS3lcIixcblx0XCJmYWRlSW5cIjogXCJhcHBfZmFkZUluX18xLXhWN1wiLFxuXHRcImNhbGVuZGFyRGF0YVwiOiBcImFwcF9jYWxlbmRhckRhdGFfXzFobEdqXCIsXG5cdFwiY2FsZW5kYXJUaXRsZVwiOiBcImFwcF9jYWxlbmRhclRpdGxlX18zZXBocVwiLFxuXHRcImNhbGVuZGFyQnV0dG9uTW9yZVwiOiBcImFwcF9jYWxlbmRhckJ1dHRvbk1vcmVfX2tzQkQ4XCIsXG5cdFwiY2FsZW5kYXJTcGFuXCI6IFwiYXBwX2NhbGVuZGFyU3Bhbl9fMkx5X0FcIixcblx0XCJjYWxlbmRhck9wZW5CdXR0b25cIjogXCJhcHBfY2FsZW5kYXJPcGVuQnV0dG9uX18zZ2NzN1wiLFxuXHRcImNhbGVuZGFyQ3JlYXRlQmxvY2tcIjogXCJhcHBfY2FsZW5kYXJDcmVhdGVCbG9ja19fMWpxendcIixcblx0XCJkcm9wZG93bk9wdGlvbnNcIjogXCJhcHBfZHJvcGRvd25PcHRpb25zX18yUzJ4b1wiLFxuXHRcImRyb3Bkb3duT3B0aW9uXCI6IFwiYXBwX2Ryb3Bkb3duT3B0aW9uX18zREZ6TFwiLFxuXHRcInVzZXJQYWdlXCI6IFwiYXBwX3VzZXJQYWdlX19KdDgta1wiLFxuXHRcInVzZXJCYW5uZXJcIjogXCJhcHBfdXNlckJhbm5lcl9fMUZPZUVcIixcblx0XCJ1c2VyQmFubmVySW1hZ2VCbG9ja1wiOiBcImFwcF91c2VyQmFubmVySW1hZ2VCbG9ja19fMi1jTWlcIixcblx0XCJ1c2VyQmFubmVySW1hZ2VcIjogXCJhcHBfdXNlckJhbm5lckltYWdlX19zTXZkaVwiLFxuXHRcInVzZXJCYW5uZXJEYXRhQmxvY2tcIjogXCJhcHBfdXNlckJhbm5lckRhdGFCbG9ja19fMjZOWGhcIixcblx0XCJ1c2VyQmFubmVyRGF0YU5hbWVcIjogXCJhcHBfdXNlckJhbm5lckRhdGFOYW1lX19BblBRYVwiLFxuXHRcInVzZXJCYW5uZXJEYXRhU3RhdHVzXCI6IFwiYXBwX3VzZXJCYW5uZXJEYXRhU3RhdHVzX181VExSbVwiLFxuXHRcInVzZXJCYW5uZXJEYXRhU3RhdFwiOiBcImFwcF91c2VyQmFubmVyRGF0YVN0YXRfXzFheldvXCIsXG5cdFwidXNlckJhbm5lckRhdGFTdGF0VGl0bGVcIjogXCJhcHBfdXNlckJhbm5lckRhdGFTdGF0VGl0bGVfXzMzT1hvXCIsXG5cdFwidXNlckJhbm5lckRhdGFTdGF0Q29udGVudFwiOiBcImFwcF91c2VyQmFubmVyRGF0YVN0YXRDb250ZW50X18xWllielwiLFxuXHRcInVzZXJCYW5uZXJPd25lckJ1dHRvblwiOiBcImFwcF91c2VyQmFubmVyT3duZXJCdXR0b25fXzFjVjhDXCIsXG5cdFwidXNlclNoYXJlZENhbGVuZGFyc1wiOiBcImFwcF91c2VyU2hhcmVkQ2FsZW5kYXJzX19fai0xTlwiLFxuXHRcImFjY291bnRQYWdlXCI6IFwiYXBwX2FjY291bnRQYWdlX19aemcxaFwiLFxuXHRcImFjY291bnRQYWdlTWFpblwiOiBcImFwcF9hY2NvdW50UGFnZU1haW5fXzNkMUJ5XCIsXG5cdFwiYWNjb3VudEltYWdlQmxvY2tcIjogXCJhcHBfYWNjb3VudEltYWdlQmxvY2tfXzNmUVpDXCIsXG5cdFwiYWNjb3VudERhdGFCbG9ja1wiOiBcImFwcF9hY2NvdW50RGF0YUJsb2NrX19XWUMweVwiLFxuXHRcImNhbGVuZGFyUGFnZVwiOiBcImFwcF9jYWxlbmRhclBhZ2VfXzNwT29pXCIsXG5cdFwiYmlnQ2FsZW5kYXJcIjogXCJhcHBfYmlnQ2FsZW5kYXJfXzhqcWhxXCIsXG5cdFwiZGF0ZVN3aXRjaGVyXCI6IFwiYXBwX2RhdGVTd2l0Y2hlcl9fMy1iaXZcIixcblx0XCJkYXRlTW9udGhcIjogXCJhcHBfZGF0ZU1vbnRoX190akYzaFwiLFxuXHRcImRhdGVCdXR0b25zXCI6IFwiYXBwX2RhdGVCdXR0b25zX18xREljMFwiLFxuXHRcImRhdGVTd2l0Y2hcIjogXCJhcHBfZGF0ZVN3aXRjaF9fcUpmMkhcIixcblx0XCJkYXRlTGlzdFwiOiBcImFwcF9kYXRlTGlzdF9fMTdFa3dcIixcblx0XCJkYXRlSGVhZGluZ1wiOiBcImFwcF9kYXRlSGVhZGluZ19fM05qelVcIixcblx0XCJkYXRlQ29udGVudFwiOiBcImFwcF9kYXRlQ29udGVudF9fM3BHX2pcIixcblx0XCJkYXRlRWxlbWVudFwiOiBcImFwcF9kYXRlRWxlbWVudF9fMWpCUkdcIixcblx0XCJkYXRlRWxlbWVudE51bWJlclwiOiBcImFwcF9kYXRlRWxlbWVudE51bWJlcl9fM3hYNEZcIixcblx0XCJkYXRlU2tpcHBlZFwiOiBcImFwcF9kYXRlU2tpcHBlZF9fMWk0dHRcIixcblx0XCJldmVudExpc3RcIjogXCJhcHBfZXZlbnRMaXN0X18zbGFSTVwiLFxuXHRcImV2ZW50TGlzdERhdGVcIjogXCJhcHBfZXZlbnRMaXN0RGF0ZV9fejNpejRcIixcblx0XCJldmVudExpc3RJdGVtc1wiOiBcImFwcF9ldmVudExpc3RJdGVtc19fMm8yeHJcIixcblx0XCJldmVudEVsZW1lbnRcIjogXCJhcHBfZXZlbnRFbGVtZW50X19oREFNWFwiLFxuXHRcImV2ZW50RWxlbWVudFdyYXBwZXJcIjogXCJhcHBfZXZlbnRFbGVtZW50V3JhcHBlcl9faVdPV3ZcIixcblx0XCJldmVudEVsZW1lbnRUYXJnZXRcIjogXCJhcHBfZXZlbnRFbGVtZW50VGFyZ2V0X18xRHZzaVwiLFxuXHRcImV2ZW50RWxlbWVudERhdGFcIjogXCJhcHBfZXZlbnRFbGVtZW50RGF0YV9fM1hMaUdcIixcblx0XCJldmVudEVsZW1lbnRDYXRlZ29yeVwiOiBcImFwcF9ldmVudEVsZW1lbnRDYXRlZ29yeV9fM0s5ckFcIixcblx0XCJldmVudEVsZW1lbnRUaXRsZVwiOiBcImFwcF9ldmVudEVsZW1lbnRUaXRsZV9fMTl3WEtcIixcblx0XCJldmVudEVsZW1lbnREdXJhdGlvblwiOiBcImFwcF9ldmVudEVsZW1lbnREdXJhdGlvbl9fMmNxLUFcIixcblx0XCJldmVudEVsZW1lbnRBcnJvd1wiOiBcImFwcF9ldmVudEVsZW1lbnRBcnJvd19fQTJkOEhcIixcblx0XCJldmVudExpc3RBZGRcIjogXCJhcHBfZXZlbnRMaXN0QWRkX18yWDAwbFwiLFxuXHRcImV2ZW50TGlzdEFkZFRleHRcIjogXCJhcHBfZXZlbnRMaXN0QWRkVGV4dF9fM1U1ZnpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNoYXJlZE1vZGFsXCI6IFwibW9kYWxzX3NoYXJlZE1vZGFsX19oOC0wZVwiLFxuXHRcInNoYXJlZE1vZGFsRm9ybVwiOiBcIm1vZGFsc19zaGFyZWRNb2RhbEZvcm1fXzJiZWRvXCIsXG5cdFwic2hhcmVkTW9kYWxGb3JtVXNlclwiOiBcIm1vZGFsc19zaGFyZWRNb2RhbEZvcm1Vc2VyX18zNVdVWFwiLFxuXHRcInNoYXJlZE1vZGFsRm9ybUlucHV0XCI6IFwibW9kYWxzX3NoYXJlZE1vZGFsRm9ybUlucHV0X19zMXR3ZVwiLFxuXHRcInNoYXJlZE1vZGFsRm9ybVVzZXJBdmF0YXJcIjogXCJtb2RhbHNfc2hhcmVkTW9kYWxGb3JtVXNlckF2YXRhcl9fM3NfV1pcIixcblx0XCJzaGFyZWRNb2RhbEZvcm1IaW50XCI6IFwibW9kYWxzX3NoYXJlZE1vZGFsRm9ybUhpbnRfXzJSTF9MXCIsXG5cdFwic2hhcmVkTW9kYWxGb3JtQnV0dG9uXCI6IFwibW9kYWxzX3NoYXJlZE1vZGFsRm9ybUJ1dHRvbl9fNWllNTFcIixcblx0XCJjYWxlbmRhck1vZGFsXCI6IFwibW9kYWxzX2NhbGVuZGFyTW9kYWxfXzN5cFVvXCIsXG5cdFwiY2FsZW5kYXJNb2RhbEZvcm1cIjogXCJtb2RhbHNfY2FsZW5kYXJNb2RhbEZvcm1fXzNmcDU1XCIsXG5cdFwiY2FsZW5kYXJNb2RhbExhYmVsXCI6IFwibW9kYWxzX2NhbGVuZGFyTW9kYWxMYWJlbF9fMjYxYVFcIixcblx0XCJjYWxlbmRhck1vZGFsSW5wdXRcIjogXCJtb2RhbHNfY2FsZW5kYXJNb2RhbElucHV0X18zLXN0TlwiLFxuXHRcImNhbGVuZGFyTW9kYWxBcHBseVwiOiBcIm1vZGFsc19jYWxlbmRhck1vZGFsQXBwbHlfX2xVcWRxXCIsXG5cdFwiZXZlbnRNb2RhbFwiOiBcIm1vZGFsc19ldmVudE1vZGFsX18yU3gwUlwiLFxuXHRcImV2ZW50TW9kYWxGb3JtXCI6IFwibW9kYWxzX2V2ZW50TW9kYWxGb3JtX18yLTRuZVwiLFxuXHRcImV2ZW50TW9kYWxJbnB1dFwiOiBcIm1vZGFsc19ldmVudE1vZGFsSW5wdXRfXzJ3aUNNXCIsXG5cdFwiZXZlbnRNb2RhbFRleHRhcmVhXCI6IFwibW9kYWxzX2V2ZW50TW9kYWxUZXh0YXJlYV9fX3RoQXZcIixcblx0XCJldmVudE1vZGFsU2VsZWN0XCI6IFwibW9kYWxzX2V2ZW50TW9kYWxTZWxlY3RfX3NlWWdSXCIsXG5cdFwiZXZlbnRNb2RhbERhdGVUaW1lQm94XCI6IFwibW9kYWxzX2V2ZW50TW9kYWxEYXRlVGltZUJveF9fM3JLYUpcIixcblx0XCJldmVudE1vZGFsRGF0ZVwiOiBcIm1vZGFsc19ldmVudE1vZGFsRGF0ZV9fM245bDNcIixcblx0XCJldmVudE1vZGFsVGltZVwiOiBcIm1vZGFsc19ldmVudE1vZGFsVGltZV9fM0o3VS1cIixcblx0XCJldmVudE1vZGFsQm94XCI6IFwibW9kYWxzX2V2ZW50TW9kYWxCb3hfX3Frcjk4XCIsXG5cdFwiZXZlbnRNb2RhbEFwcGx5XCI6IFwibW9kYWxzX2V2ZW50TW9kYWxBcHBseV9fM09KMk1cIixcblx0XCJldmVudE1vZGFsRGVsZXRlXCI6IFwibW9kYWxzX2V2ZW50TW9kYWxEZWxldGVfXzNQWkVxXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcGx1Z2luLXN1cGVyanNvbi1uZXh0L3Rvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImZvckVhY2giLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJ1cmwiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkxvZ28iLCJDYWxlbmRhciIsIkhpZGRlbiIsIlNoYXJlZCIsIkFjY291bnREcm9wZG93biIsIkJhciIsInVzZXIiLCJiYXIiLCJiYXJPcHRpb25zIiwiYmFyT3B0aW9uc0J1dHRvbiIsImJhck9wdGlvbnNCdXR0b25BY3RpdmUiLCJiYXJBY2NvdW50IiwiZGF5anMiLCJyZWxhdGl2ZVRpbWUiLCJMb2NrIiwiTGlua1NWRyIsIlBhcnR5IiwiVGltZSIsIkNhbGVuZGFyRHJvd2Rvd24iLCJDYWxlbmRhckVsZW1lbnQiLCJjYWxlbmRhciIsInNldENhbGVuZGFycyIsImFjY2Vzc1Rva2VuIiwiZXh0ZW5kIiwidXBjb21pbmciLCJob2xpZGF5Iiwic3lzdGVtIiwiY2FsZW5kYXJFbGVtZW50IiwiY2FsZW5kYXJEYXRhIiwiY2FsZW5kYXJUaXRsZSIsInRpdGxlIiwiY2FsZW5kYXJTcGFuIiwibWFpbiIsInNoYXJlZCIsImNyZWF0ZWRfYXQiLCJmcm9tTm93IiwiY2FsZW5kYXJPcGVuQnV0dG9uIiwiQ2FsZW5kYXJMaXN0IiwiY2FsZW5kYXJzIiwiYXhpb3MiLCJQbHVzIiwiTmV3Q2FsZW5kYXIiLCJhZGRDYWxlbmRhciIsImFwaSIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJBUElfVVJMIiwicG9zdCIsInJlc3BvbnNlIiwicHJldlN0YXRlIiwidXNlcnMiLCJjYWxlbmRhckNyZWF0ZUJsb2NrIiwiZGVzdHJveUNvb2tpZSIsIkltYWdlIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibG9nb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwiYmFyQWNjb3VudEJ1dHRvbiIsImJhckFjY291bnRJbWFnZSIsImltYWdlIiwiZHJvcGRvd25CYXJPcHRpb25zIiwiZHJvcGRvd25CYXJPcHRpb24iLCJDYWxlbmRhck1vZGFsIiwiU2hhcmluZ01vZGFsIiwiRG90cyIsImVkaXRpbmciLCJzZXRFZGl0aW5nIiwic2hhcmluZyIsInNldFNoYXJpbmciLCJkZWxldGVSZWNvcmQiLCJpdGVtIiwiZWRpdFJlY29yZCIsImZpbiIsInNoYXJlZE1lbnUiLCJoaWRlQ2FsZW5kYXIiLCJjYWxlbmRhckJ1dHRvbk1vcmUiLCJkcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbiIsIkhlYWQiLCJzY3NzIiwiQXBwbGljYXRpb24iLCJhcHAiLCJNb2RhbCIsInNldFRpdGxlIiwiYXBwbHlDaGFuZ2VzIiwicGF0Y2giLCJjYWxlbmRhck1vZGFsIiwic3RvcFByb3BhZ2F0aW9uIiwiY2FsZW5kYXJNb2RhbEZvcm0iLCJjYWxlbmRhck1vZGFsTGFiZWwiLCJjYWxlbmRhck1vZGFsSW5wdXQiLCJjYWxlbmRhck1vZGFsQXBwbHkiLCJSZW1vdmUiLCJFdmVudE1vZGFsIiwiY2FsZW5kYXJfaWQiLCJuYW1lcyIsInNldE5hbWVzIiwibmFtZXNBcnIiLCJuZXdOYW1lIiwic2V0TmV3TmFtZSIsIm9uQWRkIiwib25SZW1vdmUiLCJvblN1Ym1pdCIsInNoYXJlZE1vZGFsIiwic2hhcmVkTW9kYWxGb3JtIiwic2hhcmVkTW9kYWxGb3JtSGludCIsInNoYXJlZE1vZGFsRm9ybVVzZXIiLCJzaGFyZWRNb2RhbEZvcm1JbnB1dCIsInNoYXJlZE1vZGFsRm9ybUJ1dHRvbiIsInNoYXJlZE1vZGFsRm9ybVVzZXJBdmF0YXIiLCJBcnJvdyIsIkNvbm5lY3QiLCJTZXR0aW5ncyIsIkV2ZW50IiwiUGx1c0NpcmNsZSIsImZpbGwiLCJDaXJjbGUiLCJub29raWVzIiwiQ2FsZW5kYXJzIiwicGFnZVRpdGxlIiwiY2FsZW5kYXJzUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvb2tpZSIsInJlZGlyZWN0IiwicGVybWFuZW50Il0sInNvdXJjZVJvb3QiOiIifQ==