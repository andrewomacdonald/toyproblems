// # The Tron Problem
// Greetings future Episource employee! You have been "randomly" selected to participate in the 11th annual Tron games!
// Don't worry, you won't be actually playing the games. You'll be judging the battles after the fact!
// Let me take a quick second to brief you on the Tron Standard Rules (TSRs).
// 1) The game is played on a standard 10x10 board
// 2) Player 1 starts on position 0x0. Player 2 starts on position 9x9
// 3) At each turn, a player may move up, down, left, or right on the board. These steps are held in an array and take the form 'u','d','l', and 'r' respectively.
// 4) If a player crosses a previous path of another player, including themselves, they are eliminated
// 5) If a player lands on the same space as another player on the same turn, both players are eliminated and the match is declared a draw
// 6) If a player moves off the board, into the vast cyber nothingness, they are eliminated
// 7) If there is only one player left, that player wins no matter if they have more moves or not
// 8) If the match has ended and there is more than one player still active, the match is declared a draw
// Look at the following 3 matches:
// ### Match Red
// Player1 : ['r','d','r','r','d','d','l','d','l','d','r','d','l','d','l','u','u','u']
// Player2 : ['l','u','l','u','u','l','l','u','l','d','d','d','l','d','l','l','u','l']
// ### Match Blue
// Player1 : ['d','d','r','r','r','u','r','d','d','d','d','l','d','r','r','r','u','u']
// Player2 : ['l','l','l','u','u','l','u','u','u','r','r','u','l','l','l','l','u','r']
// ### Match Yellow
// Player1 : ['r','r','r','r','r','d','d','d','d','d','l','d','l','u','u','r','r','r']
// Player2 : ['l','u','l','u','l','l','u','u','r','u','l','u','u','l','l','d','d','r']
// Create a program to tell Episource how a match concluded. Use the language of your choice. Good luck!
// output format:
// {
//   player1: result
//   player2: result
// }
// result format:
// {
//   result: winner|loser|tie
//   losingRound: <num>
// }

class Game {

    constructor(playerOneMoves, playerTwoMoves) {
        this.initGame();
        this.playGame(playerOneMoves, playerTwoMoves);
    }

    initGame() {
        this.initBoard();
        this.initPlayers();
        this.gameOver = false;
        this.round = 0;
        this.result = { player1: null, player2: null };
    }

    initBoard() {
        let board = [];
        let row = [];
        for (let i = 0; i < 10; i++) row.push(0);
        for (let i = 0; i < 10; i++) board.push([...row]);
        this.board = board;
    }

    initPlayers() {
        this.positions = {
            1: [0, 0], // [row, column]
            2: [9, 9],
        };
        this.board[0][0] = 1;
        this.board[9][9] = 2;
    }

    makeMove(player, move) {
        /*
         up: row = row - 1, column = column
         left: row = row, column = column - 1
         down: row = row + 1, column = column
         right: row = row, column = column + 1
         */
        if (this.gameOver) return;
        const currentPlayerPosition = this.positions[player];
        let newPlayerPosition = [...currentPlayerPosition];
        if (move === 'u') newPlayerPosition[0]--;
        if (move === 'l') newPlayerPosition[1]--;
        if (move === 'd') newPlayerPosition[0]++;
        if (move === 'r') newPlayerPosition[1]++;
        if (this.invalidPosition(newPlayerPosition)) {
            this.gameOver = true;
            this.winner(player === 1 ? 'player2' : 'player1');
            this.loser(player === 1 ? 'player1' : 'player2');
        } else {
            const row = newPlayerPosition[0];
            const column = newPlayerPosition[1];
            this.positions[player] = newPlayerPosition;
            this.board[row][column] = player;
        }
    }

    invalidPosition(position) {
        const row = position[0];
        const column = position[1];

        if (row < 0 || row > 9 || column < 0 || column > 9) {
            console.log('out of bounds');
            return true; // out of bounds
        }
        if (this.board[row][column]) return true; // someone already moved there
        return false;
    }

    winner(player) {
        this.result[player] = {
            result: 'winner',
            winningRound: this.round,
        };
    }

    loser(player) {
        this.result[player] = {
            result: 'loser',
            losingRound: this.round,
        };
    }

    tie() {
        const tieResult = { result: 'tie', losingRound: -1 };
        this.result['player1'] = { result : tieResult };
        this.result['player2'] = { result : tieResult };
    }

    playGame(playerOneMoves, playerTwoMoves) {
        for (let i = 0; i < playerOneMoves.length; i++) {
            this.round++;
            const playerOneMove = playerOneMoves[i];
            const playerTwoMove = playerTwoMoves[i];
            this.makeMove(1, playerOneMove);
            this.makeMove(2, playerTwoMove);
            if (this.gameOver) break;
        }
        if (!this.gameOver) this.tie();
    }

    output() {
        console.log('board:', this.board);
        return this.result;
    }
}

const matchRed = [
    ['r','d','r','r','d','d','l','d','l','d','r','d','l','d','l','u','u','u'],
    ['l','u','l','u','u','l','l','u','l','d','d','d','l','d','l','l','u','l']
];
const matchBlue = [
    ['d','d','r','r','r','u','r','d','d','d','d','l','d','r','r','r','u','u'],
    ['l','l','l','u','u','l','u','u','u','r','r','u','l','l','l','l','u','r']

];
const matchYellow = [
    ['r','r','r','r','r','d','d','d','d','d','l','d','l','u','u','r','r','r'],
    ['l','u','l','u','l','l','u','u','r','u','l','u','u','l','l','d','d','r']
];

const redGame = new Game(matchRed[0], matchRed[1]);
console.log('redGame Result:', redGame.output());

const blueGame = new Game(matchBlue[0], matchBlue[1]);
console.log('blueGame Result:', blueGame.output());

const yellowGame = new Game(matchYellow[0], matchYellow[1]);
console.log('yellowGame Result:', yellowGame.output());