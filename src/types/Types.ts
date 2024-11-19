// General

/**
 * "List" interface
 * 
 * Interfaz para "lista"
 */

export interface List {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

/**
 * "Result" interface (general fetch)
 * 
 * Interfaz para "resultado" (fetch general)
 */

export interface Result {
  name: string;
}

// Specific / Específico

/**
 * "Pokemon" interface
 * 
 * Interfaz para "pokemon"
 */

export interface Pokemon {
  height: number;
  id?: number;
  name: string;
  weight: number;
  sprites?: {
    front_default: string;
  };
}

// Unused / Sin usar

/**
 * "general type" interface
 * 
 * Interfaz para "tipo general"
 */

export interface Type {
  slot: number;
  type: TypeClass;
}

/**
 * "type" interface (properties)
 * 
 * Interfaz para "tipo" (propiedades)
 */

export interface TypeClass {
  name: string;
  url:  string;
}