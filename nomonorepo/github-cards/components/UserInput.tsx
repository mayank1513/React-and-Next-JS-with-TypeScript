import styles from './UserInput.module.scss'

export default function UserInput() {
    return (
        <div className={styles.container}>
            <form onSubmit={e => {
                e.preventDefault();
            }}>
                <input type="text" />
                <button>Add Card</button>
            </form>
        </div>
    )
}