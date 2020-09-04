<template>
    <div>
    <div class="main_breadcrumb">
      <div class="container-fluid">
        <div class="row">
          <div class="breadcrumb-content">
            <h2>login</h2>
            <ul>
              <router-link to="/" tag="li">Home</router-link>
              <router-link to="/login" tag="li">Login</router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="content" class="cart_page checkout_page register_page login_page">
      <!-- cart -->
      <div id="register" class="cart_section checkout_section register_section">
        <div class="container-fluid" id="checkout">
          <div class="row billing_and_payment_option">
            <div class="heading_wrapper">
              <h2 class="wow fadeInDown animated">Login your Account</h2>
              <p class="wow fadeInDown animated">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
            <!-- Billing Address -->
            <div class="login_box">
              <h3>Create Your Account</h3>
              <form class="eb-form eb-mailform form-checkout" novalidate>
                <div class="form-wrap">
                  <input
                    class="form-input form-control"
                    id="checkout-email-1"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                    placeholder="E-Mail"
                    v-model="email"
                  />
                </div>
                <div class="form-wrap">
                  <input
                    class="form-input form-control"
                    id="checkout-city-1"
                    type="text"
                    name="password"
                    data-constraints="@Required"
                    placeholder="Password:"
                    v-model="password"
                  />
                </div>

                <div class="error_label">
                  <div>{{ error }}</div>
                </div>

                <div class="success_label">
                  <div>{{ success }}</div>
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked"
                  />
                  <label
                    class="custom-control-label register-remember"
                    for="defaultUnchecked"
                    >Remember me on this device</label
                  >
                </div>
                <button @click.prevent="submitHandler" class="btn ">
                  Register
                </button>

                <p class="signInclass">
                  Dont Have an Account? <router-link to="/register" tag="a">Register</router-link>
                </p>
              </form>
              <div class="clear"></div>
            </div>
            <!-- Delivery Address  -->
          </div>
          <!-- your shopping cart -->
        </div>
      </div>
      <!-- cart end-->
    </div>
  </div>
</template>

<script>

export default {

    data() {
    return {
      email: "",
      password: "",
      error: "",
      success: "",
    };
  },
  methods: {
    validate(email) {
      let valid = [true, ""];

      if( !/\S+@\S+\.\S+/.test( email )){
        valid = [false, "Enter a valid E-mail"];
      }

      if (email === "") {
        valid = [false, "Its empty"];
      }
      return valid;
    },

    submitHandler() {
      let valid = this.validate(this.email);
      if (valid[0]) {
        this.error = "";
        console.log(this.email, this.password);
        //add firebase

      } else {
        this.error = valid[1];
      }
    },
  },
};
</script>
