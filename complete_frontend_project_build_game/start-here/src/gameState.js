import { modFox, modScene } from "./ui";
import { RAIN_CHANCE, SCENES, DAY_LENGTH, NIGHT_LENGTH, getNextDieTime, getNextHungerTime, getNextPoopTime } from './constants';

const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  sleepTime: -1,
  hungryTime: -1,
  dieTime: -1,
  timeToStartCelebrating: -1,
  timeToEndCelebrating: -1,
  tick() {
    this.clock++;
    console.log('clock', this.clock);

    if (this.clock === this.wakeTime) {
      this.wake();
    } else if (this.clock === this.sleepTime) {
      this.sleep();
    } else if (this.clock === this.hungryTime) {
      this.getHungry();
    } else if (this.clock === this.dieTime) {
      this.die();
    } else if (this.clock === this.timeToStartCelebrating) {
      this.startCelebrating();
    } else if (this.clock === this.timeToEndCelebrating) {
      this.endCelebrating();
    }

    return this.clock;
  },
  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
    modFox('egg');
    modScene('day');
  },
  wake() {
    this.current = "IDLING";
    this.wakeTime = -1;
    this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
    modScene(SCENES[this.scene]);
    this.sleepTime = this.clock + DAY_LENGTH;
    this.hungryTime = getNextHungerTime(this.clock);
    this.determineFoxState();
  },
  sleep() {
    this.state = 'SLEEP';
    modFox('sleep');
    modScene('night');
    this.wakeTime = this.clock + NIGHT_LENGTH;
  },
  getHungry() {
    this.current = 'HUNGRY';
    this.dieTime = getNextDieTime(this.clock);
    this.hungryTime = -1;
    modFox('hungry');
  },
  die() {
    console.log('die');
  },
  startCelebrating() {
    this.current = 'CELEBRATING';
    modFox('celebrate');
    this.timeToStartCelebrating = -1;
    this.timeToEndCelebrating = this.clock + 2;
  },
  endCelebrating() {
    this.timeToEndCelebrating = -1;
    this.current = "IDLING";
    this.determineFoxState();
  },
  determineFoxState() {
    if (this.current === 'IDLING') {
      if (SCENES[this.scene] === 'rain') {
        modFox('rain');
      } else {
        modFox('idling');
      }
    }
  },
  handleUserAction(icon) {
    if (["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)) {
      // do nothing
      return;
    }

    if (this.current === 'INIT' || this.current === 'DEAD') {
      this.startGame();
      return;
    }

    switch(icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log('changeWeather');
  },
  cleanUpPoop() {
    console.log('cleanUpPoop');
  },
  feed() {
    if (this.current !== 'HUNGRY') {
      return;
    }

    this.current = 'FEEDING';
    this.dieTime = -1;
    this.poopTime = getNextPoopTime(this.clock);
    modFox('eating');
    this.timeToStartCelebrating = this.clock + 2;
  }
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;