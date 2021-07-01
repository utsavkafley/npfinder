<template>
  <div class="searchBar">
    <select name="stateName" id="stateName" @change="stateSelected(stateCode)" v-model="stateCode">
      <option selected disabled>Choose a state</option>
      <option
        v-for="state in states"
        :value="state.code"
        :key="state.name"

      >{{state.name}}</option>
    </select>

    <!-- THIS IS JUST POSSIBLE ROUTES I CAN TAKE -->
<!-- 
    <div class="recentlyViewed">
      <h3>Recently Viewed Parks</h3>
        <h2>possible ideas:</h2>
        <ul>
          <li>track recently viewed parks</li>
          <li>or, alternatively let user check off a park if visited, we can either store it in state for session</li>
          <li>OR, allow user to "log in" and save their parks visited (MAYBE: this can allow incorporate backend)</li>
          <li>that can allow more room to add features which will allow me to use more technologies in the same project</li>
          <li>ANOTHER, thing I can add is reviews and stars next to the park maybe</li>
          <li>Question for stas: Does adding "showing data on hover" feature (to also incorporate some CSS and animations) a good use of time or not worry about CSS??</li>
          <li>Could also make a "fake reserve a campsite" feature that can allow adding to cart and checkout, for all the form and input validation stuff</li>
        </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ParkSelection",

  data() {
    return {
      states: [
        {
          name: "Alabama",
          code: "AL",
        },
        {
          name: "Alaska",
          code: "AK",
        },
        {
          name: "Arizona",
          code: "AZ",
        },
        {
          name: "Arkansas",
          code: "AR",
        },
        {
          name: "California",
          code: "CA",
        },
        {
          name: "Colorado",
          code: "CO",
        },
        {
          name: "Connecticut",
          code: "CT",
        },
        {
          name: "Delaware",
          code: "DE",
        },
        {
          name: "Florida",
          code: "FL",
        },
        {
          name: "Georgia",
          code: "GA",
        },
        {
          name: "Hawaii",
          code: "HI",
        },
        {
          name: "Idaho",
          code: "ID",
        },
        {
          name: "Illinois",
          code: "IL",
        },
        {
          name: "Indiana",
          code: "IN",
        },
        {
          name: "Iowa",
          code: "IA",
        },
        {
          name: "Kansas",
          code: "KS",
        },
        {
          name: "Kentucky",
          code: "KY",
        },
        {
          name: "Louisiana",
          code: "LA",
        },
        {
          name: "Maine",
          code: "ME",
        },
        {
          name: "Maryland",
          code: "MD",
        },
        {
          name: "Massachusetts",
          code: "MA",
        },
        {
          name: "Michigan",
          code: "MI",
        },
        {
          name: "Minnesota",
          code: "MN",
        },
        {
          name: "Mississippi",
          code: "MS",
        },
        {
          name: "Missouri",
          code: "MO",
        },
        {
          name: "Montana",
          code: "MT",
        },
        {
          name: "Nebraska",
          code: "NE",
        },
        {
          name: "Nevada",
          code: "NV",
        },
        {
          name: "New Hampshire",
          code: "NH",
        },
        {
          name: "New Jersey",
          code: "NJ",
        },
        {
          name: "New Mexico",
          code: "NM",
        },
        {
          name: "New York",
          code: "NY",
        },
        {
          name: "North Carolina",
          code: "NC",
        },
        {
          name: "North Dakota",
          code: "ND",
        },
        {
          name: "Ohio",
          code: "OH",
        },
        {
          name: "Oklahoma",
          code: "OK",
        },
        {
          name: "Oregon",
          code: "OR",
        },
        {
          name: "Pennsylvania",
          code: "PA",
        },
        {
          name: "Rhode Island",
          code: "RI",
        },
        {
          name: "South Carolina",
          code: "SC",
        },
        {
          name: "South Dakota",
          code: "SD",
        },
        {
          name: "Tennessee",
          code: "TN",
        },
        {
          name: "Texas",
          code: "TX",
        },
        {
          name: "Utah",
          code: "UT",
        },
        {
          name: "Vermont",
          code: "VT",
        },
        {
          name: "Virginia",
          code: "VA",
        },
        {
          name: "Washington",
          code: "WA",
        },
        {
          name: "West Virginia",
          code: "WV",
        },
        {
          name: "Wisconsin",
          code: "WI",
        },
        {
          name: "Wyoming",
          code: "WY",
        },
      ],
    };
  },

  methods: {
    stateSelected(stateCode) {
      this.$emit("stateSelected", stateCode);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: disc;
  padding: 0;
}
li {
  padding-top: 10px;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.parksWrapper {
  display: flex;
  flex-direction: row;
  background: #6dade9;
}

.recentlyViewed {
  max-width: 30%;
}
</style>
