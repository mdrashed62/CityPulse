cat << 'EOF' > stop.sh
#!/bin/bash

echo "🛑 Stopping University Bus Tracker..."

if [ -f .pids ]; then
    while read pid; do
        echo "Killing process $pid..."
        kill $pid 2>/dev/null
    done < .pids
    rm .pids
    echo "✅ All processes stopped."
else
    echo "⚠️ No .pids file found. Is the app running?"
fi
EOF