
const peerjsid = import.meta.env.VITE_PEERJS_ID;



export function constructPeerID(gameID, playerID) {
    return `${gameID}-${playerID}-${peerjsid}`;
}



export function sendConstructor(myid, data, options = {}) {
    return {myid, data, options}
}


// export async function getPeerConfig() {


//   const ice_result = await fetch("https://personal-api-xecora.fly.dev/get-turn-config", {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers':'Content-Type, Authorization',
//     }
//   })


//   const ice = await ice_result.json()





//   return {
//     secure: true,
//     host: "peerjs-kaboom-custom-server.onrender.com",
//     port: 443,
//     key: "peerjs",
//     allow_discovery: true,
//     config: {
//       iceServers: ice,
//     },
//   };

//   return undefined;
//   return {
//     secure: true,
//     host: "peerjs-kaboom-custom-server.onrender.com",
//     port: 443,
//   };
// }

export async function getPeerConfig() {
  return {
    secure: false,
    host: "localhost",
    port: 3000,
    path: "/peerjs",
    key: "peerjs",
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
      ]
    }
  };
}
