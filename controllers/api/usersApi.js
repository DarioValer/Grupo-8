// const db =require('../../database/models/');
// //const sequelize = db.Sequelize;

// const usersControllerApi = {
//     users: (req,res)=>{
//         db.user.findAll({attributes: ['id', 'first_name', 'last_name', 'user_alias', 'email', 'avatar' ]})
//         //{order:[["id", "ASC"]], limit:10}
//             .then(users=>{
//                  let answer = {
//                         count: users.length,
//                         users: users,
//                          }
//                 //     meta: {
//                 //         status: 200,
//                 //         total: users.length,
//                 //         url: '/api/users'
//                 //     },
//                 //     data: users.map(user => {
//                 //         return{
//                 //             id: user.id,
//                 //             first_name: user.first_name,
//                 //             email: user.email,
//                 //             avatar: '/img/avatars/' + user.avatar,
//                 //             detail: '/api/users/' + user.id
//                 //         }
//                 //     })
                 
//             res.json(answer)
//             })
//             .catch(err => {
//                 res.send(err)
//             })
//     },
//     usersDetail: (req,res) => {
//         db.user.findByPk(req.params.id)
//         .then(user=>{
//             let answer = {
//                 meta:{
//                     status: 200,
//                     total: user.id,
//                     url: "/api/users/" + user.id
//                 },
//                 data: {
//                         id: user.id,
//                         first_name: user.first_name,
//                         email: user.email,
//                         avatar: '/img/avatars/' + user.avatar,
//                         detail: '/api/users/' + user.id
//                     }
//                 }
//                 res.json(answer)
//         })
//         .catch(err => {
//             res.send('Este Id no corresponde a un usuario registrado')
//         })
//     }
// }

// module.exports = usersControllerApi;


const db = require('../../database/models/index');

const usersControllerApi = {
    users: (req, res) => {
      db.user.findAll({attributes: ['id', 'first_name', 'last_name', 'user_alias', 'email', 'avatar' ]})
       .then ( users => {
           return res.status(200).json({
               count: users.length,
               users: users
           })
       })  
    },
    
    usersDetail: (req, res) => {
		db.user.findByPk(req.params.id, {attributes: ['id', 'first_name', 'last_name', 'user_alias', 'email', 'avatar' ]})
		.then(user => {
			return res.status(200).json({
                user: user
			 
			})
		})
	   .catch(err => {
		res.send(err)
	})
	}

}


module.exports = usersControllerApi;