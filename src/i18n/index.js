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
        //#endregion

        //#region Technical 
        skills_title: 'Skills',
        app_dev: 'Application Development',
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
        //#endregion

        //#region WestOfSurvival
        project_title: 'West of Survival',
        project_objective: 'Project Objective:',
        project_description: '<strong>West of Survival</strong> is a survival game created as part of a university project with Dulhoste Maxime and Mihoubi Marouane. The gameplay, maps, and designs were imagined by our team. The project uses C# and MonoGame, with maps designed using Tiled.',
        toggle_details: 'Show more content',
        hide_details: 'Hide details',
        main_software: 'Main Software and Frameworks:',
        tiled: 'Tiled',
        tiled_description: 'Tiled is an open-source 2D map editor, ideal for creating video game levels and interactive maps thanks to its intuitive interface.',
        monogame: 'MonoGame',
        monogame_description: 'MonoGame is an open-source framework that facilitates the development of 2D and 3D cross-platform games, based on Microsoft XNA.',
        challenges: 'Challenges Encountered',
        challenges_description: 'We overcame challenges such as performance optimization and creating an intuitive interface.',
        role: 'Role in the Project',
        role_description: 'I mainly worked on gameplay logic, graphical integration, and collision management.',
        results: 'Results',
        results_description: 'The project received positive feedback for its fluidity, design, and engaging gameplay.',
        project_skills: 'Project Skills',
        technologies: 'Technologies',
        availability: 'Game Availability:',
        availability_text: 'A Phaser version with JavaScript is',
        available: 'available',
        github_source: 'Find the source code on',
        csharp: 'C#',
        //#endregion

        //#region LaravelBmw
        project_title: 'Reconstruction of the BMW Motorrad Website with Laravel',
        project_presentation: 'Project Presentation',
        project_description: 'The objective of this project was to replicate the various features of the official BMW Motorrad website. This work was carried out as part of an educational initiative to explore Laravel’s capabilities in developing dynamic and high-performance web applications.',
        project_features: 'Developed Features',
        feature_users: '🔹 <strong>User Management:</strong> Secure authentication system (JWT), role management (admin/user), and account management.',
        feature_catalog_motos: '🔹 <strong>Motorcycle Catalog:</strong> Dynamic consultation of models with advanced filters (by type, price, power, etc.).',
        feature_catalog_equipements: '🔹 <strong>Equipment Catalog:</strong> Similar system to the motorcycle catalog with stock display and dynamic updates.',
        feature_admin: '🔹 <strong>Admin Back-Office:</strong> Interface allowing the addition, modification, and deletion of models and equipment.',
        feature_powerbi: '🔹 <strong>Power BI Reports:</strong> Sales analysis through an interactive dashboard connected to the database.',
        challenges: 'Challenges and Solutions',
        challenge_performance: '✅ <strong>Performance Optimization:</strong> Caching of frequent queries and optimization of SQL queries to improve model display speed.',
        challenge_powerbi: '✅ <strong>Power BI Integration:</strong> Development of a Laravel API to dynamically feed the reports.',
        technologies: 'Technologies Used',
        available_link: 'The site is available at:',
        project_conclusion: 'Project Summary',
        conclusion_flexibility: '- <strong>Flexibility:</strong> The site was designed to work on different operating systems without requiring complex installation. The use of Docker containers allowed better portability.',
        conclusion_user_experience: '- <strong>User Experience:</strong> The user interface was designed to be fluid and intuitive, making navigation simple and pleasant.',
        conclusion_learnings: '- <strong>Skills Acquired:</strong> This project strengthened my expertise in Laravel, software architecture, BI tool integration, and cloud deployment with Azure.',
        toggle_details: 'Show more content',
        hide_details: 'Hide details',
        //#endregion

        //#region VueBmw
        project_title: 'Rebuilding the BMW Motorrad Website with Vue.js',
        project_description: 'The goal of this project was to replicate the various features of the official BMW Motorrad website. This work was carried out in an educational setting to explore the capabilities of the Laravel framework in developing dynamic and high-performance web applications.',
        toggle_competences: 'Show project skills',
        hide_competences: 'Hide skills',
        developed_features: 'Developed Features',
        feature_deployment: '🔹<strong>Automated Deployment:</strong> CI/CD integration for rapid deployment via Docker and Azure DevOps.',
        feature_security: '🔹<strong>Container Security:</strong> Management of environment variables and permissions.',
        challenges_solutions: 'Challenges and Solutions',
        challenge_dependencies: '✅ <strong>Dependency Management:</strong> Centralized configurations via a .env file.',
        challenge_scalability: '✅ <strong>Scalability:</strong> Possibility of orchestration on Kubernetes to handle load increase.',
        technical_skills: 'Technical Skills',
        frontend: 'Frontend',
        backend_api: 'Backend and API',
        database: 'Database',
        source_code: '📌 <strong>Source code available here:</strong>',
        vue_js: 'Vue.js',
        pinia: 'Pinia',
        asp_net: 'ASP.NET Core',
        entity_framework: 'Entity Framework Core',
        postgresql: 'PostgreSQL',
        //#endregion

        //#region Ydocker
        project_title: 'Dockerization of Site X',
        project_presentation: 'Project Overview',
        project_description: 'The objective of this project was to <strong>dockerize</strong> a website so that it can be run on any PC without complex configuration. Thanks to <strong>Docker</strong>, we encapsulated the application and its dependencies in an isolated and reproducible environment.',
        project_advantages: 'The choice of containerization avoids issues related to environment differences (operating systems, dependencies, software versions) and simplifies deployment on any machine.',

        docker_steps: 'Dockerization Steps',
        step_1: '🔹 <strong>Creating the Dockerfile</strong>: Defining the base image and instructions for installing dependencies.',
        step_2: '🔹 <strong>Setting up Docker Compose</strong>: Configuring necessary services (database, web server, API, etc.).',
        step_3: '🔹 <strong>Deployment and execution</strong>: Building and running Docker containers.',
        step_4: '🔹 <strong>Testing and validation</strong>: Ensuring proper functionality on different machines.',

        technologies_used: 'Technologies and Tools Used',
        tech_docker: '✅ <strong>Docker</strong>: For application containerization and isolation.',
        tech_compose: '✅ <strong>Docker Compose</strong>: For orchestrating multiple containers (e.g., backend, database).',
        tech_nginx: '✅ <strong>Nginx / Apache</strong>: For handling HTTP requests and reverse proxy.',
        tech_database: '✅ <strong>Database</strong>: PostgreSQL / MySQL (depending on project requirements).',
        tech_ci_cd: '✅ <strong>GitHub Actions / CI/CD</strong>: For automating build and deployment.',

        challenges_solutions: 'Challenges and Solutions',
        challenge_volumes: '✅ <strong>Managing volumes and data persistence</strong>: Using <strong>Docker Volumes</strong> to store data persistently.',
        challenge_optimization: '✅ <strong>Optimizing the Dockerfile</strong>: Reducing image size using a minimal image (e.g., Alpine Linux).',

        project_conclusion: 'Project Conclusion',
        conclusion_flexibility: 'Flexibility: The site can run on different systems without complex installation.',
        conclusion_reliability: 'Reliability: Reproducible environments reduce dependency-related errors or incompatibilities.',
        conclusion_scalability: 'Scalability: Ability to deploy the project on a cloud server with orchestration via Kubernetes.',
        conclusion_experience: 'Experience Gained: Strengthened skills in Docker, CI/CD, and virtualized environment management.',

        source_code: '📌Source code available here:',
        //#endregion

        //#region keypass
        project_title: 'Creation of a Password Management Website',
        project_presentation: 'Project Objective',
        project_description: 'This project aims to design a complete <strong>secure password management solution</strong>, including a website, a browser extension, and a mobile application.',

        project_feature_1: '✅ A <strong>website</strong> allowing users to store, manage, and organize their passwords.',
        project_feature_2: '✅ A <strong>browser extension</strong> to automatically save passwords.',
        project_feature_3: '✅ A <strong>mobile application</strong> for secure access to passwords on the go.',

        project_security: 'The goal is to provide a <strong>smooth and secure interface</strong>, ensuring data confidentiality through <strong>advanced encryption</strong>.',

        technologies_used: 'Technologies and Tools Used',
        tech_frontend: '🎨 <strong>Front-end</strong>: Vue.js and Bootstrap for a modern and responsive user interface.',
        tech_backend: '🛠 <strong>Back-end</strong>: Laravel to manage users and secure database interactions.',
        tech_database: '💾 <strong>Database</strong>: PostgreSQL, with password encryption (bcrypt, AES-256).',
        tech_security: '🔒 <strong>Security</strong>: Integration of <strong>2FA (Two-Factor Authentication)</strong> and AES encryption for data protection.',
        tech_containerization: '📦 <strong>Containerization</strong>: Docker for portability and compatibility across different systems.',
        tech_cloud: '☁️ <strong>Cloud Deployment</strong>: Azure for hosting and backend service management.',

        toggle_competences: 'Show project skills',
        hide_competences: 'Hide skills',

        developed_features: 'Developed Features',
        feature_1: '🔹<strong> Secure password creation and storage</strong> with AES-256 encryption.',
        feature_2: '🔹<strong> Secure password generator</strong> based on customizable criteria.',
        feature_3: '🔹<strong> Browser extension</strong> for saving and autofilling credentials.',
        feature_4: '🔹<strong> Multi-device synchronization</strong> with a secure API.',

        challenges_solutions: 'Challenges and Solutions',
        challenge_1: '✅ <strong>Password security</strong>: Implementation of <strong>AES-256 encryption</strong> and encrypted database storage.',
        challenge_2: '✅ <strong>Performance and optimization</strong>: Using <strong>Redis caches</strong> to speed up access to encrypted data.',
        challenge_3: '✅ <strong>Reliability and availability</strong>: Implementation of an <strong>automatic backup system</strong> and hosting on Azure.',

        technical_skills: 'Technical Skills',
        frontend: 'Front-end',
        backend: 'Back-end',
        database: 'Database',

        project_review: 'Project Review',
        project_results: 'Results',
        result_1: '- <strong>Flexibility</strong>: Compatible with all browsers and accessible on mobile and desktop.',
        result_2: '- <strong>Enhanced security</strong>: Integration of best practices in cryptography and strong authentication.',
        //#endregion

        //#region Earnincall
        project_title: 'Creation of a Website to Visualize Earnings Calls with Angular',
        project_presentation: 'Project Objective',
        project_description: 'This project aims to design a web platform that allows investors and financial analysts to track <strong>earnings calls</strong> of publicly traded companies. An <strong>earnings call</strong> is a teleconference between a company’s management, analysts, investors, and the media, where financial results for a quarter or fiscal year are discussed.',
        project_goal: 'The goal of this site is to provide an intuitive and centralized interface to consult these events and facilitate investment decision-making.',

        technologies_used: 'Technologies and Tools Used',
        tech_frontend: '🎨 <strong>Front-end</strong>: Angular for a dynamic and high-performance user interface.',
        tech_api: '📡 <strong>API Integration</strong>: Connection to financial APIs to retrieve real-time earnings call announcements.',

        toggle_competences: 'Show project skills',
        hide_competences: 'Hide skills',

        developed_features: 'Developed Features',
        feature_1: '🔹 <strong>Dynamic display of earnings calls</strong> with filters by company, date, and industry sector.',
        feature_2: '🔹 <strong>Integration of financial APIs</strong> to automatically retrieve announcements from listed companies.',

        challenges_solutions: 'Challenges and Solutions',
        challenge_1: '✅ <strong>Optimization of Angular performance</strong>: Asynchronous data loading with lazy loading.',
        challenge_2: '✅ <strong>API request management</strong>: Implementation of caching to prevent excessive external API requests.',

        technical_skills: 'Technical Skills',
        frontend: 'Front-end',

        project_review: 'Project Review',
        project_results: 'Results',
        result_1: '- <strong>Flexibility</strong>: The site runs on different systems without requiring complex installation.'
        //#endregion

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
        //#endregion

        //#region Technical
        skills_title: 'Compétences',
        app_dev: 'Développement d\'application',
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
        //#endregion

        //#region WestOfSurvival
        project_title: 'West of Survival',
        project_objective: 'Objectif du projet :',
        project_description: '<strong>West of Survival</strong> est un jeu de survie créé dans le cadre d\'un projet universitaire avec Dulhoste Maxime et Mihoubi Marouane. Le gameplay, les cartes et les designs ont été imaginés par notre équipe. Le projet utilise C# et MonoGame, avec des cartes conçues via Tiled.',
        toggle_details: 'Afficher plus de contenu',
        hide_details: 'Masquer les détails',
        main_software: 'Les principaux logiciels et frameworks :',
        tiled: 'Tiled',
        tiled_description: 'Tiled est un éditeur de cartes 2D open-source, idéal pour créer des niveaux de jeux vidéo et des cartes interactives grâce à son interface intuitive.',
        monogame: 'MonoGame',
        monogame_description: 'MonoGame est un framework open-source facilitant le développement de jeux 2D et 3D multiplateformes, basé sur Microsoft XNA.',
        challenges: 'Défis rencontrés',
        challenges_description: 'Nous avons surmonté des défis comme l\'optimisation des performances et la création d\'une interface intuitive.',
        role: 'Rôle dans le projet',
        role_description: 'J\'ai principalement travaillé sur la logique de gameplay, l\'intégration graphique et la gestion des collisions.',
        results: 'Résultats',
        results_description: 'Le projet a reçu des retours positifs pour sa fluidité, son design et son gameplay engageant.',
        project_skills: 'Compétences du projet',
        technologies: 'Technologies',
        availability: 'Disponibilité du jeu :',
        availability_text: 'Une version du jeu en Phaser avec JavaScript est',
        available: 'disponible',
        github_source: 'Retrouvez le code source sur',
        csharp: 'C#',
        //#endregion

        //#region LaravelBmw
        project_title: 'Reconstruction du site BMW Motorrad avec Laravel',
        project_presentation: 'Présentation du projet',
        project_description: 'L\'objectif de ce projet était de reproduire les différentes fonctionnalités du site web officiel de BMW Motorrad. Ce travail a été réalisé dans un cadre pédagogique pour explorer les capacités du framework Laravel dans le développement d\'applications web dynamiques et performantes.',
        project_features: 'Fonctionnalités développées',
        feature_users: '🔹 <strong>Gestion des utilisateurs :</strong> Système d’authentification sécurisé (JWT), rôles (admin/utilisateur) et gestion des comptes.',
        feature_catalog_motos: '🔹 <strong>Catalogue des motos :</strong> Consultation dynamique des modèles avec filtres avancés (par type, prix, puissance, etc.).',
        feature_catalog_equipements: '🔹 <strong>Catalogue des équipements :</strong> Système similaire au catalogue des motos avec affichage des stocks et mise à jour dynamique.',
        feature_admin: '🔹 <strong>Back-office d\'administration :</strong> Interface permettant d\'ajouter, modifier et supprimer des modèles et équipements.',
        feature_powerbi: '🔹 <strong>Mise en place de rapports Power BI :</strong> Analyse des ventes via un tableau de bord interactif connecté à la base de données.',
        challenges: 'Défis et solutions',
        challenge_performance: '✅ <strong>Optimisation des performances :</strong> Mise en cache des requêtes fréquentes et optimisation des requêtes SQL pour améliorer la rapidité d\'affichage des modèles.',
        challenge_powerbi: '✅ <strong>Intégration de Power BI :</strong> Développement d’une API Laravel pour alimenter dynamiquement les rapports.',
        technologies: 'Technologies utilisées',
        available_link: 'Le site est disponible à l\'adresse suivante :',
        project_conclusion: 'Bilan du projet',
        conclusion_flexibility: '- <strong>Flexibilité :</strong> Le site a été conçu pour fonctionner sur différents systèmes d\'exploitation sans nécessiter d’installation complexe. L’utilisation de conteneurs avec Docker a permis une meilleure portabilité.',
        conclusion_user_experience: '- <strong>Expérience utilisateur :</strong> L’interface utilisateur a été pensée pour être fluide et intuitive, rendant la navigation simple et agréable.',
        conclusion_learnings: '- <strong>Expérience acquise :</strong> Ce projet a renforcé mes compétences en Laravel, en architecture logicielle, en intégration d’outils BI et en déploiement cloud avec Azure.',
        toggle_details: 'Afficher plus de contenu',
        hide_details: 'Masquer les détails',
        //#endregion

        //#region VueBmw
        project_title: 'Reconstruction du site BMW Motorrad avec Vue.js',
        project_description: 'L\'objectif de ce projet était de reproduire les différentes fonctionnalités du site web officiel de BMW Motorrad. Ce travail a été réalisé dans un cadre pédagogique pour explorer les capacités du framework Laravel dans le développement d\'applications web dynamiques et performantes.',
        toggle_competences: 'Afficher les compétences du projet',
        hide_competences: 'Masquer les compétences',
        developed_features: 'Fonctionnalités développées',
        feature_deployment: '🔹<strong>Déploiement automatisé :</strong> Intégration de CI/CD pour un déploiement rapide via Docker et Azure DevOps.',
        feature_security: '🔹<strong>Sécurisation des conteneurs :</strong> Gestion des variables d’environnement et des permissions.',
        challenges_solutions: 'Défis et solutions',
        challenge_dependencies: '✅ <strong>Gestion des dépendances :</strong> Centralisation des configurations via un fichier .env.',
        challenge_scalability: '✅ <strong>Scalabilité :</strong> Possibilité d’orchestration sur Kubernetes pour gérer la montée en charge.',
        technical_skills: 'Compétences techniques',
        frontend: 'Front',
        backend_api: 'Backend et API',
        database: 'Base de données',
        source_code: '📌 <strong>Code source disponible ici :</strong>',
        vue_js: 'Vue JS',
        pinia: 'Pinia',
        asp_net: 'ASP.NET Core',
        entity_framework: 'Entity Framework Core',
        postgresql: 'PostgreSQL',

        //#endregion

        //#region Ydocker
        project_title: 'Dockerisation du site X',
        project_presentation: 'Présentation du projet',
        project_description: 'Ce projet avait pour objectif de <strong>dockeriser</strong> un site web afin qu\'il puisse être exécuté sur n\'importe quel PC sans configuration complexe. Grâce à <strong>Docker</strong>, nous avons encapsulé l\'application et ses dépendances dans un environnement isolé et reproductible.',
        project_advantages: 'Le choix de la conteneurisation permet d’éviter les problèmes liés aux différences d’environnement (systèmes d’exploitation, dépendances, versions de logiciels) et facilite le déploiement sur n’importe quelle machine.',

        docker_steps: 'Étapes de la dockerisation',
        step_1: '🔹 <strong>Création du fichier Dockerfile</strong> : Définition de l’image de base et des instructions pour installer les dépendances.',
        step_2: '🔹 <strong>Configuration de Docker Compose</strong> : Mise en place des services nécessaires (base de données, serveur web, API, etc.).',
        step_3: '🔹 <strong>Déploiement et exécution</strong> : Construction et exécution des conteneurs Docker.',
        step_4: '🔹 <strong>Tests et validation</strong> : Vérification du bon fonctionnement sur différentes machines.',

        technologies_used: 'Technologies et outils utilisés',
        tech_docker: '✅ <strong>Docker</strong> : Pour la conteneurisation et l’isolation de l’application.',
        tech_compose: '✅ <strong>Docker Compose</strong> : Pour orchestrer plusieurs conteneurs (exemple : backend, base de données).',
        tech_nginx: '✅ <strong>Nginx / Apache</strong> : Pour la gestion des requêtes HTTP et reverse proxy.',
        tech_database: '✅ <strong>Base de données</strong> : PostgreSQL / MySQL (en fonction des besoins du projet).',
        tech_ci_cd: '✅ <strong>GitHub Actions / CI/CD</strong> : Pour l\'automatisation du build et du déploiement.',

        challenges_solutions: 'Défis et solutions',
        challenge_volumes: '✅ <strong>Gestion des volumes et persistance des données</strong> : Utilisation de <strong>Docker Volumes</strong> pour stocker les données de manière persistante.',
        challenge_optimization: '✅ <strong>Optimisation du Dockerfile</strong> : Réduction de la taille de l’image en utilisant une image minimale (ex: Alpine Linux).',
        challenge_security: '✅ <strong>Sécurisation des conteneurs</strong> : Mise en place de bonnes pratiques pour éviter les failles (limitation des accès, configuration des variables d\'environnement).',

        project_conclusion: 'Bilan du projet',
        conclusion_flexibility: 'Flexibilité : Le site peut être exécuté sur différents systèmes sans installation complexe.',
        conclusion_reliability: 'Fiabilité : Les environnements reproductibles réduisent les erreurs liées aux dépendances ou incompatibilités.',
        conclusion_scalability: 'Scalabilité : Possibilité de déployer le projet sur un serveur cloud avec orchestration via Kubernetes.',
        conclusion_experience: 'Expérience acquise : Renforcement des compétences en Docker, CI/CD et gestion d\'environnements virtualisés.',

        source_code: '📌 Code source disponible ici :',
        //#endregion

        //#region Kaypass
        project_title: 'Création d\'un site de gestion de mots de passe',
        project_presentation: 'Objectif du projet',
        project_description: 'Ce projet vise à concevoir une solution complète de <strong>gestion sécurisée des mots de passe</strong>, incluant un site web, une extension de navigateur et une application mobile.',

        project_feature_1: '✅ Un <strong>site web</strong> permettant aux utilisateurs de stocker, gérer et organiser leurs mots de passe.',
        project_feature_2: '✅ Une <strong>extension de navigateur</strong> pour enregistrer automatiquement les mots de passe.',
        project_feature_3: '✅ Une <strong>application mobile</strong> pour un accès sécurisé aux mots de passe en déplacement.',

        project_security: 'L\'objectif est d\'offrir une <strong>interface fluide et sécurisée</strong>, garantissant la confidentialité des données grâce à un <strong>chiffrement avancé</strong>.',

        technologies_used: 'Technologies et outils utilisés',
        tech_frontend: '🎨 <strong>Front-end</strong> : Vue.js et Bootstrap pour une interface utilisateur moderne et réactive.',
        tech_backend: '🛠 <strong>Back-end</strong> : Laravel pour gérer les utilisateurs et sécuriser les interactions avec la base de données.',
        tech_database: '💾 <strong>Base de données</strong> : PostgreSQL, avec chiffrement des mots de passe (bcrypt, AES-256).',
        tech_security: '🔒 <strong>Sécurité</strong> : Intégration de <strong>2FA (authentification à deux facteurs)</strong> et chiffrement AES pour protéger les données.',

        toggle_competences: 'Afficher les compétences du projet',
        hide_competences: 'Masquer les compétences',

        developed_features: 'Fonctionnalités développées',
        feature_1: '🔹<strong> Création et stockage sécurisé des mots de passe</strong> avec chiffrement AES-256.',
        feature_2: '🔹<strong> Générateur de mots de passe sécurisé</strong> basé sur des critères personnalisables.',
        feature_3: '🔹<strong> Extension navigateur</strong> pour enregistrement et remplissage automatique des identifiants.',
        feature_4: '🔹<strong> Synchronisation multi-appareils</strong> avec une API sécurisée.',

        challenges_solutions: 'Défis et solutions',
        challenge_1: '✅ <strong>Sécurisation des mots de passe</strong> : Implémentation d\'un <strong>chiffrement AES-256</strong> et d\'un stockage chiffré en base de données.',
        challenge_2: '✅ <strong>Performance et optimisation</strong> : Utilisation de <strong>caches Redis</strong> pour accélérer l’accès aux données chiffrées.',
        challenge_3: '✅ <strong>Fiabilité et disponibilité</strong> : Mise en place d’un <strong>système de sauvegarde automatique</strong> et d’un hébergement sur Azure.',

        project_review: 'Bilan du projet',
        project_results: 'Résultats',
        result_1: '- <strong>Flexibilité</strong> : Compatible avec tous les navigateurs et accessible sur mobile et desktop.',
        result_2: '- <strong>Sécurité renforcée</strong> : Intégration des meilleures pratiques en cryptographie et authentification forte.',
        //#endregion

        //#region Earnincall
        project_title: 'Création d\'un site pour visualiser les différents Earnings Calls avec Angular',
        project_presentation: 'Objectif du projet',
        project_description: 'Ce projet a pour objectif de concevoir une plateforme web permettant aux investisseurs et analystes financiers de suivre les <strong>earnings calls</strong> des entreprises cotées en bourse. Un <strong>earnings call</strong> est une conférence téléphonique entre la direction d\'une entreprise publique, des analystes, des investisseurs et les médias, qui permet de discuter des résultats financiers d\'une entreprise pour un trimestre ou une année fiscale.',
        project_goal: 'Ce site vise à offrir une interface intuitive et centralisée pour consulter ces événements et faciliter la prise de décision en matière d’investissement.',

        technologies_used: 'Technologies et outils utilisés',
        tech_frontend: '🎨 <strong>Front-end</strong> : Angular pour une interface utilisateur dynamique et performante.',
        tech_api: '📡 <strong>Intégration d\'API</strong> : Connexion aux API financières pour récupérer les annonces d\'earnings calls en temps réel.',

        toggle_competences: 'Afficher les compétences du projet',
        hide_competences: 'Masquer les compétences',

        developed_features: 'Fonctionnalités développées',
        feature_1: '🔹 <strong>Affichage dynamique des earnings calls</strong> avec filtres par entreprise, date et secteur d\'activité.',
        feature_2: '🔹 <strong>Intégration d’API financières</strong> pour récupérer automatiquement les annonces des entreprises cotées.',

        challenges_solutions: 'Défis et solutions',
        challenge_1: '✅ <strong>Optimisation des performances Angular</strong> : Chargement asynchrone des données avec lazy loading.',
        challenge_2: '✅ <strong>Gestion des appels API</strong> : Implémentation de caches pour éviter les requêtes excessives aux API externes.',

        technical_skills: 'Compétences techniques',
        frontend: 'Front-end',

        project_review: 'Bilan du projet',
        project_results: 'Résultats',
        result_1: '- <strong>Flexibilité</strong> : Le site fonctionne sur différents systèmes sans nécessiter d’installation complexe.'
        //#endregion
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
        //#endregion

        //#region Technical 
        skills_title: 'Competências',
        app_dev: 'Desenvolvimento de Aplicações',
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
        springboot:'Spring Boot',
        java:'java',
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
        //#endregion

        //#region WestOfSurvival
        project_title: 'West of Survival',
        project_objective: 'Objetivo do Projeto:',
        project_description: '<strong>West of Survival</strong> é um jogo de sobrevivência criado como parte de um projeto universitário com Dulhoste Maxime e Mihoubi Marouane. A jogabilidade, os mapas e os designs foram imaginados pela nossa equipe. O projeto utiliza C# e MonoGame, com mapas criados usando Tiled.',
        toggle_details: 'Mostrar mais conteúdo',
        hide_details: 'Ocultar detalhes',
        main_software: 'Principais Softwares e Frameworks:',
        tiled: 'Tiled',
        tiled_description: 'Tiled é um editor de mapas 2D open-source, ideal para criar níveis de jogos e mapas interativos graças à sua interface intuitiva.',
        monogame: 'MonoGame',
        monogame_description: 'MonoGame é um framework open-source que facilita o desenvolvimento de jogos 2D e 3D multiplataforma, baseado no Microsoft XNA.',
        challenges: 'Desafios Encontrados',
        challenges_description: 'Superamos desafios como a otimização de desempenho e a criação de uma interface intuitiva.',
        role: 'Papel no Projeto',
        role_description: 'Trabalhei principalmente na lógica de jogabilidade, integração gráfica e gerenciamento de colisões.',
        results: 'Resultados',
        results_description: 'O projeto recebeu feedback positivo por sua fluidez, design e jogabilidade envolvente.',
        project_skills: 'Competências do projeto',
        technologies: 'Tecnologias',
        availability: 'Disponibilidade do jogo:',
        availability_text: 'Uma versão do jogo em Phaser com JavaScript está',
        available: 'disponível',
        github_source: 'Encontre o código-fonte no',
        csharp: 'C#',
        //#endregion

        //#region LaravelBmw
        project_title: 'Reconstrução do site BMW Motorrad com Laravel',
        project_presentation: 'Apresentação do projeto',
        project_description: 'O objetivo deste projeto foi reproduzir as diversas funcionalidades do site oficial da BMW Motorrad. Este trabalho foi realizado em um contexto educacional para explorar as capacidades do framework Laravel no desenvolvimento de aplicações web dinâmicas e de alto desempenho.',
        project_features: 'Funcionalidades desenvolvidas',
        feature_users: '🔹 <strong>Gestão de usuários:</strong> Sistema de autenticação segura (JWT), gerenciamento de funções (admin/usuário) e contas.',
        feature_catalog_motos: '🔹 <strong>Catálogo de motos:</strong> Consulta dinâmica dos modelos com filtros avançados (por tipo, preço, potência, etc.).',
        feature_catalog_equipements: '🔹 <strong>Catálogo de equipamentos:</strong> Sistema semelhante ao catálogo de motos com exibição de estoque e atualização dinâmica.',
        feature_admin: '🔹 <strong>Back-office de administração:</strong> Interface para adicionar, modificar e excluir modelos e equipamentos.',
        feature_powerbi: '🔹 <strong>Relatórios Power BI:</strong> Análise de vendas por meio de um painel interativo conectado ao banco de dados.',
        challenges: 'Desafios e soluções',
        challenge_performance: '✅ <strong>Otimização de desempenho:</strong> Cache de consultas frequentes e otimização de consultas SQL para melhorar a velocidade de exibição dos modelos.',
        challenge_powerbi: '✅ <strong>Integração do Power BI:</strong> Desenvolvimento de uma API Laravel para alimentar dinamicamente os relatórios.',
        technologies: 'Tecnologias utilizadas',
        available_link: 'O site está disponível no seguinte endereço:',
        project_conclusion: 'Conclusão do projeto',
        conclusion_flexibility: '- <strong>Flexibilidade:</strong> O site foi projetado para funcionar em diferentes sistemas operacionais sem necessidade de instalação complexa. O uso de contêineres com Docker permitiu melhor portabilidade.',
        conclusion_user_experience: '- <strong>Experiência do usuário:</strong> A interface do usuário foi projetada para ser fluida e intuitiva, tornando a navegação simples e agradável.',
        conclusion_learnings: '- <strong>Experiência adquirida:</strong> Este projeto reforçou minhas habilidades em Laravel, arquitetura de software, integração de ferramentas BI e implantação na nuvem com Azure.',
        toggle_details: 'Mostrar mais conteúdo',
        hide_details: 'Ocultar detalhes',
        //#endregion

        //#region VueBmw
        project_title: 'Reconstrução do site BMW Motorrad com Vue.js',
        project_description: 'O objetivo deste projeto foi replicar as várias funcionalidades do site oficial da BMW Motorrad. Este trabalho foi realizado em um ambiente educacional para explorar as capacidades do framework Laravel no desenvolvimento de aplicações web dinâmicas e de alto desempenho.',
        toggle_competences: 'Mostrar habilidades do projeto',
        hide_competences: 'Ocultar habilidades',
        developed_features: 'Funcionalidades desenvolvidas',
        feature_deployment: '🔹<strong>Implantação automatizada:</strong> Integração de CI/CD para implantação rápida via Docker e Azure DevOps.',
        feature_security: '🔹<strong>Segurança dos contêineres:</strong> Gerenciamento de variáveis de ambiente e permissões.',
        challenges_solutions: 'Desafios e Soluções',
        challenge_dependencies: '✅ <strong>Gerenciamento de dependências:</strong> Centralização de configurações via um arquivo .env.',
        challenge_scalability: '✅ <strong>Escalabilidade:</strong> Possibilidade de orquestração no Kubernetes para lidar com aumento de carga.',
        technical_skills: 'Habilidades Técnicas',
        frontend: 'Frontend',
        backend_api: 'Backend e API',
        database: 'Banco de dados',
        source_code: '📌 <strong>Código-fonte disponível aqui:</strong>',
        vue_js: 'Vue JS',
        pinia: 'Pinia',
        asp_net: 'ASP.NET Core',
        entity_framework: 'Entity Framework Core',
        postgresql: 'PostgreSQL',
        //#endregion

        //#region Ydocker
        project_title: 'Dockerização do site X',
        project_presentation: 'Apresentação do projeto',
        project_description:
            'O objetivo deste projeto foi <strong>dockerizar</strong> um site para que possa ser executado em qualquer PC sem configuração complexa. Com <strong>Docker</strong>, encapsulamos a aplicação e suas dependências em um ambiente isolado e reprodutível.',
        project_advantages:
            'A conteinerização evita problemas relacionados a diferenças de ambiente (sistemas operacionais, dependências, versões de software) e facilita a implantação em qualquer máquina.',

        docker_steps: 'Etapas da Dockerização',
        step_1: '🔹 <strong>Criação do arquivo Dockerfile</strong>: Definição da imagem base e das instruções para instalar as dependências.',
        step_2: '🔹 <strong>Configuração do Docker Compose</strong>: Configuração dos serviços necessários (banco de dados, servidor web, API, etc.).',
        step_3: '🔹 <strong>Implantação e execução</strong>: Construção e execução dos containers Docker.',
        step_4: '🔹 <strong>Testes e validação</strong>: Verificação do funcionamento em diferentes máquinas.',

        technologies_used: 'Tecnologias e Ferramentas Utilizadas',
        tech_docker: '✅ <strong>Docker</strong>: Para conteinerização e isolamento da aplicação.',
        tech_compose: '✅ <strong>Docker Compose</strong>: Para orquestrar múltiplos containers (exemplo: backend, banco de dados).',
        tech_nginx: '✅ <strong>Nginx / Apache</strong>: Para gerenciamento de requisições HTTP e proxy reverso.',
        tech_database: '✅ <strong>Banco de dados</strong>: PostgreSQL / MySQL (dependendo das necessidades do projeto).',
        tech_ci_cd: '✅ <strong>GitHub Actions / CI/CD</strong>: Para automação de build e implantação.',

        project_conclusion: 'Conclusão do projeto',
        conclusion_flexibility: '- Flexibilidade : O site pode ser executado em diferentes sistemas sem necessidade de instalação complexa.',
        conclusion_reliability: '- Confiabilidade : Ambientes reprodutíveis reduzem erros relacionados a dependências ou incompatibilidades.',
        conclusion_scalability: '- Escalabilidade : Possibilidade de implantar o projeto em um servidor na nuvem com orquestração via Kubernetes.',
        conclusion_experience: '- Experiência adquirida : Aprimoramento das habilidades em Docker, CI/CD e gerenciamento de ambientes virtualizados.',


        code_source: '📌 <strong>Código-fonte disponível aqui</strong>:',
        //#endregion

        //#region Keypass
        project_title: 'Criação de um site de gerenciamento de senhas',
        project_presentation: 'Objetivo do Projeto',
        project_description: 'Este projeto tem como objetivo criar uma solução completa de <strong>gerenciamento seguro de senhas</strong>, incluindo um site, uma extensão de navegador e um aplicativo móvel.',

        project_feature_1: '✅ Um <strong>site web</strong> permitindo que os usuários armazenem, gerenciem e organizem suas senhas.',
        project_feature_2: '✅ Uma <strong>extensão de navegador</strong> para salvar automaticamente as senhas.',
        project_feature_3: '✅ Um <strong>aplicativo móvel</strong> para acesso seguro às senhas em qualquer lugar.',

        project_security: 'O objetivo é oferecer uma <strong>interface fluida e segura</strong>, garantindo a confidencialidade dos dados através de <strong>criptografia avançada</strong>.',

        technologies_used: 'Tecnologias e Ferramentas Utilizadas',
        tech_frontend: '🎨 <strong>Front-end</strong>: Vue.js e Bootstrap para uma interface moderna e responsiva.',
        tech_backend: '🛠 <strong>Back-end</strong>: Laravel para gerenciar usuários e proteger interações com o banco de dados.',
        tech_database: '💾 <strong>Banco de Dados</strong>: PostgreSQL, com criptografia de senhas (bcrypt, AES-256).',
        tech_security: '🔒 <strong>Segurança</strong>: Integração de <strong>2FA (Autenticação de Dois Fatores)</strong> e criptografia AES para proteção dos dados.',
        tech_containerization: '📦 <strong>Containerização</strong>: Docker para portabilidade e compatibilidade entre diferentes sistemas.',
        tech_cloud: '☁️ <strong>Implantação na Nuvem</strong>: Azure para hospedagem e gerenciamento dos serviços backend.',

        toggle_competences: 'Mostrar habilidades do projeto',
        hide_competences: 'Ocultar habilidades',

        developed_features: 'Funcionalidades Desenvolvidas',
        feature_1: '🔹<strong> Criação e armazenamento seguro de senhas</strong> com criptografia AES-256.',
        feature_2: '🔹<strong> Gerador de senhas seguras</strong> baseado em critérios personalizáveis.',
        feature_3: '🔹<strong> Extensão de navegador</strong> para salvar e preencher automaticamente as credenciais.',
        feature_4: '🔹<strong> Sincronização entre dispositivos</strong> usando uma API segura.',

        challenges_solutions: 'Desafios e Soluções',
        challenge_1: '✅ <strong>Segurança das senhas</strong>: Implementação de <strong>criptografia AES-256</strong> e armazenamento seguro no banco de dados.',
        challenge_2: '✅ <strong>Desempenho e otimização</strong>: Uso de <strong>caches Redis</strong> para acelerar o acesso aos dados criptografados.',
        challenge_3: '✅ <strong>Confiabilidade e disponibilidade</strong>: Implementação de um <strong>sistema de backup automático</strong> e hospedagem na Azure.',

        technical_skills: 'Habilidades Técnicas',
        frontend: 'Front-end',
        backend: 'Back-end',
        database: 'Banco de Dados',

        project_review: 'Revisão do Projeto',
        project_results: 'Resultados',
        result_1: '- <strong>Flexibilidade</strong>: Compatível com todos os navegadores e acessível em dispositivos móveis e desktops.',
        result_2: '- <strong>Segurança aprimorada</strong>: Integração das melhores práticas em criptografia e autenticação forte.',
        //#endregion

        //#region Earnincall
        project_title: 'Criação de um site para visualizar os Earnings Calls com Angular',
        project_presentation: 'Objetivo do Projeto',
        project_description: 'Este projeto tem como objetivo desenvolver uma plataforma web que permite a investidores e analistas financeiros acompanharem os <strong>earnings calls</strong> das empresas listadas na bolsa de valores. Um <strong>earnings call</strong> é uma teleconferência entre a administração da empresa, analistas, investidores e a mídia, onde são discutidos os resultados financeiros de um trimestre ou ano fiscal.',
        project_goal: 'O objetivo deste site é fornecer uma interface intuitiva e centralizada para consultar esses eventos e facilitar a tomada de decisão em investimentos.',

        technologies_used: 'Tecnologias e Ferramentas Utilizadas',
        tech_frontend: '🎨 <strong>Front-end</strong>: Angular para uma interface de usuário dinâmica e de alto desempenho.',
        tech_api: '📡 <strong>Integração de API</strong>: Conexão a APIs financeiras para obter anúncios de earnings calls em tempo real.',

        toggle_competences: 'Mostrar habilidades do projeto',
        hide_competences: 'Ocultar habilidades',

        developed_features: 'Funcionalidades Desenvolvidas',
        feature_1: '🔹 <strong>Exibição dinâmica de earnings calls</strong> com filtros por empresa, data e setor.',
        feature_2: '🔹 <strong>Integração de APIs financeiras</strong> para recuperar automaticamente os anúncios das empresas listadas.',

        challenges_solutions: 'Desafios e Soluções',
        challenge_1: '✅ <strongOtimização do desempenho no Angular</strong>: Carregamento assíncrono de dados com lazy loading.',
        challenge_2: '✅ <strong>Gerenciamento de chamadas de API</strong>: Implementação de cache para evitar solicitações excessivas a APIs externas.',

        technical_skills: 'Habilidades Técnicas',
        frontend: 'Front-end',

        project_review: 'Revisão do Projeto',
        result_1: '- <strong>Flexibilidade</strong>: O site funciona em diferentes sistemas sem necessidade de instalação complexa.'
        //#endregion
    }
}

const i18n = createI18n({
    locale: localStorage.getItem('locale') || 'fr', // Langue par défaut
    fallbackLocale: 'fr',
    messages
})

export default i18n
