<script setup>
import { onMounted, ref } from 'vue';

const skillsVisible = ref(false);

onMounted(() => {
    // Observer for scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Trigger circle animations with staggered delay
                    const circles = entry.target.querySelectorAll('.progress-circle');
                    circles.forEach((circle, index) => {
                        setTimeout(() => {
                            animateCircle(circle);
                        }, index * 150);
                    });
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe all skill containers
    const containers = document.querySelectorAll('.skills-container');
    containers.forEach(container => observer.observe(container));

    // Animate individual circle
    function animateCircle(circle) {
        const percent = circle.dataset.percent;
        const progress = circle.querySelector('.progress');
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        // Add animation class
        circle.classList.add('circle-animate');

        // Animate stroke
        setTimeout(() => {
            progress.style.strokeDashoffset = offset;
        }, 100);

        // Counter animation
        const counter = circle.querySelector('.percentage-text');
        if (counter) {
            animateCounter(counter, percent);
        }
    }

    // Animate percentage counter
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 60; // 60 frames for smooth animation
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '%';
        }, 16); // ~60fps
    }
});
</script>

<template>
    <div class="skills-wrapper">
        <h2 class="section-title">{{ $t('skills_title') }}</h2>

        <!-- Programming Languages -->
        <div class="skills-container" data-category="programming">
            <div class="category-header">
                <div class="category-icon">💻</div>
                <h2 class="degree-title">{{ $t('app_dev') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="70">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/pythonIcone.png" alt="pythonIcone">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('python') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="95">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/CShapeIcone.png" alt="CShapeIcone">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('csharp') }}</p>
                </div>
            </div>
        </div>

        <!-- Mobile Development -->
        <div class="skills-container" data-category="mobile">
            <div class="category-header">
                <div class="category-icon">📱</div>
                <h2 class="degree-title">{{ $t('app_dev') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="40">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/DartIcone.png" alt="Dart">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('dart') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="50">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/reactIcone.svg.png" alt="React Native">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('react_native') }}</p>
                </div>
            </div>
        </div>

        <!-- Backend Frameworks -->
        <div class="skills-container" data-category="backend">
            <div class="category-header">
                <div class="category-icon">⚙️</div>
                <h2 class="degree-title">{{ $t('frameworks') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="95">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/EntityFrameworkCore.png" alt="Entity Framework">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('entity_framework') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="70">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/moq.png" alt="Moq">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('moq') }}</p>
                </div>
            </div>
        </div>

        <!-- API Development -->
        <div class="skills-container" data-category="api">
            <div class="category-header">
                <div class="category-icon">🔗</div>
                <h2 class="degree-title">{{ $t('api_creation') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/ASPIcone.png" alt="ASP.NET">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('aspnet') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/nodeJsIncone.png" alt="Node.js">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('nodejs') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/ExpressIcone.png" alt="ExpressIcone.js">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('express') }}</p>
                </div>
            </div>
        </div>

        <!-- Web Technologies -->
        <div class="skills-container" data-category="web">
            <div class="category-header">
                <div class="category-icon">🌐</div>
                <h2 class="degree-title">{{ $t('web_design') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/HTMLIcone.png" alt="HTML">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('html') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/CssIcone.png" alt="CSS">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('css') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/javascriptIcone.png" alt="JavaScript">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('javascript') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="60">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/PHPIcone.png" alt="PHP">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('php') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="60">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/three-js.png" alt="Three.js">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('threejs') }}</p>
                </div>
            </div>
        </div>

        <!-- Frontend Frameworks -->
        <div class="skills-container" data-category="frontend">
            <div class="category-header">
                <div class="category-icon">🎨</div>
                <h2 class="degree-title">{{ $t('frameworks') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/laravelIcone.png" alt="Laravel">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('laravel') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/vueIcone.png" alt="Vue.js">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('vuejs') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="50">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/Pinialogo.png" alt="Pinia">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('pinia') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/blazorIcone.webp" alt="Blazor">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('blazor') }}</p>
                </div>
            </div>
        </div>

        <!-- Databases -->
        <div class="skills-container" data-category="database">
            <div class="category-header">
                <div class="category-icon">🗄️</div>
                <h2 class="degree-title">{{ $t('rdbms_admin') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/SqlServeurIcone.png" alt="SQL Server">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('sqlserver') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/PostgresqlIcone.png" alt="PostgreSQL">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('postgresql') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/MySQLIcone.png" alt="MySQL">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('mysql') }}</p>
                </div>
            </div>

            <div class="subcategory">
                <h3 class="subcategory-title">{{ $t('nosql_admin') }}</h3>
                <div class="skills-grid">
                    <div class="skill">
                        <div class="progress-circle" data-percent="60">
                            <svg>
                                <circle cx="55" cy="55" r="45"></circle>
                                <circle class="progress" cx="55" cy="55" r="45"></circle>
                            </svg>
                            <img src="./../../public/picture/technical/mongodbIcones.svg" alt="MongoDB">
                            <div class="percentage-text">0%</div>
                        </div>
                        <p class="skill-name">{{ $t('mongodb') }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tools -->
        <div class="skills-container" data-category="tools">
            <div class="category-header">
                <div class="category-icon">🛠️</div>
                <h2 class="degree-title">{{ $t('tools') }}</h2>
            </div>
            <div class="skills-grid">
                <div class="skill">
                    <div class="progress-circle" data-percent="100">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/CodeIcone.png" alt="VS Code">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('vscode') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="50">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/VisualStudioIcone.png" alt="Visual Studio">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('visualstudio') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="60">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/AzureIcone.png" alt="Azure">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('azure') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="60">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/Azure Dev Ops.webp" alt="Azure DevOps">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('azure_devops') }}</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="55" cy="55" r="45"></circle>
                            <circle class="progress" cx="55" cy="55" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/GitIcone.png" alt="Git">
                        <div class="percentage-text">0%</div>
                    </div>
                    <p class="skill-name">{{ $t('git') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* ----------------- SKILLS WRAPPER ----------------- */
.skills-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}



/* ----------------- SKILLS CONTAINER ----------------- */
.skills-container {
    background: linear-gradient(135deg, var(--sidebar-bg-color) 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 20px 40px var(--box-shadow);
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.skills-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.skills-container:hover::before {
    opacity: 1;
}

.skills-container.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* ----------------- CATEGORY HEADER ----------------- */
.category-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1rem;
}

.category-icon {
    font-size: 2rem;
    padding: 0.5rem;
    background: linear-gradient(135deg, var(--primary-color), #4f46e5);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.degree-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
}

/* ----------------- SKILLS GRID ----------------- */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    justify-items: center;
}

/* ----------------- SKILL ITEM ----------------- */
.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
}

.skill:hover {
    transform: translateY(-10px);
}

/* ----------------- PROGRESS CIRCLE ----------------- */
.progress-circle {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1));
    box-shadow:
        0 10px 25px var(--box-shadow),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: scale(0.8);
}

.progress-circle.circle-animate {
    opacity: 1;
    transform: scale(1);
}

.progress-circle:hover {
    transform: scale(1.05);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.2),
        0 0 20px var(--primary-color);
}

.progress-circle svg {
    width: 120px;
    height: 120px;
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    left: 0;
}

circle {
    fill: none;
    stroke-width: 4;
    cx: 60;
    cy: 60;
    r: 45;
}

circle:first-child {
    stroke: rgba(0, 0, 0, 0.1);
}

.dark-mode circle:first-child {
    stroke: rgba(255, 255, 255, 0.1);
}

.progress {
    stroke: var(--primary-color);
    stroke-dasharray: 283;
    /* 2 * π * 45 */
    stroke-dashoffset: 283;
    transition: stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1);
    stroke-linecap: round;
    filter: drop-shadow(0 0 4px var(--primary-color));
}

/* ----------------- SKILL IMAGE ----------------- */
.progress-circle img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.progress-circle:hover img {
    transform: translate(-50%, -50%) scale(1.1);
}

/* ----------------- PERCENTAGE TEXT ----------------- */
.percentage-text {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--primary-color);
    background: rgba(255, 255, 255, 0.9);
    padding: 2px 8px;
    border-radius: 10px;
    border: 1px solid var(--primary-color);
    z-index: 3;
}

.dark-mode .percentage-text {
    background: rgba(0, 0, 0, 0.8);
    color: var(--primary-color);
}

/* ----------------- SKILL NAME ----------------- */
.skill-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-color);
    text-align: center;
    margin: 0;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.skill:hover .skill-name {
    opacity: 1;
}

/* ----------------- SUBCATEGORY ----------------- */
.subcategory {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.subcategory-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    text-align: center;
    margin-bottom: 1.5rem;
    opacity: 0.8;
}

/* ----------------- RESPONSIVE DESIGN ----------------- */
@media (max-width: 768px) {
    .skills-wrapper {
        padding: 1rem;
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .skills-container {
        padding: 1.5rem;
        border-radius: 15px;
    }

    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1.5rem;
    }

    .progress-circle {
        width: 100px;
        height: 100px;
    }

    .progress-circle svg {
        width: 100px;
        height: 100px;
    }

    .progress-circle img {
        width: 40px;
        height: 40px;
    }

    .category-header {
        flex-direction: column;
        gap: 0.5rem;
    }

    .degree-title {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .progress-circle {
        width: 90px;
        height: 90px;
    }

    .progress-circle svg {
        width: 90px;
        height: 90px;
    }

    /* circle {
        r: 35 */
}
</style>