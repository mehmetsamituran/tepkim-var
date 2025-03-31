import React, { useState } from 'react';
import Modal from '../components/Modal';
import PageLayout from '../components/PageLayout';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    title: '',
    borderColor: '',
  });

  const openModal = (title: string, borderColor: string) => {
    setModalProps({ title, borderColor });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout title="Tepkim Var!">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
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
          }}
        >
          Boykot Et
        </button>
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
          }}
        >
          Onurlandır
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalProps.title}
        borderColor={modalProps.borderColor}
      />
    </PageLayout>
  );
};

export default HomePage;