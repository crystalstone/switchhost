// change host
var fs = require('fs');
var path = require('path');
var process = require('child_process');
var hostPath = '/etc/hosts';
var confPath = '../hostConf/';
var localPath = confPath + 'localHost';
var local = path.resolve(__dirname, localPath);



exports.change = function (name) {

    var chose = path.resolve(__dirname, confPath + name + 'Host');

    // 合并local文件和path文件的内容
    fs.readFile(local, function (err, data0) {
        if (err) throw err;
        var localData = data0;
        fs.readFile(chose, function (err, data1) {
            if (err) throw err;
            var hostData = localData + data1;
            process.exec(
                'sudo chmod 777 ' + hostPath,
                function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    } else {
                        fs.writeFile(hostPath, hostData, function (err, data2) {
                            if (err) throw err;
                            console.log('host:' + name);
                        });
                    }
                }
            );
            
        }); 
    }); 

};

exports.add = function (name, content) {
    var addfile = path.resolve(__dirname, confPath + name + 'Host');

    fs.exists(addfile, function (exists) {
        if (exists) {
            console.log('aleardy exists:');
        } else {
            fs.readFile(local, function (err, data0) {
                if (err) throw err;
                var hostData = data0 + content;

                // 生成文件 
                fs.writeFile(addfile, data0, function (err, data1) {
                    if (err) throw err;
                    console.log('add success:' + name);
                    process.exec(
                    'sudo chmod 777 ' + hostPath,
                    function (error, stdout, stderr) {
                            if (error !== null) {
                                console.log('exec error: ' + error);
                            } else {
                                fs.writeFile(hostPath, hostData, function (err, data2) {
                                    if (err) throw err;
                                    console.log('host:' + name);
                                });
                            }
                        }
                    );
                                        
                }); 

            }); 

        }

    });

};