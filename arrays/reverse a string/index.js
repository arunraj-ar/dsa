const reverse = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return str;
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
};

const reverseBuiltIn = (str) => [...str].reverse().join("");

const reverseWords = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return str;
  }
  let resultStr = "";
  let idx = str.length - 1;
  while (idx >= 0) {
    if (str[idx] === " " || idx === 0) {
      for (let i = idx === 0 ? idx : idx + 1; i < str.length; i++) {
        if (str[i] !== " ") {
          resultStr += str[i];
        } else {
          break;
        }
      }
      resultStr += " ";
      idx--;
    } else {
      idx--;
    }
  }
  return resultStr;
};

const findNextSpace = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || !str[i]) {
      console.log("returning : ", i);
      return i;
    }
  }
  return str.length;
};

const input =
  "Proident irure ea cupidatat aute ea aute ea do nisi laborum officia eu non velit. Anim cillum nulla mollit et ad occaecat excepteur laboris mollit esse anim cillum. Cillum excepteur mollit id tempor incididunt adipisicing veniam nostrud consequat est anim in. Do exercitation excepteur qui nostrud irure dolor in proident ullamco. Nisi veniam nisi velit proident enim labore voluptate officia mollit consequat do adipisicing ea fugiat. Et do deserunt proident exercitation ea officia occaecat reprehenderit id sunt deserunt cupidatat.";
const output = reverseWords(input);
document.getElementById("output").innerHTML = `<h2>${output}</h2>`;
console.log(input);
console.log(output);
console.log(reverseBuiltIn(input));
