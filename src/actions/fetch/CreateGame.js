// @flow

import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = {
  method: 'GET',
  target: '/new',
  rejectEmptyResponse: true
};

export function GetFetchOpts(playerName:string, playerCount:number):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg,
    params: {
      playerName,
      playerCount: playerCount.toString(10),
    }
  };
}
