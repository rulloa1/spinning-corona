export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: "ai-analytics",
        name: "Enterprise AI Analytics",
        description: "Deep learning analytics platform for real-time business insights.",
        price: "$499/mo",
        features: ["Predictive modeling", "Real-time dashboards", "Custom reporting"],
    },
    {
        id: "auto-workflow",
        name: "Workflow Automation Suite",
        description: "End-to-end automation for repetitive business processes.",
        price: "$299/mo",
        features: ["Drag-and-drop builder", "500+ integrations", "Audit logs"],
    },
    {
        id: "chat-agent",
        name: "Smart Sales Agent",
        description: "AI-powered chat bot that qualifies leads 24/7.",
        price: "$199/mo",
        features: ["Natural language understanding", "CRM integration", "Multi-language support"],
    },
];
