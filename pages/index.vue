<template>
  <section> 
    <div class="container pt-5">
      <div class="d-flex align-items-center justify-content-between">
      <!-- Page title -->
        <div>
          <h1>Product List</h1>
        </div>
      <!-- Buttons -->  
        <div class="d-flex align-items-center">
          <nuxt-link to="/addproduct">
          <button class="btn btn-dark mx-4">ADD</button>
          </nuxt-link>
          <button @click="MassDelete" class="btn btn-danger" id="delete-product-btn">MASS DELETE</button>
        </div>
      </div>
      <!-- devider -->
      <hr>
    </div>    
    <!-- products list -->
    <div class="container DefaultHeight">
      <div class="row gx-4">
        <div v-for="Product in DspProducts" :key="Product.id" class="col-lg-3">
            <!-- product item -->
            <div class="card shadow-lg mt-5 mt-lg-5 py-3">
                <div class="card-body">
                  <input v-model="DeleteItemIds" :value="Product.id" class="form-check-input delete-checkbox" type="checkbox">
                  <p class="fw-bold text-center">{{Product.sku}}</p>
                  <p class="text-muted mt-1 text-center">{{Product.name}}</p>
                  <p class="LastItem fw-bold mt-1 text-center">{{Product.price}}.00 $</p>
                  <p v-if="Product.size" class="text-muted text-center">Size: {{Product.size}} MB</p>
                  <p v-if="Product.weight" class="text-muted text-center">Weight: {{Product.weight}} KG</p>
                  <p v-if="Product.width && Product.height && Product.length" class="text-muted text-center">Dimension: {{Product.width}} x {{Product.height}} x {{Product.length}}</p>
                </div>
            </div>       
        </div>
      </div>  <!-- End Products Row -->
    </div>
    <!-- Footer section -->
    <footer class="container mt-5 pt-2">
      <hr>
      <p class="text-center fw-bold py-4">Scandiweb Test Assinment</p>
    </footer>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      DeleteItemIds: []
    }
  }, 
  computed: {
    ...mapGetters(["DspProducts"]),
  },
  methods: {
    ...mapActions(["GetProducts", "DeleteItems"]),
    MassDelete() {
        this.DeleteItems({
        DeleteIds: this.DeleteItemIds
      })
    }
  }, 
  mounted() {
    //Load Products
    /*
    this.GetProducts()
    */
  }, 
    head() {
    return {
      title: "Product List",
    };
  },
};
</script>

<style scoped>

/* products list */
.ProductTitle {
  font-weight: bold;
}

.DefaultHeight {
  min-height: 65vh;
}


.card-body p {
  color: black;
  font-size: 12pt;
  margin: 0;
}
</style>