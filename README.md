
# Toasty
A simple and lightweight JavaScript library to show toast notifications on the center top of your webpage

## Installation
Just clone the toasty repo or copy the JS and CSS code

```sh
# Add the files to your code
CSS: <link rel="stylesheet" href="your-project/toasty/toasty.css"/>
JavaScript: <script src="your-project/toasty/toasty.js"></script>
```
## How to use
```sh
# Declare the variable Toasty and call the function showToast in your event function.
 Toasty.showToast(title, message, icon, timer)
```
##  Reference
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Your toast title to show |
| `message` | `string` | **Required**. Your toast message to display |
| `icon` | `string` | Your toast icon could be null or ' '|
| `timer` | `number` | Timer on how long the toast will display. If null the default is 3000ms|

## Example
```sh
# Function button click
 button.addEventListener('click', function(){
  Toasty.showToast('Send Success', 'Message send successfully', '<i class="fa-solid fa-circle-check"></i>', 5000)
})
// or 
 button.addEventListener('click', function(){
  Toasty.showToast('Send Success', 'Message send successfully', null, null)
})
```

