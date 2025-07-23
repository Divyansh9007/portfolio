import { useState, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDeleting?: number;
  loop?: boolean;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDeleting = 2000,
  loop = true,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typingRef = useRef<number | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    let direction = 'typing';
    let timeoutId: number | null = null;

    const handleTyping = () => {
      if (direction === 'typing') {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
          typingRef.current = window.setTimeout(handleTyping, typingSpeed);
        } else {
          if (loop) {
            timeoutId = window.setTimeout(() => {
              direction = 'deleting';
              typingRef.current = window.setTimeout(handleTyping, deletingSpeed);
            }, delayBeforeDeleting);
          }
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(text.substring(0, currentIndex - 1));
          currentIndex--;
          typingRef.current = window.setTimeout(handleTyping, deletingSpeed);
        } else {
          direction = 'typing';
          // Small pause before typing again
          timeoutId = window.setTimeout(() => {
            typingRef.current = window.setTimeout(handleTyping, typingSpeed);
          }, 500);
        }
      }
    };

    typingRef.current = window.setTimeout(handleTyping, typingSpeed);

    return () => {
      if (typingRef.current) window.clearTimeout(typingRef.current);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [text, typingSpeed, deletingSpeed, delayBeforeDeleting, loop]);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-1 h-5 ml-1 bg-blue-600 dark:bg-blue-400 ${isTyping ? 'animate-blink' : ''}`}></span>
    </span>
  );
};

export default AnimatedText;