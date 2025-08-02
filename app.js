document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const tot = parseInt(document.getElementById("votiTotali").value);
  const lista1 = parseInt(document.getElementById("votiLista1").value);
  const lista2 = parseInt(document.getElementById("votiLista2").value);

  const perc1 = ((lista1 / tot) * 100).toFixed(2);
  const perc2 = ((lista2 / tot) * 100).toFixed(2);

  document.getElementById("risultati").innerHTML = `
    <p>Lista 1: ${perc1}%</p>
    <p>Lista 2: ${perc2}%</p>
  `;
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}