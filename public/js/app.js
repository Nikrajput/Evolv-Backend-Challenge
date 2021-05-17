const reply=document.querySelectorAll('.reply')
const status=document.querySelectorAll('#status')
const container=document.querySelectorAll('.reply-container')

for(let i=0;i<reply.length;i++){
    reply[i].addEventListener('click',()=>{
    
        if(status[i].innerText=="View"){
            container[i].classList.remove('hide')
            status[i].innerText="Hide"
        }
        else{
            container[i].classList.add('hide')
            status[i].innerText="View"
        }
    })
}