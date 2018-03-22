Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

Highcharts.chart('container', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg,
        marginRight: 10,
        events: {
            load: function () {
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random() * (0.2500 - 0.2750) + 0.2750;
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: 'Coaxial cable 1'
    },
    xAxis: {
    	title: {
            text: 'time'
        },
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Deformation im mm'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },

    credits: {enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * (0.2500 - 0.2750) + 0.2750

                });
            }
            return data;
        }())
    }]
});



Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

Highcharts.chart('container2', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg,
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random() * (0.2500 - 0.2750) + 0.2750;
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: 'Coaxial cable 2'
    },
    xAxis: {
    	title: {
            text: 'time'
        },
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Deformation im mm'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#e74c3c'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },

    credits: {enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        color:'#2ecc71',
        
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * (0.2500 - 0.2750) + 0.2750

                });
            }
            return data;
        }())
    }]
});




Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

Highcharts.chart('container3', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg,
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random() * (0.2500 - 0.2750) + 0.2750;
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: 'Coaxial cable 3'
    },
    xAxis: {
    	title: {
            text: 'time'
        },
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Deformation im mm'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#121222'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },

    credits: {enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        color:'#e74c3c',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * (0.2500 - 0.2750) + 0.2750

                });
            }
            return data;
        }())

    }]
});
