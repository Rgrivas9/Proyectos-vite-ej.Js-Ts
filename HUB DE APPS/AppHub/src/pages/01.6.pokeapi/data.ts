export const num: number = 0;
interface Stats {
  name: string;
  base: number;
}
interface Hability {
  name: string;
  description: string;
}
interface Moves {
  name: string;
  type: string;
}
interface Images {
    front:string;
    back:string;
    main:string;
}
interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  stats: Stats;
  type: string[];
  habilities: Hability;
  moves: Moves;
  images: Images
}