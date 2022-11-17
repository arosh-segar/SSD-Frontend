import ToastMessage from "../container/Toast";
import {useState} from "react";
import {useKeycloak} from "@react-keycloak/web";
import {apiInstance} from "../../apis/apiInstance";
import {encryptText} from '../../utils/message'


const MessageInput = () => {
    const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        apiInstance.post('/message', {
            message: message,
            hash:encryptText(message)
        }).then(res => {
            setIsSuccessToastVisible(true)
        }).catch(e => {
            alert(e.message)
        })
    };

    return (
        <>
            <div className="absolute top-10">
                <ToastMessage
                    msg="Message added successfully"
                    isVisible={isSuccessToastVisible}
                    setIsVisible={setIsSuccessToastVisible}
                    svg={
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 bg-green-800 text-green-200 rounded-lg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    }
                />
            </div>
            <div class=" w-11/12 relative">
                <form onSubmit={handleSubmit}>
                    <div class="mb-4 w-full rounded-lg border bg-gray-700 border-gray-600">
                        <div class="py-2 px-4 rounded-t-lg bg-gray-800">
                            <label for="comment" class="sr-only">
                                Your message
                            </label>
                            <textarea
                                id="comment"
                                rows="6"
                                class="px-0 w-full text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
                                placeholder="Write a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div class="flex justify-between items-center py-2 px-3 border-t border-gray-600">
                            <button
                                type="submit"
                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800"
                            >
                                Save Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MessageInput;
