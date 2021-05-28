import { useState } from 'react';
import PropTypes from 'prop-types';

import './TreeView.css';

const TreeView = (props) => {
    return (
        <ul className="treeview">{props.children}</ul>
    );
}

TreeView.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
}

const TreeNode = ({ children, label }) => {
    if (children === undefined) {
        return (
            <li>{label}</li>
        );
    }

    if (Array.isArray(children)) {
        return (
            <li>
                {label}
                <ul>
                    {children.map(child => (
                        <TreeNode label={child.props.label} key={child.props.label}>
                            {child.props.children}
                        </TreeNode>
                    ))}
                </ul>
            </li>
        );
    }

    return (
        <li key={label}>
            {label}
            <ul>
                <TreeNode label={children.props.label}>
                    {children.props.children}
                </TreeNode>
            </ul>
        </li>
    );
}

TreeNode.propTypes = {
    label: PropTypes.string.isRequired
};

export { TreeView, TreeNode };