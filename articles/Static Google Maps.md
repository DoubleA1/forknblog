![](https://images.pexels.com/photos/1468657/pexels-photo-1468657.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940)

<br/>

A correct implementation of Google Maps can improve speed. If you dont need an interactive map, consider using a static map instead. In turn, you will cut down on page requests and reduce load time. Visitors to your website will appreciate the performance boost of your leaner website.

<br/>

#### Maps Embed API

<br/>

Google Maps is a powerful tool with many cool features. When you embed a map, these features are extended to your visitors screen. They see an interactive map with pan and zoom functionality, however, these features come at a cost. Extra loading time is needed for all of the bells and whistles. Take a look at this Google Map for example:

<br/>

![](https://s3-us-west-1.amazonaws.com/bangequal-media/gmap.jpg)

<br/>

#### Static Maps API

<br/>

One alternative to embedding a map involves replacing it with an image of the map, otherwise known as a static map. An image, of course, cannot be panned or zoomed, so consider the situation and decide whether the loss in functionality is right for you. Lets have a look:

<br/>

![](https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=14&scale=2&size=500x250&maptype=roadmap&markers=color:red%7Clabel:A%7C2333+N+State+Rd+7+Margate,+FL&key=AIzaSyCgu_Q8xV12Q5H-WFjYmYcWzDO6NOxr8hk)

<br/>

#### Improve Static Map Appearance

<br/>

When comparing the two maps, you are likely notice that the static map looks generic. The white address box is missing and the location marker looks simpler. Dont fret though, we can build our own address box with html and css. Then, after we replace the location marker with a thumbnail image, our static map wont look so basic anymore.

<br/>

##### Starting Point

<br/>

All we have is a container element with a background image of our map.

<br/>

*HTML*

<br/>

`<div class='locationMap'></div>`

<br/>

*CSS*

<br/>

```
.locationMap {
background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=15&scale=2&size=500x250&maptype=roadmap&markers=color:red%7Clabel:A%7C2333+N+State+Rd+7+Margate,+FL);
background-repeat: no-repeat;
height: 300px;
width: 100%;
}
```

<br/>

##### Address Box

<br/>

Start by overlaying a white box inside of the container. Within the box, add text for the location name and address. Style the box with a shadow and align text to improve appearance. Lastly, wrap the location name with a link to the full featured, interactive map.

<br/>

*HTML*

<br/>

```
<div class='locationMap'>
  <div class='addressBox'>
    <a href='https://www.google.com/maps/place/Leo\'s+Beauty+Salon/@26.256729,-80.202035,16z/data=!4m5!3m4!1s0x0:0x1829700d27d2cc65!8m2!3d26.2567294!4d-80.2020349?hl=en-US' class='locationName'>Leos Beauty Salon</a>
    <p>2525 N State Rd 7 Margate, FL 33063 </p>
  </div>
</div>
```

<br/>

*CSS*

<br/>

```
.locationMap {
background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=15&scale=2&size=500x250&maptype=roadmap&markers=color:red%7Clabel:A%7C2333+N+State+Rd+7+Margate,+FL);
background-repeat: no-repeat;
height: 300px;
width: 100%;
}
.addressBox {
background-color: white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
text-align: center;
width: 9.375rem;
font-size: .85rem;
line-height: 150%;
}
.locationName {
font-weight: bold;
text-decoration: none;
}
```

<br/>

##### Location Marker

<br/>

Replacing the default location marker with a custom image is easy. In the background image CSS, look for a parameter named markers. Specify that we will be using an icon and then provide its path. Use the example below for reference.

<br/>

*CSS* 

<br/>

```
.locationMap {
background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=15&scale=2&size=500x250&maptype=roadmap&markers=icon:http://leosbeautysalon.com/assets/images/favicon.png%7C2333+N+State+Rd+7+Margate,+FL);
background-repeat: no-repeat;
height: 300px;
width: 100%;
}
```
<br/>

##### Result

<br/>

![](https://s3-us-west-1.amazonaws.com/bangequal-media/staticgmap.jpg)


