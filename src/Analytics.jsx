import { useEffect } from 'react';

function Analytics() {
  useEffect(() => {
    // Load gtag.js script
    // Choose the tracking ID based on domain
    const hostname = window.location.hostname;
    let trackingId = ''; // Default
   
    if (hostname === 'yuccabeplanters.in') {
      trackingId = 'G-2W81EZEQLL'; // Production
    } else if (hostname === 'yuccabeplanters.com') {
      trackingId = 'G-ZR5ZDTPBWR'; // Staging
    } else if (hostname === 'localhost') {
      trackingId = 'G-2W81EZEQLL'; // Local/dev
    }
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);
    // Inject the dynamic config script
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}

export default Analytics;
