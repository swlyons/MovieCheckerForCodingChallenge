# MovieCheckerForCodingChallenge

So first off I don't have a IDE to use so I installed the IntelliJ Community Edition.<br/>
I also didn't have Node.js installed so I did that.<br/>
Since the backend is to be written in Node.js I clicked the Node.js icon on https://developer.themoviedb.org/reference/intro/getting-started<br/>
I see that it's saying that it'll provide an API key, so I'll get back to this once I've used Node.js to run something.<br/>
The install for Node.js finished and I see that choco, which installs right after installing Node.js, failed inside of my Windows Power Shell.<br/>
I do not know what choco is used for so it *might* not matter<br/>
However, IntelliJ can install a Node.js plugin and there's a good chance I'll be able to run it and run express through it so I'll go do that now.<br/>
I see that the Node.js plugin is only part of the Ultimate edition that I do not have. I could try the 30 day trial, but I'll first try with the Node.js that got installed, hopefully it doesn't need choco but we'll see.<br/>
Worst case scenario is I start over on my laptop which *might* work better.<br/>
I used npm and installed express, I'll need to clean all of this off this cpu later but not a big deal (just cause typically I don't code on this computer).<br/>
I opened up https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction just so that I can get something simple running.<br/>
Basic NodeJs "Hello World was a success"<br/>
Now have crying child on lap, I know it says uninterrupted work, but until she starts banging on they keyboard I should be fine (she wasn't there too long)<br/>
K, got the node.js and the express "Hello World!" working.<br/>
I briefed through the rest of the page and I vaguely recall using routes last time I was working with Node.js, and I think that's what I need, so I'll copy that piece of code over<br/>
I'll leave the examples in a folder called test-node in webservices<br/>
I see a new directory called node_modules, I'm just going to ignore it for now so that I can focus on the code challenge, if I was working though, normally I'd move it around and look up the best place to put it along with any security concerns.<br/>
Looking up a way to read a properties file in Node.js, I found a npm thing I could install, but I generally don't trust random 3rd party installs and this should be basic enough to normally do it I would think.<br/>
Going to create a properties file, set a property, and print it out in Node to make sure it all works fine<br/>
Created foo1=bar1 and foo2=bar2 in the properties file. Read out the file to console just fine. Separating them out into two variables in the code<br/>
I'm constantly double checking syntax just to make sure I got everything right, going to separate off of an =, curious how it'll treat new lines. printing it out to check.<br/>
Realized it would simply work better to go off of newlines.<br/>
Anyways, realized that an hour~ish has passed so going to stop updating here and focus, will try to add some comments on thoughts.<br/>
Going to use node-fetch like the initial docs say on themoviedb to show that I can install and use things like that. However, normally speaking I'd click that arrow and swap to use https. It's just preference.<br/>
K, got a bit stuck with javascript's asynchronization behavior in loading the properties file.<br/>
Utlimately decided that upon each request it would re-read the properties file and load it up that way.<br/>
I wanted it to read the properties file just once upon initialization, but I didn't find a good way to do that. Would probably ask a coworker if they had a good idea what would be best.<br/>
Anyways, I'm just going to have it load the properties file upon request.<br/>
I tried the code example in https://developer.themoviedb.org/reference/intro/getting-started but it was saying I wasn't authorized.<br/>
My token got approved, and the example they provided was different than the one on the getting-started page.<br/>
The one provided in the example with the approval should be enough for the coding challenge.<br/>
Works great. I'm about 2.5 hours in, realizing I probably won't finish the front end, I'm not concerned since the document said to just go as far as you can<br/>
Anyways, I got the info for the movie "Fight Club", going to review the docs.<br/>
K, saw that it wanted me to do the search feature, so I'll do that.<br/>
The developer page on the movie website was not recognizing me as being signed in even though I cleared my cache, signed in, etc... but good news is that it now is working. Meaning that I can see the examples and try them out.<br/>
Checkpoint (this is the 2nd one I think), backend is in a good state, not finished though. Just close enough that the next step I want to test for it is to pass a search parameter to it from the front end.<br/>
Going to work on front end now.<br/>
Gameplan is to review what's needed to add vue into the project, get hello world to pop up, then create a search field, then pass the parameter to the backend, log it out to make sure it works, finish out the backend by also logging out what the backend returns on the front end, then finish out the front end by displaying the poster image from the url or whatever else is wanted in the docs.<br/>
Not "Hello World", but following along https://vuejs.org/guide/quick-start since it looks promising.<br/>
Ran 'npm create vue@latest' but it got stuck *after* it said 'Done!'. I control C and it said it failed but things might be fine?<br/>
Going to proceed as if it succeeded but keeping in mind that it may have not.<br/>
K it looks like it's working, I'm not really liking these docs though since they're not as thorough as they could be.<br/>
That's not a 'Hello World' page.<br/>
So they don't say what the files should be called,<br/>
I'm really distracted by the page flashing white when loading, checking vue documentation to see how to turn that off.<br/>
No documentation. Found it through Inspect element, searched for the color in the code, found it in base.css, found the transition, deleted it. That worked. Saw that base.css was imported into main.css which was retrieved from main.js. K.<br/>
With that out of the way added the search field, but still need a way to get the value and pass it to the backend.<br/>
Ok I'm about out of time, I set a timer for 3 hrs and 40 minutes but I didn't start it immediately, but I'm fine calling it good there.<br/>
On the front end, the variable "message" wasn't updating live according to their docs, but then when I swapped away and came back it was? I needed to test and play around with it more to understand the behavior, probably needed to hit enter or something like that.<br/>
Didn't get to the part of getting vue to call my backend, having the backend filter the results to the correct information and send that to the front end, and have the front end display the correct information.<br/>
So not quite an MVP yet but that's ok.<br/>
Anyways, have a great day.<br/>
