There is only about 2 hours of work here. From about 5 to 7:15, with a 15 minute stop in the middle. Here are the details:

I did not include the node_modules, and had to rebuild it from scratch. Notes below. You will have to reinstall them and incldue the react-interview-json-folder in the node-modules.  

The plan: 
I need to study up on Redux again. I will do that before taking the code challenge. 
Reading through your challenge I see that you are using a server framework I have never used. I should learn that before I proceed
I should really review your challenge code before I officially start the clock. 

The reality: 
Ok, It’s Friday, I can make some time after work to get some prep work in. Oh, but I must take care of this thing after work. That’s ok, I should still have time. 
*walks in the door at 9 pm* Um… Ok, that didn’t quite work out… 
Ok, there’s a lot of Saturday I can catch up. Oh wait. I have that thing in the afternoon. And I’ve promised to host a game at 5, and I have to make sure that I have some time set aside tomorrow. 
Looks like I’m jumping into this head first without any prep. Let’s rock… 

About 9:00. Maybe a few minutes afterwards, I started to read through your challenge while looking at the code to make sure that I understood it. 
9:15. I have a plan. Let’s go get the code. 
I want the interfaces found in Typescript so I can pass structures around. Installed… 
I want the UI designer of Storybook… Installed….
We will modify things as we go. 
9:30 ish. Git ignore is not being honored. Everything looks good as far as I can tell, but it is telling me that it is about to check in a massive amount of node_module files. Investigating…
Updated git, rebuilt ignore file, tweaked path to 100 different options that should work, changed the encoding. Nothing has worked. 
10:00. Running with it. You may get more changes that you want because it is tracking node modules. Normally this is something that I would take the time to resolve, but time is of the essence! I will try something after the first commit. 
All right. So the idea is that I want to add a story so that I can see the UI component in a rendering engine without running the project over and over. Something is off, as it is not letting me render the object I don’t want to take the time to fight storybook to get this set up either.
The idea is that these tools are supposed to speed up your work when they function correctly, however setting them up is slowing me down. 

Reverting the project.  We are running without tools. At least you won’t have as many node_module changes. But it means I have to start the project and walk through it to see changes. That’s ok. I can do that… 

10:30. Ok Let’s start this project. Again! 
The Start script isn’t working… It is not recognizing the react-scripts module… That may be what is causing issues with the other items… 
Fighting this now… 
For the life of me, I can not get this project to work. 

11:40 – Rebuilt the whole thing from scratch. You’ll get it as an email. 
Now we can start… I may try again on Monday. 

-- Monday

5:00 pm
Converted styled-components to css. I have always preferred to be closer to the traditional html and css standard. Normally I would use less so I can inherit styles. 

Just making notes as I go: Using index.js and style.js/css for each file makes them harder to find in editor windows when you have several open at once. 

5:04 – started again… 
5:34 – Forgoing loading indicators. Normally you want those… Right now we are just saying “loading”
6:00 – had to walk away for 15 mins. Not because of the code 😊
7:15 - Almost done with step two when I got called away to my dad's house. Looks like you may only get two hours of work tonight. This should at least give you a start of my skill. I can continue later this week if you are interested. 


Wednesday: 

4:40... So we meet again... 
4:42 - Fixed flexbox issue. 

5:27 - Working on next last links... Why aren't my test paring my headers?? Whoops. It was the test...

6:05 - You will notice that I removed the centered class from the NextPrev navigator. 
I want the parent to determine layout instead. Then this component is easier to reuse. 
Parents should almost always make the layout choice of their direct children. 
You start to add padding and margin to move a childs content then you find it usually works... 
Except for that one time it doesn't. Then you have to and conditions... 

6:51 - Attempting to push to git... 

Thanks!
Brian

