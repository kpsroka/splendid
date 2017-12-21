// @flow

import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = gameRefId => ({
  method: 'GET',
  target: `/g/${gameRefId}/status`,
  rejectEmptyResponse: true
});

export function GetFetchOpts(gameRefId:string):{
  config: FetchConfig,
  params: FetchParams
} {
  return { config: FetchCfg(gameRefId), params: {} };
}
