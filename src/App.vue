<template>
  <v-app>
    <nav class="navbar navbar-expand-lg navbar-dark ncolor">
      <div class="container-fluid">

        <a class="navbar-brand" href="/">
          <img src="./assets/NJew.png" alt="" width="80" height="40 ">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/ring">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/favourite">Favourite</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/login">Login</a>
            </li><li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/order">Shoping Bag</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <v-main>
      <router-view/>
    </v-main>
    <footer style="background-color: #7E483A;" class="ft">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-3">
            <img src="./assets/NJew.png" alt="Website Logo">
          </div>
          <div class="col-md-3">
            <h5>Get in Touch</h5>
            <ul class="list-unstyled">
              <div>
                <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-2"
            icon
            color="#fff"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
              </div>
        <div>
      <p>N jewery@email.com</p>
    </div>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Address</h5>
            <p>Thongkang Village , Sisattanark District , Vientiane Capital<br>Business Hours</p>
            <p>Every Day   08:00-20:00</p>
          </div>
          <div class="col-md-3">
            <ul class="list-unstyled">
              <li><a href="/payment">Payments</a></li>
              <li><a href="/necklaces">Catelog</a></li>
              <li><a href="/about">About us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
     icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    //
  }),
};
</script>
<style>
*{
  text-decoration: none !important;
}
a{
  color: #000 !important;
  text-decoration: none;
}
  .ncolor{
                    background-color: #C9B4A6;
                    height: 85px;
                }
                .ft{
                  color: white;
                }
</style>