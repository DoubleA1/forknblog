<img src='https://images.pexels.com/photos/1468657/pexels-photo-1468657.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940 '/><br />A correct implementation of Google Maps can improve speed. If you dont need an interactive map, consider using a static map instead. In turn, you will cut down on page requests and reduce load time. Visitors to your website will appreciate the performance boost of your leaner website.<br /><br />
        <span style='font-size:x-large;font-weight:bold;'>Maps Embed API</span><br /><br />
        Google Maps is a powerful tool with many cool features. When you embed a map, these features are extended to your visitors screen. They see an interactive map with pan and zoom functionality, however, these features come at a cost. Extra loading time is needed for all of the bells and whistles. Take a look at this Google Map for example:<br /><div style='width=100%;display:flex;justify-content:space-around'><div style='height:auto;width:80%;display:flex;justify-content:space-around;flex-direction:column;align-items:center;'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.152012363639!2d-80.20422358530921!3d26.25672938341448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d904ba5bdb4cf1%3A0x1829700d27d2cc65!2sLeo&#39;s+Beauty+Salon!5e0!3m2!1sen!2sus!4v1477937769010' frameborder='0' style='border:0;width:100%;height:19rem;margin-top:1rem;'></iframe><br /></div></div></div><br />
        <span style='font-size:x-large;font-weight:bold;'>Static Maps API</span><br /><br />
        One alternative to embedding a map involves replacing it with an image of the map, otherwise known as a static map. An image, of course, cannot be panned or zoomed, so consider the situation and decide whether the loss in functionality is right for you. Lets have a look:</p><br /><div style='width=100%;display:flex;justify-content:space-around'><div style='height:auto;width:80%;display:flex;justify-content:space-around;flex-direction:column;align-items:center;'><div style='background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=14&scale=2&size=500x250&maptype=roadmap&markers=color:red%7Clabel:A%7C2333+N+State+Rd+7+Margate,+FL&key=AIzaSyCgu_Q8xV12Q5H-WFjYmYcWzDO6NOxr8hk);background-repeat:no-repeat;background-position:center;height:300px;width:100%'></div><br /></div></div><br />
        <span style='font-size:x-large;font-weight:bold;'>Improve Static Map Appearance</span><br />
        When comparing the two maps, you are likely notice that the static map looks generic. The white address box is missing and the location marker looks simpler. Dont fret though, we can build our own address box with html and css. Then, after we replace the location marker with a thumbnail image, our static map wont look so basic anymore.<br /><br />
        <span style='font-size:large;font-weight:bold;'>Starting Point</span><br />
        All we have is a container element with a background image of our map.<br /><br /><span style='margin-left:2rem;text-decoration:underline'>HTML</span><br/><div style='width=100%;display:flex;justify-content:space-around'><div style='height:4rem;width:70%;'><br />
        &#60;div class='locationMap'&#62;<br />
        &#60;/div&#62;
        <br /></div></div><br/><span style='margin-left:2rem;text-decoration:underline'>CSS</span><br/><div style='width=100%;display:flex;justify-content:space-around'><div style='height:9rem;width:70%;overflow-x:scroll'>
        .locationMap { <br />
        <p style='margin-left:1rem;'>background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=15&scale=2&size=500x250&maptype=roadmap&markers=color:red%7Clabel:A%7C2333+N+State+Rd+7+Margate,+FL);<br />
        background-repeat: no-repeat;<br />
        height: 300px;<br />
        width: 100%;<br />
        </p>}
        </div></div><br/><br />
        <span style='font-size:large;font-weight:bold;'>Address Box</span><br />
        Start by overlaying a white box inside of the container. Within the box, add text for the location name and address. Style the box with a shadow and align text to improve appearance. Lastly, wrap the location name with a link to the full featured, interactive map.<br /><br /><span style='margin-left:2rem;text-decoration:underline'>HTML</span><br/><div style='width=100%;display:flex;justify-content:space-around'><div style='height:12.5rem;width:70%;overflow-x:scroll'><br />
        &#60div class='locationMap'&#62 <br />
        <span style='margin-left:1rem'> &#60div class='addressBox'&#62 </span><br />
        <p style='margin-left:2rem'> &#60a href='https://www.google.com/maps/place/Leo\'s+Beauty+Salon/@26.256729,-80.202035,16z/data=!4m5!3m4!1s0x0:0x1829700d27d2cc65!8m2!3d26.2567294!4d-80.2020349?hl=en-US' class='locationName'&#62 <br />
        &#60p&#62Leos Beauty Salon&#60/a&#62 <br />
        2525 N State Rd 7 <br />
        Margate, FL 33063 &#60/p&#62 </p>
        <span style='margin-left:1rem'> &#60/div&#62 </span> <br />
        &#60/div&#62 <br />
        <br /></div></div><br/><br /><span style='margin-left:2rem;text-decoration:underline'>CSS</span><br/><div style='width=100%;display:flex;justify-content:space-around'><div style='height:18.75rem;width:80%;overflow-x:scroll'><br />
        .locationMap {<br />
        <p style='margin-left:1rem'>background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=15&scale=2&size=500x250&maptype=roadmap&markers=color:red%7Clabel:A%7C2333+N+State+Rd+7+Margate,+FL);<br />
        background-repeat: no-repeat;<br />
        height: 300px;<br />
        width: 100%; </p><br />
        }<br />
        <br />
        .addressBox {<br />
        <p style='margin-left:1rem'>padding: .937rem;<br />
        margin: .625rem 0 0 .625rem;<br />
        background-color: white;<br />
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);<br />
        text-align: center;<br />
        width: 9.375rem;<br />
        font-size: .85rem;<br />
        line-height: 150% </p><br />
        }<br />
        <br />
        .locationName {<br />
        <p style='margin-left:1rem'>font-weight: bold;<br />
        text-decoration: none;<br /> </p>
        } 
        <br /></div></div><br/>
        <span style='font-size:large;font-weight:bold;'>Location Marker</span><br /><br />
        Replacing the default location marker with a custom image is easy. In the background image CSS, look for a parameter named markers. Specify that we will be using an icon and then provide its path. Use the example below for reference.<br /><br /><span style='margin-left:2rem;text-decoration:underline'>CSS</span><br/><div style='width=100%;display:flex;justify-content:space-around'><div style='height:11.25rem;width:70%;overflow-x:scroll'><br />
        .locationMap {<br />
          <p style='margin-left:1rem'>background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=15&scale=2&size=500x250&maptype=roadmap&markers=icon:http://leosbeautysalon.com/assets/images/favicon.png%7C2333+N+State+Rd+7+Margate,+FL);<br />
          background-repeat: no-repeat;<br />
          height: 300px;<br />
          width: 100%;<br /> </p>
        }<br />
        <br /></div></div><br/>
        <span style='font-size:large;font-weight:bold;'>Result</span><br /><br />
        <div style='width=100%;display:flex;justify-content:space-around'><div style='height:auto;width:80%;display:flex;justify-content:space-around;flex-direction:column;align-items:center;'><div style='background-image: url(https://maps.googleapis.com/maps/api/staticmap?center=2333+N+State+Rd+7+Margate,+FL&zoom=14&scale=2&size=500x250&maptype=roadmap&markers=icon:http://leosbeautysalon.com/assets/images/favicon.png%7C2333+N+State+Rd+7+Margate,+FL&key=AIzaSyCgu_Q8xV12Q5H-WFjYmYcWzDO6NOxr8hk);background-repeat:no-repeat;background-position:center;height:300px;width:100%'><div style='padding:.937rem;margin:.625rem 0 0 .625rem;background-color:white;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);text-align:center;width:9.375rem;font-size:.85rem;line-height:150%'><a href='https://www.google.com/maps/place/Leo\'s+Beauty+Salon/@26.256729,-80.202035,16z/data=!4m5!3m4!1s0x0:0x1829700d27d2cc65!8m2!3d26.2567294!4d-80.2020349?hl=en-US' style='font-weight:bold;text-decoration:none;'><p>Leos Beauty Salon</a><br/>2525 N State Rd 7<br/>Margate, FL 33063</p></div>"
