import clsx from 'clsx';
interface TabButtonProps {
    name: string;
    selected: boolean;
    onTabSelected: () => void
}
export function TabButton(props: TabButtonProps) {
    return (
        <button
            className={clsx((props.selected ? 'border-b-4 border-blue-800' : ''), 'px-4', 'py-2', 'mx-3', 'focus:outline-none')}
            onClick={props.onTabSelected}>{props.name}</button>
    );
}