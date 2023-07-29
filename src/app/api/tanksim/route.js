
import TankModel from './tankmodel';

const sim = new TankModel();

export async function GET (request ){
  sim.render();
  let pc = sim.mainTank.pc;
  return new Response(JSON.stringify(pc));
}