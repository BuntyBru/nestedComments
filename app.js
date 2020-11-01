class comments {
  constructor(id, name, handle, content, upvotes, downvotes, parentId) {
    this.id = id;
    this.name = name;
    this.handle = handle;
    this.content = content;

    this.childrenIds = [];
    this.parentId = parentId;
  }
}

const addButton = document.getElementById("add-comment");
const parentUl = document.querySelector("#commentsList");
const replyBtns = document.querySelectorAll("#reply");

let rootCommentList = [];

addButton.addEventListener("click", (event) => {
  let name = document.getElementById("name").value;
  let handle = document.getElementById("handle").value;
  let content = document.getElementById("comment").value;

  if (name.trim() !== "" || handle.trim() !== "" || content.trim() !== "") {
    addComment(name, handle, content);
    document.getElementById("name").value = "";
    document.getElementById("handle").value = "";
    document.getElementById("comment").value = "";
  }
});

let addComment = (name, handle, content) => {
  let id = ID();
  let comment = new comments(id, name, handle, content, null);

  let elem = document.createElement("li");
  elem.classList = "elemclass";
  elem.innerHTML = `<p class='commentContent'> ${content} </p>  <p class='commentName'> - ${name}</p>  <button id='reply' class='reply-${id}'>Reply</button> `;

  parentUl.append(elem);
};

parentUl.addEventListener("click", (event) => {
  if (event.target.className.split("-")[0] == "reply") {
    let parentElem = parentUl.querySelector("." + event.target.className)
      .parentElement;
    let elem = document.createElement("ul");
    elem.innerHTML = `<li>Hello</li> <li>Hello</li> <li>Hello</li> `;

    parentElem.append(elem);
  }
});

let ID = function () {
  return "_" + Math.random().toString(36).substr(2, 9);
};
