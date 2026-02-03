const  APP ={
    SW: null,
    init(){
        //called after DOM content is loaded
        if('serviceWorker' in navigator){
            // Register a service worker hosted at the root of the
            // site using default scope
            navigator.serviceWorker
              .register('/sw.js',{
                scope : '/'
              }).then(registration=>{
                APP.SW = registration.installing||
                registration.waiting||
                registration.active;
                console.log('Service worker registered')
              });
            //   2. See if the page is currently has a service worker
            if(navigator.serviceWorker.controller){
                console.log('We have a service worker already installed')
            }
            // 3. Register a handler to detect when a new or updated service worker is installed
            navigator.serviceWorker.oncontrollerchange = (ev) =>{
                console.log('New Service Worker activated')
            }
            // 4. Remove/Unregister service workers
            // navigator.serviceWorker.getRegistrations().then(registrations=>{
            //     for(let registration of registrations){
            //         registration.unregister().then((isUnreg) => console.log(isUnreg));
            //     }   
            // })
            // 5. Listen for messages from service workers
        }else{
            console.log('Service workers are not supported')
        }
    }
}
document.addEventListener('DOMContentLoaded', APP.init);