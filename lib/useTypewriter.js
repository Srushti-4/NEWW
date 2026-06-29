'use client';

import { useState, useEffect } from 'react';

/**
 * Typewriter effect that cycles through an array of strings.
 * @param {string[]} words - Array of words/phrases to cycle through
 * @param {number} typeSpeed - Speed of typing (ms per char)
 * @param {number} deleteSpeed - Speed of deleting (ms per char)
 * @param {number} pauseTime - Pause duration after typing a word (ms)
 */
export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          // Finished typing, pause then delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setText(currentWord.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}
