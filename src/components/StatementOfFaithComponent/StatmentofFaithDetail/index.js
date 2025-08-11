import React, { useState } from 'react';
import './style.css';

const StatementOfFaithDetail = () => {
    const [activeTab, setActiveTab] = useState('faith');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'faith':
                return (
                    <ul className="tab-list">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <li key={i}>
                                <strong>Point {i + 1}:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra libero vitae tincidunt commodo. Integer accumsan quam id tellus laoreet, eget malesuada urna efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                            </li>
                        ))}
                    </ul>
                );
            case 'values':
                return (
                    <div className="tab-paragraphs">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nisi nec erat bibendum, ut posuere libero fermentum. Integer scelerisque risus vitae massa congue porta. In condimentum felis sed ante ultrices, a tempus nibh mattis. Pellentesque et dapibus nulla. Duis rutrum, elit ut ultrices fermentum, justo tellus viverra sapien, sed bibendum orci risus et risus.
                        </p>
                        <p>
                            Fusce fermentum, purus ac tincidunt luctus, magna libero tincidunt risus, id blandit augue nulla sit amet purus. Sed venenatis sem et sodales volutpat. Mauris fermentum a neque nec blandit. Suspendisse potenti. Morbi tempor nisl non porta congue. Vivamus commodo metus nec gravida ultrices. Nam luctus augue in eros efficitur, nec tincidunt sapien convallis. Curabitur in tincidunt libero.
                        </p>
                        <p>
                            Morbi pharetra odio justo, ut convallis enim vulputate nec. Aenean sit amet nibh luctus, finibus erat a, ornare est. Curabitur nec eros sit amet lorem laoreet vehicula nec sit amet mauris. Donec egestas, ante sit amet porttitor euismod, sem quam efficitur augue, sit amet lobortis turpis tellus sit amet est. Pellentesque vel varius ipsum, vitae lacinia libero.
                        </p>
                    </div>
                );
            case 'vision':
                return (
                    <div className="tab-paragraphs">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lorem lacinia, blandit mi vel, dapibus justo. Curabitur non tortor at elit pharetra pharetra. Nullam id fermentum metus. Etiam sed orci hendrerit, luctus odio in, imperdiet orci. Duis a sapien a nisi malesuada facilisis. Sed varius pretium justo, ac vehicula eros fermentum in. Integer sed sapien eros.
                        </p>
                        <p>
                            Aenean nec fermentum ante. Pellentesque eu sem ut nulla tempor finibus a nec justo. Morbi laoreet pulvinar fringilla. Integer sollicitudin arcu nec arcu bibendum, nec dapibus augue tincidunt. Aliquam erat volutpat. Nullam vitae nulla ut libero pulvinar vehicula. Ut efficitur velit eget velit placerat feugiat. Etiam sagittis iaculis volutpat. Fusce at cursus augue.
                        </p>
                        <p>
                            Suspendisse ac urna lacinia, egestas leo sed, cursus nulla. Nam suscipit leo sed eros varius efficitur. Nulla vestibulum justo nec quam fringilla, ac euismod odio volutpat. Etiam lobortis rutrum sem, at condimentum nunc. Aenean aliquam at enim a accumsan. Mauris in nunc sed magna ullamcorper egestas. Curabitur bibendum sapien sapien, ac dignissim nunc vehicula in.
                        </p>
                        <p>
                            Quisque ac luctus erat, nec aliquam massa. Curabitur finibus magna vitae sem tristique viverra. Nullam id semper magna. Suspendisse potenti. Aliquam in ipsum felis. Cras varius purus ut urna tristique, ut efficitur lectus bibendum. In volutpat tortor et felis tincidunt posuere. Nunc mattis sodales dolor, vitae porta nisi tempor ac.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="tabs-container">
            <div className="tabs-buttons">
                <button
                    className={activeTab === 'faith' ? 'active' : ''}
                    onClick={() => setActiveTab('faith')}
                >
                    Statement of Faith
                </button>
                <button
                    className={activeTab === 'values' ? 'active' : ''}
                    onClick={() => setActiveTab('values')}
                >
                    Values
                </button>
                <button
                    className={activeTab === 'vision' ? 'active' : ''}
                    onClick={() => setActiveTab('vision')}
                >
                    Vision
                </button>
            </div>
            <div className="tabs-content">{renderTabContent()}</div>
        </div>
    );
};

export default StatementOfFaithDetail;
