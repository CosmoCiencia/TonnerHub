import React, { useState, useEffect, useRef } from 'react';
import { UserIcon } from '../icons';
import '../styles/userProfile.css';

type UserType = 'hogar' | 'profesional' | 'distribuidor';

export const UserProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState<UserType>('hogar');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedType = localStorage.getItem('tonner_user_type') as UserType;
    if (savedType) {
      setUserType(savedType);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelectType = (type: UserType) => {
    setUserType(type);
    localStorage.setItem('tonner_user_type', type);
    // Optional: maybe show some feedback
  };

  const getUserTypeLabel = (type: UserType) => {
    switch (type) {
      case 'hogar': return 'Hogar (Cliente)';
      case 'profesional': return 'Profesional (Contratista)';
      case 'distribuidor': return 'Distribuidor';
      default: return type;
    }
  };

  return (
    <div className="user-profile" ref={dropdownRef}>
      <button 
        className={`user-profile__avatar ${isOpen ? 'is-active' : ''}`}
        onClick={handleToggle}
        aria-label="Perfil de usuario"
      >
        <UserIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="user-profile__dropdown">
          <div className="user-profile__header">
            <div className="user-profile__title">
              <UserIcon className="w-4 h-4" />
              <span>Perfil del Usuario</span>
            </div>
            <div className="user-profile__subtitle">{getUserTypeLabel(userType)}</div>
          </div>

          <div className="user-profile__menu">
            <button 
              className={`user-profile__option ${userType === 'hogar' ? 'is-selected' : ''}`}
              onClick={() => handleSelectType('hogar')}
            >
              <span className="user-profile__option-label">Hogar</span>
              {userType === 'hogar' && <div className="user-profile__option-check" />}
            </button>
            <button 
              className={`user-profile__option ${userType === 'profesional' ? 'is-selected' : ''}`}
              onClick={() => handleSelectType('profesional')}
            >
              <span className="user-profile__option-label">Profesional</span>
              {userType === 'profesional' && <div className="user-profile__option-check" />}
            </button>
            <button 
              className={`user-profile__option ${userType === 'distribuidor' ? 'is-selected' : ''}`}
              onClick={() => handleSelectType('distribuidor')}
            >
              <span className="user-profile__option-label">Distribuidor</span>
              {userType === 'distribuidor' && <div className="user-profile__option-check" />}
            </button>
          </div>

          <div className="user-profile__footer">
            <button className="user-profile__logout" onClick={() => window.location.reload()}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
