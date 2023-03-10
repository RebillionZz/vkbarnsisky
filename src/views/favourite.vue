<template>
  <div class="container text-center p-4">
    <h2>My Favourite</h2>
    <v-row>
      <v-col cols="6" md="4" lg="3">
        <v-card>
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
        <v-card>
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
        <v-card>
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
        <v-card>
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
        <v-card>
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
        <v-card>
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
        <v-card>
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
</template>

<script>
export default {
  name: "FinalnnFavourite",

  data() {
    return {};
  },

  mounted() {},
  props: {
    isFavorite: Boolean,
  },

  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite");
    },
  },
};
</script>

<style lang="scss" scoped></style>
