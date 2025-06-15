export function Tabs(props: { setActiveTab: (tab: string) => void; activeTab: string }) {
    const { setActiveTab, activeTab } = props;
    return (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 w-full">
            <button onClick={() => setActiveTab("stockManagement")} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === "stockManagement" ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Stock Management
            </button>
            <button onClick={() => setActiveTab("expoBoltAIApp")} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === "expoBoltAIApp" ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Expo Bolt AI App
            </button>
            <button onClick={() => setActiveTab("inventoryManagement")} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === "inventoryManagement" ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Inventory Management
            </button>
        </div>
    );
}
