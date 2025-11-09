const button=document.querySelectorAll('.button')

button.forEach((btn)=>{
    btn.addEventListener('click',function(event){
        const color=event.target.innerText

        document.body.style.backgroundColor=`${color}`
    })
})