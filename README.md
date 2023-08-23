# js-practices

## How to see all the pictures of any website in the Console of Chrome

```Javascript
$$('img').forEach(img => {
  const src = img.src;
  console.log(src)
})
```
