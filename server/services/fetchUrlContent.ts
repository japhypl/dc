export async function fetchUrlContent(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = Number(process.env.URL_FETCH_TIMEOUT_MS ?? 12000);
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'dc-capacity-scenario-dashboard/0.1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html') && !contentType.includes('text/plain')) {
      throw new Error(`Unsupported content type: ${contentType}`);
    }

    return response.text();
  } finally {
    clearTimeout(timer);
  }
}
