import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VG25B4KW.js";

// app/components/nav.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Nav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
            children: "Brand"
          }, void 0, false, {
            fileName: "app/components/nav.jsx",
            lineNumber: 5,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/components/nav.jsx",
          lineNumber: 5,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/components/nav.jsx",
        lineNumber: 4,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "#",
              children: "Link"
            }, void 0, false, {
              fileName: "app/components/nav.jsx",
              lineNumber: 8,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/components/nav.jsx",
            lineNumber: 8,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "#",
              children: "Link"
            }, void 0, false, {
              fileName: "app/components/nav.jsx",
              lineNumber: 9,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/components/nav.jsx",
            lineNumber: 9,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "#",
              role: "button",
              children: "Button"
            }, void 0, false, {
              fileName: "app/components/nav.jsx",
              lineNumber: 10,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/components/nav.jsx",
            lineNumber: 10,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/nav.jsx",
        lineNumber: 7,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/nav.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/card.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Card({ imageUrl = "", header = "", footer = "" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        children: header
      }, void 0, false, {
        fileName: "app/components/card.jsx",
        lineNumber: 5,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imageUrl
      }, void 0, false, {
        fileName: "app/components/card.jsx",
        lineNumber: 6,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: footer
      }, void 0, false, {
        fileName: "app/components/card.jsx",
        lineNumber: 7,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/card.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var images = [
  { imageUrl: "", header: "", footer: "" },
  { imageUrl: "", header: "", footer: "" },
  { imageUrl: "", header: "", footer: "" },
  { imageUrl: "", header: "", footer: "" },
  { imageUrl: "", header: "", footer: "" },
  { imageUrl: "", header: "", footer: "" }
];
function createCard(item) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "col",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
      imageUrl: item.imageUrl,
      header: item.header,
      footer: item.footer
    }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid-3_xs-1",
        children: images.map(createCard)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-MMNPW2IX.js.map
