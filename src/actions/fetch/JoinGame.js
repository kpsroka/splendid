// @flow

import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = {
  method: 'POST',
  target: '/game/join',
  rejectEmptyResponse: true
};

export function GetFetchOpts(playerName:string, gameRefId:string):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg,
    params: {
      id: gameRefId,
      playerName
    }
  };
}
