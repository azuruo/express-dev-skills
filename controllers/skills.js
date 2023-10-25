const Skill = require('../models/skills');

module.exports = {
    index: (req, res) => {
        res.render('index', { skills: Skill.findAll(), title: 'Skills' });
    },
    show: (req, res) => {
        const skill = Skill.findById(parseInt(req.params.id, 10));
        if (!skill) {
            return res.status(404).render('error', { message: 'Not Found', error: { status: '404', stack: '' } });
        }
        res.render('show', { skill: skill });
    },
    create: (req, res) => {
        const skills = Skill.findAll();
        const newId = Math.max(...skills.map(skill => skill.id)) + 1;
        const newSkill = { id: newId, ...req.body };
        Skill.add(newSkill);
        res.redirect('/skills');
    },
    delete(req, res) {
        Skill.removeById(parseInt(req.params.id, 10));
        res.redirect('/skills');
    }    
};

