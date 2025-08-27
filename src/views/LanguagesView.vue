<script setup>
// Vous pouvez ajouter ici de la logique Vue.js si nécessaire
</script>

<template>
    <div class="languages-section">

        <header class="main-header">
            <h1 class="section-title">{{ $t('languages_title') }}</h1>
            <p class="subtitle">Découvrez mes différents loisir</p>
        </header>
        <div class="languages-container">
            <div class="language-card">
                <div class="card-content">
                    <div class="flag-container">
                        <img src="./../../public/picture/languages/Portugal.png" alt="Drapeau du Portugal"
                            class="flag-image">
                    </div>
                    <div class="language-info">
                        <h2 class="language-name">{{ $t('portuguese') }}</h2>
                        <div class="level-container">
                            <span class="level-badge native">{{ $t('portuguese_level') }}</span>
                        </div>
                    </div>
                </div>
                <div class="proficiency-bar">
                    <div class="proficiency-fill native-level"></div>
                </div>
            </div>

            <div class="language-card">
                <div class="card-content">
                    <div class="flag-container">
                        <img src="./../../public/picture/languages/France.png" alt="Drapeau de la France"
                            class="flag-image">
                    </div>
                    <div class="language-info">
                        <h2 class="language-name">{{ $t('french') }}</h2>
                        <div class="level-container">
                            <span class="level-badge advanced">{{ $t('french_level') }}</span>
                        </div>
                    </div>
                </div>
                <div class="proficiency-bar">
                    <div class="proficiency-fill advanced-level"></div>
                </div>
            </div>

            <div class="language-card">
                <div class="card-content">
                    <div class="flag-container">
                        <img src="./../../public/picture/languages/Anglais.png" alt="Drapeau du Royaume-Uni"
                            class="flag-image">
                    </div>
                    <div class="language-info">
                        <h2 class="language-name">{{ $t('english') }}</h2>
                        <div class="level-container">
                            <span class="level-badge intermediate">{{ $t('english_level') }}</span>
                        </div>
                    </div>
                </div>
                <div class="proficiency-bar">
                    <div class="proficiency-fill intermediate-level"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.languages-section {
    padding: 20px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
}

.languages-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;

}

.language-card {
    background: var(--hover-bg-color, #ffffff);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.language-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.language-card:hover::before {
    transform: translateX(0);
}

.language-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-content {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;
}

.flag-container {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.language-card:hover .flag-container {
    transform: rotate(5deg) scale(1.1);
}

.flag-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.language-card:hover .flag-image {
    transform: scale(1.1);
}

.language-info {
    flex: 1;
}

.language-name {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: var(--text-color, #333);
}

.level-container {
    display: flex;
    align-items: center;
}

.level-badge {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.level-badge.native {
    background: linear-gradient(135deg, #11998e, #38ef7d);
}

.level-badge.advanced {
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.level-badge.intermediate {
    background: linear-gradient(135deg, #ffecd2, #fcb69f);
    color: #8b4513;
}

.proficiency-bar {
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.proficiency-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 1s ease-in-out 0.3s;
    position: relative;
}

.proficiency-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shimmer 2s infinite;
}

.native-level {
    width: 100%;
    background: linear-gradient(135deg, #11998e, #38ef7d);
}

.advanced-level {
    width: 85%;
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.intermediate-level {
    width: 70%;
    background: linear-gradient(135deg, #ffecd2, #fcb69f);
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .languages-container {
        grid-template-columns: 1fr;
        padding: 0 15px;
    }

    .section-title {
        font-size: 2rem;
    }

    .language-card {
        padding: 20px;
    }

    .card-content {
        gap: 15px;
    }

    .flag-container {
        width: 50px;
        height: 50px;
    }

    .language-name {
        font-size: 1.2rem;
    }
}

/* Animation d'entrée */
.language-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
}

.language-card:nth-child(1) {
    animation-delay: 0.1s;
}

.language-card:nth-child(2) {
    animation-delay: 0.2s;
}

.language-card:nth-child(3) {
    animation-delay: 0.3s;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mode sombre */
@media (prefers-color-scheme: dark) {
    .language-card {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);
    }

    .proficiency-bar {
        background: rgba(255, 255, 255, 0.1);
    }
}
</style>