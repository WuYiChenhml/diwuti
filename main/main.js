
module.exports = function main() {
    var sequence = [6, 9, 15, -2, 92, 11];
    var sum = 0;
    var length = sequence.length;
    var max = Math.max.apply(Math, sequence);
    var min = Math.min.apply(Math, sequence);
for(var i = 0 ; i < sequence.length ; i ++)
{
    sum = sum + sequence[i];
}

var average = sum / length;
    average = average.toFixed(2);
    console.log('o) 最小值 = ' + min +'/n' + 'o) 最大值 = ' + max + '/n' + 'o) 元素数量 = ' + length + '/n' + 'o) 平均值 = ' + average);
};
    


