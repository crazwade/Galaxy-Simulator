// data.ts
import { defineStore } from "pinia";

interface Planet {
  id: number;
  rotation: boolean;
}

interface MenuButton {
  name: string;
  image: string;
}

export const usePlanetStore = defineStore({
  id: "planets",
  state: (): {
    planets: Planet[];
    menu: MenuButton[];
    menuAreaVisable: boolean;
  } => ({
    planets: [
      {
        id: 0,
        rotation: true,
      },
      {
        id: 1,
        rotation: true,
      },
      {
        id: 2,
        rotation: true,
      }
    ],
    menu: [
      {
        name: "新增",
        image: "src/assets/icon/plus.png",
      },
      {
        name: "調整",
        image: "src/assets/icon/adjust.png",
      },
      {
        name: "設定",
        image: "src/assets/icon/settings.png",
      }
    ],
    menuAreaVisable: true,
  }),
  actions: {
    addPlanet(planet: Planet) {
      // this.planets.push(planet);
      this.planets.push({
        id: 3,
        rotation: true,
      });
    },
    removePlanet(planetId: number) {
      this.planets = this.planets.filter(planet => planet.id !== planetId);
    },
    rotatePlanet(planetId: number) {
      const planet = this.planets.find(planet => planet.id === planetId);
      if (planet) {
        planet.rotation = !planet.rotation;
      }
    },
  }
});
