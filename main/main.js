var sequence = [6, 9, 15, -2, 92, 11];
module.exports = function main(sequence) {
    
    var sum = 0;
    var length = length;
    var max = Math.max.apply(Math, sequence);
    var min = Math.min.apply(Math, sequence);
for(var i = 0 ; i < sequence.length ; i ++)
{
    sum = sum + sequence[i];
}

var average = sum / length;
    
    console.log('o) 最小值 = ' + min);
    console.log('o) 最大值 = ' + max);
    console.log('o) 元素数量 = ' + length);
    console.log('o) 平均值 = ' + average);
};
    


