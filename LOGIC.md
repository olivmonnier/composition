## REDUX Action
```javascript
const dispatchTable = {
    CREATE: (state, action) => {
        // update state, generating newState,
        // depending on the action data
        // to create a new item
        return newState;
    },
    DELETE: (state, action) => {
        // update state, generating newState,
        // after deleting an item
        return newState;
    },
    UPDATE: (state, action) => {
        // update an item,
        // and generate an updated state
        return newState;
    }
};

function doAction(state = initialState, action) {
    return dispatchTable[action.type]
        ? dispatchTable[action.type](state, action)
        : state;
}
```