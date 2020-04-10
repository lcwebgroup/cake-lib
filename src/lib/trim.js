//去除掉字符串前后空格
export function trim(str){
    return `${str}`.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');
}

