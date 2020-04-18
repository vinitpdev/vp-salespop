# VP Sales Pop - A jQuery Library To add Live Sales Notifications to your website

You can use this addon with Shopify, Woocommerce or any custom website with your own backend code.

<div style='display:flex;' >
<img src="https://i.ibb.co/6tkCT1F/Screenshot-2020-04-18-at-9-47-07-AM.png" alt="Screenshot-2020-04-18-at-9-47-07-AM" border="0">
<img src="https://i.ibb.co/Nn1SXgt/vp-salespop-previee-2.jpg" alt="vp-salespop-previee-2" border="0">
</div>

## Getting Started

These Instructions will help get you started with the library.

### Prerequisites

What things you need to install the software and how to install them

```
- JQuery
```

### Installing


First we need to add the css file

```
<link rel='stylesheet' href='vp-salespop.css'>
```

next comes the js file with our config variable
```
<script>
  var vinPopSettings = {
      names : [ 'Vinit Patil', 'Darshil Savla', 'Roopesh Singh' ],
      products : [ 'Original Mattress' , 'Latex Mattress', 'Bed Base', 'Pillow' , 'Protector' ],
      locations : [ 'Mumbai, India' , 'Gandinagar, Gujrat',  'Santacruz West' , 'Kalina'] ,
      images : [] ,
      randomImages : true,
      hideAfter : 4000 ,
      interval : 5000,
      subtitle : 'Seliing Hot',
      blinkSubtitle : true,
      slideFrom : 'left',
  }
</script>
<script src='vp-salespop.js'></script>
```
