// @flow

import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = gameRefId => ({
  method: 'POST',
  target: `/g/${gameRefId}/join`,
  rejectEmptyResponse: true
});

export function GetFetchOpts(playerName:string, gameRefId:string):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg(gameRefId),
    params: { playerName }
  };
}
