# lazy-img

**Usage**

1. Create image element with "data-src" attribute:

```html 
<img src="" data-src="image.jpg" alt="">
```

2. Connect lazy-img.min.js.

```js 
<script src="lazy-img.min.js"></script>
```

3 .Init plugin.

```js
LazyImg.init() // all 'img' tags
LazyImg.init('.lazy') // specific img selector 
```
     
**Params**

##### `param1`
Target element.

*Type:* String  
*Required:* false  
*Default:* 'img'
