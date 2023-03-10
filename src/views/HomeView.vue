<template>
  <div>
    <div class="home1">
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <div class="text-center">
            <h2>Minimal Jewelry Style</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quas
              ullam corporis hic sunt, ad libero placeat.
            </p>
            <a href="/necklaces" class="aa">
              <h3>Shop Now <img src="../assets/Vector (10).png" alt="" /></h3>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="home2">
      <h2 class="hh2">CATEGORIES</h2>
      <v-row>
        <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center p-3">
            <v-img src="../assets/Rectangle 8.png" width="90%"> </v-img>
            <v-btn depressed color="#8e705d" dark outlined> Necklaces </v-btn>
          </div>
        </v-col>
        <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center p-3">
            <v-img src="../assets/Rectangle 8.png" width="90%"> </v-img>
            <v-btn depressed color="#8e705d" dark outlined> Necklaces </v-btn>
          </div>
        </v-col>
        <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center p-3">
            <v-img src="../assets/Rectangle 8.png" width="90%"> </v-img>
            <v-btn depressed color="#8e705d" dark outlined> Necklaces </v-btn>
          </div>
        </v-col>
        <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center p-3">
            <v-img src="../assets/Rectangle 8.png" width="90%"> </v-img>
            <v-btn depressed color="#8e705d" dark outlined> Necklaces </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="home3">
      <div>
        <v-row>
          <v-col cols="6" xl="3" lg="3" md="4">
            <h1 class="rl">
              POPULAR  SELL
            </h1>
          </v-col>
        <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center">
            <v-img src="../assets/Rectangle 9.png" width="90%"> </v-img>
            <v-btn depressed color="#fff"> Buy now </v-btn>
          </div>
        </v-col>  
         <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center">
            <v-img src="../assets/Rectangle 9.png" width="90%"> </v-img>
            <v-btn depressed color="#fff"> Buy now </v-btn>
          </div>
        </v-col>
         <v-col cols="6" xl="3" lg="3" md="4">
          <div class="text-center">
            <v-img src="../assets/Rectangle 9.png" width="90%"> </v-img>
            <v-btn depressed color="#fff"> Buy now </v-btn>
          </div>
        </v-col> 
        </v-row>
      </div>
    </div>
    <div class="home4 p-6">
      <h2 class="hh2">NEW IN</h2>
      <v-row>
        <v-col cols="6" md="4" lg="3">
        <v-card min-width="150" max-width="250">
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
        <v-col cols="6" md="4" lg="3">
        <v-card min-width="150" max-width="250">
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
        <v-col cols="6" md="4" lg="3">
        <v-card min-width="150" max-width="250">
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
        <v-col cols="6" md="4" lg="3">
        <v-card min-width="150" max-width="250">
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
<style>
.home1 {
  background-color: #8e705d;
  padding: 5%;
  color: #fff;
}
.home2 {
  background-color: #e9d9c6;
  padding: 5%;
  color: #fff;
}
.home3 {
  background-color: #e9d9c6;
  padding: 2%;
  color: #fff;
}
.home4{
  background-color: #8e705d;
  padding: 5%;
  color: #000;
}
.aa {
  color: #fff !important;
}
.hh2 {
  color: #693919;
}
.rl{
  color: #9B6A4A;
        transform: rotate(-90deg);

}
</style>
