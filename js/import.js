fetch("pages/program.html")
  .then(res => res.text())
  .then(data => document.getElementById("program").innerHTML = data);