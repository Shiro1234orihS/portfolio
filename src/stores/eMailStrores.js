import { defineStore } from 'pinia';
import emailService from '@/service/eMailService';

export const useEmailStore = defineStore('Email', () => {
    async function sendEmail(objet, content, email) {
        try {
            await emailService.sendEmail(objet, content, email);
        } catch (error) {
            console.error("Erreur dans le store:", error);
        }
    }

    return { sendEmail };
});
