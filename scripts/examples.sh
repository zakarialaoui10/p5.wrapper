#!/bin/bash

# Usage: ./script.sh <command> <framework>
# Example: ./script.sh dev van → cd examples/van && npm run dev

COMMAND=$1
FRAMEWORK=$2

if [ -z "$COMMAND" ] || [ -z "$FRAMEWORK" ]; then
  echo "Usage: $0 <command> <framework>"
  echo "Example: $0 dev react"
  exit 1
fi

TARGET_DIR="examples/$FRAMEWORK"

if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Framework '$FRAMEWORK' does not exist in examples/"
  exit 1
fi

cd "$TARGET_DIR" || exit
npm run "$COMMAND"
