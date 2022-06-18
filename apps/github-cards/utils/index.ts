export type profileType = {
    name: string,
    login: string,
    avatar_url: string,
    blog: string,
    bio: string,
    public_repos: number,
    public_gists: number,
}

export const defaultProfiles: profileType[] = [
    {
        name: 'Mayank',
        login: 'mayank1513',
        avatar_url: 'https://avatars.githubusercontent.com/u/25501269?v=4',
        blog: 'https://mayank-chaudhari.web.app',
        bio: 'Passionate Developer and Researcher. Coming from academic and research background, and actively involved in designing simulation tools and app development.',
        public_repos: 62,
        public_gists: 19,
    }
]