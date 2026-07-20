#!/bin/bash

OUTPUT_DIR="recovered_images"
mkdir -p "$OUTPUT_DIR"

# Шукаємо всі файли в public/images у всій історії
git rev-list --objects --all | \
grep "^.* public/images/" | \
while read -r hash path; do
    # Перевіряємо, чи це файл (blob)
    type=$(git cat-file -t "$hash" 2>/dev/null)
    if [ "$type" = "blob" ]; then
        target="$OUTPUT_DIR/$path"
        mkdir -p "$(dirname "$target")"
        
        if [ ! -f "$target" ]; then
            git cat-file -p "$hash" > "$target"
            echo "✓ $path"
        fi
    fi
done

echo ""
echo "Всі файли з public/images відновлено в $OUTPUT_DIR"