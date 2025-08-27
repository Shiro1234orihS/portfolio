<script setup>
// Vous pouvez ajouter ici de la logique Vue.js si nécessaire
</script>

<template>
    <div class="main-content">
        <div class="experience-section">
            <!-- En-tête principal -->
            <header class="main-header">
                <h1 class="section-title">Expérience Professionnelle</h1>
                <p class="subtitle">Découvrez mes différents loisir</p>
            </header>

            <div class="timeline-container">
                <div class="timeline-line"></div>

                <div class="experience-item" data-year="2025">
                    <div class="timeline-marker">
                        <div class="marker-dot current"></div>
                        <div class="marker-pulse"></div>
                        <div class="year-badge">2025</div>
                    </div>
                    <div class="experience-card">
                        <div class="card-header">
                            <div class="company-logo">
                                <img src="./../../public/picture/experiancePro/ParkerMeggitt.png"
                                    alt="Logo ParkerMeggit" class="logo-image">
                            </div>
                            <div class="card-content">
                                <h2 class="position-title">Stage de troisiéme Année - BUT Informatique</h2>
                                <div class="company-name">Parker Meggitt</div>
                                <div class="experience-meta">
                                    <div class="meta-item">
                                        <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>14 semaines</span>
                                    </div>
                                    <div class="meta-item">
                                        <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9a1 1 0 000 2v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 100-2H4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>Développeur full stack</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mission-section">
                                <h4 class="mission-title">Missions principales</h4>
                                <p class="mission-description">
                                    Création de processus de vérification des bases de données à l'aide de Power
                                    Automate,
                                    optimisation des workflows et amélioration des outils internes.
                                </p>
                            </div>
                            <div class="status-badge current-work">
                                <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>En cours</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="experience-item" data-year="2024">
                    <div class="timeline-marker">
                        <div class="marker-dot completed"></div>
                        <div class="year-badge">2024</div>
                    </div>
                    <div class="experience-card">
                        <div class="card-header">
                            <div class="company-logo">
                                <img src="./../../public/picture/experiancePro/ATMB.png"
                                    alt="Logo Autoroutes et Tunnel du Mont Blanc (ATMB)" class="logo-image">
                            </div>
                            <div class="card-content">
                                <h2 class="position-title">Stage de Deuxième Année - BUT Informatique</h2>
                                <div class="company-name">Autoroutes et Tunnel du Mont Blanc (ATMB)</div>
                                <div class="experience-meta">
                                    <div class="meta-item">
                                        <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>12 semaines</span>
                                    </div>
                                    <div class="meta-item">
                                        <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9a1 1 0 000 2v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 100-2H4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>Chargé de Qualité Système d'Information</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mission-section">
                                <h4 class="mission-title">Missions principales</h4>
                                <p class="mission-description">
                                    Création de processus de vérification des bases de données à l'aide de Power
                                    Automate,
                                    optimisation des workflows et amélioration des outils internes.
                                </p>
                            </div>
                            <div class="status-badge completed-work">
                                <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Terminé</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="experience-item" data-year="2023">
                    <div class="timeline-marker">
                        <div class="marker-dot completed"></div>
                        <div class="year-badge">2023</div>
                    </div>
                    <div class="experience-card">
                        <div class="card-header">
                            <div class="company-logo">
                                <img src="./../../public/picture/experiancePro/Decremps.png" alt="Logo Decremps BTP"
                                    class="logo-image">
                            </div>
                            <div class="card-content">
                                <h2 class="position-title">Job d'Été - Aide Maçon</h2>
                                <div class="company-name">Decremps BTP</div>
                                <div class="experience-meta">
                                    <div class="meta-item">
                                        <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>12 semaines</span>
                                    </div>
                                    <div class="meta-item">
                                        <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9a1 1 0 000 2v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 100-2H4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>Aide Maçon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mission-section">
                                <h4 class="mission-title">Missions principales</h4>
                                <p class="mission-description">
                                    Assistance dans les travaux de maçonnerie, préparation des chantiers,
                                    manipulation des matériaux de construction et respect des normes de sécurité.
                                </p>
                            </div>
                            <div class="status-badge completed-work">
                                <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>Terminé</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
    padding: 20px;
}

.experience-section {
    position: relative;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
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

.timeline-container {
    position: relative;
    padding: 20px 0;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #667eea, #764ba2);
    transform: translateX(-50%);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

.experience-item {
    position: relative;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: slideInTimeline 0.8s ease-out forwards;
}

.experience-item:nth-child(2) {
    animation-delay: 0.2s;
}

.experience-item:nth-child(3) {
    animation-delay: 0.4s;
}

.experience-item:nth-child(4) {
    animation-delay: 0.6s;
}

.experience-item:nth-child(odd) {
    justify-content: flex-start;
}

.experience-item:nth-child(even) {
    justify-content: flex-end;
}

.timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.marker-dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    transition: all 0.3s ease;
}

.marker-dot.current {
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}

.marker-dot.completed {
    background: linear-gradient(135deg, #11998e, #38ef7d);
    box-shadow: 0 4px 15px rgba(17, 153, 142, 0.3);
}

.marker-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(102, 126, 234, 0.3);
    animation: pulse 2s infinite;
}

.year-badge {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    white-space: nowrap;
}

.experience-card {
    background: var(--hover-bg-color, #ffffff);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    width: 45%;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
}

.experience-card::before {
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

.experience-card:hover::before {
    transform: translateX(0);
}

.experience-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 25px;
}

.company-logo {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
    flex-shrink: 0;
    background: white;
    padding: 5px;
}

.experience-card:hover .company-logo {
    transform: rotate(-2deg) scale(1.05);
}

.logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.card-content {
    flex: 1;
    min-width: 0;
}

.position-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: var(--text-color, #333);
    line-height: 1.3;
}

.company-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #667eea;
    margin-bottom: 15px;
}

.experience-meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    font-size: 0.9rem;
}

.meta-icon {
    width: 16px;
    height: 16px;
    color: #667eea;
    flex-shrink: 0;
}

.card-body {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 20px;
}

.mission-section {
    margin-bottom: 20px;
}

.mission-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color, #333);
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.mission-title::before {
    content: '';
    width: 4px;
    height: 16px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
}

.mission-description {
    line-height: 1.7;
    color: var(--text-color, #555);
    margin: 0;
    font-size: 0.95rem;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 25px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
}

.status-badge.current-work {
    background: linear-gradient(135deg, #667eea, #764ba2);
    animation: currentGlow 2s ease-in-out infinite alternate;
}

.status-badge.completed-work {
    background: linear-gradient(135deg, #11998e, #38ef7d);
}

.badge-icon {
    width: 16px;
    height: 16px;
}

@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -50%) scale(2.5);
        opacity: 0;
    }
}

@keyframes currentGlow {
    from {
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        transform: scale(1);
    }

    to {
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        transform: scale(1.02);
    }
}

@keyframes slideInTimeline {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 968px) {
    .timeline-line {
        left: 40px;
    }

    .timeline-marker {
        left: 40px;
    }

    .experience-item {
        justify-content: flex-start !important;
        padding-left: 100px;
    }

    .experience-card {
        width: calc(100% - 100px);
        max-width: none;
    }
}

@media (max-width: 768px) {
    .timeline-line {
        left: 30px;
    }

    .timeline-marker {
        left: 30px;
    }

    .experience-item {
        padding-left: 80px;
    }

    .experience-card {
        width: calc(100% - 80px);
        padding: 25px;
    }

    .section-title {
        font-size: 2rem;
    }

    .card-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 15px;
    }

    .company-logo {
        width: 70px;
        height: 70px;
    }

    .position-title {
        font-size: 1.2rem;
    }

    .experience-meta {
        align-items: center;
    }
}

@media (max-width: 480px) {
    .main-content {
        padding: 15px;
    }

    .timeline-line {
        left: 20px;
    }

    .timeline-marker {
        left: 20px;
    }

    .experience-item {
        padding-left: 60px;
    }

    .experience-card {
        width: calc(100% - 60px);
        padding: 20px;
    }

    .year-badge {
        font-size: 0.7rem;
        padding: 4px 8px;
    }
}

/* Mode sombre */
@media (prefers-color-scheme: dark) {
    .experience-card {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);
    }

    .card-body {
        border-top-color: rgba(255, 255, 255, 0.1);
    }

    .marker-dot {
        border-color: rgba(255, 255, 255, 0.2);
    }

    .company-logo {
        background: rgba(255, 255, 255, 0.1);
    }
}
</style>