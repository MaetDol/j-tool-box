import { Antd, ContentsBlock } from "components";
import { ContentsBlockData, ContentsType, LinkType } from "components/ContentsBlock";
import { useState } from "react";

export default function ProgramContentsBlock() {
    const [contentsBlocks, setContentsBlocks] = useState<ContentsBlockData[]>([]);
    const addContentsBlock = () => {
        setContentsBlocks([
            ...contentsBlocks, 
            {
                contentsType: ContentsType.Image,
                contentsUrl: '',
                eventName: '',
                eventProperties: {},
                linkType: LinkType.None,
                linkUrl: '',
                id: Date.now(),
            }
        ]);
    };
    const setData = (index: number) => (data: ContentsBlockData | undefined) => {
        if(!data) {
            contentsBlocks.splice(index, 1);
        } else {
            contentsBlocks[index] = data;
        }
        setContentsBlocks([...contentsBlocks]);
    }

    return (
        <div style={{ padding: '32px', display: 'flex', flexFlow: 'column', gap: '16px' }}>
            <Antd.Row align="middle">
                <Antd.Button 
                    type="primary"
                    size="large"
                    onClick={addContentsBlock}
                    style={{ marginRight: '16px' }}
                >
                    Add Contents Block
                </Antd.Button>
                <Antd.Button
                    size="large"
                    style={{ marginRight: '16px' }}
                >
                    Copy
                </Antd.Button>
                <Antd.Typography.Paragraph style={{ margin: 0 }}>- You can reordering by Drag and Drop</Antd.Typography.Paragraph>
            </Antd.Row>

            {contentsBlocks.map((data, index) => (
                <ContentsBlock 
                    key={data.id}
                    data={data} 
                    setData={setData(index)}
                />
            ))}
        </div>
    );
}