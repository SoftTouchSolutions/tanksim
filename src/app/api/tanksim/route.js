
import TankModel from './tankmodel';

const sim = new TankModel();

export async function GET (request ){
  await sim.render();
  let pc = await sim.mainTank.pc;
  return new Response(JSON.stringify(pc));
}