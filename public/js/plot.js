/* Equinox
generate an array of random data to fill the plot
make ajax calls 
load the data
Highchart */
function ajaxcall() {
    $.ajax({
        url: '/sensordata',
        success: function(point) {
            var series = chart.series[0],
            // shift = series.data.length > 20; 
            p = []
            p.push(point['timestamp'])
            p.push(point['data'])
            chart.series[0].addPoint(p, true, true);
            setTimeout(ajaxcall, 1000); 
            console.log(p)   
        },
        cache: false 
    });
}
var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            defaultSeriesType: 'spline',
            events: {
                load: ajaxcall
            }
        },
        title: {
            text: 'Sensor data'
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
            // generate an array of random data to fill the plot
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * (0.2500 - 0.2750) + 10

                });
            }
            // console.log(data)
            return data;
        }())
    }]
    });        
});
