import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, ArrowDownToLine, CalendarDays, Clock3, FileText, GraduationCap, MapPin, Menu, X, UsersRound, CheckCircle2, ShieldCheck, Megaphone, Trophy, MessagesSquare, PenLine, ClipboardCheck, AlertCircle, ChevronDown, ChevronUp, BookOpen} from 'lucide-react';
import './index.css';
import { GOOGLE_FORM_URL, GOOGLE_FORM_QR_IMAGE } from './config';

const pdf = '/formulaire-candidature-insi-2026.pdf';
const formConfigured = /^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/i.test(GOOGLE_FORM_URL.trim());
function FormLink({children, className = ''}) {
 return formConfigured ? <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={className}>{children}</a> : <a href="#candidature" className={className}>{children}</a>;
}
const questions = [
  {q:'Puis-je me présenter seul(e) ?', a:'Non. Le formulaire officiel prévoit une candidature en binôme : une personne à la présidence et une personne à la vice-présidence.'},
  {q:'Quels niveaux sont éligibles ?', a:'Le formulaire indique les niveaux L2, L3 et M1 pour les deux candidats. Chacun doit être régulièrement inscrit à INSI University.'},
  {q:'Comment déposer notre dossier ?', a:'Le PDF officiel indique un dépôt à la Direction. Un Google Forms est prévu pour les candidatures en ligne : consultez la section candidature pour le lien lorsqu’il sera communiqué et validé.'},
  {q:'Quelle est la date limite ?', a:'Le mercredi 25 novembre 2026 à 16h00, selon le formulaire officiel.'},
  {q:'Le Google Forms remplace-t-il le dépôt physique ?', a:'Cette modalité doit être confirmée par les organisateurs. Le document officiel initial prévoit un dépôt à la Direction.'},
  {q:'Quand aura lieu le vote ?', a:'Le scrutin est annoncé pour le lundi 30 novembre 2026.'}
];
const steps = [
  {number:'01',title:'Former votre binôme',desc:'Choisissez les personnes candidates à la présidence et à la vice-présidence.', icon:UsersRound},
  {number:'02',title:'Consulter les consignes',desc:'Prenez connaissance des informations exigées et du programme électoral dans le document officiel.',icon:FileText},
  {number:'03',title:'Préparer votre programme',desc:'Présentez vos motivations et vos propositions pour la vie étudiante.',icon:PenLine},
  {number:'04',title:'Soumettre la candidature',desc:'Le lien Google Forms sera publié dès validation de la procédure en ligne par les organisateurs.',icon:ClipboardCheck}
];
function App(){
 const [mobileOpen,setMobileOpen]=React.useState(false);
 const [opened,setOpened]=React.useState(0);
 const linkClick=()=>setMobileOpen(false);
 return <>
  <div
   className="bg-cover bg-[center_38%] bg-no-repeat"
   style={{backgroundImage:"linear-gradient(90deg, rgba(8, 20, 45, 0.72) 0%, rgba(8, 20, 45, 0.38) 58%, rgba(8, 20, 45, 0.08) 100%), url('/insi-background.png')"}}
  >
  <header
   className="sticky top-0 z-50 border-b border-white/20 text-white backdrop-blur-lg"
  >
   <div className="page-width flex h-20 items-center justify-between gap-4">
    <a href="#accueil" className="flex items-center gap-3" onClick={linkClick} aria-label="Accueil INSI University">
     <span className="leading-tight"><strong className="block text-lg tracking-[.12em]">INSI</strong><span className="text-[10px] uppercase tracking-[.14em] text-white/75">University · Élections 2026</span></span>
    </a>
    <nav className="hidden items-center gap-7 text-sm font-semibold text-white/85 md:flex" aria-label="Navigation principale">
     {[['Accueil','#accueil'],['Conditions','#conditions'],['Démarches','#demarches'],['FAQ','#faq']].map(([t,href])=><a className="transition-colors hover:text-white" href={href} key={t}>{t}</a>)}
    </nav>
    <FormLink className="hidden items-center gap-2 rounded-md bg-white px-4 py-3 text-xs font-bold text-navy transition-colors hover:bg-blue-100 md:inline-flex"><ArrowRight size={16}/> Candidature</FormLink>
    <button aria-label={mobileOpen?'Fermer le menu':'Ouvrir le menu'} aria-expanded={mobileOpen} className="rounded-md p-2 md:hidden" onClick={()=>setMobileOpen(!mobileOpen)}>{mobileOpen?<X/>:<Menu/>}</button>
   </div>
   {mobileOpen&&<nav className="page-width flex flex-col gap-4 border-t border-white/20 py-5 text-sm font-semibold text-white md:hidden" aria-label="Navigation mobile">{[['Accueil','#accueil'],['Conditions','#conditions'],['Démarches','#demarches'],['FAQ','#faq']].map(([t,h])=><a onClick={linkClick} key={t} href={h}>{t}</a>)}<a className="text-blue-100" href="#candidature" onClick={linkClick}>Candidature en ligne</a></nav>}
   </header>
    <section
  id="accueil"
  className="relative min-h-[680px] overflow-hidden text-white"
>
    <div className="page-width relative grid min-h-[680px] gap-12 py-16 lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:py-20">
      <div><span className="inline-flex items-center gap-2 border-l-2 border-blue-300 pl-3 text-sm font-bold uppercase tracking-[.14em] text-blue-100">Élections étudiantes 2026</span>
       <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-[72px]" style={{fontFamily:'Dancing Script, cursive'}}>Votre voix.<br/><span className="text-[#d2dcff]">Votre avenir.</span><br/>Votre INSI.</h1>
       <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-xl">Vous souhaitez représenter les étudiants ? Découvrez les conditions de candidature à la présidence et à la vice-présidence d’INSI University.</p>
       <div className="mt-10 flex flex-wrap gap-3"><a href="#conditions" className="primary-btn">Découvrir les conditions <ArrowRight size={18}/></a><FormLink className="outline-btn"><ArrowRight size={18}/> Google Forms</FormLink></div>
      </div>
      <div className="relative mx-auto w-full max-w-md">
       <div className="relative border-l border-white/35 pl-7 sm:pl-9">
        <div className="mb-7 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.14em] text-blue-200">Calendrier officiel</span><CalendarDays className="text-blue-200" size={24}/></div>
        <div className="text-white"><p className="text-xs font-bold uppercase tracking-widest text-white/60">Date du scrutin</p><p className="mt-2 text-4xl font-black">30 NOV.</p><p className="mt-1 text-sm font-semibold text-white/80">Lundi 2026</p></div>
        <div className="mt-6 flex items-start gap-4"><div className="p-1 text-white/80"><Clock3 size={21}/></div><div><p className="text-sm font-semibold">Clôture des candidatures</p><p className="mt-1 text-lg font-extrabold">25 novembre · 16h00</p><p className="mt-1 text-xs text-white/70">Mercredi 2026</p></div></div>
        <div className="mt-6 flex items-start gap-4 border-t border-white/25 pt-6"><div className="p-1 text-white/80"><MapPin size={21}/></div><div><p className="text-sm font-semibold">Dépôt des dossiers</p><p className="mt-1 text-sm text-white/75">Direction d’INSI University (selon le PDF initial)</p></div></div>
       </div>
      </div>
    </div>
   </section>
  </div>
  <main>
    <section className="border-b border-slate-200"><div className="page-width grid gap-6 py-7 sm:grid-cols-3"><div className="flex items-center gap-4"><UsersRound className="text-blue"/><div><strong className="block text-sm">Candidature en binôme</strong><span className="text-xs text-slate-500">Présidence + vice-présidence</span></div></div><div className="flex items-center gap-4"><GraduationCap className="text-blue"/><div><strong className="block text-sm">L2, L3 ou M1</strong><span className="text-xs text-slate-500">Étudiants régulièrement inscrits</span></div></div><div className="flex items-center gap-4"><ShieldCheck className="text-blue"/><div><strong className="block text-sm">Engagement responsable</strong><span className="text-xs text-slate-500">Respect des règles électorales</span></div></div></div></section>
   <section id="conditions" className="page-width scroll-mt-24 py-20 sm:py-24"><div className="max-w-2xl"><p className="eyebrow">Éligibilité & règlement</p><h2 className="section-title mt-3">Qui peut se présenter ?</h2><p className="mt-4 leading-7 text-slate-600">Les conditions suivantes sont reprises du formulaire officiel de candidature d’INSI University.</p></div>
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[
      {icon:GraduationCap,title:'Être inscrit à INSI',desc:'Les deux candidats doivent être régulièrement inscrits à INSI University en L2, L3 ou M1.'},
      {icon:UsersRound,title:'Former un binôme',desc:'La candidature associe obligatoirement un candidat à la présidence et un à la vice-présidence.'},
      {icon:FileText,title:'Compléter le formulaire',desc:'Renseigner les identités, matricules, parcours, contacts, niveaux et le nom ou slogan du binôme.'},
      {icon:Megaphone,title:'Présenter ses motivations',desc:'Expliquer les raisons de la candidature et les engagements proposés aux étudiants.'},
      {icon:BookOpen,title:'Respecter les règles',desc:'Respecter le règlement intérieur et les règles électorales, avec une campagne responsable.'},
      {icon:PenLine,title:'Signer l’engagement',desc:'Les deux candidats doivent signer leur déclaration d’engagement avant le dépôt.'}
    ].map(({icon:Icon,title,desc})=><article className="border-t-2 border-slate-200 py-6" key={title}><div className="mb-5 inline-flex p-1 text-blue"><Icon size={24}/></div><h3 className="text-lg font-extrabold text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></article>)}</div>
    <div className="mt-7 flex items-start gap-3 border-l-2 border-amber-400 py-2 pl-4 text-sm leading-6 text-amber-950"><AlertCircle className="mt-0.5 shrink-0" size={20}/><p><strong>À noter :</strong> le formulaire transmis ne détaille pas d’éventuelles règles supplémentaires (campagne, pièces justificatives, modalités du vote). Ces informations devront être confirmées par l’administration avant publication.</p></div>
   </section>
   <section id="demarches" className="scroll-mt-24 border-t border-slate-200 py-20 sm:py-24"><div className="page-width"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Guide de candidature</p><h2 className="section-title mt-3">Comment déposer sa candidature ?</h2><p className="mt-4 leading-7 text-slate-600">Quatre étapes pour préparer votre candidature avant le mercredi 25 novembre 2026 à 16h00.</p></div>
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{steps.map(({number,title,desc,icon:Icon})=><div className="relative border-t-2 border-slate-200 pt-5" key={number}><span className="text-3xl font-black text-slate-300">{number}</span><div className="mt-5 inline-flex p-1 text-blue"><Icon size={23}/></div><h3 className="mt-4 text-lg font-extrabold text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></div>)}</div>
    <div id="candidature" className="mt-12 scroll-mt-28 border-t-2 border-navy py-8">
     <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-xl font-extrabold text-navy">Déposer votre candidature</p><p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{formConfigured ? 'Accédez au formulaire Google Forms communiqué par les organisateurs.' : 'Le lien Google Forms sera ajouté dès qu’il sera communiqué.'}</p></div>
      {formConfigured ? <FormLink className="primary-btn shrink-0"><ArrowRight size={18}/> Ouvrir Google Forms</FormLink> : <span className="border-l-2 border-slate-300 pl-4 text-sm font-semibold text-slate-500">Lien à venir</span>}
     </div>
     {GOOGLE_FORM_QR_IMAGE && formConfigured && <div className="mt-7 inline-block border border-slate-200 p-4 text-navy"><img src={GOOGLE_FORM_QR_IMAGE} alt="QR code pour ouvrir le formulaire Google Forms" className="h-44 w-44 object-contain"/><p className="mt-2 text-center text-xs font-bold">Scanner pour candidater</p></div>}
    </div>
   </div></section>
   <section className="page-width py-20 sm:py-24"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">Programme électoral</p><h2 className="section-title mt-3">Des idées pour faire avancer la vie étudiante</h2><p className="mt-5 leading-8 text-slate-600">Le formulaire demande à chaque binôme de présenter son programme autour de plusieurs thèmes. Préparez des propositions concrètes, claires et réalisables.</p><a href={pdf} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-blue hover:underline">Consulter le document officiel <ArrowRight size={18}/></a></div><div className="grid gap-5">{[{icon:GraduationCap,title:'Vie étudiante et activités universitaires'},{icon:Trophy,title:'Sports, culture et clubs étudiants'},{icon:MessagesSquare,title:'Communication entre étudiants et Direction'},{icon:CheckCircle2,title:'Autres propositions'}].map(({icon:Icon,title})=><div key={title} className="flex items-center gap-4 border-b border-slate-200 pb-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center text-blue"><Icon size={23}/></span><span className="font-bold text-navy">{title}</span></div>)}</div></div></section>
   <section id="faq" className="scroll-mt-24 border-t border-slate-200 py-20 sm:py-24"><div className="page-width max-w-4xl"><div className="text-center"><p className="eyebrow">Questions fréquentes</p><h2 className="section-title mt-3">Tout ce qu’il faut savoir</h2></div><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{questions.map(({q,a},i)=><div key={q}><button className="flex w-full items-center justify-between gap-4 py-6 text-left font-bold text-navy" aria-expanded={opened===i} onClick={()=>setOpened(opened===i?-1:i)}>{q}{opened===i?<ChevronUp className="shrink-0 text-blue" size={20}/>:<ChevronDown className="shrink-0 text-slate-400" size={20}/>}</button>{opened===i&&<p className="max-w-2xl pb-6 text-sm leading-7 text-slate-600">{a}</p>}</div>)}</div></div></section>
  </main>
  <footer
   className="relative h-44 bg-cover bg-[center_58%] text-white sm:h-52"
   style={{
    backgroundImage:
      "linear-gradient(rgba(8, 20, 45, 0.82), rgba(8, 20, 45, 0.82)), url('/insi-background.png')"
   }}
  >
   <div className="page-width flex h-full flex-col justify-center gap-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
     <strong className="text-sm tracking-[.16em]">INSI UNIVERSITY</strong>
     <p className="mt-2 text-xs text-slate-300">Élections étudiantes 2026 · Informations issues du formulaire de candidature</p>
    </div>
    <a href="#candidature" className="inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-200 hover:text-white"><ArrowRight size={17}/> Candidature</a>
   </div>
  </footer>
 </>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
