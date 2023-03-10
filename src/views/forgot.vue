<template>
  <div class="container my-5 ">
        <div class="row justify-content-center">
          <div class="col-md-6">
           <div class="card p-4">
            <form>
              <p>Request To Reset Your Password</p>
              <hr>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <p>Provide your account email address to receive an email to reset your password.</p>
                <input type="email" class="form-control" id="email" name="email" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-log">Save</button>
              </div>
            </form>
           </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    sendResetLink() {
      // Implement your forgot password logic here
    }
  }
};
</script>

<style>
    .ncolor{
                    background-color: #C9B4A6;
                    height: 85px;
                }
                .img-po{
                  position: relative;
                }
                btn-po{
                  position: absolute;
                }
                .bg-nn{
                  background-color: #7E483A;
                  color: #fff;
                }
                .btn-log{
                    background-color: #7E483A;
                    color: #fff;
                }</style>
