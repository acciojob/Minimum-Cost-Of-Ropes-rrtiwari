function calculateMinCost() {
  const input = document.getElementById("rope-lengths").value.trim();
  if (!input) return;
  let arr = input.split(",").map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  let totalCost = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let first = arr.shift();
    let second = arr.shift();
    let cost = first + second;
    totalCost += cost;
    arr.push(cost);
  }
  document.getElementById("result").innerText = totalCost;
}


