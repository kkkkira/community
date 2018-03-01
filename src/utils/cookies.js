export function setCookie({name, value, days = 30}){
    let ExpireDate = new Date ();
    ExpireDate.setTime(ExpireDate.getTime() + (days * 24 * 3600 * 1000));
    document.cookie = name + "=" + encodeURIComponent(value) +
        ((days == null) ? "" : ";expires=" + ExpireDate.toGMTString() + ";path='/'");
}

export function getCookie(name){
    let begin, end;
    if (document.cookie.length > 0)
    {
        begin = document.cookie.indexOf(name+"=");
        if (begin != -1)
        {
            begin += name.length+1;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) end = document.cookie.length;
            return decodeURIComponent(document.cookie.substring(begin, end));
        }
    }

    return null;
}
export function delCookie(name){
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval= getCookie(name);
    if(cval!=null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ';path=/;';
    }
}

export function optionCookies(cookiesObj={}, type='get') {
    let {keys} = Object;
    
    for(let key of keys(cookiesObj)){
        if(key){
            type === 'get'
                ? cookiesObj[key] = getCookie(key)
                : delCookie(key)

        }
    }
    return cookiesObj;
}

export function setCookies(cookies = []) {
    if(cookies.length){
        cookies.forEach(( cookie )=>{
            setCookie(cookie);
        })
    }
}

