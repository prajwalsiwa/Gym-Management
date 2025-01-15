/* eslint-disable import/prefer-default-export */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sentenceCase(sentence: string) {
  const splittedSentence = sentence.split('');
  const result =
    sentence.charAt(0).toUpperCase() + splittedSentence.slice(1).join('');

  return result;
}
