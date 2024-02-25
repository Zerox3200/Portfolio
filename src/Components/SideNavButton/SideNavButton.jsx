import { useContext, useEffect } from 'react'
import './SideNavButton.scss'
import { SideNav } from '../../Context/Context'

export default function SideNavButton() {

    const { ShowSide, setShowSide } = useContext(SideNav);

    useEffect(() => {
    }, [ShowSide])

    const HandleSideNav = () => {
        setShowSide(!ShowSide);
    }

    return (
        <>
            <input id="toggleChecker" type="checkbox" />
            <label id="togglerLable" htmlFor="toggleChecker" onClick={() => HandleSideNav()}>
                <div className="checkboxtoggler">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </label>
        </>
    )
}
