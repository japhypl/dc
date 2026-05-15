import { HttpError } from '../utils/httpError';

export async function fetchUrlContent(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = Number(process.env.URL_FETCH_TIMEOUT_MS ?? 12000);
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        accept: 'text/html, text/plain;q=0.9, */*;q=0.1'
      }
    });

    if (!response.ok) {
      throw new HttpError(response.status, `Fetch failed with status ${response.status}`, 'fetch_failed');
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html') && !contentType.includes('text/plain')) {
      throw new HttpError(415, `Unsupported content type: ${contentType}`, 'unsupported_content_type');
    }

    return response.text();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new HttpError(504, 'Fetch timed out', 'fetch_timeout');
    }

    if (error instanceof HttpError) {
      throw error;
    }

    throw new HttpError(502, 'Fetch failed. Check the URL or network access.', 'fetch_failed');
  } finally {
    clearTimeout(timer);
  }
}
