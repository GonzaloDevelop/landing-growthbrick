'use client';

import { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/Logo';
import {
    ArrowRight,
    Play,
    Menu,
    X,
    Webhook,
    MessageSquare,
    Sparkles,
    Route,
    Kanban,
    Target,
    Home,
    Palette,
    Users,
    Shield,
    Instagram,
    Youtube,
} from 'lucide-react';

const MAILTO = 'mailto:hola@growthbrick.tech?subject=Quiero%20ver%20una%20demo%20de%20GrowthBrick';

/* ─────────────────────────────────────────────
   NAV — improved liquid glass
   ───────────────────────────────────────────── */

function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const heroH = window.innerHeight - 60;
            setScrolled(window.scrollY > heroH);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''
                }`}
        >
            <div className="container-x">
                <div
                    className="nav-glass mt-4 pl-3 pr-3 md:pl-5 md:pr-3 py-2 flex items-center justify-between animate-blur-fade-up"
                    style={{ animationDelay: '0ms' }}
                >
                    <a
                        href="#"
                        className="nav-wordmark px-3 py-2 font-display text-lg flex items-center gap-2.5"
                        style={{ fontWeight: 600, letterSpacing: '-0.02em' }}
                    >
                        <Logo
                            withWordmark={false}
                            size={26}
                            className="nav-logo-glow"
                        />
                        GrowthBrick
                    </a>

                    <nav
                        className="hidden lg:flex items-center gap-7 text-sm"
                        aria-label="Navegación principal"
                    >
                        <a
                            className="nav-link-muted animate-blur-fade-up"
                            style={{ animationDelay: '120ms' }}
                            href="#solucion"
                        >
                            Producto
                        </a>
                        <a
                            className="nav-link-muted animate-blur-fade-up"
                            style={{ animationDelay: '180ms' }}
                            href="#funciones"
                        >
                            Funciones
                        </a>
                        <a
                            className="nav-link-muted animate-blur-fade-up"
                            style={{ animationDelay: '240ms' }}
                            href="#testimonios"
                        >
                            Testimonios
                        </a>
                        <a
                            className="nav-link-muted animate-blur-fade-up"
                            style={{ animationDelay: '300ms' }}
                            href="#construido"
                        >
                            Nosotros
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <span
                            aria-disabled="true"
                            className="nav-inactive px-4 py-2 text-sm animate-blur-fade-up inline-flex items-center gap-2"
                            style={{ animationDelay: '320ms' }}
                        >
                            <span className="pulse-dot" />
                            Próximamente
                        </span>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="nav-burger lg:hidden ml-1 p-2"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label="Menú"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div
                    id="mobile-menu"
                    className="lg:hidden bg-white border-b border-[var(--border-soft)]"
                >
                    <div className="container-x py-4 flex flex-col gap-3 text-sm">
                        <a href="#solucion" className="py-2" onClick={() => setOpen(false)}>
                            Producto
                        </a>
                        <a href="#funciones" className="py-2" onClick={() => setOpen(false)}>
                            Funciones
                        </a>
                        <a href="#testimonios" className="py-2" onClick={() => setOpen(false)}>
                            Testimonios
                        </a>
                        <a href="#construido" className="py-2" onClick={() => setOpen(false)}>
                            Nosotros
                        </a>
                        <a href={MAILTO} className="py-2" onClick={() => setOpen(false)}>
                            Contactanos
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

/* ─────────────────────────────────────────────
   HERO — video background
   ───────────────────────────────────────────── */

function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let dir = 1;
        let rafId = null;

        const reverseStep = () => {
            if (dir !== -1) return;
            const next = video.currentTime - 1 / 30;
            if (next <= 0.05) {
                dir = 1;
                video.currentTime = 0;
                video.play().catch(() => { });
                return;
            }
            video.currentTime = next;
            rafId = requestAnimationFrame(reverseStep);
        };

        const onEnded = () => {
            try {
                video.playbackRate = -1;
                const p = video.play();
                if (p && typeof p.then === 'function') {
                    p.catch(() => {
                        video.playbackRate = 1;
                        video.pause();
                        dir = -1;
                        rafId = requestAnimationFrame(reverseStep);
                    });
                }
            } catch {
                video.playbackRate = 1;
                video.pause();
                dir = -1;
                rafId = requestAnimationFrame(reverseStep);
            }
        };

        const onPlay = () => {
            if (video.playbackRate >= 0) dir = 1;
        };

        const onLoaded = () => {
            video.play().catch(() => { });
        };

        video.addEventListener('loadedmetadata', onLoaded);
        video.addEventListener('ended', onEnded);
        video.addEventListener('play', onPlay);

        return () => {
            video.removeEventListener('loadedmetadata', onLoaded);
            video.removeEventListener('ended', onEnded);
            video.removeEventListener('play', onPlay);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section
            data-screen-label="01 Hero"
            className="relative w-full"
            style={{ height: '100vh', minHeight: 680, background: '#0A0A0A' }}
        >
            <video
                ref={videoRef}
                className="hero-video"
                autoPlay
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
            >
                <source src="/transition_video.mp4" type="video/mp4" />
            </video>

            <div className="hero-overlay" aria-hidden="true" />

            <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24">
                <div className="container-x w-full">
                    <div className="grid lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <h1
                                className="hero-h1 text-white animate-blur-fade-up"
                                style={{ animationDelay: '400ms' }}
                            >
                                Que la IA filtre.
                                <br />
                                Que tu equipo cierre.
                            </h1>
                            <p
                                className="mt-6 max-w-xl text-white/80 text-lg md:text-xl leading-relaxed animate-blur-fade-up"
                                style={{ animationDelay: '600ms' }}
                            >
                                Te instalamos un sistema completo: anuncios en Meta apuntados a tu
                                comprador ideal, IA que filtra leads 24/7 y un CRM nativo donde tu
                                equipo solo cierra. Sin portales. Sin curiosos. Sin leads basura.
                            </p>
                            <div
                                className="mt-8 flex flex-wrap items-center gap-3 animate-blur-fade-up"
                                style={{ animationDelay: '800ms' }}
                            >
                                <span
                                    aria-disabled="true"
                                    className="btn-inactive-dark px-8 py-3 inline-flex items-center gap-2.5 text-sm"
                                >
                                    <span className="pulse-dot" />
                                    Próximamente abrimos más cupos
                                </span>
                                <a
                                    href="#solucion"
                                    className="liquid-glass rounded-lg px-7 py-3 text-sm font-semibold inline-flex items-center gap-2"
                                >
                                    Ver cómo funciona
                                    <Play size={14} />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-4 lg:flex lg:justify-end">
                            <div
                                className="liquid-glass rounded-full px-5 py-2.5 text-xs md:text-sm font-medium animate-blur-fade-up inline-flex items-center gap-2.5"
                                style={{ animationDelay: '1000ms' }}
                            >
                                <span className="pulse-dot" />
                                Cupos completos · Próximamente abrimos más
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   PROBLEMA
   ───────────────────────────────────────────── */

function Problema() {
    return (
        <section
            data-screen-label="02 Problema"
            className="section-pad bg-[var(--bg-light)]"
        >
            <div className="container-x">
                <div className="reveal">
                    <div className="eyebrow mb-8">El problema</div>
                    <p className="editorial-p max-w-4xl">
                        Pagás <span style={{ color: 'var(--brand-600)' }}>portales</span> que
                        venden tus contactos a la competencia. Tus agentes pierden el{' '}
                        <span style={{ color: 'var(--brand-600)' }}>70%</span> del día con
                        curiosos, consultas sin presupuesto y formularios que nunca van a cerrar.
                        Y los compradores reales — los pocos que sí están listos — se van con
                        quien los atiende primero.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   SOLUCIÓN
   ───────────────────────────────────────────── */

const STEPS = [
    {
        num: '01',
        title: 'Captamos al comprador real con Meta Ads',
        body: 'Diseñamos creativos y audiencias por barrio, ticket y perfil. Apuntamos cada propiedad al comprador exacto que la busca en Facebook e Instagram — sin pagar portales que reciclan tus contactos.',
    },
    {
        num: '02',
        title: 'La IA califica antes de que tu equipo conteste',
        body: 'Cada lead pasa primero por la IA: detecta intención, presupuesto y timing. Descarta automáticamente a quien no tiene capacidad real de compra, y solo deriva al agente los leads listos para visitar.',
    },
    {
        num: '03',
        title: 'Tu equipo cierra. Vos ves los números.',
        body: 'Los agentes ven leads pre-calificados con score y propiedad de interés. Vos ves qué creativo trae más cierres, qué audiencia convierte y cuánto cuesta cada venta — todo en tiempo real.',
    },
];

function Solucion() {
    return (
        <section
            data-screen-label="03 Solución"
            id="solucion"
            className="section-pad bg-[var(--bg-light)] border-t border-[var(--border-soft)]"
        >
            <div className="container-x">
                <div className="reveal max-w-4xl">
                    <div className="eyebrow mb-6">Cómo funciona</div>
                    <h2 className="section-title">
                        De Meta Ads al cierre, en una sola operación.
                    </h2>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-12">
                    {STEPS.map((s, i) => (
                        <article
                            key={s.num}
                            className="reveal"
                            style={{ animationDelay: `${60 + i * 80}ms` }}
                        >
                            <div className="step-card">
                                <div
                                    className="font-display text-base"
                                    style={{ fontWeight: 500, color: 'var(--accent)' }}
                                >
                                    {s.num}
                                </div>
                                <h3
                                    className="mt-6 font-display text-2xl"
                                    style={{
                                        fontWeight: 400,
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.15,
                                    }}
                                >
                                    {s.title}
                                </h3>
                                <p className="mt-4 text-[var(--ink-muted)] text-[1.125rem] lg:text-base leading-relaxed">
                                    {s.body}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   STATS
   ───────────────────────────────────────────── */

const STATS = [
    {
        target: 72,
        prefix: '+',
        suffix: '',
        decimals: 0,
        title: 'horas/mes ahorradas por agente',
        body: 'Lo que la IA califica mientras tu equipo duerme.',
    },
    {
        target: 83,
        prefix: '',
        suffix: '%',
        decimals: 0,
        title: 'de leads descartados automáticamente',
        body: 'Curiosos, fuera de presupuesto, fuera de zona — la IA los filtra antes de que lleguen al agente.',
    },
    {
        target: 2,
        prefix: '',
        suffix: ' min',
        decimals: 0,
        suffixSmall: true,
        title: 'tiempo promedio a primera respuesta',
        body: '24/7. Mientras la competencia tarda 8 horas.',
    },
    {
        target: 7,
        prefix: '',
        suffix: ' días',
        decimals: 0,
        suffixSmall: true,
        title: 'para los primeros leads calificados',
        body: 'Desde que arrancamos, las primeras visitas con intención real entran al pipeline.',
    },
];

function StatNum({ target, prefix, suffix, decimals, suffixSmall }) {
    const ref = useRef(null);
    const [val, setVal] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) {
            setVal(target);
            return;
        }
        let raf = null;
        let started = false;
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animate = () => {
            const dur = 1800;
            const start = performance.now();
            const tick = (now) => {
                const t = Math.min(1, (now - start) / dur);
                setVal(easeOutCubic(t) * target);
                if (t < 1) raf = requestAnimationFrame(tick);
                else setVal(target);
            };
            raf = requestAnimationFrame(tick);
        };

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !started) {
                        started = true;
                        animate();
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.4 }
        );
        io.observe(node);
        return () => {
            io.disconnect();
            if (raf) cancelAnimationFrame(raf);
        };
    }, [target]);

    const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

    return (
        <div ref={ref} className="stat-num">
            {prefix && <span>{prefix}</span>}
            <span>{formatted}</span>
            {suffix && (
                <span className={suffixSmall ? 'stat-suffix-small' : undefined}>{suffix}</span>
            )}
        </div>
    );
}

function Stats() {
    return (
        <section
            data-screen-label="04 Stats"
            id="stats"
            className="section-pad"
            style={{ background: 'var(--bg-alt)' }}
        >
            <div className="container-x">
                <div className="reveal max-w-3xl">
                    <div className="eyebrow mb-6">En promedio, por mes</div>
                    <h2 className="section-title">
                        Lo que GrowthBrick le devuelve a tu operación.
                    </h2>
                </div>

                <div className="mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 sm:gap-y-14 lg:gap-y-20 lg:gap-x-14">
                    {STATS.map((s, i) => (
                        <div
                            key={s.title}
                            className="reveal stat-card"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <div className="stat-index">/ {String(i + 1).padStart(2, '0')}</div>
                            <div className="mt-6">
                                <StatNum {...s} />
                            </div>
                            <div className="stat-title mt-6">{s.title}</div>
                            <p className="stat-body mt-3">{s.body}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-20 text-base lg:text-sm text-[var(--ink-muted)] leading-relaxed">
                    Datos promedio de inmobiliarias y desarrolladoras activas en GrowthBrick
                    durante los últimos 90 días.
                </p>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   FUNCIONES
   ───────────────────────────────────────────── */

const FEATURES = [
    {
        icon: Palette,
        t: 'Creativos de Meta Ads para inmobiliarias y desarrolladoras',
        d: 'Anuncios pensados para vender propiedades y unidades en pozo, no plantillas genéricas.',
    },
    {
        icon: Users,
        t: 'Audiencias por barrio, ticket y perfil',
        d: 'Apuntamos cada propiedad al comprador exacto que la busca.',
    },
    {
        icon: Webhook,
        t: 'Webhook nativo Meta Lead Ads',
        d: 'Cada lead aparece en tu pipeline en menos de 5 segundos.',
    },
    {
        icon: MessageSquare,
        t: 'WhatsApp Cloud API multi-cuenta',
        d: 'Conectá todos tus números oficiales en una bandeja única.',
    },
    {
        icon: Sparkles,
        t: 'IA de calificación con score y contexto',
        d: 'Cada lead llega con score 0–100 y resumen de la conversación.',
    },
    {
        icon: Route,
        t: 'Distribución automática a agentes',
        d: 'Round-robin por zona o cartera, sin pelearse por leads.',
    },
    {
        icon: Kanban,
        t: 'Pipeline de 9 etapas para venta inmobiliaria',
        d: 'De primer contacto a escritura, sin forzar etapas genéricas.',
    },
    {
        icon: Target,
        t: 'Atribución ad-to-property completa',
        d: 'Sabé qué creativo, qué campaña y qué propiedad cerraron.',
    },
    {
        icon: Home,
        t: 'Portal del propietario',
        d: 'Tu cliente ve avances de venta sin tener que llamarte.',
    },
];

function Funciones() {
    return (
        <section
            data-screen-label="05 Funciones"
            id="funciones"
            className="section-pad bg-[var(--bg-light)]"
        >
            <div className="container-x">
                <div className="reveal max-w-4xl">
                    <div className="eyebrow mb-6">Funciones</div>
                    <h2 className="section-title">
                        Todo lo que tu equipo necesita.
                        <br />
                        Nada de lo que sobra.
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-10">
                    {FEATURES.map((f, idx) => (
                        <article
                            key={f.t}
                            className="reveal feat-row"
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            <div className="feat-icon">
                                <f.icon size={24} strokeWidth={1.75} />
                            </div>
                            <h3 className="mt-5 font-semibold text-[1.25rem] lg:text-[1.125rem] text-[var(--ink)] leading-snug">
                                {f.t}
                            </h3>
                            <p className="mt-3 text-[1.125rem] lg:text-base text-[var(--ink-muted)] leading-relaxed">
                                {f.d}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   CONSTRUIDO DESDE ADENTRO
   ───────────────────────────────────────────── */

function Construido() {
    return (
        <section
            data-screen-label="06 Construido"
            id="construido"
            className="section-pad bg-[var(--bg-light)] border-t border-[var(--border-soft)]"
        >
            <div className="container-x">
                <div className="reveal">
                    <div className="eyebrow mb-8">Construido desde adentro</div>
                    <blockquote
                        className="editorial-p max-w-3xl"
                        style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}
                    >
                        <span aria-hidden="true" style={{ color: 'var(--brand-600)' }}>
                            “
                        </span>
                        GrowthBrick no es un CRM genérico con estética inmobiliaria. Fue diseñado
                        desde cero para el negocio argentino: corretaje, desarrollos, alquileres y
                        ventas. Cada pipeline, cada campo y cada métrica responde a cómo opera
                        realmente una inmobiliaria o desarrolladora. La diferencia es simple:
                        otros CRM vienen del SaaS. GrowthBrick viene del negocio inmobiliario.
                        <span aria-hidden="true" style={{ color: 'var(--brand-600)' }}>
                            ”
                        </span>
                    </blockquote>
                    <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)] border border-[var(--border-soft)] rounded-full px-3 py-1.5">
                        <span
                            className="inline-block w-1.5 h-1.5 rounded-full"
                            style={{ background: 'var(--brand-600)' }}
                        />
                        Hecho en Argentina
                    </div>
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
            'Antes atendíamos 60 WhatsApps por día y cerrábamos 2 ventas. Ahora atendemos 15 calificados y cerramos 6. Triplicamos las ventas con menos ruido.',
        name: 'Marina G.',
        role: 'Directora Comercial',
        result: '+3 ventas en 45 días',
    },
    {
        quote:
            'La IA me descarta a los curiosos antes de que me hagan perder media hora. Recuperé 2 horas reales por día y dejé de pagar portales.',
        name: 'Diego P.',
        role: 'Corredor inmobiliario',
        result: '4 exclusivas captadas en 30 días',
    },
    {
        quote:
            'Es el primer sistema que entiende cómo se vende una propiedad en Argentina. No tuve que adaptar nada — los anuncios, la IA y el CRM ya hablan el mismo idioma.',
        name: 'Laura M.',
        role: 'Socia · Desarrolladora',
        result: '2 unidades en pozo en 30 días',
    },
];

function Testimonios() {
    return (
        <section
            data-screen-label="07 Testimonios"
            id="testimonios"
            className="section-pad"
            style={{ background: 'var(--bg-alt)' }}
        >
            <div className="container-x">
                <div className="reveal max-w-4xl">
                    <div className="eyebrow mb-6">Resultados</div>
                    <h2 className="section-title">
                        Inmobiliarias y desarrolladoras que dejaron de pagar portales.
                        <br />Y empezaron a cerrar más.
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {TESTIMONIALS.map((t, i) => (
                        <figure
                            key={t.name}
                            className="reveal"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <span
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.10em] rounded-full px-3 py-1.5 mb-5"
                                style={{
                                    background: 'var(--brand-50)',
                                    color: 'var(--brand-700)',
                                    border: '1px solid var(--brand-200)',
                                }}
                            >
                                <span
                                    className="inline-block w-1.5 h-1.5 rounded-full"
                                    style={{ background: 'var(--brand-600)' }}
                                />
                                {t.result}
                            </span>
                            <blockquote
                                className="font-display text-[1.5rem] lg:text-[1.35rem] leading-[1.35]"
                                style={{ fontWeight: 500, letterSpacing: '-0.015em' }}
                            >
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-6 text-base lg:text-sm text-[var(--ink-muted)]">
                                <div className="font-semibold text-[var(--ink)] text-[1.0625rem] lg:text-base">
                                    {t.name}
                                </div>
                                {t.role}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   CTA FINAL
   ───────────────────────────────────────────── */

function CTAFinal() {
    return (
        <section className="section-pad bg-[var(--bg-light)]">
            <div className="container-x">
                <div className="reveal text-center max-w-2xl mx-auto">
                    <div className="eyebrow mb-6">Próximamente</div>
                    <h2 className="section-title">
                        Estamos completos
                        <br />
                        por ahora.
                    </h2>
                    <p className="mt-6 text-[var(--ink-muted)] text-lg md:text-xl leading-relaxed">
                        Trabajamos con un número limitado de inmobiliarias y desarrolladoras
                        para garantizar resultados. Próximamente abrimos más cupos — mientras
                        tanto, podés recorrer cómo funciona el sistema.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
                        <span
                            aria-disabled="true"
                            className="btn-inactive px-8 py-3 inline-flex items-center gap-2.5 text-sm"
                        >
                            <span className="pulse-dot" />
                            Próximamente abrimos más cupos
                        </span>
                        <a
                            href="#funciones"
                            className="px-7 py-3 text-sm font-semibold inline-flex items-center gap-2 rounded-lg border border-[var(--border-soft)] hover:border-[var(--ink)] transition-colors"
                        >
                            Ver qué incluye
                        </a>
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
        <footer className="bg-[var(--bg-dark)] text-[var(--ink-on-dark)]">
            <div className="container-x py-20">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <div
                            className="font-display text-4xl md:text-5xl"
                            style={{ fontWeight: 400, letterSpacing: '-0.03em' }}
                        >
                            GrowthBrick
                        </div>
                        <p className="mt-4 text-white/60 max-w-sm">
                            La IA califica. Tu equipo cierra.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                        <div>
                            <div className="text-white/40 uppercase text-xs tracking-[0.12em] font-semibold mb-4">
                                Producto
                            </div>
                            <ul className="space-y-2.5 text-white/85">
                                <li>
                                    <a href="#funciones" className="hover:text-white">
                                        Funciones
                                    </a>
                                </li>
                                <li>
                                    <a href="#solucion" className="hover:text-white">
                                        Cómo funciona
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonios" className="hover:text-white">
                                        Testimonios
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-white/40 uppercase text-xs tracking-[0.12em] font-semibold mb-4">
                                Empresa
                            </div>
                            <ul className="space-y-2.5 text-white/85">
                                <li>
                                    <a href="#construido" className="hover:text-white">
                                        Quiénes somos
                                    </a>
                                </li>
                                <li>
                                    <a href={MAILTO} className="hover:text-white">
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-white/40 uppercase text-xs tracking-[0.12em] font-semibold mb-4">
                                Legal
                            </div>
                            <ul className="space-y-2.5 text-white/85">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Términos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="text-white/50 text-sm">
                        © {new Date().getFullYear()} GrowthBrick. Hecho en Argentina.
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/growthbrick"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-2 rounded-md text-white/60 hover:text-white hover:bg-white/5"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://www.youtube.com/@GrowthBrick"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="p-2 rounded-md text-white/60 hover:text-white hover:bg-white/5"
                        >
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

function RevealObserver() {
    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const els = document.querySelectorAll('.reveal');
        if (reduced) {
            els.forEach((el) => {
                el.style.opacity = 1;
            });
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
    return null;
}

export default function Page() {
    return (
        <>
            <a href="#main" className="skip-link">
                Saltar al contenido
            </a>
            <Nav />
            <main id="main">
                <Hero />
                <Problema />
                <Solucion />
                <Stats />
                <Funciones />
                <Construido />
                <Testimonios />
                <CTAFinal />
            </main>
            <Footer />
            <RevealObserver />
        </>
    );
}
