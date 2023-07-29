
// // import SSEntity from './ssentity.mjs';
// const range = (start, stop, step = 1) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// const sim = new TankModel();
// const mxsz = 50;
// let chart = {}
// function setup() {
//     let canvas = createCanvas(600, 400);
//     canvas.position(300, 50);
//   // var ctx = document.getElementById('myChart').getContext('2d');
//     chart = new Chart(canvas, {
//         // The type of chart we want to create
//         type: 'line',
  
//         // The data for our dataset
//         data: {
//             labels:range(0,50),
//             datasets: [{
//                 label: "Tank model",
//                 backgroundColor: 'rgb(255, 99, 132)',
//                 borderColor: 'rgb(0, 99, 132)',
//                 data: [],
//             }]
//         },
//         // Configuration options e
//         options: {
//             // Boolean - whether or not the chart should be responsive and resize when the browser does.
//             responsive: false,
//             // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
//             maintainAspectRatio: false,
//         }
//     });
//     console.log(chart.data.datasets[0].data);
//     frameRate(10);
//   }
  
//   function draw() {
//     // console.log(sim)
//     // console.log(sim.mainTank.pc)
//     let x = chart.data.datasets[0].data;
//     let pc = sim.mainTank.pc;
//     if(x.length>50) x.shift()
//     x.push(pc)
//     chart.update()
//     sim.render();
//   }
  
  