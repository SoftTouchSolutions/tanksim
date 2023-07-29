
import TankModel from './tankmodel';
import Random from './random';

var rand = new Random();
var sim;
function getInstance(){
    if (sim == null) {
        sim = new TankModel();
        // Hide the constructor so the returned object can't be new'd...
        sim.constructor = null;
    }
    return sim;
}
export const revalidate = 0.1; //revalidate api every 1 second
export async function GET (request ){
  sim = getInstance();
  await sim.render();
  let pc = await sim.mainTank.pc;
  return new Response(JSON.stringify(pc)); //,rand.nextInt(50)]));
}