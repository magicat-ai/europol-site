#!/bin/bash

# Script per completare il push su GitHub
# Esegui questo script nel terminale: bash push-to-github.sh

export PATH="$HOME/bin:$PATH"

echo "🚀 Configurazione GitHub CLI e Push"
echo ""

# Verifica se GitHub CLI è installato
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI non trovato. Assicurati che ~/bin sia nel PATH"
    exit 1
fi

# Verifica autenticazione
if ! gh auth status &> /dev/null; then
    echo "📝 Autenticazione GitHub richiesta..."
    echo "   Si aprirà il browser per autenticarti"
    echo ""
    gh auth login --web
    echo ""
fi

# Verifica autenticazione di nuovo
if gh auth status &> /dev/null; then
    echo "✅ Autenticato con GitHub!"
    echo ""
    echo "📤 Eseguendo push su GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Push completato con successo!"
        echo "🌐 Il sito sarà disponibile su GitHub Pages dopo la configurazione"
        echo ""
        echo "Prossimi passi:"
        echo "1. Vai su https://github.com/magicat-ai/europol-site/settings/pages"
        echo "2. Source: 'GitHub Actions'"
        echo "3. Salva"
    else
        echo ""
        echo "❌ Errore durante il push. Verifica i log sopra."
    fi
else
    echo "❌ Autenticazione fallita. Riprova."
    exit 1
fi

