// Related content logic for SEO and UX optimization

interface RelatedPage {
  title: string;
  href: string;
  description?: string;
}

// Define content relationships
const contentMap: Record<string, RelatedPage[]> = {
  // Homepage
  '/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per la sfera personale e familiare' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende e imprenditori' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati e avanzati' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia dal 1962' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo innovativo' },
  ],

  // Investigazioni Private Hub
  '/investigazioni-private/': [
    { title: 'Investigazioni Infedeltà Coniugale', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà e tradimento' },
    { title: 'Investigazioni Separazione e Divorzio', href: '/investigazioni-private/investigazioni-separazione-divorzio/', description: 'Prove per separazione e divorzio' },
    { title: 'Investigazioni Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/', description: 'Tutela e controllo dei minori' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo certificato' },
  ],

  // Investigazioni Private - Infedeltà
  '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Separazione e Divorzio', href: '/investigazioni-private/investigazioni-separazione-divorzio/', description: 'Prove per separazione' },
    { title: 'Investigazioni Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/', description: 'Tutela dei minori' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Private - Separazione
  '/investigazioni-private/investigazioni-separazione-divorzio/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Infedeltà Coniugale', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà' },
    { title: 'Investigazioni Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/', description: 'Tutela dei minori' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Private - Affidamento
  '/investigazioni-private/investigazioni-affidamento-minori/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Separazione e Divorzio', href: '/investigazioni-private/investigazioni-separazione-divorzio/', description: 'Prove per separazione' },
    { title: 'Investigazioni Infedeltà Coniugale', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Private - Pre-Matrimoniali
  '/investigazioni-private/investigazioni-pre-matrimoniali/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Infedeltà Coniugale', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Private - Sicurezza
  '/investigazioni-private/investigazioni-sicurezza-personale-familiare/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/', description: 'Tutela dei minori' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Aziendali Hub
  '/investigazioni-aziendali/': [
    { title: 'Investigazioni Pre-Assunzione', href: '/investigazioni-aziendali/investigazioni-pre-assunzione/', description: 'Verifica referenze candidati' },
    { title: 'Investigazioni Licenziamento Giusta Causa', href: '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/', description: 'Prove per licenziamento' },
    { title: 'Investigazioni Concorrenza Sleale', href: '/investigazioni-aziendali/investigazioni-concorrenza-sleale/', description: 'Indagini su concorrenza illegale' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo certificato' },
  ],

  // Investigazioni Aziendali - Pre-Assunzione
  '/investigazioni-aziendali/investigazioni-pre-assunzione/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Tutti i servizi per aziende' },
    { title: 'Investigazioni Licenziamento Giusta Causa', href: '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/', description: 'Prove per licenziamento' },
    { title: 'Investigazioni Concorrenza Sleale', href: '/investigazioni-aziendali/investigazioni-concorrenza-sleale/', description: 'Indagini su concorrenza' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Aziendali - Licenziamento
  '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Tutti i servizi per aziende' },
    { title: 'Investigazioni Pre-Assunzione', href: '/investigazioni-aziendali/investigazioni-pre-assunzione/', description: 'Verifica referenze' },
    { title: 'Investigazioni Concorrenza Sleale', href: '/investigazioni-aziendali/investigazioni-concorrenza-sleale/', description: 'Indagini su concorrenza' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Aziendali - Concorrenza
  '/investigazioni-aziendali/investigazioni-concorrenza-sleale/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Tutti i servizi per aziende' },
    { title: 'Investigazioni Pre-Assunzione', href: '/investigazioni-aziendali/investigazioni-pre-assunzione/', description: 'Verifica referenze' },
    { title: 'Investigazioni Licenziamento Giusta Causa', href: '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/', description: 'Prove per licenziamento' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Investigazioni Aziendali - Ammanchi
  '/investigazioni-aziendali/investigazioni-ammanchi-differenze-inventariali/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Tutti i servizi per aziende' },
    { title: 'Investigazioni Licenziamento Giusta Causa', href: '/investigazioni-aziendali/investigazioni-licenziamento-giusta-causa/', description: 'Prove per licenziamento' },
    { title: 'Investigazioni Concorrenza Sleale', href: '/investigazioni-aziendali/investigazioni-concorrenza-sleale/', description: 'Indagini su concorrenza' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Location pages - Roma
  '/investigatore-privato-roma/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Investigatore Privato Milano', href: '/investigatore-privato-milano/', description: 'Servizi a Milano' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/investigazioni-private-roma/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Private Milano', href: '/investigazioni-private-milano/', description: 'Servizi a Milano' },
    { title: 'Investigatore Privato Roma', href: '/investigatore-privato-roma/', description: 'Investigatore a Roma' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/agenzia-investigativa-roma/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Agenzia Investigativa Milano', href: '/agenzia-investigativa-milano/', description: 'Servizi a Milano' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Location pages - Milano
  '/investigatore-privato-milano/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Investigatore Privato Roma', href: '/investigatore-privato-roma/', description: 'Servizi a Roma' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/investigazioni-private-milano/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
    { title: 'Investigazioni Private Roma', href: '/investigazioni-private-roma/', description: 'Servizi a Roma' },
    { title: 'Investigatore Privato Milano', href: '/investigatore-privato-milano/', description: 'Investigatore a Milano' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/agenzia-investigativa-milano/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Agenzia Investigativa Roma', href: '/agenzia-investigativa-roma/', description: 'Servizi a Roma' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Supporting pages
  '/europol-istituto-di-investigazioni/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo' },
    { title: 'Valutazioni Clienti', href: '/valutazioni-dei-clienti/', description: 'Testimonianze' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/sistema-prova/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Valutazioni Clienti', href: '/valutazioni-dei-clienti/', description: 'Testimonianze' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/valutazioni-dei-clienti/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/studi-legali-e-avvocati/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/contatti/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo' },
  ],

  // Blog posts - Dipendenti e Aziende
  '/assenteismo-dipendenti/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Falsa Malattia Dipendenti', href: '/falsa-malattia-dipendenti/', description: 'Indagini su falsa malattia' },
    { title: 'Controllo Dipendenti', href: '/controllo-dipendenti-si-puo-fare/', description: 'Verifica dipendenti' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/falsa-malattia-dipendenti/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Assenteismo Dipendenti', href: '/assenteismo-dipendenti/', description: 'Indagini su assenteismo' },
    { title: 'Indagini su Dipendenti', href: '/indagini-su-dipendenti/', description: 'Controllo dipendenti' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/controllo-dipendenti-si-puo-fare/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Assenteismo Dipendenti', href: '/assenteismo-dipendenti/', description: 'Indagini su assenteismo' },
    { title: 'Falsa Malattia Dipendenti', href: '/falsa-malattia-dipendenti/', description: 'Indagini su falsa malattia' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/indagini-su-dipendenti/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Assenteismo Dipendenti', href: '/assenteismo-dipendenti/', description: 'Indagini su assenteismo' },
    { title: 'Antitaccheggio Investigativo', href: '/antitaccheggio-investigativo/', description: 'Prevenzione furti' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/antitaccheggio-investigativo/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Indagini su Dipendenti', href: '/indagini-su-dipendenti/', description: 'Controllo dipendenti' },
    { title: 'Investigazioni Ammanchi', href: '/investigazioni-aziendali/investigazioni-ammanchi-differenze-inventariali/', description: 'Indagini su ammanchi' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/spionaggio-industriale/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Antispionaggio Industriale', href: '/intelligence-e-servizi-speciali/antispionaggio-industriale/', description: 'Protezione segreti industriali' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Blog posts - Investigazioni Private
  '/il-tradimento-e-reato/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Infedeltà Coniugale', href: '/infedelta-coniugale/', description: 'Indagini su infedeltà' },
    { title: 'Investigazioni Infedeltà', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/infedelta-coniugale/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Il Tradimento è Reato', href: '/il-tradimento-e-reato/', description: 'Aspetti legali del tradimento' },
    { title: 'Investigazioni Infedeltà', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/le-investigazioni-per-affidamento-controllo-e-tutela-dei-minori/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/', description: 'Tutela dei minori' },
    { title: 'Investigazioni Separazione', href: '/investigazioni-private/investigazioni-separazione-divorzio/', description: 'Prove per separazione' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Blog posts - Guide e Approfondimenti
  '/come-assumere-investigatore-privato/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Investigatore Privato Chi è', href: '/investigatore-privato-chi-e-e-cosa-fa/', description: 'Chi è un investigatore privato' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/investigatore-privato-chi-e-e-cosa-fa/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Come Assumere Investigatore', href: '/come-assumere-investigatore-privato/', description: 'Guida all\'assunzione' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/perche-rivolgersi-ad-agenzia-investigazioni/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/i-5-metodi-illegali-di-raccolta-prove-da-conoscere-assolutamente-prima-di-affidarsi-ad-unagenzia-investigativa-ed-evitare-di-rischiare-dai-3-ai-5-anni-di-carcere-e-multe-fino-a-60-0/': [
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/consulenza-bitcoin/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
    { title: 'Tracciamento Crypto & Blockchain', href: '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/', description: 'Investigazioni crypto' },
    { title: 'Digital Forensics', href: '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/', description: 'Analisi forense digitale' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Case Studies
  '/caso-reale-la-tua-ex-moglie-ti-sta-derubando/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Separazione', href: '/investigazioni-private/investigazioni-separazione-divorzio/', description: 'Prove per separazione' },
    { title: 'Caso Reale Ex Marito', href: '/caso-reale-il-tuo-ex-marito-mette-in-pericolo-i-tuoi-bambini/', description: 'Altro caso reale' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/caso-reale-il-tuo-ex-marito-mette-in-pericolo-i-tuoi-bambini/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Affidamento Minori', href: '/investigazioni-private/investigazioni-affidamento-minori/', description: 'Tutela dei minori' },
    { title: 'Caso Reale Ex Moglie', href: '/caso-reale-la-tua-ex-moglie-ti-sta-derubando/', description: 'Altro caso reale' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/caso-reale-lei-e-solo-una-dipendente-o-la-sua-amante/': [
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Indagini su Dipendenti', href: '/indagini-su-dipendenti/', description: 'Controllo dipendenti' },
    { title: 'Investigazioni Infedeltà', href: '/investigazioni-private/investigazioni-infedelta-coniugale-tradimento/', description: 'Prove per infedeltà' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Landing Pages
  '/agenzia-investigativa-a-roma/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Agenzia Investigativa Milano', href: '/agenzia-investigativa-a-milano/', description: 'Servizi a Milano' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  '/agenzia-investigativa-a-milano/': [
    { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Agenzia Investigativa Roma', href: '/agenzia-investigativa-a-roma/', description: 'Servizi a Roma' },
    { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Intelligence & Servizi Specializzati Hub
  '/intelligence-e-servizi-speciali/': [
    { title: 'Business Intelligence', href: '/intelligence-e-servizi-speciali/business-intelligence/', description: 'Intelligence strategica per decisioni aziendali' },
    { title: 'Tracciamento Crypto & Blockchain', href: '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/', description: 'Investigazioni su truffe crypto' },
    { title: 'Digital Forensics', href: '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/', description: 'Analisi forense dispositivi digitali' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Il nostro metodo certificato' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Business Intelligence
  '/intelligence-e-servizi-speciali/business-intelligence/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Tutti i servizi specializzati' },
    { title: 'Due Diligence & Background Check', href: '/intelligence-e-servizi-speciali/due-diligence-background-check/', description: 'Verifiche approfondite' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Tracciamento Crypto
  '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Tutti i servizi specializzati' },
    { title: 'Digital Forensics', href: '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/', description: 'Analisi forense digitale' },
    { title: 'Asset Tracing', href: '/intelligence-e-servizi-speciali/asset-tracing-tracciamento-patrimoniale/', description: 'Tracciamento patrimoniale' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Due Diligence
  '/intelligence-e-servizi-speciali/due-diligence-background-check/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Tutti i servizi specializzati' },
    { title: 'Business Intelligence', href: '/intelligence-e-servizi-speciali/business-intelligence/', description: 'Intelligence strategica' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Antispionaggio
  '/intelligence-e-servizi-speciali/antispionaggio-industriale/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Tutti i servizi specializzati' },
    { title: 'Digital Forensics', href: '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/', description: 'Analisi forense digitale' },
    { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Digital Forensics
  '/intelligence-e-servizi-speciali/digital-forensics-investigazioni-digitali/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Tutti i servizi specializzati' },
    { title: 'Tracciamento Crypto & Blockchain', href: '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/', description: 'Investigazioni crypto' },
    { title: 'Antispionaggio Industriale', href: '/intelligence-e-servizi-speciali/antispionaggio-industriale/', description: 'Sicurezza aziendale' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],

  // Asset Tracing
  '/intelligence-e-servizi-speciali/asset-tracing-tracciamento-patrimoniale/': [
    { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Tutti i servizi specializzati' },
    { title: 'Tracciamento Crypto & Blockchain', href: '/intelligence-e-servizi-speciali/tracciamento-fondi-blockchain-crypto-truffe/', description: 'Tracciamento blockchain' },
    { title: 'Due Diligence & Background Check', href: '/intelligence-e-servizi-speciali/due-diligence-background-check/', description: 'Verifiche approfondite' },
    { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' },
    { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
  ],
};

// Default related content for pages not in map
const defaultRelated: RelatedPage[] = [
  { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Servizi per privati' },
  { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Servizi per aziende' },
  { title: 'Intelligence & Servizi Speciali', href: '/intelligence-e-servizi-speciali/', description: 'Servizi specializzati' },
  { title: 'Chi Siamo', href: '/europol-istituto-di-investigazioni/', description: 'La nostra storia' },
  { title: 'Contatti', href: '/contatti/', description: 'Richiedi consulenza gratuita' },
];

// Helper function to get blog category from URL
function getBlogCategoryFromPath(urlPath: string): string {
  if (urlPath.includes('dipendenti') || urlPath.includes('spionaggio') || urlPath.includes('antitaccheggio')) {
    return 'Investigazioni Aziendali';
  }
  if (urlPath.includes('infedelta') || urlPath.includes('tradimento') || urlPath.includes('affidamento')) {
    return 'Investigazioni Private';
  }
  if (urlPath.includes('caso-reale')) {
    return 'Case Studies';
  }
  if (urlPath.includes('bitcoin')) {
    return 'Criptovalute';
  }
  if (urlPath.match(/^\/(assenteismo|falsa-malattia|investigatore-privato-chi-e|infedelta|spionaggio|consulenza-bitcoin|caso-reale|il-tradimento|le-investigazioni-per-affidamento|controllo-dipendenti|indagini-su-dipendenti|antitaccheggio|come-assumere|perche-rivolgersi|i-5-metodi|agenzia-investigativa-a-(roma|milano))/)) {
    return 'Guide e Approfondimenti';
  }
  return '';
}

// Get blog posts in same category
function getBlogPostsInCategory(category: string, excludePath: string): RelatedPage[] {
  if (!category) return [];
  
  const blogPostPaths = [
    '/assenteismo-dipendenti/',
    '/falsa-malattia-dipendenti/',
    '/controllo-dipendenti-si-puo-fare/',
    '/indagini-su-dipendenti/',
    '/antitaccheggio-investigativo/',
    '/spionaggio-industriale/',
    '/infedelta-coniugale/',
    '/il-tradimento-e-reato/',
    '/le-investigazioni-per-affidamento-controllo-e-tutela-dei-minori/',
    '/investigatore-privato-chi-e-e-cosa-fa/',
    '/come-assumere-investigatore-privato/',
    '/perche-rivolgersi-ad-agenzia-investigazioni/',
    '/i-5-metodi-illegali-di-raccolta-prove-da-conoscere-assolutamente-prima-di-affidarsi-ad-unagenzia-investigativa-ed-evitare-di-rischiare-dai-3-ai-5-anni-di-carcere-e-multe-fino-a-60-0/',
    '/consulenza-bitcoin/',
    '/caso-reale-la-tua-ex-moglie-ti-sta-derubando/',
    '/caso-reale-il-tuo-ex-marito-mette-in-pericolo-i-tuoi-bambini/',
    '/caso-reale-lei-e-solo-una-dipendente-o-la-sua-amante/',
    '/agenzia-investigativa-a-roma/',
    '/agenzia-investigativa-a-milano/',
  ];
  
  const related: RelatedPage[] = [];
  const excludeNormalized = excludePath.endsWith('/') ? excludePath : `${excludePath}/`;
  
  for (const path of blogPostPaths) {
    if (path === excludeNormalized) continue;
    
    const postCategory = getBlogCategoryFromPath(path);
    if (postCategory === category) {
      // Extract title from path
      const title = path.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '';
      related.push({
        title: title.length > 60 ? title.substring(0, 60) + '...' : title,
        href: path,
        description: `Articolo su ${category.toLowerCase()}`
      });
      
      // Limit to 3 related posts
      if (related.length >= 3) break;
    }
  }
  
  return related;
}

export function getRelatedContent(urlPath: string): RelatedPage[] {
  // Normalize path
  const normalizedPath = urlPath.endsWith('/') ? urlPath : `${urlPath}/`;
  
  // Check if this is a blog post
  const blogCategory = getBlogCategoryFromPath(normalizedPath);
  if (blogCategory) {
    // Get related blog posts in same category
    const relatedBlogPosts = getBlogPostsInCategory(blogCategory, normalizedPath);
    
    // Add service links based on category
    const serviceLinks: RelatedPage[] = [];
    if (blogCategory === 'Investigazioni Aziendali') {
      serviceLinks.push(
        { title: 'Investigazioni Aziendali', href: '/investigazioni-aziendali/', description: 'Tutti i servizi per aziende' },
        { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' }
      );
    } else if (blogCategory === 'Investigazioni Private') {
      serviceLinks.push(
        { title: 'Investigazioni Private', href: '/investigazioni-private/', description: 'Tutti i servizi per privati' },
        { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' }
      );
    } else {
      serviceLinks.push(
        { title: 'Risorse', href: '/blog/', description: 'Tutti gli articoli' },
        { title: 'Sistema PROVA™', href: '/sistema-prova/', description: 'Metodi legali certificati' }
      );
    }
    
    return [...relatedBlogPosts, ...serviceLinks].slice(0, 5);
  }
  
  // Get specific related content or use default
  return contentMap[normalizedPath] || defaultRelated;
}

