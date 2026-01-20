// WebSocket Service
// Frontend: Services
// Handles WebSocket connections and real-time events

import { io, Socket } from 'socket.io-client';
import { WebSocketEvents, BusLocationUpdatePayload, BusLocationBroadcastPayload } from '../types/websocket';

const WS_URL = process.env.REACT_APP_WS_URL || 'http://localhost:3001';

class WebSocketService {
  private socket: Socket | null = null;
  private listeners: Map<string, Function[]> = new Map();

  connect(token: string): void {
    if (this.socket?.connected) {
      return;
    }

    this.socket = io(WS_URL, {
      auth: { token },
      transports: ['websocket'],
    });

    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.emit(WebSocketEvents.CONNECT);
    });

    this.socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
      this.emit(WebSocketEvents.DISCONNECT);
    });

    this.socket.on('error', (error: any) => {
      console.error('WebSocket error:', error);
      this.emit(WebSocketEvents.ERROR, error);
    });

    // Listen for bus location broadcasts
    this.socket.on(WebSocketEvents.BUS_LOCATION_BROADCAST, (payload: BusLocationBroadcastPayload) => {
      this.emit(WebSocketEvents.BUS_LOCATION_BROADCAST, payload);
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Send location update (Driver only)
  sendLocationUpdate(payload: BusLocationUpdatePayload): void {
    if (this.socket?.connected) {
      this.socket.emit(WebSocketEvents.BUS_LOCATION_UPDATE, payload);
    }
  }

  // Subscribe to events
  on(event: string, callback: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  // Unsubscribe from events
  off(event: string, callback?: Function): void {
    if (!callback) {
      this.listeners.delete(event);
      return;
    }

    const callbacks = this.listeners.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  // Emit event to listeners
  private emit(event: string, data?: any): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(data));
    }
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }
}

export const websocketService = new WebSocketService();
