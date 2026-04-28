#!/bin/bash

VAULT="/Users/isantos/Documents/Obsidian/second-brain"
DEST="./content/notes"

rm -rf "$DEST"
mkdir -p "$DEST"

echo "Syncing #publish notes into /notes..."

cd "$VAULT"

find . -type f -name "*.md" | while read file; do
  if grep -q "#publish" "$file"; then
    mkdir -p "$DEST/$(dirname "$file")"
    cp "$file" "$DEST/$file"
  fi
done

echo "Sync complete."
