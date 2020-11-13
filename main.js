const ruutu = document.querySelectorAll('.ruutu')
const vuoro = document.querySelector('#vuoro')
const voittaja = document.querySelector('#voittaja')
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

const voittoRivit = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let ratkaisija = 0
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
               tarkistaPunainen()
               tarkistaVihreä()
               turn++
                if(turn == 9) {
                    modal.classList.add('end')
                    overlay.classList.add('end')
                    voittaja.innerText ='Tasapeli'
                    overlay.addEventListener('click', () =>{
                        reset()
                    })
                   
                   
                   
                    
                }    
            })
    
} )

btn.addEventListener('click', () => {
    reset()
})

function reset() {
    turn = 0
    ruutu.forEach((e) => {
        e.innerHTML = ''
        voittaja.innerText = ''
        vuoro.innerText = 'Punainen aloittaa'
        vuoro.style.color = 'black'
        modal.classList.remove('end')
        overlay.classList.remove('end')
        voittaja.innerText = ''
        let ratkaisija = 0
    })
}

function tarkistaPunainen(){ 
    let ratkaisija = 0
   for(let numero of ruutu){ 
   
    for(i = 0; i < voittoRivit.length; i++) {       
        for(let sisältö of voittoRivit[i]){            
            let daata = numero.dataset.id       
            if(numero.innerText == 'x' && parseInt(daata) == sisältö){
                ratkaisija++
                if(ratkaisija == 3) {
                    console.log('punainen')
                }  
            }  
                   
            } 
        }
    }        
    }
    function tarkistaVihreä(){ 
        let ratkaisija = 0 
       for(let numero of ruutu){ 
        for(i = 0; i < voittoRivit.length; i++) { 
                 
            for(let sisältö of voittoRivit[i]){            
                let daata = numero.dataset.id       
                if(numero.innerText == 'o' && parseInt(daata) == sisältö){
                    ratkaisija++
                    if(ratkaisija == 3) {
                        console.log('vihreä')
                    }  
                }  
                       
                } 
            }
        }        
        }  
 

