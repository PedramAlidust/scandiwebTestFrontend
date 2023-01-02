import Vuex from "vuex";
var FormData = require("form-data");

const createStore = () => {
  return new Vuex.Store({
    state: {
      Products: {},
      DspProductExist: false,
      DeleteRes: {},
    },
    mutations: {
      /* Get Products */
      async Products(state) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `/api/`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Products = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* DVD mutation */
      async DVD(state, payload) {
        /* form data */
        var data = new FormData();
        data.append("sku", payload.sku);
        data.append("name", payload.name);
        data.append("price", payload.price);
        data.append("size", payload.size);

        /* request config */
        var ReqConfig = {
          method: "post",
          url: `/api/addproduct`,
          data: data,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            if (response.data.ResultStatus == 200) {
              /* push to products page */
              this.$router.push("/");
            }

            if (response.data.ResultStatus == 500) {
              state.DspProductExist = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* Furniture mutation */
      async Furniture(state, payload) {
        /* form data */
        var data = new FormData();
        data.append("sku", payload.sku);
        data.append("name", payload.name);
        data.append("price", payload.price);
        data.append("height", payload.height);
        data.append("width", payload.width);
        data.append("length", payload.length);

        /* request config */
        var ReqConfig = {
          method: "post",
          url: `/api/addproduct`,
          data: data,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            if (response.data.ResultStatus == 200) {
              /* push to products page */
              this.$router.push("/");
            }

            if (response.data.ResultStatus == 500) {
              state.DspProductExist = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* Book mutation */
      async Book(state, payload) {
        /* form data */
        var data = new FormData();
        data.append("sku", payload.sku);
        data.append("name", payload.name);
        data.append("price", payload.price);
        data.append("weight", payload.weight);

        /* request config */
        var ReqConfig = {
          method: "post",
          url: `/api/addproduct`,
          data: data,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            if (response.data.ResultStatus == 200) {
              /* push to products page */
              this.$router.push("/");
            }

            if (response.data.ResultStatus == 500) {
              state.DspProductExist = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* Delete */
      async Delete(state, payload) {
        /* form data */
        var data = new FormData();
        payload.DeleteIds.forEach((item) => {
          data.append("id[]", item);
        });

        /* request config */
        var ReqConfig = {
          method: "post",
          url: `/api/products/massdelete`,
          data: data,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.DeleteRes = response.data;
            /*load products */
            this.dispatch("GetProducts");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    actions: {
      /* Get Products action*/
      GetProducts({ commit }, payload) {
        commit("Products", payload);
      },
      /* Post DVD */
      PostDVD({ commit }, payload) {
        commit("DVD", payload);
      },
      /* Post Furniture */
      PostFurniture({ commit }, payload) {
        commit("Furniture", payload);
      },
      /* Post Book */
      PostBook({ commit }, payload) {
        commit("Book", payload);
      },
      /* Delete Items */
      DeleteItems({ commit }, payload) {
        commit("Delete", payload);
      },
    },
    getters: {
      /* Dsp Products */
      DspProducts(state) {
        return state.Products;
      },
      /* Dsp Product exist */
      DspProductExist(state) {
        return state.DspProductExist;
      },
    },
  });
};

export default createStore;
