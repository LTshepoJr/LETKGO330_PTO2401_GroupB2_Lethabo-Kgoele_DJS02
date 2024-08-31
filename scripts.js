const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  try {
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Invalid Input: Non-Numeric Input Detected!");
    }
    const firstInput = parseFloat(dividend); // Makes the number recognized by js
    const secondInput = parseFloat(divider); // Makes the number recognized by js
    if (!dividend || !divider) {
      result.innerText =
        "Division not performed. Both values are required in inputs. Try again";
    } else {
      try {
        if (!secondInput || !firstInput || secondInput === 0) {
          throw new Error("Division by zero or invalid input");
        }
        const answer = firstInput / secondInput;
        result.innerText = Math.floor(answer); // Number rounded down
      } catch (error) {
        console.error(
          "Division not performed. Invalid number provided. Try again",
          error
        );
        result.innerText =
          "Division not performed. Invalid number provided. Try again";
      }
    }
  } catch (error) {
    console.error(
      "Something critical went wrong. Please reload the page",
      error
    );
    result.innerText = "Something critical went wrong. Please reload the page";
  }
});
