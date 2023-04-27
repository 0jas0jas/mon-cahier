---
title: "Automate The Boring Stuff With Python"
date: 2021-05-28T17:02:15+05:30
# weight: 1
# aliases: ["/first"]
category: ["Python", "Automation"]
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

Python is powerful. The second most popular language ([according to TIOBE rating[27/may/2021]](https://www.tiobe.com/tiobe-index/)) for a reason (the first most popular language is C for a reason too). Python is convenient for everyone; for beginners, for computer scientists or for mathematicians. All this because of python’s easy usability and the widespread usage. Is python that good? Uh no. Python is a language made on the C programming language. It lets you program the way you want to program: procedural or object-oriented. However, it fails to successfully master a very important and necessary aspect of programming languages: speed. Python is easy to write, that’s why you can write python really fast but you are actually programming for the users, not for you, and python is not the fastest language. Fortunately, the creator of python announced that he’ll be working with Microsoft’s team to improve these issues in the language. Read more about all that [here](https://www.techrepublic.com/article/microsoft-is-boosting-its-support-for-the-python-programming-ecosystem/).

![Python program wallpaper](https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)

What we’re actually here for is a lot more. How many times have you woken up to press the same buttons to join an online meeting? Or how many times have you googled for something, going through millions of websites to find the one sentence you were looking for? Or have you ever… spammed? All these tedious everyday tasks are repetitive and boring. If only you had a bot to do all this for you. Fire up python and just automate these things!

## AUTOMATION!

Here I’ll show you 4 programs. 4 templates actually. These are very VERY simple programs just to demonstrate how you can make your own scripts to write amazing programs to avoid these boring everyday tasks. We’ll be using new libraries and many new concepts to do these simple tasks. All the code for these four programs is [here](https://github.com/0jas0jas/Automating-With-Python.git) , you can download the code and edit it as you like.

## Article Page Cleaner


2 words. Web scrapping and BeautifulSoup. One is a revolutionary concept and the other is a library to implement that concept in your code. Web scrapping is looking at websites and finding the information you want. ONLY the information that you want from that website. Python makes this easy. Python has very useful web support libraries to help you achieve this.

This specific program is for those article readers who find usually find themselves in a mess full of futile advertisements and fancy graphics. It takes a site containing an article and converts it into a simple and convenient page with just the information without everything else. You can install the program by following the instructions in the github repository

BS4 or BeautifulSoup is an amazing library to make web scrapping a piece of cake. All you have to really do is get the page, store the HTML file in a variable and start looking for data you actually want from the HTML file. I have made a simple boilerplate HTML for a page that will convert this “scrapped" information into an easy-to-read article. Here’s how BS4 works.

![Article Page Cleaner](../../pictures/article%20cleaner.jpg)

As you’ve read, you need a variable to store the HTML file you are going to parse. However, before that you need to give python access to the web and let it visit the website itself. We use the python HTTP library (in-built) for this and to get (visit) the site, we need `'requests'` python library. In my program, I’ve also added an extra feature where you can just copy the URL of the website in your clipboard and it automatically gets the URL using another library called pyperclip. You can use this library to make you code run faster without redundant inputs from the user. To avoid taking ANY input at all, I’ve used the `sys` python library to see if the user has typed a URL after using python3 `cleaner.py` [ URL ] or not. This again avoids redundant inputs. Instructions in the README.md attached to the code.

We stored our HTML file in the noStarchSoup variable as seen in line 19. Now all we have to do is get the information out. Any basic knowledge of HTML will make this task easier for you, there are a lot of ways to get data from a webpage. We wanted only the text of the article we wanted to read so I made a variable elems to store the elements in an HTML which contain the text of an article. These elements are the heading tags(h1-h6) and the paragraph tags(p).

![cleaner.py code](../../pictures/Cleaner%20py.jpg)

I prepared a boilerplate HTML containing some simple CSS styles, huge font and readability. That done, you just have to get the elems variable INTO the HTML file. I opened the file using the built in OS library and just… inserted it. Done. There you have your own article cleaner. It’s that easy.


Of course it shouldn’t be this easy. This is just a template. Go ahead get whatever you want out of website, experiment and add it to a HTML file like I did or do something more creative. I don’t know, you’re the artist.

## A simple File Organizer

Oh don’t you dare lie to me, we’ve all been there with hundreds of files at hand. Messy directories are everywhere on my computer and also when you’re creating something, there will obviously be useless extra files. These files have to be deleted, the useful files have to be kept in new directories and the files have to be sorted. All that can be done through python. It’s really simple.

Although the code looks messy, it has a simple logic and making something like this for your need is easier than you might expect. Import shutil library to copy and move files and `pathlib` library which is just better than its predecessor, OS library, for managing paths and creating new directories.
![Simple file organizer](../../pictures/organize%20py.jpg)

Most of the deleting, moving and copying of files can be done in single lines of code. Once you know those syntaxes, make your own logic to organize the files as you like.

- Copy: `shutil.copy(file_path, move_path)`

- Delete: `os.unlink(file_path)`
    
- Move: `shutil.copy(file_path, move_path)`


I mean why use the stupid GUI when you can code your program to delete stuff for you, am I right or am I right?

## Gmail Email Sender


Now this is funny. The actual number of lines of code needed to send a gmail to someone is… 2. That’s all. All this thanks to Al Sweigart, a software developer and a writer. He made an amazing API allowing lazy people like us to automate gmails like that. You need to sign in to your google (gmail) account first.

Disclaimer: if you’re planning to make your own program like this, you’ll have to get a Gmail API for python authorization. I’ve used my own Gmail API so get yours! If you’re just planning to play around with my program, I shall give you that permission. To register your python program for the Gmail API, just visit [Google Developers](https://developers.google.com/gmail/api).

To create your own Gmail app, install some google things using pip: pip install `--upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib`. Once this is done, go get your own API by searching for ‘GMAIL’ [here](https://console.cloud.google.com/home).

![GMAIL API](/pictures/Gmail%20API.jpg)

Get your API and click manage API. Navigate yourself to the ‘credentials’ tab and create a new credential. Create a new OAuth client ID and choose ‘desktop app’ in the application type dropdown. Name your app and create! You must see your ID now. Download the the credentials and rename it to ‘credentials.json’ and keep it in a directory.

That done, all you need now is to sign in to your Gmail account. Al Sweigart helps us here with his API, install it using: `pip3 install ezgmail`. Install it and create your new app in the same folder where you kept the credentials.json file. Name your python file anything but import ezgmail by `import ezgmail`. Sign in to your gmail account using `ezgmail.EMAIL_ADDRESS`, it must direct you to your sign in page. You’re all set up!

Check out [EZGmail’s documentation](https://pypi.org/project/EZGmail/) to find out what all you can do using this API and go send a mail.

## Mee6 XP miner


Mee6, if you don’t already know, is a discord bot which gives you XP for talking. Want to get to the top of the leaderboard? Use this bot. Leave it overnight and witness yourself climbing up the ladder. If you are not really looking for python scripts to cheat in a game, this program can still help you understand how you can use python to automate your keyboard.

Mee6 is no AI, it has an algorithm we can exploit. After spending 2 minutes on the websites, I found out that for every 60 seconds you talk, it gives you some random number of XP. It could detect that you’re spamming so you just have to randomly say something once in every 60 seconds. Easy.

![me6](../../pictures/mee6.jpg)

We use the very useful pyautogui library for this task. It lets you use your keyboard to type and press keys. See where this is going? Rapid coding go! Step 1: get a random number of seconds between 20 to 60 seconds and store it in a variable ( this is the number of seconds we’ll wait after each input ). Step 2: Look what’s inside the variable and wait for that many seconds. Step 3: Type a arbitrary word ( in my case, “hello") and press enter. Step 4: Repeat, keep all this in a loop so it repeats itself. Done. It’s that simple. Pyautogui makes it even easier. You can remove the waiting part to just straight up spam the chat or you can modify the code so it type something meaningful or do whatever your creativity allows you to do!


## What do we learn?


So clearly you can automate a lot using just a few lines of code and as I said, these are just templates. This is the very surface of what you can do with automation and python. You can let your code use your mouse; you can actually make a program that will join online meetings for you automatically on time. You can try automating everything that you do on your computer. You could explore more APIs to do even crazier things. Apps and websites provide developers with their APIs to let us do amazing tasks. Try the Twitter API and the PRAW API for reddit. You can program a script that will check if a new video has come on YouTube and if it has, post an Instagram post. The possibilities are endless. Think of an automation idea and there WILL be a way to make it into a program. (The research for this article was majorly based on the book "Automate the boring stuff with python by Al Sweigart" I suggest you read for extremely detailed description of this topic.) 