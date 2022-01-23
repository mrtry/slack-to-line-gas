export type MessageEvent = {
  token: string;
  team_id: string;
  api_app_id: string;
  event: Event;
  type: string;
  authed_teams: string[];
  event_id: string;
  event_time: number;
};

export type Event = {
  type: string;
  channel: string;
  user: string;
  text: string;
  ts: string;
  event_ts: string;
  channel_type: string;
};

export type UrlVerificationEvent = {
  token: string;
  challenge: string;
  type: string;
};
