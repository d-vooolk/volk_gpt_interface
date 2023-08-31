import './styles.scss';
import heart from '../../../../static/heart.svg';

const Annotation = () => (
    <div className="annotation">
        Made with
        <img src={heart} alt="heart" className="heart" />
        by
        <a href="https://github.com/d-vooolk" target="_blank" className="link-to-git">d-vooolk</a>
    </div>
);

export default Annotation;