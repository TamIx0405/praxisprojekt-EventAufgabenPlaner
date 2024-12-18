import React from "react";

function ButtonLightDark({ type, onClick, active, children, disabled, className }) {
    return (
        <button
            disabled={disabled}
            className={
                " flex items-center justify-center rounded-full px-2 py-0.5 border border-transparent font-bold " +
                (disabled
                    ? "text-gray-300 dark:text-gray-700 cursor-not-allowed"
                    : "text-gray-200 dark:text-gray-800 bg-gray-700 dark:bg-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white") +
                (active === "true" && !disabled ? " bg-gray-400 dark:bg-gray-500 hover:border-gray-300 dark:hover:border-gray-700" : "") +
                className
            }
            type={type}
            onClick={onClick}
            active={active}
        >
            {children}
        </button>
    );
}

export default ButtonLightDark;
