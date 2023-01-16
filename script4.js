const shuffle = (nameArr) => {
    return nameArr.sort(() => Math.random() - 0.5);
}

const function1 = () => {

    const arrForTask2 = [-3, 0, 6, 9, 12, 15];
    const arrForTask5 = [-30, 10, 63, 59, 120, 175];
    const arrForTask6 = [];


    const createArrForTask6 = () => {
        let i = 1;
        while (i >= 10 ** (-15)) {
            arrForTask6.push(i);
            i /= 10;
        }
    }
    createArrForTask6();

    const task1_3_4 = (vesch, firstValue, secondValue) => {

        let array = [];

        if (vesch !== undefined) {
            if (vesch === false) {
                for (let i = 0; i < 10; i++) {
                    array.push(Math.floor(Math.random() * (12 - 3) + 3))
                }
            } else {
                for (let i = 0; i <= 10; i++) {
                    array.push(+(Math.random() * (12 - 3) + 3).toFixed(2))
                }
            }
            return array
        }
        if (firstValue !== undefined && secondValue !== undefined) {
            for (let i = 0; i < 10; i++) {
                array.push(Number((Math.random() * (firstValue - secondValue) + secondValue).toFixed(1)))
            }
            return array
        }
    }

    const task2_5_6 = (arr) => {
        let array = [];
        for (let i = 0; i < 10; i++) {
            shuffle(arr);
            array.push(arr[0])
        }
        return array
    }

    let genBtn = document.querySelector('#genBtn')
    genBtn.addEventListener('click', () => {
        const optionValue = document.querySelector('.choose').value;
        const result = document.querySelector('.result')
        generation(optionValue, result)
    })

    const generation = (optionValue, result) => {

        let arr = [];

        switch (true) {

            case optionValue == 1:
                arr = task1_3_4(false);
                result.value = arr.join(' ')

                break;
            case optionValue == 2:
                arr = task2_5_6(arrForTask2);
                result.value = arr.join(' ')

                break;
            case optionValue == 3:
                arr = task1_3_4(true)
                result.value = arr.join(' ')

                break;
            case optionValue == 4:
                arr = task1_3_4(undefined, -2.3, 10.7)
                result.value = arr.join('  ')

                break;
            case optionValue == 5:
                arr = task2_5_6(arrForTask5);
                result.value = arr.join(' ')

                break;
            case optionValue == 6:
                arr = task2_5_6(arrForTask6);
                result.value = arr.join(' ')

                break;
        }
    }
}
function1()

const bullsAndCows = () => {

    const createHtml = () => {
        let game = `
        <h2>Bulls And Cows</h2>
        <div class="app">
            <div class="goal">
                <p>you have <span class="turns"> 10 </span>moves left</p>
            </div>
            <div class="form">
                <label><input type="text" id = "player" maxlength="4" placeholder="Input four-digit num"></label>
                <button name="ok" id="guess">Try</button>
            </div>
        </div>
        <div class="table">
            <div class="turnsList">
            
            </div>
        </div>`

        document.querySelector('.bullsAndCows').innerHTML = game;
    }

    createHtml()
    const genNum = () => {
        let number = []
        while (number.length < 4) {
            let newNum = Math.floor(Math.random() * 10)
            if (number.indexOf(newNum) < 0) {
                number.push(newNum)
            }
        }
        console.log(number)
        return number
    }
    let goal = genNum();

    const guessBtn = document.querySelector('#guess')
    guessBtn.addEventListener('click', () => {
        guess()
    })

    const guess = () => {
        let playersNumber = document.querySelector('#player').value;
        let arr = [];

        arr = playersNumber.split('');
        arr = arr.map((item) => Number(item))

        check(arr);
    }

    const check = (par) => {
        let bulls = 0;
        let cows = 0;
        let turns = parseInt(document.querySelector('.turns').innerHTML)

        for (let i = 0; i < 4; i++) {
            if (par[i] === goal[i   ]) {
                bulls++;
            } else if (goal.indexOf(par[i]) >= 0) {
                cows++;
            }
        }
        turns--;
        document.querySelector('.turns').innerHTML = turns + ' ';

        writeTurnn(par, bulls, cows);

        if (turns === 0 || bulls === 4) {
            let status = 'loser'
            if (bulls === 4) {
                status = 'winner'
            }
            endGame(status)
        }
    }

    const writeTurnn = (par, bulls, cows) => {
        let table = document.querySelector('.turnsList');
        let newLine = document.createElement('p');
        newLine.innerHTML = `<span class = "guessed"> ${par}    Bulls ${bulls} Cows ${cows}</span>`
        table.appendChild(newLine)
    }

    const endGame = (status) => {
        alert(`You're ${status}\n Hidden number is = ${goal.join('')}`)
        document.querySelector('.bullsAndCows').innerHTML = ''
        bullsAndCows()
    }
}
bullsAndCows()