/*
方便的切换host文件v1.0.1
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
        if (term == '-l') {
            command = '-l';
        } 
    }
	if (command == '-c') {
		// -c 改变host文件 
		changeHost.change(name);
	} else if (command == '-a') {
	    // -a 增加host配置
		changeHost.add(name, content);
	} else {
		console.log('-c name: 更改host，name为名字；
			-a name content: 增加名字为name 内容为content的host；
			-l: 查看已经存在的host--好吧，待开发');
	}

};
