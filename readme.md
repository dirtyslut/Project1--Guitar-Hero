Hello World

This is my first project. I will be building a game modeled after guitar hero. 

The objective of the game is to press the A button when the falling circle is aligned with the fixed circle down below. Holding the A button will not result in a point. 

Be quick you only have 30 seconds to play. 

Score is displayed at top left corner of the game. The timer is displayed on the top right 
corner of the game. If the player gets more than 20 points in a game a congratulation is in order. 
You can always try again. 


Follow the link to my [game](http://quipcode.github.io/Project1--Guitar-Hero/) 

----------
This game relies heavily on html's canvas and javascript, utulizing jQuery for DOM access. 

This project had a flat start primarily due to focusing more on features and inadequate research in the method of approach. After coming to know about html's canvas feature, I followed a tutorial to get an understanding of the elment and its properties. Reverse engineering the code from the tutorial I created functions that would serve my need.


The following are unsolved problems  
* There is only one button the initial intent was to have a total of five buttons the player can interact with
* The timeTracker function has a setInterval of 1000ms while the draw function has a setInterval of 20ms this leads to uncoordinated timing between the ball dropping and the countdown reaching zero 
* The game starts the moment the page is loaded this doesn't give the player time to orient themselves
* The ball falls at a fixed rate and there is only one on the canvas at any given time


 
