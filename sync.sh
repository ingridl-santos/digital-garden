#!/bin/bash

VAULT="/Users/isantos/Documents/Obsidian/second-brain"
QUARTZ="/Users/isantos/Documents/Projects/digital-garden-site"
DEST="$QUARTZ/content/notes"

echo "Syncing #publish notes (FLATTENED into graph)..."

rm -rf "$DEST"
mkdir -p "$DEST"

cd "$VAULT" || exit 1

find . -type f -name "*.md" | while read file; do
  if grep -q "#publish" "$file"; then

    # remove leading "./"
    filename=$(basename "$file")

    cp "$file" "$DEST/$filename"

  fi
done

echo "Done (graph mode)."