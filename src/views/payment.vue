<template>
  
    <v-container fluid fill-height >
        <div class="container my-5 ">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h1 class="text-center mb-4"> Payment</h1>
            <form>
                <p>Choose a Payment Method</p>
                <hr>
                <label>
      <input type="radio" value="option1" v-model="selectedOption">
      Debit or Credit Card
    </label>
              <div class="mb-3">
                <label for="email" class="form-label">Debit or Credit Card Number *</label>
                <input type="email" class="form-control" id="email" name="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">CVV</label>
                <input type="password" class="form-control" id="password" name="password" required>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe" name="rememberMe">
                <label class="form-check-label" for="rememberMe">Same Shipping Address for Billing Info</label>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn bg-nn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implement your login logic here
    }
  }
};
</script>

<style>
.nnbg{
    background-color: #E9D9C6;
}
.bg-nn{
                  background-color: #7E483A;
                  color: #fff;
                }
</style>
