import ANewHope from "./assets/A_New_Hope.jpg";
import Annakin from "./assets/Annakin.webp";
import AttackOfTheClones from "./assets/Attack_of_the_Clones.jpg";
import C3PO from "./assets/C-3PO.jpg";
import Jabba from "./assets/Jabba.webp";
import ObiWan from "./assets/Obi-Wan.jpg";
import ReturnOfTheJedi from "./assets/Return_of_the_Jedi.jpg";
import RevengeOfTheSith from "./assets/Revenge_of_the_Sith.jpg";
import TheEmpireStrikesBack from "./assets/The_Empire_Strikes_Back.jpg";
import ThePhantomMenace from "./assets/The_Phantom_Menace.jpg";
import Yoda from "./assets/Yoda.webp";
import Belbullab22Starfighter from "./assets/starships/Belbullab-22_Starfighter.png";
import JediInterceptor from "./assets/starships/Jedi_Interceptor.png";
import NabooStarSkiff from "./assets/starships/Naboo_Star_Skiff.jpeg";
import TradeFederation from "./assets/starships/Trade_Federation.jpeg";
import JediStarfighter from "./assets/starships/Yodas_Jedi_Starfighter.png";

const episodesData = [
  {
    id: "sw-1-the-phantom-menace",
    src: ThePhantomMenace,
    title: "The Phantom Menace",
    openingCrawl:
      "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.While the congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
    characters: [
      {
        id: "sw-char-1-obi-wan",
        imageSrc: ObiWan,
        name: "Obi-Wan",
        height: "182",
        weight: "77",
        species: "Human",
        homeWorld: "Stewjon",
        pilotedStarships: [
          { imageSrc: JediStarfighter, name: "Jedi starfighter" },
          { imageSrc: TradeFederation, name: "Trade Federation cruiser" },
          { imageSrc: NabooStarSkiff, name: "Naboo star skiff" },
          { imageSrc: JediInterceptor, name: "Jedi Interceptor" },
          {
            imageSrc: Belbullab22Starfighter,
            name: "Belbullab-22 starfighter",
          },
        ],
      },
      { id: "sw-char-2-annakin", imageSrc: Annakin, name: "Annakin" },
      { id: "sw-char-3-jabba", imageSrc: Jabba, name: "Jabba" },
      { id: "sw-char-4-c3po", imageSrc: C3PO, name: "C-3PO" },
      { id: "sw-char-5-yoda", imageSrc: Yoda, name: "Yoda" },
    ],
  },
  {
    id: "sw-2-attack-of-the-clones",
    src: AttackOfTheClones,
    title: "Attack of the Clones",
    openingCrawl:
      "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
  },
  {
    id: "sw-3-revenge-of-the-sith",
    src: RevengeOfTheSith,
    title: "Revenge of the Sith",
    openingCrawl:
      "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor...",
  },
  {
    id: "sw-4-a-new-hope",
    src: ANewHope,
    title: "A New Hope",
    openingCrawl:
      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armoured space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….",
  },
  {
    id: "sw-5-the-empire-strikes-back",
    src: TheEmpireStrikesBack,
    title: "The Empire Strikes Back",
    openingCrawl:
      "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space….",
  },
  {
    id: "sw-6-return-of-the-jedi",
    src: ReturnOfTheJedi,
    title: "Return of the Jedi",
    openingCrawl:
      "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
  },
];

export default episodesData;
