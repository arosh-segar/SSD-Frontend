import ToastMessage from "./Toast";

const TableView = () => {
  return (
    <>
      <ToastMessage
        msg="Message added successfully"
        svg={
          <svg
            aria-hidden="true"
            class="w-5 h-5"
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
      <div class=" w-11/12 relative shadow-md sm:rounded-lg">
        <div className="flex w-full justify-end mb-5">
          <button
            type="button"
            class="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600 focus:ring-blue-800"
          >
            Add new user
          </button>
        </div>
        <table class="w-full text-sm text-left text-gray-400 rounded-lg overflow-hidden">
          <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Full name
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                Role
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-6">White</td>
              <td class="py-4 px-6">Laptop PC</td>
              <td class="py-4 px-6">$1999</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                Magic Mouse 2
              </th>
              <td class="py-4 px-6">Black</td>
              <td class="py-4 px-6">Accessories</td>
              <td class="py-4 px-6">$99</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                Apple Watch
              </th>
              <td class="py-4 px-6">Silver</td>
              <td class="py-4 px-6">Accessories</td>
              <td class="py-4 px-6">$179</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                iPad
              </th>
              <td class="py-4 px-6">Gold</td>
              <td class="py-4 px-6">Tablet</td>
              <td class="py-4 px-6">$699</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-gray-800 hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium whitespace-nowrap text-white"
              >
                Apple iMac 27"
              </th>
              <td class="py-4 px-6">Silver</td>
              <td class="py-4 px-6">PC Desktop</td>
              <td class="py-4 px-6">$3999</td>
              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableView;
