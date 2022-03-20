import styles from './UserInput.module.scss'
import { profileType } from '../utils';
import { useRef, useState } from 'react';
import { useProfileContext } from '../pages';

export default function UserInput() {
    // const [state, setstate] = useState(initialState)
    const [profiles, setProfiles] = useProfileContext();
    const myRef = useRef<HTMLInputElement>(null);
    const [err, setErr] = useState('');
    return (
        <div className={styles.container}>
            <form onSubmit={e => {
                e.preventDefault();
                const el = myRef.current as HTMLInputElement
                const val = el.value.trim();

                if (profiles.map(p => p.login).includes(val)) {
                    setErr('Profile already exists');
                    return;
                }

                fetch(`https://api.github.com/users/${val}`)
                    .then(res => res.json())
                    .then(data => {
                        const { name, login, avatar_url, blog, bio, public_gists, public_repos } = data;

                        if (login) {
                            setProfiles([...profiles, { name, login, avatar_url, blog, bio, public_gists, public_repos }]);
                            setErr('')
                        }
                        else setErr('Profile not found')
                    }).catch(err => {
                        setErr(err);
                    })
            }}>
                <input ref={myRef} onChange={()=>{setErr("")}} type="text" />
                <button>Add Card</button>
            </form>
            {
                err && <p className={styles.err}>{err}</p>
            }
        </div>
    )
}