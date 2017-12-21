// @flow

import type { GameRef } from '../../model/State';
import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = gameRefId => ({
  method: 'POST',
  target: `/g/${gameRefId}`,
  rejectEmptyResponse: true
});

export function GetTakeResourcesFetchOpts(gameRef:GameRef, resources:string):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg(gameRef.gameId),
    params: {
      playerToken: gameRef.playerToken,
      action: 'TakeResources',
      payload: resources
    }
  };
}

export function GetTakeFactoryFetchOps(gameRef:GameRef, factoryRow:number, factoryIndex:number):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg(gameRef.gameId),
    params: {
      playerToken: gameRef.playerToken,
      action: 'TakeFactory',
      payload: `${factoryRow},${factoryIndex}`
    }
  };
}
