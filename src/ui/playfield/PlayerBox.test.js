/*
 * Copyright 2017 K. P. Sroka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { shallow } from 'enzyme';
import React from 'react';
import PlayerBox from './PlayerBox.js';
import PlayerResourceSupplyComponent from './PlayerResourceSupplyComponent.js';
import RESOURCE_COLORS from '../ResourceColorMap.js';

describe('PlayerBox', () => {
  it('displays name and score', () => {
    const playerName = "Aardvark";
    const playerScore = 12321;
    const playerBox = shallow(
        <PlayerBox
            name={playerName} score={playerScore}
            currentPlayer={false}
            playerIndex={0}
            orientation="VERTICAL"
            />
    );

    expect(playerBox.find('[testId="playerName"]').text()).toBe(playerName);
    expect(playerBox.find('[testId="playerScore"]').text()).toBe(`${playerScore}`);
  });

  it('displays PlayerResourceSupplyComponents', () => {
    const playerIndex = 456;
    const playerBox = shallow(
        <PlayerBox
            playerIndex={playerIndex} orientation="VERTICAL"
            name={"whatever"} score={0} currentPlayer={false}
        />
    );

    const resourcesNode = playerBox.find('[testId="resources"]');
    expect(resourcesNode).toBeDefined();

    const supplies = resourcesNode.find(PlayerResourceSupplyComponent);
    expect(supplies.length).toBe(RESOURCE_COLORS.length);

    supplies.forEach((node, index) => {
      // display resources in order
      expect(node.is(`[resource=${index}]`)).toBe(true);
      // orientation should be different from PlayerBox's.
      expect(node.is(`[orientation="HORIZONTAL"]`)).toBe(true);
      // pass on the same player index
      expect(node.is(`[playerIndex=${playerIndex}]`)).toBe(true);
    });
  });

  it('displays current player markers', () => {
    const currentPlayerBox = shallow(
        <PlayerBox
            currentPlayer={true}
            playerIndex={3232} orientation="VERTICAL" name={"whatever"} score={0}
        />
    );

    expect(currentPlayerBox.find('[testId="currentPlayerMarker"]').length).toBeGreaterThan(0);

    const otherPlayerBox = shallow(
        <PlayerBox
            currentPlayer={false}
            playerIndex={3232} orientation="VERTICAL" name={"whatever"} score={0}
        />
    );

    expect(otherPlayerBox.find('[testId="currentPlayerMarker"]').length).toBe(0);
  });
});
