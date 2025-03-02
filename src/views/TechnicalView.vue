<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const percent = circle.dataset.percent;
        const progress = circle.querySelector('.progress');
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progress.style.strokeDashoffset = offset;
    });
});
</script>

<template>
    <h2 class="section-title">{{ $t('skills_title') }}</h2>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('app_dev') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="70">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/pythonIcone.png" alt="pythonIcone">
                </div>
                <p class="text-base ">{{ $t('python') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="95">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/CShapeIcone.png" alt="CShapeIcone">
                </div>
                <p class="text-base ">{{ $t('csharp') }}</p>
            </div>
        </div>
    </div>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('app_dev') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="40">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/DartIcone.png" alt="Dart">
                </div>
                <p class="text-base ">{{ $t('dart') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="50">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/reactIcone.svg.png" alt="React Native">
                </div>
                <p class="text-base ">{{ $t('react_native') }}</p>
            </div>
        </div>
        <h2 class="degree-title">{{ $t('frameworks') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="95">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/EntityFrameworkCore.png" alt="Entity Framework">
                </div>
                <p class="text-base ">{{ $t('entity_framework') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="70">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/moq.png" alt="Moq">
                </div>
                <p class="text-base ">{{ $t('moq') }}</p>
            </div>
        </div>
    </div>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('api_creation') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="90">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/ASPIcone.png" alt="ASP.NET">
                </div>
                <p class="text-base ">{{ $t('aspnet') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="90">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/nodeJsIncone.png" alt="Node.js">
                </div>
                <p class="text-base ">{{ $t('nodejs') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="90">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/ExpressIcone.png" alt="ExpressIcone.js">
                </div>
                <p class="text-base ">{{ $t('express') }}</p>
            </div>
        </div>
    </div>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('web_design') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="90">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/HTMLIcone.png" alt="HTML">
                </div>
                <p class="text-base ">{{ $t('html') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/CssIcone.png" alt="CSS">
                </div>
                <p class="text-base ">{{ $t('css') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/javascriptIcone.png" alt="JavaScript">
                </div>
                <p class="text-base ">{{ $t('javascript') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="60">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/PHPIcone.png" alt="PHP">
                </div>
                <p class="text-base ">{{ $t('php') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="60">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/three-js.png" alt="Three.js">
                </div>
                <p class="text-base ">{{ $t('threejs') }}</p>
            </div>
        </div>
    </div>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('frameworks') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/laravelIcone.png" alt="Laravel">
                </div>
                <p class="text-base ">{{ $t('laravel') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="90">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/vueIcone.png" alt="Vue.js">
                </div>
                <p class="text-base ">{{ $t('vuejs') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="50">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/Pinialogo.png" alt="Pinia">
                </div>
                <p class="text-base ">{{ $t('pinia') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/blazorIcone.webp" alt="Blazor">
                </div>
                <p class="text-base ">{{ $t('blazor') }}</p>
            </div>
        </div>
    </div>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('rdbms_admin') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/SqlServeurIcone.png" alt="SQL Server">
                </div>
                <p class="text-base ">{{ $t('sqlserver') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/PostgresqlIcone.png" alt="PostgreSQL">
                </div>
                <p class="text-base ">{{ $t('postgresql') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/MySQLIcone.png" alt="MySQL">
                </div>
                <p class="text-base ">{{ $t('mysql') }}</p>
            </div>
        </div>
        <h2 class="degree-title">{{ $t('nosql_admin') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="60">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/mongodbIcones.svg" alt="MongoDB">
                </div>
                <p class="text-base ">{{ $t('mongodb') }}</p>
            </div>
        </div>
    </div>
    <div class="skills-container">
        <h2 class="degree-title">{{ $t('tools') }}</h2>
        <div class="flex">
            <div class="skill">
                <div class="progress-circle" data-percent="100">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/CodeIcone.png" alt="VS Code">
                </div>
                <p class="text-base ">{{ $t('vscode') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="50">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/VisualStudioIcone.png" alt="Visual Studio">
                </div>
                <p class="text-base ">{{ $t('visualstudio') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="60">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/AzureIcone.png" alt="Azure">
                </div>
                <p class="text-base ">{{ $t('azure') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="60">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/Azure Dev Ops.webp" alt="Azure DevOps">
                </div>
                <p class="text-base ">{{ $t('azure_devops') }}</p>
            </div>
            <div class="skill">
                <div class="progress-circle" data-percent="80">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/GitIcone.png" alt="Git">
                </div>
                <p class="text-base ">{{ $t('git') }}</p>
            </div>
        </div>
    </div>
</template>

<style>
/* ----------------- SECTION COMPÉTENCES ----------------- */
.skills-section {
    margin: 60px 0;
    opacity: 0;
    /* Invisible au départ */
    transform: translateY(30px);
    /* Décalage vers le bas */
    transition: all 0.8s ease-in-out;
}

/* Apparition lors du défilement */
.skills-section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Conteneur des cercles */
.skills-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    background-color: var(--sidebar-bg-color);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 25px var(--box-shadow);
    /* Ombre subtile */
    transition: all 0.3s ease;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
}

/* ----------------- CERCLAGE PROGRESSIF ----------------- */
.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.progress-circle {
    position: relative;
    width: 110px;
    height: 110px;
    box-shadow: 0 4px 15px var(--box-shadow);
    border-radius: 50%;
    background-color: white;
    transition: all 0.3s ease;
}

.progress-circle svg {
    width: 110px;
    height: 110px;
    transform: rotate(-90deg);
}

circle {
    fill: none;
    stroke-width: 6;
    stroke: rgba(0, 0, 0, 0.1);
    /* Fond du cercle */
    cx: 55;
    cy: 55;
    r: 48;
}

.progress {
    stroke: var(--primary-color);
    stroke-dasharray: 301;
    /* Périmètre du cercle (2 * π * r) */
    stroke-dashoffset: 301;
    transition: stroke-dashoffset 1.5s ease;
}

/* Effet d'éclairement bleu */
.progress-circle::before {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    top: -20%;
    left: -20%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 119, 255, 0.2) 10%, transparent 70%);
    z-index: -1;
    transition: all 0.3s ease;
}

/* Survol avec éclair bleu intense */
.progress-circle:hover::before {
    background: radial-gradient(circle, rgba(0, 119, 255, 0.4) 20%, transparent 80%);
    box-shadow: 0 0 30px var(--primary-color);
}

/* Image centrée */
.progress-circle img {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Mode sombre - Éclairement rouge */
.dark-mode .progress-circle::before {
    background: radial-gradient(circle, rgba(255, 0, 0, 0.15) 10%, transparent 70%);
}

.dark-mode .progress-circle:hover::before {
    background: radial-gradient(circle, rgba(255, 0, 0, 0.4) 20%, transparent 80%);
}

/* Texte sous les cercles */
.name-technical {
    margin-top: 15px;
    font-weight: bold;
    color: var(--text-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .skills-container {
        width: 90%;
        padding: 20px;
    }

    .progress-circle {
        width: 90px;
        height: 90px;
    }

    .progress-circle img {
        width: 45px;
        height: 45px;
    }
}
</style>
