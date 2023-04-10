
function crateCookie(name) {
     const date = new Date();
     date.setDate(date.getDate + 1); //수명을 하루로 설정
     let cookie = '';
     cookie += `${name}=true;`;//세미콜론을 반드시 찍으세요 (문자열 안에)
     cookie += 'expires=' + date.getUTCString();
     document.cookie = cookie;
}


function getCookie(name) {
    const cookies = document.cookie.split(';');

    for(let c of cookies) {
        if(c.search(name) !== -1) {
            return true;
        }
    }
    //return false; 자바스크립트에선 쓸 필요가 없다.
}