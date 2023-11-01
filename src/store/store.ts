// data.ts
import { defineStore } from "pinia";

interface Planet {
  id: number;
  rotation: boolean;
}

export const usePlanetStore = defineStore({
  id: "planets",
  state: (): { planets: Planet[] } => ({
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
    ]
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
    }
  }
});


// 在組件中使用 store
// export default {
//   setup() {
//     const planetStore = usePlanetStore();

//     // 新增星球
//     planetStore.addPlanet({ id: "1", image: "/path/to/image.jpg", rotation: false });

//     // 刪除星球
//     planetStore.removePlanet("1");

//     // 旋轉星球
//     planetStore.rotatePlanet("1");

//     return { planets: planetStore.$state.planets };
//   }
// };
