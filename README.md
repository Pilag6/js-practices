# js-practices

## How can I view all the images from any website using the Chrome Console

```Javascript
$$('img').forEach(img => {
  const src = img.src;
  console.log(src)
})
```
