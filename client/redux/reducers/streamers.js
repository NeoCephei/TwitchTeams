import _ from 'lodash'

/* ====================================================== */
/*                    Implementation                      */
/* ====================================================== */

const INITIAL_STATE = []

const streamers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_STREAMER': {
			const newState = _.includes(state, action.payload) ? state : [...state, action.payload]
			return newState
		}
		case 'REMOVE_STREAMER': {
			const newState = _.filter(state, (i) => i !== action.payload)
			return newState
		}
		case 'RESET_LIST': {
			return INITIAL_STATE
		}
		default:
			return state
	}
}

export default streamers
