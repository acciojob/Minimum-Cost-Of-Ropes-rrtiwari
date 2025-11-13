function calculateMinCost() {
  let n = parseInt(document.getElementById("rope-lengths").value);
  let arr = [];
  while (n > 0) {
    arr.push(parseInt(prompt("Enter the length of the rope")));
    n--;
  }
  let sum = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let a = arr.shift();
    let b = arr.shift();
    let cost = a + b;
    sum += cost;
    arr.push(cost);
  }
  document.getElementById("result").innerText = "Minimum cost to connect ropes: " + sum;
}

