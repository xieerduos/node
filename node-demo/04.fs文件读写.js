var fs = require('fs');

// 读操作
// 
// 第一个参数是：读取目标文件路径
// 第二个参数是：读取的编码格式
// fs.readFile('./data.txt','utf-8',function(err,date){
//     if(err){
//         console.error(err);
//     }else{
//         console.log(date);
//     }
// })



// 写入操作，
// fs.writeFile(文件路径，写入内容，写入控制操作，回调函数)
// fs.writeFile(
//     './demo.txt',
//     '1234567',
//     {
//         // flag:'a'  // 表示拼接写入
//         flage:'w'    // 表示覆盖写入
//     },
//     function(err){
//     if(err){
//         console.error(err);
//     }else{
//         console.log('写入成功！');
//     }
// });



// 文件拷贝：先读取，后写入
// 如果不知道文件类型，千万不要指定文件格式。
fs.readFile('./a.png',function(err,date){
    if(err){
        console.error(err);
    }else{
        // 读取出来的数据写入
        fs.writeFile('./a副本.png',date,function(err){
            if(err){
                console.error(err);
                req.writeHead(404, {'Content-Type':'text/html'});
            }else{
                console.log('文件拷贝成功！')
            }
        });
    }
});