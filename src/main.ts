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

/**
 * Tipo de tamaño de perro
 */
type DogSize = 'small' | 'medium' | 'large' | 'all';

/**
 * Información de una raza con su tamaño
 */
interface BreedInfo {
  name: string;
  size: DogSize;
}

// Clasificación de razas por tamaño (basado en estándares comunes)
const breedSizeMap: Record<string, DogSize> = {
  // Pequeño (hasta 10kg)
  'affenpinscher': 'small',
  'chihuahua': 'small',
  'pomeranian': 'small',
  'pug': 'small',
  'shiba': 'small',
  'terrier': 'small',
  'dachshund': 'small',
  'maltese': 'small',
  'papillon': 'small',
  'pekinese': 'small',
  'poodle-toy': 'small',
  'schipperke': 'small',
  
  // Mediano (10-25kg)
  'beagle': 'medium',
  'bulldog': 'medium',
  'corgi': 'medium',
  'basenji': 'medium',
  'cocker': 'medium',
  'spaniel': 'medium',
  'finnish': 'medium',
  'keeshond': 'medium',
  'kelpie': 'medium',
  'pitbull': 'medium',
  'poodle-miniature': 'medium',
  'poodle-medium': 'medium',
  'schnauzer': 'medium',
  'sharpei': 'medium',
  'sheepdog': 'medium',
  'springer': 'medium',
  'whippet': 'medium',
  
  // Grande (más de 25kg)
  'african': 'large',
  'akita': 'large',
  'appenzeller': 'large',
  'australian': 'large',
  'bakharwal': 'large',
  'bernese': 'large',
  'bluetick': 'large',
  'borzoi': 'large',
  'bouvier': 'large',
  'boxer': 'large',
  'brabancon': 'large',
  'briard': 'large',
  'buhund': 'large',
  'bullmastiff': 'large',
  'cattledog': 'large',
  'clumber': 'large',
  'collie': 'large',
  'coonhound': 'large',
  'deerhound': 'large',
  'dhole': 'large',
  'dingo': 'large',
  'doberman': 'large',
  'elkhound': 'large',
  'entlebucher': 'large',
  'eskimo': 'large',
  'germanshepherd': 'large',
  'groenendael': 'large',
  'hound': 'large',
  'husky': 'large',
  'retriever': 'large',
  'leonberg': 'large',
  'malamute': 'large',
  'malinois': 'large',
  'mastiff': 'large',
  'mountain': 'large',
  'newfoundland': 'large',
  'otterhound': 'large',
  'ovcharka': 'large',
  'pointer': 'large',
  'poodle-standard': 'large',
  'pyrenees': 'large',
  'redbone': 'large',
  'ridgeback': 'large',
  'rottweiler': 'large',
  'saluki': 'large',
  'samoyed': 'large',
  'setter': 'large',
  'shepherd': 'large',
  'stbernard': 'large',
  'vizsla': 'large',
  'waterdog': 'large',
  'weimaraner': 'large',
  'wolfhound': 'large',
};

/**
 * Determina el tamaño de una raza
 */
const getBreedSize = (breedName: string): DogSize => {
  // Buscar coincidencia exacta
  if (breedSizeMap[breedName]) {
    return breedSizeMap[breedName];
  }
  
  // Buscar coincidencia parcial
  for (const [key, size] of Object.entries(breedSizeMap)) {
    if (breedName.includes(key) || key.includes(breedName)) {
      return size;
    }
  }
  
  // Por defecto, asignar mediano
  return 'medium';
};

/**
 * Obtiene el emoji y texto del tamaño
 */
const getSizeLabel = (size: DogSize): string => {
  const labels: Record<DogSize, string> = {
    'small': '🐩 Pequeño',
    'medium': '🦮 Mediano',
    'large': '🐕‍🦺 Grande',
    'all': '🐕 Todas'
  };
  return labels[size];
};

// Obtenemos las referencias a nuestros elementos del HTML
const galleryDiv = document.getElementById('gallery') as HTMLDivElement;
const filterButtons = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLButtonElement>;

// URL de la API de perros
const API_URL = 'https://dog.ceo/api/breeds/list/all';

// Estado de la aplicación
let allBreeds: BreedInfo[] = [];

/**
 * ## Función principal usando Async/Await para obtener y mostrar los perros
 * @returns Promise<void>
 */
const fetchAndDisplayBreeds = async (): Promise<void> => {
  // Mostramos un mensaje de carga
  galleryDiv.innerHTML = '<div class="loader">Cargando perritos... 🐾</div>';

  // ## Bloque try/catch/finally para manejar Promesas
  try {
    // ## Promesa y Async/Await
    const response = await fetch(API_URL);

    // ## Condicional
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    // TypeScript ahora sabe que data tiene la estructura BreedsApiResponse
    const data: BreedsApiResponse = await response.json();
    const breedNames: string[] = Object.keys(data.message);

    // Crear array de BreedInfo con tamaños
    allBreeds = breedNames.map(name => ({
      name,
      size: getBreedSize(name)
    }));

    // Mostrar todas las razas inicialmente
    await displayBreeds(allBreeds);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    galleryDiv.innerHTML = `<div class="error">Lo sentimos, no se pudieron cargar las razas. Error: ${errorMessage}</div>`;
    console.error("Hubo un problema con la operación fetch:", error);
  } finally {
    console.log("Intento de carga de razas finalizado.");
  }
};

/**
 * ## Función para mostrar las razas en el DOM
 * @param breeds - Array de información de razas a mostrar
 * @returns Promise<void>
 */
const displayBreeds = async (breeds: BreedInfo[]): Promise<void> => {
  // Limpiar la galería
  galleryDiv.innerHTML = '';
  
  log(`<strong>Mostrando ${breeds.length} razas...</strong>`);
  
  // Mostrar mensaje si no hay resultados
  if (breeds.length === 0) {
    galleryDiv.innerHTML = '<p style="grid-column: 1 / -1; color: #6c757d;">No se encontraron razas con este filtro.</p>';
    return;
  }
  
  // ## Loop para iterar sobre cada raza
  for (const breed of breeds) {
    // Por cada raza, obtenemos una imagen aleatoria
    const imageUrl = await getBreedImage(breed.name);
    
    // Creamos la tarjeta para el perro
    const card = document.createElement('div');
    card.className = 'dog-card';
    card.innerHTML = `
      <span class="size-badge">${getSizeLabel(breed.size)}</span>
      <img src="${imageUrl}" alt="${breed.name}" loading="lazy">
      <h3>${breed.name}</h3>
    `;
    galleryDiv.appendChild(card);
  }
};

/**
 * Filtra las razas por tamaño
 * @param size - Tamaño a filtrar
 */
const filterBySize = (size: DogSize): void => {
  // Actualizar clases activas en botones
  filterButtons.forEach(btn => {
    if (btn.dataset.size === size) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Filtrar y mostrar razas
  const filteredBreeds = size === 'all' 
    ? allBreeds 
    : allBreeds.filter(breed => breed.size === size);
    
  displayBreeds(filteredBreeds);
};

/**
 * ## Función auxiliar para obtener imagen de una raza
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
    return 'https://via.placeholder.com/250?text=Imagen+no+disponible';
  }
};

/**
 * Función auxiliar para imprimir en la consola
 * @param message - Mensaje a imprimir
 */
const log = (message: string): void => {
  console.log(message);
};

// ## Event Listeners
// Agregar listeners a los botones de filtro
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const size = button.dataset.size as DogSize;
    filterBySize(size);
  });
});

// Log inicial para confirmar que el script se cargó correctamente
console.log('🐶 Aplicación de Razas de Perros cargada correctamente!');

// Cargar todas las razas al inicio
fetchAndDisplayBreeds();
