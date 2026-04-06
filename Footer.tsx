import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;

    // Зберігаємо їх у localStorage
    localStorage.setItem('os_info', platform);
    localStorage.setItem('browser_info', userAgent);

    
    setSysInfo({
      os: localStorage.getItem('os_info') || platform,
      browser: localStorage.getItem('browser_info') || userAgent
    });
  }, []); 

  return (
    <footer className="mt-12 text-center text-sm text-slate-500 border-t border-slate-200 pt-6">
      <p className="font-semibold mb-2">Системна інформація (з LocalStorage):</p>
      <p>ОС: {sysInfo.os}</p>
      <p>Браузер: {sysInfo.browser}</p>
    </footer>
  );
}

export default Footer;