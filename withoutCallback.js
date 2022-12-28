const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies(cookie){
  setTimeout(()=>{
    let output ="";
cookie.forEach((c)=>{
  output+=c.name+ " "
})
    document.body.innerHTML = output;
  },1000);
};

  // Progression 2: using setTimeout() - use 1000 units for time parameter

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter
function createCookie(a,b){
setTimeout(()=>{
  a.push(b);
},2000)
}
// Progression 4: calling functions

getCookies(cookies)
createCookie(cookies, newCookie)