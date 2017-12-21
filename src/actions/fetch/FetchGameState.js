// @flow

import type { GameRef } from '../../model/State';
import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = gameRefId => ({
  method: 'GET',
  target: `/g/${gameRefId}/state`,
  rejectEmptyResponse: false
});

export function GetFetchOpts(gameRef:GameRef, lastRound:number):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg(gameRef.gameId),
    params: {
      playerToken: gameRef.playerToken,
      lastRound: lastRound.toString(10)
    }
  };
}
