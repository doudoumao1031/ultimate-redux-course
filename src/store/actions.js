import * as actions from "./actionTypes";

export const bugAdded = (description) => ({ // This is an action creator
    type: actions.BUG_ADDED,
    payload: {
        description,
    },
});

export const bugRemoved = (id) => ({
    type: actions.BUG_REMOVED,
    payload: {
        id,
    },
});

export const bugResolved = (id) => ({  
    type: actions.BUG_RESOLVED,
    payload: {
        id,
    },
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }   // This is an action creator