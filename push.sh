#!/usr/bin/env bash
set -e

echo "=== Initializing PulseGuard Signoff Tracker for jthatcher87 ==="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: git is not installed."
    exit 1
fi

git init
git add .
git commit -m "feat: initial commit PulseGuard Signoff Portal & Governance Tracker"
git branch -M main

# If using gh cli to automatically create the repo on GitHub:
if command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) detected. Creating repository on GitHub under jthatcher87..."
    gh repo create jthatcher87/pulseguard_signof --public --source=. --remote=origin --push || {
        echo "Repository might already exist, falling back to standard remote push..."
        git remote add origin https://github.com/jthatcher87/pulseguard_signof.git 2>/dev/null || true
        git push -u origin main
    }
else
    echo "Adding remote https://github.com/jthatcher87/pulseguard_signof.git..."
    git remote add origin https://github.com/jthatcher87/pulseguard_signof.git 2>/dev/null || true
    git push -u origin main
fi

echo ""
echo "=== Successfully pushed to https://github.com/jthatcher87/pulseguard_signof ==="
echo "Live GitHub Pages URL will be: https://jthatcher87.github.io/pulseguard_signof/"
