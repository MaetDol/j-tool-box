import { Antd } from "components";
import { toRadioOptions } from "./ContentsBlock.hooks";
import { ContentsType, LinkType } from "./ContentsBlock.model";

export default function ContentsBlock() {
    return (
        <Antd.Card hoverable>
            <Antd.Divider orientationMargin={0} orientation="left">Contents url</Antd.Divider>
            <Antd.Input.Group compact style={{ display: 'flex' }}>
                <Antd.Radio.Group 
                    options={toRadioOptions(ContentsType)}
                    defaultValue={ContentsType.Image}
                    optionType="button"
                    buttonStyle="solid"
                    style={{ minWidth: 'fit-content' }}
                />
                <Antd.Input 
                    placeholder="https://url-to-contents"
                />
            </Antd.Input.Group>

            <Antd.Divider orientationMargin={0} orientation="left">Link to navigate by click</Antd.Divider>
            <Antd.Input.Group compact style={{ display: 'flex' }}>
                <Antd.Radio.Group 
                    options={toRadioOptions(LinkType)}
                    defaultValue={LinkType.None}
                    optionType="button"
                    buttonStyle="solid"
                    style={{ minWidth: 'fit-content' }}
                />
                <Antd.Input 
                    placeholder="/program/products/250"
                />
            </Antd.Input.Group>

            <Antd.Input.Group>
                <Antd.Divider orientationMargin={0} orientation="left">Events</Antd.Divider>
                <Antd.Input 
                    addonBefore="Name"
                    placeholder="컨텐츠_이미지 Clicked"
                />

                
                <Antd.Input.Group style={{ display: 'flex', marginTop: '16px' }}>
                    <div style={{ width: '40px' }}/>
                    <Antd.Input 
                        prefix={'{ " '}
                        suffix={'"'}
                        addonAfter=":"
                        placeholder="property name"
                        style={{ flex: '1', minWidth: '240px' }}
                    />
                    <Antd.Input
                        placeholder="property value"
                        suffix="}"
                        style={{ flex: '3', borderLeft: 0 }}
                    />
                    <Antd.Button type="primary">
                        Add
                    </Antd.Button>
                </Antd.Input.Group>

                <Antd.Input.Group style={{ display: 'flex', marginTop: '16px' }}>
                    <div style={{ width: '40px' }}/>
                    <Antd.Input 
                        prefix={'{ " '}
                        suffix={'"'}
                        addonAfter=":"
                        placeholder="property name"
                        style={{ flex: '1', minWidth: '240px' }}
                    />
                    <Antd.Input
                        placeholder="property value"
                        suffix="}"
                        style={{ flex: '3', borderLeft: 0 }}
                    />
                    <Antd.Button type="primary" danger>
                        Delete
                    </Antd.Button>
                </Antd.Input.Group>
            </Antd.Input.Group>
        </Antd.Card>
    );
}