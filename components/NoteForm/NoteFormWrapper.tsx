'use client';

import { useNoteStore } from '@/lib/store/noteStore';
import NoteForm from './NoteForm';

export default function NoteFormWrapper() {
  const { draft, hasHydrated } = useNoteStore();

  if (!hasHydrated) return <div>Loading...</div>;

  return <NoteForm draft={draft} />;
}
