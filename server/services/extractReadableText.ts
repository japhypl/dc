import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

export interface ExtractedText {
  title: string;
  text: string;
}

export function extractReadableText(html: string, url: string): ExtractedText {
  const dom = new JSDOM(html, { url });
  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  if (article?.textContent) {
    return {
      title: article.title ?? dom.window.document.title ?? url,
      text: article.textContent.replace(/\s+/g, ' ').trim()
    };
  }

  const text = dom.window.document.body?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  return { title: dom.window.document.title ?? url, text };
}
