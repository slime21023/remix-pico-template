import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VG25B4KW.js";

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Card({ imageUrl = "", header = "", footer = "" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        children: header
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 4,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imageUrl
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 5,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: footer
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 6,
        columnNumber: 11
      }, this)
    ]
  }, void 0, true, {
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
    }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, index, false, {
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
    }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-XCA3M5HR.js.map
