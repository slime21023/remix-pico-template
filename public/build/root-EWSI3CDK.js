import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-AZJ6AJZB.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VG25B4KW.js";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "saleor-remix",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "container",
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
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
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
                    children: "PicoRemix"
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 52,
                    columnNumber: 28
                  }, this)
                }, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 52,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    to: "/",
                    children: "Layout"
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 56,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    to: "/",
                    children: "Elements"
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 57,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 57,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    to: "/",
                    children: "Components"
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 58,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "container",
        children
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "\xA9 You!"
        }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-EWSI3CDK.js.map
