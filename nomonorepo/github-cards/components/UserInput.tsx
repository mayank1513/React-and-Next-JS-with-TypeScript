import styles from './UserInput.module.scss'
import { profileType } from '../utils';
import { useRef, useState } from 'react';

export default function UserInput({ addCard }: { addCard(newCard: profileType): void }) {
    // const [state, setstate] = useState(initialState)
    const myRef = useRef<HTMLInputElement>(null);
    const [err, setErr] = useState('');
    return (
        <div className={styles.container}>
            <form onSubmit={e => {
                e.preventDefault();
                const el = myRef.current as HTMLInputElement
                fetch(`https://api.github.com/users/${el.value}`)
                    .then(res => res.json())
                    .then(data => {
                        const { name, login, avatar_url, blog, bio, public_gists, public_repos } = data;

                        if (login) {
                            addCard({ name, login, avatar_url, blog, bio, public_gists, public_repos });
                            setErr('')
                        }
                        else setErr('Profile not found')
                    }).catch(err => {
                        setErr(err);
                    })
            }}>
                <input ref={myRef} type="text" />
                <button>Add Card</button>
            </form>
            {
                err && <p className={styles.err}>{err}</p>
            }
        </div>
    )
}