import type { Metadata } from 'next';
import css from './CreateNote.module.css';
import NoteFormWrapper from '@/components/NoteForm/NoteFormWrapper';

export const metadata: Metadata = {
  title: 'Create note | NoteHub',
  description: 'Create a new note and save your thoughts easily.',
  openGraph: {
    title: 'Create note | NoteHub',
    description: 'Create a new note and save your thoughts easily.',
    url: 'https://notehub.app/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        alt: 'NoteHub Open Graph Image',
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteFormWrapper />
      </div>
    </main>
  );
}
