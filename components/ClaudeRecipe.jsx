// Importing the ReactMarkdown component which converts Markdown text into HTML elements
import ReactMarkdown from "react-markdown"

// This is a functional React component named ClaudeRecipe
export default function ClaudeRecipe(props) {
    return (
        // A section element used to contain the suggested recipe content
        // `aria-live="polite"` tells screen readers to announce updates politely
        <section className="suggested-recipe-container" aria-live="polite">
            {/* A heading for the recipe section */}
            <h2>ChefBot AI Recommends:</h2>
            
            {/* Rendering the Markdown-formatted recipe content passed as a prop */}
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
