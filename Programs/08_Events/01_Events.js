// document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


    const owl = document.querySelector('#owl');
    // owl.addEventListener('click', (e) => {
    //     alert("Owl clicked");
    //     console.log(e);
    // })

    //Event Propagation
    const ul = document.querySelector('#images');

    //01 Event Bubling (default i.e false)
    // ul.addEventListener('click', (e) => {
    //     alert("clicked inside ul");
    //     console.log(e);
    // },false)
    // owl.addEventListener('click', (e) => {      //after clicking first evaluates owl.eventlistner then ul.eventlistner
    //     alert("Owl clicked");
    //     console.log(e);
    // },false)

    //02 Event Capturing
    // ul.addEventListener('click', (e) => {
    //     alert("clicked inside ul");
    //     console.log(e);
    // },true)
    // owl.addEventListener('click', (e) => {      //after clicking first evaluates ul.eventlistner then owl.eventlistner
    //     alert("Owl clicked");
    //     console.log(e);
    // },true)


    //Stopping Event Propagation
    // ul.addEventListener('click', (e) => {      
    //     alert("clicked inside ul");
    //     console.log(e);
    // })
    // owl.addEventListener('click', (e) => {      
    //     alert("Owl clicked");
    //     console.log(e);
    //     e.stopPropagation();           //Event Propagation stoped so only owl.eventlistner is executed
    // })


    const googleLink = document.getElementById('google');
    // googleLink.addEventListener('click',(e) =>{
    //     console.log("google link clicked!");     // after clicking go to google.com
    // })

    googleLink.addEventListener('click',(e) =>{
        e.preventDefault();
        console.log("google link clicked!");     // after clicking do not go to google.com
    })



    //Remove image after click on it
    ul.addEventListener('click',(e) =>{
        console.log(e.target);
       // e.target.remove();      //It removes img you clicked but it also removes the parent element ul when click on it i.e all img will removed
        const rm = e.target;
       if(rm.tagName === 'IMG'){
        rm.remove();
       }
    })