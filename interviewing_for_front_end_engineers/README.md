# Interviewing for Front End Engineers

* <https://frontendmasters.com/courses/interviewing-frontend/>
* <https://docs.google.com/presentation/d/1-04cvp4xDLNb8YRWpkmPTEY_4r-56sM5J178lxjU4vA/edit?usp=sharing>
* <https://github.com/young/frontend-interviewing>
* Podcast: Front End Happy Hour
* 3 types of programmers
  * programming is match
  * programming is for controlling hardware
  * programming is for building things.
  * <https://josephg.com/blog/3-tribes/>
* In JavaScript, how would __you__ define scope?
* Rethinking Failure
  * there's winning and then there's learning.
  * .300 batting average
  * you can always learn from your failures.
  * 1 out of 2 inteviews, you are going to succeed.
* Before you apply
  * what do you like about your current job?
  * what sort of things are you looking for in your next role?
  * Which companies have appealing engineering cultures? What makes it appealing?
* About your resume
  * one page
  * skills
  * experience
  * technology familiarity
  * education
  * accomplishments
* Evaluating Applicants
  * Which roles does this person fit?
  * What sort of experience is required?
  * Is there any bias in your selection process?
* Initial Call
  * What do you do currently?
  * What are some projects you've worked on recently?
  * What are you looking for in your next role?
  * Why do you want to work for ___?
  * What is your availablity for the next steps?
* Preparing Interview Questions
  * How many steps are in the interview process? How long does it generally take?
  * How big is your engineering team?
  * Which team would I be interviewing for?
  * What is the culture like?
  * Who are your competitors?
  * What sort of projects would I work on?
* Prescreen Javascript Questons
  * What is the difference between const, let, and var?
  * Explain prototypical inheritance
  * What does 'this' mean in JavaScript?
  * What is the data structure of the DOM? tree
  * What is a Stack? What is a Queue? How would you create those
  data strucutes in JavaScript?
  * How can you tell if an image element is loaded on a page?
  * What are call() and apply()?
  * What is event delegation?
  * What is a worker? When would you use one?
* Code Test Overview
  * Make your code as readable as possible.
    * Comment your code.
    * Don't over complicate the architecture.
  * Don't import too many libraries.
  * If you have time, add unit tests.
  * Ask questions!
* Giving a code test
  * Make the problem as straightforward as possible.
  * Be honest with the time constraints.
  * Have a code review checklist.
* Big-O
  * Big Omega - "best case"
  * Big Theta - "average case"
  * Big O - "worst case"
  * Count the loops.
* Phone Screen Coding Exercise
  * <https://codepen.io/jemyoung/pen/0817cc37159377752b6cd9bf70d40883?editors=1011>
* On-Site Preparation
  * Practice writing code without a computer.
  * Go over general sample problems.
  * Ask your friends to test you.
  * Try to ask what the style of technical questions will be.
* Strings
  * primitive type
  * useful methods
    * .split()
    * .toLowerCase()
    * .substring()
    * .startsWith()
  * Strings are immutable.
* Reversing a String
  * <https://github.com/young/frontend-interviewing/blob/master/questions/reverse.js>
  * Talk out what you want.

  ```bash
  function reverse(str) {
    return str.split('').reverse().join(');
  }
  ```

* Built-in Methods
  * Arrays
    * Object.entries()
    * Array.from()
    * [...item]
  * .isArray()
  * .filter()
  * .reduce()
  * .concat()
  * .join()
  * .pop()
  * .push()
  * .map()
* Removing Duplicate Strings Exercise
  * <https://github.com/young/frontend-interviewing/blob/master/questions/duplicateStrings.js>

  ```bash
  function removeDuplicates(str) {
    const arr = str.split(' ');

    const set = new Set(arr);
    const newString = [...set].join(' ');

    return newString;
  }
  ```

* Flattening an array
  * <https://github.com/young/frontend-interviewing/blob/master/questions/flatten.js>

  ```bash
  function flatten(arr) {
    arr.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc = acc.concat(flatten(item));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);

    return someNewArray;
  }
  ```

  * Scope
    * .call()
    * .apply()
    * .bind()
    * <https://github.com/young/frontend-interviewing/blob/master/questions/bind.js>

    ```bash
    function.prototype.bind = function(context) {
      const fn = this;

      return function() {
        fn.call(context);
      }
    }
    ```

* Timing
  * setInterval()
  * setTimeout()
  * <https://github.com/young/frontend-interviewing/blob/master/questions/debounce.js>

  ```bash
    fn1 = debounce(fn, time);
    fn1()

    function debounce(fn, time) {
      let setTimeoutId;

      return function() {

        if (setTimeoutId) {
          clearTimeout(setTimeoutId);
          // throttle - same thing as debounce but
          // just return here instead of clearTimeout.
        }

        setTimeoutId = setTimeout(() => {
          fn.apply(this, arguments);
          setTimeoutId = null;
        }, time)
      }
    }
  ```

* Trees
  * Root
  * Nodes
    * Children
    * Parent
  * <https://github.com/young/frontend-interviewing/blob/master/questions/domTree.js>

  ```bash
  function reversePath(element, root) {
    const path = [];
    let pointer = element;

    while(pointer.parent) {
      const index = pointer.parent.children.indexOf(pointer);
      path.push(index);

      pointer = pointer.parent;
    }

    pointer = root;

    while (path.length) {
      pointer = children[path.pop()];
    }
  }
  ```

* Rendering
  * requestAnimationFrame()
  * <https://github.com/young/frontend-interviewing/blob/master/questions/moveElement.js>

  ```bash
    function moveElement(duration, distance, element) {
      const start = performance.now();

      function move(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        const amountToMove = progress * distance;

        element.style.transform = `translateX(${ amountToMove }px)`;

        if (amountToMove < distance) {
          requestAnimationFrame(move);
        }
      }


      requestAnimationFrame(move);
    }
  ```

* Promises
  * <https://github.com/young/frontend-interviewing/blob/master/questions/sleep.js>

  ```bash
    function sleep(time) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time)
      });
    }
  ```

* Exercise Answers
  * <https://github.com/young/frontend-interviewing/tree/master/answers>
