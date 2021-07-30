<template>
  <div class="searchBar">
    \
    <select
      name="stateName"
      id="stateName"
      @click="stateSelected()"
      v-model="stateCode"
      class="select"
    >
      <option value disabled>Choose a state:</option>
      <option v-for="state in states" :value="state.code" :key="state.name">
        {{ state.name }}
      </option>
    </select>
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
      stateCode: "",
    };
  },

  methods: {
    stateSelected() {
      this.$router.push({ path: `/nationalParks/${this.stateCode}` });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --select-border: #777;
  --select-focus: blue;
  --select-arrow: var(--select-border);
}
.select {
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid #777;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
</style>
