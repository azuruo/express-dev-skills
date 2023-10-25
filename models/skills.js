const skills = [
    { id: 1, name: 'Javascript', expertise: 'Intermediate' },
    { id: 2, name: 'HTML', expertise: 'Intermediate' },
    { id: 3, name: 'CSS', expertise: 'Advanced' },
    { id: 4, name: 'Express', expertise: 'Intermediate' },
    { id: 5, name: 'MongoDB', expertise: 'Beginner' },
    { id: 6, name: 'Mongoose', expertise: 'Beginner' },
]

module.exports = {
    findAll: () => skills,
    findById: (id) => skills.find(skill => skill.id === id),
    add: (skill) => {
        skills.push(skill);
    },
    removeById: (id) => {
        const idx = skills.findIndex(skill => skill.id === id);
        if (idx !== -1) {
            skills.splice(idx, 1);
        }
    }
};