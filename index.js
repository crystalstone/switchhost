/*
方便的切换host文件v1.0
目前只支持mac
*/

var changeHost = require('./util/changeHost');

exports.main = function (argv) {
	var command = '';
	var name = '';
	var content = '';
    for (var i = 0; i < argv.length; i++) {
        var term = argv[i];
        if (term == '-c') {
            command = '-c';
            name = argv[i + 1];
        } 
        if (term == '-a') {
            command = '-a';
            name = argv[i + 1];
            content = argv[i + 2];
        } 
    }
	// -c 改变host文件 
	if (command == '-c') {
		changeHost.change(name);
	}
	// -a 增加host配置
	if (command == '-a') {
		changeHost.add(name, content);
	}

};

//exports.main(process.argv);
