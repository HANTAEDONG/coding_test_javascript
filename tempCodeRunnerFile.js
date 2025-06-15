if (shiftedObject === "c") {
      answer.push(0);
    } else if (
      answer[answer.length - 1] === -1 ||
      answer[answer.length - 1] === undefined
    ) {
      answer.push(-1);
    } else {
      answer.push(answer[answer.length - 1] + 1);
    }