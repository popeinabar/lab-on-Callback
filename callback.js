const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies
function createCookie(a,b,callback){
  setTimeout(()=>{
    a.push(b);
    callback(a);
  },2000);
}
createCookie(cookies,newCookie,function callback(a){
  a.forEach((c)=>{
    document.write(c.name+" ")
  })
})