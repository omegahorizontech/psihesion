/* Reserve this for common actions */

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const RESET_ERROR = 'RESET_ERROR';


export const resetError = () => async (dispatch) => {
  await dispatch({ type: RESET_ERROR });
};
