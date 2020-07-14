import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import './Spinner.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

export default function Spinner() {
    return (
        <>
            <Spin indicator={antIcon} />
        </>
    );
}