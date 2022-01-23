import DoPost = GoogleAppsScript.Events.DoPost;
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
import DoGet = GoogleAppsScript.Events.DoGet;
import type { MessageEvent, UrlVerificationEvent } from './SlackApi';

type PostData = GoogleAppsScript.Base.Blob & GoogleAppsScript.Events.AppsScriptHttpRequestEventPostData;

const LINE_NOTIFY_END_POINT = 'https://notify-api.line.me/api/notify';

function doPost(e: DoPost) {
  const slackEvent = JSON.parse((e.postData as PostData).getDataAsString()) as UrlVerificationEvent | MessageEvent;
  if (isUrlVerificationEvent(slackEvent)) {
    return ContentService.createTextOutput((slackEvent as UrlVerificationEvent).challenge);
  }

  return notifyToLine((slackEvent as MessageEvent).event.text);
}

function doGet(e: DoGet) {
  notifyToLine('test');
}

function notifyToLine(message: string) {
  const options: URLFetchRequestOptions = {
    method: 'post',
    contentType: 'application/x-www-form-urlencoded',
    headers: {
      Authorization: 'Bearer ' + PropertiesService.getScriptProperties().getProperty('LINE_ACCESS_TOKEN'),
    },
    payload: {
      message: message,
    },
  };

  return UrlFetchApp.fetch(LINE_NOTIFY_END_POINT, options);
}

function isUrlVerificationEvent(event: MessageEvent | UrlVerificationEvent) {
  return event.type === 'url_verification';
}
