import "./style.css";
import { setUpQuestion } from "./question";
const questAndAns = [
  {
    id: 1,
    question: "What is the capital city of Nepal",
    answer:
      "the capital city of nepal is kathmandu. kathmandu is located in bagmati provice. kathmandu is a valley surrounded by mountains.",
  },
  {
    id: 2,
    question: "What is the capital city of India",
    answer:
      "the capital city of india is new delhi.",
  },
];

document.querySelector("#app").innerHTML = `
  <div id="root_container">
    <h1 id="title">General questions</h1>
      <div id="container"></div>
    </div>
    `;

const rootContainer = document.querySelector("#container");
questAndAns.forEach(({ id, question, answer }) => {
  const qnContainer = document.createElement("div");
  qnContainer.id = `qacontainer${id}`;
  qnContainer.className = "item";
  rootContainer.appendChild(qnContainer);
  setUpQuestion(qnContainer, question, answer);
});
