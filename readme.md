**Settings:**

After the body tag, paste the following code:
```js
<script src="/patch/to/slider.js"></script>
 <script>
     let slider = new Slider(".target", ['/patch/to/image'], { auto: {} });
 </script>
```
The last parameter when creating a slider is an object with settings.

At the moment the option `auto:{}` is required.

It has the following parameters:

```
auto: {
    active: false || true,
     timeout: 3500
}
```
`timeout` - ms.

Also, the settings object can look like this:

```
{
    duration: 600,
    auto: {
        active: false,
        timeout: 3500
    }
}
```
`duration` - The duration of the animation change slide, ms

`auto.timeout` - Slide change interval, ms

`auto.active` - Turn automatic slide change on or off, bool

The second parameter specifies an array with images

Look like this
```
[
    '/patch/to/image',
    '/patch/to/image2',
    '/patch/to/image3'
]
```

[DEMO](https://kedoper.github.io/simpleSlider/demo)
