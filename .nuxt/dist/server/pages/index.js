exports.ids = [2];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("7d5ec768", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4f177a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4f177a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4f177a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4f177a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a4f177a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ProductTitle[data-v-a4f177a8]{font-weight:700}.DefaultHeight[data-v-a4f177a8]{min-height:65vh}.card-body p[data-v-a4f177a8]{color:#000;font-size:12pt;margin:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a4f177a8&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container pt-5\" data-v-a4f177a8>", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-between\" data-v-a4f177a8>", "</div>", [_vm._ssrNode("<div data-v-a4f177a8><h1 data-v-a4f177a8>Product List</h1></div> "), _vm._ssrNode("<div class=\"d-flex align-items-center\" data-v-a4f177a8>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/addproduct"
    }
  }, [_c('button', {
    staticClass: "btn btn-dark mx-4"
  }, [_vm._v("ADD")])]), _vm._ssrNode(" <button id=\"delete-product-btn\" class=\"btn btn-danger\" data-v-a4f177a8>MASS DELETE</button>")], 2)], 2), _vm._ssrNode(" <hr data-v-a4f177a8>")], 2), _vm._ssrNode(" <div class=\"container DefaultHeight\" data-v-a4f177a8><div class=\"row gx-4\" data-v-a4f177a8>" + _vm._ssrList(_vm.DspProducts, function (Product) {
    return "<div class=\"col-lg-3\" data-v-a4f177a8><div class=\"card shadow-lg mt-5 mt-lg-5 py-3\" data-v-a4f177a8><div class=\"card-body\" data-v-a4f177a8><input type=\"checkbox\"" + _vm._ssrAttr("value", Product.id) + _vm._ssrAttr("checked", Array.isArray(_vm.DeleteItemIds) ? _vm._i(_vm.DeleteItemIds, Product.id) > -1 : _vm.DeleteItemIds) + " class=\"form-check-input delete-checkbox\" data-v-a4f177a8> <p class=\"fw-bold text-center\" data-v-a4f177a8>" + _vm._ssrEscape(_vm._s(Product.sku)) + "</p> <p class=\"text-muted mt-1 text-center\" data-v-a4f177a8>" + _vm._ssrEscape(_vm._s(Product.name)) + "</p> <p class=\"LastItem fw-bold mt-1 text-center\" data-v-a4f177a8>" + _vm._ssrEscape(_vm._s(Product.price) + ".00 $") + "</p> " + (Product.size ? "<p class=\"text-muted text-center\" data-v-a4f177a8>" + _vm._ssrEscape("Size: " + _vm._s(Product.size) + " MB") + "</p>" : "<!---->") + " " + (Product.weight ? "<p class=\"text-muted text-center\" data-v-a4f177a8>" + _vm._ssrEscape("Weight: " + _vm._s(Product.weight) + " KG") + "</p>" : "<!---->") + " " + (Product.width && Product.height && Product.length ? "<p class=\"text-muted text-center\" data-v-a4f177a8>" + _vm._ssrEscape("Dimension: " + _vm._s(Product.width) + " x " + _vm._s(Product.height) + " x " + _vm._s(Product.length)) + "</p>" : "<!---->") + "</div></div></div>";
  }) + "</div></div> <footer class=\"container mt-5 pt-2\" data-v-a4f177a8><hr data-v-a4f177a8> <p class=\"text-center fw-bold py-4\" data-v-a4f177a8>Scandiweb Test Assinment</p></footer>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a4f177a8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      DeleteItemIds: []
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(["DspProducts"])
  },
  methods: { ...Object(external_vuex_["mapActions"])(["GetProducts", "DeleteItems"]),

    MassDelete() {
      this.DeleteItems({
        DeleteIds: this.DeleteItemIds
      });
    }

  },

  mounted() {
    //Load Products
    this.GetProducts();
  },

  head() {
    return {
      title: "Product List"
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a4f177a8",
  "0b2bbc04"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map