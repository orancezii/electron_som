// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var shell = require('shelljs');


var btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
   console.log("ss");


   //console.log(shell);
   //shell.echo(process.cwd());
  // var version = exec('node --version', {silent:false}).stdout;
   //console.log(shell.version);
 //  console.log(version);
   //exit(1);

   ///output:C:\InstallList.txt product get name,version

	shell.exec('wmic product get name,version', {async: true, silent: false}, function(code, stdout, stderr){
	  document.getElementById("result").innerHTML = stdout;
	});

});