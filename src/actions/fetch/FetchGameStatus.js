// @flow

import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = {
  method: 'GET',
  rejectEmptyResponse: true,
  target: '/game/getStatus'
};

export function GetFetchOpts(gameRefId:string):{
  config: FetchConfig,
  params: FetchParams
} {
  return { config: FetchCfg, params: { id: gameRefId } };
}
