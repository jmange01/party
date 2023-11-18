import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../lib/services/auth";

export default function SideNav(props) {
  const [ isExpanded, setExpanded ] = useState(false)
  return (
    <div className={ "sidenav " + (isExpanded ? "visible" : "hidden") }>
      <div id="sidenav-toggle" onClick={ () => setExpanded(!isExpanded) }>{ isExpanded ? "<" : ">" }</div>
      <div className="link">Parties</div>
      <div className="link">Messages</div>
      <div className="link">Calendar</div>
      {/* TODO: Need to have this generated from within a router in order for links to work */}
      { /*<Link to="/login" onClick={ () => logout(props.logoutCallback) }>
        Sign Out
  </Link>*/ }
    </div>
  )
}
