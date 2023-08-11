import { createSelector } from "@ngrx/store";

import { IAuthState } from "../state/auth.state";

const selectAuth = (state: IAuthState) => state.auth;

export const selectLogin = createSelector(
  selectAuth,
  (state: IAuthState) => state
);
