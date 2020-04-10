/*
*  格式化 秒 转 时分秒
* */
export function formatSecondToHour(mss){
    var hours = parseInt((mss / (60 * 60)));
    var minutes = parseInt((mss % (60 * 60)) / (60));
    var seconds = parseInt((mss % (60)));
    return hours+":"+minutes +":"+ seconds ;
}