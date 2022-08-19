import { Antd } from "components";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { parseQnaString } from "./QnaParser.hooks";
import { QnA } from "./QnaParser.models";

interface Props {
    setParsedValue?: (qnas: QnA[]) => void;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export default function QnaParser({ value, setParsedValue, onChange }: Props) {
    const [_content, setContent] = useState('');
    const content = value || _content;

    const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = 
        onChange || (e => setContent(e.target.value));
    
    useEffect(() => {
        setParsedValue?.(parseQnaString(content));
    }, [content]);

    return (
        <Antd.Input.TextArea
            autoSize
            placeholder="여기에 QnA 텍스트를 넣어주세요!"
            onChange={onChangeHandler}
            value={content}
        />
    )
}