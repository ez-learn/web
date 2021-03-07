import {ReactNode, useState} from "react";
import {TabButton} from "./TabButton";
interface TabProps {
    buttons: {name: string, key: string}[];
    items: {key: string, node: any}[];
}
export default function Tab(props: TabProps) {
    const [selectedTab, setSelectedTab] = useState(props.buttons[0].key);
    return (
        <>
            <div>
                {
                    props.buttons.map((button) => <TabButton
                        selected={selectedTab === button.key}
                        name={button.name} onTabSelected={() => {setSelectedTab(button.key)}} key={button.key}/>)
                }
            </div>
            <div>
                {
                    props.items.find((item) => item.key === selectedTab)?.node
                }
            </div>
        </>
    );
}