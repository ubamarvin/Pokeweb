Api Best Practices for pokepictures
Use Centralized State (Pinia/Vuex): For shared state like Pokémon data and game data. -> best solution thus far. include loading;

Use Provide/Inject or Composables: For state that’s specific to certain parts of the app. ( Api call is made every time)

Optimize API Calls: Avoid redundant fetches by caching data in the store.
Lazy Load Data: Only fetch data when needed (e.g., use route guards for pre-fetching).

composition api for gameData? 

Leverage Router.beforeEach for Pre-Fetching: For views that need data before rendering.



###Styles

-In Vue, when you assign a class to a custom component, Vue automatically applies that class to the root element of the child component if the component has a single root node.