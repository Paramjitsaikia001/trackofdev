const Roadmaps = [
    {
        id: 1,
        title: "AI and Machine Learning Development",
        description: "AI (Artificial Intelligence) and ML (Machine Learning) involve creating systems that perform tasks requiring human intelligence, like learning and problem-solving. These technologies develop algorithms for computers to learn from data.",
        roadmapSteps: [
            {
                id: 1,
                name: "Python",
                handler: "handlePythonPage",
                des: "Learn Python syntax, OOP, and essential libraries like NumPy & Pandas for data handling."
            },
            {
                id: 2,
                name: "Mathematical Knowledge",
                handler: "handleMathematical",
                des: "Master Linear Algebra, Probability, Statistics, and Calculus to understand ML algorithms."
            },
            {
                id: 3,
                name: "Machine Learning Libraries & Algorithms",
                handler: "handleMLLinandAlgPage",
                des: "Use Scikit-learn, XGBoost, and LightGBM to implement ML models like regression, classification, and clustering."
            },
            {
                id: 4,
                name: "Data Manipulation & Visualization",
                handler: "handleDataManiAndVisu",
                des: "Use Pandas for data handling and Matplotlib/Seaborn for visualizing trends and insights."
            },
            {
                id: 5,
                name: "Neural Networks & Deep Learning",
                handler: "handleNeuralNetworks",
                des: "Learn deep learning concepts like CNNs, RNNs, and Transformers using TensorFlow and PyTorch for NLP and CV applications."
            },
            {
                id: 6,
                name: "Natural Language Processing (NLP)",
                handler: "NLPhandler",
                des: "Dive into NLP for tasks like text classification, sentiment analysis, and language modeling."
            },
            {
                id: 7,
                name: "Computer Vision",
                handler: "computervisionHandler",
                des: "Explore computer vision for image classification, object detection, and facial recognition."
            },
            {
                id: 8,
                name: "Ethics and Responsible AI",
                handler: "EthicsAIHandler",
                des: "Understand AI fairness, bias detection, and ethical considerations for responsible AI development."
            }
        ],


        route: "AIML"
    },
    {
        id: 2,
        title: "Full Stack Web Development",
        description: "Web Development includes front-end (client-side) and back-end (server-side) work, creating functional websites. The future is bright with AI advancements and high demand for responsive, user-friendly designs.",

        roadmapSteps: [
            {
                id: 1,
                name: "Code Editor",
                handler: "codeeditorhandler",
                des: "A code editor is a software application designed for editing source code. Popular editors include VS Code, Sublime Text, and Atom.",
                isDone: false
            },
            {
                id: 2,
                name: "HTML",
                handler: "HTMLhandler",
                des: "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.",
                isDone: false

            },
            {
                id: 3,
                name: "CSS",
                handler: "CSShandler",
                des: "CSS (Cascading Style Sheets) styles and layouts web pages for visual appeal and responsiveness.",
                isDone: false

            },
            {
                id: 4,
                name: "JavaScript",
                handler: "JShandler",
                des: "JavaScript adds interactivity to web pages. Learn ES6+ syntax, DOM manipulation, and event handling."
            },
            {
                id: 5,
                name: "Version Control Systems",
                handler: "VCShandler",
                des: "Version control systems like Git help manage code changes and collaboration. Learn Git and platforms like GitHub."
            },
            {
                id: 6,
                name: "Frontend Project Deployment",
                handler: "FrontendProjectDeployhandler",
                des: "Deploy frontend projects using platforms like GitHub Pages, Netlify, or Vercel."
            },
            {
                id: 7,
                name: "Package Manager",
                handler: "PMhandler",
                des: "Package managers like npm or yarn help manage dependencies in your project."
            },
            {
                id: 8,
                name: "Node.js",
                handler: "NodeJShandler",
                des: "Node.js is a runtime environment for executing JavaScript outside the browser, mainly for server-side development."
            },
            {
                id: 9,
                name: "Express.js",
                handler: "Expresshandler",
                des: "Express.js is a minimal and flexible Node.js web application framework for building APIs and web servers."
            },
            {
                id: 10,
                name: "Database Management",
                handler: "DBMShandler",
                des: "Learn how to manage databases for efficient data storage and retrieval."
            },
            {
                id: 11,
                name: "APIs",
                handler: "APIhandler",
                des: "APIs allow software systems to communicate and share data. Learn RESTful API concepts."
            },
            {
                id: 12,
                name: "Full Stack Project Deployment",
                handler: "fullstackDeploymenthandler",
                des: "Deploy full stack applications using cloud platforms and CI/CD pipelines."
            },
            {
                id: 13,
                name: "Project Build",
                handler: "ProjectBuildhandler",
                des: "Build, test, and deploy your application from ideation to production."
            },
            {
                id: 14,
                name: "Library and Framework",
                handler: "LibraryFrameworkhandler",
                des: "Learn about libraries and frameworks to speed up development and maintain code quality."
            },
            {
                id: 15,
                name: "React",
                handler: "Reacthandler",
                des: "React is a popular JavaScript library for building user interfaces."
            },
            {
                id: 16,
                name: "Angular",
                handler: "Angularhandler",
                des: "Angular is a powerful framework for building scalable web applications."
            },
            {
                id: 17,
                name: "Vue",
                handler: "Vuehandler",
                des: "Vue.js is a progressive JavaScript framework for building user interfaces."
            },
            {
                id: 18,
                name: "Next.js (SSR for React)",
                handler: "NextForReactHandler",
                des: "Next.js enables server-side rendering and static site generation for React apps."
            },
            {
                id: 19,
                name: "Nuxt.js (SSR for Vue)",
                handler: "NuxtHandler",
                des: "Nuxt.js enables server-side rendering and static site generation for Vue apps."
            },
            {
                id: 20,
                name: "Angular Universal (SSR for Angular)",
                handler: "AngularUniversalHandler",
                des: "Angular Universal enables server-side rendering for Angular apps."
            },
            {
                id: 21,
                name: "Bootstrap",
                handler: "BootstrapHandler",
                des: "Bootstrap is a popular CSS framework for building responsive web designs."
            },
            {
                id: 22,
                name: "Tailwind CSS",
                handler: "TailwindcssHandler",
                des: "Tailwind CSS is a utility-first CSS framework for rapid UI development."
            },
            {
                id: 23,
                name: "Material-UI",
                handler: "MaterialUIHandler",
                des: "Material-UI is a React component library that implements Google's Material Design."
            },
            {
                id: 24,
                name: "React Context API",
                handler: "ReactContextAPIhandler",
                des: "React Context API provides a way to manage state globally in React apps."
            },
            {
                id: 25,
                name: "Redux",
                handler: "Reduxhandler",
                des: "Redux is a state management library for JavaScript apps, commonly used with React."
            },
            {
                id: 26,
                name: "Zustand",
                handler: "zustandhandler",
                des: "Zustand is a small, fast, and scalable state management solution for React."
            },
        ],

        route: "webdev"
    },
    {
        id: 3,
        title: "Frontend Web Development",
        description: "Frontend development involves building the user-facing part of web applications using technologies like HTML, CSS, and JavaScript. It focuses on creating responsive, interactive, and visually appealing interfaces that enhance the user experience.",
        roadmapSteps: [
            {
                id: 1,
                name: "HTML",
                handler: "htmlpagehandler",
                des: "HTML (HyperText Markup Language) is the standard language for creating web pages. Learn semantic HTML5, forms, accessibility (ARIA), and SEO basics to structure content effectively for any web application, from simple blogs to complex platforms."
            },
            {
                id: 2,
                name: "CSS",
                handler: "csspagehandler",
                des: "CSS (Cascading Style Sheets) styles and layouts web pages for visual appeal and responsiveness. Master CSS3 features like Flexbox, Grid, and media queries, along with preprocessors like SASS, to create modern, mobile-friendly designs."
            },
            {
                id: 3,
                name: "JavaScript (Basics)",
                handler: "jspagehandler",
                des: "JavaScript adds interactivity to web pages. Learn ES6+ syntax, DOM manipulation, event handling, and basic data structures (arrays, objects) to build dynamic features like form validation or interactive menus."
            },
            {
                id: 4,
                name: "Version Control (Git)",
                handler: "versioncontrolpagehandler",
                des: "Git is a version control system for managing code changes and collaboration. Learn Git with platforms like GitHub to track projects, push code, and contribute to open-source, a must-have skill for professional developers."
            },
            {
                id: 5,
                name: "Advanced JavaScript",
                handler: "advancejspagehandler",
                des: "Advanced JavaScript, including asynchronous programming (Promises, async/await), APIs (Fetch), and ES modules, enables dynamic, data-driven applications. These skills are essential for seamless user experiences with external services."
            },
            {
                id: 6,
                name: "Frontend Frameworks (React/Vue)",
                handler: "frontendFWpagehandler",
                des: "Frameworks like React or Vue.js are industry standards for building scalable, component-based web applications. Learn components, state management (e.g., React Hooks, Redux), and routing to create single-page applications like task managers."
            },
            {
                id: 7,
                name: "CSS Frameworks (Tailwind/Bootstrap)",
                handler: "cssFWpagehandler",

                des: "CSS frameworks like Tailwind CSS or Bootstrap speed up styling with pre-built components and utilities. They enable rapid prototyping and consistent, responsive UI development for professional-grade applications."
            },
            {
                id: 8,
                name: "Web Animation",
                handler: "webanimationpagehandler",
                des: "Web animations enhance user experience with engaging, dynamic interfaces. Learn CSS animations (keyframes, transitions), JavaScript libraries (GSAP, Anime.js), and SVG animations to create smooth effects like hover states, loading spinners, or scroll-triggered transitions."
            },
            {
                id: 9,
                name: "Build Tools",
                handler: "buildtoolspagehandler",
                des: "Build tools like Webpack, Vite, and package managers (npm/yarn) streamline development by bundling code and managing dependencies. Learn these alongside basic CI/CD concepts to deploy production-ready apps to platforms like Netlify or Vercel."
            },
            {
                id: 10,
                name: "State Management",
                handler: "statemanagementpagehandler",
                des: "Advanced state management with Redux Toolkit, Zustand, or React Context ensures efficient data flow in complex applications. These skills are critical for maintainability in projects like dashboards or e-commerce platforms."
            },
            {
                id: 11,
                name: "TypeScript",
                handler: "typescriptpagehandler",
                des: "TypeScript adds type safety to JavaScript, improving code reliability and scalability. Learn interfaces, generics, and TypeScript integration with frameworks like React to build robust, error-free applications."
            },
            {
                id: 12,
                name: "Testing",
                handler: "testingpagehandler",
                des: "Testing ensures reliable, bug-free applications. Learn Jest, React Testing Library, or Cypress for unit and end-to-end testing to validate functionality and enhance user experience in production environments."
            },
            {
                id: 13,
                name: "Performance Optimization",
                handler: "performancepagehandler",
                des: "Optimizing performance with lazy loading, code splitting, and asset optimization (images, fonts) ensures fast applications. Use tools like Lighthouse to audit and improve load times, vital for user retention and SEO."
            },
            {
                id: 14,
                name: "3D Modeling for Web",
                handler: "modelingpagehandler",
                des: "3D modeling enhances web experiences with immersive visuals. Learn Three.js or Babylon.js to create and render 3D graphics, integrating interactive models or animations into web applications for games, product showcases, or visualizations."
            },
            {
                id: 15,
                name: "Advanced Frameworks (Next.js/Gatsby)",
                handler: "Adframworkshandler",
                des: "Advanced frameworks like Next.js or Gatsby enhance React with server-side rendering and static site generation. These tools are key for building SEO-friendly, high-performance applications like blogs or e-commerce platforms."
            },
            {
                id: 16,
                name: "UI/UX Principles",
                handler: "uiuxpagehandler",
                des: "UI/UX principles, design systems, and tools like Figma, combined with accessibility standards (WCAG), ensure user-friendly, inclusive applications. These skills bridge development and design for polished, professional interfaces."
            },
            {
                id: 17,
                name: "Portfolio and Job Prep",
                handler: "jobpreppagehandler",
                des: "A strong portfolio with 3-5 diverse projects (e.g., animated landing pages, 3D product viewers, SPAs) showcases your skills. Combine with open-source contributions, a technical blog, and coding interview prep (LeetCode, HackerRank) to land a frontend role."
            },
            {
                id: 18,
                name: "Continuous Learning",
                handler: "continouslearnpagehandler",
                des: "Frontend development evolves rapidly. Stay updated on trends like Web3, PWAs, or advanced animations/3D tools by following X posts, contributing to open-source, and engaging with communities on Discord or meetups to remain competitive."
            }
        ],

        route: "frontend-web-dev"
    },
    {
        id: 4,
        title: "Backend Web Development",
        description: "Backend development involves creating and maintaining the server-side logic, databases, and APIs that power web applications. It focuses on ensuring the application's functionality, security, and performance behind the scenes.",
        roadmapSteps: [
            {
                id: 1,
                name: "Node.js Fundamentals",
                handler: "nodepagehandler",
                des: "Understand Node.js runtime, event loop, callbacks, promises, async/await, streams, buffers, and built-in modules (fs, path, crypto)."
            },
            {
                id: 2,
                name: "Package Managers (npm, pnpm, yarn)",
                handler: "packagepagehandler",
                des: "Learn how to manage dependencies, scripts, semantic versioning, and monorepos with npm, pnpm, and yarn."
            },
            {
                id: 3,
                name: "Web Frameworks (Express, Fastify, NestJS)",
                handler: "expresspagehandler",
                des: "Master Express for building REST APIs. Learn Fastify for performance and NestJS for enterprise-level modular apps with TypeScript."
            },
            {
                id: 4,
                name: "Databases: SQL (PostgreSQL/MySQL)",
                handler: "sqlpagehandler",
                des: "Learn relational database design, normalization, indexing, joins, stored procedures, and transactions."
            },
            {
                id: 5,
                name: "Databases: NoSQL (MongoDB, Redis)",
                handler: "nosqlpagehandler",
                des: "Understand document databases, key-value stores, replication, sharding, and caching with Redis."
            },
            {
                id: 6,
                name: "ORMs & Query Builders",
                handler: "ormpagehandler",
                des: "Use Prisma, Sequelize, TypeORM, or Knex for database queries. Understand migrations, schema management, and relationships."
            },
            {
                id: 7,
                name: "Authentication & Authorization",
                handler: "authpagehandler",
                des: "Implement JWT, sessions, OAuth2, OpenID Connect, and RBAC/ABAC. Learn best practices for password hashing (bcrypt, argon2)."
            },
            {
                id: 8,
                name: "APIs (REST & GraphQL)",
                handler: "apipagehandler",
                des: "Design REST APIs with versioning, filtering, and pagination. Learn GraphQL with Apollo Server for flexible querying."
            },
            {
                id: 9,
                name: "Real-time Communication",
                handler: "realtimepagehandler",
                des: "Implement WebSockets with Socket.io, Server-Sent Events, or gRPC for chat apps, live dashboards, and notifications."
            },
            {
                id: 10,
                name: "Security Best Practices",
                handler: "securitypagehandler",
                des: "Protect against XSS, CSRF, SQL injection, DDoS, and implement Helmet.js, CORS, HTTPS, secure headers, and environment variables."
            },
            {
                id: 11,
                name: "Testing & Debugging",
                handler: "testingpagehandler",
                des: "Learn Jest, Mocha, and Vitest for unit testing. Use Supertest for API tests and Cypress/Playwright for end-to-end tests."
            },
            {
                id: 12,
                name: "Deployment & DevOps",
                handler: "devopspagehandler",
                des: "Learn Docker, containerization, CI/CD pipelines (GitHub Actions, GitLab CI), and hosting platforms like AWS, GCP, Vercel, and Render."
            },
            {
                id: 13,
                name: "Scalability & Performance",
                handler: "scalabilitypagehandler",
                des: "Understand caching (Redis, CDN), load balancing, clustering, horizontal vs vertical scaling, and job queues (BullMQ, RabbitMQ)."
            },
            {
                id: 14,
                name: "Monitoring & Logging",
                handler: "monitoringpagehandler",
                des: "Set up logging with Winston/Pino, monitoring with Grafana/Prometheus, tracing with OpenTelemetry, and error tracking with Sentry."
            },
            {
                id: 15,
                name: "Cloud & Infrastructure",
                handler: "cloudpagehandler",
                des: "Learn cloud fundamentals (AWS EC2, S3, RDS, Lambda). Explore IaC tools like Terraform and Kubernetes for orchestration."
            },
            {
                id: 16,
                name: "System Design & Architecture",
                handler: "systemdesignpagehandler",
                des: "Learn system design concepts: microservices, monoliths, event-driven architecture, CAP theorem, CQRS, and API gateways."
            },
            {
                id: 17,
                name: "Career & Job Prep",
                handler: "careerpagehandler",
                des: "Build a portfolio with full-stack apps, contribute to open source, prepare for coding/system design interviews, and practice problem-solving on LeetCode."
            }
        ],

        route: "backend"
    },
    {
        id: 5,
        title: "App Development",
        description: "App Development involves creating applications for mobile and desktop platforms. It covers both front-end (user interface) and back-end (server-side) development.",
        roadmapSteps: [
            {
                id: 1,
                name: "Programming Foundations",
                handler: "handleFoundations",
                des: "Learn JavaScript/TypeScript for React Native or Dart for Flutter. Understand mobile basics like UI, navigation, lifecycle, and permissions."
            },
            {
                id: 2,
                name: "Core Frameworks",
                handler: "handleFrameworks",
                des: "Master React Native, Flutter, or alternatives like NativeScript/Ionic. Build cross-platform apps with a single codebase."
            },
            {
                id: 3,
                name: "UI & Styling",
                handler: "handleUIStyling",
                des: "Work with Flexbox, responsive layouts, Material Design, Cupertino widgets, and animations (Reanimated, Lottie)."
            },
            {
                id: 4,
                name: "State Management",
                handler: "handleStateManagement",
                des: "Use Redux Toolkit, Zustand, MobX, React Query (RN) or Provider, Riverpod, Bloc, GetX (Flutter). Add offline storage with SQLite, Realm, Hive."
            },
            {
                id: 5,
                name: "Navigation & Routing",
                handler: "handleNavigation",
                des: "Implement navigation with React Navigation or Flutter Navigator/GoRouter. Add deep linking and multi-level routing."
            },
            {
                id: 6,
                name: "APIs & Networking",
                handler: "handleAPIsNetworking",
                des: "Integrate REST/GraphQL APIs with Axios, Fetch, Apollo. Use WebSockets or Firebase for real-time features."
            },
            {
                id: 7,
                name: "Native Modules & Device Features",
                handler: "handleNativeModules",
                des: "Access camera, location, maps, sensors, notifications, and file storage with native modules or plugins."
            },
            {
                id: 8,
                name: "Authentication & Security",
                handler: "handleAuthSecurity",
                des: "Implement Firebase Auth, Auth0, or Supabase. Secure storage (Keychain, Keystore), biometrics, SSL pinning, and safe APIs."
            },
            {
                id: 9,
                name: "Testing & Debugging",
                handler: "handleTestingDebugging",
                des: "Write unit, integration, and E2E tests with Jest, Detox, Flutter Test. Debug with Flipper, React Native Debugger, Flutter DevTools."
            },
            {
                id: 10,
                name: "App Performance Optimization",
                handler: "handlePerformance",
                des: "Reduce bundle size, lazy load, optimize images, minimize re-renders/widget rebuilds, and use background services efficiently."
            },
            {
                id: 11,
                name: "Deployment & Distribution",
                handler: "handleDeployment",
                des: "Build APK/AAB for Android and IPA for iOS. Release via Google Play Console and Apple App Store. Use CI/CD with Fastlane, Bitrise, or GitHub Actions."
            },
            {
                id: 12,
                name: "Advanced Topics",
                handler: "handleAdvancedTopics",
                des: "Explore backend integration, payments, real-time chat, AI/ML, AR/VR, push notifications, analytics, and scaling strategies."
            },
            {
                id: 13,
                name: "Project ideas",
                handler: "handleProjectIdeas",
                des: "Build real-world projects like a social media app, e-commerce app, chat application, fitness tracker, or a news aggregator to apply your skills."
            }
        ],

        route: "appdev"
    },

    // {
    //     title: "iOS App Development",
    //     description: "iOS app development involves creating applications for Apple's iOS platform using languages like Swift or Objective-C. It focuses on delivering seamless, high-quality experiences for iPhone and iPad users.",


    //     route: "ios"
    // },
    // {
    //     title: "Android App Development",
    //     description: "Android app development involves creating applications for devices running on the Android operating system using languages like Java or Kotlin. It focuses on delivering robust, user-friendly experiences for a wide range of Android smartphones and tablets.",


    //     route: "android"
    // },


    {
        id: 6,
        title: "Game Development",
        description: "Game Development involves creating interactive games, blending art, storytelling, and coding. It's a dynamic field with growing opportunities thanks to advances in VR and AR technologies.",
        roadmapSteps: [
            {
                id: 0,
                name: "Master Basic Programming",
                handler: "handleProgramming",
                des: "Start with a solid foundation in programming. Learn C/C++ or C# to grasp fundamental concepts like variables, functions, and logic. This is the bedrock of game development.",
            },
            {
                id: 1,
                name: "Choose a Game Engine",
                handler: "handleGameEngines",
                des: "Select a game engine to simplify development. Unity (C#) and Unreal Engine (C++) are the two most popular choices. They handle complex tasks, allowing you to focus on design.",
            },
            {
                id: 2,
                name: "Learn Data Structures & Algorithms",
                handler: "handleDSA",
                des: "Understand how to write efficient code. Mastering DSAs like arrays, queues, and stacks is crucial for optimizing game performance and creating complex, lag-free experiences.",
            },
            {
                id: 3,
                name: "Version Control with Git",
                handler: "handleGit",
                des: "Collaborate effectively on projects. Learn Git and GitHub to manage your code, track changes, and work seamlessly with other developers and designers.",
            },
            {
                id: 4,
                name: "Understand Game Physics & Math",
                handler: "handleMath",
                des: "Dive into the math and physics behind games. Study 2D/3D coordinate systems, vectors, and kinematics to simulate realistic movement, gravity, and object interactions.",
            },
            {
                id: 5,
                name: "Graphics Processing",
                handler: "handleGraphics",
                des: "Learn the basics of how graphics are rendered. Explore concepts like shaders, OpenGL, or CUDA to create visually stunning effects and optimize rendering performance.",
            },
            {
                id: 6,
                name: "Networking for Multiplayer",
                handler: "handleNetworking",
                des: "If you want to build multiplayer games, you must understand networking. Learn how to handle data synchronization, client-server architecture, and packet transmission.",
            },
            {
                id: 7,
                name: "Artificial Intelligence (AI)",
                handler: "handleAI",
                des: "Bring characters to life. Study fundamental AI algorithms like pathfinding (A* algorithm) to create intelligent enemies, NPCs, and dynamic game environments.",
            },
            {
                id: 8,
                name: "Game Publishing & Marketing",
                handler: "handlePublishing",
                des: "Learn how to get your game to players. Understand the process of publishing on platforms like Steam, Google Play, or the Epic Games Store, and the basics of marketing your game.",
            },
        ],

        route: "gamedev"
    },
    {
        id: 7,
        title: "CyberSecurity",
        description: "Cybersecurity involves protecting computer systems, networks, and data from digital attacks and unauthorized access. It focuses on implementing security measures and mitigating threats to ensure information integrity and confidentiality.",
        roadmapSteps: [
            {
                id: 0,
                name: " Basics & Mindset",
                handler: "handleBasics",
                des: "Understand core concepts like the CIA Triad (Confidentiality, Integrity, Availability) and the ethical rule of 'practice only in your own lab'.",
            },
            {
                id: 1,
                name: " Networking Basics",
                handler: "handleNetworking",
                des: "Learn fundamental networking concepts: IP addresses, DNS, and the OSI & TCP/IP models. Practice with tools like ping, curl, and Wireshark.",
            },
            {
                id: 2,
                name: " Operating System Basics",
                handler: "handleOSBasics",
                des: "Master the basics of Linux and Windows. Learn Linux commands, file permissions, and how to use Windows Event Viewer and PowerShell.",
            },
            {
                id: 3,
                name: " Build Your Cyber Lab",
                handler: "handleCyberLab",
                des: "Set up a virtual lab with Kali Linux, a target OS (Ubuntu/Windows), and vulnerable applications like DVWA and OWASP Juice Shop.",
            },
            {
                id: 4,
                name: " Learn Common Attacks (Red Team)",
                handler: "handleRedTeam",
                des: "Practice web attacks like SQL Injection and Cross-Site Scripting. Use tools like Burp Suite and Nmap in your lab.",
            },
            {
                id: 5,
                name: " Learn Defense (Blue Team)",
                handler: "handleBlueTeam",
                des: "Focus on detection and analysis. Learn to analyze logs with tools like Sysmon and Wireshark to spot suspicious activity.",
            },
            {
                id: 6,
                name: " Choose a Track",
                handler: "handleTrackChoice",
                des: "After building a foundation, decide on a specialization like Ethical Hacking, SOC Analysis, AppSec, or Cloud Security.",
            },
            {
                id: 7,
                name: " Projects to Prove Skills",
                handler: "handleProjects",
                des: "Build a portfolio with projects like a simple port scanner, a penetration test report, or a SIEM with custom alerts.",
            },
            {
                id: 8,
                name: " Certifications",
                handler: "handleCertifications",
                des: "Validate your skills with certifications like CompTIA Security+ for beginners or advanced options like OSCP.",
            },
            {
                id: 9,
                name: " Routine & Practice",
                handler: "handleRoutine",
                des: "Establish a consistent routine: daily theory, hands-on practice, and weekly labs on platforms like TryHackMe or HackTheBox.",
            },
        ],

        route: "cybersecurity"
    },
    {
        id: 8,
        title: "Blockchain Development",
        description: "Blockchain is a decentralized, digital ledger technology that records transactions across multiple computers. It ensures transparency, security, and immutability, making it ideal for applications like cryptocurrencies, smart contracts, and supply chain management.",

        roadmapSteps: [
            {
                id: 0,
                name: "Prereqs (Foundations)",
                handler: "handlePrereqs",
                des: "Learn basics of cryptography, blockchain mental models, and environment setup (Node.js, Git, pnpm).",
            },
            {
                id: 1,
                name: "Tooling Setup",
                handler: "handleTooling",
                des: "Install MetaMask, connect to testnets, and use frameworks like Hardhat & Foundry. Explore viem, wagmi, and OpenZeppelin.",
            },
            {
                id: 2,
                name: "Solidity Foundations",
                handler: "handleSolidity",
                des: "Learn types, mappings, events, visibility, storage vs memory, and payable functions with gas optimization.",
            },
            {
                id: 3,
                name: "Testing & Quality",
                handler: "handleTesting",
                des: "Write unit and fuzz tests using Hardhat/Foundry. Add gas reports, coverage, and CI/CD pipelines with GitHub Actions.",
            },
            {
                id: 4,
                name: "Frontend Integration",
                handler: "handleFrontend",
                des: "Connect wallets via wagmi + RainbowKit. Read/write smart contracts with viem, ethers, and manage ABIs and configs.",
            },
            {
                id: 5,
                name: "Token Standards",
                handler: "handleTokens",
                des: "Build ERC-20, ERC-721, and ERC-1155 with permits, royalties, and role-based access control for real-world assets.",
            },
            {
                id: 6,
                name: "Upgrades & Access Control",
                handler: "handleUpgrades",
                des: "Implement proxy patterns, initializers, role-based permissions, timelocks, and multisigs for upgrade safety.",
            },
            {
                id: 7,
                name: "Data & Indexing",
                handler: "handleData",
                des: "Design event schemas, build subgraphs with The Graph, and use IPFS/Arweave for decentralized storage.",
            },
            {
                id: 8,
                name: "Oracles & Automation",
                handler: "handleOracles",
                des: "Integrate Chainlink price feeds, VRF for randomness, and automation tools like Keepers for periodic execution.",
            },
            {
                id: 9,
                name: "DeFi Primitives",
                handler: "handleDefi",
                des: "Understand AMMs, lending/borrowing, liquidations, and yield farming with liquidity mining and vesting.",
            },
            {
                id: 10,
                name: "L2s & Cross-chain",
                handler: "handleL2",
                des: "Learn rollups (Optimistic vs ZK), deploy on Optimism/Arbitrum, and explore bridge & message passing mechanisms.",
            },
            {
                id: 11,
                name: "Security Deep Dive",
                handler: "handleSecurity",
                des: "Master reentrancy, MEV, and oracle attacks. Practice fuzzing, invariants, and CTFs like Ethernaut & Damn Vulnerable DeFi.",
            },
            {
                id: 12,
                name: "Advanced Paths",
                handler: "handleAdvanced",
                des: "Pick Solana, Polkadot, StarkNet, or ZK paths. Learn ecosystem languages, PDAs, ZK proofs, or account abstraction.",
            },
            {
                id: 13,
                name: "DevOps & Operations",
                handler: "handleDevOps",
                des: "Secure keys, monitor with Tenderly/Etherscan, set alerts, and design incident response with multisig operations.",
            },
            {
                id: 14,
                name: "Portfolio Buildout",
                handler: "handlePortfolio",
                des: "Ship projects: tokens, NFTs, AMM, and an advanced-path app. Deploy to testnets & L2s, document with diagrams/tests.",
            },
            {
                id: 15,
                name: "Career Prep & Project ideas",
                handler: "handleCareer",
                des: "Contribute to open-source, join hackathons, and target roles like Solidity dev, protocol engineer, or security researcher.",
            },
        ],
        route: "blockchain"
    },
    {
        id: 9,
        title: "Cloud Computing and DevOps",
        description: "Cloud Computing delivers scalable computing services like servers, storage, and software over the internet. DevOps combines software development and IT operations to enhance collaboration and automation, ensuring continuous delivery.",
        roadmapSteps: [
            {
                id: 0,
                name: "Master Linux & Bash",
                handler: "handleLinux",
                des: "Become an expert with the Linux command line. Learn file system navigation, permissions, and shell scripting for automation.",
            },
            {
                id: 1,
                name: "Learn a Programming Language",
                handler: "handleProgramming",
                des: "Master Python or Go for automation, scripting, and API interactions. These languages are core to DevOps practices.",
            },
            {
                id: 2,
                name: "Understand Core Concepts",
                handler: "handleCoreConcepts",
                des: "Grasp fundamental concepts of networking (DNS, OSI), security (firewalls), and operating systems.",
            },
            {
                id: 3,
                name: "Version Control with Git",
                handler: "handleGit",
                des: "Learn Git for collaborative development. Practice essential commands like clone, commit, pull, push, and branching.",
            },
            {
                id: 4,
                name: "Cloud Fundamentals (AWS/Azure/GCP)",
                handler: "handleCloudFundamentals",
                des: "Get started with one major cloud provider. Learn IaaS, PaaS, SaaS, and the core services like EC2/VMs, S3/Storage, and VPCs.",
            },
            {
                id: 5,
                name: "Infrastructure as Code (IaC)",
                handler: "handleIaC",
                des: "Automate infrastructure provisioning. Learn Terraform or a cloud-native tool like AWS CloudFormation or Azure Bicep.",
            },
            {
                id: 6,
                name: "Containerization & Orchestration",
                handler: "handleContainers",
                des: "Master Docker for creating and managing containers, then learn Kubernetes to orchestrate and scale them in production.",
            },
            {
                id: 7,
                name: "CI/CD Pipeline",
                handler: "handleCICD",
                des: "Build automated pipelines for continuous integration and delivery using tools like Jenkins, GitLab CI/CD, or GitHub Actions.",
            },
            {
                id: 8,
                name: "Configuration Management",
                handler: "handleConfigManagement",
                des: "Automate server configuration and software deployment. Learn Ansible for its simplicity and power.",
            },
            {
                id: 9,
                name: "Monitoring & Logging",
                handler: "handleMonitoring",
                des: "Implement monitoring with Prometheus and Grafana. Set up centralized logging with the ELK stack or a cloud-native solution.",
            },
            {
                id: 10,
                name: "Advanced Cloud Architecture",
                handler: "handleAdvancedCloud",
                des: "Explore advanced topics like serverless computing, microservices, and advanced networking configurations.",
            },
            {
                id: 11,
                name: "Site Reliability Engineering (SRE)",
                handler: "handleSRE",
                des: "Adopt SRE principles. Focus on reliability, scalability, and efficiency. Learn about SLOs, SLIs, and error budgets.",
            },
            {
                id: 12,
                name: "FinOps & Governance",
                handler: "handleFinOps",
                des: "Learn to manage and optimize cloud costs. Implement governance policies to ensure security and compliance.",
            },
            {
                id: 13,
                name: "Certifications",
                handler: "handleCertifications",
                des: "Validate your skills with professional certifications like AWS Certified DevOps Engineer - Professional or Microsoft Certified: DevOps Engineer Expert.",
            },
        ],

        route: "devopscloud"
    },
    {
        id: 10,
        title: "Data Science",
        description: "Data science involves extracting meaningful insights from large and complex datasets using statistical methods, programming, and domain knowledge. It focuses on discovering patterns and making predictions through data analysis and machine learning techniques.",
        roadmapSteps: [
            {
                id: 0,
                name: "Master Python",
                handler: "handleProgramming",
                des: "Start with Python, the industry-standard language for data science. Learn the basics and essential libraries like NumPy and Pandas for data manipulation.",
            },
            {
                id: 1,
                name: "Understand Math & Stats",
                handler: "handleMath",
                des: "Grasp the foundational concepts of statistics, probability, and linear algebra. This conceptual knowledge is crucial for understanding how algorithms work.",
            },
            {
                id: 2,
                name: "Data Visualization & Analysis",
                handler: "handleViz",
                des: "Learn to clean, process, and analyze data. Master visualization tools like Matplotlib and Seaborn to tell stories with data through graphs and charts.",
            },
            {
                id: 3,
                name: "Learn SQL & Databases",
                handler: "handleSQL",
                des: "Understand how to work with databases. Learn SQL to query, manage, and extract data, as most real-world data is stored in relational databases.",
            },
            {
                id: 4,
                name: "Machine Learning & Deep Learning",
                handler: "handleML",
                des: "Dive into the core of data science. Learn various machine learning algorithms and deep learning concepts to build predictive models and analyze complex data.",
            },
            {
                id: 5,
                name: "Build Projects & Portfolio",
                handler: "handleProjects",
                des: "Apply your skills by building end-to-end data science projects. This is essential for gaining practical experience and demonstrating your abilities to employers.",
            },
            {
                id: 6,
                name: "Specialize & Learn Tools",
                handler: "handleSpecialization",
                des: "Choose a specialization like NLP or Computer Vision. Learn to use tools and frameworks for deploying and managing your models in production.",
            },
        ],

        route: "datascience"
    },
    // {
    //     title: "Virtual Reality (VR)",
    //     description: "Virtual Reality (VR) creates immersive, simulated environments that users can interact with in a seemingly real way. It leverages advanced technology to provide experiences in gaming, education, and more through specialized headsets and sensors.",


    //     route: "vr"
    // },
    // {
    //     title: "Augmented Reality (AR)",
    //     description: "Augmented Reality (AR) overlays digital content onto the real world, enhancing users' perception of their environment. It uses smartphones and AR glasses to provide interactive and immersive experiences in various applications.",


    //     route: "ar"
    // },
    {
        id: 11,
        title: "Internet of Things (IoT) Development",
        description: "IoT development involves creating and integrating connected devices that communicate over the internet. It requires knowledge in hardware, software, and networking to build smart solutions for homes, cities, healthcare, and industries.",

        roadmapSteps: [
            {
                id: 0,
                name: "Foundations",
                handler: "handleFoundations",
                des: "Learn C/C++, Python, and electronics basics. Master Linux, Git, and networking to build a solid base for embedded and backend development.",
            },
            {
                id: 1,
                name: "Microcontrollers & Hardware",
                handler: "handleMicrocontrollers",
                des: "Get hands-on with Arduino, ESP32, or STM32. Learn about GPIO, PWM, and other essential hardware interfaces.",
            },
            {
                id: 2,
                name: "Sensors & Actuators",
                handler: "handleSensors",
                des: "Work with common sensors (like temperature, motion) to collect data and actuators (like motors, relays) to interact with the physical world.",
            },
            {
                id: 3,
                name: "Communication Protocols",
                handler: "handleProtocols",
                des: "Understand how devices communicate. Learn short-range protocols like Bluetooth and long-range ones like Wi-Fi and LoRaWAN.",
            },
            {
                id: 4,
                name: "Networking & IoT Connectivity",
                handler: "handleNetworking",
                des: "Grasp how devices connect to the internet. Learn about IP addressing, TCP vs UDP, and how to set up an MQTT broker for messaging.",
            },
            {
                id: 5,
                name: "Embedded OS & RTOS",
                handler: "handleEmbeddedOS",
                des: "Learn about operating systems for constrained devices, like FreeRTOS or Zephyr, for scheduling and multitasking.",
            },
            {
                id: 6,
                name: "IoT Cloud Platforms",
                handler: "handleCloudPlatforms",
                des: "Connect your devices to the cloud. Learn about services like AWS IoT Core and Azure IoT Hub for provisioning and state management.",
            },
            {
                id: 7,
                name: "Data Processing & Analytics",
                handler: "handleDataProcessing",
                des: "Process and store the data you collect. Learn about stream processing and time-series databases for storing sensor data.",
            },
            {
                id: 8,
                name: "Edge Computing",
                handler: "handleEdgeComputing",
                des: "Run ML models directly on your devices. Learn about frameworks like TensorFlow Lite and the role of edge gateways.",
            },
            {
                id: 9,
                name: "Security",
                handler: "handleSecurity",
                des: "Secure your devices and data. Learn about encryption, secure authentication, and managing firmware updates over the air.",
            },
            {
                id: 10,
                name: "IoT Application Development",
                handler: "handleApplication",
                des: "Build applications to interact with your devices. Learn to create mobile apps or web dashboards for device control and data visualization.",
            },
            {
                id: 11,
                name: "Industrial IoT (IIoT)",
                handler: "handleIndustrialIoT",
                des: "Explore the industrial side of IoT. Learn about SCADA systems, Modbus, and use cases like predictive maintenance.",
            },
            {
                id: 12,
                name: "Projects (Portfolio)",
                handler: "handleProjects",
                des: "Build end-to-end projects like smart home systems or environmental monitors. This is crucial for showcasing your skills.",
            },
            {
                id: 13,
                name: "Career Scaling",
                handler: "handleCareer",
                des: "Learn how to deploy and manage thousands of devices. Explore IoT standards, 5G IoT, and digital twins for professional growth.",
            },
        ],

        route: "iot"
    },
    {
        id: 12,
        title: "Big Data Development",
        description: "Big Data Development involves designing and building systems to process and analyze large volumes of data. It focuses on utilizing tools and technologies to handle data storage, processing, and analytics for businesses to derive insights.",
        roadmapSteps: [
            {
                id: 0,
                name: "Foundations",
                handler: "handleFoundations",
                des: "Master Python, SQL, Linux, and Git. Practice writing SQL joins and Python ETL scripts to build a solid base.",
            },
            {
                id: 1,
                name: "Data Engineering Basics",
                handler: "handleDataEngineering",
                des: "Learn relational schemas, normalization, and data formats like Avro and Parquet. Understand how data is modeled and prepared for analysis.",
            },
            {
                id: 2,
                name: "Storage Fundamentals (Hadoop)",
                handler: "handleStorage",
                des: "Grasp how distributed file systems differ from traditional databases. Learn HDFS concepts and block storage.",
            },
            {
                id: 3,
                name: "Batch Processing (Hadoop)",
                handler: "handleBatchProcessing",
                des: "Understand batch jobs and when to use them. Learn Hadoop's MapReduce concepts by running a sample job.",
            },
            {
                id: 4,
                name: "Distributed Processing (Spark)",
                handler: "handleDistributedProcessing",
                des: "Master Spark's Core, DataFrame API, and Spark SQL. Learn about caching, joins, and partition tuning in PySpark.",
            },
            {
                id: 5,
                name: "Streaming & Messaging (Kafka)",
                handler: "handleStreaming",
                des: "Learn about real-time data flow with Apache Kafka. Understand topics, producers, and consumers to build a simple streaming pipeline.",
            },
            {
                id: 6,
                name: "Query Engines & Warehouses",
                handler: "handleQueryEngines",
                des: "Explore tools like Hive, Presto, and a cloud data warehouse (BigQuery, Redshift, Snowflake). Practice schema design for analytics.",
            },
            {
                id: 7,
                name: "Orchestration & Pipelines (Airflow)",
                handler: "handleOrchestration",
                des: "Automate and manage your data pipelines. Learn Apache Airflow to schedule and monitor complex workflows using DAGs.",
            },
            {
                id: 8,
                name: "Infrastructure & Deployment",
                handler: "handleInfrastructure",
                des: "Get hands-on with Docker, Kubernetes, and Terraform. Learn to deploy and manage your big data clusters reproducibly.",
            },
            {
                id: 9,
                name: "Cloud Managed Services",
                handler: "handleCloudServices",
                des: "Translate your open-source skills to managed cloud services (e.g., AWS EMR, GCP Dataproc). Understand cost and security best practices.",
            },
            {
                id: 10,
                name: "Data Governance & Security",
                handler: "handleGovernance",
                des: "Learn to secure your data. Focus on data catalogs, lineage, access controls, and compliance with regulations like GDPR.",
            },
            {
                id: 11,
                name: "Observability & Performance",
                handler: "handleObservability",
                des: "Monitor your pipelines. Learn about profiling, partition tuning, and managing logging and metrics to ensure reliability.",
            },
            {
                id: 12,
                name: "Machine Learning Pipelines",
                handler: "handleML",
                des: "Learn to integrate machine learning into your pipelines. Explore feature stores and tools for training and serving models in production.",
            },
            {
                id: 13,
                name: "Capstone Projects (Portfolio)",
                handler: "handleCapstone",
                des: "Build and publish 3 end-to-end projects. This is your portfolio to prove your skills and showcase your ability to solve real-world problems.",
            },
            {
                id: 14,
                name: "Career & Scaling Moves",
                handler: "handleCareer",
                des: "Learn cost optimization, multi-cluster architectures, and data product design. Add real-world monitoring and runbooks to your portfolio.",
            },
        ],

        route: "bigdata"
    }
];


export default Roadmaps