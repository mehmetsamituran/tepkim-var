import React, { useState } from 'react';
import Menu from './Menu';
import { colors } from '../styles/colors';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: colors.outerBackground, // Dış alanın arka plan rengi
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0', // Dış kapsayıcıda padding kaldırıldı
        margin: '0', // Margin kaldırıldı
      }}
    >
      <div
        style={{
          backgroundColor: colors.mainBackground, // Ana konteynerin arka plan rengi
          color: colors.textColor, // Metin rengi
          width: '93vw', // Tüm pencere genişliği
          height: '90vh', // Tüm pencere yüksekliği
          borderRadius: '0', // Köşe yuvarlama kaldırıldı
          boxShadow: 'none', // Gölge kaldırıldı
          padding: '20px', // İçerik için padding
          position: 'relative',
        }}
      >
        {/* Hamburger Menü Butonu */}
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 1100,
            }}
          >
            ☰
          </button>
        )}

        {/* Menü Bileşeni */}
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Sayfa Başlığı */}
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            backgroundColor: colors.titleBackground, // Başlık arka plan rengi
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          {title}
        </h1>

        {/* Sayfa İçeriği */}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;