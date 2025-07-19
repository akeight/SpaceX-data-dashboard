import { Outlet, Link } from "react-router-dom"

//page that renders the same layout for all pages

function Layout(){
    
  return (
    <div>
        <nav>
        <ul>
            <li className="home-link" key="home-button">
            <Link style={{ color: "white" }} to="/">
                Home
            </Link>
            </li>
        </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout