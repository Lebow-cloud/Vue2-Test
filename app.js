var app = new Vue({
  el: "#app",
  data: {
    name: "",
    age: "",
    job: "web-developer",
    website: "http://www.mediktor.com",
    websiteTag: '<a href="http://www.mediktor.com">Mediktor Web </a>',
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    ageCP: 28,
    mode: false,
    modeOn:"Light Mode",
    nearby: false,
    error: false,
    success: false,
  },
  methods: {
    greet: function (el) {
      return "Buenas " + el + " " + this.name;
    },
    addYears: function (inc) {
      this.age += inc;
    },
    substractYears: function (dec) {
      this.age -= dec;
    },
    updateXY: function (e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    click: function () {
      alert("You have clicked");
    },
    logName: function () {
      console.log("You entered your name");
    },
    logAge: function () {
      console.log("You entered your age");
    },
    darkModeToggle: function(){
         this.mode = !this.mode
         if(mode = false) modeOn = "Dark Mode"
         console.log(modeOn);
    }

  },
  computed: {
    addToA: function () {
      console.log("addToA");
      return this.a + this.ageCP;
    },
    addToB: function () {
        console.log("addToB");
      return this.b + this.ageCP;
    },
    compClasses: function (){
        return {
            modeOn: this.modeOn,
            nearby: this.nearby

        }
    }
  },
  
});
