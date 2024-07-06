---
title: "Teach Your Grandma How To Code"
date: 2024-07-06T17:02:15+05:30
# weight: 1
# aliases: ["/first"]
category: ["Programming Languages", "Workshop"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
disableHLJS: true # to disable highlightjs
disableShare: true
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: false
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/0jas0jas/mon-cahier/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

This text is actually a workshop? Yup. For the people who're currently IN my workshop, use this as a guide. I'll say everything that's written here almost literally. For the people who're just reading this for some reason? I don't know, live life I guess.

We've so many programming languages. Every programming language seems like their own mountain to climb. There's just so much to "parse" (so proud of that one). From monads to pointers to complicated single line statements. Learning programming languages sometimes feel like being stabbed multiple times by people who're better than you. That's not the case actually. I'm here to prove that. Hopefully, in the next 60 minutes (or however much time it takes to read this blogpost), you'll understand what I mean.

## Let's look at some languages

![Python Sample Program](../../pictures/GrandmaWorkshop/python.png)

Ah yes, Python. Famous for being super easy to understand. Even without all the things defined in this snippet, I'm pretty sure a lot of people would be able to tell exactly what this code is doing. How did our programming languages all trickle down to Python. The peak of simplicity. 

For the people wondering, this snippet loops through a bunch of tracks in a Spotify Playlist and prints/stores a bunch of information about the track including Genre, Name and other stuff. Don't worry if you didn't get exactly that, even realising that the code prints a bunch of information about something makes you experienced enough to read Python. 

![Java Sample Program](../../pictures/GrandmaWorkshop/java.png)

Java. A lot of people are taught Java in schools so I picked a snippet from one of my school homeworks. The code looks way more complicated than Python's. However, it's still very clear what the code is roughly doing. If you've seen some `System.out.println`, you should be able to understand a good chunk of what's happening here. 

The program asks you to enter three parts of your name. It then splits each part and prints it out. To do this, it finds the "index" of the space character " " in your input string. The fact that strings are just character arrays is being used here. This is a rather advanced concept but once you know that, it's quite clear that the index of the space character is used to print out seperated parts of the name. 

![Bhai Lang Sample Program](../../pictures/GrandmaWorkshop/bhailang.png)

Now we're entering unknown language territory. For our hindi speakers here, this might seem pretty funny. For the people who don't speak hindi, "bhai" is slang for brother in hindi. The language is a joke language based around the TypeScript host language. There's not a lot to unpack here once you know that `Bhai Lang` is just a TypeScript wrapper.

The program is just printing. That's all it does. It prints "Hello world", sprinkles in a decision statment and then wraps that around a loop. It's just a demo of some of the features in Bhai Lang. It's a joke programming language. Don't think too much about it. But I think it's interesting to notice that languages can be a bit weird. 

Credit to the creators of [Bhai Lang](https://bhailang.js.org). 

![SQL Sample Program](../../pictures/GrandmaWorkshop/sql.png)

Weird. I don't understand anything here. Am I trying to throw you guys off by just writing rubbish? Not really, this really is a real programming languages. It's called SQL. It's not your typical language though. It's a special purpose language, which means it was made to serve ONE purpose: doing database stuff. It's completely okay if you don't understand any of this. You don't have to. The point is that languages can be so different that sometimes they just become some code words for some secret specific work.

What does this do? It's running through all the records in `T.x`, `T.y`, `T.year` and filtering the data and returning all the records that have year more than 2010 and less than 2012. Now it doesn't really just do that. It does some pre-analysis on the data before finding stuff (like getting the SUM of the numbers in `T.DEV`), but that doesn't really matter. We want to just look closely at how different languages work.

![Piet Sample Program](../../pictures/GrandmaWorkshop/piet.png)

Woah woah woah. WHAT IN THE WORLD IS THAT? It's an esoteric language, Piet. What's esoteric languages? These are languages which exist because they can. It's a picture, it's not even words. Can you program without words? Piet is a good example of a language breaking bounds. Remember, computers only understand 1s and 0s; we created the words we so compare with "programming languages". No one said it had to be english or even words at all. Piet is represented with pixels of colours. 

This program is a hello world program.

### Questions that I had looking at these languages

- Why do we use semicolons?
- When we don't, why do we use indentation?
- Why do we see so much similarities in languages?
- And if languages CAN be that different, then like why?

Programming languages are super cool. They portray our curiousity and limits. There are programs which are genuinely unprogrammable in ANY programming language. While the programs which are programmable, are so in all the programming languages (even Piet). Hopefully by the the end of this, you'll have answers to some of these questions. 

## Setting up our Gitpod workstation

For our workshop, we'll be playing with a lot of programming languages. The best way to learn is to fiddle with the machine, so let's do exactly that. 

[Here's a link to the repository we'll be using.](https://github.com/CodeDay-Lucknow/Teach-your-grandma-how-to-code)

Go ahead and find a `Fork` button and click on it > Click on `Create Fork`.

A Fork of a repository is like copying your friend's work but like changing the name and some things inside it. 

You'll be directed to a "Fork" of my original repository. This is your playground. I have added some starter code in different languages. You might recognise some. We'll edit this now in Gitpod.

Gitpod is a service which lets you open VSCode on your browser. It's really neat. I have configured our playground Gitpod Workspace so you don't have to worry about the nitty gritties of programming languages. These configurations are in `.gitpod.yml` file. You can explore what's inside but gitpod is out of our scope. We're talking about programming languages!

See that Address Bar up there on your browser? It should say something like: `https://github.com/<YOUR-USERNAME>/Teach-your-grandma-how-to-code`. Go ahead and edit this to: `https://gitpod.io#github.com/<YOUR-USERNAME>/Teach-your-grandma-how-to-code`

All I did was add a "gitpod.io#" before "github" and after "https://". 

You should be prompted to sign in. Just sign in using GitHub and click on 'Create Workspace'. You're ready to go.

You should have your own VSCode running in your broswer. On your right, there are a bunch of files you can play with. We'll now learn a bunch of programming languages all at once. 

## So what did those programming languages have in common?


