

Talk about how easy installing Amazon Q CLI

followed this guide:
https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html


Part 1 - Conceptualization

I remember the very first game that I built back in my college days (circa 2016). Our Rizal professor wanted us to think about how we can apply what we do in our course to create awareness for our national hero, Jose Rizal. Basically, how would you relate Information Technology to Rizal. 

First thing that came to my mind was to build a fighting game that features the life of Rizal throughout the Spanish Period using Java since we just learned it from the previous semester. It doesn't look much but it goes like this:

--- insert rizal demo 

So when I encountered an article about Building Games with Amazon Q CLI, I thought this is a good opportunity for me to reimagine my game. And since we Filipinos are celebrating our Independence this June, it made me a bit nostalgic. But this time, I want to incorporate my work experience, which is Data Engineering. 

I thought about the prompt, I wanted to be as specific as possible. Here's what I came up with:

```
I want a turn-based SQL fighting game that will allow me to fight through bosses using a chosen character. I want to have Philippines as a theme for my game. Since we celebrate our independence in the month of June. The game should be like Street fighter/Tekken. Where characters face off with each other. The battle system is like Pokemon, each character's actions are based on whatever action the user will choose.

For the game, I want the following mechanics.

Background and goal:

Hero - my "Bayani" starts unarmed in a Pre-Hispanic tutorial level, then faces colonial “bosses” as he goes through times

Levels tied to eras – pre-Spanish, Spanish, American, Japanese, final Independence Day showdown (June 12 1898)

Each level introduces new tables and sql query concepts (SELECT basics, JOINs, aggregates, window functions)

Game Mechanics:

SQL-type quizzes

On each turn, the game asks a quiz question about the current battle’s database

Quiz-type sql puzzles
- Each action corresponds to a quiz question on a specific SQL concept
- Questions appear as multiple choice or fill in inputs
- Correct answer executes the chosen action’s animation and adjusts the HP or shield values accordingly, important to note that boss also attacks afterwards
- Wrong answer causes the boss to attack instead, dealing damage to the your player

Combat Actions
- Attack – executes by answering a SELECT/WHERE question correctly and deals damage to the boss’s HP
- Defend – executes by answering an aggregates question and grants a shield that reduces incoming damage
- Heal – executes by answering a set-operation question and restores a portion of the hero’s HP
- Special Move - unlock by a successful multi-step quiz (CTEs or window functions) which unleashes a high-damage combo
```

One prompt, and it went down to business creating all sorts of scripts. 

![[Screenshot 2025-06-29 at 5.59.18 PM.png]]

One thing that I liked about Amazon Q was that it automatically knows that it needs to test the scripts and creates its own test cases. It was part of the workflow. Most chatbots doesn't do this out-of-the-box, you need to explicitly say to create test scenarios and execute them. 

![[Screenshot 2025-06-29 at 6.00.54 PM.png]]

It was also able to create documentations with game mechanics, files it created, and how to play.

![[Screenshot 2025-06-29 at 6.04.04 PM.png]]

After running the game, here's what I had:

![[Pasted image 20250629171415.png]]

A CLI-based SQL game, that allows users to play through eras with each bosses having different SQL questions. 

But, there is one problem, not all of you wants a CLI-based game. I mean I know I don't. I would want something that I can see and interact with using my mouse.

Additionally, I had downloaded asset packs from Ansimuz's

Here's another prompt, I didn't think too much about it, I just did a simple one:
```
This is a good start. Please give it a UI. Use PyGame. I also have assets under /assets folder. Please make use of it as sprites.
```

Amazon Q CLI proceeded in creating the necessary adjustments.

And came up with this:



Then I was curious on extending it beyond and asking Amazon Q about improvements. 
```
Let's work on improvements. Can you suggest? Please list down your suggestions before implementing. I want improvements on the battle system, game mechanics, questions, and animations.
```

![[Pasted image 20250629215352.png]]

All of which are a good suggestions but I like that Amazon Q also gives prioritizations:


![[Screenshot 2025-06-29 at 10.06.11 PM.png]]

I decided to go with the Phase 1 changes, but I had some suggestions as well. My prompt was:
```
Please implement high-priority improvements. I don't want an interactive SQL Editor yet as it is complex to implement. For the list of SQL Questions, can you please add more? It seems that the user can just choose the same questions over and over, it should vary per turn.
```

What I noticed while playing the game was that the questions are very limited. It was only 1 question per action across the battle, so the player can just memorize the answers and just attack. It's no fun :) 

It again did all the necessary adjustments. Here's the final output:

-- asdasd


Takeaways
- AI-powered assistance have come a long way since it's inception.
- What makes Amazon Q special is its training data. It is fine-tuned on years of AWS knowledge, best practices, resources, and well-architected patterns.
- This tool enabled me to quickly build a working application in just one prompt.
- It can automate most of the development tasks so that users can focus on delivering value, though it's important to note that we always take this with a grain of salt and do due diligence.

Conclusion
Overall, it was a fun experience, I definitely would like to improve further on this. I can spend the whole day 

---
Assets:
https://ansimuz.itch.io/gothicvania-patreon-collection





![[Pasted image 20250629171931.png]]

![[Pasted image 20250629172000.png]]

