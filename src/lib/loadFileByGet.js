/**
 * 文件下载（通过 Get接口）
 * url：下载地址
 * paramsObj：请求参数
 * needAutoClose：是否需要自动关闭下载窗口（true）
 * closeTime：关闭下载窗口的时间
 */
export function loadFileByGet(url,paramsObj,needAutoClose=true,closeTime=3000) {
    let str = "";
    if (paramsObj === null) {
        str = "";
    } else {
        for (let key in paramsObj) {
            str+=`${key}=${paramsObj[key]}&`;
        }
        //去掉最后一个&
        str=str.slice(0,-1);
    }

    const w = window.open("about:blank");
    w.window.location.href = `${url}?${str}`;

    
    if(needAutoClose){
        //默认3s后关闭下载窗口
        const timer=setTimeout(function () {
            w.close();
            clearTimeout(timer);
        },closeTime);
    }
}