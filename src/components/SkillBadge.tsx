import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

interface SkillBadgeProp {
    skill: string;
    level: number;
}

export default function SkillBadge (props: SkillBadgeProp) {
    const { skill, level } = props;

    const solidStars = [];
    const emptyStars = [];

    for (let i = 0; i < level; i++) {
        solidStars.push(<FontAwesomeIcon icon={faStar} key={Math.floor(Math.random() * 100000)}/>);
    }
    for (let i = 0; i < 6 - level; i++) {
        emptyStars.push(<FontAwesomeIcon icon={farStar} key={Math.floor(Math.random() * 100000)}/>);
    }

    return <li key={Math.floor(Math.random() * 100000)}>
        <div key={1}>{skill}</div>
        <div key={2}>
            {solidStars.map(i => i)}
            {emptyStars.map(i => i)}
        </div>
    </li>
}