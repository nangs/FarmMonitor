analyticsHistory = {
    historicalTempLabel: ['0s'],
    historicalTempSeries: [0],
    historicalHumidLabel: ['0s'],
    historicalHumidSeries: [0],
    historicalWindDirLabel: ['0s'],
    historicalWindDirSeries: [0],
    historicalDewptfLabel: ['0s'],
    historicalDewptfSeries: [0],
    historicalWindChillLabel: ['0s'],
    historicalWindChillSeries: [0],
    historicalWindSpeedLabel: ['0s'],
    historicalWindSpeedSeries: [0],
    historicalWindGustLabel: ['0s'],
    historicalWindGustSeries: [0],
    historicalRainingLabel: ['0s'],
    historicalRainingSeries: [0],
    historicalDailyRainingLabel: ['0s'],
    historicalDailyRainingSeries: [0],
    historicalWeeklyRainingLabel: ['0s'],
    historicalWeeklyRainingSeries: [0],
    historicalMonthlyRainingLabel: ['0s'],
    historicalMonthlyRainingSeries: [0],
    historicalYearlyRainingLabel: ['0s'],
    historicalYearlyRainingSeries: [0],
    historicalSolarRadiationLabel: ['0s'],
    historicalSolarRadiationSeries: [0],
    historicalUVLabel: ['0s'],
    historicalUVSeries: [0],
    historicalIndoorTempLabel: ['0s'],
    historicalIndoorTempSeries: [0],
    historicalIndoorHumidLabel: ['0s'],
    historicalIndoorHumidSeries: [0],
    historicalBarominLabel: ['0s'],
    historicalBarominSeries: [0],
    historicalLowBattLabel: ['0s'],
    historicalLowBattSeries: [0],

    historicalTemp: {},
    historicalHumid: {},
    historicalWindDir: {},
    historicalDewptf: {},
    historicalWindChill : {},
    historicalWindSpeed:{},
    historicalWindGust :{},
    historicalRaining :{},
    historicalDailyRaining :{},
    historicalWeeklyRaining :{},
    historicalMonthlyRaining :{},
    historicalYearlyRaining :{},
    historicalSolarRadiation :{},
    historicalUV :{},
    historicalIndoorTemp :{},
    historicalIndoorHumid :{},
    historicalBaromin :{},
    historicalLowBatt :{},

    initDashboardPageCharts: function () {
        /* ----------==========     Historical Temperature Chart initialization    ==========---------- */
        dataHistoricalTempChart = {
            labels: analyticsHistory.historicalTempLabel,
            series: [
                analyticsHistory.historicalTempSeries
            ]
        };

        optionsHistoricalTempChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalTemp =
            new Chartist.Line('#HistoricalTempChart', dataHistoricalTempChart, optionsHistoricalTempChart);
        md.startAnimationForLineChart(analyticsHistory.historicalTemp);

        /* ----------==========     Historical Humidity Chart initialization    ==========---------- */
        dataHistoricalHumidChart = {
            labels: analyticsHistory.historicalHumidLabel,
            series: [
                analyticsHistory.historicalHumidSeries
            ]
        };

        optionsHistoricalHumidChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalHumid =
            new Chartist.Line('#HistoricalHumidityChart', dataHistoricalHumidChart, optionsHistoricalHumidChart);
        md.startAnimationForLineChart(analyticsHistory.historicalHumid);

        /* ----------==========     Historical Wind direction Chart initialization    ==========---------- */
        dataHistoricalWindDirChart = {
            labels: analyticsHistory.historicalWindDirLabel,
            series: [
                analyticsHistory.historicalWindDirSeries
            ]
        };

        optionsHistoricalWindDirChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalWindDir =
            new Chartist.Line('#HistoricalWindDirChart', dataHistoricalWindDirChart, optionsHistoricalWindDirChart);
        md.startAnimationForLineChart(analyticsHistory.historicalWindDir);

        /* ----------==========     Historical Dew pointChart initialization    ==========---------- */
        dataHistoricalDewptfChart = {
            labels: analyticsHistory.historicalDewptfLabel,
            series: [
                analyticsHistory.historicalDewptfSeries
            ]
        };

        optionsHistoricalDewptfChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalDewptf =
            new Chartist.Line('#HistoricalDewPointChart', dataHistoricalDewptfChart, optionsHistoricalDewptfChart);
        md.startAnimationForLineChart(analyticsHistory.historicalDewptf);

        /* ----------==========     Historical Wind Chill Chart initialization    ==========---------- */
        dataHistoricalWindChillChart = {
            labels: analyticsHistory.historicalWindChillLabel,
            series: [
                analyticsHistory.historicalWindChillSeries
            ]
        };

        optionsHistoricalWindChillChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalWindChill =
            new Chartist.Line('#HistoricalWindChillChart', dataHistoricalWindChillChart, optionsHistoricalWindChillChart);
        md.startAnimationForLineChart(analyticsHistory.historicalWindChill);

        /* ----------==========     Historical Wind Speed Chart initialization    ==========---------- */
        dataHistoricalWindSpeedChart = {
            labels: analyticsHistory.historicalWindSpeedLabel,
            series: [
                analyticsHistory.historicalWindSpeedSeries
            ]
        };

        optionsHistoricalWindSpeedChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalWindSpeed =
            new Chartist.Line('#HistoricalWindSpeedChart', dataHistoricalWindSpeedChart, optionsHistoricalWindSpeedChart);
        md.startAnimationForLineChart(analyticsHistory.historicalWindSpeed);

        /* ----------==========     Historical Wind Speed Chart initialization    ==========---------- */
        dataHistoricalWindGustChart = {
            labels: analyticsHistory.historicalWindGustLabel,
            series: [
                analyticsHistory.historicalWindGustSeries
            ]
        };

        optionsHistoricalWindGustChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalWindGust =
            new Chartist.Line('#HistoricalWindGustChart', dataHistoricalWindGustChart, optionsHistoricalWindGustChart);
        md.startAnimationForLineChart(analyticsHistory.historicalWindGust);

        /* ----------==========     Historical Raining Chart initialization    ==========---------- */
        dataHistoricalRainingChart = {
            labels: analyticsHistory.historicalRainingLabel,
            series: [
                analyticsHistory.historicalRainingSeries
            ]
        };

        optionsHistoricalRainingChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalRaining =
            new Chartist.Line('#HistoricalRainingChart', dataHistoricalRainingChart, optionsHistoricalRainingChart);
        md.startAnimationForLineChart(analyticsHistory.historicalRaining);

        /* ----------==========     Historical Daily Raining Chart initialization    ==========---------- */
        dataHistoricalDailyRainingChart = {
            labels: analyticsHistory.historicalDailyRainingLabel,
            series: [
                analyticsHistory.historicalDailyRainingSeries
            ]
        };

        optionsHistoricalDailyRainingChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalDailyRaining =
            new Chartist.Line('#HistoricalDailyRainingChart', dataHistoricalDailyRainingChart, optionsHistoricalDailyRainingChart);
        md.startAnimationForLineChart(analyticsHistory.historicalDailyRaining);

        /* ----------==========     Historical Weekly Raining Chart initialization    ==========---------- */
        dataHistoricalWeeklyRainingChart = {
            labels: analyticsHistory.historicalWeeklyRainingLabel,
            series: [
                analyticsHistory.historicalWeeklyRainingSeries
            ]
        };

        optionsHistoricalWeeklyRainingChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalWeeklyRaining =
            new Chartist.Line('#HistoricalWeeklyRainingChart', dataHistoricalWeeklyRainingChart, optionsHistoricalWeeklyRainingChart);
        md.startAnimationForLineChart(analyticsHistory.historicalWeeklyRaining);

        /* ----------==========     Historical Monthly Raining Chart initialization    ==========---------- */
        dataHistoricalMonthlyRainingChart = {
            labels: analyticsHistory.historicalMonthlyRainingLabel,
            series: [
                analyticsHistory.historicalMonthlyRainingSeries
            ]
        };

        optionsHistoricalMonthlyRainingChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalMonthlyRaining =
            new Chartist.Line('#HistoricalMonthlyRainingChart', dataHistoricalMonthlyRainingChart, optionsHistoricalMonthlyRainingChart);
        md.startAnimationForLineChart(analyticsHistory.historicalMonthlyRaining);

        /* ----------==========     Historical Yearly Raining Chart initialization    ==========---------- */
        dataHistoricalYearlyRainingChart = {
            labels: analyticsHistory.historicalYearlyRainingLabel,
            series: [
                analyticsHistory.historicalYearlyRainingSeries
            ]
        };

        optionsHistoricalYearlyRainingChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalYearlyRaining =
            new Chartist.Line('#HistoricalYearlyRainingChart', dataHistoricalYearlyRainingChart, optionsHistoricalYearlyRainingChart);
        md.startAnimationForLineChart(analyticsHistory.historicalYearlyRaining);

        /* ----------==========     Historical Solar Radiation Chart initialization    ==========---------- */
        dataHistoricalSolarRadiationChart = {
            labels: analyticsHistory.historicalSolarRadiationLabel,
            series: [
                analyticsHistory.historicalSolarRadiationSeries
            ]
        };

        optionsHistoricalSolarRadiationChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalSolarRadiation =
            new Chartist.Line('#HistoricalSolarRadiationChart', dataHistoricalSolarRadiationChart, optionsHistoricalSolarRadiationChart);
        md.startAnimationForLineChart(analyticsHistory.historicalSolarRadiation);

        /* ----------==========     Historical UV Chart initialization    ==========---------- */
        dataHistoricalUVChart = {
            labels: analyticsHistory.historicalUVLabel,
            series: [
                analyticsHistory.historicalUVSeries
            ]
        };

        optionsHistoricalUVChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalUV =
            new Chartist.Line('#HistoricalUltraVioletChart', dataHistoricalUVChart, optionsHistoricalUVChart);
        md.startAnimationForLineChart(analyticsHistory.historicalUV);

        /* ----------==========     Historical IndoorTemp Chart initialization    ==========---------- */
        dataHistoricalIndoorTempChart = {
            labels: analyticsHistory.historicalIndoorTempLabel,
            series: [
                analyticsHistory.historicalIndoorTempSeries
            ]
        };

        optionsHistoricalIndoorTempChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalIndoorTemp =
            new Chartist.Line('#HistoricalIndoorTempChart', dataHistoricalIndoorTempChart, optionsHistoricalIndoorTempChart);
        md.startAnimationForLineChart(analyticsHistory.historicalIndoorTemp);

        /* ----------==========     Historical Indoor Humid Chart initialization    ==========---------- */
        dataHistoricalIndoorHumidChart = {
            labels: analyticsHistory.historicalIndoorHumidLabel,
            series: [
                analyticsHistory.historicalIndoorHumidSeries
            ]
        };

        optionsHistoricalIndoorHumidChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalIndoorHumid =
            new Chartist.Line('#HistoricalIndoorHumidityChart', dataHistoricalIndoorHumidChart, optionsHistoricalIndoorHumidChart);
        md.startAnimationForLineChart(analyticsHistory.historicalIndoorHumid);

        /* ----------==========     Historical Baromin Chart initialization    ==========---------- */
        dataHistoricalBarominChart = {
            labels: analyticsHistory.historicalBarominLabel,
            series: [
                analyticsHistory.historicalBarominSeries
            ]
        };

        optionsHistoricalBarominChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalBaromin =
            new Chartist.Line('#HistoricalBarominChart', dataHistoricalBarominChart, optionsHistoricalBarominChart);
        md.startAnimationForLineChart(analyticsHistory.historicalBaromin);
        /* ----------==========     Historical Low Chart initialization    ==========---------- */
        dataHistoricalLowBattChart = {
            labels: analyticsHistory.historicalLowBattLabel,
            series: [
                analyticsHistory.historicalLowBattSeries
            ]
        };

        optionsHistoricalLowBattChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalLowBatt =
            new Chartist.Line('#HistoricalLowbatChart', dataHistoricalLowBattChart, optionsHistoricalLowBattChart);
        md.startAnimationForLineChart(analyticsHistory.historicalLowBatt);



    },

    timeDifference: function (current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        } else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    },

    redrawGraphs: function (events) {
        analyticsHistory.historicalTemp.update();
        analyticsHistory.historicalHumid.update();
        analyticsHistory.historicalWindDir.update();
        analyticsHistory.historicalDewptf.update();
        analyticsHistory.historicalUV.update();
        analyticsHistory.historicalWindChill.update();
        analyticsHistory.historicalWindGust.update();
        analyticsHistory.historicalWindSpeed.update();
        analyticsHistory.historicalSolarRadiation.update();
        analyticsHistory.historicalRaining.update();
        analyticsHistory.historicalDailyRaining.update();
        analyticsHistory.historicalWeeklyRaining.update();
        analyticsHistory.historicalMonthlyRaining.update();
        analyticsHistory.historicalYearlyRaining.update();
        analyticsHistory.historicalBaromin.update();
        analyticsHistory.historicalLowBatt.update();
        analyticsHistory.historicalIndoorHumid.update();
        analyticsHistory.historicalIndoorTemp.update();
        var sumTemp = 0;
        var sumHumid = 0;
        var sumWindDir=0;
        var sumDewpt=0;
        var sumWindSpeed=0;
        var sumWindGust=0;
        var sumWindChill=0;
        var sumRaingin=0;
        var sumDailyRaining=0;
        var sumWeeklyRaining=0;
        var sumMonthlyRaining=0;
        var sumYearlyRaining=0;
        var sumSolarRadiation=0;
        var sumUV=0;
        var sumIndoorHumid=0
        var sumIndoorTemp=0;
        var sumBaromin=0;
        var sumLowBatt=0;
        if (events.count > 0) {
            console.log('have records');
            var currentTime = new Date();
            analyticsHistory.historicalTempLabel.length = 0;
            analyticsHistory.historicalTempSeries.length = 0;
            analyticsHistory.historicalHumidLabel.length = 0;
            analyticsHistory.historicalHumidSeries.length = 0;
            analyticsHistory.historicalWindDirLabel.length = 0;
            analyticsHistory.historicalWindDirSeries.length = 0;
            analyticsHistory.historicalDewptfLabel.length = 0;
            analyticsHistory.historicalDewptfSeries.length = 0;
            analyticsHistory.historicalWindSpeedLabel.length = 0;
            analyticsHistory.historicalWindSpeedSeries.length = 0;
            analyticsHistory.historicalWindGustLabel.length = 0;
            analyticsHistory.historicalWindGustSeries.length = 0;
            analyticsHistory.historicalRainingLabel.length = 0;
            analyticsHistory.historicalRainingSeries.length = 0;
            analyticsHistory.historicalDailyRainingLabel.length = 0;
            analyticsHistory.historicalDailyRainingSeries.length = 0;
            analyticsHistory.historicalWeeklyRainingLabel.length = 0;
            analyticsHistory.historicalWeeklyRainingSeries.length = 0;
            analyticsHistory.historicalMonthlyRainingLabel.length = 0;
            analyticsHistory.historicalMonthlyRainingSeries.length = 0;
            analyticsHistory.historicalYearlyRainingLabel.length = 0;
            analyticsHistory.historicalYearlyRainingSeries.length = 0;
            analyticsHistory.historicalSolarRadiationLabel.length = 0;
            analyticsHistory.historicalSolarRadiationSeries.length = 0;
            analyticsHistory.historicalUVLabel.length = 0;
            analyticsHistory.historicalUVSeries.length = 0;
            analyticsHistory.historicalIndoorHumidLabel.length = 0;
            analyticsHistory.historicalIndoorHumidSeries.length = 0;
            analyticsHistory.historicalIndoorTempLabel.length = 0;
            analyticsHistory.historicalIndoorTempSeries.length = 0;
            analyticsHistory.historicalBarominLabel.length = 0;
            analyticsHistory.historicalBarominSeries.length = 0;
            analyticsHistory.historicalLowBattLabel.length = 0;
            analyticsHistory.historicalLowBattSeries.length = 0;



            for (var i = 0; i < events.records.length; i++) {

                var record= events.records[i];

                var sinceText = analyticsHistory.timeDifference(currentTime, new Date(record.timestamp));
                var dataPoint=record.values;
                var temperature = dataPoint.tempf;
                var humidity = dataPoint.humidity;
                var windDir=dataPoint.winddir;
                var dewptf=dataPoint.dewptf;
                var windchillf=dataPoint.windchillf;
                var windspeedmph=dataPoint.windspeedmph;
                var windgustmph=dataPoint.windgustmph;
                var rainin=dataPoint.rainin;
                var dailyrainin=dataPoint.dailyrainin;
                var weeklyrainin=dataPoint.weeklyrainin;
                var monthlyrainin=dataPoint.monthlyrainin;
                var yearlyrainin=dataPoint.yearlyrainin;
                var solarradiation=dataPoint.solarradiation;
                var UV=dataPoint.UV;
                var indoortempf=dataPoint.indoortempf;
                var indoorhumidity=dataPoint.indoorhumidity;
                var baromin=dataPoint.baromin;
                var lowbatt=dataPoint.lowbatt;

                if (temperature)
                    sumTemp += temperature;

                if (humidity)
                    sumHumid += humidity;

                if (windDir)
                    sumWindDir += windDir;

                if(dewptf)
                    sumDewpt += dewptf;

                if(windspeedmph)
                    sumWindSpeed +=windspeedmph;

                if(windchillf)
                    sumWindChill +=windchillf;

                if(windgustmph)
                    sumWindGust +=windgustmph;

                if(rainin)
                    sumRaingin +=rainin;

                if(dailyrainin)
                    sumDailyRaining +=dailyrainin;

                if(weeklyrainin)
                    sumWeeklyRaining +=weeklyrainin;

                if(monthlyrainin)
                    sumMonthlyRaining +=monthlyrainin;

                if(yearlyrainin)
                    sumYearlyRaining +=yearlyrainin;

                if(solarradiation)
                    sumSolarRadiation +=solarradiation;

                if(UV)
                    sumUV +=UV;

                if(indoorhumidity)
                    sumIndoorHumid+=indoorhumidity

                if(indoortempf)
                    sumIndoorTemp +=indoortempf;

                if(baromin)
                    sumBaromin+=baromin;

                if(lowbatt)
                    sumLowBatt+=lowbatt;

                if (i === events.records.length - 1) {
                    var avgHumid = sumHumid / events.records.length;
                    var avgTemp = sumTemp / events.records.length;
                    var avgWindDir = sumWindDir / events.records.length;
                    var avgDewpltf=sumDewpt/events.records.length;
                    var avgWindSpeed=sumWindSpeed/events.records.length;
                    var avgWindGust=sumWindGust/events.records.length;
                    var avgWindChill=sumWindChill/events.records.length;
                    var avgRaining=sumRaingin/events.records.length;
                    var avgDailyRaining=sumDailyRaining/events.records.length;
                    var avgWeeklyRaining=sumWeeklyRaining/events.records.length;
                    var avgMonthlyRaingin=sumMonthlyRaining/events.records.length;
                    var avgYearlyRaining=sumYearlyRaining/events.records.length;
                    var avgUV=sumUV/events.records.length;
                    var avgSolarRadiation=sumSolarRadiation/events.records.length;
                    var avgIndoorHumid=sumIndoorHumid/events.records.length;
                    var avgIndoorTemp=sumIndoorTemp/events.records.length;
                    var avgBaromin=sumBaromin/events.records.length;
                    var avgLowBatt=sumLowBatt/events.records.length;
                    $("#historicalTempAlert").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgTemp.toFixed(2) + " </span>average Temperature.");
                    $("#historicalHumidAlert").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgHumid.toFixed(2) + " </span> average Humidity.");
                     $("#historicalWindDirAlert").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgWindDir.toFixed(2) + " </span> average wind Direction.");
                    $("#historicaldewptfLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgDewpltf.toFixed(2) + " </span>average Dew point forecast.");
                     $("#historicalwindspeedLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgWindSpeed.toFixed(2) + " </span>average Wind Speed.");
                     $("#historicalwindgustLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgWindGust.toFixed(2) + " </span>average Wind Gust.");
                     $("#historicalwindchillfLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgWindChill.toFixed(2) + " </span>average Wind Chill.");
                     $("#historicalrainingLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgRaining.toFixed(2) + " </span>average Raining.");
                     $("#historicaldailyrainingLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgDailyRaining.toFixed(2) + " </span>average Daily Raining.");
                     $("#historicalweeklyrainingLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgWeeklyRaining.toFixed(2) + " </span>average Weekly Raining.");
                     $("#historicalmonthlyrainingLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgMonthlyRaingin.toFixed(2) + " </span>average Monthly Raining");
                     $("#historicalyearlyrainingLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgYearlyRaining.toFixed(2) + " </span>average Yearly Raining.");
                     $("#historicaluvLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgUV.toFixed(2) + " </span>average UV.");
                     $("#historicalsolarradiationLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgSolarRadiation.toFixed(2) + " </span>average Solar Radiation.");
                     $("#historicalindoorhumidityLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgIndoorHumid.toFixed(2) + " </span>average Indoor humidity.");
                     $("#historicalindoortempfLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgIndoorTemp.toFixed(2) + " </span>average Indoor temperature.");
                     $("#historicalbarominLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgBaromin.toFixed(2) + " </span>average Baromin.");
                     $("#historicallowbattLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgLowBatt.toFixed(2) + " </span>average Low Batt.");

                }

                analyticsHistory.historicalTempLabel.push(sinceText);
                analyticsHistory.historicalTempSeries.push(temperature);

                analyticsHistory.historicalHumidLabel.push(sinceText);
                analyticsHistory.historicalHumidSeries.push(humidity);

                analyticsHistory.historicalDewptfLabel.push(sinceText);
                analyticsHistory.historicalDewptfSeries.push(dewptf);

                analyticsHistory.historicalWindDirLabel.push(sinceText);
                analyticsHistory.historicalWindDirSeries.push(windDir);

                analyticsHistory.historicalWindChillLabel.push(sinceText);
                analyticsHistory.historicalWindChillSeries.push(windchillf);

                analyticsHistory.historicalWindSpeedLabel.push(sinceText);
                analyticsHistory.historicalWindSpeedSeries.push(windspeedmph);

                analyticsHistory.historicalWindGustLabel.push(sinceText);
                analyticsHistory.historicalWindGustSeries.push(windgustmph);

                analyticsHistory.historicalRainingLabel.push(sinceText);
                analyticsHistory.historicalRainingSeries.push(rainin);

                analyticsHistory.historicalDailyRainingLabel.push(sinceText);
                analyticsHistory.historicalDailyRainingSeries.push(dailyrainin);

                analyticsHistory.historicalWeeklyRainingLabel.push(sinceText);
                analyticsHistory.historicalWeeklyRainingSeries.push(weeklyrainin);

                analyticsHistory.historicalMonthlyRainingLabel.push(sinceText);
                analyticsHistory.historicalMonthlyRainingSeries.push(monthlyrainin);

                analyticsHistory.historicalYearlyRainingLabel.push(sinceText);
                analyticsHistory.historicalYearlyRainingSeries.push(yearlyrainin);

                analyticsHistory.historicalIndoorTempLabel.push(sinceText);
                analyticsHistory.historicalIndoorTempSeries.push(indoortempf);

                analyticsHistory.historicalIndoorHumidLabel.push(sinceText);
                analyticsHistory.historicalIndoorHumidSeries.push(indoorhumidity);

                analyticsHistory.historicalBarominLabel.push(sinceText);
                analyticsHistory.historicalBarominSeries.push(baromin);

                analyticsHistory.historicalLowBattLabel.push(sinceText);
                analyticsHistory.historicalLowBattSeries.push(lowbatt);

                analyticsHistory.historicalSolarRadiationLabel.push(sinceText);
                analyticsHistory.historicalSolarRadiationSeries.push(solarradiation);

                analyticsHistory.historicalUVLabel.push(sinceText);
                analyticsHistory.historicalUVSeries.push(UV);


                analyticsHistory.historicalTemp.update();
                analyticsHistory.historicalHumid.update();
                analyticsHistory.historicalWindDir.update();
                analyticsHistory.historicalDewptf.update();
                analyticsHistory.historicalUV.update();
                analyticsHistory.historicalWindChill.update();
                analyticsHistory.historicalWindGust.update();
                analyticsHistory.historicalWindSpeed.update();
                analyticsHistory.historicalSolarRadiation.update();
                analyticsHistory.historicalRaining.update();
                analyticsHistory.historicalDailyRaining.update();
                analyticsHistory.historicalWeeklyRaining.update();
                analyticsHistory.historicalMonthlyRaining.update();
                analyticsHistory.historicalYearlyRaining.update();
                analyticsHistory.historicalBaromin.update();
                analyticsHistory.historicalLowBatt.update();
                analyticsHistory.historicalIndoorHumid.update();
                analyticsHistory.historicalIndoorTemp.update();


            }
        } else {
            //if there is no records in this period display no records
            console.log('no records');
            analyticsHistory.historicalTempLabel = ['0s'];
            analyticsHistory.historicalTempSeries = [0];

            analyticsHistory.historicalTemp.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalHumid.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalWindDir.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalDewptf.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalUV.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalWindChill.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalWindGust.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalWindSpeed.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalSolarRadiation.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalRaining.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalDailyRaining.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalWeeklyRaining.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalMonthlyRaining.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalYearlyRaining.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalBaromin.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalLowBatt.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalIndoorHumid.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalIndoorTemp.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });

        }



    }

};