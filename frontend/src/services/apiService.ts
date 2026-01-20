// API Service
// Frontend: Services
// Handles all REST API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Extend window for Redux store access (if needed)
declare global {
  interface Window {
    __REDUX_STORE__?: any;
  }
}

class ApiService {
  private getAuthToken(): string | null {
    // Get token from Redux store or localStorage
    const state = (window as any).__REDUX_STORE__?.getState();
    return state?.auth?.token || localStorage.getItem('token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getAuthToken();
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  // Authentication
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(data: any) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async changePassword(currentPassword: string, newPassword: string) {
    return this.request('/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  async forgotPassword(email: string) {
    return this.request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, newPassword: string) {
    return this.request('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    });
  }

  // Admin - Users
  async getActiveUsers() {
    return this.request('/admin/users');
  }

  async getPendingUsers() {
    return this.request('/admin/users/pending');
  }

  async approveUser(userId: string) {
    return this.request(`/admin/users/${userId}/approve`, {
      method: 'POST',
    });
  }

  async rejectUser(userId: string) {
    return this.request(`/admin/users/${userId}/reject`, {
      method: 'POST',
    });
  }

  // Admin - Buses
  async createBus(busNumber: string) {
    return this.request('/admin/buses', {
      method: 'POST',
      body: JSON.stringify({ busNumber }),
    });
  }

  async assignBus(busId: string, userProfileId: string, fromLocation: any, toLocation: any) {
    return this.request(`/admin/buses/${busId}/assign`, {
      method: 'POST',
      body: JSON.stringify({
        userProfileId,
        fromLatitude: fromLocation.latitude,
        fromLongitude: fromLocation.longitude,
        toLatitude: toLocation.latitude,
        toLongitude: toLocation.longitude,
      }),
    });
  }

  // Driver - Tracking
  async startTracking(busId: string) {
    return this.request('/driver/tracking/start', {
      method: 'POST',
      body: JSON.stringify({ busId }),
    });
  }

  async stopTracking() {
    return this.request('/driver/tracking/stop', {
      method: 'POST',
    });
  }

  // User - Buses
  async getUserBuses() {
    return this.request('/user/buses');
  }
}

export const apiService = new ApiService();
