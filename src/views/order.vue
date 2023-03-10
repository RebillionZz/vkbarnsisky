<template>
  <div class="container">
    <v-row>
      <v-col cols="12" lg="6">
        <h2>1 / Shopping</h2>
        <p class="fs-4">Contact Info</p>
        <v-row>
          <v-col cols="12">
            <v-text-field label="E-mail" v-model="name" outlined></v-text-field>
          </v-col>
        </v-row>
        <p class="fs-4">Shopping address</p>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="First name"
              v-model="name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Last name"
              v-model="name"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-select
              v-model="selectedItem"
              :items="items"
              label="Country"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Street Address *"
              v-model="name"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Apt/Unit"
              v-model="name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="City *" v-model="name" outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="State/Province"
              v-model="name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Postal Code *"
              v-model="name"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Phone number *"
              v-model="number"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-row>
            <h4>2 / Delivery</h4>
            <p class="fs-4">Shipping method</p>
            <v-radio-group v-model="selectedOption">
              <v-radio
                label="Standart ( 7-14 working days) 15$"
                value="option1"
              ></v-radio>
              <v-radio
                label="Expedited ( 3-5  working days) 25$"
                value="option2"
              ></v-radio>
            </v-radio-group>
          </v-row>
        </div>
        <div>
          <v-row>
            <h4>3 / Payment</h4>
            <p class="fs-4">Choose a Payment Method</p>
            <hr />
            <v-checkbox
              v-model="rememberMe1"
              label="Debit or Credit Card"
            ></v-checkbox>
            <div class="mb-3">
              <label for="email" class="form-label"
                >Debit or Credit Card Number *</label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">CVV</label>
              <input
                type="name"
                class="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <v-checkbox
              v-model="rememberMe2"
              label="Same Shipping Address for Billing Info"
            ></v-checkbox>
          </v-row>
          <div class="d-grid">
            <div>
              <v-btn color="#693919" @click="showDialog2" dark>Complete order</v-btn>
              <v-dialog v-model="dialogVisible2">
                <v-card>
                  <v-card-title>Order status</v-card-title>
                  <v-card-text> success </v-card-text>
                  <v-card-actions>
                    <v-btn color="#693919" @click="dialogVisible2 = false" dark
                      >Close</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-title>Your Order</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-group v-model="selectedBills">
                <v-list-item v-for="(bill, index) in bills" :key="index">
                  <v-list-item-content>
                    <div>{{ bill.name }}</div>
                    <div>Price: {{ bill.price }}</div>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon @click="decrementItem(index)">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <div class="mx-2">{{ bill.amount }}</div>
                    <v-btn icon @click="incrementItem(index)">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <div class="mt-4">Total Price: {{ totalPrice }} $</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FinalnnOrder",

  data() {
    return {
      selectedItem: null,
      items: ["Laos", "Thai", "China"],
      selectedOption: "option1",
      rememberMe1: false,
      rememberMe2: false,
      dialogVisible: false,
      dialogVisible2: false,

      bills: [
        { name: "Ring", price: 19, amount: 0 },
        { name: "Earring", price: 19, amount: 0 },
        { name: "Necklaces", price: 29, amount: 0 },
        { name: "Bracelets", price: 39, amount: 0 },
      ],
    };
  },

  mounted() {},
  computed: {
    selectedBills() {
      return this.bills.filter((bill) => bill.amount > 0);
    },
    totalPrice() {
      return this.selectedBills.reduce(
        (total, bill) => total + bill.price * bill.amount,
        0
      );
    },
  },
  methods: {
     showDialog2() {
      this.dialogVisible2 = true;
    },
    showOrderDialog() {
      this.dialogVisible = true;
    },
    incrementItem(index) {
      this.bills[index].amount++;
    },
    decrementItem(index) {
      if (this.bills[index].amount > 0) {
        this.bills[index].amount--;
      }
    },
    placeOrder() {
      // place order logic
      // close dialog
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.w-text{
  color: white !important;
}
</style>
