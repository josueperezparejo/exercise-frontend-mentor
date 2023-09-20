import { create } from 'zustand'

export const emailSlice = create((set) => ({
    email: '',
    setEmail: (correo) => set({ email: correo }),
    clearEmail: () => set({ email: null })
}))