import { useEffect, useState } from 'react';

const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    // 현재 브라우저가 지원하면 addEventListener 사용
    mediaQuery.addEventListener('change', handleResize);

    return () => {
        mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isSmallScreen;
};

export default useIsSmallScreen;