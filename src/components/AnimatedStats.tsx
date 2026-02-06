import { useRef, useEffect, useState } from 'react';

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

function useCountUp(end: number, duration: number, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView, hasAnimated]);

  return { count, ref };
}

const StatCard = ({ 
  number, 
  suffix = '', 
  label, 
  icon, 
  duration = 2000,
  variant = 'light'
}: { 
  number: number; 
  suffix?: string; 
  label: string; 
  icon: string; 
  duration?: number;
  variant?: 'dark' | 'light';
}) => {
  const { count, ref } = useCountUp(number, duration);

  if (variant === 'dark') {
    return (
      <div ref={ref} className="text-center p-6 md:p-8 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 group">
        <div className="text-4xl md:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div className="text-2xl md:text-4xl font-bold text-accent tabular-nums">{count}{suffix}</div>
        <div className="text-sm md:text-base text-white/80 font-medium mt-1">{label}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
      <div className="text-4xl md:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="text-2xl md:text-4xl font-bold text-primary tabular-nums">{count}{suffix}</div>
      <div className="text-sm md:text-base text-muted-foreground font-medium mt-1">{label}</div>
    </div>
  );
};

const heroStats = [
  { number: 500, suffix: '+', label: 'Partner Schools', icon: '🏫' },
  { number: 95, suffix: '%', label: 'Success Rate', icon: '📈', duration: 1500 },
  { number: 5, suffix: '+', label: 'Years of Experience', icon: '📅', duration: 1200 },
  { number: 50, suffix: '+', label: 'Awards Won', icon: '🏆' },
];

const defaultStats = [
  { number: 10000, suffix: '+', label: 'Active Students', icon: '🎓', duration: 2500 },
  { number: 500, suffix: '+', label: 'Video Lectures', icon: '📹' },
  { number: 50, suffix: '+', label: 'Partner Schools', icon: '🏫' },
  { number: 95, suffix: '%', label: 'Success Rate', icon: '📈', duration: 1500 },
];

export default function AnimatedStats({ variant = 'light', preset = 'default' }: { variant?: 'dark' | 'light'; preset?: 'hero' | 'default' }) {
  const stats = preset === 'hero' ? heroStats : defaultStats;
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {stats.map((s, i) => (
        <StatCard key={i} number={s.number} suffix={s.suffix} label={s.label} icon={s.icon} duration={s.duration ?? 2000} variant={variant} />
      ))}
    </div>
  );
}
