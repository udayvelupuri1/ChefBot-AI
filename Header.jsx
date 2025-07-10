// Importing the Chef Claude logo image from the local images folder
import chefClaudeLogo from "./images/chef-claude-icon.png"

// Functional component that renders the app header
export default function Header() {
    return (
        <header>
            {/* Logo image for the app */}
            <img src={chefClaudeLogo} />

            {/* Title of the application */}
            <h1>ChefBot AI</h1>
        </header>
    )
}
