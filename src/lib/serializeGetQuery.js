/*
* 由对象组装为Get参数
* @param query (组装对象)
* */
export function serializeGetQuery(query){
    const queryStr = Object.keys(query)
        .reduce((ary, key) => {
            if (query[key]) {
                ary.push(encodeURIComponent(key) + '=' + encodeURIComponent(query[key]));
            }
            return ary;
        }, [])
        .join('&');
    return queryStr;
}