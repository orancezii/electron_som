// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var regedit = require('regedit')


var btn = document.querySelector('#scan_sw');
btn.addEventListener('click', function () {


// 32 bit
    regedit.list(['HKLM\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall'])
            .on('data', function (entry) {
                document.getElementById("replace_button").innerHTML = '<button type="button" class="btn btn-info btn-lg" id="scan_sw"><i class="fa fa-search"></i> scan</button>';
                document.getElementById("replace_button").innerHTML += '<button type="button" class="btn btn-info btn-lg" id="compare_sw"><i class="fa fa-exchange"></i> Compare</button>';
//                document.getElementById("replace_button").innerHTML = '<table id="datatable" class="table table-striped table-bordered"><thead><tr><th>Name</th><th>Version</th></tr></thead><tbody>';

                var theTable = document.createElement("table");
                theTable.id = 'datatable';
                theTable.className = "table table-striped table-bordered dt-responsive nowrap";

                th = document.createElement('thead');
                tr = document.createElement('tr');
                th.appendChild(tr);
                td = document.createElement('td');
                td.appendChild(document.createTextNode("Name"));
                td2 = document.createElement('td');
                td2.appendChild(document.createTextNode("Version"));
                td3 = document.createElement('td');
                td3.appendChild(document.createTextNode("bit"));

                tr.appendChild(td);
                tr.appendChild(td2);
                tr.appendChild(td3);
                theTable.appendChild(th);


                th = document.createElement('tbody');
//                var html = '<table id="datatable" class="table table-striped table-bordered"><thead><tr><th>Name</th><th>Version</th></tr></thead><tbody>';



                //for loop
                entry.data.keys.forEach(function (folder_name) {
                    //console.log(folder_name+"|");

                    regedit.list(['HKLM\\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\' + folder_name])
                            .on('data', function (entry2) {

                                var displayName = entry2.data.values.DisplayName.value;
                                var displayVersion = entry2.data.values.DisplayVersion.value;


//                                document.getElementById("echo_regedit").innerHTML += (displayName + " , " + displayVersion);

                                tr = document.createElement('tr');
                                th.appendChild(tr);
                                td = document.createElement('td');
                                td.appendChild(document.createTextNode(displayName));
                                td2 = document.createElement('td');
                                td2.appendChild(document.createTextNode(displayVersion));
                                td3 = document.createElement('td');
                                td3.appendChild(document.createTextNode('32 bit'));

                                tr.appendChild(td);
                                tr.appendChild(td2);
                                tr.appendChild(td3);


//                                console.log(entry2.data.values.DisplayName.value);
                            })


                    theTable.appendChild(th);
                });

                document.getElementById('replace_button').appendChild(theTable);
            })





    //64 bit
    regedit.list(['HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall'])
            .on('data', function (entry) {
                document.getElementById("replace_button").innerHTML = '<button type="button" class="btn btn-info btn-lg" id="scan_sw"><i class="fa fa-search"></i> scan</button>';
                document.getElementById("replace_button").innerHTML += '<button type="button" class="btn btn-info btn-lg" id="compare_sw"><i class="fa fa-exchange"></i> Compare</button>';
//                document.getElementById("replace_button").innerHTML = '<table id="datatable" class="table table-striped table-bordered"><thead><tr><th>Name</th><th>Version</th></tr></thead><tbody>';

                var theTable = document.createElement("table");
                theTable.id = 'datatable';
                theTable.className = "table table-striped table-bordered dt-responsive nowrap";

                th = document.createElement('thead');
                tr = document.createElement('tr');
                th.appendChild(tr);
                td = document.createElement('td');
                td.appendChild(document.createTextNode("Name"));
                td2 = document.createElement('td');
                td2.appendChild(document.createTextNode("Version"));
                td3 = document.createElement('td');
                td3.appendChild(document.createTextNode("bit"));

                tr.appendChild(td);
                tr.appendChild(td2);
                tr.appendChild(td3);
                theTable.appendChild(th);


                th = document.createElement('tbody');
//                var html = '<table id="datatable" class="table table-striped table-bordered"><thead><tr><th>Name</th><th>Version</th></tr></thead><tbody>';



                //for loop
                entry.data.keys.forEach(function (folder_name) {
                    //console.log(folder_name+"|");

                    regedit.list(['HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\' + folder_name])
                            .on('data', function (entry2) {

                                var displayName = entry2.data.values.DisplayName.value;
                                var displayVersion = entry2.data.values.DisplayVersion.value;


//                                document.getElementById("echo_regedit").innerHTML += (displayName + " , " + displayVersion);

                                tr = document.createElement('tr');
                                th.appendChild(tr);
                                td = document.createElement('td');
                                td.appendChild(document.createTextNode(displayName));
                                td2 = document.createElement('td');
                                td2.appendChild(document.createTextNode(displayVersion));
                                td3 = document.createElement('td');
                                td3.appendChild(document.createTextNode('64 bit'));

                                tr.appendChild(td);
                                tr.appendChild(td2);
                                tr.appendChild(td3);

//                                console.log(entry2.data.values.DisplayName.value);
                            })


                    theTable.appendChild(th);
                });

                document.getElementById('replace_button').appendChild(theTable);
            })










});
