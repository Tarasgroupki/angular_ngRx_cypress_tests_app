import { initialAuthState, IAuthState } from "../state/auth.state";
import { AuthActions, EAuthActions } from "../actions/auth.actions";

export const authReducers = (
  state = initialAuthState,
  action: AuthActions
) => {
  switch (action.type) {
    case EAuthActions.Login:
      console.log(action)
      return {
        ...action.payload,
      };
    // case EAuthActions.Register:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
