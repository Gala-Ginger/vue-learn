var app = new Vue({
  el: "#app",
  data: {
    message: "Привет, Vue!"
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Вы загрузили эту страницу: " + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: false
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Изучить JavaScript" },
      { text: "Изучить Vue" },
      { text: "Создать что-нибудь классное" }
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Привет, Vue.js!!!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Привет!"
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Овощи" },
      { id: 1, text: "Сыр" },
      { id: 2, text: "Мясо" }
    ]
  }
});

var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar"
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
});

var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: "",
    answer: "Пока вы не зададите вопрос я не могу ответить"
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = "Ожидаю, когда вы закончите печатать...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Вопросы обычно заканчиваются вопросительным знаком ;)";
        return;
      }
      this.answer = "Думаю...";
      var vmm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vmm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vmm.answer = "ошибка!" + error;
        });
    }
  }
});

Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">Счетчик кликов - {{ count }}</button>'
});

new Vue({ el: "#components-demo" });

Vue.component("blog-post", {
  props: ["post"],
  template: `
  <div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button v-on:click="$emit('enlarge-text', 0.1)">
  Увеличить шрифт</button>
  <div v-html="post.content">
  </div>
  </div>
  `
});

new Vue({
  el: "#blog-post-demo",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" }
    ]
  }
});

new Vue({
  el: "#blog-post-event-demo",
  data: {
    posts: [],
    postFontSize: 1
  }
});

var example1 = new Vue({
  el: "#example-1",
  data: {
    items: [{ message: "Buuu" }, { message: "Ruu" }, { message: "Ruu" }]
  }
});

var example2 = new Vue({
  el: "#example-2",
  data: {
    parentMessage: "BoorunDuck",
    items: [{ message: "Buuu" }, { message: "Ruu" }, { message: "Ruu" }]
  }
});

var obj = new Vue({
  el: "#v-for-object",
  data: {
    object: {
      firstName: "Иван",
      lastName: "Петров",
      age: 30
    }
  }
});

var nm = new Vue({
  el: "#num",
  data: {
    numbers: [1, 2, 3, 4, 5, 6, 7]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  }
});

// mini TODO!

Vue.component("todo-item", {
  template: `\
  <li>\
  {{ title }}\
  <button v-on:click="$emit(\'remove\')">Удалить</button>
  </li>\
  `,
  props: ["title"]
});

new Vue({
  el: "#todo-list-example",
  data: {
    newTodoText: "",
    todos: [
      {
        id: 1,
        title: "Учить css"
      },
      {
        id: 2,
        title: "Сделать сайт"
      },
      {
        id: 3,
        title: "Сделать квиз"
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    }
  }
});

// ---------------------------------

var example3 = new Vue({
  el: "#example-3",
  data: {
    counter: 0
  }
});

var example4 = new Vue({
  el: "#example-4",
  data: {
    name: "BoorunDuck"
  },
  methods: {
    greet: function(event) {
      alert("Приветствую тебя, о Великий " + this.name + "!");
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});

var example5 = new Vue({
  el: "#example-5",
  data: {
    say: function(message) {
      alert(message);
    }
  }
});

var example6 = new Vue({
  el: "#example-6",
  data: {
    message: ""
  }
});

var example7 = new Vue({
  el: "#example-7",
  data: {
    message: ""
  }
});

var example8 = new Vue({
  el: "#example-8",
  data: {
    checkedNames: []
  }
});

var example9 = new Vue({
  el: "#example-9",
  data: {
    picked: ""
  }
});

var example10 = new Vue({
  el: "#example-10",
  data: {
    selected: ""
  }
});

var example11 = new Vue({
  el: "#example-11",
  data: {
    selected: []
  }
});

var example12 = new Vue({
  el: "#example-12",
  data: {
    selected: "",
    options: [
      { text: "Налево", value: "Коня потеряешь" },
      { text: "Направо", value: "Жизнь потеряешь" },
      { text: "Прямо", value: "Все будет ОК!" }
    ]
  }
});

var demo1 = new Vue({
  el: "#demo-1",
  data: {
    show: true
  }
});

var example13 = new Vue({
  el: "#example-13",
  data: {
    show: true
  }
});

var example14 = new Vue({
  el: "#example-14",
  data: {
    show: true
  }
});

var example15 = new Vue({
  el: "#example-15",
  data: {
    show: true
  }
});

var example16 = new Vue({
  el: "#example-16",
  data: {
    show: false
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      Velocity(el, { fontSize: "1em" }, { complete: done });
    },
    leave: function(el, done) {
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "30px",
          opacity: 0
        },
        { complete: done }
      );
    }
  }
});

var example17 = new Vue({
  el: "#example-17",
  data: {
    view: "v-a"
  },
  components: {
    "v-a": {
      template: "<div>Humster</div>"
    },
    "v-b": {
      template: "<div>BoorunDuck</div>"
    }
  }
});

new Vue({
  el: "#list-demo",
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
});

new Vue({
  el: "#flip-list-demo",
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  methods: {
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  }
});

new Vue({
  el: "#list-complete-demo",
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  }
});

new Vue({
  el: "#staggered-list-demo",
  data: {
    query: "",
    list: [
      { msg: "Капитан Америка" },
      { msg: "Железный человек" },
      { msg: "Халк" },
      { msg: "Человек паук" },
      { msg: "Тор" }
    ]
  },
  computed: {
    computedList: function() {
      var vm = this;
      return this.list.filter(function(item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
});
