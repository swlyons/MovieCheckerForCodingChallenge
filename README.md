# MovieCheckerForCodingChallenge

So first off I don't have a IDE to use so I installed the IntelliJ Community Edition.
I also didn't have Node.js installed so I did that.
Since the backend is to be written in Node.js I clicked the Node.js icon on https://developer.themoviedb.org/reference/intro/getting-started
I see that it's saying that it'll provide an API key, so I'll get back to this once I've used Node.js to run something.
The install for Node.js finished and I see that choco, which installs right after installing Node.js, failed inside of my Windows Power Shell.
I do not know what choco is used for so it *might* not matter
However, IntelliJ can install a Node.js plugin and there's a good chance I'll be able to run it and run express through it so I'll go do that now.
I see that the Node.js plugin is only part of the Ultimate edition that I do not have. I could try the 30 day trial, but I'll first try with the Node.js that got installed, hopefully it doesn't need choco but we'll see.
Worst case scenario is I start over on my laptop which *might* work better.
I used npm and installed express, I'll need to clean all of this off this cpu later but not a big deal (just cause typically I don't code on this computer).
I opened up https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction just so that I can get something simple running.
Basic NodeJs "Hello World was a success"
Now have crying child on lap, I know it says uninterrupted work, but until she starts banging on they keyboard I should be fine (she wasn't there too long)
K, got the node.js and the express "Hello World!" working.
I briefed through the rest of the page and I vaguely recall using routes last time I was working with Node.js, and I think that's what I need, so I'll copy that piece of code over
I'll leave the examples in a folder called test-node in webservices
I see a new directory called node_modules, I'm just going to ignore it for now so that I can focus on the code challenge, if I was working though, normally I'd move it around and look up the best place to put it along with any security concerns.
Looking up a way to read a properties file in Node.js, I found a npm thing I could install, but I generally don't trust random 3rd party installs and this should be basic enough to normally do it I would think.
Going to create a properties file, set a property, and print it out in Node to make sure it all works fine
Created foo1=bar1 and foo2=bar2 in the properties file. Read out the file to console just fine. Separating them out into two variables in the code
I'm constantly double checking syntax just to make sure I got everything right, going to separate off of an =, curious how it'll treat new lines. printing it out to check.
Realized it would simply work better to go off of newlines.
Anyways, realized that an hour~ish has passed so going to stop updating here and focus, will try to add some comments on thoughts.
Going to use node-fetch like the initial docs say on themoviedb to show that I can install and use things like that. However, normally speaking I'd click that arrow and swap to use https. It's just preference.
K, got a bit stuck with javascript's asynchronization behavior in loading the properties file.
Utlimately decided that upon each request it would re-read the properties file and load it up that way.
I wanted it to read the properties file just once upon initialization, but I didn't find a good way to do that. Would probably ask a coworker if they had a good idea what would be best.
Anyways, I'm just going to have it load the properties file upon request.
I tried the code example in https://developer.themoviedb.org/reference/intro/getting-started but it was saying I wasn't authorized.
My token got approved, and the example they provided was different than the one on the getting-started page.
The one provided in the example with the approval should be enough for the coding challenge.
Works great. I'm about 2.5 hours in, realizing I probably won't finish the front end, I'm not concerned, I suppose you could always look at myaccount.byu.edu (the CAS one wasn't done in Vue, I think myaccount.byu.edu was, it's been a while though)
Anyways, I got the info for the movie "Fight Club", going to review the docs.
K, saw that it wanted me to do the search feature, so I'll do that.
The developer page on the movie website was not recognizing me as being signed in even though I cleared my cache, signed in, etc... but good news is that it now is working. Meaning that I can see the examples and try them out.


