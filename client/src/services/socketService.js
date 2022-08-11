import io from 'socket.io-client';

import { baseURL } from '../configs/urls';

export const socket = io.connect(baseURL);