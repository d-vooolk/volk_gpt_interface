import './styles.scss';
import heart from '../../../../static/heart.svg';
import {AUTHOR_GITHUB_URL} from "../../../../constants/textConstants";

const Annotation = () => (
    <div className="annotation">
        Made with
        <img src={heart} alt="heart" className="heart" />
        by
        <a href={AUTHOR_GITHUB_URL} target="_blank" rel="noreferrer noopener" className="link-to-git">d-vooolk</a>
    </div>
);

export default Annotation;