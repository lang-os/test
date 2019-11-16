
//模拟数据
var obj = {
    name: 'wang',
    age: 20,
    address: {
        city: 'beijing',
        country: 'china',
    },
    key1: {
        key2:{
            key2_1: 'iii',
            key2_2: 'asgaiii',
            key3: {
                key4: 'i'
            }
        }
    }
}
//测试结果
console.log(test('i',obj));

// 功能函数
function test(data,obj) {
    var arr = []                    //创建一个数组用于接收数组元素
    var str = ''
    test1(data,obj,str,arr)
    return arr
}
function test1(data,obj,str,arr,) {
    var flag = false
    for(var i in obj){              //遍历对象
        if(typeof obj[i]==='string'&&obj[i].includes(data)) {   //如果对象值是字符串就直接用includes方法查询
            arr.push((str+'.'+i).slice(1))      //去除字符串首部的"."并插入数组
        }else if(typeof obj[i]==='number'&&obj[i]===data) {   //如果对象值是number就直接比较
            arr.push((str+'.'+i).slice(1))
        }else if(typeof obj[i]==='object') {   //如果对象值是对象就递归
            str += '.'+i         //存储路径
            flag=true
            test1(data,obj[i],str,arr)   //递归遍历深层对象
        }
        if(flag){
            str=''
        }
    }
}

