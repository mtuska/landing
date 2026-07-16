interface Env {
  ASSETS: Fetcher
}

const CANONICAL_HOST = 'noriq.dev'

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url)

    // Redirect www (and any other alias host) to the apex domain.
    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST
      return Response.redirect(url.toString(), 301)
    }

    const response = await env.ASSETS.fetch(request)

    // Security headers on document responses.
    if (response.headers.get('content-type')?.includes('text/html')) {
      const headers = new Headers(response.headers)
      headers.set('X-Content-Type-Options', 'nosniff')
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
      headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
      return new Response(response.body, { status: response.status, headers })
    }
    return response
  },
} satisfies ExportedHandler<Env>
