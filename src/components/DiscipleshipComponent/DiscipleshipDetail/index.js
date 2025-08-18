import React from 'react';
import './style.css';

const DiscipleshipDetail = () => {
    return (
        <div className="content-wrapper">
            <div className="lorem-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis sem at tristique tempor. Morbi porttitor, enim in fermentum porttitor, ante elit efficitur arcu, nec porta risus sapien in nulla. Nullam placerat convallis sem. Suspendisse viverra tincidunt justo in facilisis. Proin malesuada nisi id diam posuere, in tincidunt ante eleifend. Aenean posuere risus nec enim pretium vulputate. Sed dignissim sagittis mauris, vitae ullamcorper mi ultricies id. Integer volutpat fringilla nulla, vel dapibus est placerat ut. Etiam pretium augue eget turpis imperdiet, nec mattis lectus vulputate. Nunc fringilla, nisl in tincidunt ullamcorper, sem risus tincidunt nunc, ut tincidunt erat diam id mi.
                </p>
                <p>
                    Curabitur dictum ex ac sollicitudin iaculis. Mauris eleifend convallis sagittis. Vivamus fringilla nisi purus, vitae fringilla nulla blandit eget. Suspendisse rutrum velit quis nisl bibendum, sed egestas dolor porta. Phasellus id quam elit. Proin non eros ut tortor rhoncus sagittis. In vel magna ac sapien lobortis vestibulum. Sed sed bibendum nulla. Vivamus at scelerisque lectus. Vivamus pretium sagittis ante. Cras ac quam at lorem porttitor imperdiet vitae ut eros. Donec tempor nunc vitae tincidunt varius. Mauris id ligula facilisis, blandit nunc et, varius nisl. Nullam ac orci sed augue fermentum viverra at sed justo.
                </p>
                <p>
                    Aenean ac eros congue, lacinia mi nec, dapibus est. Curabitur convallis imperdiet laoreet. Donec dapibus, nulla in euismod convallis, risus lectus accumsan sem, ut fringilla odio felis ac erat. Nullam tincidunt vehicula ligula vel pulvinar. Integer non lorem quis lorem laoreet pharetra. Aliquam scelerisque velit non leo vehicula, eget imperdiet lacus mattis. Nunc fermentum dui quis odio rutrum, nec convallis nulla sodales. Sed feugiat, erat ac efficitur iaculis, mauris metus vulputate orci, ut vehicula magna quam nec ligula. Integer non pulvinar turpis, nec tempor quam. Proin tincidunt tellus nec fermentum gravida. In sed risus urna. In commodo justo vitae mi sagittis, ac fermentum magna ullamcorper.
                </p>
                <p>
                    Vestibulum lobortis malesuada risus ut tincidunt. Curabitur vitae imperdiet sem. Vestibulum malesuada, nisi sed suscipit efficitur, purus justo varius diam, ut hendrerit lacus elit id ligula. Nulla facilisi. Suspendisse dignissim efficitur sem, nec cursus nulla laoreet nec. Suspendisse vitae ligula at justo rhoncus euismod nec at arcu. Proin scelerisque fermentum purus in dictum. Morbi sed lacus sit amet libero dignissim sodales. Sed tempor facilisis metus, ut ultricies nisi vehicula nec. Integer tempor nisi nec viverra tincidunt. Aenean semper mauris ac nisi placerat, sit amet tincidunt justo pretium.
                </p>
            </div>

            <form className="custom-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" />

                <label htmlFor="choice">What have you said yes to today?</label>
                <select id="choice" name="choice">
                    <option value="one">Reason one</option>
                    <option value="two">Reason Two</option>
                    <option value="three">Reason Three</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="comment">Comment</label>
                <textarea id="comment" name="comment" rows="5" placeholder="Your comment here..." />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DiscipleshipDetail;
