export const setUpQuestion = (parent, question, answer) => {
  let showAnswer = false;
  parent.innerHTML = `
    <div id="qn_and_btn">
    <h2>${question}</h2>
    <button id="show_btn">show</button>
    </div>
    <div id="answer"></div>
    </div>
  `;

  function handleShow() {
    showAnswer = !showAnswer;
    parent.querySelector("#answer").innerHTML = showAnswer
      ? `
      <h4>${answer}</h4>
    `
      : ``;
  }

  parent.querySelector("#show_btn").addEventListener("click", handleShow);
};
