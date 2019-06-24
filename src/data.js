export const skillsData = [
  {
    skill: 'HTML',
    skillLevel: 'Advanced',
    details: [
      'HTML form features/validation',
      'Using custom data attributes',
      'Semantic markup',
      'Accessibility and using ARIA attributes to talk to and inform screenreaders of the state of HTML elements',
      'Projects where this skill used: All'
    ]
  },
  {
    skill: 'CSS',
    skillLevel: 'Advanced',
    details: [
      'Use of preprocessers such as SASS and SCSS',
      'Building custom components with CSS',
      'Using styles from UI frameworks such as Bootstrap, Google Material, and Semantic UI',
      'Testing cross-browser compatibility of CSS properties (especially in IE)',
      'Responsive styling using UI grids, CSS grid, flexbox',
      'Defensive CSS for multilingual sites that need to be both rtl and ltr compatible',
      'Projects where this skill used: All'
    ]
  },
  {
    skill: 'JavaScript',
    skillLevel: 'Advanced',
    details: [
      'ES6+ features',
      'Arrow functions, object destructuring, async/await, template literals',
      'Object-oriented programming',
      'Integration with REST APIs',
      'Use of popular libraries and frameworks such as jQuery, Knockout, React, Angular, moment.js, and lodash',
      'Projects where this skill used: All'
    ]
  },
  {
    skill: 'React',
    skillLevel: 'Advanced',
    details: [
      'Using React Hooks',
      'Using UI frameworks that work well with react such as semantic UI React and material UI React',
      'Using React with Typescript',
      'Testing React components using React testing library',
      'Manipulating app and page level data by connecting React code with the Redux store',
      'Projects where this skill used: CleanSlate'
    ]
  },
  {
    skill: 'Redux',
    skillLevel: 'Intermediate',
    details: [
      'Redux store immutibility',
      'The flow of data through the application from the API to the Redux store to the React component state and vice versa',
      'Storing user roles at an application level in the Redux store and conditionally showing React components based on role permissions',
      'Writing actions and reducers to manipulate store data for fast, optimistic UI updates',
      'Using Thunk middleware to handle async API requests',
      'Projects where this skill used: CleanSlate'
    ]
  },
  {
    skill: 'Angular',
    skillLevel: 'Intermediate',
    details: [
      'Use of the Angular CLI',
      'Using RxJS subscriptions and observables for handling data',
      'Writing custom pipes and directives to manipulate HTML views and data formatting',
      'Testing angular components and services using Karma/Jasmine',
      'Using UI frameworks that work well with Angular such as Angular Material as well as building out custom UI components',
      'Projects where this skill used: PT&C'
    ]
  }
];

export const projectData = [
  {
    projectOrder: 1,
    client: 'subway',
    project: 'Remote Ordering Application',
    skills: [
      'HTML',
      'SCSS',
      'JavaScript',
      'jQuery',
      'Gulp',
      'SiteCore',
      'Bourbon'
    ],
    description:
      ' Responsible for writing the UI code for a customer-facing website for remote ordering based on high fidelity wireframes provided by an outside design agency. Site needed to be responsive, cross-browser compatible, able to handle multiple languages, ADA compliant, and able to change between left-to-right and right-to-left configuration to accommodate Arabic languages. Translated design into HTML markup and added styles and functionality using SCSS and JavaScript.',
    challenges:
      '  Many components needed to be custom built and there was a lot of complexity getting some of the custom UI components to function properly with screen reader technology as well as be keyboard traversable. Client did not want to move forward with React or Angular so the site was written mostly in JavaScript and jQuery which increased the complexity of the code given that there were many interactive elements.'
  },
  {
    projectOrder: 2,
    client: 'cleanslate',
    project: 'Electronic Medical Record System',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Semantic UI React',
      'GIT',
      'npm'
    ],
    description:
      ' Responsible for writing the UI code for an internal electronic medical record (EMR) application. Design was based on high fidelity wireframes provided by a UX designer on our internal team. The site needed to be responsive, compatible with Chrome and Edge browsers, change views based on the role of the logged in user, and certain workflows had to follow complex business rules. The EMR was built on the front end using React for component logic, Redux for application level state management and front-end data manipulation, and CSS for styling. The front end was integrated with an event-driven REST API. ',
    challenges:
      ' Some of the pages had certain components that only users with specific roles had permission to access. For example, on the prescriptions page someone with the role of Medical Technician would have the ability to view a patients prescriptions however only a user with the role of Physician would be allowed to edit or add prescriptions. To solve this we stored the logged in users role(s) at the application level in the Redux store, on any page that had specific permissions we were then able to check the users role and conditionally hide or render components based on that users role permissions. Another challenging piece of this project was the patient surveys. An array of surveys was returned from the API in a large block of JSON, using JS and React we went through each question of each survey and depending on the question type, dynamically rendered that question in the UI. The surveys page lasted for multiple sprints and there were many iterations of the surveys code due to complexity as well as the changing needs of the business. '
  },
  {
    projectOrder: 3,
    client: 'intellinet',
    project: 'CXO Checkin Application',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Material UI React',
      'GIT',
      'npm'
    ],
    description:
      ' Responsible for writing the UI code for a checkin application that identifies users facially using Microsofts facial recognition API. Also responsible for writing/making tweaks to some of the API code written in .NET Core, C#, and SQL. The application was used at the CXO Conference this year at the Microsoft office. Conference attendees were encouraged to register for the conference with a photo, the ones that did register with a photo were prompted to check in using the facial recognition application at the conference',
    challenges:
      'The application was taking up to 10 seconds to process the registrants photo and run the Python Azure function that was interacting with the facial recognition API. We were able to solve this issue and get the speed down below 2 seconds by having me translate the Azure function from Python to C# and interact directly with the facial recognition API from our .NET API instead of through the Azure function. Application required live updates after person was checked in or an error was recieved, worked with team member to bring in SignalR so that event admins were recieving real time updates to who had arrived to the conference. '
  },
  {
    projectOrder: 4,
    client: 'ptc',
    project: 'Event Management Planner POC',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'Typescript',
      'Angular Material',
      'GIT',
      'npm'
    ],
    description:
      ' Responsible for writing the UI code for a proof of concept application that provides event organizers with information about supplies, location, and staff required to run an event. The front end of the application was built in Angular and integrated with an event-driven REST API. ',
    challenges:
      ' Project was a short engagement, no major challenges or issues were faced.'
  }
];
