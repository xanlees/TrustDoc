
export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
            >
                <span className="!absolute loading-spinner !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    );
}

// Variant without full screen height
export function LoadingSpinnerInline() {
    return (
        <div className="flex items-center justify-center p-4">
            <div
                className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
            >
                <span className="!absolute loading-spinner !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    );
}


const LoadingPules = () => {
    return (
        <div className="mx-auto w-full h-full max-w-sm md:max-w-lg lg:max-w-xl rounded-md border border-gray-200 p-4">
            <div className="flex animate-pulse space-x-4">
                {/* Circle for avatar or icon */}
                <div className="w-14 h-14 rounded-full bg-gray-200" />

                {/* Content area */}
                <div className="flex-1 space-y-4 py-1">
                    {/* First line */}
                    <div className="h-3 w-3/4 rounded bg-gray-200" />

                    {/* Dynamic grid and lines */}
                    <div className="space-y-4">
                        {/* Grid for small content */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-gray-200" />
                            <div className="col-span-1 h-2 rounded bg-gray-200" />
                        </div>

                        {/* Single long line */}
                        <div className="h-2 w-full rounded bg-gray-200" />

                        {/* Another grid for more content */}
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-2 h-2 rounded bg-gray-200" />
                            <div className="col-span-2 h-2 rounded bg-gray-200" />
                            <div className="col-span-2 h-2 rounded bg-gray-200" />
                        </div>

                        {/* Additional long content */}
                        <div className="h-2 w-2/3 rounded bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPules;