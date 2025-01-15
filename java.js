function newGame(){ 
    randomEnemyAttacks(); 
    document.querySelector("button").style.display = "none";
 }

function enemyAttacksMe(enemy){
    if(healthPoints > 0 && !enemy.classList.contains("dead")){
        enemy.classList.add("showing");
    setTimeout( () => {
        enemyShootMe(enemy);

    },1000);
    setTimeout( ()=> {
        if (!enemy.classList.contains("dead")){
            enemy.classList.remove("showing");
        }
        
    },3000);
}
}
function enemyShootMe(enemy){
    if(!enemy.classList.contains("dead")&& !enemy.classList.contains("shooting")){
    enemy.classList.add("shooting");
    updateHealthPoints(healthPoints - 10);
    setTimeout ( () => {
        enemy.classList.remove("shooting");
    },200);
}
}

    
function livingEnemies(){
    return document.querySelectorAll(".enemy:not(.dead)");
}

var healthPoints = 100;
function updateHealthPoints(points){

healthPoints = points;
var healthBar = document.querySelector("#healthBar");
healthBar.style.width = points + "%"
if(healthPoints< 1){
    alert("Game over!");
    window.location.reload();
}
}
function randomEnemyAttacks(){

var randomEnemyNo = Math.random() * livingEnemies().length;
randomEnemyNo = Math.floor(randomEnemyNo);
var enemy = livingEnemies()[randomEnemyNo];

var randomDelay = Math.random() * 2000 + 100;

    setTimeout( ()=>{
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    },randomDelay);
}


function iShoot(enemy,deadImage){
    enemy.style.background = `url(${deadImage})`;
    enemy.style.backgroundRepeat = 'no-repeat';
    enemy.style.backgroundSize = 'contain'
    enemy.classList.add("dead");

    if(!livingEnemies().length){
        alert("You win!");
        window.location.reload();
        window.location.href = "winner.html"
    }
}