import { Antd, QnaParser } from "components";
import { QnA } from "components/QnaParser";
import { useEffect, useState } from "react";

export default function ProgramQna() {
    const [parsedQnas, setParsedQnas] = useState<QnA[]>([]);
    const [stringifyQnas, setStringfyQnas] = useState('');
    useEffect(() =>{
        setStringfyQnas(
            JSON.stringify(parsedQnas, null, 4)
        );
    }, [parsedQnas]);


    return (
        <div>
            <Antd.Typography.Title>
                QnA 를 인코딩해주는 툴입니다
            </Antd.Typography.Title>
            <QnaParser setParsedValue={setParsedQnas}/>
            <Antd.Input.TextArea 
                autoSize
                style={{ marginTop: '24px' }}
                value={stringifyQnas}
                onChange={e => setStringfyQnas(e.target.value)}
            />
        </div>
    )
}