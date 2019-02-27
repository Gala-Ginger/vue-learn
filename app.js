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
