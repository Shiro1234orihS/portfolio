<script setup></script>

<template>
  <div class="education-section">
    <!-- En-tête principal -->
    <header class="main-header">
      <h1 class="section-title">{{ $t("education_title") }}</h1>
      <p class="subtitle">Découvrez mes différents loisir</p>
    </header>

    <div class="timeline-container">
      <div class="timeline-line"></div>

      <div class="education-item" data-year="2023">
        <div class="timeline-marker">
          <div class="marker-dot"></div>
          <div class="marker-pulse"></div>
        </div>
        <div class="education-card">
          <div class="card-header">
            <div class="institution-logo">
              <img
                src="./../../public/picture/education/IUT.png"
                alt="Université Savoie Mont Blanc / IUT Annecy"
                class="logo-image"
              />
            </div>
            <div class="card-content">
              <h2 class="degree-title">{{ $t("but_title") }}</h2>
              <div class="education-meta">
                <div class="meta-item">
                  <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="location">{{ $t("but_location") }}</span>
                </div>
                <div class="meta-item">
                  <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="date">{{ $t("but_date") }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="description" v-html="$t('bac_description')"></p>
            <div class="achievement-badge completed">
              <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Diplômé</span>
            </div>
          </div>
        </div>
      </div>

      <div class="education-item" data-year="2021">
        <div class="timeline-marker">
          <div class="marker-dot completed"></div>
        </div>
        <div class="education-card">
          <div class="card-header">
            <div class="institution-logo">
              <img
                src="./../../public/picture/education/lycee-charles-poncet.jpg"
                alt="Lycée des Métiers Charles Poncet"
                class="logo-image"
              />
            </div>
            <div class="card-content">
              <h2 class="degree-title">{{ $t("bac_title") }}</h2>
              <div class="education-meta">
                <div class="meta-item">
                  <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="location">{{ $t("bac_location") }}</span>
                </div>
                <div class="meta-item">
                  <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="date">{{ $t("bac_date") }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="description" v-html="$t('bac_description')"></p>
            <div class="achievement-badge completed">
              <svg class="badge-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Diplômé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-section {
  position: relative;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  font-weight: 700;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.section-title::after {
  content: "";
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
  width: 3px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  transform: translateX(-50%);
  border-radius: 2px;
}

.education-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: slideInTimeline 0.8s ease-out forwards;
}

.education-item:nth-child(2) {
  animation-delay: 0.2s;
}

.education-item:nth-child(3) {
  animation-delay: 0.4s;
}

.education-item:nth-child(odd) {
  justify-content: flex-start;
}

.education-item:nth-child(even) {
  justify-content: flex-end;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.marker-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: all 0.3s ease;
}

.marker-dot.completed {
  background: linear-gradient(135deg, #11998e, #38ef7d);
}

.marker-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.3);
  animation: pulse 2s infinite;
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

.education-card {
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

.education-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0px;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.education-card:hover::before {
  transform: translateX(0);
}

.education-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

.institution-logo {
  width: 70px;
  height: 70px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.education-card:hover .institution-logo {
  transform: rotate(-3deg) scale(1.05);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.education-card:hover .logo-image {
  transform: scale(1.1);
}

.card-content {
  flex: 1;
}

.degree-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: var(--text-color, #333);
  line-height: 1.3;
}

.education-meta {
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

.description {
  line-height: 1.7;
  color: var(--text-color, #555);
  margin: 0 0 15px 0;
  font-size: 0.95rem;
}

.achievement-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.achievement-badge.current {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  animation: glow 2s ease-in-out infinite alternate;
}

.achievement-badge.completed {
  background: linear-gradient(135deg, #11998e, #38ef7d);
  color: white;
}

.badge-icon {
  width: 14px;
  height: 14px;
}

@keyframes glow {
  from {
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }

  to {
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.6);
  }
}

@keyframes slideInTimeline {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline-line {
    left: 30px;
  }

  .timeline-marker {
    left: 30px;
  }

  .education-item {
    justify-content: flex-start !important;
    padding-left: 70px;
  }

  .education-card {
    width: 100%;
    max-width: none;
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

  .institution-logo {
    width: 60px;
    height: 60px;
  }

  .degree-title {
    font-size: 1.2rem;
  }

  .education-meta {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .education-card {
    padding: 20px;
  }

  .timeline-line {
    left: 20px;
  }

  .timeline-marker {
    left: 20px;
  }

  .education-item {
    padding-left: 50px;
  }
}

/* Mode sombre */
@media (prefers-color-scheme: dark) {
  .education-card {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .card-body {
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  .marker-dot {
    border-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
