# Custom form elements
An elegant way to tell javascript when your CSS breakpoints trigger.

## Usage
```css
@media screen {
    body:before { content: 'desktop'; display: none; }
}
@media screen and (max-width: 768px) {
    body:before { content: 'tablet'; }
}
@media screen and (max-width: 500px) {
    body:before { content: 'mobile'; }
}
```
```javascript
$(window).on('device_change', function(){

    // Do something based on device
    var device = get_device();
});
```
