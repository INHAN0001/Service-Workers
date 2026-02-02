console.log({self});
self.addEventListener('install',(ev)=>{
    // service worker is installed
    console.log('installed');
})
self.addEventListener('activate',(ev)=>{
// service worker is activated
    console.log('activated');
})
self.addEventListener('fetch',(ev)=>{
    console.log('Intercepted a http request',ev.request);
})
self.addEventListener('message',(ev)=>{
    // Message from webpage
});