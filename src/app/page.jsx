import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import {
    ArrowRight,
    MessageSquare,
    Building2,
    BarChart3,
    Zap,
    Users,
    Target,
    TrendingUp,
    CheckCircle2,
    Quote,
    Sparkles,
} from 'lucide-react';

const MAILTO = 'mailto:hola@growthbrick.tech?subject=Quiero%20ver%20una%20demo%20de%20GrowthBrick';

/* ─────────────────────────────────────────────
   NAV
   ───────────────────────────────────────────── */

function Nav() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg-base)]/80 border-b border-[var(--border-subtle)]">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <Logo />
                <div className="hidden md:flex items-center gap-8 text-sm text-[var(--text-secondary)]">
                    <a href="#servicios" className="hover:text-[var(--brand-700)] transition-colors">Servicios</a>
                    <a href="#para-quien" className="hover:text-[var(--brand-700)] transition-colors">Para quién</a>
                    <a href="#como-funciona" className="hover:text-[var(--brand-700)] transition-colors">Cómo funciona</a>
                    <a href="#casos" className="hover:text-[var(--brand-700)] transition-colors">Casos</a>
                </div>
                <a href={MAILTO}>
                    <Button size="sm" variant="primary">
                        Hablemos <ArrowRight size={15} />
                    </Button>
                </a>
            </nav>
        </header>
    );
}

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */

function Hero() {
    return (
        <section className="relative overflow-hidden brand-gradient">
            <div className="absolute inset-0 noise-bg opacity-40" aria-hidden="true" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] hero-blob" aria-hidden="true" />

            <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--brand-50)] border border-[var(--brand-200)] text-[var(--brand-800)] text-xs font-medium mb-8">
                    <Sparkles size={13} className="text-[var(--brand-600)]" />
                    Agencia digital especializada en real estate
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] max-w-4xl mx-auto mb-6">
                    Convertí más{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10">metros cuadrados</span>
                        <svg className="absolute left-0 right-0 -bottom-2 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                            <path
                                d="M3 8 C 80 2, 220 2, 297 7"
                                stroke="var(--brand-500)"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    .
                    <br />
                    Con una operación que se mide sola.
                </h1>

                <p className="mt-8 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                    Meta Ads, WhatsApp centralizado y un CRM hecho para inmobiliarias y desarrolladoras. Tu equipo responde más rápido, vos ves los números en tiempo real.
                </p>

                <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
                    <a href={MAILTO}>
                        <Button size="lg" variant="primary">
                            Agendá una demo <ArrowRight size={18} />
                        </Button>
                    </a>
                    <a href="#servicios">
                        <Button size="lg" variant="secondary">
                            Ver qué hacemos
                        </Button>
                    </a>
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[var(--brand-600)]" />
                        Setup completo en 14 días
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[var(--brand-600)]" />
                        WhatsApp oficial con YCloud
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[var(--brand-600)]" />
                        Sin contratos largos
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   SERVICIOS — lo que resolvemos
   ───────────────────────────────────────────── */

const SERVICES = [
    {
        icon: Target,
        title: 'Captación de leads con Meta Ads',
        body: 'Armamos, optimizamos y medimos tus campañas en Facebook e Instagram. Creativos pensados para propiedades reales, audiencias que convierten y atribución real de cada venta al anuncio que la originó.',
        bullets: ['Audiencias y creativos a medida', 'Atribución por anuncio y propiedad', 'Conversion Leads API integrada'],
    },
    {
        icon: MessageSquare,
        title: 'WhatsApp Business centralizado',
        body: 'Toda la conversación pasa por un inbox compartido. El agente responde desde su celular o la web, el dueño ve todo. Templates aprobados para reactivar leads fuera de las 24 h.',
        bullets: ['Inbox unificado para todo el equipo', 'Templates y automatizaciones', 'Tiempos de respuesta medidos'],
    },
    {
        icon: BarChart3,
        title: 'CRM diseñado para real estate',
        body: 'Pipeline pensado para el ciclo inmobiliario, no un CRM genérico adaptado. Propiedades, visitas, deals y tareas en un solo lugar, con paneles que el dueño mira todos los días.',
        bullets: ['Pipeline configurable por cliente', 'Agentes con KPIs claros', 'Informes de agencia para dueños'],
    },
];

function Servicios() {
    return (
        <section id="servicios" className="relative py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-semibold tracking-widest text-[var(--brand-700)] uppercase">
                        Servicios
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl text-[var(--text-primary)]">
                        Tres piezas conectadas entre sí
                    </h2>
                    <p className="mt-4 text-lg text-[var(--text-secondary)]">
                        Anuncios, conversaciones y gestión operando como un solo sistema. Sin planillas sueltas, sin agentes que responden desde su propio WhatsApp.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {SERVICES.map((s) => (
                        <article key={s.title} className="card-surface p-7">
                            <div className="w-11 h-11 rounded-xl bg-[var(--brand-50)] border border-[var(--brand-100)] flex items-center justify-center mb-5">
                                <s.icon size={20} className="text-[var(--brand-700)]" />
                            </div>
                            <h3 className="text-xl text-[var(--text-primary)] mb-3">{s.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{s.body}</p>
                            <ul className="space-y-2">
                                {s.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                        <CheckCircle2 size={15} className="text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   PARA QUIÉN — inmobiliarias vs desarrolladoras
   ───────────────────────────────────────────── */

const AUDIENCES = [
    {
        kind: 'Inmobiliarias',
        icon: Building2,
        tagline: 'Captación y usados',
        description:
            'Para inmobiliarias que trabajan con propiedades de terceros y necesitan más leads calificados que atender con equipos chicos.',
        bullets: [
            'Captamos propiedades para vender y alquilar',
            'Cada propiedad mide leads, visitas y cierres',
            'Reportes para dueños de propiedad listos para enviar',
            'Pipeline con etapas reales: visita → reserva → escritura',
        ],
    },
    {
        kind: 'Desarrolladoras',
        icon: TrendingUp,
        tagline: 'Emprendimientos en pozo y terminados',
        description:
            'Para desarrolladoras que están vendiendo uno o varios emprendimientos y necesitan ver absorción de unidades, CAC por proyecto y pipeline en tiempo real.',
        bullets: [
            'Inventario por proyecto con estado de cada unidad',
            'Tasa de absorción mensual visible para la dirección',
            'CAC por unidad calculado automáticamente',
            'Dashboard de proyectos cruzando leads, visitas y reservas',
        ],
    },
];

function ParaQuien() {
    return (
        <section id="para-quien" className="relative py-28 bg-[var(--surface-2)]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-semibold tracking-widest text-[var(--brand-700)] uppercase">
                        Para quién
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl text-[var(--text-primary)]">
                        Pensado para cómo opera tu negocio
                    </h2>
                    <p className="mt-4 text-lg text-[var(--text-secondary)]">
                        No es el mismo juego vender un departamento usado que colocar 80 unidades de un pozo. El CRM se adapta a cada uno.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {AUDIENCES.map((a) => (
                        <div key={a.kind} className="card-surface p-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-[var(--brand-700)] flex items-center justify-center">
                                    <a.icon size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-[var(--text-muted)]">{a.tagline}</div>
                                    <h3 className="text-2xl text-[var(--text-primary)]">{a.kind}</h3>
                                </div>
                            </div>
                            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mt-4 mb-6">
                                {a.description}
                            </p>
                            <ul className="space-y-2.5">
                                {a.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--text-primary)]">
                                        <CheckCircle2 size={16} className="text-[var(--brand-600)] mt-0.5 flex-shrink-0" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   CÓMO FUNCIONA
   ───────────────────────────────────────────── */

const STEPS = [
    {
        num: '01',
        icon: Zap,
        title: 'Entrevista + setup',
        body: 'Nos sentamos, mapeamos tu inventario, tus fuentes de leads y tu equipo. Conectamos Meta Ads, WhatsApp oficial y el CRM en menos de dos semanas.',
    },
    {
        num: '02',
        icon: Target,
        title: 'Campañas + automatizaciones',
        body: 'Lanzamos creativos, configuramos el flujo de verificación de leads por WhatsApp y dejamos templates aprobados para reactivación.',
    },
    {
        num: '03',
        icon: TrendingUp,
        title: 'Operación y medición',
        body: 'Tu equipo trabaja el pipeline, nosotros optimizamos anuncios y medimos todo. Revisión mensual con métricas claras, no PowerPoints vacíos.',
    },
];

function ComoFunciona() {
    return (
        <section id="como-funciona" className="relative py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-semibold tracking-widest text-[var(--brand-700)] uppercase">
                        Cómo funciona
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl text-[var(--text-primary)]">
                        En producción en menos de 14 días
                    </h2>
                    <p className="mt-4 text-lg text-[var(--text-secondary)]">
                        Un proceso probado con clientes en Buenos Aires y Entre Ríos. Sin proyectos eternos de integración.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-6">
                    {/* connector line on desktop */}
                    <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px border-t-2 border-dashed border-[var(--brand-200)]" aria-hidden="true" />

                    {STEPS.map((s) => (
                        <div key={s.num} className="relative bg-white rounded-2xl p-7 border border-[var(--border-subtle)]">
                            <div className="flex items-start justify-between mb-5">
                                <div className="w-11 h-11 rounded-xl bg-[var(--brand-600)] flex items-center justify-center">
                                    <s.icon size={20} className="text-white" />
                                </div>
                                <span className="text-[42px] font-bold text-[var(--brand-100)] leading-none tracking-tighter">
                                    {s.num}
                                </span>
                            </div>
                            <h3 className="text-lg text-[var(--text-primary)] mb-2">{s.title}</h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   TESTIMONIOS
   ───────────────────────────────────────────── */

const TESTIMONIALS = [
    {
        quote:
            'En dos meses pasamos de operar WhatsApp desde cuatro celulares distintos a un inbox compartido. La dueña recupera horas por semana y los agentes responden más rápido.',
        name: 'Martina Soler',
        role: 'Directora',
        company: 'Soler Propiedades',
        location: 'Palermo, CABA',
    },
    {
        quote:
            'Nos ordenó la cabeza. Antes mirábamos Excel los lunes, ahora el dashboard me dice el CPL por proyecto y qué agente está respondiendo a tiempo y cuál no. Cambió cómo conducimos.',
        name: 'Fernando Zurita',
        role: 'Gerente Comercial',
        company: 'Torres del Este',
        location: 'Paraná, Entre Ríos',
    },
    {
        quote:
            'La integración con Meta fue fluida. Ahora cada venta se atribuye al anuncio que la originó y sabemos exactamente qué creativos escalar. Dejamos de tirar plata en campañas que no movían la aguja.',
        name: 'Lucía Bermúdez',
        role: 'Dueña',
        company: 'Bermúdez Inversiones',
        location: 'San Isidro, Buenos Aires',
    },
];

function Casos() {
    return (
        <section id="casos" className="relative py-28 bg-[var(--brand-950)] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20 noise-bg" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)' }} />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--brand-700)] opacity-20 blur-3xl" aria-hidden="true" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-semibold tracking-widest text-[var(--brand-300)] uppercase">
                        Clientes
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl text-white">
                        Trabajamos con equipos que venden de verdad
                    </h2>
                    <p className="mt-4 text-lg text-[var(--brand-100)]">
                        Inmobiliarias y desarrolladoras de Buenos Aires y Entre Ríos que dejaron de operar con planillas y pegaron un salto operativo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t) => (
                        <figure key={t.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 flex flex-col">
                            <Quote size={28} className="text-[var(--brand-300)] mb-4" aria-hidden="true" />
                            <blockquote className="text-[15px] leading-relaxed text-white flex-1">
                                {t.quote}
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-white/10">
                                <div className="text-sm font-semibold text-white">{t.name}</div>
                                <div className="text-xs text-[var(--brand-200)]">
                                    {t.role} · {t.company}
                                </div>
                                <div className="text-xs text-white/50 mt-0.5">{t.location}</div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   CTA final
   ───────────────────────────────────────────── */

function CTAFinal() {
    return (
        <section className="relative py-28">
            <div className="max-w-5xl mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-700)] via-[var(--brand-600)] to-[var(--brand-500)] px-8 py-20 md:px-16 md:py-24 text-center">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden="true" />
                    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl text-white mb-5 max-w-3xl mx-auto">
                            ¿Listo para ordenar tu operación?
                        </h2>
                        <p className="text-lg text-white/85 max-w-2xl mx-auto mb-10">
                            Una charla de 30 minutos alcanza para ver si somos para vos. Sin discurso de venta, sin compromiso.
                        </p>
                        <a href={MAILTO}>
                            <Button size="lg" className="bg-white text-[var(--brand-800)] hover:bg-[var(--brand-50)] shadow-xl">
                                Agendá una demo <ArrowRight size={18} />
                            </Button>
                        </a>
                        <p className="mt-6 text-sm text-white/70">
                            Respondemos dentro de 24 h hábiles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */

function Footer() {
    return (
        <footer className="border-t border-[var(--border-subtle)] py-12 bg-[var(--surface-1)]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <Logo />
                        <p className="mt-3 text-xs text-[var(--text-muted)] max-w-sm">
                            Agencia digital para inmobiliarias y desarrolladoras. Buenos Aires · Entre Ríos.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-sm text-[var(--text-secondary)]">
                        <a href="#servicios" className="hover:text-[var(--brand-700)] transition-colors">Servicios</a>
                        <a href="#para-quien" className="hover:text-[var(--brand-700)] transition-colors">Para quién</a>
                        <a href="#como-funciona" className="hover:text-[var(--brand-700)] transition-colors">Cómo funciona</a>
                        <a href={MAILTO} className="hover:text-[var(--brand-700)] transition-colors">hola@growthbrick.tech</a>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                    © {new Date().getFullYear()} GrowthBrick. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function Page() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Servicios />
                <ParaQuien />
                <ComoFunciona />
                <Casos />
                <CTAFinal />
            </main>
            <Footer />
        </>
    );
}
