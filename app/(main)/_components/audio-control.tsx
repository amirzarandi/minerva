import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export const AudioControl = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isCollapsed, setIsCollapsed] = useState(isMobile);
    const [sidebarWidth, setSidebarWidth] = useState(isMobile ? '0' : '300px');

    const toggleSidebar = () => {
        if (isCollapsed) {
            resetWidth();
        } else {
            collapse();
        }
    };

    const resetWidth = () => {
        setIsCollapsed(false);
        setSidebarWidth(isMobile ? "100%" : "300px");
    };

    const collapse = () => {
        setIsCollapsed(true);
        setSidebarWidth("0");
    };

    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    return (
        <div className="bg-secondary">
            <div className="top-14 relative h-screen flex flex-col z-20 right-0">
                <aside
                    style={{ width: sidebarWidth }}
                    className="h-screen flex flex-col">
                    <div className="bg-secondary h-full">
                        <h1 className="text-2xl flex items-center text-sm p-3 w-full font-medium hover:bg-primary/5">Minerva Transcription</h1>
                        <div className="bg-gray-200 dark:bg-stone-700 h-px mt-2 mb-2"></div> {/* Divider */}
                    </div>
                </aside>
                <button
                    onClick={toggleSidebar}
                    style={{ right: isCollapsed ? '0' : sidebarWidth }}
                    className="absolute top-0 mt-2 p-2 text-black dark:text-white">
                    {isCollapsed ? <ChevronsRight className="h-6 w-6 mx-2" /> : <ChevronsLeft className="h-6 w-6 mx-2" />}
                </button>
            </div>
        </div>
    )
}
