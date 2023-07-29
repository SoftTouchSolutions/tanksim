
import TankModel from './tankmodel';
var sim;
function getInstance(){
    if (sim == null) {
        sim = new TankModel();
        // Hide the constructor so the returned object can't be new'd...
        sim.constructor = null;
    }
    return sim;
}
export async function GET (request ){
  sim = getInstance();
  await sim.render();
  let pc = await sim.mainTank.pc;
  return new Response(JSON.stringify(pc));
}