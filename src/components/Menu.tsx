import React from 'react';
import { useRouter } from 'next/router'; // Next.js yönlendirme hook'u
import { colors } from '../styles/colors'; // Import centralized colors

interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ menuOpen, setMenuOpen }) => {
  const router = useRouter();

  if (!menuOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '250px',
        height: '100%',
        backgroundColor: colors.mainBackground,
        zIndex: 1000, // Menü diğer içeriklerin üstünde olacak
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
        padding: '20px',
      }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        ✖ Kapat
      </button>
      <div
        onClick={() => {
          router.push('/HomePage'); // HomePage'e yönlendirme
          setMenuOpen(false);
        }}
        style={{
          cursor: 'pointer',
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: colors.categoriesBackground,
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Ana Sayfa
      </div>
      <div
        onClick={() => {
          router.push('/Hakkinda'); // Hakkında sayfasına yönlendirme
          setMenuOpen(false);
        }}
        style={{
          cursor: 'pointer',
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: colors.categoriesBackground,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Hakkında
      </div>
    </div>
  );
};

export default Menu;