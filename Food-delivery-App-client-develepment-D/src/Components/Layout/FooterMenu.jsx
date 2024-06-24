import { CiSearch, CiViewList } from "react-icons/ci"
import { PiShoppingBagLight } from "react-icons/pi";
import { TfiHome } from "react-icons/tfi"
import { NavLink } from 'react-router-dom';

const FooterMenu = () => {
    const ActiveClass = ({ isActive, isPending }) => {
        return isPending ? "pending" : isActive ? "active" : ""
    }

    return (
        <footer
            className="Footer_NavLink fixed bottom-0 left-0 w-full p-3 transition-all bg-white lg:p-4 lg:bottom-1/2 lg:w-fit lg:rounded-r-3xl lg:shadow-lg">
            <ul className="grid grid-cols-4 gap-1 items-center place-items-center  lg:grid-cols-1 lg:w-fit lg:gap-5">
                <li>
                    <NavLink to={'/'} onClick={ActiveClass} >
                        <TfiHome
                            className="text-xl font-thin hover:scale-110 transition-all lg:p-2.5 lg:text-[44px]" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/search'} onClick={ActiveClass}>
                        <CiSearch className="text-2xl font-thin hover:scale-110 transition-all lg:p-2 lg:text-[44px]" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/cart'} onClick={ActiveClass}>
                        <PiShoppingBagLight className="text-2xl font-thin hover:scale-110 transition-all lg:p-2 lg:text-[44px]" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/settings'} onClick={ActiveClass}>
                        <CiViewList className="text-2xl font-thin hover:scale-110 transition-all lg:p-2 lg:text-[44px]" />
                    </NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default FooterMenu
