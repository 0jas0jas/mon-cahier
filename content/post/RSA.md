---
title: "The cleverest whisper: The RSA Algorithm."
date: 2022-03-21T18:35:38+05:30
# weight: 1
# aliases: ["/first"]
tags: ["Cryptography", "Encryption"]
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

Known by so many different names, The RSA algorithm, the Asymmetric Encryption or the Public-Private key cryptography is easily one of the pillars that hold the largest network known to us together: the internet. It’s clever. It’s efficient. And it feels seemingly “loophole free”. We’ve all played with Caesar Cipher; Caesar Cipher might just be the simplest example of cryptography (probably the oldest) that we can play with. What’s up with this fancy new stuff then? Well, our world has gotten a lot bigger and a lot more complex in the last century. We’ve had such great technological and scientific breakthroughs that if we stop evolving our cryptosystems, we might have a huge privacy problem, too. Of course, people don’t want their chats to be read or their pictures to be seen by hackers or just goofy governments for “national privacy”. That’s why we have encryption and that’s why we have RSA.

![](https://images.unsplash.com/photo-1586661615438-349a276d098b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)

Ron Rivest, Adi Shamir and Leonard Adleman (their last name initials is where the letters in this cryptosystem come from) are one of the most prominent minds in cryptography and in computer science of all time. They developed the RSA algorithm in 1977 and, deservingly, got the Turing Awards for their remarkable breakthrough in 2002. Their idea was unconventional and unforeseen for their age and now is the base for our safe communications.

## The Algorithm

It’s clever. The algorithm relies on two sets of keys. Public and Private. The public key, as the name suggests, is available to everyone (not really but anyone can access it and that won’t affect the security). The private key is private. Both the sender and receiver have their own private keys.

Let’s bring Alice and Bob to help us grasp this. Alice wants to contact Bob and ask him out for coffee, but she’s afraid Hac Erman would intercept their messages and come to the café too, which would just be horrendous for Alice and Bob (Hac is a HUGE pain in the butt). Alice and Bob decide to use the RSA encryption method to talk. Initially, Alice sends Bob a simple plain text message: “Hey, I wanna talk.”. This intrigues Hac, naturally, but Alice doesn’t care.


![Sending](../../pictures/RSA/SendingMessage.png)


Bob reads the message and nods. He then creates two keys, the first key would encrypt Alices messages (thus, being the public key) and the second key would decrypt her messages (therefore, serving as Bob’s Private key). He then sends over the public key to Alice. Hac being the annoying person he is, gets his hand on the public key and thinks he’s making progress. Alice gets the key too.


![Receiving the message](../../pictures/RSA/recievingMessage.png)

She encrypts the message with the Public Key AND her own private key that she created. (The message was “Hey do you wanna go out for coffee?”). The message is double encrypted. Once, by the public key and then again by Alice’s key. When Alice sends the message, Hac will try to decrypt using the public key only to find out he needs Bob’s Private key, as well.

![Resending the message](../../pictures/RSA/resendingMessage.png)

Bob receives the message, decrypts it first using a public key and then his own private key to read the message. He writes his own message: “Nope”. And encrypts it with both keys again. Alice finds the message, decrypts it with both the keys and frowns. The end.

![nope](../../pictures/RSA/nope.png)

If this analogy didn’t make sense to you and you’re a “math person”, perhaps this will satisfy you. If not, you might want to stop reading because things are about to get MATHSY *gasp*.

## THE MATH.

Okay so, this example might be a simplification of the real process because obviously in real life, you’d require larger numbers (sometimes hundreds of digits) for the most impregnable cryptosystem. .

We know that we require two keys to decrypt a particular message: a public key and our own private key. Let me demonstrate the entire method first. Then, we’ll see HOW we got to the things we got to.

a
Encryption Keys:
 Public Key: 14
 Private Key (Alice): 5 #Small Number
                      serve as simplification
 
Decryption Keys:
 Public Key: 14 #Remains the same
                    
 Private Key (Bob): 11
 
Let's say Alice wants to send the
                      number 2 to Bob. Here's what she'll do:
                    
 
Take 2 and raise it to the power of
                      the private key
2
5
 =  32
Mod the result using the public key
                    
32 MOD 14 =  4
 
So, we get 4  as our cipher text. THIS will go to
                      Bob. Bob will get Alice’s message and decrypt using the decryption keys as follows:
 
Take 4 and raise to the power of the
                      private key
4
11
 =  4 194 304
#Notice how the number grew up so
                      large already
Mod the result using the public key
                    
4 194 304 MOD 14 =  2
 #Voila
 
Bob successfully decrypted Alice’s
                      message, but how did we decide on these values for private and public keys? Let’s go through the
                      steps in the algorithm.
 
1.  Choose two prime numbers; x and y
                    
The number they choose here are
                      ENORMOUS but we’re going with small numbers
 
x =  2 ;  y =  4
 
2.  Multiply them, N
N =  2 * 7 =  14
 
3.  We’ll find the 
ϕ
 function now. Let’s see what this
                      function is:
1 2 3 4 5 6 7 8 9 10 11 12 13 14
These are all the numbers till 14
The factors of 14 are only 2 and 7 (1
                      excluded) and we know that because we got 14 by multiplying two prime numbers.
Now from this list I’m going to cross
                      off all the numbers which SHARE a factor with 14 (remember 14 has only 2 factors)
So, basically, all the even numbers
                      are crossed out and 7 is crossed out, giving us:
1 3 5 9 11 13
These numbers are also known as the
                      co-primes of 14
How many numbers are left? 6.
So the 
ϕ
 function is this number. 
ϕ
(
14
)
 =  6
 
4.  The next step is to choose e
e has some conditions
{
 1 <  e <  ϕ
(
N
)
,  
 Co - prime with N ,  ϕ
(
N
)
 
}
 
If you apply these conditions, you’ll
                      realise the only number appropriate here is 5
So 
e =  5
So we have the encryption keys. 5 and
                      14.
Now for the decryption keys. 
 
5. Choose d. 
d * e 
(
MOD ϕ
(
N
)
 =  1
This is our key to finding d.
If you work this out, you’ll find out
                      that one of the numbers that follow this rule is 11. Our final private key!
(There is ONE number before 11 that
                      also satisfies the equation, however that’ll make things too easy for Hac Erman so we avoid.
                    
 


There we have it. Both our private keys and our public key. That, ladies and gentlemen, is the RSA cryptographic algorithm.
