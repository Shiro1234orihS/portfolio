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
