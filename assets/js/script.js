/*********************************/
// Chart.js script               //
/*********************************/


Chart.overrides.doughnut.cutout = "70%";

const options = {
   responsive: true,
   animation: {
     animateScale: true,
     animateRotate: true
   }
};

// large doughnut
var ctx = document.getElementById('chartMain');
var data = {
  datasets: [{
    data: [80, 200],
    backgroundColor: [
      '#CDD0D5',
      '#32A8AF'
    ],
    hoverOffset: 4,
  }]
};

var chartMain = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});

// mini doughnuts

var ctx_1 = document.getElementById('chartMiniOne');
var data_1 = {
  datasets: [{
    data: [80,200],
    backgroundColor: [
      '#CDD0D5',
      '#32A8AF'
    ],
    hoverOffset: 4
  }]
};

var chartMiniOne = new Chart(ctx_1, {
  type: 'doughnut',
  data: data_1,
  options: options
});

// mini doughtnut 2

var ctx_2 = document.getElementById('chartMiniTwo');
var data_2 = {
  datasets: [{
    data: [80,200],
    backgroundColor: [
      '#CDD0D5',
      '#C724B1'
    ],
    hoverOffset: 4
  }]
};

var chartMiniTwo = new Chart(ctx_2, {
  type: 'doughnut',
  data: data_2,
  options: options
});


// mini doughtnut 3

var ctx_3 = document.getElementById('chartMiniThree');
var data_3 = {
  datasets: [{
    data: [80,200],
    backgroundColor: [
      '#CDD0D5',
      '#78157C'
    ],
    hoverOffset: 4
  }]
};

var chartMiniThree = new Chart(ctx_3, {
  type: 'doughnut',
  data: data_3,
  options: options
});

// mini doughtnut 4

var ctx_4 = document.getElementById('chartMiniFour');
var data_4 = {
  datasets: [{
    data: [80,200],
    backgroundColor: [
      '#CDD0D5',
      '#BACE00'
    ],
    hoverOffset: 4
  }]
};

var chartMiniFour = new Chart(ctx_4, {
  type: 'doughnut',
  data: data_4,
  options: options
});
