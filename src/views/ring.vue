<template>
    <div class="container p-4 text-center">
        <div id="menu-h">
            <h2>ring</h2>
        </div>
        <v-row class="mt-6">
            <v-col cols="6" md="4" lg="3">
                <h2>CAGETORY</h2>
                 <v-list>
    <v-list-item>
      <v-list-item-content>
        <router-link to="/necklaces">
            <v-list-item-title>Necklaces</v-list-item-title>
        </router-link>
        <router-link to="/earring">
            <v-list-item-title>Earring</v-list-item-title>
        </router-link>
        <router-link to="/ring">
            <v-list-item-title>Ring</v-list-item-title>
        </router-link>
        <router-link to="/bracelets">
            <v-list-item-title>Bracelets</v-list-item-title>
        </router-link>
      </v-list-item-content>
    </v-list-item>
  </v-list>
            </v-col>
            <v-col cols="6" md="4" lg="3">
        <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
                <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="4" lg="3">
                <div>
                    <div>
                        <h2>Ring size</h2>
                    </div>
    <label>
      <input type="radio" value="4" v-model="selectedOption">
      4
    </label>
    <label>
      <input type="radio" value="5" v-model="selectedOption">
      5
    </label>
    <label>
      <input type="radio" value="6" v-model="selectedOption">
      6
    </label> <br/>
    <label>
      <input type="radio" value="7" v-model="selectedOption">
      7
    </label>
    <label>
      <input type="radio" value="8" v-model="selectedOption">
      8
    </label>
    <label>
      <input type="radio" value="9" v-model="selectedOption">
      9 
    </label> <br/>
    <label>
      <input type="radio" value="10" v-model="selectedOption">
      10
    </label>
    <label>
      <input type="radio" value="11" v-model="selectedOption">
      11
    </label>
    <label>
      <input type="radio" value="12" v-model="selectedOption">
      12
    </label>
    <p>Ring size: {{ selectedOption }}</p>
  </div>
            </v-col>
                <v-col cols="6" md="4" lg="3">
                <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
                <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
                <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
                <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
        </v-row>
        <v-row>
            <div class="text-start p-2">
                <v-row>
                    <h2>You might be interested</h2>
                    <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
                <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
      <v-col cols="6" md="4" lg="3">
               <a href="/order">
        <v-card>
          <v-img src="../assets/Rectangle 5 (1).png"></v-img>
          <v-card-title>$25</v-card-title>
          <v-card-actions>
            <v-btn icon @click="toggleFavorite">
              <v-icon :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </a>
      </v-col>
                </v-row>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'FinalnnRing',

    data() {
        return {            selectedOption: 'option1'
  };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
#menu-h{
    background-color: bisque;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>