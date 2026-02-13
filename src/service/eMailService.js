import axios from 'axios';

class EmailService {
    constructor() {
        this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/';
        this.token = import.meta.env.VITE_API_TOKEN || '';
    }

    async sendEmail(objet, content, email) {
        try {
            const response = await axios.get(`${this.baseUrl}api/email/`, {
                params: {
                    email: email,
                    content: content,
                    objet: objet
                }
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email :", error);
            throw error;
        }
    }
}

export default new EmailService(); // Export d'une instance unique
