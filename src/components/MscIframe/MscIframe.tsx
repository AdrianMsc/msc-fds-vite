import { useState, useEffect, useRef } from 'react';
import MscButton from '../MscButton';
import { faExpand, faRefresh, faCompress } from '@fortawesome/free-solid-svg-icons';

interface MscIframeProps {
  url: string;
}

const MscIframe = ({ url }: MscIframeProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFixed = () => {
    setIsFixed(!isFixed);
  };

  const handleRefresh = () => {
    const iframe = containerRef.current?.querySelector('iframe');
    if (iframe) {
      iframe.src = url;
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFixed) {
        setIsFixed(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isFixed]);

  return (
    <div ref={containerRef} className={isFixed ? 'fixed inset-0 z-50 bg-white' : ''}>
      <div className="flex gap-2 mb-4">
        <MscButton label="Primary" variant="solid" icon={faRefresh} onClick={handleRefresh} />

        <MscButton
          label="Primary"
          variant="solid"
          icon={isFixed ? faCompress : faExpand}
          onClick={toggleFixed}
        />
      </div>

      {!isFixed && <hr className="mb-4" />}
      <iframe
        title="Homepage V2"
        src={url}
        style={{
          width: '100%',
          height: isFixed ? 'calc(100vh - 60px)' : '100vh',
          border: '0',
          display: 'block',
        }}
      />
    </div>
  );
};

export default MscIframe;
