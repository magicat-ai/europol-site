export interface ServiceCTA {
    icon: string;
    title: string;
    description: string;
    link: string;
}

export const services: Record<string, { title: string; items: ServiceCTA[] }> = {
    '/investigazioni-private/': {
        title: 'Tipi di Investigazioni Private',
        items: [
            {
                icon: '💍',
                title: 'Pre-Matrimoniali',
                description: 'Informazioni sul partner prima del matrimonio',
                link: 'investigazioni-private/investigazioni-pre-matrimoniali/'
            },
            {
                icon: '🔍',
                title: 'Infedeltà Coniugale',
                description: 'Indagini su tradimento e infedeltà',
                link: 'investigazioni-private/investigazioni-infedelta-coniugale-tradimento/'
            },
            {
                icon: '⚖️',
                title: 'Separazione e Divorzio',
                description: 'Prove per separazione e divorzio',
                link: 'investigazioni-private/investigazioni-separazione-divorzio/'
            },
            {
                icon: '👶',
                title: 'Affidamento Minori',
                description: 'Tutela e controllo dei minori',
                link: 'investigazioni-private/investigazioni-affidamento-minori/'
            },
            {
                icon: '🛡️',
                title: 'Sicurezza Personale',
                description: 'Sicurezza personale e familiare',
                link: 'investigazioni-private/investigazioni-sicurezza-personale-familiare/'
            }
        ]
    },
    '/investigazioni-aziendali/': {
        title: 'Tipi di Investigazioni Aziendali',
        items: [
            {
                icon: '👔',
                title: 'Pre-Assunzione',
                description: 'Verifica referenze e informazioni',
                link: 'investigazioni-aziendali/investigazioni-pre-assunzione/'
            },
            {
                icon: '📋',
                title: 'Licenziamento Giusta Causa',
                description: 'Prove per licenziamento',
                link: 'investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/'
            },
            {
                icon: '⚔️',
                title: 'Concorrenza Sleale',
                description: 'Indagini su concorrenza illegale',
                link: 'investigazioni-aziendali/investigazioni-concorrenza-sleale/'
            },
            {
                icon: '📉',
                title: 'Ammanchi e Differenze',
                description: 'Individuazione responsabili ammanchi',
                link: 'investigazioni-aziendali/investigazioni-ammanchi-differenze-inventariali/'
            }
        ]
    },
    '/intelligence-e-servizi-speciali/': {
        title: 'Servizi di Intelligence & Specializzati',
        items: [
            {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Intelligence strategica per decisioni aziendali informate',
                link: 'intelligence-e-servizi-speciali/business-intelligence/'
            },
            {
                icon: '₿',
                title: 'Tracciamento Crypto',
                description: 'Investigazioni su truffe crypto e tracciamento blockchain',
                link: 'intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/'
            },
            {
                icon: '🔍',
                title: 'Due Diligence',
                description: 'Verifiche approfondite su partner e investitori',
                link: 'intelligence-e-servizi-speciali/due-diligence-background-check/'
            },
            {
                icon: '🛡️',
                title: 'Antispionaggio',
                description: 'Protezione segreti industriali e sicurezza aziendale',
                link: 'intelligence-e-servizi-speciali/antispionaggio-industriale/'
            },
            {
                icon: '💻',
                title: 'Digital Forensics',
                description: 'Analisi forense di dispositivi digitali e prove digitali',
                link: 'intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/'
            },
            {
                icon: '💰',
                title: 'Asset Tracing',
                description: 'Tracciamento patrimoniale e recupero crediti',
                link: 'intelligence-e-servizi-speciali/asset-tracing-tracciamento-patrimoniale/'
            }
        ]
    }
};
