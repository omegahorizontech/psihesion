import { LOADING, ERROR } from './index';
import { SET_PROFILE, SET_PROFILES, grabProfile, grabProfiles } from './profile';
import { getProfile } from '../services/api';

jest.mock('../services/api');

const RECORD_RESPONSE = {
  data: {
    id: 1,
  },
};

describe('grabProfile', () => {
  it('dispatches LOADING', async () => {
    const dispatch = jest.fn();
    await grabProfile('1')(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: LOADING });
  });
});

describe('grabProfiles', () => {
  it('dispatches LOADING', async () => {
    const dispatch = jest.fn();
    await grabProfiles()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: LOADING });
  });
});
