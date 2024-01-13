import Link from "next/link"
import Image from "next/image"

const links = [
  { "href": "/", "label": "Home" },
  { "href": "/dashboard", "label": "Dashboard" },
  { "href": "/account", "label": "Account" },
  { "href": "/targets", "label": "Targets" },
  ]


const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="flex flex-row">
          <h1>Target Tracker</h1>
          <ul className="flex flex-row space-x-6">
            {links.map(({ href, label }) => (
              <li className="m-5" key={`${href}${label}`}>
                <Link href={href}>
                  <p>{label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar