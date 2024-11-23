1.	Classes:
•	Class game.js                                      
•	Class harry.js
•	Class snitch.js
•	Class buldgers.js
•	Class script.js
2.	HTML
3.	CSS
4.	Images:
•	Start menu
•	Game field
•	Harry
•	Snitch
•	Buldgers
•	End game
5.	2 soundtrack
Class game
Constructor
Start game  set game screen, show game screen, run game loop
Game loop  stop the loop if game is over
Update with obstacle  update after creating obstacles in order to add them to the game
End game
Class harry
Constructor
Move  update harry’s position, handle sides screen, update harry’s position in the screen
Update position  left right top bottom update position
Collision  did collide with snitch and buldgers
Class snitch
Constructor
Update position  update position in the screen
Move  random spawn and random movements
Class buldgers
Constructor
Update position
Move

Class script
Start game & event listener + button
Restart game & event listener + button
Handle keys  arrows for movement and add as event listener for keydown


HTML
<html>
<head>
Html structure
</head>
<body>
<div game intro>
<image>
<start button>start game
<p>Catch the snitchers with the arrows, you have 3 lives.</p>
<game track>
</div>
<div game container>
<image>
<game track>
<div game screen></div>
</div>
<div game end>
<image>
<h1> congratulations! </h1>
<restart button>
</div>
<script>
<script>
<script>
<script>
</body>
</html>


CSS
Body{}
Game intro{}
Game container {} img obstacles
Game screen {}
@keyframes slide{}
Game end {}
Game intro harry {}
Images{}
Body button {} style buttons
Style collisions {}

1. Main Menu
•	Title: Harry Potter IronHack Snitch game 
•	Text: 
"Help Harry catch snitches while avoiding the deadly bludgers. Use the arrow keys to move Harry around the screen. If you catch 15 snitches, you win the game, but watch out for the bludgers! They’ll follow you when they’re close. Catch 3 snitches to earn a booster!"
•	START Button

2. Game Screen
•	Harry's Movement: Use arrow keys to move Harry left, right, up, and down.
•	Snitches:
o	Randomly spawn on the screen.
o	Snitches could either:
	Fall due to gravity, making them move down naturally.
	Move freely around the screen.
•	Bludgers:
o	Randomly spawn on the screen.
o	Chase Harry when he is nearby, trying to hit him.

3. Power-ups (Boosters)
•	Catching 3 Snitches: Harry earns a booster. Options include:
o	Immunity: For 5 seconds, the bludgers cannot damage Harry.
o	Speed Boost: For 5 seconds, Harry moves faster.

4. Lives & Dumbledore's Help
•	Lives: Harry starts with a set number of lives (3). He loses a life if a bludger hits him.
•	When 1 life is left:
o	Dumbledore may randomly spawn to either:
	Gift Harry an extra life.
	Provide another helpful boost.

5. Win Condition
•	Catching 15 Snitches: If Harry catches 15 snitches before losing all his lives, the game is won.

6. Congratulations Screen
•	Image: A congratulatory image 
•	Text: "Congratulations! You caught all 15 snitches!"
•	Restart Button: Starts a new game.
•	
End Screen (appears if Harry dies before catching all 15 snitches):
•	Image: A scene indicating failure, like Harry looking upset or lying on the ground.
•	Text: A "Game Over" message. 
•	Option to Restart:
o	A Restart Button that lets the player start over.
