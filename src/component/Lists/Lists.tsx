import React from 'react';
import List from '../List/List';

const Lists = () => {
    const items: string[] = ["Sohel", "Tamim", "Moktadir"];
    const onClick = (text: string): void => alert(text)
    return (
        <div>
            {
                <List items={items} onClick={onClick} />
            }
        </div>
    );
};

export default Lists;