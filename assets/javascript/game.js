let state = {
    computerScore: 0,
    userScore: 0,
    wins: 0,
    losses: 0,
    crystalOne: 0,
    crystalTwo: 0,
    cyrstalThree: 0,
    crystalFour: 0
}

function setInitialState() {
    state.computerScore = getRandomNumber(19, 120)
    state.crystalOne = getRandomNumber(1, 12)
    state.crystalTwo = getRandomNumber(1, 12)
    state.crystalThree = getRandomNumber(1, 12)
    state.crystalFour = getRandomNumber(1, 12)
    state.userScore = 0
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

function render() {
    $("#randomNumber").text(state.computerScore)
    $("#wins").text("Wins: " + state.wins)
    $("#losses").text("Losses: " + state.losses)
    $("#userScore").text(state.userScore)
}

function checkWinConn() {
    if (state.userScore === state.computerScore) {
        state.wins++
        setInitialState()
    } else if (state.userScore > state.computerScore) {
        state.losses++
        setInitialState()
    }

    render()
}

$(document).ready(function() {
    setInitialState()
    render()

    $("#crystal1").click(function() {
        state.userScore += state.crystalOne
        checkWinConn()
    })

    $("#crystal2").click(function() {
        state.userScore += state.crystalTwo
        checkWinConn()
    })

    $("#crystal3").click(function() {
        state.userScore += state.crystalThree
        checkWinConn()
    })

    $("#crystal4").click(function() {
        state.userScore += state.crystalFour
        checkWinConn()
    })
})
