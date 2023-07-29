
import TankModel from './tankmodel';
var sim;
function getInstance(){
    if (instance == null) {
        instance = new TankModel();
        // Hide the constructor so the returned object can't be new'd...
        instance.constructor = null;
    }
    return instance;
}
export async function GET (request ){
  sim = getInstance();
  await sim.render();
  let pc = await sim.mainTank.pc;
  return new Response(JSON.stringify(pc));
}