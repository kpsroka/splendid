// @flow

import type { GameRef } from '../../model/State';
import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = {
  method: 'GET',
  target: '/game/getConfig',
  rejectEmptyResponse: true
};

export function GetFetchOpts(gameRef:GameRef):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg,
    params: {
      id: gameRef.gameId,
      playerToken: gameRef.playerToken,
    }
  };
}
