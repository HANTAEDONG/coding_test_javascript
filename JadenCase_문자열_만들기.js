let S = "3people unFollowed me";

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      isNaN(parseInt(word[0], 10))
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word[0] + word.slice(1).toLowerCase()
    )
    .join(" ");
}

console.log(solution(S));
