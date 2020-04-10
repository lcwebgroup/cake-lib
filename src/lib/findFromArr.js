/*
* 从数组中查找某一项/值
* @param matchValue (匹配值)
* @param returnKey (为''则返回找到的对象，有值则返回对应的key值)
* */
export function findFromArr(arr,matchValue,key='id',returnKey=''){
    if(!(arr instanceof Array)) return null;
    
    const obj=arr?arr.find(item=>`${item[key]}`===`${matchValue}`):{};

    if(returnKey){
        return obj&&obj[returnKey]?obj[returnKey]:"";
    }else{
        return obj?obj:{};
    }
}