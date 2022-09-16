import {
  ContentsBlockData,
  RawContentsBlockData,
} from "components/ContentsBlock";
import { Properties } from "components/PropertyItems";

function objectToProperties(obj: Object): Properties {
  return Object.entries(obj).reduce(
    (properties, keyValuePair, i): Properties =>
      Object.assign(properties, { [i]: keyValuePair }),
    {}
  );
}

function rawDataToContentsBlock({
  contents_type,
  contents_url,
  event_name,
  event_properties,
  link_type,
  link_url,
}: RawContentsBlockData): ContentsBlockData {
  return {
    contentsType: contents_type,
    contentsUrl: contents_url,
    eventName: event_name,
    eventProperties: objectToProperties(event_properties || {}),
    linkType: link_type,
    linkUrl: link_url,
  };
}

export function contentsBlocksFromJson(
  json: string
): string | ContentsBlockData[] {
  let parsedJson: RawContentsBlockData[];
  try {
    parsedJson = JSON.parse(json);
  } catch (e) {
    console.error(e);
    return "JSON 파싱에 실패했어요";
  }

  if (!Array.isArray(parsedJson)) {
    return "컨텐츠 블럭 타입이 잘못됐어요. 배열로 주세요!";
  }

  const contentsBlocks = parsedJson.map(rawDataToContentsBlock);
  return contentsBlocks;
}
