# UAP Awareness website


## Development Notes

Based on the current trends and popular dimensions, here are some preferred CSS media query breakpoints for 2024:

### Mobile-first approach

* `sm` - Small screens: 320px to `480px` (e.g., iPhone 4/5, older Android devices)
* `md` - Medium screens: 481px to `768px` (e.g., iPhone 6/7, most Android devices)
* `lg` - Large screens: 769px to `1024px` (e.g., iPad, larger Android devices)
* `xl` - Extra large screens: `1025px` and above (e.g., desktop monitors, larger tablets)
Here's an example of how you can create CSS media queries for the .hero class:
```css
/* Small screens (320px - 480px) */
@media only screen and (max-width: 480px) {
  .hero {
    background-image: url("../assets/hero01-sm.webp");
  }
}
/* Medium screens (481px - 768px) */
@media only screen and (min-width: 481px) and (max-width: 768px) {
  .hero {
    background-image: url("../assets/hero01-md.webp");
  }
}
/* Large screens (769px - 1024px) */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .hero {
    background-image: url("../assets/hero01-lg.webp");
  }
}
/* Extra large screens (1025px and above) */
@media only screen and (min-width: 1025px) {
  .hero {
    background-image: url("../assets/hero01-xl.webp");
  }
}
```

### Images

hero01, hero15, hero17, hero20, hero24 