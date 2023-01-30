const div = document.querySelector(".button");
const btn = document.querySelector(".btn");
const select = document.querySelector(".filter");
const ulPriority = document.querySelector(".toDoPriority");
const ul = (document = document.querySelector(".toDo"));
/* -------------------------------------------------------------------------------------------- */
const getToDo = async (n = 0) => {
  const data = await fetch("http://localhost:8088/toDo");
  const toDo = await data.json();
  let list = toDo;
  n == 1
    ? (list = list.filter((todo) => todo.finish == 0))
    : n == 2
    ? (list = list.filter((todo) => todo.finish == 1))
    : (list = list);
  ulPriority.innerHTML='';
  ul.innerHTML='';
  printToDo(list);
};
const printToDo = (list) => {
  const ul = document.querySelector(".toDo");
  const ulPriority = document.querySelector(".toDoPriority");
  for (todo of list) {
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const div = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const h3 = document.createElement("h3");
    const title = document.createTextNode(todo.title);
    const p = document.createElement("p");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    h3.appendChild(title);
    p.innerHTML = todo.content;
    span1.innerHTML = `<label>Priorizar</label>`;
    span2.innerHTML = `<label>Terminado</label>`;
    input1.setAttribute("type", "checkbox");
    input2.setAttribute("type", "checkbox");
    btn1.innerHTML = `Modificar`;
    btn2.innerHTML = `Eliminar`;
    figure.appendChild(h3);
    figure.appendChild(p);
    span1.appendChild(input1);
    span2.appendChild(input2);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(btn1);
    div.appendChild(btn2);
    li.appendChild(figure);
    li.appendChild(div);
    const id = todo.id;
    const titles = todo.title;
    const par = todo.content;
    const check = todo.check;
    const finish = todo.finish;
    if (todo.check == 1) {
      input1.setAttribute("checked", true);
      ulPriority.appendChild(li);
    }
    if (todo.finish == 1) {
      input2.setAttribute("checked", true);
      li.setAttribute("class", "finish");
    }
    if (todo.check == 0) {
      input1.removeAttribute("checked");
      ul.appendChild(li);
    }
    if (todo.finish == 0) {
      input2.removeAttribute("checked");
      li.removeAttribute("class");
    }
    btn2.addEventListener("click", () => {
      fetch(`http://localhost:8088/toDo/${id}`, {
        method: "DELETE",
      });
    });
    btn1.addEventListener("click", () => {
      const tInput = document.createElement("input");
      const pInput = document.createElement("textarea");
      pInput.setAttribute("cols", "50");
      pInput.setAttribute("rows", "7");
      tInput.setAttribute("value", titles);
      pInput.value = par;
      h3.innerHTML = "";
      p.innerHTML = "";
      h3.appendChild(tInput);
      p.appendChild(pInput);
      btn1.innerHTML = "Hecho";
      btn1.addEventListener("click", () => {
        const title = tInput.value;
        const content = pInput.value;
        editProduct(id, title, content, check, finish);
      });
    });
    input1.addEventListener("change", () => {
      input1.checked
        ? editProduct(id, titles, par, 1, finish)
        : editProduct(id, titles, par, 0, finish);
    });
    input2.addEventListener("change", () => {
      input2.checked
        ? editProduct(id, titles, par, check, 1)
        : editProduct(id, titles, par, check, 0);
    });
  }
};
const createNew = () => {
  div.innerHTML = `<div class="inputs">
    <input type="text" size="50" placeholder="nombre de la tarea">
    <textarea name="tarea" cols="50" rows="10"></textarea>
    </div>
    <div>
    <button id="crear">Crear</button>
    <button id="cancelar">Cancelar</button>
    </div>`;

  cancelar.addEventListener("click", () => {
    cancel();
  });
  crear.addEventListener("click", () => {
    createTodo();
  });
};
const createTodo = () => {
  const crear = document.querySelector("#crear");
  const title = document.querySelector("input");
  const content = document.querySelector("textarea");
  saveToDo(title, content);
  div.innerHTML = `<button class="btn">Crear nueva tarea</button>`;
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    createNew();
  });
};
const cancel = () => {
  const cancelar = document.querySelector("#cancelar");
  div.innerHTML = `<button class="btn">Crear nueva tarea</button>`;
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    createNew();
  });
};
const saveToDo = (title, content) => {
  const todo = {
    title: title.value,
    content: content.value,
    check: 0,
    finish: 0,
  };
  fetch("http://localhost:8088/toDo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};
const editProduct = (id, title, content, check, finish) => {
  const editedToDo = {
    title: title,
    content: content,
    check: check,
    finish: finish,
  };
  fetch(`http://localhost:8088/toDo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedToDo),
  });
};
/* ------------------------------------------------------------------------------------------------- */
btn.addEventListener("click", () => {
  createNew();
});

if (select.value == undefined) {
  getToDo();
}
select.addEventListener("change", (ev) => {
  ev.target.value === "Finalizadas"
    ? getToDo(2)
    : ev.target.value === "Por finalizar"
    ? getToDo(1)
    : getToDo();
});
