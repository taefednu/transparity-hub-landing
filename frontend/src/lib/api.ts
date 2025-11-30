// API configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export const api = {
  async healthCheck(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_URL}/api/health`);
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      return { error: 'Failed to connect to server' };
    }
  },

  async submitContact(data: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error('Contact form submission failed:', error);
      return { error: 'Не удалось отправить сообщение. Попробуйте позже.' };
    }
  },

  async getInfo(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_URL}/api/info`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch info:', error);
      return { error: 'Failed to fetch info' };
    }
  },
};

