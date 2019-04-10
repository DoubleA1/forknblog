<!--
*****************
Header Image
*****************
-->
![](https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260 )

So I pickup my my iphone and head over to my favorite fake news source to read the headlines but something is obviously not right and it cannot be ignored anymore. Ads have taken over most of my small 4 inch iphone screen!

![](https://s3-us-west-1.amazonaws.com/bangequal-media/BlockAdsImg3.jpg)

To make matters worse, I scroll down one time and they kill me with a MODAL AD.>

![](https://s3-us-west-1.amazonaws.com/bangequal-media/BlockAdsImg2.jpg)

OK time to fix this problem. But how?

- Ads are blocked on my laptop using an extension on my browser called adblockplus. They have an app for iphones that costs less than $2.

- It would nice to get rid of ads on all the devices in my house not just my phone, like kid's tablet, wife''s phone, fire stick, etc.

#### Try One

1. First I started reading into Pi-Hole. Its a DNS service that can be configured to run 24hrs on my RaspberryPi. Its supposed to blocks ads before they are downloaded, so it can actually speed up the network.
2. How about we just throw money at the problem? I found a $99 device called adtrap that is supposed to bring me nerdvana.
3. A few years ago I installed custom firmware on my wifi router, just a regular old router purchased from Walmart. I chose to flash DD-WRT over Tomato for obvious reasons. At the time, my idea was to run a VPN service directly on the router, but alas I could never get it to work. Now, if there was only a way to program the router to block all unwanted traffic leveraging the DD-WRT firmware to run a linux script on startup.

#### In the End

![](https://s3-us-west-1.amazonaws.com/bangequal-media/BlockAdsImg1.jpg)

I really wanted to try #1 but decided on #3 instead. It turned out to be the right choice considering how quickly I was able set it up, thanks to [this](http://www.dd-wrt.com/phpBB2/viewtopic.php?p=1039456) forum thread.  Basically, you give the wifi router a list of domains of known ad servers, then just block them. Of course you have to keep your list up to date, but that can be rolled into the script.


