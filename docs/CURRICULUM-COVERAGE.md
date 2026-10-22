# Curriculum coverage

27 chapters, 92 individual lessons, 23 executable projects (including the capstone), 92 exercises, 92 quiz questions, and 276 interview prompts.

All syllabus chapter numbers 00–26 are present. Lesson titles group closely related topics; the mapping below lists the teaching topics inside each lesson. Advanced systems concepts are explicitly conceptual when they need infrastructure.

## 00 Course Introduction

### Think in user interfaces

- What React is and what it solves
- React versus vanilla JavaScript
- React versus React Native

### Understand the toolchain

- What Vite is and why it is used
- Frontend development roadmap
- How to use this repository

### Practice with feedback

- How to practice effectively
- Study workflow
- Self-assessment

## 01 Web Development Foundations

### Build a meaningful document

- HTML structure and semantic HTML
- CSS fundamentals
- DOM and browser rendering

### Connect browser and server

- JavaScript execution in browsers
- HTTP basics
- Client-server architecture

### Inspect and collaborate

- Browser developer tools
- Git and GitHub basics
- Debugging workflow

## 02 Modern JavaScript for React

### Values, functions, and immutable data

- let, const, and scope
- Primitive and reference values
- Functions and arrow functions
- Arrays and objects
- Template literals, optional chaining, and nullish coalescing

### Transform collections and modules

- map, filter, reduce, find, and some
- Destructuring and spread in collections
- Modules and imports/exports (ES modules)
- Essential JavaScript interview questions

### Closures, callbacks, and async work

- Closures and lexical scope
- Callbacks
- Promises and async/await
- Fetch API and error handling
- Immutability and React use case

## 03 React and Vite Setup

### Install and run on Windows

- Node.js and npm prerequisites
- Create a project with Vite
- Windows PowerShell setup instructions

### Read the application entry point

- Project structure
- package.json and scripts
- Development server

### Build, configure, and diagnose

- Build and preview
- Environment variables and Vite conventions
- Common installation errors

## 04 JSX and Components

### Write JSX expressions

- JSX syntax
- Expressions in JSX
- JSX attributes

### Compose function components

- Component naming
- Functional components
- Component composition and Fragment syntax

### Conditions and styles

- Conditional rendering
- Styling components
- Common JSX errors

## 05 Props and Data Flow

### Pass and destructure props

- What props are
- Passing values
- Destructuring props and default values

### Use children for flexible composition

- Children and composition
- Reusable component design
- One-way data flow

### Choose an owner for changing data

- Props versus state
- Common mistakes
- Data-flow design

## 06 State and Events

### Respond to events with state

- useState
- Event handlers
- Controlled inputs

### Queue immutable updates

- Functional state updates
- Batching
- Object and array state
- Avoiding direct state mutation

### Lift, derive, preserve, and reset

- Lifting state up
- Derived state
- State preservation and reset
- State updates and rendering

## 07 Lists and Conditional UI

### Render stable collections

- map and list rendering
- Stable keys
- Filtering and sorting

### Represent every data state

- Empty states
- Loading and error states
- Conditional expressions

### Search and paginate derived views

- Searchable lists
- Pagination fundamentals
- Reusable list components

## 08 Forms and Validation

### Choose controlled or uncontrolled input

- Controlled versus uncontrolled forms
- Input handling
- Form submission

### Validate and explain errors

- Required fields
- Validation and error messages
- Accessible forms
- Form state

### Design a registration workflow

- Select, checkbox, and radio inputs
- Multi-step forms
- Practical registration form

## 09 React Hooks

### Synchronize with Effects

- Rules of Hooks
- useState and useEffect
- Dependency arrays
- Cleanup functions and Effect lifecycle
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Choose the appropriate Hook

- useRef
- useContext
- useReducer
- useMemo and useCallback

### Extract and test custom Hooks

- Custom Hooks
- Stale closures
- Avoiding unnecessary Effects
- Hook testing
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

## 10 Component Architecture

### Find boundaries and compose

- Component boundaries
- Composition over duplication
- Presentational and state-owning components

### Design controlled component APIs

- Reusable UI patterns
- Controlled component APIs
- Compound component concepts

### Contain errors and refactor safely

- Error boundaries
- Feature-based folder structures
- Refactoring large components

## 11 Routing with React Router

### Create routes and shared layouts

- Client-side routing
- BrowserRouter and route definitions
- Navigation links
- Nested layouts

### Keep navigable state in the URL

- Route parameters
- Search parameters
- Not-found pages
- URL-driven application state

### Split routes and handle boundaries

- Protected-route concepts
- Lazy-loaded routes
- Route-level error handling
- Routing trade-offs

## 12 Context and State Management

### Place state deliberately

- Prop drilling
- Context API
- When Context is appropriate
- Local versus shared state

### Combine reducers and normalized state

- useReducer with Context
- State normalization
- Reducer design

### Choose tools without overengineering

- Server state versus client state
- Redux Toolkit concepts
- Lightweight state-management alternatives
- Choosing the right approach
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

## 13 API Integration and Asynchronous UI

### Build a reliable fetch boundary

- Fetch API and HTTP methods/status codes
- Loading, success, empty, and error states
- Async operations
- API configuration using Vite environment variables

### Cancel obsolete work and avoid races

- AbortController and request cancellation
- Race conditions
- Pagination and filtering
- Mock API examples that work locally
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Cache and update with TanStack Query

- Data caching concepts
- TanStack Query concepts and practical examples
- Optimistic updates
- Trade-offs

## 14 Styling and UI Systems

### Build responsive layouts

- Plain CSS and CSS Modules
- Responsive design and mobile-first design
- Flexbox and Grid

### Define themes and tokens

- Design tokens
- Reusable themes and dark mode
- Layout and typography

### Choose a UI system and navigation

- Component libraries
- Utility-first CSS concepts
- Responsive navigation
- Reduced decoration

## 15 Testing and Debugging

### Debug and test pure behavior

- Browser debugging and React DevTools
- Unit testing
- Vitest
- Continuous integration

### Test components through their UI

- Component testing and React Testing Library
- User-centric assertions
- Forms and accessible interaction
- Integration testing

### Cover async states and real-browser limits

- Mocking network requests
- Accessibility testing
- End-to-end testing concepts
- Testing trade-offs

## 16 TypeScript with React

### Type props and events

- TypeScript prerequisites
- Typing component props, interfaces, and type aliases
- Event types
- Children and composition

### Model state and generic collections

- Typed Hooks
- Generic components
- Discriminated unions
- API response types
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Migrate with strict checking

- Form types
- Strict mode
- Gradual migration from JavaScript
- TypeScript variant

## 17 Performance Optimization

### Measure rendering and place state

- How React rendering works
- Render versus commit
- State placement and avoiding unnecessary re-renders
- React Profiler and measuring before optimizing
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Understand memoization trade-offs

- React.memo
- useMemo and useCallback trade-offs
- React Compiler concepts
- Avoiding unnecessary re-renders
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Reduce bundle, list, and network work

- Code splitting, lazy loading, and Suspense
- Large-list virtualization
- Bundle analysis
- Network performance

## 18 Accessibility and Inclusive Design

### Start with semantics and keyboard

- Semantic elements
- Keyboard navigation
- Focus management
- Screen-reader considerations

### Make forms and dialogs understandable

- Accessible forms, labels, and descriptions
- Dialog accessibility
- ARIA fundamentals

### Verify contrast, motion, and usability

- Color contrast
- Reduced motion
- Automated and manual accessibility testing
- Inclusive design trade-offs

## 19 Security and Reliability

### Render untrusted content safely

- XSS fundamentals
- Safe rendering
- Avoiding unsafe HTML injection

### Understand identity and secret boundaries

- Secure authentication concepts
- Token storage trade-offs
- Environment-variable limitations and why VITE_ variables are public
- Client-side authorization limitations

### Maintain dependencies and recover from failure

- Dependency hygiene
- Error handling
- Avoiding secret exposure
- Reliability

## 20 Advanced React Concepts

### Understand identity and concurrent work

- Reconciliation
- Keys and component identity
- Concurrent rendering concepts
- Transitions and useTransition
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Defer values and locate Suspense boundaries

- useDeferredValue
- Suspense boundaries
- Server rendering concepts and hydration
- Mismatch prevention
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

### Separate core APIs from infrastructure

- Server Components versus client components
- Framework integration
- React Compiler concepts
- Current React APIs and limitations
- Beginner explanation
- Intermediate explanation
- Advanced explanation
- Practical scenario and trade-off

## 21 Production-Ready Applications

### Build and validate the release

- Environment configuration
- Production builds and build validation
- Asset optimization and lazy loading
- Error handling and logging concepts

### Deploy to static hosts

- Deployment to static hosting
- SPA route fallback configuration
- GitHub Pages deployment considerations
- Netlify and Vercel deployment

### Prepare a maintainable release

- CI workflows
- Dependency auditing
- Release preparation
- README and documentation quality

## 22 Architecture and Industry Practices

### Organize by features and boundaries

- Feature-based architecture
- Separation of concerns
- Reusable abstractions
- API client organization

### Review forms, design systems, and changes

- Form and validation architecture
- Design systems
- Maintainable naming conventions
- Code reviews, Git branching, and pull requests

### Refactor and reason about systems

- Refactoring legacy components
- Frontend system design
- Trade-offs and architectural decisions
- Capstone preparation

## 23 Beginner Projects

### Counter application

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Interactive profile card

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Digital clock

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Todo application

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Quiz application

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Expense tracker

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Searchable student directory

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

## 24 Intermediate Projects

### Weather dashboard

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Movie discovery interface

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Notes application

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Shopping cart

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### React Router dashboard

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### CRUD management interface

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Paginated data explorer

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Registration system

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

## 25 Advanced Projects

### Admin analytics dashboard

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### E-commerce frontend

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Learning management interface

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Project management board

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Real-time UI simulation

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Accessible component library

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

### Production-style SaaS dashboard

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy

## 26 Capstone Project

### StudyFlow capstone

- Problem statement
- Feature contract
- Architecture and folder structure
- Implementation steps
- Testing strategy
