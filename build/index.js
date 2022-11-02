var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "saleor-remix",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.7.1/gridlex.min.css"
  }
];
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "container",
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                    children: "PicoRemix"
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 52,
                    columnNumber: 28
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 52,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                    to: "/",
                    children: "Layout"
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 56,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                    to: "/",
                    children: "Elements"
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 57,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 57,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                    to: "/",
                    children: "Components"
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 58,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/root.jsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "container",
        children
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "\xA9 You!"
        }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Card({ imageUrl = "", header = "", footer = "" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        children: header
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 4,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imageUrl
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 5,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: footer
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 6,
        columnNumber: 11
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}
var images = [
  { imageUrl: "/images/img1.jpeg", header: "image 1", footer: "" },
  { imageUrl: "/images/img2.jpeg", header: "image 2", footer: "" },
  { imageUrl: "/images/img3.jpeg", header: "image 3", footer: "" },
  { imageUrl: "/images/img4.jpeg", header: "image 4", footer: "" },
  { imageUrl: "/images/img5.jpeg", header: "image 5", footer: "" },
  { imageUrl: "/images/img6.jpeg", header: "image 6", footer: "" }
];
function createCard(item, index) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "col",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
      imageUrl: item.imageUrl,
      header: item.header,
      footer: item.footer
    }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, index, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid-3_xs-1",
      children: images.map(createCard)
    }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "38914985", entry: { module: "/build/entry.client-CDVIWO4A.js", imports: ["/build/_shared/chunk-AZJ6AJZB.js", "/build/_shared/chunk-VG25B4KW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EWSI3CDK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-XCA3M5HR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-38914985.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
