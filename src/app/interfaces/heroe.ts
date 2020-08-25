export interface Heroe {
  id: string;
  name: string;
  powerstats: {
    inteligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  appereance: {
    gender: string;
    race: string;

    height: [string];
    weight: [string];
  };
  biography: {
    fullname: string;
    aliases: [string];
    placeOfBirth: string;
    publisher: string;
    alignment: string;
  };
  work: {
    ocupation: string;
  };
  images: {
    md: string;
    lg: string;
  };
}
