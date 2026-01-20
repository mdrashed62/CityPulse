#!/bin/bash

echo "🚀 Starting University Bus Tracker..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Start Backend
echo "Starting Backend on port 5000..."
cd backend
npm run dev > ../logs/backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Start Frontend
echo "Starting Frontend on port 3000..."
cd frontend
npm run dev > ../logs/frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Save PIDs to a hidden file
echo $BACKEND_PID > .pids
echo $FRONTEND_PID >> .pids

echo "✅ Systems are running!"
echo "📄 Backend logs: tail -f logs/backend.log"
echo "📄 Frontend logs: tail -f logs/frontend.log"
