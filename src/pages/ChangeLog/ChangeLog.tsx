import React, { useEffect, useRef } from 'react';
import { changelog } from './constants';

const versionBadge = (version: string) => {
  const major = Number(version.charAt(0));
  if (major >= 2) return 'bg-blue-600 text-white';
  if (major === 1) return 'bg-indigo-500 text-white';
  return 'bg-gray-400 text-white';
};

const sectionIcon = {
  added: { icon: '➕', label: 'Added', color: 'text-green-700' },
  fixed: { icon: '🔧', label: 'Fixed', color: 'text-yellow-700' },
  removed: { icon: '🗑️', label: 'Removed', color: 'text-red-700' },
  security: { icon: '🛡️', label: 'Security', color: 'text-blue-700' },
  improved: { icon: '⚡', label: 'Improved', color: 'text-purple-700' },
} as const;

type SectionKey = keyof typeof sectionIcon;

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-4 transition-all duration-500 ease-out"
    >
      {children}
    </div>
  );
};

const ChangeLog: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">📜 Changelog</h1>
      <p className="mb-10 text-gray-500 max-w-2xl">
        This page contains the official changelog for the project, documenting
        all meaningful updates, new features, improvements, and fixes across
        versions. Use it to stay informed about recent changes and the evolution
        of the product over time.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 hidden md:block" />

        {changelog.map(({ version, date, added, fixed, removed, security, improved }) => {
          const sections: { key: SectionKey; items: string[] }[] = [
            ...(added ? [{ key: 'added' as const, items: added }] : []),
            ...(security ? [{ key: 'security' as const, items: security }] : []),
            ...(improved ? [{ key: 'improved' as const, items: improved }] : []),
            ...(fixed ? [{ key: 'fixed' as const, items: fixed }] : []),
            ...(removed ? [{ key: 'removed' as const, items: removed }] : []),
          ];

          return (
            <FadeInSection key={version}>
              <div className="relative flex items-start gap-4 md:gap-6 mb-10 group">
                {/* Timeline dot */}
                <div className="hidden md:flex relative z-10 mt-1.5">
                  <div className={`w-3 h-3 rounded-full border-2 border-white shadow ${
                    Number(version.charAt(0)) >= 2
                      ? 'bg-blue-600'
                      : Number(version.charAt(0)) === 1
                      ? 'bg-indigo-500'
                      : 'bg-gray-400'
                  }`} />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 md:p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${versionBadge(version)}`}>
                      v{version}
                    </span>
                    <span className="text-sm text-gray-400">{date}</span>
                  </div>

                  {/* Sections */}
                  <div className="space-y-4">
                    {sections.map(({ key, items }) => {
                      const meta = sectionIcon[key];
                      return (
                        <div key={key}>
                          <h3 className={`font-semibold ${meta.color} mb-1.5 flex items-center gap-1.5`}>
                            <span>{meta.icon}</span>
                            <span>{meta.label}</span>
                          </h3>
                          <ul className="space-y-1">
                            {items.map((item, i) => (
                              <li
                                key={`${version}-${key}-${i}`}
                                className="text-gray-700 text-sm leading-relaxed pl-6 relative"
                              >
                                <span className="absolute left-0 top-0 text-gray-300">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};

export default ChangeLog;
