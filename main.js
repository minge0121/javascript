//自定义一个数组案例
var arr1 = [1,3,5,4,2,10,5,9,8,7,6];
//冒泡排序算法代码
function bubbleSort(array){
 //第一层循环，通俗说法就是找多少次最大值（最小值）
for(let i=0;i<array.length-1;i++){
    //第二层循环，通俗说法就是找一次最大值（最小值）
    //在第二次循环中，最大值位置向后交换就是从小到大排序。
    //结合第一层循环与第二层循环，第一次找最大，第二次找第二大。。。以此类推，就能得到整个数组所有元素的排序。
    for(let j=0;j<array.length-1;j++){
        // let min = Math.min(array[j],array[j+1]);
        // let max = Math.max(array[j],array[j+1]);
        // array[j] = min;
        // array[j+1] = max;
        //上述用Math.min/max的函数方法，比较繁琐。
        if(array[j] > array[j+1]){
            let temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
        }
    }
    }
return  array;
}

//以实例arr1进行运行
console.log(bubbleSort(arr1));
