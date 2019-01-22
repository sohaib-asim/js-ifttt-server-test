window.onload = pageLoad;

function pageLoad() {
    const Http = new XMLHttpRequest();
    const url='https://maker.ifttt.com/trigger/userin/with/key/hn40smY4pD2TEflY-lqFp5YJGj9TB2co7ocSgkbBLI8';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
      console.log(Http.responseText)
    }
}
