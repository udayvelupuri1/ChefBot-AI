// Load the Groq API key from environment variables (must be defined in a .env file or similar)
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Groq's endpoint URL for chat completions
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// Asynchronous function that sends a request to Groq's LLM to generate a recipe
export async function getRecipeFromGpt(ingredientsArr) {
    // Convert the ingredients array into a comma-separated string
    const ingredientsString = ingredientsArr.join(", ");

    // Construct the chat message to send to the LLM
    const messages = [
        {
            role: "user",
            content: `Create a delicious recipe using these ingredients: ${ingredientsString}. Format your response in markdown with clear sections for ingredients and instructions. You can add a few common ingredients if needed.`
        }
    ];

    try {
        // Send a POST request to the Groq API with the message and settings
        const response = await fetch(GROQ_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // JSON content type
                Authorization: `Bearer ${GROQ_API_KEY}` // Auth using API key
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",       // LLM model to use
                messages: messages,            // Message history
                max_tokens: 800,               // Limit on response length
                temperature: 0.7               // Controls creativity
            })
        });

        // If the response is not OK, throw an error
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        // Parse the JSON response
        const data = await response.json();

        // Return the generated recipe content
        return data.choices[0].message.content;
    } catch (err) {
        // Handle and log errors, return fallback message
        console.error("Error fetching recipe from Groq:", err);
        return "Sorry, there was an error fetching the recipe. Please try again later.";
    }
}
