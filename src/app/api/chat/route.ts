import { NextResponse } from "next/server";
import { products } from "@/data/products";

// Mock Google Sheets Logging
async function logToSheets(data: any) {
    console.log("LOGGING TO SHEETS:", data);
    // In production, you would use 'google-spreadsheet' npm package or fetch(SHEET_API_URL)
    // const response = await fetch('YOUR_GOOGLE_SHEET_WEBHOOK', { method: 'POST', body: JSON.stringify(data) });
}

export async function POST(req: Request) {
    try {
        const { messages, businessName } = await req.json();
        const lastMessage = messages[messages.length - 1];
        const userText = lastMessage.content.toLowerCase();

        // 1. Initial Greeting / Info Gathering
        if (!businessName) {
            return NextResponse.json({
                role: "bot",
                content: "Nice to meet you! To get started, could you tell me the name of your business?",
            });
        }

        // 2. Intent Classification & Research Logic
        let responseText = "";

        // Check for "research" keywords
        if (userText.includes("need") || userText.includes("looking for") || userText.includes("help")) {
            // Simple keyword matching for "research"
            const recommendations = products.filter(p =>
                userText.includes(p.name.toLowerCase().split(" ")[0].toLowerCase()) || // match first word of product
                userText.includes("automation") && p.id === "auto-workflow" ||
                userText.includes("analytics") && p.id === "ai-analytics" ||
                userText.includes("chat") && p.id === "chat-agent"
            );

            if (recommendations.length > 0) {
                responseText = `Based on your request, I recommend checking out our **${recommendations[0].name}**. It features ${recommendations[0].features.join(", ")}. Would you like to start a free trial for this?`;

                // Log "Proposal/Recommendation" to Sheets
                await logToSheets({
                    timestamp: new Date().toISOString(),
                    business: businessName,
                    action: "recommendation",
                    product: recommendations[0].name
                });

            } else {
                responseText = "I see. I'm researching the best options for you... Based on general industry standards, our **Workflow Automation Suite** is usually a great starting point to improve efficiency. Shall I generate a formal proposal for that?";
            }
        }
        // Check for "trial" keywords
        else if (userText.includes("trial") || userText.includes("start") || userText.includes("yes")) {
            responseText = "Fantastic! I've set up a 14-day trial for you. Check your email for the activation link. Is there anything else I can help you with?";

            // Log "Conversion" to Sheets
            await logToSheets({
                timestamp: new Date().toISOString(),
                business: businessName,
                action: "trial_signup",
                status: "success"
            });
        }
        // Default fallback
        else {
            responseText = "I'm listening. Tell me more about your current challenges so I can find the right solution.";
        }

        return NextResponse.json({
            role: "bot",
            content: responseText,
        });

    } catch (error) {
        console.error("Chat Error:", error);
        return NextResponse.json({ role: "bot", content: "Sorry, I encountered an error processing your request." }, { status: 500 });
    }
}
