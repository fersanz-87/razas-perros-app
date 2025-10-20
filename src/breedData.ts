/**
 * Base de datos con información detallada de razas de perros
 */

export interface BreedDetails {
  name: string;
  size: string;
  origin: string;
  lifespan: string;
  temperament: string;
  description: string;
}

/**
 * Información detallada de las razas más comunes
 */
export const breedDetailsDB: Record<string, BreedDetails> = {
  'affenpinscher': {
    name: 'Affenpinscher',
    size: 'Pequeño (3-6 kg)',
    origin: 'Alemania',
    lifespan: '12-14 años',
    temperament: 'Juguetón, Aventurero, Curioso, Obstinado',
    description: 'Conocido como el "perro mono" por su expresión facial, es valiente y leal.'
  },
  'african': {
    name: 'African Wild Dog',
    size: 'Grande (18-36 kg)',
    origin: 'África Subsahariana',
    lifespan: '10-12 años',
    temperament: 'Social, Inteligente, Cooperativo',
    description: 'Altamente social y cooperativo, vive en manadas organizadas.'
  },
  'airedale': {
    name: 'Airedale Terrier',
    size: 'Grande (20-30 kg)',
    origin: 'Inglaterra',
    lifespan: '10-12 años',
    temperament: 'Inteligente, Valiente, Amigable, Alerta',
    description: 'El más grande de los terriers, versátil y excelente perro de trabajo.'
  },
  'akita': {
    name: 'Akita',
    size: 'Grande (32-59 kg)',
    origin: 'Japón',
    lifespan: '10-13 años',
    temperament: 'Leal, Valiente, Digno, Protector',
    description: 'Raza japonesa noble y leal, famoso por la historia de Hachiko.'
  },
  'appenzeller': {
    name: 'Appenzeller Sennenhund',
    size: 'Mediano (22-32 kg)',
    origin: 'Suiza',
    lifespan: '12-14 años',
    temperament: 'Enérgico, Leal, Inteligente, Protector',
    description: 'Perro pastor suizo, ágil y versátil en trabajos de granja.'
  },
  'australian': {
    name: 'Australian Shepherd',
    size: 'Mediano (16-32 kg)',
    origin: 'Estados Unidos',
    lifespan: '12-15 años',
    temperament: 'Inteligente, Enérgico, Protector, Trabajador',
    description: 'A pesar del nombre, fue desarrollado en Estados Unidos como perro pastor.'
  },
  'basenji': {
    name: 'Basenji',
    size: 'Mediano (9-11 kg)',
    origin: 'República Democrática del Congo',
    lifespan: '12-14 años',
    temperament: 'Inteligente, Independiente, Curioso, Alerta',
    description: 'Conocido como el perro que no ladra, produce sonidos únicos de yodel.'
  },
  'beagle': {
    name: 'Beagle',
    size: 'Mediano (9-11 kg)',
    origin: 'Inglaterra',
    lifespan: '12-15 años',
    temperament: 'Amigable, Curioso, Alegre, Determinado',
    description: 'Excelente perro de caza con olfato excepcional, perfecto para familias.'
  },
  'bernese': {
    name: 'Bernese Mountain Dog',
    size: 'Grande (36-50 kg)',
    origin: 'Suiza',
    lifespan: '7-10 años',
    temperament: 'Afectuoso, Leal, Inteligente, Tranquilo',
    description: 'Gigante gentil de los Alpes suizos, excelente con niños.'
  },
  'borzoi': {
    name: 'Borzoi',
    size: 'Grande (27-48 kg)',
    origin: 'Rusia',
    lifespan: '10-12 años',
    temperament: 'Elegante, Independiente, Tranquilo, Atlético',
    description: 'Galgo ruso elegante, criado originalmente para cazar lobos.'
  },
  'boxer': {
    name: 'Boxer',
    size: 'Grande (25-32 kg)',
    origin: 'Alemania',
    lifespan: '10-12 años',
    temperament: 'Juguetón, Enérgico, Leal, Inteligente',
    description: 'Perro de trabajo versátil, excelente guardián y compañero familiar.'
  },
  'bulldog': {
    name: 'Bulldog',
    size: 'Mediano (18-25 kg)',
    origin: 'Inglaterra',
    lifespan: '8-10 años',
    temperament: 'Tranquilo, Valiente, Amigable, Digno',
    description: 'Icónico perro británico, de apariencia fuerte pero temperamento gentil.'
  },
  'bullterrier': {
    name: 'Bull Terrier',
    size: 'Mediano (20-36 kg)',
    origin: 'Inglaterra',
    lifespan: '10-14 años',
    temperament: 'Juguetón, Valiente, Activo, Leal',
    description: 'Reconocible por su cabeza ovalada, es un compañero leal y divertido.'
  },
  'chihuahua': {
    name: 'Chihuahua',
    size: 'Pequeño (1.5-3 kg)',
    origin: 'México',
    lifespan: '14-16 años',
    temperament: 'Alerta, Valiente, Vivaz, Devoto',
    description: 'La raza de perro más pequeña del mundo, originaria de México.'
  },
  'chow': {
    name: 'Chow Chow',
    size: 'Mediano (20-32 kg)',
    origin: 'China',
    lifespan: '9-15 años',
    temperament: 'Independiente, Leal, Digno, Distante',
    description: 'Antigua raza china reconocible por su lengua azul-negra.'
  },
  'corgi': {
    name: 'Welsh Corgi',
    size: 'Mediano (10-14 kg)',
    origin: 'Gales',
    lifespan: '12-15 años',
    temperament: 'Inteligente, Alerta, Amigable, Protector',
    description: 'Perro pastor galés de patas cortas, favorito de la realeza británica.'
  },
  'dachshund': {
    name: 'Dachshund',
    size: 'Pequeño (7-15 kg)',
    origin: 'Alemania',
    lifespan: '12-16 años',
    temperament: 'Curioso, Valiente, Obstinado, Vivaz',
    description: 'Conocido como "perro salchicha", fue criado para cazar tejones.'
  },
  'dalmatian': {
    name: 'Dalmatian',
    size: 'Grande (20-32 kg)',
    origin: 'Croacia',
    lifespan: '10-13 años',
    temperament: 'Enérgico, Juguetón, Inteligente, Amigable',
    description: 'Famoso por sus manchas únicas, históricamente perro de carruajes.'
  },
  'doberman': {
    name: 'Doberman Pinscher',
    size: 'Grande (32-45 kg)',
    origin: 'Alemania',
    lifespan: '10-13 años',
    temperament: 'Leal, Inteligente, Alerta, Valiente',
    description: 'Excelente perro guardián y de protección, inteligente y leal.'
  },
  'husky': {
    name: 'Siberian Husky',
    size: 'Grande (16-27 kg)',
    origin: 'Siberia',
    lifespan: '12-14 años',
    temperament: 'Amigable, Gentil, Alerta, Extrovertido',
    description: 'Perro de trineo siberiano, conocido por sus ojos azules y resistencia.'
  },
  'germanshepherd': {
    name: 'German Shepherd',
    size: 'Grande (22-40 kg)',
    origin: 'Alemania',
    lifespan: '9-13 años',
    temperament: 'Inteligente, Valiente, Leal, Confiado',
    description: 'Una de las razas más versátiles, excelente en trabajo policial y militar.'
  },
  'retriever': {
    name: 'Golden Retriever',
    size: 'Grande (25-34 kg)',
    origin: 'Escocia',
    lifespan: '10-12 años',
    temperament: 'Amigable, Inteligente, Confiable, Gentil',
    description: 'Uno de los perros familiares más populares, excelente con niños.'
  },
  'greyhound': {
    name: 'Greyhound',
    size: 'Grande (27-40 kg)',
    origin: 'Reino Unido',
    lifespan: '10-14 años',
    temperament: 'Gentil, Independiente, Inteligente, Tranquilo',
    description: 'El perro más rápido del mundo, puede alcanzar 70 km/h.'
  },
  'labrador': {
    name: 'Labrador Retriever',
    size: 'Grande (25-36 kg)',
    origin: 'Canadá',
    lifespan: '10-12 años',
    temperament: 'Amigable, Activo, Extrovertido, Gentil',
    description: 'La raza más popular del mundo, excelente perro de familia y trabajo.'
  },
  'maltese': {
    name: 'Maltese',
    size: 'Pequeño (3-4 kg)',
    origin: 'Malta',
    lifespan: '12-15 años',
    temperament: 'Gentil, Juguetón, Vivaz, Afectuoso',
    description: 'Antiguo perro de compañía con pelaje blanco sedoso.'
  },
  'mastiff': {
    name: 'Mastiff',
    size: 'Grande (54-100 kg)',
    origin: 'Inglaterra',
    lifespan: '6-10 años',
    temperament: 'Gentil, Valiente, Digno, Protector',
    description: 'Una de las razas más grandes, gentil gigante excelente guardián.'
  },
  'pomeranian': {
    name: 'Pomeranian',
    size: 'Pequeño (1.9-3.5 kg)',
    origin: 'Alemania/Polonia',
    lifespan: '12-16 años',
    temperament: 'Vivaz, Juguetón, Amigable, Activo',
    description: 'Pequeño spitz con gran personalidad y pelaje esponjoso.'
  },
  'poodle': {
    name: 'Poodle',
    size: 'Variable (según tipo)',
    origin: 'Francia/Alemania',
    lifespan: '12-15 años',
    temperament: 'Inteligente, Activo, Alerta, Entrenable',
    description: 'Extremadamente inteligente, viene en tres tamaños: toy, miniatura y estándar.'
  },
  'pug': {
    name: 'Pug',
    size: 'Pequeño (6-8 kg)',
    origin: 'China',
    lifespan: '12-15 años',
    temperament: 'Encantador, Juguetón, Sociable, Obstinado',
    description: 'Antiguo perro de compañía chino, conocido por su cara arrugada.'
  },
  'rottweiler': {
    name: 'Rottweiler',
    size: 'Grande (35-60 kg)',
    origin: 'Alemania',
    lifespan: '8-10 años',
    temperament: 'Leal, Valiente, Confiado, Protector',
    description: 'Poderoso perro de trabajo, excelente guardián y protector familiar.'
  },
  'samoyed': {
    name: 'Samoyed',
    size: 'Grande (16-30 kg)',
    origin: 'Siberia',
    lifespan: '12-14 años',
    temperament: 'Amigable, Gentil, Adaptable, Juguetón',
    description: 'Conocido por su "sonrisa samoyed" y pelaje blanco esponjoso.'
  },
  'shiba': {
    name: 'Shiba Inu',
    size: 'Mediano (8-11 kg)',
    origin: 'Japón',
    lifespan: '12-15 años',
    temperament: 'Alerta, Valiente, Independiente, Confiado',
    description: 'Raza japonesa antigua, conocida por su personalidad felina.'
  },
  'terrier': {
    name: 'Terrier',
    size: 'Variable (según tipo)',
    origin: 'Reino Unido',
    lifespan: '12-15 años',
    temperament: 'Enérgico, Valiente, Determinado, Alerta',
    description: 'Grupo diverso de perros criados originalmente para cazar alimañas.'
  },
  'weimaraner': {
    name: 'Weimaraner',
    size: 'Grande (25-40 kg)',
    origin: 'Alemania',
    lifespan: '10-13 años',
    temperament: 'Amigable, Obediente, Alerta, Enérgico',
    description: 'Perro de caza elegante con distintivo pelaje gris plateado.'
  },
  'yorkshire': {
    name: 'Yorkshire Terrier',
    size: 'Pequeño (2-3 kg)',
    origin: 'Inglaterra',
    lifespan: '13-16 años',
    temperament: 'Valiente, Inteligente, Confiado, Independiente',
    description: 'Pequeño terrier con largo pelaje sedoso, gran personalidad.'
  },
  // Información genérica para razas sin datos específicos
  'default': {
    name: 'Raza de Perro',
    size: 'Variable',
    origin: 'Información no disponible',
    lifespan: '10-15 años (promedio)',
    temperament: 'Varía según la raza',
    description: 'Esta es una raza maravillosa con características únicas. Para más información detallada, consulta con un veterinario o especialista en razas caninas.'
  }
};

/**
 * Obtiene información detallada de una raza
 * @param breedName - Nombre de la raza
 * @returns Información detallada de la raza
 */
export const getBreedDetails = (breedName: string): BreedDetails => {
  // Buscar coincidencia exacta
  if (breedDetailsDB[breedName]) {
    return breedDetailsDB[breedName];
  }
  
  // Buscar coincidencia parcial
  for (const [key, details] of Object.entries(breedDetailsDB)) {
    if (breedName.includes(key) || key.includes(breedName)) {
      return { ...details, name: breedName.charAt(0).toUpperCase() + breedName.slice(1) };
    }
  }
  
  // Retornar información por defecto
  return {
    ...breedDetailsDB['default'],
    name: breedName.charAt(0).toUpperCase() + breedName.slice(1)
  };
};

