/**
 * Aplicación de Galería de Razas de Perros
 * Este archivo demuestra el uso de TypeScript con JavaScript asíncrono
 */

// Importamos los estilos
import './style.css';

// Importamos la base de datos de razas
import { getBreedDetails, type BreedDetails } from './breedData';

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
  'dachshund': 'small',
  'maltese': 'small',
  'papillon': 'small',
  'pekinese': 'small',
  'poodle-toy': 'small',
  'schipperke': 'small',
  'yorkshire': 'small',
  
  // Mediano (10-25kg)
  'beagle': 'medium',
  'bulldog': 'medium',
  'corgi': 'medium',
  'basenji': 'medium',
  'chow': 'medium',
  'cocker': 'medium',
  'spaniel': 'medium',
  'finnish': 'medium',
  'keeshond': 'medium',
  'kelpie': 'medium',
  'pitbull': 'medium',
  'poodle': 'medium',
  'poodle-miniature': 'medium',
  'poodle-medium': 'medium',
  'schnauzer': 'medium',
  'sharpei': 'medium',
  'sheepdog': 'medium',
  'shiba': 'medium',
  'springer': 'medium',
  'whippet': 'medium',
  
  // Grande (más de 25kg)
  'african': 'large',
  'airedale': 'large',
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
  'bullterrier': 'large',
  'cattledog': 'large',
  'clumber': 'large',
  'collie': 'large',
  'coonhound': 'large',
  'dalmatian': 'large',
  'deerhound': 'large',
  'dhole': 'large',
  'dingo': 'large',
  'doberman': 'large',
  'elkhound': 'large',
  'entlebucher': 'large',
  'eskimo': 'large',
  'german': 'large',
  'germanshepherd': 'large',
  'greyhound': 'large',
  'groenendael': 'large',
  'hound': 'large',
  'husky': 'large',
  'labrador': 'large',
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
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const clearSearchBtn = document.getElementById('clearSearch') as HTMLButtonElement;

// Referencias del modal
const modal = document.getElementById('breedModal') as HTMLDivElement;
const modalClose = document.querySelector('.modal-close') as HTMLSpanElement;
const modalImage = document.getElementById('modalImage') as HTMLImageElement;
const modalTitle = document.getElementById('modalTitle') as HTMLHeadingElement;
const modalSize = document.getElementById('modalSize') as HTMLParagraphElement;
const modalOrigin = document.getElementById('modalOrigin') as HTMLParagraphElement;
const modalLifespan = document.getElementById('modalLifespan') as HTMLParagraphElement;
const modalTemperament = document.getElementById('modalTemperament') as HTMLParagraphElement;
const modalDescription = document.getElementById('modalDescription') as HTMLParagraphElement;

// URL de la API de perros
const API_URL = 'https://dog.ceo/api/breeds/list/all';

// Estado de la aplicación
let allBreeds: BreedInfo[] = [];
let breedImagesCache: Map<string, string> = new Map();
let currentSizeFilter: DogSize = 'all';
let currentSearchTerm: string = '';

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
  
  // Crear mensaje descriptivo
  let filterMsg = '';
  if (currentSearchTerm) {
    filterMsg += ` con búsqueda: "${currentSearchTerm}"`;
  }
  if (currentSizeFilter !== 'all') {
    filterMsg += ` (Tamaño: ${getSizeLabel(currentSizeFilter)})`;
  }
  
  log(`<strong>Mostrando ${breeds.length} razas${filterMsg}</strong>`);
  
  // Mostrar mensaje si no hay resultados
  if (breeds.length === 0) {
    const noResultsMsg = currentSearchTerm 
      ? `No se encontraron razas que coincidan con "${currentSearchTerm}"${currentSizeFilter !== 'all' ? ` y tamaño ${getSizeLabel(currentSizeFilter)}` : ''}.`
      : 'No se encontraron razas con este filtro.';
    galleryDiv.innerHTML = `<p style="grid-column: 1 / -1; color: #6c757d;">${noResultsMsg}</p>`;
    return;
  }
  
  // ## Loop para iterar sobre cada raza
  for (const breed of breeds) {
    // Por cada raza, obtenemos una imagen aleatoria
    const imageUrl = await getBreedImage(breed.name);
    
    // Guardamos la imagen en caché
    breedImagesCache.set(breed.name, imageUrl);
    
    // Creamos la tarjeta para el perro
    const card = document.createElement('div');
    card.className = 'dog-card';
    card.innerHTML = `
      <span class="size-badge">${getSizeLabel(breed.size)}</span>
      <img src="${imageUrl}" alt="${breed.name}" loading="lazy">
      <h3>${breed.name}</h3>
    `;
    
    // Agregar event listener para abrir el modal
    card.addEventListener('click', () => openBreedModal(breed.name, imageUrl));
    
    galleryDiv.appendChild(card);
  }
};

/**
 * Aplica los filtros combinados de búsqueda y tamaño
 * @returns Promise<void>
 */
const applyFilters = async (): Promise<void> => {
  let filteredBreeds = allBreeds;
  
  // Filtrar por tamaño
  if (currentSizeFilter !== 'all') {
    filteredBreeds = filteredBreeds.filter(breed => breed.size === currentSizeFilter);
  }
  
  // Filtrar por búsqueda
  if (currentSearchTerm.trim() !== '') {
    const searchLower = currentSearchTerm.toLowerCase().trim();
    filteredBreeds = filteredBreeds.filter(breed => 
      breed.name.toLowerCase().includes(searchLower)
    );
  }
  
  await displayBreeds(filteredBreeds);
};

/**
 * Filtra las razas por tamaño
 * @param size - Tamaño a filtrar
 */
const filterBySize = async (size: DogSize): Promise<void> => {
  currentSizeFilter = size;
  
  // Actualizar clases activas en botones
  filterButtons.forEach(btn => {
    if (btn.dataset.size === size) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  await applyFilters();
};

/**
 * Maneja el evento de búsqueda por nombre
 */
const handleSearch = async (): Promise<void> => {
  currentSearchTerm = searchInput.value;
  
  // Mostrar/ocultar botón de limpiar
  if (currentSearchTerm.trim() !== '') {
    clearSearchBtn.classList.add('show');
  } else {
    clearSearchBtn.classList.remove('show');
  }
  
  await applyFilters();
};

/**
 * Limpia el campo de búsqueda
 */
const clearSearch = async (): Promise<void> => {
  searchInput.value = '';
  currentSearchTerm = '';
  clearSearchBtn.classList.remove('show');
  searchInput.focus();
  await applyFilters();
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

/**
 * Abre el modal con información detallada de una raza
 * @param breedName - Nombre de la raza
 * @param imageUrl - URL de la imagen de la raza
 */
const openBreedModal = (breedName: string, imageUrl: string): void => {
  // Obtener información detallada de la raza
  const details: BreedDetails = getBreedDetails(breedName);
  
  // Llenar el modal con la información
  modalImage.src = imageUrl;
  modalImage.alt = details.name;
  modalTitle.textContent = details.name;
  modalSize.textContent = details.size;
  modalOrigin.textContent = details.origin;
  modalLifespan.textContent = details.lifespan;
  modalTemperament.textContent = details.temperament;
  modalDescription.textContent = details.description;
  
  // Mostrar el modal
  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  
  log(`📋 Mostrando información de: ${details.name}`);
};

/**
 * Cierra el modal
 */
const closeBreedModal = (): void => {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto'; // Restaurar scroll del body
  log('❌ Modal cerrado');
};

// ## Event Listeners

// Agregar listeners a los botones de filtro
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const size = button.dataset.size as DogSize;
    filterBySize(size);
  });
});

// Event listener para el campo de búsqueda con debounce
let searchTimeout: number;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = window.setTimeout(() => {
    handleSearch();
  }, 300); // Esperar 300ms después de que el usuario deje de escribir
});

// Event listener para limpiar búsqueda
clearSearchBtn.addEventListener('click', clearSearch);

// Event listener para buscar al presionar Enter
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    clearTimeout(searchTimeout);
    handleSearch();
  }
});

// Cerrar modal al hacer clic en la X
modalClose.addEventListener('click', closeBreedModal);

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeBreedModal();
  }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('show')) {
    closeBreedModal();
  }
});

// Log inicial para confirmar que el script se cargó correctamente
console.log('🐶 Aplicación de Razas de Perros cargada correctamente!');
console.log('✨ Sistema de información detallada activado');
console.log('🔍 Búsqueda por nombre de raza habilitada');

// Cargar todas las razas al inicio
fetchAndDisplayBreeds();
