// @flow

import type { GameRef } from '../../model/State';
import type { FetchConfig, FetchParams } from './FetchTypes';

const FetchCfg = gameRefId => ({
  method: 'GET',
  target: `/g/${gameRefId}/config`,
  rejectEmptyResponse: true
});

export function GetFetchOpts(gameRef:GameRef):{
  config: FetchConfig,
  params: FetchParams
} {
  return {
    config: FetchCfg(gameRef.gameId),
    params: { playerToken: gameRef.playerToken }
  };
}
