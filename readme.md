1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll :
   getElementById(): It returns a single element with matching ID.
   getElementsByClassName(): It returns HTML elements with matching class.
   querySelector(): It returns first element matching any CSS selector.
   querySelectorAll(): It returns NodeList of all elements matching any CSS selector.

2. How do you create and insert a new element into the DOM?
   // Create element
   const newDiv = document.createElement('div');
   newDiv.textContent = 'Hello World';

   // Insert methods:
   parent.appendChild(newDiv);              // Adds at the end
   parent.insertBefore(newDiv, reference);   // Adds before reference
   parent.prepend(newDiv);                   // Adds at the beginning
   parent.append(newDiv);                     // Adds at the end (modern)

3. What is Event Bubbling? And how does it work?
   Event bubbling is when an event triggers on a child element and then bubbles up through its ancestors. The event travels from the target element up to the root.
   Example: Click on a button inside a div button click fires first, then div click fires, then body click fires.

4. What is Event Delegation in JavaScript? Why is it useful?
   Event delegation is attaching a single event listener to a parent element to handle events for multiple child elements. It works because of event bubbling.
   Why useful: Works for dynamically added elements. Better performance and cleaner code.

5. What is the difference between preventDefault() and stopPropagation() methods?
   preventDefault(): Prevents the browser's default behavior. Like form submission, link navigation etc.
   stopPropagation(): Stops the event from bubbling up to parent elements.