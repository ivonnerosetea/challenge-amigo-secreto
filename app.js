// Lista para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  amigos.push(nombre); 
  actualizarLista(); 
  input.value = "";
}

// Función para actualizar la lista visual en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = amigo;
    listItem.className = "name-item";
    lista.appendChild(listItem);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Por favor, añade al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: ${amigoSorteado}!</li>`;
}
