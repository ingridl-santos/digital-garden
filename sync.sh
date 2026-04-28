#!/bin/bash

VAULT="/Users/isantos/Documents/Obsidian/second-brain"
DEST="./content"

rm -rf "$DEST"
mkdir "$DEST"

echo "Syncing #publish notes..."

# Find all notes containing #publish
grep -rl "#publish" "$VAULT" | while read file; do
  cp "$file" "$DEST/"
done

echo "Sync complete."
