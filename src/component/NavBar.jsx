import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (<>
        <div className="flex bg-blue-500 py-4 gap-2 justify-center"><div className="text-yellow-200  hover:text-white"> <NavLink exact activeClassName="bg-red-500 text-white" to="/">Home</NavLink></div>
            <div className="text-yellow-200 hover:text-white"><NavLink exact activeClassName="text-white" to="/hello">Hello Page</NavLink></div></div>
    </>)
}
export default NavBar;