<template>
  <section>
    <div class="container pt-5">
      <div class="d-flex align-items-center justify-content-between">
        <!-- Page title -->
        <div>
          <h1>Product Add</h1>
        </div>
        <!-- Buttons -->
        <div class="d-flex align-items-center">
          <button @click="SubmitForm" class="btn btn-dark mx-2">Save</button>
          <nuxt-link to="/">
            <button class="btn btn-danger" id="delete-product-btn">
              Cancel
            </button>
          </nuxt-link>
        </div>
      </div>
      <!-- devider -->
      <hr />
    </div>
    <!-- Add Product -->
    <div class="container DefaultHeight pt-5">
      <div class="row gx-4">
        <!-- Product Form -->
        <form id="product_form">
          <!-- Product SKU -->
          <div class="d-flex">
            <div>
              <p class="FormLabel fw-bold">SKU</p>
            </div>
              <input v-model="Sku" @focusout="ValidateSku" type="text" id="sku" class="ms-4 form-control" />
          </div>
          <!-- Sku validate message -->
           <div v-if="!$v.Sku.required && DspSkuValidate" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Sku is required</div>
          </div>
          <!-- Product Name -->
          <div class="d-flex mt-3">
            <p class="FormLabel fw-bold">Name</p>
            <input v-model="ProductName" @focusout="ValidateProductName" type="text" id="name" class="ms-4 form-control" />
          </div>
          <!-- Product Name validate message -->
            <div v-if="!$v.ProductName.required && DspProductNameValidate" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Name is required</div>
          </div>
          <!-- Product Price -->
          <div class="d-flex mt-3">
            <p class="FormLabel fw-bold">Price ($)</p>
            <input v-model="Price" @focusout="ValidatePrice" type="text" id="price" class="ms-4 form-control" />
          </div>
          <!-- Product Price required message -->
          <div v-if="!$v.Price.required && DspPriceValidate" class="d-flex">
              <div>
                 <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Price is required</div>
          </div>
         <!-- Product Price numeric message -->
          <div v-if="!$v.Price.numeric && DspPriceValidate" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Please, provide the data of indicated type (numeric)</div>
          </div>
          <!-- Type Switcher -->
          <div class="d-flex mt-5">
            <div>
              <p class="FormLabel fw-bold">Type Switcher</p>
            </div>
            <div>
              <select @change="TypeSwitcher($event)" id="ProductType" class="ms-3 form-select">
                <option selected>select a product type</option>
                <option value="DVD" id="DVD">DVD</option>
                <option value="Furniture" id="Furniture">Furniture</option>
                <option value="Book" id="Book">Book</option>
              </select>
            </div>
          </div>
             <!-- Type switcher required message -->
            <div v-if="DspTypeSwitcherValidate" class="d-flex">
                <div>
                  <p class="FormLabel"></p>
                </div>
                <div class="text-danger ms-4 mt-1">Product type is required</div>
            </div>
          <!-- Products types fileld -->
          <!-- DVD field -->
          <div v-if="DspDvd">
            <div class="d-flex mt-4">
              <p class="FormLabel fw-bold">Size (MB)</p>
              <input v-model="Size" @focusout="ValidateSize" type="text" id="size" class="ms-4 form-control" />
            </div>
          </div>
          <!-- DVD Size required message -->
          <div v-if="!$v.Size.required && DspSizeValidate && DspDvd" class="d-flex">
              <div>
                 <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Size is required</div>
          </div>
          <!-- DVD Size numeric message -->
          <div v-if="!$v.Size.numeric && DspSizeValidate && DspDvd" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Please, provide the data of indicated type (numeric)</div>
          </div>
          <!-- DVD Size Hint -->
          <div v-if="DspDvd">
            <p class="mt-2">Please provide size in MB</p>
          </div>
          <!-- Furniture Height field -->
          <div v-if="DspFurniture">
            <div class="d-flex mt-4">
              <p class="FormLabel fw-bold">Height (CM)</p>
              <input v-model="Height" @focusout="ValidateHeight" type="text" id="height" class="ms-4 form-control" />
            </div>
          </div>
           <!-- Furniture Height required message -->
          <div v-if="!$v.Height.required && DspHeightValidate && DspFurniture" class="d-flex">
              <div>
                 <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Height is required</div>
          </div>
          <!-- Furniture Height numeric message -->
          <div v-if="!$v.Height.numeric && DspHeightValidate && DspFurniture" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Please, provide the data of indicated type (numeric)</div>
          </div>
           <!-- Furniture Width field -->
          <div v-if="DspFurniture">
              <div class="d-flex mt-4">
                <p class="FormLabel fw-bold">Width (CM)</p>
                <input v-model="Width" @focusout="ValidateWidth" type="text" id="width" class="ms-4 form-control" />
              </div>
           </div>
            <!-- Furniture Height required message -->
          <div v-if="!$v.Width.required && DspWidthValidate && DspFurniture" class="d-flex">
              <div>
                 <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Width is required</div>
          </div>
          <!-- Furniture Height numeric message -->
          <div v-if="!$v.Width.numeric && DspWidthValidate && DspFurniture" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Please, provide the data of indicated type (numeric)</div>
          </div>
          <!-- Furniture Length field -->
           <div v-if="DspFurniture">
              <div class="d-flex mt-4">
                <p class="FormLabel fw-bold">Length (CM)</p>
                <input v-model="Length" @focusout="ValidateLength" type="text" id="length" class="ms-4 form-control" />
              </div>
           </div>
          <!-- Furniture Length required message -->
          <div v-if="!$v.Length.required && DspLengthValidate && DspFurniture" class="d-flex">
              <div>
                 <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Length is required</div>
          </div>
          <!-- Furniture Length numeric message -->
          <div v-if="!$v.Length.numeric && DspLengthValidate && DspFurniture" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Please, provide the data of indicated type (numeric)</div>
          </div>
          <!-- Furniture demensions Hint -->
           <div v-if="DspFurniture">
            <p class="mt-4">Please provide demensions in HxWxL format</p>
           </div>
          <!-- Book field -->
          <div v-if="DspBook">
            <div class="d-flex mt-4">
              <p class="FormLabel fw-bold">Weight (KG)</p>
              <input v-model="Weight" @focusout="ValidateWeight" type="text" id="weight" class="ms-4 form-control" />
            </div>
          </div>
           <!-- Furniture Length required message -->
          <div v-if="!$v.Weight.required && DspWeightValidate && DspBook" class="d-flex">
              <div>
                 <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Weight is required</div>
          </div>
          <!-- Furniture Length numeric message -->
          <div v-if="!$v.Weight.numeric && DspWeightValidate && DspBook" class="d-flex">
              <div>
              <p class="FormLabel"></p>
              </div>
              <div class="text-danger ms-4 mt-1">Please, provide the data of indicated type (numeric)</div>
          </div>
          <!-- Book Weight Hint -->
          <div v-if="DspBook">
            <p class="mt-4">Please provide weight in KG</p>
          </div>
        </form>
      </div>
    </div>

    <!-- Form is Empty Alert -->
    <FormEmptyAlert @close="CloseTheAlert" v-if="IsFormEmpty" />

    <!-- Product Exist Alert -->
    <ProductExistAlert @close="CloseTheAlert" v-if="DspProductExist" />


    <!-- Footer section -->
    <footer class="container mt-5 pt-2">
      <hr />
      <p class="text-center fw-bold py-4">Scandiweb Test Assinment</p>
    </footer>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FormEmptyAlert from "@/components/FormEmptyAlert";
import ProductExistAlert from "@/components/ProductExistAlert";
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  components: {
     FormEmptyAlert,
     ProductExistAlert
   },
  data() {
    return {
      Sku: "",
      DspSkuValidate: false,
      ProductName: "",
      DspProductNameValidate: false,
      Price: "",
      DspPriceValidate: false,
      Size: "",
      DspSizeValidate: false, 
      Height: "",
      DspHeightValidate: false, 
      Width: "",
      DspWidthValidate: false,
      Length: "",
      DspLengthValidate: false,
      Weight: "",
      DspWeightValidate: false,
      IsFormEmpty: false,
      WichFormSelected: "",
      DspTypeSwitcherValidate: false,
      DspDvd: false,
      DspFurniture: false,
      DspBook: false,
    };
  },
  validations: {
    Sku: {
      required
    }, 
    ProductName: {
      required
    }, 
    Price: {
      required, 
      numeric
    }, 
    Size: {
      required, 
      numeric
    }, 
    Height: {
      required, 
      numeric
    }, 
    Width: {
      required, 
      numeric
    },
    Length: {
      required, 
      numeric
    }, 
    Weight: {
      required, 
      numeric
    } 
  }, 
  computed: {
    ...mapGetters(["DspProductExist"]),
  },
  methods: {
    ...mapActions(["PostDVD", "PostFurniture", "PostBook"]),
    ValidateSku(event) {
      this.Sku = event.target.value
      this.DspSkuValidate = true
    },
    ValidateProductName(event) {
      this.ProductName = event.target.value
      this.DspProductNameValidate = true
    },
    ValidatePrice(event) {
      this.Price = event.target.value
      this.DspPriceValidate = true
    },
    ValidateSize(event) {
      this.Size = event.target.value
      this.DspSizeValidate = true
    }, 
    ValidateHeight(event) {
      this.Height = event.target.value
      this.DspHeightValidate = true
    },
    ValidateWidth(event) {
      this.Width = event.target.value
      this.DspWidthValidate = true
    },
    ValidateLength(event) {
      this.Length = event.target.value
      this.DspLengthValidate = true
    },
    ValidateWeight(event) {
      this.Weight = event.target.value
      this.DspWeightValidate = true
    },
    TypeSwitcher(event) {
      /* Check if DVD selected */
      if (event.target.value == "DVD") {
        this.WichFormSelected = "DVD";
        this.DspDvd = true;
        this.DspTypeSwitcherValidate = false
      } else {
        this.DspDvd = false;
      }
      /* Check if Furniture selected */
      if (event.target.value == "Furniture") {
        this.WichFormSelected = "Furniture";
        this.DspFurniture = true;
        this.DspTypeSwitcherValidate = false
      } else {
        this.DspFurniture = false;
      }
      /* Check if Book selected */
      if (event.target.value == "Book") {
        this.WichFormSelected = "Book";
        this.DspBook = true;
        this.DspTypeSwitcherValidate = false
      } else {
        this.DspBook = false;
      }
    },
    SubmitForm() {
      /* reset IsFormEmpty */
      this.IsFormEmpty = false;

      /* check if Sku and Name and Price are not empty */
      if (this.Sku && this.ProductName && this.Price && this.$v.Price.numeric && this.WichFormSelected) {
      } else {
        this.IsFormEmpty = true;
        this.DspSkuValidate = true
        this.DspProductNameValidate = true
        this.DspPriceValidate = true
        this.DspTypeSwitcherValidate = true
      }

      /* check if DVD switcher selected */
      if (this.WichFormSelected == "DVD") {
        if (this.Sku && this.ProductName && this.Price && this.Size && this.$v.Size.numeric) {
            /* post the form */  
            this.PostDVD({
              sku: this.Sku, 
              name: this.ProductName, 
              price: this.Price, 
              size: this.Size
            })
        } else {
          this.IsFormEmpty = true;
          this.DspSizeValidate = true
        }
      }
      /* check if Furniture switcher selected */
      if (this.WichFormSelected == "Furniture") {
        if (
          this.Sku &&
          this.ProductName &&
          this.Price &&
          this.Height &&
          this.Width &&
          this.Length &&
          this.$v.Height.numeric &&
          this.$v.Width.numeric &&
          this.$v.Length.numeric 
        ) {
            /* post the form */  
            this.PostFurniture({
              sku: this.Sku, 
              name: this.ProductName, 
              price: this.Price, 
              width: this.Width, 
              height: this.Height, 
              length: this.Length 
            })
        } else {
          this.IsFormEmpty = true;
          this.DspHeightValidate = true
          this.DspWidthValidate = true
          this.DspLengthValidate = true
        }
      }
      /* check if Furniture switcher selected */
      if (this.WichFormSelected == "Book") {
        if (this.Sku && this.ProductName && this.Price && this.Weight && this.$v.Weight.numeric) {
          /* post the form */
          this.PostBook({
              sku: this.Sku, 
              name: this.ProductName, 
              price: this.Price, 
              weight: this.Weight,  
          })
        } else {
          this.IsFormEmpty = true;
          this.DspWeightValidate = true
        }
      }
    },
    /*Close Alert */
    CloseTheAlert() {
       this.IsFormEmpty = false
       this.$store.state.DspProductExist = false;
    }
  },
  head() {
    return {
      title: "Product Add",
    };
  },
};
</script>

<style scoped>
/* Add Product Form */
.DefaultHeight {
  min-height: 65vh;
}

.form-control {
  width: 30%;
}

@media screen and (max-width: 992px) {
  .form-control {
    width: 65%;
}
}

.FormLabel {
  min-width: 110px;
  font-size: 14pt;
}
</style>
