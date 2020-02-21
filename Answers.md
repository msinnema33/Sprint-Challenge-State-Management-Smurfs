1. - [x] What problem does the context API help solve?

    Simplifies State Management.  Eases the myriad of problems and complexity of prop drilling.  It does however make it harder to reuse components. 

2.- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: Dispatched actions are processed by a reducer that accepts the previous state and action and returns the next state of your application.   

    Reducers: The only place to update state.  Actions tell “how” to update state, and maybe what should be updated, but only reducers can make the update. A pure function = no side effects.  They behave similarly to call backs.  They never update the state directly, they only return a new object {state tree}. 

    Store: A single immutable state tree, where all state changes are explicitly handled by dispatching actions. 

3.- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application State: Application state, as the name suggests, are states we want to make available to all components because they contain data needed for the entire application. An example would be logged in user information; we would probably want to save that in the application state as many separate components will need to know if a user is logged in and therefore make a decision as to what will be displayed. To manage the Application state, we can continue to use just React or introduce state management tools like Redux, Mobx, Context API.  

    Component State: Component State as the name implies are states specific to a component. A good example would be handling your input forms; we don't need the current values of each input available to the whole application, so the state itself can be stored within the component. 

4.- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    A Thunk is a term for a function that is returned by another function -- an inner function.  Thunks are used by our action creators to allow us to run async operations in Redux.  Thunk is middleware that intercepts actions and allows the action creators to use asynchronous flow model. 

5.- [x] What is your favorite state management system you've learned and this sprint? Please explain why!

    I think it is hard to tell at this point.  Redux feels super complex to set up, the level of abstraction is hard for beginners to understand.  I can see it working in larger systems.  Context API seems to be easier to set up and get functioning, but it may make your code less DRY.
