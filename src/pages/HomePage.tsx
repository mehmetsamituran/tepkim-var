import React, { useState } from 'react';
import Modal from '../components/Modal';
import Menu from '../components/Menu';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: '',
    borderColor: '',
  });

  // Menü için state
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (title: string, borderColor: string) => {
    setModalProps({ title, borderColor });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative', // Konumlandırma için gerekli
      }}
    >
      {/* Hamburger Menü Butonu */}
      {!menuOpen && ( // Menü kapalıyken göster
        <button
          onClick={() => setMenuOpen(true)} // Menü açılır
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 1100, // Menü butonu diğer içeriklerin üstünde olsun
          }}
        >
          ☰
        </button>
      )}

      {/* Menü Bileşeni */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <h1>Tepkim var!</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {/* Boykot Et Butonu */}
        <button
          onClick={() => openModal('Boykot et!', 'red')}
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span>❌</span> Boykot et!
        </button>

        {/* Onurlandır Butonu */}
        <button
          onClick={() => openModal('Onurlandır!', 'green')}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span>✅</span> Onurlandır!
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalProps.title}
        borderColor={modalProps.borderColor}
      />
    </div>
  );
};

export default HomePage;