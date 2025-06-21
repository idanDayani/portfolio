import { TabsEnum } from "./tabsTypes";

export function Tabs(props: { setActiveTab: (tab: TabsEnum) => void; activeTab: TabsEnum }) {
    const { setActiveTab, activeTab } = props;
    return (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 w-full">
            <button onClick={() => setActiveTab(TabsEnum.stockManagement)} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === TabsEnum.stockManagement ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Stock Management
            </button>
            <button onClick={() => setActiveTab(TabsEnum.expoBoltAIApp)} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === TabsEnum.expoBoltAIApp ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Expo Bolt AI App
            </button>
            <button onClick={() => setActiveTab(TabsEnum.bitcoinWalletTracker)} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === TabsEnum.bitcoinWalletTracker ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Bitcoin Wallet Tracker
            </button>
            <button onClick={() => setActiveTab(TabsEnum.inventoryManagement)} className={`w-full sm:w-auto px-4 py-3 rounded-t-lg font-semibold ${activeTab === TabsEnum.inventoryManagement ? "bg-gray-800 text-yellow-1000" : "bg-gray-700 text-gray-300"} hover:bg-gray-600 transition-colors`}>
                Inventory Management
            </button>
        </div>
    );
}
