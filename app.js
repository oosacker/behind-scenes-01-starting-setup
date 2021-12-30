const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.myInput.value
    },
  },
});

app.mount('#app');


// const app2 = Vue.createApp({
//   template: `
//     <p>{{ thing }}</p>
//   `,
//   data() {
//     return {
//       thing: 'thing123'
//     };
//   },
//   methods: {

//   },
// });

// app2.mount('#app2');


// const data = {
//   message: 'abc',
//   longMessage: 'this is my long message'
// }

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       longMessage = target.longMessage + ' '+ value
//       console.log(longMessage)
//     }
//     // console.log(value)
//   }
// }

// const proxy = new Proxy(data, handler)

// proxy.message = '123'