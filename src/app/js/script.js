const profile =document.querySelector(".profile-wrapper")
const floater=document.querySelector(".floater-wrapper")
const share =document.querySelectorAll("#share-icon")


share.forEach(icon =>{
    icon.addEventListener('click' , ()=>{
        let screen_size = window.screen.width;
        if(screen_size < 1024){
            if(profile.classList.contains('hidden') && floater.classList.contains('hidden')===false  ){
                profile.classList.remove('hidden');
                floater.classList.add('hidden');
            }else{
                profile.classList.add('hidden');
                floater.classList.remove('hidden');
                
            }
        }else{
            if(profile.classList.contains('hidden')){
                profile.classList.remove('hidden')
            }
            floater.classList.toggle('hidden')
        }
    })
})