const game = ()=> {
	let pScore = 0;
	let cScore = 0;


	//plays the game
	const playMatch = () => {
		//selects buttons
		const options = document.querySelectorAll('.options button');
		//computer options
		const compChoice = ['rock', 'paper', 'scissors'];
		//selects the score board
		const playerScore = document.getElementById('plScore');
		const computerScore = document.getElementById('coScore');
		//displays winner when someone gets 5
		const finalScore = document.querySelector('.finalScore');
		//logs the player choice clicked
		options.forEach(option=>{
			option.addEventListener('click', function() {
				//comp choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerSelection = compChoice[computerNumber];
				//runs the compare hands function
				compareHands(this.textContent, computerSelection);
				//puts the score onto the board
				playerScore.textContent = pScore;
				computerScore.textContent = cScore;
				//declares the winner
				if((pScore = 5) && (cScore < 5)){
					finalScore.textContent = `Player wins 5 to ${cScore}`;
					return;
				} else if((pScore < 5) && (cScore = 5)){
					finalScore.textContent = `Computer wins 5 to ${pScore}`;
				}
			});
		});
	};
	//compares the two hands
	const compareHands = (playerSelection, computerSelection) =>{
		const winner = document.getElementById('winner');
		//checking for a tie
		if(playerSelection === computerSelection){
			winner.textContent = 'it is a tie';
			return;
		}
			//if user chooses rock
		if(playerSelection === 'rock'){
			if(computerSelection === 'scissors'){
				winner.textContent = 'Player Wins';
				pScore ++
				return;
			}
			else{
				winner.textContent = 'Computer Wins';
				cScore ++
				return;
			}
		}
		//if user chooses paper
		if(playerSelection === 'paper'){
			if(computerSelection === 'rock'){
				winner.textContent = 'Player Wins'
				pScore ++
				return;
			}
			else{
				winner.textContent = 'Computer Wins';
				cScore ++
				return;
			}
		}
		//if user chooses scissors
		if(playerSelection === 'scissors'){
			if(computerSelection === 'paper'){
				winner.textContent = 'Player Wins'
				pScore ++
				return;
			}
			else{
				winner.textContent = 'Computer Wins';
				cScore ++
				return;
			}
		}
	}
	playMatch();
}
game();