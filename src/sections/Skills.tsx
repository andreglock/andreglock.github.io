import SkillBadge from "../components/SkillBadge";

export default function Skills () {
    return <section className="languages" id="skills">
        <h2>Skills</h2>
        <div className="col-lg-6 col-12 d-inline-block align-top">
            <h3 className="p-2">Languages I speak</h3>
            <ul>
                <SkillBadge skill={'HTML'} level={6} />
                <SkillBadge skill={'CSS / SCSS'} level={6} />
                <SkillBadge skill={'JavaScript / TypeScript'} level={6} />
                <SkillBadge skill={'Python'} level={4} />
                <SkillBadge skill={'C'} level={2} />
                <SkillBadge skill={'Java'} level={2} />
            </ul>
        </div>
        <div className="col-lg-6  col-12 d-inline-block">
            <h3 className="p-2">Technologies</h3>
            <ul>
                <SkillBadge skill={'Angular'} level={6} />
                <SkillBadge skill={'Nestjs'} level={6} />
                <SkillBadge skill={'ReactJS'} level={5} />
                <SkillBadge skill={'MongoDB'} level={5} />
                <SkillBadge skill={'ExpressJS'} level={4} />
                <SkillBadge skill={'SQL'} level={3} />
                <SkillBadge skill={'Git'} level={5} />
            </ul>
        </div>
    </section>
}