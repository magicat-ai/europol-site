// Navigation structure - excludes thank-you pages
export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Investigazioni Private', href: '/investigazioni-private/' },
    { name: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/' },
    { name: 'Intelligence', href: '/intelligence-e-servizi-speciali/' },
    { name: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/' },
  ],
  privateServices: [
    { name: 'Investigazioni Pre-Matrimoniali', href: '/investigazioni-private/investigazioni-pre-matrimoniali/' },
    { name: 'Infedeltà Coniugale', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/' },
    { name: 'Separazione e Divorzio', href: '/investigazioni-private/investigazioni-separazione-divorzio/' },
    { name: 'Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/' },
    { name: 'Sicurezza Personale', href: '/investigazioni-private/investigazioni-sicurezza-personale-familiare/' },
  ],
  aziendaliServices: [
    { name: 'Pre-Assunzione', href: '/investigazioni-aziendali/investigazioni-pre-assunzione/' },
    { name: 'Licenziamento Giusta Causa', href: '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/' },
    { name: 'Concorrenza Sleale', href: '/investigazioni-aziendali/investigazioni-concorrenza-sleale/' },
    { name: 'Ammanchi e Differenze', href: '/investigazioni-aziendali/investigazioni-ammanchi-differenze-inventariali/' },
  ],
  intelligenceServices: [
    { name: 'Business Intelligence', href: '/intelligence-e-servizi-speciali/business-intelligence/' },
    { name: 'Tracciamento Crypto & Blockchain', href: '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/' },
    { name: 'Due Diligence & Background Check', href: '/intelligence-e-servizi-speciali/due-diligence-background-check/' },
    { name: 'Antispionaggio Industriale', href: '/intelligence-e-servizi-speciali/antispionaggio-industriale/' },
    { name: 'Digital Forensics', href: '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/' },
    { name: 'Asset Tracing', href: '/intelligence-e-servizi-speciali/asset-tracing-tracciamento-patrimoniale/' },
  ],
};

// Thank-you pages (excluded from navigation)
export const thankYouPages = [
  '/richiesta-inviata/',
  '/studi-legali-e-avvocati-grazie/',
];

