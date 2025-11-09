import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Renat Moroz</p>
          <p>
            Contact us:
            <a href="mailto:bs4123555@gmail.com" target="_blank">
              bs4123555@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
