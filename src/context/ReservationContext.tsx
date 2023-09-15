import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Reservation = {
  name: string;
  table: string;
  numbers: string;
  email: string;
  date: Date;
  phone: string;
};

type ReservationContextType = {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
};

const STORAGE_KEY = 'reservations'; // Key to store reservations in localStorage

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // Load reservations from localStorage on component mount
  useEffect(() => {
    const storedReservations = localStorage.getItem(STORAGE_KEY);
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    }
  }, []);

  // Update localStorage whenever reservations change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (reservation: Reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}