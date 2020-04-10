/*
*  保留bit位小数(不足补 0) 
*  @returns {string}
* */
export function pointTo(num,bit=2){
    var newNum = isNaN(Number(num)) ? 0 : Number(num)
    newNum = newNum.toFixed(bit);
    newNum = newNum.toString();
    var point = newNum.indexOf('.');  
    if (point < 0) {    
        point = newNum.length;    
        newNum += '.';    
    }    
    // 不足bit位小数补0
    while (newNum.length <= point + bit) {    
        newNum += '0';    
    }

    return newNum; //string
}