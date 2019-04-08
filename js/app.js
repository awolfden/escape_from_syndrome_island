console.log('escape from syndrome island');

// Creates Incredible Class
class Incredible {
    constructor(name, imgFile){
        this.name = name,
        this.imgFile = imgFile,
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


const playRound = () => {

    const makeArena = () => {
        $('.flex-container').append('<div id="arena" class="arena"></div>');
        $('.flex-container').append('<div class="stats"></div>');
    };

    const makeStats = () => {
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
    };

    const gameboard = () => {
        makeArena();
        makeStats();
    }
    gameboard();

    const refreshStats = () => {
        $('.stats div').remove();
        makeStats();
    };

    // const refreshArena = () => {    // am i not using this??
    //     $('.arena div').remove();
    //     makeArena();
    // }

    // Instantiates the Incredibles and plops them in the incFactory.incArr
    const makeIncredibles = () =>{
        const incNames = [{'name': 'Mr_Incredible', 'imgFile':'images/mrincredible-inc.png'}, {'name': 'Elastagirl', 'imgFile':'images/elastigirl-inc.png'}, {'name': 'Violet', 'imgFile':'images/violet-inc.png'}, {'name': 'Dash', 'imgFile':'images/dash-inc.png'}, {'name': 'Jack-Jack', 'imgFile':'images/jackjack-inc.png'}];
        for (let i = 0; i < incNames.length; i++){
            incFactory.makeIncredible(incNames[i].name, incNames[i].imgFile);
            refreshStats();
            
        }
    }
    makeIncredibles();

    //Animations - start position is top: 200px
    // think about making them front facing and if animation completes, the user health goes down
    // image changes to *pow* or something...
    //

    const isAlive = () => {
        if (aliveIncs[0].alive === true){
            gameStats.points -= 50;
        }
    }

    const incredibleGo = (id, top, left, width, height) => {
        $(id).animate({
            'top': `${top}px`,
            'left': `${left}px`,
            'width': `${width}`,
            'height': `${height}`    
            }, 1000);        

    };

    let seconds = 0;

    const secondsGoUp = () => {
        

        if (seconds === 0) {
            const removeCount = () => {
                $('.count').remove();
            };

            const countdown3 = () => {
                $('.arena').append('<div class="count"><img src="images/number3.png"></div>');
                setTimeout(removeCount, 750);                
            }
            countdown3();

            const countdown2 = () => {
                $('.arena').append('<div class="count"><img src="images/number2.png"></div>');
                setTimeout(removeCount, 750); 
            }

            setTimeout(countdown2, 1000);

            const countdown1 = () => {
                $('.arena').append('<div class="count"><img src="images/number1.png"></div>');
                setTimeout(removeCount, 750); 
            }
            setTimeout(countdown1, 2000);            
            
        }

        seconds++;

        if(seconds % 3 === 0){
            $('.arena').append(`<img id="${aliveIncs[0].name}" class="bird" src="${aliveIncs[0].imgFile}">`);
            
            if(aliveIncs[0].name === 'Mr_Incredible'){
                incredibleGo(`#${aliveIncs[0].name}`, '300', '-100', '100', '100');
                incredibleGo(`#${aliveIncs[0].name}`, '300', '400', '125', '125');
                incredibleGo(`#${aliveIncs[0].name}`, '150', '-300', '200', '200');
                incredibleGo(`#${aliveIncs[0].name}`, '-400', '-200', '300', '300');
                
            } else if (aliveIncs[0].name === 'Elastagirl'){
                incredibleGo(`#${aliveIncs[0].name}`, '200', '-200', '100', '100');
                incredibleGo(`#${aliveIncs[0].name}`, '100', '-200', '125', '125');
                incredibleGo(`#${aliveIncs[0].name}`, '200', '200', '200', '200');
                incredibleGo(`#${aliveIncs[0].name}`, '-400', '200', '300', '300');
                
            } else if (aliveIncs[0].name === 'Violet'){
                incredibleGo(`#${aliveIncs[0].name}`, '100', '-200', '100', '100');
                incredibleGo(`#${aliveIncs[0].name}`, '100', '200', '125', '125');
                incredibleGo(`#${aliveIncs[0].name}`, '250', '200', '200', '200');
                incredibleGo(`#${aliveIncs[0].name}`, '-400', '-200', '300', '300');
                
            } else if (aliveIncs[0].name === 'Dash'){
                incredibleGo(`#${aliveIncs[0].name}`, '300', '-600', '100', '100');
                incredibleGo(`#${aliveIncs[0].name}`, '300', '100', '125', '125');
                incredibleGo(`#${aliveIncs[0].name}`, '150', '-600', '200', '200');
                incredibleGo(`#${aliveIncs[0].name}`, '-400', '-200', '150', '300');
                
            } else if (aliveIncs[0].name === 'Jack-Jack'){
                incredibleGo(`#${aliveIncs[0].name}`, '200', '-100', '100', '100');
                incredibleGo(`#${aliveIncs[0].name}`, '200', '100', '125', '125');
                incredibleGo(`#${aliveIncs[0].name}`, '150', '-600', '200', '200');
                incredibleGo(`#${aliveIncs[0].name}`, '-400', '-700', '300', '300');
            };
            refreshStats();

        } 
        console.log(seconds);
        if (seconds === 5 || seconds === 8 || seconds === 11 || seconds === 14 || seconds === 17){
            isAlive();
            aliveIncs.shift();
            $('.bird').remove();
            refreshStats();
        }

        if (seconds === 17){
            if(gameStats.points > 0 && gameStats.points % 250 === 0){
                //WIN
                $('#arena').append('<div class="youwin"><img src="images/syndrome_win.png"></div>');
                clearInterval(timer);
            } else {
                //LOSE
                const clearMessage = () => {
                    $('.youlose').remove();
                };
                
                $('#arena').append('<div class="youlose"><img src="images/time_machine.png"></div>');
                
                setTimeout(clearMessage, 4000);
                
                const clearRound = () => {
                $('#arena').remove();
                $('.stats').remove();
                incFactory.incArr.splice(0);
                gameStats.round++;
                gameStats.points = 0;
                clearInterval(timer);
                playRound();
                }

                setTimeout(clearRound, 3000)
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
                incredibleGo('#points', '0px', '-900px', '100px', '100px');
                console.log(e.target.id);
                
                for(let i = 0; i < aliveIncs.length; i++){
                    if(aliveIncs[i].name === e.target.id){
                        aliveIncs[i].alive = false;
                    }
                }
            }
            refreshStats();        
        }
        for (let i = 0; i < laserSoundIds.length; i++){
            if (e.target.id === `${laserSoundIds[i]}` && gameStats.bullets > 0){
                $('body').append('<audio autoplay><source src="laser.mp3" type="audio/mpeg"></audio>')
                gameStats.bullets--;
                console.log(`JUST SHOT SOMETHING and have ${gameStats.bullets} bullets left`)
                refreshStats();
                //animation sequence goes here
            }
        }

    })

    // Reload Button
    $('.stats').on('click', (e) => {
        if (e.target.id === "button"){
            console.log('reload')
            gameStats.bullets = 3;
            $('body').append('<audio autoplay><source src="reload.mp3" type="audio/mpeg"></audio>')
            refreshStats();   
        }
    })


};


$('.flex-container').append('<img class="welcome" src="images/syndrome_welcome.png">');
$('.welcome').on('click', () => {
    $('.welcome').remove();
    $('body').append('<audio autoplay><source src="incredibles_song.mp3" type="audio/mpeg"></audio>')
    playRound();
})








