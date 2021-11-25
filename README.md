# lazy-img

Simple images lazy load module 

**Usage**

1. Create image element with _**data-srс**_ attribute:

```html 
<img src="" data-src="image.jpg" alt="">
```

2. Connect lazy-img.min.js.

```js 
<script src="./dist/lazy-img.min.js"></script>
```

3 .Init plugin.

```js
LazyImg.init() // all 'img' tags with default "rootMargin" and "threshold"
LazyImg.init(".lazy") // specific img selector with default "rootMargin" and "threshold"
LazyImg.init(".lazy", "50px", 0.5) // specific img selector with specific "rootMargin" and "threshold" 
```
     
**Params**

##### `param1`
Target element.

*Type:* String  
*Required:* false  
*Default:* 'img'

##### `param2`
RootMargin. Native Intersection Observer parameter for margin around the image element.

*Type:* String  
*Required:* false  
*Default:* '0px'

##### `param3`
Threshold. Native Intersection Observer parameter which indicates at what percentage of the image element visibility the lazy loading should be executed.

*Type:* Number  
*Required:* false  
*Default:* 0
