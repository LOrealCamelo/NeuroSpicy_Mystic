'use client';

import Script from 'next/script';

/**
 * ElevenLabs Conversational AI widget.
 *
 * Loads the official `@elevenlabs/convai-widget-embed` script and renders the
 * `<elevenlabs-convai>` custom element when NEXT_PUBLIC_ELEVENLABS_AGENT_ID is set.
 * Returns null if no agent id is configured, so the page stays clean during
 * development before L'Oreal has finished setting up her agent in ElevenLabs.
 *
 * Setup:
 * 1. Create a Conversational AI agent in the ElevenLabs dashboard.
 * 2. Copy the Agent ID (looks like `agent_01jx...`).
 * 3. Set NEXT_PUBLIC_ELEVENLABS_AGENT_ID in .env.local (and Render env for prod).
 *
 * Docs: https://elevenlabs.io/docs/conversational-ai/customization/widget
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id'?: string },
        HTMLElement
      >;
    }
  }
}

export function ElevenLabsAgent() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
  if (!agentId) return null;

  return (
    <>
      <elevenlabs-convai agent-id={agentId} />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        async
        type="text/javascript"
      />
    </>
  );
}
