/* eslint-disable @typescript-eslint/no-namespace */
import { Coze } from './api.js';
import * as API from './resources/index.js';
import { DEFAULT_BASE_URL } from './constant.js';
import * as Errors from './error.js';
export interface ClientOptions {
  baseURL?: string;
  token: string;
}

export class CozeAPI {
  protected _config: ClientOptions;
  api: Coze;
  baseURL: string;
  token: string;

  constructor(config: ClientOptions) {
    this._config = config;
    this.baseURL = config.baseURL || DEFAULT_BASE_URL;
    this.token = config.token;

    this.api = new Coze({ token: this.token, endpoint: this.baseURL });
  }

  bots: API.Bots = new API.Bots(this);
  chat: API.Chat = new API.Chat(this);
  conversations: API.Conversations = new API.Conversations(this);
  files: API.Files = new API.Files(this);
  workflows: API.Workflows = new API.Workflows(this);
  workspaces: API.Workspaces = new API.Workspaces(this);
  knowledge: API.Knowledge = new API.Knowledge(this);

  static APIError = Errors.APIError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static NotFoundError = Errors.NotFoundError;
  static RateLimitError = Errors.RateLimitError;
  static InternalServerError = Errors.InternalServerError;
  static GatewayError = Errors.GatewayError;
}

export * from './auth.js';

export namespace CozeAPI {
  export import Bots = API.Bots;
  export import Chat = API.Chat;
  export import Conversations = API.Conversations;
  export import Messages = API.Messages;
  export import Files = API.Files;
  export import Workflows = API.Workflows;
  export import Knowledge = API.Knowledge;
}
