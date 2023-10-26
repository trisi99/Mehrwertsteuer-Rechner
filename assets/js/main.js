const mwstPlus = document.getElementById('mwstPlus')

const mwstMinus = document.getElementById('mwstMinus')

const nineTeen = document.getElementById('19%')

const seVen = document.getElementById('7%')

const headLabel = document.getElementById('headline')

const betrag = document.getElementById('betrag')

const mwstBetrag = document.getElementById('mwstBetrag')

const price = document.getElementById('price')

const headFunc = document.getElementById('headFunc')

function funcOne() {
    
    if (mwstPlus.checked) {
        headLabel.innerHTML = "Nettobetrag (Preis ohne Mehrwersteuer) in Euro"
        headFunc.innerHTML = "Bruttobetrag (Endpreis)"
    } else if (mwstMinus.checked) {
        headLabel.innerHTML = "Bruttobetrag (Preis inkl. Mehrwersteuer) in Euro"
        headFunc.innerHTML = "Nettobetrag"
    }
}

function funcTwo(){
    event.preventDefault()
    let res = Number(betrag.value) * 0.07
    
    if(mwstPlus.checked && nineTeen.checked) {
        mwstBetrag.innerHTML =( Number(betrag.value) * 0.19).toFixed(2)
        price.innerHTML = (Number(betrag.value)*1.19).toFixed(2)
    } else if (mwstPlus.checked && seVen.checked) {
        mwstBetrag.innerHTML = res.toFixed(2)
        price.innerHTML = (Number(betrag.value)*1.07).toFixed(2)
    } else if (mwstMinus.checked && nineTeen.checked){
        mwstBetrag.innerHTML =( Number(betrag.value) / 119*19).toFixed(2)
        price.innerHTML = (Number(betrag.value)/1.19).toFixed(2)
    } else if (mwstMinus.checked && seVen.checked){
        mwstBetrag.innerHTML =( Number(betrag.value) / 107*7).toFixed(2)
        price.innerHTML = (Number(betrag.value)/1.07).toFixed(2)
    }
}
