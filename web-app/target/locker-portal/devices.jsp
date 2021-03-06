<%@include file="includes/authenticate.jsp" %>
<html>
<head>
    <title>Weather station List</title>

    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/material-icons.css" rel="stylesheet"/>
    <link href="css/material-dashboard.css" rel="stylesheet"/>
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/updates.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
          integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
          crossorigin=""/>
</head>
<body>
<div class="wrapper">
    <div class="sidebar" data-color="blue" data-image="images/sidebar-1.jpg">
        <div class="logo">
            <a href="#" class="simple-text">
                <strong>Weather</strong>Station
            </a>
        </div>
        <div class="sidebar-wrapper">
            <div class="form-group label-floating is-empty" id="hide"
                 style="margin-top: 30px;margin-right: 10px;margin-left: 10px ">
                <label class="control-label">Search Device</label>
                <input type="search" id="search" class="form-control">
                <span class="material-input"></span></div>
        </div>
    </div>
    <div class="main-panel">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-plain">
                            <div class="card-header" data-background-color="blue">
                                <div class="nav-tabs-wrapper">
                                    <ul class="nav nav-tabs" data-tabs="tabs">
                                        <li class="active" id="tableViewTab">
                                            <a href="#tableview" data-toggle="tab">
                                                <i class="material-icons">access_alarms</i> Table view
                                                <div class="ripple-container"></div>
                                            </a>
                                        </li>
                                        <li class="" id="mapViewTab">
                                            <a href="#mapView" data-toggle="tab">
                                                <i class="material-icons">map</i> Map view
                                                <div class="ripple-container"></div>
                                            </a>
                                        </li>
                                        <li class="dropdown pull-right">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                <i class="material-icons">person</i>
                                                <%--<span class="notification">5</span>--%>
                                                <p class="hidden-lg hidden-md">Profile</p>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="logout.jsp">Logout</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <h4 class="title">Weather stations enrolled</h4>
                                <p class="category">Below are the list of weather stations enrolled with the server</p>
                                <table style="width:100%">
                                    <tr>
                                        <th>
                                            <button class="btn btn-white" data-toggle="modal"
                                                    data-target="#newDeviceModal">Add
                                                Weather station
                                            </button>
                                        </th>
                                    </tr>
                                </table>

                                <%--Popup modal for adding new device--%>
                                <div class="modal fade" id="newDeviceModal" tabindex="-1" role="dialog"
                                     aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-hidden="true">&times
                                                </button>
                                                <h4 class="modal-title" id="myModalLabel" style="color:cornflowerblue;">
                                                    Enter
                                                    Weather station
                                                    Details</h4>
                                            </div>
                                            <form id="new-device-form" method="post">
                                                <div class="form-group" style="padding-left: 10%; padding-right: 10%;">
                                                    <input type="text" name="deviceId" id="deviceId" value=""
                                                           placeholder="Device ID"
                                                           class="form-control"/>
                                                </div>
                                                <div class="form-group" style="padding-left: 10%; padding-right: 10%;">
                                                    <input type="text" value="" placeholder="Device Name"
                                                           name="deviceName" id="deviceName"
                                                           class="form-control"/>
                                                </div>
                                                <div class="form-group" style="padding-left: 10%; padding-right: 10%;">
                                                    <input type="text" value="" placeholder="Device description"
                                                           name="deviceDesc" id="deviceDesc"
                                                           class="form-control"/>
                                                </div>
                                                <div id="inputMapId"></div>
                                            </form>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default btn-simple"
                                                        data-dismiss="modal">Close
                                                </button>
                                                <button type="button" class="btn btn-info btn-simple"
                                                        onclick="addNewDevice()">Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-content">
                                <div id="tableview" class="tab-pane fade in active">
                                    <div class="card-content table-responsive">
                                        <table class="table table-hover" id="devices-listing">
                                            <thead>
                                            <th>Device Name</th>
                                            <th>Temperature</th>
                                            <th>Humidity</th>
                                            <th>Owner</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colspan="6">Loading...</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div id="nav"></div>
                                    </div>
                                </div>
                                <div id="mapView" class="tab-pane fade  ">
                                    <div id="mapid" style="width: 100%; height:100%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="copyright pull-right">
                    &copy;
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    <a href="https://wso2.com/iot">WSO2 Inc.</a>
                </p>
            </div>
        </div>
    </div>
</div>

</body>
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/material.min.js" type="text/javascript"></script>
<script src="js/nouislider.min.js" type="text/javascript"></script>
<script src="js/bootstrap-datepicker.js" type="text/javascript"></script>
<script src="js/material-kit.js" type="text/javascript"></script>
<script src="js/bootstrap-notify.js" type="text/javascript"></script>
<script src="js/material-dashboard.js" type="text/javascript"></script>
<script type="text/javascript" src="js/libs/jquery.bootpag.js"></script>
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
        integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
        crossorigin=""></script>
<script type="text/javascript">
    //initialising map view
    var mymap = L.map('mapid').setView([7.65655, 80.77148], 8);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibGFzaGFuIiwiYSI6ImNqYmc3dGVybTFlZ3UyeXF3cG8yNGxsdzMifQ.n3QEq0-g5tVFmsQxn3JZ-A'
    }).addTo(mymap);

    //add devices to map as markers
    function addToMap(lat, long, devName, devId, temp, humidity, windDir) {
        var marker = L.marker([lat, long]).addTo(mymap);
        marker.bindPopup("<b id='weatherStation" + devId + "'>Device details</b><br>" + devName + "<br><table><tr><td><i class=\"tiny material-icons\" >wb_sunny</i></td><td>" + temp + "</td></tr><tr><td><i class=\"tiny material-icons\">opacity</i></td><td>" + humidity + "</td></tr><tr><td><i class=\"tiny material-icons\" >call_made</i></td><td>" + windDir + "</td></tr><div style='margin-right:5px '><tr><td><button class=\"btn-primary btn-block\"   onclick=\"window.location.href='details.jsp?id=" + devName + "'\"><i class=\"material-icons\">remove_red_eye</i> </button></td></tr></div></table>", {minWidth: 100});

    }

    //adding the legend
    var legend = L.control({position: 'topright'});
    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += '<table><tr><td><i class=\"tiny material-icons\" >wb_sunny</i></td><td>Temperature</td></tr><tr><td><i class=\"tiny material-icons\">opacity</i></td><td> Humidity </td></tr><tr><td><i class=\"tiny material-icons\" >call_made</i></td><td>Wind Direction</td></tr></table>';
        return div;
    };
    legend.addTo(mymap);

    //initialising input map
    var map = L.map('inputMapId').setView([7.65655, 80.77148], 7);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var popup = L.popup();
    var lat;
    var lng;

    // generates popup and assigns latitude and longitude values to variables
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Location with coordinates " + e.latlng.toString() + " is selected")
            .openOn(map);
        lat = e.latlng.lat;
        lng = e.latlng.lng;

        latValue(lat);
        lngValue(lng);

    }

    // returns value of latitude
    function latValue(lat) {
        console.log(lat);
        return lat;
    }

    // returns value of longitude
    function lngValue(lng) {
        console.log(lng);
        return lng;
    }

    map.on('click', onMapClick);


    var devices = [];
    var rows = [];

    $(document).ready(function () {
        getAllDevices();
    });

    //fixed the issue with map not rendering in tabbed view and pop up model
    $("a[href='#mapView']").on('shown.bs.tab', function (e) {
        mymap.invalidateSize();
        $('#hide').hide();
    });

    $('#newDeviceModal').on('show.bs.modal', function () {
        setTimeout(function () {
            map.invalidateSize();
        }, 200);
    });
    $("a[href='#tableview']").on('shown.bs.tab', function (e) {
        $('#hide').show();
    });


    function getDevice(dev, index, lat, long) {
        var devicesListing = $('#devices-listing');
        var lastKnownSuccess = function (data) {

            var record = JSON.parse(data).records[0];

            var temperature = null;
            var humidity = null;
            var windDir = null;

            if (record) {
                temperature = record.values.tempf;
                humidity = record.values.humidity;
                windDir = record.values.winddir;

            }

            var myRow = "<tr><a href='#" + dev.deviceIdentifier + "'><td>" + dev.name
                + "</td><td>"
                + (temperature) + "</td><td>" + (humidity) + "</td><td>"
                + dev.enrolmentInfo.owner + "</td><td>"
                + "<button class=\"btn btn-primary btn-fab btn-fab-mini btn-round\"  style='color: #1b6d85' onclick=\"window.location.href='details.jsp?id=" + dev.deviceIdentifier + "'\">"
                + "<i class=\"material-icons\">remove_red_eye</i>"
                + "</button></td>"
                + "</a></tr>";
            rows.push(myRow);
            devicesListing.find('tbody').append(myRow);

            //to fix the issue of paginate when the page loads initially
            $('#devices-listing tbody tr').slice(10, rows.length + 1).hide();

            //To fix the issue of adding null or undefined values to map
            if ((lat == null || lat === "undefined" ) || (long == null || lat === "undefined")) {
                console.log('undefined lat' + lat + ' long ' + long);
            }
            else {
                addToMap(lat, long, dev.deviceIdentifier, dev.id, temperature, humidity, windDir);
            }

            var newIndex = index + 1;
            if (devices.length > newIndex) {
                getDevice(devices[newIndex], newIndex, devices[newIndex].properties[0].value, devices[newIndex].properties[1].value);
            }

            //function to implement the regex search bar
            var $rows = $('#devices-listing tbody tr');
            $('#search').keyup(function () {
                $('#nav').hide();
                var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
                    reg = RegExp(val, 'i'),
                    text;

                $rows.show().filter(function () {
                    text = $(this).text().replace(/\s+/g, ' ');
                    return !reg.test(text);
                    $('#devices-listing tbody tr').slice(10, rows.length + 1).hide();

                }).hide();
                //check if all the inputs have been erased if so realod the page
                if (this.value.length === 0) {
                    location.reload();
                }

            });
        };
        $.ajax({
            type: "POST",
            url: "invoker/execute",
            data: {
                "uri": "/events/last-known/weatherstation/" + devices[index].deviceIdentifier,
                "method": "get"
            },
            success: lastKnownSuccess

        });
    }

    var deviceCount;

    function getAllDevices() {
        var success = function (data) {
            devices = JSON.parse(data).devices;
            deviceCount = JSON.parse(data).count;//find the number of devices

            //used bootpag library to implement the pagination
            $('#nav').bootpag({
                total: Math.ceil(deviceCount / 10),
                page: 1,
                maxVisible: 6,
                href: "#pro-page-{{number}}",
                leaps: false,
                next: 'next',
                prev: null
            }).on('page', function (event, num) {
                $('#devices-listing tbody tr').hide();
                $('#devices-listing tbody tr').slice((num - 1) * 10, (num * 10)).show();
            });

            var devicesListing = $('#devices-listing');
            if (devices && devices.length > 0) {
                devicesListing.find('tbody').empty();
                getDevice(devices[14], 14, devices[14].properties[0].value, devices[14].properties[1].value);
            } else {
                var myRow = "<tr><td colspan=\"6\" style=\"padding-top: 30px;\"><strong>No Devices Found</strong></td></tr>";
                devicesListing.find('tbody').replaceWith(myRow);
            }
        };
        $.ajax({
            type: "POST",
            url: "invoker/execute",
            data: {"uri": "/devices/?type=weatherstation&requireDeviceInfo=true&offset=0&limit=100", "method": "get"},
            success: success
        });
    }

    function addNewDevice() {
        var deviceId = $("#deviceId").val();
        var deviceName = $("#deviceName").val();
        var deviceDesc = $("#deviceDesc").val();

        var success = function (data) {
            var config = {};
            config.deviceType = "weatherstation";
            config.deviceName = deviceName;
            config.deviceId = deviceId;

            var configSuccess = function (data) {
                var appResult = JSON.parse(data);

                config.clientId = appResult.clientId;
                config.clientSecret = appResult.clientSecret;
                config.clientSecret = appResult.clientSecret;
                config.accessToken = appResult.accessToken;
                config.refreshToken = appResult.refreshToken;
                config.scope = appResult.scope;
                //downlaod a json file
                var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
                    JSON.stringify(config, null, 4));
                var dlAnchorElem = document.createElement('a');
                dlAnchorElem.setAttribute("href", dataStr);
                dlAnchorElem.setAttribute("download", deviceId + ".json");
                dlAnchorElem.setAttribute('visibility', 'hidden');
                dlAnchorElem.setAttribute('display', 'none');
                document.body.appendChild(dlAnchorElem);
                dlAnchorElem.click();
                $('#newDeviceModal').modal('hide');//hide popup after adding a device
                location.reload();//reload page after adding device
            };

            $.ajax({
                type: "GET",
                url: "config?deviceId=" + deviceId,
                success: configSuccess
            });
        };
        console.log('lat' + lat + 'long' + lng);
        var payload = "{\n"
            + "\"name\": \"" + deviceName + "\",\n"
            + "\"deviceIdentifier\": \"" + deviceId + "\",\n"
            + "\"description\": \"" + deviceDesc + "\",\n"
            + "\"type\": \"weatherstation\",\n"
            + "\"enrolmentInfo\": {\"status\": \"ACTIVE\", \"ownership\": \"BYOD\"},\n"
            + "\"properties\": [{name: \"latitude\", value:\"" + lat + "\"}, {name: \"longitude\", value: \"" + lng + "\"}]\n"
            + "}";
        $.ajax({
            type: "POST",
            url: "invoker/execute",
            data: {"uri": "/device/agent/enroll", "method": "post", "payload": payload},
            success: success
        });
    }
</script>
</html>
