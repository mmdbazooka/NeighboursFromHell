let btn = document.querySelector(".parent > #step > img:nth-child(2)")
let parent = document.querySelector(".parent")
let items = document.querySelector(".parent > #game2 > #items");
let loadBar2 = document.querySelector(".parent > #game2 > .loadBar")
let load2 = document.querySelector(".parent > #game2 > .loadBar > .load")
let body = document.querySelector("body")
let players = 0;
let x = 690;
let xTop = 317;
let mic = 0;
let doorbining = 0;
window.onload = function(){
    html.style.width = "1024px";
    let audio = localStorage.getItem("audio")
    audio6.volume = audio;
    volume.value = audio;
    if(!audio) {
        volume.value = 1;
        audio6.volume = 0.5;
    }
    let brightness = localStorage.getItem("brightness")
    body.style.filter = `brightness(${brightness}%)`;
    bright.value = brightness
}
game.ondblclick = () => {return false}
game2.ondblclick = () => {return false}
window.ondragstart = function(){ return false}
setTimeout(function(){
    img2.style.zIndex = 1;
},1500)
setTimeout(function(){
    img1.style.zIndex = 2;
},3000)
img1.onclick = function(){
    audio6.play()
    pages.className = "hide";
    startgame.className = "show";
    parent.style.boxShadow = "none";
    start.className = "show";
    edit.className = "show";
    option.className = "show";
    exit.className = "show";
}

function walk_enemy () {
    sitEnemy.className = "hide";
    enemyStepTwostanding.className = "show";
    enemyStepTwostanding.className = "enemyWalkRight";
    audio9.play()
    idea.src = "Pictures/did-zani.png"
    setTimeout(() => {audio9.play()}, 1000);
    setTimeout(() => {audio9.play()}, 2000);
    setTimeout(() => {audio9.play()}, 3000);
    setTimeout(() => {audio9.play()}, 4000);
    setTimeout(() => {audio9.play()}, 5000);
    setTimeout(() => {audio9.play()}, 6000);
    setTimeout(() => {
        enemyStepTwostanding.className = "hide";
        doorTopLeft.className = "show";
        audio2.play()
    }, 6800);
    setTimeout(() => {
        doorTopLeft.className ="hide";
        doorTopRight.className ="show";
    }, 7500); 
    setTimeout(() => {
        if(player5.className == "hide"){
            doorTopRight.className ="hide";
            cocGif.style.backgroundImage = "url(./gif/doorbinRage.gif)";
            cocGif.style.backgroundSize = "100% 100%";
            cocGif.style.zIndex = "100000";
            lastAudio.play()
            setTimeout(() => {
                footer.className = "rageFooter";
                footer.style.backgroundImage = "url(./Pictures/rage2.png)";
                idea.style.display = "none"
            }, 4000);
            setTimeout(() => {
                cocGif.className = "hide";
                winer.className = "show";
            }, 27000);
        }
        else if(player5.className !== "hide"){
            doorTopRight.className ="hide";
            cocGif.style.backgroundImage = "url(./gif/kotak.gif)";
            cocGif.style.backgroundSize = "100% 100%";
            cocGif.style.zIndex = "100000";
            setTimeout(() => {audio13.play()}, 700);
            setTimeout(() => {
                alert("YOU LOSE")
                window.location.reload()
            }, 6000);
        }
    }, 8000);
}
let timer = (m,s,t)=> {
    let minute = m ;
    let secend = s ;
    let timing = setInterval(() => {
        secend = secend - 1;
        if(secend == -1) {
            alert("YOU LOSE")
            window.location.reload();
        }
        t.innerHTML = "0:" + secend;
        if(secend < 10) {
            t.innerHTML = "0:0" + secend;
            t.style.color = "red";
        }
        if(winer.className == "show" || step.className == "show") {
            clearInterval(timing)
        }
    }, 1000);
}
start.onclick = function(){
    let number = localStorage.getItem("number")   
    if(number == "2") {
        step.children[0].src = "./Pictures/step two.png";
        x = 690;
        time.style.display = "none";
    }
    startgame.className = "hide";
    step.className = "show";
    step.style.display = "block";
    start.className = "hide";
    edit.className = "hide";
    option.className = "hide";
    exit.className = "hide";
}
function item_click_up(p,page){
    p.className = "";
    let direction = p.getAttribute("data-direction");
    setTimeout(() => {
        if(direction == "right" && xTop > page){
            p.className = "walkLeft";
            p.setAttribute("data-direction","left")
            xTop = page;
            p.style.left = xTop + "px";

        }else if(direction == "right" && xTop < page) {
            p.className = "walkRight";
            p.setAttribute("data-direction","right")
            xTop = page;
            p.style.left = xTop + "px";

        }
        if(direction == "left" && xTop > page){
            p.className = "walkLeft";
            p.setAttribute("data-direction","right")
            xTop = page;
            p.style.left = xTop + "px";

        }else if(direction == "left" && xTop < page) {
            p.className = "walkRight";
            p.setAttribute("data-direction","left")
            xTop = page;
            p.style.left = xTop + "px";

        }  
    }, 20);
}
function item_click_down(p,page){
    p.className = "";
    let direction = p.getAttribute("data-direction");
    setTimeout(() => {
        if(direction == "right" && x > page){
            p.className = "walkLeft";
            p.setAttribute("data-direction","left")
            x = page;
            p.style.left = x + "px";
        }
        else if(direction == "right" && x < page) {
            p.className = "walkRight";
            p.setAttribute("data-direction","right")
            x = page;
            p.style.left = x + "px";
        }
        if(direction == "left" && x > page){
            p.className = "walkLeft";
            p.setAttribute("data-direction","right")
            x = page;
            p.style.left = x + "px";

        }else if(direction == "left" && x < page) {
            p.className = "walkRight";
            p.setAttribute("data-direction","left")
            x = page;
            p.style.left = x + "px";
        }  
    }, 20);
}
btn.onclick = function(){
    let number = localStorage.getItem("number")     
    if(number == 1 || !number){
        time.innerHTML =  "0:" + 59;        
        step.className = "hide";
        step.style.display = "none"
        game.className = "show";
        kesho.className = "show";
        footer.className = "show";
        door.className = "show";
        door2.className = "show";
        mother.className = "show";
        enemy.className = "show";
        audio7.play()
        audio6.pause()
        timer(0,59,time)
    }   
    else if(number == "2"){
        time.style.display = "none";
        x = 690;
        door3.className = "show";
        door4.className = "show";
        door5.className = "show";
        door6.className = "show";
        game.style.display = "none";
        step.style.display = "none";
        game2.className = "show";
        audio6.pause();
        footer.className = "show";
        footer.className = "footerStepTwo";
        player.className = "show";
        let minute = 2 ;
        let secend = 59 ;
        let timerStep2 = setInterval(() => {
            secend = secend - 1;
            if(secend == 0) {
                minute = minute - 1
                secend = 59;
            }
            timerStepTwo.innerHTML = minute + ":" + secend;
            if(secend < 10) timerStepTwo.innerHTML = minute + ":0" + secend;
            if(secend < 10 && minute == 0) {
                timerStepTwo.style.color = "red";
                timerStepTwo.innerHTML = minute + ":0" + secend;
            }

            if(minute == -1){
                timerStepTwo.innerHTML = "0:00";
                setTimeout(() => {
                    alert("YOU LOSE")
                    window.location.reload();
                }, 10);
            }
            if(minute == 0 && secend == 0) clearInterval(timerStep2)
            if(winer.className == "show") clearInterval(timerStep2)
        },1000)
    }
}
function walk_player(e,p1,p2,num1,num2,num3,num4,num5,num6,num7,num8){
    if(e.pageX < num1 && e.pageX > num2 && e.pageY >= num3 && e.pageY < num4){
        if(player4.className !== "hide" || player5.className !== "hide") return false
        if(p2.className !== "hide") return 
        else{
            p1.style.left = e.pageX/1.2 + "px";
            audio9.play()
            let pageX = e.pageX/1.2;
            p1.className = "";
            setTimeout(() => {
                if(x > pageX){
                    p1.className = "walkLeft";
                    x = pageX;
                    p1.setAttribute("data-direction","left")
                }  
                else if(x < pageX){
                    p1.className = "walkRight";
                    x = pageX;
                    p1.setAttribute("data-direction","right")
                }
            }, 20);
        }
    }
    if(e.pageX < num5 && e.pageX > num6 && e.pageY > num7 && e.pageY < num8 && p2.className !== "hide"){

        p2.style.left = e.pageX/1.2 + "px";
        audio9.play()
        let pageX = e.pageX/1.2;
        p2.className = "";

        setTimeout(() => {
            if(xTop > pageX){
                p2.className = "walkLeft";
                xTop = pageX;
                p2.setAttribute("data-direction","left")
            }  
            else if(xTop < pageX){
                p2.className = "walkRight";
                xTop = pageX;
                p2.setAttribute("data-direction","right")
            }
        }, 10);
    }
}
game.onclick = function(e){
    walk_player(e,player,player2,820,370,373,425,550,140,197,246)
}
game2.onclick = function(e){
    walk_player(e,player3,player4,820,275,373,425,510,130,197,246)
    if(player5.className !== "hide")  walk_player(e,player3,player5,820,275,373,425,900,620,192,246)
}
kesho.onclick = function(e){
    item_click_down(player,e.pageX/1.2)
    if(marker.className == "hide" && players == 0 && player2.className == "hide"){
        if(player.className == "hide") return      
        if(marker.className = "hide"){
            setTimeout(function(){
                marker.className = "show";
                kesho.onclick = function(){
                    return false
                }
            },1400)  
        }        
        setTimeout(function(){
            player.className = "find";
            audio4.play()
        },1000)
        setTimeout(function(){
            player.className = "";
        },1400)
        if(marker.className == "show"){
            return false
        }
    }
    
    audio9.play()
}
let markerr = 1;
marker.onclick = function(){
    if(markerr == 1){
        mark.className = "markeractive"
        markerr = 2
    }
    else if(markerr == 2){
        mark.className = "";
        markerr = 1
    }
}
marker.onmouseover = function(){
    if(markerr == 1){
        marker.className ="markeractiv";
    }
}
marker.onmouseout = function(){
    marker.className ="markeractivno";
}
function doorDownToUp(e,p1,p2,opd1,opd2,d1) {
    if(p2.className !== "hide" && players == 1) return false 
    setTimeout(() => {p1.className = "hide";}, 1000);
    p2.setAttribute("data-direction","left")
    left = p1.style.left
    let pageX = e.pageX/1.2;
    p1.className = "";
    let direction = p1.getAttribute("data-direction")
    setTimeout(() => {
        if(direction == "right" && x < pageX){
            p1.className = "walkRight";
            p1.setAttribute("data-direction","right")
            x = e.pageX
        }
        else if(direction == "right" && x > pageX){
            p1.className = "walkLeft";
            p1.setAttribute("data-direction","left")
            x = e.pageX
        }
        else if(direction == "left" && x < pageX){
            p1.className = "walkRight";
            p1.setAttribute("data-direction","right")
            x = e.pageX
        }
        else if(direction == "left" && x > pageX){
            p1.className = "walkLeft";            
            p1.setAttribute("data-direction","left")
            x = e.pageX
        }
        else if(direction == "left" && x == 690){
            p1.className = "walkLeft";            
            p1.setAttribute("data-direction","left")
            x = e.pageX
        }
    }, 30);
    setTimeout(function(){audio2.play()},1000)
    p1.style.left = e.pageX/1.2 + "px";
    setTimeout(function(){
        p1.className = "hide";
        opd1.className = "show";
    },1000)
    setTimeout(function(){
        opd1.className = "hide";
        d1.className = "show";   
        opd2.className = "show";  
    },1500)
    setTimeout(function(){
        opd2.className = "hide"; 
        d1.className = "show"; 
        p2.className = "show";  
    },2000)
    players = 1;
    audio9.play()
}
function doorUpToDown(e,p1,p2,opd1,opd2,d1,d2){
    if(p1.className !== "hide" && players == 0) return false   
    p1.setAttribute("data-direction","left")
    audio9.play()
    p2.className = "";
    let direction2 = p2.getAttribute("data-direction")
    let pageX = e.pageX/1.2
    setTimeout(() => {
        if(direction2 == "right" && xTop < pageX){
            p2.className = "walkRight";
            p2.setAttribute("data-direction","left")
            xTop = pageX
        }
        else if(direction2 == "right" &&  xTop > pageX){
            p2.className = "walkLeft";
            p2.setAttribute("data-direction","left")
            xTop = pageX
        }
        if(direction2 == "left" && xTop > pageX){
            p2.className = "walkLeft";
            p2.setAttribute("data-direction","right")
            xTop = pageX
        }
        else if(direction2 == "left" && xTop < pageX){
            p2.className = "walkRight";
            p2.setAttribute("data-direction","right")
            xTop = pageX
        }
        if(direction2 == "left" && (xTop > pageX || xTop == 317)){
            p2.className = "walkLeft";
            p2.setAttribute("data-direction","right")
            xTop = pageX
        }
    }, 30);
    p2.style.left = e.pageX/1.2 + "px";
    if(p1.className == "hide" && players == 1){
        setTimeout(function(){
            p2.className = "hide";
            opd2.className = "show";
            audio2.play()
        },1000)
        setTimeout(function(){
            opd2.className = "hide";
            d2.className = "show";  
            opd1.className = "show";   
        },1500)
        setTimeout(function(){
            opd1.className = "hide"; 
            d1.className = "show";
            p1.className = "show";  
            p1.style.backgroundImage = "./Pictures/char-left.png";
        },2000)
        players = 0;
    }
    if(p2.className == "show"){
       audio9.play()
       setTimeout(function(){
            audio2.play()
        },1000)
    }
}
door.onclick = function(e){doorDownToUp(e,player,player2,opendoor,opendoor2,door)}
door2.onclick = function(e){doorUpToDown(e,player,player2,opendoor,opendoor2,door,door2)}
door4.onclick = function(e){
    cursorTop2.className = "hide";
    cursor2.className = "show";  
    if(player4.className == "hide") return false
    doorUpToDown(e,player3,player4,opendoor3,opendoor4,door3,door4)
    setTimeout(() => {
        player3.setAttribute("data-direction","right")
        player3.className = "charRight";
    }, 2000);
}
door6.onclick = function(e){
    if(player4.className !== "hide") return false
    doorUpToDown(e,player3,player5,opendoor5,opendoor6,door5,door6)
    cursorTop2.className = "hide";
    cursorTop3.className = "hide";
    cursor2.className = "show";
}
door3.onclick = function(e){
    if(sitEnemy.className == "show" && player3.className !== "hide"){
        setTimeout(() => {
            video.className = "show";
            audio13.play()
            video.style.backgroundImage = "url(./gif/lose.gif)"
        }, 2600);
        setTimeout(() => {
            alert("You Lose")
            audio13.pause()
            window.location.reload();
        }, 8000);
        door4.onclick = function(){return false}
    }
    cursorTop2.className = "show"; 
    cursor2.className = "hide"; 
    if(player5.className !== "hide") return 
    xTop = 317;
    doorDownToUp(e,player3,player4,opendoor3,opendoor4,door3)
}
door5.onclick = function(e){
    cursorTop3.className = "show";
    if(player4.className !== "hide") return
    xTop = 690;
    doorDownToUp(e,player3,player5,opendoor5,opendoor6,door5)
    door3.style.cursor = "not-allowed";
    cursor2.className = "hide";
}
let loading = 10;
function hoverDoor (player,door,pic) {
    if(player.className !== "hide") door.style.cursor = `url(./Pictures/${pic}.png),auto`;
    else door.style.cursor = "not-allowed";
}
door.onmouseover = function(){hoverDoor (player,door,"upDoorCursor")} 
door2.onmouseover = function(){hoverDoor (player2,door2,"downDoorCursor")} 
door3.onmouseover = function(){hoverDoor (player3,door3,"upDoorCursor")} 
door4.onmouseover = function(){hoverDoor (player4,door4,"downDoorCursor")} 
door5.onmouseover = function(){hoverDoor (player3,door5,"upDoorCursor")} 
door6.onmouseover = function(){hoverDoor (player5,door6,"downDoorCursor")} 
grandmother.onclick =function(e){
    if(player2.className == "hide") return 
    audio9.play()
    item_click_up(player2,e.pageX/1.3)
    if(player2.className !== "hide" && markerr == 2){
        setTimeout(function(){
            if(markerr !== 1 && markerr == 2){
                loadBar.className = "show";
                let setLoad = setInterval(() => {
                    loading = loading + 10;
                    load.innerHTML = "";
                    load.innerHTML = loading + "%";
                }, 100);
                setTimeout(() => {clearInterval(setLoad)}, 1000);
                load.className = "load";
                player2.className = "painting";
              audio5.play() 
              grandmother.onclick = function(){
                return false
              }
            }
        },1000)
        setTimeout(function(){
            if(markerr == 2){
                player2.setAttribute("data-direction","left")
                mother.src = "./Pictures/grandma-tablo-painted.png";
                marker.className = "hide";
                loadBar.className = "hide";
                load.className = "";
            }
        },2200)
        setTimeout(function(){
            enemy.className = "enemyWalkLeft";
            audio9.play()
        },5000)
        setTimeout(function(){
            enemy.className = "hide";
            doorenemy2.className = "show";
            audio2.play();
        },6700)
        setTimeout(function(){
            doorenemy2.className = "hide";
            doorenemy1.className = "show";
        },7200)
        setTimeout(function(){
            doorenemy1.className = "hide";
            enemyleft2.style.display = "block";
            audio9.play()
        },7800)
        setTimeout(function(){
            let direction = player2.getAttribute("data-direction")
            if(player2.className !== "hide" && players == 1 && direction == "left"){
                player2.setAttribute("data-direction","right")
                player2.className = "walkRight";
                player2.style.left = "41%";
                setTimeout(function(){
                    enemyleft2.className = "shoot";
                    player2.className = "partab";
                },1100)
                setTimeout(function(){
                    alert("YOU LOSE")
                    window.location.reload();
                },1200)
            }
            else if(player2.className !== "hide" && players == 1 && direction == "right"){
                player2.setAttribute("data-direction","right")
                player2.className = "";
                setTimeout(() => {player2.className = "walkRight";}, 20);
                player2.style.left = "41%";
                setTimeout(function(){
                    enemyleft2.className = "shoot";
                    player2.className = "partab";
                },1100)
                setTimeout(function(){
                    alert("YOU LOSE");
                    window.location.reload();
                },1200)
            }
            else if(player2.className == "hide" && players == 0){
                enemyleft2.className = "enemyWalkLeft2";
                setTimeout(function(){
                    enemyleft2.style.display = "none";
                    enemytajub.className = "show";
                    audio1.play()
                },1000)
                setTimeout(function(){
                    enemytajub.className = "hide";
                    enemyback.className = "show";
                    footer.className = "rageFooter";
                    footer.style.backgroundSize = "100% 100%";
                },2000)
                setTimeout(function(){
                    enemyback.className = "rotate";
                },2200)
                setTimeout(function(){
                    audio10.pause()
                    winer.className = "show";
                },2600)
            }
        },8000)
    }
}
mother.className = "hide";
exit.onclick = function(){exitModal.style.display = "flex";}
closeTheGame.onclick = function(){exitModal.style.display = "none";}
tik.onclick = function(){window.close()}
restart.onclick = function(){
    localStorage.setItem("number","2") 
    window.location.reload()
}
ok.onclick = function(){
    if(localStorage.number == "2") {
        window.location.reload()
    }
    else {
        step.className = "show";
        let items = [kesho,footer,door,door2,door3,door4,door5,door6,mother,enemy,game,winer,enemyleft2,enemyback,game2]
        for(i in items) items[i].className = "hide";
        step.children[0].src = "./Pictures/step two.png";
        localStorage.setItem("number","2") 
        audio6.play();
        step.className = "show"
        step.style.display = "block"
    }
}
kesho2.onclick = function(e){ 
    if(player3.className !== "hide"){
        item_click_down(player3,e.pageX/1.2)
        audio9.play()
        setTimeout(() => {
            let image2 = document.createElement("img")
            image2.src = "./Pictures/chasb.png";
            image2.setAttribute("id","chasb")
            items.appendChild(image2)
            image2.setAttribute("onclick",`tab(${items.children.length-1})`)
            doorbin.onclick = function(e){
                item_click_up(player5,e.pageX/1.2)
                audio9.play()
                if(image2.className == "markeractive" && doorbin.className == "show" && player5.className !== "hide"){
                    item_click_up(player5,e.pageX/1.2)
                    audio9.play()
                    setTimeout(() => {
                        audio5.play()
                        image2.style.display = "none";
                        loadBar3.className = "loadBar show";
                        loadBar3.className = "loadBar show";
                        let setLoad = setInterval(() => {
                            loading3 = loading3 + 10;
                            load3.innerHTML = "";
                            load3.innerHTML = loading3 + "%";
                        }, 100);
                        setTimeout(() => {clearInterval(setLoad)}, 1000);
                        setTimeout(() => {
                            player5.className = ""
                            loadBar3.className = "hide";
                        }, 1000);
                    }, 1000);
                    setTimeout(() => {
                        doorbinChasb.className = "show";
                        doorbining = 1
                    }, 1500);
                    setTimeout(() => {
                        if(mic == 1 && doorbining == 1) walk_enemy ()
                    }, 2000);
                } 
            }
        }, 1000);
        setTimeout(() => {kesho2.onclick = function(){return false}}, 1100);
        setTimeout(function(){
            player3.className = "find";
            audio4.play()
        },1000)
        setTimeout(function(){player3.className = ""},1400)
    } 
}
yakhchal.ondblclick = function(){return false}
yakhchal.onclick = function(e){
    if(player5.className !== "hide"){
        item_click_up(player5,e.pageX/1.1)
        audio9.play()
        setTimeout(() => {
            if(items.children.length <= 1){
                let image3 = document.createElement("img")
                image3.src = "./Pictures/egg.png";
                image3.setAttribute("id","egg")
                items.appendChild(image3)
                image3.setAttribute("onclick",`tab(${items.children.length-1})`)
            }            
        }, 1000);
        setTimeout(function(){
            player5.className = "find";
            audio4.play()
        },1000)
        setTimeout(function(){player5.className = "";},1400)
        setTimeout(() => {yakhchal.onclick = function(){return false}}, 1100);
    }
}
let loading2 = 10;
let loading3 = 10;
microwave.onclick = function(e){
    if(player5.className !== "hide") {
        item_click_up(player5,e.pageX/1.2)
        audio9.play()
        setTimeout(() => {
            if(egg.className == "markeractive" && player5.className !== "hide") {
                audio5.play()
                microwave.style.width = "40px";
                microwave.style.height = "30px";
                microwave.style.right = "34.7%";
                microwave.style.top = "23%";
                microwave.src = "./Pictures/microwave-eggy.png";
                mic = 1
                player5.className = "painting";
                egg.style.display = "none";
                loadBar2.className = "loadBar show";
                let setLoad = setInterval(() => {
                    loading2 = loading2 + 10;
                    load2.innerHTML = "";
                    load2.innerHTML = loading2 + "%";
                }, 100);
                setTimeout(() => {clearInterval(setLoad)}, 1000);
                setTimeout(() => {
                    player5.className = ""
                    loadBar2.className = "";
                }, 1000);
                setTimeout(() => {if(mic == 1 && doorbining == 1) walk_enemy ()}, 2000);
            }
            else return false
        }, 1000);
    }
}
function tab(num){
    for (i=0;i<items.childNodes.length;i++) items.childNodes[i].className = "";
    items.childNodes[num].className = "markeractive";
}    
option.onclick = ()=> {
    startgame.className = "hide";
    setting.className = "show";
    let btn = [start,edit,option,exit];
    for(i in btn) btn[i].className = "hide";   
}
function exitBack(){
    startgame.className = "show";
    setting.className = "hide";
    let btn = [start,edit,option,exit];
    for(i in btn) btn[i].className = "show";
}
resetSave.onclick = ()=> {
    localStorage.setItem("number","1")
    window.location.reload()
}
backToMenu.onclick = ()=>{
    step.className = "hide";
    step.style.display = "none"
    startgame.className = "show";
    let button = [start,edit,option,exit];
    button.forEach(element => {
        element.className = "show";
    })
}
volume.oninput = function(){
    localStorage.setItem("audio",volume.value)
    let audio = localStorage.getItem("audio")
    audio6.volume = audio;
    console.log(volume.value);
}
bright.oninput = function(){
    localStorage.setItem("brightness",bright.value)
    body.style.filter = `brightness(${bright.value}%)`;
}
edit.onclick = function(){
    let btn = [start,edit,option,exit];
    for(i in btn) btn[i].className = "hide";  
    credit.className = "show"
}
closeCredit.onclick = function(){
    let btn = [start,edit,option,exit];
    for(i in btn) btn[i].className = "show";  
    credit.className = "hide"
}
function tagh() {audio8.play()};
let sleep = 0 ;
sleepingDog.onclick = function(){
    soundDog.play()
    if(sleep == 0){
        wakeupDog.className = "show opacityOn";
        sleepingDog.className = "hide";
        sleep = 1
    }
    setTimeout(() => {
        if(sleep == 1){
            wakeupDog.className = "hide opacityOff";
            sleepingDog.className = "show";
            sleep = 0
        }
    }, 1800);
}
function clickMenu(){
    let items = [kesho2,footer,door3,door4,door5,door6,mother,enemy,game,winer,enemyleft2,enemyback,kesho,door2,door]
    for(i in items) items[i].className = "hide";
    stopMenu.style.display = "block";
}
setInterval(() => {fps.innerHTML = "FPS:" + Math.floor(Math.random()*150+50);}, 1000);