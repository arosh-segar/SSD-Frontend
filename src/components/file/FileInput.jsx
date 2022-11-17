import ToastMessage from "../container/Toast";
import {useState} from "react";
import {apiInstance} from "../../apis/apiInstance";
import {encryptText} from "../../utils/message";

const FileInput = () => {
    const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");

    let reader = new FileReader();

    const handleFileRead = (event) => {
        const reader = new FileReader()
        reader.onload = async (event) => {
            const text = (event.target.result)
            setSelectedFile(text.toString())
            reader.readAsText(event.target.files[0])
        };

        console.log(reader.result)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        apiInstance.post('/file', {
            file:encryptText(selectedFile)
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
                    msg="File added successfully"
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
                            <label
                                class="block mb-2 text-sm font-medium text-gray-300"
                                for="default_size"
                            >
                                File
                            </label>
                            <input
                                class="block mb-5 w-full text-sm rounded-lg border cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                                id="default_size"
                                type="file"
                                onChange={(e)=> handleFileRead(e)}
                            />
                        </div>
                        <div class="flex justify-between items-center py-2 px-3 border-t border-gray-600">
                            <button
                                type="submit"
                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800"
                            >
                                Save File
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FileInput;
