## Testing

The Simon Game has been tested on various browsers and devices to ensure a seamless user experience.

### Validator Testing

- #### HTML Validator

  - ##### index.html - No errors or warnings

    ![html validator index](./assets/images/html-index.png)

  - ##### game.html - No errors - potential warning in regards to aria labels used
    ![html validator game](./assets/images/html-game.png)
    correctly for misuse on colours for the game. However this is correclty used for accessibility due to screen readers being able to inform users what colour they may be interacting with
  - ##### howtoplay.html - No errors or warnings

    ![html validator howtoplay](./assets/images/html-howtoplay.png)

  - ##### highscore.html - No errors or warnings
    ![html validator highscore](./assets/images/html-highscore.png)

- #### CSS Validator

  - ##### style.css - No errors or warnings
    ![css validator check](./assets/images/css-validator.png)

- #### JSLint Validator

  - ##### index.js - No errors or warnings
    ![index lint check](./assets/images/index-js-lint.png)
  - ##### game.js - startPage function is stated as an unused variable (This variable is initiated within the game.html on a "onsubmit event")

    ![game lint check](./assets/images/game-js-lint.png)

  - ##### highscore.js - No errors or warnings
    ![highscore lint check](./assets/images/highscore-js-lint.png)

### Lighthouse Report

- #### Desktop

  - ##### index.html
    ![index page Lighthouse Desktop](./assets/images/index-lighhouse-desktop.png)
  - ##### game.html
    ![Game page Lighthouse Desktop](./assets/images/game-lighthouse-desktop.png)
  - ##### howtoplay.html
    ![How to play page Lighthouse Desktop](./assets/images/howtoplay-lighthouse-desktop.png)
  - ##### highscore.html
    ![Highscore Lighthouse Desktop](./assets/images/highscore-lighthouse-desktop.png)

- #### Mobile

  - ##### index.html
    ![index page Lighthouse Mobile](./assets/images/index-lighthouse-mobile.png)
  - ##### game.html
    ![Game page Lighthouse Mobile](./assets/images/game-lighthouse-mobile.png)
  - ##### howtoplay.html
    ![How to play page Lighthouse Mobile](./assets/images/howtoplay-lighthouse-mobile.png)
  - ##### highscore.html
    ![Highscore Lighthouse Mobile](./assets/images/highscore-lighthouse-mobile.png)
