

import React, {Component} from 'react';


class FeedbackMenu extends Component {
    render() {
        return (
        <div>
            <div className="naviagation-bar-vertical-container">
                <ul className='navigation-bar-vertical'>
                    <li><div > 모두 보기</div></li>
                    <li><div >내가 받은 피드백</div ></li>
                    <li><div >등록한 피드백</div ></li>
                </ul>
            </div>  
        </div>

        )
    }
}
export default FeedbackMenu

