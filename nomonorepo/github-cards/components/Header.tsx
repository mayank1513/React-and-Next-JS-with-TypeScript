import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>GitHub Cards App</h1>
        <span className="spacer"></span>
        <button>
          <a
            href="https://www.udemy.com/user/coding-simplified/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take This Course
          </a>
        </button>
      </div>
    </header>
  );
}
