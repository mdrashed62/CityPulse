#!/bin/bash

echo "🚀 Starting CityPulse: University Bus Tracker..."

# Function to kill background processes on exit
cleanup() {
    echo -e "\n🛑 Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

# Trap Ctrl+C (SIGINT) and call the cleanup function
trap cleanup SIGINT

# 1. Start Backend
echo "📡 Starting Backend on port 5000..."
cd backend
# We run this in the background but let it print to STDOUT
npm run dev &
BACKEND_PID=$!
cd ..

# 2. Start Frontend
echo "🎨 Starting Frontend on port 3000..."
cd frontend
# We run this in the background but let it print to STDOUT
npm run dev &
FRONTEND_PID=$!
cd ..

echo "✅ Both servers are streaming to this terminal."
echo "⌨️  Press Ctrl+C to stop both servers."

# Wait for background processes to keep the script alive
wait