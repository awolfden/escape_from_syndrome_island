//console.log('escape from syndrome island');

// Creates Incredible Class
class Incredible {
    constructor(name, imgFile, imgFile2){
        this.name = name,
        this.imgFile = imgFile,
        this.imgFile2 = imgFile2,
        this.alive = true
    }
};

// Make and keep track of the Incredibles
const incFactory = {
    incArr: [],
    makeIncredible(name, imgFile){
        const newInc = new Incredible(name, imgFile);
        this.incArr.push(newInc);
        return newInc;
    }
};

// Variable to show the remaining incredibles since this will get used a lot
let aliveIncs = incFactory.incArr;

// Game Object
const gameStats = {
    round: 1,
    points: 0,
    bullets: 3,    
};

const functions = {
    makeArena(){
        $('.flex-container').append('<div id="arena" class="arena"></div>');
        $('.flex-container').append('<div class="stats"></div>');
    },
    makeStats(){
        const stats = [`<div class="round"><div><h2>Round</h2><h3>${gameStats.round}</h3></div>`, `<div class="points"><h2>Points</h2><h3>${gameStats.points}</h3></div>`, `<div class="ammo"><h2>AMMO</h2><div class="bullets"></div><br><button id="button" class="reload">RELOAD</button></div>`, '<div class="incredibles"></div>']
        
        for(let i=0; i < stats.length; i++){
            $('.stats').append(`${stats[i]}`);
        };
        
        for(let i = 0; i < gameStats.bullets; i++){
            $('.bullets').append('<div class="clip"><img class="bullet" src="images/bullet.png"></div>')
        };

        for(let i = 0; i < aliveIncs.length; i++) {
            $('.incredibles').append(`<div><img id="${aliveIncs[i].name}" class="statBird" src="${aliveIncs[i].imgFile}"></div>`);
        }  
    },
    gameboard(){
        functions.makeArena();
        functions.makeStats();
    },
    refreshStats(){
        $('.stats div').remove();
        functions.makeStats();
    },
    makeIncredibles(){
        const incNames = [{'name': 'Mr_Incredible', 'imgFile':'images/mrincredible-inc.png'}, {'name': 'Elastagirl', 'imgFile':'images/elastigirl-inc.png'}, {'name': 'Violet', 'imgFile':'images/violet-inc.png'}, {'name': 'Dash', 'imgFile':'images/dash-inc.png'}, {'name': 'Jack-Jack', 'imgFile':'images/jackjack-inc.png'}];
        for (let i = 0; i < incNames.length; i++){
            incFactory.makeIncredible(incNames[i].name, incNames[i].imgFile);
            functions.refreshStats();
            
        }
    },
    isAlive(){
        if (aliveIncs[0].alive === true){
            gameStats.points -= 50;
        }
    },
    incredibleGo(id, top, left, width, height){
        $(id).animate({
            'top': `${top}px`,
            'left': `${left}px`,
            'width': `${width}`,
            'height': `${height}`    
            }, 1000); 
    }
}

const playRound = () => {

    functions.gameboard();
    functions.makeIncredibles();

    let seconds = 0;
    const secondsGoUp = () => {
        
        if (seconds === 0) {
            const removeCount = () => {
                $('.count').remove();
            };
            const countdown3 = () => {
                $('.arena').append('<div class="count"><img src="images/number3.png"></div>');
                setTimeout(removeCount, 900);                
            }
            countdown3();

            const countdown2 = () => {
                $('.arena').append('<div class="count"><img src="images/number2.png"></div>');
                setTimeout(removeCount, 900); 
            }
            setTimeout(countdown2, 1000);

            const countdown1 = () => {
                $('.arena').append('<div class="count"><img src="images/number1.png"></div>');
                setTimeout(removeCount, 900); 
            }
            setTimeout(countdown1, 2000);            
            
        }

        seconds++;

        const dashRight = () => {
            $(`#${aliveIncs[0].name}`).attr('src', `images/dashRight-inc.png`);
        };

        const dashLeft = () => {
            $(`#${aliveIncs[0].name}`).attr('src', `images/dash-inc.png`);
        };

        const jackMorph = (filepath) => {
            $(`#${aliveIncs[0].name}`).attr('src', filepath);
        }


        if(seconds % 3 === 0){
            $('.arena').append(`<img id="${aliveIncs[0].name}" class="bird" src="${aliveIncs[0].imgFile}">`);
            
            if(aliveIncs[0].name === 'Mr_Incredible'){
                functions.incredibleGo(`#${aliveIncs[0].name}`, '300', '-100', '100', '100');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '300', '400', '125', '125');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '150', '-300', '200', '200');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '-400', '-200', '300', '300');
                
            } else if (aliveIncs[0].name === 'Elastagirl'){
                functions.incredibleGo(`#${aliveIncs[0].name}`, '200', '-200', '80', '100');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '100', '-200', '90', '300');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '150', '200', '120', '150');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '-400', '200', '300', '256');
                
            } else if (aliveIncs[0].name === 'Violet'){
                $(`#${aliveIncs[0].name}`).attr('src', 'images/violet-inc.gif');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '100', '-200', '100', '100');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '100', '200', '125', '125');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '250', '200', '200', '200');
                functions.incredibleGo(`#${aliveIncs[0].name}`, '-400', '-200', '300', '300');
                
            } else if (aliveIncs[0].name === 'Dash'){
                functions.incredibleGo(`#${aliveIncs[0].name}`, '300', '-500', '100', '100');
                setTimeout(dashRight, 1001);                                
                functions.incredibleGo(`#${aliveIncs[0].name}`, '300', '400', '125', '125');
                setTimeout(dashLeft, 2001);           
                functions.incredibleGo(`#${aliveIncs[0].name}`, '150', '-600', '200', '200');
                setTimeout(dashRight, 3001);  
                functions.incredibleGo(`#${aliveIncs[0].name}`, '-400', '-200', '150', '300');
                
            } else if (aliveIncs[0].name === 'Jack-Jack'){
                functions.incredibleGo(`#${aliveIncs[0].name}`, '200', '-100', '100', '100');
                setTimeout(()=>{
                    jackMorph('images/jackjack-devil.png')
                }, 1001);
                functions.incredibleGo(`#${aliveIncs[0].name}`, '200', '300', '155', '175');
                setTimeout(()=>{
                    jackMorph('images/jackjack-fire.png')
                }, 2001);
                functions.incredibleGo(`#${aliveIncs[0].name}`, '150', '-500', '190', '165');
                setTimeout(()=>{
                    jackMorph('images/jackjack-lasers.png')
                }, 3001);
                functions.incredibleGo(`#${aliveIncs[0].name}`, '-400', '-600', '310', '280');
            };
            functions.refreshStats();

        } 
        //console.log(seconds);
        if (seconds === 5 || seconds === 8 || seconds === 11 || seconds === 14 || seconds === 17){
            functions.isAlive();
            aliveIncs.shift();
            $('.bird').remove();
            functions.refreshStats();
        }

        if (seconds === 17){
            if(gameStats.points === 500){
                //WIN
                $('#arena').append('<div class="youwin"><img src="images/syndrome_win.png"></div>');
                clearInterval(timer);
            } else {
                //LOSE
                const clearMessage = () => {
                    $('.youlose').remove();
                };
                
                $('#arena').append('<div class="youlose"><img src="images/time_machine.gif"></div>');
                const carGo = (left) => {
                    $('.youlose').animate({
                        'left': `${left}px`,   
                        }, 1000);
                };
                carGo(0);

                setTimeout(clearMessage, 5000);
                
                const clearRound = () => {
                    $('#arena').remove();
                    $('.stats').remove();
                    incFactory.incArr.splice(0);
                    gameStats.round++;
                    gameStats.points = 0;
                    clearInterval(timer);
                    playRound();
                    }

                setTimeout(clearRound, 4000)
            }
        };
        
    };

    const timer = setInterval(secondsGoUp, 2000);

    // main listener function for the arena and birds
    $('.arena').on('click', (e) => {
        
        const laserSoundIds = ['arena', 'Mr_Incredible', 'Elastagirl', 'Violet', 'Dash', 'Jack-Jack']
        
        //checks if the clicked item is an incredible, removes it from the stat bar
        if (e.target.id === 'Mr_Incredible' || e.target.id === 'Elastagirl' || e.target.id === 'Violet' || e.target.id === 'Dash' || e.target.id === 'Jack-Jack'){
            //checks if there are bullets remaining
            if(gameStats.bullets > 0){      // here the third bullet wont kill the guy, if >=0 you can kill after you run out of bullets
                gameStats.points += 100;
                e.target.remove();
                functions.incredibleGo('#points', '0px', '-900px', '100px', '100px');
                //console.log(e.target.id);
                
                for(let i = 0; i < aliveIncs.length; i++){
                    if(aliveIncs[i].name === e.target.id){
                        aliveIncs[i].alive = false;
                    }
                }
            }
            functions.refreshStats();        
        }
        for (let i = 0; i < laserSoundIds.length; i++){
            if (e.target.id === `${laserSoundIds[i]}` && gameStats.bullets > 0){
                $('body').append('<audio autoplay><source src="laser.mp3" type="audio/mpeg"></audio>')
                gameStats.bullets--;
                functions.refreshStats();
            }
        }
    })

    // Reload Button
    $('.stats').on('click', (e) => {
        if (e.target.id === "button"){
            console.log('reload')
            gameStats.bullets = 3;
            $('body').append('<audio autoplay><source src="reload.mp3" type="audio/mpeg"></audio>')
            functions.refreshStats();   
        }
    })
};

// Welcome Screen - Instructions
$('.flex-container').append('<img class="welcome" src="images/syndrome_welcome.png">');
$('.welcome').on('click', () => {
    $('.welcome').remove();
    $('body').append('<audio autoplay><source src="incredibles_song.mp3" type="audio/mpeg"></audio>')
    playRound();
})








