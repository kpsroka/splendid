// @flow

import type { GameRef } from '../../model/State';
import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = {
  method: 'GET',
  target: '/game/getState',
  rejectEmptyResponse: false
};

export function GetFetchOpts(gameRef:GameRef, lastRound:number):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg,
    params: {
      id: gameRef.gameId,
      playerToken: gameRef.playerToken,
      lastRound: lastRound.toString(10)
    }
  };
}
