<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>{{park.fullName}}</h3>
            <button @click="$emit('close')">Close</button>
          </div>

          <div class="modal-body">
            <p>{{park.description}}</p>

            <h3>Things to do</h3>
            <ul>
              <li class="activityList" v-for="thing in thingsToDo" v-bind:key="thing.id">
                <img :src="thing.images[0].url" alt />
                <div class="description">
                  <h4>{{thing.title}}</h4>
                  <p>{{thing.shortDescription}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>;
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;
  height: 80vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  overflow-y: initial !important;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  height: 80vh;
  /* overflow-y:auto; */
}

.modal-body ul {
  height: 50vh;
  overflow-y: auto;
  background-color:rgba(225, 250, 216, 0.849);
  padding:10px 20px;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}


.activityList{
  display: flex;
  padding:10px 0px;
  align-items: center;
  border-bottom:2px solid rgb(0, 113, 128);
  justify-content: space-between;
}

.activityList .description{
  text-align: left;
  width:80%;
}

.activityList:last-child{
  border:0;
}

.activityList img{
  width: 150px;
  height: 150px !important;
  margin-bottom:2px;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>

<script>
export default {
  name: "ParkModal",

  props: {
    thingsToDo: null,
    park: null,
  },
};
</script>