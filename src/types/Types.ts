// General
export interface List {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}

// Specific

export interface Pokemon {
  height: string;
  id: number;
  name: string;
  types: Type[];
  weight: number;
  sprites: {
    front_default: string;
  };
}

export interface Type {
  slot: number;
  type: TypeClass;
}

export interface TypeClass {
  name: string;
  url:  string;
}