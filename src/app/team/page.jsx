import getConfig from 'next/config'
import TeamPage from './TeamPage'
const { publicRuntimeConfig } = getConfig();

const page = () => {
    let { team } = publicRuntimeConfig;

    return (
        <TeamPage team={team} />
    )
}

export default page