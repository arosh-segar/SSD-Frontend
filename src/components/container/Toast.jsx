import { Toast } from "flowbite-react";

const ToastMessage = ({ msg, svg, isVisible, setIsVisible }) => {
  return (
    <>
      {isVisible && (
        <Toast class="flex w-full max-w-xs items-center rounded-lg p-4 shadow bg-gray-800 text-gray-400 duration-300">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            {svg}
          </div>
          <div className="ml-3 mr-5 text-sm font-normal">{msg}</div>
          <button
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <svg
              class="w-6 h-6 hover:text-gray-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </Toast>
      )}
    </>
  );
};

export default ToastMessage;
