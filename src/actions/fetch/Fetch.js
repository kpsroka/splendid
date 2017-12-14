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

// @flow

import CheckResponse from './CheckResponse';
import type { FetchConfig, FetchParams, RequestMethod } from './FetchTypes';
import type { Dispatch, ThunkAction } from '../Actions';
import SetUiMessageAction from '../SetUiMessageAction';

function getRequestPath(target:string, method:RequestMethod, params:FetchParams) {
  switch (method) {
    case 'POST': {
      return target;
    }
    case 'GET': {
      const paramParts = [];
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          paramParts.push(`${param}=${encodeURIComponent(params[param])}`);
        }
      }
      return `${target}?${paramParts.join('&')}`;
    }
    default: {
      throw new Error(`Unrecognized method: ${method}`);
    }
  }
}

function getRequestInit(method:RequestMethod, params:FetchParams) {
  switch (method) {
    case 'POST': {
      const formData = new FormData();
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          formData.append(param, params[param]);
        }
      }
      return { method: 'POST', body: formData };
    }
    case 'GET': {
      return { method: 'GET' };
    }
    default: {
      throw new Error(`Unrecognized method: ${method}`);
    }
  }
}

export default function Fetch(fetchConfig:FetchConfig, params:FetchParams):ThunkAction {
  return (dispatch:Dispatch) => {
    const fetchPromise =
        window.fetch(
            getRequestPath(fetchConfig.target, fetchConfig.method, params),
            getRequestInit(fetchConfig.method, params));

    return CheckResponse(fetchPromise, fetchConfig.rejectEmptyResponse)
      .then(({ response, msg }) => {
        if (msg) {
          dispatch(SetUiMessageAction(msg))
        }
        return response;
      })
      .catch(error => {
        dispatch(SetUiMessageAction(error.message, 'ERROR'));
        throw error;
      });
  }
}
