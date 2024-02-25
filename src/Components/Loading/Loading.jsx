import { Audio } from 'react-loader-spinner'

export default function Loading() {
    return <Audio
        height="100"
        width="100"
        color="#3e9bdb"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
    />
}
