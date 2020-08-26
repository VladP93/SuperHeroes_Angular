export interface Heroe {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string];
    weight: [string];
  };
  biography: {
    fullName: string;
    aliases: [string];
    placeOfBirth: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
  };
  images: {
    md: string;
    lg: string;
  };
}
