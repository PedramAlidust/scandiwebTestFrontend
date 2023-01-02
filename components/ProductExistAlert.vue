<template>
  <section @click="DisableAlert" class="AlertWraper">
    <div class="TheAlert alert alert-danger" role="alert">
        <div class="d-flex align-items-center">
            <img class="CloseBtn" src="~/assets/pictures/CloseAlert.png" alt="CloseBtn">
            <p class="ps-2">Product Already exist</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    methods: {
        DisableAlert() {
            this.$emit('close')
        }
    }
};
</script>


<style scoped>

/* General */

p { 
  margin: 0;
}

/* End General */

.CloseBtn {
  cursor: pointer;
  width: 25px;
}

.AlertWraper {
    position: fixed;
    top:0;
    right:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.TheAlert {
    position: fixed;
    width: 35%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 992px) {
  .TheAlert {
    width: 80%;
}
}
</style>