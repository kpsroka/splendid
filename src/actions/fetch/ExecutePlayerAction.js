// @flow

import type { GameRef } from '../../model/State';
import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = {
  method: 'POST',
  target: '/game/act',
  rejectEmptyResponse: true
};

export function GetTakeResourcesFetchOpts(gameRef:GameRef, resources:string):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg,
    params: {
      id: gameRef.gameId,
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
    config: FetchCfg,
    params: {
      id: gameRef.gameId,
      playerToken: gameRef.playerToken,
      action: 'TakeFactory',
      payload: `${factoryRow},${factoryIndex}`
    }
  };
}
