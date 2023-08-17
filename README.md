# Upvote Anywhere

Generate a SVG button that allows you to get upvoted anywhere.

**[👁️‍🗨️ Generate my upvote button ⬆️](https://wp2aqcqkj5.us.aircode.run/create)**

## To be used in GitHub README

<table>
  <tr>
    <td valign="center"><a href="https://wp2aqcqkj5.us.aircode.run/upvote?id=64dc3a330fa968996d352dbd&redirect=https://github.com/akira-cn/upvote-anywhere"><img src="https://wp2aqcqkj5.us.aircode.run/show?id=64dc3a330fa968996d352dbd&noborder=1" width="50px"></a> </td><td>Do you like Upvote Anywhere? If you do, please give it an upvote. </td>
  </tr>
</table>

## To be used in Any Web App

[Try it in CodePen](https://codepen.io/akira-cn-the-selector/pen/XWorRbL)

```html
<img id="upvoteBtn" src="https://wp2aqcqkj5.us.aircode.run/show?id=64dc8e2885f13fbcd52be970" width="35" style="vertical-align: bottom;cursor:pointer;"> Do you like Upvote Anywhere? If you do, please give it an upvote.

<script>
upvoteBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  await fetch('https://wp2aqcqkj5.us.aircode.run/upvote', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({id: '64dc8e2885f13fbcd52be970'}),
  });
  upvoteBtn.src = "https://wp2aqcqkj5.us.aircode.run/show?id=64dc8e2885f13fbcd52be970&t=" + Date.now();
});
</script>
```

## Cookie Policy

Since Upvote Anywhere requires using cookies to track upvote status, when it's used on third-party websites and operated through fetch, it relies on the other party's CORS policy. For instance, CodePen's policy doesn't allow cross-site cookies, which means Upvote Anywhere can't record the voted status. However, we can use a GET request to https://wp2aqcqkj5.us.aircode.run/upvote to store the cookie on the original site, then redirect back to the target URL, just as we've done in our GitHub README.

## Distribution

<img src="https://aircode.io/dashboard-assets/logo_icon_dark.57e92d77.svg"> Upvote Anywhere is build on [AirCode](https://aircode.io/).

You can easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=akira-cn&repo=upvote-anywhere&branch=main&path=&appname=upvote)
