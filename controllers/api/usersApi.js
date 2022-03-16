const db =require('../../database/models/');
const sequelize = db.Sequelize;

const usersControllerApi = {
    users: (req,res)=>{
        db.user.findAll({order:[["id", "ASC"]], limit:10})
            .then(users=>{
                let answer = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: '/api/users'
                    },
                    data: users.map(user => {
                        return{
                            id: user.id,
                            first_name: user.first_name,
                            email: user.email,
                            avatar: '/img/avatars/' + user.avatar,
                            detail: '/api/users/' + user.id
                        }
                    })
                }
            res.json(answer)
            })
            .catch(err => {
                res.send(err)
            })
    },
    usersDetail: (req,res) => {
        db.user.findByPk(req.params.id)
        .then(user=>{
            let answer = {
                meta:{
                    status: 200,
                    total: user.id,
                    url: "/api/users/" + user.id
                },
                data: {
                        id: user.id,
                        first_name: user.first_name,
                        email: user.email,
                        avatar: '/img/avatars/' + user.avatar,
                        detail: '/api/users/' + user.id
                    }
                }
                res.json(answer)
        })
        .catch(err => {
            res.send('Este Id no corresponde a un usuario registrado')
        })
    }
}

module.exports = usersControllerApi;