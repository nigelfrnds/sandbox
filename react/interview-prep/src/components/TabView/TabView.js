import { useState } from 'react';
import PropTypes from 'prop-types';

import './TabView.css';

const TabView = (props) => {
    const tabs = props.children;
    const [activeTab, setActiveTab] = useState(tabs[0].props.label);

    const renderTabHeaders = () => {
        return tabs.map(tab => {
            const { label } = tab.props;
            const isActiveTab = activeTab === label;
            const activeStyle = {
                backgroundColor: '#1976d2',
                color: '#fff'
            };

            return (
                <div key={label} style={isActiveTab ? activeStyle : {}} onClick={() => setActiveTab(label)}>
                    <b>{label}</b>
                </div>
            );
        })
    }

    const renderTabContent = () => {
        const currentActiveTab = tabs.find(tab => tab.props.label === activeTab);
        const activeContent = currentActiveTab.props.children;

        return (
            <>
                {activeContent}
            </>
        );
    }

    return (
        <div className="tabview">
            <div className="tabview__header">{renderTabHeaders()}</div>
            <div className="tabview__content">{renderTabContent()}</div>
        </div>
    );
}

TabView.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
}

const Tab = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

Tab.propTypes = {
    label: PropTypes.string.isRequired
}

export { TabView, Tab };