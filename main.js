window.onload = function () {
    var cont=0
    var rot=0
    var tras=0
    var tam=0

    //rotaciones
    document.getElementById("rot+").onclick = function () {
        cont++
        if(cont<=5&&cont>-1){
            rot+=9
            document.getElementById("square").style.transform = `rotate(${rot}deg)`
        }else{
            document.getElementById("square").style.transform = `rotate(0deg)`
            rot=0
            cont=0
        }
        document.getElementById("1").innerHTML = `${cont}`
    }
    document.getElementById("rot-").onclick = function () {
        cont--
        if(cont<=5&&cont>-1){
            rot-=9
            document.getElementById("square").style.transform = `rotate(${rot}deg)`
        }else{
            document.getElementById("square").style.transform = `rotate(0deg)`
            rot=0
            cont=0
        }
        document.getElementById("1").innerHTML = `${cont}`
    }

    //traslaciones
    document.getElementById("tras+").onclick = function () {
        tras++
        if(tras<=5&&tras>-1){
            document.getElementById("square").style.left= `${tras}rem`
        }else{
            document.getElementById("square").style.left= "0rem"
            tras=0
        }
        document.getElementById("2").innerHTML = `${tras}`
        
    }

    document.getElementById("tras-").onclick = function () {
        tras--
        if(tras<=5&&tras>-1){
            document.getElementById("square").style.left= `${tras}rem`
        }else{
            document.getElementById("square").style.left= `${0}rem`
            tras=0
        }
        document.getElementById("2").innerHTML = `${tras}`
    }

    //escalados
    document.getElementById("esc+").onclick = function(){
        tam++

        if(tam<=5&&tam>-1){
            document.getElementById("square").style.width = `${5+tam}rem`
            document.getElementById("square").style.height = `${5+tam}rem`
        }else{
            document.getElementById("square").style.width = "5rem"
            document.getElementById("square").style.height = "5rem"
            tam=0
        }
        document.getElementById("3").innerHTML = `${tam}`

    }
    document.getElementById("esc-").onclick = function(){
        tam--

        if(tam<=5&&tam>-1){
            document.getElementById("square").style.width = `${5+tam}rem`
            document.getElementById("square").style.height = `${5+tam}rem`
        }else{
            document.getElementById("square").style.width = "5rem"
            document.getElementById("square").style.height = "5rem"
            tam=0
        }
        document.getElementById("3").innerHTML = `${tam}`

    }

}

