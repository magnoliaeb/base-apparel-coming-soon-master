<template>
  <div class="font-body h-full">
    <nav class=" py-6 z-30 px-10 md:hidden">
      <a href="#">
        <img class="h-6" src="../assets/images/logo.svg" alt="" />
      </a>
    </nav>
    <!-- grid -->
    <div class="flex md:h-full flex-wrap">
      <!-- col  -->
      <div class="md:w-3/5 h-full md:relative w-full">
        <div
          class="hidden md:block z-0 bg-pattern-top w-full absolute h-full bg-center bg-cover"
        ></div>

        <div class="md:container md:h-full z-30 mx-auto px-10 md:px-0">
          <div class="max-w-md z-30 mx-auto md:h-full flex flex-col">
            <nav class=" py-10 z-30 hidden md:block md:mb-10">
              <a href="#">
                <img src="../assets/images/logo.svg" alt="" />
              </a>
            </nav>
            <div class=" flex-1 flex items-center z-30 my-12 md:my-0 md:block">
              <div class="">
                <div class="text-center md:text-left">
                  <h1 class="text-5xl md:text-7xl uppercase ">
                    <span class="block tracking-widest font-light text-red-soft"
                      >We're
                    </span>
                    <span class="block tracking-widest font-bold"
                      >coming soon</span
                    >
                  </h1>
                  <p
                    class="my-6 leading-loose text-red-desaturated text-sm md:text-base"
                  >
                    Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with
                    announcements and our launch deals.
                  </p>
                </div>
                <div>
                  <div class="relative flex items-center">
                    <input
                      type="email"
                      name="email"
                      v-model="email"
                      class="w-full rounded-full px-6 py-3 border border-gray-300 focus:outline-none placeholder-red-desaturated"
                      placeholder="Email Address"
                    />
                    <div class="md:-ml-36 -ml-24" v-show="error">
                      <img src="../assets/images/icon-error.svg" alt="" />
                    </div>
                    <button 
                      class="bg-red-desaturated absolute px-6 md:px-10 py-3 h-full rounded-full right-0 shadow-md focus:outline-none"
                    >
                      <div class="">
                        <img
                          class="w-4 h-4 object-contain"
                          src="../assets/images/icon-arrow.svg"
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                  <span v-show="error"
                    class="text-sm text-red-soft inline-block px-6 mt-1 text-left"
                    >Plese provide a valid email</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- col  -->
      <div
        class="w-full md:w-2/5 h-full border-gray-400 order-first md:order-last"
      >
        <img
          class="w-full md:hidden h-60 object-cover"
          src="../assets/images/hero-mobile.jpg"
          alt=""
        />
        <img
          class="w-full h-full hidden md:block object-cover"
          src="../assets/images/hero-desktop.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      email: ''
    }
  },
  watch: {
    email(value) {
      
     
     if (this.validateEmail(value)) {
       console.log('¿validate')
       this.error = false
     } else {
       console.log('no ¿validate')
       this.error = true

     }

    }
  },


  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
    }
  },
  
};
</script>

<style>
* {
  border: 1px solid red;
}

.bg-pattern-top {
  background-image: url("../assets/images/bg-pattern-desktop.svg");
  background-repeat: no-repeat;
  /* border: 1px solid red; */
}
</style>
