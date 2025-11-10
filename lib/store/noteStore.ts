'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Note } from '@/types/note';

export type CreateNoteData = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;

const initialDraft: CreateNoteData = {
  title: '',
  content: '',
  tag: 'Todo',
};

interface NoteStore {
  draft: CreateNoteData;
  setDraft: (note: CreateNoteData) => void;
  clearDraft: () => void;
  hasHydrated: boolean;
}

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      hasHydrated: false,
      setDraft: (note) => set({ draft: note }),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft',
      onRehydrateStorage: () => (state) => {
        if (state) state.hasHydrated = true;
      },
    }
  )
);
