                        // Main grid chart
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  lineColors: ['orange'],
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 30 },
    { year: '2011', value: 15 },
    { year: '2012', value: 30 },
    { year: '2013', value: 30 },
    { year: '2014', value: 40 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

                            // Donut Chart

Morris.Donut({
    element: 'progress-donut',
    data: [
        {label: "Running", value: 12},
        {label: "Walking", value: 30},
        {label: "Cycling", value: 20},
        {label: "Swimming", value: 15}
    ],
    labelColor: '#fff'
})