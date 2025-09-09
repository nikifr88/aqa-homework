class GetTodos {
  static async getTodosAsync() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      return data;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      throw "Ответ не пришел";
    }
  }
}

class GetUser {
  static async getUserAsync() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return data;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      throw "Ответ не пришел";
    }
  }
}

let resultAll = [];
let resultRace;

Promise.all([GetTodos.getTodosAsync(), GetUser.getUserAsync()])
  .then((arr) => {
    resultAll.push([...arr]);
    console.log("ResultAll: ", resultAll);
  })
  .catch(() => {
    resultAll.push("Ни один из запросов не выполнился");
    console.log("ResultAll: ", resultAll);
  });

Promise.race([GetTodos.getTodosAsync(), GetUser.getUserAsync()])
  .then((data) => {
    resultRace = data;
    console.log("ResultRace: ", resultRace);
  })
  .catch(() => {
    resultRace = "Ни один из запросов не выполнился";
    console.log("ResultRace: ", resultRace);
  });