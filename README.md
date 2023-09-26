# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Where I struglled](#where-i-struggled)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)
![](/my-desktop-screenshot-1440.png)
![](/my-desktop-screenshot-1440-error.png)
![](/my-mobile-screenshot-375.png)

### Links

- Solution URL: [Solution code on Github](https://github.com/kevinx9000/base-apparel-coming-soon-page)
- Live Site URL: [Live site](https://kevinx9000.github.io/base-apparel-coming-soon-page)

## My process

### Built with

- HTML
- CSS
- CSS Grid
- Desktop-first workflow

### Where I struggled

I got this as far as I could take it, but then had to stop before I went mad. Here's where I need help and guidance:

- **Layout:** the sneaky part from the design examples (in my DESIGN folder) is how the layout changed from desktop to mobile. Since the location of the hero image changes in the flow, I went with `grid-template-areas` but didn't work out perfectly. For some reason it also left white space on the right of my mobile view.
- **Submit button:** Trying to position it *inside* the input field. I used positioning, but when the resposive layout changes, sometime it would be off by a few pixels and no longer fit neatly into the input bar.
- **Background image:** Couldn't seem to control it the way I wanted to and matcht the *Design* example. The example seems more transparent and covers more of the page. I tried `cover` obviously, but that made it too huge so you couldn't see the whole design. This is probably related to my choice of layout above and impacted by my choice of Grid layout.

And probably a few more things, but those are the two major issues. I plan to come back and work this again sometime, but I wanted to submit it now as my best effort at the moment, until I can get some tips on how I could improve it.

## Author

- Website - [My portfolio website](https://www.kevinherrmann.quest)
- Frontend Mentor - [@kevinx9000](https://www.frontendmentor.io/profile/kevinx9000)
