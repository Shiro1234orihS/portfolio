// src/i18n/index.js
import { createI18n } from 'vue-i18n'

// Traductions
const messages = {
    en: {
        // #region APP 
        welcome: 'Welcome',
        education: 'Education and Qualifications',
        project: 'Project',
        work: 'Work Experience',
        technical: 'Technical Skills',
        languages: 'Languages',
        references: 'References',
        leisure: 'Leisure',
        choose_language: 'Choose language',
        open_cv: 'Open my CV',
        // #endregion

        // #region Home  
        welcome_portfolio: 'Welcome to my portfolio,',
        intro_name: 'I am Ricardo NUNES EMILIO',
        birth_date: 'Date of birth: March 8, 2003',
        nationality: 'Nationality: Portuguese',
        address: 'Address: 115 impasse de l’Île, Scionzier, France',
        phone: 'Phone: +33 6 04 65 21 42',
        email: 'Email: ricardonunesemilio@gmail.com',
        open_cv: 'Open my CV',
        objective_title: 'Professional Objective',
        objective_text: 'As a recent graduate with a Bachelor of Technology in Computer Science, I am eager to apply my analytical skills and technical knowledge in a challenging development role within a software company.',
        social_networks: 'My social networks',
        // #endregion

        //#region Education 
        education_title: 'Educational Background',
        but_title: 'Bachelor of Technology in Computer Science',
        but_location: 'Université Savoie Mont Blanc / IUT Annecy – Annecy-le-Vieux, France',
        but_date: '2022 - Present',
        but_description: 'Comprehensive training in software development, database management, networks, and information systems. Development of concrete projects using modern technologies such as <strong>HTML, CSS, JavaScript, PHP, Python, C#, and SQL</strong>.',
        bac_title: 'STI2D Baccalaureate (Sciences and Technologies of Industry and Sustainable Development)',
        bac_location: 'Lycée des Métiers Charles Poncet – Cluses, France',
        bac_date: '2019 - 2022',
        bac_description: 'Specialization in technological innovation and eco-design, with a focus on programming, system design, and technical project management. Development of skills in <strong>modeling, electronics, and sustainable development</strong>.',
        //#endregion

        //#region Projet
        projects_academic_title: 'Academic Projects:',
        first_year_project: 'First Year Project',
        project_west: 'Wests Of Survival',
        project_west_desc: 'Design and creation of a video game.',
        second_year_project: 'Second Year Project',
        third_year_project: 'Third Year Project',
        project_bmw_laravel: 'BMW Laravel Project',
        project_bmw_laravel_desc: 'Website developed with Laravel and Bootstrap for managing used vehicles.',
        project_bmw_vue: 'BMW Vue.js Project',
        project_bmw_vue_desc: 'Website developed with Vue.js and Laravel for managing used vehicles.',
        project_docker_y: 'Project Y with Docker',
        project_docker_y_desc: 'Website developed with Vue.js, Node.js, and Docker to launch a new social network.',
        projects_personal_title: 'Personal Projects:',
        project_mini: 'My Mini Personal Projects',
        project_mini_desc: 'Various small projects completed throughout the year.',
        project_keypass: 'Password Management Site',
        project_keypass_desc: 'Creation of a website, a browser extension, and a mobile application to securely view and manage passwords.',
        project_earningcall: 'Earning Call Consultation Site',
        project_earningcall_desc: 'Website developed with Laravel and Bootstrap to consult various Earnings Calls.',
        project_home_assistant: 'Home Assistant Project',
        project_home_assistant_desc: 'Development of a website to visualize data collected by various sensors, then processed by an artificial intelligence model.',
        project_home_assistant_2: 'Home Assistant Project 2.0',
        project_home_assistant_2_desc: 'Development of a website to visualize data collected by various sensor.',
        project_intranet_desc: 'Website centralizing various projects such as a notepad, a password manager, and a calendar',
        project_intranet: 'Website gathering multiple projects',
        //#endregion

        //#region Technical 
        skills_title: 'Skills',
        app_dev: 'Application Development',
        prog_lang: 'Programming languages',
        frameworks: 'Frameworks',
        api_creation: 'API Creation',
        web_design: 'Web Design',
        rdbms_admin: 'Relational Database Administration',
        nosql_admin: 'NoSQL Database Administration',
        tools: 'Tools and Technologies Mastered',
        python: 'Python',
        csharp: 'C#',
        dart: 'Dart',
        react_native: 'React Native',
        entity_framework: 'EntityFramework Core',
        moq: 'Moq',
        aspnet: 'ASP.NET Core',
        nodejs: 'Node.js',
        express: 'Express.js',
        html: 'HTML',
        css: 'CSS',
        javascript: 'JavaScript',
        php: 'PHP',
        threejs: 'three.js',
        laravel: 'Laravel',
        vuejs: 'Vue.js',
        pinia: 'Pinia',
        blazor: 'Blazor',
        sqlserver: 'SQL Server',
        postgresql: 'Postgres SQL',
        mysql: 'MySQL',
        mongodb: 'Mongo DB',
        vscode: 'Visual Studio Code',
        visualstudio: 'Visual Studio',
        azure: 'Azure',
        azure_devops: 'Azure DevOps',
        git: 'Git',
        typescript: 'TypeScript',
        biblio: 'Library',
        biblio_graphique: '3D Graphics Library',
        biblio_test: 'Test/mock library',
        ORM: 'ORM / Persistence',
        sequelize: 'Sequelize',
        //#endregion 

        //#region Language 
        languages_title: 'My Language Skills',
        portuguese: 'Portuguese',
        portuguese_level: 'Native language (C2)',
        french: 'French',
        french_level: 'Native speaker (C2)',
        english: 'English',
        english_level: 'Intermediate (B2)',
        //#endregion 

        //#region Reference 
        references_title: 'References',
        contact: 'Contact',
        luc_damas: 'Luc Damas',
        luc_damas_role: 'Associate Professor at Université Savoie Mont Blanc',
        luc_damas_comment: 'Ricardo is a passionate and rigorous developer. His expertise in C# and Laravel has optimized several projects.',
        pascal_colin: 'Pascal Colin',
        pascal_colin_role: 'Teacher at IUT Annecy',
        pascal_colin_comment: 'Ricardo has demonstrated excellent adaptability and strong development skills.',
        franck_lagoutte: 'Franck Lagoutte',
        franck_lagoutte_role: 'CISO - Autoroutes et Tunnel du Mont Blanc',
        franck_lagoutte_comment: 'Always proactive, Ricardo has provided innovative solutions on several projects.',
        hugo_raguin: 'Hugo Raguin',
        hugo_raguin_role: 'Web Full Stack Developer Intern at Datalumni',
        hugo_raguin_comment: 'An excellent teamwork experience with Ricardo, who was a key player on the backend of our application.',
        tuong_vy: 'Tuong Vy Pham Huynh',
        tuong_vy_role: 'Application Development Intern - GeoCode',
        tuong_vy_comment: 'An excellent collaboration with Ricardo, who played a crucial role in the backend development of our application.',
        nicolas_breteau: 'Nicolas Breteau',
        nicolas_breteau_role: 'Digitalization Manager at Meggitt',
        nicolas_breteau_comment: 'During these few months with us, Ricardo, you have shown motivation, rigor, and creativity, enabling you to handle a complex internship project successfully. You already have all the tools to become an excellent Full Stack Developer 🚀',

        //#endregion

        //#region WestOfSurvival
        west_project_tag: 'Monogame Game Project',
        west_project_title: 'West of Survival',
        west_features_tilte: 'Game Features',
        west_features_subtilte: 'Discover the mechanics that make this game unique',
        west_features: {
            immersive_gameplay: {
                title: 'Immersive Gameplay',
                description: 'Survival in a hostile environment'
            },
            open_world: {
                title: 'Open World',
                description: 'Free exploration of the Far West'
            },
            dynamic_combat: {
                title: 'Dynamic Combat',
                description: 'Real-time combat system'
            }
        },
        west_project_subtitle: 'A survival game in the ruthless universe of the Far West',
        west_project_objective: 'Project Objective:',
        west_project_description: '<strong>West of Survival</strong> is a survival game created as part of a university project with Dulhoste Maxime and Mihoubi Marouane. The gameplay, maps, and designs were imagined by our team. The project uses C# and MonoGame, with maps designed using Tiled.',
        west_toggle_details: 'Show more content',
        west_hide_details: 'Hide details',
        west_main_software: 'Main Software and Frameworks:',
        west_tiled: 'Tiled',
        west_tiled_description: 'Tiled is an open-source 2D map editor, ideal for creating video game levels and interactive maps thanks to its intuitive interface.',
        west_monogame: 'MonoGame',
        west_monogame_description: 'MonoGame is an open-source framework that facilitates the development of 2D and 3D cross-platform games, based on Microsoft XNA.',
        west_challenges: 'Challenges Encountered',
        west_challenges_description: 'We overcame challenges such as performance optimization and creating an intuitive interface.',
        west_role: 'Role in the Project',
        west_role_description: 'I mainly worked on gameplay logic, graphical integration, and collision management.',
        west_results: 'Results',
        west_results_description: 'The project received positive feedback for its fluidity, design, and engaging gameplay.',
        west_project_skills: 'Project Skills',
        west_technologies: 'Technologies',
        west_availability: 'Game Availability:',
        west_availability_text: 'A Phaser version with JavaScript is',
        west_available: 'available',
        west_github_source: 'Find the source code on',
        west_csharp: 'C#',
        west_action: 'Try the game',
        west_view: 'View the code',
        //#endregion

        //#region LaravelBmw
        laravel_tag_projet: 'Laravel Web Project',
        laravel_project_title: 'Reconstruction of the BMW Motorrad Website with Laravel',
        laravel_project_presentation: 'Project Presentation',
        laravel_projet_tag_desc: 'Complete web platform for BMW motorcycle management with Laravel',
        languages_view_online: 'View the online',
        laravel_stats_users: 'Managed Users',
        laravel_stats_motorcycles: 'Referenced Motorcycles',
        laravel_stats_equipment: 'Equipment',
        laravel_stats_performance: 'Performance',
        laravel_feature_title: 'Main features',
        laravel_feature_users_title: 'User Management',
        laravel_feature_users_description: 'Complete authentication system and profile management',
        laravel_feature_catalog_title: 'Motorcycle Catalog',
        laravel_feature_catalog_description: 'Complete BMW model database with advanced filtering',
        laravel_feature_equipment_title: 'Equipment',
        laravel_feature_equipment_description: 'Management of accessories and spare parts',
        laravel_feature_admin_title: 'Admin Interface',
        laravel_feature_admin_description: 'Administration panel for complete site management',
        laravel_feature_powerbi_title: 'PowerBI Integration',
        laravel_feature_powerbi_description: 'Real-time dashboards and data analytics',
        laravel_project_description: 'The objective of this project was to replicate the various features of the official BMW Motorrad website. This work was carried out as part of an educational initiative to explore Laravel’s capabilities in developing dynamic and high-performance web applications.',
        laravel_project_features: 'Developed Features',
        laravel_feature_users: '🔹 <strong>User Management:</strong> Secure authentication system (JWT), role management (admin/user), and account management.',
        laravel_feature_catalog_motos: '🔹 <strong>Motorcycle Catalog:</strong> Dynamic consultation of models with advanced filters (by type, price, power, etc.).',
        laravel_feature_catalog_equipements: '🔹 <strong>Equipment Catalog:</strong> Similar system to the motorcycle catalog with stock display and dynamic updates.',
        laravel_feature_admin: '🔹 <strong>Admin Back-Office:</strong> Interface allowing the addition, modification, and deletion of models and equipment.',
        laravel_feature_powerbi: '🔹 <strong>Power BI Reports:</strong> Sales analysis through an interactive dashboard connected to the database.',
        laravel_challenges: 'Challenges and Solutions',
        laravel_challenge_performance: '<strong>Performance Optimization:</strong> Caching of frequent queries and optimization of SQL queries to improve model display speed.',
        laravel_challenge_powerbi: '<strong>Power BI Integration:</strong> Development of a Laravel API to dynamically feed the reports.',
        laravel_challenge_performance_title: 'Performance Optimization',
        laravel_challenge_performance_description: 'Performance challenge to handle large volumes of data',
        laravel_challenge_powerbi_title: 'PowerBI Integration',
        laravel_challenge_powerbi_description: 'Technical challenge of data analytics integration',

        laravel_technologies: 'Technologies Used',
        laravel_available_link: 'The site is available at:',
        laravel_project_conclusion: 'Project Summary',
        laravel_conclusion_flexibility_title: 'Flexibility',
        laravel_conclusion_flexibility: '- <strong>Flexibility:</strong> The site was designed to work on different operating systems without requiring complex installation. The use of Docker containers allowed better portability.',
        laravel_conclusion_user_experience_title: 'Apprentissages',
        laravel_conclusion_user_experience: '- <strong>User Experience:</strong> The user interface was designed to be fluid and intuitive, making navigation simple and pleasant.',
        laravel_conclusion_learnings_title: 'Learnings',
        laravel_conclusion_learnings: '- <strong>Skills Acquired:</strong> This project strengthened my expertise in Laravel, software architecture, BI tool integration, and cloud deployment with Azure.',
        laravel_toggle_details: 'Show more content',
        laravel_hide_details: 'Hide details',
        laravel_demo_online_title: 'Online Demo',
        laravel_demo_online_description: 'Explore the complete application in action with all its features',
        laravel_demo_feature_catalog: 'Interactive catalog',
        laravel_demo_feature_admin: 'Admin panel',
        laravel_view_demo: 'View online',
        //#endregion

        //#region VueBmw
        vue_project_tag: 'Full-Stack Project',
        vue_project_title: 'Rebuilding the BMW Motorrad Website with Vue.js',
        vue_project_tag_obj: 'Modern application with Vue.js and ASP.NET Core',
        vue_overview_title: 'Project Overview',
        vue_project_features: {
            automated_deployment: {
                title: 'Automated Deployment',
                description: 'Integrated CI/CD pipeline'
            },
            enhanced_security: {
                title: 'Enhanced Security',
                description: 'Authentication and authorization'
            },
            optimized_performance: {
                title: 'Optimized Performance',
                description: 'Fast and efficient loading'
            }
        },
        vue_project_description: 'The goal of this project was to replicate the various features of the official BMW Motorrad website. This work was carried out in an educational setting to explore the capabilities of the Laravel framework in developing dynamic and high-performance web applications.',
        vue_toggle_competences: 'Show project skills',
        vue_hide_competences: 'Hide skills',
        vue_developed_features: 'Developed Features',
        vue_feature_deployment: '<strong>Automated Deployment:</strong> CI/CD integration for rapid deployment via Docker and Azure DevOps.',
        vue_feature_security: '<strong>Container Security:</strong> Management of environment variables and permissions.',
        vue_challenges_solutions: 'Challenges and Solutions',
        vue_challenge_dependencies: '<strong>Dependency Management:</strong> Centralized configurations via a .env file.',
        vue_challenge_scalability: '<strong>Scalability:</strong> Possibility of orchestration on Kubernetes to handle load increase.',
        vue_technical_skills: 'Technical Skills',
        vue_frontend: 'Frontend',
        vue_backend_api: 'Backend and API',
        vue_database: 'Database',
        vue_source_code: '<strong>Source code available here:</strong>',
        vue_vue_js: 'Vue.js',
        vue_pinia: 'Pinia',
        vue_asp_net: 'ASP.NET Core',
        vue_entity_framework: 'Entity Framework Core',
        vue_postgresql: 'PostgreSQL',
        vue_git_repo: 'GitHub Repository',
        vue_git_info: 'Access the complete source code of the project',
        vue_view_code: 'View on GitHub',
        vue_technical_skills_subtitle: 'Technologies and frameworks used',
        //#endregion

        //#region Ydocker
        docker_tab_title: 'DevOps Project',
        docker_tech_tab_description: 'Application containerization and orchestration with Docker',
        docker_teh: 'Technologies',
        docker_step: 'Steps',
        docker_auto: 'Automated',
        docker_beni: 'Project benefits',
        docker_obje: 'Objective',
        docker_depl: 'Modernize deployment with Docker',
        docker_project_title: 'Dockerization of Site X',
        docker_project_presentation: 'Project Overview',
        docker_project_description: 'The objective of this project was to <strong>dockerize</strong> a website so that it can be run on any PC without complex configuration. Thanks to <strong>Docker</strong>, we encapsulated the application and its dependencies in an isolated and reproducible environment.',
        docker_project_advantages: 'The choice of containerization avoids issues related to environment differences (operating systems, dependencies, software versions) and simplifies deployment on any machine.',

        docker_docker_steps: 'Dockerization Steps',
        docker_step_title: 'Step-by-step containerization process',
        docker_step_1: '<strong>Creating the Dockerfile</strong>: Defining the base image and instructions for installing dependencies.',
        docker_step_2: '<strong>Setting up Docker Compose</strong>: Configuring necessary services (database, web server, API, etc.).',
        docker_step_3: '<strong>Deployment and execution</strong>: Building and running Docker containers.',
        docker_step_4: '<strong>Testing and validation</strong>: Ensuring proper functionality on different machines.',

        docker_technologies_used: 'Technologies and Tools Used',
        docker_technologies_used_sub_title: 'Technology stack and DevOps tools',

        docker_technologies: {
            docker: {
                description: 'Application containerization'
            },
            docker_compose: {
                description: 'Multi-container orchestration'
            },
            nginx: {
                description: 'Reverse proxy and load balancer'
            },
            database: {
                description: 'Persistent data management'
            },
            ci_cd: {
                description: 'Continuous integration and deployment'
            }
        },
        docker_tech_docker: '<strong>Docker</strong>: For application containerization and isolation.',
        docker_tech_docker_compose: '<strong>Docker Compose</strong>: For orchestrating multiple containers and managing dependencies between services in a simple and efficient way.',
        docker_tech_nginx: '<strong>Nginx / Apache</strong>: For handling HTTP requests and reverse proxy.',
        docker_tech_database: '<strong>Database</strong>: PostgreSQL / MySQL (depending on project requirements).',
        docker_tech_ci_cd: '<strong>GitHub Actions / CI/CD</strong>: For automating build and deployment.',

        docker_steps: {
            configuration: 'Configuration',
            containerization: 'Containerization',
            orchestration: 'Orchestration',
            deployment: 'Deployment'
        },
        docker_challenges_solutions: 'Challenges and Solutions',
        docker_challenges_subtitle: 'Challenges encountered and solutions provided',
        docker_challenge_volumes_title: 'Volume Management',
        docker_challenge_volumes: '<strong>Volume management and data persistence</strong>: Using <strong>Docker Volumes</strong> to store data persistently.',
        docker_challenge_optimization_title: 'Optimization',
        docker_challenge_optimization: '<strong>Dockerfile optimization</strong>: Reducing image size by using a minimal image (e.g., Alpine Linux).',
        //#endregion

        //#region MiniProjet
        mini_projet_title: "Mini Project",
        mini_3d_title: "Setting up different 3D models in Tree.js:",
        mini_css_title: "Using animation in CSS:",
        //#endregion

        //#region keypass
        keypass_tag: 'Security Project',
        keypass_project_title: 'Creation of a Password Management Website',
        keypass_project_presentation: 'Project Objective',
        keypass_project_description: 'This project aims to design a complete <strong>secure password management solution</strong>, including a website, a browser extension, and a mobile application.',

        keypass_project_feature_1: 'A <strong>website</strong> allowing users to store, manage, and organize their passwords.',
        keypass_project_feature_2: 'A <strong>browser extension</strong> to automatically save passwords.',
        keypass_project_feature_3: 'A <strong>mobile application</strong> for secure access to passwords on the go.',

        keypass_project_security: 'The goal is to provide a <strong>smooth and secure interface</strong>, ensuring data confidentiality through <strong>advanced encryption</strong>.',

        keypass_technologies_used: 'Technologies and Tools Used',
        keypass_tech_frontend: '<strong>Front-end</strong>: Vue.js and Bootstrap for a modern and responsive user interface.',
        keypass_tech_backend: '<strong>Back-end</strong>: Laravel to manage users and secure database interactions.',
        keypass_tech_database: '<strong>Database</strong>: PostgreSQL, with password encryption (bcrypt, AES-256).',
        keypass_tech_security: '<strong>Security</strong>: Integration of <strong>2FA (Two-Factor Authentication)</strong> and AES encryption for data protection.',
        keypass_tech_containerization: '<strong>Containerization</strong>: Docker for portability and compatibility across different systems.',
        keypass_tech_cloud: '<strong>Cloud Deployment</strong>: Azure for hosting and backend service management.',

        keypass_toggle_competences: 'Show project skills',
        keypass_hide_competences: 'Hide skills',

        keypass_developed_features: 'Developed Features',
        keypass_feature_1: '<strong> Secure password creation and storage</strong> with AES-256 encryption.',
        keypass_feature_2: '<strong> Secure password generator</strong> based on customizable criteria.',
        keypass_feature_3: '<strong> Browser extension</strong> for saving and autofilling credentials.',
        keypass_feature_4: '<strong> Multi-device synchronization</strong> with a secure API.',

        keypass_challenges_solutions: 'Challenges and Solutions',
        keypass_challenge_1: '<strong>Password security</strong>: Implementation of <strong>AES-256 encryption</strong> and encrypted database storage.',
        keypass_challenge_2: '<strong>Performance and optimization</strong>: Using <strong>Redis caches</strong> to speed up access to encrypted data.',
        keypass_challenge_3: '<strong>Reliability and availability</strong>: Implementation of an <strong>automatic backup system</strong> and hosting on Azure.',

        keypass_technical_skills: 'Technical Skills',
        keypass_frontend: 'Front-end',
        keypass_backend: 'Back-end',
        keypass_database: 'Database',

        keypass_project_review: 'Project Review',
        keypass_project_results: 'Results',
        keypass_result_1: '- <strong>Flexibility</strong>: Compatible with all browsers and accessible on mobile and desktop.',
        keypass_result_2: '- <strong>Enhanced security</strong>: Integration of best practices in cryptography and strong authentication.',
        keypass_tag: 'Security Project',
        keypass_hero_subtitle: 'Secure and intuitive password manager',
        keypass_project_security: 'The goal is to provide a <strong>smooth and secure interface</strong>, ensuring data confidentiality through <strong>advanced encryption</strong>.',
        keypass_tech_database_title: 'Database',
        keypass_tech_security_title: 'Security',
        vue_technical_skills_subtitle: 'Technologies mastered in this project',

        //#endregion

        //#region Earnincall
        earning_project_title: 'Creation of a Website to Visualize Earnings Calls with Angular',
        earning_project_presentation: 'Project Objective',
        earning_project_description: 'This project aims to design a web platform that allows investors and financial analysts to track <strong>earnings calls</strong> of publicly traded companies. An <strong>earnings call</strong> is a teleconference between a company\'s management, analysts, investors, and the media, where financial results for a quarter or fiscal year are discussed.',
        earning_project_goal: 'The goal of this site is to provide an intuitive and centralized interface to consult these events and facilitate investment decision-making.',

        earning_technologies_used: 'Technologies and Tools Used',
        earning_tech_frontend: '<strong>Front-end</strong>: Angular for a dynamic and high-performance user interface.',
        earning_tech_api: '<strong>API Integration</strong>: Connection to financial APIs to retrieve real-time earnings call announcements.',

        earning_toggle_competences: 'Show project skills',
        earning_hide_competences: 'Hide skills',

        earning_developed_features: 'Developed Features',
        earning_feature_1: '<strong>Dynamic display of earnings calls</strong> with filters by company, date, and industry sector.',
        earning_feature_2: '<strong>Integration of financial APIs</strong> to automatically retrieve announcements from listed companies.',

        earning_challenges_solutions: 'Challenges and Solutions',
        earning_challenge_1: '<strong>Optimization of Angular performance</strong>: Asynchronous data loading with lazy loading.',
        earning_challenge_2: '<strong>API request management</strong>: Implementation of caching to prevent excessive external API requests.',

        earning_technical_skills: 'Technical Skills',
        earning_frontend: 'Front-end',

        earning_project_review: 'Project Review',
        earning_project_results: 'Results',
        earning_result_1: '- <strong>Flexibility</strong>: The site runs on different systems without requiring complex installation.',

        earning_project_tag: 'Financial Platform',
        earning_hero_subtitle: 'Real-time analysis of corporate financial results',
        earning_goal_title: 'Project Objective',
        earning_features_main_title: 'Main Features',
        earning_tech_stack_subtitle: 'Technology stack and financial APIs',
        earning_tech_frontend_title: 'Frontend',
        earning_tech_api_title: 'APIs & Data',
        earning_skills_subtitle: 'Technical skills implemented',
        earning_project_success: 'Successful Project',
        earning_impact_modern: 'Modern and intuitive interface',
        earning_impact_performance: 'Optimized performance',
        earning_impact_realtime: 'Accurate real-time data',

        // Technologies descriptions
        earning_tech_angular_desc: 'TypeScript framework for dynamic interfaces',
        earning_tech_api_desc: 'Real-time financial APIs integration',

        // Features
        earning_feature_realtime_title: 'Real-Time Analysis',
        earning_feature_realtime_desc: 'Financial data updated instantly',
        earning_feature_viz_title: 'Advanced Visualizations',
        earning_feature_viz_desc: 'Interactive charts and dashboards',
        earning_feature_search_title: 'Smart Search',
        earning_feature_search_desc: 'Multi-criteria filtering and search',
        earning_feature_responsive_title: 'Responsive Interface',
        earning_feature_responsive_desc: 'Optimized for all devices',
        //#endregion

        //#region HomeAssitant
        // Hero Section
        iot_project_tag: 'SAE S5.A.01 - BUT3 INFO RA',
        iot_hero_title: 'IoT Environmental Monitoring System',
        iot_hero_subtitle: 'Intelligent surveillance of environmental quality in university buildings',
        iot_stats_sensors: 'Sensor Types',
        iot_stats_sites: 'Sites (IUT/TETRAS)',

        // Overview Section
        iot_overview_title: 'Project Overview',
        iot_objectives_title: 'Project Objectives',
        iot_objectives_analyze: 'Analyze measurements from sensors installed at IUT and Tetras in different types of rooms (break, TD, PC)',
        iot_objectives_actuate: 'Actuate devices (sirens, lamps, smart plugs) according to personalized thresholds',
        iot_objectives_develop: 'Develop discomfort detection and prediction algorithms',
        iot_architecture_title: 'System Architecture',
        iot_architecture_desc: 'The system is built around a distributed architecture with Raspberry Pi collecting data locally and transmitting it to a centralized OVH server for processing and visualization.',

        // Highlights
        iot_highlight_multisite: 'Multi-site',
        iot_highlight_multisite_desc: 'IUT and TETRAS monitored simultaneously',
        iot_highlight_realtime: 'Real Time',
        iot_highlight_realtime_desc: 'Continuous monitoring 24/7',
        iot_highlight_predictive: 'Predictive',
        iot_highlight_predictive_desc: 'AI for anticipation',

        // Toggle Button
        iot_toggle_hide: 'Hide details',
        iot_toggle_show: 'View technical details',

        // Tech Stack
        iot_tech_stack_title: 'Technology Stack',
        iot_tech_stack_subtitle: 'Technologies and tools used by category',
        iot_tech_frontend: 'Frontend',
        iot_tech_backend: 'Backend and API',
        iot_tech_raspberry: 'Raspberry Pi API',
        iot_tech_system: 'System & Containerization',
        iot_tech_data: 'Data & Visualization',

        // Sensors
        iot_sensors_title: 'Environmental Sensors',
        iot_sensors_subtitle: 'Complete environmental quality monitoring',
        iot_sensor_co2_desc: 'Air quality',
        iot_sensor_temperature_desc: 'Thermal measurement',
        iot_sensor_light_desc: 'Light intensity',
        iot_sensor_humidity_desc: 'Humidity level',
        iot_sensor_noise_desc: 'Sound level',
        iot_sensor_vibration_desc: 'Vibration detection',
        iot_sensor_movement_desc: 'Presence detection',
        iot_sensor_uv_desc: 'UV radiation',
        iot_sensor_cov_desc: 'Organic compounds',
        iot_sensor_pm25_desc: 'Fine particles',

        // Features
        iot_features_title: 'Key Features',
        iot_features_subtitle: 'Advanced technologies for intelligent monitoring',
        iot_feature_data_collection_title: 'Data Collection',
        iot_feature_data_collection_desc: 'Real-time retrieval of environmental measurements',
        iot_feature_alert_system_title: 'Alert System',
        iot_feature_alert_system_desc: 'Triggering alarms according to personalized thresholds',
        iot_feature_visualization_title: 'Visualization',
        iot_feature_visualization_desc: 'Grafana dashboards for data analysis',
        iot_feature_ai_title: 'Artificial Intelligence',
        iot_feature_ai_desc: 'Prediction and anomaly detection with TensorFlow',

        // Phases
        iot_phases_title: 'Development Phases',
        iot_phases_subtitle: 'Iterative approach for progressive deployment',
        iot_phase_v1_title: 'Base Phase',
        iot_phase_v1_feature_1: 'Raspberry Pi data retrieval API',
        iot_phase_v1_feature_2: 'Raw data visualization in Grafana',
        iot_phase_v1_feature_3: 'Discomfort detection algorithm (CO2/noise/movement)',
        iot_phase_v1_feature_4: 'Temperature regression/prediction',
        iot_phase_v1_feature_5: 'Open window detection',
        iot_phase_v1_feature_6: 'Presence detection (staff room)',
        iot_phase_v2_title: 'Advanced Phase',
        iot_phase_v2_feature_1: 'Sensor data homogenization',
        iot_phase_v2_feature_2: 'Advanced visualization in Grafana',
        iot_phase_v2_feature_3: 'Use of actuators (alarms + lamps)',
        iot_phase_v2_feature_4: 'ADE integration',
        iot_phase_v2_feature_5: 'IUT/TETRAS data comparison',

        // Architecture
        iot_architecture_system_title: 'System Architecture',
        iot_hardware_title: 'Hardware',
        iot_hardware_item_1: '2 Raspberry Pi with Docker images',
        iot_hardware_item_2: 'Multiple sensors (6-1, 9-1, CO2)',
        iot_hardware_item_3: 'Z-stick 7 + Range extender',
        iot_hardware_item_4: 'Actuators (lamps, alarms)',
        iot_software_title: 'Software',
        iot_software_item_1: 'Zwave-js-ui (sensor communication)',
        iot_software_item_2: 'Home Assistant (data aggregation)',
        iot_software_item_3: 'InfluxDB (local storage)',
        iot_software_item_4: 'Portainer (container supervision)',
        iot_infrastructure_title: 'Infrastructure',
        iot_infrastructure_item_1: 'OVH server (1 database per group)',
        iot_infrastructure_item_2: 'Centralized retrieval API',
        iot_infrastructure_item_3: 'Grafana dashboards',
        iot_infrastructure_item_4: 'AI algorithms (TensorFlow)',

        // GitHub Repositories
        iot_github_front_title: 'GitHub Repository',
        iot_github_front_desc: 'Access the complete source code of the C# Front project',
        iot_github_api_title: 'GitHub Repository',
        iot_github_api_desc: 'Access the complete source code of the C# API project',
        iot_github_raspi_title: 'GitHub Repository',
        iot_github_raspi_desc: 'Access the complete source code of the Raspi API project',
        iot_github_docker_title: 'GitHub Repository',
        iot_github_docker_desc: 'Access the complete source code of the Raspi OS project',
        //#endregion


        //#region HomeAssitant2
        // Hero Section
        java_iot_project_tag: 'Java Refactoring Project',
        java_iot_hero_title: 'Java IoT System Refactoring',
        java_iot_hero_subtitle: 'Complete system redesign using Java technologies with hardcoded data in PostgreSQL',
        java_iot_stats_java: 'Java Stack',
        java_iot_stats_database: 'PostgreSQL Database',

        // Overview Section
        java_iot_overview_title: 'Project Overview',
        java_iot_refactor_title: 'System Refactoring',
        java_iot_refactor_description: 'This project represents a complete refactoring of the original IoT monitoring system, migrating from a complex distributed architecture to a simplified Java-based solution with hardcoded data in PostgreSQL database.',
        java_iot_objectives_title: 'Project Objectives',
        java_iot_objective_1: 'Simplify the system architecture by removing Raspberry Pi dependencies',
        java_iot_objective_2: 'Implement a pure Java solution using Spring Boot and Vaadin',
        java_iot_objective_3: 'Use PostgreSQL database with hardcoded environmental data',
        java_iot_objective_4: 'Create an intuitive interface for data visualization and analysis',

        // Highlights
        java_iot_highlight_java: 'Full Java',
        java_iot_highlight_java_desc: 'Complete solution in Java ecosystem',
        java_iot_highlight_data: 'Static Data',
        java_iot_highlight_data_desc: 'Hardcoded data in PostgreSQL',
        java_iot_highlight_simple: 'Simplified',
        java_iot_highlight_simple_desc: 'No IoT hardware dependencies',

        // Advantages
        java_iot_advantages_title: 'Key Advantages',
        java_iot_advantages_subtitle: 'Benefits of the Java-based approach',
        java_iot_advantage_simplicity_title: 'Architectural Simplicity',
        java_iot_advantage_simplicity_desc: 'Elimination of hardware complexities and distributed system management',
        java_iot_advantage_maintenance_title: 'Easy Maintenance',
        java_iot_advantage_maintenance_desc: 'Centralized codebase and simplified deployment process',
        java_iot_advantage_performance_title: 'Optimized Performance',
        java_iot_advantage_performance_desc: 'Direct database access without network latency issues',
        java_iot_advantage_scalability_title: 'Better Scalability',
        java_iot_advantage_scalability_desc: 'Horizontal scaling capabilities with Spring Boot',

        // Features
        java_iot_features_title: 'Key Features',
        java_iot_features_subtitle: 'Main functionalities of the refactored system',
        java_iot_feature_refactor_title: 'Complete Refactoring',
        java_iot_feature_refactor_desc: 'Migration from distributed IoT architecture to monolithic Java solution',
        java_iot_feature_data_title: 'Hardcoded Data Management',
        java_iot_feature_data_desc: 'Environmental data stored directly in PostgreSQL database',
        java_iot_feature_visualization_title: 'Modern Interface',
        java_iot_feature_visualization_desc: 'Vaadin-based web interface for data visualization',
        java_iot_feature_simplified_title: 'Simplified Architecture',
        java_iot_feature_simplified_desc: 'No hardware dependencies or complex IoT integrations',

        // Tech Stack
        java_iot_tech_stack_title: 'Technology Stack',
        java_iot_tech_stack_subtitle: 'Java technologies used in the refactoring',
        java_iot_tech_frontend: 'Frontend',
        java_iot_tech_backend: 'Backend',
        java_iot_tech_database: 'Database',

        // Architecture
        java_iot_architecture_title: 'System Architecture',
        java_iot_architecture_frontend_title: 'Presentation Layer',
        java_iot_architecture_frontend_item_1: 'Vaadin components for modern UI',
        java_iot_architecture_frontend_item_2: 'Responsive design for all devices',
        java_iot_architecture_frontend_item_3: 'Real-time data visualization charts',
        java_iot_architecture_frontend_item_4: 'Interactive dashboards and filters',

        java_iot_architecture_backend_title: 'Business Logic',
        java_iot_architecture_backend_item_1: 'Spring Boot application framework',
        java_iot_architecture_backend_item_2: 'RESTful API services',
        java_iot_architecture_backend_item_3: 'Data processing algorithms',
        java_iot_architecture_backend_item_4: 'Security and authentication',

        java_iot_architecture_data_title: 'Data Management',
        java_iot_architecture_data_item_1: 'PostgreSQL database engine',
        java_iot_architecture_data_item_2: 'Hardcoded environmental datasets',
        java_iot_architecture_data_item_3: 'JPA/Hibernate ORM mapping',
        java_iot_architecture_data_item_4: 'Data validation and constraints',

        // GitHub
        java_iot_github_title: 'GitHub Repository',
        java_iot_github_desc: 'Access the complete Java IoT refactoring source code',
        //#endregion

        //#region HomeIntranet 
        // Hero Section
        dashboard_project_tag: 'Personal Dashboard Project',
        dashboard_hero_title: 'Modular Personal Dashboard',
        dashboard_hero_subtitle: 'A customizable Vue.js dashboard with weather, sports, and productivity modules',
        dashboard_stats_modules: 'Active Modules',
        dashboard_stats_apis: 'Integrated APIs',

        // Overview Section
        dashboard_overview_title: 'Project Overview',
        dashboard_objectives_title: 'Project Objectives',
        dashboard_objective_1: 'Create a modular and extensible personal dashboard',
        dashboard_objective_2: 'Integrate multiple external APIs (weather, sports, etc.)',
        dashboard_objective_3: 'Implement real-time data updates and notifications',
        dashboard_objective_4: 'Provide an intuitive user interface with customizable modules',
        dashboard_concept_title: 'Project Concept',
        dashboard_concept_description: 'This personal dashboard allows users to manage their daily activities through customizable modules. Users can add weather information for different cities, track their favorite sports teams, manage todo lists, and set timers/alarms.',

        // Highlights
        dashboard_highlight_api: 'API Integration',
        dashboard_highlight_api_desc: 'Multiple external APIs integrated',
        dashboard_highlight_realtime: 'Real-time Updates',
        dashboard_highlight_realtime_desc: 'Live data synchronization',
        dashboard_highlight_modular: 'Modular Design',
        dashboard_highlight_modular_desc: 'Customizable and extensible modules',

        // Features
        dashboard_features_title: 'Key Features',
        dashboard_features_subtitle: 'Main functionalities of the dashboard',
        dashboard_feature_home_title: 'Welcome Dashboard',
        dashboard_feature_home_desc: 'Personalized home page with time, date, and user greeting',
        dashboard_feature_weather_title: 'Weather Module',
        dashboard_feature_weather_desc: 'Real-time weather information for multiple cities via OpenWeatherMap API',
        dashboard_feature_soccer_title: 'Sports Module',
        dashboard_feature_soccer_desc: 'Sports team tracking and match results via TheSportsDB API',
        dashboard_feature_todo_title: 'Task Management',
        dashboard_feature_todo_desc: 'Personal todo list with add, edit, and complete functionality',
        dashboard_feature_timer_title: 'Timer & Alarms',
        dashboard_feature_timer_desc: 'Countdown timers and customizable alarms with audio notifications',
        dashboard_feature_responsive_title: 'Responsive Design',
        dashboard_feature_responsive_desc: 'Optimized interface for all devices and screen sizes',

        // APIs
        dashboard_apis_title: 'Integrated APIs',
        dashboard_apis_subtitle: 'External services powering the dashboard',
        dashboard_api_sports_desc: 'Sports database providing team information, match results, and statistics',
        dashboard_api_weather_desc: 'Weather service providing real-time meteorological data for cities worldwide',
        dashboard_api_auth_desc: 'Custom authentication API handling user management and sessions',

        // Tech Stack
        dashboard_tech_stack_title: 'Technology Stack',
        dashboard_tech_stack_subtitle: 'Technologies and frameworks used in development',
        dashboard_tech_frontend: 'Frontend',
        dashboard_tech_backend: 'Backend',
        dashboard_tech_testing: 'Unit Testing',
        dashboard_tech_database: 'Database',

        // Architecture
        dashboard_architecture_title: 'System Architecture',
        dashboard_architecture_frontend_title: 'Frontend Layer',
        dashboard_architecture_frontend_item_1: 'Vue.js 3 with Composition API',
        dashboard_architecture_frontend_item_2: 'Pinia for state management',
        dashboard_architecture_frontend_item_3: 'TypeScript for type safety',
        dashboard_architecture_frontend_item_4: 'Responsive CSS with custom design system',

        dashboard_architecture_backend_title: 'Backend Services',
        dashboard_architecture_backend_item_1: 'Node.js with Express framework',
        dashboard_architecture_backend_item_2: 'JWT authentication system',
        dashboard_architecture_backend_item_3: 'Sequelize ORM for database operations',
        dashboard_architecture_backend_item_4: 'Email notifications with Nodemailer',

        dashboard_architecture_integration_title: 'API Integration',
        dashboard_architecture_integration_item_1: 'Axios for HTTP client requests',
        dashboard_architecture_integration_item_2: 'Real-time weather data fetching',
        dashboard_architecture_integration_item_3: 'Sports data synchronization',
        dashboard_architecture_integration_item_4: 'Error handling and retry mechanisms',

        // GitHub
        dashboard_github_title: 'GitHub Repository',
        dashboard_github_desc: 'Access the complete Vue.js dashboard source code',
        //#endregion

        //#region Intranet NotPad 
        notepad_project_tag: 'Note-Taking Application',
        notepad_hero_title: 'Multi-Format Note Editor',
        notepad_hero_subtitle: 'A Vue.js application for creating and managing notes in HTML, Markdown, and plain text',
        notepad_stats_formats: 'Supported Formats',
        notepad_stats_responsive: 'Responsive',

        // Overview Section
        notepad_overview_title: 'Project Overview',
        notepad_objectives_title: 'Project Objectives',
        notepad_objective_1: 'Create a note editor supporting multiple formats (HTML, Markdown, Text)',
        notepad_objective_2: 'Implement an intuitive and modern user interface',
        notepad_objective_3: 'Provide note organization and search functionalities',
        notepad_objective_4: 'Ensure automatic saving and data synchronization',
        notepad_concept_title: 'Application Concept',
        notepad_concept_description: 'This note-taking application allows users to create, edit, and organize their notes in different formats. It offers a rich editor with real-time preview for Markdown and HTML, as well as complete note management with search and categorization.',

        // Highlights
        notepad_highlight_formats: 'Multi-Format',
        notepad_highlight_formats_desc: 'HTML, Markdown and text support',
        notepad_highlight_realtime: 'Real-Time',
        notepad_highlight_realtime_desc: 'Instant preview',
        notepad_highlight_interface: 'Modern Interface',
        notepad_highlight_interface_desc: 'Intuitive and responsive design',

        // Formats
        notepad_formats_title: 'Supported Note Formats',
        notepad_formats_subtitle: 'Create your notes in the format that suits you best',
        notepad_format_html_desc: 'Create rich notes with HTML for advanced formatting and interactive elements',
        notepad_format_markdown_desc: 'Use Markdown syntax for quick writing with real-time preview',
        notepad_format_text_desc: 'Plain text notes for simple and quick note-taking without formatting',

        // Features
        notepad_features_title: 'Key Features',
        notepad_features_subtitle: 'Everything you need for effective note-taking',
        notepad_feature_multi_format_title: 'Multi-Format Editor',
        notepad_feature_multi_format_desc: 'Create notes in HTML, Markdown, or plain text according to your needs',
        notepad_feature_auto_save_title: 'Auto-Save',
        notepad_feature_auto_save_desc: 'Your notes are automatically saved to prevent any data loss',
        notepad_feature_editor_title: 'Advanced Editor',
        notepad_feature_editor_desc: 'Modern editing interface with syntax highlighting and auto-completion',
        notepad_feature_preview_title: 'Real-Time Preview',
        notepad_feature_preview_desc: 'Visualize the rendering of your Markdown and HTML notes instantly',
        notepad_feature_organization_title: 'Note Organization',
        notepad_feature_organization_desc: 'Organize your notes by categories, tags, and custom folders',
        notepad_feature_search_title: 'Advanced Search',
        notepad_feature_search_desc: 'Quickly search through all your notes by content, title, or tags',

        // Tech Stack
        notepad_tech_stack_title: 'Technology Stack',
        notepad_tech_stack_subtitle: 'Technologies used for application development',
        notepad_tech_frontend: 'Frontend',
        notepad_tech_backend: 'Backend',
        notepad_tech_testing: 'Unit Testing',
        notepad_tech_database: 'Database',

        // Architecture
        notepad_architecture_title: 'Application Architecture',
        notepad_architecture_editor_title: 'Editing Engine',
        notepad_architecture_editor_item_1: 'Code editor with syntax highlighting',
        notepad_architecture_editor_item_2: 'Markdown parser with HTML rendering',
        notepad_architecture_editor_item_3: 'WYSIWYG editor for HTML',
        notepad_architecture_editor_item_4: 'Auto-completion and keyboard shortcuts',

        notepad_architecture_storage_title: 'Storage Management',
        notepad_architecture_storage_item_1: 'Automatic saving to MySQL database',
        notepad_architecture_storage_item_2: 'Versioning and modification history',
        notepad_architecture_storage_item_3: 'Real-time data synchronization',
        notepad_architecture_storage_item_4: 'Local cache for optimal performance',

        notepad_architecture_rendering_title: 'Rendering Engine',
        notepad_architecture_rendering_item_1: 'Secure and optimized HTML rendering',
        notepad_architecture_rendering_item_2: 'Markdown to HTML conversion',
        notepad_architecture_rendering_item_3: 'Real-time preview',
        notepad_architecture_rendering_item_4: 'PDF export and other formats',

        // GitHub
        notepad_github_title: 'GitHub Repository',
        notepad_github_desc: 'Access the complete source code of the note-taking application',
        //#endregion
        //#region Intranet Agenda
        // Hero Section
        agenda_project_tag: 'Personal Agenda Application',
        agenda_hero_title: 'Smart Personal Calendar',
        agenda_hero_subtitle: 'A complete Vue.js application to organize your time and manage events efficiently',
        agenda_stats_days: 'Days per year',
        agenda_stats_events: 'Possible events',

        // Overview Section
        agenda_overview_title: 'Project Overview',
        agenda_objectives_title: 'Project Objectives',
        agenda_objective_1: 'Create an intuitive and responsive calendar interface',
        agenda_objective_2: 'Enable event creation, modification, and deletion',
        agenda_objective_3: 'Implement notification and reminder system',
        agenda_objective_4: 'Ensure data persistence with secure authentication',
        agenda_concept_title: 'Application Concept',
        agenda_concept_description: 'This personal agenda application offers a complete solution for time management. Users can create events, set reminders, organize their schedule, and receive personalized notifications.',

        // Highlights
        agenda_highlight_organization: 'Organization',
        agenda_highlight_organization_desc: 'Efficient time planning',
        agenda_highlight_reminders: 'Reminders',
        agenda_highlight_reminders_desc: 'Personalized notifications',
        agenda_highlight_sharing: 'Sharing',
        agenda_highlight_sharing_desc: 'Multi-user synchronization',

        // Features
        agenda_features_title: 'Key Features',
        agenda_features_subtitle: 'Complete tools for managing your agenda',
        agenda_feature_calendar_title: 'Calendar View',
        agenda_feature_calendar_desc: 'Monthly, weekly and daily calendar interface with intuitive navigation',
        agenda_feature_events_title: 'Event Management',
        agenda_feature_events_desc: 'Create, edit and delete events with personalized details',
        agenda_feature_notifications_title: 'Notification System',
        agenda_feature_notifications_desc: 'Automatic reminders and customizable alerts with SweetAlert2',
        agenda_feature_customization_title: 'Customization',
        agenda_feature_customization_desc: 'Customizable themes, colors and display preferences',
        agenda_feature_responsive_title: 'Responsive Design',
        agenda_feature_responsive_desc: 'Interface optimized for computers, tablets and smartphones',
        agenda_feature_security_title: 'Security',
        agenda_feature_security_desc: 'Secure authentication and personal data protection',

        // Tech Stack
        agenda_tech_stack_title: 'Technology Stack',
        agenda_tech_stack_subtitle: 'Modern technologies for a high-performance application',
        agenda_tech_frontend: 'Frontend',
        agenda_tech_backend: 'Backend',
        agenda_tech_testing: 'Unit Testing',
        agenda_tech_database: 'Database',

        // Architecture
        agenda_architecture_title: 'Application Architecture',
        agenda_architecture_frontend_title: 'User Interface',
        agenda_architecture_frontend_item_1: 'Reactive Vue.js components with Vue Calendar',
        agenda_architecture_frontend_item_2: 'Centralized state management with Pinia',
        agenda_architecture_frontend_item_3: 'Modern and intuitive user interface',
        agenda_architecture_frontend_item_4: 'Elegant notifications with SweetAlert2',

        agenda_architecture_backend_title: 'Backend Services',
        agenda_architecture_backend_item_1: 'RESTful API with Express.js',
        agenda_architecture_backend_item_2: 'Secure JWT authentication',
        agenda_architecture_backend_item_3: 'User and session management',
        agenda_architecture_backend_item_4: 'Automated email system',

        agenda_architecture_features_title: 'Advanced Features',
        agenda_architecture_features_item_1: 'Real-time event synchronization',
        agenda_architecture_features_item_2: 'Calendar export/import',
        agenda_architecture_features_item_3: 'Advanced search and filtering',
        agenda_architecture_features_item_4: 'Push and email reminders',

        // GitHub
        agenda_github_title: 'GitHub Repository',
        agenda_github_desc: 'Access the complete source code of the Vue.js agenda application',
        //#endregion

        //#region Kepass Intranet
        // Hero Section
        keypass_vue_project_tag: 'Password Manager Project',
        keypass_vue_hero_title: 'Keypass - Secure Manager',
        keypass_vue_hero_subtitle: 'Complete password management solution with AES-256 encryption and multi-platform synchronization',
        keypass_vue_stats_encryption: 'AES Encryption',
        keypass_vue_stats_platforms: 'Platforms',

        // Overview Section
        keypass_vue_overview_title: 'Project Overview',
        keypass_vue_objectives_title: 'Project Objectives',
        keypass_vue_objective_1: 'Develop a secure password management solution',
        keypass_vue_objective_2: 'Create web app, browser extension and mobile application',
        keypass_vue_objective_3: 'Implement AES-256 encryption and 2FA authentication',
        keypass_vue_objective_4: 'Ensure secure synchronization across all devices',
        keypass_vue_concept_title: 'Project Concept',
        keypass_vue_concept_description: 'Keypass is a complete password management solution offering maximum security through AES-256 encryption. The ecosystem includes a Vue.js web application, a browser extension for auto-completion, and a mobile app for on-the-go access.',

        // Highlights
        keypass_vue_highlight_security: 'Maximum Security',
        keypass_vue_highlight_security_desc: 'AES-256 encryption and zero-knowledge architecture',
        keypass_vue_highlight_multiplatform: 'Multi-platform',
        keypass_vue_highlight_multiplatform_desc: 'Web, browser extension and mobile',
        keypass_vue_highlight_accessibility: 'Accessibility',
        keypass_vue_highlight_accessibility_desc: 'Intuitive interface on all devices',

        // Features
        keypass_vue_features_title: 'Key Features',
        keypass_vue_features_subtitle: 'Advanced tools for secure password management',
        keypass_vue_feature_security_title: 'Advanced Encryption',
        keypass_vue_feature_security_desc: 'AES-256 encryption with zero-knowledge architecture for maximum security',
        keypass_vue_feature_multiplatform_title: 'Multi-platform',
        keypass_vue_feature_multiplatform_desc: 'Synchronized web app, browser extension and mobile application',
        keypass_vue_feature_sync_title: 'Secure Synchronization',
        keypass_vue_feature_sync_desc: 'Real-time encrypted synchronization across all your devices',
        keypass_vue_feature_generator_title: 'Password Generator',
        keypass_vue_feature_generator_desc: 'Automatic generation of strong and customizable passwords',
        keypass_vue_feature_dashboard_title: 'Intuitive Dashboard',
        keypass_vue_feature_dashboard_desc: 'Modern interface to manage, organize and search your passwords',
        keypass_vue_feature_2fa_title: '2FA Authentication',
        keypass_vue_feature_2fa_desc: 'Two-factor authentication to strengthen your account security',

        // Security Features
        keypass_vue_security_title: 'Security Architecture',
        keypass_vue_security_subtitle: 'Security technologies and protocols implemented',
        keypass_vue_security_encryption_title: 'End-to-End Encryption',
        keypass_vue_security_encryption_desc: 'All passwords are encrypted locally with AES-256 before transmission',
        keypass_vue_security_zeroknowledge_title: 'Zero-Knowledge Architecture',
        keypass_vue_security_zeroknowledge_desc: 'Servers can never access your decrypted passwords',
        keypass_vue_security_backup_title: 'Secure Backup',
        keypass_vue_security_backup_desc: 'Automatic encrypted backups with emergency recovery',
        keypass_vue_security_audit_title: 'Security Audit',
        keypass_vue_security_audit_desc: 'Weak password analysis and data breach monitoring',

        // Tech Stack
        keypass_vue_tech_stack_title: 'Technology Stack',
        keypass_vue_tech_stack_subtitle: 'Technologies used for secure development',
        keypass_vue_tech_frontend: 'User Interface',
        keypass_vue_tech_backend: 'Backend Services',
        keypass_vue_tech_testing: 'Testing & Quality',
        keypass_vue_tech_database: 'Secure Storage',

        // Architecture
        keypass_vue_architecture_title: 'Multi-platform Architecture',
        keypass_vue_architecture_web_title: 'Web Application',
        keypass_vue_architecture_web_item_1: 'Responsive and modern Vue.js interface',
        keypass_vue_architecture_web_item_2: 'Centralized state management with Pinia',
        keypass_vue_architecture_web_item_3: 'Secure API communication with Axios',
        keypass_vue_architecture_web_item_4: 'User notifications with SweetAlert2',

        keypass_vue_architecture_extension_title: 'Browser Extension',
        keypass_vue_architecture_extension_item_1: 'Automatic form auto-completion',
        keypass_vue_architecture_extension_item_2: 'Intelligent login field detection',
        keypass_vue_architecture_extension_item_3: 'On-the-fly password generation',
        keypass_vue_architecture_extension_item_4: 'Synchronization with main application',

        keypass_vue_architecture_mobile_title: 'Mobile Application',
        keypass_vue_architecture_mobile_item_1: 'Mobile-optimized native interface',
        keypass_vue_architecture_mobile_item_2: 'Biometric authentication (Touch/Face ID)',
        keypass_vue_architecture_mobile_item_3: 'Offline access to passwords',
        keypass_vue_architecture_mobile_item_4: 'Secure sharing between applications',

        // GitHub
        keypass_vue_github_title: 'GitHub Repository',
        keypass_vue_github_desc: 'Access the complete source code of Keypass password manager',
        //#endregion
        toggle_details: 'Show more content',
        hide_details: 'Hide details',
        source_code: 'Source code'


    },
    fr: {
        // #region APP 
        welcome: ' Accueil',
        education: 'Éducation et Qualifications',
        project: 'Projet',
        work: 'Expérience professionnelle',
        technical: 'Compétences techniques',
        languages: 'Langues',
        references: 'Références',
        leisure: 'Loisir',
        choose_language: "Choisir la langue",
        open_cv: 'Ouvrir mon CV',
        // #endregion

        // #region Home 
        welcome_portfolio: 'Bienvenue sur mon portfolio,',
        intro_name: 'je suis Ricardo NUNES EMILIO',
        birth_date: 'Date de naissance : 8 mars 2003',
        nationality: 'Nationalité : Portugaise',
        address: 'Adresse : 115 impasse de l’Île, Scionzier, France',
        phone: 'Téléphone : +33 6 04 65 21 42',
        email: "Email : ricardonunesemiliogmail.com",
        open_cv: 'Ouvrir mon CV',
        objective_title: 'Objectif professionnel',
        objective_text: 'En tant que récent diplômé d\'un baccalauréat technologique en informatique, je suis désireux d\'appliquer mes compétences analytiques et mes connaissances techniques dans un rôle de développement stimulant au sein d\'une entreprise de logiciels.',
        social_networks: 'Mes réseaux sociaux',
        // #endregion

        // #region Education 
        education_title: 'Parcours Éducatif',
        but_title: 'BUT Informatique',
        but_location: 'Université Savoie Mont Blanc / IUT Annecy – Annecy-le-Vieux, France',
        but_date: '2022 - Actuellement',
        but_description: 'Formation approfondie en développement logiciel, gestion de bases de données, réseaux et systèmes d’information. Développement de projets concrets en utilisant des technologies modernes telles que <strong>HTML, CSS, JavaScript, PHP, Python, C#, et SQL</strong>.',
        bac_title: 'Baccalauréat STI2D (Sciences et Technologies de l\'Industrie et du Développement Durable)',
        bac_location: 'Lycée des Métiers Charles Poncet – Cluses, France',
        bac_date: '2019 - 2022',
        bac_description: 'Spécialisation en innovation technologique et éco-conception, avec un accent sur la programmation, la conception de systèmes et la gestion de projets techniques. Développement de compétences en <strong>modélisation, électronique et développement durable</strong>.',
        // #endregion

        //#region Projet
        projects_academic_title: 'Les différents projets académiques :',
        first_year_project: 'Projet de première année',
        project_west: 'Wests Of Survival',
        project_west_desc: 'Conception et création d\'un jeu vidéo.',
        second_year_project: 'Projet de deuxième année',
        third_year_project: 'Projet de troisième année',
        project_bmw_laravel: 'Projet BMW Laravel',
        project_bmw_laravel_desc: 'Site développé avec Laravel et Bootstrap pour la gestion de véhicules d\'occasion.',
        project_bmw_vue: 'Projet BMW Vue.js',
        project_bmw_vue_desc: 'Site développé avec Vue.js et Laravel pour la gestion de véhicules d\'occasion.',
        project_docker_y: 'Projet Y avec Docker',
        project_docker_y_desc: 'Site développé avec Vue.js, Node.js, et Docker pour mettre en ligne un nouveau réseau social.',
        projects_personal_title: 'Les différents projets personnels :',
        project_mini: 'Mes mini projets personnels',
        project_mini_desc: 'Différents petits projets réalisés pendant l\'année.',
        project_keypass: 'Site de gestion de mots de passe',
        project_keypass_desc: 'Création d\'un site web, d\'une extension de navigateur et d\'une application mobile permettant de visualiser et gérer les mots de passe de manière sécurisée.',
        project_earningcall: 'Site pour consulter les différents Earnings Call',
        project_earningcall_desc: 'Site développé avec Laravel et Bootstrap pour consulter les différents Earnings Call.',
        project_home_assistant: 'Projet Home Assistant',
        project_home_assistant_desc: 'Développement d’un site web permettant de visualiser les données collectées par différents capteurs, puis interprétées par un modèle d’intelligence artificielle.',
        project_home_assistant_2: 'Projet Home Assistant 2.0',
        project_home_assistant_2_desc: 'Développement d’un site web permettant de visualiser les données collectées par différents capteurs.',
        project_earningcall_desc: 'Site développé avec Angular pour consulter les différents Earnings Call.',
        project_intranet_desc: 'Site centralisant plusieurs projets tels qu’un bloc-notes, un gestionnaire de mots de passe et un agenda',
        project_intranet: 'Site rassemblant plusieurs projets',
        //#endregion

        //#region Technical
        skills_title: 'Compétences',
        app_dev: 'Développement d\'application',
        prog_lang: 'Langages de programmation',
        frameworks: 'Frameworks',
        api_creation: 'Création d\'API',
        web_design: 'Conception de pages Web',
        rdbms_admin: 'Administration de base de données relationnelle',
        nosql_admin: 'Administration de base de données NoSQL',
        tools: 'Outils et Technologies Maîtrisés',
        python: 'Python',
        csharp: 'C#',
        dart: 'Dart',
        react_native: 'React Native',
        entity_framework: 'EntityFramework Core',
        moq: 'Moq',
        aspnet: 'ASP.NET Core',
        nodejs: 'Node.js',
        express: 'Express.js',
        html: 'HTML',
        css: 'CSS',
        javascript: 'JavaScript',
        php: 'PHP',
        threejs: 'three.js',
        laravel: 'Laravel',
        vuejs: 'Vue.js',
        pinia: 'Pinia',
        blazor: 'Blazor',
        sqlserver: 'SQL Server',
        postgresql: 'Postgres SQL',
        mysql: 'MySQL',
        mongodb: 'Mongo DB',
        vscode: 'Visual Studio Code',
        visualstudio: 'Visual Studio',
        azure: 'Azure',
        azure_devops: 'Azure DevOps',
        git: 'Git',
        typescript: 'TypeScript',
        biblio: 'Bibliothèque',
        biblio_graphique: 'Bibliothèque graphique 3D',
        biblio_test: 'Bibliothèque de test/mock',
        ORM: 'ORM / Persistance',
        sequelize: 'Sequelize',
        //#endregion 

        //#region Language 
        languages_title: 'Mes différentes langues maîtrisées',
        portuguese: 'Portugais',
        portuguese_level: 'Langue maternelle (C2)',
        french: 'Français',
        french_level: 'Locuteur natif (C2)',
        english: 'Anglais',
        english_level: 'Intermédiaire (B2)',
        //#endregion 

        //#region Reference 
        references_title: 'Références',
        contact: 'Contact',
        luc_damas: 'Luc Damas',
        luc_damas_role: 'Maître de conférences à l\'Université Savoie Mont Blanc',
        luc_damas_comment: 'Ricardo est un développeur passionné et rigoureux. Son expertise en C# et Laravel a optimisé plusieurs projets.',
        pascal_colin: 'Pascal Colin',
        pascal_colin_role: 'Enseignant à l\'IUT Annecy',
        pascal_colin_comment: 'Ricardo a démontré une excellente capacité d\'adaptation et des compétences solides en développement.',
        franck_lagoutte: 'Franck Lagoutte',
        franck_lagoutte_role: 'RSSI / CISO - Autoroutes et Tunnel du Mont Blanc',
        franck_lagoutte_comment: 'Toujours force de proposition, Ricardo a apporté des solutions innovantes sur plusieurs projets.',
        hugo_raguin: 'Hugo Raguin',
        hugo_raguin_role: 'Alternant chez Datalumni - Développeur Web Full Stack',
        hugo_raguin_comment: 'Un excellent travail d\'équipe avec Ricardo qui a été un pilier sur la partie backend de notre application.',
        tuong_vy: 'Tuong Vy Pham Huynh',
        tuong_vy_role: 'Alternante en Développement d’Applications - GeoCode',
        tuong_vy_comment: 'Un excellent travail d\'équipe avec Ricardo qui a été un pilier sur la partie backend de notre application.',
        nicolas_breteau: 'Nicolas Breteau',
        nicolas_breteau_role: 'Responsable Digitalisation chez Meggitt',
        nicolas_breteau_comment: 'Durant ces quelques mois parmi nous, Ricardo tu as su faire preuve de motivation, de rigueur et de créativité permettant d\'assurer sur un sujet de stage complexe. Tu as déjà toutes les armes pour devenir un excellent Full Stack Developer 🚀',

        //#endregion

        //#region WestOfSurvival
        west_project_tag: 'Projet de Jeu Monogame',
        west_project_title: 'West of Survival',
        west_features_tilte: 'Fonctionnalités du Jeu',
        west_features_subtilte: 'Découvrez les mécaniques qui rendent ce jeu unique',
        west_features: {
            immersive_gameplay: {
                title: 'Gameplay Immersif',
                description: 'Survie dans un environnement hostile'
            },
            open_world: {
                title: 'Monde Ouvert',
                description: 'Exploration libre du Far West'
            },
            dynamic_combat: {
                title: 'Combat Dynamique',
                description: 'Système de combat en temps réel'
            }
        },
        west_project_subtitle: 'Un jeu de survie dans l\'univers impitoyable du Far West',
        west_project_objective: 'Objectif du projet :',
        west_project_description: '<strong>West of Survival</strong> est un jeu de survie créé dans le cadre d\'un projet universitaire avec Dulhoste Maxime et Mihoubi Marouane. Le gameplay, les cartes et les designs ont été imaginés par notre équipe. Le projet utilise C# et MonoGame, avec des cartes conçues via Tiled.',
        west_toggle_details: 'Afficher plus de contenu',
        west_hide_details: 'Masquer les détails',
        west_main_software: 'Les principaux logiciels et frameworks :',
        west_tiled: 'Tiled',
        west_tiled_description: 'Tiled est un éditeur de cartes 2D open-source, idéal pour créer des niveaux de jeux vidéo et des cartes interactives grâce à son interface intuitive.',
        west_monogame: 'MonoGame',
        west_monogame_description: 'MonoGame est un framework open-source facilitant le développement de jeux 2D et 3D multiplateformes, basé sur Microsoft XNA.',
        west_challenges: 'Défis rencontrés',
        west_challenges_description: 'Nous avons surmonté des défis comme l\'optimisation des performances et la création d\'une interface intuitive.',
        west_role: 'Rôle dans le projet',
        west_role_description: 'J\'ai principalement travaillé sur la logique de gameplay, l\'intégration graphique et la gestion des collisions.',
        west_results: 'Résultats',
        west_results_description: 'Le projet a reçu des retours positifs pour sa fluidité, son design et son gameplay engageant.',
        west_project_skills: 'Compétences du projet',
        west_technologies: 'Technologies',
        west_availability: 'Disponibilité du jeu :',
        west_availability_text: 'Une version du jeu en Phaser avec JavaScript est',
        west_available: 'disponible',
        west_github_source: 'Retrouvez le code source sur',
        west_csharp: 'C#',
        west_action: 'Essayer le jeu',
        west_view: 'Voir le code',
        //#endregion

        //#region LaravelBmw
        laravel_tag_projet: 'Projet Web Laravel',
        laravel_project_title: 'Reconstruction du site BMW Motorrad avec Laravel',
        laravel_project_presentation: 'Présentation du projet',
        laravel_projet_tag_desc: 'Plateforme web complète pour la gestion de motos BMW avec Laravel,',
        languages_view_online: 'Voir la démo en ligne',
        laravel_stats_users: 'Utilisateurs gérés',
        laravel_stats_motorcycles: 'Motos référencées',
        laravel_stats_equipment: 'Équipements',
        laravel_stats_performance: 'Performance',
        laravel_feature_title: 'Fonctionnalités principales',
        laravel_feature_users_title: 'Gestion Utilisateurs',
        laravel_feature_users_description: 'Système complet d\'authentification et de gestion des profils',
        laravel_feature_catalog_title: 'Catalogue Motos',
        laravel_feature_catalog_description: 'Base de données complète des modèles BMW avec filtrage avancé',
        laravel_feature_equipment_title: 'Équipements',
        laravel_feature_equipment_description: 'Gestion des accessoires et pièces détachées',
        laravel_feature_admin_title: 'Interface Admin',
        laravel_feature_admin_description: 'Panel d\'administration pour la gestion complète du site',
        laravel_feature_powerbi_title: 'Intégration PowerBI',
        laravel_feature_powerbi_description: 'Tableaux de bord et analyses de données en temps réel',
        laravel_project_description: 'L\'objectif de ce projet était de reproduire les différentes fonctionnalités du site web officiel de BMW Motorrad. Ce travail a été réalisé dans un cadre pédagogique pour explorer les capacités du framework Laravel dans le développement d\'applications web dynamiques et performantes.',
        laravel_project_features: 'Fonctionnalités développées',
        laravel_feature_users: '<strong>Gestion des utilisateurs :</strong> Système d’authentification sécurisé (JWT), rôles (admin/utilisateur) et gestion des comptes.',
        laravel_feature_catalog_motos: '<strong>Catalogue des motos :</strong> Consultation dynamique des modèles avec filtres avancés (par type, prix, puissance, etc.).',
        laravel_feature_catalog_equipements: '<strong>Catalogue des équipements :</strong> Système similaire au catalogue des motos avec affichage des stocks et mise à jour dynamique.',
        laravel_feature_admin: '<strong>Back-office d\'administration :</strong> Interface permettant d\'ajouter, modifier et supprimer des modèles et équipements.',
        laravel_feature_powerbi: '<strong>Mise en place de rapports Power BI :</strong> Analyse des ventes via un tableau de bord interactif connecté à la base de données.',
        laravel_challenges: 'Défis et solutions',
        laravel_challenge_performance: '<strong>Optimisation des performances :</strong> Mise en cache des requêtes fréquentes et optimisation des requêtes SQL pour améliorer la rapidité d\'affichage des modèles.',
        laravel_challenge_powerbi: '<strong>Intégration de Power BI :</strong> Développement d’une API Laravel pour alimenter dynamiquement les rapports.',
        laravel_challenge_performance_title: 'Optimisation Performance',
        laravel_challenge_performance_description: 'Challenge de performance pour gérer un grand volume de données',
        laravel_challenge_powerbi_title: 'Intégration PowerBI',
        laravel_challenge_powerbi_description: 'Défi technique d\'intégration des analyses de données',
        laravel_technologies: 'Technologies utilisées',
        laravel_available_link: 'Le site est disponible à l\'adresse suivante :',
        laravel_project_conclusion: 'Bilan du projet',
        laravel_conclusion_flexibility_title: 'Flexibilité',
        laravel_conclusion_flexibility: '- <strong>Flexibilité :</strong> Le site a été conçu pour fonctionner sur différents systèmes d\'exploitation sans nécessiter d’installation complexe. L’utilisation de conteneurs avec Docker a permis une meilleure portabilité.',
        laravel_conclusion_user_experience_title: 'Expérience Utilisateur',
        laravel_conclusion_user_experience: '- <strong>Expérience utilisateur :</strong> L’interface utilisateur a été pensée pour être fluide et intuitive, rendant la navigation simple et agréable.',
        laravel_conclusion_learnings_title: 'Apprentissages',
        laravel_conclusion_learnings: '- <strong>Expérience acquise :</strong> Ce projet a renforcé mes compétences en Laravel, en architecture logicielle, en intégration d’outils BI et en déploiement cloud avec Azure.',
        laravel_toggle_details: 'Afficher plus de contenu',
        laravel_hide_details: 'Masquer les détails',
        laravel_demo_online_title: 'Démo en ligne',
        laravel_demo_online_description: 'Explorez l\'application complète en action avec toutes ses fonctionnalités',
        laravel_demo_feature_catalog: 'Catalogue interactif',
        laravel_demo_feature_admin: 'Panel admin',
        laravel_view_demo: 'Voir en ligne',
        //#endregion

        //#region VueBmw
        vue_project_tag: 'Projet Full-Stack',
        vue_project_title: 'Reconstruction du site BMW Motorrad avec Vue.js',
        vue_project_tag_obj: ' Application moderne avec Vue.js et ASP.NET Core',
        vue_project_features: {
            automated_deployment: {
                title: 'Déploiement Automatisé',
                description: 'Pipeline CI/CD intégré'
            },
            enhanced_security: {
                title: 'Sécurité Renforcée',
                description: 'Authentification et autorisation'
            },
            optimized_performance: {
                title: 'Performance Optimisée',
                description: 'Chargement rapide et efficace'
            }
        },
        vue_overview_title: 'Vue d\'ensemble du projet',
        vue_project_description: 'L\'objectif de ce projet était de reproduire les différentes fonctionnalités du site web officiel de BMW Motorrad. Ce travail a été réalisé dans un cadre pédagogique pour explorer les capacités du framework Laravel dans le développement d\'applications web dynamiques et performantes.',
        vue_toggle_competences: 'Afficher les compétences du projet',
        vue_hide_competences: 'Masquer les compétences',
        vue_developed_features: 'Fonctionnalités développées',
        vue_feature_deployment: '<strong>Déploiement automatisé :</strong> Intégration de CI/CD pour un déploiement rapide via Docker et Azure DevOps.',
        vue_feature_security: '<strong>Sécurisation des conteneurs :</strong> Gestion des variables d\'environnement et des permissions.',
        vue_challenges_solutions: 'Défis et solutions',
        vue_challenge_dependencies: '<strong>Gestion des dépendances :</strong> Centralisation des configurations via un fichier .env.',
        vue_challenge_scalability: '<strong>Scalabilité :</strong> Possibilité d\'orchestration sur Kubernetes pour gérer la montée en charge.',
        vue_technical_skills: 'Compétences techniques',
        vue_frontend: 'Front',
        vue_backend_api: 'Backend et API',
        vue_database: 'Base de données',
        vue_source_code: '<strong>Code source disponible ici :</strong>',
        vue_vue_js: 'Vue JS',
        vue_pinia: 'Pinia',
        vue_asp_net: 'ASP.NET Core',
        vue_entity_framework: 'Entity Framework Core',
        vue_postgresql: 'PostgreSQL',
        vue_git_repo: 'Repository GitHub',
        vue_git_info: 'Accédez au code source complet du projet',
        vue_view_code: 'Voir sur GitHub',
        vue_technical_skills_subtitle: 'Technologies et frameworks utilisés',
        //#endregion

        //#region Ydocker
        docker_tab_title: 'Projet DevOps',
        docker_tech_tab_description: 'Conteneurisation et orchestration d\'applications avec Docker',
        docker_project_title: 'Dockerisation du site X',
        docker_teh: 'Technologies',
        docker_step: 'Étapes',
        docker_auto: 'Automatisé',
        docker_beni: 'Avantages du projet',
        docker_obje: 'Objectif',
        docker_depl: 'Moderniser le déploiement avec Docker',
        docker_project_presentation: 'Présentation du projet',
        docker_project_description: 'Ce projet avait pour objectif de <strong>dockeriser</strong> un site web afin qu\'il puisse être exécuté sur n\'importe quel PC sans configuration complexe. Grâce à <strong>Docker</strong>, nous avons encapsulé l\'application et ses dépendances dans un environnement isolé et reproductible.',
        docker_project_advantages: 'Le choix de la conteneurisation permet d’éviter les problèmes liés aux différences d’environnement (systèmes d’exploitation, dépendances, versions de logiciels) et facilite le déploiement sur n’importe quelle machine.',
        docker_docker_steps: 'Étapes de la dockerisation',
        docker_step_title: 'Processus de conteneurisation étape par étape',
        docker_step_1: '<strong>Création du fichier Dockerfile</strong> : Définition de l’image de base et des instructions pour installer les dépendances.',
        docker_step_2: '<strong>Configuration de Docker Compose</strong> : Mise en place des services nécessaires (base de données, serveur web, API, etc.).',
        docker_step_3: '<strong>Déploiement et exécution</strong> : Construction et exécution des conteneurs Docker.',
        docker_step_4: '<strong>Tests et validation</strong> : Vérification du bon fonctionnement sur différentes machines.',
        docker_technologies_used: 'Technologies et outils utilisés',
        docker_technologies_used_sub_title: 'Stack technologique et outils DevOps',
        docker_technologies: {
            docker: {
                description: 'Conteneurisation des applications'
            },
            docker_compose: {
                description: 'Orchestration multi-conteneurs'
            },
            nginx: {
                description: 'Reverse proxy et load balancer'
            },
            database: {
                description: 'Gestion des données persistantes'
            },
            ci_cd: {
                description: 'Intégration et déploiement continu'
            }
        },
        docker_steps: {
            configuration: 'Configuration',
            containerization: 'Conteneurisation',
            orchestration: 'Orchestration',
            deployment: 'Déploiement'
        },
        docker_tech_docker: '<strong>Docker</strong> : Pour la conteneurisation et l’isolation de l’application.',
        docker_tech_docker_compose: '<strong>Docker Compose</strong> : Pour orchestrer plusieurs conteneurs et gérer les dépendances entre services de manière simple et efficace.',
        docker_tech_nginx: '<strong>Nginx / Apache</strong> : Pour la gestion des requêtes HTTP et reverse proxy.',
        docker_tech_database: '<strong>Base de données</strong> : PostgreSQL / MySQL (en fonction des besoins du projet).',
        docker_tech_ci_cd: '<strong>GitHub Actions / CI/CD</strong> : Pour l\'automatisation du build et du déploiement.',
        docker_challenges_solutions: 'Défis et solutions',
        docker_challenges_subtitle: 'Défis rencontrés et solutions apportées',
        docker_challenge_volumes_title: 'Gestion des Volumes',
        docker_challenge_volumes: '<strong>Gestion des volumes et persistance des données</strong> : Utilisation de <strong>Docker Volumes</strong> pour stocker les données de manière persistante.',
        docker_challenge_optimization_title: 'Optimisation',
        docker_challenge_optimization: '<strong>Optimisation du Dockerfile</strong> : Réduction de la taille de l’image en utilisant une image minimale (ex: Alpine Linux).',

        //#region MiniProjet
        mini_projet_title: "Mini Projet",
        mini_3d_title: "Mise en place de différents models 3D en Tree.js :",
        mini_css_title: "Utilisation d'animation en CSS :",
        //#endregion

        //#region Keypass
        keypass_tag: 'Projet de Sécurité',
        keypass_project_title: 'Création d\'un site de gestion de mots de passe',
        keypass_project_presentation: 'Objectif du projet',
        keypass_project_description: 'Ce projet vise à concevoir une solution complète de <strong>gestion sécurisée des mots de passe</strong>, incluant un site web, une extension de navigateur et une application mobile.',

        keypass_project_feature_1: 'Un <strong>site web</strong> permettant aux utilisateurs de stocker, gérer et organiser leurs mots de passe.',
        keypass_project_feature_2: 'Une <strong>extension de navigateur</strong> pour enregistrer automatiquement les mots de passe.',
        keypass_project_feature_3: 'Une <strong>application mobile</strong> pour un accès sécurisé aux mots de passe en déplacement.',

        keypass_project_security: 'L\'objectif est d\'offrir une <strong>interface fluide et sécurisée</strong>, garantissant la confidentialité des données grâce à un <strong>chiffrement avancé</strong>.',

        keypass_technologies_used: 'Technologies et outils utilisés',
        keypass_tech_frontend: '<strong>Front-end</strong> : Vue.js et Bootstrap pour une interface utilisateur moderne et réactive.',
        keypass_tech_backend: '<strong>Back-end</strong> : Laravel pour gérer les utilisateurs et sécuriser les interactions avec la base de données.',
        keypass_tech_database: '<strong>Base de données</strong> : PostgreSQL, avec chiffrement des mots de passe (bcrypt, AES-256).',
        keypass_tech_security: '<strong>Sécurité</strong> : Intégration de <strong>2FA (authentification à deux facteurs)</strong> et chiffrement AES pour protéger les données.',

        keypass_toggle_competences: 'Afficher les compétences du projet',
        keypass_hide_competences: 'Masquer les compétences',

        keypass_developed_features: 'Fonctionnalités développées',
        keypass_feature_1: '<strong> Création et stockage sécurisé des mots de passe</strong> avec chiffrement AES-256.',
        keypass_feature_2: '<strong> Générateur de mots de passe sécurisé</strong> basé sur des critères personnalisables.',
        keypass_feature_3: '<strong> Extension navigateur</strong> pour enregistrement et remplissage automatique des identifiants.',
        keypass_feature_4: '<strong> Synchronisation multi-appareils</strong> avec une API sécurisée.',

        keypass_challenges_solutions: 'Défis et solutions',
        keypass_challenge_1: '<strong>Sécurisation des mots de passe</strong> : Implémentation d\'un <strong>chiffrement AES-256</strong> et d\'un stockage chiffré en base de données.',
        keypass_challenge_2: '<strong>Performance et optimisation</strong> : Utilisation de <strong>caches Redis</strong> pour accélérer l’accès aux données chiffrées.',
        keypass_challenge_3: '<strong>Fiabilité et disponibilité</strong> : Mise en place d’un <strong>système de sauvegarde automatique</strong> et d’un hébergement sur Azure.',

        keypass_project_review: 'Bilan du projet',
        keypass_project_results: 'Résultats',
        keypass_result_1: '- <strong>Flexibilité</strong> : Compatible avec tous les navigateurs et accessible sur mobile et desktop.',
        keypass_result_2: '- <strong>Sécurité renforcée</strong> : Intégration des meilleures pratiques en cryptographie et authentification forte.',
        keypass_tag: 'Projet de Sécurité',
        keypass_hero_subtitle: 'Gestionnaire de mots de passe sécurisé et intuitif',
        keypass_project_security: 'L\'objectif est d\'offrir une <strong>interface fluide et sécurisée</strong>, garantissant la confidentialité des données grâce à un <strong>chiffrement avancé</strong>.',
        keypass_tech_database_title: 'Base de données',
        keypass_tech_security_title: 'Sécurité',
        vue_technical_skills_subtitle: 'Technologies maîtrisées dans ce projet',
        //#endregion

        //#region Earnincall
        earning_project_title: 'Création d\'un site pour visualiser les différents Earnings Calls avec Angular',
        earning_project_presentation: 'Objectif du projet',
        earning_project_description: 'Ce projet a pour objectif de concevoir une plateforme web permettant aux investisseurs et analystes financiers de suivre les <strong>earnings calls</strong> des entreprises cotées en bourse. Un <strong>earnings call</strong> est une conférence téléphonique entre la direction d\'une entreprise publique, des analystes, des investisseurs et les médias, qui permet de discuter des résultats financiers d\'une entreprise pour un trimestre ou une année fiscale.',
        earning_project_goal: 'Ce site vise à offrir une interface intuitive et centralisée pour consulter ces événements et faciliter la prise de décision en matière d’investissement.',

        earning_technologies_used: 'Technologies et outils utilisés',
        earning_tech_frontend: '<strong>Front-end</strong> : Angular pour une interface utilisateur dynamique et performante.',
        earning_tech_api: '<strong>Intégration d\'API</strong> : Connexion aux API financières pour récupérer les annonces d\'earnings calls en temps réel.',

        earning_toggle_competences: 'Afficher les compétences du projet',
        earning_hide_competences: 'Masquer les compétences',

        earning_developed_features: 'Fonctionnalités développées',
        earning_feature_1: '<strong>Affichage dynamique des earnings calls</strong> avec filtres par entreprise, date et secteur d\'activité.',
        earning_feature_2: '<strong>Intégration d’API financières</strong> pour récupérer automatiquement les annonces des entreprises cotées.',

        earning_challenges_solutions: 'Défis et solutions',
        earning_challenge_1: '<strong>Optimisation des performances Angular</strong> : Chargement asynchrone des données avec lazy loading.',
        earning_challenge_2: '<strong>Gestion des appels API</strong> : Implémentation de caches pour éviter les requêtes excessives aux API externes.',

        earning_technical_skills: 'Compétences techniques',
        earning_frontend: 'Front-end',

        earning_project_review: 'Bilan du projet',
        earning_project_results: 'Résultats',
        earning_result_1: '- <strong>Flexibilité</strong> : Le site fonctionne sur différents systèmes sans nécessiter d’installation complexe.',

        earning_project_tag: 'Plateforme Financière',
        earning_hero_subtitle: 'Analyse en temps réel des résultats financiers d\'entreprises',
        earning_goal_title: 'Objectif du projet',
        earning_features_main_title: 'Fonctionnalités principales',
        earning_tech_stack_subtitle: 'Stack technologique et APIs financières',
        earning_tech_frontend_title: 'Frontend',
        earning_tech_api_title: 'APIs & Données',
        earning_skills_subtitle: 'Compétences techniques mises en œuvre',
        earning_project_success: 'Projet Réussi',
        earning_impact_modern: 'Interface moderne et intuitive',
        earning_impact_performance: 'Performance optimisée',
        earning_impact_realtime: 'Données précises en temps réel',

        // Technologies descriptions
        earning_tech_angular_desc: 'Framework TypeScript pour interfaces dynamiques',
        earning_tech_api_desc: 'Intégration d\'APIs financières temps réel',

        // Features
        earning_feature_realtime_title: 'Analyse en Temps Réel',
        earning_feature_realtime_desc: 'Données financières actualisées instantanément',
        earning_feature_viz_title: 'Visualisations Avancées',
        earning_feature_viz_desc: 'Graphiques interactifs et tableaux de bord',
        earning_feature_search_title: 'Recherche Intelligente',
        earning_feature_search_desc: 'Filtrage et recherche multi-critères',
        earning_feature_responsive_title: 'Interface Responsive',
        earning_feature_responsive_desc: 'Optimisée pour tous les appareils',
        //#endregion


        //#region HomeAssitant
        // Hero Section
        iot_project_tag: 'SAE S5.A.01 - BUT3 INFO RA',
        iot_hero_title: 'Système IoT de Monitoring Environnemental',
        iot_hero_subtitle: 'Surveillance intelligente de la qualité environnementale dans les bâtiments universitaires',
        iot_stats_sensors: 'Types de Capteurs',
        iot_stats_sites: 'Sites (IUT/TETRAS)',

        // Overview Section
        iot_overview_title: 'Vue d\'ensemble du projet',
        iot_objectives_title: 'Objectifs du projet',
        iot_objectives_analyze: 'Analyser les mesures issues de capteurs installés à l\'IUT et à Tetras dans différents types de salles (pause, TD, PC)',
        iot_objectives_actuate: 'Actionner des dispositifs (sirènes, lampes, prises connectées) selon des seuils personnalisés',
        iot_objectives_develop: 'Développer des algorithmes de détection d\'inconfort et de prédiction',
        iot_architecture_title: 'Architecture du système',
        iot_architecture_desc: 'Le système s\'articule autour d\'une architecture distribuée avec des Raspberry Pi collectant les données localement et les transmettant vers un serveur centralisé OVH pour traitement et visualisation.',

        // Highlights
        iot_highlight_multisite: 'Multi-sites',
        iot_highlight_multisite_desc: 'IUT et TETRAS surveillés simultanément',
        iot_highlight_realtime: 'Temps Réel',
        iot_highlight_realtime_desc: 'Monitoring continu 24/7',
        iot_highlight_predictive: 'Prédictif',
        iot_highlight_predictive_desc: 'IA pour anticipation',

        // Toggle Button
        iot_toggle_hide: 'Masquer les détails',
        iot_toggle_show: 'Voir les détails techniques',

        // Tech Stack
        iot_tech_stack_title: 'Stack Technologique',
        iot_tech_stack_subtitle: 'Technologies et outils utilisés par catégorie',
        iot_tech_frontend: 'Frontend',
        iot_tech_backend: 'Backend et API',
        iot_tech_raspberry: 'API Raspberry Pi',
        iot_tech_system: 'Système & Conteneurisation',
        iot_tech_data: 'Données & Visualisation',

        // Sensors
        iot_sensors_title: 'Capteurs Environnementaux',
        iot_sensors_subtitle: 'Surveillance complète de la qualité environnementale',
        iot_sensor_co2_desc: 'Qualité de l\'air',
        iot_sensor_temperature_desc: 'Mesure thermique',
        iot_sensor_light_desc: 'Intensité lumineuse',
        iot_sensor_humidity_desc: 'Taux d\'humidité',
        iot_sensor_noise_desc: 'Niveau sonore',
        iot_sensor_vibration_desc: 'Détection vibratoire',
        iot_sensor_movement_desc: 'Détection de présence',
        iot_sensor_uv_desc: 'Rayonnement UV',
        iot_sensor_cov_desc: 'Composés organiques',
        iot_sensor_pm25_desc: 'Particules fines',

        // Features
        iot_features_title: 'Fonctionnalités Clés',
        iot_features_subtitle: 'Technologies avancées pour un monitoring intelligent',
        iot_feature_data_collection_title: 'Collecte de Données',
        iot_feature_data_collection_desc: 'Récupération en temps réel des mesures environnementales',
        iot_feature_alert_system_title: 'Système d\'Alerte',
        iot_feature_alert_system_desc: 'Déclenchement d\'alarmes selon des seuils personnalisés',
        iot_feature_visualization_title: 'Visualisation',
        iot_feature_visualization_desc: 'Dashboards Grafana pour l\'analyse des données',
        iot_feature_ai_title: 'Intelligence Artificielle',
        iot_feature_ai_desc: 'Prédiction et détection d\'anomalies avec TensorFlow',

        // Phases
        iot_phases_title: 'Phases de Développement',
        iot_phases_subtitle: 'Approche itérative pour un déploiement progressif',
        iot_phase_v1_title: 'Phase de Base',
        iot_phase_v1_feature_1: 'API de récupération des données Raspberry Pi',
        iot_phase_v1_feature_2: 'Visualisation des données brutes dans Grafana',
        iot_phase_v1_feature_3: 'Algorithme de détection d\'inconfort (CO2/bruit/mouvement)',
        iot_phase_v1_feature_4: 'Régression/Prédiction de température',
        iot_phase_v1_feature_5: 'Détection fenêtre ouverte',
        iot_phase_v1_feature_6: 'Détection de présence (salle des personnels)',
        iot_phase_v2_title: 'Phase Avancée',
        iot_phase_v2_feature_1: 'Homogénéisation des données de capteurs',
        iot_phase_v2_feature_2: 'Visualisation avancée dans Grafana',
        iot_phase_v2_feature_3: 'Utilisation des actionneurs (alarmes + lampes)',
        iot_phase_v2_feature_4: 'Intégration avec ADE',
        iot_phase_v2_feature_5: 'Comparaison données IUT/TETRAS',

        // Architecture
        iot_architecture_system_title: 'Architecture Système',
        iot_hardware_title: 'Matériel',
        iot_hardware_item_1: '2 Raspberry Pi avec images Docker',
        iot_hardware_item_2: 'Capteurs multiples (6-1, 9-1, CO2)',
        iot_hardware_item_3: 'Z-stick 7 + Range extender',
        iot_hardware_item_4: 'Actionneurs (lampes, alarmes)',
        iot_software_title: 'Logiciels',
        iot_software_item_1: 'Zwave-js-ui (communication capteurs)',
        iot_software_item_2: 'Home Assistant (agrégation données)',
        iot_software_item_3: 'InfluxDB (stockage local)',
        iot_software_item_4: 'Portainer (supervision containers)',
        iot_infrastructure_title: 'Infrastructure',
        iot_infrastructure_item_1: 'Serveur OVH (1 base par groupe)',
        iot_infrastructure_item_2: 'API de récupération centralisée',
        iot_infrastructure_item_3: 'Dashboards Grafana',
        iot_infrastructure_item_4: 'Algorithmes IA (TensorFlow)',

        // GitHub Repositories
        iot_github_front_title: 'Dépôt GitHub',
        iot_github_front_desc: 'Accédez au code source complet du projet du Front C#',
        iot_github_api_title: 'Dépôt GitHub',
        iot_github_api_desc: 'Accédez au code source complet du projet de l\'API C#',
        iot_github_raspi_title: 'Dépôt GitHub',
        iot_github_raspi_desc: 'Accédez au code source complet du projet de l\'API de la Raspi',
        iot_github_docker_title: 'Dépôt GitHub',
        iot_github_docker_desc: 'Accédez au code source complet du projet de Raspi OS',
        //#endregion

        //#region HomeAssitant2
        // Hero Section
        java_iot_project_tag: 'Projet de Refonte Java',
        java_iot_hero_title: 'Refonte du Système IoT en Java',
        java_iot_hero_subtitle: 'Refonte complète du système utilisant les technologies Java avec données en dur dans PostgreSQL',
        java_iot_stats_java: 'Stack Java',
        java_iot_stats_database: 'Base PostgreSQL',

        // Overview Section
        java_iot_overview_title: 'Vue d\'ensemble du projet',
        java_iot_refactor_title: 'Refonte du Système',
        java_iot_refactor_description: 'Ce projet représente une refonte complète du système de monitoring IoT original, migrant d\'une architecture distribuée complexe vers une solution Java simplifiée avec des données en dur dans une base PostgreSQL.',
        java_iot_objectives_title: 'Objectifs du Projet',
        java_iot_objective_1: 'Simplifier l\'architecture système en supprimant les dépendances Raspberry Pi',
        java_iot_objective_2: 'Implémenter une solution Java pure utilisant Spring Boot et Vaadin',
        java_iot_objective_3: 'Utiliser une base PostgreSQL avec des données environnementales en dur',
        java_iot_objective_4: 'Créer une interface intuitive pour la visualisation et l\'analyse des données',

        // Highlights
        java_iot_highlight_java: 'Full Java',
        java_iot_highlight_java_desc: 'Solution complète en écosystème Java',
        java_iot_highlight_data: 'Données Statiques',
        java_iot_highlight_data_desc: 'Données en dur dans PostgreSQL',
        java_iot_highlight_simple: 'Simplifié',
        java_iot_highlight_simple_desc: 'Aucune dépendance matérielle IoT',

        // Advantages
        java_iot_advantages_title: 'Avantages Clés',
        java_iot_advantages_subtitle: 'Bénéfices de l\'approche Java',
        java_iot_advantage_simplicity_title: 'Simplicité Architecturale',
        java_iot_advantage_simplicity_desc: 'Élimination des complexités matérielles et de gestion des systèmes distribués',
        java_iot_advantage_maintenance_title: 'Maintenance Facile',
        java_iot_advantage_maintenance_desc: 'Base de code centralisée et processus de déploiement simplifié',
        java_iot_advantage_performance_title: 'Performance Optimisée',
        java_iot_advantage_performance_desc: 'Accès direct à la base de données sans problèmes de latence réseau',
        java_iot_advantage_scalability_title: 'Meilleure Évolutivité',
        java_iot_advantage_scalability_desc: 'Capacités de mise à l\'échelle horizontale avec Spring Boot',

        // Features
        java_iot_features_title: 'Fonctionnalités Clés',
        java_iot_features_subtitle: 'Principales fonctionnalités du système refondu',
        java_iot_feature_refactor_title: 'Refonte Complète',
        java_iot_feature_refactor_desc: 'Migration de l\'architecture IoT distribuée vers une solution Java monolithique',
        java_iot_feature_data_title: 'Gestion Données en Dur',
        java_iot_feature_data_desc: 'Données environnementales stockées directement en base PostgreSQL',
        java_iot_feature_visualization_title: 'Interface Moderne',
        java_iot_feature_visualization_desc: 'Interface web basée sur Vaadin pour la visualisation des données',
        java_iot_feature_simplified_title: 'Architecture Simplifiée',
        java_iot_feature_simplified_desc: 'Aucune dépendance matérielle ni intégration IoT complexe',

        // Tech Stack
        java_iot_tech_stack_title: 'Stack Technologique',
        java_iot_tech_stack_subtitle: 'Technologies Java utilisées dans la refonte',
        java_iot_tech_frontend: 'Frontend',
        java_iot_tech_backend: 'Backend',
        java_iot_tech_database: 'Base de données',

        // Architecture
        java_iot_architecture_title: 'Architecture Système',
        java_iot_architecture_frontend_title: 'Couche Présentation',
        java_iot_architecture_frontend_item_1: 'Composants Vaadin pour UI moderne',
        java_iot_architecture_frontend_item_2: 'Design responsive pour tous appareils',
        java_iot_architecture_frontend_item_3: 'Graphiques de visualisation temps réel',
        java_iot_architecture_frontend_item_4: 'Tableaux de bord interactifs et filtres',

        java_iot_architecture_backend_title: 'Logique Métier',
        java_iot_architecture_backend_item_1: 'Framework d\'application Spring Boot',
        java_iot_architecture_backend_item_2: 'Services API RESTful',
        java_iot_architecture_backend_item_3: 'Algorithmes de traitement des données',
        java_iot_architecture_backend_item_4: 'Sécurité et authentification',

        java_iot_architecture_data_title: 'Gestion des Données',
        java_iot_architecture_data_item_1: 'Moteur de base PostgreSQL',
        java_iot_architecture_data_item_2: 'Jeux de données environnementales en dur',
        java_iot_architecture_data_item_3: 'Mapping ORM JPA/Hibernate',
        java_iot_architecture_data_item_4: 'Validation et contraintes des données',

        // GitHub
        java_iot_github_title: 'Dépôt GitHub',
        java_iot_github_desc: 'Accédez au code source complet de la refonte Java IoT',
        //#endregion

        //#region HomeIntranet 
        // Hero Section
        dashboard_project_tag: 'Projet Dashboard Personnel',
        dashboard_hero_title: 'Dashboard Personnel Modulaire',
        dashboard_hero_subtitle: 'Un tableau de bord Vue.js personnalisable avec modules météo, sport et productivité',
        dashboard_stats_modules: 'Modules Actifs',
        dashboard_stats_apis: 'APIs Intégrées',

        // Overview Section
        dashboard_overview_title: 'Vue d\'ensemble du projet',
        dashboard_objectives_title: 'Objectifs du Projet',
        dashboard_objective_1: 'Créer un tableau de bord personnel modulaire et extensible',
        dashboard_objective_2: 'Intégrer plusieurs APIs externes (météo, sport, etc.)',
        dashboard_objective_3: 'Implémenter des mises à jour en temps réel et notifications',
        dashboard_objective_4: 'Fournir une interface utilisateur intuitive avec modules personnalisables',
        dashboard_concept_title: 'Concept du Projet',
        dashboard_concept_description: 'Ce tableau de bord personnel permet aux utilisateurs de gérer leurs activités quotidiennes via des modules personnalisables. Les utilisateurs peuvent ajouter des informations météo pour différentes villes, suivre leurs équipes sportives favorites, gérer des listes de tâches et définir des minuteurs/alarmes.',

        // Highlights
        dashboard_highlight_api: 'Intégration API',
        dashboard_highlight_api_desc: 'Plusieurs APIs externes intégrées',
        dashboard_highlight_realtime: 'Mises à jour temps réel',
        dashboard_highlight_realtime_desc: 'Synchronisation de données en direct',
        dashboard_highlight_modular: 'Design Modulaire',
        dashboard_highlight_modular_desc: 'Modules personnalisables et extensibles',

        // Features
        dashboard_features_title: 'Fonctionnalités Clés',
        dashboard_features_subtitle: 'Principales fonctionnalités du tableau de bord',
        dashboard_feature_home_title: 'Tableau de Bord Accueil',
        dashboard_feature_home_desc: 'Page d\'accueil personnalisée avec heure, date et salutation utilisateur',
        dashboard_feature_weather_title: 'Module Météo',
        dashboard_feature_weather_desc: 'Informations météo en temps réel pour plusieurs villes via l\'API OpenWeatherMap',
        dashboard_feature_soccer_title: 'Module Sport',
        dashboard_feature_soccer_desc: 'Suivi d\'équipes sportives et résultats de matchs via l\'API TheSportsDB',
        dashboard_feature_todo_title: 'Gestion des Tâches',
        dashboard_feature_todo_desc: 'Liste de tâches personnelle avec fonctionnalités d\'ajout, édition et completion',
        dashboard_feature_timer_title: 'Minuteur et Alarmes',
        dashboard_feature_timer_desc: 'Minuteurs décompte et alarmes personnalisables avec notifications audio',
        dashboard_feature_responsive_title: 'Design Responsive',
        dashboard_feature_responsive_desc: 'Interface optimisée pour tous appareils et tailles d\'écran',

        // APIs
        dashboard_apis_title: 'APIs Intégrées',
        dashboard_apis_subtitle: 'Services externes alimentant le tableau de bord',
        dashboard_api_sports_desc: 'Base de données sportives fournissant informations équipes, résultats matchs et statistiques',
        dashboard_api_weather_desc: 'Service météorologique fournissant données météorologiques temps réel pour villes mondiales',
        dashboard_api_auth_desc: 'API d\'authentification personnalisée gérant utilisateurs et sessions',

        // Tech Stack
        dashboard_tech_stack_title: 'Stack Technologique',
        dashboard_tech_stack_subtitle: 'Technologies et frameworks utilisés en développement',
        dashboard_tech_frontend: 'Frontend',
        dashboard_tech_backend: 'Backend',
        dashboard_tech_testing: 'Tests Unitaires',
        dashboard_tech_database: 'Base de données',

        // Architecture
        dashboard_architecture_title: 'Architecture Système',
        dashboard_architecture_frontend_title: 'Couche Frontend',
        dashboard_architecture_frontend_item_1: 'Vue.js 3 avec Composition API',
        dashboard_architecture_frontend_item_2: 'Pinia pour gestion d\'état',
        dashboard_architecture_frontend_item_3: 'TypeScript pour sécurité des types',
        dashboard_architecture_frontend_item_4: 'CSS responsive avec système de design personnalisé',

        dashboard_architecture_backend_title: 'Services Backend',
        dashboard_architecture_backend_item_1: 'Node.js avec framework Express',
        dashboard_architecture_backend_item_2: 'Système d\'authentification JWT',
        dashboard_architecture_backend_item_3: 'ORM Sequelize pour opérations base de données',
        dashboard_architecture_backend_item_4: 'Notifications email avec Nodemailer',

        dashboard_architecture_integration_title: 'Intégration API',
        dashboard_architecture_integration_item_1: 'Axios pour requêtes client HTTP',
        dashboard_architecture_integration_item_2: 'Récupération données météo temps réel',
        dashboard_architecture_integration_item_3: 'Synchronisation données sportives',
        dashboard_architecture_integration_item_4: 'Gestion erreurs et mécanismes de retry',

        // GitHub
        dashboard_github_title: 'Dépôt GitHub',
        dashboard_github_desc: 'Accédez au code source complet du dashboard Vue.js',
        //#endregion

        //#region home NotePad
        // Hero Section
        notepad_project_tag: 'Application de Prise de Notes',
        notepad_hero_title: 'Éditeur de Notes Multi-Format',
        notepad_hero_subtitle: 'Une application Vue.js pour créer et gérer des notes en HTML, Markdown et texte brut',
        notepad_stats_formats: 'Formats Supportés',
        notepad_stats_responsive: 'Responsive',

        // Overview Section
        notepad_overview_title: 'Vue d\'ensemble du projet',
        notepad_objectives_title: 'Objectifs du Projet',
        notepad_objective_1: 'Créer un éditeur de notes supportant plusieurs formats (HTML, Markdown, Texte)',
        notepad_objective_2: 'Implémenter une interface utilisateur intuitive et moderne',
        notepad_objective_3: 'Fournir des fonctionnalités d\'organisation et de recherche des notes',
        notepad_objective_4: 'Assurer la sauvegarde automatique et la synchronisation des données',
        notepad_concept_title: 'Concept de l\'Application',
        notepad_concept_description: 'Cette application de prise de notes permet aux utilisateurs de créer, éditer et organiser leurs notes dans différents formats. Elle offre un éditeur riche avec prévisualisation en temps réel pour Markdown et HTML, ainsi qu\'une gestion complète des notes avec recherche et catégorisation.',

        // Highlights
        notepad_highlight_formats: 'Multi-Formats',
        notepad_highlight_formats_desc: 'Support HTML, Markdown et texte',
        notepad_highlight_realtime: 'Temps Réel',
        notepad_highlight_realtime_desc: 'Prévisualisation instantanée',
        notepad_highlight_interface: 'Interface Moderne',
        notepad_highlight_interface_desc: 'Design intuitif et responsive',

        // Formats
        notepad_formats_title: 'Formats de Notes Supportés',
        notepad_formats_subtitle: 'Créez vos notes dans le format qui vous convient le mieux',
        notepad_format_html_desc: 'Créez des notes riches avec du HTML pour des mises en forme avancées et des éléments interactifs',
        notepad_format_markdown_desc: 'Utilisez la syntaxe Markdown pour une rédaction rapide avec prévisualisation en temps réel',
        notepad_format_text_desc: 'Notes en texte brut pour une prise de notes simple et rapide sans formatage',

        // Features
        notepad_features_title: 'Fonctionnalités Principales',
        notepad_features_subtitle: 'Tout ce dont vous avez besoin pour une prise de notes efficace',
        notepad_feature_multi_format_title: 'Éditeur Multi-Format',
        notepad_feature_multi_format_desc: 'Créez des notes en HTML, Markdown ou texte brut selon vos besoins',
        notepad_feature_auto_save_title: 'Sauvegarde Automatique',
        notepad_feature_auto_save_desc: 'Vos notes sont automatiquement sauvegardées pour éviter toute perte de données',
        notepad_feature_editor_title: 'Éditeur Avancé',
        notepad_feature_editor_desc: 'Interface d\'édition moderne avec coloration syntaxique et auto-complétion',
        notepad_feature_preview_title: 'Prévisualisation en Temps Réel',
        notepad_feature_preview_desc: 'Visualisez le rendu de vos notes Markdown et HTML instantanément',
        notepad_feature_organization_title: 'Organisation des Notes',
        notepad_feature_organization_desc: 'Organisez vos notes par catégories, tags et dossiers personnalisés',
        notepad_feature_search_title: 'Recherche Avancée',
        notepad_feature_search_desc: 'Recherchez rapidement dans toutes vos notes par contenu, titre ou tags',

        // Tech Stack
        notepad_tech_stack_title: 'Stack Technologique',
        notepad_tech_stack_subtitle: 'Technologies utilisées pour le développement de l\'application',
        notepad_tech_frontend: 'Frontend',
        notepad_tech_backend: 'Backend',
        notepad_tech_testing: 'Tests Unitaires',
        notepad_tech_database: 'Base de données',

        // Architecture
        notepad_architecture_title: 'Architecture de l\'Application',
        notepad_architecture_editor_title: 'Moteur d\'Édition',
        notepad_architecture_editor_item_1: 'Éditeur de code avec coloration syntaxique',
        notepad_architecture_editor_item_2: 'Parser Markdown avec rendu HTML',
        notepad_architecture_editor_item_3: 'Éditeur WYSIWYG pour HTML',
        notepad_architecture_editor_item_4: 'Auto-complétion et raccourcis clavier',

        notepad_architecture_storage_title: 'Gestion du Stockage',
        notepad_architecture_storage_item_1: 'Sauvegarde automatique en base MySQL',
        notepad_architecture_storage_item_2: 'Versioning et historique des modifications',
        notepad_architecture_storage_item_3: 'Synchronisation temps réel des données',
        notepad_architecture_storage_item_4: 'Cache local pour performance optimale',

        notepad_architecture_rendering_title: 'Moteur de Rendu',
        notepad_architecture_rendering_item_1: 'Rendu HTML sécurisé et optimisé',
        notepad_architecture_rendering_item_2: 'Conversion Markdown vers HTML',
        notepad_architecture_rendering_item_3: 'Prévisualisation temps réel',
        notepad_architecture_rendering_item_4: 'Export PDF et autres formats',

        // GitHub
        notepad_github_title: 'Dépôt GitHub',
        //#endregion 

        //#region Intranet Agenda
        // Hero Section
        agenda_project_tag: 'Application Agenda Personnelle',
        agenda_hero_title: 'Agenda Personnel Intelligent',
        agenda_hero_subtitle: 'Une application Vue.js complète pour organiser votre temps et gérer vos événements efficacement',
        agenda_stats_days: 'Jours par an',
        agenda_stats_events: 'Événements possibles',

        // Overview Section
        agenda_overview_title: 'Vue d\'ensemble du projet',
        agenda_objectives_title: 'Objectifs du Projet',
        agenda_objective_1: 'Créer une interface calendrier intuitive et responsive',
        agenda_objective_2: 'Permettre la création, modification et suppression d\'événements',
        agenda_objective_3: 'Implémenter un système de notifications et rappels',
        agenda_objective_4: 'Assurer la persistance des données avec authentification sécurisée',
        agenda_concept_title: 'Concept de l\'Application',
        agenda_concept_description: 'Cette application d\'agenda personnel offre une solution complète pour la gestion du temps. Les utilisateurs peuvent créer des événements, définir des rappels, organiser leur planning et recevoir des notifications personnalisées.',

        // Highlights
        agenda_highlight_organization: 'Organisation',
        agenda_highlight_organization_desc: 'Planification efficace du temps',
        agenda_highlight_reminders: 'Rappels',
        agenda_highlight_reminders_desc: 'Notifications personnalisées',
        agenda_highlight_sharing: 'Partage',
        agenda_highlight_sharing_desc: 'Synchronisation multi-utilisateurs',

        // Features
        agenda_features_title: 'Fonctionnalités Principales',
        agenda_features_subtitle: 'Outils complets pour la gestion de votre agenda',
        agenda_feature_calendar_title: 'Vue Calendrier',
        agenda_feature_calendar_desc: 'Interface calendrier mensuelle, hebdomadaire et journalière avec navigation intuitive',
        agenda_feature_events_title: 'Gestion d\'Événements',
        agenda_feature_events_desc: 'Création, modification et suppression d\'événements avec détails personnalisés',
        agenda_feature_notifications_title: 'Système de Notifications',
        agenda_feature_notifications_desc: 'Rappels automatiques et alertes personnalisables avec SweetAlert2',
        agenda_feature_customization_title: 'Personnalisation',
        agenda_feature_customization_desc: 'Thèmes, couleurs et préférences d\'affichage personnalisables',
        agenda_feature_responsive_title: 'Design Responsive',
        agenda_feature_responsive_desc: 'Interface optimisée pour ordinateurs, tablettes et smartphones',
        agenda_feature_security_title: 'Sécurité',
        agenda_feature_security_desc: 'Authentification sécurisée et protection des données personnelles',

        // Tech Stack
        agenda_tech_stack_title: 'Stack Technologique',
        agenda_tech_stack_subtitle: 'Technologies modernes pour une application performante',
        agenda_tech_frontend: 'Frontend',
        agenda_tech_backend: 'Backend',
        agenda_tech_testing: 'Tests Unitaires',
        agenda_tech_database: 'Base de données',

        // Architecture
        agenda_architecture_title: 'Architecture de l\'Application',
        agenda_architecture_frontend_title: 'Interface Utilisateur',
        agenda_architecture_frontend_item_1: 'Composants Vue.js réactifs avec Vue Calendar',
        agenda_architecture_frontend_item_2: 'Gestion d\'état centralisée avec Pinia',
        agenda_architecture_frontend_item_3: 'Interface utilisateur moderne et intuitive',
        agenda_architecture_frontend_item_4: 'Notifications élégantes avec SweetAlert2',

        agenda_architecture_backend_title: 'Services Backend',
        agenda_architecture_backend_item_1: 'API RESTful avec Express.js',
        agenda_architecture_backend_item_2: 'Authentification JWT sécurisée',
        agenda_architecture_backend_item_3: 'Gestion des utilisateurs et sessions',
        agenda_architecture_backend_item_4: 'Système d\'emails automatiques',

        agenda_architecture_features_title: 'Fonctionnalités Avancées',
        agenda_architecture_features_item_1: 'Synchronisation temps réel des événements',
        agenda_architecture_features_item_2: 'Export/Import de calendriers',
        agenda_architecture_features_item_3: 'Recherche et filtrage avancés',
        agenda_architecture_features_item_4: 'Rappels push et email',

        // GitHub
        agenda_github_title: 'Dépôt GitHub',
        agenda_github_desc: 'Accédez au code source complet de l\'application agenda Vue.js',
        // #endregion

        //#region Kepass Intranet
        // Hero Section
        keypass_vue_project_tag: 'Projet Gestionnaire de Mots de Passe',
        keypass_vue_hero_title: 'Keypass - Gestionnaire Sécurisé',
        keypass_vue_hero_subtitle: 'Solution complète de gestion de mots de passe avec chiffrement AES-256 et synchronisation multi-plateforme',
        keypass_vue_stats_encryption: 'Chiffrement AES',
        keypass_vue_stats_platforms: 'Plateformes',

        // Overview Section
        keypass_vue_overview_title: 'Vue d\'ensemble du projet',
        keypass_vue_objectives_title: 'Objectifs du Projet',
        keypass_vue_objective_1: 'Développer une solution sécurisée de gestion de mots de passe',
        keypass_vue_objective_2: 'Créer une application web, extension navigateur et app mobile',
        keypass_vue_objective_3: 'Implémenter un chiffrement AES-256 et authentification 2FA',
        keypass_vue_objective_4: 'Assurer la synchronisation sécurisée entre tous les appareils',
        keypass_vue_concept_title: 'Concept du Projet',
        keypass_vue_concept_description: 'Keypass est une solution complète de gestion de mots de passe offrant une sécurité maximale grâce au chiffrement AES-256. L\'écosystème comprend une application web développée en Vue.js, une extension navigateur pour l\'auto-complétion et une application mobile pour l\'accès nomade.',

        // Highlights
        keypass_vue_highlight_security: 'Sécurité Maximale',
        keypass_vue_highlight_security_desc: 'Chiffrement AES-256 et architecture zero-knowledge',
        keypass_vue_highlight_multiplatform: 'Multi-plateforme',
        keypass_vue_highlight_multiplatform_desc: 'Web, extension navigateur et mobile',
        keypass_vue_highlight_accessibility: 'Accessibilité',
        keypass_vue_highlight_accessibility_desc: 'Interface intuitive sur tous les appareils',

        // Features
        keypass_vue_features_title: 'Fonctionnalités Principales',
        keypass_vue_features_subtitle: 'Outils avancés pour la gestion sécurisée des mots de passe',
        keypass_vue_feature_security_title: 'Chiffrement Avancé',
        keypass_vue_feature_security_desc: 'Chiffrement AES-256 avec architecture zero-knowledge pour une sécurité maximale',
        keypass_vue_feature_multiplatform_title: 'Multi-plateforme',
        keypass_vue_feature_multiplatform_desc: 'Application web, extension navigateur et application mobile synchronisées',
        keypass_vue_feature_sync_title: 'Synchronisation Sécurisée',
        keypass_vue_feature_sync_desc: 'Synchronisation chiffrée en temps réel entre tous vos appareils',
        keypass_vue_feature_generator_title: 'Générateur de Mots de Passe',
        keypass_vue_feature_generator_desc: 'Génération automatique de mots de passe forts et personnalisables',
        keypass_vue_feature_dashboard_title: 'Tableau de Bord Intuitif',
        keypass_vue_feature_dashboard_desc: 'Interface moderne pour gérer, organiser et rechercher vos mots de passe',
        keypass_vue_feature_2fa_title: 'Authentification 2FA',
        keypass_vue_feature_2fa_desc: 'Double authentification pour renforcer la sécurité de votre compte',

        // Security Features
        keypass_vue_security_title: 'Architecture de Sécurité',
        keypass_vue_security_subtitle: 'Technologies et protocoles de sécurité implémentés',
        keypass_vue_security_encryption_title: 'Chiffrement de Bout en Bout',
        keypass_vue_security_encryption_desc: 'Tous les mots de passe sont chiffrés localement avec AES-256 avant transmission',
        keypass_vue_security_zeroknowledge_title: 'Architecture Zero-Knowledge',
        keypass_vue_security_zeroknowledge_desc: 'Les serveurs ne peuvent jamais accéder à vos mots de passe déchiffrés',
        keypass_vue_security_backup_title: 'Sauvegarde Sécurisée',
        keypass_vue_security_backup_desc: 'Sauvegardes automatiques chiffrées avec récupération d\'urgence',
        keypass_vue_security_audit_title: 'Audit de Sécurité',
        keypass_vue_security_audit_desc: 'Analyse des mots de passe faibles et surveillance des fuites de données',

        // Tech Stack
        keypass_vue_tech_stack_title: 'Stack Technologique',
        keypass_vue_tech_stack_subtitle: 'Technologies utilisées pour le développement sécurisé',
        keypass_vue_tech_frontend: 'Interface Utilisateur',
        keypass_vue_tech_backend: 'Services Backend',
        keypass_vue_tech_testing: 'Tests et Qualité',
        keypass_vue_tech_database: 'Stockage Sécurisé',

        // Architecture
        keypass_vue_architecture_title: 'Architecture Multi-plateforme',
        keypass_vue_architecture_web_title: 'Application Web',
        keypass_vue_architecture_web_item_1: 'Interface Vue.js responsive et moderne',
        keypass_vue_architecture_web_item_2: 'Gestion d\'état centralisée avec Pinia',
        keypass_vue_architecture_web_item_3: 'Communication API sécurisée avec Axios',
        keypass_vue_architecture_web_item_4: 'Notifications utilisateur avec SweetAlert2',

        keypass_vue_architecture_extension_title: 'Extension Navigateur',
        keypass_vue_architecture_extension_item_1: 'Auto-complétion automatique des formulaires',
        keypass_vue_architecture_extension_item_2: 'Détection intelligente des champs de connexion',
        keypass_vue_architecture_extension_item_3: 'Génération de mots de passe à la volée',
        keypass_vue_architecture_extension_item_4: 'Synchronisation avec l\'application principale',

        keypass_vue_architecture_mobile_title: 'Application Mobile',
        keypass_vue_architecture_mobile_item_1: 'Interface native optimisée pour mobile',
        keypass_vue_architecture_mobile_item_2: 'Authentification biométrique (Touch/Face ID)',
        keypass_vue_architecture_mobile_item_3: 'Accès hors ligne aux mots de passe',
        keypass_vue_architecture_mobile_item_4: 'Partage sécurisé entre applications',

        // GitHub
        keypass_vue_github_title: 'Dépôt GitHub',
        keypass_vue_github_desc: 'Accédez au code source complet du gestionnaire de mots de passe Keypass',
        //#endregion


        toggle_details: 'Afficher plus de contenu',
        hide_details: 'Masquer les détails',
        source_code: 'Code source'
    },
    pt: {
        // #region APP 
        welcome: 'Bem-vindo',
        education: 'Educação e Qualificações',
        project: 'Projeto',
        work: 'Experiência Profissional',
        technical: 'Habilidades Técnicas',
        languages: 'Línguas',
        references: 'Referências',
        leisure: 'Lazer',
        choose_language: 'Escolha o idioma',
        open_cv: 'Abrir meu CV',
        // #endregion

        // #region Home 
        welcome_portfolio: 'Bem-vindo ao meu portfólio,',
        intro_name: 'sou Ricardo NUNES EMILIO',
        birth_date: 'Data de nascimento: 8 de março de 2003',
        nationality: 'Nacionalidade: Portuguesa',
        address: 'Endereço: 115 impasse de l’Île, Scionzier, França',
        phone: 'Telefone: +33 6 04 65 21 42',
        email: 'Email: ricardonunesemilio@gmail.com',
        open_cv: 'Abrir meu CV',
        objective_title: 'Objetivo Profissional',
        objective_text: 'Como recém-licenciado em Licenciatura em Tecnologia em Ciência da Computação, estouansioso aplicar as minhas capacidades analíticas e conhecimento técnico numa função de estimulando o desenvolvimento dentro de uma empresa de software.',
        social_networks: 'Minhas redes sociais',
        // #endregion

        //#region Education 
        education_title: 'Percurso Educacional',
        but_title: 'Bacharelado Tecnológico em Informática',
        but_location: 'Université Savoie Mont Blanc / IUT Annecy – Annecy-le-Vieux, França',
        but_date: '2022 - Presente',
        but_description: 'Formação abrangente em desenvolvimento de software, gestão de banco de dados, redes e sistemas de informação. Desenvolvimento de projetos concretos utilizando tecnologias modernas como <strong>HTML, CSS, JavaScript, PHP, Python, C# e SQL</strong>.',
        bac_title: 'Bacharelado STI2D (Ciências e Tecnologias da Indústria e Desenvolvimento Sustentável)',
        bac_location: 'Lycée des Métiers Charles Poncet – Cluses, França',
        bac_date: '2019 - 2022',
        bac_description: 'Especialização em inovação tecnológica e eco-design, com foco em programação, design de sistemas e gestão de projetos técnicos. Desenvolvimento de competências em <strong>modelagem, eletrônica e desenvolvimento sustentável</strong>.',
        //#endregion

        //#region Projet
        projects_academic_title: 'Projetos Acadêmicos:',
        first_year_project: 'Projeto do Primeiro Ano',
        project_west: 'Wests Of Survival',
        project_west_desc: 'Concepção e criação de um jogo de vídeo.',
        second_year_project: 'Projeto do Segundo Ano',
        third_year_project: 'Projeto do terceiro ano',
        project_bmw_laravel: 'Projeto BMW Laravel',
        project_bmw_laravel_desc: 'Site desenvolvido com Laravel e Bootstrap para gestão de veículos usados.',
        project_bmw_vue: 'Projeto BMW Vue.js',
        project_bmw_vue_desc: 'Site desenvolvido com Vue.js e Laravel para gestão de veículos usados.',
        project_docker_y: 'Projeto Y com Docker',
        project_docker_y_desc: 'Site desenvolvido com Vue.js, Node.js e Docker para lançar uma nova rede social.',
        projects_personal_title: 'Projetos Pessoais:',
        project_mini: 'Meus Mini Projetos Pessoais',
        project_mini_desc: 'Vários pequenos projetos realizados durante o ano.',
        project_keypass: 'Site de Gestão de Senhas',
        project_keypass_desc: 'Criação de um site, uma extensão de navegador e um aplicativo móvel para visualizar e gerenciar senhas de forma segura.',
        project_earningcall: 'Site de Consulta de Earnings Call',
        project_earningcall_desc: 'Site desenvolvido com Laravel e Bootstrap para consultar diversos Earnings Calls.',
        project_home_assistant: 'Projeto Home Assistant',
        project_home_assistant_desc: 'Desenvolvimento de um site para visualizar os dados coletados por diversos sensores , posteriormente processados por um modelo de inteligência artificial.',
        project_home_assistant_2: 'Projeto Home Assistant 2.0',
        project_home_assistant_2_desc: 'Desenvolvimento de um site para visualizar os dados coletados por diversos sensores.',
        project_intranet_desc: 'Site que centraliza vários projetos como um bloco de notas, um gerenciador de senhas e uma agenda',
        project_intranet: 'Site que reúne vários projetos',
        //#endregion

        //#region Technical 
        skills_title: 'Competências',
        app_dev: 'Desenvolvimento de Aplicações',
        prog_lang: 'Linguagens de programação',
        frameworks: 'Frameworks',
        api_creation: 'Criação de API',
        web_design: 'Design de Páginas Web',
        rdbms_admin: 'Administração de Banco de Dados Relacional',
        nosql_admin: 'Administração de Banco de Dados NoSQL',
        tools: 'Ferramentas e Tecnologias Dominadas',
        python: 'Python',
        csharp: 'C#',
        dart: 'Dart',
        react_native: 'React Native',
        entity_framework: 'EntityFramework Core',
        moq: 'Moq',
        aspnet: 'ASP.NET Core',
        nodejs: 'Node.js',
        express: 'Express.js',
        html: 'HTML',
        css: 'CSS',
        javascript: 'JavaScript',
        php: 'PHP',
        threejs: 'three.js',
        laravel: 'Laravel',
        vuejs: 'Vue.js',
        pinia: 'Pinia',
        blazor: 'Blazor',
        sqlserver: 'SQL Server',
        postgresql: 'Postgres SQL',
        mysql: 'MySQL',
        mongodb: 'Mongo DB',
        vscode: 'Visual Studio Code',
        visualstudio: 'Visual Studio',
        azure: 'Azure',
        azure_devops: 'Azure DevOps',
        git: 'Git',
        typescript: 'TypeScript',
        springboot: 'Spring Boot',
        java: 'java',
        biblio: 'Biblioteca',
        biblio_graphique: 'Biblioteca de gráficos 3D',
        biblio_test: 'Biblioteca de teste/simulação',
        ORM: 'ORM / Persistência',
        sequelize: 'Sequelize',
        //#endregion 

        //#region Language 
        languages_title: 'Minhas Línguas Dominadas',
        portuguese: 'Português',
        portuguese_level: 'Língua materna (C2)',
        french: 'Francês',
        french_level: 'Falante nativo (C2)',
        english: 'Inglês',
        english_level: 'Intermediário (B2)',
        //#endregion 

        //#region Reference 
        references_title: 'Referências',
        contact: 'Contato',
        luc_damas: 'Luc Damas',
        luc_damas_role: 'Professor Associado na Université Savoie Mont Blanc',
        luc_damas_comment: 'Ricardo é um desenvolvedor apaixonado e rigoroso. Sua experiência em C# e Laravel otimizou vários projetos.',
        pascal_colin: 'Pascal Colin',
        pascal_colin_role: 'Professor no IUT Annecy',
        pascal_colin_comment: 'Ricardo demonstrou uma excelente capacidade de adaptação e fortes habilidades em desenvolvimento.',
        franck_lagoutte: 'Franck Lagoutte',
        franck_lagoutte_role: 'CISO - Autoroutes et Tunnel du Mont Blanc',
        franck_lagoutte_comment: 'Sempre proativo, Ricardo forneceu soluções inovadoras em vários projetos.',
        hugo_raguin: 'Hugo Raguin',
        hugo_raguin_role: 'Estagiário de Desenvolvedor Web Full Stack na Datalumni',
        hugo_raguin_comment: 'Uma excelente experiência de trabalho em equipe com Ricardo, que foi um pilar no backend da nossa aplicação.',
        tuong_vy: 'Tuong Vy Pham Huynh',
        tuong_vy_role: 'Estagiária em Desenvolvimento de Aplicações - GeoCode',
        tuong_vy_comment: 'Uma excelente colaboração com Ricardo, que desempenhou um papel crucial no desenvolvimento backend da nossa aplicação.',
        nicolas_breteau: 'Nicolas Breteau',
        nicolas_breteau_role: 'Responsável de Digitalização na Meggitt',
        nicolas_breteau_comment: 'Durante estes meses connosco, Ricardo, demonstraste motivação, rigor e criatividade, o que te permitiu lidar com um projeto de estágio complexo com sucesso. Já tens todas as ferramentas para te tornares um excelente Desenvolvedor Full Stack 🚀',

        //#endregion

        //#region WestOfSurvival
        west_project_tag: 'Projeto de Jogo Monogame',
        west_project_title: 'West of Survival',
        west_features_tilte: 'Funcionalidades do Jogo',
        west_features_subtilte: 'Descubra as mecânicas que tornam este jogo único',
        west_features: {
            immersive_gameplay: {
                title: 'Gameplay Imersivo',
                description: 'Sobrevivência em um ambiente hostil'
            },
            open_world: {
                title: 'Mundo Aberto',
                description: 'Exploração livre do Faroeste'
            },
            dynamic_combat: {
                title: 'Combate Dinâmico',
                description: 'Sistema de combate em tempo real'
            }
        },
        west_project_subtitle: 'Um jogo de sobrevivência no universo impiedoso do Faroeste',
        west_project_objective: 'Objetivo do Projeto:',
        west_project_description: '<strong>West of Survival</strong> é um jogo de sobrevivência criado como parte de um projeto universitário com Dulhoste Maxime e Mihoubi Marouane. A jogabilidade, os mapas e os designs foram imaginados pela nossa equipe. O projeto utiliza C# e MonoGame, com mapas criados usando Tiled.',
        west_toggle_details: 'Mostrar mais conteúdo',
        west_hide_details: 'Ocultar detalhes',
        west_main_software: 'Principais Softwares e Frameworks:',
        west_tiled: 'Tiled',
        west_tiled_description: 'Tiled é um editor de mapas 2D open-source, ideal para criar níveis de jogos e mapas interativos graças à sua interface intuitiva.',
        west_monogame: 'MonoGame',
        west_monogame_description: 'MonoGame é um framework open-source que facilita o desenvolvimento de jogos 2D e 3D multiplataforma, baseado no Microsoft XNA.',
        west_challenges: 'Desafios Encontrados',
        west_challenges_description: 'Superamos desafios como a otimização de desempenho e a criação de uma interface intuitiva.',
        west_role: 'Papel no Projeto',
        west_role_description: 'Trabalhei principalmente na lógica de jogabilidade, integração gráfica e gerenciamento de colisões.',
        west_results: 'Resultados',
        west_results_description: 'O projeto recebeu feedback positivo por sua fluidez, design e jogabilidade envolvente.',
        west_project_skills: 'Competências do projeto',
        west_technologies: 'Tecnologias',
        west_availability: 'Disponibilidade do jogo:',
        west_availability_text: 'Uma versão do jogo em Phaser com JavaScript está',
        west_available: 'disponível',
        west_github_source: 'Encontre o código-fonte no',
        west_csharp: 'C#',
        west_action: 'Experimentar o jogo',
        west_view: 'Ver o código',
        //#endregion

        //#region LaravelBmw

        laravel_tag_projet: 'Projeto Web Laravel',
        laravel_project_title: 'Reconstrução do site BMW Motorrad com Laravel',
        laravel_project_presentation: 'Apresentação do projeto',
        laravel_projet_tag_desc: 'Plataforma web completa para gestão de motos BMW com Laravel',
        languages_view_online: 'Ver a demonstração online',
        laravel_stats_users: 'Usuários gerenciados',
        laravel_stats_motorcycles: 'Motos referenciadas',
        laravel_stats_equipment: 'Equipamentos',
        laravel_stats_performance: 'Performance',
        laravel_feature_title: 'Funcionalidades principais',
        laravel_feature_users_title: 'Gestão de Usuários',
        laravel_feature_users_description: 'Sistema completo de autenticação e gestão de perfis',
        laravel_feature_catalog_title: 'Catálogo de Motos',
        laravel_feature_catalog_description: 'Base de dados completa dos modelos BMW com filtragem avançada',
        laravel_feature_equipment_title: 'Equipamentos',
        laravel_feature_equipment_description: 'Gestão de acessórios e peças de reposição',
        laravel_feature_admin_title: 'Interface Admin',
        laravel_feature_admin_description: 'Painel de administração para gestão completa do site',
        laravel_feature_powerbi_title: 'Integração PowerBI',
        laravel_feature_powerbi_description: 'Dashboards e análises de dados em tempo real',
        laravel_project_description: 'O objetivo deste projeto foi reproduzir as diversas funcionalidades do site oficial da BMW Motorrad. Este trabalho foi realizado em um contexto educacional para explorar as capacidades do framework Laravel no desenvolvimento de aplicações web dinâmicas e de alto desempenho.',
        laravel_project_features: 'Funcionalidades desenvolvidas',
        laravel_feature_users: '<strong>Gestão de usuários:</strong> Sistema de autenticação segura (JWT), gerenciamento de funções (admin/usuário) e contas.',
        laravel_feature_catalog_motos: '<strong>Catálogo de motos:</strong> Consulta dinâmica dos modelos com filtros avançados (por tipo, preço, potência, etc.).',
        laravel_feature_catalog_equipements: '<strong>Catálogo de equipamentos:</strong> Sistema semelhante ao catálogo de motos com exibição de estoque e atualização dinâmica.',
        laravel_feature_admin: '<strong>Back-office de administração:</strong> Interface para adicionar, modificar e excluir modelos e equipamentos.',
        laravel_feature_powerbi: '<strong>Relatórios Power BI:</strong> Análise de vendas por meio de um painel interativo conectado ao banco de dados.',
        laravel_challenges: 'Desafios e soluções',
        laravel_challenge_performance: '<strong>Otimização de desempenho:</strong> Cache de consultas frequentes e otimização de consultas SQL para melhorar a velocidade de exibição dos modelos.',
        laravel_challenge_powerbi: '<strong>Integração do Power BI:</strong> Desenvolvimento de uma API Laravel para alimentar dinamicamente os relatórios.',
        laravel_challenge_performance_title: 'Otimização de Performance',
        laravel_challenge_performance_description: 'Desafio de performance para gerenciar grande volume de dados',
        laravel_challenge_powerbi_title: 'Integração PowerBI',
        laravel_challenge_powerbi_description: 'Desafio técnico de integração de análises de dados',
        laravel_technologies: 'Tecnologias Utilizadas',
        laravel_available_link: 'O site está disponível no seguinte endereço:',
        laravel_project_conclusion: 'Conclusão do projeto',
        laravel_conclusion_flexibility_title: 'Flexibilidade',
        laravel_conclusion_flexibility: '- <strong>Flexibilidade:</strong> O site foi projetado para funcionar em diferentes sistemas operacionais sem necessidade de instalação complexa. O uso de contêineres com Docker permitiu melhor portabilidade.',
        laravel_conclusion_user_experience_title: 'User Experience',
        laravel_conclusion_user_experience: '- <strong>Experiência do usuário:</strong> A interface do usuário foi projetada para ser fluida e intuitiva, tornando a navegação simples e agradável.',
        laravel_conclusion_learnings_title: 'Aprendizados',
        laravel_conclusion_learnings: '- <strong>Experiência adquirida:</strong> Este projeto reforçou minhas habilidades em Laravel, arquitetura de software, integração de ferramentas BI e implantação na nuvem com Azure.',
        laravel_toggle_details: 'Mostrar mais conteúdo',
        laravel_hide_details: 'Ocultar detalhes',
        laravel_demo_online_title: 'Demo Online',
        laravel_demo_online_description: 'Explore a aplicação completa em ação com todas as suas funcionalidades',
        laravel_demo_feature_catalog: 'Catálogo interativo',
        laravel_demo_feature_admin: 'Painel admin',
        laravel_view_demo: 'Visitar online',
        //#endregion

        //#region VueBmw
        vue_project_tag: 'Projeto Full-Stack',
        vue_project_title: 'Reconstrução do site BMW Motorrad com Vue.js',
        vue_project_tag_obj: 'Aplicação moderna com Vue.js e ASP.NET Core',
        vue_project_features: {
            automated_deployment: {
                title: 'Implantação Automatizada',
                description: 'Pipeline CI/CD integrado'
            },
            enhanced_security: {
                title: 'Segurança Reforçada',
                description: 'Autenticação e autorização'
            },
            optimized_performance: {
                title: 'Performance Otimizada',
                description: 'Carregamento rápido e eficiente'
            }
        },
        vue_project_description: 'O objetivo deste projeto foi replicar as várias funcionalidades do site oficial da BMW Motorrad. Este trabalho foi realizado em um ambiente educacional para explorar as capacidades do framework Laravel no desenvolvimento de aplicações web dinâmicas e de alto desempenho.',
        vue_overview_title: 'Visão geral do projeto',
        vue_developed_features: 'Funcionalidades desenvolvidas',
        vue_feature_deployment: '<strong>Implantação automatizada:</strong> Integração de CI/CD para implantação rápida via Docker e Azure DevOps.',
        vue_feature_security: '<strong>Segurança dos contêineres:</strong> Gerenciamento de variáveis de ambiente e permissões.',
        vue_challenges_solutions: 'Desafios e Soluções',
        vue_challenge_dependencies: '<strong>Gerenciamento de dependências:</strong> Centralização de configurações via um arquivo .env.',
        vue_challenge_scalability: '<strong>Escalabilidade:</strong> Possibilidade de orquestração no Kubernetes para lidar com aumento de carga.',
        vue_technical_skills: 'Habilidades Técnicas',
        vue_technical_skills_subtitle: 'Tecnologias e frameworks utilizados',
        vue_frontend: 'Frontend',
        vue_backend_api: 'Backend e API',
        vue_database: 'Banco de dados',
        vue_source_code: '<strong>Código-fonte disponível aqui:</strong>',
        vue_vue_js: 'Vue JS',
        vue_pinia: 'Pinia',
        vue_asp_net: 'ASP.NET Core',
        vue_entity_framework: 'Entity Framework Core',
        vue_postgresql: 'PostgreSQL',
        vue_git_repo: 'Repositório GitHub',
        vue_git_info: 'Acesse o código-fonte completo do projeto',
        vue_view_code: 'Ver no GitHub',
        //#endregion

        //#region Ydocker
        docker_tab_title: 'Projeto DevOps',
        docker_tech_tab_description: 'Conteinerização e orquestração de aplicações com Docker',
        docker_project_title: 'Dockerização do site X',
        docker_teh: 'Tecnologias',
        docker_step: 'Etapas',
        docker_auto: 'Automatizado',
        docker_beni: 'Vantagens do projeto',
        docker_obje: 'Objetivo',
        docker_depl: ' Modernizar a implantação com Docker',
        docker_project_presentation: 'Apresentação do projeto',
        docker_project_description: 'O objetivo deste projeto foi <strong>dockerizar</strong> um site para que possa ser executado em qualquer PC sem configuração complexa. Com <strong>Docker</strong>, encapsulamos a aplicação e suas dependências em um ambiente isolado e reprodutível.',
        docker_project_advantages: 'A conteinerização evita problemas relacionados a diferenças de ambiente (sistemas operacionais, dependências, versões de software) e facilita a implantação em qualquer máquina.',
        docker_docker_steps: 'Etapas da Dockerização',
        docker_step_title: 'Processo de conteinerização passo a passo',
        docker_step_2: '<strong>Configuração do Docker Compose</strong>: Configuração dos serviços necessários (banco de dados, servidor web, API, etc.).',
        docker_step_3: '<strong>Implantação e execução</strong>: Construção e execução dos containers Docker.',
        docker_step_4: '<strong>Testes e validação</strong>: Verificação do funcionamento em diferentes máquinas.',
        docker_step_1: '<strong>Criação do arquivo Dockerfile</strong>: Definição da imagem base e das instruções para instalar as dependências.',

        docker_technologies_used: 'Tecnologias e Ferramentas Utilizadas',
        docker_technologies_used_sub_title: 'Stack tecnológico e ferramentas DevOps',
        docker_technologies: {
            docker: {
                description: 'Conteinerização de aplicações'
            },
            docker_compose: {
                description: 'Orquestração multi-contêiner'
            },
            nginx: {
                description: 'Reverse proxy e load balancer'
            },
            database: {
                description: 'Gerenciamento de dados persistentes'
            },
            ci_cd: {
                description: 'Integração e implantação contínua'
            }
        },
        docker_challenges_solutions: 'Desafios e soluções',
        docker_challenges_subtitle: 'Desafios encontrados e soluções implementadas',
        docker_tech_docker: '<strong>Docker</strong>: Para conteinerização e isolamento da aplicação.',
        docker_tech_docker_compose: '<strong>Docker Compose</strong>: Para orquestrar múltiplos contêineres e gerenciar dependências entre serviços de forma simples e eficiente.',
        docker_tech_nginx: '<strong>Nginx / Apache</strong>: Para gerenciamento de requisições HTTP e proxy reverso.',
        docker_tech_database: '<strong>Banco de dados</strong>: PostgreSQL / MySQL (dependendo das necessidades do projeto).',
        docker_tech_ci_cd: '<strong>GitHub Actions / CI/CD</strong>: Para automação de build e implantação.',

        docker_challenge_volumes_title: 'Gerenciamento de Volumes',
        docker_challenge_volumes: '<strong>Gerenciamento de volumes e persistência de dados</strong>: Uso de <strong>Docker Volumes</strong> para armazenar dados de forma persistente.',
        docker_challenge_optimization_title: 'Otimização',
        docker_challenge_optimization: '<strong>Otimização do Dockerfile</strong>: Redução do tamanho da imagem usando uma imagem mínima (ex: Alpine Linux).',
        docker_steps: {
            configuration: 'Configuração',
            containerization: 'Conteinerização',
            orchestration: 'Orquestração',
            deployment: 'Implantação'
        },
        //#endregion

        //#region MiniProjet
        mini_projet_title: "Mini Projecto",
        mini_3d_title: "Configuração de diferentes modelos 3D no Tree.js:",
        mini_css_title: "Utilizar animação em CSS:",
        //#endregion

        //#region Keypass
        keypass_tag: 'Projeto de Segurança',
        keypass_project_title: 'Criação de um site de gerenciamento de senhas',
        keypass_project_presentation: 'Objetivo do Projeto',
        keypass_project_description: 'Este projeto tem como objetivo criar uma solução completa de <strong>gerenciamento seguro de senhas</strong>, incluindo um site, uma extensão de navegador e um aplicativo móvel.',

        keypass_project_feature_1: 'Um <strong>site web</strong> permitindo que os usuários armazenem, gerenciem e organizem suas senhas.',
        keypass_project_feature_2: 'Uma <strong>extensão de navegador</strong> para salvar automaticamente as senhas.',
        keypass_project_feature_3: 'Um <strong>aplicativo móvel</strong> para acesso seguro às senhas em qualquer lugar.',

        keypass_project_security: 'O objetivo é oferecer uma <strong>interface fluida e segura</strong>, garantindo a confidencialidade dos dados através de <strong>criptografia avançada</strong>.',

        keypass_technologies_used: 'Tecnologias e Ferramentas Utilizadas',
        keypass_tech_frontend: '<strong>Front-end</strong>: Vue.js e Bootstrap para uma interface moderna e responsiva.',
        keypass_tech_backend: '<strong>Back-end</strong>: Laravel para gerenciar usuários e proteger interações com o banco de dados.',
        keypass_tech_database: '<strong>Banco de Dados</strong>: PostgreSQL, com criptografia de senhas (bcrypt, AES-256).',
        keypass_tech_security: '<strong>Segurança</strong>: Integração de <strong>2FA (Autenticação de Dois Fatores)</strong> e criptografia AES para proteção dos dados.',
        keypass_tech_containerization: '<strong>Containerização</strong>: Docker para portabilidade e compatibilidade entre diferentes sistemas.',
        keypass_tech_cloud: '<strong>Implantação na Nuvem</strong>: Azure para hospedagem e gerenciamento dos serviços backend.',

        keypass_toggle_competences: 'Mostrar habilidades do projeto',
        keypass_hide_competences: 'Ocultar habilidades',

        keypass_developed_features: 'Funcionalidades Desenvolvidas',
        keypass_feature_1: '<strong> Criação e armazenamento seguro de senhas</strong> com criptografia AES-256.',
        keypass_feature_2: '<strong> Gerador de senhas seguras</strong> baseado em critérios personalizáveis.',
        keypass_feature_3: '<strong> Extensão de navegador</strong> para salvar e preencher automaticamente as credenciais.',
        keypass_feature_4: '<strong> Sincronização entre dispositivos</strong> usando uma API segura.',

        keypass_challenges_solutions: 'Desafios e Soluções',
        keypass_challenge_1: '<strong>Segurança das senhas</strong>: Implementação de <strong>criptografia AES-256</strong> e armazenamento seguro no banco de dados.',
        keypass_challenge_2: '<strong>Desempenho e otimização</strong>: Uso de <strong>caches Redis</strong> para acelerar o acesso aos dados criptografados.',
        keypass_challenge_3: '<strong>Confiabilidade e disponibilidade</strong>: Implementação de um <strong>sistema de backup automático</strong> e hospedagem na Azure.',

        keypass_technical_skills: 'Habilidades Técnicas',
        keypass_frontend: 'Front-end',
        keypass_backend: 'Back-end',
        keypass_database: 'Banco de Dados',

        keypass_project_review: 'Revisão do Projeto',
        keypass_project_results: 'Resultados',
        keypass_result_1: '- <strong>Flexibilidade</strong>: Compatível com todos os navegadores e acessível em dispositivos móveis e desktops.',
        keypass_result_2: '- <strong>Segurança aprimorada</strong>: Integração das melhores práticas em criptografia e autenticação forte.',
        keypass_tag: 'Projeto de Segurança',
        keypass_hero_subtitle: 'Gerenciador de senhas seguro e intuitivo',
        keypass_project_security: 'O objetivo é oferecer uma <strong>interface fluida e segura</strong>, garantindo a confidencialidade dos dados através de <strong>criptografia avançada</strong>.',
        keypass_tech_database_title: 'Banco de dados',
        keypass_tech_security_title: 'Segurança',
        vue_technical_skills_subtitle: 'Tecnologias dominadas neste projeto',
        //#endregion

        //#region Earnincall
        earning_project_title: 'Criação de um site para visualizar os Earnings Calls com Angular',
        earning_project_presentation: 'Objetivo do Projeto',
        earning_project_description: 'Este projeto tem como objetivo desenvolver uma plataforma web que permite a investidores e analistas financeiros acompanharem os <strong>earnings calls</strong> das empresas listadas na bolsa de valores. Um <strong>earnings call</strong> é uma teleconferência entre a administração da empresa, analistas, investidores e a mídia, onde são discutidos os resultados financeiros de um trimestre ou ano fiscal.',
        earning_project_goal: 'O objetivo deste site é fornecer uma interface intuitiva e centralizada para consultar esses eventos e facilitar a tomada de decisão em investimentos.',

        earning_technologies_used: 'Tecnologias e Ferramentas Utilizadas',
        earning_tech_frontend: '<strong>Front-end</strong>: Angular para uma interface de usuário dinâmica e de alto desempenho.',
        earning_tech_api: '<strong>Integração de API</strong>: Conexão a APIs financeiras para obter anúncios de earnings calls em tempo real.',

        earning_toggle_competences: 'Mostrar habilidades do projeto',
        earning_hide_competences: 'Ocultar habilidades',

        earning_developed_features: 'Funcionalidades Desenvolvidas',
        earning_feature_1: '<strong>Exibição dinâmica de earnings calls</strong> com filtros por empresa, data e setor.',
        earning_feature_2: '<strong>Integração de APIs financeiras</strong> para recuperar automaticamente os anúncios das empresas listadas.',

        earning_challenges_solutions: 'Desafios e Soluções',
        earning_challenge_1: '<strongOtimização do desempenho no Angular</strong>: Carregamento assíncrono de dados com lazy loading.',
        earning_challenge_2: '<strong>Gerenciamento de chamadas de API</strong>: Implementação de cache para evitar solicitações excessivas a APIs externas.',

        earning_technical_skills: 'Habilidades Técnicas',
        earning_frontend: 'Front-end',

        earning_project_review: 'Revisão do Projeto',
        earning_result_1: '- <strong>Flexibilidade</strong>: O site funciona em diferentes sistemas sem necessidade de instalação complexa.',

        earning_project_tag: 'Plataforma Financeira',
        earning_hero_subtitle: 'Análise em tempo real de resultados financeiros corporativos',
        earning_goal_title: 'Objetivo do Projeto',
        earning_features_main_title: 'Funcionalidades Principais',
        earning_tech_stack_subtitle: 'Stack tecnológico e APIs financeiras',
        earning_tech_frontend_title: 'Frontend',
        earning_tech_api_title: 'APIs e Dados',
        earning_skills_subtitle: 'Competências técnicas implementadas',
        earning_project_success: 'Projeto Bem-sucedido',
        earning_impact_modern: 'Interface moderna e intuitiva',
        earning_impact_performance: 'Performance otimizada',
        earning_impact_realtime: 'Dados precisos em tempo real',

        // Technologies descriptions
        earning_tech_angular_desc: 'Framework TypeScript para interfaces dinâmicas',
        earning_tech_api_desc: 'Integração de APIs financeiras em tempo real',

        // Features
        earning_feature_realtime_title: 'Análise em Tempo Real',
        earning_feature_realtime_desc: 'Dados financeiros atualizados instantaneamente',
        earning_feature_viz_title: 'Visualizações Avançadas',
        earning_feature_viz_desc: 'Gráficos interativos e dashboards',
        earning_feature_search_title: 'Busca Inteligente',
        earning_feature_search_desc: 'Filtragem e busca multi-critérios',
        earning_feature_responsive_title: 'Interface Responsiva',
        earning_feature_responsive_desc: 'Otimizada para todos os dispositivos',
        //#endregion

        //#region HomeAssitant
        // Hero Section
        iot_project_tag: 'SAE S5.A.01 - BUT3 INFO RA',
        iot_hero_title: 'Sistema IoT de Monitoramento Ambiental',
        iot_hero_subtitle: 'Vigilância inteligente da qualidade ambiental em edifícios universitários',
        iot_stats_sensors: 'Tipos de Sensores',
        iot_stats_sites: 'Locais (IUT/TETRAS)',

        // Overview Section
        iot_overview_title: 'Visão Geral do Projeto',
        iot_objectives_title: 'Objetivos do Projeto',
        iot_objectives_analyze: 'Analisar medições de sensores instalados no IUT e Tetras em diferentes tipos de salas (pausa, TD, PC)',
        iot_objectives_actuate: 'Acionar dispositivos (sirenes, lâmpadas, tomadas inteligentes) segundo limites personalizados',
        iot_objectives_develop: 'Desenvolver algoritmos de detecção de desconforto e predição',
        iot_architecture_title: 'Arquitetura do Sistema',
        iot_architecture_desc: 'O sistema é baseado em uma arquitetura distribuída com Raspberry Pi coletando dados localmente e transmitindo-os para um servidor centralizado OVH para processamento e visualização.',

        // Highlights
        iot_highlight_multisite: 'Multi-local',
        iot_highlight_multisite_desc: 'IUT e TETRAS monitorados simultaneamente',
        iot_highlight_realtime: 'Tempo Real',
        iot_highlight_realtime_desc: 'Monitoramento contínuo 24/7',
        iot_highlight_predictive: 'Preditivo',
        iot_highlight_predictive_desc: 'IA para antecipação',

        // Toggle Button
        iot_toggle_hide: 'Ocultar detalhes',
        iot_toggle_show: 'Ver detalhes técnicos',

        // Tech Stack
        iot_tech_stack_title: 'Stack Tecnológico',
        iot_tech_stack_subtitle: 'Tecnologias e ferramentas utilizadas por categoria',
        iot_tech_frontend: 'Frontend',
        iot_tech_backend: 'Backend e API',
        iot_tech_raspberry: 'API Raspberry Pi',
        iot_tech_system: 'Sistema e Containerização',
        iot_tech_data: 'Dados e Visualização',

        // Sensors
        iot_sensors_title: 'Sensores Ambientais',
        iot_sensors_subtitle: 'Monitoramento completo da qualidade ambiental',
        iot_sensor_co2_desc: 'Qualidade do ar',
        iot_sensor_temperature_desc: 'Medição térmica',
        iot_sensor_light_desc: 'Intensidade luminosa',
        iot_sensor_humidity_desc: 'Nível de umidade',
        iot_sensor_noise_desc: 'Nível sonoro',
        iot_sensor_vibration_desc: 'Detecção de vibração',
        iot_sensor_movement_desc: 'Detecção de presença',
        iot_sensor_uv_desc: 'Radiação UV',
        iot_sensor_cov_desc: 'Compostos orgânicos',
        iot_sensor_pm25_desc: 'Partículas finas',

        // Features
        iot_features_title: 'Funcionalidades-Chave',
        iot_features_subtitle: 'Tecnologias avançadas para monitoramento inteligente',
        iot_feature_data_collection_title: 'Coleta de Dados',
        iot_feature_data_collection_desc: 'Recuperação em tempo real de medições ambientais',
        iot_feature_alert_system_title: 'Sistema de Alerta',
        iot_feature_alert_system_desc: 'Acionamento de alarmes segundo limites personalizados',
        iot_feature_visualization_title: 'Visualização',
        iot_feature_visualization_desc: 'Dashboards Grafana para análise de dados',
        iot_feature_ai_title: 'Inteligência Artificial',
        iot_feature_ai_desc: 'Predição e detecção de anomalias com TensorFlow',

        // Phases
        iot_phases_title: 'Fases de Desenvolvimento',
        iot_phases_subtitle: 'Abordagem iterativa para implementação progressiva',
        iot_phase_v1_title: 'Fase Base',
        iot_phase_v1_feature_1: 'API de recuperação de dados do Raspberry Pi',
        iot_phase_v1_feature_2: 'Visualização de dados brutos no Grafana',
        iot_phase_v1_feature_3: 'Algoritmo de detecção de desconforto (CO2/ruído/movimento)',
        iot_phase_v1_feature_4: 'Regressão/Predição de temperatura',
        iot_phase_v1_feature_5: 'Detecção de janela aberta',
        iot_phase_v1_feature_6: 'Detecção de presença (sala de pessoal)',
        iot_phase_v2_title: 'Fase Avançada',
        iot_phase_v2_feature_1: 'Homogeneização de dados de sensores',
        iot_phase_v2_feature_2: 'Visualização avançada no Grafana',
        iot_phase_v2_feature_3: 'Uso de atuadores (alarmes + lâmpadas)',
        iot_phase_v2_feature_4: 'Integração com ADE',
        iot_phase_v2_feature_5: 'Comparação de dados IUT/TETRAS',

        // Architecture
        iot_architecture_system_title: 'Arquitetura do Sistema',
        iot_hardware_title: 'Hardware',
        iot_hardware_item_1: '2 Raspberry Pi com imagens Docker',
        iot_hardware_item_2: 'Sensores múltiplos (6-1, 9-1, CO2)',
        iot_hardware_item_3: 'Z-stick 7 + Range extender',
        iot_hardware_item_4: 'Atuadores (lâmpadas, alarmes)',
        iot_software_title: 'Software',
        iot_software_item_1: 'Zwave-js-ui (comunicação de sensores)',
        iot_software_item_2: 'Home Assistant (agregação de dados)',
        iot_software_item_3: 'InfluxDB (armazenamento local)',
        iot_software_item_4: 'Portainer (supervisão de containers)',
        iot_infrastructure_title: 'Infraestrutura',
        iot_infrastructure_item_1: 'Servidor OVH (1 base por grupo)',
        iot_infrastructure_item_2: 'API de recuperação centralizada',
        iot_infrastructure_item_3: 'Dashboards Grafana',
        iot_infrastructure_item_4: 'Algoritmos de IA (TensorFlow)',

        // GitHub Repositories
        iot_github_front_title: 'Repositório GitHub',
        iot_github_front_desc: 'Acesse o código-fonte completo do projeto Front C#',
        iot_github_api_title: 'Repositório GitHub',
        iot_github_api_desc: 'Acesse o código-fonte completo do projeto API C#',
        iot_github_raspi_title: 'Repositório GitHub',
        iot_github_raspi_desc: 'Acesse o código-fonte completo do projeto API da Raspi',
        iot_github_docker_title: 'Repositório GitHub',
        iot_github_docker_desc: 'Acesse o código-fonte completo do projeto Raspi OS',
        //#endregion

        //#region HomeAssitant2
        // Hero Section
        java_iot_project_tag: 'Projeto de Refatoração Java',
        java_iot_hero_title: 'Refatoração do Sistema IoT em Java',
        java_iot_hero_subtitle: 'Redesign completo do sistema usando tecnologias Java com dados fixos no PostgreSQL',
        java_iot_stats_java: 'Stack Java',
        java_iot_stats_database: 'Base PostgreSQL',

        // Overview Section
        java_iot_overview_title: 'Visão Geral do Projeto',
        java_iot_refactor_title: 'Refatoração do Sistema',
        java_iot_refactor_description: 'Este projeto representa uma refatoração completa do sistema original de monitoramento IoT, migrando de uma arquitetura distribuída complexa para uma solução Java simplificada com dados fixos em banco PostgreSQL.',
        java_iot_objectives_title: 'Objetivos do Projeto',
        java_iot_objective_1: 'Simplificar a arquitetura do sistema removendo dependências do Raspberry Pi',
        java_iot_objective_2: 'Implementar uma solução Java pura usando Spring Boot e Vaadin',
        java_iot_objective_3: 'Usar banco PostgreSQL com dados ambientais fixos',
        java_iot_objective_4: 'Criar interface intuitiva para visualização e análise de dados',

        // Highlights
        java_iot_highlight_java: 'Full Java',
        java_iot_highlight_java_desc: 'Solução completa no ecossistema Java',
        java_iot_highlight_data: 'Dados Estáticos',
        java_iot_highlight_data_desc: 'Dados fixos no PostgreSQL',
        java_iot_highlight_simple: 'Simplificado',
        java_iot_highlight_simple_desc: 'Sem dependências de hardware IoT',

        // Advantages
        java_iot_advantages_title: 'Vantagens Principais',
        java_iot_advantages_subtitle: 'Benefícios da abordagem Java',
        java_iot_advantage_simplicity_title: 'Simplicidade Arquitetural',
        java_iot_advantage_simplicity_desc: 'Eliminação de complexidades de hardware e gerenciamento de sistemas distribuídos',
        java_iot_advantage_maintenance_title: 'Manutenção Fácil',
        java_iot_advantage_maintenance_desc: 'Base de código centralizada e processo de implantação simplificado',
        java_iot_advantage_performance_title: 'Performance Otimizada',
        java_iot_advantage_performance_desc: 'Acesso direto ao banco sem problemas de latência de rede',
        java_iot_advantage_scalability_title: 'Melhor Escalabilidade',
        java_iot_advantage_scalability_desc: 'Capacidades de escalabilidade horizontal com Spring Boot',

        // Features
        java_iot_features_title: 'Funcionalidades-Chave',
        java_iot_features_subtitle: 'Principais funcionalidades do sistema refatorado',
        java_iot_feature_refactor_title: 'Refatoração Completa',
        java_iot_feature_refactor_desc: 'Migração da arquitetura IoT distribuída para solução Java monolítica',
        java_iot_feature_data_title: 'Gestão de Dados Fixos',
        java_iot_feature_data_desc: 'Dados ambientais armazenados diretamente no banco PostgreSQL',
        java_iot_feature_visualization_title: 'Interface Moderna',
        java_iot_feature_visualization_desc: 'Interface web baseada em Vaadin para visualização de dados',
        java_iot_feature_simplified_title: 'Arquitetura Simplificada',
        java_iot_feature_simplified_desc: 'Sem dependências de hardware ou integrações IoT complexas',

        // Tech Stack
        java_iot_tech_stack_title: 'Stack Tecnológico',
        java_iot_tech_stack_subtitle: 'Tecnologias Java utilizadas na refatoração',
        java_iot_tech_frontend: 'Frontend',
        java_iot_tech_backend: 'Backend',
        java_iot_tech_database: 'Banco de dados',

        // Architecture
        java_iot_architecture_title: 'Arquitetura do Sistema',
        java_iot_architecture_frontend_title: 'Camada de Apresentação',
        java_iot_architecture_frontend_item_1: 'Componentes Vaadin para UI moderna',
        java_iot_architecture_frontend_item_2: 'Design responsivo para todos dispositivos',
        java_iot_architecture_frontend_item_3: 'Gráficos de visualização em tempo real',
        java_iot_architecture_frontend_item_4: 'Dashboards interativos e filtros',

        java_iot_architecture_backend_title: 'Lógica de Negócio',
        java_iot_architecture_backend_item_1: 'Framework de aplicação Spring Boot',
        java_iot_architecture_backend_item_2: 'Serviços de API RESTful',
        java_iot_architecture_backend_item_3: 'Algoritmos de processamento de dados',
        java_iot_architecture_backend_item_4: 'Segurança e autenticação',

        java_iot_architecture_data_title: 'Gestão de Dados',
        java_iot_architecture_data_item_1: 'Engine de banco PostgreSQL',
        java_iot_architecture_data_item_2: 'Conjuntos de dados ambientais fixos',
        java_iot_architecture_data_item_3: 'Mapeamento ORM JPA/Hibernate',
        java_iot_architecture_data_item_4: 'Validação e restrições de dados',

        // GitHub
        java_iot_github_title: 'Repositório GitHub',
        java_iot_github_desc: 'Acesse o código-fonte completo da refatoração Java IoT',
        //#endregion

        //#region HomeIntranet 
        // Hero Section
        dashboard_project_tag: 'Projeto Dashboard Pessoal',
        dashboard_hero_title: 'Dashboard Pessoal Modular',
        dashboard_hero_subtitle: 'Um painel Vue.js personalizável com módulos de clima, esportes e produtividade',
        dashboard_stats_modules: 'Módulos Ativos',
        dashboard_stats_apis: 'APIs Integradas',

        // Overview Section
        dashboard_overview_title: 'Visão Geral do Projeto',
        dashboard_objectives_title: 'Objetivos do Projeto',
        dashboard_objective_1: 'Criar um painel pessoal modular e extensível',
        dashboard_objective_2: 'Integrar múltiplas APIs externas (clima, esportes, etc.)',
        dashboard_objective_3: 'Implementar atualizações em tempo real e notificações',
        dashboard_objective_4: 'Fornecer interface intuitiva com módulos personalizáveis',
        dashboard_concept_title: 'Conceito do Projeto',
        dashboard_concept_description: 'Este painel pessoal permite aos usuários gerenciar suas atividades diárias através de módulos personalizáveis. Os usuários podem adicionar informações meteorológicas para diferentes cidades, acompanhar suas equipes esportivas favoritas, gerenciar listas de tarefas e definir temporizadores/alarmes.',

        // Highlights
        dashboard_highlight_api: 'Integração API',
        dashboard_highlight_api_desc: 'Múltiplas APIs externas integradas',
        dashboard_highlight_realtime: 'Atualizações Tempo Real',
        dashboard_highlight_realtime_desc: 'Sincronização de dados ao vivo',
        dashboard_highlight_modular: 'Design Modular',
        dashboard_highlight_modular_desc: 'Módulos personalizáveis e extensíveis',

        // Features
        dashboard_features_title: 'Funcionalidades-Chave',
        dashboard_features_subtitle: 'Principais funcionalidades do painel',
        dashboard_feature_home_title: 'Painel de Boas-vindas',
        dashboard_feature_home_desc: 'Página inicial personalizada com hora, data e saudação do usuário',
        dashboard_feature_weather_title: 'Módulo Clima',
        dashboard_feature_weather_desc: 'Informações meteorológicas em tempo real para múltiplas cidades via API OpenWeatherMap',
        dashboard_feature_soccer_title: 'Módulo Esportes',
        dashboard_feature_soccer_desc: 'Acompanhamento de equipes esportivas e resultados de jogos via API TheSportsDB',
        dashboard_feature_todo_title: 'Gestão de Tarefas',
        dashboard_feature_todo_desc: 'Lista de tarefas pessoal com funcionalidades de adicionar, editar e completar',
        dashboard_feature_timer_title: 'Timer e Alarmes',
        dashboard_feature_timer_desc: 'Temporizadores regressivos e alarmes personalizáveis com notificações de áudio',
        dashboard_feature_responsive_title: 'Design Responsivo',
        dashboard_feature_responsive_desc: 'Interface otimizada para todos dispositivos e tamanhos de tela',

        // APIs
        dashboard_apis_title: 'APIs Integradas',
        dashboard_apis_subtitle: 'Serviços externos que alimentam o painel',
        dashboard_api_sports_desc: 'Base de dados esportivos fornecendo informações de equipes, resultados de jogos e estatísticas',
        dashboard_api_weather_desc: 'Serviço meteorológico fornecendo dados meteorológicos em tempo real para cidades mundiais',
        dashboard_api_auth_desc: 'API de autenticação personalizada gerenciando usuários e sessões',

        // Tech Stack
        dashboard_tech_stack_title: 'Stack Tecnológico',
        dashboard_tech_stack_subtitle: 'Tecnologias e frameworks utilizados no desenvolvimento',
        dashboard_tech_frontend: 'Frontend',
        dashboard_tech_backend: 'Backend',
        dashboard_tech_testing: 'Testes Unitários',
        dashboard_tech_database: 'Banco de dados',

        // Architecture
        dashboard_architecture_title: 'Arquitetura do Sistema',
        dashboard_architecture_frontend_title: 'Camada Frontend',
        dashboard_architecture_frontend_item_1: 'Vue.js 3 com Composition API',
        dashboard_architecture_frontend_item_2: 'Pinia para gerenciamento de estado',
        dashboard_architecture_frontend_item_3: 'TypeScript para segurança de tipos',
        dashboard_architecture_frontend_item_4: 'CSS responsivo com sistema de design personalizado',

        dashboard_architecture_backend_title: 'Serviços Backend',
        dashboard_architecture_backend_item_1: 'Node.js com framework Express',
        dashboard_architecture_backend_item_2: 'Sistema de autenticação JWT',
        dashboard_architecture_backend_item_3: 'ORM Sequelize para operações de banco de dados',
        dashboard_architecture_backend_item_4: 'Notificações por email com Nodemailer',

        dashboard_architecture_integration_title: 'Integração API',
        dashboard_architecture_integration_item_1: 'Axios para requisições cliente HTTP',
        dashboard_architecture_integration_item_2: 'Busca de dados meteorológicos em tempo real',
        dashboard_architecture_integration_item_3: 'Sincronização de dados esportivos',
        dashboard_architecture_integration_item_4: 'Tratamento de erros e mecanismos de retry',

        // GitHub
        dashboard_github_title: 'Repositório GitHub',
        dashboard_github_desc: 'Acesse o código-fonte completo do dashboard Vue.js',
        //#endregion
        //#region Intranet Agenda 
        // Hero Section
        notepad_project_tag: 'Aplicação de Notas',
        notepad_hero_title: 'Editor de Notas Multi-Formato',
        notepad_hero_subtitle: 'Uma aplicação Vue.js para criar e gerenciar notas em HTML, Markdown e texto simples',
        notepad_stats_formats: 'Formatos Suportados',
        notepad_stats_responsive: 'Responsivo',

        // Overview Section
        notepad_overview_title: 'Visão Geral do Projeto',
        notepad_objectives_title: 'Objetivos do Projeto',
        notepad_objective_1: 'Criar um editor de notas suportando múltiplos formatos (HTML, Markdown, Texto)',
        notepad_objective_2: 'Implementar uma interface de usuário intuitiva e moderna',
        notepad_objective_3: 'Fornecer funcionalidades de organização e busca de notas',
        notepad_objective_4: 'Garantir salvamento automático e sincronização dos dados',
        notepad_concept_title: 'Conceito da Aplicação',
        notepad_concept_description: 'Esta aplicação de anotações permite aos usuários criar, editar e organizar suas notas em diferentes formatos. Oferece um editor rico com visualização em tempo real para Markdown e HTML, bem como gestão completa de notas com busca e categorização.',

        // Highlights
        notepad_highlight_formats: 'Multi-Formatos',
        notepad_highlight_formats_desc: 'Suporte HTML, Markdown e texto',
        notepad_highlight_realtime: 'Tempo Real',
        notepad_highlight_realtime_desc: 'Visualização instantânea',
        notepad_highlight_interface: 'Interface Moderna',
        notepad_highlight_interface_desc: 'Design intuitivo e responsivo',

        // Formats
        notepad_formats_title: 'Formatos de Notas Suportados',
        notepad_formats_subtitle: 'Crie suas notas no formato que mais lhe convém',
        notepad_format_html_desc: 'Crie notas ricas com HTML para formatação avançada e elementos interativos',
        notepad_format_markdown_desc: 'Use sintaxe Markdown para escrita rápida com visualização em tempo real',
        notepad_format_text_desc: 'Notas em texto simples para anotações rápidas e simples sem formatação',

        // Features
        notepad_features_title: 'Funcionalidades Principais',
        notepad_features_subtitle: 'Tudo que você precisa para anotações eficazes',
        notepad_feature_multi_format_title: 'Editor Multi-Formato',
        notepad_feature_multi_format_desc: 'Crie notas em HTML, Markdown ou texto simples conforme suas necessidades',
        notepad_feature_auto_save_title: 'Salvamento Automático',
        notepad_feature_auto_save_desc: 'Suas notas são automaticamente salvas para evitar qualquer perda de dados',
        notepad_feature_editor_title: 'Editor Avançado',
        notepad_feature_editor_desc: 'Interface de edição moderna com destaque de sintaxe e auto-completar',
        notepad_feature_preview_title: 'Visualização em Tempo Real',
        notepad_feature_preview_desc: 'Visualize o resultado de suas notas Markdown e HTML instantaneamente',
        notepad_feature_organization_title: 'Organização de Notas',
        notepad_feature_organization_desc: 'Organize suas notas por categorias, tags e pastas personalizadas',
        notepad_feature_search_title: 'Busca Avançada',
        notepad_feature_search_desc: 'Busque rapidamente em todas suas notas por conteúdo, título ou tags',

        // Tech Stack
        notepad_tech_stack_title: 'Stack Tecnológico',
        notepad_tech_stack_subtitle: 'Tecnologias utilizadas para o desenvolvimento da aplicação',
        notepad_tech_frontend: 'Frontend',
        notepad_tech_backend: 'Backend',
        notepad_tech_testing: 'Testes Unitários',
        notepad_tech_database: 'Banco de dados',

        // Architecture
        notepad_architecture_title: 'Arquitetura da Aplicação',
        notepad_architecture_editor_title: 'Motor de Edição',
        notepad_architecture_editor_item_1: 'Editor de código com destaque de sintaxe',
        notepad_architecture_editor_item_2: 'Parser Markdown com renderização HTML',
        notepad_architecture_editor_item_3: 'Editor WYSIWYG para HTML',
        notepad_architecture_editor_item_4: 'Auto-completar e atalhos de teclado',

        notepad_architecture_storage_title: 'Gestão de Armazenamento',
        notepad_architecture_storage_item_1: 'Salvamento automático em banco MySQL',
        notepad_architecture_storage_item_2: 'Versionamento e histórico de modificações',
        notepad_architecture_storage_item_3: 'Sincronização de dados em tempo real',
        notepad_architecture_storage_item_4: 'Cache local para performance otimizada',

        notepad_architecture_rendering_title: 'Motor de Renderização',
        notepad_architecture_rendering_item_1: 'Renderização HTML segura e otimizada',
        notepad_architecture_rendering_item_2: 'Conversão Markdown para HTML',
        notepad_architecture_rendering_item_3: 'Visualização em tempo real',
        notepad_architecture_rendering_item_4: 'Exportação PDF e outros formatos',

        // GitHub
        notepad_github_title: 'Repositório GitHub',
        notepad_github_desc: 'Acesse o código-fonte completo da aplicação de anotações',

        //#endregion

        //#region Intranet Agenda
        // Hero Section
        agenda_project_tag: 'Aplicação Agenda Pessoal',
        agenda_hero_title: 'Agenda Pessoal Inteligente',
        agenda_hero_subtitle: 'Uma aplicação Vue.js completa para organizar seu tempo e gerenciar eventos eficientemente',
        agenda_stats_days: 'Dias por ano',
        agenda_stats_events: 'Eventos possíveis',

        // Overview Section
        agenda_overview_title: 'Visão Geral do Projeto',
        agenda_objectives_title: 'Objetivos do Projeto',
        agenda_objective_1: 'Criar uma interface de calendário intuitiva e responsiva',
        agenda_objective_2: 'Permitir criação, modificação e exclusão de eventos',
        agenda_objective_3: 'Implementar sistema de notificações e lembretes',
        agenda_objective_4: 'Garantir persistência de dados com autenticação segura',
        agenda_concept_title: 'Conceito da Aplicação',
        agenda_concept_description: 'Esta aplicação de agenda pessoal oferece uma solução completa para gestão de tempo. Os usuários podem criar eventos, definir lembretes, organizar sua agenda e receber notificações personalizadas.',

        // Highlights
        agenda_highlight_organization: 'Organização',
        agenda_highlight_organization_desc: 'Planejamento eficiente do tempo',
        agenda_highlight_reminders: 'Lembretes',
        agenda_highlight_reminders_desc: 'Notificações personalizadas',
        agenda_highlight_sharing: 'Compartilhamento',
        agenda_highlight_sharing_desc: 'Sincronização multi-usuários',

        // Features
        agenda_features_title: 'Funcionalidades Principais',
        agenda_features_subtitle: 'Ferramentas completas para gestão da sua agenda',
        agenda_feature_calendar_title: 'Vista Calendário',
        agenda_feature_calendar_desc: 'Interface de calendário mensal, semanal e diária com navegação intuitiva',
        agenda_feature_events_title: 'Gestão de Eventos',
        agenda_feature_events_desc: 'Criação, edição e exclusão de eventos com detalhes personalizados',
        agenda_feature_notifications_title: 'Sistema de Notificações',
        agenda_feature_notifications_desc: 'Lembretes automáticos e alertas personalizáveis com SweetAlert2',
        agenda_feature_customization_title: 'Personalização',
        agenda_feature_customization_desc: 'Temas, cores e preferências de exibição personalizáveis',
        agenda_feature_responsive_title: 'Design Responsivo',
        agenda_feature_responsive_desc: 'Interface otimizada para computadores, tablets e smartphones',
        agenda_feature_security_title: 'Segurança',
        agenda_feature_security_desc: 'Autenticação segura e proteção de dados pessoais',

        // Tech Stack
        agenda_tech_stack_title: 'Stack Tecnológico',
        agenda_tech_stack_subtitle: 'Tecnologias modernas para uma aplicação de alta performance',
        agenda_tech_frontend: 'Frontend',
        agenda_tech_backend: 'Backend',
        agenda_tech_testing: 'Testes Unitários',
        agenda_tech_database: 'Banco de dados',

        // Architecture
        agenda_architecture_title: 'Arquitetura da Aplicação',
        agenda_architecture_frontend_title: 'Interface do Usuário',
        agenda_architecture_frontend_item_1: 'Componentes Vue.js reativos com Vue Calendar',
        agenda_architecture_frontend_item_2: 'Gestão de estado centralizada com Pinia',
        agenda_architecture_frontend_item_3: 'Interface moderna e intuitiva',
        agenda_architecture_frontend_item_4: 'Notificações elegantes com SweetAlert2',

        agenda_architecture_backend_title: 'Serviços Backend',
        agenda_architecture_backend_item_1: 'API RESTful com Express.js',
        agenda_architecture_backend_item_2: 'Autenticação JWT segura',
        agenda_architecture_backend_item_3: 'Gestão de usuários e sessões',
        agenda_architecture_backend_item_4: 'Sistema de emails automáticos',

        agenda_architecture_features_title: 'Funcionalidades Avançadas',
        agenda_architecture_features_item_1: 'Sincronização de eventos em tempo real',
        agenda_architecture_features_item_2: 'Exportação/importação de calendários',
        agenda_architecture_features_item_3: 'Pesquisa e filtragem avançadas',
        agenda_architecture_features_item_4: 'Lembretes push e por email',

        // GitHub
        agenda_github_title: 'Repositório GitHub',
        agenda_github_desc: 'Acesse o código-fonte completo da aplicação agenda Vue.js',
        //#endregion
        //#region Kepass Intranet
        // Hero Section
        keypass_vue_project_tag: 'Projeto Gerenciador de Senhas',
        keypass_vue_hero_title: 'Keypass - Gerenciador Seguro',
        keypass_vue_hero_subtitle: 'Solução completa de gerenciamento de senhas com criptografia AES-256 e sincronização multiplataforma',
        keypass_vue_stats_encryption: 'Criptografia AES',
        keypass_vue_stats_platforms: 'Plataformas',

        // Overview Section
        keypass_vue_overview_title: 'Visão Geral do Projeto',
        keypass_vue_objectives_title: 'Objetivos do Projeto',
        keypass_vue_objective_1: 'Desenvolver uma solução segura de gerenciamento de senhas',
        keypass_vue_objective_2: 'Criar aplicação web, extensão de navegador e app móvel',
        keypass_vue_objective_3: 'Implementar criptografia AES-256 e autenticação 2FA',
        keypass_vue_objective_4: 'Garantir sincronização segura entre todos os dispositivos',
        keypass_vue_concept_title: 'Conceito do Projeto',
        keypass_vue_concept_description: 'Keypass é uma solução completa de gerenciamento de senhas oferecendo segurança máxima através da criptografia AES-256. O ecossistema inclui uma aplicação web Vue.js, uma extensão de navegador para autocompletar e um aplicativo móvel para acesso em movimento.',

        // Highlights
        keypass_vue_highlight_security: 'Segurança Máxima',
        keypass_vue_highlight_security_desc: 'Criptografia AES-256 e arquitetura zero-knowledge',
        keypass_vue_highlight_multiplatform: 'Multiplataforma',
        keypass_vue_highlight_multiplatform_desc: 'Web, extensão de navegador e móvel',
        keypass_vue_highlight_accessibility: 'Acessibilidade',
        keypass_vue_highlight_accessibility_desc: 'Interface intuitiva em todos os dispositivos',

        // Features
        keypass_vue_features_title: 'Funcionalidades Principais',
        keypass_vue_features_subtitle: 'Ferramentas avançadas para gerenciamento seguro de senhas',
        keypass_vue_feature_security_title: 'Criptografia Avançada',
        keypass_vue_feature_security_desc: 'Criptografia AES-256 com arquitetura zero-knowledge para segurança máxima',
        keypass_vue_feature_multiplatform_title: 'Multiplataforma',
        keypass_vue_feature_multiplatform_desc: 'Aplicação web, extensão de navegador e aplicativo móvel sincronizados',
        keypass_vue_feature_sync_title: 'Sincronização Segura',
        keypass_vue_feature_sync_desc: 'Sincronização criptografada em tempo real entre todos os seus dispositivos',
        keypass_vue_feature_generator_title: 'Gerador de Senhas',
        keypass_vue_feature_generator_desc: 'Geração automática de senhas fortes e personalizáveis',
        keypass_vue_feature_dashboard_title: 'Painel Intuitivo',
        keypass_vue_feature_dashboard_desc: 'Interface moderna para gerenciar, organizar e buscar suas senhas',
        keypass_vue_feature_2fa_title: 'Autenticação 2FA',
        keypass_vue_feature_2fa_desc: 'Autenticação de dois fatores para fortalecer a segurança da sua conta',

        // Security Features
        keypass_vue_security_title: 'Arquitetura de Segurança',
        keypass_vue_security_subtitle: 'Tecnologias e protocolos de segurança implementados',
        keypass_vue_security_encryption_title: 'Criptografia Ponta a Ponta',
        keypass_vue_security_encryption_desc: 'Todas as senhas são criptografadas localmente com AES-256 antes da transmissão',
        keypass_vue_security_zeroknowledge_title: 'Arquitetura Zero-Knowledge',
        keypass_vue_security_zeroknowledge_desc: 'Os servidores nunca podem acessar suas senhas descriptografadas',
        keypass_vue_security_backup_title: 'Backup Seguro',
        keypass_vue_security_backup_desc: 'Backups automáticos criptografados com recuperação de emergência',
        keypass_vue_security_audit_title: 'Auditoria de Segurança',
        keypass_vue_security_audit_desc: 'Análise de senhas fracas e monitoramento de vazamentos de dados',

        // Tech Stack
        keypass_vue_tech_stack_title: 'Stack Tecnológico',
        keypass_vue_tech_stack_subtitle: 'Tecnologias utilizadas para desenvolvimento seguro',
        keypass_vue_tech_frontend: 'Interface do Usuário',
        keypass_vue_tech_backend: 'Serviços Backend',
        keypass_vue_tech_testing: 'Testes e Qualidade',
        keypass_vue_tech_database: 'Armazenamento Seguro',

        // Architecture
        keypass_vue_architecture_title: 'Arquitetura Multiplataforma',
        keypass_vue_architecture_web_title: 'Aplicação Web',
        keypass_vue_architecture_web_item_1: 'Interface Vue.js responsiva e moderna',
        keypass_vue_architecture_web_item_2: 'Gerenciamento de estado centralizado com Pinia',
        keypass_vue_architecture_web_item_3: 'Comunicação API segura com Axios',
        keypass_vue_architecture_web_item_4: 'Notificações do usuário com SweetAlert2',

        keypass_vue_architecture_extension_title: 'Extensão do Navegador',
        keypass_vue_architecture_extension_item_1: 'Autocompletar automático de formulários',
        keypass_vue_architecture_extension_item_2: 'Detecção inteligente de campos de login',
        keypass_vue_architecture_extension_item_3: 'Geração de senhas instantânea',
        keypass_vue_architecture_extension_item_4: 'Sincronização com aplicação principal',

        keypass_vue_architecture_mobile_title: 'Aplicativo Móvel',
        keypass_vue_architecture_mobile_item_1: 'Interface nativa otimizada para móvel',
        keypass_vue_architecture_mobile_item_2: 'Autenticação biométrica (Touch/Face ID)',
        keypass_vue_architecture_mobile_item_3: 'Acesso offline às senhas',
        keypass_vue_architecture_mobile_item_4: 'Compartilhamento seguro entre aplicações',

        // GitHub
        keypass_vue_github_title: 'Repositório GitHub',
        keypass_vue_github_desc: 'Acesse o código-fonte completo do gerenciador de senhas Keypass',
        //#endregion
        toggle_details: 'Mostrar mais conteúdo',
        hide_details: 'Ocultar detalhes',
        source_code: 'Código fonte'
    }
}

const i18n = createI18n({
    locale: localStorage.getItem('locale') || 'fr', // Langue par défaut
    fallbackLocale: 'fr',
    messages
})

export default i18n
