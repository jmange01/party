import { Link } from "react-router-dom";
import { logout } from "../lib/services/auth";

export default function Home(props) {
  return (
    <div id="home">
      <Link to="/login" onClick={ () => logout(props.logoutCallback) }>
        Sign Out
      </Link>
    </div>
  )
}
