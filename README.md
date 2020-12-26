# progress-steps
Step progress for wizards.


### things learnt in this project.

- CSS variable declaration. 

  ```
  :root {
    --fill: #0096c7;
    --empty: #8d99ae;
  }
  ```



- Progress steps logic

  ```js
    // [ (activeSteps - 1) / (numberOfSteps - 1)]
    let width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  ```
