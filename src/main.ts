/**
 * Aplicación de Galería de Razas de Perros
 * Este archivo demuestra el uso de TypeScript con JavaScript asíncrono
 */

// Importamos los estilos
import './style.css';

// ## Tipos e Interfaces TypeScript
// Definimos la estructura de datos que esperamos de la API

/**
 * Respuesta de la API que lista todas las razas
 */
interface BreedsApiResponse {
  message: Record<string, string[]>;
  status: string;
}

/**
 * Respuesta de la API que devuelve una imagen de una raza
 */
interface BreedImageApiResponse {
  message: string; // URL de la imagen
  status: string;
}

// Obtenemos las referencias a nuestros elementos del HTML
const loadButton = document.getElementById('loadButton') as HTMLButtonElement;
const galleryDiv = document.getElementById('gallery') as HTMLDivElement;

// URL de la API de perros
const API_URL = 'https://dog.ceo/api/breeds/list/all';

/**
 * ## Función principal usando Async/Await para obtener y mostrar los perros
 * @returns Promise<void>
 */
const fetchAndDisplayBreeds = async (): Promise<void> => {
  // Mostramos un mensaje de carga
  galleryDiv.innerHTML = '<div class="loader">Cargando perritos... 🐾</div>';

  // ## Bloque try/catch/finally para manejar Promesas
  // Usamos 'try' para el código que podría fallar (ej. la llamada a la red)
  try {
    // ## Promesa y Async/Await
    // 'await' pausa la ejecución hasta que la promesa de fetch() se resuelva
    const response = await fetch(API_URL);

    // ## Condicional
    // Verificamos si la respuesta de la red fue exitosa
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    // TypeScript ahora sabe que data tiene la estructura BreedsApiResponse
    const data: BreedsApiResponse = await response.json();
    const breeds: string[] = Object.keys(data.message); // Obtenemos un array con los nombres de las razas

    // Limpiamos el mensaje de carga
    galleryDiv.innerHTML = '';

    // ## Función y Loop
    // Tomamos una muestra de 12 razas y las procesamos
    await displayBreeds(breeds.slice(0, 12));

  } catch (error) {
    // 'catch' se ejecuta si algo en el bloque 'try' falla
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    galleryDiv.innerHTML = `<div class="error">Lo sentimos, no se pudieron cargar las razas. Error: ${errorMessage}</div>`;
    console.error("Hubo un problema con la operación fetch:", error);
  } finally {
    // 'finally' se ejecuta siempre, haya éxito o error
    console.log("Intento de carga de razas finalizado.");
  }
};

/**
 * ## Función para mostrar las razas en el DOM
 * @param breeds - Array de nombres de razas a mostrar
 * @returns Promise<void>
 */
const displayBreeds = async (breeds: string[]): Promise<void> => {
  log('<strong>Iniciando muestra de razas...</strong>');
  
  // ## Loop para iterar sobre cada raza
  // Usamos for...of para recorrer el array de razas
  for (const breed of breeds) {
    // Por cada raza, obtenemos una imagen aleatoria
    const imageUrl = await getBreedImage(breed);
    
    // Creamos la tarjeta para el perro
    const card = document.createElement('div');
    card.className = 'dog-card';
    card.innerHTML = `
      <img src="${imageUrl}" alt="${breed}">
      <h3>${breed}</h3>
    `;
    galleryDiv.appendChild(card);
  }
};

/**
 * ## Función auxiliar con Callback (implícito en .then)
 * Esta función también es asíncrona y obtiene la imagen de una raza específica
 * @param breed - Nombre de la raza
 * @returns Promise<string> - URL de la imagen
 */
const getBreedImage = async (breed: string): Promise<string> => {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    if (!response.ok) throw new Error('No se pudo cargar la imagen.');
    
    const data: BreedImageApiResponse = await response.json();
    return data.message;
  } catch (error) {
    console.error(`Error obteniendo imagen para ${breed}:`, error);
    return 'https://via.placeholder.com/250'; // Una imagen por defecto si falla
  }
};

/**
 * Función auxiliar para imprimir en la consola
 * @param message - Mensaje a imprimir
 */
const log = (message: string): void => {
  console.log(message);
};

// ## Event Loop
// El 'addEventListener' es un ejemplo perfecto del Event Loop en acción
// El navegador espera a que el usuario haga clic (un evento) sin bloquear nada
// Cuando ocurre el clic, el 'callback' (nuestra función asíncrona) se añade a la cola de tareas y se ejecuta
loadButton.addEventListener('click', fetchAndDisplayBreeds);

// Log inicial para confirmar que el script se cargó correctamente
console.log('🐶 Aplicación de Razas de Perros cargada correctamente!');

