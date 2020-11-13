const ruutu = document.querySelectorAll('.ruutu')
const vuoro = document.querySelector('#vuoro')
const voittaja = document.querySelector('#voittaja')
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

let turn = 0
//pelaaja 1 on punainen
let pelaaja = 1

ruutu.forEach(function(ele) {
    ele.addEventListener('click', event => {
               
               if(turn%2 == 0 && ele.innerHTML == '')
               { 
                ele.innerHTML = '<p class="pu">x</p>'
                vuoro.innerText = 'vihreän'
                vuoro.style.color = 'Green'
                
               } else if(!turn%2 == 0 && ele.innerHTML == '') {
               ele.innerHTML = '<p class="vi">o</p>'
                vuoro.innerText = 'punaisen'
                vuoro.style.color = 'red'
            }
               
               turn++
                if(turn == 9) {
                    console.log('loppu')
                    overlay.classList.add('end')
                    modal.style.display = 'block'
                    turn = 0
                }    
            })
    
} )



/* 
if(!turn % 2) {
    ele.innerHTML = '<p>x</p>'
    turn ++
    console.log(turn)
    return turn
} */