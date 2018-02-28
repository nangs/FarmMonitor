/*
* Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/

analyticsHistory= {

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
    historicalTractorSpeedLabel: ['0s'],
    historicalTractorSpeedSeries: [0],
    historicalWindGustLabel: ['0s'],
    historicalWindGustSeries: [0],
    historicalRainingLabel: ['0s'],
    historicalRainingSeries: [0],
    historicalFuelUsageLabel: ['0s'],
    historicalFuelUsageSeries: [0],
    historicalLoadWeightLabel: ['0s'],
    historicalLoadWeightSeries: [0],
    historicalMonthlyRainingLabel: ['0s'],
    historicalMonthlyRainingSeries: [0],
    historicalYearlyRainingLabel: ['0s'],
    historicalYearlyRainingSeries: [0],
    historicalSoilMoistureLabel: ['0s'],
    historicalSoilMoistureSeries: [0],
    historicalUVLabel: ['0s'],
    historicalUVSeries: [0],
    historicalIndoorTempLabel: ['0s'],
    historicalIndoorTempSeries: [0],
    historicalIndoorHumidLabel: ['0s'],
    historicalIndoorHumidSeries: [0],
    historicalIlluminationLabel: ['0s'],
    historicalIlluminationSeries: [0],


    historicalTemp: {},
    historicalIndoorTemp :{},
    historicalHumid: {},
    historicalWindDir: {},
    historicalDewptf: {},
    historicalWindChill : {},
    historicalTractorSpeed:{},
    historicalWindGust :{},
    historicalRaining :{},
    historicalFuelUsage :{},
    historicalLoadWeight :{},
    historicalMonthlyRaining :{},
    historicalYearlyRaining :{},
    historicalSoilMoisture :{},
    historicalUV :{},
    historicalIndoorHumid :{},
    historicalIllumination :{},


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
            low: -50,
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
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
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


        /* ----------==========     Historical Dew point Chart initialization    ==========---------- */
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
            low: -50,
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

        /* ----------==========     Historical tractor speed Chart initialization    ==========---------- */
        dataHistoricalTractorSpeedChart = {
            labels: analyticsHistory.historicalTractorSpeedLabel,
            series: [
                analyticsHistory.historicalTractorSpeedSeries
            ]
        };

        optionsHistoricalTractorSpeedChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalTractorSpeed =
            new Chartist.Line('#HistoricalTractorSpeedChart', dataHistoricalTractorSpeedChart, optionsHistoricalTractorSpeedChart);
        md.startAnimationForLineChart(analyticsHistory.historicalTractorSpeed);

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
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
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

        /* ----------==========     Historical fuel usage Chart initialization    ==========---------- */
        dataHistoricalFuelUsageChart = {
            labels: analyticsHistory.historicalFuelUsageLabel,
            series: [
                analyticsHistory.historicalFuelUsageSeries
            ]
        };

        optionsHistoricalFuelUsageChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalFuelUsage =
            new Chartist.Line('#HistoricalFuelUsageChart', dataHistoricalFuelUsageChart, optionsHistoricalFuelUsageChart);
        md.startAnimationForLineChart(analyticsHistory.historicalFuelUsage);

        /* ----------==========     Historical load weight Chart initialization    ==========---------- */
        dataHistoricalLoadWeightChart = {
            labels: analyticsHistory.historicalLoadWeightLabel,
            series: [
                analyticsHistory.historicalLoadWeightSeries
            ]
        };

        optionsHistoricalLoadWeightChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalLoadWeight =
            new Chartist.Line('#HistoricalLoadWeightChart', dataHistoricalLoadWeightChart, optionsHistoricalLoadWeightChart);
        md.startAnimationForLineChart(analyticsHistory.historicalLoadWeight);

        /* ----------==========     Historical Soil moisture Chart initialization    ==========---------- */
        dataHistoricalSoilMoistureChart = {
            labels: analyticsHistory.historicalSoilMoistureLabel,
            series: [
                analyticsHistory.historicalSoilMoistureSeries
            ]
        };

        optionsHistoricalSoilMoistureChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalSoilMoisture =
            new Chartist.Line('#HistoricalSoilMoistureChart', dataHistoricalSoilMoistureChart, optionsHistoricalSoilMoistureChart);
        md.startAnimationForLineChart(analyticsHistory.historicalSoilMoisture);

        /* ----------==========     Historical Illumination Chart initialization    ==========---------- */
        dataHistoricalIlluminationChart = {
            labels: analyticsHistory.historicalIlluminationLabel,
            series: [
                analyticsHistory.historicalIlluminationSeries
            ]
        };

        optionsHistoricalIlluminationChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better
                      // look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        };

        analyticsHistory.historicalIllumination =
            new Chartist.Line('#HistoricalIlluminationChart', dataHistoricalIlluminationChart, optionsHistoricalIlluminationChart);
        md.startAnimationForLineChart(analyticsHistory.historicalIllumination);




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
            return  Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
            return  Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
            return  Math.round(elapsed / msPerYear) + ' years ago';
        }
    },

    updateGraphs: function () {
        analyticsHistory.historicalTemp.update();
        analyticsHistory.historicalHumid.update();
        analyticsHistory.historicalDewptf.update();
        analyticsHistory.historicalTractorSpeed.update();
        analyticsHistory.historicalSoilMoisture.update();
        analyticsHistory.historicalRaining.update();
        analyticsHistory.historicalFuelUsage.update();
        analyticsHistory.historicalLoadWeight.update();
        analyticsHistory.historicalIllumination.update();
    },

    redrawGraphs: function (events) {

        var sumTemp = 0;
        var sumHumid = 0;
        var sumDewpt=0;
        var sumTractorSpeed=0;
        var sumRaingin=0;
        var sumFuelUsage=0;
        var sumLoadWeight=0;
        var sumSoilMoisture=0;
        var sumIllumination=0;

        if (events.count > 0) {

            var currentTime = new Date();
            analyticsHistory.historicalTempLabel.length = 0;
            analyticsHistory.historicalTempSeries.length = 0;
            analyticsHistory.historicalHumidLabel.length = 0;
            analyticsHistory.historicalHumidSeries.length = 0;
            analyticsHistory.historicalDewptfLabel.length = 0;
            analyticsHistory.historicalDewptfSeries.length = 0;
            analyticsHistory.historicalTractorSpeedLabel.length = 0;
            analyticsHistory.historicalTractorSpeedSeries.length = 0;
            analyticsHistory.historicalRainingLabel.length = 0;
            analyticsHistory.historicalRainingSeries.length = 0;
            analyticsHistory.historicalFuelUsageLabel.length = 0;
            analyticsHistory.historicalFuelUsageSeries.length = 0;
            analyticsHistory.historicalLoadWeightLabel.length = 0;
            analyticsHistory.historicalLoadWeightSeries.length = 0;
            analyticsHistory.historicalSoilMoistureLabel.length = 0;
            analyticsHistory.historicalSoilMoistureSeries.length = 0;
            analyticsHistory.historicalIlluminationLabel.length = 0;
            analyticsHistory.historicalIlluminationSeries.length = 0;

            for (var i = 0; i < events.records.length; i++) {
                var record= events.records[i];

                var sinceText = analyticsHistory.timeDifference(currentTime, new Date(record.timestamp));
                var dataPoint=record.values;
                var temperature = dataPoint.temperature;
                var humidity = dataPoint.humidity;
                var dewptf=dataPoint.dewpoint;
                var TractorSpeedmph=dataPoint.tractorSpeed;
                var rainin=dataPoint.raining;
                var SoilMoisture=dataPoint.soilMoisture;
                var Illumination=dataPoint.Illumination;
                var loadWeight=dataPoint.tractorLoadWeight;
                var fuelusage=dataPoint.fuelUsage;

                if (temperature)
                    sumTemp += temperature;

                if (humidity)
                    sumHumid += humidity;
                if(dewptf)
                    sumDewpt += dewptf;

                if(TractorSpeedmph)
                    sumTractorSpeed +=TractorSpeedmph;

                if(rainin)
                    sumRaingin +=rainin;

                if(SoilMoisture)
                    sumSoilMoisture +=SoilMoisture;

                if(Illumination)
                    sumIllumination+=Illumination;

                if(loadWeight)
                    sumLoadWeight+=loadWeight;

                if(fuelusage)
                    sumFuelUsage+=fuelusage;

                if (i === events.records.length - 1) {
                    var avgHumid = sumHumid / events.records.length;
                    var avgTemp = sumTemp / events.records.length;
                    var avgDewpltf=sumDewpt/events.records.length;
                    var avgTractorSpeed=sumTractorSpeed/events.records.length;
                    var avgRaining=sumRaingin/events.records.length;
                    var avgFuelUsage=sumFuelUsage/events.records.length;
                    var avgLoadWeight=sumLoadWeight/events.records.length;
                    var avgSoilMoisture=sumSoilMoisture/events.records.length;
                    var avgIllumination=sumIllumination/events.records.length;

                    $("#historicalTempAlert").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgTemp.toFixed(2) + " </span>average Temperature.");
                    $("#historicalHumidAlert").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgHumid.toFixed(2) + " </span> average Humidity.");
                    $("#historicaldewptfLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgDewpltf.toFixed(2) + " </span>average Dew point forecast.");
                     $("#historicaltractorSpeedLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgTractorSpeed.toFixed(2) + " </span>average Wind Speed.");
                     $("#historicalrainingLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgRaining.toFixed(2) + " </span>average Raining.");
                     $("#historicalFuelUsageLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgFuelUsage.toFixed(2) + " </span>average Daily Raining.");
                     $("#historicalTractorLoadLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgLoadWeight.toFixed(2) + " </span>average Weekly Raining.");
                     $("#historicalsoilMoistureLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgSoilMoisture.toFixed(2) + " </span>average Solar Radiation.");
                     $("#historicalilluminationLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgIllumination.toFixed(2) + " </span>average Illumination.");


                }

                analyticsHistory.historicalTempLabel.push(sinceText);
                analyticsHistory.historicalTempSeries.push(temperature);

                analyticsHistory.historicalHumidLabel.push(sinceText);
                analyticsHistory.historicalHumidSeries.push(humidity);

                analyticsHistory.historicalDewptfLabel.push(sinceText);
                analyticsHistory.historicalDewptfSeries.push(dewptf);

                analyticsHistory.historicalTractorSpeedLabel.push(sinceText);
                analyticsHistory.historicalTractorSpeedSeries.push(TractorSpeedmph);

                analyticsHistory.historicalRainingLabel.push(sinceText);
                analyticsHistory.historicalRainingSeries.push(rainin);

                analyticsHistory.historicalIlluminationLabel.push(sinceText);
                analyticsHistory.historicalIlluminationSeries.push(Illumination);

                analyticsHistory.historicalSoilMoistureLabel.push(sinceText);
                analyticsHistory.historicalSoilMoistureSeries.push(SoilMoisture);

                analyticsHistory.historicalFuelUsageLabel.push(sinceText);
                analyticsHistory.historicalFuelUsageSeries.push(fuelusage);

                analyticsHistory.historicalLoadWeightLabel.push(sinceText);
                analyticsHistory.historicalLoadWeightSeries.push(loadWeight);



                analyticsHistory.historicalTemp.update();
                analyticsHistory.historicalHumid.update();
                analyticsHistory.historicalDewptf.update();
                analyticsHistory.historicalTractorSpeed.update();
                analyticsHistory.historicalSoilMoisture.update();
                analyticsHistory.historicalRaining.update();
                analyticsHistory.historicalFuelUsage.update();
                analyticsHistory.historicalLoadWeight.update();
                analyticsHistory.historicalIllumination.update();


            }
        } else {
            //if there is no records in this period display no records
                analyticsHistory.historicalTempLabel= ['0s'],
                analyticsHistory.historicalTempSeries= [0],
                analyticsHistory.historicalHumidLabel= ['0s'],
                analyticsHistory.historicalHumidSeries= [0],
                analyticsHistory.historicalWindDirLabel= ['0s'],
                analyticsHistory.historicalWindDirSeries= [0],
                analyticsHistory.historicalDewptfLabel= ['0s'],
                analyticsHistory.historicalDewptfSeries= [0],
                analyticsHistory.historicalWindChillLabel= ['0s'],
                analyticsHistory.historicalWindChillSeries= [0],
                analyticsHistory.historicalTractorSpeedLabel= ['0s'],
                analyticsHistory.historicalTractorSpeedSeries= [0],
                analyticsHistory.historicalWindGustLabel= ['0s'],
                analyticsHistory.historicalWindGustSeries= [0],
                analyticsHistory.historicalRainingLabel= ['0s'],
                analyticsHistory.historicalRainingSeries= [0],
                analyticsHistory.historicalFuelUsageLabel= ['0s'],
                analyticsHistory.historicalFuelUsageSeries= [0],
                analyticsHistory.historicalLoadWeightLabel= ['0s'],
                analyticsHistory.historicalLoadWeightSeries= [0],
                analyticsHistory.historicalMonthlyRainingLabel= ['0s'],
                analyticsHistory.historicalMonthlyRainingSeries= [0],
                analyticsHistory.historicalYearlyRainingLabel= ['0s'],
                analyticsHistory.historicalYearlyRainingSeries= [0],
                analyticsHistory.historicalSoilMoistureLabel= ['0s'],
                analyticsHistory.historicalSoilMoistureSeries= [0],
                analyticsHistory.historicalUVLabel= ['0s'],
                analyticsHistory.historicalUVSeries= [0],
                analyticsHistory.historicalIndoorTempLabel= ['0s'],
                analyticsHistory.historicalIndoorTempSeries= [0],
                analyticsHistory.historicalIndoorHumidLabel= ['0s'],
                analyticsHistory.historicalIndoorHumidSeries= [0],
                analyticsHistory.historicalIlluminationLabel= ['0s'],
                analyticsHistory.historicalIlluminationSeries= [0],

            analyticsHistory.historicalTemp.update({
                labels: analyticsHistory.historicalTempLabel,
                series: [
                    analyticsHistory.historicalTempSeries
                ]
            });
            analyticsHistory.historicalHumid.update({
                labels: analyticsHistory.historicalHumidLabel,
                series: [
                    analyticsHistory.historicalHumidSeries
                ]
            });
            analyticsHistory.historicalDewptf.update({
                labels: analyticsHistory.historicalDewptfLabel,
                series: [
                    analyticsHistory.historicalDewptfSeries
                ]
            });
            analyticsHistory.historicalTractorSpeed.update({
                labels: analyticsHistory.historicalTractorSpeedLabel,
                series: [
                    analyticsHistory.historicalTractorSpeedSeries
                ]
            });
            analyticsHistory.historicalSoilMoisture.update({
                labels: analyticsHistory.historicalSoilMoistureLabel,
                series: [
                    analyticsHistory.historicalSoilMoistureSeries
                ]
            });
            analyticsHistory.historicalRaining.update({
                labels: analyticsHistory.historicalRainingLabel,
                series: [
                    analyticsHistory.historicalRainingSeries
                ]
            });
            analyticsHistory.historicalFuelUsage.update({
                labels: analyticsHistory.historicalFuelUsageLabel,
                series: [
                    analyticsHistory.historicalFuelUsageSeries
                ]
            });
            analyticsHistory.historicalLoadWeight.update({
                labels: analyticsHistory.historicalLoadWeightLabel,
                series: [
                    analyticsHistory.historicalLoadWeightSeries
                ]
            });
            analyticsHistory.historicalIllumination.update({
                labels: analyticsHistory.historicalIlluminationLabel,
                series: [
                    analyticsHistory.historicalIlluminationSeries
                ]
            });



        }


    },



};