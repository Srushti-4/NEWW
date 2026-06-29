'use client';

import { useFadeIn } from '@/lib/useFadeIn';

/**
 * Video Introduction Section
 *
 * To add your video:
 * 1. Record a 30-60 second intro (Loom, phone, or webcam)
 * 2. Upload to YouTube/Loom and get the embed URL
 * 3. Replace VIDEO_URL below with your embed link
 *
 * Example Loom: https://www.loom.com/embed/YOUR_VIDEO_ID
 * Example YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID
 */
const VIDEO_URL = ''; // Add your video embed URL here

export function VideoIntro() {
  const ref = useFadeIn();

  if (!VIDEO_URL) {
    // Show a placeholder prompting to add a video
    return (
      <section className="video-section" ref={ref}>
        <div className="container">
          <div className="video-card fade-up">
            <div className="video-placeholder">
              <div className="video-play-icon">▶</div>
              <p className="video-placeholder-text">Video intro coming soon</p>
              <p className="video-placeholder-sub">A quick hello from me — who I am and what I do.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="video-section" ref={ref}>
      <div className="container">
        <div className="section-head fade-up" style={{ textAlign: 'center' }}>
          <div className="section-tag">Introduction</div>
          <h2 className="section-title">A Quick Hello</h2>
          <div className="divider" style={{ margin: '1rem auto' }} />
        </div>
        <div className="video-card fade-up" style={{ transitionDelay: '100ms' }}>
          <iframe
            src={VIDEO_URL}
            title="Video introduction by Srushti Mohire"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        </div>
      </div>
    </section>
  );
}
