/*
方便的切换host文件v1.0
目前只支持mac
*/

var changeHost = require('./util/changeHost');

exports.main = function (argv) {
    debugger;	
	var command = argv[2];
	var name = argv[3];
	// -c 改变host文件 
	if (command == '-c') {
		changeHost.change(name);
	}
	// -a 增加host配置
	if (command == '-a') {
		var content = argv[4] || '';
		changeHost.add(name, content);
	}

};

//exports.main(process.argv);
