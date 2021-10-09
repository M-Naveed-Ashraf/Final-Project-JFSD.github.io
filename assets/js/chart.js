                        // Main grid chart
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  lineColors: ['orange'],
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { week: '1', value: 20 },
    { week: '2', value: 10 },
    { week: '3', value: 30 },
    { week: '4', value: 15 },
    { week: '5', value: 30 },
    { week: '6', value: 30 },
    { week: '7', value: 40 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'week',
  xLabel: 'week',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

                            // Donut Chart

// Morris.Donut({
//     element: 'progress-donut',
//     data: [
//         {label: "Running", value: 12},
//         {label: "Walking", value: 30},
//         {label: "Cycling", value: 20},
//         {label: "Swimming", value: 15}
//     ],
//     labelColor: '#fff'
// })


var colorDanger = "#FF1744";
Morris.Donut({
  element: 'donut-example',
  resize: true,
  colors: [
    '#E0F7FA',
    '#B2EBF2',
    '#80DEEA',
    '#4DD0E1',
    '#26C6DA',
    '#00BCD4',
    '#00ACC1',
    '#0097A7',
    '#00838F',
    '#006064'
  ],
  labelColor:"#fff", // text color
  backgroundColor: '#333333', // border color
  data: [
    {label:"Running", value:10, color:colorDanger},
    {label:"Walking", value:9},
    {label:"Cycling", value:15},
    {label:"Swimming", value:20},
    {label:"Hicking", value:30}
  ]
});