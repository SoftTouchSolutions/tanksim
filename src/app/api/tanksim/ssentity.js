import TankModel from './tankmodel';
import TankSim from './tanksim';
import Random from './random';

export default class SSEntity {
  constructor(n, x, y, w, h) {
    this.name = n;
    this.top = y;
    this.left = x;
    this.width = w;
    this.height = h;
    this.pc = 50;
    this.speed = 0;
    this.tl = 5;
    this.filling_done = false;
    this.tgt = 0;
    this.lower_limit = 20;
    this.entity = TankModel.TANK;

    const SPEED = 800;
    this.speed = SPEED / (w * h);
    this.speed *= this.speed;

    this.rand = new Random();
    this.tgt = 51 + this.rand.nextInt(50);

    if (this.name.toLowerCase().startsWith("car")) {
      this.entity = TankModel.CAR;
    } else if (this.name.toLowerCase().startsWith("station")) {
      this.entity = TankModel.STATION;
    } else {
      this.entity = TankModel.TANK;
    }
  }

  render() {
    if (this.filling_done && this.entity === TankModel.CAR) {
      this.pc = this.rand.nextInt(50);
      this.tgt = 51 + this.rand.nextInt(50);
      this.filling_done = false;
      TankSim.FILLED = TankSim.FILLED === TankSim.CARS ? 0 : TankSim.FILLED + 1;
    }
    const h = (this.height * this.pc / 100);
    const t = this.top + this.height * (100 - this.pc) / 100;
    // this.mrect(this.left, this.top, this.width, this.height);
    // this.mrect(this.left, t, this.width, h);
  }

  mrect(x, y, w, h) {
    rect(x + this.tl, y + this.tl, w, h);
  }

  done() {
    return this.filling_done;
  }
  
  empty_alarm() {
    if (this.pc < 20) {
      this.filling_done = false;
      return true;
    } else {
      return false;
    }
  }

  emptying() {
    if (this.pc < 0) {
      this.pc = 0;
      return;
    }
    this.pc -= this.speed;
  }

  filling(...v) {
    if (this.pc > this.tgt) {
      this.pc = this.tgt;
      this.filling_done = true;
      return;
    }
    switch (this.entity) {
      case TankModel.TANK:
        const f = 1 / v[0];
        // console.log("tank rate =" + f);
        this.pc += f;
        break;
      case TankModel.STATION:
        const g = (1 / v[0]) * (80 * 80) / (this.width * this.height);
        console.log("station rate = " + g);
        this.pc += g;
        break;
      default:
        this.pc += this.speed;
        break;
    }
  }

  str() {
    return this.name;
  }

  level() {
    return this.pc;
  }

  target() {
    return this.tgt;
  }
}
//module.exports = SSEntity;

// const MyClass = require('./path-to-file');

// const myInstance = new MyClass();
// myInstance.myMethod();
