# Kanban
Drag and drop kanban built with test-driven-development, custom state management and browser event utilities.

## Tech stack / Libraries
* React
* Typescript
* Vite
* Tailwind

## Testing
* Vitest
* Testing Library (React)
* Mock Service Worker (MSW)
* Playwright

## Technical Callenges

### Storing hierarchical data in state

Kanban boards are naturally represented as deeply nested objects (boards -> columns -> cards -> checklists), so I initially started managing the data in state as deeply nested objects. Even though it was working fine, the state updates were very verbose - this led to me exploring frontend data normalisation, which essentially meant flattening out the data structure to look more like a traditional relational database with entities (tables) which reference eachother. TDD makes these kinds of core, 'high risk' changes much smoother since the existing behaviour is driven by user-centric tests, which gives great confidence once the tests are green after a big refactor.