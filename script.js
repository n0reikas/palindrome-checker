document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("text-input");
  const checkButton = document.getElementById("check-btn");
  const result = document.getElementById("result");

  checkButton.addEventListener("click", () => {
    const text = inputField.value.trim();

    if(text === "") {
      alert("Please input a value");
    } else {
      const formattedText = text.toLowerCase().replace(/([^A-Za-z0-9])/g, '');
      console.log(formattedText);
      const isPalindrome = checkPalindrome(formattedText);
      result.innerText = isPalindrome ? `${text} is a palindrome.` : `${text} is not a palindrome.`;
    }
    

    function checkPalindrome(text) {
      for(let i = 0; i < Math.floor(text.length / 2); i++) {
        if (text[i] !== text[text.length - 1 - i]) {
          return false;
        }
      }
      return true;
    };
  });
});
