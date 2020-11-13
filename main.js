const ruutu = document.querySelectorAll('.ruutu')
const vuoro = document.querySelector('#vuoro')
const voittaja = document.querySelector('#voittaja')
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

const voittoRivit = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]


let turn = 0


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
               tarkistaVoittaja()
               
               turn++
                if(turn == 9) {                
                    voittaja.innerText ='Tasapeli'
                    loppu()                 
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
        vuoro.style.color = 'red'
        modal.classList.remove('end')
        overlay.classList.remove('end')
        voittaja.innerText = ''
        let ratkaisija = 0
    })
}

function tarkistaVoittaja(){    
        for(i = 0; i < voittoRivit.length; i++){
            let voittoEhdot = voittoRivit[i]
            let a = voittoEhdot[0]
            let b = voittoEhdot[1]
            let c = voittoEhdot[2]
            if(ruutu[a-1].innerText == 'x' && ruutu[b-1].innerText == 'x' && ruutu[c-1].innerText == 'x') {
                voittaja.innerText = ('punainen voitti')
                voittaja.style.color = 'red'
                vuoro.innerText = ''
                loppu()
            } else if(ruutu[a-1].innerText == 'o' && ruutu[b-1].innerText == 'o' && ruutu[c-1].innerText == 'o') {
                voittaja.innerText = ('vihreä voitti')
                voittaja.style.color = 'green'
                vuoro.innerText = ''
                loppu()
            }
            
        }

        
    }
function loppu() {
    modal.classList.add('end')
    overlay.classList.add('end')
    overlay.addEventListener('click', () =>{
        reset()
    }) 
}
  