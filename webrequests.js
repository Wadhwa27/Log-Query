// import fetch from "node-fetch";

// import { got } from "got";
// const { get } = got;

// const addresses = [
//   "aardvark@the.zoo",
//   "crocodile@the.zoo",
//   "elephant@the.zoo",
//   "emu@the.zoo",
//   "hippopotamus@the.zoo",
//   "llama@the.zoo",
//   "octopus@the.zoo",
//   "otter@the.zoo",
//   "panda@the.zoo",
//   "pangolin@the.zoo",
//   "tortoise@the.zoo",
//   "walrus@the.zoo",
// ];

// const method = ["get", "put", "post"];

// async function sleep(millis) {
//   return new Promise((resolve) => setTimeout(resolve, millis));
// }

// (async () => {
//   while (true) {
//     var type = Math.floor(Math.random() * method.length);
//     var email = Math.floor(Math.random() * addresses.length);
//     var sleeping = Math.floor(Math.random() * 9) + 1;

//     switch (method[type]) {
//       case "get":
//         try {
//     const response = await got.get('http://localhost:3000/', {
//         headers: {
//             from: addresses[email]
//         }
//     }).json();

//     // Check if the response object has a 'body' property
//     if (response && response.body) {
//         console.log(response.body);
//     } else {
//         console.log('Response body is undefined or null');
//     }
// } catch (error) {
//     // Handle the error, e.g., log the error message
//     console.log(error.message);
// }
//         break; // end case 'get'
//       case "put":
//         try {
//           const response = await put("http://localhost:3000/", {
//             headers: {
//               from: addresses[email],
//             },
//           }).json();
//           console.log(response.body);
//         } catch (error) {
//           console.log(error.response.body);
//         }
//         break; // end case 'put'
//       case "post":
//         try {
//           const { data } = await post("http://localhost:3000/", {
//             headers: {
//               from: addresses[email],
//             },
//           }).json();
//           console.log(data);
//         } catch (error) {
//           console.log(error.response.body);
//         }
//         break; // end case 'post'
//     } // end switch on method
//     await sleep(sleeping * 1000);
//   }
// })();

/*import fetch from "node-fetch";

import { got } from "got";
const { get } = got;

const addresses = [
  "aardvark@the.zoo",
  "crocodile@the.zoo",
  "elephant@the.zoo",
  "emu@the.zoo",
  "hippopotamus@the.zoo",
  "llama@the.zoo",
  "octopus@the.zoo",
  "otter@the.zoo",
  "panda@the.zoo",
  "pangolin@the.zoo",
  "tortoise@the.zoo",
  "walrus@the.zoo",
];

const method = ["get", "put", "post"];

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

(async () => {
  while (true) {
    var type = Math.floor(Math.random() * method.length);
    var email = Math.floor(Math.random() * addresses.length);
    var sleeping = Math.floor(Math.random() * 9) + 1;

    switch (method[type]) {
      case "get":
        try {
          const response = await get("http://localhost:3000/", {
            headers: {
              from: addresses[email],
            },
          }).json();

          // Check if the response object has a 'body' property
          if (response && response.body) {
            console.log(response.body);
          } else {
            console.log("Response body is undefined or null");
          }
        } catch (error) {
          // Handle the error, e.g., log the error message
          console.log(error.message);
        }
        break; // end case 'get'
      case "put":
        try {
          const response = await put("http://localhost:3000/", {
            headers: {
              from: addresses[email],
            },
          }).json();

          if (response && response.body) {
            console.log(response.body);
          } else {
            console.log("Response body is undefined or null");
          }
        } catch (error) {
          console.log(error.message);
        }
        break; // end case 'put'
      case "post":
        try {
          const { data } = await post("http://localhost:3000/", {
            headers: {
              from: addresses[email],
            },
          }).json();

          // Check if the response object has a 'body' property
          if (data && data.body) {
            console.log(data.body);
          } else {
            console.log("Response body is undefined or null");
          }
        } catch (error) {
          console.log(error.message);
        }
        break; // end case 'post'
    } // end switch on method

    await sleep(sleeping * 1000);
  }
})();
*/

import { got } from "got";
const { get, put, post } = got;
const addresses = [
  "aardvark@the.zoo",
  "crocodile@the.zoo",
  "elephant@the.zoo",
  "emu@the.zoo",
  "hippopotamus@the.zoo",
  "llama@the.zoo",
  "octopus@the.zoo",
  "otter@the.zoo",
  "panda@the.zoo",
  "pangolin@the.zoo",
  "tortoise@the.zoo",
  "walrus@the.zoo",
];

const methods = ["get", "put", "post"];

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

(async () => {
  while (true) {
    var type = Math.floor(Math.random() * methods.length);
    var email = Math.floor(Math.random() * addresses.length);
    var sleeping = Math.floor(Math.random() * 9) + 1;

    try {
      switch (methods[type]) {
        case "get":
          const getResponse = await get("http://localhost:3000/", {
            headers: {
              from: addresses[email],
            },
          }).json();
          console.log(getResponse.body);
          break;
        case "put":
          const putResponse = await put("http://localhost:3000/", {
            headers: {
              from: addresses[email],
            },
          }).json();
          console.log(putResponse.body);
          break;
        case "post":
          const postResponse = await post("http://localhost:3000/", {
            headers: {
              from: addresses[email],
            },
          }).json();
          console.log(postResponse.body);
          break;
        default:
          console.log("Invalid method");
      }
    } catch (error) {
      if (error.response && error.response.body) {
        console.log(error.response.body);
      } else {
        console.log("Error:", error.message);
      }
    }

    await sleep(sleeping * 1000);
  }
})();
