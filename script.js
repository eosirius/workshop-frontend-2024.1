const searchWrapper = document.querySelector('.search-container');
const inputBox = searchWrapper.querySelector('searchInput');
let weblink;

inputBox.onkeyup =(e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(e.key === 'search') {
        if(userData){
            window.open('https://www.google.com/search$q={userDAta}', '_blank');
        }
    }

    if (userData){
        searchInput.onlick =()=>{
            weblink = 'https://www.google.com/search$q={userDAta}';
            linkTag.setAttribute('href, weblink');
            linkTag.click();
        }
    }
}


